"use client";

import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { track } from "@/lib/track";

export const INTEREST_OPTIONS = [
  "Networking Events",
  "Trade Facilitation",
  "Cultural and Artistic Programs",
  "Investment Opportunities",
  "Bhutan Market Entry",
  "Thailand Market Entry",
];

type InterestFormProps = {
  /** Hidden identifier sent with the submission, e.g. "join-list" */
  formId: string;
  showOrganization?: boolean;
  showInterests?: boolean;
  submitLabel?: string;
  successMessage?: string;
};

export default function InterestForm({
  formId,
  showOrganization = false,
  showInterests = true,
  submitLabel = "Join Our List",
  successMessage = "You're on the list. We'll be in touch.",
}: InterestFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init("6_5SKm0FMIMHssYmY");
  }, []);

  const toggleInterest = (option: string) => {
    setInterests((prev) =>
      prev.includes(option) ? prev.filter((i) => i !== option) : [...prev, option]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send("service_xr4axrj", "template_srtlrdl", {
        form_id: formId,
        from_name: name,
        from_email: email,
        interest: interests.join(", ") || "Not specified",
        message: [
          `Form: ${formId}`,
          organization ? `Organization: ${organization}` : null,
          interests.length ? `Interests: ${interests.join(", ")}` : null,
        ]
          .filter(Boolean)
          .join("\n") || `Form: ${formId}`,
      });
      setStatus("success");
      track("sign_up", { form_id: formId });
      setName("");
      setEmail("");
      setOrganization("");
      setInterests([]);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-semibold" style={{ color: "#4D7084" }}>
          Thank you!
        </p>
        <p className="text-gray-500 text-sm mt-1">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form_id" value={formId} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs tracking-widest text-gray-400 block mb-1">NAME *</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]"
          />
        </div>
        <div>
          <label className="text-xs tracking-widest text-gray-400 block mb-1">EMAIL *</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@company.com"
            className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]"
          />
        </div>
      </div>

      {showOrganization && (
        <div>
          <label className="text-xs tracking-widest text-gray-400 block mb-1">ORGANIZATION (OPTIONAL)</label>
          <input
            name="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Company or organization"
            className="w-full border-b border-gray-300 bg-transparent py-2 text-[#4D7084] focus:outline-none focus:border-[#4D7084]"
          />
        </div>
      )}

      {showInterests && (
        <fieldset>
          <legend className="text-xs tracking-widest text-gray-400 mb-3">
            I&apos;M INTERESTED IN (CHECK ALL THAT APPLY · OPTIONAL)
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {INTEREST_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={interests.includes(option)}
                  onChange={() => toggleInterest(option)}
                  className="w-4 h-4 rounded border-gray-300 accent-[#4D7084]"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-[#E1A101] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:brightness-110 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : submitLabel}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please email us at{" "}
          <a href="mailto:contact@bhutanthailandchamber.org" className="underline">
            contact@bhutanthailandchamber.org
          </a>
        </p>
      )}
    </form>
  );
}
