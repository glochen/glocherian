import { useState, useEffect } from "react";
import { WatchingType, typeText } from "../data/watchings";
import { H3 } from "../design/Typography";
import _ from "lodash";

const CLIENT_ID = "cc36288f5a9cd0f4cde3b644f680e5c44ad7bb5b34af63ab34a053c8f36fab43";
const USERNAME = "glochen";

interface TraktItem {
  title: string;
  network?: string;
  genres?: string[];
  overview?: string;
}

interface TraktWatching {
  show?: TraktItem;
  movie?: TraktItem;
}

interface TraktHistoryEntry {
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

export function RecentlyCompletedWatchingsColumn() {
  const [watching, setWatching] = useState<TraktWatching | null>(null);
  const [history, setHistory] = useState<TraktHistoryEntry[]>([]);
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

        if (!watchingData || (!watchingData.show && !watchingData.movie)) {
          try {
            const historyData = await trakt(`/users/${USERNAME}/history?limit=5&extended=full`);
            setHistory(_.isArray(historyData) ? historyData : []);
          } catch (err) {
            setHistory([]);
          }
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading || watching || history.length === 0) return null;

  const seenShows = new Set<string>();
  const deduplicatedHistory = _.filter(history, (entry) => {
    if (entry.show) {
      const showTitle = entry.show.title;
      if (seenShows.has(showTitle)) {
        return false;
      }
      seenShows.add(showTitle);
      return true;
    }
    return true;
  });

  const statusStyles = {
    border: "content-card-border text-brown-primary",
    dot: "bg-brown-primary",
    text: "text-brown-primary",
  };

  return (
    <>
      {_.map(deduplicatedHistory, (entry, index) => {
        const item = entry.show || entry.movie;
        if (!item) return null;
        return (
          <div key={`history-${index}`}>
            {renderItemCard(
              item,
              entry.show ? WatchingType.TVShow : WatchingType.Movie,
              "recently watched",
              statusStyles
            )}
          </div>
        );
      })}
    </>
  );
}

