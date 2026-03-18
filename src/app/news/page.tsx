import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News | Bhutan-Thai Chamber of Commerce",
  description:
    "Latest news, updates, and announcements from the Bhutan-Thai Chamber of Commerce.",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#F8F6F1", minHeight: "calc(100vh - 4rem)" }}>
        {/* Page header */}
        <div className="pt-32 pb-16 text-center" style={{ backgroundColor: "#EAF2F8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9960C" }}>
                Latest
              </span>
              <span className="w-6 h-px" style={{ backgroundColor: "#C9960C" }} />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: "#1B4F72" }}
            >
              News &amp; Updates
            </h1>
            <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto">
              Stay informed on the latest developments, events, and initiatives from the Bhutan-Thai Chamber of Commerce.
            </p>
          </div>
        </div>

        {/* Placeholder content */}
        <div className="py-24 text-center">
          <div className="max-w-md mx-auto px-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "#EAF2F8" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M3 5h16M3 10h16M3 15h10"
                  stroke="#1B4F72"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-gray-400 text-base">
              News articles will appear here. Check back soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
