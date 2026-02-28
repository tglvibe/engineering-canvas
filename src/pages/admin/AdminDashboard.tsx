import { Users, BookOpen, Clock, GraduationCap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useAdminAnalytics, useAllStudents } from "@/hooks/useDatabase";

const COLORS = ["hsl(28,100%,50%)", "hsl(36,100%,50%)", "hsl(200,80%,50%)", "hsl(150,60%,45%)", "hsl(280,60%,55%)", "hsl(0,70%,55%)"];

export default function AdminDashboard() {
  const { data: analytics, isLoading: analyticsLoading } = useAdminAnalytics();
  const { data: students = [], isLoading: studentsLoading } = useAllStudents();

  if (analyticsLoading || studentsLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const yearData = Object.entries(analytics?.yearDistribution || {}).map(([name, value]) => ({ name, value }));
  const deptData = Object.entries(analytics?.departmentDistribution || {}).map(([name, value]) => ({ name, value }));

  const stats = [
    { label: "Total Students", value: analytics?.totalStudents || 0, icon: Users, color: "text-primary" },
    { label: "Active Enrollments", value: analytics?.activeEnrollments || 0, icon: BookOpen, color: "text-emerald-500" },
    { label: "Expired Enrollments", value: analytics?.expiredEnrollments || 0, icon: Clock, color: "text-destructive" },
    { label: "Topics Completed", value: analytics?.totalProgress || 0, icon: GraduationCap, color: "text-accent" },
  ];

  const recentStudents = [...students].sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-sm text-muted-foreground">Overview of your university platform</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Students by Year</h3>
          {yearData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={yearData}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(28,100%,50%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">No student data yet</p>
          )}
        </div>

        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Students by Department</h3>
          {deptData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={deptData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label={({ name, value }) => `${name}: ${value}`}>
                  {deptData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">No student data yet</p>
          )}
        </div>
      </div>

      {/* Recent Students */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Recently Added Students</h3>
        {recentStudents.length > 0 ? (
          <div className="space-y-2">
            {recentStudents.map((s: any) => (
              <div key={s.id} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-secondary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {s.avatar || "??"}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{s.name}</p>
                    <p className="text-[11px] text-muted-foreground">{s.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{s.university?.department || "—"}</p>
                  <p className="text-[11px] text-muted-foreground">{s.university?.year || "—"}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">No students yet</p>
        )}
      </div>
    </div>
  );
}
