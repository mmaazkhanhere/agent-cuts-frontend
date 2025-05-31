import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { ProcessingStep } from "@/app/types/processing";

type StepCardProps = {
  step: ProcessingStep;
};

const StepCard = ({ step }: StepCardProps) => {
  // Returns the appropriate icon for a step based on its status
  const getStepIcon = (step: ProcessingStep) => {
    if (step.status === "completed")
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    if (step.status === "failed")
      return <XCircle className="h-5 w-5 text-red-500" />;
    if (step.status === "processing")
      return (
        <div className="h-5 w-5 rounded-full border-2 border-teal-500 border-t-transparent animate-spin" />
      );
    return step.icon;
  };
  return (
    <div
      className={`p-4 rounded-lg border transition-all ${
        step.status === "processing"
          ? "border-teal-500 bg-teal-500/5"
          : step.status === "completed"
          ? "border-green-500/30 bg-green-500/5"
          : "border-gray-600 bg-gray-800"
      }`}
    >
      {/* Step header with icon and title */}
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`${
            step.status === "processing"
              ? "text-teal-400"
              : step.status === "completed"
              ? "text-green-500"
              : "text-gray-400"
          }`}
        >
          {getStepIcon(step)}
        </div>
        <h4
          className={`font-medium ${
            step.status === "processing"
              ? "text-teal-400"
              : step.status === "completed"
              ? "text-green-500"
              : "text-white"
          }`}
        >
          {step.title}
        </h4>
      </div>
      <p className="text-gray-400 text-sm pl-8">{step.description}</p>
    </div>
  );
};

export default StepCard;
