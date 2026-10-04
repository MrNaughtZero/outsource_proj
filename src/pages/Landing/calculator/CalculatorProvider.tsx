import { useCallback, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { CalculatorContext } from './CalculatorContext';
import { calculatorConfig, type CalculatorRole } from './calculatorConfig';
import CostCalculatorModal from './CostCalculatorModal';

export default function CalculatorProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [session, setSession] = useState<{ role: CalculatorRole; trigger: HTMLElement | null } | null>(null);
  const openCalculator = useCallback((role?: string, trigger?: HTMLElement) => {
    const selected = role ?? (pathname.includes('/accountants') ? 'accountant' : pathname.includes('/payroll-specialists') ? 'payroll specialist' : 'bookkeeper');
    setSession({ role: Object.hasOwn(calculatorConfig.roles, selected) ? selected as CalculatorRole : 'bookkeeper', trigger: trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null) });
  }, [pathname]);
  const dismiss = useCallback(() => setSession(null), []);
  return <CalculatorContext.Provider value={{ openCalculator }}>
    {children}
    {session && <CostCalculatorModal initialRole={session.role} returnFocus={session.trigger} onDismiss={dismiss} />}
  </CalculatorContext.Provider>;
}
