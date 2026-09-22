import RoleDetailPage from './components/RoleDetailPage';
import heroArt from '../../assets/landing/accountants/hero-art.png';
import stepNeed from '../../assets/landing/accountants/step-need.svg';
import stepMatch from '../../assets/landing/accountants/step-match.svg';
import stepWorkspace from '../../assets/landing/accountants/step-workspace.svg';
import stepDelivery from '../../assets/landing/accountants/step-delivery.svg';

export default function Accountants() {
  return <RoleDetailPage
    title="Accountants"
    intro="Add skilled accountants to your team, giving you the capacity to take on more and keep work moving as your needs grow."
    qualification="UK-syllabus trained and assessed"
    heroPrice="From £15.50 per hour."
    heroImage={heroArt}
    heroImageAlt="Finance dashboards and reporting tools"
    heroImageFit="cover"
    heroHeight={716}
    fluidPhoneHero
    mobileHeroImageTop="-3.53%"
    mobileTitleClassName="tracking-[-.36px]"
    detailSectionHeight={770}
    detailCardHeight={650}
    category="Accounts and reporting"
    handles={['Accounts preparation', 'Reconciliations', 'Month-end close', 'Management accounts', 'Financial reporting', 'Budgets and forecasts', 'VAT and statutory support']}
    benefitSubtitle={<>From <span className="text-brand-lime">£15.50</span> per hour*</>}
    benefits={['Your accountant in our Dhaka office', 'Direct contact via Workspace & WhatsApp', 'Secure Workspace and UK cloud storage', 'UK-based support and accountability', 'Supervision and quality checks', 'Continuity cover', 'UK professional indemnity cover']}
    footnote="*Rates vary by experience, team size and commitment length."
    steps={[
      { icon: stepNeed, copy: 'Tell us what you need' },
      { icon: stepMatch, copy: 'We match and assess the right professional.' },
      { icon: stepWorkspace, copy: 'You work directly with them through our secure Workspace.' },
      { icon: stepDelivery, copy: 'We manage the ongoing delivery.' },
    ]}
  />;
}
