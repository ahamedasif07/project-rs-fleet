"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What we offer", href: "#", hasDropdown: true },
    { name: "FAQ", href: "/faq" },
    { name: "Locations", href: "#", hasDropdown: true },
    { name: "Fleet Partner Program", href: "/fleet" },
  ];

  return (
    <>
      {/* Background & Border (Full Width) */}
      <nav className="w-full  bg-[#FAFAFA] backdrop-blur-md  fixed top-0 z-50">
        {/* Content Container (Limited to 7xl & Centered) */}
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/assets/images/IMG_3431.jpeg"
              alt="logo"
              width={130}
              height={60}
              className="w-[110px] sm:w-[150px]"
            />
          </Link>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
                {/* Desktop Underline Hover Effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Call Button */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="animate-ring w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-md">
                <PhoneCall size={18} />
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300">
                Request A Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} className="text-gray-800" />
            </button>
          </div>
        </div>

        {/* --- Mobile Drawer Section --- */}
        <div
          className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          {/* Blur Overlay */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div
            className={`absolute top-0 right-0 h-screen w-[85%] max-w-[350px] bg-primary shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col`}
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <p className="text-white  tracking-widest font-bold">MENU</p>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-md transition-colors"
              >
                <X size={24} color="white" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-6 space-y-2">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className={`transition-all duration-500 transform ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div
                    className="flex justify-between items-center text-white py-4 border-b border-white/5 cursor-pointer"
                    onClick={() => {
                      if (link.hasDropdown) {
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name,
                        );
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-md font-medium tracking-wide grow"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Dropdown Mobile Content */}
                  <div
                    className={`pl-4 flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === link.name
                        ? "max-h-40 mt-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors py-1 border-l border-white/20 pl-4"
                    >
                      Sub Item 1
                    </Link>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors py-1 border-l border-white/20 pl-4"
                    >
                      Sub Item 2
                    </Link>
                  </div>
                </div>
              ))}

              {/* Drawer Bottom Actions */}
              <div
                className={`pt-8 transition-all duration-700 delay-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <button className="w-full bg-white text-primary font-bold py-4 rounded-md shadow-xl active:scale-95 transition-all">
                  Request A Call
                </button>
                <div className="flex items-center justify-center gap-3 text-white/80 mt-6 font-medium">
                  <PhoneCall size={18} />
                  <span className="text-sm tracking-wide">
                    24/7 Premium Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyframe Animations */}
        <style jsx>{`
          @keyframes ring {
            0%,
            100% {
              transform: rotate(0);
            }
            15% {
              transform: rotate(-15deg);
            }
            30% {
              transform: rotate(15deg);
            }
            45% {
              transform: rotate(-15deg);
            }
            60% {
              transform: rotate(15deg);
            }
            75% {
              transform: rotate(0);
            }
          }
          .animate-ring {
            animation: ring 2s infinite;
          }
        `}</style>
      </nav>

      {/* Spacer to prevent content from going under the fixed navbar */}
      <div className="h-20 w-full"></div>
    </>
  );
};

export default Navbar;
