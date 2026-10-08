import { useEffect, useRef, useState } from 'react';

export default function useCookieDismiss() {
  const [closing, setClosing] = useState(false);
  const busy = useRef(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const dismiss = (finish: () => void) => {
    if (busy.current) return;
    busy.current = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }
    setClosing(true);
    timer.current = window.setTimeout(finish, 280);
  };
  return { closing, dismiss };
}
