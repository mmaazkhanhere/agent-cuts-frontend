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
    <div className="w-full py-14">
      <div className="flex items-center justify-center">
        {processingSteps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isCompleted = status === "completed";
          const isActive = status === "active";

          // Calculate progress for the connector
          let connectorProgress = 0;
          if (isCompleted) {
            connectorProgress = 100;
          }else if (isActive) {
              connectorProgress = 50
          } else if (index === activeStepIndex - 1) {
            connectorProgress = progress;
          } else if (index < activeStepIndex) {
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
                        className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                          connectorProgress > 0 ? 'bg-teal-400' : 'bg-gray-200'
                        }`} 
                        style={{ width: `${connectorProgress}%`,
                        transform: 'translateX(0%)'
                        }}
                        
                      ></div>
                    </div>
                  </div>
                )}

                {/* Step circle */}
                <div className={`relative w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center transition-all duration-500 ease-out transform ${
                  isCompleted 
                    ? 'bg-teal-400 text-white scale-110 shadow-lg shadow-teal-400/30' 
                    : isActive 
                      ? 'bg-teal-500 text-white border-2 border-teal-600 scale-110 animate-pulse shadow-lg shadow-teal-500/40'
                      : 'bg-white border-2 border-gray-200 text-gray-600 scale-100 hover:scale-105'
                }`}>
                    <step.Icon  className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'animate-bounce' : ''
                  }`} />

                  {/* Completion checkmark animation */}
                  {isCompleted && (
                    <div className="absolute inset-0 rounded-full bg-teal-400 flex items-center justify-center animate-scale-in">
                      <step.Icon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* Step title */}
              <div className={`text-xs text-center md:text-sm transition-all duration-300 ease-out ${
                isCompleted 
                  ? 'text-teal-400 font-medium transform translate-y-0 opacity-100' 
                  : isActive 
                    ? 'text-teal-600 font-medium transform translate-y-0 opacity-100'
                    : 'text-gray-500 transform translate-y-1 opacity-75'
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