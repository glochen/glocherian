import { useState, useEffect } from "react";
import _ from "lodash";

const CLIENT_ID = "cc36288f5a9cd0f4cde3b644f680e5c44ad7bb5b34af63ab34a053c8f36fab43";
const USERNAME = "glochen";

interface TraktItem {
  title: string;
  year?: number;
}

interface TraktWatchlistEntry {
  show?: TraktItem;
  movie?: TraktItem;
}

async function trakt(path: string) {
  const res = await fetch(`https://api.trakt.tv${path}`, {
    headers: {
      "Content-Type": "application/json",
      "trakt-api-key": CLIENT_ID,
      "trakt-api-version": "2",
    },
  });

  if (res.status === 204 || res.status === 404) return null;
  if (!res.ok) throw new Error(`Trakt API error: ${res.status} ${res.statusText}`);

  const text = await res.text();
  if (!text || _.trim(text) === "") return null;

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Failed to parse Trakt API response: ${text.substring(0, 100)}`);
  }
}

export function WantToWatchColumn() {
  const [watchlist, setWatchlist] = useState<TraktWatchlistEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const watchlistData = await trakt(`/users/${USERNAME}/watchlist?extended=full`);
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

  const uniqueWatchlist = _.take(
    _.uniqBy(watchlist, (entry) => {
      const item = entry.show || entry.movie;
      return _.toLower(item?.title || "");
    }),
    10
  );

  return (
    <div className="content-card-border text-brown-tertiary p-6">
      <div className="mb-5">
        <h3 className="text-ink-black text-lg font-sans">want to watch next</h3>
      </div>

      <div className="space-y-3">
        {_.map(uniqueWatchlist, (entry, index) => {
          const item = entry.show || entry.movie;
          if (!item) return null;

          return (
            <div
              key={`${item.title}-${index}`}
              className="rounded-lg px-3 py-2.5 bg-paper-white/30"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-ink-black text-sm font-sans leading-tight">
                  {_.toLower(item.title)}
                </p>
                <span className="text-[11px] font-sans text-brown-secondary tracking-wide">
                  {entry.show ? "tv show" : "movie"}
                  {item.year ? ` · ${item.year}` : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

