"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Fill these in from your EmailJS dashboard (emailjs.com)
const EMAILJS_SERVICE_ID = "service_xr4axr";
const EMAILJS_TEMPLATE_ID = "template_srtlrdl";
const EMAILJS_PUBLIC_KEY = "6_5SKm0FMIMHssYmY";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init("6_5SKm0FMIMHssYmY");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.firstName + ' ' + formData.lastName,
          from_email: formData.email,
          interest: formData.interest,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", interest: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "border-0 border-b border-gray-300 focus:border-b-2 pb-2 outline-none w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm transition-colors duration-200";

  const focusStyle = { borderColor: "#1B4F72" };

  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "#F5F0E8" }}>
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
                Contact Us
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
              style={{ color: "#1B4F72" }}
            >
              Get in Touch
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Whether you&apos;re looking to join, partner, or simply learn more — we&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:contact@bhutanthailandchamber.org"
                className="flex items-center justify-between group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#1B4F72" }}>
                    contact@bhutanthailandchamber.org
                  </div>
                </div>
                <span
                  className="text-xl font-light transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "#C9960C" }}
                >
                  →
                </span>
              </a>

              {/* Website */}
              <a
                href="https://bhutanthailandchamber.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                    Website
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#1B4F72" }}>
                    bhutanthailandchamber.org
                  </div>
                </div>
                <span
                  className="text-xl font-light transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "#C9960C" }}
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First + Last name row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className={inputClass}
                    onFocus={(e) => (e.target.style.borderColor = "#1B4F72")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className={inputClass}
                    onFocus={(e) => (e.target.style.borderColor = "#1B4F72")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  className={inputClass}
                  onFocus={(e) => (e.target.style.borderColor = "#1B4F72")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              {/* Interest dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Area of Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer appearance-none`}
                  style={{ paddingRight: "1.5rem" }}
                  onFocus={(e) => (e.target.style.borderColor = "#1B4F72")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="trade">Trade Facilitation</option>
                  <option value="investment">Investment</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us how we can help..."
                  required
                  className={`${inputClass} resize-none`}
                  onFocus={(e) => (e.target.style.borderColor = "#1B4F72")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#1B4F72" }}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium" style={{ color: "#1B4F72" }}>
                  Thank you! We&apos;ll be in touch within 1–2 business days.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please email us directly at{" "}
                  <a href="mailto:contact@bhutanthailandchamber.org" className="underline">
                    contact@bhutanthailandchamber.org
                  </a>
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
