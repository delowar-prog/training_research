import React from "react";

const Overview = () => {
  return (
    <section id="overview" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 reveal" data-reveal>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Institute Overview
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base dark:text-slate-300">
              We are a modern training &amp; research institute dedicated to closing the gap between
              academic knowledge and real-world practice.
            </p>
          </div>
          <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            About Us
          </span>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 reveal dark:bg-slate-900 dark:border-slate-800"
            data-reveal
            data-reveal-delay="120"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Our Mission</h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed dark:text-slate-300">
              To empower professionals, students, and organizations with practical skills and
              research-driven insights that drive sustainable growth, innovation, and social impact.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>Deliver industry-aligned training programs.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>Enable evidence-based decision making through research.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>Build a collaborative ecosystem of learners &amp; experts.</span>
              </li>
            </ul>
          </div>

          <div
            className="bg-slate-900 rounded-2xl shadow-sm p-6 sm:p-8 text-slate-50 reveal dark:bg-slate-900"
            data-reveal
            data-reveal-delay="240"
          >
            <h3 className="text-lg font-semibold">Our Vision</h3>
            <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
              To be a leading hub for professional training and applied research in the region,
              recognized for our excellence, integrity, and impact.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-800/70 rounded-xl p-3">
                <p className="font-semibold text-slate-50">Lifelong Learning</p>
                <p className="mt-1 text-slate-300">
                  Creating pathways for continuous upskilling at every career stage.
                </p>
              </div>
              <div className="bg-slate-800/70 rounded-xl p-3">
                <p className="font-semibold text-slate-50">Research Culture</p>
                <p className="mt-1 text-slate-300">
                  Encouraging inquiry, experimentation, and publication.
                </p>
              </div>
              <div className="bg-slate-800/70 rounded-xl p-3">
                <p className="font-semibold text-slate-50">Industry Linkages</p>
                <p className="mt-1 text-slate-300">
                  Aligning programs with real organizational needs.
                </p>
              </div>
              <div className="bg-slate-800/70 rounded-xl p-3">
                <p className="font-semibold text-slate-50">Community Impact</p>
                <p className="mt-1 text-slate-300">
                  Ensuring outcomes that benefit society as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
