import React from "react";

const Research = () => {
  return (
    <section id="research" className="py-16 lg:py-20 bg-indigo-700 text-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 reveal" data-reveal>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Latest Research Highlights</h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              Our faculty and fellows work on applied research that addresses real-world problems
              in education, technology, social sciences, and business.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center text-sm font-medium text-primary-100 hover:text-white"
          >
            View all publications &rarr;
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <article
            className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/70 reveal dark:border-slate-800"
            data-reveal
            data-reveal-delay="120"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Education Technology &middot; 2025
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold">
              Digital Learning Readiness among University Students in Bangladesh
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              A mixed-methods study exploring infrastructure, skills, and mindset barriers in
              online learning.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center text-xs font-semibold text-primary-100 hover:text-white"
            >
              Read summary &rarr;
            </a>
          </article>

          <article
            className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/70 reveal dark:border-slate-800"
            data-reveal
            data-reveal-delay="240"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Data &amp; Policy &middot; 2025
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold">
              Using Data Analytics to Improve Academic Advising Outcomes
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              A collaboration with multiple institutions analyzing student progression and dropout
              risk.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center text-xs font-semibold text-primary-100 hover:text-white"
            >
              View project &rarr;
            </a>
          </article>

          <article
            className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/70 reveal dark:border-slate-800"
            data-reveal
            data-reveal-delay="360"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Social Impact &middot; 2024
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold">
              Community-Based Skill Development for Under-served Youth
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Evaluating the effectiveness of short-term training modules in improving
              employability.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center text-xs font-semibold text-primary-100 hover:text-white"
            >
              Download report &rarr;
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Research;
