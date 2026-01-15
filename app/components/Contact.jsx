"use client";

import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনি নিজের সাবমিট লজিক (API কল ইত্যাদি) যুক্ত করতে পারেন
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Talk to our academic counseling team
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700">
              Not sure which training or research track is right for you? Share your background and
              goals and we'll guide you.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>&#10003; Individual &amp; group counseling</li>
              <li>&#10003; Customized training for organizations</li>
              <li>&#10003; Guidance on research proposals &amp; publications</li>
            </ul>
          </div>
          <form
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+8801..."
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Area of Interest
              </label>
              <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option>Choose an option</option>
                <option>Professional Trainings</option>
                <option>Research Fellowship</option>
                <option>Corporate / Institutional Training</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Your Message
              </label>
              <textarea
                rows="3"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tell us about your background and what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-700"
            >
              Submit inquiry
            </button>
            <p className="text-[11px] text-slate-500">
              By submitting, you agree to be contacted via email/phone for program information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
