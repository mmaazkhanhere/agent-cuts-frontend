import React, { useRef, useCallback } from "react";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/app/components/ui/card";
import { Upload as UploadIcon } from "lucide-react";

// Define props interface for type safety
interface VideoUploaderProps {
  selectedFile: File | null;
  setSelectedFile: (value: File) => void;
}

const VideoUploader = ({
  selectedFile,
  setSelectedFile,
}: VideoUploaderProps) => {
  // Ref to access the hidden file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Handles drag over event to prevent default browser behavior
   * @param e - React drag event
   */
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  /**
   * Handles file drop event
   * @param e - React drag event containing dropped files
   */
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      if (files[0].type.startsWith("video/")) {
        setSelectedFile(files[0]);
        toast.success("Video uploaded successfully!");
      } else {
        toast.error("Please upload a valid video file");
      }
    }
  };

  /**
   * Handles file selection via file input
   * @param e - Change event from file input
   */
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (files[0].type.startsWith("video/")) {
        setSelectedFile(files[0]);
        toast.success("Video uploaded successfully!");
      } else {
        toast.error("Please upload a valid video file");
      }
    }
  };

  /**
   * Triggers the hidden file input when button is clicked
   */
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          Video Upload
        </h1>
        <p className="text-xl text-gray-300">
          Transform your long-form content into viral short clips
        </p>
      </div>

      {/* File upload area (only shown when no file is selected) */}
      {!selectedFile && (
        <Card className="bg-gray-800 border-gray-700">
          <CardContent>
            <div
              className="border-2 border-dashed border-gray-600 rounded-lg md:p-12 p-8 text-center hover:border-teal-500 transition-colors cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadIcon className="mx-auto rounded-full p-4 h-16 w-16 bg-background text-teal-400 hover:text-teal-300 transition-colors duration-300 hover:bg-teal-500/20 mb-4" />

              <h3 className="text-lg font-semibold mb-1">Upload your video</h3>
              <p className="text-gray-400 text-sm">
                Drag and drop your file here or click to browse
              </p>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>

            <Button
              onClick={handleButtonClick}
              className="bg-teal-600 hover:bg-teal-500 text-white mt-4 w-[100%]"
            >
              Choose File
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="text-center text-gray-400 mt-4 text-sm">
        Supported formats: MP4, WebM, MOV, AVI
      </div>
    </div>
  );
};

export default VideoUploader;
