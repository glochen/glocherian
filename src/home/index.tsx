import { HeroSection } from "./HeroSection";

export function HomePage() {
  return (
    <div className="bg-paper-white min-h-screen text-ink-black">
      <HeroSection />
      <div className="h-1 bg-brown-primary"></div>
    </div>
  );
}