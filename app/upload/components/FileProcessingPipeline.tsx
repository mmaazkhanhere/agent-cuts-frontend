"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { Upload as UploadIcon } from "lucide-react";
import ClipProcessing from "../components/ClipProcessing";
import VideoUploader from "./VideoUploader";
import SelectedVideoPanel from "./SelectedVideoPanel";
import ClipResults from "./ClipResults";
import { Clip } from "@/app/types/clip";

// Define status enum
enum UploadStatus {
  UPLOAD = "UPLOAD",
  UPLOADED = "UPLOADED",
  PROCESSING = "PROCESSING",
  COMPLETE = "COMPLETE",
}

const FileProcessingPipeline = () => {
  const [status, setStatus] = useState<UploadStatus>(UploadStatus.UPLOAD);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [generatedClips, setGeneratedClips] = useState<Clip[]>([]);
  const [currentProcessingStep, setCurrentProcessingStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockClips = [
    {
      id: "clip1",
      title: "Top 5 AI Predictions That Will Transform The Tech Industry",
      duration: "0:58",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop",
      viralityScore: 8.7,
      tags: ["AI", "Tech", "Predictions"],
    },
    {
      id: "clip3",
      title: "Top 5 AI Predictions That Will Transform The Tech Industry",
      duration: "0:58",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop",
      viralityScore: 8.7,
      tags: ["AI", "Tech", "Predictions"],
    },
    {
      id: "clip2",
      title: "Why Machine Learning is Changing Everything in 2025",
      duration: "1:15",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1639318853588-fd36df8c547a?q=80&w=1778&auto=format&fit=crop",
      viralityScore: 7.5,
      tags: ["ML", "Future Tech", "Analysis"],
    },
  ];

  // Handle file selection and move to UPLOADED status
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setStatus(UploadStatus.UPLOADED);
  };

  // Start processing when user clicks process button
  const startProcessing = () => {
    if (!selectedFile || !selectedCategory) return;

    setStatus(UploadStatus.PROCESSING);
    setUploadProgress(0);
    setCurrentProcessingStep(0);

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);

          // Start processing steps after upload completes
          const stepInterval = setInterval(() => {
            setCurrentProcessingStep((step) => {
              if (step >= 4) {
                clearInterval(stepInterval);
                // Processing complete, show results
                setGeneratedClips(mockClips);
                setStatus(UploadStatus.COMPLETE);
                return step;
              }
              return step + 1;
            });
          }, 2000);

          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  // Reset everything to initial state
  const resetUpload = () => {
    setStatus(UploadStatus.UPLOAD);
    setSelectedFile(null);
    setSelectedCategory("");
    setUploadProgress(0);
    setCurrentProcessingStep(0);
    setGeneratedClips([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Render component based on current status
  const renderCurrentStep = () => {
    switch (status) {
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
            fileName={selectedFile?.name || "Unknown file"}
            progress={uploadProgress + currentProcessingStep * 25}
            currentStep={currentProcessingStep}
          />
        );

      case UploadStatus.COMPLETE:
        return (
          <div className="space-y-6">
            <ClipResults
              clips={generatedClips}
              originalFileName={selectedFile?.name || "Unknown file"}
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
