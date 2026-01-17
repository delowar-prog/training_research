"use client";

import React, { useState } from "react";
import RevealObserver from "../components/RevealObserver";

const trainingsData = [
  {
    id: 1,
    status: "Ongoing",
    statusColor: "green",
    title: "Professional Certificate in Data Analytics",
    description: "Learn Excel, SQL, Power BI, and basic statistics through real datasets and projects.",
    duration: "8 Weeks",
    nextIntake: "Feb 10, 2026",
    mode: "Evening · Hybrid",
    delivery: "Online",
    buttonText: "Apply for this program",
    buttonClass: "bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400",
  },
  {
    id: 2,
    status: "Upcoming",
    statusColor: "amber",
    title: "Research Methods & Academic Writing",
    description: "For students, teachers, and professionals planning to conduct and publish research.",
    duration: "6 Weeks",
    nextIntake: "Mar 05, 2026",
    mode: "Weekend · On-Campus",
    delivery: "Offline",
    buttonText: "Pre-register interest",
    buttonClass: "border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-slate-800",
  },
  {
    id: 3,
    status: "Upcoming",
    statusColor: "blue",
    title: "Leadership & Communication for Teams",
    description: "Tailored workshops for organizations focusing on teamwork, leadership, and change management.",
    duration: "1–3 Days",
    nextIntake: "On Demand",
    mode: "Corporate · Customizable",
    delivery: "Offline",
    buttonText: "Request proposal",
    buttonClass: "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
  },
  {
    id: 4,
    status: "Ongoing",
    statusColor: "green",
    title: "Advanced Python for Data Science",
    description: "Master Python libraries like Pandas, NumPy, and Scikit-learn for data analysis and machine learning.",
    duration: "10 Weeks",
    nextIntake: "Jan 15, 2026",
    mode: "Online · Flexible",
    delivery: "Online",
    buttonText: "Enroll Now",
    buttonClass: "bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400",
  },
  {
    id: 5,
    status: "Upcoming",
    statusColor: "amber",
    title: "Digital Marketing Mastery",
    description: "Comprehensive course on SEO, social media, content marketing, and analytics.",
    duration: "8 Weeks",
    nextIntake: "Apr 01, 2026",
    mode: "Evening · On-Campus",
    delivery: "Offline",
    buttonText: "Reserve Spot",
    buttonClass: "border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-slate-800",
  },
  {
    id: 6,
    status: "Upcoming",
    statusColor: "blue",
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts, tools, and best practices to protect digital assets.",
    duration: "6 Weeks",
    nextIntake: "May 20, 2026",
    mode: "Online · Recorded Sessions",
    delivery: "Online",
    buttonText: "Register Interest",
    buttonClass: "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800",
  },
];

const Page = () => {
  const [filter, setFilter] = useState("All");

  const filteredTrainings = filter === "All" ? trainingsData : trainingsData.filter(t => t.delivery === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <RevealObserver />
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Our Training Programs
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Explore a wide range of professional development courses designed for all levels.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 p-1">
            {["All", "Offline", "Online"].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                  filter === option
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Trainings Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredTrainings.map((training) => (
            <article
              key={training.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/80 p-5 dark:bg-slate-900 dark:border-slate-800 transition-transform duration-300 ease-in-out hover:-translate-y-[10px] reveal"
              data-reveal
            >
              <div className="flex items-center justify-between text-xs mb-3">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ${
                  training.statusColor === 'green' ? 'bg-green-100 text-green-700' :
                  training.statusColor === 'amber' ? 'bg-amber-100 text-amber-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {training.status}
                </span>
                <span className="text-slate-500 dark:text-slate-400">{training.mode}</span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                {training.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 flex-1 dark:text-slate-300">
                {training.description}
              </p>
              <dl className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex justify-between">
                  <dt>Duration</dt>
                  <dd>{training.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Next Intake</dt>
                  <dd>{training.nextIntake}</dd>
                </div>
              </dl>
              <button className={`mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold ${training.buttonClass}`}>
                {training.buttonText}
              </button>
            </article>
          ))}
        </div>
    </div>
  );
};

export default Page;