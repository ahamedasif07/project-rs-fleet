import React from "react";
import HeroSlider from "./components/hero";
import FleetSavingsSection from "./components/fleetSavingsSection";
import ServiceSection from "./components/service";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FleetSavingsSection />
      <ServiceSection />
    </div>
  );
};

export default Home;
