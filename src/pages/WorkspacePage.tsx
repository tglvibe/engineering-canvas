import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft, ChevronDown, ChevronRight, BookOpen, Code2, Compass, Eye, EyeOff,
  MessageSquare, Play, Copy, Check, Lightbulb, Target, Briefcase, FileText,
  Zap, AlertTriangle, ThumbsUp, ThumbsDown, GitBranch, Send, X, Maximize2, Minimize2
} from "lucide-react";
import logo from "@/assets/tgl-logo.png";
import { backendModules } from "@/data/tracks";
import type { Topic } from "@/data/tracks";

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
  const [focusMode, setFocusMode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [aiMessages, setAiMessages] = useState<{ role: string; content: string }[]>([]);
  const [aiInput, setAiInput] = useState("");
  const [solutionText, setSolutionText] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const modules = backendModules;
  const currentTopic = modules.flatMap((m) => m.topics).find((t) => t.id === activeTopic);

  const toggleModule = (id: string) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const runCode = (output: string) => {
    setCodeOutput(null);
    setTimeout(() => setCodeOutput(output), 800);
  };

  const sendAiMessage = () => {
    if (!aiInput.trim()) return;
    const userMsg = { role: "user", content: aiInput };
    setAiMessages((prev) => [...prev, userMsg]);
    setAiInput("");
    setTimeout(() => {
      setAiMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Great question about "${aiInput.slice(0, 40)}..." in the context of ${currentTopic?.title}. Here's a concise answer:\n\nThis concept is fundamental to backend engineering. The key insight is that understanding the underlying mechanics helps you make better architectural decisions. In production systems at scale, this becomes critical for maintaining reliability and performance.\n\nWould you like me to go deeper into any specific aspect?`,
        },
      ]);
    }, 1200);
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

  if (!currentTopic) return null;

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Top bar */}
      {!focusMode && (
        <header className="h-12 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between px-4 shrink-0 z-50">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/tracks")} className="text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <img src={logo} alt="" className="h-5" />
            <span className="text-sm text-muted-foreground">/ Backend Engineering</span>
          </div>
          <div className="flex items-center gap-1">
            {/* Mode toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-0.5 mr-2">
              {modes.map((m) => (
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
            <button onClick={() => setFocusMode(true)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" title="Focus Mode">
              <Maximize2 className="w-4 h-4" />
            </button>
            <button onClick={() => setAiPanelOpen(!aiPanelOpen)} className={`p-2 transition-colors ${aiPanelOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} title="AI Assistant">
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </header>
      )}

      {/* Focus mode bar */}
      {focusMode && (
        <header className="h-10 border-b border-border bg-background flex items-center justify-between px-4 shrink-0">
          <span className="text-xs font-medium text-muted-foreground">Focus Mode</span>
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
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="w-[280px] border-r border-border bg-sidebar shrink-0 overflow-y-auto scrollbar-hide"
          >
            <div className="p-4">
              <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outline</h2>
              {modules.map((mod) => (
                <div key={mod.id} className="mb-1">
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-sidebar-accent transition-colors"
                  >
                    {expandedModules.includes(mod.id) ? (
                      <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                    {mod.title}
                  </button>
                  <AnimatePresence>
                    {expandedModules.includes(mod.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {mod.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => setActiveTopic(topic.id)}
                            className={`w-full text-left px-4 pl-8 py-1.5 text-sm rounded-lg transition-colors ${
                              activeTopic === topic.id
                                ? "text-primary font-medium bg-primary/5"
                                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
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
            </div>
          </motion.aside>
        )}

        {/* Sidebar toggle */}
        {!focusMode && (
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-card border border-border rounded-r-lg p-1 text-muted-foreground hover:text-foreground transition-colors"
            style={{ left: sidebarOpen ? 280 : 0 }}
          >
            {sidebarOpen ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>
        )}

        {/* Main content */}
        <main ref={contentRef} className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="max-w-3xl mx-auto px-6 py-8 pb-20">
            <motion.div key={activeTopic} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {/* Topic header */}
              <h1 className="text-3xl font-bold text-foreground mb-8">{currentTopic.title}</h1>

              {/* Learn Mode */}
              {activeMode === "learn" && (
                <div className="space-y-5">
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
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span> {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages & Disadvantages */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border bg-card p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsUp className="w-4 h-4 text-primary" /> Advantages</h3>
                      <ul className="space-y-1.5">
                      {currentTopic.advantages.map((a, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">+</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5">
                      <h3 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2"><ThumbsDown className="w-4 h-4 text-destructive" /> Disadvantages</h3>
                      <ul className="space-y-1.5">
                        {currentTopic.disadvantages.map((d, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-destructive mt-0.5">−</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Interview & Resume */}
                  <SectionCard icon={AlertTriangle} title="Interview Perspective" accent>{currentTopic.interviewTip}</SectionCard>
                  <SectionCard icon={FileText} title="Resume Framing">
                    <code className="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground">{currentTopic.resumeBullet}</code>
                  </SectionCard>

                  {/* Code Block */}
                  {currentTopic.codeSnippet && (
                    <div className="rounded-xl border border-border bg-foreground/[0.02] overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/50">
                        <span className="text-xs font-mono text-muted-foreground">{currentTopic.codeSnippet.language}</span>
                        <div className="flex items-center gap-1">
                          <button onClick={() => copyCode(currentTopic.codeSnippet!.code)} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                            {copiedCode ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button onClick={() => runCode(currentTopic.codeSnippet!.output)} className="flex items-center gap-1 px-2.5 py-1 bg-gradient-brand text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 transition-opacity">
                            <Play className="w-3 h-3" /> Run
                          </button>
                        </div>
                      </div>
                      <pre className="p-4 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                        <code>{currentTopic.codeSnippet.code}</code>
                      </pre>
                      <AnimatePresence>
                        {codeOutput && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-t border-border bg-secondary/30"
                          >
                            <div className="px-4 py-2 text-xs font-medium text-muted-foreground">Output</div>
                            <pre className="px-4 pb-4 text-sm font-mono text-foreground whitespace-pre-wrap">{codeOutput}</pre>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              )}

              {/* Practice Mode */}
              {activeMode === "practice" && currentTopic.scenario && (
                <div className="space-y-5">
                  <div className="rounded-xl border border-primary/20 bg-primary/[0.02] p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-primary" />
                      <h2 className="font-semibold text-foreground">{currentTopic.scenario.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{currentTopic.scenario.context}</p>
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Constraints</h4>
                      <ul className="space-y-1">
                        {currentTopic.scenario.constraints.map((c, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">→</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Deliverable</h4>
                      <p className="text-sm text-muted-foreground">{currentTopic.scenario.deliverable}</p>
                    </div>
                  </div>

                  {/* Solution editor */}
                  <div className="rounded-xl border border-border overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/50 border-b border-border">
                      <span className="text-xs font-medium text-muted-foreground">Your Solution</span>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground border border-border rounded-md transition-colors">
                          <GitBranch className="w-3 h-3" /> Push to Git
                        </button>
                      </div>
                    </div>
                    <textarea
                      value={solutionText}
                      onChange={(e) => setSolutionText(e.target.value)}
                      placeholder="Write your solution here..."
                      className="w-full p-4 bg-card text-foreground text-sm font-mono min-h-[200px] resize-y focus:outline-none placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
              )}

              {/* Explore Mode */}
              {activeMode === "explore" && (
                <div className="space-y-5">
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <Compass className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h2 className="font-semibold text-foreground mb-2">AI Deep Dive</h2>
                    <p className="text-sm text-muted-foreground mb-4">Ask anything about <span className="text-primary font-medium">{currentTopic.title}</span>. The AI knows your context.</p>
                    <div className="flex items-center gap-2 max-w-md mx-auto">
                      <input
                        value={aiInput}
                        onChange={(e) => setAiInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendAiMessage()}
                        placeholder="Ask about this topic..."
                        className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary"
                      />
                      <button onClick={sendAiMessage} className="p-2.5 bg-gradient-brand text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {aiMessages.length > 0 && (
                    <div className="space-y-3">
                      {aiMessages.map((msg, i) => (
                        <div key={i} className={`rounded-xl p-4 text-sm ${msg.role === "user" ? "bg-secondary text-foreground ml-8" : "bg-card border border-border text-muted-foreground mr-8"}`}>
                          <div className="text-xs font-medium text-muted-foreground mb-1.5">{msg.role === "user" ? "You" : "AI Assistant"}</div>
                          <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </main>

        {/* AI Panel */}
        <AnimatePresence>
          {aiPanelOpen && !focusMode && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 340, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="w-[340px] border-l border-border bg-card shrink-0 flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <h3 className="text-sm font-semibold text-foreground">AI Assistant</h3>
                <button onClick={() => setAiPanelOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
                {aiMessages.length === 0 && (
                  <div className="text-center py-8">
                    <MessageSquare className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Ask about <span className="text-primary font-medium">{currentTopic.title}</span></p>
                  </div>
                )}
                {aiMessages.map((msg, i) => (
                  <div key={i} className={`rounded-lg p-3 text-sm ${msg.role === "user" ? "bg-secondary text-foreground" : "bg-primary/5 text-foreground border border-primary/10"}`}>
                    <div className="text-xs font-medium text-muted-foreground mb-1">{msg.role === "user" ? "You" : "AI"}</div>
                    <div className="whitespace-pre-wrap leading-relaxed text-muted-foreground">{msg.content}</div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <input
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendAiMessage()}
                    placeholder="Ask anything..."
                    className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                  <button onClick={sendAiMessage} className="p-2 bg-gradient-brand text-primary-foreground rounded-lg hover:opacity-90">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
