import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils/classNames";
import { Clip } from "@/app/types/clip";
import ClipCardContentSetion from "./ClipCardContentSetion";

// type ClipCardProps = {
//   clip: [];
// };

const ClipCard = ({ clip }) => {
  const getViralityColor = (score: number) => {
    if (score >= 8) return "text-emerald-400";
    if (score >= 5) return "text-amber-400";
    return "text-orange-400";
  };

  const getViralityBadgeStyle = (score: number) => {
    if (score >= 8) return "bg-emerald-500/20 border-emerald-500/30";
    if (score >= 5) return "bg-amber-500/20 border-amber-500/30";
    return "bg-orange-500/20 border-orange-500/30";
  };

  return (
    <Card className="group overflow-hidden !pt-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-slate-600">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-slate-900">
          <div className="aspect-video w-[100%] h-[400px] relative group">
            <video
              className="w-[100%] h-[100%] object-cover transition-transform duration-700 group-hover:scale-105"
              controls
              preload="metadata"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${clip.download_url}`}
            >
              Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            {/* Virality Score Badge */}
            <div
              className={cn(
                "absolute top-4 right-4 px-3 py-1.5 rounded-full border backdrop-blur-sm transition-all duration-300",
                getViralityBadgeStyle(clip.viralityScore)
              )}
            >
              {/* <div className="flex items-center gap-1.5">
                <Flame
                  className={cn(
                    "h-4 w-4",
                    getViralityColor(clip.viralityScore)
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-bold",
                    getViralityColor(clip.viralityScore)
                  )}
                >
                  {clip.viralityScore}
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <ClipCardContentSetion clip={clip} />
      </CardContent>
    </Card>
  );
};

export default ClipCard;
