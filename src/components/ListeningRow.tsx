import {
  ListeningItem,
  MusicGenre,
  musicGenreText,
  PodcastGenre,
  podcastGenreText,
} from "../data/listenings";

interface ListeningRowProps {
  item: ListeningItem;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export function ListeningRow({
  item,
  isExpanded,
  onHover,
  onLeave,
}: ListeningRowProps) {
  const genreText = item.genre
    ? podcastGenreText[item.genre as PodcastGenre] ??
      musicGenreText[item.genre as MusicGenre]
    : null;

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${
        isExpanded ? "h-32" : "h-16"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`h-16 rounded-md p-3 transition-all duration-300 ${
          isExpanded ? "bg-paper-white" : "bg-brown-tertiary/20"
        }`}
      >
        {!isExpanded && (
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-ink-black leading-tight truncate">
                {item.name}
              </h4>
              <span className="text-brown-secondary">•</span>
              <p className="text-xs text-brown-primary truncate">
                {item.artistOrPodcast}
              </p>
            </div>
            {genreText && (
              <p className="text-xs text-brown-secondary">{genreText}</p>
            )}
          </div>
        )}
      </div>

      {isExpanded && item.description && (
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className={`content-card-border text-brown-secondary p-4`}>
            <div className="mb-2">
              <div className="flex flex-row items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-ink-black leading-tight">
                    {item.name}
                  </h4>
                  <span className="text-brown-secondary">•</span>
                  <p className="text-xs text-brown-primary">
                    {item.artistOrPodcast}
                  </p>
                </div>
                {genreText && (
                  <p className="text-xs text-brown-secondary">{genreText}</p>
                )}
              </div>
            </div>
            <p className="text-ink-black font-sans text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
