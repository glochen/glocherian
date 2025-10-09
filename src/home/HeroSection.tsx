import { ChineseH2, H2, H3} from "../design/Typography";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-row gap-4 items-center justify-center">
          <ChineseH2>
           哈咯 ヾ{"("}^-^{")"}
          </ChineseH2>
          <H2>
            welcome
          </H2>
          </div>
          <H3>
            hope you have a fun romp around
          </H3>
        </div>
      </div>
    </div>
  );
}
