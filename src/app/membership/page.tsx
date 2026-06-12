import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Membership | Bhutan-Thailand Chamber of Commerce",
  description:
    "Membership in the Bhutan-Thailand Chamber of Commerce opens after incorporation. Register your interest in the founding circle.",
};

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#EEDFC0" }}>
        {/* Page header */}
        <div className="pt-32 text-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px" style={{ backgroundColor: "#E1A101" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
                First Cohort · Membership Opens After Incorporation
              </span>
              <span className="w-6 h-px" style={{ backgroundColor: "#E1A101" }} />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: "#4D7084" }}
            >
              Apply to the Founding Circle
            </h1>
            <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
              Membership opens once our incorporation completes. There are no fees and nothing to
              buy today. Until then, we are assembling a founding circle: a first cohort of founders,
              operators, investors, and artists who will shape the community from day one.
            </p>
          </div>
          <div className="h-14 mt-12 bg-gradient-to-b from-white to-[#EEDFC0]" />
        </div>

        {/* Founding Member interest form */}
        <div className="pb-20 lg:pb-28 px-4 sm:px-6 pt-2">
          <div
            className="max-w-2xl mx-auto rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <h2 className="text-2xl font-extrabold mb-2" style={{ color: "#4D7084" }}>
              Register Founding Member Interest
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Tell us who you are and what draws you to the corridor. We&apos;ll reach out as the
              founding circle takes shape.
            </p>
            <InterestForm
              formId="founding-member-interest"
              showOrganization
              submitLabel="Register Interest"
              successMessage="Your interest is registered. We'll be in touch as the founding circle takes shape."
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
