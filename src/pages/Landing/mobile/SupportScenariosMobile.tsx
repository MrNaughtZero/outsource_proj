import { Link } from 'react-router-dom';
import ReliefSection from '../components/ReliefSection';
import { SUPPORT_SCENARIOS } from '../supportScenariosData';
import compassIcon from '../../../assets/landing/solutions/compass.svg';
import messageIcon from '../../../assets/landing/solutions/message-chat.svg';
import poundIcon from '../../../assets/landing/solutions/pound-circle.svg';
import capacityIcon from '../../../assets/landing/solutions/users-plus.svg';
import oversightIcon from '../../../assets/landing/solutions/shield-check.svg';
import growthIcon from '../../../assets/landing/solutions/bar-group.svg';
import arrowIcon from '../../../assets/landing/solutions/arrow-right.svg';

const SCENARIO_ICONS = [compassIcon, messageIcon, poundIcon, capacityIcon, oversightIcon, growthIcon] as const;

export default function SupportScenariosMobile() {
  return (
    <div className="support-mobile bg-brand-purple-dark text-white">
      <section className="flex h-[365px] items-end px-10 pb-[60px] max-[379px]:px-5">
        <div className="w-full">
          <h1 className="text-[36px] font-medium leading-[42px]">Real problems.<br />Real <span className="text-brand-lime">Solutions.</span></h1>
          <p className="mt-4 text-lg leading-6">Choose where you need help.</p>
        </div>
      </section>

      <section className="solutions-mobile-cards rounded-t-3xl px-10 pb-[60px] max-[379px]:px-5">
        <div className="mx-auto grid w-full max-w-[310px] grid-cols-2 gap-5 max-[767px]:!max-w-none max-[380px]:grid-cols-1">
          {SUPPORT_SCENARIOS.map((scenario, index) => {
            return (
            <Link
              key={scenario.slug}
              to={`/support-scenarios/${scenario.slug}`}
              className="solutions-mobile-card relative flex min-h-[154px] min-w-0 flex-col rounded-lg bg-[linear-gradient(to_top,rgba(65,28,128,0.8)_0%,rgba(59,24,123,0.2)_223.82%)] p-4"
            >
              <div className="flex items-center justify-between"><img src={SCENARIO_ICONS[index]} alt="" className="shrink-0" /><img src={arrowIcon} alt="" className="shrink-0" /></div>
              <h2 className="mt-3 text-lg font-[700] leading-6 tracking-normal text-brand-lime">{scenario.label}</h2>
              <p className="mt-2 break-words text-lg font-[400] leading-6 tracking-normal text-brand-periwinkle">{scenario.cardCopy}</p>
            </Link>
            );
          })}
        </div>
      </section>

      <ReliefSection
        mobileClassName="h-[676px]"
        fluidMobile
        firstCard={{ to: '/roles', title: 'Explore', highlight: 'finance roles', copy: 'Find the finance professionals available for your team.' }}
        secondCard={{ to: '/how-it-works', title: 'See', highlight: 'how it works', copy: 'Learn how we match, onboard and manage your people.' }}
      />
    </div>
  );
}
