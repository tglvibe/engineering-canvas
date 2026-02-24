import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyNote, Plus, Trash2, Sparkles, BookOpen, X, Download } from "lucide-react";

interface Note {
  id: string;
  text: string;
  type: "note" | "flashcard" | "highlight";
  aiResponse?: string;
  createdAt: string;
}

export default function ThinkingCanvas({ open, onClose, topicTitle }: { open: boolean; onClose: () => void; topicTitle: string }) {
  const [notes, setNotes] = useState<Note[]>([
    { id: "n1", text: "REST is stateless — each request must contain all info needed", type: "highlight", createdAt: "2 min ago" },
    { id: "n2", text: "Q: What is idempotency?\nA: An operation that produces the same result regardless of how many times it's called.", type: "flashcard", createdAt: "5 min ago" },
  ]);
  const [newNote, setNewNote] = useState("");
  const [askingAI, setAskingAI] = useState<string | null>(null);

  const addNote = () => {
    if (!newNote.trim()) return;
    setNotes(prev => [{ id: `n${Date.now()}`, text: newNote, type: "note", createdAt: "Just now" }, ...prev]);
    setNewNote("");
  };

  const convertToFlashcard = (id: string) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, type: "flashcard" as const } : n));
  };

  const askAI = (id: string, text: string) => {
    setAskingAI(id);
    setTimeout(() => {
      setNotes(prev => prev.map(n => n.id === id ? { ...n, aiResponse: `In the context of ${topicTitle}, this concept is important because it directly impacts system reliability and scalability. The key insight is that understanding this at a deep level enables better architectural decisions in production systems.` } : n));
      setAskingAI(null);
    }, 1500);
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  if (!open) return null;

  return (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 340, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      className="w-[340px] border-l border-border bg-card shrink-0 flex flex-col overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <StickyNote className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Thinking Canvas</h3>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 text-muted-foreground hover:text-foreground" title="Export Notes">
            <Download className="w-3.5 h-3.5" />
          </button>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add note */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <textarea
            value={newNote}
            onChange={e => setNewNote(e.target.value)}
            placeholder="Add a note, highlight, or thought..."
            rows={2}
            className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-muted-foreground">Ctrl+Enter to save</span>
          <button onClick={addNote} disabled={!newNote.trim()} className="flex items-center gap-1 px-3 py-1.5 bg-gradient-brand text-primary-foreground text-xs font-medium rounded-md hover:opacity-90 disabled:opacity-50">
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
      </div>

      {/* Notes list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide">
        {notes.map(note => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg p-3 border text-sm ${
              note.type === "flashcard" ? "border-primary/20 bg-primary/[0.03]" :
              note.type === "highlight" ? "border-accent/30 bg-accent/5 border-l-4 border-l-accent" :
              "border-border bg-card"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 mb-1">
                {note.type === "flashcard" && <BookOpen className="w-3 h-3 text-primary" />}
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {note.type === "flashcard" ? "Flashcard" : note.type === "highlight" ? "Highlight" : "Note"}
                </span>
                <span className="text-[10px] text-muted-foreground/50">{note.createdAt}</span>
              </div>
              <button onClick={() => deleteNote(note.id)} className="text-muted-foreground/40 hover:text-destructive p-0.5">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs text-foreground leading-relaxed whitespace-pre-wrap">{note.text}</p>

            {note.aiResponse && (
              <div className="mt-2 p-2 rounded-md bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-1 mb-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-semibold text-primary">AI Insight</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{note.aiResponse}</p>
              </div>
            )}

            <div className="flex items-center gap-1.5 mt-2">
              {note.type !== "flashcard" && (
                <button onClick={() => convertToFlashcard(note.id)} className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                  → Flashcard
                </button>
              )}
              {!note.aiResponse && (
                <button
                  onClick={() => askAI(note.id, note.text)}
                  disabled={askingAI === note.id}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors disabled:opacity-50"
                >
                  {askingAI === note.id ? "Thinking..." : "Ask AI"}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}
