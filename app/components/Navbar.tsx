import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-8 bg-gray-900/50 backdrop-blur-md border border-teal-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-teal-gradient w-8 h-8 rounded-md flex items-center justify-center">
              <span className="font-bold text-white">CG</span>
            </div>
            <h1 className="text-xl font-bold bg-teal-600 bg-clip-text text-transparent">
              ClipGenius
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* <Button variant="outline" className="hidden md:block">
            Sign In
          </Button>  */}
          <Button className="bg-teal-600 hover:bg-teal-500 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 animate-glow hover:opacity-90">
            <Link href="/upload">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
