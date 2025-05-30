import React from "react";
import Hero from "./home/Hero";
import Features from "./home/Features";
import HowItWorks from "./home/HowItWorks";
import PromoSection from "./home/PromoSection";
import VideoDemo from "./home/VideoDemo";

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <VideoDemo />
      <Features />
      <HowItWorks />
      <PromoSection />
    </div>
  );
}
