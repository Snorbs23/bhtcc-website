"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Text */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-full.png" alt="BHTCC" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 font-medium text-lg tracking-wide transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/membership"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-base font-semibold text-white border border-white/70 tracking-wide transition-all duration-200 hover:bg-white hover:text-[#1B4F72]"
            >
              Join Now
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px transition-all duration-300 bg-white ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px transition-all duration-300 bg-white ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px transition-all duration-300 bg-white ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
      >
        <div className="px-4 pb-5 pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2 text-white/90 tracking-wide transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/membership"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white border border-white/70 mt-1 tracking-wide transition-all duration-200 hover:bg-white hover:text-[#1B4F72]"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
