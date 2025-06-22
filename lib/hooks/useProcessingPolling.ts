import { useState, useEffect, useRef } from "react";
import { STEP_ORDER } from "@/app/constants/stepsOrder";
import trackProcessingStatus from "../services/trackProcessingStatus";

const useProcessingPolling = (uniquePhrase: string | null, interval = 2000) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<string>("uploaded");
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getStepStatus = (stepId: string): "completed" | "active" | "pending" => {
    if (completedSteps.includes(stepId)) {
      return "completed";
    } else if (stepId === currentStep) {
      return "active";
    } else {
      return "pending";
    }
  };

  useEffect(() => {
    if (!uniquePhrase) return;

    const poll = async () => {
      try {
        const data = await trackProcessingStatus(uniquePhrase);
        
        setProgress(data.progress.percentage);
        setCurrentStep(data.progress.current_step);
        
          // Use the steps_completed from backend if available, otherwise calculate
        const backendCompletedSteps = data.progress.steps_completed;
        // const calculatedCompletedSteps = STEP_ORDER.slice(
        //   0, 
        //   STEP_ORDER.indexOf(data.progress.current_step)
        // );
        
        // Merge both sources of truth for completed steps
        const newCompletedSteps = Array.from(
          new Set([...backendCompletedSteps])
        ).filter(step => step !== data.progress.current_step);
        
        setCompletedSteps(newCompletedSteps);
        console.log("Completed steps:", newCompletedSteps);

        if (data.error) {
          setError("Processing failed. Please try uploading your video again.");
          return;
        }

        if (data.status === 'completed') {
          setIsComplete(true);
          setCompletedSteps(STEP_ORDER);
          return;
        }

        timeoutRef.current = setTimeout(poll, interval);
      } catch (error) {
        console.error("Polling error:", error);
        setError("Connection lost. Please check your internet and try again.");
        timeoutRef.current = setTimeout(poll, interval * 2);
      }
    };

    poll();

     // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [uniquePhrase, interval]);

  return {
    progress, 
    setProgress,
    currentStep,
    setCurrentStep,
    completedSteps,
    isComplete, 
    error,
    setError,
    getStepStatus,
  };
};

export default useProcessingPolling;