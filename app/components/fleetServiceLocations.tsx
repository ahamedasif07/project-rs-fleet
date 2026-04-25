/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ChevronRight,
} from "lucide-react";

// --- TypeScript Interfaces ---
interface ServiceHeader {
  title: string;
  isBold: boolean;
}

interface LocationData {
  id: number;
  city: string;
  state: string;
  address: string;
  phone: string;
  services: string[];
}

const serviceLines: ServiceHeader[] = [
  { title: "Mobile Service", isBold: false },
  { title: "24/7 Emergency Service", isBold: true },
  { title: "Equipment Service", isBold: false },
  { title: "Hydraulic Service", isBold: false },
];

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
];

const FleetLocations: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        {/* --- Top Header --- */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-[0.3em] mb-4">
            {serviceLines.map((service, idx) => (
              <React.Fragment key={idx}>
                <span
                  className={`uppercase ${service.isBold ? "font-black text-primary" : "font-medium text-slate-400"}`}
                >
                  {service.title}
                </span>
                {idx < serviceLines.length - 1 && (
                  <span className="text-slate-200">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Regional <span className="text-primary">Network</span>
          </h2>
        </div>

        {/* --- 70/30 Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* LEFT SIDE: Map Image (70% - lg:col-span-7) */}
          <div className="lg:col-span-7 h-fit lg:sticky lg:top-10">
            <div className="relative w-full h-[620px] bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/assets/images/map-image.png" // Replace with your actual map image
                alt="Fleet Service Area Map"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT SIDE: Location Cards (30% - lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="pb-4 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900 uppercase">
                Service Hubs
              </h3>
              <p className="text-slate-400 text-xs">
                Scroll to explore all regions
              </p>
            </div>

            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-red-500/5"
                >
                  {/* City Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-black text-slate-900 leading-none mb-1 group-hover:text-primary transition-colors">
                        {loc.city}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {loc.state}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ChevronRight size={16} />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={14}
                        className="text-slate-300 mt-1 shrink-0"
                      />
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-primary shrink-0" />
                      <p className="text-slate-900 font-bold text-xs">
                        {loc.phone}
                      </p>
                    </div>
                  </div>

                  {/* Services List - Minimalist */}
                  <div className="flex flex-wrap gap-1.5 border-t border-slate-50 pt-4">
                    {loc.services.map((s, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-extrabold bg-slate-50 text-slate-400 px-2 py-1 rounded-md uppercase group-hover:bg-red-50 group-hover:text-primary transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>
    </section>
  );
};

export default FleetLocations;
