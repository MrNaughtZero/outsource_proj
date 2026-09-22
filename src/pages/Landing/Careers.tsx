import { useNavigate } from 'react-router-dom';
import CareersMobile from './mobile/CareersMobile';
import heroMosaic from '../../assets/landing/images/about_01.png';
import usersIcon from '../../assets/landing/images/icons/career_users.svg';
import pinIcon from '../../assets/landing/images/icons/career_pin.svg';
import growthIcon from '../../assets/landing/images/icons/career_growth.svg';
import cultureIcon from '../../assets/landing/images/icons/career_culture.svg';
import learningIcon from '../../assets/landing/images/icons/career_learning.svg';
import workIcon from '../../assets/landing/images/icons/career_work.svg';

const DESKTOP_HIGHLIGHTS = [
  { title: 'Career growth', icon: growthIcon },
  { title: 'Supportive culture', icon: cultureIcon },
  { title: 'Professional development', icon: learningIcon },
  { title: 'Meaningful work', icon: workIcon },
] as const;

const DESKTOP_LOCATIONS = [
  {
    city: 'Dhaka, Bangladesh',
    tag: 'Finance delivery centre',
    desc: 'Opportunities across accounting, bookkeeping, payroll, accounts support and finance operations.',
    roles: ['Accountant / Senior Accountant', 'Bookkeeper / Senior Bookkeeper', 'Payroll Specialist', 'Finance Executive'],
  },
  {
    city: 'Manchester, UK',
    tag: 'UK headquarters',
    desc: 'Opportunities across client services, business development, marketing, operations and product support.',
    roles: ['Client Account Manager', 'Business Development Manager', 'Marketing Manager', 'Product & Operations Support'],
  },
] as const;

const DESKTOP_AFTER = [
  { n: 1, label: 'Register your interest' },
  { n: 2, label: 'We review your experience' },
  { n: 3, label: 'We contact you when a role fits' },
  { n: 4, label: 'Interview and next steps' },
] as const;

export default function Careers() {
  const navigate = useNavigate();

  const handleRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Carry the email into the full registration form.
    navigate('/careers/register');
  };

  return (
    <>
      <div className="careers-page hidden bg-brand-purple-dark text-white lg:block">
        {/* ===== Hero ===== */}
        <section className="relative h-[777px] overflow-hidden bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,.53)]">
          <div className="relative mx-auto grid h-full w-[992px] grid-cols-[483px_1fr] items-center gap-8 pb-[120px] pt-[180px]">
            {/* People mosaic */}
            <div className="relative h-[477px] w-[483px]">
              <img
                src={heroMosaic}
                alt="Careers at Outsource.com"
                className="h-full w-full object-contain"
              />
            </div>
            {/* Copy + register */}
            <div className="flex flex-col items-start gap-[50px]">
              <div className="w-full">
                <h1 className="figma-heading-gradient figma-heading-careers text-[64px] font-medium leading-[72px] tracking-[-.64px]">
                  <span className="block">Build your</span>
                  <span className="block">career with</span>
                  <span className="block text-brand-lime">Outsource.com</span>
                </h1>
                <p className="mt-8 text-2xl font-light leading-[normal] text-white">
                  Explore career opportunities in Dhaka and Manchester. Register your interest and we’ll contact you when a suitable role becomes available.
                </p>
              </div>
              <button onClick={handleRegister} className="flex h-[55px] items-center justify-center rounded-lg border border-brand-periwinkle px-8 text-lg font-normal text-white">
                Register your interest
              </button>
            </div>
          </div>
        </section>

        {/* ===== Highlights strip ===== */}
        <section className="flex h-[218px] items-center">
          <div className="fig-shell flex h-[98px] items-start gap-3">
            {DESKTOP_HIGHLIGHTS.map((highlight, index) => (
              <div key={highlight.title} className="contents">
                {index > 0 && <span aria-hidden className="h-[98px] w-0 shrink-0 border-l border-white/20" />}
                <div className="flex h-[98px] w-[230px] shrink-0 flex-col items-center gap-6 text-center">
                  <img src={highlight.icon} alt="" className="h-[50px] w-[50px]" />
                  <p className="w-full text-lg leading-6 text-white">{highlight.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Locations ===== */}
        <section className="h-[704px] bg-gradient-to-b from-[#2d1160] to-[rgba(25,10,54,0)] py-[60px]">
          <div className="mx-auto grid h-[584px] w-[992px] grid-cols-2 gap-6">
            {DESKTOP_LOCATIONS.map((loc) => (
              <div
                key={loc.city}
                className="flex h-full flex-col gap-6 rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 px-[30px] py-[58px]"
              >
                <div className="flex flex-col gap-6 px-[6px]">
                  <div className="flex items-start gap-6">
                    <div className="relative h-[50px] w-[50px] shrink-0">
                      <img
                        src={loc.city.startsWith('Dhaka') ? usersIcon : pinIcon}
                        alt=""
                        className={
                          loc.city.startsWith('Dhaka')
                            ? 'h-[50px] w-[50px]'
                            : 'absolute -left-[3.5px] top-[3px] h-[44px] w-[57px] max-w-none'
                        }
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 font-bold leading-6">
                      <h3 className="whitespace-nowrap text-[30px] leading-6 text-brand-lime">{loc.city}</h3>
                      <p className="text-lg leading-6 text-white">{loc.tag}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-6 text-white">{loc.desc}</p>
                </div>
                <div className="relative h-0 w-full before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/20" />
                <div className="flex flex-col gap-3">
                  <p className="text-lg leading-6 text-brand-lime">Example Roles :</p>
                  <div className="flex flex-col gap-3">
                    {loc.roles.map((r) => (
                      <span
                        key={r}
                        className="flex h-12 w-full items-center whitespace-nowrap rounded-lg border-2 border-brand-purple/50 px-4 text-lg leading-6 text-white"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== What happens after you register ===== */}
        <section className="h-[512px] bg-gradient-to-b from-brand-purple-dark to-[#180a34] pb-20 pt-[60px]">
          <div className="fig-shell flex flex-col gap-[103px]">
            <div className="flex h-[214px] flex-col gap-[60px]">
              <h2 className="text-center text-[32px] font-medium leading-8">
                <span className="text-brand-lime">How to join</span> our talent network
              </h2>
              <ol className="relative grid h-[122px] grid-cols-4 gap-6">
                <span
                  aria-hidden
                  className="absolute left-[121px] right-[121px] top-[25px] h-px bg-white/15"
                />
                {DESKTOP_AFTER.map((step, index) => (
                  <li key={step.n} className="relative flex flex-col items-center text-center">
                    <span
                      className={`flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand-lime text-2xl font-bold leading-[30px] text-brand-purple-mid ${
                        index === 0 ? 'translate-x-[6px]' : index === DESKTOP_AFTER.length - 1 ? '-translate-x-[6px]' : ''
                      }`}
                    >
                      {step.n}
                    </span>
                    <p className={`mt-6 text-lg font-bold leading-6 text-white ${index === 2 ? 'w-[202px]' : 'w-[150px]'}`}>
                      {step.label}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex h-[55px] items-center justify-between">
              <p className="w-[669px] text-2xl font-light leading-[normal] text-white">
                <span className="font-bold text-brand-lime">Interested in joining us?</span> Register for future opportunities.
              </p>
              <button
                onClick={handleRegister}
                className="inline-flex h-[55px] w-[246px] shrink-0 items-center justify-center rounded-lg border border-brand-purple-mid bg-brand-lime text-lg font-medium text-brand-purple-mid"
              >
                Register your interest
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:hidden">
        <CareersMobile />
      </div>
    </>
  );
}
