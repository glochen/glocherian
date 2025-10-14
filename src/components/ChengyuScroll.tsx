import { ChengyuItem, ChengyuOrigin } from "../data/chengyus";
import { ChengyuBanner } from "./ChengyuBanner";
import { useState } from "react";
import _ from "lodash";

interface ChengyuScrollProps {
  origin: ChengyuOrigin;
  chengyus: ChengyuItem[];
}

export function ChengyuScroll({ origin, chengyus }: ChengyuScrollProps) {
  const [hoveredBannerIndex, setHoveredBannerIndex] = useState<number | null>(
    null
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="h-px bg-brown-tertiary flex-1"></div>
        <h2 className="text-ink-black text-lg tracking-wider">
          {_.lowerCase(origin)}
        </h2>
        <div className="h-px bg-brown-tertiary flex-1"></div>
      </div>

      <div className="flex gap-3 items-end relative group/chengyu-scroll">
        {_.map(chengyus, (chengyu, index) => (
          <ChengyuBanner
            key={chengyu.chengyu}
            chengyu={chengyu}
            index={index}
            isHovered={hoveredBannerIndex === index}
            onHover={() => setHoveredBannerIndex(index)}
            onLeave={() => setHoveredBannerIndex(null)}
            hoveredBannerIndex={hoveredBannerIndex}
          />
        ))}
      </div>
    </div>
  );
}
