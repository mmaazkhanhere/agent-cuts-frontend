import React from "react";
import { Progress } from "@/app/components/ui/progress";
import {
  Braces,
  Wand2,
  VideoIcon,
  SplitSquareVertical,
  CheckCircle,
  XCircle,
} from "lucide-react";

type ProcessingStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "pending" | "processing" | "completed" | "failed";
};

interface ClipProcessingProps {
  fileName: string;
  progress: number;
  currentStep: number;
}

const ClipProcessing: React.FC<ClipProcessingProps> = ({
  fileName,
  progress,
  currentStep,
}) => {
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

  const getStepIcon = (step: ProcessingStep) => {
    if (step.status === "completed")
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (step.status === "failed")
      return <XCircle className="h-5 w-5 text-red-500" />;
    if (step.status === "processing")
      return (
        <div className="h-5 w-5 rounded-full border-2 border-clipgenius-teal border-t-transparent animate-spin" />
      );
    return step.icon;
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-20 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          Processing Your Video
        </h1>
        <p className="text-gray-300">
          Our AI is analyzing your video and creating engaging clips. This may
          take a few minutes.
        </p>
      </div>
      <div className="text-center my-8 pt-4">
        <p className="text-white/60">
          {fileName} • {Math.round(progress)}% complete
        </p>
        <Progress value={progress} className="h-2 mt-4" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`p-4 rounded-lg border transition-all ${
              step.status === "processing"
                ? "border-border bg-background"
                : step.status === "completed"
                ? "border-green-500/30 bg-green-500/5"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`${
                  step.status === "processing"
                    ? "text-teal-400"
                    : step.status === "completed"
                    ? "text-green-500"
                    : "text-white/60"
                }`}
              >
                {getStepIcon(step)}
              </div>
              <h4
                className={`font-medium ${
                  step.status === "processing"
                    ? "text-teal-400"
                    : step.status === "completed"
                    ? "text-teal-400"
                    : "text-white"
                }`}
              >
                {step.title}
              </h4>
            </div>
            <p className="text-gray-400 text-sm pl-8">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClipProcessing;
