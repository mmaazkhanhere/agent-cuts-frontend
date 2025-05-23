import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,#b964ff20,transparent_50%)]"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-clipgenius-purple/10 rounded-full mb-8 gap-2">
            <Sparkles className="h-4 w-4 text-clipgenius-purple" />
            <span className="text-sm font-medium text-clipgenius-purple">
              AI-Powered Video Transformation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
            Transform Long Videos Into Viral Short Clips With AI
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            ClipGenius automatically converts your podcasts, interviews, and
            lectures into engaging short-form content for TikTok and YouTube
            Shorts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-purple hover:opacity-90 text-lg font-medium"
            >
              <Link href="/upload">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
