import { useLayoutEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import type { CalculatorRole } from './calculatorConfig';
import CostCalculator from './CostCalculator';

export default function CostCalculatorModal({ initialRole, returnFocus, onDismiss }: {
  initialRole: CalculatorRole; returnFocus: HTMLElement | null; onDismiss: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const navigate = useNavigate();
  const titleId = useId();
  const [closing, setClosing] = useState(false);

  useLayoutEffect(() => {
    const element = dialog.current!;
    const root = document.documentElement;
    const originalOverflow = document.body.style.overflow;
    const originalRootOverflow = root.style.overflow;
    const originalGutter = root.style.scrollbarGutter;
    const scrollPosition = { left: window.scrollX, top: window.scrollY };
    // Reserve the existing scrollbar at the viewport, so fixed headers and page
    // content keep the same width throughout both dialog animations.
    if (window.innerWidth > root.clientWidth) root.style.scrollbarGutter = 'stable';
    root.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      window.clearTimeout(closeTimer.current);
      element.close();
      document.body.style.overflow = originalOverflow;
      root.style.overflow = originalRootOverflow;
      root.style.scrollbarGutter = originalGutter;
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
      window.scrollTo({ ...scrollPosition, behavior: 'instant' });
    };
  }, [returnFocus]);

  const close = (bookCall = false) => {
    if (closing) return;
    const finish = () => { onDismiss(); if (bookCall) navigate('/contact'); };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
    setClosing(true);
    closeTimer.current = window.setTimeout(finish, 280);
  };
  return createPortal(<dialog ref={dialog} className={`cost-calculator ${closing ? 'is-closing' : ''}`} aria-labelledby={titleId} onCancel={e => { e.preventDefault(); close(); }} onClick={e => {
    if (e.target !== e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) close();
  }}>
    <CostCalculator initialRole={initialRole} headingId={titleId} onBookCall={() => close(true)} closeControl={
      <div className="calculator-close-bar"><button ref={closeButton} type="button" className="calculator-close" aria-label="Close calculator" onClick={() => close()}><X size={24} /></button></div>
    } />
  </dialog>, document.body);
}
