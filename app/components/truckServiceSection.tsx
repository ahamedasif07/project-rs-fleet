"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Interface for Image Data
interface ServiceImage {
  url: string;
  alt: string;
}

const TruckServiceSection: React.FC = () => {
  const serviceImages: ServiceImage[] = [
    {
      url: "https://i.ibb.co.com/fYLZnvbC/pexels-baljinder-singh-112079620-34106714.jpg",
      alt: "Mechanic working on heavy duty engine",
    },
    {
      url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",

      alt: "Fleet service truck onsite",
    },
    {
      url: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1920&q=80",

      alt: "Diesel technician performing diagnostics",
    },
    {
      url: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1920&q=80",
      alt: "Mobile repair unit working on truck",
    },
  ];

  // Properly Typed Container Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Properly Typed Item Variants with Scale and Rotate
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      rotate: -3,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Side */}
          <div className="lg:col-span-5 z-10 order-2 lg:order-1">
            <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-sm rounded-xl relative group overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-1000" />

              <div className="mb-6 relative inline-flex items-center justify-center w-14 h-14 bg-primary rounded-lg shadow-lg shadow-blue-100">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                Cutoff downtime by getting
                <span className="text-primary uppercase"> OEM</span> repairs
                performed onsite
              </h2>

              <p className="text-slate-600 leading-relaxed text-base mb-6">
                Our certified technicians bring dealer-level expertise directly
                to your fleet, minimizing transportation costs and maximizing
                your operational uptime.
              </p>

              <button className="relative z-30 group bg-primary hover:bg-zinc-900 text-white px-8 py-4 text-[10px] font-black transition-all duration-500 flex items-center justify-center gap-3 tracking-[0.2em] uppercase shadow-2xl rounded-md overflow-hidden">
                {/* Hover background slide effect (Optional but looks premium) */}
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10"></span>
                Schedule Service
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-500"
                />
              </button>
            </div>
          </div>

          {/* Right Gallery Side with Staggered Variants */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {serviceImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 bg-slate-100"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover  group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TruckServiceSection;
