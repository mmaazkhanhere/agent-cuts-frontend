import React from "react";
import ClipCard from "./ClipCard";
import { Clip } from "@/app/types/clip";

export type ClipResultsProps = {
  clips: [];
  originalFileName: string;
};

const ClipResults = ({ clips, originalFileName }: ClipResultsProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          Your Clips Are Ready!
        </h1>
        <p className="text-gray-300">
          Our AI has analyzed your video and created these engaging clips
          optimized for social media.
        </p>
      </div>
      <div className="text-center my-8 pt-8">
        <p className="text-white font-bold">
          {clips.length} clips generated from {originalFileName}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 lg:grid-cols-3">
        {clips.map((clip, index) => (
          <ClipCard key={index} clip={clip} />
        ))}
      </div>
    </div>
  );
};

export default ClipResults;
