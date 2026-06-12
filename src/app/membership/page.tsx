import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";
import CalendlyLink from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "The Founding Circle | Bhutan-Thailand Chamber of Commerce",
  description:
    "Apply to the founding circle of the Bhutan-Thailand Chamber of Commerce: a first cohort of founders, operators, investors, and artists across Bangkok and Thimphu.",
};

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#EEDFC0" }}>
        {/* Page header */}
        <div className="pt-16 text-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px" style={{ backgroundColor: "#E1A101" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
                First Cohort · By Application
              </span>
              <span className="w-6 h-px" style={{ backgroundColor: "#E1A101" }} />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: "#4D7084" }}
            >
              The Founding Circle
            </h1>
            <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
              We are assembling a first cohort of founders, operators, investors, and artists who
              will shape this community from day one. Registering interest is free and comes with
              no obligation. Founding members get first access to events, introductions, and the
              member network when membership opens.
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
              submitLabel="Request an Invitation"
              successMessage="Your request is in. We'll be in touch as the founding circle takes shape."
            />
          </div>

          {/* Direct line for serious conversations */}
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <CalendlyLink
              className="font-semibold underline underline-offset-4"
              style={{ color: "#4D7084" }}
            >
              Talk to the founding team
            </CalendlyLink>
            <p className="text-gray-500 text-xs mt-1.5">
              30 minutes, for serious membership and partnership conversations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
