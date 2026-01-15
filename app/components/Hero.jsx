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
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [value, duration]);

  return <span>{display.toLocaleString()}</span>;
};

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          aria-hidden="true"
          className="hero-slide hero-slide-1"
          style={{
            backgroundImage:
              "url('/hero/hero-1.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="hero-slide hero-slide-2"
          style={{
            backgroundImage:
              "url('/hero/hero-2.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="hero-slide hero-slide-3"
          style={{
            backgroundImage:
              "url('/hero/hero-3.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-white">
          <span
            className="mb-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-primary-100 backdrop-blur reveal"
            data-reveal
          >
            Training &bull; Research &bull; Innovation
          </span>
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl reveal"
            data-reveal
            data-reveal-delay="120"
          >
            Build Future-Ready Skills &amp; Drive{" "}
            <span className="text-primary-200">Impactful Research</span>
          </h1>
          <p
            className="mt-4 text-base text-slate-100/90 sm:text-lg lg:text-xl reveal"
            data-reveal
            data-reveal-delay="240"
          >
            Our institute blends hands-on professional training with applied research to help
            individuals, organizations, and communities grow with confidence.
          </p>
          <div
            className="mt-6 flex flex-wrap items-center gap-3 reveal"
            data-reveal
            data-reveal-delay="360"
          >
            <a
              href="#trainings"
              className="inline-flex items-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary-500"
            >
              View Trainings
            </a>
            <a
              href="#research"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-2.5 text-sm font-medium text-white transition hover:border-primary-300 hover:text-primary-200"
            >
              Explore Research
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div className="reveal" data-reveal data-reveal-delay="480">
              <dt className="text-sm uppercase tracking-wide text-slate-200/80">
                Professionals Trained
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                <CountUp value={5000} />
                <span>+</span>
              </dd>
            </div>
            <div className="reveal" data-reveal data-reveal-delay="600">
              <dt className="text-sm uppercase tracking-wide text-slate-200/80">
                Research Projects
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                <CountUp value={120} />
                <span>+</span>
              </dd>
            </div>
            <div className="reveal" data-reveal data-reveal-delay="720">
              <dt className="text-sm uppercase tracking-wide text-slate-200/80">
                Industry Partners
              </dt>
              <dd className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                <CountUp value={30} />
                <span>+</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
