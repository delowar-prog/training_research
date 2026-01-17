import React from "react";

const Trainings = () => {
  return (
    <section id="trainings" className="py-16 lg:py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 reveal" data-reveal>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Ongoing &amp; Upcoming Trainings
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base dark:text-slate-300">
              Structured programs designed for working professionals, educators, and students.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
          >
            Download course catalogue &rarr;
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <article className="
  bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden
  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
  hover:-translate-y-[10px] hover:shadow-xl hover:shadow-slate-200/70
">
            {/* Image */}
            <div className="relative h-60 w-full bg-slate-200">
              <img src="/courses/course.png" className="img-conainer object-cover" alt="" />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs rounded-full px-2 py-0.5">
                Ongoing
              </span>
            </div>
            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                Professional Certificate in Data Analytics
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200 line-clamp-2 flex-1">
                Learn Excel, SQL, Power BI, and basic statistics through real datasets and projects.
              </p>

              <div className="mt-2 text-xs text-slate-600 dark:text-slate-200 space-y-1 font-bold">
                <div className="flex justify-between"><span>Duration</span><span>8 Weeks</span></div>
                <div className="flex justify-between"><span>Next Intake</span><span>Feb 10, 2026</span></div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-500">
                  Registration
                </button>
                <button className="flex-1 py-2 rounded-full border border-slate-300 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-800">
                  Details
                </button>
              </div>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="
  bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden
  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
  hover:-translate-y-[10px] hover:shadow-xl hover:shadow-slate-200/70
">
            <div className="relative h-60 w-full bg-slate-200">
              <img src="/courses/course.png" className="img-conainer object-cover" alt="" />
              <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs rounded-full px-2 py-0.5">
                Upcoming
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                Research Methods & Academic Writing
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200 line-clamp-2 flex-1">
                For students, teachers, and professionals planning to conduct and publish research.
              </p>

              <div className="mt-2 text-xs text-slate-600 dark:text-slate-200 space-y-1 font-bold">
                <div className="flex justify-between"><span>Duration</span><span>6 Weeks</span></div>
                <div className="flex justify-between"><span>Next Intake</span><span>Mar 05, 2026</span></div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-500">
                  Registration
                </button>
                <button className="flex-1 py-2 rounded-full border border-slate-300 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-800">
                  Details
                </button>
              </div>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="
  bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden
  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
  hover:-translate-y-[10px] hover:shadow-xl hover:shadow-slate-200/70
">
            <div className="relative h-60 w-full bg-slate-200">
              <img src="/courses/course.png" className="img-conainer object-cover" alt="" />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
                Upcoming
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
                Leadership & Communication for Teams
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200 line-clamp-2 flex-1">
                Tailored workshops for organizations focusing on teamwork, leadership, and change management.
              </p>

              <div className="mt-2 text-xs text-slate-600 dark:text-slate-200 space-y-1 font-bold">
                <div className="flex justify-between"><span>Duration</span><span>1–3 Days</span></div>
                <div className="flex justify-between"><span>Mode</span><span>On-site / Online</span></div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-500">
                  Registration
                </button>
                <button className="flex-1 py-2 rounded-full border border-slate-300 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-800">
                  Details
                </button>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};

export default Trainings;
