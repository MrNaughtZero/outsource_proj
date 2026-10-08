import { useCallback, useEffect, useLayoutEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CookieContext } from './CookieContext';
import { COOKIE_PREFERENCES_KEY, readCookiePreferences, saveCookiePreferences, type OptionalCookies } from './cookiePreferences';
import CookieBanner from './CookieBanner';
import CookieSettings from './CookieSettings';
import './cookies.css';

export default function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(readCookiePreferences);
  const [session, setSession] = useState<{ trigger: HTMLElement | null } | null>(null);
  const bannerVisible = !preferences && !session;
  const openCookieSettings = useCallback((trigger?: HTMLElement) => {
    setSession({ trigger: trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null) });
  }, []);
  const save = (choices: OptionalCookies) => {
    setPreferences(saveCookiePreferences(choices));
    setSession(null);
  };

  useEffect(() => {
    const update = (event: StorageEvent) => {
      if (event.key === COOKIE_PREFERENCES_KEY || event.key === null) setPreferences(readCookiePreferences());
    };
    window.addEventListener('storage', update);
    return () => window.removeEventListener('storage', update);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.toggleAttribute('data-cookie-layer', bannerVisible || !!session);
    return () => document.documentElement.removeAttribute('data-cookie-layer');
  }, [bannerVisible, session]);

  return <CookieContext.Provider value={{ preferences, openCookieSettings }}>
    {children}
    {bannerVisible && createPortal(<CookieBanner onChoose={save} onManage={openCookieSettings} />, document.body)}
    {session && <CookieSettings initialChoices={preferences ?? { analytics: false, advertising: false }} returnFocus={session.trigger} onSave={save} onDismiss={() => setSession(null)} />}
  </CookieContext.Provider>;
}
