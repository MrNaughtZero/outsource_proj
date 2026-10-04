import { useEffect, useId, useRef, useState } from 'react';
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

  useEffect(() => {
    const element = dialog.current!;
    const originalOverflow = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbar > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbar}px`;
    document.body.style.overflow = 'hidden';
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    return () => {
      window.clearTimeout(closeTimer.current);
      element.close();
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPadding;
      if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
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
