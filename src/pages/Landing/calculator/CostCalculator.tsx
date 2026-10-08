import { useId, useState, type ReactNode } from 'react';
import { ArrowRight, ChevronDown, Minus, Plus } from 'lucide-react';
import { calculatorConfig as config, type CalculatorRole } from './calculatorConfig';
import { calculateEstimate, validateEstimate, type CalculatorInput } from './calculateEstimate';
import './calculator.css';

const currency = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
const money = (value: number | undefined) => value === undefined ? '—' : currency.format(value);
type EditableField = keyof typeof config.limits;
type Values = Record<EditableField, string>;

function NumberField({ label, description, field, values, update, error, prefix }: {
  label: string; description: string; field: EditableField; values: Values; update: (field: EditableField, value: string) => void; error?: string; prefix?: string;
}) {
  const id = useId();
  const [min, max] = config.limits[field];
  return <div className="calculator-number-row">
    <div><label htmlFor={id}>{label}</label><p id={`${id}-description`} className="calculator-field-description">{description}</p></div>
    <div>
      <div className="calculator-number-wrap" data-invalid={!!error}>
        {prefix && <span aria-hidden="true">{prefix}</span>}
        <input id={id} type="number" inputMode="decimal" min={min} max={max} step="any" value={values[field]} onChange={e => update(field, e.target.value)} aria-invalid={!!error} placeholder={field === 'annualSalary' ? undefined : '0'} aria-describedby={`${id}-description${error ? ` ${id}-error` : ''}`} />
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
  const [role, setRole] = useState(initialRole);
  const [days, setDays] = useState<number>(config.defaults.days);
  const [months, setMonths] = useState<number>(config.defaults.months);
  const [values, setValues] = useState<Values>({
    people: String(config.defaults.people), annualSalary: String(config.roles[initialRole].annualSalary),
    equipment: String(config.defaults.equipment), software: String(config.defaults.software), office: String(config.defaults.office),
  });
  const input: CalculatorInput = {
    role, days, months,
    ...Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim() === '' ? (['equipment', 'software', 'office'].includes(key) ? 0 : NaN) : Number(value)])) as Record<EditableField, number>,
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
        <p>UK employment vs Outsource.com</p>
      </header>
      <div className="calculator-columns">
        <div className="calculator-input-panels">
          <section className="calculator-panel calculator-requirements" aria-labelledby={`${titleId}-requirements`}>
            <h3 id={`${titleId}-requirements`}>Your requirements</h3>
            <div className="calculator-requirements-grid">
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
              <label className="calculator-field">Days per week<span className="calculator-select-wrap"><select aria-label="Days per week" aria-describedby={`${titleId}-daily-hours`} value={days} onChange={e => setDays(Number(e.target.value))}>{config.days.map(day => <option key={day}>{day}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></span><span id={`${titleId}-daily-hours`} className="calculator-field-description">{config.hoursPerDay} hours per day</span></label>
              <label className="calculator-field">Duration<span className="calculator-select-wrap"><select aria-label="Duration" value={months} onChange={e => setMonths(Number(e.target.value))}>{config.months.map(month => <option key={month} value={month}>{month} {month === 1 ? 'month' : 'months'}</option>)}</select><ChevronDown size={18} aria-hidden="true" /></span></label>
            </div>
            <p className="calculator-weekly-hours">{days * config.hoursPerDay} hours/week</p>
          </section>
          <section className="calculator-panel calculator-employment" aria-labelledby={`${titleId}-employment`}>
            <h3 id={`${titleId}-employment`}>Enter UK employment costs</h3>
            <NumberField label="Full-time annual salary" description={`Based on ${config.fullTimeHoursPerWeek} hours/week`} field="annualSalary" values={values} update={update} error={errors.annualSalary} prefix="£" />
            <h4>Monthly extras per person</h4>
            <NumberField label="IT & equipment" description="Computer, screens & accessories" field="equipment" values={values} update={update} error={errors.equipment} prefix="£" />
            <NumberField label="Software & communication" description="Microsoft 365, phone & calls" field="software" values={values} update={update} error={errors.software} prefix="£" />
            <NumberField label="Office & desk costs" description="Desk space, utilities & internet" field="office" values={values} update={update} error={errors.office} prefix="£" />
          </section>
        </div>
        <section className="calculator-panel calculator-results" aria-labelledby={`${titleId}-results`}>
          <h3 id={`${titleId}-results`}>Your comparison</h3>
          <p className="calculator-muted">Monthly costs • {errors.people ? 'your team' : `${input.people} ${input.people === 1 ? roleInfo.label.toLowerCase() : roleInfo.plural}`} • {days} {days === 1 ? 'day' : 'days'}/week</p>
          <div className="calculator-totals">
            <div className="calculator-total"><h4>UK employment</h4><strong data-testid="uk-total">{money(estimate?.ukMonthly)}</strong><span>/ month</span></div>
            <div className="calculator-total calculator-outsourced"><h4>Outsource.com</h4><strong data-testid="outsourced-total">{money(estimate?.outsourcedMonthly)}</strong><span>/ month</span></div>
          </div>
          <div className={`calculator-saving ${isHigher ? 'is-higher' : ''}`} aria-live="polite" aria-atomic="true">
            <div><h4>{isHigher ? 'Estimated additional cost' : 'Estimated saving'}</h4><p><strong data-testid="monthly-saving">{money(estimate ? Math.abs(estimate.monthlySaving) : undefined)}</strong><span> / month</span></p></div>
            <span className="calculator-percentage" data-testid="saving-percent">{estimate?.savingPercent == null ? '—' : `${Math.round(Math.abs(estimate.savingPercent))}%${isHigher ? ' more' : ''}`}</span>
            <p className="calculator-period">Estimated {isHigher ? 'additional cost' : 'saving'} over {months} {months === 1 ? 'month' : 'months'}: <strong data-testid="period-saving">{money(estimate ? Math.abs(estimate.periodSaving) : undefined)}</strong></p>
          </div>
          {!estimate && <p className="calculator-error" role="status">Check the highlighted inputs to see your estimate.</p>}
          <div className="calculator-breakdown">
            <table><caption className="sr-only">Monthly cost breakdown for your whole team</caption><thead><tr><th scope="col">Cost breakdown <span>(monthly)</span></th><th scope="col">UK<span className="sr-only md:not-sr-only"> employment</span></th><th scope="col">Outsource<wbr />.com</th></tr></thead><tbody>
              <tr><th scope="row">Salary / service</th><td>{money(estimate?.salary)}</td><td>{money(estimate?.outsourcedMonthly)}</td></tr>
              <tr><th scope="row">Employer NI</th><td>{money(estimate?.nationalInsurance)}</td><td>Included</td></tr>
              <tr><th scope="row">Employer pension</th><td>{money(estimate?.employerPension)}</td><td>Included</td></tr>
              <tr><th scope="row">IT &amp; equipment</th><td>{money(estimate?.equipment)}</td><td>Included</td></tr>
              <tr><th scope="row">Software &amp; communication</th><td>{money(estimate?.software)}</td><td>Included</td></tr>
              <tr><th scope="row">Office &amp; desk costs</th><td>{money(estimate?.office)}</td><td>Included</td></tr>
            </tbody></table>
          </div>
          <p className="calculator-note">Monthly figures rounded. Totals calculated before rounding.</p>
          <div className="calculator-actions"><button type="button" className="calculator-book" onClick={onBookCall}>Book a call<ArrowRight size={20} aria-hidden="true" /></button></div>
          <details className="calculator-assumptions"><summary>View assumptions<ChevronDown size={18} aria-hidden="true" /></summary><div>
            <p>UK estimates use {config.taxYear} standard assumptions, before Employment Allowance. Salary is adjusted to the selected weekly hours against a {config.fullTimeHoursPerWeek}-hour full-time week. Employer NI is calculated at {config.nationalInsurance.rate * 100}% of each person’s adjusted salary above {money(config.nationalInsurance.threshold)}, minimum £0. Employer pension is calculated at {config.pension.rate * 100}% of earnings between {money(config.pension.lowerThreshold)} and {money(config.pension.upperThreshold)}, assuming an eligible enrolled employee.</p>
            <p>Any optional UK employment costs entered are included in the UK employer total. Outsource.com costs are calculated using the selected role and {config.billedWeeks} billed weeks per year. Rates may vary by experience, team size and commitment length. Outsource.com prices shown exclude VAT.</p>
            <p><a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" target="_blank" rel="noreferrer">HMRC rates</a> · <a href="https://www.thepensionsregulator.gov.uk/employers/new-employers/im-an-employer-who-has-to-provide-a-pension/choose-a-pension-scheme/understanding-your-costs/making-contributions-to-your-pension-scheme" target="_blank" rel="noreferrer">Pension contributions</a></p>
          </div></details>
        </section>
      </div>
    </div>
  );
}
