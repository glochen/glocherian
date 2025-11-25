import { TeaItem, TeaType } from "../data/teas";
import _ from "lodash";

interface TeaCardProps {
  tea: TeaItem;
}

export function TeaCard({ tea }: TeaCardProps) {
  const cardContent = (
    <>
      {/* Tea Type Badge */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`px-3 py-1.5 text-xs font-sans font-medium rounded-full border bg-brown-tertiary/40 text-brown-secondary border-brown-tertiary tracking-wide`}
        >
          {_.lowerCase(tea.type)}
        </span>
      </div>

      {/* Tea Name */}
      <h3 className="text-ink-black text-lg font-sans font-semibold leading-tight">
        {tea.name}
      </h3>

      {/* Distributor */}
      <div className="flex items-center gap-2">
        <span className="text-brown-secondary text-sm font-sans font-medium">
          {tea.distributor}
        </span>
      </div>

      {/* Origin */}
      {tea.origin && (
        <div className="flex items-center gap-2 pt-1 border-t border-brown-tertiary/30">
          <span className="text-brown-primary text-xs font-sans italic">
            {tea.origin}
          </span>
        </div>
      )}

      {/* Description */}
      {tea.description && (
        <p className="text-ink-black text-sm font-sans leading-relaxed mt-auto pt-2">
          {tea.description}
        </p>
      )}
    </>
  );

  const baseClasses = "content-card-border text-brown-primary bg-paper-white rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 h-full";

  if (tea.url) {
    return (
      <a
        href={tea.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} cursor-pointer`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={baseClasses}>
      {cardContent}
    </div>
  );
}

