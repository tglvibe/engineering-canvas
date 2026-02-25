import { useState } from "react";
import { Play, Lock, ExternalLink, X, CheckCircle, Unlock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoResource } from "@/data/tracks";
import { useAuth } from "@/contexts/AuthContext";

export default function VideoResources({ videos }: { videos: VideoResource[] }) {
  const { unlockedVideos, unlockVideo } = useAuth();
  const [selectedVideo, setSelectedVideo] = useState<VideoResource | null>(null);
  const [unlockModalVideo, setUnlockModalVideo] = useState<VideoResource | null>(null);

  const publicVideos = videos.filter(v => v.type === "public");
  const premiumVideos = videos.filter(v => v.type === "premium");

  const isUnlocked = (id: string) => unlockedVideos.includes(id);

  const handleVideoClick = (video: VideoResource) => {
    if (video.type === "premium" && !isUnlocked(video.id)) {
      setUnlockModalVideo(video);
    } else {
      setSelectedVideo(video);
    }
  };

  const handleUnlock = (video: VideoResource) => {
    unlockVideo(video.id);
    setUnlockModalVideo(null);
    setSelectedVideo(video);
  };

  const VideoCard = ({ video }: { video: VideoResource }) => {
    const unlocked = isUnlocked(video.id);
    return (
      <button
        onClick={() => handleVideoClick(video)}
        className="w-full text-left group rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all overflow-hidden"
      >
        <div className="aspect-video bg-secondary relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {video.type === "premium" && !unlocked ? (
              <Lock className="w-5 h-5 text-primary" />
            ) : (
              <Play className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
            )}
          </div>
          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-foreground/80 text-background">{video.duration}</div>
          {video.type === "premium" && (
            <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${unlocked ? "bg-primary/20 text-primary" : "bg-primary text-primary-foreground"}`}>
              {unlocked ? "✓ UNLOCKED" : "PREMIUM"}
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
      </button>
    );
  };

  return (
    <>
      <div className="space-y-6">
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

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl rounded-xl border border-border bg-card overflow-hidden">
              <div className="aspect-video bg-foreground/5 flex items-center justify-center relative">
                <div className="text-center">
                  <Play className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Video Player</p>
                  <p className="text-xs text-muted-foreground mt-1">(Mock — would embed actual player)</p>
                </div>
                <button onClick={() => setSelectedVideo(null)} className="absolute top-3 right-3 p-1.5 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm">{selectedVideo.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{selectedVideo.channel} · {selectedVideo.duration} · {selectedVideo.views} views</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unlock Modal */}
      <AnimatePresence>
        {unlockModalVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setUnlockModalVideo(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={e => e.stopPropagation()}
              className="w-full max-w-sm rounded-xl border border-border bg-card p-5 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">Premium Content</h3>
              <p className="text-sm text-muted-foreground mb-1">{unlockModalVideo.title}</p>
              <p className="text-xs text-muted-foreground mb-5">This video is part of the Talencia Global Learning platform premium content library.</p>
              <button onClick={() => handleUnlock(unlockModalVideo)}
                className="w-full bg-gradient-brand text-primary-foreground font-semibold py-3 rounded-xl shadow-brand hover:opacity-90 transition-all flex items-center justify-center gap-2 mb-2">
                <Unlock className="w-4 h-4" /> Unlock This Video
              </button>
              <button onClick={() => setUnlockModalVideo(null)} className="w-full py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
                Maybe Later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
