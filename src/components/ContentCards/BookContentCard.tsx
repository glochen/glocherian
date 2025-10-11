import { ReadingStatus, statusText } from "../../data/books";
import { H3 } from "../../design/Typography";
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
      border: "content-card-border text-blue-primary",
      bg: "",
      dot: "bg-blue-primary",
      text: "text-blue-primary",
    },
    [ReadingStatus.RecentlyCompleted]: {
      border: "content-card-border text-brown-primary",
      bg: "",
      dot: "bg-brown-primary",
      text: "text-brown-primary",
    },
    [ReadingStatus.Planned]: {
      border: "content-card-border text-brown-tertiary",
      bg: "",
      dot: "bg-brown-tertiary",
      text: "text-brown-tertiary",
    },
    [ReadingStatus.Favorite]: {
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
        <span className={`text-xs font-sans tracking-wide ${currentStyle.text}`}>
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
