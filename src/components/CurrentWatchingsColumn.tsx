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

export function CurrentWatchingsColumn() {
  const [watching, setWatching] = useState<TraktWatching | null>(null);
  const [progress, setProgress] = useState<TraktProgressEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        let watchingData = null;
        
        try {
          watchingData = await trakt<TraktWatching | null>(`/users/${TRAKT_USERNAME}/watching?extended=full`);
          if (watchingData && (watchingData.show || watchingData.movie)) {
            setWatching(watchingData);
          }
        } catch (err) {
          // Failed to fetch watching data
        }

        try {
          const progressData = await trakt<TraktProgressEntry[]>(`/users/${TRAKT_USERNAME}/progress/watched/shows?extended=full`);
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
          // Try using history endpoint as fallback to find recently watched shows
          try {
            const historyData = await trakt<TraktProgressEntry[]>(`/users/${TRAKT_USERNAME}/history/shows?limit=10&extended=full`);
            if (_.isArray(historyData)) {
              // Deduplicate and use recent shows as "currently watching"
              const seenShows = new Set<string>();
              const recentShows = _.filter(historyData, (entry) => {
                if (entry.show) {
                  const showTitle = entry.show.title;
                  if (seenShows.has(showTitle)) {
                    return false;
                  }
                  seenShows.add(showTitle);
                  return true;
                }
                return false;
              });
              // Convert history entries to progress-like format
              const progressLike = _.map(recentShows.slice(0, 5), (entry) => ({
                show: entry.show,
              }));
              setProgress(progressLike);
            }
          } catch (historyErr) {
            // History endpoint also failed
          }
        }
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
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


  const statusStyles = {
    border: "content-card-border text-blue-primary",
    dot: "bg-blue-primary",
    text: "text-blue-primary",
  };

  const hasWatching = watching?.show || watching?.movie;
  const hasProgress = progress.length > 0;

  if (!hasWatching && !hasProgress) {
    return (
      <div className="content-card-border text-blue-primary p-6">
        <p className="text-ink-black font-sans text-sm">No currently watching items</p>
      </div>
    );
  }

  return (
    <>
      {/* Active watching session (if any) */}
      {hasWatching
        ? renderItemCard(
            watching.show || watching.movie,
            watching.show ? WatchingType.TVShow : WatchingType.Movie,
            "currently watching",
            statusStyles
          )
        : null}
      {/* Shows in progress (not 100% complete) */}
      {_.map(progress.slice(0, 5), (entry, index) => {
        if (!entry.show) return null;
        return (
          <div key={`progress-${index}`}>
            {renderItemCard(entry.show, WatchingType.TVShow, "currently watching", statusStyles)}
          </div>
        );
      })}
    </>
  );
}

