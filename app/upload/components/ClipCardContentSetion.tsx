import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import ClipCardMetrics from "./ClipCardMetrics";
// import ClipCardTags from "./ClipCardTags";
import downloadSegment from "@/lib/services/downloadSegment";
import { SegmentType } from "@/types/segment";


type clipProps = {
  clip: SegmentType
}
// Content section for a clip card, handling display and download functionality.
const ClipCardContentSetion = ({ clip }: clipProps) => {

  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
     if (!clip.uniquePhrase) {
      toast.error("Download failed");
      return;
    }
    setIsDownloading(true);
    try {
      await downloadSegment(clip.uniquePhrase, clip.index, clip.filename);
      toast.success("Download started!");

    } catch (error) {
      toast.error("Download failed");
      throw error;
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-3">
        <h3 className="font-bold text-white leading-tight line-clamp-2 group-hover:text-teal-400 transition-colors duration-300">
          {clip.filename}
        </h3>
        {/* <p className="text-slate-400 text-sm">
          {clip.description} 
        </p> */}
      </div>
      {/* <ClipCardTags  />*/}
      <ClipCardMetrics /> 
      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Clip ({clip.size_mb} MB)
      </Button>
    </div>
  );
};

export default ClipCardContentSetion;
