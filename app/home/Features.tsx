import React from "react";
import {
  Wand2,
  Scissors,
  TrendingUp,
  Clock,
  Sparkles,
  Video,
} from "lucide-react";
import { ReactElement } from "react";

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}
const features: Feature[] = [
  {
    icon: <Wand2 className="h-6 w-6 text-clipgenius-purple" />,
    title: "AI-Powered Editing",
    description:
      "Our AI analyzes your content to identify the most engaging moments automatically.",
  },
  {
    icon: <Scissors className="h-6 w-6 text-clipgenius-purple" />,
    title: "Smart Clip Generation",
    description:
      "Generate multiple short clips from a single long-form video with just one upload.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-clipgenius-purple" />,
    title: "Virality Prediction",
    description:
      "Our algorithm scores clips based on their potential to go viral on social platforms.",
  },
  {
    icon: <Clock className="h-6 w-6 text-clipgenius-purple" />,
    title: "Time Saving",
    description:
      "What normally takes hours of editing can now be done in minutes with ClipGenius.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-clipgenius-purple" />,
    title: "Auto Captions",
    description:
      "Automatically generate accurate captions for all your clips to boost engagement.",
  },
  {
    icon: <Video className="h-6 w-6 text-clipgenius-purple" />,
    title: "Multiple Formats",
    description:
      "Export in various aspect ratios optimized for TikTok, Instagram, and YouTube Shorts.",
  },
];
const Features = () => {
  return (
    <section className="py-20 bg-clipgenius-dark-bg relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Powerful Features For Content Creators
          </h2>
          <p className="text-lg text-white/70">
            ClipGenius takes the heavy lifting out of video repurposing,
            allowing you to focus on creating great content.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-clipgenius-dark-card border border-clipgenius-dark-border rounded-lg p-6 hover:border-clipgenius-purple/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-clipgenius-purple/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
