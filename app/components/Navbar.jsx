"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
              TI
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900">
                Training &amp; Research Institute
              </span>
              <span className="text-xs text-slate-500">
                Learning &bull; Innovation &bull; Impact
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#overview" className="text-slate-600 hover:text-primary-600">
              Overview
            </a>
            <a href="#trainings" className="text-slate-600 hover:text-primary-600">
              Trainings
            </a>
            <a href="#research" className="text-slate-600 hover:text-primary-600">
              Research
            </a>
            <a href="#notices" className="text-slate-600 hover:text-primary-600">
              Notices
            </a>
            <a href="#partners" className="text-slate-600 hover:text-primary-600">
              Partners
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-primary-600 px-4 py-1.5 text-primary-600 text-sm font-medium hover:bg-primary-600 hover:text-white transition"
            >
              Apply Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {/* Open icon */}
            <svg
              className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close icon */}
            <svg
              className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden border-t border-slate-200 bg-white ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3 space-y-2 text-sm">
          <a
            href="#overview"
            className="block py-1 text-slate-700 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Overview
          </a>
          <a
            href="#trainings"
            className="block py-1 text-slate-700 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Trainings
          </a>
          <a
            href="#research"
            className="block py-1 text-slate-700 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Research
          </a>
          <a
            href="#notices"
            className="block py-1 text-slate-700 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Notices
          </a>
          <a
            href="#partners"
            className="block py-1 text-slate-700 hover:text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Partners
          </a>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center w-full rounded-full border border-primary-600 px-4 py-2 text-primary-600 font-medium hover:bg-primary-600 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
