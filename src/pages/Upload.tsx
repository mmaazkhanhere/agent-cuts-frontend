
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoUploader from '@/components/VideoUploader';
import ClipProcessing from '@/components/ClipProcessing';
import ClipResults, { Clip } from '@/components/ClipResults';

enum ProcessStatus {
  UPLOAD,
  PROCESSING,
  COMPLETE
}

// Mock data for demonstration
const mockClips: Clip[] = [
  {
    id: "clip1",
    title: "Top 5 AI Predictions That Will Transform The Tech Industry",
    duration: "0:58",
    thumbnailUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070&auto=format&fit=crop",
    viralityScore: 8.7,
    tags: ["AI", "Tech", "Predictions"]
  },
  {
    id: "clip2",
    title: "Why Machine Learning is Changing Everything in 2025",
    duration: "1:15",
    thumbnailUrl: "https://images.unsplash.com/photo-1639318853588-fd36df8c547a?q=80&w=1778&auto=format&fit=crop",
    viralityScore: 7.5,
    tags: ["ML", "Future Tech", "Analysis"]
  },
  {
    id: "clip3",
    title: "The Surprising Connection Between AI and Creativity",
    duration: "0:45",
    thumbnailUrl: "https://images.unsplash.com/photo-1632915505407-cbe3522341a9?q=80&w=1771&auto=format&fit=crop",
    viralityScore: 9.2,
    tags: ["AI", "Creativity", "Innovation"]
  },
  {
    id: "clip4",
    title: "3 Ways Artificial Intelligence Will Revolutionize Healthcare",
    duration: "1:02",
    thumbnailUrl: "https://images.unsplash.com/photo-1624084127044-e1e48a9f11e8?q=80&w=2069&auto=format&fit=crop",
    viralityScore: 6.8,
    tags: ["Healthcare", "AI", "Technology"]
  },
  {
    id: "clip5",
    title: "The Dark Side of AI: Ethical Concerns We Need to Address",
    duration: "1:25",
    thumbnailUrl: "https://images.unsplash.com/photo-1659790510697-be266bd935c6?q=80&w=2070&auto=format&fit=crop",
    viralityScore: 8.1,
    tags: ["Ethics", "AI", "Society"]
  },
  {
    id: "clip6",
    title: "How AI is Making Content Creation Faster and Better",
    duration: "0:49",
    thumbnailUrl: "https://images.unsplash.com/photo-1640079216758-88b52c539a1a?q=80&w=2070&auto=format&fit=crop",
    viralityScore: 7.9,
    tags: ["Content", "Productivity", "AI"]
  }
];

const Upload = () => {
  const [status, setStatus] = useState<ProcessStatus>(ProcessStatus.UPLOAD);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const handleUploadComplete = (file: File) => {
    setFile(file);
    setStatus(ProcessStatus.PROCESSING);
    
    // Simulate processing with progress updates
    let progVal = 0;
    const interval = setInterval(() => {
      progVal += Math.random() * 10;
      if (progVal >= 100) {
        progVal = 100;
        clearInterval(interval);
        setTimeout(() => setStatus(ProcessStatus.COMPLETE), 500);
      }
      setProgress(progVal);
      
      // Update processing step
      if (progVal > 25 && currentStep === 0) setCurrentStep(1);
      if (progVal > 50 && currentStep === 1) setCurrentStep(2);
      if (progVal > 75 && currentStep === 2) setCurrentStep(3);
      if (progVal === 100 && currentStep === 3) setCurrentStep(4);
    }, 1000);
  };

  const renderContent = () => {
    switch (status) {
      case ProcessStatus.UPLOAD:
        return (
          <div className="py-20 px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Upload Your Video
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Upload your long-form video and let our AI transform it into viral short clips 
                perfect for social media.
              </p>
            </div>
            <VideoUploader onUploadComplete={handleUploadComplete} maxFileSize={50} />
          </div>
        );
      case ProcessStatus.PROCESSING:
        return (
          <div className="py-20 px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Processing Your Video
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Our AI is analyzing your video and creating engaging clips. This may take a few minutes.
              </p>
            </div>
            <ClipProcessing 
              fileName={file?.name || "Unknown file"} 
              progress={progress} 
              currentStep={currentStep} 
            />
          </div>
        );
      case ProcessStatus.COMPLETE:
        return (
          <div className="py-20 px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Your Clips Are Ready!
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Our AI has analyzed your video and created these engaging clips optimized for social media.
              </p>
            </div>
            <ClipResults clips={mockClips} originalFileName={file?.name || "Unknown file"} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
