import React from "react";
import { SelectedVideoCard } from "./SelectedVideoCard";
import { ArrowRight, Wand2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

type SelectedVideoPanelProps = {
  selectedFile: File | null;
  resetUpload: () => void;
  simulateUpload: () => void;
  isProcessing?: boolean;
};

const SelectedVideoPanel = ({
  selectedFile,
  resetUpload,
  simulateUpload,
  isProcessing = false,
}: SelectedVideoPanelProps) => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      {selectedFile && !isProcessing && (
        <div className="space-y-6">
          <SelectedVideoCard
            selectedFile={selectedFile}
            resetUpload={resetUpload}
          />

          <div className="text-center">
            <Button
              onClick={simulateUpload}
              size="lg"
              className="bg-teal-600 hover:bg-teal-500"
            >
              <Wand2 className="mr-2 h-5 w-5" />
              Start Processing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedVideoPanel;
