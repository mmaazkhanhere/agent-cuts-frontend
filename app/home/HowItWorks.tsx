import React from "react";
import { Upload, Cpu, Scissors, Download } from "lucide-react";
import { ReactElement } from "react";

interface Step {
  icon: ReactElement;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Upload className="h-8 w-8 text-clipgenius-teal" />,
    title: "Upload",
    description: "Upload your long-form video content to our secure platform.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-clipgenius-teal" />,
    title: "AI Analysis",
    description:
      "Our AI analyzes your content for the most engaging and viral-worthy moments.",
  },
  {
    icon: <Scissors className="h-8 w-8 text-clipgenius-teal" />,
    title: "Clip Generation",
    description:
      "We automatically generate and optimize clips for social media platforms.",
  },
  {
    icon: <Download className="h-8 w-8 text-clipgenius-teal" />,
    title: "Download & Share",
    description:
      "Download your ready-to-share clips and post them to grow your audience.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,#b964ff20,transparent_50%)]"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-glow font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            How ClipGenius Works
          </h2>
          <p className="text-lg text-gray-400">
            Transform your long-form content into viral short-form videos in
            just a few steps
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 text-teal-400 rounded-full bg-teal-500/20 flex items-center justify-center">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-full h-0.5 bg-teal-400 opacity-30 hidden lg:block"></div>
                )}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
