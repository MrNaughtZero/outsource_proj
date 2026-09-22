import { useRef, useState } from 'react';
import hero from '../../assets/landing/images/support.png';
import platform from '../../assets/landing/images/how_workspace.png';
import recruit from '../../assets/landing/images/icons/how_recruit.svg';
import payroll from '../../assets/landing/images/icons/how_payroll.svg';
import training from '../../assets/landing/images/icons/how_training.svg';
import support from '../../assets/landing/images/icons/how_support.svg';
import tasks from '../../assets/landing/images/icons/how_tasks.svg';
import upload from '../../assets/landing/images/icons/how_upload.svg';
import messages from '../../assets/landing/images/icons/how_messages.svg';
import time from '../../assets/landing/images/icons/how_time.svg';
import growth from '../../assets/landing/images/icons/how_growth.svg';
import ReliefSection from './components/ReliefSection';

const STEPS = [
  'Tell us about your workload, priorities and the skills you need.',
  'We match and test the right finance professionals for your team.',
  'We help you onboard your people and set up access and communication.',
  'You work directly with your people while we manage ongoing delivery.',
];

const HANDLED = [
  ['Sourcing & selection', recruit],
  ['Staff HR & payroll', payroll],
  ['UK-focused training', training],
  ['Managed delivery & support', support],
] as const;

const TOOLS = [
  ['Tasks & progress', "See what's in progress, what's done and what's next.", tasks],
  ['Files from uploads, email & WhatsApp', 'Files you upload or send to your dedicated people are automatically saved in one secure workplace.', upload],
  ['Messages & calls', 'Call or message your dedicated people through our platform, or via WhatsApp from your mobile.', messages],
  ['Timesheets & activity', 'Track time logged and activity across your tasks.', time],
] as const;

export default function HowItWorks() {
  const toolsScrollerRef = useRef<HTMLDivElement>(null);
  const [toolsScrollProgress, setToolsScrollProgress] = useState(0);

  const updateToolsScrollProgress = () => {
    const scroller = toolsScrollerRef.current;
    if (!scroller) return;

    const maximumScroll = scroller.scrollWidth - scroller.clientWidth;
    setToolsScrollProgress(maximumScroll > 0 ? (scroller.scrollLeft / maximumScroll) * 100 : 0);
  };

  const scrollToolsTo = (progress: number) => {
    const scroller = toolsScrollerRef.current;
    setToolsScrollProgress(progress);
    if (!scroller) return;

    scroller.scrollLeft = ((scroller.scrollWidth - scroller.clientWidth) * progress) / 100;
  };

  return (
    <div className="how-page overflow-hidden bg-brand-purple-dark text-white">
      <section className="how-hero lg:h-[681px] lg:bg-gradient-to-b lg:from-brand-purple-dark lg:to-[rgba(57,24,116,0.53)] lg:px-0 lg:pb-20 lg:pt-[156px]">
        <div className="fig-shell flex flex-col items-center justify-center px-5 pb-[60px] pt-[151px] max-[379px]:px-0 md:px-0 md:pt-[122px] lg:grid lg:h-full lg:grid-cols-[484px_480px] lg:gap-6 lg:px-0 lg:py-0">
          <div className="h-[268px] w-full lg:order-2 lg:h-[445px] lg:w-[480px]">
            <img src={hero} alt="Your Outsource team" className="h-full w-full object-contain" />
          </div>
          <div className="mt-4 text-center lg:order-1 lg:mt-0 lg:w-[484px] lg:text-left">
            <h1
              className="how-hero-heading text-[36px] font-medium leading-[42px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-.64px]"
            >
              A clearer way to work with your outsourced <span className="text-brand-lime">finance team.</span>
            </h1>
            <p className="mt-4 text-lg leading-6 lg:mt-8 lg:text-2xl lg:font-light lg:leading-[normal] lg:tracking-normal">
              Work directly with dedicated finance professionals through our secure workspace, while we manage the people and day-to-day delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto rounded-t-3xl bg-[radial-gradient(ellipse_at_top,#492786_0%,#341768_50%,#1f0849_100%)] px-10 pb-20 pt-[60px] lg:h-[478px] lg:rounded-none lg:bg-gradient-to-b lg:from-[#2d1160] lg:to-[#190a37] lg:px-6 lg:pb-[60px] lg:pt-0 xl:px-[108px]">
        <div className="mx-auto flex h-full flex-col items-center lg:h-[418px] lg:w-full lg:max-w-[1064px] lg:gap-[60px] lg:rounded-3xl lg:border lg:border-[rgba(92,52,161,0.37)] lg:bg-gradient-to-b lg:from-[#411c80] lg:to-[rgba(65,28,128,0)] lg:pb-20 lg:pt-[60px]">
          <h2 className="text-center text-[30px] font-medium leading-9 lg:text-[42px] lg:leading-[48px]">
            How our managed <span className="text-brand-lime">outsourcing model</span> works
          </h2>
          <div className="relative mt-12 w-full lg:mt-0 lg:h-[170px] lg:w-[1064px]">
            <ol className="relative flex flex-col gap-5 lg:hidden">
              <span aria-hidden className="absolute bottom-5 left-5 top-5 w-px bg-white/20" />
              {STEPS.map((step, index) => (
                <li key={step} className="relative flex min-h-[70px] gap-4">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime text-lg font-bold text-brand-purple-mid">
                    {index + 1}
                  </span>
                  <p className="text-lg leading-6">{step}</p>
                </li>
              ))}
            </ol>
            <div className="hidden h-[170px] w-full flex-col items-center gap-6 lg:flex">
              <ol className="relative grid h-[50px] w-full max-w-[992px] grid-cols-4">
                <span aria-hidden className="absolute left-[121px] right-[121px] top-[25px] h-px bg-white/20" />
                {STEPS.map((step, index) => (
                  <li key={step} className="relative flex justify-center">
                    <span className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand-lime text-2xl font-bold leading-[30px] text-brand-purple-mid">
                      {index + 1}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="grid w-full max-w-[992px] grid-cols-4 gap-6">
                {STEPS.map((step, index) => (
                  <p key={step} className={`px-3 text-center text-lg leading-6 ${index === 3 ? 'lg:px-6' : ''}`}>
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-[#190a36] px-10 py-[60px] lg:h-[424px] lg:gap-[60px] lg:px-6 xl:px-[144px]">
        <h2 className="text-center text-[30px] font-medium leading-9 lg:text-2xl lg:leading-8">
          <span className="text-brand-lime">We manage</span> the people behind your work.
        </h2>
        <div className="mt-[60px] grid w-full grid-cols-2 gap-x-5 gap-y-10 lg:mt-0 lg:flex lg:h-32 lg:max-w-[992px] lg:gap-3">
          {HANDLED.map(([title, icon], index) => (
            <div key={title} className="contents">
              <article className="flex flex-col items-center gap-3 text-center lg:min-w-0 lg:flex-1 lg:gap-[30px]">
                <img src={icon} alt="" className="h-[50px] w-[50px]" />
                <h3 className={`text-lg font-bold leading-6 lg:text-2xl lg:leading-6 ${index === 1 ? 'lg:w-[204px]' : 'lg:w-full'}`}>{title}</h3>
              </article>
              {index < HANDLED.length - 1 && <span aria-hidden className="hidden w-0 self-stretch border-l border-white/20 lg:block" />}
            </div>
          ))}
        </div>
        <p className="mt-6 w-full max-w-[992px] text-xs font-normal leading-[18px] text-brand-periwinkle lg:mt-0 lg:text-lg lg:font-light lg:leading-6">
          Your dedicated people work from our managed office in Dhaka, with UK-based support and accountability.
        </p>
      </section>

      <section className="h-[1107px] bg-gradient-to-b from-[#37176e] to-[rgba(25,10,54,.23)] px-10 py-[60px] lg:h-[1435px] lg:px-6 lg:pb-[60px] lg:pt-[120px] xl:px-[144px]">
        <div className="mx-auto lg:w-full lg:max-w-[992px]">
          <h2 className="text-center text-[30px] font-medium leading-9 lg:text-[42px] lg:leading-[48px]">
            <span className="text-brand-lime">One workspace. </span>Total clarity.
          </h2>
          <div className="relative mx-auto mt-10 h-[242px] w-[355px] max-w-full overflow-hidden max-[379px]:w-full lg:mt-[60px] lg:h-[675px] lg:w-full">
            <img src={platform} alt="Outsource.com workspace" className="h-full w-full max-w-none object-contain lg:absolute lg:left-[2.32%] lg:top-0 lg:h-[675px] lg:w-full" />
          </div>
          <div
            ref={toolsScrollerRef}
            onScroll={updateToolsScrollProgress}
            className="how-tools-carousel how-tools-carousel-mobile mt-10 flex max-w-none gap-5 overflow-x-auto lg:mt-8 lg:gap-4"
          >
            {TOOLS.map(([title, body, icon]) => (
              <article key={title} className="w-[180px] shrink-0 rounded-lg border-2 border-brand-purple bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 p-5 lg:h-[276px] lg:w-[290px] lg:p-6">
                <div className="flex items-start gap-2 lg:block">
                  <img src={icon} alt="" className="h-8 w-8 lg:h-[60px] lg:w-[60px]" />
                  <h3 className="text-xs font-bold leading-[18px] text-brand-lime lg:mt-4 lg:text-lg lg:leading-6">{title}</h3>
                </div>
                <p className="mt-2 text-xs leading-[18px] lg:text-lg lg:leading-6">{body}</p>
              </article>
            ))}
            <div aria-hidden className="w-5 shrink-0 max-[379px]:w-0 lg:hidden" />
          </div>
          <input
            aria-label="Scroll workspace features"
            className="how-tools-scrollbar mt-6 w-full lg:mt-8"
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={toolsScrollProgress}
            onChange={(event) => scrollToolsTo(Number(event.target.value))}
          />
          <div className="mt-10 lg:hidden">
            <div className="flex items-start gap-2">
              <img src={growth} alt="" className="h-8 w-8 shrink-0" />
              <h3 className="text-xs font-medium leading-[18px]">
                A workspace that <span className="text-brand-lime">scales with your finance team.</span>
              </h3>
            </div>
            <p className="mt-2 text-xs font-light leading-[18px]">
              For larger organisations, we can tailor the platform around your operation – including workflows, team structure, dashboards and the key metrics you want to monitor.
            </p>
          </div>
          <div className="mt-8 hidden h-[88px] items-center gap-4 lg:flex">
            <img src={growth} alt="" className="h-[50px] w-[50px] shrink-0" />
            <div className="min-w-0 flex-1">
              <h3 className="text-2xl font-medium leading-8">A workspace that <span className="text-brand-lime">scales with your finance team.</span></h3>
              <p className="mt-2 text-lg font-light leading-6">For larger organisations, we can tailor the platform around your operation – including workflows, team<br />structure, dashboards and the key metrics you want to monitor.</p>
            </div>
          </div>
        </div>
      </section>

      <ReliefSection
        firstCard={{
          to: '/careers',
          title: 'Explore',
          highlight: 'finance roles',
          copy: 'Find the finance professionals available for your team.',
        }}
      />
    </div>
  );
}
