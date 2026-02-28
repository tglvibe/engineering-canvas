import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, CartesianGrid } from "recharts";
import {
  getStudents, getAllEnrollments, getAllProgress, getStudentProgress, refreshEnrollmentStatuses,
  StoredUser,
} from "@/data/store";
import { programs, courses } from "@/data/hierarchy";

const COLORS = ["hsl(28,100%,50%)", "hsl(36,100%,50%)", "hsl(200,80%,50%)", "hsl(150,60%,45%)", "hsl(280,60%,55%)", "hsl(0,70%,55%)", "hsl(60,80%,45%)"];

export default function AdminAnalytics() {
  const students = useMemo(() => getStudents(), []);
  const enrollments = useMemo(() => { refreshEnrollmentStatuses(); return getAllEnrollments(); }, []);
  const progress = useMemo(() => getAllProgress(), []);

  // Enrollment status breakdown
  const statusData = useMemo(() => {
    const counts = { active: 0, expired: 0, unenrolled: 0 };
    enrollments.forEach(e => { counts[e.status]++; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [enrollments]);

  // Enrollments by program
  const programEnrollments = useMemo(() => {
    const counts: Record<string, number> = {};
    enrollments.filter(e => e.type === "program").forEach(e => {
      counts[e.targetId] = (counts[e.targetId] || 0) + 1;
    });
    return Object.entries(counts).map(([id, value]) => ({
      name: id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
      value,
    })).sort((a, b) => b.value - a.value).slice(0, 8);
  }, [enrollments]);

  // Year-wise completion
  const yearCompletion = useMemo(() => {
    const yearMap: Record<string, { total: number; completed: number }> = {};
    students.forEach(s => {
      const year = s.university?.year || "Unknown";
      if (!yearMap[year]) yearMap[year] = { total: 0, completed: 0 };
      yearMap[year].total++;
      const sp = progress.filter(p => p.studentId === s.id);
      if (sp.length > 0) yearMap[year].completed++;
    });
    return Object.entries(yearMap).map(([name, data]) => ({
      name,
      students: data.total,
      active: data.completed,
    }));
  }, [students, progress]);

  // Department performance
  const deptPerformance = useMemo(() => {
    const deptMap: Record<string, { students: number; topics: number }> = {};
    students.forEach(s => {
      const dept = s.university?.department || "Unknown";
      if (!deptMap[dept]) deptMap[dept] = { students: 0, topics: 0 };
      deptMap[dept].students++;
      deptMap[dept].topics += progress.filter(p => p.studentId === s.id).length;
    });
    return Object.entries(deptMap).map(([name, data]) => ({
      name,
      avgTopics: data.students > 0 ? Math.round(data.topics / data.students * 10) / 10 : 0,
    }));
  }, [students, progress]);

  // Enrollment timeline (by month)
  const enrollmentTimeline = useMemo(() => {
    const monthMap: Record<string, number> = {};
    enrollments.forEach(e => {
      const month = e.enrolledAt.slice(0, 7);
      monthMap[month] = (monthMap[month] || 0) + 1;
    });
    return Object.entries(monthMap)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .slice(-12)
      .map(([month, count]) => ({ month: month.slice(5), count }));
  }, [enrollments]);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">Platform-wide performance insights</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{students.length}</p>
          <p className="text-xs text-muted-foreground">Total Students</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{enrollments.filter(e => e.status === "active").length}</p>
          <p className="text-xs text-muted-foreground">Active Enrollments</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{progress.length}</p>
          <p className="text-xs text-muted-foreground">Topics Completed</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-2xl font-bold text-foreground">{students.length > 0 ? Math.round(progress.length / students.length * 10) / 10 : 0}</p>
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

        {/* Year-wise Activity */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Year-wise Student Activity</h3>
          {yearCompletion.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={yearCompletion}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="students" fill="hsl(200,80%,50%)" radius={[6, 6, 0, 0]} name="Total" />
                <Bar dataKey="active" fill="hsl(150,60%,45%)" radius={[6, 6, 0, 0]} name="Active Learners" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">No data yet</p>
          )}
        </div>

        {/* Department Performance */}
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Avg Topics per Student by Department</h3>
          {deptPerformance.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={deptPerformance}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="avgTopics" fill="hsl(36,100%,50%)" radius={[6, 6, 0, 0]} />
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
