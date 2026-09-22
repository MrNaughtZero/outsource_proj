import { BarChart3, Compass, MessageCircle, PoundSterling, ShieldCheck, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReliefSection from '../components/ReliefSection';
import { SUPPORT_SCENARIOS } from '../supportScenariosData';

const SCENARIO_ICONS = [Compass, MessageCircle, PoundSterling, UsersRound, ShieldCheck, BarChart3] as const;

export default function SupportScenariosMobile() {
  return (
    <div className="support-mobile bg-brand-purple-dark text-white">
      <section className="flex h-[365px] items-end px-10 pb-[60px] max-[379px]:px-5">
        <div className="w-full">
          <h1 className="text-[36px] font-medium leading-[42px]">Real problems.<br />Real <span className="text-brand-lime">Solutions.</span></h1>
          <p className="mt-4 text-lg leading-6">Choose where you need help.</p>
        </div>
      </section>

      <section className="min-h-[484px] bg-gradient-to-b from-[#38176f] to-[#2c105c] px-10 py-[60px] max-[380px]:px-5">
        <div className="grid grid-cols-2 gap-5 max-[380px]:grid-cols-1">
          {SUPPORT_SCENARIOS.map((scenario, index) => {
            const Icon = SCENARIO_ICONS[index];

            return (
            <Link
              key={scenario.slug}
              to={`/support-scenarios/${scenario.slug}`}
              className="relative flex min-h-[108px] min-w-0 flex-col rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 p-4"
            >
              <div className="flex items-start justify-between"><Icon className="h-[30px] w-[30px] text-brand-lime" strokeWidth={1.7} /><span className="text-lg leading-none text-brand-lime">→</span></div>
              <h2 className="mt-2 text-xs font-bold leading-[18px] text-brand-lime">{scenario.label}</h2>
              <p className="text-xs leading-[18px]">{scenario.cardCopy}</p>
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
