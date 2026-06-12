"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Membership", href: "/membership" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent-over-hero treatment only applies on the homepage, which has a
  // dark hero image. Every other page gets a solid light bar so the navbar
  // stays readable.
  const overDarkHero = pathname === "/" && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300"
      style={
        overDarkHero
          ? {}
          : { background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo, always full color; light scrim keeps it legible over the dark hero */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-all duration-300"
            style={
              overDarkHero
                ? {
                    background: "rgba(255,255,255,0.82)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    borderRadius: "1rem",
                    padding: "0.25rem 0.75rem",
                  }
                : { padding: "0.25rem 0" }
            }
          >
            <img
              src="/BHTCClong.png"
              alt="BHTCC"
              className="hidden md:block"
              style={{ height: '62px', width: 'auto', objectFit: 'contain' }}
            />
            <img
              src="/BHTCC.png"
              alt="BHTCC"
              className="block md:hidden"
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-base tracking-wide transition-colors duration-200"
                style={{ color: overDarkHero ? 'rgba(255,255,255,0.9)' : '#4D7084' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/join"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full text-base font-semibold tracking-wide transition-all duration-200"
              style={
                overDarkHero
                  ? { color: 'white', border: '1.5px solid rgba(255,255,255,0.7)' }
                  : { color: '#4D7084', border: '1.5px solid #4D7084' }
              }
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = overDarkHero ? 'rgba(255,255,255,0.15)' : '#4D7084';
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = overDarkHero ? 'white' : '#4D7084';
              }}
            >
              Join Our List
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px transition-all duration-300 ${overDarkHero ? 'bg-white' : 'bg-[#4D7084]'} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${overDarkHero ? 'bg-white' : 'bg-[#4D7084]'} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${overDarkHero ? 'bg-white' : 'bg-[#4D7084]'} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", borderBottom: menuOpen ? "1px solid rgba(0,0,0,0.06)" : "none" }}
      >
        <div className="px-4 pb-5 pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2 tracking-wide transition-colors duration-200"
              style={{ color: '#4D7084' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/join"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold mt-1 tracking-wide transition-all duration-200 hover:bg-[#4D7084] hover:text-white"
            style={{ color: '#4D7084', border: '1.5px solid #4D7084' }}
          >
            Join Our List
          </a>
        </div>
      </div>
    </nav>
  );
}
