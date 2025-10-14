import _ from "lodash";

interface AdventureContentCardProps {
  description: string;
  className?: string;
}

export function AdventureContentCard({
  description,
  className = "",
}: AdventureContentCardProps) {  
  return (
    <div className={`content-card-border text-ink-black bg-paper-white rounded-lg p-4 w-80 ${className}`}>
      {/* Description */}
      <p className="text-ink-black text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
