import React, { useState } from "react";
import { Progress } from "@/app/components/ui/progress";
import { Button } from "@/app/components/ui/button";
import { BarChart3, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Clip } from "@/app/types/clip";

type props = {
  clip: Clip;
};

const ClipCardMetrics = ({ clip }: props) => {
  const [showMetrics, setShowMetrics] = useState<boolean>(false);

  // Generate mock metrics based on virality score
  const clarityScore = Math.min(
    clip.viralityScore * 10 + Math.random() * 15,
    100
  );
  const readabilityScore = Math.max(
    clip.viralityScore * 10 - 10 + Math.random() * 25,
    30
  );
  const contentRelevance = Math.min(
    clip.viralityScore * 10 + Math.random() * 20,
    100
  );
  const processingConfidence = Math.max(
    clip.viralityScore * 10 - 5 + Math.random() * 15,
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
        <span className="text-sm text-slate-400 font-medium">{label}</span>
        <span className="text-sm text-white font-semibold">{value}</span>
      </div>
      <div className="relative">
        <Progress value={score} className="h-2 bg-slate-700/50" />
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-tr from-teal-200 via-teal-400 to-teal-600 transition-all duration-700 ease-out"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
  return (
    <>
      <Button
        variant="outline"
        onClick={() => setShowMetrics(!showMetrics)}
        className="w-full bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-600 transition-all duration-300"
      >
        <BarChart3 className="h-4 w-4 mr-2" />
        {showMetrics ? "Hide Analytics" : "View Analytics"}
        {showMetrics ? (
          <ChevronUp className="h-4 w-4 ml-2 transition-transform duration-200" />
        ) : (
          <ChevronDown className="h-4 w-4 ml-2 transition-transform duration-200" />
        )}
      </Button>
      {/* Metrics Panel */}
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          showMetrics ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Performance Analytics
            </h4>
          </div>

          <div className="grid gap-4">
            <MetricItem
              label="Video Clarity"
              value={`${clarityScore.toFixed(1)}%`}
              score={clarityScore}
            />
            <MetricItem
              label="Content Quality"
              value={`${readabilityScore.toFixed(1)}%`}
              score={readabilityScore}
            />
            <MetricItem
              label="Relevance Score"
              value={`${contentRelevance.toFixed(1)}%`}
              score={contentRelevance}
            />
            <MetricItem
              label="AI Confidence"
              value={`${processingConfidence.toFixed(1)}%`}
              score={processingConfidence}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClipCardMetrics;
