import React from "react";

const Partners = () => {
  return (
    <section id="partners" className="py-16 lg:py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 reveal"
          data-reveal
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Our Partners
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl dark:text-slate-300">
              We collaborate with universities, industry leaders, NGOs, development agencies, and
              government bodies to design impactful training and research projects.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
          >
            Become a partner &rarr;
          </a>
        </div>

        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 reveal"
          data-reveal
          data-reveal-delay="120"
        >
          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 h-16 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
              University A
            </span>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 h-16 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
              Tech Company B
            </span>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 h-16 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
              NGO C
            </span>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 h-16 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
              Govt. Dept D
            </span>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 h-16 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-300">
              Industry Assoc E
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
