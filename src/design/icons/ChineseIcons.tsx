import React from 'react';
import { BaseIcon } from './BaseIcon';
import { IconProps, iconSizes } from './types';

// Helper function to create icon components
const createIcon = (name: string, alt: string) => {
  return ({ size = 'md', ...props }: IconProps) => {
    const folder = iconSizes[size].folder;
    return <BaseIcon src={`${process.env.PUBLIC_URL}/${folder}/chinese/png/${name}.png`} alt={alt} size={size} {...props} />;
  };
};

// Chinese Icons
export const Bamboo = createIcon('bamboo', 'bamboo');
export const Bonsai = createIcon('bonsai', 'bonsai');
export const Calendar = createIcon('calendar', 'calendar');
export const Calligraphy = createIcon('calligraphy', 'calligraphy');
export const ChineseCoin = createIcon('chinese-coin', 'chinese coin');
export const Dumpling = createIcon('dumpling', 'dumpling');
export const Dumpling1 = createIcon('dumpling-1', 'dumpling');
export const Fish = createIcon('fish', 'fish');
export const ForbiddenCity = createIcon('forbidden-city', 'forbidden city');
export const GreatWall = createIcon('great-wall-of-china', 'great wall');
export const House = createIcon('house', 'house');
export const Knot = createIcon('knot', 'knot');
export const Lantern = createIcon('lantern', 'lantern');
export const Lotus = createIcon('lotus', 'lotus');
export const Noodles = createIcon('noodles', 'noodles');
export const Pagoda = createIcon('pagoda', 'pagoda');
export const Rice = createIcon('rice', 'rice');
export const Teapot = createIcon('teapot', 'teapot');
export const Teapot1 = createIcon('teapot-1', 'teapot');
export const Teapot2 = createIcon('teapot-2', 'teapot');
export const Wealth = createIcon('wealth', 'wealth');
export const YinYang = createIcon('yin-yang', 'yin yang');