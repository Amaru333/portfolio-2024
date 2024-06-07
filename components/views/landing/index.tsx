import React from "react";
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection";
import AboutAndJourney from "./AboutAndJourney";
import Projects from "./Projects";

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutAndJourney />
      <Projects />
    </div>
  );
};
