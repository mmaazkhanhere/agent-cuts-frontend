
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-xl mx-auto pt-16">
          <h1 className="text-7xl md:text-9xl font-bold gradient-text mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-white/70 mb-8">
            Oops! The page you're looking for doesn't seem to exist.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-purple hover:opacity-90"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
