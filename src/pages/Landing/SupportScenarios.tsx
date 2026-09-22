import { useRef, useState } from 'react';
import SupportScenariosMobile from './mobile/SupportScenariosMobile';
import ReliefSection from './components/ReliefSection';
import { DEFAULT_SUPPORT_SCENARIO, findSupportScenario, SUPPORT_SCENARIOS } from './supportScenariosData';

export default function SupportScenarios() {
  const cardsScrollerRef = useRef<HTMLDivElement>(null);
  const [cardsScrollProgress, setCardsScrollProgress] = useState(0);
  const [activeScenarioSlug, setActiveScenarioSlug] = useState(DEFAULT_SUPPORT_SCENARIO.slug);
  const activeScenario = findSupportScenario(activeScenarioSlug);

  const updateCardsScrollProgress = () => {
    const scroller = cardsScrollerRef.current;
    if (!scroller) return;

    const maximumScroll = scroller.scrollWidth - scroller.clientWidth;
    setCardsScrollProgress(maximumScroll > 0 ? (scroller.scrollLeft / maximumScroll) * 100 : 0);
  };

  const scrollCardsTo = (progress: number) => {
    const scroller = cardsScrollerRef.current;
    setCardsScrollProgress(progress);
    if (!scroller) return;

    scroller.scrollLeft = ((scroller.scrollWidth - scroller.clientWidth) * progress) / 100;
  };

  return (
    <>
      <main className="solutions-page-desktop hidden bg-brand-purple-dark text-white lg:block">
        <section className="h-96 bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,0)]">
          <div className="fig-shell pt-[180px]">
            <h1 className="figma-heading-gradient figma-heading-support whitespace-nowrap text-[64px] font-medium leading-[72px] tracking-[-.96px]">
              Real Problems. Real <span className="text-brand-lime">Solutions.</span>
            </h1>
            <p className="mt-8 w-[984px] text-2xl font-light leading-[normal]">
              Discover how outsourced finance professionals can help you manage costs, increase capacity and keep work moving.
            </p>
          </div>
        </section>

        <section className="pb-[120px]">
          <div className="fig-shell min-h-[773px] overflow-hidden rounded-lg border border-brand-purple bg-gradient-to-b from-brand-purple-mid to-[rgba(65,28,128,.28)] px-[59px] py-[39px]">
            <div className="flex min-h-[204px] w-[871px] items-center gap-6">
              <div className="flex min-h-[204px] w-[491px] shrink-0 flex-col gap-3 py-6">
                <h2 className="text-[42px] font-medium leading-[48px]">
                  {activeScenario.titleStart}
                  <span className="text-brand-lime">{activeScenario.titleHighlight}</span>
                  {activeScenario.titleEnd}
                </h2>
                <p className="text-lg font-light leading-6">
                  {activeScenario.intro}
                </p>
              </div>
              <div className="relative h-[204px] min-w-0 flex-1 overflow-hidden">
                <img
                  src={activeScenario.image}
                  alt={activeScenario.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
                  }}
                />
              </div>
            </div>

            <div className="mt-[30px] flex w-[871px] flex-col gap-4">
              <ol className="flex w-full items-start gap-2">
                {activeScenario.steps.map(([title], index) => (
                  <li
                    key={title}
                    className={`flex items-center gap-3 ${index === 0 ? 'w-[286px] pl-4' : index === 1 ? 'w-[290px]' : 'min-w-0 flex-1'}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-lime text-lg font-bold leading-6 text-brand-purple-mid">
                      {index + 1}
                    </span>
                    <div className="flex min-w-0 flex-1 items-center gap-2">
                      <h3 className="shrink-0 whitespace-nowrap text-lg font-bold leading-6">{title}</h3>
                      <span aria-hidden className="h-px min-w-0 flex-1 bg-white/20" />
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid w-full grid-cols-3 gap-3">
                {activeScenario.steps.map(([title, body]) => (
                  <p key={title} className="px-4 text-xs font-normal leading-[18px]">
                    {body}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-[30px] flex w-[871px] flex-col gap-3">
              <p className="text-lg font-light leading-6 text-brand-lime">{activeScenario.supportTitle}</p>
              <div className="flex items-center gap-3 text-xs leading-[18px] text-brand-periwinkle">
                {activeScenario.supportItems.map((point, index) => (
                  <div key={point} className="contents">
                    <span className="whitespace-nowrap">{point}</span>
                    {index < activeScenario.supportItems.length - 1 && <span aria-hidden className="h-1 w-1 rounded-full bg-brand-lime" />}
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={cardsScrollerRef}
              onScroll={updateCardsScrollProgress}
              className="scenario-cards-carousel mt-[30px] flex h-[179px] w-[931px] gap-6 overflow-x-auto"
            >
              {SUPPORT_SCENARIOS.map((scenario) => (
                <button
                  key={scenario.slug}
                  type="button"
                  aria-pressed={scenario.slug === activeScenario.slug}
                  onClick={() => setActiveScenarioSlug(scenario.slug)}
                  className={`flex h-[179px] w-[254px] shrink-0 flex-col rounded-lg p-[30px] text-left transition-colors ${
                    scenario.slug === activeScenario.slug
                      ? 'border-[1.5px] border-brand-lime bg-[#4e2790]'
                      : 'border-2 border-brand-purple bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 hover:border-brand-lime/70'
                  }`}
                >
                  <span className="text-lg font-bold uppercase leading-6 text-brand-lime">{scenario.label}</span>
                  <span className="mt-4 text-lg leading-6">{scenario.cardCopy}</span>
                </button>
              ))}
              <div aria-hidden className="w-0 shrink-0" />
            </div>

            <input
              aria-label="Scroll support scenarios"
              className="scenario-cards-scrollbar mt-[30px] w-[871px]"
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={cardsScrollProgress}
              onChange={(event) => scrollCardsTo(Number(event.target.value))}
            />
          </div>
        </section>

        <ReliefSection
          firstCard={{
            to: '/careers',
            title: 'Explore',
            highlight: 'finance roles',
            copy: 'Find the finance professionals available for your team.',
          }}
          secondCard={{
            to: '/how-it-works',
            title: 'See',
            highlight: 'how it works',
            copy: 'Learn how we match, onboard and manage your people.',
          }}
        />
      </main>

      <div className="lg:hidden">
        <SupportScenariosMobile />
      </div>
    </>
  );
}
