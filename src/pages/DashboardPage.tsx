import { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BarChart3, Target, TrendingUp,
  Award, Calendar, CheckCircle, BookOpen, Clock, Lock
} from "lucide-react";
import AppHeader from "@/components/AppHeader";
import { useAuth } from "@/contexts/AuthContext";
import { useStudentEnrollments, useActiveEnrollments, useStudentProgress, useStudentActivity } from "@/hooks/useDatabase";
import { getProgramById, getCourseById, courses as allCourses } from "@/data/hierarchy";

const getMasteryColor = (v: number) => {
  if (v >= 80) return "bg-primary";
  if (v >= 60) return "bg-primary/80";
  if (v >= 40) return "bg-accent";
  if (v >= 20) return "bg-accent/70";
  return "bg-secondary";
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, authUser } = useAuth();

  const { data: allEnrollments = [] } = useStudentEnrollments();
  const { data: activeEnrollments = [] } = useActiveEnrollments();
  const { data: progressRecords = [] } = useStudentProgress();
  const { data: activityLogs = [] } = useStudentActivity();

  const expiredEnrollments = useMemo(() => allEnrollments.filter(e => e.status === "expired"), [allEnrollments]);

  // Compute enrolled courses
  const enrolledCourseIds = useMemo(() => {
    const ids = new Set<string>();
    activeEnrollments.forEach(e => {
      if (e.type === "course") {
        ids.add(e.target_id);
      } else if (e.type === "program") {
        const prog = getProgramById(e.target_id);
        prog?.courseIds.forEach(cid => ids.add(cid));
      } else if (e.type === "track") {
        allCourses.filter(c => c.trackId === e.target_id).forEach(c => ids.add(c.id));
      }
    });
    return ids;
  }, [activeEnrollments]);

  // Compute per-course progress
  const courseProgress = useMemo(() => {
    const result: { courseId: string; name: string; completed: number; total: number; percent: number }[] = [];
    enrolledCourseIds.forEach(cid => {
      const course = getCourseById(cid);
      if (!course) return;
      const topicsCompleted = progressRecords.filter(p => p.course_id === cid).length;
      const estimatedTotal = (course.moduleCount || 4) * 5;
      result.push({
        courseId: cid,
        name: course.titleKey,
        completed: topicsCompleted,
        total: estimatedTotal,
        percent: estimatedTotal > 0 ? Math.round((topicsCompleted / estimatedTotal) * 100) : 0,
      });
    });
    return result;
  }, [enrolledCourseIds, progressRecords]);

  const totalTopicsCompleted = progressRecords.length;
  const totalCoursesEnrolled = enrolledCourseIds.size;
  const overallPercent = useMemo(() => {
    if (courseProgress.length === 0) return 0;
    const totalCompleted = courseProgress.reduce((sum, c) => sum + c.completed, 0);
    const totalTopics = courseProgress.reduce((sum, c) => sum + c.total, 0);
    return totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
  }, [courseProgress]);

  const totalTimeSpent = useMemo(() => activityLogs.reduce((sum, a) => sum + (a.duration || 0), 0), [activityLogs]);
  const totalMinutes = Math.round(totalTimeSpent / 60);
  const totalHours = Math.round(totalMinutes / 60);

  const weeklyActivity = useMemo(() => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const now = new Date();
    const result: { day: string; count: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      const dayEnd = new Date(dayStart.getTime() + 86400000);
      const count = activityLogs.filter(a => {
        const ts = new Date(a.created_at);
        return ts >= dayStart && ts < dayEnd;
      }).length;
      result.push({ day: days[d.getDay()], count });
    }
    return result;
  }, [activityLogs]);

  const maxWeekly = Math.max(...weeklyActivity.map(w => w.count), 1);
  const hasData = activeEnrollments.length > 0 || progressRecords.length > 0;

  const stats = [
    { label: t("dashboard.topicsMastered"), value: String(totalTopicsCompleted), icon: Target, color: "text-primary" },
    { label: "Courses Enrolled", value: String(totalCoursesEnrolled), icon: BookOpen, color: "text-accent" },
    { label: "Active Enrollments", value: String(activeEnrollments.length), icon: CheckCircle, color: "text-primary" },
    { label: "Expired", value: String(expiredEnrollments.length), icon: Lock, color: "text-destructive" },
    { label: "Time Spent", value: totalHours > 0 ? `${totalHours}h` : `${totalMinutes}m`, icon: Clock, color: "text-primary" },
    { label: "Overall Progress", value: `${overallPercent}%`, icon: TrendingUp, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t("dashboard.title")} backTo="/explore" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {!hasData && (
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center mb-8">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-lg font-bold text-foreground">No learning data yet</h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                You haven't been enrolled in any programs or courses yet. Contact your administrator to get started.
              </p>
            </div>
          )}

          {hasData && (
            <>
              {/* Overall Progress Hero */}
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Overall Progress</h2>
                    <div className="text-4xl sm:text-5xl font-bold text-foreground mt-1">
                      {overallPercent}<span className="text-xl sm:text-2xl text-muted-foreground">%</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {totalTopicsCompleted} topics completed across {totalCoursesEnrolled} courses
                    </p>
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                        {activeEnrollments.length} active enrollments
                      </span>
                      {expiredEnrollments.length > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-[10px] font-bold text-destructive">
                          {expiredEnrollments.length} expired
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 relative shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                      <motion.circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round"
                        strokeDasharray={`${overallPercent * 2.51} ${100 * 2.51}`}
                        initial={{ strokeDashoffset: 251 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 1.2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {stats.map(s => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-3 sm:p-4">
                    <s.icon className={`w-4 h-4 ${s.color} mb-1.5 sm:mb-2`} />
                    <div className="text-lg sm:text-xl font-bold text-foreground">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Course Progress */}
                <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                  <h2 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" /> Course Progress
                  </h2>
                  {courseProgress.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No course progress to display yet.</p>
                  ) : (
                    <div className="space-y-2 sm:space-y-2.5">
                      {courseProgress.map(item => (
                        <div key={item.courseId} className="flex items-center gap-2 sm:gap-3">
                          <span className="text-[10px] sm:text-xs text-muted-foreground w-24 sm:w-36 shrink-0 truncate">{t(item.name)}</span>
                          <div className="flex-1 h-4 sm:h-5 bg-secondary rounded-md overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${item.percent}%` }} transition={{ duration: 0.8 }}
                              className={`h-full rounded-md ${getMasteryColor(item.percent)}`} />
                          </div>
                          <span className="text-[10px] sm:text-xs font-mono text-muted-foreground w-7 sm:w-8 text-right">{item.percent}%</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Weekly Activity */}
                <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                  <h2 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" /> Weekly Activity
                  </h2>
                  <div className="flex items-end gap-1.5 sm:gap-2 h-28 sm:h-32">
                    {weeklyActivity.map((w, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <motion.div initial={{ height: 0 }} animate={{ height: `${(w.count / maxWeekly) * 100}%` }} transition={{ duration: 0.6 }}
                          className="w-full bg-primary/80 rounded-t-md min-h-[4px]" />
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground">{w.day}</span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground">{w.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enrollment Details */}
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5 mb-6 sm:mb-8">
                <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> Enrollment Details
                </h2>
                <div className="space-y-2">
                  {allEnrollments.map(enr => {
                    const target = enr.type === "program" ? getProgramById(enr.target_id) : getCourseById(enr.target_id);
                    const name = target ? t((target as any).titleKey || enr.target_id) : enr.target_id;
                    const isExpired = enr.status === "expired";
                    const isActive = enr.status === "active";
                    return (
                      <div key={enr.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                        isExpired ? "border-destructive/20 bg-destructive/5" : isActive ? "border-primary/20 bg-primary/[0.02]" : "border-border"
                      }`}>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-foreground truncate">{name}</p>
                          <p className="text-[10px] text-muted-foreground">
                            {enr.type.toUpperCase()} · {new Date(enr.start_date).toLocaleDateString()} → {new Date(enr.expiry_date).toLocaleDateString()}
                          </p>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isExpired ? "bg-destructive/10 text-destructive" :
                          isActive ? "bg-primary/10 text-primary" :
                          "bg-secondary text-muted-foreground"
                        }`}>{enr.status}</span>
                      </div>
                    );
                  })}
                  {allEnrollments.length === 0 && (
                    <p className="text-xs text-muted-foreground">No enrollments found.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
