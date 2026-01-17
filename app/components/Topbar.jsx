// TopBar.jsx
"use client";

import React, { useEffect, useState } from "react";

const TopBar = ({ setIsVisible: setExternalIsVisible }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newVisible = !(currentScrollY > lastScrollY && currentScrollY > 100);
      setIsVisible(newVisible);
      setExternalIsVisible(newVisible);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, setExternalIsVisible]);
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full bg-indigo-700 dark:bg-slate-800 text-white text-xs sm:text-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: phone + email */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-[10px] sm:text-xs">📞</span>
            <span>01700-440000 / 01520-000000</span>
          </div>

          <div className="hidden h-4 w-px bg-slate-600 sm:block" />

          <div className="flex items-center gap-1">
            <span className="text-[10px] sm:text-xs">✉️</span>
            <span>delowarmilton@gmail.com</span>
          </div>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center justify-start gap-2 sm:justify-end">
          <span className="font-semibold">Follow us:</span>
          <button className="h-6 w-6 rounded-full bg-white text-slate-900 text-[11px] flex items-center justify-center hover:bg-slate-100">
            f
          </button>
          <button className="h-6 w-6 rounded-full bg-white text-slate-900 text-[11px] flex items-center justify-center hover:bg-slate-100">
            X
          </button>
          <button className="h-6 w-6 rounded-full bg-white text-slate-900 text-[11px] flex items-center justify-center hover:bg-slate-100">
            in
          </button>
          <button className="h-6 w-6 rounded-full bg-white text-slate-900 text-[11px] flex items-center justify-center hover:bg-slate-100">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
