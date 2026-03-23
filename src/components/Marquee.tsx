"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Trade Facilitation",
    "Investment Access",
    "Bilateral Networking",
    "Market Entry",
    "Business Delegations",
  ];

  // Repeat 3x for seamless infinite loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden py-4 bg-white"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-3 mx-6 text-sm font-semibold tracking-wide uppercase"
            style={{ color: "#1B4F72" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#C9960C" }}
            />
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
