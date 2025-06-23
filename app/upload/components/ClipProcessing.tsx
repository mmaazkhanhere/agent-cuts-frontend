import React from "react";
import ProcessingStepper from "./ProcessingStepper";
import ProcessingError from "./ProcessingError";


type ClipProcessingProps = {
  progress: number;
  currentStep: string;
  completedSteps: string[];
  error: string | null;
  getStepStatus: (stepId: string) => "completed" | "active" | "pending";
  retryProcessing: () => void;
  onReset: () => void;
}

/**
 * Displays a visual progress tracker for video processing steps
 */
const ClipProcessing = ({
  progress,
  currentStep,
  getStepStatus,
  error,
  retryProcessing,
  onReset
}: ClipProcessingProps) => {


  if (error) {
    return (
     <ProcessingError error={error} onRetry={retryProcessing} onReset={onReset} /> 
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          Processing Your Video
        </h1>
        <p className="text-gray-300 mb-6">
          Our AI is analyzing your video and creating engaging clips.
        </p>
        
        
        <ProcessingStepper 
          currentStep={currentStep}
          getStepStatus={getStepStatus}
          progress={progress}
        />
      </div>

    </div>
  );
};
export default ClipProcessing;