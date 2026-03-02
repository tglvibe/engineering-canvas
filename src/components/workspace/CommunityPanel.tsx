import { useState } from "react";
import { motion } from "framer-motion";
import { Users, ThumbsUp, MessageSquare, Trophy, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { communityUsers, communitySolutions, type CommunitySolution } from "@/data/tracks";

export default function CommunityPanel() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>("cs1");
  const getUser = (userId: string) => communityUsers.find(u => u.id === userId);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">{t("workspace.communitySolutions")}</h3>
          <span className="px-1.5 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{communitySolutions.length}</span>
        </div>
        <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3" /> 10,000+ {t("common.learners")}</span>
      </div>
      <div className="rounded-lg border border-primary/20 bg-primary/[0.02] p-3 mb-3">
        <div className="flex items-center gap-1.5 mb-2"><Sparkles className="w-3.5 h-3.5 text-primary" /><span className="text-xs font-semibold text-foreground">{t("workspace.aiSummaryBestApproach")}</span></div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          The top-voted solutions converge on a horizontal scaling strategy with Redis-backed sessions, JWT for stateless auth, and PostgreSQL with connection pooling. The winning approach emphasizes starting with a well-modularized monolith before extracting microservices, with comprehensive observability from day one.
        </p>
      </div>
      <div className="space-y-2">
        {communitySolutions.map(sol => {
          const user = getUser(sol.userId);
          return (
            <div key={sol.id} className={`rounded-lg border bg-card overflow-hidden transition-all ${sol.isTopSolution ? "border-primary/30" : "border-border"}`}>
              <button onClick={() => setExpanded(expanded === sol.id ? null : sol.id)} className="w-full flex items-center gap-3 p-3 text-left">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${sol.isTopSolution ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>{user?.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{user?.name}</span>
                    {sol.isTopSolution && <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary"><Trophy className="w-3 h-3" /> {t("workspace.topSolution")}</span>}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                    <span>{user?.role}</span><span>{user?.level}</span><span>{sol.createdAt}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><ThumbsUp className="w-3 h-3" /> {sol.upvotes}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><MessageSquare className="w-3 h-3" /> {sol.comments}</span>
                  {expanded === sol.id ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
                </div>
              </button>
              {expanded === sol.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-3 pb-3 border-t border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2">{sol.summary}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {t("workspace.upvote")}</button>
                    <button className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {t("workspace.comment")}</button>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
