/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Operations Manager",
    company: "Nexus Logistics",
    content:
      "The level of precision and technical expertise provided is truly world-class. Our fleet efficiency has increased by 40% since partnering with them.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Logistics Director",
    company: "Global Send",
    content:
      "Finally, a service that understands the importance of uptime. Their 24/7 support team is responsive, professional, and highly skilled.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Fleet Owner",
    company: "Chen Carriers",
    content:
      "Professionalism at its peak. The transparent pricing and detailed reporting make them a strategic asset to our business growth.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Miller",
    role: "Supply Chain Head",
    company: "Miller Co.",
    content:
      "Bespoke solutions that actually work. They took the time to understand our specific needs and delivered beyond our expectations.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#FAFAF9] py-24 px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] bg-primary/5 px-4 py-2 rounded-md">
            Success Stories
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Industry <span className="text-primary">Leaders</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We measure our success through the growth and efficiency of the
            partners we serve.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="!pb-16 !px-2"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              {/* Added min-h-[380px] to ensure all cards have same minimum height */}
              <div className="group h-full min-h-[180px] flex flex-col bg-white border border-slate-100 rounded-md p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.1)] hover:-translate-y-2 relative">
                {/* Decorative Quote Icon */}
                <Quote
                  className="absolute top-8 right-8 text-slate-50 group-hover:text-primary/10 transition-colors duration-500"
                  size={56}
                  strokeWidth={1.5}
                />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Review Text - flex-grow ensures it takes up available space */}
                  <div className="flex-grow">
                    <p className="text-slate-600 leading-relaxed text-base italic">
                      "{item.content}"
                    </p>
                  </div>

                  {/* Footer Section - Always at the bottom */}
                  <div className="mt-8">
                    <div className="w-10 h-1 bg-primary mb-6 group-hover:w-16 transition-all duration-500 rounded-full"></div>

                    {/* User Profile */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary transition-colors duration-300">
                        {item.name.charAt(0)}
                      </div>

                      {/* Name & Role Wrapper */}
                      <div className="flex flex-col justify-center">
                        <h4 className="font-extrabold text-slate-900 text-[17px] leading-tight mb-1">
                          {item.name}
                        </h4>
                        <p className="text-slate-500 text-xs font-semibold tracking-wide">
                          {item.role}{" "}
                          <span className="text-primary/40 mx-1">•</span>
                          <span className="text-primary uppercase">
                            {item.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d4af37;
          background: var(--primary-color, #d4af37);
          opacity: 0.2;
          height: 6px;
          width: 6px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px !important;
          border-radius: 4px !important;
        }
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
