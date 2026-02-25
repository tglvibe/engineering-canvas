import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { languages } from "@/i18n";

export default function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
      >
        <Globe className="w-3.5 h-3.5" />
        {!compact && <span>{current.nativeLabel}</span>}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-48 max-h-72 overflow-y-auto rounded-xl border border-border bg-card shadow-lg z-[100] py-1">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                i18n.language === lang.code ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-medium">{lang.nativeLabel}</span>
              <span className="text-[10px] text-muted-foreground ml-auto">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
