import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Code2, Layers, Play, Users, Award, BookOpen, Sparkles, ChevronRight, Star, Target, Rocket, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/tgl-logo.png";
import LanguageSelector from "@/components/LanguageSelector";

const categories = [
  {
    id: "high-code",
    labelKey: "landing.highCode",
    icon: "💻",
    descKey: "landing.forEngineers",
    tracks: [
      { title: "Backend Engineering", stacks: ["Node.js", "Spring Boot", "Django", "Go", "FastAPI", ".NET"], icon: "⚙️" },
      { title: "Frontend Engineering", stacks: ["React", "Angular", "Vue", "Next.js", "Svelte"], icon: "🎨" },
      { title: "Full Stack Engineering", stacks: ["MERN", "MEAN", "Django + React", "Spring + Angular"], icon: "🔗" },
      { title: "AI Native Engineering", stacks: ["LLM Dev", "Agentic AI", "ML Ops", "AI Automation"], icon: "🤖" },
      { title: "Data Engineering", stacks: ["Spark", "Kafka", "Airflow", "dbt"], icon: "📊" },
      { title: "DevOps & Cloud", stacks: ["AWS", "GCP", "Azure", "Kubernetes"], icon: "☁️" },
      { title: "System Design", stacks: ["Distributed Systems", "Scalability", "Architecture"], icon: "🏗️" },
    ],
  },
  {
    id: "low-code",
    labelKey: "landing.lowCode",
    icon: "🔧",
    descKey: "landing.buildFaster",
    tracks: [
      { title: "Business Automation", stacks: ["Zapier", "n8n", "Power Automate"], icon: "🔄" },
      { title: "API Integration", stacks: ["MuleSoft", "Workato", "Tray.io"], icon: "🔌" },
      { title: "Internal Tools", stacks: ["Retool", "Appsmith", "Budibase"], icon: "🛠️" },
    ],
  },
  {
    id: "no-code",
    labelKey: "landing.noCode",
    icon: "✨",
    descKey: "landing.buildWithoutCode",
    tracks: [
      { title: "Product Launch Studio", stacks: ["Webflow", "Framer", "Carrd"], icon: "🚀" },
      { title: "AI Workflow Design", stacks: ["ChatGPT", "Claude", "Cursor", "Lovable"], icon: "🧠" },
    ],
  },
];

const featureKeys = [
  { icon: Brain, titleKey: "features.aiLearning", descKey: "features.aiLearningDesc" },
  { icon: Code2, titleKey: "features.buildWhile", descKey: "features.buildWhileDesc" },
  { icon: Layers, titleKey: "features.deepTopic", descKey: "features.deepTopicDesc" },
  { icon: Target, titleKey: "features.skillProfiling", descKey: "features.skillProfilingDesc" },
  { icon: Rocket, titleKey: "features.jobReadiness", descKey: "features.jobReadinessDesc" },
  { icon: Shield, titleKey: "features.premiumContent", descKey: "features.premiumContentDesc" },
];

const testimonials = [
  { name: "Arjun Mehta", role: "SDE-2 @ Google", text: "TGL's project-based approach got me from confused junior to confident backend engineer in 16 weeks.", avatar: "AM" },
  { name: "Sarah Chen", role: "Full Stack Dev @ Stripe", text: "The AI workspace is incredible. It's like having a senior engineer pair-programming with you 24/7.", avatar: "SC" },
  { name: "Priya Sharma", role: "Data Engineer @ Netflix", text: "Best learning platform for engineers. Period. The scenario problems are exactly what you'd face in interviews.", avatar: "PS" },
];

export default function LandingPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("high-code");
  const activeCat = categories.find(c => c.id === activeCategory)!;

  const stats = [
    { value: "10,000+", label: t("landing.activeLearners") },
    { value: "7+", label: t("landing.engineeringTracks") },
    { value: "200+", label: t("landing.handsOnModules") },
    { value: "95%", label: t("landing.completionRate") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Talencia Global" className="h-7 sm:h-8" />
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector compact />
            <a href="/login" className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5">{t("nav.signIn")}</a>
            <a href="/login" className="text-xs sm:text-sm font-semibold bg-gradient-brand text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-brand">
              {t("nav.getStarted")}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/[0.04] via-accent/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] text-xs sm:text-sm font-medium text-primary mb-6 sm:mb-8 border border-primary/10">
              <Zap className="w-3.5 h-3.5" />
              {t("landing.badge")}
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              {t("landing.heroTitle1")}<br />
              <span className="text-gradient-brand">{t("landing.heroTitle2")}</span>
            </h1>
            <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("landing.heroDesc")}
            </p>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="/login" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-brand text-primary-foreground font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl shadow-brand hover:opacity-90 transition-all text-sm sm:text-base">
                {t("landing.startJourney")} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#tracks" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-foreground font-medium px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl border border-border hover:bg-secondary transition-colors text-sm sm:text-base">
                <Play className="w-4 h-4" /> {t("landing.exploreTracks")}
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border bg-gradient-subtle">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">{t("landing.featuresTitle")}</h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">{t("landing.featuresDesc")}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {featureKeys.map((f, i) => (
              <motion.div key={f.titleKey} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:border-primary/15 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">{t(f.titleKey)}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1.5 leading-relaxed">{t(f.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Categories */}
      <section id="tracks" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">{t("landing.choosePathTitle")}</h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">{t("landing.choosePathDesc")}</p>
          </motion.div>

          {/* Category tabs */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" : "text-muted-foreground border border-border hover:border-primary/20 hover:text-foreground"
                }`}>
                <span className="text-base">{cat.icon}</span> {t(cat.labelKey)}
              </button>
            ))}
          </div>

          {/* Active category tracks */}
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <p className="text-center text-sm text-muted-foreground mb-6">{t(activeCat.descKey)}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {activeCat.tracks.map((track, i) => (
                <motion.a key={track.title} href="/login" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="group p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-primary/25 hover:shadow-md transition-all flex gap-3 sm:gap-4 items-start">
                  <span className="text-2xl sm:text-3xl mt-0.5">{track.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">{track.title}</h3>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {track.stacks.map(s => (
                        <span key={s} className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border bg-gradient-warm">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">{t("landing.trustedTitle")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((tst, i) => (
              <motion.div key={tst.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">"{tst.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-xs font-bold">{tst.avatar}</div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{tst.name}</p>
                    <p className="text-[10px] text-muted-foreground">{tst.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground">{t("landing.readyTitle")}</h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">{t("landing.readyDesc")}</p>
            <a href="/login" className="inline-flex items-center gap-2.5 bg-gradient-brand text-primary-foreground font-bold px-10 py-4 rounded-2xl shadow-brand hover:opacity-90 transition-all mt-8 text-base">
              {t("nav.getStarted")} <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Talencia Global" className="h-6 opacity-60" />
          <p className="text-xs sm:text-sm text-muted-foreground">{t("landing.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
