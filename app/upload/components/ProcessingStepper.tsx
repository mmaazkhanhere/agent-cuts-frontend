import { processingSteps } from "@/app/data/processingSteps";
import React from "react";

type ProcessingStepperProps = {
  currentStep: string;
  getStepStatus: (stepId: string) => "completed" | "active" | "pending";
  progress: number;
}

const ProcessingStepper = ({ 
  currentStep, 
  getStepStatus,
  progress 
}: ProcessingStepperProps) => {
 

  // Calculate the active step index
  const activeStepIndex = processingSteps.findIndex(step => step.id === currentStep);

  return (
    <div className="w-full py-14 mt-20">
      <div className="flex items-center justify-center">
        {processingSteps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isCompleted = status === "completed";
          const isActive = status === "active";

          // Calculate progress for the connector
          let connectorProgress = 0;
          if (isCompleted) {
            connectorProgress = 100;
          } else if (index === activeStepIndex - 1) {
            // The step before the active one should show partial progress
            connectorProgress = progress;
          } else if (index < activeStepIndex) {
            // Steps before the active one should be fully completed
            connectorProgress = 100;
          }

          return (
            <div key={step.id} className="flex-1 flex flex-col items-center">
              <div className="relative mb-2 w-full">
                {/* Progress connector (except for first step) */}
                {index > 0 && (
                  <div className="absolute flex items-center" 
                    style={{
                      width: 'calc(100% - 2.5rem)',
                      top: '50%',
                      left: 'calc(-50% + 1.25rem)',
                      transform: 'translateY(-50%)'
                    }}>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          connectorProgress > 0 ? 'bg-teal-500' : 'bg-gray-200'
                        }`} 
                        style={{ width: `${connectorProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Step circle */}
                <div className={`relative w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center ${
                  isCompleted 
                    ? 'bg-teal-400 text-white' 
                    : isActive 
                      ? 'bg-teal-500 text-white border-2 border-teal-600'
                      : 'bg-white border-2 border-gray-200 text-gray-600'
                }`}>
                    <step.Icon  className="w-5 h-5" />
                </div>
              </div>

              {/* Step title */}
              <div className={`text-xs text-center md:text-sm ${
                isCompleted 
                  ? 'text-teal-400 font-medium' 
                  : isActive 
                    ? 'text-teal-600 font-medium'
                    : 'text-gray-500'
              }`}>
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessingStepper;