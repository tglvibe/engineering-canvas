import { useState, useMemo } from "react";
import { Plus, X, Clock, CheckCircle, XCircle, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useAllEnrollments, useAllStudents, useCreateEnrollment, useUnenroll } from "@/hooks/useDatabase";
import { programs, courses } from "@/data/hierarchy";

function EnrollForm({ students, onSave, onCancel }: { students: any[]; onSave: (data: any) => void; onCancel: () => void }) {
  const [studentId, setStudentId] = useState("");
  const [type, setType] = useState<"program" | "course">("program");
  const [targetId, setTargetId] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [expiryDate, setExpiryDate] = useState("");
  const [error, setError] = useState("");

  const targets = type === "program" ? programs : courses;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId || !targetId || !startDate || !expiryDate) {
      setError("All fields are required");
      return;
    }
    if (new Date(expiryDate) <= new Date(startDate)) {
      setError("Expiry date must be after start date");
      return;
    }
    onSave({
      student_id: studentId,
      type,
      target_id: targetId,
      start_date: new Date(startDate).toISOString(),
      expiry_date: new Date(expiryDate).toISOString(),
    });
  };

  const inputClass = "w-full px-3 py-2 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm p-4">
      <motion.form initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onSubmit={handleSubmit}
        className="bg-card border border-border rounded-2xl p-6 w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">New Enrollment</h2>
          <button type="button" onClick={onCancel} className="p-1 hover:bg-secondary rounded-lg"><X className="w-4 h-4" /></button>
        </div>
        {error && <p className="text-sm text-destructive bg-destructive/5 p-2 rounded-lg">{error}</p>}

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Student</label>
          <select value={studentId} onChange={e => setStudentId(e.target.value)} className={inputClass}>
            <option value="">Select student</option>
            {students.map(s => <option key={s.user_id} value={s.user_id}>{s.name} ({s.university?.student_id || s.email})</option>)}
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Enrollment Type</label>
          <div className="flex gap-2">
            {(["program", "course"] as const).map(t => (
              <button key={t} type="button" onClick={() => { setType(t); setTargetId(""); }}
                className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all ${type === t ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                {t === "program" ? "Program" : "Course"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">{type === "program" ? "Program" : "Course"}</label>
          <select value={targetId} onChange={e => setTargetId(e.target.value)} className={inputClass}>
            <option value="">Select {type}</option>
            {targets.map(t => <option key={t.id} value={t.id}>{t.titleKey.split(".").pop()} — {t.id}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Start Date</label>
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Expiry Date</label>
            <input type="date" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} className={inputClass} />
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button type="button" onClick={onCancel} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-secondary">Cancel</button>
          <button type="submit" className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-semibold hover:opacity-90">Enroll</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

const statusConfig: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  active: { icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-500/10", label: "Active" },
  expired: { icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10", label: "Expired" },
  unenrolled: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10", label: "Unenrolled" },
};

export default function EnrollmentManagement() {
  const { data: enrollments = [], refetch } = useAllEnrollments();
  const { data: students = [] } = useAllStudents();
  const createEnrollment = useCreateEnrollment();
  const unenrollMutation = useUnenroll();
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const studentMap = useMemo(() => {
    const map: Record<string, any> = {};
    students.forEach(s => { map[s.user_id] = s; });
    return map;
  }, [students]);

  const filtered = useMemo(() => {
    return enrollments.filter(e => {
      if (filterStatus && e.status !== filterStatus) return false;
      if (search) {
        const student = studentMap[e.student_id];
        const term = search.toLowerCase();
        if (!student?.name.toLowerCase().includes(term) && !e.target_id.toLowerCase().includes(term)) return false;
      }
      return true;
    });
  }, [enrollments, search, filterStatus, studentMap]);

  const handleCreate = async (data: any) => {
    await createEnrollment.mutateAsync(data);
    setShowForm(false);
  };

  const handleUnenroll = async (id: string) => {
    await unenrollMutation.mutateAsync(id);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Enrollment Management</h1>
          <p className="text-sm text-muted-foreground">{enrollments.length} total enrollments</p>
        </div>
        <button onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90">
          <Plus className="w-4 h-4" /> New Enrollment
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by student or target..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/20" />
        </div>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="px-2.5 py-1.5 rounded-lg border border-border bg-background text-xs focus:outline-none">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
          <option value="unenrolled">Unenrolled</option>
        </select>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Student</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Type</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">Target</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">Start</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">Expiry</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(e => {
                const student = studentMap[e.student_id];
                const cfg = statusConfig[e.status] || statusConfig.active;
                const StatusIcon = cfg.icon;
                return (
                  <tr key={e.id} className="border-b border-border last:border-0 hover:bg-secondary/20">
                    <td className="px-4 py-3">
                      <p className="font-medium text-foreground">{student?.name || "Unknown"}</p>
                      <p className="text-[11px] text-muted-foreground">{student?.university?.student_id || ""}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-secondary text-foreground capitalize">{e.type}</span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell font-mono text-xs">{e.target_id}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell text-xs">{new Date(e.start_date).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell text-xs">{new Date(e.expiry_date).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${cfg.bg} ${cfg.color}`}>
                        <StatusIcon className="w-3 h-3" /> {cfg.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {e.status === "active" && (
                        <button onClick={() => handleUnenroll(e.id)} className="text-xs text-destructive hover:underline">Unenroll</button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">No enrollments found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {showForm && <EnrollForm students={students} onSave={handleCreate} onCancel={() => setShowForm(false)} />}
      </AnimatePresence>
    </div>
  );
}
