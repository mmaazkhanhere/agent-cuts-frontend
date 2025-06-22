import React from 'react'
import { Button } from "@/app/components/ui/button";
import { AlertTriangle, RotateCcw, Upload } from "lucide-react";

type errorProps = {
  error: string | null;
  onRetry?: () => void; 
  onReset?: () => void; 
}

const ProcessingError = ({error, onRetry, onReset}: errorProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
        <div className="flex items-center justify-center flex-col text-center">
          <div className="mb-6">
            <AlertTriangle className="h-16 w-16 text-red-400 mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-white">
            Processing Error
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
            {error || "An unexpected error occurred while processing your video."}
          </p>
          
          <div className="flex gap-4 flex-wrap justify-center">
            {onRetry && (
              <Button 
                onClick={onRetry} 
                className="bg-red-600 hover:bg-red-700 text-white border-0"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            )}
            
            {onReset && (
              <Button 
                onClick={onReset} 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Different Video
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessingError
