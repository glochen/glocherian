import React from 'react';
import { BaseIcon } from './BaseIcon';
import { IconProps, iconSizes } from './types';

// Helper function to create icon components
const createIcon = (name: string, alt: string) => {
  return ({ size = 'md', ...props }: IconProps) => {
    const folder = iconSizes[size].folder;
    return <BaseIcon src={`/${folder}/outdoors/png/${name}.png`} alt={alt} size={size} {...props} />;
  };
};

// Outdoors Icons
export const Alpine = createIcon('alpine', 'alpine');
export const Bear = createIcon('bear', 'bear');
export const Bike = createIcon('bike', 'bike');
export const Carabiner = createIcon('carabiner', 'carabiner');
export const Clip = createIcon('clip', 'clip');
export const Mountains = createIcon('mountains', 'mountains');
export const Rope = createIcon('rope', 'rope');
export const Rope1 = createIcon('rope-1', 'rope');
export const Route = createIcon('route', 'route');
export const Route1 = createIcon('route-1', 'route');
export const Ski = createIcon('ski', 'ski');
export const Skier = createIcon('skier', 'skier');