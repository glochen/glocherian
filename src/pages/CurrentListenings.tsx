import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { ListenContentCard } from "../components/ListenContentCard";
import { getListeningsByStatus, ListeningStatus } from "../data/listenings";
import { Music } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function CurrentListenings() {
  const currentlyListening = getListeningsByStatus(ListeningStatus.Listening);
  const completedListenings = getListeningsByStatus(
    ListeningStatus.RecentlyCompleted
  );
  const plannedListenings = getListeningsByStatus(ListeningStatus.Planned);

  return (
    <VerticalNavPageLayout>
      {/* Listen Icons Header */}
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Music size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="space-y-16">
          {/* Currently Listening Section */}
          {!_.isEmpty(currentlyListening) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_.map(currentlyListening, (listening) => (
                <ListenContentCard
                  key={listening.name}
                  name={listening.name}
                  artistOrPodcast={listening.artistOrPodcast}
                  type={listening.type}
                  description={listening.description}
                  status={listening.status}
                  genre={listening.genre}
                />
              ))}
            </div>
          )}

          {/* Recently Completed Section */}
          {!_.isEmpty(completedListenings) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_.map(completedListenings, (listening) => (
                <ListenContentCard
                  key={listening.name}
                  name={listening.name}
                  artistOrPodcast={listening.artistOrPodcast}
                  type={listening.type}
                  description={listening.description}
                  status={listening.status}
                  genre={listening.genre}
                />
              ))}
            </div>
          )}

          {/* Planned Section */}
          {!_.isEmpty(plannedListenings) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_.map(plannedListenings, (listening) => (
                <ListenContentCard
                  key={listening.name}
                  name={listening.name}
                  artistOrPodcast={listening.artistOrPodcast}
                  type={listening.type}
                  description={listening.description}
                  status={listening.status}
                  genre={listening.genre}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
