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
          className={`text-[11px] font-sans text-moss tracking-[0.14em] uppercase`}
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
        <span className="text-moss text-sm font-sans font-medium">
          {tea.distributor}
        </span>
      </div>

      {/* Origin */}
      {tea.origin && (
        <div className="flex items-center gap-2 pt-2 border-t border-moss/30">
          <span className="text-moss text-xs font-sans italic">
            {tea.origin}
          </span>
        </div>
      )}

      {/* Description */}
      {tea.description && (
        <p className="text-ink-black/85 text-sm font-sans leading-relaxed mt-auto pt-2">
          {tea.description}
        </p>
      )}
    </>
  );

  const baseClasses =
    "text-ink-black p-4 flex flex-col gap-4 h-full border-b border-moss/30";

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

