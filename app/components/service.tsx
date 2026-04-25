import React from "react";
import Image from "next/image";
import { Truck, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

const ServiceHeroSection: React.FC = () => {
  const serviceBg =
    "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative min-h-[900px] w-full flex items-center justify-center px-6 py-24 overflow-hidden bg-zinc-50">
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
        <div className="absolute inset-0 bg-zinc-900/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-900/40 to-transparent z-15" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT SIDE: Content (Take 7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Trusted Fleet Partner
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Reliable Onsite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Truck & Trailer
            </span>{" "}
            <br />
            Repair Solutions
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Expert maintenance and emergency roadside assistance delivered
            directly to your yard. We keep your business moving forward.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-orange-600 transition-all transform hover:-translate-y-1">
              Book a Service
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Floating Cards (Take 5 columns) */}
        <div className="lg:col-span-5 space-y-6 relative">
          {/* Card 01: Onsite Mobile Service */}
          <div className="group bg-white p-8 rounded-[2rem] shadow-2xl transform lg:hover:-translate-x-4 transition-all duration-500 border border-zinc-100">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                <Truck className="w-7 h-7 text-zinc-900 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Onsite Mobile
                </h3>
                <p className="text-primary text-xs font-bold uppercase tracking-tighter">
                  Scheduled Care
                </p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Full-service maintenance performed at your yard. Eliminate
              unnecessary travel time and fuel expenses.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-zinc-900 font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
                View Details
              </span>
              <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          {/* Card 02: Emergency Service */}
          <div className="group bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl transform lg:translate-x-8 lg:hover:translate-x-4 transition-all duration-500 border border-white/40">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <AlertTriangle className="w-7 h-7 text-red-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Emergency Support
                </h3>
                <p className="text-red-600 text-xs font-bold uppercase tracking-tighter">
                  24/7 Availability
                </p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Rapid response for trailer blowouts, air leaks, and breakdowns.
              Always ready for deployment.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-zinc-900 font-bold text-xs uppercase tracking-widest group-hover:text-red-600 transition-colors cursor-pointer">
                Get Help Now
              </span>
              <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-red-600 transform group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
