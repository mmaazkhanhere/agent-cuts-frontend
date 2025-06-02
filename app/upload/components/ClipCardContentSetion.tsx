import React from "react";
import { Button } from "@/app/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import ClipCardMetrics from "./ClipCardMetrics";
import ClipCardTags from "./ClipCardTags";
import { Clip } from "@/app/types/clip";

type props = {
  clip: Clip;
};

const ClipCardContentSetion = ({ clip }: props) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = clip.url;
    link.download = `${clip.title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Download started!", {
      description: "Your clip is being downloaded.",
    });
  };
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-3">
        <h3 className="font-bold text-white leading-tight line-clamp-2 group-hover:text-teal-400 transition-colors duration-300">
          {clip.title}
        </h3>
        <p className="text-slate-400 text-sm">{clip.description}</p>
      </div>
      <ClipCardTags clip={clip} />
      <ClipCardMetrics clip={clip} />
      <Button
        onClick={handleDownload}
        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Clip
      </Button>
    </div>
  );
};

export default ClipCardContentSetion;
