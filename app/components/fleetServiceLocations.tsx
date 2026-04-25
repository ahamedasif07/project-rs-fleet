/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";

// --- TypeScript Interfaces ---
interface LocationData {
  id: number;
  city: string;
  state: string;
  address: string;
  phone: string;
  services: string[];
}

const locations: LocationData[] = [
  {
    id: 1,
    city: "Bay Area",
    state: "CA",
    address: "San Francisco & Oakland Metro Area",
    phone: "+1 877-349-8789",
    services: ["Mobile", "24/7 Emergency", "Hydraulic"],
  },
  {
    id: 2,
    city: "Sacramento",
    state: "CA",
    address: "1420 Blue Oaks Blvd, Roseville, CA 95747",
    phone: "+1 877-349-8789",
    services: ["Mobile", "Emergency", "Equipment"],
  },
  {
    id: 3,
    city: "Central Valley",
    state: "CA",
    address: "Stockton, Modesto & Fresno Areas",
    phone: "+1 877-349-8789",
    services: ["Mobile", "Equipment", "Hydraulic"],
  },
  {
    id: 4,
    city: "Fontana",
    state: "CA",
    address: "Inland Empire & SB Area",
    phone: "+1 877-349-8789",
    services: ["Mobile", "Emergency", "Hydraulic"],
  },
  {
    id: 5,
    city: "Reno",
    state: "NV",
    address: "Reno, Sparks & Carson City",
    phone: "+1 877-349-8789",
    services: ["Mobile", "Emergency", "Equipment"],
  },
  {
    id: 6,
    city: "Las Vegas",
    state: "NV",
    address: "Las Vegas Strip & Henderson Area",
    phone: "+1 877-349-8789",
    services: ["Mobile", "24/7 Emergency"],
  },
];

const FleetLocations: React.FC = () => {
  return (
    <section className="bg-[#FAFAF9] py-24 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
            Our <span className="text-primary">Locations</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* --- Full Width Map --- */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 group shadow-lg bg-white border border-slate-200">
          <Image
            src="/assets/images/map-image.png"
            alt="Fleet Service Area Map"
            fill
            className="object-contain p-4 transition-transform duration-1000 group-hover:scale-105"
            priority
          />
        </div>

        {/* --- Location Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group relative bg-white p-7 rounded-xl border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
            >
              {/* --- SIDE SLIDE EFFECT LAYER --- */}
              <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

              {/* --- CARD CONTENT --- */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <span className="text-primary font-bold text-[10px] uppercase tracking-widest group-hover:text-white/90 transition-colors">
                      {loc.state} Region
                    </span>
                    <h4 className="text-2xl font-black text-slate-900 mt-1 group-hover:text-white transition-colors leading-none">
                      {loc.city}
                    </h4>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Body Section - Improved Spacing */}
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-primary shrink-0 group-hover:text-white transition-colors"
                    />
                    <p className="text-slate-600 text-sm font-medium leading-snug group-hover:text-white/90 transition-colors">
                      {loc.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone
                      size={18}
                      className="text-primary shrink-0 group-hover:text-white transition-colors"
                    />
                    <p className="text-slate-600 text-sm font-bold group-hover:text-white transition-colors">
                      {loc.phone}
                    </p>
                  </div>
                </div>

                {/* Footer Service List */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 group-hover:border-white/20 transition-colors">
                  {loc.services.map((s, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-black bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md uppercase transition-all group-hover:bg-white/20 group-hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dispatch Link Overlay */}
              <a
                href={`tel:${loc.phone}`}
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label={`Call ${loc.city}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetLocations;
