import React from "react";
import HeroSlider from "./components/hero";
import FleetSavingsSection from "./components/fleetSavingsSection";

import ServiceTypes from "./components/servicetypes";
import TruckServiceSection from "./components/truckServiceSection";
import WhyChooseUsSection from "./components/whyChooseUsSection";
import TestimonialSlider from "./components/TestimonialSlider";
import FleetLocations from "./components/fleetServiceLocations";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FleetSavingsSection />
      <ServiceTypes />
      <TruckServiceSection />
      <WhyChooseUsSection />
      <TestimonialSlider />
      <FleetLocations />
    </div>
  );
};

export default Home;
