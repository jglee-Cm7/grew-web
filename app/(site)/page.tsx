import { AboutSection } from "@/components/features/main";
import { GiveSection } from "@/components/features/main";
import { HeroSection } from "@/components/features/main";
import { LocationSection } from "@/components/features/main";

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <GiveSection />
    </main>
  );
}
