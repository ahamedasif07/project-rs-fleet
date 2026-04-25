"use client";
import React from "react";
import {
  Shield,
  Zap,
  Clock,
  Settings,
  CreditCard,
  Sparkles,
} from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Unyielding Trust",
    desc: "Setting the gold standard in reliability with a track record that speaks for itself.",
    icon: Shield,
  },
  {
    title: "Peak Satisfaction",
    desc: "We don't just meet expectations; we redefine them through precision and care.",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    desc: "Elite 24/7 technical oversight ensuring your operations never miss a single beat.",
    icon: Clock,
  },
  {
    title: "Expert Engineering",
    desc: "Bespoke mechanical solutions handled by master-certified industry veterans.",
    icon: Settings,
  },
  {
    title: "Radical Transparency",
    desc: "No-nonsense, upfront financial modeling designed for high-stakes partnerships.",
    icon: CreditCard,
  },
  {
    title: "Tailored Precision",
    desc: "Every solution is architected specifically to your unique infrastructure needs.",
    icon: Sparkles,
  },
];

export default function PremiumFeatures() {
  return (
    <section className="relative bg-[#fafafa] py-24 px-4 overflow-hidden">
      {/* Subtle Background Pattern or Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-primary font-black text-[11px] md:text-xs uppercase tracking-[0.4em] pb-2">
            The Advantage
          </h2>
          <h1 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            What Makes Us
            <span className="bg-clip-text text-primary"> Different</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-[1px] rounded-2xl bg-slate-200 hover:bg-gradient-to-b hover:from-primary/40 hover:to-transparent transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card Body */}
              <div className="relative h-full bg-white rounded-[15px] p-8 overflow-hidden transition-colors duration-500 group-hover:bg-slate-50/50">
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-out shadow-inner">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-base mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Bottom Line Effect */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
