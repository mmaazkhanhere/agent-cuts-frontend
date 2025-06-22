"use client";
import React from "react";
import { motion } from "framer-motion";
import { VideoStepDetails } from "../data/VideoStepDetails";

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,#b964ff20,transparent_50%)]"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-glow font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            How AgentCuts Works
          </h2>
          <p className="text-lg text-gray-400">
            Transform your long-form content into viral short-form videos in
            just a few steps
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VideoStepDetails.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.001, // convert ms to seconds
                  }}
                  className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center"
                >
                  <step.Icon className="h-8 w-8 text-teal-400" />
                </motion.div>
                {index < VideoStepDetails.length - 1 && (
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
