"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import CalendlyLink from "@/components/CalendlyLink";

const slides = [
  {
    url: "/bhutan.jpg",
    alt: "Tiger's Nest Monastery, Bhutan",
  },
  {
    url: "/bangkok.jpg",
    alt: "Bangkok, Thailand",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "88svh", minHeight: "560px" }}
    >
      {/* Slides, crossfade via opacity */}
      {slides.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${slide.url})`,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Top gradient for navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

      {/* Centered content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Pill badge */}
          <div className="inline-flex items-center mb-8">
            <span className="bg-white/10 backdrop-blur border border-white/20 text-white/80 text-xs tracking-widest px-4 py-1 rounded-full">
              BHUTAN · THAILAND
            </span>
          </div>

          <h1
            className="mb-6 drop-shadow-sm"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: 900, lineHeight: 1.1, color: 'white' }}
          >
            Two Buddhist Kingdoms. One Bridge for Business and Culture.
          </h1>

          <p className="text-white/90 max-w-xl mx-auto mb-10 leading-relaxed drop-shadow" style={{ fontSize: '1.125rem' }}>
            Dinners, deals, and cultural exchange between Bangkok and Thimphu. An independent member community, now in formation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/join"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white bg-[#E1A101] shadow-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            >
              Get Invited to Our Next Event
            </a>
            <CalendlyLink className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold border border-white text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
              Book an Intro Call
            </CalendlyLink>
          </div>
        </motion.div>
      </div>

      {/* Left arrow, hidden on mobile (overlaps headline, converts nobody) */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full hidden sm:flex items-center justify-center text-white transition-all duration-200 hover:scale-105 focus:outline-none"
        style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M11 13L7 9L11 5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right arrow, hidden on mobile */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full hidden sm:flex items-center justify-center text-white transition-all duration-200 hover:scale-105 focus:outline-none"
        style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)" }}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M7 5L11 9L7 13" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-0.5 rounded-full transition-all duration-500 focus:outline-none"
            style={{
              width: i === current ? "2rem" : "0.75rem",
              backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
