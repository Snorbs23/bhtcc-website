import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";

export const metadata: Metadata = {
  title: "Join Our List | Bhutan-Thailand Chamber of Commerce",
  description:
    "Events, updates, and news from the Bhutan-Thailand corridor. Join the BHTCC list.",
};

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#EEDFC0", minHeight: "100vh" }} className="pt-12 pb-16 px-4 sm:px-6">
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
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5" style={{ backgroundColor: "#E1A101" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E1A101" }}>
              Bhutan · Thailand
            </span>
          </div>
          <h1 className="text-4xl font-black mb-2" style={{ color: "#4D7084" }}>
            Join the BHTCC List
          </h1>
          <p className="text-gray-500 mb-8">
            Events, updates, and news from the Bhutan-Thailand corridor.
          </p>
          <InterestForm formId="join-list" submitLabel="Join Our List" />
        </div>
      </main>
      <Footer />
    </>
  );
}
