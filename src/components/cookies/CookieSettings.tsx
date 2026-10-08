import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import type { OptionalCookies } from './cookiePreferences';
import useCookieDismiss from './useCookieDismiss';
import toggleOff from '../../assets/landing/cookies/toggle-off.svg';
import toggleOn from '../../assets/landing/cookies/toggle-on.svg';
import dividerDesktop from '../../assets/landing/cookies/divider-desktop.svg';
import dividerMobile from '../../assets/landing/cookies/divider-mobile.svg';

function Divider() {
  return <div className="cookie-divider" aria-hidden="true"><picture><source media="(min-width: 768px)" srcSet={dividerDesktop} /><img src={dividerMobile} alt="" /></picture></div>;
}

export default function CookieSettings({ initialChoices, returnFocus, onSave, onDismiss }: {
  initialChoices: OptionalCookies;
  returnFocus: HTMLElement | null;
  onSave: (choices: OptionalCookies) => void;
  onDismiss: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const [choices, setChoices] = useState(initialChoices);
  const { closing, dismiss } = useCookieDismiss();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const element = dialog.current!;
    const root = document.documentElement;
    const overflow = document.body.style.overflow;
    const rootOverflow = root.style.overflow;
    const gutter = root.style.scrollbarGutter;
    const position = { left: window.scrollX, top: window.scrollY };
    if (window.innerWidth > root.clientWidth) root.style.scrollbarGutter = 'stable';
    root.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    element.showModal();
    heading.current?.focus({ preventScroll: true });
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      root.style.overflow = rootOverflow;
      root.style.scrollbarGutter = gutter;
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
      else queueMicrotask(() => document.querySelector<HTMLButtonElement>('.cookie-banner [data-cookie-manage]')?.focus({ preventScroll: true }));
      window.scrollTo({ ...position, behavior: 'instant' });
    };
  }, [returnFocus]);

  return createPortal(<dialog ref={dialog} className={`cookie-surface cookie-dialog ${closing ? 'is-closing' : ''}`} aria-labelledby="cookie-settings-title" aria-describedby="cookie-settings-description"
    onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'));
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && (document.activeElement === first || document.activeElement === heading.current)) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }}
    onCancel={event => { event.preventDefault(); dismiss(onDismiss); }}
    onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss(onDismiss);
    }}>
    <div className="cookie-heading">
      <h2 id="cookie-settings-title" ref={heading} tabIndex={-1}>Manage cookies</h2>
      <p id="cookie-settings-description">Choose which optional cookie you allow.</p>
    </div>
    <div className="cookie-categories">
      <Divider />
      <div className="cookie-category cookie-necessary">
        <div><h3>Necessary cookies</h3><p>Required to keep the website working.</p></div>
        <span className="cookie-always-on">always on</span>
      </div>
      <Divider />
      {(['analytics', 'advertising'] as const).map(category => <div className="cookie-category-group" key={category}>
        <div className="cookie-category">
          <div>
            <h3 id={`cookie-${category}-label`}>{category === 'analytics' ? 'Analytics cookies' : 'Advertising cookies'}</h3>
            <p id={`cookie-${category}-description`}>{category === 'analytics' ? 'Help us measure website use.' : 'Help us measure advertising performance.'}</p>
          </div>
          <button type="button" role="switch" aria-checked={choices[category]} aria-labelledby={`cookie-${category}-label`} aria-describedby={`cookie-${category}-description`} disabled={closing} className="cookie-toggle"
            onClick={() => setChoices(previous => ({ ...previous, [category]: !previous[category] }))}>
            <img src={choices[category] ? toggleOn : toggleOff} alt="" />
          </button>
        </div>
        <Divider />
      </div>)}
    </div>
    <div className="cookie-actions">
      <Link className="cookie-policy-link" to="/cookie-policy" onClick={event => {
        if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        dismiss(() => { onDismiss(); navigate('/cookie-policy'); });
      }}>cookie policy</Link>
      <button type="button" className="cookie-button cookie-save" disabled={closing} onClick={() => dismiss(() => onSave(choices))}>Save Preference</button>
    </div>
  </dialog>, document.body);
}
