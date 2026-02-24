import { motion } from "framer-motion";
import { Rocket, Check, Circle, ArrowRight } from "lucide-react";
import { backendCapstone } from "@/data/tracks";

export default function CapstoneProject() {
  const completedCount = backendCapstone.phases.filter(p => p.completed).length;

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Rocket className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">Capstone Project</h3>
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/[0.02] p-4 mb-4">
        <h4 className="font-bold text-foreground text-base">{backendCapstone.title}</h4>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{backendCapstone.description}</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(completedCount / backendCapstone.phases.length) * 100}%` }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gradient-brand rounded-full"
            />
          </div>
          <span className="text-xs font-mono text-muted-foreground">{completedCount}/{backendCapstone.phases.length}</span>
        </div>
      </div>

      {/* Phase timeline */}
      <div className="space-y-1">
        {backendCapstone.phases.map((phase, i) => (
          <div key={i} className={`flex gap-3 p-3 rounded-lg border transition-all ${
            phase.completed ? "border-primary/20 bg-primary/[0.02]" : "border-border bg-card"
          }`}>
            <div className="flex flex-col items-center shrink-0">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                phase.completed ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}>
                {phase.completed ? <Check className="w-3 h-3" /> : <span className="text-[10px] font-bold">{i + 1}</span>}
              </div>
              {i < backendCapstone.phases.length - 1 && <div className={`w-px flex-1 mt-1 ${phase.completed ? "bg-primary/30" : "bg-border"}`} />}
            </div>
            <div className="flex-1 min-w-0 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{phase.module}</span>
                {phase.completed && <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-primary/10 text-primary">Done</span>}
              </div>
              <h5 className="text-sm font-semibold text-foreground mt-0.5">{phase.title}</h5>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{phase.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {phase.components.map(c => (
                  <span key={c} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-secondary text-muted-foreground">{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
