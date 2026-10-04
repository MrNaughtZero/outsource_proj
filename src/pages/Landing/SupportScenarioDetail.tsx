import { useRef, useState } from 'react';
import compassIcon from '../../assets/landing/solutions/compass.svg';
import messageIcon from '../../assets/landing/solutions/message-chat.svg';
import poundIcon from '../../assets/landing/solutions/pound-circle.svg';
import capacityIcon from '../../assets/landing/solutions/users-plus.svg';
import oversightIcon from '../../assets/landing/solutions/shield-check.svg';
import growthIcon from '../../assets/landing/solutions/bar-group.svg';
import { Link, useParams } from 'react-router-dom';
import ReliefSection from './components/ReliefSection';
import { findSupportScenario, SUPPORT_SCENARIOS } from './supportScenariosData';
import useDesktopDragScroll from './hooks/useDesktopDragScroll';

const SCENARIO_ICONS = [compassIcon, messageIcon, poundIcon, capacityIcon, oversightIcon, growthIcon] as const;

export default function SupportScenarioDetail() {
  const tabsScrollerRef = useRef<HTMLDivElement>(null);
  const [tabsProgress, setTabsProgress] = useState(0);
  useDesktopDragScroll(tabsScrollerRef);
  const { scenario: scenarioSlug } = useParams();
  const scenario = findSupportScenario(scenarioSlug);

  const updateTabsProgress = () => {
    const scroller = tabsScrollerRef.current;
    if (!scroller) return;
    const maximum = scroller.scrollWidth - scroller.clientWidth;
    setTabsProgress(maximum > 0 ? scroller.scrollLeft / maximum * 100 : 0);
  };

  const scrollTabsTo = (progress: number) => {
    const scroller = tabsScrollerRef.current;
    if (!scroller) return;
    scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) * progress / 100;
    setTabsProgress(progress);
  };

  return (
    <div className="support-detail-page bg-brand-purple-dark text-white">
      <section className="px-10 pb-[60px] pt-[189px] lg:pt-[141px] max-[379px]:px-5">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="flex items-center gap-2 text-lg leading-6"><Link to="/support-scenarios">Solutions</Link><span>›</span><span className="font-bold text-brand-lime">{scenario.label}</span></div>
          <article className="mt-5 overflow-hidden rounded-lg border-2 border-brand-purple/80 bg-[linear-gradient(0deg,rgba(65,28,128,.8),rgba(59,24,123,.2)_139.98%)]">
            <div className="relative aspect-[267/132] w-full overflow-hidden"><img src={scenario.image} alt={scenario.imageAlt} className="h-full w-full object-cover" /><div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2b1b48]/0 to-[#2b1b48]/70" /></div>
            <div className="space-y-4 px-6 pb-[30px] pt-5">
              <div>
                <h1 className="text-lg font-medium leading-6">
                  {scenario.titleStart}<span className="text-brand-lime">{scenario.titleHighlight}</span>{scenario.titleEnd}
                </h1>
                <p className="mt-1 text-lg leading-6 text-brand-periwinkle">{scenario.intro}</p>
              </div>
              <div className="h-px bg-white/20" />
              <ol>{scenario.steps.map(([title, body], index) => <li key={title} className="flex gap-4"><div className="flex flex-col items-center"><span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand-lime text-xs font-bold text-brand-purple-mid">{index + 1}</span>{index < 2 && <span className="w-px flex-1 bg-white/20" />}</div><div className={index < 2 ? 'pb-6' : ''}><h2 className="text-lg font-bold leading-6">{title}</h2><p className="mt-[10px] text-lg leading-6 text-brand-periwinkle">{body}</p></div></li>)}</ol>
              <div className="h-px bg-white/20" />
              <div>
                <p className="text-lg font-light leading-6 text-brand-lime">{scenario.supportTitle}</p>
                <ul className="support-finishing-list mt-3 text-lg leading-6 text-brand-periwinkle">
                  {scenario.supportItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </article>
          <div ref={tabsScrollerRef} onScroll={updateTabsProgress} className="desktop-drag-scroll scenario-cards-carousel support-scenario-tabs-scrollbar mt-5 flex gap-3 overflow-x-auto">
            {SUPPORT_SCENARIOS.map((tab, index) => {
              const icon = SCENARIO_ICONS[index];
              return <Link key={tab.slug} to={`/support-scenarios/${tab.slug}`} className={`flex h-[62px] shrink-0 items-center gap-2 rounded-lg border-2 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 px-4 text-lg font-bold leading-6 text-brand-lime ${tab.slug === scenario.slug ? 'border-brand-lime' : 'border-brand-purple'}`}><img src={icon} alt="" className="h-[30px] w-[30px] shrink-0" />{tab.label}</Link>;
            })}
          </div>
          <input type="range" aria-label="Scroll solution topics" min="0" max="100" step="0.1" value={tabsProgress} onChange={(event) => scrollTabsTo(Number(event.target.value))} className="how-tools-scrollbar support-tabs-scrollbar" />
        </div>
      </section>
      <ReliefSection mobileClassName="h-[676px]" fluidMobile firstCard={{ to: '/roles', title: 'Explore', highlight: 'finance roles', copy: 'Find the finance professionals available for your team.' }} secondCard={{ to: '/how-it-works', title: 'See', highlight: 'how it works', copy: 'Learn how we match, onboard and manage your people.' }} />
    </div>
  );
}
