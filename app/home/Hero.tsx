import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-teal-800/20"></div>

      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span className="text-teal-300 text-sm font-medium">
            AI-Powered Video Transformation
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-glow">
          <span className="bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
            Turn Long Videos into
          </span>
          <br />
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Viral Shorts Instantly with AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          ClipGenius automatically transforms your podcasts, interviews, and
          lectures into TikTok & YouTube Shorts-ready clips.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 animate-glow"
          >
            <Link href="/upload">Get Started</Link>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
