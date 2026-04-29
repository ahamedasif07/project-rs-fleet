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
    {
      url: "https://i.ibb.co.com/F4J3qZXH/1-A119-B8-A-AF9-E-4473-9-D7-F-866-E18942-C57-1.png",
      pos: "bottom center",
    },
    {
      url: "https://i.ibb.co.com/SYdHBn8/CCD2-DA6-B-3-DF0-4-F66-B97-F-35-A4-EAFE80-C7-1.png",
      pos: "bottom center",
    },
    {
      url: "https://i.ibb.co.com/Kxqq2B2L/DCAF35-F9-EF53-48-DE-9-CB3-E72-C807-E0-EFF-1.png",
      pos: "center right",
    },
    {
      url: "https://i.ibb.co.com/XxPFpgcN/E3-F6-BE0-C-D6-A4-403-B-AE72-86-BDA5-AE2-B38-1.png",
      pos: "bottom center",
    },
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
                className="w-full h-full bg-cover animate-subtle-zoom"
                style={{
                  backgroundImage: `url(${img.url})`,
                  backgroundPosition: img.pos,
                }}
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
            Rapid Solutions delivers professional roadside assistance and fleet
            maintenance, helping you minimize downtime with certified heavy-duty
            support.
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
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 10s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
