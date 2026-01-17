import React from "react";

const partners = [
  {
    name: "Seba",
    type: "Healthcare Partner",
    short: "S",
    logo: null,
  },
  {
    name: "Laz Pharma",
    type: "35 Motijheel, Dhaka-1000",
    short: "LP",
    logo: "/logos/laz-pharma.png", // না থাকলে null করে দাও
  },
  {
    name: "Seba",
    type: "Healthcare Partner",
    short: "S",
    logo: null,
  },
  {
    name: "Systems Solutions",
    type: "Healthcare Partner",
    short: "SS",
    logo: null,
  },
  {
    name: "Digital Health",
    type: "Healthcare Partner",
    short: "D",
    logo: null,
  },
  {
    name: "City Pharma",
    type: "Pharmaceutical Provider",
    short: "CP",
    logo: null,
  },
  {
    name: "Health Center Plus",
    type: "Healthcare Partner",
    short: "HC",
    logo: null,
  },
];

const PartnerCard = ({ item }) => {
  return (
    <div
      className="
        min-w-[220px] sm:min-w-[260px]
        rounded-2xl bg-white/90 dark:bg-slate-900/90
        border border-slate-200/70 dark:border-slate-800
        shadow-sm flex items-center gap-3
        px-4 py-3
      "
    >
      {/* Avatar / Logo */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-semibold overflow-hidden">
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        ) : (
          item.short
        )}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
          {item.name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {item.type}
        </p>

        {/* ছোট underline (screenshot এর মত) */}
        <div className="mt-3 h-[2px] w-10 rounded-full bg-slate-300 dark:bg-slate-600" />
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <section
      id="partners"
      className="py-16 lg:py-20 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 reveal"
          data-reveal
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Our Partners
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl dark:text-slate-300">
              We collaborate with universities, industry leaders, NGOs,
              development agencies, and government bodies to design impactful
              training and research projects.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
          >
            Become a partner &rarr;
          </a>
        </div>

        {/* Marquee Slider */}
        <div
          className="mt-8 relative overflow-hidden reveal"
          data-reveal
          data-reveal-delay="120"
        >
          {/* ফেড ইফেক্ট চাইলে এই div গুলো রেখে দাও */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

          <div className="flex gap-6 animate-marquee">
            {[...partners, ...partners, ...partners].map((item, idx) => (
              <PartnerCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
