import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ChevronDown, ChevronRight, Clock, Briefcase, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ScenarioProblem } from "@/data/tracks";

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-primary/10 text-primary",
  Hard: "bg-destructive/10 text-destructive",
  Expert: "bg-foreground/10 text-foreground",
};

export default function ScenarioProblems({ scenarios, onSelectScenario }: { scenarios: ScenarioProblem[]; onSelectScenario: (s: ScenarioProblem) => void }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Target className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">{t("workspace.scenarioBasedProblems")}</h3>
        <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">{scenarios.length}</span>
      </div>
      <div className="space-y-2">
        {scenarios.map((s, i) => (
          <div key={s.id} className="rounded-lg border border-border bg-card overflow-hidden hover:border-primary/20 transition-all">
            <button onClick={() => setExpanded(expanded === s.id ? null : s.id)} className="w-full flex items-center gap-3 p-3 text-left">
              <span className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground shrink-0">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${difficultyColor[s.difficulty]}`}>{s.difficulty}</span>
                  <h4 className="text-sm font-medium text-foreground truncate">{s.title}</h4>
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {s.domain}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {s.estimatedTime}</span>
                </div>
              </div>
              {expanded === s.id ? <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
            </button>
            <AnimatePresence>
              {expanded === s.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="px-4 pb-4 pt-1 border-t border-border space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.context}</p>
                    <div>
                      <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">{t("workspace.constraints")}</h5>
                      <ul className="space-y-1">
                        {s.constraints.map((c, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">→</span> {c}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-2.5 rounded-md bg-secondary/50 border border-border">
                      <h5 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">{t("workspace.deliverable")}</h5>
                      <p className="text-sm text-muted-foreground">{s.deliverable}</p>
                    </div>
                    <button onClick={() => onSelectScenario(s)} className="px-4 py-2 bg-gradient-brand text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      {t("workspace.startThisChallenge")}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
