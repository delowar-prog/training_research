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
    <>
      <RevealObserver />
      <div className="w-full bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border-t-4 border-indigo-600">
        <div className="relative w-full bg-blue-100 border-t-4 border-blue-600">
          <svg className="absolute right-0 bottom-0 w-40 sm:w-64 opacity-90 text-blue-200" viewBox="0 0 200 200">
            <path fill="currentColor" d="M0,0 C100,120 150,80 200,200 L200,0 Z" />
          </svg>

          <div className="relative pt-12 pb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-blue-700">
              Training Programs
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
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
                className={`px-4 py-2 text-sm font-medium rounded-full transition ${filter === option
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
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 overflow-hidden
  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
  hover:-translate-y-[10px] hover:shadow-xl hover:shadow-slate-200/70"
              data-reveal
            >
              <div className="relative h-60 w-full bg-slate-200">
                <img src="/courses/course.png" className="w-full h-full object-cover" alt="" />
                <span className={`absolute top-3 left-3 text-white text-xs rounded-full px-2 py-0.5 ${training.statusColor === 'green' ? 'bg-green-600' :
                    training.statusColor === 'amber' ? 'bg-yellow-600' :
                      'bg-blue-600'
                  }`}>
                  {training.status}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">
                  {training.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-200 line-clamp-2 flex-1">
                  {training.description}
                </p>
                <div className="mt-2 text-xs text-slate-600 dark:text-slate-200 space-y-1 font-bold">
                  <div className="flex justify-between"><span>Duration</span><span>{training.duration}</span></div>
                  <div className="flex justify-between"><span>Next Intake</span><span>{training.nextIntake}</span></div>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;