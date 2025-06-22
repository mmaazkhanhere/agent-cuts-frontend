import React from "react";
import Team from "./components/Team";
import Mission from "./components/Mission";



const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center my-16">
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
        <p className="text-xl text-gray-400  my-8">
          We are a passionate team of developers working together to
          revolutionize video editing through AI. Agent Cuts is the result of
          our combined expertise in both frontend and backend development.
        </p>
      </div>

      <Team />
      <Mission />

    </div>
  );
};

export default AboutPage;
