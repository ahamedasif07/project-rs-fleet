/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  CheckCircle2,
  Zap,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const FleetSavingsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image Slot with Gradient Background */}
          <div className="relative p-4 md:p-0">
            <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-100">
              <Image
                src="/assets/images/Gemini_Generated_Image_11kuui11kuui11ku-removebg-preview.png"
                alt="Truck Repair Service"
                fill
                className="object-contain p-8 md:p-12 z-20"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10" />

              {/* Floating Price Badge */}
              <div className="absolute top-4 left-4 lg:top-4 lg:left-4 bg-primary p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl animate-bounce-slow z-30">
                <div className="text-white font-black text-lg md:text-xl lg:text-2xl tracking-tighter leading-none">
                  $30/HR
                </div>
                <div className="text-white/90 text-[8px] md:text-[10px]  font-bold uppercase tracking-widest mt-1">
                  Labor Savings
                </div>
              </div>

              {/* Floating Trust Icon */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-zinc-900 p-3 md:p-4 lg:p-5 rounded-2xl shadow-2xl z-30">
                <ShieldCheck className="text-primary w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
            </div>
          </div>

          {/* Right Side: Content & Features */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-primary font-black text-xs uppercase tracking-[0.4em]">
                Fleet Program
              </span>
              <div className="w-12 h-[1px] bg-zinc-200" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6 leading-[1.1] uppercase tracking-tighter">
              Unmatched Value For <br />
              <span className="text-primary ">Fleet Partners</span>
            </h2>

            <p className="text-zinc-500 text-lg mb-10 leading-relaxed max-w-xl">
              We provide cost-effective truck and vehicle repairs that keep your
              business moving. Our specialized fleet plans are designed to
              minimize downtime and maximize reliability.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-zinc-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                    <Zap className="text-primary w-6 h-6" />
                  </div>
                  <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider">
                    Prevent Repairs
                  </h4>
                </div>
                <p className="text-zinc-400 text-xs pl-14">
                  Eliminate repeat issues with our certified diagnostic
                  technology.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-zinc-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <h4 className="text-zinc-900 font-bold text-sm uppercase tracking-wider">
                    Zero Downtime
                  </h4>
                </div>
                <p className="text-zinc-400 text-xs pl-14">
                  Prioritized scheduling for fleet members to ensure rapid
                  turnarounds.
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-4 mb-12 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
              {[
                "Direct & Clear Communication",
                "Multi-brand & Heavy Duty Expertise",
                "Customized Maintenance Intervals",
                "Exclusive #WHEELSROLL Fleet Rates",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 text-zinc-700 font-bold text-sm uppercase tracking-tight"
                >
                  <CheckCircle2 size={18} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>

            <button className="group w-fit bg-zinc-900 hover:bg-primary text-white px-10 py-5 text-xs font-black transition-all duration-500 flex items-center gap-4 tracking-[0.2em] uppercase rounded-sm shadow-xl">
              Become a Fleet Partner
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-primary {
          color: #d4af37;
        }
        .bg-primary {
          background-color: #d4af37;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default FleetSavingsSection;
