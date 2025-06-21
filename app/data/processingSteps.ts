import { Settings, FileText, Braces, Wand2, SplitSquareVertical, VideoIcon } from "lucide-react";
import { VideoProcessingStep } from "../types/VideoProcessingStep";

 
export const processingSteps: VideoProcessingStep[] = [
    {
      id: "initializing",
      title: "Initializing",
      Icon: Settings,
    },
    {
      id: "transcribing",
      title: "Transcribing",
      Icon: FileText,
    },
    {
      id: "segmenting",
      title: "Analyzing",
      Icon: Braces,
    },
    {
      id: "ranking",
      title: "Ranking",
      Icon: Wand2,
    },
    {
      id: "cutting_video",
      title: "Cutting",
      Icon: SplitSquareVertical,
    },
    {
      id: "generating_copy",
      title: "Copywriting",
      Icon: VideoIcon,
    },
  ];