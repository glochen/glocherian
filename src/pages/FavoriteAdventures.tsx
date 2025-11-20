import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { AdventureCard } from "../components/AdventureCard";
import {
  favoriteAdventures,
  getAdventureTypes,
  getAdventureTypeChinese,
  AdventureType,
} from "../data/adventures";
import {
  Bear,
  Bike,
  Carabiner,
  Ski,
  Mountains,
  Rope,
  Route,
} from "../design/icons/OutdoorsIcons";
import _ from "lodash";
import { useState } from "react";

export function FavoriteAdventures() {
  const [selectedType, setSelectedType] = useState<AdventureType | "all">("all");
  const types = getAdventureTypes(favoriteAdventures);

  // Sort adventures by date (most recent first)
  const sortedAdventures = _.sortBy(favoriteAdventures, (adventure) => {
    const year = adventure.date.year;
    const month = adventure.date.month;

    // Convert month names to numbers for proper sorting
    const monthMap: Record<string, number> = {
      january: 1,
      february: 2,
      march: 3,
      april: 4,
      may: 5,
      june: 6,
      july: 7,
      august: 8,
      september: 9,
      october: 10,
      november: 11,
      december: 12,
      summer: 6.5, // Summer is between June and July
    };

    const monthNum = monthMap[month.toLowerCase()] || 0;
    return -(year * 12 + monthNum); // Negative for reverse order (most recent first)
  });

  // Filter adventures by selected type
  const filteredAdventures =
    selectedType === "all"
      ? sortedAdventures
      : _.filter(sortedAdventures, (adventure) => adventure.type === selectedType);

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

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Bear size="md" />
        </div>
      </div>

      {/* Quote Section */}
      <div className="px-8 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-brown-secondary text-lg leading-relaxed italic font-light">
            "climb the mountain not to plant your flag, but to embrace the
            challenge, enjoy the air and behold the view. climb it so you can
            see the world, not so the world can see you."
          </blockquote>
          <cite className="text-brown-secondary text-sm mt-3 block">
            — david mccullough jr.
          </cite>
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="flex gap-8">
          {/* Adventure Cards Grid - Left Side */}
          <div className="flex-1">
            {!_.isEmpty(filteredAdventures) ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {_.map(filteredAdventures, (adventure) => (
                  <AdventureCard
                    key={`${adventure.name}-${adventure.location}-${adventure.date.month}-${adventure.date.year}`}
                    adventure={adventure}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-brown-secondary text-sm font-sans">
                  No adventures found in this category.
                </p>
              </div>
            )}
          </div>

          {/* Filter Buttons - Right Side Column */}
          <div className="flex flex-col items-end gap-3 shrink-0 sticky top-8 self-start">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-full text-sm font-sans transition-all duration-200 ${
                selectedType === "all"
                  ? "bg-blue-tertiary text-ink-black"
                  : "bg-brown-tertiary/30 text-brown-secondary hover:bg-brown-tertiary/50"
              }`}
            >
              all
            </button>
            {_.map(types, (type) => {
              const TypeIcon = getAdventureIcon(type);
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`group relative px-4 py-2 rounded-full text-sm font-sans transition-all duration-200 flex items-center gap-2 ${
                    selectedType === type
                      ? "bg-blue-tertiary text-ink-black"
                      : "bg-brown-tertiary/30 text-brown-secondary hover:bg-brown-tertiary/50"
                  }`}
                >
                  <TypeIcon size="sm" className="flex-shrink-0" />
                  <span className="relative">
                    <span className="group-hover:opacity-0 transition-opacity duration-200 inline-block whitespace-nowrap">
                      {_.lowerCase(type)}
                    </span>
                    <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {getAdventureTypeChinese(type)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footnote Section */}
      <div className="px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-brown-tertiary pt-6">
            <p className="text-brown-secondary text-sm leading-relaxed text-center italic">
              the outdoors has pushed me to grow in countless ways, and for that
              i'll be forever grateful, but i do want to acknowledge the
              complicated hypocrisy in the activities i partake in and am
              continuously learning in this intersection of culture, science,
              and myself
            </p>
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
