import React from "react";
import { Button } from "../../components/ui/button";
import { Download, Play, Flame } from "lucide-react";
// import { useToast } from '@/hooks/use-toast';
import { toast } from "sonner";
import { Clip } from "@/app/types/clip";
import Image from "next/image";

interface ClipCardProps {
  clip: Clip;
}

const ClipCard = ({ clip }: ClipCardProps) => {
  const handlePreview = () => {
    toast.info("Preview feature", {
      description: "Preview functionality will be available soon!",
    });
  };

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = clip.url;
    link.download = `${clip.title}.mp4`; // Use clip title as filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Download initiated", {
      description: "Your clip is being downloaded.",
    });
  };

  const getViralityColor = (score: number) => {
    if (score >= 8) return "text-green-500";
    if (score >= 5) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="bg-gray-800 border-gray-700 p-4 rounded transition duration-200 mt-4">
      <div className="relative mb-3 overflow-hidden rounded-md aspect-video group">
        <img
          src={clip.thumbnail}
          alt={clip.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-teal-400 hover:bg-teal-300 border-none"
            onClick={handlePreview}
          >
            <Play className="h-5 w-5" />
          </Button>
        </div>
        <video
          src={clip.url}
          poster={clip.thumbnail}
          controls
          className="w-full h-full object-cover rounded-md"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
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

        <p className="text-gray-400 text-sm my-4">{clip.description}</p>

        <div className="flex flex-wrap gap-1 py-2">
          {clip.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-background text-gray-300 rounded-full text-xs"
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
          className="bg-teal-600 hover:bg-teal-500 flex-1"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4 mr-1" /> Download
        </Button>
      </div>
    </div>
  );
};

export default ClipCard;
