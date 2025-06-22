"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Upload as UploadIcon } from "lucide-react";
import ClipProcessing from "../components/ClipProcessing";
import VideoUploader from "./VideoUploader";
import SelectedVideoPanel from "./SelectedVideoPanel";
import ClipResults from "./ClipResults";
import { Clip } from "@/app/types/clip";
import videoUpload from "@/lib/services/videoUpload";
import useProcessingPolling from "@/lib/hooks/useProcessingPolling";
import segments from "@/lib/services/segments";

// Define status enum
enum UploadStatus {
  UPLOAD = "UPLOAD",
  UPLOADED = "UPLOADED",
  PROCESSING = "PROCESSING",
  COMPLETE = "COMPLETE"
}

const FileProcessingPipeline = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [generatedClips, setGeneratedClips] = useState<[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uniquePhrase, setUniquePhrase] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>(UploadStatus.UPLOAD);

  // Updated hook usage with new return values
  const { 
    progress, 
    currentStep,
    completedSteps,
    isComplete, 
    error,
    setError,
    getStepStatus,
    reset, 
  } = useProcessingPolling(uniquePhrase);
  
  // Handle file selection and move to UPLOADED status
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setUploadStatus(UploadStatus.UPLOADED);
  };

  // Start processing when user clicks process button
  const startProcessing = async () => {
    if (!selectedFile) return;
    
    setUploadStatus(UploadStatus.PROCESSING);
    try {
      const result = await videoUpload(selectedFile);
      console.log(result);
      setUniquePhrase(result.unique_phrase); // Start polling
    } catch (error) {
      console.error('Upload failed:', error);
      setError("Upload failed. Please try again.")
    }
  };

  const retryProcessing = () => {
  setError(null);
  startProcessing();
};


  // Update UI based on polling status
  useEffect(() => {
    if (isComplete && uploadStatus === UploadStatus.PROCESSING) {
      setUploadStatus(UploadStatus.COMPLETE);
      fetchSegments();
    }
  }, [isComplete, uploadStatus]);

  // Fetch segments when processing is complete
  const fetchSegments = async () => {
    if (!uniquePhrase) return;
    try {
      const data = await segments(uniquePhrase);
      console.log(segment)
      setGeneratedClips(data.segments);
    } catch (error) {
      console.error("Error fetching segments:", error);
      setError("Failed to load your video clips. Please try again.");
    }
  };

  // Reset everything to initial state
  const resetUpload = () => {
    setSelectedFile(null);
    setSelectedCategory("");
    setGeneratedClips([]);
    setUniquePhrase(null);
    setUploadStatus(UploadStatus.UPLOAD);
    reset()
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Render component based on current status
  const renderCurrentStep = () => {
    switch (uploadStatus) {
      case UploadStatus.UPLOAD:
        return (
          <VideoUploader
            selectedFile={selectedFile}
            setSelectedFile={handleFileSelect}
          />
        );

      case UploadStatus.UPLOADED:
        return (
          <SelectedVideoPanel
            selectedFile={selectedFile}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            resetUpload={resetUpload}
            simulateUpload={startProcessing}
            isProcessing={false}
          />
        );

      case UploadStatus.PROCESSING:
        return (
          <ClipProcessing
            progress={progress}
            currentStep={currentStep}
            completedSteps={completedSteps}
            error={error}
            getStepStatus={getStepStatus}
            retryProcessing={retryProcessing}
            onReset={resetUpload}
          />
        );

      case UploadStatus.COMPLETE:
        return (
          <div className="space-y-6">
            <ClipResults
              clips={generatedClips}
            />
            <div className="text-center">
              <Button onClick={resetUpload} variant="outline" size="lg">
                <UploadIcon className="mr-2 h-5 w-5" />
                Upload Another Video
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="pt-16">{renderCurrentStep()}</div>;
};

export default FileProcessingPipeline;