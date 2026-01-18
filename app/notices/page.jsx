"use client";

import React, { useState, useMemo } from "react";
import RevealObserver from "../components/RevealObserver";

const noticesData = [
  {
    id: 1,
    title: "Important Notice: Training Schedule Update",
    date: "2026-01-15",
    description: "Due to unforeseen circumstances, the Data Analytics training schedule has been updated. Please check the new timings.",
    download: "/notices/notice1.pdf",
  },
  {
    id: 2,
    title: "New Research Opportunity Available",
    date: "2026-01-10",
    description: "We are excited to announce a new research project on AI ethics. Interested participants are encouraged to apply.",
    download: "/notices/notice2.pdf",
  },
  {
    id: 3,
    title: "Admission Open for Spring 2026",
    date: "2026-01-05",
    description: "Admissions are now open for all Spring 2026 programs. Apply before the deadline to secure your spot.",
    download: "/notices/notice3.pdf",
  },
  {
    id: 4,
    title: "Workshop on Cybersecurity Fundamentals",
    date: "2025-12-20",
    description: "Join our upcoming workshop to learn about essential cybersecurity practices and tools.",
    download: "/notices/notice4.pdf",
  },
  {
    id: 5,
    title: "Holiday Closure Notice",
    date: "2025-12-15",
    description: "The institute will be closed from December 25 to January 2 for the holidays. Happy New Year!",
    download: "/notices/notice5.pdf",
  },
  {
    id: 6,
    title: "Partner Announcement: Collaboration with Tech Corp",
    date: "2025-12-10",
    description: "We are pleased to announce our new partnership with Tech Corp for advanced training programs.",
    download: "/notices/notice6.pdf",
  },
  {
    id: 7,
    title: "Exam Results Released",
    date: "2025-12-05",
    description: "The results for the recent certification exams are now available on the portal.",
    download: "/notices/notice7.pdf",
  },
  {
    id: 8,
    title: "Seminar on Leadership and Communication",
    date: "2025-11-30",
    description: "Attend our seminar to enhance your leadership skills and communication techniques.",
    download: "/notices/notice8.pdf",
  },
  {
    id: 9,
    title: "Maintenance Shutdown",
    date: "2025-11-25",
    description: "The online portal will be under maintenance on November 28 from 10 PM to 2 AM.",
    download: "/notices/notice9.pdf",
  },
  {
    id: 10,
    title: "New Course Launch: Digital Marketing",
    date: "2025-11-20",
    description: "We are launching a new course on Digital Marketing. Enroll now for early bird discounts.",
    download: "/notices/notice10.pdf",
  },
  {
    id: 11,
    title: "Conference Invitation",
    date: "2025-11-15",
    description: "You are invited to our annual research conference on December 15th.",
    download: "/notices/notice11.pdf",
  },
  {
    id: 12,
    title: "Update on Research Funding",
    date: "2025-11-10",
    description: "New funding opportunities are available for research projects in data science.",
    download: "/notices/notice12.pdf",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const sortedNotices = useMemo(() => {
    return noticesData.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const filteredNotices = useMemo(() => {
    return sortedNotices.filter(notice =>
      notice.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedNotices, searchQuery]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              Notices
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Stay updated with the latest announcements and important information.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Notices Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                  SL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                  Notice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {currentNotices.map((notice, index) => (
                <tr key={notice.id} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100">
                    <div>
                      <h3 className="font-semibold">{notice.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">{notice.description}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Published on {new Date(notice.date).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <a
                      href={notice.download}
                      download
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md border ${
                    page === currentPage
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;