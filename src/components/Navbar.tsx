"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-[#e5e7eb] py-4 ${
        scrolled ? "backdrop-blur-sm shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Text */}
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="BHTCC" width={52} height={52} className="object-contain" />
            <span className="font-bold text-[#1B4F72] text-lg tracking-widest">BHTCC</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1B4F72] font-medium text-sm tracking-wide transition-colors duration-200 hover:text-[#C9960C]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/membership"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1B4F72] shadow-md transition-colors duration-200 hover:bg-[#C9960C] tracking-wide"
            >
              Join Now
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-px transition-all duration-300 bg-[#1B4F72] ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 bg-[#1B4F72] ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 bg-[#1B4F72] ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#e5e7eb] ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2 text-[#1B4F72] tracking-wide transition-colors duration-200 hover:text-[#C9960C]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/membership"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1B4F72] shadow-md mt-1 transition-colors duration-200 hover:bg-[#C9960C] tracking-wide"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
