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
    <section className=" py-24 px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]  px-4 py-2 rounded-mdl">
            Success Stories
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Industry <span className="text-primary">Leaders</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            We measure our success through the growth and efficiency of the
            partners we serve.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="!pb-10 !px-4"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="group h-full flex flex-col bg-white border border-slate-100 rounded-md p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,38,38,0.08)] hover:-translate-y-2 relative">
                {/* Decorative Quote Icon */}
                <Quote
                  className="absolute top-8 right-8 text-slate-100 group-hover:text-primary transition-colors duration-500"
                  size={48}
                  strokeWidth={1.5}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-lg leading-relaxed mb-10 flex-grow font-medium italic">
                    {item.content}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-primary mb-6 group-hover:w-20 transition-all duration-500 rounded-mdl"></div>

                  {/* User Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-mdl flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary transition-colors">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg leading-none mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">
                        {item.role} •
                        <span className="text-primary">{item.company}</span>
                      </p>
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
          opacity: 0.5;
          height: 8px;
          width: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #d4af37 !important;
          width: 40px !important;
          border-radius: 10px !important;
          opacity: 1;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
