import { 
  ListeningStatus, 
  statusText, 
  ListeningType, 
  typeText, 
  MusicGenre, 
  musicGenreText, 
  PodcastGenre, 
  podcastGenreText 
} from "../../data/listenings";
import { H3 } from "../../design/Typography";
import _ from "lodash";

interface ListenContentCardProps {
  name: string;
  artistOrPodcast: string;
  type: ListeningType;
  status?: ListeningStatus;
  description?: string;
  genre?: MusicGenre | PodcastGenre;
  className?: string;
}

export function ListenContentCard({
  name,
  artistOrPodcast,
  type,
  status = ListeningStatus.Listening,
  description,
  genre,
  className = "",
}: ListenContentCardProps) {
  const statusStyles = {
    [ListeningStatus.Listening]: {
      border: "content-card-border text-blue-primary",
      bg: "",
      dot: "bg-blue-primary",
      text: "text-blue-primary",
    },
    [ListeningStatus.RecentlyCompleted]: {
      border: "content-card-border text-brown-primary",
      bg: "",
      dot: "bg-brown-primary",
      text: "text-brown-primary",
    },
    [ListeningStatus.Planned]: {
      border: "content-card-border text-brown-tertiary",
      bg: "",
      dot: "bg-brown-tertiary",
      text: "text-brown-tertiary",
    },
  };

  const currentStyle = statusStyles[status];

  return (
    <div 
      className={`${currentStyle.border} ${currentStyle.bg} p-6 ${className}`}
    >
      {/* Status Indicator */}
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-1.5 h-1.5 rounded-full ${currentStyle.dot}`}></div>
        <span className={`text-xs font-sans tracking-wide ${currentStyle.text}`}>
          {statusText[status as ListeningStatus]}
        </span>
      </div>

      {/* Name */}
      <H3 color="ink-black" className="mb-3 leading-tight">
        {name}
      </H3>

      {/* Artist/Host and Type */}
      <div className="flex items-center gap-2 mb-3">
        <p className="text-ink-black font-sans text-sm">
          {artistOrPodcast}
        </p>
        <span className="text-ink-black/60">•</span>
        <p className="text-ink-black font-sans text-sm">
          {typeText[type]}
        </p>
        {genre && (
          <>
            <span className="text-ink-black/60">•</span>
            <p className="text-ink-black font-sans text-sm">
              {podcastGenreText[genre as PodcastGenre] ?? musicGenreText[genre as MusicGenre]}
            </p>
          </>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-ink-black font-sans text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
