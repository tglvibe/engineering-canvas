import { GraduationCap, Star, Users, Clock } from "lucide-react";
import type { MOOCResource } from "@/data/tracks";

export default function MOOCResources({ moocs }: { moocs: MOOCResource[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <GraduationCap className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-foreground">MOOC References</h3>
        <span className="px-1.5 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{moocs.length}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {moocs.map(mooc => (
          <div key={mooc.id} className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <div className="flex items-start justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary text-foreground">{mooc.platform}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-primary fill-primary" />
                <span className="text-xs font-semibold text-foreground">{mooc.rating}</span>
              </div>
            </div>
            <h4 className="text-sm font-medium text-foreground leading-tight mb-1">{mooc.title}</h4>
            <p className="text-xs text-muted-foreground mb-3">by {mooc.instructor}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {mooc.enrolled}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {mooc.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
