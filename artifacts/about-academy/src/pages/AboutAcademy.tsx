import HeroSection from "@/components/HeroSection";
import AcademyDescription from "@/components/AcademyDescription";
import WellBeingSection from "@/components/WellBeingSection";
import SixPillars from "@/components/SixPillars";
import DiscoverMore from "@/components/DiscoverMore";

export default function AboutAcademy() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground flex flex-col">
      <HeroSection />
      <AcademyDescription />
      <WellBeingSection />
      <SixPillars />
      <DiscoverMore />
    </main>
  );
}
