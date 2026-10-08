export const COOKIE_PREFERENCES_KEY = 'outsource.cookie-preferences';
const PREFERENCE_VERSION = 1;
const PREFERENCE_LIFETIME = 180 * 24 * 60 * 60 * 1000;

export type OptionalCookies = { analytics: boolean; advertising: boolean };
export type CookiePreferences = OptionalCookies & {
  version: number;
  necessary: true;
  savedAt: number;
};

/** Missing, expired or unrecognised choices never grant optional consent. */
export function readCookiePreferences(): CookiePreferences | null {
  try {
    const value = JSON.parse(localStorage.getItem(COOKIE_PREFERENCES_KEY) ?? 'null');
    if (!value || value.version !== PREFERENCE_VERSION || value.necessary !== true
      || typeof value.analytics !== 'boolean' || typeof value.advertising !== 'boolean'
      || typeof value.savedAt !== 'number' || !Number.isFinite(value.savedAt)
      || value.savedAt > Date.now() || Date.now() - value.savedAt >= PREFERENCE_LIFETIME) return null;
    return value;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(choices: OptionalCookies): CookiePreferences {
  const preferences: CookiePreferences = { ...choices, necessary: true, version: PREFERENCE_VERSION, savedAt: Date.now() };
  try {
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
  } catch {
    // Keep choices for this visit when browser storage is unavailable.
  }
  return preferences;
}
