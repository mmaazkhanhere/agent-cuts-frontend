import React from "react";

const Footer = () => {
  return (
    <footer className="bg-clipgenius-dark-bg py-12">
      <div className="container px-4 mx-auto">
        <div className="border-t border-clipgenius-dark-border pt-8">
          <p className="text-white/50 text-center">
            © {new Date().getFullYear()} ClipGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
