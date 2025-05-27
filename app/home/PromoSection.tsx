import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
const PromoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Video Content?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Start creating viral short-form clips from your long-form content
          today. No editing skills required!
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="ffont-medium text-lg bg-white text-teal-800 hover:bg-gray-100"
        >
          <Link href="/upload">
            Try ClipGenius Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default PromoSection;
