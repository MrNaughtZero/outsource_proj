import RoleDetailPage from './components/RoleDetailPage';
import heroArt from '../../assets/landing/virtual-cfos/hero-art.png';
import stepNeed from '../../assets/landing/role-detail/step-need.svg';
import stepMatch from '../../assets/landing/accountants/step-match.svg';
import stepWorkspace from '../../assets/landing/role-detail/step-workspace.svg';
import stepDelivery from '../../assets/landing/accountants/step-delivery.svg';

export default function VirtualCfos() {
  return <RoleDetailPage
    title="Virtual CFOs"
    intro="Bring senior finance expertise into your business, giving you greater financial insight and strategic support without the need for a full-time in-house CFO."
    qualification="Assessed for financial leadership and strategic insight"
    heroPrice="Tailored pricing"
    heroImage={heroArt}
    heroImageAlt="Financial leadership dashboards and forecasting tools"
    heroHeight={778}
    mobileHeroHeight={781}
    fluidPhoneHero
    mobileTitleClassName="tracking-[-.36px]"
    mobileQualification="UK-syllabus trained and assessed"
    mobileHeroPrice="From £15.50 per hour."
    detailSectionHeight={686}
    mobileDetailSectionHeight={896}
    detailCardHeight={566}
    category="Financial insight and planning"
    handles={['Financial analysis and insights', 'Management reporting', 'Cash flow forecasting', 'Budgets and forecasts', 'Strategic planning support', 'Funding and investment support', 'Board reports and presentations']}
    benefitSubtitle={<>Pricing <span className="text-brand-lime">tailored</span> to your needs</>}
    benefits={['Your dedicated senior finance lead', 'Direct contact via Workspace & WhatsApp', 'Secure Workspace and UK cloud storage', 'UK-based support and accountability', 'Supervision and quality checks', 'Continuity cover', 'UK professional indemnity cover']}
    steps={[
      { icon: stepNeed, copy: 'Tell us what you need' },
      { icon: stepMatch, copy: 'We match and assess the right professional.' },
      { icon: stepWorkspace, copy: 'You work directly with them through our secure Workspace.' },
      { icon: stepDelivery, copy: 'We manage the ongoing delivery.' },
    ]}
  />;
}
