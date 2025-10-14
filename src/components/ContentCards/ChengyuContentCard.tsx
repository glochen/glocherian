import _ from "lodash";

interface ChengyuContentCardProps {
  chengyu: string;
  literalTranslation: string[];
  meaning: string;
  className?: string;
}

export function ChengyuContentCard({
  chengyu,
  literalTranslation,
  meaning,
  className = "",
}: ChengyuContentCardProps) {
  return (
    <div className={`p-12 border border-brown-tertiary rounded-lg ${className}`}>
      {/* Literal translation */}
      <div className="mb-4 flex justify-center gap-2">
        {_.map(literalTranslation, (word, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-lxgw-wenkai-tc text-brown-primary">
              {chengyu[index]}
            </div>
            <div className="text-lg text-brown-secondary mt-1">{word}</div>
          </div>
        ))}
      </div>

      {/* Meaning */}
      <div className="mb-4 text-sm text-ink-black justify-center items-center">
        {meaning}
      </div>
    </div>
  );
}
