import {
  WatchingStatus,
  statusText,
  WatchingType,
  typeText,
  Provider,
  providerText,
  WatchingGenre,
} from "../../data/watchings";
import { H3 } from "../../design/Typography";
import _ from "lodash";

interface WatchContentCardProps {
  title: string;
  type: WatchingType;
  provider: Provider;
  description?: string;
  status?: WatchingStatus;
  genre?: WatchingGenre;
  className?: string;
}

export function WatchContentCard({
  title,
  type,
  provider,
  description,
  status = WatchingStatus.Watching,
  genre,
  className = "",
}: WatchContentCardProps) {
  const statusStyles = {
    [WatchingStatus.Watching]: {
      border: "content-card-border text-blue-primary",
      bg: "",
      dot: "bg-blue-primary",
      text: "text-blue-primary",
    },
    [WatchingStatus.RecentlyCompleted]: {
      border: "content-card-border text-brown-primary",
      bg: "",
      dot: "bg-brown-primary",
      text: "text-brown-primary",
    },
    [WatchingStatus.Planned]: {
      border: "content-card-border text-brown-tertiary",
      bg: "",
      dot: "bg-brown-tertiary",
      text: "text-brown-tertiary",
    },
    [WatchingStatus.Favorite]: {
      border: "content-card-border text-brown-secondary",
      bg: "",
      dot: "bg-brown-secondary",
      text: "text-brown-secondary",
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
        <span
          className={`text-xs font-sans tracking-wide ${currentStyle.text}`}
        >
          {statusText[status as WatchingStatus]}
        </span>
      </div>

      {/* Title */}
      <H3 color="ink-black" className="mb-3 leading-tight">
        {title}
      </H3>

      {/* Type, Provider, and Genre */}
      <div className="flex items-center gap-2 mb-3">
        <p className="text-ink-black font-sans text-sm">{typeText[type]}</p>
        <span className="text-ink-black/60">•</span>
        <p className="text-ink-black font-sans text-sm">
          {providerText[provider]}
        </p>
        {genre && (
          <>
            <span className="text-ink-black/60">•</span>
            <p className="text-ink-black font-sans text-sm">{genre}</p>
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
