import { useRef } from 'react';
import usePageMotion from './usePageMotion';
import { Outlet, useLocation } from 'react-router-dom';
import MarketingNavbar from './components/MarketingNavbar';
import MarketingFooter from './components/MarketingFooter';

export default function MarketingLayout() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const policyPage = ['/legal', '/privacy', '/cookie-policy'].includes(pathname.replace(/\/+$/, ''));
  const roleMobileFooter = pathname === '/roles' || pathname.startsWith('/roles/');

  usePageMotion(mainRef, pathname, true, pathname !== '/');

  return (
    <div className="fig-page flex min-h-screen flex-col">
      <MarketingNavbar overlay />
      <main data-motion-root ref={mainRef} className={`marketing-main flex-1 ${roleMobileFooter ? 'role-marketing-main' : ''} ${pathname === '/compare-calculator' ? 'calculator-marketing-main' : ''} ${policyPage ? 'policy-marketing-main' : ''}`}>
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  );
}
