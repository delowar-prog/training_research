import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>&copy; {year} Training &amp; Research Institute. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-600">
            Terms
          </a>
          <a href="#home" className="hover:text-primary-600">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
