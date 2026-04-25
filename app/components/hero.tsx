"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Phone, ArrowRight } from "lucide-react";

// --- Swiper CSS ---
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const images = [
    // 1. Semi Truck on Road (Working)
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=80",

    // 2. Heavy Duty Trailer/Truck (Working)
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",

    // 3. UPDATED & WORKING: High-Quality Blue Semi-Truck on Highway

    // 4. Truck Engine/Technical Detail (Working)
    "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1920&q=80",

    // 5. Large Truck on the Highway at Sunset (Working)
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1920&q=80",
  ];
  return (
    <section className="w-full bg-black overflow-hidden relative h-[500px] sm:h-[650px] lg:h-[850px]">
      {/* 1. Background Slider (Only Images Change) */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={2000} // Smooth fade transition
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center scale-110 animate-subtle-zoom"
                style={{ backgroundImage: `url(${img})` }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Static Content (Stays fixed while images slide) */}
      <div className="relative z-10 h-full w-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-6 flex flex-col items-center">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-black text-[11px] md:text-xs uppercase tracking-[0.4em]">
              Rapid Solutions
            </span>
            <div className="w-8 h-[1px] bg-white/30" />
            <span className="text-primary font-black text-[11px] md:text-xs uppercase tracking-[0.4em]">
              24/7 Service
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[1.1]">
            Truck & Trailer <br />
            <span className="text-primary">Repair Experts</span>
          </h1>

          {/* Short Description */}
          <p className="text-slate-100 leading-relaxed text-base mb-6">
            Professional roadside assistance and fleet maintenance. We minimize
            your downtime with rapid, certified heavy-duty solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary rounded-md hover:bg-white text-white hover:text-black px-8 py-4 text-xs font-black transition-all duration-500 flex items-center justify-center gap-3 tracking-widest uppercase shadow-2xl">
              <Phone size={16} className="animate-pulse" />
              Emergency Call
            </button>
            <button className="bg-transparent rounded-md border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-xs font-black transition-all duration-500 flex items-center justify-center gap-3 tracking-widest uppercase backdrop-blur-md">
              View Services
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.2);
          }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 15s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
