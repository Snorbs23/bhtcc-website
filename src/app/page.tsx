import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Marquee from "@/components/Marquee";
import Events from "@/components/Events";
import About from "@/components/About";
import WhyJoin from "@/components/WhyJoin";
import FoundingBoard from "@/components/FoundingBoard";
import GetInTouch from "@/components/GetInTouch";
import Summary from "@/components/Summary";
import SignupOverlay from "@/components/SignupOverlay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Marquee />
        <Events />
        <About />
        <WhyJoin />
        <FoundingBoard />
        <GetInTouch />
        <Summary />
      </main>
      <Footer />
      <SignupOverlay />
    </>
  );
}
