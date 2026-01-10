import About from "../components/mainpage/AboutSection";
import Give from "../components/mainpage/GiveSection";
import Hero from "../components/mainpage/HeroSection";
import Locations from "../components/mainpage/LocationsSection";


export default function MainPage() {
  return (
    <main>
      <Hero />
      <About />
      <Locations />
      <Give />
    </main>
  )
}