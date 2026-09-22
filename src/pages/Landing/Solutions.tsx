import { Link } from 'react-router-dom';
import SolutionsMobile from './mobile/SolutionsMobile';
import hero from '../../assets/landing/images/work_together2.png';
import financeProfessional from '../../assets/landing/images/team_finance_professional_may_2026.png';
import financePod from '../../assets/landing/images/team_finance_pod_may_2026.png';
import enterpriseTeam from '../../assets/landing/images/team_enterprise_may_2026.png';
import workstation from '../../assets/landing/images/team_workstation.png';
import storage from '../../assets/landing/images/team_storage.png';
import whatsapp from '../../assets/landing/images/team_whatsapp.png';
import check from '../../assets/landing/images/icons/team_check.svg';
import builtQuality from '../../assets/landing/images/icons/about_quality.svg';
import continuity from '../../assets/landing/images/icons/team_hours.svg';
import secureStorage from '../../assets/landing/images/icons/team_secure_storage_may_2026.svg';
import ukSupport from '../../assets/landing/images/icons/team_supervised.svg';
import quality from '../../assets/landing/images/icons/team_quality.svg';

const TEAM_OPTIONS = [
  {
    title: 'Dedicated Finance Professional',
    description: 'A dedicated finance professional working as part of your team.',
    price: 'From £11.50 per hour',
    image: financeProfessional,
    points: [
      'Dedicated exclusively to you',
      'Works as part of your team',
      'Full-time finance capacity',
      'Managed delivery & continuity',
    ],
  },
  {
    title: 'Dedicated Finance Pod',
    description: 'A small outsourced finance team with complementary skills.',
    price: 'Tailored pricing',
    image: financePod,
    points: [
      'Complementary finance skills',
      'Coordinated team delivery',
      'Flexible team structure',
      'Scalable finance capacity',
    ],
  },
  {
    title: 'Enterprise Finance Team',
    description: 'A larger outsourced finance team with additional review, management and oversight.',
    price: 'Tailored pricing',
    image: enterpriseTeam,
    points: [
      'Dedicated account lead',
      'Senior review & delivery support',
      'Scalable multi-skill team',
      'Tailored Workspace dashboards & reporting',
    ],
  },
] as const;

const BUILT_IN = [
  ['Supervision & quality checks', builtQuality],
  ['Continuity cover', continuity],
  ['Secure UK Cloud Storage', secureStorage],
  ['UK-based support', ukSupport],
] as const;

const MEMBER_BENEFITS = [
  [
    'Office-based working',
    'A dedicated, centrally managed 3-screen workstation in our Dhaka office.',
    workstation,
    'h-[67px] w-24',
  ],
  [
    'Outsource.com Workspace',
    'Tasks, files, progress and communication in one place, with controlled access.',
    storage,
    'h-[67px] w-20',
  ],
  [
    'Dedicated WhatsApp line',
    'Direct communication with your finance team when you need it.',
    whatsapp,
    'h-[67px] w-20',
  ],
] as const;

export default function Solutions() {
  return (
    <>
      <main className="team-options-desktop hidden bg-brand-purple-dark text-white lg:block">
        <section className="relative h-[510px] overflow-hidden bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,.53)] pb-[60px] pt-[180px]">
          <div className="team-options-hero-art-stage pointer-events-none absolute overflow-hidden" aria-hidden="true">
            <img
              src={hero}
              alt=""
              className="team-options-hero-art absolute max-w-none"
            />
          </div>
          <div className="team-options-hero-canvas relative mx-auto h-[270px] w-full max-w-[1279px] px-[144px] pb-8">
            <div className="team-options-hero-copy relative w-[609px]">
              <h1
                className="team-options-hero-title figma-heading-gradient text-[64px] font-medium leading-[72px] tracking-[-.96px]"
                style={{ backgroundImage: 'linear-gradient(105.52113990702776deg, rgb(133, 101, 186) -36.003%, rgb(255, 255, 255) 61.415%, rgb(133, 101, 186) 140.84%)' }}
              >
                <span className="block whitespace-nowrap">Finance <span className="text-brand-lime">team options</span></span>
                <span className="block whitespace-nowrap">that fit how you work</span>
              </h1>
              <p className="team-options-hero-subtitle mt-8 text-2xl font-light leading-[normal]">
                Choose the team structure that matches your goals, budget and the level of finance support you need.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[790px] bg-gradient-to-b from-[#2d1160] to-[rgba(25,10,54,.23)] pb-[60px]">
          <div className="team-options-grid mx-auto grid h-[730px] w-[calc(100%-48px)] max-w-[1071px] grid-cols-3 gap-6">
            {TEAM_OPTIONS.map((option) => (
              <article
                key={option.title}
                className="team-option-card flex h-[730px] min-w-0 flex-col gap-[26px] rounded-lg border-2 border-[rgba(92,52,161,.8)] bg-gradient-to-b from-[rgba(65,28,128,.8)] to-[rgba(59,24,123,.2)] px-[38px] py-[58px]"
              >
                <div className="flex w-full flex-col items-center gap-[30px]">
                  <div className="flex w-full flex-col items-start gap-[30px]">
                    <div className="px-3">
                      <img src={option.image} alt="" className="h-[114px] w-[137px] object-contain" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                      <h2 className="w-full text-2xl font-bold leading-[30px]">{option.title}</h2>
                      <div className="flex w-full flex-col gap-3 text-lg leading-6">
                        <p>{option.description}</p>
                        <p className="text-brand-lime">{option.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full bg-white/20" />
                </div>
                <ul className="flex w-full flex-col gap-4">
                  {option.points.map((point) => (
                    <li key={point} className="flex w-full items-start gap-4 text-lg leading-6">
                      <img src={check} alt="" className="h-6 w-6 shrink-0" />
                      <span className="min-w-0 flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="h-[322px] bg-[#1d0944]">
          <div className="team-options-section-canvas mx-auto flex h-full w-full max-w-[1280px] flex-col gap-12 px-[144px] py-[60px]">
            <h2 className="w-full text-center text-2xl font-medium leading-8">
              Built Into <span className="text-brand-lime">Every Team</span>
            </h2>
            <div className="team-options-built-row flex h-[122px] w-[992px] gap-3">
              {BUILT_IN.map(([title, icon], index) => (
                <div key={title} className="contents">
                  <article className="flex min-w-0 flex-1 flex-col items-center gap-6 text-center">
                    <img src={icon} alt="" className="h-[50px] w-[50px] object-contain" />
                    <h3 className="w-full text-lg font-bold leading-6 text-brand-lime">{title}</h3>
                  </article>
                  {index < BUILT_IN.length - 1 && <span aria-hidden className="w-0 self-stretch border-l border-white/20" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="h-[573px] bg-gradient-to-b from-[#1d0944] to-[#190a36]">
          <div className="team-options-section-canvas team-options-members-canvas mx-auto flex h-full w-full max-w-[1280px] flex-col gap-[60px] px-[144px] py-[60px]">
            <div className="team-options-members-grid grid h-[325px] w-[992px] grid-cols-[230px_repeat(3,230px)] gap-6">
              <div className="team-options-members-intro flex w-[230px] flex-col gap-8 pt-8">
                <h2 className="team-options-members-heading text-[42px] font-medium leading-[48px]">
                  Every <span className="text-brand-lime">Team Member</span>{' '}
                  <span className="whitespace-nowrap">Comes With</span>
                </h2>
                <p className="text-lg font-light leading-6">Fully equipped and ready to contribute.</p>
              </div>
              {MEMBER_BENEFITS.map(([title, body, image, imageClass]) => (
                <article
                  key={title}
                  className="team-options-member-card flex h-[325px] flex-col items-center rounded-lg border-2 border-[rgba(92,52,161,.8)] bg-gradient-to-b from-[rgba(65,28,128,.46)] to-[rgba(59,24,123,.2)] px-[22px] py-7"
                >
                  <div className="team-options-member-content flex w-full flex-col items-start gap-[30px]">
                    <img src={image} alt="" className={`${imageClass} object-contain`} />
                    <div className="team-options-member-copy flex w-full flex-col gap-6 text-lg leading-6">
                      <h3 className="font-bold text-brand-lime">{title}</h3>
                      <p>
                        {title === 'Office-based working' ? (
                          <>
                            A dedicated,<br />
                            centrally managed 3-<br />
                            screen workstation in<br />
                            our Dhaka office.
                          </>
                        ) : body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="team-options-quality-row flex h-[68px] w-[992px] flex-col gap-3">
              <h3 className="flex items-center gap-3 text-2xl font-bold leading-8 text-brand-lime">
                <img src={quality} alt="" className="h-[30px] w-[30px]" />
                Quality you can rely on
              </h3>
              <p className="text-lg font-light leading-6">
                If work does not meet the agreed brief, we will review it and make it right.
              </p>
            </div>
          </div>
        </section>

        <section className="h-64 bg-[#3e1a7c]">
          <div className="team-options-section-canvas mx-auto h-full w-full max-w-[1280px] px-[144px] py-[60px]">
            <div className="team-options-cta-row flex h-[136px] w-[992px] items-center gap-[150px]">
              <div className="team-options-cta-copy flex w-[629px] shrink-0 flex-col gap-4">
                <h2 className="text-[42px] font-medium leading-[48px]">
                  Ready to find the <span className="text-brand-lime">right team setup?</span>
                </h2>
                <p className="text-lg font-light leading-6">
                  Book a 15-minuite call to discuss the option that fits your needs.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex h-[55px] min-w-0 flex-1 items-center justify-center rounded-lg border border-brand-purple-mid bg-brand-lime px-8 py-4 text-lg font-medium text-brand-purple-mid"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="lg:hidden">
        <SolutionsMobile />
      </div>
    </>
  );
}
