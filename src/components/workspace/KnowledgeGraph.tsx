import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { knowledgeGraphNodes, knowledgeGraphEdges, type GraphNode } from "@/data/tracks";

const getMasteryColor = (v: number) => {
  if (v >= 80) return "#f97316";
  if (v >= 60) return "#fb923c";
  if (v >= 40) return "#fdba74";
  if (v >= 20) return "#d4d4d8";
  return "#e5e5e5";
};

export default function KnowledgeGraph({ onClose }: { onClose: () => void }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [scale, setScale] = useState(1);
  const [selected, setSelected] = useState<GraphNode | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(prev => Math.max(0.5, Math.min(2, prev - e.deltaY * 0.001)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as Element).tagName === "svg" || (e.target as Element).tagName === "line") {
      setDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <h2 className="text-lg font-bold text-foreground">Knowledge Graph</h2>
          <p className="text-xs text-muted-foreground">Interactive concept dependency map — Click nodes to explore</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary" /> 80%+</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{ background: "#fb923c" }} /> 60%+</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{ background: "#fdba74" }} /> 40%+</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full" style={{ background: "#d4d4d8" }} /> &lt;40%</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setScale(s => Math.min(2, s + 0.2))} className="px-2 py-1 rounded border border-border text-xs font-medium text-foreground hover:bg-secondary">+</button>
            <span className="text-xs text-muted-foreground w-10 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="px-2 py-1 rounded border border-border text-xs font-medium text-foreground hover:bg-secondary">−</button>
          </div>
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-medium text-foreground hover:bg-secondary/80">Close</button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden" onWheel={handleWheel} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
        <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`, transformOrigin: "center" }}>
          {/* Edges */}
          {knowledgeGraphEdges.map((edge, i) => {
            const from = knowledgeGraphNodes.find(n => n.id === edge.from);
            const to = knowledgeGraphNodes.find(n => n.id === edge.to);
            if (!from || !to) return null;
            return (
              <line key={i} x1={from.x + 60} y1={from.y + 20} x2={to.x + 60} y2={to.y + 20} stroke="hsl(0 0% 85%)" strokeWidth="1.5" strokeDasharray="4 4" />
            );
          })}

          {/* Nodes */}
          {knowledgeGraphNodes.map(node => (
            <g key={node.id} onClick={() => setSelected(selected?.id === node.id ? null : node)} className="cursor-pointer">
              <rect x={node.x} y={node.y} width={120} height={40} rx={8} fill="white" stroke={selected?.id === node.id ? "#f97316" : "hsl(0 0% 90%)"} strokeWidth={selected?.id === node.id ? 2 : 1} />
              {/* Mastery bar */}
              <rect x={node.x} y={node.y + 36} width={120 * (node.mastery / 100)} height={4} rx={2} fill={getMasteryColor(node.mastery)} />
              <text x={node.x + 60} y={node.y + 18} textAnchor="middle" dominantBaseline="central" className="text-[10px] font-medium fill-current" style={{ fill: "hsl(0 0% 20%)" }}>
                {node.label}
              </text>
              <text x={node.x + 60} y={node.y + 30} textAnchor="middle" className="text-[9px] fill-current" style={{ fill: "hsl(0 0% 50%)" }}>
                {node.mastery}%
              </text>
            </g>
          ))}
        </svg>

        {/* Selected node detail */}
        {selected && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-6 left-6 p-4 rounded-xl border border-border bg-card shadow-lg max-w-xs">
            <h3 className="font-semibold text-foreground text-sm">{selected.label}</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${selected.mastery}%`, background: getMasteryColor(selected.mastery) }} />
              </div>
              <span className="text-xs font-mono text-muted-foreground">{selected.mastery}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {selected.mastery >= 80 ? "Mastered — great job!" : selected.mastery >= 40 ? "In progress — keep learning!" : "Needs attention — start this topic."}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
