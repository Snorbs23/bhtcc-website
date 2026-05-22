"use client";

import { motion } from "framer-motion";

export default function News() {
  return (
    <section id="news" className="pt-20 lg:pt-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px" style={{ backgroundColor: "#E1A101" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
              Latest News
            </span>
            <span className="w-6 h-px" style={{ backgroundColor: "#E1A101" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: "#4D7084" }}>
            News &amp; Updates
          </h2>
        </motion.div>

        {/* Empty state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
          style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(77,112,132,0.12)",
            borderRadius: "1.5rem",
          }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: "#EEDFC0" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h10M4 17h7" stroke="#4D7084" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: "#4D7084" }}>
            Coming Soon
          </h3>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            News and updates from the chamber will appear here. Check back soon.
          </p>
        </motion.div>
      </div>
      <div className="h-24 bg-gradient-to-b from-white to-[#EEDFC0]" />
    </section>
  );
}
