import React from 'react';
import { BaseIcon } from './BaseIcon';
import { IconProps, iconSizes } from './types';

// Helper function to create icon components
const createIcon = (name: string, alt: string) => {
  return ({ size = 'md', ...props }: IconProps) => {
    const folder = iconSizes[size].folder;
    return <BaseIcon src={`/${folder}/general/png/${name}.png`} alt={alt} size={size} {...props} />;
  };
};

// General Icons
export const Book = createIcon('book', 'book');
export const BookStack = createIcon('book-stack', 'book stack');
export const Books = createIcon('books', 'books');
export const Books1 = createIcon('books-1', 'books');
export const Calendar = createIcon('calendar', 'calendar');
export const Calendar1 = createIcon('calendar-1', 'calendar');
export const Calendar2 = createIcon('calendar-2', 'calendar');
export const Calendar3 = createIcon('calendar-3', 'calendar');
export const Film = createIcon('film', 'film');
export const Gramophone = createIcon('gramophone', 'gramophone');
export const Listening = createIcon('listening', 'listening');
export const Microphone = createIcon('microphone', 'microphone');
export const Music = createIcon('music', 'music');
export const Record = createIcon('record', 'record');
export const VideoCamera = createIcon('video-camera', 'video camera');
export const Whale = createIcon('whale', 'whale');