import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from "recharts";
import { useAllStudents, useAllEnrollments, useAdminAnalytics } from "@/hooks/useDatabase";

const COLORS = ["hsl(28,100%,50%)", "hsl(36,100%,50%)", "hsl(200,80%,50%)", "hsl(150,60%,45%)", "hsl(280,60%,55%)", "hsl(0,70%,55%)", "hsl(60,80%,45%)"];

export default function AdminAnalytics() {
  const { data: students = [], isLoading: sLoading } = useAllStudents();
  const { data: enrollments = [], isLoading: eLoading } = useAllEnrollments();
  const { data: analytics, isLoading: aLoading } = useAdminAnalytics();

  // Enrollment status breakdown
  const statusData = useMemo(() => {
    const counts: Record<string, number> = { active: 0, expired: 0, unenrolled: 0 };
    enrollments.forEach(e => { counts[e.status] = (counts[e.status] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [enrollments]);

  // Enrollments by program
  const programEnrollments = useMemo(() => {
    const counts: Record<string, number> = {};
    enrollments.filter(e => e.type === "program").forEach(e => {
      counts[e.target_id] = (counts[e.target_id] || 0) + 1;
    });
    return Object.entries(counts).map(([id, value]) => ({
      name: id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
      value,
    })).sort((a, b) => b.value - a.value).slice(0, 8);
  }, [enrollments]);

  // Enrollment timeline (by month)
  const enrollmentTimeline = useMemo(() => {
    const monthMap: Record<string, number> = {};
    enrollments.forEach(e => {
      const month = e.enrolled_at.slice(0, 7);
      monthMap[month] = (monthMap[month] || 0) + 1;
    });
    return Object.entries(monthMap)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .slice(-12)
      .map(([month, count]) => ({ month: month.slice(5), count }));
  }, [enrollments]);

  if (sLoading || eLoading || aLoading) {
    return (
      <div className="p-6 max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">Platform-wide performance insights</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{analytics?.totalStudents || 0}</p>
          <p className="text-xs text-muted-foreground">Total Students</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{analytics?.activeEnrollments || 0}</p>
          <p className="text-xs text-muted-foreground">Active Enrollments</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{analytics?.totalProgress || 0}</p>
          <p className="text-xs text-muted-foreground">Topics Completed</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{(analytics?.totalStudents || 0) > 0 ? Math.round((analytics?.totalProgress || 0) / (analytics?.totalStudents || 1) * 10) / 10 : 0}</p>
          <p className="text-xs text-muted-foreground">Avg Topics/Student</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Status */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Enrollment Status Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label={({ name, value }) => `${name}: ${value}`}>
                {statusData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Program Enrollments */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Top Programs by Enrollment</h3>
          {programEnrollments.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={programEnrollments} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 11 }} allowDecimals={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={120} />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(28,100%,50%)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">No data yet</p>
          )}
        </div>
      </div>

      {/* Enrollment Timeline */}
      {enrollmentTimeline.length > 1 && (
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Enrollment Timeline</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={enrollmentTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="hsl(28,100%,50%)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
