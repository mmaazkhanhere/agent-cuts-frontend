import React from "react";
import { Braces, Wand2, VideoIcon, SplitSquareVertical } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { ProcessingStep } from "@/app/types/processing";
import StepCard from "./StepCard";

/**
 * Props for the ClipProcessing component
 */
type ClipProcessingProps = {
  fileName: string;
  progress: number;
  currentStep: number;
};

/**
 * ClipProcessing Component
 * Displays a visual progress tracker for video processing steps
 */
const ClipProcessing = ({
  fileName,
  progress,
  currentStep,
}: ClipProcessingProps) => {
  /**
   * Array of processing steps with their current status
   * Status is determined based on the currentStep prop:
   * - Steps before currentStep are "completed"
   * - The currentStep is "processing"
   * - Steps after currentStep are "pending"
   */
  const steps: ProcessingStep[] = [
    {
      id: "transcribe",
      title: "Transcribing",
      description: "Converting speech to text",
      icon: <Braces className="h-5 w-5" />,
      status:
        currentStep > 0
          ? "completed"
          : currentStep === 0
          ? "processing"
          : "pending",
    },
    {
      id: "analyze",
      title: "Analyzing",
      description: "Identifying key moments",
      icon: <Wand2 className="h-5 w-5" />,
      status:
        currentStep > 1
          ? "completed"
          : currentStep === 1
          ? "processing"
          : "pending",
    },
    {
      id: "segments",
      title: "Creating segments",
      description: "Generating clips",
      icon: <SplitSquareVertical className="h-5 w-5" />,
      status:
        currentStep > 2
          ? "completed"
          : currentStep === 2
          ? "processing"
          : "pending",
    },
    {
      id: "finalize",
      title: "Finalizing",
      description: "Adding titles and captions",
      icon: <VideoIcon className="h-5 w-5" />,
      status:
        currentStep > 3
          ? "completed"
          : currentStep === 3
          ? "processing"
          : "pending",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          Processing Your Video
        </h1>
        <p className="text-gray-300">
          Our AI is analyzing your video and creating engaging clips. This may
          take a few minutes.
        </p>
      </div>

      {/* Progress bar section */}
      <ProgressBar fileName={fileName} progress={progress} />

      {/* Steps grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <StepCard step={step} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ClipProcessing;
