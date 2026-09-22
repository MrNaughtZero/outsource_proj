import AboutMobile from './mobile/AboutMobile';
import ReliefSection from './components/ReliefSection';
import hero from '../../assets/landing/images/about_hero.png';
import eye from '../../assets/landing/images/about_eye.png';
import globe from '../../assets/landing/images/figma_globe.png';
import interview from '../../assets/landing/images/figma_commit_interview.png';
import meeting from '../../assets/landing/images/figma_commit_meeting.png';
import people from '../../assets/landing/images/icons/about_people.svg';
import data from '../../assets/landing/images/icons/about_data.svg';
import secure from '../../assets/landing/images/icons/about_secure.svg';
import flexible from '../../assets/landing/images/icons/about_flexible.svg';
import pin from '../../assets/landing/images/icons/about_pin.svg';
import dhaka from '../../assets/landing/images/icons/about_dhaka.svg';
import workspace from '../../assets/landing/images/icons/about_workspace.svg';
import access from '../../assets/landing/images/icons/about_access.svg';
import indemnity from '../../assets/landing/images/icons/about_indemnity.svg';
import quality from '../../assets/landing/images/icons/about_quality.svg';
import student from '../../assets/landing/images/icons/about_student.svg';
import check from '../../assets/landing/images/icons/about_check.svg';

const VALUES = [
  ['Dedicated People', 'Finance professionals who work as part of your team.', people],
  ['Built Around You', 'People and processes aligned with how you work.', data],
  ['Secure By Design', 'Secure systems and controlled access to your data.', secure],
  ['Flexible Capacity', 'Extend your finance team as your needs change.', flexible],
] as const;

const TRUST = [
  ['Secure UK Storage', 'Your finance data is securely stored in the UK.', workspace],
  ['Controlled Access', 'Permissions control who can access your files and information.', access],
  ['Indemnity Cover', 'UK professional indemnity insurance in place', indemnity],
  ['Quality Oversight', 'Ongoing supervision, performance oversight and quality checks.', quality],
] as const;

function HeroTitle() {
  return (
    <div className="flex w-full flex-nowrap items-center justify-center whitespace-nowrap text-[64px] font-normal leading-[72px] tracking-[-1px]">
      <span className="figma-heading-gradient figma-heading-about-first shrink-0">Real <span className="text-brand-lime">Pe</span></span>
      <img src={eye} alt="o" className="mx-0.5 mt-3 h-8 w-[34px] shrink-0" />
      <span className="figma-heading-gradient figma-heading-about-second shrink-0"><span className="text-brand-lime">ple</span>, Real Visibility</span>
    </div>
  );
}

function ValuesSection() {
  return (
    <div className="flex w-full max-w-[1280px] shrink-0 flex-col items-center gap-[42px]">
      <div className="text-center">
        <h2 className="text-[42px] font-medium leading-[48px]">Clearer. Safer. More <span className="text-brand-lime">Human.</span></h2>
        <p className="mt-4 text-lg font-light leading-6">We combine dedicated finance professionals with secure technology and managed delivery.</p>
      </div>
      <div className="flex w-full max-w-[992px] items-stretch gap-3">
        {VALUES.map(([title, body, icon], index) => (
          <div key={title} className="contents">
            <article className="flex min-w-0 flex-1 flex-col items-center gap-[30px] px-[6px] text-center">
              <img src={icon} alt="" className="h-[50px] w-[50px]" />
              <div>
                <h3 className="text-lg font-bold leading-6 text-brand-lime">{title}</h3>
                <p className="mt-4 text-lg leading-6">{body}</p>
              </div>
            </article>
            {index < VALUES.length - 1 && <span aria-hidden className="w-px self-stretch bg-white/20" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function LocationsSection() {
  return (
    <section className="h-[791px] bg-gradient-to-b from-transparent to-[#190a36] pb-[120px] pt-[60px]">
      <div className="flex flex-col items-center gap-[91px]">
        <div className="text-center">
          <h2 className="text-[42px] font-medium leading-[48px]"><span className="text-brand-lime">Manchester-led.</span> Dhaka-powered.</h2>
          <p className="mt-4 text-2xl font-light leading-6">Managed delivery from our Dhaka office, with UK oversight and accountability.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={globe} alt="Manchester and Dhaka" className="mb-[-149px] h-[423px] w-[1064px] object-cover" />
          <div className="flex gap-6">
            <article className="w-[455px] rounded-lg border border-brand-purple/70 bg-gradient-to-b from-[#270c56] to-[#270c56]/25 p-8">
              <div className="flex gap-6">
                <img src={pin} alt="" className="h-[50px] w-[50px] shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold leading-[30px] text-brand-lime">Manchester, <span className="font-light">UK</span></h3>
                  <p className="mt-4 text-lg leading-6">UK leadership, client support and accountability.</p>
                </div>
              </div>
            </article>
            <article className="w-[455px] rounded-lg border border-brand-purple/70 bg-gradient-to-b from-[#270c56] to-[#270c56]/25 p-8">
              <div className="flex gap-6">
                <img src={dhaka} alt="" className="h-[50px] w-[50px] shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold leading-[30px] text-brand-lime">Dhaka, <span className="font-light">Bangladesh</span></h3>
                  <p className="mt-4 text-lg leading-6">Dedicated finance professionals, managed delivery and scale.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="h-[406px] bg-[#190a36] px-8 py-[60px] xl:px-[144px]">
      <h2 className="text-center text-[32px] font-medium leading-10">Built for <span className="text-brand-lime">Quality &amp; Trust</span></h2>
      <div className="mx-auto mt-[60px] flex w-full max-w-[992px] items-stretch gap-3">
        {TRUST.map(([title, body, icon], index) => (
          <div key={title} className="contents">
            <article className="flex min-w-0 flex-1 flex-col items-center gap-6 text-center">
              <img src={icon} alt="" className="h-[50px] w-[50px]" />
              <div>
                <h3 className="text-2xl font-bold leading-6">{title}</h3>
                <p className="mt-4 text-lg leading-6 text-brand-periwinkle">{body}</p>
              </div>
            </article>
            {index < TRUST.length - 1 && <span aria-hidden className="w-px self-stretch bg-white/20" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <section className="h-[662px] bg-gradient-to-b from-brand-purple-mid/0 to-brand-purple-mid/50 px-8 pb-[120px] pt-[60px] xl:px-[144px]">
      <div className="mx-auto w-full max-w-[992px]">
        <div className="text-center">
          <h2 className="text-[42px] font-medium leading-[48px]">Our commitment to <span className="text-brand-lime">Quality</span></h2>
          <p className="mt-4 text-lg font-light leading-6">Your work matters. We select the right people and support them with clear standards and ongoing oversight.</p>
        </div>
        <div className="mt-[60px] grid h-[334px] grid-cols-[230fr_357fr_357fr] gap-6">
          <article className="flex min-w-0 flex-col justify-between rounded-lg border border-brand-lime p-8">
            <img src={student} alt="" className="h-[50px] w-[50px]" />
            <h3 className="text-2xl font-bold leading-6 text-brand-lime">Selected and assessed</h3>
            <p className="text-lg font-light leading-6">Finance professionals assessed for the roles they will perform.</p>
          </article>
          <article className="flex min-w-0 flex-col gap-6 rounded-lg border border-brand-purple/70 bg-gradient-to-b from-brand-purple/15 to-brand-purple px-8 pt-8">
            <div className="flex gap-3">
              <img src={check} alt="" className="mt-[3px] h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold leading-6 text-brand-lime">Meet your people</h3>
                <p className="mt-3 text-lg leading-6">Interview shortlisted professionals to discuss your specific requirements.</p>
              </div>
            </div>
            <img src={interview} alt="Candidate interview" className="h-[170px] w-[293px] rounded-tl-lg rounded-tr-[80px] object-cover" />
          </article>
          <article className="flex min-w-0 flex-col gap-6 rounded-lg border border-brand-purple/70 bg-gradient-to-b from-brand-purple/15 to-brand-purple px-8 pb-8">
            <img src={meeting} alt="Quality review" className="min-h-0 flex-1 rounded-bl-lg rounded-br-[150px] object-cover" />
            <div className="flex gap-3">
              <img src={check} alt="" className="mt-[3px] h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold leading-6 text-brand-lime">Making it right</h3>
                <p className="mt-3 text-lg leading-6">If work does not meet the agreed brief, we will review it and make it right.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <div className="about-page hidden bg-brand-purple-dark text-white lg:block">
        <section className="relative h-[1181px] overflow-hidden">
          <img src={hero} alt="Outsource.com team" className="absolute left-1/2 top-[-231px] h-[1035px] w-[1497px] max-w-none -translate-x-1/2" />
          <div className="relative flex h-full flex-col items-center justify-between px-8 pb-[90px] pt-[144px] xl:px-[144px]">
            <HeroTitle />
            <ValuesSection />
          </div>
        </section>
        <LocationsSection />
        <TrustSection />
        <CommitmentSection />
        <ReliefSection />
      </div>
      <div className="lg:hidden"><AboutMobile /></div>
    </>
  );
}
