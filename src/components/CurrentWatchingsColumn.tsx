import { useState, useEffect } from "react";
import { WatchingType } from "../data/watchings";
import _ from "lodash";

const CLIENT_ID = "cc36288f5a9cd0f4cde3b644f680e5c44ad7bb5b34af63ab34a053c8f36fab43";
const USERNAME = "glochen";

interface TraktItem {
  title: string;
}

interface TraktWatching {
  show?: TraktItem;
  movie?: TraktItem;
}

interface TraktProgressEntry {
  show?: TraktItem;
  progress?: number;
  aired?: number;
  completed?: number;
}

interface DisplayWatchingItem {
  item: TraktItem;
  type: WatchingType;
}

function dedupeAndLimitItems(items: DisplayWatchingItem[]): DisplayWatchingItem[] {
  return _.take(
    _.uniqBy(items, (entry) => _.toLower(entry.item.title || "")),
    10
  );
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

export function CurrentWatchingsColumn() {
  const [watching, setWatching] = useState<TraktWatching | null>(null);
  const [progress, setProgress] = useState<TraktProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let watchingData = null;
        
        try {
          watchingData = await trakt(`/users/${USERNAME}/watching?extended=full`);
          if (watchingData && (watchingData.show || watchingData.movie)) {
            setWatching(watchingData);
          }
        } catch (err) {
          // Failed to fetch watching data
        }

        try {
          const progressData = await trakt(`/users/${USERNAME}/progress/watched/shows?extended=full`);
          if (_.isArray(progressData)) {
            // Filter to only shows that aren't 100% complete
            const inProgress = _.filter(progressData, (entry) => {
              // Show is "currently watching" if progress is not 100%
              // Check if completed < aired, or if progress percentage < 100
              if (entry.completed !== undefined && entry.aired !== undefined) {
                return entry.completed < entry.aired;
              }
              if (entry.progress !== undefined) {
                return entry.progress < 100;
              }
              // If we can't determine, include it (safer to show than hide)
              return true;
            });
            setProgress(inProgress);
          } else {
            setProgress([]);
          }
        } catch (err) {
          // Progress endpoint requires OAuth, skip if unauthorized
          setProgress([]);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="content-card-border text-blue-primary p-6">
        <p className="text-ink-black font-sans text-sm">Loading...</p>
      </div>
    );
  }


  const hasWatching = watching?.show || watching?.movie;
  const hasProgress = progress.length > 0;
  const activeItem = watching?.show || watching?.movie;
  const activeType =
    watching?.show ? WatchingType.TVShow : WatchingType.Movie;

  if (!hasWatching && !hasProgress) {
    return (
      <div className="content-card-border text-blue-primary p-6">
        <p className="text-ink-black font-sans text-sm">No currently watching items</p>
      </div>
    );
  }

  const combinedItems = dedupeAndLimitItems([
    ...(hasWatching
      ? [
          {
            item: activeItem!,
            type: activeType,
          },
        ]
      : []),
    ..._.compact(
      _.map(progress, (entry) => {
        if (!entry.show) return null;
        return {
          item: entry.show,
          type: WatchingType.TVShow,
        };
      })
    ),
  ]);

  return (
    <div className="content-card-border text-blue-primary p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-ink-black text-lg font-sans font-semibold">currently watching</h3>
        <span className="text-blue-primary font-sans text-xs tracking-wide">
          {combinedItems.length}/10
        </span>
      </div>

      <div className="space-y-3">
        {_.map(combinedItems, (entry, index) => (
          <div
            key={`${entry.item.title}-${index}`}
            className="rounded-lg px-3 py-2.5 bg-paper-white border border-ink-black/25 shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          >
            <p className="text-ink-black text-base font-sans font-semibold leading-tight">
              {_.toLower(entry.item.title)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

