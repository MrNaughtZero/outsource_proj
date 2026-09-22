import RoleDetailPage from './components/RoleDetailPage';
import heroArt from '../../assets/landing/bookkeepers/hero-art.png';
import stepNeed from '../../assets/landing/role-detail/step-need.svg';
import stepMatch from '../../assets/landing/accountants/step-match.svg';
import stepWorkspace from '../../assets/landing/role-detail/step-workspace.svg';
import stepDelivery from '../../assets/landing/accountants/step-delivery.svg';

export default function Bookkeepers() {
  return <RoleDetailPage
    title="Bookkeepers"
    intro="Add experienced bookkeepers to your team, giving you dependable day-to-day support and more time to focus on your clients and business."
    qualification="UK-syllabus trained and assessed"
    heroPrice="From £11.50 per hour."
    heroImage={heroArt}
    heroImageAlt="Bookkeeping records and reporting tools"
    heroHeight={747}
    fluidPhoneHero
    mobileTitleClassName="tracking-[-.54px]"
    detailSectionHeight={770}
    detailCardHeight={650}
    category="Day-to-day bookkeeping"
    handles={['Transaction processing', 'Sales and purchase invoices', 'Expense recording', 'Bank reconciliations', 'Supplier payment preparation', 'Credit control support', 'Monthly bookkeeping reports']}
    benefitSubtitle={<>From <span className="text-brand-lime">£11.50</span> per hour*</>}
    benefits={['Your bookkeeper in our Dhaka office', 'Direct contact via Workspace & WhatsApp', 'Secure Workspace and UK cloud storage', 'UK-based support and accountability', 'Supervision and quality checks', 'Continuity cover', 'UK professional indemnity cover']}
    footnote="*Rates vary by experience, team size and commitment length."
    steps={[
      { icon: stepNeed, copy: 'Tell us what you need' },
      { icon: stepMatch, copy: 'We match and assess the right professional.' },
      { icon: stepWorkspace, copy: 'You work directly with them through our secure Workspace.' },
      { icon: stepDelivery, copy: 'We manage the ongoing delivery.' },
    ]}
  />;
}
