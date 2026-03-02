import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft, ChevronDown, ChevronRight, BookOpen, Code2, Compass,
  MessageSquare, Lightbulb, Target, Briefcase, FileText, Zap, ThumbsUp, ThumbsDown,
  AlertTriangle, Maximize2, Minimize2, Network, StickyNote, Brain, Rocket,
  Users, Award, Globe, Menu, X, LogOut, User, Lock
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/tgl-logo.png";
import { topicVideos, topicBlogs, topicMOOCs, topicScenarios, topicCodeExamples } from "@/data/tracks";
import { getModulesForTrack } from "@/data/trackModuleResolver";
import LanguageSelector from "@/components/LanguageSelector";
import { useActiveEnrollments } from "@/hooks/useDatabase";
import { courses as hierarchyCourses, programs } from "@/data/hierarchy";
import { allHceCourses } from "@/data/courses";

import VideoResources from "@/components/workspace/VideoResources";
import BlogResources from "@/components/workspace/BlogResources";
import MOOCResources from "@/components/workspace/MOOCResources";
import ScenarioProblems from "@/components/workspace/ScenarioProblems";
import CodePlayground from "@/components/workspace/CodePlayground";
import GitSimulation from "@/components/workspace/GitSimulation";
import MultiLLMPanel from "@/components/workspace/MultiLLMPanel";
import KnowledgeGraph from "@/components/workspace/KnowledgeGraph";
import ThinkingCanvas from "@/components/workspace/ThinkingCanvas";
import CommunityPanel from "@/components/workspace/CommunityPanel";
import CapstoneProject from "@/components/workspace/CapstoneProject";

export default function WorkspacePage() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { t: rawT } = useTranslation();
  const t = (key: string, optionsOrDefault?: any) => {
    if (optionsOrDefault && typeof optionsOrDefault === 'object' && optionsOrDefault.returnObjects) {
      return rawT(key, optionsOrDefault) as any;
    }
    return String(rawT(key, optionsOrDefault ?? key));
  };

  // Enrollment gating
  const { data: activeEnrollmentData = [] } = useActiveEnrollments();
  const isEnrolled = useMemo(() => {
    if (!user?.id || !trackId) return false;
    if (activeEnrollmentData.some(e => e.type === "track" && e.target_id === trackId)) return true;
    for (const e of activeEnrollmentData) {
      if (e.type === "course") {
        const course = hierarchyCourses.find(c => c.id === e.target_id);
        if (course?.trackId === trackId) return true;
      }
      if (e.type === "program") {
        const prog = programs.find(p => p.id === e.target_id);
        if (prog) {
          for (const cid of prog.courseIds) {
            const course = hierarchyCourses.find(c => c.id === cid);
            if (course?.trackId === trackId) return true;
          }
        }
      }
    }
    return false;
  }, [user?.id, trackId, activeEnrollmentData]);

  const modules = useMemo(() => getModulesForTrack(trackId || "backend"), [trackId]);
  const allTopics = useMemo(() => modules.flatMap(m => m.topics), [modules]);
  const initialTopicId = modules[0]?.topics[0]?.id || "t1";

  const [activeMode, setActiveMode] = useState<string>("learn");
  const [activeTopic, setActiveTopic] = useState<string>(initialTopicId);
  const [expandedModules, setExpandedModules] = useState<string[]>([modules[0]?.id || "m1"]);

  useEffect(() => {
    const newModules = getModulesForTrack(trackId || "backend");
    const firstTopicId = newModules[0]?.topics[0]?.id || "t1";
    setActiveTopic(firstTopicId);
    setExpandedModules([newModules[0]?.id || "m1"]);
  }, [trackId]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [graphOpen, setGraphOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const modes = [
    { id: "learn", label: t("workspace.learn"), icon: BookOpen },
    { id: "practice", label: t("workspace.practice"), icon: Code2 },
    { id: "explore", label: t("workspace.explore"), icon: Compass },
  ] as const;

  const currentTopic = allTopics.find(tp => tp.id === activeTopic);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const selectTopic = (topicId: string) => {
    setActiveTopic(topicId);
    setSidebarOpen(false);
  };

  const SectionCard = ({ icon: Icon, title, children, accent = false }: { icon: any; title: string; children: React.ReactNode; accent?: boolean }) => (
    <div className={`rounded-xl border p-4 sm:p-5 ${accent ? "border-primary/20 bg-primary/[0.02]" : "border-border bg-card"}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`w-4 h-4 ${accent ? "text-primary" : "text-muted-foreground"}`} />
        <h3 className="font-semibold text-sm text-foreground">{title}</h3>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );

  const SectionDivider = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3 py-4">
      <div className="flex-1 h-px bg-border" />
      <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );

  // Enrollment gate - block access if not enrolled
  if (!isEnrolled) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-xl font-bold text-foreground mb-2">Access Restricted</h1>
          <p className="text-sm text-muted-foreground mb-6">
            You are not enrolled in this track. Contact your administrator to get access.
          </p>
          <button onClick={() => navigate("/explore")}
            className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all">
            Back to Explore
          </button>
        </div>
      </div>
    );
  }

  if (!currentTopic) return null;

  const videos = (currentTopic as any).videos || topicVideos[activeTopic] || [];
  const blogs = (currentTopic as any).blogs || topicBlogs[activeTopic] || [];
  const moocs = (currentTopic as any).moocs || topicMOOCs[activeTopic] || [];
  const scenarios = (currentTopic as any).scenarios || topicScenarios[activeTopic] || [];
  const playgrounds = (currentTopic as any).playgrounds || [];
  const codeExamples = playgrounds.length > 0 ? playgrounds : (topicCodeExamples[activeTopic] || []);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Knowledge Graph Overlay */}
      <AnimatePresence>
        {graphOpen && <KnowledgeGraph onClose={() => setGraphOpen(false)} />}
      </AnimatePresence>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-[280px] bg-sidebar border-r border-border overflow-y-auto scrollbar-hide lg:hidden"
            >
              <div className="flex items-center justify-between p-3 border-b border-border">
                <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">{t("workspace.outline")}</h2>
                <button onClick={() => setSidebarOpen(false)} className="p-1.5 text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-3">
                {modules.map(mod => (
                  <div key={mod.id} className="mb-0.5">
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-sidebar-accent transition-colors"
                    >
                      {expandedModules.includes(mod.id) ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />}
                      <span className="truncate">{t(mod.titleKey, mod.title)}</span>
                    </button>
                    <AnimatePresence>
                      {expandedModules.includes(mod.id) && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          {mod.topics.filter((topic: any) => true).map((topic: any) => (
                            <button
                              key={topic.id}
                              onClick={() => selectTopic(topic.id)}
                              className={`w-full text-left px-3 pl-8 py-2 text-sm rounded-lg transition-colors ${activeTopic === topic.id ? "text-primary font-medium bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                                }`}
                            >
                              {t(topic.titleKey, topic.title)}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="border-t border-border mt-3 pt-3 space-y-1">
                  <button onClick={() => { setGraphOpen(true); setSidebarOpen(false); }} className="w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                    <Network className="w-3.5 h-3.5" /> {t("workspace.knowledgeGraph")}
                  </button>
                  <button onClick={() => navigate("/dashboard")} className="w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                    <Award className="w-3.5 h-3.5" /> {t("nav.dashboard")}
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Top bar */}
      {!focusMode && (
        <header className="h-12 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between px-3 sm:px-4 shrink-0 z-30">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button onClick={() => setSidebarOpen(true)} className="p-1.5 text-muted-foreground hover:text-foreground lg:hidden shrink-0">
              <Menu className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/tracks")} className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block shrink-0">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <img src={logo} alt="" className="h-5 hidden sm:block shrink-0" />
            <span className="text-xs sm:text-sm text-muted-foreground truncate">{t(`hierarchy.${trackId === "lce" ? "lowCode" : trackId === "nce" ? "noCode" : "highCode"}`)}</span>
            <span className="px-1.5 py-0.5 rounded-full bg-secondary text-[9px] sm:text-[10px] font-bold text-muted-foreground items-center gap-1 hidden md:flex shrink-0">
              <Globe className="w-3 h-3" /> 10,000+ {t("common.learners")}
            </span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            {/* Mode toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-0.5 mr-1 sm:mr-2">
              {modes.map(m => (
                <button
                  key={m.id}
                  onClick={() => setActiveMode(m.id)}
                  className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-medium transition-all ${activeMode === m.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <m.icon className="w-3 h-3" />
                  <span className="hidden sm:inline">{m.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setGraphOpen(true)} className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title={t("workspace.knowledgeGraph")}>
              <Network className="w-4 h-4" />
            </button>
            <button onClick={() => setFocusMode(true)} className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title={t("workspace.focusMode")}>
              <Maximize2 className="w-4 h-4" />
            </button>
            <button onClick={() => { setCanvasOpen(!canvasOpen); if (aiPanelOpen) setAiPanelOpen(false); }} className={`p-1.5 sm:p-2 transition-colors ${canvasOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title={t("workspace.thinkingCanvas")}>
              <StickyNote className="w-4 h-4" />
            </button>
            <button onClick={() => { setAiPanelOpen(!aiPanelOpen); if (canvasOpen) setCanvasOpen(false); }} className={`p-1.5 sm:p-2 transition-colors ${aiPanelOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title={t("workspace.aiAssistant")}>
              <Brain className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/dashboard")} className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title={t("nav.dashboard")}>
              <Award className="w-4 h-4" />
            </button>

            <LanguageSelector compact />

            <div className="relative ml-1">
              <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground text-[10px] sm:text-xs font-bold">
                {user?.avatar || "U"}
              </button>
              <AnimatePresence>
                {userMenuOpen && (
                  <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60]" onClick={() => setUserMenuOpen(false)} />
                    <motion.div initial={{ opacity: 0, y: -5, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -5, scale: 0.95 }}
                      className="absolute right-0 top-full mt-1 z-[61] w-48 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                      <div className="p-2.5 border-b border-border">
                        <p className="text-xs font-semibold text-foreground truncate">{user?.name}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{user?.email}</p>
                      </div>
                      <button onClick={() => { navigate("/profile"); setUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:bg-secondary transition-colors">
                        <User className="w-3.5 h-3.5" /> {t("nav.profile")}
                      </button>
                      <button onClick={() => { navigate("/tracks"); setUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:bg-secondary transition-colors">
                        <BookOpen className="w-3.5 h-3.5" /> {t("workspace.allTracks")}
                      </button>
                      <button onClick={() => { logout(); navigate("/"); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-destructive hover:bg-destructive/5 transition-colors">
                        <LogOut className="w-3.5 h-3.5" /> {t("nav.signOut")}
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>
      )}

      {/* Focus mode bar */}
      {focusMode && (
        <header className="h-10 border-b border-border bg-background flex items-center justify-between px-4 shrink-0">
          <span className="text-xs font-medium text-muted-foreground truncate">{t("workspace.focusMode")} — {t(`trackContent.${activeTopic}.title`, currentTopic.title)}</span>
          <button onClick={() => setFocusMode(false)} className="text-muted-foreground hover:text-foreground">
            <Minimize2 className="w-4 h-4" />
          </button>
        </header>
      )}

      <div className="flex flex-1 overflow-hidden relative">
        {/* Desktop Sidebar */}
        {!focusMode && (
          <aside className="hidden lg:block w-[260px] border-r border-border bg-sidebar shrink-0 overflow-y-auto scrollbar-hide">
            <div className="p-3">
              <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-2">{t("workspace.outline")}</h2>
              {modules.map(mod => (
                <div key={mod.id} className="mb-0.5">
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-sidebar-accent transition-colors"
                  >
                    {expandedModules.includes(mod.id) ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />}
                    <span className="truncate">{t(`trackContent.${mod.id}.title`, mod.title)}</span>
                  </button>
                  <AnimatePresence>
                    {expandedModules.includes(mod.id) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        {mod.topics.map(topic => (
                          <button
                            key={topic.id}
                            onClick={() => setActiveTopic(topic.id)}
                            className={`w-full text-left px-3 pl-8 py-1.5 text-sm rounded-lg transition-colors ${activeTopic === topic.id ? "text-primary font-medium bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                              }`}
                          >
                            {t(`trackContent.${topic.id}.title`, topic.title)}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="border-t border-border mt-3 pt-3 space-y-1">
                <button onClick={() => setGraphOpen(true)} className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                  <Network className="w-3.5 h-3.5" /> {t("workspace.knowledgeGraph")}
                </button>
                <button onClick={() => navigate("/dashboard")} className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                  <Award className="w-3.5 h-3.5" /> {t("nav.dashboard")}
                </button>
              </div>
            </div>
          </aside>
        )}

        {/* Main content */}
        <main ref={contentRef} className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-20">
            <motion.div key={activeTopic} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {/* Topic header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                    {t(`trackContent.${modules.find(m => m.topics.some(t => t.id === activeTopic))?.id}.title`, modules.find(m => m.topics.some(t => t.id === activeTopic))?.title)}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">
                    {activeMode === "learn" ? t("workspace.learnMode") : activeMode === "practice" ? t("workspace.practiceMode") : t("workspace.exploreMode")}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{t(`trackContent.${activeTopic}.title`, currentTopic.title)}</h1>
              </div>

              {/* ===== LEARN MODE — All 8 Layers ===== */}
              {activeMode === "learn" && (
                <div className="space-y-4 sm:space-y-5">
                  <SectionDivider label={t("workspace.coreConceptFramework")} />
                  <SectionCard icon={Lightbulb} title={t("workspace.what")} accent>{t(`trackContent.${activeTopic}.what`, currentTopic.what)}</SectionCard>
                  <SectionCard icon={Target} title={t("workspace.why")}>{t(`trackContent.${activeTopic}.why`, currentTopic.why)}</SectionCard>
                  <SectionCard icon={Zap} title={t("workspace.when")}>{t(`trackContent.${activeTopic}.when`, currentTopic.when)}</SectionCard>
                  <SectionCard icon={Code2} title={t("workspace.howItWorks")} accent>{t(`trackContent.${activeTopic}.how`, currentTopic.how)}</SectionCard>
                  <SectionCard icon={Compass} title={t("workspace.techEcosystem")}>{t(`trackContent.${activeTopic}.ecosystem`, currentTopic.ecosystem)}</SectionCard>
                  <SectionCard icon={Briefcase} title={t("workspace.realWorldExamples")} accent>{t(`trackContent.${activeTopic}.realWorld`, currentTopic.realWorld)}</SectionCard>

                  {/* Use Cases */}
                  <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                    <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /> {t("workspace.useCases")}</h3>
                    <ul className="space-y-1.5">
                      {(t(`trackContent.${activeTopic}.useCases`, { returnObjects: true, defaultValue: currentTopic.useCases }) as string[]).map((uc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span> {uc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages & Disadvantages */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-primary" /> {t("workspace.advantages")}</h3>
                      <ul className="space-y-1.5">
                        {(t(`trackContent.${activeTopic}.advantages`, { returnObjects: true, defaultValue: currentTopic.advantages }) as string[]).map((a, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">+</span> {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-destructive" /> {t("workspace.disadvantages")}</h3>
                      <ul className="space-y-1.5">
                        {(t(`trackContent.${activeTopic}.disadvantages`, { returnObjects: true, defaultValue: currentTopic.disadvantages }) as string[]).map((d, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-destructive mt-0.5">−</span> {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Interview & Resume */}
                  <SectionCard icon={AlertTriangle} title={t("workspace.interviewPerspective")} accent>{t(`trackContent.${activeTopic}.interviewTip`, currentTopic.interviewTip)}</SectionCard>
                  <SectionCard icon={FileText} title={t("workspace.resumeFraming")}>
                    <code className="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground break-all">{t(`trackContent.${activeTopic}.resumeBullet`, currentTopic.resumeBullet)}</code>
                  </SectionCard>

                  {videos.length > 0 && (
                    <>
                      <SectionDivider label={t("workspace.videoResources")} />
                      <VideoResources videos={videos} />
                    </>
                  )}

                  {moocs.length > 0 && (
                    <>
                      <SectionDivider label={t("workspace.moocReferences")} />
                      <MOOCResources moocs={moocs} />
                    </>
                  )}

                  {blogs.length > 0 && (
                    <>
                      <SectionDivider label={t("workspace.blogsDocumentation")} />
                      <BlogResources blogs={blogs} />
                    </>
                  )}

                  {scenarios.length > 0 && (
                    <>
                      <SectionDivider label={t("workspace.scenarioBasedProblems")} />
                      <ScenarioProblems scenarios={scenarios} onSelectScenario={() => setActiveMode("practice")} />
                    </>
                  )}

                  {codeExamples.length > 0 && (
                    <>
                      <SectionDivider label={t("workspace.codePlayground")} />
                      <CodePlayground examples={codeExamples} />
                    </>
                  )}

                  <SectionDivider label={t("workspace.gitPublishing")} />
                  <GitSimulation />

                  <SectionDivider label={t("workspace.community")} />
                  <CommunityPanel />

                  <SectionDivider label={t("workspace.capstoneProject")} />
                  <CapstoneProject />
                </div>
              )}

              {/* ===== PRACTICE MODE ===== */}
              {activeMode === "practice" && (
                <div className="space-y-5 sm:space-y-6">
                  {scenarios.length > 0 && <ScenarioProblems scenarios={scenarios} onSelectScenario={() => { }} />}
                  <SectionDivider label={t("workspace.codePlayground")} />
                  {codeExamples.length > 0 && <CodePlayground examples={codeExamples} />}
                  <SectionDivider label={t("workspace.gitSimulation")} />
                  <GitSimulation />
                  <SectionDivider label={t("workspace.communitySolutions")} />
                  <CommunityPanel />
                </div>
              )}

              {/* ===== EXPLORE MODE ===== */}
              {activeMode === "explore" && (
                <div className="space-y-5 sm:space-y-6">
                  <div className="rounded-xl border border-border bg-card p-5 sm:p-6 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h2 className="font-semibold text-foreground mb-2">{t("workspace.aiDeepDive")}</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("workspace.aiDeepDiveDesc")} <span className="font-medium text-foreground">{currentTopic.title}</span> {t("workspace.withMultipleLLMs")}
                    </p>
                    <button onClick={() => setAiPanelOpen(true)} className="px-4 py-2 bg-gradient-brand text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      {t("workspace.openAiAssistant")}
                    </button>
                  </div>

                  <SectionDivider label={t("workspace.knowledgeGraph")} />
                  <div className="rounded-xl border border-border bg-card p-5 sm:p-6 text-center">
                    <Network className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-3">{t("workspace.exploreConceptsVisually")}</p>
                    <button onClick={() => setGraphOpen(true)} className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                      {t("workspace.openKnowledgeGraph")}
                    </button>
                  </div>

                  <SectionDivider label={t("workspace.capstoneProject")} />
                  <CapstoneProject />
                </div>
              )}
            </motion.div>
          </div>
        </main>

        {/* AI Panel */}
        <AnimatePresence>
          {aiPanelOpen && !focusMode && (
            <MultiLLMPanel open={aiPanelOpen} onClose={() => setAiPanelOpen(false)} topicTitle={currentTopic.title} />
          )}
        </AnimatePresence>

        {/* Thinking Canvas */}
        <AnimatePresence>
          {canvasOpen && !focusMode && (
            <ThinkingCanvas open={canvasOpen} onClose={() => setCanvasOpen(false)} topicTitle={currentTopic.title} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
