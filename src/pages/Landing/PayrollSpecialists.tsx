import RoleDetailPage from './components/RoleDetailPage';
import heroArt from '../../assets/landing/payroll-specialists/hero-art.png';
import stepNeed from '../../assets/landing/role-detail/step-need.svg';
import stepMatch from '../../assets/landing/accountants/step-match.svg';
import stepWorkspace from '../../assets/landing/role-detail/step-workspace.svg';
import stepDelivery from '../../assets/landing/accountants/step-delivery.svg';

export default function PayrollSpecialists() {
  return <RoleDetailPage
    title="Payroll Specialists"
    titleClassName="lg:whitespace-nowrap lg:tracking-[-4.32px]"
    intro="Add dedicated payroll specialists to your team, helping you maintain continuity and manage changing workloads with confidence."
    qualification="UK-syllabus trained and assessed"
    heroPrice="From £11.50 per hour."
    heroImage={heroArt}
    heroImageAlt="Payroll calendar and reporting tools"
    heroHeight={747}
    fluidPhoneHero
    mobileTitleClassName="tracking-[-.54px]"
    detailSectionHeight={770}
    detailCardHeight={650}
    category="Payroll administration"
    handles={['Employee setup and leavers', 'Payroll processing', 'Statutory pay calculations', 'Pension administration', 'Payroll reconciliations', 'RTI submissions', 'Payroll queries and reporting']}
    benefitSubtitle={<>From <span className="text-brand-lime">£11.50</span> per hour*</>}
    benefits={['Your payroll specialist in our Dhaka office', 'Direct contact via Workspace & WhatsApp', 'Secure Workspace and UK cloud storage', 'UK-based support and accountability', 'Supervision and quality checks', 'Continuity cover', 'UK professional indemnity cover']}
    footnote="*Rates vary by experience, team size and commitment length."
    steps={[
      { icon: stepNeed, copy: 'Tell us what you need' },
      { icon: stepMatch, copy: 'We match and assess the right professional.' },
      { icon: stepWorkspace, copy: 'You work directly with them through our secure Workspace.' },
      { icon: stepDelivery, copy: 'We manage the ongoing delivery.' },
    ]}
  />;
}
