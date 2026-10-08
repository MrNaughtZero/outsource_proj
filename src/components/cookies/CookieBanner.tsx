import { Link } from 'react-router-dom';
import type { OptionalCookies } from './cookiePreferences';
import useCookieDismiss from './useCookieDismiss';

export default function CookieBanner({ onChoose, onManage }: {
  onChoose: (choices: OptionalCookies) => void;
  onManage: (trigger: HTMLElement) => void;
}) {
  const { closing, dismiss } = useCookieDismiss();
  const choose = (allow: boolean) => dismiss(() => onChoose({ analytics: allow, advertising: allow }));
  return <section className={`cookie-surface cookie-banner ${closing ? 'is-closing' : ''}`} aria-labelledby="cookie-banner-title">
    <div className="cookie-heading">
      <h2 id="cookie-banner-title">Your cookie choices</h2>
      <p>We use cookies for essential website functions. With your permission, we also use optional cookies to understand how you use our website and measure the effectiveness of our advertising.</p>
    </div>
    <div className="cookie-actions">
      <div className="cookie-links">
        <Link to="/cookie-policy">cookie policy</Link>
        <button type="button" data-cookie-manage onClick={event => onManage(event.currentTarget)}>Manage cookies</button>
      </div>
      <div className="cookie-banner-buttons">
        <button type="button" className="cookie-button" disabled={closing} onClick={() => choose(true)}>Accept all</button>
        <button type="button" className="cookie-button" disabled={closing} onClick={() => choose(false)}>Reject optional</button>
      </div>
    </div>
  </section>;
}
