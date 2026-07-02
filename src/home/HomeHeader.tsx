import { ChineseH1, H3 } from "../design/Typography";

export function HomeHeader() {
  return (
    <header>
      <div className="relative flex items-center justify-center min-h-[56px]">
        <img
          src={`${process.env.PUBLIC_URL}/chinese_seal.png`}
          alt="Chinese seal"
          className="absolute left-0 h-14 w-14 object-contain"
        />
        <div className="flex items-baseline gap-2 md:gap-3 text-center">
          <ChineseH1 className="tracking-tight text-sage-light text-lg md:text-xl">
            哈咯 ヾ{"("}^-^{")"}
          </ChineseH1>
          <H3 color="paper-white" className="font-normal text-sm md:text-base">
            have a fun romp around
          </H3>
        </div>
      </div>
    </header>
  );
}
