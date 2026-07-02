import { HeroSection } from "./HeroSection";
import backgroundImage from "./background.jpeg";

export function HomePage() {
  return (
    <div
      className="relative min-h-screen min-w-screen flex flex-col"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(153, 164, 160, 0.38)" }}
      ></div>

      <main className="relative z-10 w-full flex-1">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10 py-5 md:py-8">
          <section>
            <HeroSection />
          </section>
        </div>
      </main>
    </div>
  );
}