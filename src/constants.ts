import type { Note, Tuning } from './types';

export const NOTES = [
  'A',
  'A♯/B♭',
  'B',
  'C',
  'C♯/D♭',
  'D',
  'D♯/E♭',
  'E',
  'F',
  'F♯/G♭',
  'G',
  'G♯/A♭',
] as const;

export const TUNINGS: Record<Tuning, Readonly<Note[]>> = {
  'E Standard': ['E', 'B', 'G', 'D', 'A', 'E'],
  'Drop D': ['E', 'B', 'G', 'D', 'A', 'D'],
  'D Standard': ['D', 'A', 'F', 'C', 'G', 'D'],
  'Drop C': ['D', 'A', 'F', 'C', 'G', 'C'],
  'C Standard': ['C', 'G', 'D♯/E♭', 'A♯/B♭', 'F', 'C'],
} as const;
