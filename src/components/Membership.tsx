"use client";

import { motion } from "framer-motion";

const individualBenefits = [
  "Access to member directory",
  "Invitations to networking events",
  "Trade facilitation support",
  "Chamber newsletter & updates",
];

const corporateBenefits = [
  "All Individual benefits",
  "Priority business matchmaking",
  "Delegation participation rights",
  "Logo placement on chamber website",
];

export default function Membership() {
  return (
    <section id="membership" className="py-20 lg:py-28" style={{ backgroundColor: "#EAF2F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#C9960C" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
              Membership Plans
            </span>
            <span className="w-6 h-0.5" style={{ backgroundColor: "#C9960C" }} />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: "#1B4F72" }}
          >
            Join the Chamber
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Choose the membership tier that best suits your organization and unlock the full power of bilateral trade and investment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Card 1 — Individual */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1" style={{ color: "#1B4F72" }}>
                Individual / Sole Proprietor
              </h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="text-4xl font-extrabold" style={{ color: "#1B4F72" }}>
                  THB 3,000
                </span>
                <span className="text-gray-400 text-sm font-medium">/year</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {individualBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#EAF2F8" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#1B4F72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:bg-[#1B4F72] hover:text-white"
              style={{ color: "#1B4F72", borderColor: "#1B4F72" }}
            >
              Apply Now
            </a>
          </div>

          {/* Card 2 — Corporate */}
          <div
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
            style={{ borderTop: "4px solid #C9960C" }}
          >
            <div
              className="absolute top-4 right-6 text-xs font-bold px-3 py-1 rounded-full"
              style={{ backgroundColor: "#FEF9EC", color: "#C9960C" }}
            >
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-1" style={{ color: "#1B4F72" }}>
                Corporate / Govt / NGO
              </h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="text-4xl font-extrabold" style={{ color: "#1B4F72" }}>
                  THB 5,000
                </span>
                <span className="text-gray-400 text-sm font-medium">/year</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {corporateBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FEF9EC" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#C9960C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block text-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "#1B4F72" }}
            >
              Apply Now
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: "#1B4F72" }}
          >
            Apply for Membership
          </a>
          <p className="mt-4 text-xs text-gray-400">
            All membership applications are subject to Board approval.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
