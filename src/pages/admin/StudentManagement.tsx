import { useState, useMemo } from "react";
import { Plus, Search, Pencil, Trash2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAllStudents } from "@/hooks/useDatabase";
import { supabase } from "@/integrations/supabase/client";
import {
  DEPARTMENTS, SPECIALIZATIONS, YEARS, PROGRAM_TYPES,
} from "@/data/store";

function StudentForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name || "");
  const [email, setEmail] = useState(initial?.email || "");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState<string>(initial?.university?.year || "Year 1");
  const [programType, setProgramType] = useState<string>(initial?.university?.program_type || "B.Tech Regular");
  const [department, setDepartment] = useState(initial?.university?.department || DEPARTMENTS[0]);
  const [specialization, setSpecialization] = useState(initial?.university?.specialization || "");
  const [studentId, setStudentId] = useState(initial?.university?.student_id || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const specs = SPECIALIZATIONS[department] || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !studentId.trim()) {
      setError("Name, email, and student ID are required");
      return;
    }
    if (!initial && !password.trim()) {
      setError("Password is required for new students");
      return;
    }
    setLoading(true);
    try {
      await onSave({
        name, email, password,
        university: { year, program_type: programType, department, specialization, student_id: studentId },
      });
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const inputClass = "w-full px-3 py-2 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/20";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm p-4">
      <motion.form initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} onSubmit={handleSubmit}
        className="bg-card border border-border rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">{initial ? "Edit Student" : "Add Student"}</h2>
          <button type="button" onClick={onCancel} className="p-1 hover:bg-secondary rounded-lg"><X className="w-4 h-4" /></button>
        </div>
        {error && <p className="text-sm text-destructive bg-destructive/5 p-2 rounded-lg">{error}</p>}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Full Name *</label>
            <input value={name} onChange={e => setName(e.target.value)} className={inputClass} placeholder="John Doe" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Email *</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputClass} placeholder="student@uni.edu" disabled={!!initial} />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">{initial ? "New Password (optional)" : "Password *"}</label>
            <input value={password} onChange={e => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Student ID *</label>
            <input value={studentId} onChange={e => setStudentId(e.target.value)} className={inputClass} placeholder="TGL2024XXX" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Year</label>
            <select value={year} onChange={e => setYear(e.target.value)} className={inputClass}>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Program Type</label>
            <select value={programType} onChange={e => setProgramType(e.target.value)} className={inputClass}>
              {PROGRAM_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Department</label>
            <select value={department} onChange={e => { setDepartment(e.target.value); setSpecialization(""); }} className={inputClass}>
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className="col-span-2">
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Specialization</label>
            <select value={specialization} onChange={e => setSpecialization(e.target.value)} className={inputClass}>
              <option value="">Select specialization</option>
              {specs.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <button type="button" onClick={onCancel} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors">Cancel</button>
          <button type="submit" disabled={loading} className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50">
            {loading ? "Saving..." : initial ? "Save Changes" : "Create Student"}
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default function StudentManagement() {
  const { data: students = [], refetch } = useAllStudents();
  const [search, setSearch] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [filterProg, setFilterProg] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editStudent, setEditStudent] = useState<any | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return students.filter(s => {
      if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.email.toLowerCase().includes(search.toLowerCase()) && !s.university?.student_id?.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterYear && s.university?.year !== filterYear) return false;
      if (filterDept && s.university?.department !== filterDept) return false;
      if (filterProg && s.university?.program_type !== filterProg) return false;
      return true;
    });
  }, [students, search, filterYear, filterDept, filterProg]);

  const handleCreate = async (data: any) => {
    // Create user via edge function
    const res = await supabase.functions.invoke("create-student", {
      body: data,
    });
    if (res.error) throw new Error(res.error.message);
    if (res.data?.error) throw new Error(res.data.error);
    await refetch();
    setShowForm(false);
  };

  const handleUpdate = async (data: any) => {
    if (!editStudent) return;
    // Update profile
    await supabase.from("profiles").update({
      name: data.name,
    }).eq("user_id", editStudent.user_id);

    // Update university
    await supabase.from("student_university").upsert({
      user_id: editStudent.user_id,
      ...data.university,
    }, { onConflict: "user_id" });

    await refetch();
    setEditStudent(null);
  };

  const handleDelete = async (userId: string) => {
    // Delete via edge function (needs service role to delete auth user)
    await supabase.functions.invoke("delete-student", {
      body: { user_id: userId },
    });
    await refetch();
    setDeleteConfirm(null);
  };

  const selectClass = "px-2.5 py-1.5 rounded-lg border border-border bg-background text-xs text-foreground focus:outline-none";

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Student Management</h1>
          <p className="text-sm text-muted-foreground">{students.length} students registered</p>
        </div>
        <button onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">
          <Plus className="w-4 h-4" /> Add Student
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, email, ID..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/20" />
        </div>
        <select value={filterYear} onChange={e => setFilterYear(e.target.value)} className={selectClass}>
          <option value="">All Years</option>
          {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select value={filterDept} onChange={e => setFilterDept(e.target.value)} className={selectClass}>
          <option value="">All Departments</option>
          {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={filterProg} onChange={e => setFilterProg(e.target.value)} className={selectClass}>
          <option value="">All Programs</option>
          {PROGRAM_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">Student</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden sm:table-cell">ID</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">Year</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden md:table-cell">Department</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground hidden lg:table-cell">Program</th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.user_id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{s.avatar}</div>
                      <div>
                        <p className="font-medium text-foreground">{s.name}</p>
                        <p className="text-[11px] text-muted-foreground">{s.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell font-mono text-xs">{s.university?.student_id || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{s.university?.year || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{s.university?.department || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell text-xs">{s.university?.program_type || "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => setEditStudent(s)} className="p-1.5 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => setDeleteConfirm(s.user_id)} className="p-1.5 hover:bg-destructive/5 rounded-lg text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {(showForm || editStudent) && (
          <StudentForm
            initial={editStudent || undefined}
            onSave={editStudent ? handleUpdate : handleCreate}
            onCancel={() => { setShowForm(false); setEditStudent(null); }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {deleteConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-card border border-border rounded-2xl p-6 w-full max-w-sm space-y-4">
              <h3 className="text-lg font-bold text-foreground">Delete Student?</h3>
              <p className="text-sm text-muted-foreground">This will remove the student, their enrollments, and all progress data. This action cannot be undone.</p>
              <div className="flex gap-2">
                <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-secondary">Cancel</button>
                <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 bg-destructive text-destructive-foreground py-2.5 rounded-xl text-sm font-semibold hover:opacity-90">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
