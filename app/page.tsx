import React from "react";
import HeroSlider from "./components/hero";
import FleetSavingsSection from "./components/fleetSavingsSection";
import ServiceSection from "./components/servicetypes";
import ServiceTypes from "./components/servicetypes";
import TruckServiceSection from "./components/truckServiceSection";
import WhyChooseUsSection from "./components/whyChooseUsSection";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FleetSavingsSection />
      <ServiceTypes />
      <TruckServiceSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;
