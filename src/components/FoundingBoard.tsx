"use client";

import { motion } from "framer-motion";

// Statement-only section. The full member grid lives in FoundingMembers.tsx,
// kept unmounted until real names can be published.
export default function FoundingBoard() {
  return (
    <section id="founding-members" className="pt-20 lg:pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
              The Founding Circle
            </span>
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ color: "#4D7084" }}>
            Founding Board
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Governed by a founding board of five: three Bhutanese and two Thai business leaders.
            Names announced upon incorporation.
          </p>
        </motion.div>
      </div>
      <div className="h-24 bg-gradient-to-b from-white to-[#EEDFC0]" />
    </section>
  );
}
