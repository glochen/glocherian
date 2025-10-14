import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { AdventureColumn } from "../components/AdventureColumn";
import {
  favoriteAdventures,
  getAdventuresByType,
  getAdventureTypes,
} from "../data/adventures";
import { Bear } from "../design/icons/OutdoorsIcons";
import _ from "lodash";

export function FavoriteAdventures() {
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

  const adventuresByType = getAdventuresByType(sortedAdventures);
  const types = getAdventureTypes(sortedAdventures);

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

      <div className="flex-grow shrink-0 px-8 pb-8">
        {!_.isEmpty(types) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {_.map(types, (type) => (
              <AdventureColumn
                key={type}
                type={type}
                adventures={adventuresByType[type]}
              />
            ))}
          </div>
        )}
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
