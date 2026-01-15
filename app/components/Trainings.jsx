import React from "react";

const Trainings = () => {
  return (
    <section id="trainings" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 reveal" data-reveal>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ongoing &amp; Upcoming Trainings
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Structured programs designed for working professionals, educators, and students.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Download course catalogue &rarr;
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Training Card 1 */}
          <article
            className="flex flex-col bg-slate-50 rounded-2xl border border-slate-200/80 p-5 reveal"
            data-reveal
            data-reveal-delay="120"
          >
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 font-medium text-green-700">
                Ongoing
              </span>
              <span className="text-slate-500">Evening &middot; Hybrid</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Professional Certificate in Data Analytics
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Learn Excel, SQL, Power BI, and basic statistics through real datasets and projects.
            </p>
            <dl className="mt-3 space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <dt>Duration</dt>
                <dd>8 Weeks</dd>
              </div>
              <div className="flex justify-between">
                <dt>Next Intake</dt>
                <dd>Feb 10, 2026</dd>
              </div>
            </dl>
            <button className="mt-4 inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white hover:bg-primary-700">
              Apply for this program
            </button>
          </article>

          {/* Card 2 */}
          <article
            className="flex flex-col bg-slate-50 rounded-2xl border border-slate-200/80 p-5 reveal"
            data-reveal
            data-reveal-delay="240"
          >
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 font-medium text-amber-700">
                Upcoming
              </span>
              <span className="text-slate-500">Weekend &middot; On-Campus</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Research Methods &amp; Academic Writing
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              For students, teachers, and professionals planning to conduct and publish research.
            </p>
            <dl className="mt-3 space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <dt>Duration</dt>
                <dd>6 Weeks</dd>
              </div>
              <div className="flex justify-between">
                <dt>Next Intake</dt>
                <dd>Mar 05, 2026</dd>
              </div>
            </dl>
            <button className="mt-4 inline-flex items-center justify-center rounded-full border border-primary-600 px-4 py-2 text-xs font-semibold text-primary-600 hover:bg-primary-50">
              Pre-register interest
            </button>
          </article>

          {/* Card 3 */}
          <article
            className="flex flex-col bg-slate-50 rounded-2xl border border-slate-200/80 p-5 reveal"
            data-reveal
            data-reveal-delay="360"
          >
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 font-medium text-blue-700">
                Upcoming
              </span>
              <span className="text-slate-500">Corporate &middot; Customizable</span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">
              Leadership &amp; Communication for Teams
            </h3>
            <p className="mt-2 text-sm text-slate-600 flex-1">
              Tailored workshops for organizations focusing on teamwork, leadership, and change
              management.
            </p>
            <dl className="mt-3 space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <dt>Duration</dt>
                <dd>1&ndash;3 Days</dd>
              </div>
              <div className="flex justify-between">
                <dt>Mode</dt>
                <dd>On-site / Online</dd>
              </div>
            </dl>
            <button className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100">
              Request proposal
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Trainings;
