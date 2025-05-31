import React from "react";
import { Progress } from "@/app/components/ui/progress";

type ProgressBarProps = {
  fileName: string;
  progress: number;
};

const ProgressBar = ({ fileName, progress }: ProgressBarProps) => {
  return (
    <div className="text-center mb-8">
      <p className="text-gray-300">
        {fileName} • {Math.round(progress)}% complete
      </p>
      <Progress value={progress} className="h-2 mt-4" />
    </div>
  );
};

export default ProgressBar;
