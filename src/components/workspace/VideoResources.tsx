import { Play, Lock, ExternalLink } from "lucide-react";
import type { VideoResource } from "@/data/tracks";

export default function VideoResources({ videos }: { videos: VideoResource[] }) {
  const publicVideos = videos.filter(v => v.type === "public");
  const premiumVideos = videos.filter(v => v.type === "premium");

  const VideoCard = ({ video }: { video: VideoResource }) => (
    <div className="group rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all overflow-hidden">
      <div className="aspect-video bg-secondary relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          {video.type === "premium" ? (
            <Lock className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
          )}
        </div>
        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-foreground/80 text-background">
          {video.duration}
        </div>
        {video.type === "premium" && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-primary-foreground">
            PREMIUM
          </div>
        )}
      </div>
      <div className="p-3">
        <h4 className="text-sm font-medium text-foreground leading-tight line-clamp-2">{video.title}</h4>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">{video.channel}</span>
          <span className="text-xs text-muted-foreground">{video.views} views</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Public Videos */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Play className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">Public Videos</h3>
          <span className="px-1.5 py-0.5 rounded-full bg-secondary text-[10px] font-medium text-muted-foreground">{publicVideos.length}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {publicVideos.map(v => <VideoCard key={v.id} video={v} />)}
        </div>
      </div>

      {/* Premium Videos */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Lock className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Platform Authorized Videos</h3>
          <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary">{premiumVideos.length}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {premiumVideos.map(v => <VideoCard key={v.id} video={v} />)}
        </div>
      </div>
    </div>
  );
}
