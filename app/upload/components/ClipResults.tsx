import React from "react";
import { ClipResultsProps } from "@/app/types/clip";
import ClipCard from "./ClipCard";

const ClipResults: React.FC<ClipResultsProps> = ({
  clips,
  originalFileName,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          Your Clips Are Ready!
        </h1>
        <p className="text-gray-300">
          Our AI has analyzed your video and created these engaging clips
          optimized for social media.
        </p>
      </div>
      <div className="text-center my-8 pt-4">
        <p className="text-white/60">
          {clips.length} clips generated from {originalFileName}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clips.map((clip) => (
          <ClipCard key={clip.id} clip={clip} />
        ))}
      </div>
    </div>
  );
};

export default ClipResults;
