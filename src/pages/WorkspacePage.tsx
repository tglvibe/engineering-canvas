import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft, ChevronDown, ChevronRight, BookOpen, Code2, Compass, Eye,
  MessageSquare, Lightbulb, Target, Briefcase, FileText, Zap, ThumbsUp, ThumbsDown,
  AlertTriangle, Send, Maximize2, Minimize2, Network, StickyNote, Brain, Rocket,
  Users, GraduationCap, Award, Globe
} from "lucide-react";
import logo from "@/assets/tgl-logo.png";
import { backendModules, topicVideos, topicBlogs, topicMOOCs, topicScenarios, topicCodeExamples } from "@/data/tracks";
import type { Topic, ScenarioProblem } from "@/data/tracks";

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
  const [activeMode, setActiveMode] = useState<string>("learn");
  const [activeTopic, setActiveTopic] = useState<string>("t1");
  const [expandedModules, setExpandedModules] = useState<string[]>(["m1"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [graphOpen, setGraphOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const modules = backendModules;
  const currentTopic = modules.flatMap(m => m.topics).find(t => t.id === activeTopic);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const SectionCard = ({ icon: Icon, title, children, accent = false }: { icon: any; title: string; children: React.ReactNode; accent?: boolean }) => (
    <div className={`rounded-xl border p-5 ${accent ? "border-primary/20 bg-primary/[0.02]" : "border-border bg-card"}`}>
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

      {/* Top bar */}
      {!focusMode && (
        <header className="h-12 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between px-4 shrink-0 z-40">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/tracks")} className="text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <img src={logo} alt="" className="h-5" />
            <span className="text-sm text-muted-foreground">/ Backend Engineering</span>
            <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-bold text-muted-foreground flex items-center gap-1">
              <Globe className="w-3 h-3" /> 10,000+ learners
            </span>
          </div>
          <div className="flex items-center gap-1">
            {/* Mode toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-0.5 mr-2">
              {modes.map(m => (
                <button
                  key={m.id}
                  onClick={() => setActiveMode(m.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeMode === m.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <m.icon className="w-3 h-3" />
                  {m.label}
                </button>
              ))}
            </div>
            <button onClick={() => setGraphOpen(true)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="Knowledge Graph">
              <Network className="w-4 h-4" />
            </button>
            <button onClick={() => setFocusMode(true)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="Focus Mode">
              <Maximize2 className="w-4 h-4" />
            </button>
            <button onClick={() => { setCanvasOpen(!canvasOpen); if (aiPanelOpen) setAiPanelOpen(false); }} className={`p-2 transition-colors ${canvasOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title="Thinking Canvas">
              <StickyNote className="w-4 h-4" />
            </button>
            <button onClick={() => { setAiPanelOpen(!aiPanelOpen); if (canvasOpen) setCanvasOpen(false); }} className={`p-2 transition-colors ${aiPanelOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title="AI Assistant">
              <Brain className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/dashboard")} className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="Dashboard">
              <Award className="w-4 h-4" />
            </button>
          </div>
        </header>
      )}

      {/* Focus mode bar */}
      {focusMode && (
        <header className="h-10 border-b border-border bg-background flex items-center justify-between px-4 shrink-0">
          <span className="text-xs font-medium text-muted-foreground">Focus Mode — {currentTopic.title}</span>
          <button onClick={() => setFocusMode(false)} className="text-muted-foreground hover:text-foreground">
            <Minimize2 className="w-4 h-4" />
          </button>
        </header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebarOpen && !focusMode && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="w-[260px] border-r border-border bg-sidebar shrink-0 overflow-y-auto scrollbar-hide"
          >
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

              {/* Sidebar quick links */}
              <div className="border-t border-border mt-3 pt-3 space-y-1">
                <button onClick={() => setGraphOpen(true)} className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                  <Network className="w-3.5 h-3.5" /> Knowledge Graph
                </button>
                <button onClick={() => navigate("/dashboard")} className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
                  <Award className="w-3.5 h-3.5" /> Dashboard
                </button>
              </div>
            </div>
          </motion.aside>
        )}

        {/* Sidebar toggle */}
        {!focusMode && (
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-card border border-border rounded-r-lg p-1 text-muted-foreground hover:text-foreground transition-colors"
            style={{ left: sidebarOpen ? 260 : 0 }}
          >
            {sidebarOpen ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>
        )}

        {/* Main content */}
        <main ref={contentRef} className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="max-w-4xl mx-auto px-6 py-8 pb-20">
            <motion.div key={activeTopic} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {/* Topic header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                    {modules.find(m => m.topics.some(t => t.id === activeTopic))?.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">
                    {activeMode === "learn" ? "Learn Mode" : activeMode === "practice" ? "Practice Mode" : "Explore Mode"}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-foreground">{currentTopic.title}</h1>
              </div>

              {/* ===== LEARN MODE — All 8 Layers ===== */}
              {activeMode === "learn" && (
                <div className="space-y-5">
                  {/* Layer 1: Core Concept Framework */}
                  <SectionDivider label="Core Concept Framework" />
                  <SectionCard icon={Lightbulb} title="What" accent>{currentTopic.what}</SectionCard>
                  <SectionCard icon={Target} title="Why">{currentTopic.why}</SectionCard>
                  <SectionCard icon={Zap} title="When">{currentTopic.when}</SectionCard>
                  <SectionCard icon={Code2} title="How It Works" accent>{currentTopic.how}</SectionCard>
                  <SectionCard icon={Compass} title="Tech Ecosystem">{currentTopic.ecosystem}</SectionCard>
                  <SectionCard icon={Briefcase} title="Real-World Examples" accent>{currentTopic.realWorld}</SectionCard>

                  {/* Use Cases */}
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-muted-foreground" /> Use Cases</h3>
                    <ul className="space-y-1.5">
                      {currentTopic.useCases.map((uc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">•</span> {uc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages & Disadvantages */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border bg-card p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-primary" /> Advantages</h3>
                      <ul className="space-y-1.5">
                        {currentTopic.advantages.map((a, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">+</span> {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5">
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
                    <code className="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground">{currentTopic.resumeBullet}</code>
                  </SectionCard>

                  {/* Layer 2: Public & Premium Videos */}
                  {videos.length > 0 && (
                    <>
                      <SectionDivider label="Video Resources" />
                      <VideoResources videos={videos} />
                    </>
                  )}

                  {/* Layer 3: MOOC References */}
                  {moocs.length > 0 && (
                    <>
                      <SectionDivider label="MOOC References" />
                      <MOOCResources moocs={moocs} />
                    </>
                  )}

                  {/* Layer 4: Blog & Documentation */}
                  {blogs.length > 0 && (
                    <>
                      <SectionDivider label="Blogs & Documentation" />
                      <BlogResources blogs={blogs} />
                    </>
                  )}

                  {/* Layer 5: Scenario-Based Problems */}
                  {scenarios.length > 0 && (
                    <>
                      <SectionDivider label="Scenario-Based Problems" />
                      <ScenarioProblems scenarios={scenarios} onSelectScenario={() => setActiveMode("practice")} />
                    </>
                  )}

                  {/* Layer 6: Code Playground */}
                  {codeExamples.length > 0 && (
                    <>
                      <SectionDivider label="Code Playground" />
                      <CodePlayground examples={codeExamples} />
                    </>
                  )}

                  {/* Layer 7: Git Publishing Simulation */}
                  <SectionDivider label="Git Publishing" />
                  <GitSimulation />

                  {/* Layer 8: Community Solutions */}
                  <SectionDivider label="Community" />
                  <CommunityPanel />

                  {/* Capstone Project */}
                  <SectionDivider label="Capstone Project" />
                  <CapstoneProject />
                </div>
              )}

              {/* ===== PRACTICE MODE ===== */}
              {activeMode === "practice" && (
                <div className="space-y-6">
                  {scenarios.length > 0 && (
                    <ScenarioProblems scenarios={scenarios} onSelectScenario={() => {}} />
                  )}
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
                <div className="space-y-6">
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
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
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
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
