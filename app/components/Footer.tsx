import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} AgentCuts. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
