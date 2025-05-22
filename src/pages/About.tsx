
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,#b964ff20,transparent_50%)]"></div>
          <div className="container px-4 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
                About ClipGenius
              </h1>
              <p className="text-lg text-white/70 mb-8">
                ClipGenius is revolutionizing how creators repurpose long-form content into engaging
                short-form videos through the power of artificial intelligence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our mission */}
        <section className="py-16 bg-clipgenius-dark-card">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-lg text-white/70 mb-6">
                At ClipGenius, we believe that valuable content deserves to be seen. Our mission is to help creators
                maximize the reach and impact of their long-form content by transforming it into bite-sized, platform-optimized
                clips that capture attention in today's fast-paced digital landscape.
              </p>
              <p className="text-lg text-white/70">
                By harnessing the power of artificial intelligence, we're democratizing access to professional-quality
                video editing and content strategy, enabling creators of all sizes to compete effectively in the
                attention economy without the need for specialized skills or large production teams.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our story */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-lg text-white/70 mb-6">
                ClipGenius was born from a simple observation: creators were spending hours creating amazing long-form content,
                only to see it reach a fraction of its potential audience. Meanwhile, short-form platforms were exploding in popularity,
                but required entirely different content strategies and production workflows.
              </p>
              <p className="text-lg text-white/70 mb-6">
                Our founder, a content creator frustrated by the time-consuming process of manually editing long videos into short clips,
                envisioned a solution that would leverage AI to automate this process while maintaining creative control and quality.
              </p>
              <p className="text-lg text-white/70">
                After months of development and collaboration with creators across different industries, ClipGenius was launched
                with a mission to help creators maximize their content's reach and impact through intelligent, automated video repurposing.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our technology */}
        <section className="py-16 bg-clipgenius-dark-card">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Technology</h2>
              <p className="text-lg text-white/70 mb-6">
                ClipGenius combines several cutting-edge AI technologies to analyze, segment, and transform long-form videos:
              </p>
              <ul className="space-y-4 text-lg text-white/70 mb-6">
                <li className="flex">
                  <span className="text-clipgenius-purple mr-2">•</span>
                  <span><strong className="text-white">Natural Language Processing:</strong> We analyze transcribed audio to identify key topics, quotes, and moments of high engagement.</span>
                </li>
                <li className="flex">
                  <span className="text-clipgenius-purple mr-2">•</span>
                  <span><strong className="text-white">Computer Vision:</strong> Our systems analyze visual elements including speaker emotions, on-screen graphics, and scene changes.</span>
                </li>
                <li className="flex">
                  <span className="text-clipgenius-purple mr-2">•</span>
                  <span><strong className="text-white">Content Intelligence:</strong> Our algorithms learn from millions of successful short-form videos to predict which segments have the highest viral potential.</span>
                </li>
                <li className="flex">
                  <span className="text-clipgenius-purple mr-2">•</span>
                  <span><strong className="text-white">Creative Assistant:</strong> We generate optimized titles, captions, and hashtags tailored to each platform's best practices.</span>
                </li>
              </ul>
              <p className="text-lg text-white/70">
                Our technology continues to evolve, with regular updates and improvements based on creator feedback and platform changes,
                ensuring that ClipGenius remains at the cutting edge of AI-powered content transformation.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
