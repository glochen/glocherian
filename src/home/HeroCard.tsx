import React from 'react';
import { IconProps } from '../design/icons/types';

interface HeroCardProps {
  icon: React.ComponentType<IconProps>;
  englishDescription: string;
  chineseDescription: string;
}

export function HeroCard({ icon: Icon, englishDescription, chineseDescription }: HeroCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-1 rounded-xl border border-brown-tertiary/20 hover:bg-brown-tertiary/20 transition-all duration-300 hover:scale-105">
      <div className="mb-4">
        <Icon size="lg" />
      </div>
      <div className="text-ink-black text-md font-lxgw-wenkai-tc">{chineseDescription}</div>
      <div className="text-blue-primary text-md font-sans">{englishDescription}</div>
    </div>
  );
}
