import { HomeHeader } from "./HomeHeader";
import { HeroSection } from "./HeroSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="bg-paper-white min-h-screen min-w-screen flex flex-col">
      <HomeHeader />
      <HeroSection />
      <Footer />
    </div>
  );
}