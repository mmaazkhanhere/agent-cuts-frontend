import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 lg:px-8 bg-clipgenius-dark-bg/80 backdrop-blur-md border-b border-clipgenius-dark-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-purple w-8 h-8 rounded-md flex items-center justify-center">
              <span className="font-bold text-white">CG</span>
            </div>
            <h1 className="text-xl font-bold gradient-text">ClipGenius</h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-white/80 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>

        {/* <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:block">
            Sign In
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90">
            Get Started
          </Button>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
