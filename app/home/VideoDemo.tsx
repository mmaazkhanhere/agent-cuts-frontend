import React from "react";

const VideoDemo = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900/50">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00808015,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00808015,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          {" "}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              See ClipGenius in Action
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Watch how our AI-powered platform transforms your content creation
            process
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <video className="w-full h-auto" autoPlay={true} loop muted>
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
