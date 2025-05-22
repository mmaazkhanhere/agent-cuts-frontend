
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-purple">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Video Content?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Start creating viral short-form clips from your long-form content today.
              No editing skills required!
            </p>
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="font-medium text-lg"
            >
              <Link to="/upload">
                Try ClipGenius Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
