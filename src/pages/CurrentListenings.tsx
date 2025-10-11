import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { ListenContentCard } from "../components/ContentCards/ListenContentCard";
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
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Music size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
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

          <div className="space-y-6">
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

          <div className="space-y-6">
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
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
