import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft, ChevronDown, ChevronRight, BookOpen, Code2, Compass, 
  MessageSquare, Lightbulb, Target, Briefcase, FileText, Zap, ThumbsUp, ThumbsDown,
  AlertTriangle, Maximize2, Minimize2, Network, StickyNote, Brain, Rocket,
  Users, Award, Globe, Menu, X, LogOut, User
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/tgl-logo.png";
import { backendModules, topicVideos, topicBlogs, topicMOOCs, topicScenarios, topicCodeExamples } from "@/data/tracks";

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

const modes = [
  { id: "learn", label: "Learn", icon: BookOpen },
  { id: "practice", label: "Practice", icon: Code2 },
  { id: "explore", label: "Explore", icon: Compass },
] as const;

export default function WorkspacePage() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeMode, setActiveMode] = useState<string>("learn");
  const [activeTopic, setActiveTopic] = useState<string>("t1");
  const [expandedModules, setExpandedModules] = useState<string[]>(["m1"]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [graphOpen, setGraphOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const modules = backendModules;
  const currentTopic = modules.flatMap(m => m.topics).find(t => t.id === activeTopic);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const selectTopic = (topicId: string) => {
    setActiveTopic(topicId);
    setSidebarOpen(false); // close sidebar on mobile after selection
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

  if (!currentTopic) return null;

  const videos = topicVideos[activeTopic] || [];
  const blogs = topicBlogs[activeTopic] || [];
  const moocs = topicMOOCs[activeTopic] || [];
  const scenarios = topicScenarios[activeTopic] || [];
  const codeExamples = topicCodeExamples[activeTopic] || [];

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
                <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">Outline</h2>
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
                      <span className="truncate">{mod.title}</span>
                    </button>
                    <AnimatePresence>
                      {expandedModules.includes(mod.id) && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          {mod.topics.map(topic => (
                            <button
                              key={topic.id}
                              onClick={() => selectTopic(topic.id)}
                              className={`w-full text-left px-3 pl-8 py-2 text-sm rounded-lg transition-colors ${
                                activeTopic === topic.id ? "text-primary font-medium bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                              }`}
                            >
                              {topic.title}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="border-t border-border mt-3 pt-3 space-y-1">
                  <button onClick={() => { setGraphOpen(true); setSidebarOpen(false); }} className="w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                    <Network className="w-3.5 h-3.5" /> Knowledge Graph
                  </button>
                  <button onClick={() => navigate("/dashboard")} className="w-full flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                    <Award className="w-3.5 h-3.5" /> Dashboard
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
            <span className="text-xs sm:text-sm text-muted-foreground truncate">Backend Engineering</span>
            <span className="px-1.5 py-0.5 rounded-full bg-secondary text-[9px] sm:text-[10px] font-bold text-muted-foreground items-center gap-1 hidden md:flex shrink-0">
              <Globe className="w-3 h-3" /> 10,000+ learners
            </span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            {/* Mode toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-0.5 mr-1 sm:mr-2">
              {modes.map(m => (
                <button
                  key={m.id}
                  onClick={() => setActiveMode(m.id)}
                  className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-medium transition-all ${
                    activeMode === m.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <m.icon className="w-3 h-3" />
                  <span className="hidden sm:inline">{m.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setGraphOpen(true)} className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title="Knowledge Graph">
              <Network className="w-4 h-4" />
            </button>
            <button onClick={() => setFocusMode(true)} className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title="Focus Mode">
              <Maximize2 className="w-4 h-4" />
            </button>
            <button onClick={() => { setCanvasOpen(!canvasOpen); if (aiPanelOpen) setAiPanelOpen(false); }} className={`p-1.5 sm:p-2 transition-colors ${canvasOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title="Thinking Canvas">
              <StickyNote className="w-4 h-4" />
            </button>
            <button onClick={() => { setAiPanelOpen(!aiPanelOpen); if (canvasOpen) setCanvasOpen(false); }} className={`p-1.5 sm:p-2 transition-colors ${aiPanelOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title="AI Assistant">
              <Brain className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/dashboard")} className="p-1.5 sm:p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block" title="Dashboard">
              <Award className="w-4 h-4" />
            </button>
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
                        <User className="w-3.5 h-3.5" /> Profile
                      </button>
                      <button onClick={() => { navigate("/tracks"); setUserMenuOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:bg-secondary transition-colors">
                        <BookOpen className="w-3.5 h-3.5" /> All Tracks
                      </button>
                      <button onClick={() => { logout(); navigate("/"); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-destructive hover:bg-destructive/5 transition-colors">
                        <LogOut className="w-3.5 h-3.5" /> Sign Out
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
          <span className="text-xs font-medium text-muted-foreground truncate">Focus Mode — {currentTopic.title}</span>
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
              <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 px-2">Outline</h2>
              {modules.map(mod => (
                <div key={mod.id} className="mb-0.5">
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-sidebar-accent transition-colors"
                  >
                    {expandedModules.includes(mod.id) ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />}
                    <span className="truncate">{mod.title}</span>
                  </button>
                  <AnimatePresence>
                    {expandedModules.includes(mod.id) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        {mod.topics.map(topic => (
                          <button
                            key={topic.id}
                            onClick={() => setActiveTopic(topic.id)}
                            className={`w-full text-left px-3 pl-8 py-1.5 text-sm rounded-lg transition-colors ${
                              activeTopic === topic.id ? "text-primary font-medium bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                            }`}
                          >
                            {topic.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="border-t border-border mt-3 pt-3 space-y-1">
                <button onClick={() => setGraphOpen(true)} className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                  <Network className="w-3.5 h-3.5" /> Knowledge Graph
                </button>
                <button onClick={() => navigate("/dashboard")} className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                  <Award className="w-3.5 h-3.5" /> Dashboard
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
                    {modules.find(m => m.topics.some(t => t.id === activeTopic))?.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">
                    {activeMode === "learn" ? "Learn Mode" : activeMode === "practice" ? "Practice Mode" : "Explore Mode"}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{currentTopic.title}</h1>
              </div>

              {/* ===== LEARN MODE — All 8 Layers ===== */}
              {activeMode === "learn" && (
                <div className="space-y-4 sm:space-y-5">
                  <SectionDivider label="Core Concept Framework" />
                  <SectionCard icon={Lightbulb} title="What" accent>{currentTopic.what}</SectionCard>
                  <SectionCard icon={Target} title="Why">{currentTopic.why}</SectionCard>
                  <SectionCard icon={Zap} title="When">{currentTopic.when}</SectionCard>
                  <SectionCard icon={Code2} title="How It Works" accent>{currentTopic.how}</SectionCard>
                  <SectionCard icon={Compass} title="Tech Ecosystem">{currentTopic.ecosystem}</SectionCard>
                  <SectionCard icon={Briefcase} title="Real-World Examples" accent>{currentTopic.realWorld}</SectionCard>

                  {/* Use Cases */}
                  <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                    <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /> Use Cases</h3>
                    <ul className="space-y-1.5">
                      {currentTopic.useCases.map((uc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span> {uc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages & Disadvantages */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-primary" /> Advantages</h3>
                      <ul className="space-y-1.5">
                        {currentTopic.advantages.map((a, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">+</span> {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-destructive" /> Disadvantages</h3>
                      <ul className="space-y-1.5">
                        {currentTopic.disadvantages.map((d, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-destructive mt-0.5">−</span> {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Interview & Resume */}
                  <SectionCard icon={AlertTriangle} title="Interview Perspective" accent>{currentTopic.interviewTip}</SectionCard>
                  <SectionCard icon={FileText} title="Resume Framing">
                    <code className="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground break-all">{currentTopic.resumeBullet}</code>
                  </SectionCard>

                  {videos.length > 0 && (
                    <>
                      <SectionDivider label="Video Resources" />
                      <VideoResources videos={videos} />
                    </>
                  )}

                  {moocs.length > 0 && (
                    <>
                      <SectionDivider label="MOOC References" />
                      <MOOCResources moocs={moocs} />
                    </>
                  )}

                  {blogs.length > 0 && (
                    <>
                      <SectionDivider label="Blogs & Documentation" />
                      <BlogResources blogs={blogs} />
                    </>
                  )}

                  {scenarios.length > 0 && (
                    <>
                      <SectionDivider label="Scenario-Based Problems" />
                      <ScenarioProblems scenarios={scenarios} onSelectScenario={() => setActiveMode("practice")} />
                    </>
                  )}

                  {codeExamples.length > 0 && (
                    <>
                      <SectionDivider label="Code Playground" />
                      <CodePlayground examples={codeExamples} />
                    </>
                  )}

                  <SectionDivider label="Git Publishing" />
                  <GitSimulation />

                  <SectionDivider label="Community" />
                  <CommunityPanel />

                  <SectionDivider label="Capstone Project" />
                  <CapstoneProject />
                </div>
              )}

              {/* ===== PRACTICE MODE ===== */}
              {activeMode === "practice" && (
                <div className="space-y-5 sm:space-y-6">
                  {scenarios.length > 0 && <ScenarioProblems scenarios={scenarios} onSelectScenario={() => {}} />}
                  <SectionDivider label="Code Playground" />
                  {codeExamples.length > 0 && <CodePlayground examples={codeExamples} />}
                  <SectionDivider label="Git Simulation" />
                  <GitSimulation />
                  <SectionDivider label="Community Solutions" />
                  <CommunityPanel />
                </div>
              )}

              {/* ===== EXPLORE MODE ===== */}
              {activeMode === "explore" && (
                <div className="space-y-5 sm:space-y-6">
                  <div className="rounded-xl border border-border bg-card p-5 sm:p-6 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h2 className="font-semibold text-foreground mb-2">AI Deep Dive</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Open the <span className="text-primary font-medium">AI Assistant</span> panel to explore <span className="font-medium text-foreground">{currentTopic.title}</span> with multiple LLMs.
                    </p>
                    <button onClick={() => setAiPanelOpen(true)} className="px-4 py-2 bg-gradient-brand text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      Open AI Assistant
                    </button>
                  </div>

                  <SectionDivider label="Knowledge Graph" />
                  <div className="rounded-xl border border-border bg-card p-5 sm:p-6 text-center">
                    <Network className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-3">Explore concept dependencies visually</p>
                    <button onClick={() => setGraphOpen(true)} className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                      Open Knowledge Graph
                    </button>
                  </div>

                  <SectionDivider label="Capstone Project" />
                  <CapstoneProject />
                </div>
              )}
            </motion.div>
          </div>
        </main>

        {/* AI Panel - overlay on mobile, side panel on desktop */}
        <AnimatePresence>
          {aiPanelOpen && !focusMode && (
            <MultiLLMPanel open={aiPanelOpen} onClose={() => setAiPanelOpen(false)} topicTitle={currentTopic.title} />
          )}
        </AnimatePresence>

        {/* Thinking Canvas - overlay on mobile, side panel on desktop */}
        <AnimatePresence>
          {canvasOpen && !focusMode && (
            <ThinkingCanvas open={canvasOpen} onClose={() => setCanvasOpen(false)} topicTitle={currentTopic.title} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
