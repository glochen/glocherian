import { HomeHeader } from "./HomeHeader";
import { HeroSection } from "./HeroSection";

export function HomePage() {
  return (
    <div className="bg-paper-white min-h-screen">
      <HomeHeader />
      <HeroSection />
    </div>
  );
}