"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Curated Network",
    description:
      "Belong to a hand-picked community of founders, operators, and artists across Bhutan and Thailand.",
  },
  {
    number: "02",
    title: "Market Access",
    description:
      "Enter Thailand's dynamic ASEAN hub or Bhutan's emerging market with guidance from members who know both.",
  },
  {
    number: "03",
    title: "Cultural Programs",
    description:
      "Access to performances, ceremonies, and shared cultural experiences across two Buddhist kingdoms.",
  },
  {
    number: "04",
    title: "Investment Opportunities",
    description:
      "Discover opportunities in both economies, surfaced by members doing business there.",
  },
  {
    number: "05",
    title: "Member Gatherings",
    description:
      "Intimate dinners, forums, and delegations in Bangkok and Thimphu, by invitation.",
  },
  {
    number: "06",
    title: "Founding Circle",
    description:
      "Join early and help shape the community before membership formally opens.",
  },
];

export default function WhyJoin() {
  return (
    <section className="pt-20 lg:pt-28" style={{ backgroundColor: "#EEDFC0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
              A Curated Community
            </span>
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#4D7084" }}
          >
            Why Join BHTCC
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            A curated cross-border community of founders, operators, and artists from two Buddhist kingdoms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="pt-6 border-t-2"
              style={{ borderColor: "#E1A101" }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: "#E1A101" }}>
                {reason.number}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#4D7084" }}>
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-[#EEDFC0] to-white" />
    </section>
  );
}
