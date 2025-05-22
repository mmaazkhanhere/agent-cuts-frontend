
import React, { useState, useRef, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoUploaderProps {
  onUploadComplete?: (file: File) => void;
  maxFileSize?: number; // in MB
}

const VideoUploader: React.FC<VideoUploaderProps> = ({
  onUploadComplete,
  maxFileSize = 50,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const acceptedFormats = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo'];
  
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  const validateFile = (file: File): boolean => {
    // Check file type
    if (!acceptedFormats.includes(file.type)) {
      toast({
        title: "Unsupported format",
        description: "Please upload MP4, WebM, MOV, or AVI files only.",
        variant: "destructive"
      });
      return false;
    }
    
    // Check file size
    if (file.size > maxFileSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${maxFileSize}MB.`,
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        processFile(droppedFile);
      }
    }
  }, [maxFileSize]);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        processFile(selectedFile);
      }
    }
  };
  
  const processFile = (file: File) => {
    setFile(file);
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      if (onUploadComplete) {
        onUploadComplete(file);
      }
      
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded successfully.`,
      });
    }, 2000);
  };
  
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto animate-slide-up">
      <div
        className={`upload-dropzone ${isDragging ? 'active' : ''} ${isUploading ? 'pointer-events-none opacity-70' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-16 h-16 rounded-full bg-clipgenius-purple/20 flex items-center justify-center mb-4 animate-upload-appear">
          <Upload className="h-8 w-8 text-clipgenius-purple" />
        </div>
        
        <h3 className="text-xl font-medium mb-2 text-white">Upload your video</h3>
        <p className="text-white/60 mb-4 text-center">
          Drag and drop your file here or click to browse
        </p>
        <p className="text-white/40 text-sm mb-6">
          Maximum file size: {maxFileSize}MB
        </p>
        
        {isUploading ? (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs bg-clipgenius-dark-border/50 h-2 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-gradient-purple animate-pulse-light" style={{ width: '60%' }}></div>
            </div>
            <p className="text-white/60 text-sm">Uploading {file?.name}...</p>
          </div>
        ) : (
          <Button 
            onClick={handleButtonClick} 
            className="bg-gradient-purple hover:opacity-90"
          >
            Select video
          </Button>
        )}
      </div>
      
      <div className="mt-6 text-center text-white/60 text-sm">
        Supported formats: MP4, WebM, MOV, AVI • Maximum file size: {maxFileSize}MB
      </div>
      
      <input 
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".mp4,.webm,.mov,.avi,video/mp4,video/webm,video/quicktime,video/x-msvideo"
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default VideoUploader;
