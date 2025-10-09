export interface IconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
}

export type IconSize = 'sm' | 'md' | 'lg';

export const iconSizes: Record<IconSize, { size: number; folder: string }> = {
  sm: { size: 24, folder: 'smashicons-24' },
  md: { size: 64, folder: 'smashicons-64' },
  lg: { size: 128, folder: 'smashicons-128' }
};
