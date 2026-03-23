"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Market Access",
    description:
      "Enter Thailand's dynamic ASEAN hub from Bhutan with expert guidance and on-the-ground support.",
  },
  {
    number: "02",
    title: "Investment Opportunities",
    description:
      "Discover vetted investment prospects in both economies, curated by our expert network.",
  },
  {
    number: "03",
    title: "Government Relations",
    description:
      "Benefit from our direct channels to bilateral ministries and trade policy bodies.",
  },
  {
    number: "04",
    title: "Trade Support",
    description:
      "Navigate customs, regulations, and logistics with ease through our dedicated trade desk.",
  },
  {
    number: "05",
    title: "Elite Network",
    description:
      "Connect with senior executives and decision-makers across Bhutan and Thailand.",
  },
  {
    number: "06",
    title: "Thought Leadership",
    description:
      "Shape the future of Bhutan-Thailand commerce through forums, publications, and policy input.",
  },
];

export default function WhyJoin() {
  return (
    <section className="pt-20 lg:pt-28" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#C9960C" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
              Membership Benefits
            </span>
            <span className="w-6 h-0.5" style={{ backgroundColor: "#C9960C" }} />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#1B4F72" }}
          >
            Why Join BHTCC
          </h2>
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
              style={{ borderColor: "#C9960C" }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: "#C9960C" }}>
                {reason.number}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#1B4F72" }}>
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-[#F5F0E8] to-white" />
    </section>
  );
}
