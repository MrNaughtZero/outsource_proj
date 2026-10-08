/** Shared defaults and assumptions. Customer edits never change this configuration. */
export const calculatorConfig = {
  taxYear: '2026/27',
  roles: {
    bookkeeper: { label: 'Bookkeeper', plural: 'bookkeepers', hourlyRate: 9.5, annualSalary: 25000 },
    'payroll specialist': { label: 'Payroll Specialist', plural: 'payroll specialists', hourlyRate: 9.5, annualSalary: 25000 },
    accountant: { label: 'Accountant', plural: 'accountants', hourlyRate: 13.5, annualSalary: 25000 },
  },
  // £25,000 is the editable example salary supplied in the reference, not a market salary claim.
  defaults: { people: 1, days: 5, months: 12, equipment: 42, software: 30, office: 20 },
  days: [1, 2, 3, 4, 5, 6, 7],
  hoursPerDay: 7.5,
  fullTimeHoursPerWeek: 37.5,
  months: [1, 3, 6, 12, 24, 36],
  limits: { people: [1, 100], annualSalary: [0, 1000000], equipment: [0, 10000], software: [0, 10000], office: [0, 10000] },
  billedWeeks: 52,
  nationalInsurance: { rate: 0.15, threshold: 5000 },
  pension: { rate: 0.03, lowerThreshold: 6240, upperThreshold: 50270 },
} as const;

export type CalculatorRole = keyof typeof calculatorConfig.roles;
