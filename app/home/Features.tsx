import React from "react";
import {
  Wand2,
  Scissors,
  TrendingUp,
  Clock,
  Sparkles,
  Video,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
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
      "What normally takes hours of editing can now be done in minutes with ClipGenius.",
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
const Features = () => {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Powerful Tools for Content Creators
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ClipGenius handles the hard work—so you can focus on creating
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
