import React from "react";
import { Button } from "../../components/ui/button";
import { Download, Play, Flame } from "lucide-react";
// import { useToast } from '@/hooks/use-toast';
import { toast } from "sonner";
import { Clip } from "@/app/types/clip";
import Image from "next/image";

const ClipCard: React.FC<{ clip: Clip }> = ({ clip }) => {
  const handlePreview = () => {
    toast.info("Preview feature", {
      description: "Preview functionality will be available soon!",
    });
  };

  const handleDownload = () => {
    toast.info("Download initiated", {
      description: "Your clip is being prepared for download.",
    });
  };

  const getViralityColor = (score: number) => {
    if (score >= 8) return "text-green-500";
    if (score >= 5) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="clip-card">
      <div className="relative mb-3 overflow-hidden rounded-md aspect-video group">
        <img
          src={clip.thumbnailUrl}
          alt={clip.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-clipgenius-teal/80 border-none hover:bg-clipgenius-teal"
            onClick={handlePreview}
          >
            <Play className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
          {clip.duration}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-start mb-1">
          <h3
            className="font-medium text-white line-clamp-2"
            title={clip.title}
          >
            {clip.title}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Flame
              className={`h-4 w-4 ${getViralityColor(clip.viralityScore)}`}
            />
            <span
              className={`text-sm font-medium ${getViralityColor(
                clip.viralityScore
              )}`}
            >
              {clip.viralityScore}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-2">
          {clip.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-clipgenius-dark-bg rounded-full text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-clipgenius-teal/50 text-clipgenius-teal hover:bg-clipgenius-teal/20 flex-1"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4 mr-1" /> Download
        </Button>
      </div>
    </div>
  );
};

export default ClipCard;
