import { TeaType } from "../../data/teas";
import _ from "lodash";

interface TeaContentCardProps {
  name: string;
  distributor: string;
  type: TeaType;
  description?: string;
  origin?: string;
  className?: string;
}

export function TeaContentCard({
  description,
  origin,
  className = "",
}: TeaContentCardProps) {
  return (
    <div className={`bg-paper-white rounded-lg p-4 w-80 ${className}`}>
      {/* Origin */}
      {origin && (
        <div className="text-brown-secondary text-sm font-medium mb-2 text-center">
          {origin}
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="text-brown-secondary text-sm leading-relaxed text-center">
          {description}
        </p>
      )}
    </div>
  );
}
