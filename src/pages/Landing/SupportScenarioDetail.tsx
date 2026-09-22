import { BarChart3, Compass, MessageCircle, PoundSterling, ShieldCheck, UsersRound } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReliefSection from './components/ReliefSection';
import { findSupportScenario, SUPPORT_SCENARIOS } from './supportScenariosData';

const SCENARIO_ICONS = [Compass, MessageCircle, PoundSterling, UsersRound, ShieldCheck, BarChart3] as const;

export default function SupportScenarioDetail() {
  const { scenario: scenarioSlug } = useParams();
  const scenario = findSupportScenario(scenarioSlug);

  return (
    <div className="support-detail-page bg-brand-purple-dark text-white">
      <section className="px-10 pb-[60px] pt-[141px] max-[379px]:px-5">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="flex items-center gap-2 text-lg leading-6"><Link to="/support-scenarios">Solutions</Link><span>›</span><span className="font-bold text-brand-lime">{scenario.label}</span></div>
          <article className="mt-5 overflow-hidden rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20">
            <div className="aspect-[267/132] w-full overflow-hidden"><img src={scenario.image} alt={scenario.imageAlt} className="h-full w-full object-cover" /></div>
            <div className="space-y-4 px-6 pb-[30px] pt-5">
              <div>
                <h1 className="text-lg font-medium leading-6">
                  {scenario.titleStart}<span className="text-brand-lime">{scenario.titleHighlight}</span>{scenario.titleEnd}
                </h1>
                <p className="mt-1 text-xs leading-[18px]">{scenario.intro}</p>
              </div>
              <div className="h-px bg-white/20" />
              <ol>{scenario.steps.map(([title, body], index) => <li key={title} className="flex gap-4"><div className="flex flex-col items-center"><span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand-lime text-xs font-bold text-brand-purple-mid">{index + 1}</span>{index < 2 && <span className="w-px flex-1 bg-white/20" />}</div><div className={index < 2 ? 'pb-6' : ''}><h2 className="text-lg font-bold leading-6">{title}</h2><p className="mt-[10px] text-xs leading-[18px]">{body}</p></div></li>)}</ol>
              <div className="h-px bg-white/20" />
              <div>
                <p className="text-xs font-light leading-[18px] text-brand-lime">{scenario.supportTitle}</p>
                <p className="mt-3 text-xs leading-[18px] text-brand-periwinkle">
                  {scenario.supportItems.map((item, index) => <span key={item}>{index > 0 && <span className="mx-2 text-brand-lime">•</span>}{item}</span>)}
                </p>
              </div>
            </div>
          </article>
          <div className="scenario-cards-carousel support-scenario-tabs-scrollbar mt-5 flex gap-3 overflow-x-auto pb-4">
            {SUPPORT_SCENARIOS.map((tab, index) => {
              const Icon = SCENARIO_ICONS[index];
              return <Link key={tab.slug} to={`/support-scenarios/${tab.slug}`} className={`flex h-[62px] shrink-0 items-center gap-2 rounded-lg border-2 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 px-4 text-xs font-bold leading-[18px] text-brand-lime ${tab.slug === scenario.slug ? 'border-brand-lime' : 'border-brand-purple'}`}><Icon size={30} strokeWidth={1.7} />{tab.label}</Link>;
            })}
          </div>
        </div>
      </section>
      <ReliefSection mobileClassName="h-[676px]" fluidMobile firstCard={{ to: '/roles', title: 'Explore', highlight: 'finance roles', copy: 'Find the finance professionals available for your team.' }} secondCard={{ to: '/how-it-works', title: 'See', highlight: 'how it works', copy: 'Learn how we match, onboard and manage your people.' }} />
    </div>
  );
}
