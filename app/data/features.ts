import {
  Wand2,
  Scissors,
  TrendingUp,
  Clock,
  Sparkles,
  Video,
} from "lucide-react";

import { Feature } from "../../types/feature";

export const features: Feature[] = [
  {
    icon: Wand2,
    title: "AI-Powered Editing",
    description:
      "Our AI analyzes your content to identify the most engaging moments automatically.",
  },
  {
    icon: Scissors,
    title: "Smart Clip Generation",
    description:
      "Generate multiple short clips from a single long-form video with just one upload.",
  },
  {
    icon: TrendingUp,
    title: "Virality Prediction",
    description:
      "Our algorithm scores clips based on their potential to go viral on social platforms.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description:
      "What normally takes hours of editing can now be done in minutes with AgentCuts.",
  },
  {
    icon: Sparkles,
    title: "Auto Captions",
    description:
      "Automatically generate accurate captions for all your clips to boost engagement.",
  },
  {
    icon: Video,
    title: "Multiple Formats",
    description:
      "Export in various aspect ratios optimized for TikTok, Instagram, and YouTube Shorts.",
  },
];
