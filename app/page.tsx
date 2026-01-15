import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Trainings from "./components/Trainings";
import ResearchSection from "./components/Research";
import Notices from "./components/Notices";
import Partners from "./components/Partners";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function Page() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      <main id="home">
        <Hero />
        <Overview />
        <Trainings />
        <ResearchSection />
        <Notices />
        <Partners />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
