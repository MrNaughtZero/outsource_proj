import { createContext, useContext } from 'react';

export const CalculatorContext = createContext<{ openCalculator: (role?: string, trigger?: HTMLElement) => void } | null>(null);

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) throw new Error('CalculatorProvider is missing.');
  return context;
}
