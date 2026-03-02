import { FileText, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { BlogResource } from "@/data/tracks";

export default function BlogResources({ blogs }: { blogs: BlogResource[] }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <FileText className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-foreground">{t("workspace.blogsDocumentation")}</h3>
        <span className="px-1.5 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{blogs.length}</span>
      </div>
      <div className="space-y-2">
        {blogs.map(blog => (
          <a key={blog.id} href={blog.url} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all group">
            <div className="flex-1 min-w-0 mr-3">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-secondary text-muted-foreground">{blog.tag}</span>
                <h4 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">{blog.title}</h4>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{blog.source}</span>
                <span className="text-xs text-muted-foreground/50">·</span>
                <span className="text-xs text-muted-foreground">{blog.readTime}</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
