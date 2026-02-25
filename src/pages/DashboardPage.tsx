import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BarChart3, Target, Brain, Rocket, TrendingUp, GitCommit,
  Award, Calendar, CheckCircle, AlertTriangle, Users
} from "lucide-react";
import AppHeader from "@/components/AppHeader";

const heatmapData = [
  { topic: "HTTP & REST", mastery: 90 },
  { topic: "Backend Fundamentals", mastery: 85 },
  { topic: "SQL & Databases", mastery: 60 },
  { topic: "Authentication", mastery: 45 },
  { topic: "Caching", mastery: 30 },
  { topic: "Message Queues", mastery: 20 },
  { topic: "System Design", mastery: 10 },
  { topic: "Microservices", mastery: 5 },
];

const weeklyProgress = [
  { day: "Mon", minutes: 45, problems: 2 },
  { day: "Tue", minutes: 90, problems: 4 },
  { day: "Wed", minutes: 30, problems: 1 },
  { day: "Thu", minutes: 120, problems: 5 },
  { day: "Fri", minutes: 60, problems: 3 },
  { day: "Sat", minutes: 150, problems: 7 },
  { day: "Sun", minutes: 75, problems: 2 },
];

const practiceAccuracy = [
  { category: "API Design", correct: 12, total: 15 },
  { category: "SQL Queries", correct: 8, total: 12 },
  { category: "System Design", correct: 3, total: 8 },
  { category: "Auth Patterns", correct: 5, total: 7 },
  { category: "Caching Strategy", correct: 2, total: 6 },
];

const gitActivity = [
  { week: "W1", commits: 3 }, { week: "W2", commits: 7 }, { week: "W3", commits: 5 },
  { week: "W4", commits: 12 }, { week: "W5", commits: 8 }, { week: "W6", commits: 15 },
  { week: "W7", commits: 10 }, { week: "W8", commits: 18 },
];

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
  const maxMinutes = Math.max(...weeklyProgress.map(w => w.minutes));
  const maxCommits = Math.max(...gitActivity.map(g => g.commits));

  const stats = [
    { label: t("dashboard.topicsMastered"), value: "12", total: "/48", icon: Target, color: "text-primary" },
    { label: t("dashboard.practiceScore"), value: "78%", icon: TrendingUp, color: "text-accent" },
    { label: t("dashboard.aiInteractions"), value: "147", icon: Brain, color: "text-primary" },
    { label: t("dashboard.projectMaturity"), value: "35%", icon: Rocket, color: "text-accent" },
    { label: t("dashboard.gitContributions"), value: "23", icon: GitCommit, color: "text-primary" },
    { label: t("dashboard.readinessScore"), value: "62%", icon: Award, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t("dashboard.title")} backTo="/tracks" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {/* Readiness Score Hero */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.02] p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("dashboard.jobReadiness")}</h2>
                <div className="text-4xl sm:text-5xl font-bold text-foreground mt-1">62<span className="text-xl sm:text-2xl text-muted-foreground">%</span></div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Backend Engineer — SDE-1 Level</p>
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">12 {t("dashboard.topicsMastered").toLowerCase()}</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">36 {t("dashboard.remaining")}</span>
                </div>
              </div>
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={`${62 * 2.51} ${100 * 2.51}`}
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
                <div className="text-lg sm:text-xl font-bold text-foreground">{s.value}<span className="text-xs sm:text-sm text-muted-foreground">{s.total || ""}</span></div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Mastery Heatmap */}
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-muted-foreground" /> {t("dashboard.masteryHeatmap")}
              </h2>
              <div className="space-y-2 sm:space-y-2.5">
                {heatmapData.map(item => (
                  <div key={item.topic} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[10px] sm:text-xs text-muted-foreground w-24 sm:w-36 shrink-0 truncate">{item.topic}</span>
                    <div className="flex-1 h-4 sm:h-5 bg-secondary rounded-md overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${item.mastery}%` }} transition={{ duration: 0.8 }}
                        className={`h-full rounded-md ${getMasteryColor(item.mastery)}`} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-muted-foreground w-7 sm:w-8 text-right">{item.mastery}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Accuracy */}
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> {t("dashboard.practiceAccuracy")}
              </h2>
              <div className="space-y-3">
                {practiceAccuracy.map(item => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] sm:text-xs text-muted-foreground">{item.category}</span>
                      <span className="text-[10px] sm:text-xs font-mono text-foreground">{item.correct}/{item.total} ({Math.round(item.correct / item.total * 100)}%)</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${(item.correct / item.total) * 100}%` }} transition={{ duration: 0.8 }}
                        className="h-full rounded-full bg-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Weekly Progress */}
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" /> {t("dashboard.weeklyProgress")}
              </h2>
              <div className="flex items-end gap-1.5 sm:gap-2 h-28 sm:h-32">
                {weeklyProgress.map(w => (
                  <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div initial={{ height: 0 }} animate={{ height: `${(w.minutes / maxMinutes) * 100}%` }} transition={{ duration: 0.6 }}
                      className="w-full bg-gradient-brand rounded-t-md min-h-[4px]" />
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground">{w.day}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground">{w.minutes}m</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Git Contributions */}
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <h2 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-muted-foreground" /> {t("dashboard.gitContributions")}
              </h2>
              <div className="flex items-end gap-1.5 sm:gap-2 h-28 sm:h-32">
                {gitActivity.map(g => (
                  <div key={g.week} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div initial={{ height: 0 }} animate={{ height: `${(g.commits / maxCommits) * 100}%` }} transition={{ duration: 0.6 }}
                      className="w-full bg-primary/80 rounded-t-md min-h-[4px]" />
                    <span className="text-[9px] sm:text-[10px] text-muted-foreground">{g.week}</span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground">{g.commits}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weak Areas */}
          <div className="rounded-xl border border-primary/20 bg-primary/[0.02] p-4 sm:p-5 mb-6 sm:mb-8">
            <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-primary" /> {t("dashboard.focusAreas")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {heatmapData.filter(h => h.mastery < 40).map(h => (
                <button key={h.topic} onClick={() => navigate("/workspace/backend")}
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-border bg-card text-xs sm:text-sm text-muted-foreground hover:border-primary/30 hover:text-primary transition-all">
                  {h.topic} <span className="text-[10px] sm:text-xs font-mono">({h.mastery}%)</span>
                </button>
              ))}
            </div>
          </div>

          {/* Certificate Preview */}
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6 text-center">
            <Award className="w-8 sm:w-10 h-8 sm:h-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground text-sm sm:text-base">{t("dashboard.certificate")}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("dashboard.certificateDesc")}</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="w-32 sm:w-40 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-brand rounded-full" style={{ width: "25%" }} />
              </div>
              <span className="text-xs font-mono text-muted-foreground">25%</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">{t("dashboard.roleAlignment")}: <span className="text-primary font-medium">Backend Engineer · SDE-1 · API Engineer</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
