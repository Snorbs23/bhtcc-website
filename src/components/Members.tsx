"use client";

import { motion } from "framer-motion";

const placeholderMembers = [
  { name: "Member Organization 1" },
  { name: "Member Organization 2" },
  { name: "Member Organization 3" },
  { name: "Member Organization 4" },
  { name: "Member Organization 5" },
];

export default function Members() {
  return (
    <section id="members" className="py-20 lg:py-28" style={{ backgroundColor: "#F8F6F1" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
              Network
            </span>
            <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: "#1B4F72" }}>
            Our Members
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A growing network of businesses and institutions across Bhutan and Thailand.
          </p>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {placeholderMembers.map((member, i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
              style={{ backgroundColor: "#EDEDEC", border: "1px solid #E2E2DF" }}
            >
              {/* Generic building/org icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
                style={{ color: "#C5C5C1" }}
              >
                <rect x="4" y="12" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 25V19H18V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 12L14 4L24 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium text-center px-2 leading-tight" style={{ color: "#A0A09C" }}>
                {member.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="/membership"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-70"
            style={{ color: "#1B4F72" }}
          >
            Become a member
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
