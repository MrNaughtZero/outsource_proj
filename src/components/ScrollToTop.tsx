import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Resets scroll to the top on every forward navigation.
 *
 * Without this the browser keeps the previous page's scroll offset, so clicking
 * a nav/footer link lands you halfway down the new page.
 *
 * Two cases are left alone:
 *  - back/forward (POP), where the browser restores the old offset itself
 *  - links with a #hash, which should scroll to their target element
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP' || hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
}
