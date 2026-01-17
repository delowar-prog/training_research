"use client";

import React, { useState } from "react";
import RevealObserver from "../components/RevealObserver";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
const DirectorsPage = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const directors = [
    {
      id: 1,
      name: "Md. Mofazzal Hossain",
      position: "Academic Director",
      photo: "/directors/1.jpg",
      qualification: "MSc in Curriculum Development",
      bio: "Jane specializes in curriculum development and has published extensively on modern teaching methodologies. Her work focuses on innovative educational approaches that enhance learning outcomes.",
      expertise: "Curriculum Design, Pedagogical Innovation",
      email: "coordinator@training.org.bd",
      phone: "09638016455",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 1,
      name: "Md. Mofazzal Hossain",
      position: "Academic Director",
      photo: "/directors/2.jpg",
      qualification: "MSc in Curriculum Development",
      bio: "Jane specializes in curriculum development and has published extensively on modern teaching methodologies. Her work focuses on innovative educational approaches that enhance learning outcomes.",
      expertise: "Curriculum Design, Pedagogical Innovation",
      email: "coordinator@training.org.bd",
      phone: "09638016455",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 1,
      name: "Md. Mofazzal Hossain",
      position: "Academic Director",
      photo: "/directors/3.jpg",
      qualification: "MSc in Curriculum Development",
      bio: "Jane specializes in curriculum development and has published extensively on modern teaching methodologies. Her work focuses on innovative educational approaches that enhance learning outcomes.",
      expertise: "Curriculum Design, Pedagogical Innovation",
      email: "coordinator@training.org.bd",
      phone: "09638016455",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  ];

  const openDetails = (director) => {
    setSelectedDirector(director);
  };

  const closeDetails = () => {
    setSelectedDirector(null);
  };

  return (
    <>
      <RevealObserver />
      <main className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal" data-reveal>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
              Directors Profile
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Meet our esteemed directors who lead our institute with vision and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director) => (
              <div key={director.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-center">

                {/* Top background */}
                <div className="bg-primary-700 h-28 flex justify-center items-end">
                  <img
                    src={director.photo}
                    alt={director.name}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover translate-y-1/2"
                  />
                </div>

                {/* Content */}
                <div className="pt-14 pb-6 px-6">
                  <h3 className="text-lg font-semibold text-green-600">
                    {director.name}
                  </h3>

                  <p className="text-sm font-bold text-slate-800 mt-1">
                    {director.position}
                  </p>

                  {/* Contact */}
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>{director.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>{director.phone}</span>
                    </div>
                  </div>

                  {/* Follow */}
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Follow:
                    </p>

                    <div className="flex justify-center gap-3">
                      {/* LinkedIn */}
                      <a
                        href={director.linkedin}
                        className="w-9 h-9 flex items-center justify-center rounded-full border text-slate-500 
                         hover:bg-[#0A66C2] hover:text-white transition"
                      >
                        <FaLinkedinIn />
                      </a>

                      {/* X */}
                      <a
                        href={director.twitter}
                        className="w-9 h-9 flex items-center justify-center rounded-full border text-slate-500 
                         hover:bg-black hover:text-white transition"
                      >
                        <FaXTwitter />
                      </a>

                      {/* Facebook */}
                      <a
                        href={director.facebook}
                        className="w-9 h-9 flex items-center justify-center rounded-full border text-slate-500 
                         hover:bg-[#1877F2] hover:text-white transition"
                      >
                        <FaFacebookF />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedDirector && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeDetails}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-md w-full mx-4 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Director Details</h2>
              <button onClick={closeDetails} className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <img src={selectedDirector.photo} alt={selectedDirector.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{selectedDirector.name}</h3>
              <p className="text-lg text-primary-600 dark:text-primary-300 mb-2">{selectedDirector.position}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{selectedDirector.qualification}</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{selectedDirector.bio}</p>
              <div className="text-left space-y-2">
                <p><strong>Experience:</strong> {selectedDirector.experience}</p>
                <p><strong>Publications:</strong> {selectedDirector.publications}</p>
                <p><strong>Expertise:</strong> {selectedDirector.expertise}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DirectorsPage;