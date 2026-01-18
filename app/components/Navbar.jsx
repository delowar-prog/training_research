"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = ({ isTopbarVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isSwitching, setIsSwitching] = useState(false);
  const transitionTimeout = useRef(null);

  const applyTheme = (nextTheme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    root.setAttribute("data-theme", nextTheme);
    document.body.classList.toggle("dark", nextTheme === "dark");
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : systemPrefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    setIsSwitching(true);

    const root = document.documentElement;
    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
    root.classList.add("theme-transition");
    transitionTimeout.current = setTimeout(() => {
      root.classList.remove("theme-transition");
      setIsSwitching(false);
    }, 350);
  };

  return (
    <header className={`sticky ${isTopbarVisible ? 'top-10' : 'top-0'} z-30 bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
              TI
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                Training &amp; Research Institute
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Learning &bull; Innovation &bull; Impact
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link
              href="/"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
            >
              Home
            </Link>
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-slate-600 hover:text-primary-600 focus:outline-none dark:text-slate-300 dark:hover:text-primary-300"
                aria-haspopup="true"
              >
                About Us
                <svg
                  className="h-4 w-4 text-slate-400 group-hover:text-primary-600 dark:text-slate-500 dark:group-hover:text-primary-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className="pointer-events-none absolute left-0 top-full -mt-1 w-64 pt-3 opacity-0 translate-y-1 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
                role="menu"
              >
                <div className="rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
                  <div className="py-2 text-sm text-slate-600 dark:text-slate-300">
                    <a
                      href="#overview"
                      className="block px-4 py-2 transition hover:bg-slate-50 hover:text-primary-600 dark:hover:bg-slate-900/60 dark:hover:text-primary-300"
                    >
                      Mission &amp; Vission
                    </a>
                    <Link
                      href="/directors"
                      className="block px-4 py-2 transition hover:bg-slate-50 hover:text-primary-600 dark:hover:bg-slate-900/60 dark:hover:text-primary-300"
                    >
                      Directors Profile
                    </Link>
                    <a
                      href="#overview"
                      className="block px-4 py-2 transition hover:bg-slate-50 hover:text-primary-600 dark:hover:bg-slate-900/60 dark:hover:text-primary-300"
                    >
                      Objectives
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 transition hover:bg-slate-50 hover:text-primary-600 dark:hover:bg-slate-900/60 dark:hover:text-primary-300"
                    >
                      Advisory Board
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 transition hover:bg-slate-50 hover:text-primary-600 dark:hover:bg-slate-900/60 dark:hover:text-primary-300"
                    >
                      Accademic Council
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/trainings"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
            >
              Trainings
            </Link>
            <a
              href="#research"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
            >
              Research
            </a>
            <Link
              href="/notices"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
            >
              Notices
            </Link>
            <a
              href="#partners"
              className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
            >
              Partners
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary-400 dark:hover:text-primary-300"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg
                  className={`h-4 w-4 ${isSwitching ? "theme-spin" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 3.5a.75.75 0 01.75.75V6a.75.75 0 01-1.5 0V4.25A.75.75 0 0110 3.5zM10 14a4 4 0 100-8 4 4 0 000 8zm-6.5-4a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H4.25A.75.75 0 013.5 10zm9.5 0a.75.75 0 01.75-.75H15.75a.75.75 0 010 1.5H13.75A.75.75 0 0113 10zM5.22 5.22a.75.75 0 011.06 0L7.5 6.44a.75.75 0 11-1.06 1.06L5.22 6.28a.75.75 0 010-1.06zm8.22 8.22a.75.75 0 011.06 0l1.22 1.22a.75.75 0 11-1.06 1.06l-1.22-1.22a.75.75 0 010-1.06zm1.06-8.22a.75.75 0 010 1.06l-1.22 1.22a.75.75 0 11-1.06-1.06l1.22-1.22a.75.75 0 011.06 0zM7.5 13.56a.75.75 0 010 1.06l-1.22 1.22a.75.75 0 11-1.06-1.06l1.22-1.22a.75.75 0 011.06 0z" />
                </svg>
              ) : (
                <svg
                  className={`h-4 w-4 ${isSwitching ? "theme-spin" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.293 13.293a8 8 0 01-10.586-10.586.75.75 0 00-1.03-.84A9.5 9.5 0 1018.133 14.323a.75.75 0 00-.84-1.03z" />
                </svg>
              )}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-primary-600 px-4 py-1.5 text-primary-600 text-sm font-medium hover:bg-primary-600 hover:text-white transition dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-500 dark:hover:text-white"
            >
              Apply Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-900/60"
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
        className={`md:hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3 space-y-2 text-sm">
          <Link
            href="/"
            className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <div className="pt-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              About Us
            </p>
            <div className="mt-2 space-y-1">
              <a
                href="#overview"
                className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
                onClick={() => setIsOpen(false)}
              >
                Mission &amp; Vission
              </a>
              <Link
                href="/directors"
                className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
                onClick={() => setIsOpen(false)}
              >
                Directors Profile
              </Link>
              <a
                href="#overview"
                className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
                onClick={() => setIsOpen(false)}
              >
                Objectives
              </a>
              <a
                href="#"
                className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
                onClick={() => setIsOpen(false)}
              >
                Advisory Board
              </a>
              <a
                href="#"
                className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
                onClick={() => setIsOpen(false)}
              >
                Accademic Council
              </a>
            </div>
          </div>
          <Link
            href="/trainings"
            className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            Trainings
          </Link>
          <a
            href="#research"
            className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            Research
          </a>
          <Link
            href="/notices"
            className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            Notices
          </Link>
          <a
            href="#partners"
            className="block py-1 text-slate-700 hover:text-primary-600 dark:text-slate-200 dark:hover:text-primary-300"
            onClick={() => setIsOpen(false)}
          >
            Partners
          </a>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center w-full rounded-full border border-primary-600 px-4 py-2 text-primary-600 font-medium hover:bg-primary-600 hover:text-white transition dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary-500 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-slate-600 transition hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-primary-400 dark:hover:text-primary-300"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
