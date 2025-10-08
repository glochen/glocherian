import { H2 } from "../design/Typography";

export function HomePage() {
  return (
    <div className="bg-paper-white min-h-screen text-ink-black font-lxgw-wenkai-tc">
    <H2>
      hi there ! 您好！
    </H2>
    <div className="bg-paper-white flex flex-col flex-1 font-sans">
      <span className="bg-blue-primary text-white">primary 最重</span>
      <span className="bg-blue-secondary">secondary</span>
      <span className="bg-blue-tertiary">tertiary</span>
      <span className="bg-brown-primary text-white">primary</span>
      <span className="bg-brown-secondary">secondary</span>
      <span className="bg-brown-tertiary">tertiary</span>
    </div>
    </div>
  );
}