import arrowRightHover from '../../assets/landing/roles/arrow-right-hover.svg';
import virtualCfosHover from '../../assets/landing/roles/virtual-cfos-hover.png';
import payrollSpecialistsHover from '../../assets/landing/roles/payroll-specialists-hover.png';
import bookkeepersHover from '../../assets/landing/roles/bookkeepers-hover.png';
import accountantsHover from '../../assets/landing/roles/accountants-hover.png';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReliefSection from './components/ReliefSection';
import heroRings from '../../assets/landing/roles/hero-rings.webp';
import heroPeople from '../../assets/landing/roles/hero-people.webp';
import accountants from '../../assets/landing/roles/accountants.png';
import bookkeepers from '../../assets/landing/roles/bookkeepers.png';
import payrollSpecialists from '../../assets/landing/roles/payroll-specialists.png';
import virtualCfos from '../../assets/landing/roles/virtual-cfos.png';
import arrowRight from '../../assets/landing/roles/arrow-right.svg';
import mobileHero from '../../assets/landing/roles/mobile/hero.png';
import mobileAccountants from '../../assets/landing/roles/mobile/accountants.png';
import mobileBookkeepers from '../../assets/landing/roles/mobile/bookkeepers.png';
import mobilePayrollSpecialist from '../../assets/landing/roles/mobile/payroll-specialist.png';
import mobileVirtualCfos from '../../assets/landing/roles/mobile/virtual-cfos.png';
import mobileArrow from '../../assets/landing/roles/mobile/arrow-circle.svg';

const ROLES = [
  {
    id: 'accountants',
    title: 'Accountants',
    description: 'Dedicated expertise to share your team’s workload as your accounting needs grow.',
    image: accountants,
    hoverImage: accountantsHover,
    mobileImage: mobileAccountants,
    to: '/roles/accountants',
  },
  {
    id: 'bookkeepers',
    title: 'Bookkeepers',
    description: 'Reliable day-to-day support to keep records up to date and free up your team’s time.',
    image: bookkeepers,
    hoverImage: bookkeepersHover,
    mobileImage: mobileBookkeepers,
    to: '/roles/bookkeepers',
  },
  {
    id: 'payroll-specialists',
    title: 'Payroll Specialists',
    description: 'Extra capacity to keep payroll running smoothly as your team’s workload changes.',
    image: payrollSpecialists,
    hoverImage: payrollSpecialistsHover,
    mobileImage: mobilePayrollSpecialist,
    to: '/roles/payroll-specialists',
  },
  {
    id: 'virtual-cfos',
    title: 'Virtual CFOs',
    description: 'Senior finance expertise to guide your planning and business decisions.',
    image: virtualCfos,
    hoverImage: virtualCfosHover,
    mobileImage: mobileVirtualCfos,
    to: '/roles/virtual-cfos',
  },
];

function RoleCard({
  id,
  title,
  description,
  image,
  mobileImage,
  hoverImage,
  to,
}: (typeof ROLES)[number]) {
  return (
    <div id={id} className="contents">
      <article className="h-[103px] w-full shrink-0 scroll-mt-24 rounded-lg bg-[#f9f7fd] p-2 md:hidden">
        <Link to={to} className="flex h-full w-full items-center gap-5 pr-3">
          <img src={mobileImage} alt="" aria-hidden className="h-[87px] w-[85px] shrink-0 rounded-lg object-contain" />
          <div className="flex min-w-0 flex-1 items-center justify-between">
            <h3 className="text-lg font-medium leading-6 text-brand-purple-mid">{title === 'Payroll Specialists' ? 'Payroll Specialist' : title}</h3>
            <img src={mobileArrow} alt="" aria-hidden className="h-6 w-6 shrink-0" />
          </div>
        </Link>
      </article>
      <article className="roles-overview-card group/role-card hidden h-[314px] w-full shrink-0 scroll-mt-24 flex-col items-start justify-between rounded-lg border-2 border-[rgba(138,56,245,0.64)] bg-gradient-to-b from-brand-purple-mid to-[rgba(65,28,128,0.26)] p-[18px] md:flex lg:w-[230px] transition-colors duration-300 ease-out hover:border-0 hover:bg-none hover:bg-brand-lime focus-within:border-0 focus-within:bg-none focus-within:bg-brand-lime">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="relative h-[60px] w-[60px]">
            <img src={image} alt="" aria-hidden className="absolute inset-0 h-[60px] w-[60px] object-contain transition-opacity duration-300 ease-out group-hover/role-card:opacity-0 group-focus-within/role-card:opacity-0" />
            <img src={hoverImage} alt="" aria-hidden className="absolute inset-0 h-[60px] w-[60px] object-contain opacity-0 transition-opacity duration-300 ease-out group-hover/role-card:opacity-100 group-focus-within/role-card:opacity-100" />
          </div>
          <div className="flex w-full flex-col items-start gap-3 text-lg leading-6">
            <h3 className="font-bold text-white transition-colors duration-300 ease-out group-hover/role-card:text-brand-purple-mid group-hover/role-card:font-bold group-focus-within/role-card:text-brand-purple-mid">{title}</h3>
            <p className="font-light text-brand-periwinkle group-hover/role-card:font-light transition-colors duration-300 ease-out group-hover/role-card:text-brand-purple group-focus-within/role-card:text-brand-purple">{description}</p>
          </div>
        </div>
        <Link to={to} className="flex items-center gap-2 text-lg font-semibold leading-6 text-brand-lime transition-colors duration-300 ease-out group-hover/role-card:text-brand-purple group-hover/role-card:underline group-focus-within/role-card:text-brand-purple group-focus-within/role-card:underline">
          Explore Role
          <span className="relative h-[15px] w-[15px]">
            <img src={arrowRight} alt="" aria-hidden className="absolute inset-0 h-[15px] w-[15px] group-hover/role-card:invisible group-focus-within/role-card:invisible" />
            <img src={arrowRightHover} alt="" aria-hidden className="invisible absolute left-0 top-0 max-w-none group-hover/role-card:visible group-focus-within/role-card:visible" />
          </span>
        </Link>
      </article>
    </div>
  );
}

export default function Roles() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const hoverDesktop = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const resetReveal = () => {
      hero.style.removeProperty('--reveal-x');
      hero.style.removeProperty('--reveal-y');
    };
    const moveReveal = (event: PointerEvent) => {
      if (!hoverDesktop.matches || event.pointerType === 'touch') return;
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty('--reveal-x', `${event.clientX - bounds.left}px`);
      hero.style.setProperty('--reveal-y', `${event.clientY - bounds.top}px`);
      hero.dataset.revealUsed = 'true';
    };

    hero.addEventListener('pointermove', moveReveal);
    hero.addEventListener('pointerleave', resetReveal);
    hero.addEventListener('pointercancel', resetReveal);
    window.addEventListener('blur', resetReveal);
    hoverDesktop.addEventListener('change', resetReveal);
    return () => {
      hero.removeEventListener('pointermove', moveReveal);
      hero.removeEventListener('pointerleave', resetReveal);
      hero.removeEventListener('pointercancel', resetReveal);
      window.removeEventListener('blur', resetReveal);
      hoverDesktop.removeEventListener('change', resetReveal);
    };
  }, []);

  return (
    <div className="roles-page bg-brand-purple-dark font-dmsans text-white">
      <section ref={heroRef} className="roles-hero relative flex h-[450px] flex-col items-center overflow-hidden px-5 pb-[150px] pt-[60px] min-[380px]:px-10 md:justify-center md:pb-0 md:pt-0 lg:h-[686px] lg:min-h-0 lg:justify-start lg:px-[144px] lg:pb-[323px] lg:pt-[156px]">
        <div className="absolute inset-0 overflow-hidden lg:hidden">
          <img src={mobileHero} alt="" aria-hidden className="roles-hero-mobile-art absolute left-[calc(50%+29px)] top-0 h-full w-auto max-w-none -translate-x-1/2" />
          <div className="roles-mobile-overlay absolute inset-0" />
        </div>
        <div aria-hidden="true" className="roles-hero-layer hidden lg:block" style={{ backgroundImage: `url(${heroRings})` }} />
        <div aria-hidden="true" className="roles-hero-layer roles-hero-people hidden lg:block" style={{ backgroundImage: `url(${heroPeople})` }} />
        <div className="relative flex w-full flex-col items-start gap-4 py-6 pt-11 md:items-center md:py-0 md:pt-0 lg:max-w-[714px] lg:gap-8 lg:p-0">
          <h1 className="figma-heading-gradient figma-heading-roles w-full text-left text-[30px] font-medium leading-9 md:text-center lg:text-[64px] lg:leading-[72px] lg:tracking-[-2px]">
            <span className="lg:whitespace-nowrap">The right <span className="text-brand-lime">finance expertise</span></span>{' '}
            <br className="hidden lg:block" />
            <span>for your team.</span>
          </h1>
          <p className="w-full text-left text-lg font-normal leading-6 md:text-center lg:text-2xl lg:font-light lg:leading-[normal]">
            Dedicated people to match your needs.
          </p>
        </div>
        <div aria-hidden="true" className="roles-hero-hint">
          <span /> Move your cursor across the hero
        </div>
      </section>

      <section className="h-[760px] px-5 py-[60px] min-[380px]:px-10 md:h-[904px] lg:h-[618px] lg:px-[144px] lg:py-[100px]">
        <div className="mx-auto flex w-full flex-col items-start gap-[60px] lg:max-w-[992px] lg:gap-14">
          <div className="flex w-full flex-col gap-3">
            <h2 className="text-[30px] font-medium leading-9 lg:text-[42px] lg:leading-[48px]">
              What <span className="text-brand-lime">expertise</span> do you need?
            </h2>
            <p className="text-lg font-light leading-6 lg:hidden">Select a role to learn more.</p>
          </div>
          <div className="grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:justify-items-start">
            {ROLES.map((role) => <RoleCard key={role.id} {...role} />)}
          </div>
        </div>
      </section>

      <ReliefSection
        fluidMobile
        mobileClassName="h-[676px] max-[379px]:px-5"
        secondCard={{
          to: '/solutions',
          title: 'Compare',
          highlight: 'team options',
          copy: 'Choose between a dedicated hire, dedicated pod or enterprise team.',
          mobileCopy: 'Choose a dedicated finance professional, a finance pod or an enterprise team.',
        }}
      />
    </div>
  );
}
