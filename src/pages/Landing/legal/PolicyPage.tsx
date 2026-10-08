import divider from '../../../assets/landing/legal/divider.svg';
import { policies, type PolicyType } from './policyContent';
import './policy.css';

export default function PolicyPage({ type }: { type: PolicyType }) {
  const policy = policies[type];
  return <article className="policy-page">
    <header className="policy-hero">
      <div className="policy-container">
        <h1>{policy.title}</h1>
        <p className="policy-updated">Last updated: <time dateTime="2026-10-08">{policy.updated}</time></p>
        {policy.mobileIntro && <p className="policy-mobile-intro">{policy.mobileIntro}</p>}
        <div className="policy-divider"><img src={divider} alt="" /></div>
      </div>
    </header>
    <div className="policy-body">
      <div className="policy-container policy-sections">
        {policy.sections.map((section, index) => <section key={section.heading} aria-labelledby={`policy-section-${index + 1}`}>
          <h2 id={`policy-section-${index + 1}`}>{section.heading}</h2>
          <div className="policy-copy">{section.content}</div>
        </section>)}
      </div>
    </div>
  </article>;
}
