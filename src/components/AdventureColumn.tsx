import { AdventureItem, AdventureType } from "../data/adventures";
import { AdventureContentCard } from "./ContentCards/AdventureContentCard";
import {
  Bike,
  Carabiner,
  Ski,
  Mountains,
  Rope,
  Route,
} from "../design/icons/OutdoorsIcons";
import _ from "lodash";
import { useState } from "react";

interface AdventureColumnProps {
  type: AdventureType;
  adventures: AdventureItem[];
}

// Map adventure types to their corresponding icons
const getAdventureIcon = (type: AdventureType) => {
  switch (type) {
    case AdventureType.Biking:
      return Bike;
    case AdventureType.Climbing:
      return Carabiner;
    case AdventureType.Skiing:
      return Ski;
    case AdventureType.Backpacking:
      return Mountains;
    case AdventureType.Mountaineering:
      return Rope;
    case AdventureType.Hiking:
      return Route;
    default:
      return Mountains;
  }
};

export function AdventureColumn({ type, adventures }: AdventureColumnProps) {
  const [hoveredAdventureIndex, setHoveredAdventureIndex] = useState<
    number | null
  >(null);
  const TypeIcon = getAdventureIcon(type);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <TypeIcon size="sm" />
        <h2 className="text-brown-primary text-lg tracking-wider font-medium">
          {_.startCase(type)}
        </h2>
      </div>
      {/* Horizontal brush stroke */}
      <div className="brush-stroke-line w-40 h-0.5 transition-all duration-300"></div>
      <div className="flex flex-col gap-8 items-center group/adventurecolumn">
        {_.map(adventures, (adventure, index) => (
          <AdventureMarker
            key={`${adventure.location}-${adventure.date.month}-${adventure.date.year}`}
            adventure={adventure}
            index={index}
            isHovered={hoveredAdventureIndex === index}
            onHover={() => setHoveredAdventureIndex(index)}
            onLeave={() => setHoveredAdventureIndex(null)}
            hoveredAdventureIndex={hoveredAdventureIndex}
          />
        ))}
      </div>
    </div>
  );
}

interface AdventureMarkerProps {
  adventure: AdventureItem;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  hoveredAdventureIndex: number | null;
}

const AdventureMarker: React.FC<AdventureMarkerProps> = ({
  adventure,
  isHovered,
  onHover,
  onLeave,
}) => {
  return (
    <div
      className="relative flex flex-col gap-4 items-center cursor-pointer transition-all duration-300 ease-in-out group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Adventure location and date */}
      <div className="space-y-2 text-center mb-2 transition-all duration-300">
        <div className="text-brown-primary text-sm font-medium tracking-wide">
          {adventure.name} — {adventure.location}
        </div>
        <div className="text-brown-secondary text-xs tracking-wider">
          {adventure.date.month} {adventure.date.year}
        </div>
      </div>

      {/* Hover details */}
      {isHovered && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300">
          <AdventureContentCard
            description={adventure.description}
            className="min-w-80 max-w-96"
          />
        </div>
      )}
    </div>
  );
};
