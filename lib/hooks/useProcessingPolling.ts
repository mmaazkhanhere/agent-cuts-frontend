import { useState, useEffect, useRef, useCallback } from "react";
import { STEP_ORDER } from "@/app/constants/stepsOrder";
import trackProcessingStatus from "../services/trackProcessingStatus";

const useProcessingPolling = (uniquePhrase: string | null, interval = 2000) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<string>("uploaded");
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize the getStepStatus function to prevent unnecessary re-renders
  const getStepStatus = useCallback((stepId: string): "completed" | "active" | "pending" => {
    if (completedSteps.includes(stepId)) {
      return "completed";
    } else if (stepId === currentStep) {
      return "active";
    } else {
      return "pending";
    }
  }, [completedSteps, currentStep]);


  useEffect(() => {
    if (!uniquePhrase) return;

    let isMounted = true; // Prevent state updates if component unmounts

    const poll = async () => {
      try {
        const data = await trackProcessingStatus(uniquePhrase);
        
        // Only update state if component is still mounted
        if (!isMounted) return;

        setProgress(data.progress.percentage);
        setCurrentStep(data.progress.current_step);

        // Use the steps_completed from backend if available
        const backendCompletedSteps = data.progress.steps_completed;
        
        // Merge both sources of truth for completed steps
        const newCompletedSteps = Array.from(
          new Set([...backendCompletedSteps])
        ).filter(step => step !== data.progress.current_step);

        setCompletedSteps(newCompletedSteps);

        if (data.error) {
          setError("Processing failed. Please try uploading your video again.");
          return;
        }

        if (data.status === 'completed') {
          setIsComplete(true);
          setCompletedSteps(STEP_ORDER);
          return;
        }

        // set timeout if still mounted and not complete
        if (isMounted && data.status !== 'completed') {
          timeoutRef.current = setTimeout(poll, interval);
        }
      } catch (error) {
        console.error("Polling error:", error);
        if (isMounted) {
          setError("Connection lost. Please check your internet and try again.");
          timeoutRef.current = setTimeout(poll, interval * 2);
        }
      }
    };

    poll();

    // Cleanup function
    return () => {
      isMounted = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [uniquePhrase, interval]); 


  // Reset function to clear all state
  const reset = useCallback(() => {
    setProgress(0);
    setCurrentStep("uploaded");
    setCompletedSteps([]);
    setIsComplete(false);
    setError(null);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return {
    progress,
    currentStep,
    completedSteps,
    isComplete,
    error,
    setError,
    getStepStatus,
    reset, 
  };
};

export default useProcessingPolling;