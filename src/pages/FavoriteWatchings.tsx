import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { WatchingCarousel } from "../components/WatchingCarousel";
import {
  getFavoriteWatchings,
  WatchingType,
  Provider,
  providerText,
} from "../data/watchings";
import { VideoCamera } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function FavoriteWatchings() {
  const favoriteWatchings = getFavoriteWatchings();

  // Group by provider and type
  const groupedWatchings = _.groupBy(
    favoriteWatchings,
    (item) => `${item.provider}-${item.type}`
  );

  // Create carousel sections
  const carouselSections = _.map(groupedWatchings, (items, key) => {
    const [provider, type] = key.split("-");
    const providerName = providerText[provider as Provider];

    const typeText = {
      [WatchingType.Movie]: "movies",
      [WatchingType.TVShow]: "tv shows",
    }[type as WatchingType];

    return {
      title: `${providerName} ${typeText}`,
      items: _.sortBy(items, "title"),
    };
  });

  // Sort sections by provider name
  const sortedSections = _.sortBy(carouselSections, (section) =>
    _.lowerCase(section.title)
  );

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <VideoCamera size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        {!_.isEmpty(sortedSections) && (
          <div className="space-y-8">
            {_.map(sortedSections, (section, index) => (
              <WatchingCarousel
                key={`${section.title}-${index}`}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        )}
      </div>
    </VerticalNavPageLayout>
  );
}
