import { fr } from './fr';
import { en } from './en';
import { sw } from './sw';

export const translations = {
  fr,
  en,
  sw,
};

export type Locale = keyof typeof translations;
export type Translation = typeof fr;
