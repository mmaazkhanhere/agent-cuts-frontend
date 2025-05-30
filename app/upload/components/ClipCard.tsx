import React from "react";
import { Button } from "../../components/ui/button";
import { Download, Flame } from "lucide-react";
import { toast } from "sonner";
import { Clip } from "@/app/types/clip";

interface ClipCardProps {
  clip: Clip;
}

const ClipCard = ({ clip }: ClipCardProps) => {
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
      <div className="relative mb-3 overflow-hidden w-[100%] h-[400px] rounded-md aspect-video group">
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
        <video
          className="w-[100%] h-[100%] object-cover rounded-md"
          poster={clip.thumbnail}
          controls
          preload="metadata"
        >
          <source src={clip.url} type="video/mp4" />
          <source src={clip.url} type="video/ogg" />
        </video>
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
