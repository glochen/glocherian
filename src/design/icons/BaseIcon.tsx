import React from 'react';
import { IconProps, IconSize, iconSizes } from './types';

interface BaseIconProps extends IconProps {
  src: string;
  size?: IconSize;
}

export const BaseIcon: React.FC<BaseIconProps> = ({ 
  src, 
  size = 'md', 
  className = '', 
  alt = 'icon',
  style = {}
}) => {
  const sizeConfig = iconSizes[size];
  const sizeStyle = { 
    width: sizeConfig.size, 
    height: sizeConfig.size 
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ ...sizeStyle, ...style }}
    />
  );
};
