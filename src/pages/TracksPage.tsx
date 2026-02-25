import { motion } from "framer-motion";
import { ArrowRight, Clock, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/tgl-logo.png";

const tracks = [
  { id: "backend", title: "Backend Engineering", icon: "⚙️", duration: "16 weeks", modules: 24, roles: ["Backend Dev", "API Engineer", "Platform Engineer"], project: "Production-grade REST + GraphQL API" },
  { id: "frontend", title: "Frontend Engineering", icon: "🎨", duration: "14 weeks", modules: 20, roles: ["Frontend Dev", "UI Engineer"], project: "Component Library + SPA" },
  { id: "fullstack", title: "Full Stack Engineering", icon: "🔗", duration: "20 weeks", modules: 30, roles: ["Full Stack Dev", "Product Engineer"], project: "End-to-end SaaS App" },
  { id: "ai", title: "AI Native Engineering", icon: "🤖", duration: "18 weeks", modules: 26, roles: ["AI Engineer", "ML Ops"], project: "AI-Powered Production App" },
  { id: "data", title: "Data Engineering", icon: "📊", duration: "16 weeks", modules: 22, roles: ["Data Engineer", "Analytics Engineer"], project: "Real-time Data Pipeline" },
  { id: "devops", title: "DevOps & Cloud", icon: "☁️", duration: "14 weeks", modules: 18, roles: ["DevOps Engineer", "SRE"], project: "CI/CD + IaC" },
  { id: "system-design", title: "System Design", icon: "🏗️", duration: "12 weeks", modules: 16, roles: ["Senior Engineer", "Architect"], project: "Distributed System Blueprint" },
];

export default function TracksPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
          <img src={logo} alt="Talencia Global" className="h-6 sm:h-7" />
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="/dashboard" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold">U</div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Choose Your Track</h1>
          <p className="text-muted-foreground mt-1.5 sm:mt-2 text-base sm:text-lg">Each track builds one real-world project from start to finish.</p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4">
          {tracks.map((track, i) => (
            <motion.button
              key={track.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(`/workspace/${track.id}`)}
              className="w-full text-left group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-5">
                <span className="text-2xl sm:text-3xl">{track.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{track.title}</h2>
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> {track.duration}</span>
                    <span>{track.modules} modules</span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                    {track.roles.map((r) => (
                      <span key={r} className="px-1.5 sm:px-2 py-0.5 rounded-md bg-secondary text-[10px] sm:text-xs font-medium text-secondary-foreground">{r}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 sm:mt-3 text-xs sm:text-sm">
                    <Rocket className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
                    <span className="text-primary font-medium">{track.project}</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
