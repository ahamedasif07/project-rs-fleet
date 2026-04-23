"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Types ---
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

  // Vibration Variant for the Call Button
  const vibrateVariants = {
    vibrate: {
      x: [0, -2, 2, -2, 2, 0],
      transition: {
        delay: 4, // 4 seconds delay
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 4, // Repeat every 4 seconds
      },
    },
  };

  return (
    <nav className="w-full overflow-hidden h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
        {/* Logo Section - Image Based */}
        <div className="">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/IMG_3431.jpeg"
              alt="MFS Logo"
              width={160}
              height={50}
              className="object-contain overflow-hidden"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-x-10">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-[15px] font-bold text-secondary/80 hover:text-primary transition-all duration-300"
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

        {/* Action Button: Vibration Mode */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            variants={vibrateVariants}
            animate="vibrate"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider shadow-lg shadow-primary/30 hover:bg-accent transition-colors"
          >
            <PhoneCall size={18} className="animate-pulse" />
            Request A Call
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary p-2 bg-muted rounded-lg"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-[60] shadow-2xl p-8 lg:hidden"
            >
              <div className="flex justify-end mb-8">
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
                    className="text-xl font-bold text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-8">
                  <button className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/20">
                    <PhoneCall size={20} /> Request A Call
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
