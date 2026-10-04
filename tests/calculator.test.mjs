import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimate, validateEstimate } from '../src/pages/Landing/calculator/calculateEstimate.ts';
import { calculatorConfig } from '../src/pages/Landing/calculator/calculatorConfig.ts';

const defaults = { role: 'bookkeeper', ...calculatorConfig.defaults, annualSalary: 30000 };
const closeTo = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-8, `${actual} != ${expected}`);

test('default comparison uses the agreed new rate and unrounded UK contributions', () => {
  const result = calculateEstimate(defaults);
  closeTo(result.salary, 2500);
  closeTo(result.nationalInsurance, 312.5);
  closeTo(result.employerPension, 59.4);
  closeTo(result.ukMonthly, 2943.9);
  closeTo(result.outsourcedMonthly, 1543.75);
  closeTo(result.monthlySaving, 1400.15);
  closeTo(result.periodSaving, 16801.8);
});

test('role rates are separate and headcount multiplies both totals and extras', () => {
  for (const [role, expected] of [['bookkeeper', 1543.75], ['payroll specialist', 1543.75], ['accountant', 2193.75]]) {
    const result = calculateEstimate({ ...defaults, role, people: 3 });
    closeTo(result.outsourcedMonthly, expected * 3);
    closeTo(result.ukMonthly, 2943.9 * 3);
    closeTo(result.equipment, 126);
    closeTo(result.software, 90);
  }
});

test('part-time salary is prorated before NI and pension, while extras stay monthly', () => {
  const result = calculateEstimate({ ...defaults, hours: 3.5 });
  closeTo(result.adjustedSalary, 14000);
  closeTo(result.nationalInsurance, 112.5);
  closeTo(result.employerPension, 19.4);
  closeTo(result.equipment, 42);
});

test('NI and pension are floored at zero and pension is capped at qualifying earnings', () => {
  const low = calculateEstimate({ ...defaults, annualSalary: 5000 });
  closeTo(low.nationalInsurance, 0);
  closeTo(low.employerPension, 0);
  const boundary = calculateEstimate({ ...defaults, annualSalary: 6240 });
  closeTo(boundary.employerPension, 0);
  closeTo(boundary.nationalInsurance, 15.5);
  const high = calculateEstimate({ ...defaults, annualSalary: 100000 });
  closeTo(high.employerPension, 110.075);
});

test('duration changes only period savings, calculated before display rounding', () => {
  const short = calculateEstimate({ ...defaults, months: 3 });
  closeTo(short.monthlySaving, 1400.15);
  closeTo(short.periodSaving, 4200.45);
});

test('zero UK costs and negative savings remain honest and finite', () => {
  const result = calculateEstimate({ ...defaults, annualSalary: 0, equipment: 0, software: 0 });
  assert.equal(result.ukMonthly, 0);
  assert.equal(result.savingPercent, null);
  assert.equal(result.monthlySaving, -1543.75);
});

test('invalid, blank, fractional headcount and out-of-range entries cannot produce estimates', () => {
  for (const change of [{ people: 0 }, { people: 1.5 }, { people: 101 }, { annualSalary: NaN }, { annualSalary: -1 }, { fullTimeHours: 0 }, { software: Infinity }, { days: 8 }, { hours: 0 }, { months: 2 }, { role: 'virtual cfo' }]) {
    assert.equal(calculateEstimate({ ...defaults, ...change }), null);
    assert.ok(Object.keys(validateEstimate({ ...defaults, ...change })).length);
  }
});
