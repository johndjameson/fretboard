import { NOTES } from './constants';

export type Note = (typeof NOTES)[number];

export type Tuning =
  | 'E Standard'
  | 'Drop D'
  | 'D Standard'
  | 'Drop C'
  | 'C Standard';
