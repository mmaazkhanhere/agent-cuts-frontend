import { Settings, FileText, Braces, Wand2, SplitSquareVertical, VideoIcon, Check } from "lucide-react";
import { VideoProcessingStep } from "../../types/VideoProcessingStep";

 
export const processingSteps: VideoProcessingStep[] = [
    {
      id: "initializing",
      title: "Initializing",
      Icon: Settings,
    },
    {
      id: "transcribing",
      title: "Transcribing Audio",
      Icon: FileText,
    },
    {
      id: "segmenting",
      title: "Segmenting Content",
      Icon: Braces,
    },
    {
      id: "ranking",
      title: "Ranking Segments",
      Icon: Wand2,
    },
    {
      id: "cutting_video",
      title: "Cutting Video",
      Icon: SplitSquareVertical,
    },
    {
      id: "generating_copy",
      title: "Text Generation",
      Icon: VideoIcon,
    },
    {
      id: "completed",
      title: "Completed",
      Icon: Check,
    }
  ];