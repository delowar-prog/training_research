"use client";

import React, { useEffect, useState } from "react";

const CountUp = ({ value, duration = 1800 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame;
    let start;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const step = (timestamp) => {
      if (start === undefined) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <span>{display.toLocaleString()}</span>;
};

const slides = [
  {
    id: 0,
    image: "/hero/hero-1.png",
    label: "Creative Learning",
    bg: "from-rose-500 via-rose-400 to-orange-300",
  },
  {
    id: 1,
    image: "/hero/hero-2.png",
    label: "Skilled Manpower",
    bg: "from-sky-500 via-sky-400 to-cyan-300",
  },
  {
    id: 2,
    image: "/hero/hero-3.png",
    label: "Future Entrepreneur",
    bg: "from-violet-500 via-fuchsia-400 to-pink-300",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  // auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-300 to-orange-300">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:py-20 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-3xl text-center lg:text-left">
          <span className="mb-4 inline-flex items-center rounded-full bg-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600 backdrop-blur">
            Training • Freelancer • Entrepreneurship
          </span>

          <h1 className="text-xl font-bold tracking-tight text-gray-700 sm:text-4xl lg:text-4xl">
            Creating Skilled Manpower,{" "}
            <span className="whitespace-nowrap text-primary-600">
              Freelancer &amp; Entrepreneur
            </span>
          </h1>

          <p className="mt-4 text-sm text-gray-800 sm:text-base">
            Pioneering professional skill development with expert mentors,
            ensuring continuous success through strategic job placements in the
            tech sector.
          </p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-left lg:justify-start">
            <div>
              <p className="text-2xl font-bold text-black">
                <CountUp value={19} />+
              </p>
              <p className="text-xs font-medium text-black">
                Years of Excellence
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">
                <CountUp value={12000} />+
              </p>
              <p className="text-xs font-medium text-black">
                Trained Learners
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">
                <CountUp value={350} />+
              </p>
              <p className="text-xs font-medium text-black">
                Corporate Partners
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#courses"
              className="inline-flex items-center rounded-full bg-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:bg-sky-500"
            >
              Find The Course
              <span className="ml-2 text-lg">↗</span>
            </a>
            <a
              href="#seminar"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-primary-300 hover:text-primary-200"
            >
              Join Free Seminar
              <span className="ml-2 text-base">▶</span>
            </a>
          </div>
        </div>

        {/* RIGHT SLIDER CARD */}
        <div className="relative z-10 flex w-full max-w-3xl justify-center lg:max-w-3xl overflow-hidden h-full">
         
          <div className="overflow-hidden w-full h-full">
            <div
              className="flex transition-transform duration-700 h-full"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {slides.map((slide) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.label}
                  className="w-full flex-shrink-0 object-contain animate-sway"
                />
              ))}
            </div>
          </div>

          {/* slider dots */}
            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActive(index)}
                  className={
                    "h-2.5 rounded-full transition-all " +
                    (index === active
                      ? "w-5 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80")
                  }
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
