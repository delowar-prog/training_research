import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700 mb-4">
              Training &bull; Research &bull; Innovation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Build Future-Ready Skills &amp; Drive{" "}
              <span className="text-primary-600">Impactful Research</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
              Our institute blends hands-on professional training with applied research to help
              individuals, organizations, and communities grow with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#trainings"
                className="inline-flex items-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary-700 transition"
              >
                View Trainings
              </a>
              <a
                href="#research"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 transition"
              >
                Explore Research
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md text-center sm:text-left sm:max-w-none">
              <div>
                <dt className="text-xs uppercase text-slate-500 tracking-wide">
                  Professionals Trained
                </dt>
                <dd className="text-xl font-semibold text-slate-900">5,000+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-slate-500 tracking-wide">
                  Research Projects
                </dt>
                <dd className="text-xl font-semibold text-slate-900">120+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase text-slate-500 tracking-wide">
                  Industry Partners
                </dt>
                <dd className="text-xl font-semibold text-slate-900">30+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-8">
              <h2 className="text-sm font-semibold text-slate-900 flex items-center justify-between">
                Next Cohort Starts
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Enrolling Now
                </span>
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Data Analytics &amp; Visualization Bootcamp
                    </p>
                    <p className="text-xs text-slate-500">
                      Duration: 8 Weeks &middot; Hybrid &middot; Evening Batch
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Education Technology Research Fellowship
                    </p>
                    <p className="text-xs text-slate-500">
                      Mentored research with publication support
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Leadership &amp; Soft Skills for Educators
                    </p>
                    <p className="text-xs text-slate-500">
                      Target: Teachers, Coordinators, Academic Leaders
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Scholarships &amp; group discounts available.
                </p>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-primary-600 hover:text-primary-700"
                >
                  Talk to our team &rarr;
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-primary-100 blur-2xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
