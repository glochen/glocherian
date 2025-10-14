import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { WatchContentCard } from "../components/ContentCards/WatchContentCard";
import { getWatchingsByStatus, WatchingStatus } from "../data/watchings";
import { Film } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function CurrentWatchings() {
  const currentlyWatching = getWatchingsByStatus(WatchingStatus.Watching);
  const completedWatchings = getWatchingsByStatus(
    WatchingStatus.RecentlyCompleted
  );
  const plannedWatchings = getWatchingsByStatus(WatchingStatus.Planned);

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Film size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {_.map(currentlyWatching, (watching) => (
              <WatchContentCard
                key={watching.title}
                title={watching.title}
                type={watching.type}
                provider={watching.provider}
                description={watching.description}
                status={watching.status}
                genre={watching.genre}
              />
            ))}
          </div>

          <div className="space-y-6">
            {_.map(completedWatchings, (watching) => (
              <WatchContentCard
                key={watching.title}
                title={watching.title}
                type={watching.type}
                provider={watching.provider}
                description={watching.description}
                status={watching.status}
                genre={watching.genre}
              />
            ))}
          </div>

          <div className="space-y-6">
            {_.map(plannedWatchings, (watching) => (
              <WatchContentCard
                key={watching.title}
                title={watching.title}
                type={watching.type}
                provider={watching.provider}
                description={watching.description}
                status={watching.status}
                genre={watching.genre}
              />
            ))}
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
