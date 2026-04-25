import React from "react";
import HeroSlider from "./components/hero";
import FleetSavingsSection from "./components/fleetSavingsSection";
import ServiceSection from "./components/servicetypes";
import ServiceTypes from "./components/servicetypes";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FleetSavingsSection />
      <ServiceTypes />
    </div>
  );
};

export default Home;
