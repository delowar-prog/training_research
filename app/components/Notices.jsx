import React from "react";

const Notices = () => {
  return (
    <section id="notices" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Notices &amp; Announcements
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Stay updated with admission deadlines, exam schedules, events, and important
              circulars.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View all notices &rarr;
          </a>
        </div>

        <div className="mt-6 bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100">
          {/* Notice item 1 */}
          <article className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-6 py-4">
            <div className="sm:w-40">
              <p className="text-xs font-medium text-slate-500">Jan 20, 2026</p>
              <p className="text-xs text-green-600 font-semibold mt-1">New</p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Call for Applications: Research Fellowship 2026 (Education &amp; Data)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Last date to apply: Feb 15, 2026. Fellowships include mentorship, workspace, and
                publication support.
              </p>
            </div>
            <div className="sm:w-40">
              <a
                href="#"
                className="text-xs font-semibold text-primary-600 hover:text-primary-700"
              >
                Download circular &rarr;
              </a>
            </div>
          </article>

          {/* Notice item 2 */}
          <article className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-6 py-4">
            <div className="sm:w-40">
              <p className="text-xs font-medium text-slate-500">Jan 05, 2026</p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Revised Class Schedule for Data Analytics (Batch DA-24)
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Evening classes will now start from 6:30 PM instead of 6:00 PM from Jan 10 onward.
              </p>
            </div>
            <div className="sm:w-40">
              <a
                href="#"
                className="text-xs font-semibold text-primary-600 hover:text-primary-700"
              >
                View schedule &rarr;
              </a>
            </div>
          </article>

          {/* Notice item 3 */}
          <article className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-6 py-4">
            <div className="sm:w-40">
              <p className="text-xs font-medium text-slate-500">Dec 18, 2025</p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">
                Winter Break &amp; Office Hours Notice
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                The institute will remain closed from Dec 25 to Jan 01, with limited support
                services available online.
              </p>
            </div>
            <div className="sm:w-40">
              <a
                href="#"
                className="text-xs font-semibold text-primary-600 hover:text-primary-700"
              >
                Read full notice &rarr;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Notices;
