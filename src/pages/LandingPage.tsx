import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Code2, Layers } from "lucide-react";
import logo from "@/assets/tgl-logo.png";

const tracks = [
  { id: "backend", title: "Backend Engineering", icon: "⚙️", duration: "16 weeks", roles: "Backend Dev, API Engineer, Platform Engineer", projects: "Production-grade REST + GraphQL API" },
  { id: "frontend", title: "Frontend Engineering", icon: "🎨", duration: "14 weeks", roles: "Frontend Dev, UI Engineer, Design Technologist", projects: "Component Library + SPA" },
  { id: "fullstack", title: "Full Stack Engineering", icon: "🔗", duration: "20 weeks", roles: "Full Stack Dev, Product Engineer", projects: "End-to-end SaaS Application" },
  { id: "ai", title: "AI Native Engineering", icon: "🤖", duration: "18 weeks", roles: "AI Engineer, ML Ops, Applied Scientist", projects: "AI-Powered Production App" },
  { id: "data", title: "Data Engineering", icon: "📊", duration: "16 weeks", roles: "Data Engineer, Analytics Engineer", projects: "Real-time Data Pipeline" },
  { id: "devops", title: "DevOps & Cloud", icon: "☁️", duration: "14 weeks", roles: "DevOps Engineer, SRE, Cloud Architect", projects: "CI/CD + Infrastructure as Code" },
  { id: "system-design", title: "System Design", icon: "🏗️", duration: "12 weeks", roles: "Senior Engineer, Staff Engineer, Architect", projects: "Distributed System Blueprint" },
];

const features = [
  { icon: Brain, title: "AI-Augmented Learning", desc: "Multi-LLM assistant that knows your context" },
  { icon: Code2, title: "Build While Learning", desc: "Every module contributes to a real project" },
  { icon: Layers, title: "Deep Topic Framework", desc: "What, Why, How, Architecture, Interview prep" },
  { icon: Zap, title: "Intelligent Workspace", desc: "Knowledge graphs, focus mode, semantic search" },
];

export default function LandingPage() {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between">
          <img src={logo} alt="Talencia Global" className="h-6 sm:h-7" />
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="/login" className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sign in</a>
            <a href="/login" className="text-xs sm:text-sm font-medium bg-gradient-brand text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:opacity-90 transition-opacity">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs sm:text-sm font-medium text-muted-foreground mb-5 sm:mb-6 border border-border">
              <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
              Not an LMS. An Engineering OS.
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] sm:leading-[1.05]">
              Learn. Think.<br />
              <span className="text-gradient-brand">Build. Ship.</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The AI-augmented engineering workspace where every scroll teaches, every module builds, and every concept connects to your career.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/login" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-brand hover:opacity-90 transition-all text-sm sm:text-base">
                Start Learning <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tracks" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-foreground font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-border hover:bg-secondary transition-colors text-sm sm:text-base">
                Explore Tracks
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-4 sm:p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <f.icon className="w-5 h-5 text-primary mb-2 sm:mb-3" />
                <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Engineering Tracks</h2>
            <p className="mt-2 sm:mt-3 text-muted-foreground text-base sm:text-lg">Choose your path. Build something real.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {tracks.map((track, i) => (
              <motion.a
                key={track.id}
                href="/login"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
                className="group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all flex gap-3 sm:gap-4 items-start"
              >
                <span className="text-xl sm:text-2xl">{track.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{track.title}</h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{track.duration} · {track.roles}</p>
                  <p className="text-[10px] sm:text-xs text-primary font-medium mt-1.5 sm:mt-2">🚀 {track.projects}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <img src={logo} alt="Talencia Global" className="h-5 sm:h-6 opacity-60" />
          <p className="text-xs sm:text-sm text-muted-foreground">Great talent. Global opportunities.</p>
        </div>
      </footer>
    </div>
  );
}
