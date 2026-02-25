import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, X, Send, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const models = [
  { id: "gpt", name: "GPT-4o", provider: "OpenAI", color: "bg-green-500" },
  { id: "claude", name: "Claude 3.5", provider: "Anthropic", color: "bg-orange-500" },
  { id: "gemini", name: "Gemini Pro", provider: "Google", color: "bg-blue-500" },
  { id: "llama", name: "Llama 3.1", provider: "Meta", color: "bg-purple-500" },
  { id: "mistral", name: "Mistral Large", provider: "Mistral AI", color: "bg-rose-500" },
  { id: "deepseek", name: "DeepSeek V3", provider: "DeepSeek", color: "bg-cyan-500" },
];

const mockResponses: Record<string, (topic: string, q: string) => string> = {
  gpt: (t, q) => `[GPT-4o] Regarding "${q}" in the context of ${t}:\n\nThis is a nuanced topic. The key considerations are:\n\n1. **Architectural Impact**: This directly affects how you structure your system boundaries and data flow patterns.\n\n2. **Trade-offs**: Consider latency vs. throughput, consistency vs. availability, and coupling vs. autonomy.\n\n3. **Production Reality**: At scale, you'll need to implement circuit breakers, retry logic, and graceful degradation.`,
  claude: (t, q) => `[Claude 3.5] Let me think through "${q}" step by step:\n\n**Core Insight**: The fundamental principle here relates to distributed systems theory and practical engineering constraints.\n\n**Key Considerations**:\n- Start with the simplest solution that works\n- Measure before optimizing\n- Design for failure from day one\n\n**Recommendation**: Begin with a monolithic approach, establish clear module boundaries, then extract services only when you have data to justify the complexity.`,
  gemini: (t, q) => `[Gemini Pro] Great question about "${q}"!\n\n**Summary**: This connects to several core concepts in ${t}.\n\n**Technical Deep Dive**:\n- The underlying mechanism relies on event-driven architecture patterns\n- Connection pooling and resource management are critical\n- Consider implementing the bulkhead pattern for isolation\n\n**Real-world Example**: Google's internal systems handle this through a combination of Spanner for consistency and Bigtable for throughput.`,
  llama: (t, q) => `[Llama 3.1] Analyzing "${q}" from an open-source perspective:\n\n**Approach**: The open-source ecosystem provides excellent tools for this:\n\n1. **PostgreSQL** — Battle-tested, extensible, strong community\n2. **Redis** — Sub-millisecond latency for caching layers\n3. **Kafka** — Proven event streaming at massive scale\n\n**Community Insight**: The most successful implementations combine these tools with clear domain boundaries and comprehensive monitoring.`,
  mistral: (t, q) => `[Mistral Large] For "${q}" in ${t}:\n\n**European Engineering Perspective**:\n\nThis question touches on fundamental software architecture principles. The key is finding the right abstraction level.\n\n**Practical Guidelines**:\n- Use domain-driven design to identify bounded contexts\n- Implement event sourcing for audit trails\n- Consider CQRS for read-heavy workloads\n\n**Data Privacy Note**: Ensure GDPR compliance in your data layer design.`,
  deepseek: (t, q) => `[DeepSeek V3] Deep analysis of "${q}":\n\n**Technical Architecture**:\n\nFrom a systems engineering perspective, this requires careful consideration of:\n\n1. **Consistency Model**: Choose between strong, eventual, or causal consistency based on your use case\n2. **Fault Tolerance**: Implement the saga pattern for distributed transactions\n3. **Observability**: Instrument with OpenTelemetry for end-to-end tracing\n\n**Performance**: Expect 10-100x improvement with proper indexing and caching strategies.`,
};

type Mode = "single" | "multi" | "consultant";

export default function MultiLLMPanel({ open, onClose, topicTitle }: { open: boolean; onClose: () => void; topicTitle: string }) {
  const { t } = useTranslation();
  const [mode, setMode] = useState<Mode>("single");
  const [selectedModel, setSelectedModel] = useState("gpt");
  const [enabledModels, setEnabledModels] = useState<string[]>(["gpt", "claude", "gemini", "llama", "mistral", "deepseek"]);
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [consultantAnswer, setConsultantAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleModel = (id: string) => setEnabledModels(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]);

  const sendQuery = () => {
    if (!input.trim()) return;
    setLoading(true); setResponses({}); setConsultantAnswer("");
    if (mode === "single") {
      setTimeout(() => { setResponses({ [selectedModel]: mockResponses[selectedModel](topicTitle, input) }); setLoading(false); }, 1200);
    } else {
      enabledModels.forEach((m, i) => {
        setTimeout(() => {
          setResponses(prev => ({ ...prev, [m]: mockResponses[m](topicTitle, input) }));
          if (i === enabledModels.length - 1) {
            if (mode === "consultant") {
              setTimeout(() => {
                setConsultantAnswer(`**Consolidated Consultant Answer**\n\nSynthesizing insights from ${enabledModels.length} models on "${input}":\n\n**Consensus Points:**\n- All models agree on the importance of starting simple and iterating\n- Domain-driven design is universally recommended\n- Observability and monitoring are non-negotiable at scale\n\n**Best Recommendation:**\nStart with a well-structured monolith using PostgreSQL, add Redis caching for hot paths, implement event-driven patterns for async workflows, and extract microservices only when scaling data supports it.`);
                setLoading(false);
              }, 800);
            } else setLoading(false);
          }
        }, 800 + i * 600);
      });
    }
    setInput("");
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />
      <motion.aside initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[380px] lg:w-[420px] lg:relative lg:z-auto border-l border-border bg-card shrink-0 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <div className="flex items-center gap-2"><Brain className="w-4 h-4 text-primary" /><h3 className="text-sm font-semibold text-foreground">{t("workspace.aiAssistant")}</h3></div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
        </div>
        <div className="flex gap-1 px-3 py-2 border-b border-border shrink-0">
          {([{ id: "single" as Mode, label: t("workspace.singleLLM") }, { id: "multi" as Mode, label: t("workspace.multiLLM") }, { id: "consultant" as Mode, label: t("workspace.consultant") }]).map(m => (
            <button key={m.id} onClick={() => setMode(m.id)} className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${mode === m.id ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>{m.label}</button>
          ))}
        </div>
        {mode === "single" && (
          <div className="flex flex-wrap gap-1 px-3 py-2 border-b border-border shrink-0">
            {models.map(m => (
              <button key={m.id} onClick={() => setSelectedModel(m.id)} className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium transition-all ${selectedModel === m.id ? "bg-primary/10 text-primary border border-primary/20" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${m.color}`} /> {m.name}
              </button>
            ))}
          </div>
        )}
        {(mode === "multi" || mode === "consultant") && (
          <div className="px-3 py-2 border-b border-border space-y-1 shrink-0">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mb-1">{t("workspace.activeModels")}</div>
            <div className="flex flex-wrap gap-1">
              {models.map(m => (
                <button key={m.id} onClick={() => toggleModel(m.id)} className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium transition-all ${enabledModels.includes(m.id) ? "bg-primary/10 text-primary border border-primary/20" : "bg-secondary/50 text-muted-foreground/50 line-through"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${enabledModels.includes(m.id) ? m.color : "bg-muted-foreground/30"}`} /> {m.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-hide">
          {Object.keys(responses).length === 0 && !loading && (
            <div className="text-center py-12">
              <Brain className="w-8 h-8 text-muted-foreground/20 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                {mode === "multi" ? t("workspace.compareResponses") : mode === "consultant" ? t("workspace.synthesizedAnswer") : `${t("workspace.ask")} ${models.find(m => m.id === selectedModel)?.name}`}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">{t("workspace.context")}: {topicTitle}</p>
            </div>
          )}
          {Object.entries(responses).map(([modelId, response]) => {
            const model = models.find(m => m.id === modelId);
            return (
              <motion.div key={modelId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-border bg-card p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className={`w-2 h-2 rounded-full ${model?.color}`} />
                  <span className="text-xs font-semibold text-foreground">{model?.name}</span>
                  <span className="text-[10px] text-muted-foreground">{model?.provider}</span>
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">{response}</div>
              </motion.div>
            );
          })}
          {consultantAnswer && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border-2 border-primary/30 bg-primary/[0.03] p-4">
              <div className="flex items-center gap-2 mb-3"><Sparkles className="w-4 h-4 text-primary" /><span className="text-sm font-bold text-foreground">{t("workspace.consultantSynthesis")}</span></div>
              <div className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">{consultantAnswer}</div>
            </motion.div>
          )}
          {loading && (
            <div className="flex items-center gap-2 p-3">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full" />
              <span className="text-xs text-muted-foreground">{t("workspace.generatingResponses")}</span>
            </div>
          )}
        </div>
        <div className="p-3 border-t border-border shrink-0">
          <div className="flex items-center gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendQuery()}
              placeholder={`${t("workspace.ask")} ${mode === "single" ? models.find(m => m.id === selectedModel)?.name : t("workspace.askAllModels")}...`}
              className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
            <button onClick={sendQuery} disabled={loading} className="p-2.5 bg-gradient-brand text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50"><Send className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
