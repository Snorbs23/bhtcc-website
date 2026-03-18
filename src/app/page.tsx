import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import News from "@/components/News";
import Members from "@/components/Members";
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
        <WhyJoin />
        <News />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
