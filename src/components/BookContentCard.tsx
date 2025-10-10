import { ReadingStatus, statusText } from "../data/books";
import { H3 } from "../design/Typography";
import _ from "lodash";

interface BookContentCardProps {
  title: string;
  author?: string;
  description?: string;
  status?: ReadingStatus;
  className?: string;
}

export function BookContentCard({
  title,
  author,
  description,
  status = ReadingStatus.Reading,
  className = "",
}: BookContentCardProps) {
  const statusStyles = {
    [ReadingStatus.Reading]: {
      border: "border-l-4 border-l-blue-primary",
      bg: "bg-gradient-to-r from-blue-primary/5 to-transparent",
      dot: "bg-blue-primary",
      text: "text-blue-primary",
    },
    [ReadingStatus.RecentlyCompleted]: {
      border: "border-l-4 border-l-brown-primary",
      bg: "bg-gradient-to-r from-brown-primary/5 to-transparent",
      dot: "bg-brown-primary",
      text: "text-brown-primary",
    },
    [ReadingStatus.Planned]: {
      border: "border-l-4 border-l-brown-tertiary",
      bg: "bg-gradient-to-r from-brown-tertiary/5 to-transparent",
      dot: "bg-brown-tertiary",
      text: "text-brown-tertiary",
    },
    [ReadingStatus.Favorite]: {
      border: "border-l-4 border-l-brown-secondary",
      bg: "bg-gradient-to-r from-brown-secondary/5 to-transparent",
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
        <div className={`w-2 h-2 rounded-full ${currentStyle.dot}`}></div>
        <span className={`text-xs font-sans uppercase tracking-wide ${currentStyle.text}`}>
          {statusText[status as ReadingStatus]}
        </span>
      </div>

      {/* Title */}
      <H3 color="ink-black" className="mb-3 leading-tight">
        {title}
      </H3>

      {/* Author */}
      {author && (
        <p className="text-ink-black font-sans text-sm mb-3">
          {author}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-ink-black font-sans text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
