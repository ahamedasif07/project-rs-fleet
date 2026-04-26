import React from "react";
import {
  ShieldCheck,
  Zap,
  Wrench,
  ClipboardCheck,
  BarChart,
  Truck,
  Clock,
  ArrowRight,
} from "lucide-react";

const RSFleetsPartner = () => {
  const coreFeatures = [
    {
      title: "Priority Fleet Response",
      desc: "Instant bay access and rapid scheduling to ensure your trucks never miss a deadline.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "RS Maintenance Intelligence",
      desc: "A data-driven approach to tracking every repair, inspection, and service milestone.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Emergency Roadside Shield",
      desc: "Drastically reduced fees for 24/7 mobile repairs and on-site emergency assistance.",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Precision Fleet Audits",
      desc: "Regular business reviews and cost-analysis to optimize your long-term ROI.",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-[#FAFAF9] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column: Strategic Content */}
          <div className="lg:w-3/5">
            <div className="inline-flex items-center space-x-2  px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                RS Fleets Exclusive
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Empower Your Fleet with{" "}
              <span className="text-primary">Rapid Solutions</span>
            </h2>

            <p className="mt-4  text-slate-600 leading-relaxed max-w-2xl">
              Efficiency is the backbone of logistics. At{" "}
              <span className="font-bold text-slate-900 ">RS Fleets</span>, we
              don&apos;t just fix trucks; we manage uptime. Our Partner Program
              is a strategic alliance designed to cut operational fat and
              accelerate performance.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-8">
              {coreFeatures.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-lg group-hover:bg-primary transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-3 bg-primary hover:bg-black text-white px-6 py-3  rounded-md font-bold text-lg transition-all transform hover:translate-x-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column: Pricing Card */}
          <div className="lg:w-2/5 w-full relative">
            <div className="absolute top-0 -right-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="border border-primary rounded-md p-1 shadow-2xl overflow-hidden transform hover:-rotate-1 transition-transform">
              <div className="bg-white rounded-[2.3rem] p-8 md:p-10  border-slate-100">
                <div className="text-center mb-8">
                  <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-2">
                    Fleet Partner Program
                  </p>
                  <h3 className="text-3xl font-black text-slate-900">
                    Elite Savings Tier
                  </h3>
                </div>

                {/* Savings Badge */}
                <div className="bg-slate-50 border- bordder-primary border-dashed border-slate-200 rounded-3xl p-8 mb-8 text-center relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="text-slate-500 font-medium block mb-1 uppercase text-xs tracking-widest">
                      Guaranteed Discount
                    </span>
                    <div className="flex justify-center items-baseline gap-1">
                      <span className="text-5xl font-black text-slate-900 tracking-tighter">
                        $35
                      </span>
                      <span className="text-xl font-bold text-slate-400">
                        /hr
                      </span>
                    </div>
                    <p className="text-primary font-extrabold mt-2 text-lg">
                      Labor Rate Savings
                    </p>
                  </div>
                  {/* Decorative background number */}
                  <span className="absolute -bottom-4 -right-4 text-9xl font-black text-slate-100/50 select-none">
                    35
                  </span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Next Available Bay Priority",
                    "Custom Fleet Maintenance Portal",
                    "Dedicated Virtual Assistant",
                    "Deferred Repair Lifecycle Tracking",
                    "Unit-Specific History Storage",
                    "Planned Maintenance (PM) Audits",
                  ].map((list, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 rounded-full p-0.5">
                        <ClipboardCheck className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-[15px]">
                        {list}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider underline decoration-primary decoration-2 underline-offset-4">
                        Rapid Solutions
                      </p>
                      <p className="text-slate-900 font-black text-xl italic tracking-tighter">
                        RS FLEETS
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                      <Wrench className="text-slate-400 w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSFleetsPartner;
