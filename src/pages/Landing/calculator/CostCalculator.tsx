import { useId, useState, type ReactNode } from 'react';
import { ArrowRight, ChevronDown, Minus, Plus } from 'lucide-react';
import { calculatorConfig as config, type CalculatorRole } from './calculatorConfig';
import { calculateEstimate, validateEstimate, type CalculatorInput } from './calculateEstimate';
import './calculator.css';

const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
const money = (value: number | undefined) => value === undefined ? '—' : currency.format(value);
type EditableField = keyof typeof config.limits;
type Values = Record<EditableField, string>;

function NumberField({ label, field, values, update, error, prefix }: {
  label: string; field: EditableField; values: Values; update: (field: EditableField, value: string) => void; error?: string; prefix?: string;
}) {
  const id = useId();
  const [min, max] = config.limits[field];
  return <div className="calculator-number-row">
    <label htmlFor={id}>{label}</label>
    <div>
      <div className="calculator-number-wrap" data-invalid={!!error}>
        {prefix && <span aria-hidden="true">{prefix}</span>}
        <input id={id} type="number" inputMode="decimal" min={min} max={max} step="any" value={values[field]} onChange={e => update(field, e.target.value)} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} />
      </div>
      {error && <p id={`${id}-error`} className="calculator-error">{error}</p>}
    </div>
  </div>;
}

export default function CostCalculator({ initialRole = 'bookkeeper', headingId, standalone = false, closeControl, onBookCall }: {
  initialRole?: CalculatorRole;
  headingId?: string;
  standalone?: boolean;
  closeControl?: ReactNode;
  onBookCall: () => void;
}) {
  const generatedId = useId();
  const titleId = headingId ?? generatedId;
  const Heading = standalone ? 'h1' : 'h2';
  const peopleId = useId();
  const inclusionsId = useId();
  const [role, setRole] = useState(initialRole);
  const [days, setDays] = useState<number>(config.defaults.days);
  const [hours, setHours] = useState<number>(config.defaults.hours);
  const [months, setMonths] = useState<number>(config.defaults.months);
  const [inclusions, setInclusions] = useState(false);
  const [values, setValues] = useState<Values>({
    people: String(config.defaults.people), annualSalary: String(config.roles[initialRole].annualSalary),
    fullTimeHours: String(config.defaults.fullTimeHours), equipment: String(config.defaults.equipment), software: String(config.defaults.software),
  });
  const input: CalculatorInput = {
    role, days, hours, months,
    ...Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim() === '' ? NaN : Number(value)])) as Record<EditableField, number>,
  };
  const errors = validateEstimate(input);
  const estimate = calculateEstimate(input);
  const roleInfo = config.roles[role];
  const isHigher = estimate !== null && estimate.monthlySaving < 0;
  const update = (field: EditableField, value: string) => setValues(current => ({ ...current, [field]: value }));

  const adjustPeople = (delta: number) => {
    const current = Number.isFinite(input.people) ? Math.round(input.people) : config.defaults.people;
    update('people', String(Math.max(config.limits.people[0], Math.min(config.limits.people[1], current + delta))));
  };

  return (
    <div className="calculator-content">
      {closeControl}
      <header className="calculator-heading">
        <Heading id={titleId}>Compare <span>Your Costs</span></Heading>
        <p>Choose your people and hours. See how the costs compare.</p>
      </header>
      <div className="calculator-columns">
        <section className="calculator-panel calculator-requirements" aria-labelledby={`${titleId}-requirements`}>
          <h3 id={`${titleId}-requirements`}>Your requirements</h3>
          <label className="calculator-field">Role
            <span className="calculator-select-wrap"><select aria-label="Role" value={role} onChange={e => { const next = e.target.value as CalculatorRole; setRole(next); update('annualSalary', String(config.roles[next].annualSalary)); }}>
              {(Object.keys(config.roles) as CalculatorRole[]).map(key => <option key={key} value={key}>{config.roles[key].label}</option>)}
            </select><ChevronDown size={18} aria-hidden="true" /></span>
          </label>
          <div className="calculator-field">
            <label htmlFor={peopleId}>People</label>
            <div className="calculator-stepper">
              <button type="button" aria-label="Remove one person" disabled={input.people <= config.limits.people[0]} onClick={() => adjustPeople(-1)}><Minus size={18} /></button>
              <input id={peopleId} type="number" inputMode="numeric" min={config.limits.people[0]} max={config.limits.people[1]} step="1" value={values.people} onChange={e => update('people', e.target.value)} aria-invalid={!!errors.people} aria-describedby={errors.people ? `${peopleId}-error` : undefined} />
              <button type="button" aria-label="Add one person" disabled={input.people >= config.limits.people[1]} onClick={() => adjustPeople(1)}><Plus size={18} /></button>
            </div>
            {errors.people && <p id={`${peopleId}-error`} className="calculator-error">{errors.people}</p>}
          </div>
          <div className="calculator-hours">
            <label className="calculator-field">Days per week<span className="calculator-select-wrap"><select aria-label="Days per week" value={days} onChange={e => setDays(Number(e.target.value))}>{config.days.map(day => <option key={day}>{day}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></span></label>
            <label className="calculator-field">Hours per day<span className="calculator-select-wrap"><select aria-label="Hours per day" value={hours} onChange={e => setHours(Number(e.target.value))}>{config.hours.map(hour => <option key={hour}>{hour}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></span></label>
          </div>
          <label className="calculator-field">Duration<span className="calculator-select-wrap"><select aria-label="Duration" value={months} onChange={e => setMonths(Number(e.target.value))}>{config.months.map(month => <option key={month} value={month}>{month} {month === 1 ? 'month' : 'months'}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></span></label>
          <p className="calculator-muted">{days * hours} hours per week, per person</p>
          <details className="calculator-adjustments" open>
            <summary>Adjust UK employment costs<ChevronDown size={20} aria-hidden="true" /></summary>
            <div className="calculator-adjustment-fields">
              <NumberField label="Full-time annual salary" field="annualSalary" values={values} update={update} error={errors.annualSalary} prefix="£" />
              <NumberField label="Full-time hours per week" field="fullTimeHours" values={values} update={update} error={errors.fullTimeHours} />
              <NumberField label="Equipment / month" field="equipment" values={values} update={update} error={errors.equipment} prefix="£" />
              <NumberField label="IT & software / month" field="software" values={values} update={update} error={errors.software} prefix="£" />
              <p className="calculator-note">Editable assumptions, per person.</p>
            </div>
          </details>
        </section>
        <section className="calculator-panel calculator-results" aria-labelledby={`${titleId}-results`}>
          <h3 id={`${titleId}-results`}>Your estimated comparison</h3>
          <p className="calculator-muted">Average monthly costs · {errors.people ? 'your team' : `${input.people} ${input.people === 1 ? roleInfo.label.toLowerCase() : roleInfo.plural}`}</p>
          <div className="calculator-totals">
            <div className="calculator-total"><h4>UK employment</h4><strong data-testid="uk-total">{money(estimate?.ukMonthly)}</strong><span>/ month</span></div>
            <div className="calculator-total calculator-outsourced"><h4>Outsourced team</h4><strong data-testid="outsourced-total">{money(estimate?.outsourcedMonthly)}</strong><span>/ month</span><small>From £{roleInfo.hourlyRate.toFixed(2)} / hour</small></div>
          </div>
          <div className={`calculator-saving ${isHigher ? 'is-higher' : ''}`} aria-live="polite" aria-atomic="true">
            <div><h4>{isHigher ? 'Estimated additional cost' : 'Estimated saving'}</h4><p><strong data-testid="monthly-saving">{money(estimate ? Math.abs(estimate.monthlySaving) : undefined)}</strong><span> / month</span></p></div>
            <span className="calculator-percentage" data-testid="saving-percent">{estimate?.savingPercent == null ? '—' : `${Math.round(Math.abs(estimate.savingPercent))}%${isHigher ? ' more' : ''}`}</span>
            <p className="calculator-period"><strong data-testid="period-saving">{money(estimate ? Math.abs(estimate.periodSaving) : undefined)}</strong> {isHigher ? 'extra ' : ''}over {months} {months === 1 ? 'month' : 'months'}</p>
          </div>
          {!estimate && <p className="calculator-error" role="status">Check the highlighted inputs to see your estimate.</p>}
          <div className="calculator-breakdown">
            <table><caption className="sr-only">Monthly cost breakdown for your whole team</caption><thead><tr><th scope="col">Cost breakdown <span>(per month)</span></th><th scope="col"><span className="calculator-wide-label">UK employment</span><span className="calculator-short-label">UK</span></th><th scope="col"><span className="calculator-wide-label">Outsourced team</span><span className="calculator-short-label">Your team</span></th></tr></thead><tbody>
              <tr><th scope="row">Salary / service</th><td>{money(estimate?.salary)}</td><td>{money(estimate?.outsourcedMonthly)}</td></tr>
              <tr><th scope="row">Employer NI</th><td>{money(estimate?.nationalInsurance)}</td><td>Included</td></tr>
              <tr><th scope="row">Employer pension</th><td>{money(estimate?.employerPension)}</td><td>Included</td></tr>
              <tr><th scope="row">Equipment</th><td>{money(estimate?.equipment)}</td><td>Included</td></tr>
              <tr><th scope="row">IT & software</th><td>{money(estimate?.software)}</td><td><button type="button" className="calculator-text-button" aria-expanded={inclusions} aria-controls={inclusionsId} onClick={() => setInclusions(!inclusions)}>See inclusions</button></td></tr>
            </tbody></table>
          </div>
          {inclusions && <div id={inclusionsId} className="calculator-inclusions"><h4>Included with your team</h4><p>A managed office workstation, our secure Workspace for tasks and files, and a dedicated WhatsApp line. Any additional software or licences can be discussed when you book a call.</p></div>}
          <p className="calculator-note">Monthly figures rounded. Totals calculated before rounding.</p>
          <div className="calculator-actions"><button type="button" className="calculator-book" onClick={onBookCall}>Book a call<ArrowRight size={20} aria-hidden="true" /></button></div>
          <details className="calculator-assumptions"><summary>View assumptions<ChevronDown size={18} aria-hidden="true" /></summary><div>
            <p>UK estimates use {config.taxYear} standard assumptions, before Employment Allowance. Salary is adjusted to your selected weekly hours against the full-time hours entered.</p>
            <p>Employer NI: {config.nationalInsurance.rate * 100}% of each person’s adjusted salary above {money(config.nationalInsurance.threshold)}, minimum £0. Employer pension: {config.pension.rate * 100}% of earnings between {money(config.pension.lowerThreshold)} and {money(config.pension.upperThreshold)}, assuming an eligible enrolled employee.</p>
            <p>Outsourced costs assume {config.billedWeeks} billed weeks per year. Monthly extras apply per person. Duration changes the total saving for the period, without changing the hourly rate.</p>
            <p>The starting salary is an editable example. Rates may vary by experience, team size and commitment length.</p>
            <p><a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" target="_blank" rel="noreferrer">HMRC rates</a> · <a href="https://www.thepensionsregulator.gov.uk/employers/new-employers/im-an-employer-who-has-to-provide-a-pension/choose-a-pension-scheme/understanding-your-costs/making-contributions-to-your-pension-scheme" target="_blank" rel="noreferrer">Pension contributions</a></p>
          </div></details>
        </section>
      </div>
    </div>
  );
}
