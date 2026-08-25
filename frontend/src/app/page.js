import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Story from "../components/Story";
import MenuPreview from "../components/MenuPreview";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Marquee />

      <Story />

      <MenuPreview />

      <Experience />

      <Gallery />

      <Reservation />

      <Footer />
    </main>
  );
}