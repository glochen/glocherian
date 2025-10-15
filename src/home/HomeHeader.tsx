import { ChineseH1, H3 } from "../design/Typography";

export function HomeHeader() {
  return (
    <>
      <div className="flex flex-row py-20 px-8 justify-center gap-6">
        <img src={`${process.env.PUBLIC_URL}/chinese_seal.png`} alt="Chinese seal" className="h-20" />
        <div className="flex flex-col justify-left gap-6">
          <ChineseH1>
            哈咯 ヾ{"("}^-^{")"}
          </ChineseH1>
          <H3 color="blue-primary">have a fun romp around</H3>
        </div>
      </div>
      <div className="brush-stroke-line"></div>
    </>
  );
}
