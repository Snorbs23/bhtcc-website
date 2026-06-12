"use client";

import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { track } from "@/lib/track";

const STORAGE_KEY = "bhtcc-overlay-shown";
const DELAY_MS = 20_000;
const SCROLL_TRIGGER = 0.5; // fraction of page depth

export default function SignupOverlay() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Show once per session: after 20s, or at 50% scroll depth, whichever first.
  useEffect(() => {
    emailjs.init("6_5SKm0FMIMHssYmY");
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const show = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };
    const timer = setTimeout(show, DELAY_MS);
    const onScroll = () => {
      const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (depth >= SCROLL_TRIGGER) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll only while the modal is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send("service_xr4axrj", "template_srtlrdl", {
        form_id: "overlay-signup",
        from_name: name,
        from_email: email,
        interest: "Event invitations",
        message: "Form: overlay-signup",
      });
      setStatus("success");
      track("sign_up", { form_id: "overlay-signup" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get invited to our next event"
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50 cursor-default"
        onClick={close}
        aria-label="Close"
        tabIndex={-1}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <h3 className="text-xl font-extrabold mb-2" style={{ color: "#4D7084" }}>
              You&apos;re on the list
            </h3>
            <p className="text-gray-500 text-sm">We&apos;ll send you an invitation to our next event.</p>
            <button
              onClick={close}
              className="mt-6 inline-flex items-center px-7 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#4D7084" }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#E1A101" }}>
              Bhutan · Thailand
            </p>
            <h3 className="text-2xl font-extrabold mb-2" style={{ color: "#4D7084" }}>
              Get invited to our next event
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Curated gatherings in Bangkok and Thimphu. Leave your details and we&apos;ll save you a seat.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form_id" value="overlay-signup" />
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]"
              />
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#E1A101] text-white py-3 rounded-full font-semibold transition-all duration-200 hover:brightness-110 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Get Invited"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-xs">
                  Something went wrong. Please email{" "}
                  <a href="mailto:contact@bhutanthailandchamber.org" className="underline">
                    contact@bhutanthailandchamber.org
                  </a>
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
