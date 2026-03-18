"use client";

import { motion } from "framer-motion";

const newsItems = [
  {
    category: "Trade",
    date: "March 15, 2025",
    headline: "BHTCC Facilitates First Direct Trade Mission Between Thimphu and Bangkok",
    excerpt:
      "A delegation of 12 Bhutanese entrepreneurs visited Bangkok for a week-long trade facilitation programme organised by the chamber.",
    href: "/news",
  },
  {
    category: "Membership",
    date: "February 28, 2025",
    headline: "New Corporate Members Join BHTCC in 2025",
    excerpt:
      "The chamber welcomes several new corporate and government members as bilateral relations between Bhutan and Thailand continue to strengthen.",
    href: "/news",
  },
  {
    category: "Events",
    date: "January 20, 2025",
    headline: "Annual Business Forum Announced for Q2 2025",
    excerpt:
      "BHTCC announces its flagship annual business forum, bringing together stakeholders from both nations to explore investment and trade opportunities.",
    href: "/news",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 lg:py-28" style={{ backgroundColor: "#F8F6F1" }}>
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
            <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
              Latest News
            </span>
            <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: "#1B4F72" }}>
              News &amp; Updates
            </h2>
            <a
              href="/news"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:opacity-70"
              style={{ color: "#1B4F72" }}
            >
              View All News
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#EAF2F8", color: "#1B4F72" }}
                >
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>

              <h3
                className="text-base font-bold leading-snug mb-3 group-hover:opacity-75 transition-opacity duration-200"
                style={{ color: "#1B4F72" }}
              >
                {item.headline}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {item.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#C9960C" }}>
                Read More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile "View All" button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center sm:hidden"
        >
          <a
            href="/news"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: "#1B4F72" }}
          >
            View All News
          </a>
        </motion.div>
      </div>
    </section>
  );
}
