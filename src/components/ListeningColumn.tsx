import { useState } from "react";
import { ListeningItem } from "../data/listenings";
import { ListeningRow } from "./ListeningRow";
import _ from "lodash";

interface ListeningColumnProps {
  title: string;
  items: ListeningItem[];
}

export function ListeningColumn({ title, items }: ListeningColumnProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleItemHover = (index: number) => {
    setExpandedIndex(index);
  };

  const handleItemLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="flex-1">
      <h3 className="text-lg font-medium text-brown-primary mb-4 px-2">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <ListeningRow
            key={`${item.name}-${index}`}
            item={item}
            isExpanded={expandedIndex === index}
            onHover={() => handleItemHover(index)}
            onLeave={handleItemLeave}
          />
        ))}
      </div>
    </div>
  );
}
