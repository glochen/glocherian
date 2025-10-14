import { useState } from "react";
import { WatchingItem, providerText, typeText } from "../data/watchings";
import _ from "lodash";

interface WatchingCarouselProps {
  title: string;
  items: WatchingItem[];
}

interface WatchingItemCardProps {
  item: WatchingItem;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export function WatchingCarousel({ title, items }: WatchingCarouselProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleItemHover = (index: number) => {
    setExpandedIndex(index);
  };

  const handleItemLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-ink-black mb-4 px-2">{title}</h3>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {items.map((item, index) => (
          <WatchingItemCard
            key={`${item.title}-${index}`}
            item={item}
            isExpanded={expandedIndex === index}
            onHover={() => handleItemHover(index)}
            onLeave={handleItemLeave}
          />
        ))}
      </div>
    </div>
  );
}

function WatchingItemCard({
  item,
  isExpanded,
  onHover,
  onLeave,
}: WatchingItemCardProps) {
  return (
    <div
      className={`relative transition-all duration-300 ease-in-out flex-shrink-0 ${
        isExpanded ? "w-80" : "w-48"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`h-32 rounded-md p-3 transition-all duration-300 ${
          isExpanded ? "bg-paper-white" : "bg-brown-tertiary/20"
        }`}
      >
        {!isExpanded && (
          <div className="h-full flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-medium text-ink-black leading-tight mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-brown-primary">
                {typeText[item.type]} • {providerText[item.provider]}
              </p>
            </div>
            {item.genre && (
              <p className="text-xs text-brown-secondary">{item.genre}</p>
            )}
          </div>
        )}
      </div>

      {isExpanded && item.description && (
        <div className="absolute top-0 left-0 w-80 z-20">
          <div className={`content-card-border text-brown-secondary p-4`}>
            <p className="text-ink-black font-sans text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
