import { ChengyuItem, ChengyuOrigin } from "../data/chengyus";
import { ChengyuBanner } from "./ChengyuBanner";
import { useState } from "react";
import _ from "lodash";

interface ChengyuScrollProps {
  origin: ChengyuOrigin;
  chengyus: ChengyuItem[];
}

export function ChengyuScroll({ origin, chengyus }: ChengyuScrollProps) {
  const [activeBannerIndex, setActiveBannerIndex] = useState<number | null>(
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
            isActive={activeBannerIndex === index}
            onInteraction={() => {
              if (activeBannerIndex === index) {
                setActiveBannerIndex(null); // Close if already open
              } else {
                setActiveBannerIndex(index); // Open new item
              }
            }}
            onHover={() => {
              // Only set on hover if no item is currently active (prevents mobile conflicts)
              if (activeBannerIndex === null) {
                setActiveBannerIndex(index);
              }
            }}
            onLeave={() => {
              // Only clear on leave if this item is currently active
              if (activeBannerIndex === index) {
                setActiveBannerIndex(null);
              }
            }}
            activeBannerIndex={activeBannerIndex}
          />
        ))}
      </div>
    </div>
  );
}
