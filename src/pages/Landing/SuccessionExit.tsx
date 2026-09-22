import { ArrowUpRight } from 'lucide-react';
import hero from '../../assets/landing/images/outpractice2.png';
import sunset from '../../assets/landing/images/icons/succession_sunset.svg';
import anchor from '../../assets/landing/images/icons/succession_anchor.svg';
import users from '../../assets/landing/images/icons/succession_users.svg';
import coins from '../../assets/landing/images/icons/succession_coins.svg';

const HELP = [
  [<><b className="text-brand-lime">Planning retirement</b> or easing back in the next 1-5 years.</>, sunset],
  [<>Concerned about <b className="text-brand-lime">practice dependency</b> on key person risk</>, anchor],
  [<>Looking to <b className="text-brand-lime">maintain client service</b> and team stability</>, users],
  [<><b className="text-brand-lime">Exploring</b> value enhancement before transition.</>, coins],
] as const;

export default function SuccessionExit() {
  return <div className="succession-page bg-brand-purple-dark text-white">
    <section className="h-[722px] bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,.53)] px-10 py-[60px] pt-[141px] lg:h-[681px] lg:px-0 lg:pb-20 lg:pt-[156px]"><div className="flex h-full flex-col gap-4 lg:mx-auto lg:h-[445px] lg:w-[991px] lg:max-w-[calc(100%-32px)] lg:flex-row lg:items-center lg:gap-6"><img src={hero} alt="" className="h-[268px] w-full object-contain lg:order-2 lg:h-[445px] lg:min-w-0 lg:flex-1" /><div className="lg:order-1 lg:w-[534px] lg:shrink-0"><h1 className="figma-heading-gradient figma-heading-succession text-[36px] font-medium leading-[42px] lg:w-[576px] lg:origin-left lg:scale-x-[0.92] lg:text-[64px] lg:leading-[72px] lg:tracking-[-2px]"><span className="block">Thinking about</span><span className="block whitespace-nowrap"><span className="text-brand-lime">stepping back</span> from</span><span className="block">your practice?</span></h1><p className="mt-4 text-lg leading-6 lg:mt-8 lg:text-2xl lg:font-light lg:leading-[31px]"><a href="https://outpractice.com" target="_blank" rel="noreferrer" className="text-brand-lime underline">OutPractice</a> helps accountancy firm owners protect continuity, retain value and transition with confidence.</p></div></div></section>
    <section className="h-[602px] bg-gradient-to-b from-brand-purple-mid to-[#2e1261]/35 px-10 py-[60px] lg:h-[394px] lg:bg-gradient-to-b lg:from-[#2c1160] lg:to-[#270e57] lg:px-0 lg:py-0">
      <div className="h-full lg:mx-auto lg:flex lg:w-[1072px] lg:max-w-[calc(100%-32px)] lg:flex-col lg:items-center lg:gap-[60px] lg:rounded-lg lg:border lg:border-brand-purple lg:bg-gradient-to-b lg:from-brand-purple-mid lg:to-brand-purple-mid/0 lg:px-[39px] lg:pb-[79px] lg:pt-[59px]">
        <h2 className="text-center text-[30px] font-medium leading-9 lg:w-full lg:text-[42px] lg:leading-[48px]">
          <span className="lg:hidden">Why <span className="text-brand-lime">Outsource.com</span>?</span>
          <span className="hidden lg:inline"><span className="text-brand-lime">OutPractice</span> can help you with:</span>
        </h2>
        <div className="mt-[60px] flex flex-col gap-5 lg:mt-0 lg:grid lg:h-[146px] lg:w-full lg:grid-cols-4 lg:gap-6">
          {HELP.map(([body, icon], index) => (
            <div
              key={index}
              className={`flex items-center gap-5 ${index < HELP.length - 1 ? 'border-b border-white/20 pb-5 lg:border-b-0' : ''} ${
                index > 0 ? 'lg:before:absolute lg:before:-left-3 lg:before:top-0 lg:before:h-[146px] lg:before:w-px lg:before:bg-white/20' : ''
              } lg:relative lg:flex-col lg:gap-6 lg:px-[6px] lg:pb-0 lg:text-center`}
            >
              <img src={icon} alt="" className="h-[50px] w-[50px] shrink-0" />
              <p className="text-lg leading-6">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="h-[262px] bg-brand-purple-mid p-10 lg:h-[407px] lg:bg-gradient-to-b lg:from-[#270e57] lg:to-[#220a4d] lg:px-0 lg:pb-[120px] lg:pt-10">
      <div className="lg:mx-auto lg:flex lg:h-[247px] lg:w-[1072px] lg:max-w-[calc(100%-32px)] lg:items-center lg:gap-6 lg:rounded-lg lg:border lg:border-brand-purple/40 lg:bg-gradient-to-b lg:from-brand-purple-mid lg:to-brand-purple-mid/20 lg:p-[59px]">
        <div className="lg:flex lg:w-[510px] lg:shrink-0 lg:flex-col lg:gap-4">
          <h2 className="text-2xl font-bold leading-7 text-brand-lime lg:text-[42px] lg:font-medium lg:leading-[48px]">Outpractice.com</h2>
          <p className="mt-3 text-xs font-light leading-[18px] lg:mt-0 lg:text-lg lg:leading-6">OutPractice.com is a specialist service for succession and exit planning. You will be taken to their website to learn more.</p>
        </div>
        <div className="relative hidden self-stretch lg:block lg:w-0 lg:before:absolute lg:before:inset-y-0 lg:before:left-0 lg:before:w-px lg:before:bg-white/20" />
        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-6">
          <p className="hidden text-lg font-light leading-6 lg:block">Learn more about succession planning, valuation and exit options.</p>
          <a href="https://outpractice.com" target="_blank" rel="noreferrer" className="mt-8 flex h-[55px] w-full items-center justify-center gap-[10px] rounded-lg bg-brand-lime text-lg font-medium text-brand-purple-mid lg:mt-0 lg:border lg:border-brand-purple-mid">Visit Outpractice.com <ArrowUpRight size={23}/></a>
        </div>
      </div>
    </section>
  </div>;
}
