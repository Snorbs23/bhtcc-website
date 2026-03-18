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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid rgba(0,0,0,0.06)",
        boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
            <Image src="/logo.png" alt="BHTCC" width={150} height={60} className="object-contain" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide transition-colors duration-200 hover:opacity-70"
                style={{ color: "#1B4F72" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/membership"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#1B4F72",
                boxShadow: "0 2px 12px rgba(27,79,114,0.28)",
              }}
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
                className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                style={{ backgroundColor: "#1B4F72" }}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                style={{ backgroundColor: "#1B4F72" }}
              />
              <span
                className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                style={{ backgroundColor: "#1B4F72" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="px-4 pb-5 pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2 transition-opacity duration-200 hover:opacity-60"
              style={{ color: "#1B4F72" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/membership"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white mt-1 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#1B4F72",
              boxShadow: "0 2px 12px rgba(27,79,114,0.28)",
            }}
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
