import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-indigo-950 dark:border-slate-800 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] reveal"
          data-reveal
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold">
                TI
              </div>
              <div>
                <p className="text-sm font-semibold text-white dark:text-slate-100">
                  Training &amp; Research Institute
                </p>
                <p className="text-xs text-white dark:text-slate-400">
                  Learning &bull; Innovation &bull; Impact
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300 max-w-md dark:text-slate-300">
              Exclusive learning and research programs designed for institutions that value
              evidence, impact, and long-term capability building.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 dark:text-slate-100">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 dark:text-slate-300">
              <li>
                <a href="#overview" className="hover:text-primary-300 dark:hover:text-primary-300">
                  About
                </a>
              </li>
              <li>
                <a href="#trainings" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Programs
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Research
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 dark:text-slate-300">
              <li>
                <a href="#" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-300 dark:hover:text-primary-300">
                  Publications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-100 dark:text-slate-100">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 dark:text-slate-300">
              <li>hello@tri.edu</li>
              <li>+880 1711 000 000</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px bg-slate-200/80 dark:bg-slate-800" />

        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white reveal dark:text-slate-400"
          data-reveal
          data-reveal-delay="120"
        >
          <p>&copy; {year} Training &amp; Research Institute. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-300">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-300">
              Terms
            </a>
            <a href="#home" className="hover:text-primary-600 dark:hover:text-primary-300">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/8801711000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-green-500"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.31c-.28-.14-1.63-.8-1.88-.89-.25-.09-.44-.14-.62.14-.18.28-.71.89-.87 1.07-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.53-.45-.46-.62-.47-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3s.98 2.67 1.12 2.86c.14.18 1.93 2.95 4.68 4.14.66.28 1.18.45 1.58.58.66.21 1.26.18 1.74.11.53-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.2-.53-.34z" />
          <path d="M16.02 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.88.49 3.69 1.42 5.29l-1.51 5.5 5.64-1.48c1.54.84 3.28 1.28 5.14 1.28 5.9 0 10.69-4.79 10.69-10.69s-4.79-10.69-10.69-10.69zm0 19.58c-1.67 0-3.25-.46-4.62-1.34l-.33-.21-3.35.88.9-3.26-.22-.34c-.92-1.42-1.41-3.06-1.41-4.72 0-4.92 4.01-8.93 8.93-8.93s8.93 4.01 8.93 8.93-4.01 8.93-8.93 8.93z" />
        </svg>
        WhatsApp
      </a>
    </footer>
  );
};

export default Footer;
