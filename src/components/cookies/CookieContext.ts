import { createContext, useContext } from 'react';
import type { CookiePreferences } from './cookiePreferences';

export const CookieContext = createContext<{
  preferences: CookiePreferences | null;
  openCookieSettings: (trigger?: HTMLElement) => void;
} | null>(null);

export function useCookiePreferences() {
  const context = useContext(CookieContext);
  if (!context) throw new Error('CookieProvider is missing.');
  return context;
}
