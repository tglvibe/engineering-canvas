import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BarChart3, Flame, Target, Brain, Rocket, TrendingUp, ArrowLeft } from "lucide-react";
import logo from "@/assets/tgl-logo.png";

const stats = [
  { label: "Topics Mastered", value: "12", total: "48", icon: Target, color: "text-primary" },
  { label: "Practice Score", value: "78%", icon: TrendingUp, color: "text-accent" },
  { label: "AI Interactions", value: "47", icon: Brain, color: "text-primary" },
  { label: "Project Maturity", value: "35%", icon: Rocket, color: "text-accent" },
];

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

const getMasteryColor = (v: number) => {
  if (v >= 80) return "bg-primary";
  if (v >= 60) return "bg-primary/80";
  if (v >= 40) return "bg-accent";
  if (v >= 20) return "bg-accent/70";
  return "bg-secondary";
};

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/tracks")} className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <img src={logo} alt="" className="h-6" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold">U</div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Performance Dashboard</h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                <s.icon className={`w-5 h-5 ${s.color} mb-2`} />
                <div className="text-2xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mastery Heatmap */}
          <div className="rounded-xl border border-border bg-card p-6 mb-6">
            <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-muted-foreground" /> Mastery Heatmap
            </h2>
            <div className="space-y-3">
              {heatmapData.map((item) => (
                <div key={item.topic} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-40 shrink-0 truncate">{item.topic}</span>
                  <div className="flex-1 h-6 bg-secondary rounded-md overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.mastery}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className={`h-full rounded-md ${getMasteryColor(item.mastery)}`}
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground w-10 text-right">{item.mastery}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weak Areas */}
          <div className="rounded-xl border border-primary/20 bg-primary/[0.02] p-6">
            <h2 className="text-sm font-semibold text-foreground mb-3">🎯 Recommended Focus Areas</h2>
            <div className="flex flex-wrap gap-2">
              {heatmapData.filter((h) => h.mastery < 40).map((h) => (
                <button
                  key={h.topic}
                  onClick={() => navigate("/workspace/backend")}
                  className="px-3 py-1.5 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:border-primary/30 hover:text-primary transition-all"
                >
                  {h.topic}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
