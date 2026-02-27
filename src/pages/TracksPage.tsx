import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Rocket, Sparkles, Code2, Layers, Wand2, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";

type Category = "all" | "high-code" | "low-code" | "no-code";

interface Track {
  id: string;
  title: string;
  icon: string;
  duration: string;
  modules: number;
  roles: string[];
  project: string;
  category: Category;
  specialization: string;
  languages: string[];
  recommended?: boolean;
}

const tracks: Track[] = [
  // High-Code Engineering umbrella track representing strategic HCE programs and durable roles
  {
    id: "hce",
    title: "High‑Code Engineering (HCE)",
    icon: "💻",
    duration: "Varies",
    modules: 0,
    roles: [
      "AI Systems Engineer",
      "Machine Learning Engineer",
      "Generative AI Engineer",
      "AI Infrastructure Engineer",
      "Backend Systems Engineer",
      "Distributed Systems Engineer",
      "Full Stack Systems Engineer",
      "Cloud & Platform Engineer",
      "DevOps & SRE Engineer",
      "Cybersecurity Engineer",
      "Blockchain Protocol Engineer",
      "Data Engineer",
      "Embedded Systems Engineer",
      "Edge AI Engineer",
      "Robotics Software Engineer",
      "AR/VR Systems Engineer",
      "High Performance Computing Engineer",
    ],
    project: "Strategic high‑code programs",
    category: "high-code",
    specialization: "High‑Code Engineering",
    languages: ["Multiple"],
  },
  // Low-Code Engineering umbrella track representing strategic LCE programs and durable roles
  {
    id: "lce",
    title: "Low‑Code Engineering (LCE)",
    icon: "🧩",
    duration: "Varies",
    modules: 0,
    roles: [
      "Citizen Developer",
      "Low-Code Architect",
      "Automation Specialist",
      "Integration Engineer",
      "Workflow Designer",
      "Internal Tools Developer",
      "Application Builder",
      "Platform Engineer",
      "Process Analyst",
      "Business Automation Engineer",
      "Digital Operations Engineer",
      "Rapid Prototyping Engineer",
      "Low-Code Security Specialist",
      "Productivity Engineer",
      "No-Code Coordinator",
    ],
    project: "Strategic low‑code programs",
    category: "low-code",
    specialization: "Low‑Code Engineering",
    languages: ["Visual / Declarative"],
  },
  { id: "backend", title: "Backend Engineering", icon: "⚙️", duration: "16 weeks", modules: 24, roles: ["Backend Dev", "API Engineer", "Platform Engineer"], project: "Production-grade REST + GraphQL API", category: "high-code", specialization: "Backend Development", languages: ["TypeScript", "Python", "Go", "Java"] },
  { id: "frontend", title: "Frontend Engineering", icon: "🎨", duration: "14 weeks", modules: 20, roles: ["Frontend Dev", "UI Engineer"], project: "Component Library + SPA", category: "high-code", specialization: "Frontend Development", languages: ["TypeScript", "JavaScript"] },
  { id: "fullstack", title: "Full Stack Engineering", icon: "🔗", duration: "20 weeks", modules: 30, roles: ["Full Stack Dev", "Product Engineer"], project: "End-to-end SaaS App", category: "high-code", specialization: "Full Stack Development", languages: ["TypeScript", "Python"] },
  { id: "ai", title: "AI Native Engineering", icon: "🤖", duration: "18 weeks", modules: 26, roles: ["AI Engineer", "ML Ops"], project: "AI-Powered Production App", category: "high-code", specialization: "AI / ML Engineering", languages: ["Python", "TypeScript"] },
  { id: "data", title: "Data Engineering", icon: "📊", duration: "16 weeks", modules: 22, roles: ["Data Engineer", "Analytics Engineer"], project: "Real-time Data Pipeline", category: "high-code", specialization: "Data Engineering", languages: ["Python", "SQL", "Scala"] },
  { id: "devops", title: "DevOps & Cloud", icon: "☁️", duration: "14 weeks", modules: 18, roles: ["DevOps Engineer", "SRE"], project: "CI/CD + IaC", category: "high-code", specialization: "Infrastructure", languages: ["Go", "Python", "Bash"] },
  { id: "system-design", title: "System Design", icon: "🏗️", duration: "12 weeks", modules: 16, roles: ["Senior Engineer", "Architect"], project: "Distributed System Blueprint", category: "high-code", specialization: "Architecture", languages: ["Language Agnostic"] },
  { id: "automation", title: "Business Automation", icon: "🔄", duration: "8 weeks", modules: 12, roles: ["Automation Engineer", "Process Designer"], project: "End-to-end Workflow Automation", category: "low-code", specialization: "Automation", languages: ["JavaScript", "SQL"] },
  { id: "api-integration", title: "API Integration Platform", icon: "🔌", duration: "10 weeks", modules: 14, roles: ["Integration Specialist", "Solutions Architect"], project: "Multi-platform Integration Hub", category: "low-code", specialization: "Integration", languages: ["JavaScript", "Python"] },
  { id: "internal-tools", title: "Internal Tools Builder", icon: "🛠️", duration: "6 weeks", modules: 10, roles: ["Internal Tools Dev", "Ops Engineer"], project: "Custom Admin Dashboard", category: "low-code", specialization: "Tooling", languages: ["SQL", "JavaScript"] },
  { id: "product-launch", title: "Product Launch Studio", icon: "🚀", duration: "6 weeks", modules: 10, roles: ["Product Manager", "Entrepreneur"], project: "MVP Launch with Landing + Waitlist", category: "no-code", specialization: "Product", languages: ["No coding required"] },
  { id: "ai-workflows", title: "AI Workflow Design", icon: "🧠", duration: "8 weeks", modules: 12, roles: ["AI Prompt Engineer", "Business Analyst"], project: "AI-powered Business Workflow", category: "no-code", specialization: "AI Operations", languages: ["No coding required"] },
];

export default function TracksPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const categories = [
    { id: "all" as Category, label: t("tracks.allTracks"), icon: Layers },
    { id: "high-code" as Category, label: t("landing.highCode"), icon: Code2 },
    { id: "low-code" as Category, label: t("landing.lowCode"), icon: Wand2 },
    { id: "no-code" as Category, label: t("landing.noCode"), icon: Sparkles },
  ];

  const tracksWithRecommendations = useMemo(() => {
    return tracks.map(t => ({
      ...t,
      recommended: user ? (
        t.languages.some(l => l === user.preferredLanguage) ||
        (user.goal === "Get a Job" && t.roles.some(r => r.includes("Engineer"))) ||
        (user.goal === "Upskill" && t.category === "high-code") ||
        (user.level === "Beginner" && (t.category === "no-code" || t.category === "low-code"))
      ) : false,
    }));
  }, [user]);

  const filtered = tracksWithRecommendations.filter(t => {
    if (activeCategory !== "all" && t.category !== activeCategory) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.specialization.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const recommended = tracksWithRecommendations.filter(t => t.recommended).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader title={t("tracks.title")} showBack={false} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t("tracks.chooseTrack")}</h1>
          <p className="text-muted-foreground mt-1.5 text-sm sm:text-base">{t("tracks.trackDesc")}</p>
        </motion.div>

        {recommended.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">{t("tracks.recommended")}</h2>
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {recommended.map(t => (
                <button key={t.id} onClick={() => navigate(`/workspace/${t.id}`)}
                  className="shrink-0 flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-primary/20 bg-primary/[0.03] hover:border-primary/40 transition-all">
                  <span className="text-lg">{t.icon}</span>
                  <div className="text-left">
                    <p className="text-xs font-medium text-foreground">{t.title}</p>
                    <p className="text-[10px] text-muted-foreground">{t.duration}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="mt-4 mb-5 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t("tracks.searchTracks")}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all" />
          </div>
          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            {categories.map(c => (
              <button key={c.id} onClick={() => setActiveCategory(c.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === c.id ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground border border-border hover:border-primary/20"
                }`}>
                <c.icon className="w-3 h-3" /> {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          {filtered.map((track, i) => (
            <motion.button
              key={track.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => navigate(`/workspace/${track.id}`)}
              className="w-full text-left group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl">{track.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <h2 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">{track.title}</h2>
                      {track.recommended && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded-full bg-primary/10 text-[9px] font-bold text-primary">{t("tracks.forYou")}</span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {track.duration}</span>
                    <span>{track.modules} {t("tracks.modules")}</span>
                    <span className="px-1.5 py-0.5 rounded bg-secondary text-[10px] font-medium">{track.category.replace("-", " ").toUpperCase()}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {track.roles.map(r => (
                      <span key={r} className="px-1.5 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-secondary-foreground">{r}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs">
                    <Rocket className="w-3 h-3 text-primary" />
                    <span className="text-primary font-medium">{track.project}</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-sm text-muted-foreground">{t("tracks.noResults")}</div>
          )}
        </div>
      </div>
    </div>
  );
}
