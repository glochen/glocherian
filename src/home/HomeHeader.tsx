import { ChineseH1, ChineseH2, H1, H2 } from "../design/Typography";

export function HomeHeader() {
  return (
    <>
      <div className="flex flex-row py-20 px-8 justify-center gap-6">
        <img src="/chinese_seal.png" alt="Chinese seal" className="h-20" />
        <div className="flex flex-col justify-left gap-6">
          <ChineseH1>
            哈咯 ヾ{"("}^-^{")"}
          </ChineseH1>
          <H2>hope you have a fun romp around</H2>
        </div>
      </div>
      <div className="brush-stroke-line"></div>
    </>
  );
}
