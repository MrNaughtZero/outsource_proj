import { Link } from 'react-router-dom';
import ReliefSection from './components/ReliefSection';
import heroPattern from '../../assets/landing/roles/hero-pattern.png';
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
    mobileImage: mobileAccountants,
    to: '/roles/accountants',
  },
  {
    id: 'bookkeepers',
    title: 'Bookkeepers',
    description: 'Reliable day-to-day support to keep records up to date and free up your team’s time.',
    image: bookkeepers,
    mobileImage: mobileBookkeepers,
    to: '/roles/bookkeepers',
  },
  {
    id: 'payroll-specialists',
    title: 'Payroll Specialists',
    description: 'Extra capacity to keep payroll running smoothly as your team’s workload changes.',
    image: payrollSpecialists,
    mobileImage: mobilePayrollSpecialist,
    to: '/roles/payroll-specialists',
  },
  {
    id: 'virtual-cfos',
    title: 'Virtual CFOs',
    description: 'Senior finance expertise to guide your planning and business decisions.',
    image: virtualCfos,
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
      <article className="hidden h-[314px] w-full shrink-0 scroll-mt-24 flex-col items-start justify-between rounded-lg border-2 border-[rgba(138,56,245,0.64)] bg-gradient-to-b from-brand-purple-mid to-[rgba(65,28,128,0.26)] p-[18px] md:flex lg:w-[230px]">
        <div className="flex w-full flex-col items-start gap-5">
          <img src={image} alt="" aria-hidden className="h-[60px] w-[60px] object-contain" />
          <div className="flex w-full flex-col items-start gap-3 text-lg leading-6">
            <h3 className="font-bold text-white">{title}</h3>
            <p className="font-light text-brand-periwinkle">{description}</p>
          </div>
        </div>
        <Link to={to} className="flex items-center gap-2 text-xs font-semibold leading-[18px] text-brand-lime">
          Explore Role
          <img src={arrowRight} alt="" aria-hidden className="h-[15px] w-[15px]" />
        </Link>
      </article>
    </div>
  );
}

export default function Roles() {
  return (
    <div className="roles-page bg-brand-purple-dark font-dmsans text-white">
      <section className="relative flex h-[450px] flex-col items-center overflow-hidden px-5 pb-[150px] pt-[60px] min-[380px]:px-10 md:justify-center md:pb-0 md:pt-0 lg:h-[686px] lg:min-h-0 lg:justify-start lg:px-[144px] lg:pb-[323px] lg:pt-[156px]">
        <div className="absolute inset-0 overflow-hidden lg:hidden">
          <img src={mobileHero} alt="" aria-hidden className="absolute left-[calc(50%+29px)] top-0 h-full w-auto max-w-none -translate-x-1/2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_71%_76%,rgba(57,24,116,0)_0%,#1f0849_68%),linear-gradient(180deg,rgba(31,8,73,.86)_0%,rgba(57,24,116,.46)_100%)]" />
        </div>
        <img src={heroPattern} alt="" aria-hidden className="absolute inset-0 hidden h-full w-full object-cover lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,0.53)] lg:block" />
        <div className="relative flex w-full flex-col items-start gap-4 py-6 pt-11 md:items-center md:py-0 md:pt-0 lg:max-w-[714px] lg:gap-8 lg:p-0">
          <h1 className="figma-heading-gradient figma-heading-roles w-full text-left text-[30px] font-medium leading-9 md:text-center lg:text-[64px] lg:leading-[72px] lg:tracking-[-.64px]">
            <span className="lg:whitespace-nowrap">The right <span className="text-brand-lime">finance expertise</span></span>{' '}
            <br className="hidden lg:block" />
            <span>for your team.</span>
          </h1>
          <p className="w-full text-left text-lg font-normal leading-6 md:text-center lg:text-2xl lg:font-light lg:leading-[normal]">
            Dedicated people to match your needs.
          </p>
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
