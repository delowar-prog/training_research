import React from "react";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Trainings from "./components/Trainings";
import ResearchSection from "./components/Research";
import Notices from "./components/Notices";
import Partners from "./components/Partners";
import ContactSection from "./components/Contact";
import RevealObserver from "./components/RevealObserver";

function Page() {
  return (
    <>
      <RevealObserver />
      <div id="home">
        <Hero />
        <Overview />
        <Trainings />
        <ResearchSection />
        <Notices />
        <Partners />
        <ContactSection />
      </div>
    </>
  );
}

export default Page;
