import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Membership | Bhutan-Thai Chamber of Commerce",
  description:
    "Join the Bhutan-Thai Chamber of Commerce. Choose from Individual or Corporate membership tiers and gain access to bilateral trade and investment opportunities.",
};

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

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ backgroundColor: color === "gold" ? "#FEF9EC" : "#EAF2F8" }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke={color === "gold" ? "#C9960C" : "#1B4F72"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F8F6F1" }}>
        {/* Page header */}
        <div
          className="pt-32 pb-16 text-center"
          style={{ backgroundColor: "#EAF2F8" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
                Membership Plans
              </span>
              <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: "#1B4F72" }}
            >
              Join the Chamber
            </h1>
            <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto">
              Choose the membership tier that best suits your organisation and unlock the full power of bilateral trade and investment.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 — Individual */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="mb-1">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#C9960C" }}
                  >
                    Individual
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4F72" }}>
                  Individual / Sole Proprietor
                </h2>
                <div className="flex items-baseline gap-1 pb-6 border-b border-gray-100">
                  <span className="text-4xl font-extrabold" style={{ color: "#1B4F72" }}>
                    THB 3,000
                  </span>
                  <span className="text-gray-400 text-sm font-medium">/year</span>
                </div>

                <ul className="space-y-3 mt-6 flex-1">
                  {individualBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckIcon color="teal" />
                      <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="mt-8 block text-center px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-200 hover:bg-[#1B4F72] hover:text-white"
                  style={{ color: "#1B4F72", borderColor: "#1B4F72" }}
                >
                  Apply Now
                </a>
              </div>

              {/* Card 2 — Corporate */}
              <div
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden flex flex-col"
                style={{ borderTop: "4px solid #C9960C" }}
              >
                <div
                  className="absolute top-4 right-6 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#FEF9EC", color: "#C9960C" }}
                >
                  Most Popular
                </div>
                <div className="mb-1">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#C9960C" }}
                  >
                    Corporate
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4F72" }}>
                  Corporate / Govt / NGO
                </h2>
                <div className="flex items-baseline gap-1 pb-6 border-b border-gray-100">
                  <span className="text-4xl font-extrabold" style={{ color: "#1B4F72" }}>
                    THB 5,000
                  </span>
                  <span className="text-gray-400 text-sm font-medium">/year</span>
                </div>

                <ul className="space-y-3 mt-6 flex-1">
                  {corporateBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckIcon color="gold" />
                      <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="mt-8 block text-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#1B4F72" }}
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Fine print */}
            <p className="mt-8 text-center text-xs text-gray-400">
              All applications subject to Board approval. Fees are non-refundable.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
