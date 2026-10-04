/** Shared defaults and assumptions. Customer edits never change this configuration. */
export const calculatorConfig = {
  taxYear: '2026/27',
  roles: {
    bookkeeper: { label: 'Bookkeeper', plural: 'bookkeepers', hourlyRate: 9.5, annualSalary: 30000 },
    'payroll specialist': { label: 'Payroll Specialist', plural: 'payroll specialists', hourlyRate: 9.5, annualSalary: 30000 },
    accountant: { label: 'Accountant', plural: 'accountants', hourlyRate: 13.5, annualSalary: 30000 },
  },
  // £30,000 is the editable example salary supplied in the reference, not a market salary claim.
  defaults: { people: 1, days: 5, hours: 7.5, months: 12, fullTimeHours: 37.5, equipment: 42, software: 30 },
  days: [1, 2, 3, 4, 5, 6, 7],
  hours: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
  months: [1, 3, 6, 12, 24, 36],
  limits: { people: [1, 100], annualSalary: [0, 1000000], fullTimeHours: [1, 84], equipment: [0, 10000], software: [0, 10000] },
  billedWeeks: 52,
  nationalInsurance: { rate: 0.15, threshold: 5000 },
  pension: { rate: 0.03, lowerThreshold: 6240, upperThreshold: 50270 },
} as const;

export type CalculatorRole = keyof typeof calculatorConfig.roles;
