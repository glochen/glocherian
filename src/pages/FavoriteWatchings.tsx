import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { useTraktFavorites } from "../components/TraktFavoritesColumn";
import { WatchingType } from "../data/watchings";
import { VideoCamera } from "../design/icons/GeneralIcons";
import _ from "lodash";

export function FavoriteWatchings() {
  const { favorites: traktFavorites, loading } = useTraktFavorites();

  const movies = _.sortBy(
    _.uniqBy(
      _.filter(traktFavorites, (item) => item.type === WatchingType.Movie),
      (item) => _.toLower(item.title)
    ),
    (item) => _.toLower(item.title)
  );
  const tvShows = _.sortBy(
    _.uniqBy(
      _.filter(traktFavorites, (item) => item.type === WatchingType.TVShow),
      (item) => _.toLower(item.title)
    ),
    (item) => _.toLower(item.title)
  );

  return (
    <VerticalNavPageLayout>
      <div className="py-12 px-8">
        <div className="flex justify-center items-center">
          <VideoCamera size="md" />
        </div>
      </div>

      <div className="flex-grow shrink-0 px-8 pb-12 text-brown-primary">
        {loading ? (
          <div className="text-center py-8">
            <p className="text-ink-black font-sans text-sm">Loading favorites...</p>
          </div>
        ) : !_.isEmpty(movies) || !_.isEmpty(tvShows) ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="content-card-border text-blue-primary py-2 pr-6">
              <div className="mb-4">
                <h2 className="text-ink-black text-lg font-sans">movies</h2>
              </div>
              {movies.length > 0 ? (
                <ul className="space-y-2">
                  {movies.map((item, index) => (
                    <li
                      key={`${item.title}-${index}`}
                      className="text-ink-black text-sm font-sans leading-tight rounded-lg px-3 py-2.5 bg-paper-white/30"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span>{item.title}</span>
                        {item.year ? (
                          <span className="text-[11px] font-sans text-brown-secondary tracking-wide">
                            {item.year}
                          </span>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-ink-black font-sans text-sm">No movies found</p>
              )}
            </section>

            <section className="content-card-border text-brown-primary py-2 pr-6">
              <div className="mb-4">
                <h2 className="text-ink-black text-lg font-sans">tv shows</h2>
              </div>
              {tvShows.length > 0 ? (
                <ul className="space-y-2">
                  {tvShows.map((item, index) => (
                    <li
                      key={`${item.title}-${index}`}
                      className="text-ink-black text-sm font-sans leading-tight rounded-lg px-3 py-2.5 bg-paper-white/30"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span>{item.title}</span>
                        {item.year ? (
                          <span className="text-[11px] font-sans text-brown-secondary tracking-wide">
                            {item.year}
                          </span>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-ink-black font-sans text-sm">No tv shows found</p>
              )}
            </section>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-ink-black font-sans text-sm">No favorites found</p>
          </div>
        )}
      </div>
    </VerticalNavPageLayout>
  );
}
