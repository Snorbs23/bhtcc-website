import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Bhutan-Thailand Chamber of Commerce",
  description:
    "Get in touch with the Bhutan-Thailand Chamber of Commerce, questions, partnerships, and event enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#EEDFC0" }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
