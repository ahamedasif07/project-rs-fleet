/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// --- Custom Social SVGs (Fix for Lucide missing icons) ---
const SocialIcons = {
  Facebook: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  Instagram: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Linkedin: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    "Mobile Service",
    "24/7 Emergency",
    "Hydraulic Repair",
    "Equipment Service",
  ];

  const socialLinks = [
    { Icon: SocialIcons.Facebook, href: "#" },
    { Icon: SocialIcons.Twitter, href: "#" },
    { Icon: SocialIcons.Instagram, href: "#" },
    { Icon: SocialIcons.Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
              FLEET<span className="text-primary">SERVICES</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Providing professional hydraulic and mobile fleet services across
              California and Nevada. 24/7 emergency support at your fingertips.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-md bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-slate-500 hover:text-primary text-sm font-bold flex items-center gap-2 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-primary transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-8">
              Our Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-slate-500 hover:text-primary text-sm font-bold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dispatch Action Box */}
          <div className="space-y-6">
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-6">
              Dispatch Center
            </h4>
            <div className="bg-primary p-6 rounded-md text-white group relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-900 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">
                  Emergency Line
                </p>
                <h3 className="text-xl font-black mb-4">+1 877-349-8789</h3>
                <Link
                  href="tel:+18773498789"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase bg-white text-primary px-4 py-2 rounded-sm group-hover:text-white group-hover:bg-primary/20 transition-all border border-transparent group-hover:border-white/30"
                >
                  Call Now <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} Fleet Services. Built with{" "}
            <span className="text-primary">Passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
