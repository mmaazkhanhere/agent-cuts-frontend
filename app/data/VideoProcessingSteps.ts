import { Upload, Cpu, Scissors, Download } from "lucide-react";
import { VideoProcessingStep } from "../types/VideoProcessingStep";

export const VideoProcessingSteps: VideoProcessingStep[] = [
  {
    Icon: Upload,
    title: "Upload",
    description: "Upload your long-form video content to our secure platform.",
  },
  {
    Icon: Cpu,
    title: "AI Analysis",
    description:
      "Our AI analyzes your content for the most engaging and viral-worthy moments.",
  },
  {
    Icon: Scissors,
    title: "Clip Generation",
    description:
      "We automatically generate and optimize clips for social media platforms.",
  },
  {
    Icon: Download,
    title: "Download & Share",
    description:
      "Download your ready-to-share clips and post them to grow your audience.",
  },
];
