import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { SegmentType } from "@/types/segment"; 
import ClipCardContentSetion from "./ClipCardContentSetion";

type ClipCardProps = {
  segment: SegmentType;
};

const ClipCard = ({ segment }: ClipCardProps) => {


  return (
    <Card className="group overflow-hidden !pt-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-slate-600">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-slate-900">
          <div className="aspect-video w-[100%] h-[400px] relative group">
            <video
              className="w-[100%] h-[100%] object-cover transition-transform duration-700 group-hover:scale-105"
              controls
              preload="metadata"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${segment.download_url}`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Content Section */}
        <ClipCardContentSetion clip={segment} />
      </CardContent>
    </Card>
  );
};

export default ClipCard;
