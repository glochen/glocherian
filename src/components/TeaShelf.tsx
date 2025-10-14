import { TeaItem, TeaType } from "../data/teas";
import { TeaContentCard } from "./ContentCards/TeaContentCard";
import _ from "lodash";
import { useState } from "react";

interface TeaShelfProps {
  type: TeaType;
  teas: TeaItem[];
}

export function TeaShelf({ type, teas }: TeaShelfProps) {
  const [hoveredTeaIndex, setHoveredTeaIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="h-px bg-brown-tertiary flex-1"></div>
        <h2 className="text-brown-primary text-lg tracking-wider">
          {_.lowerCase(type)}
        </h2>
        <div className="h-px bg-brown-tertiary flex-1"></div>
      </div>

      <div className="flex flex-row justify-center gap-6 items-baseline group/teashelf">
        {_.map(teas, (tea, index) => (
          <TeaCup
            key={tea.name}
            tea={tea}
            index={index}
            isHovered={hoveredTeaIndex === index}
            onHover={() => setHoveredTeaIndex(index)}
            onLeave={() => setHoveredTeaIndex(null)}
            hoveredTeaIndex={hoveredTeaIndex}
          />
        ))}
      </div>
    </div>
  );
}

interface TeaCupProps {
  tea: TeaItem;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  hoveredTeaIndex: number | null;
}

const TeaCup: React.FC<TeaCupProps> = ({
  tea,
  isHovered,
  onHover,
  onLeave,
}) => {
  return (
    <div 
      className="relative flex flex-col gap-4 items-center cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Tea name and distributor */}
      <div className="space-y-2 text-center mb-2 transition-all duration-300">
        <div className="text-brown-primary text-sm font-medium tracking-wide">
          {tea.name}
        </div>
        <div className="text-brown-secondary text-xs tracking-wider">
          {tea.distributor}
        </div>
      </div>

      {/* Horizontal brush stroke */}
      <div className="brush-stroke-line w-16 h-0.5 transition-all duration-300"></div>

      {/* Hover details */}
      {isHovered && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300">
          <TeaContentCard
            name={tea.name}
            distributor={tea.distributor}
            type={tea.type}
            description={tea.description}
            origin={tea.origin}
            className="min-w-80 max-w-96"
          />
        </div>
      )}
    </div>
  );
};
