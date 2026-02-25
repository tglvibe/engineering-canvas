import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, GitCommit, GitPullRequest, GitMerge, File, Folder, ChevronRight, ChevronDown, Check, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { gitFiles } from "@/data/tracks";

const reviewComments = [
  { author: "Priya S.", avatar: "PS", line: 12, comment: "Consider adding input validation here before passing to the service layer.", status: "suggestion" },
  { author: "Arjun M.", avatar: "AM", line: 5, comment: "LGTM — clean separation of concerns. Minor: add error types for better client handling.", status: "approved" },
  { author: "CI Bot", avatar: "CI", line: 0, comment: "All 14 tests passing. Coverage: 87%. No security vulnerabilities detected.", status: "ci" },
];

export default function GitSimulation() {
  const { t } = useTranslation();
  const [activeFile, setActiveFile] = useState<string | null>("index.ts");
  const [branch] = useState("feature/user-service");
  const [commitMsg, setCommitMsg] = useState("");
  const [pushed, setPushed] = useState(false);
  const [prCreated, setPrCreated] = useState(false);
  const [merging, setMerging] = useState(false);
  const [merged, setMerged] = useState(false);
  const [expandedDirs, setExpandedDirs] = useState<string[]>(["src"]);
  const [showFileTree, setShowFileTree] = useState(false);

  const toggleDir = (dir: string) => setExpandedDirs(prev => prev.includes(dir) ? prev.filter(d => d !== dir) : [...prev, dir]);

  const pushToRemote = () => {
    if (!commitMsg.trim()) return;
    setPushed(false);
    setTimeout(() => setPushed(true), 1000);
    setTimeout(() => setPrCreated(true), 2000);
  };

  const mergePR = () => { setMerging(true); setTimeout(() => { setMerging(false); setMerged(true); }, 2000); };

  const currentFileContent = (() => {
    for (const [, files] of Object.entries(gitFiles)) {
      const f = files.find(f => f.name === activeFile);
      if (f) return f.content;
    }
    return "";
  })();

  const FileTree = () => (
    <div className="text-xs">
      {Object.entries(gitFiles).map(([dir, files]) => (
        <div key={dir} className="mb-1">
          <button onClick={() => toggleDir(dir)} className="flex items-center gap-1 w-full px-1.5 py-1 rounded hover:bg-secondary transition-colors text-muted-foreground font-medium">
            {expandedDirs.includes(dir) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            <Folder className="w-3 h-3 text-primary" />
            {dir === "root" ? "/" : `/${dir}`}
          </button>
          <AnimatePresence>
            {expandedDirs.includes(dir) && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                {files.map(f => (
                  <button key={f.name} onClick={() => { setActiveFile(f.name); setShowFileTree(false); }}
                    className={`flex items-center gap-1.5 w-full px-1.5 py-1 pl-6 rounded transition-colors ${activeFile === f.name ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-secondary"}`}>
                    <File className="w-3 h-3" /> {f.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <GitBranch className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground">{t("workspace.gitPublishingSimulation")}</h3>
      </div>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 bg-secondary/50 border-b border-border overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-card border border-border text-[11px] sm:text-xs font-mono text-foreground whitespace-nowrap shrink-0">
            <GitBranch className="w-3 h-3 text-primary" /> {branch}
          </div>
          {merged && <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold shrink-0"><Check className="w-3 h-3" /> {t("workspace.merged")}</span>}
          <button onClick={() => setShowFileTree(!showFileTree)} className="sm:hidden ml-auto px-2 py-1 rounded-md bg-card border border-border text-[11px] font-medium text-foreground shrink-0">{t("workspace.files")}</button>
        </div>
        <AnimatePresence>
          {showFileTree && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden border-b border-border bg-card p-2 sm:hidden"><FileTree /></motion.div>
          )}
        </AnimatePresence>
        <div className="flex" style={{ minHeight: 240 }}>
          <div className="hidden sm:block w-44 lg:w-48 border-r border-border bg-card p-2 shrink-0 overflow-y-auto"><FileTree /></div>
          <div className="flex-1 overflow-auto min-w-0">
            <div className="px-3 py-2 bg-secondary/30 border-b border-border text-xs font-mono text-muted-foreground">{activeFile || t("workspace.selectAFile")}</div>
            <pre className="p-3 sm:p-4 text-[11px] sm:text-xs font-mono text-foreground leading-relaxed whitespace-pre-wrap break-all">{currentFileContent}</pre>
          </div>
        </div>
        <div className="border-t border-border bg-secondary/30 p-3 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <GitCommit className="w-4 h-4 text-muted-foreground shrink-0" />
              <input value={commitMsg} onChange={e => setCommitMsg(e.target.value)} placeholder={t("workspace.commitMessage")}
                className="flex-1 min-w-0 px-3 py-2 rounded-md border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 font-mono text-xs" />
            </div>
            <button onClick={pushToRemote} disabled={!commitMsg.trim()} className="px-3 py-2 bg-gradient-brand text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap shrink-0">
              {t("workspace.pushToRemote")}
            </button>
          </div>
          <AnimatePresence>
            {pushed && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="font-mono truncate">{t("workspace.pushedTo")} origin/{branch} → {commitMsg}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {prCreated && !merged && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-border bg-card p-3 space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <GitPullRequest className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground truncate">PR #47: {commitMsg || "Implementation"}</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 shrink-0">{t("workspace.open")}</span>
                </div>
                <div className="text-xs text-muted-foreground truncate">{branch} → main · 3 {t("workspace.filesChanged")} · +142 −12</div>
                <div className="space-y-2">
                  {reviewComments.map((rc, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-md bg-secondary/50 border border-border">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${rc.status === "ci" ? "bg-green-100 text-green-700" : "bg-primary/10 text-primary"}`}>{rc.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-medium text-foreground">{rc.author}</span>
                          {rc.line > 0 && <span className="text-[10px] text-muted-foreground font-mono">line {rc.line}</span>}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{rc.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={mergePR} disabled={merging} className="flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-70">
                  {merging ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full" /> {t("workspace.merging")}</>
                  ) : (
                    <><GitMerge className="w-3.5 h-3.5" /> {t("workspace.squashAndMerge")}</>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {merged && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200">
                <GitMerge className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-green-700">{t("workspace.prMergedSuccess")}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
