import { calculatorConfig, type CalculatorRole } from './calculatorConfig.ts';

export type CalculatorInput = {
  role: CalculatorRole;
  people: number;
  days: number;
  hours: number;
  months: number;
  annualSalary: number;
  fullTimeHours: number;
  equipment: number;
  software: number;
};

export function validateEstimate(input: CalculatorInput) {
  const errors: Partial<Record<keyof CalculatorInput, string>> = {};
  for (const field of Object.keys(calculatorConfig.limits) as (keyof typeof calculatorConfig.limits)[]) {
    const [min, max] = calculatorConfig.limits[field];
    if (!Number.isFinite(input[field]) || input[field] < min || input[field] > max) errors[field] = `Enter a value from ${min.toLocaleString('en-GB')} to ${max.toLocaleString('en-GB')}.`;
  }
  if (Number.isFinite(input.people) && !Number.isInteger(input.people)) errors.people = 'Enter a whole number of people.';
  for (const field of ['days', 'hours', 'months'] as const) {
    if (!(calculatorConfig[field] as readonly number[]).includes(input[field])) errors[field] = 'Choose one of the available options.';
  }
  if (!Object.hasOwn(calculatorConfig.roles, input.role)) errors.role = 'Choose a role.';
  return errors;
}

/** All calculations retain full precision; only the UI rounds displayed results. */
export function calculateEstimate(input: CalculatorInput) {
  if (Object.keys(validateEstimate(input)).length) return null;
  const { nationalInsurance: ni, pension, billedWeeks, roles } = calculatorConfig;
  const weeklyHours = input.days * input.hours;
  const adjustedSalary = input.annualSalary * weeklyHours / input.fullTimeHours;
  const salary = adjustedSalary / 12 * input.people;
  const nationalInsurance = Math.max(0, adjustedSalary - ni.threshold) * ni.rate / 12 * input.people;
  const employerPension = Math.max(0, Math.min(adjustedSalary, pension.upperThreshold) - pension.lowerThreshold) * pension.rate / 12 * input.people;
  const equipment = input.equipment * input.people;
  const software = input.software * input.people;
  const ukMonthly = salary + nationalInsurance + employerPension + equipment + software;
  const outsourcedMonthly = roles[input.role].hourlyRate * weeklyHours * billedWeeks / 12 * input.people;
  const monthlySaving = ukMonthly - outsourcedMonthly;
  return {
    weeklyHours, adjustedSalary, salary, nationalInsurance, employerPension, equipment, software,
    ukMonthly, outsourcedMonthly, monthlySaving,
    savingPercent: ukMonthly > 0 ? monthlySaving / ukMonthly * 100 : null,
    periodSaving: monthlySaving * input.months,
  };
}
