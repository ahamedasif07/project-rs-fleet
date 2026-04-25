/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Truck, AlertTriangle, ArrowRight } from "lucide-react";

const ServiceTypes: React.FC = () => {
  const serviceBg =
    "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative min-h-[800px] w-full flex items-center justify-center px-6 py-24 overflow-hidden bg-zinc-950">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={serviceBg}
          alt="Semi Truck and Trailer Service"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Modern Multi-layer Overlay */}
        <div className="absolute inset-0 bg-zinc-900/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/40 to-transparent z-15" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LEFT SIDE: Content */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Reliable Onsite <br />
            <span className="text-primary">Truck & Trailer</span> <br />
            Repair Solutions
          </h1>

          <p className="text-slate-300 leading-relaxed text-lg max-w-xl">
            Expert maintenance and emergency roadside assistance delivered
            directly to your yard. We keep your business moving forward.
          </p>
        </div>

        {/* RIGHT SIDE: Floating Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 01: Onsite Mobile Service */}
          <div className="group bg-white p-8 rounded-md shadow-2xl transform lg:hover:translate-x-4 transition-all duration-500 border border-zinc-100">
            {/* Header Section: Icon + Title (Centered) */}
            <div className="flex items-center gap-5 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-zinc-100 rounded-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Truck className="w-8 h-8 text-zinc-900 group-hover:text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-black text-zinc-900 leading-tight">
                  Onsite Mobile
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">
                  Scheduled Care
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-base mb-8">
              Full-service maintenance performed at your yard. Eliminate
              unnecessary travel time and fuel expenses.
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
              <span className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors cursor-pointer">
                View Details
              </span>
              <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-primary transform group-hover:translate-x-2 transition-all" />
            </div>
          </div>

          {/* Card 02: Emergency Service */}
          <div className="group bg-white/95 backdrop-blur-xl p-8 rounded-md shadow-2xl transform lg:hover:translate-x-4 transition-all duration-500 border border-white/40">
            {/* Header Section: Icon + Title (Centered) */}
            <div className="flex items-center gap-5 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#F4F4F5] rounded-md flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <AlertTriangle className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-black text-zinc-900 leading-tight">
                  Emergency Support
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">
                  24/7 Availability
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-base mb-8">
              Rapid response for trailer blowouts, air leaks, and breakdowns.
              Always ready for deployment.
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
              <span className="text-zinc-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors cursor-pointer">
                Get Help Now
              </span>
              <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-primary transform group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
