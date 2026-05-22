"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Membership", href: "/membership" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/BHTCClong.png"
              alt="BHTCC"
              className="hidden md:block"
              style={{
                height: '70px',
                width: 'auto',
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                opacity: scrolled ? 1 : 0.9,
                transition: 'filter 0.3s, opacity 0.3s',
              }}
            />
            <img
              src="/BHTCC.png"
              alt="BHTCC"
              className="block md:hidden"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                opacity: scrolled ? 1 : 0.9,
                transition: 'filter 0.3s, opacity 0.3s',
              }}
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-lg tracking-wide transition-colors duration-200"
                style={{ color: scrolled ? '#4D7084' : 'rgba(255,255,255,0.9)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/membership"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-base font-semibold tracking-wide transition-all duration-200"
              style={
                scrolled
                  ? { color: '#4D7084', border: '1.5px solid #4D7084' }
                  : { color: 'white', border: '1.5px solid rgba(255,255,255,0.7)' }
              }
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = scrolled ? '#4D7084' : 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLElement).style.color = scrolled ? 'white' : 'white';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = scrolled ? '#4D7084' : 'white';
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
              <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#4D7084]' : 'bg-white'} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#4D7084]' : 'bg-white'} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#4D7084]' : 'bg-white'} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white border border-white/70 mt-1 tracking-wide transition-all duration-200 hover:bg-white hover:text-[#4D7084]"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
