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
    <div className="text-brown-secondary bg-paper-white rounded-lg p-2 flex flex-col gap-2">
      {/* Adventure Type Badge with Icon */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <TypeIcon size="sm" />
          <span className="px-3 py-1.5 text-xs font-sans font-medium rounded-full border bg-brown-tertiary/40 text-brown-secondary border-brown-tertiary tracking-wide">
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
        <span className="text-brown-primary text-sm font-sans font-medium">
          {adventure.location}
        </span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 pt-1 border-t border-brown-tertiary/30">
        <span className="text-brown-primary text-xs font-sans italic">
          {adventure.date.month} {adventure.date.year}
        </span>
      </div>

      {/* Description */}
      {adventure.description && (
        <p className="text-ink-black text-sm font-sans leading-relaxed pt-1">
          {adventure.description}
        </p>
      )}
    </div>
  );
}

