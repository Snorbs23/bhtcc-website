"use client";
import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import CalendlyLink from "@/components/CalendlyLink";
import { track } from "@/lib/track";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", interest: "", message: ""
  });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  useEffect(() => {
    emailjs.init("6_5SKm0FMIMHssYmY");
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_xr4axrj",
        "template_srtlrdl",
        {
          form_id: "contact-form",
          from_name: formData.name,
          from_email: formData.email,
          interest: formData.interest || "Not specified",
          message: formData.message || "No message",
        }
      );
      setStatus("success");
      track("sign_up", { form_id: "contact-form" });
      setFormData({ name: "", email: "", interest: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" style={{ background: "#EEDFC0" }} className="py-24 px-6">
      <div
        className="max-w-6xl mx-auto rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-16"
        style={{
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        }}
      >
        <div>
          <p className="text-[#E1A101] text-xs tracking-widest font-semibold mb-2 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#E1A101]"></span> CONTACT US
          </p>
          <h2 className="text-4xl font-black text-[#4D7084] mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-10">Whether you are looking to join, partner, or simply learn more, we would love to hear from you.</p>
          <div className="space-y-6">
            <a href="mailto:contact@bhutanthailandchamber.org" className="flex justify-between items-center border-b border-gray-200 pb-4 group">
              <div>
                <p className="text-[#E1A101] text-xs tracking-widest mb-1">EMAIL</p>
                <p className="text-[#4D7084] text-sm">contact@bhutanthailandchamber.org</p>
              </div>
              <span className="text-[#E1A101] group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <CalendlyLink className="flex justify-between items-center border-b border-gray-200 pb-4 group">
              <div>
                <p className="text-[#E1A101] text-xs tracking-widest mb-1">TALK TO THE FOUNDING TEAM</p>
                <p className="text-[#4D7084] text-sm">30 minutes, for serious membership and partnership conversations.</p>
              </div>
              <span className="text-[#E1A101] group-hover:translate-x-1 transition-transform">→</span>
            </CalendlyLink>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="form_id" value="contact-form" />
          <div>
            <label className="text-xs tracking-widest text-gray-400 block mb-1">NAME *</label>
            <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]" />
          </div>
          <div>
            <label className="text-xs tracking-widest text-gray-400 block mb-1">EMAIL *</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]" />
          </div>
          <div>
            <label className="text-xs tracking-widest text-gray-400 block mb-1">AREA OF INTEREST (OPTIONAL)</label>
            <select name="interest" value={formData.interest} onChange={handleChange} className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]">
              <option value="">Select an option</option>
              <option>Networking Events</option>
              <option>Trade Partnership</option>
              <option>Investment Opportunities</option>
              <option>Cultural &amp; Artistic Programs</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label className="text-xs tracking-widest text-gray-400 block mb-1">MESSAGE (OPTIONAL)</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us how we can help..." className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084] resize-none" />
          </div>
          <button type="submit" disabled={status === "sending"} className="bg-[#4D7084] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B84E32] transition-colors duration-200 disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-600 text-sm">Thank you! We will be in touch within 2 business days.</p>}
          {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please email us at <a href="mailto:contact@bhutanthailandchamber.org" className="underline">contact@bhutanthailandchamber.org</a></p>}
        </form>
      </div>
    </section>
  );
}
