import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Membership from "@/components/Membership";
import WhyJoin from "@/components/WhyJoin";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Membership />
        <WhyJoin />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
