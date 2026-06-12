"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Networking Events",
    description: "Curated dinners, forums, and gatherings in Bangkok and Thimphu, the heart of what we do",
  },
  {
    number: "02",
    title: "Trade Facilitation",
    description: "Helping members move goods, services, and ideas between Bhutan and Thailand",
  },
  {
    number: "03",
    title: "Cultural and Artistic Exchange",
    description: "Supporting cross-cultural artistic performance, ceremonies, and shared experiences between two Buddhist kingdoms",
  },
  {
    number: "04",
    title: "Investment Access",
    description: "Connecting members with curated opportunities in both markets",
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
              <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
                Who We Are
              </span>
            </div>
            <h2
              className="text-5xl font-black leading-tight mb-6"
              style={{ color: "#4D7084" }}
            >
              About BHTCC
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-3">
              We are a bridge connecting founders, operators, investors, and artists between Bhutan and Thailand.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-3">
              Everything we do is built to make the corridor between our two kingdoms more connected and more rewarding for our community.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              BHTCC is an independent, private member association currently in formation. We are not a government body.
            </p>
            <p className="text-sm font-semibold tracking-widest" style={{ color: "#E1A101" }}>
              In formation · Bangkok &amp; Thimphu
            </p>
          </motion.div>

          {/* Right column, feature rows */}
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
                      style={{ color: "#E1A101" }}
                    >
                      {feature.number}
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold mb-1"
                        style={{ color: "#4D7084" }}
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
      <div className="h-24 bg-gradient-to-b from-white to-[#EEDFC0]" />
    </section>
  );
}
