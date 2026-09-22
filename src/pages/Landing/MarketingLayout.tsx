import { useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MarketingNavbar from './components/MarketingNavbar';
import MarketingFooter from './components/MarketingFooter';

export default function MarketingLayout() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const roleMobileFooter = pathname === '/roles' || pathname.startsWith('/roles/');

  // Reveal each section as it scrolls into view. Pure CSS class toggling via
  // IntersectionObserver — no dependency. Hardened so content can NEVER stay
  // hidden: reduced-motion / no-observer fall straight to visible, and a
  // safety timer reveals everything in case the observer misbehaves (e.g. very
  // tall mobile sections).
  useLayoutEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const sections = Array.from(main.querySelectorAll('section'));
    const reveal = (el: Element) => el.classList.add('is-visible');

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      sections.forEach(reveal); // never hide anything
      return;
    }

    sections.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    );

    sections.forEach((el) => io.observe(el));

    // Safety net: guarantee nothing is left invisible.
    const fallback = window.setTimeout(() => sections.forEach(reveal), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return (
    <div className="fig-page flex min-h-screen flex-col">
      <MarketingNavbar overlay />
      <main ref={mainRef} className={`marketing-main flex-1 ${roleMobileFooter ? 'role-marketing-main' : ''}`}>
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  );
}
