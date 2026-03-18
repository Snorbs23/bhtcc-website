"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ backgroundColor: "#F8F6F1" }}>
      {/* Ambient gradient blob — teal */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,79,114,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />
      {/* Ambient gradient blob — gold */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,150,12,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(50%, 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5" style={{ backgroundColor: "#C9960C" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
              Bhutan · Thailand
            </span>
            <span className="w-8 h-0.5" style={{ backgroundColor: "#C9960C" }} />
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl mx-auto"
            style={{ color: "#1B4F72" }}
          >
            Bridging Business Between Bhutan and Thailand
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            The Bhutan-Thai Chamber of Commerce connects entrepreneurs, corporations, and government bodies to foster bilateral trade and investment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#membership"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "#1B4F72" }}
            >
              Become a Member
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold border-2 transition-all duration-200 hover:bg-[#1B4F72] hover:text-white hover:-translate-y-0.5"
              style={{ color: "#1B4F72", borderColor: "#1B4F72" }}
            >
              Learn More
            </a>
          </div>

          {/* Subtle stats strip */}
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {[
              { value: "2", label: "Countries" },
              { value: "50+", label: "Member Organizations" },
              { value: "10+", label: "Years of Partnership" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold mb-1" style={{ color: "#1B4F72" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
