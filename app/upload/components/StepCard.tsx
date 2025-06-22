import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { ProcessingStep } from "@/app/types/VideoProcessingStep";

type StepStatus = "completed" | "active" | "pending" | "processing" | "failed";

type StepCardProps = {
  step: ProcessingStep;
  isActive?: boolean;
  isCompleted?: boolean;
  stepProgress?: number;
};

const StepCard = ({ step, isActive, isCompleted, stepProgress }: StepCardProps) => {
  // Map the status from step or use the passed props
  const status: StepStatus = step.status || (isCompleted ? "completed" : isActive ? "active" : "pending");
  
  // Returns the appropriate icon for a step based on its status
  const getStepIcon = (step: ProcessingStep) => {
    if (status === "completed")
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (status === "failed")
      return <XCircle className="h-5 w-5 text-red-500" />;
    if (status === "active")
      return (
        <div className="h-5 w-5 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
      );
    return step.icon;
  };

  // Get progress value - use stepProgress prop or step.progress
  const progressValue = stepProgress !== undefined ? stepProgress : step.progress || 0;

  return (
    <div
      className={`p-4 rounded-lg border transition-all ${
        status === "active"
          ? "border-teal-500 bg-teal-500/5"
          : status === "completed"
          ? "border-green-500/30 bg-green-500/5"
          : "border-gray-600 bg-gray-800"
      }`}
    >
      {/* Step header with icon and title */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`${
            status === "active"
              ? "text-teal-400"
              : status === "completed"
              ? "text-green-500"
              : "text-gray-400"
          }`}
        >
          {getStepIcon(step)}
        </div>
        <h4
          className={`font-medium ${
            status === "active"
              ? "text-teal-400"
              : status === "completed"
              ? "text-green-500"
              : "text-white"
          }`}
        >
          {step.title}
        </h4>
      </div>
      
      {/* Step description */}
      <p className="text-gray-400 text-sm pl-8 mb-2">{step.description}</p>
      
      {/* Progress bar for active steps */}
      {status === "active" && progressValue > 0 && (
        <div className="pl-8">
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div 
              className="bg-teal-500 h-1.5 rounded-full transition-all duration-300" 
              style={{ width: `${Math.min(progressValue, 100)}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {Math.round(progressValue)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default StepCard;