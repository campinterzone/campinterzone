import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Library from "@/components/sections/Library";
import Workshops from "@/components/sections/Workshops";
import LoudHours from "@/components/sections/LoudHours";
import Gifting from "@/components/sections/Gifting";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Library />
        <Workshops />
        <LoudHours />
        <Gifting />
      </main>
      <Footer />
    </>
  );
}
