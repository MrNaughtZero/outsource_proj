import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ReliefSection from './ReliefSection';
import heroPattern from '../../../assets/landing/accountants/hero-pattern.png';
import checkIcon from '../../../assets/landing/accountants/check.svg';
import timelineFirst from '../../../assets/landing/accountants/timeline-first.svg';
import timelineMiddle from '../../../assets/landing/accountants/timeline-middle.svg';
import timelineLast from '../../../assets/landing/accountants/timeline-last.svg';

type Step = { icon: string; copy: string };

export type RoleDetailPageProps = {
  title: string;
  titleClassName?: string;
  intro: string;
  qualification: string;
  heroPrice: string;
  heroImage: string;
  heroImageAlt: string;
  heroHeight: number;
  mobileHeroHeight?: number;
  fluidPhoneHero?: boolean;
  mobileHeroImageTop?: string;
  mobileTitleClassName?: string;
  mobileQualification?: string;
  mobileHeroPrice?: string;
  heroImageFit?: 'cover' | 'contain';
  detailSectionHeight: number;
  mobileDetailSectionHeight?: number;
  detailCardHeight: number;
  category: string;
  handles: string[];
  benefitSubtitle: ReactNode;
  benefits: string[];
  footnote?: string;
  steps: Step[];
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col gap-4 lg:gap-6">
      {items.map((item) => (
        <li key={item} className="flex min-h-[18px] items-start gap-4 text-xs leading-[18px] lg:min-h-[26px] lg:text-lg lg:leading-6">
          <img src={checkIcon} alt="" aria-hidden className="h-[18px] w-[18px] shrink-0 lg:mt-px lg:h-6 lg:w-6" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TimelineConnector({ src }: { src?: string }) {
  return (
    <span className="relative h-[2px] flex-1">
      {src && <img src={src} alt="" aria-hidden className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90" />}
    </span>
  );
}

function DetailCard({ title, highlight, subtitle, items, footnote }: {
  title: string;
  highlight: string;
  subtitle: ReactNode;
  items: string[];
  footnote?: string;
}) {
  return (
    <article className="role-detail-card flex w-full flex-col gap-4 rounded-lg border-2 border-[rgba(92,52,161,0.8)] bg-gradient-to-r from-[rgba(65,28,128,0.8)] to-[rgba(59,24,123,0.2)] px-6 py-[30px] lg:flex-1 lg:gap-6 lg:bg-gradient-to-b lg:px-[38px] lg:py-[58px]">
      <div className="flex w-full flex-col gap-2 lg:gap-3 lg:px-1.5">
        <h2 className="text-lg font-bold leading-6 lg:text-[30px] lg:leading-9">{title} <span className="text-brand-lime">{highlight}</span></h2>
        <p className="text-xs font-light leading-[18px] lg:text-lg lg:leading-6">{subtitle}</p>
      </div>
      <div className="h-0 w-full shrink-0 border-t border-[rgba(92,52,161,0.8)]" />
      <div className={`flex w-full flex-col items-start ${footnote ? 'gap-6 lg:gap-9' : ''}`}>
        <CheckList items={items} />
        {footnote && <p className="text-xs font-light leading-[18px] text-brand-periwinkle lg:text-lg lg:leading-6">{footnote}</p>}
      </div>
    </article>
  );
}

export default function RoleDetailPage({
  title, titleClassName = '', intro, qualification, heroPrice, heroImage, heroImageAlt, heroHeight,
  mobileHeroHeight = 757, fluidPhoneHero = false, mobileHeroImageTop = '-0.17%', mobileTitleClassName = '',
  mobileQualification, mobileHeroPrice, heroImageFit = 'contain', detailSectionHeight,
  mobileDetailSectionHeight = 956, detailCardHeight, category,
  handles, benefitSubtitle, benefits, footnote, steps,
}: RoleDetailPageProps) {
  const dimensions = {
    '--role-hero-height': `${heroHeight}px`,
    '--role-mobile-hero-height': `${mobileHeroHeight}px`,
    '--role-detail-height': `${detailSectionHeight}px`,
    '--role-mobile-detail-height': `${mobileDetailSectionHeight}px`,
    '--role-card-height': `${detailCardHeight}px`,
  } as CSSProperties;

  return (
    <div className="role-detail-page bg-brand-purple-dark font-dmsans text-white" style={dimensions}>
      <section className={`role-detail-hero relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,0.53)] px-5 py-[60px] min-[380px]:px-10 lg:block lg:px-10 lg:pb-20 lg:pt-[156px] ${fluidPhoneHero ? 'role-detail-hero--fluid-phone' : ''}`}>
        <div className="absolute inset-0 opacity-50">
          <img src={heroPattern} alt="" aria-hidden className="role-detail-hero-pattern absolute left-[-21.04%] top-[14.25%] h-[81.93%] w-[110.16%] max-w-none" />
        </div>
        <div className="role-detail-hero-row relative mx-auto flex w-full flex-col items-start gap-4 py-6 lg:max-w-[991px] lg:flex-row lg:items-center lg:gap-6 lg:p-0">
          <div className="order-2 flex w-full flex-col items-start gap-4 lg:order-1 lg:w-[484px] lg:shrink-0 lg:gap-8">
            <h1 className={`role-detail-mobile-title w-full text-[36px] font-medium leading-[42px] lg:hidden ${mobileTitleClassName || 'tracking-[-.75px]'}`}>
              <span>Outsourced </span><span className="text-brand-lime">{title}</span>
            </h1>
            <h1 className="figma-heading-gradient figma-heading-accountants hidden w-full font-medium lg:block lg:text-[64px] lg:leading-[72px] lg:tracking-[-.64px]">
              <span className="lg:block">Outsourced</span>{' '}
              <span className={`text-brand-lime lg:block ${titleClassName}`}>{title}</span>
            </h1>
            <div className="w-full text-lg font-light leading-6 lg:text-2xl lg:leading-[normal]">
              <p>{intro}</p>
              <p className="mt-6 font-bold lg:mt-[28px]"><span className="lg:hidden">{mobileQualification ?? qualification}</span><span className="hidden lg:inline">{qualification}</span></p>
              <p className="mt-6 italic text-brand-lime lg:mt-[28px]"><span className="lg:hidden">{mobileHeroPrice ?? heroPrice}</span><span className="hidden lg:inline">{heroPrice}</span></p>
            </div>
            <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-lg border border-brand-periwinkle px-8 text-lg font-normal text-white transition-colors hover:bg-white hover:text-brand-purple-mid">Book a call</Link>
          </div>
          <div className={`role-detail-hero-artwork relative order-1 w-full overflow-hidden md:h-[210px] lg:order-2 lg:h-full lg:min-w-0 lg:flex-1 ${fluidPhoneHero ? 'aspect-[313/210] h-auto md:aspect-auto' : 'h-[210px]'}`}>
            <img src={heroImage} alt={heroImageAlt} style={{ top: mobileHeroImageTop }} className={`role-detail-hero-art absolute left-[.08%] h-[144.76%] w-[99.92%] max-w-none lg:static lg:h-full lg:w-full ${heroImageFit === 'cover' ? 'object-cover' : 'object-contain'}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-[60.478%] from-[rgba(44,16,94,0)] to-[#2c105e] lg:hidden" />
          </div>
        </div>
      </section>

      <section className="role-detail-capabilities bg-gradient-to-b from-[#2d1160] to-brand-purple-dark px-5 py-[60px] min-[380px]:px-10 lg:px-[144px]">
        <div className="role-detail-cards mx-auto flex w-full flex-col items-stretch gap-[30px] lg:max-w-[991px] lg:flex-row lg:gap-6">
          <DetailCard title="What they can" highlight="handle" subtitle={category} items={handles} />
          <DetailCard title="What you" highlight="get" subtitle={benefitSubtitle} items={benefits} footnote={footnote} />
        </div>
      </section>

      <section className="role-detail-process h-[620px] overflow-hidden rounded-t-[24px] px-5 pb-20 pt-[60px] min-[380px]:px-10 lg:h-[374px] lg:rounded-none lg:px-[144px] lg:py-[60px]">
        <div className="mx-auto flex w-full flex-col gap-12 lg:max-w-[992px] lg:gap-[60px]">
          <h2 className="text-center text-[30px] font-medium leading-9 lg:text-[42px] lg:leading-[48px]">A simple way to <span className="text-brand-lime">extend your team</span></h2>
          <div className="relative flex h-[360px] flex-col gap-5 lg:hidden">
            <div className="absolute bottom-3 left-[19.5px] top-5 w-px bg-[#5c34a1]" />
            {steps.map((step, index) => (
              <div key={step.copy} className={`relative flex gap-6 ${index === steps.length - 1 ? 'h-12' : 'h-[84px]'}`}>
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime text-lg font-bold leading-6 text-brand-purple-mid">{index + 1}</span>
                <p className="text-lg leading-6">{step.copy}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid lg:grid-cols-[242px_254px_254px_242px] lg:gap-0">
            {steps.map((step, index) => (
              <div key={step.copy} className="flex flex-col items-center gap-6">
                <div className="flex h-[50px] w-full items-center">
                  <TimelineConnector src={index === 0 ? undefined : index === steps.length - 1 ? timelineLast : timelineMiddle} />
                  <img src={step.icon} alt="" aria-hidden className="h-[50px] w-[50px] shrink-0" />
                  <TimelineConnector src={index === steps.length - 1 ? undefined : index === 0 ? timelineFirst : timelineMiddle} />
                </div>
                <p className="w-[230px] text-center text-lg leading-6">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReliefSection
        fluidMobile
        mobileClassName="h-[694px] max-[379px]:px-5"
        firstCard={{ to: '/roles', title: 'Explore', highlight: 'finance roles', copy: 'Discover other finance professionals who can join your team.' }}
        secondCard={{ to: '/solutions', title: 'Compare', highlight: 'team options', copy: 'Choose a dedicated finance professional, a finance pod or an enterprise team.' }}
      />
    </div>
  );
}
