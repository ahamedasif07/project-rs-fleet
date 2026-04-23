"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What we offer", href: "#", hasDropdown: true },
    { name: "FAQ", href: "/faq" },
    { name: "Locations", href: "#", hasDropdown: true },
    { name: "Fleet Partner Program", href: "/fleet" },
  ];

  const iconVariants: Variants = {
    ringing: {
      rotate: [0, -20, 20, -20, 20, -20, 20, 0],
      scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="w-full h-20  bg-[#FAFAFA] overflow-hidden backdrop-blur-xl border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/IMG_3431.jpeg"
              alt="MFS Logo"
              width={150}
              height={45}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-x-10">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-sm font-semibold text-secondary/70 hover:text-primary transition-all duration-300 tracking-wide"
            >
              <span className="flex items-center">
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                )}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.div
            variants={iconVariants}
            animate="ringing"
            className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full"
          >
            <PhoneCall size={20} fill="currentColor" fillOpacity={0.2} />
          </motion.div>

          {/* Desktop Button - Tailwind Hover */}
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium text-[13px] uppercase tracking-[1.5px] shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#1b4d2e] active:scale-95">
            Request A Call
          </button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary p-2 bg-muted/50 rounded-xl"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-[55]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] bg-white z-[60] shadow-2xl p-8 lg:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <p className="font-bold text-primary tracking-widest">MENU</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-muted rounded-full text-secondary"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link: NavLink) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-secondary hover:text-primary transition-colors border-b border-gray-50 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-10 flex flex-col items-center gap-4">
                  <motion.div variants={iconVariants} animate="ringing">
                    <PhoneCall size={30} className="text-primary" />
                  </motion.div>

                  {/* Mobile Button - Tailwind Hover */}
                  <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-xl shadow-primary/20 uppercase text-xs transition-all duration-300 hover:bg-[#1b4d2e] active:scale-95">
                    Request A Call
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
