import React from 'react';
import { IconProps } from '../design/icons/types';

interface HeroCardProps {
  icon: React.ComponentType<IconProps>;
  englishDescription: string;
  chineseDescription: string;
  onClick?: () => void;
}

export function HeroCard({ icon: Icon, englishDescription, chineseDescription, onClick }: HeroCardProps) {
  return (
    <div
      className={`flex items-center justify-between py-4 border-b border-sage-light/20 transition-colors duration-200 hover:border-sage-light/40 ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Icon size="sm" />
        <div className="text-sage-light text-base font-lxgw-wenkai-tc">{chineseDescription}</div>
      </div>
      <div className="text-moss text-[11px] tracking-[0.16em] uppercase font-sans font-medium text-right">
        {englishDescription}
      </div>
    </div>
  );
}
