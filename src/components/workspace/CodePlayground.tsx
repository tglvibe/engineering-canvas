import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Copy, Check, Code2 } from "lucide-react";

interface CodeExample {
  title: string;
  language: string;
  code: string;
  output: string;
}

export default function CodePlayground({ examples }: { examples: CodeExample[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [runOutput, setRunOutput] = useState<Record<number, string>>({});

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const runCode = (output: string, idx: number) => {
    setRunOutput(prev => ({ ...prev, [idx]: "" }));
    setTimeout(() => setRunOutput(prev => ({ ...prev, [idx]: output })), 800);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Code2 className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">Code Playground</h3>
        <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">{examples.length} examples</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-3 overflow-x-auto scrollbar-hide">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === i ? "bg-foreground text-background" : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {ex.title}
          </button>
        ))}
      </div>

      {/* Active Code */}
      {examples[activeTab] && (
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/50">
            <span className="text-xs font-mono text-muted-foreground">{examples[activeTab].language}</span>
            <div className="flex items-center gap-1">
              <button onClick={() => copyCode(examples[activeTab].code, activeTab)} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                {copiedIdx === activeTab ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => runCode(examples[activeTab].output, activeTab)} className="flex items-center gap-1 px-2.5 py-1 bg-gradient-brand text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 transition-opacity">
                <Play className="w-3 h-3" /> Run
              </button>
            </div>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-mono text-foreground leading-relaxed bg-foreground/[0.02]">
            <code>{examples[activeTab].code}</code>
          </pre>
          <AnimatePresence>
            {runOutput[activeTab] !== undefined && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-border bg-secondary/30">
                <div className="px-4 py-2 text-xs font-medium text-muted-foreground">Output</div>
                <pre className="px-4 pb-4 text-sm font-mono text-foreground whitespace-pre-wrap">{runOutput[activeTab]}</pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
