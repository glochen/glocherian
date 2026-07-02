import { AdventureItem, AdventureType } from "../data/adventures";
import {
  Bike,
  Carabiner,
  Ski,
  Mountains,
  Rope,
  Route,
} from "../design/icons/OutdoorsIcons";
import _ from "lodash";

interface AdventureCardProps {
  adventure: AdventureItem;
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

export function AdventureCard({ adventure }: AdventureCardProps) {
  const TypeIcon = getAdventureIcon(adventure.type);

  return (
    <div className="text-ink-black p-3 flex flex-col gap-3 border-b border-moss/30">
      {/* Adventure Type Badge with Icon */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <TypeIcon size="sm" />
          <span className="text-[11px] font-sans text-moss tracking-[0.14em] uppercase">
            {_.lowerCase(adventure.type)}
          </span>
        </div>
      </div>

      {/* Adventure Name */}
      <h3 className="text-ink-black text-base font-sans font-semibold leading-tight">
        {adventure.name}
      </h3>

      {/* Location */}
      <div className="flex items-center gap-2">
        <span className="text-moss text-sm font-sans font-medium">
          {adventure.location}
        </span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 pt-2 border-t border-moss/20">
        <span className="text-moss text-xs font-sans italic">
          {adventure.date.month} {adventure.date.year}
        </span>
      </div>

      {/* Description */}
      {adventure.description && (
        <p className="text-ink-black/85 text-sm font-sans leading-relaxed pt-1">
          {adventure.description}
        </p>
      )}
    </div>
  );
}

