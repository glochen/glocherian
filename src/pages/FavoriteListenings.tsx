import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { ListeningColumn } from "../components/ListeningColumn";
import {
  getFavoriteListenings,
  ListeningType,
  typeText,
} from "../data/listenings";
import { Record } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function FavoriteListenings() {
  const favoriteListenings = getFavoriteListenings();

  // Separate songs and podcasts
  const songs = _.filter(
    favoriteListenings,
    (item) => item.type === ListeningType.Song
  );
  const podcasts = _.filter(
    favoriteListenings,
    (item) => item.type === ListeningType.Podcast
  );

  // Sort by name
  const sortedSongs = _.sortBy(songs, "name");
  const sortedPodcasts = _.sortBy(podcasts, "name");

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <Record size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12 text-brown-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ListeningColumn
            title={typeText[ListeningType.Song]}
            items={sortedSongs}
          />
          <ListeningColumn
            title={typeText[ListeningType.Podcast]}
            items={sortedPodcasts}
          />
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
