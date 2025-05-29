import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { RotateCcw } from "lucide-react";

interface SelectedVideoCardProps {
  selectedFile: File | null;
  resetUpload: () => void;
}

export const SelectedVideoCard = ({
  selectedFile,
  resetUpload,
}: SelectedVideoCardProps) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setVideoUrl(url);

      // Cleanup URL when component unmounts or file changes
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [selectedFile]);

  if (!selectedFile) return null;
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-white">
          Selected Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {videoUrl && (
            <div className="relative rounded-lg overflow-hidden bg-gray-900">
              <video
                src={videoUrl}
                controls
                className="w-[100%] h-[300px]"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="font-medium">{selectedFile.name}</p>
            <p className="text-sm text-gray-400">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
          <Button
            variant="outline"
            className="hover:bg-teal-500"
            onClick={resetUpload}
          >
            <RotateCcw className="mr-1 h-4 w-4" />
            Change File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
