import React from "react";
import { Progress } from "@/app/components/ui/progress";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { BarChart3 } from "lucide-react";
import { Clip } from "../../../types/clip";

type props = {
  clip: Clip;
};

const ClipCardMetrics = ({ clip }: props) => {
  // Generate mock metrics based on virality score
  const clarityScore = Math.min(clip.viralityScore + Math.random() * 15, 100);
  const readabilityScore = Math.max(
    clip.viralityScore - 10 + Math.random() * 25,
    30
  );
  const contentRelevance = Math.min(
    clip.viralityScore + Math.random() * 20,
    100
  );
  const processingConfidence = Math.max(
    clip.viralityScore - 5 + Math.random() * 15,
    40
  );

  const MetricItem = ({
    label,
    value,
    score,
  }: {
    label: string;
    value: string;
    score: number;
  }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400 font-medium">{label}</span>
        <span className="text-sm text-white font-semibold">{value}</span>
      </div>
      <div className="relative">
        <Progress value={score} className="h-2 bg-gray-700/50" />
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-700 ease-out"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:border-gray-600 transition-all duration-300"
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          View Analytics
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            Performance Analytics
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <MetricItem
            label="Clarity Score"
            value={`${clarityScore.toFixed(1)}%`}
            score={clarityScore}
          />
          <MetricItem
            label="Readability Score"
            value={`${readabilityScore.toFixed(1)}%`}
            score={readabilityScore}
          />
          <MetricItem
            label="Content Relevance"
            value={`${contentRelevance.toFixed(1)}%`}
            score={contentRelevance}
          />
          <MetricItem
            label="Processing Confidence"
            value={`${processingConfidence.toFixed(1)}%`}
            score={processingConfidence}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClipCardMetrics;
