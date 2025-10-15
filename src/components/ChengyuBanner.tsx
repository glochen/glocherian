import { ChengyuItem } from "../data/chengyus";
import { ChengyuContentCard } from "./ContentCards/ChengyuContentCard";
import _ from "lodash";

interface ChengyuBannerProps {
  chengyu: ChengyuItem;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  activeBannerIndex: number | null;
}

export const ChengyuBanner: React.FC<ChengyuBannerProps> = ({
  chengyu,
  index,
  isActive,
  onHover,
  onLeave,
  activeBannerIndex,
}) => {
  // Calculate if we need to push the next banner to the right
  const isNextToActive =
    activeBannerIndex !== null && index === activeBannerIndex + 1;

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        isActive ? "z-10" : "z-0"
      } ${isNextToActive ? "ml-[260px]" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Chengyu Banner - Traditional Chinese scroll style */}
      <div
        className={`
          w-16 h-80 relative cursor-pointer
          text-brown-secondary border-brown-secondary
          flex flex-col
        `}
      >
        {!isActive && (
          <>
            {/* Brush stroke borders using existing CSS classes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top brush stroke */}
              <div className="absolute top-0 left-0 right-0 h-0.5 brush-stroke-line opacity-80"></div>
              {/* Bottom brush stroke */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 brush-stroke-line opacity-80"></div>
              {/* Left brush stroke */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 brush-stroke-line-vertical opacity-80"></div>
              {/* Right brush stroke */}
              <div className="absolute right-0 top-0 bottom-0 w-0.5 brush-stroke-line-vertical opacity-80"></div>
            </div>

            {/* Text content - each character on its own row */}
            <div className="flex flex-col items-center justify-center h-full px-2 py-4 text-ink-black font-lxgw-wenkai-tc">
              {_.map(chengyu.chengyu.split(""), (character, charIndex) => (
                <div key={charIndex} className="text-center mb-2 last:mb-0">
                  <div className="text-2xl text-brown-primary leading-none">
                    {character}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content card */}
      {isActive && (
        <div className="absolute top-0 left-0 w-80 z-20">
          <ChengyuContentCard
            chengyu={chengyu.chengyu}
            literalTranslation={chengyu.literalTranslation}
            meaning={chengyu.meaning}
            className="bg-paper-white h-80 flex flex-col justify-between content-card-border"
          />
        </div>
      )}
    </div>
  );
};
