"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Trade Facilitation",
    description: "Streamlining cross-border commerce between Bhutan and Thailand",
  },
  {
    number: "02",
    title: "Investment Promotion",
    description: "Connecting investors with opportunities in both markets",
  },
  {
    number: "03",
    title: "Policy Advocacy",
    description: "Representing member interests to bilateral government bodies",
  },
  {
    number: "04",
    title: "Networking Events",
    description: "Hosting delegations, forums, and business-matching sessions",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-20 lg:pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5" style={{ backgroundColor: "#C9960C" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
                Who We Are
              </span>
            </div>
            <h2
              className="text-5xl font-black leading-tight mb-6"
              style={{ color: "#1B4F72" }}
            >
              About BHTCC
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-3">
              We are the primary bridge connecting businesses, investors, and governments between Bhutan and Thailand.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Everything we do is built to make bilateral trade faster, simpler, and more rewarding for our members.
            </p>
            <p className="text-sm font-semibold tracking-widest" style={{ color: "#C9960C" }}>
              Est. 2025 · Bangkok &amp; Thimphu · Bilateral Trade
            </p>
          </motion.div>

          {/* Right column — feature rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="divide-y divide-gray-100">
              {features.map((feature) => (
                <div key={feature.number} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-sm font-bold tabular-nums mt-0.5 flex-shrink-0"
                      style={{ color: "#C9960C" }}
                    >
                      {feature.number}
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold mb-1"
                        style={{ color: "#1B4F72" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-white to-[#F5F0E8]" />
    </section>
  );
}
