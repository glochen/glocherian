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
    <div className={`content-card-border text-brown-secondary bg-paper-white rounded-lg p-4 w-80 ${className}`}>
      {/* Description */}
      <p className="text-brown-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
