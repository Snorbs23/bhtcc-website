"use client";

import { motion } from "framer-motion";

// Fill in real people here. photo: path under /public, or null for a placeholder.
const FOUNDING_MEMBERS: { name: string; role: string; organization: string; photo: string | null }[] = [
  { name: "Name TBA", role: "Chairperson", organization: "Organization TBA", photo: null },
  { name: "Name TBA", role: "Vice Chairperson", organization: "Organization TBA", photo: null },
  { name: "Name TBA", role: "Founding Member", organization: "Organization TBA", photo: null },
  { name: "Name TBA", role: "Founding Member", organization: "Organization TBA", photo: null },
  { name: "Name TBA", role: "Founding Member", organization: "Organization TBA", photo: null },
];

export default function FoundingMembers() {
  return (
    <section id="founding-members" className="pt-20 lg:pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
              The Founding Circle
            </span>
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: "#4D7084" }}>
            Founding Members &amp; Board
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {FOUNDING_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="text-center"
            >
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
              ) : (
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#EEDFC0" }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="#4D7084" strokeWidth="1.5" />
                    <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#4D7084" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              )}
              <h3 className="text-sm font-bold" style={{ color: "#4D7084" }}>
                {member.name}
              </h3>
              <p className="text-xs font-semibold mt-0.5" style={{ color: "#E1A101" }}>
                {member.role}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{member.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-white to-[#EEDFC0]" />
    </section>
  );
}
