import { useState, useEffect } from "react";
import { WatchingType, typeText } from "../data/watchings";
import { H3 } from "../design/Typography";
import _ from "lodash";
import { trakt, TRAKT_USERNAME } from "../api/trakt";

interface TraktItem {
  title: string;
  network?: string;
  genres?: string[];
  overview?: string;
}

interface TraktWatchlistEntry {
  show?: TraktItem;
  movie?: TraktItem;
}

function renderItemCard(
  item: TraktItem | undefined,
  type: WatchingType,
  statusText: string,
  statusStyles: { border: string; dot: string; text: string }
) {
  if (!item) return null;

  return (
    <div className={`${statusStyles.border} p-6`}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-1.5 h-1.5 rounded-full ${statusStyles.dot}`}></div>
        <span className={`text-xs font-sans tracking-wide ${statusStyles.text}`}>
          {statusText}
        </span>
      </div>
      <H3 color="ink-black" className="mb-3 leading-tight">
        {item.title ? _.toLower(item.title) : ""}
      </H3>
      <div className="flex items-center gap-2 mb-3">
        <p className="text-ink-black font-sans text-sm">{typeText[type]}</p>
        {item.network && (
          <>
            <span className="text-ink-black/60">•</span>
            <p className="text-ink-black font-sans text-sm">{_.toLower(item.network)}</p>
          </>
        )}
        {item.genres && item.genres.length > 0 && (
          <>
            <span className="text-ink-black/60">•</span>
            <p className="text-ink-black font-sans text-sm">{item.genres[0]}</p>
          </>
        )}
      </div>
      {item.overview && (
        <p className="text-ink-black font-sans text-sm leading-relaxed">
          {_.toLower(item.overview)}
        </p>
      )}
    </div>
  );
}

export function WantToWatchColumn() {
  const [watchlist, setWatchlist] = useState<TraktWatchlistEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const watchlistData = await trakt(`/users/${TRAKT_USERNAME}/watchlist?extended=full`);
        setWatchlist(_.isArray(watchlistData) ? watchlistData : []);
        setLoading(false);
      } catch (err) {
        setWatchlist([]);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return null;

  const statusStyles = {
    border: "content-card-border text-brown-tertiary",
    dot: "bg-brown-tertiary",
    text: "text-brown-tertiary",
  };

  return (
    <>
      {_.map(watchlist.slice(0, 5), (entry, index) => {
        const item = entry.show || entry.movie;
        if (!item) return null;
        return (
          <div key={`watchlist-${index}`}>
            {renderItemCard(
              item,
              entry.show ? WatchingType.TVShow : WatchingType.Movie,
              "want to watch",
              statusStyles
            )}
          </div>
        );
      })}
    </>
  );
}

