import { Fragment } from 'react';
import hero from '../../../assets/landing/images/about_hero.png';
import eye from '../../../assets/landing/images/about_eye.png';
import globe from '../../../assets/landing/images/figma_globe.png';
import interview from '../../../assets/landing/images/figma_commit_interview.png';
import meeting from '../../../assets/landing/images/figma_commit_meeting.png';
import people from '../../../assets/landing/images/icons/about_people.svg';
import data from '../../../assets/landing/images/icons/about_data.svg';
import secure from '../../../assets/landing/images/icons/about_secure.svg';
import flexible from '../../../assets/landing/images/icons/about_flexible.svg';
import pin from '../../../assets/landing/images/icons/about_pin.svg';
import dhaka from '../../../assets/landing/images/icons/about_dhaka.svg';
import workspace from '../../../assets/landing/images/icons/about_workspace.svg';
import access from '../../../assets/landing/images/icons/about_access.svg';
import indemnity from '../../../assets/landing/images/icons/about_indemnity.svg';
import quality from '../../../assets/landing/images/icons/about_quality.svg';
import student from '../../../assets/landing/images/icons/about_student.svg';
import check from '../../../assets/landing/images/icons/about_check.svg';
import ReliefSection from '../components/ReliefSection';

const VALUES = [
  ['Dedicated People', 'Finance professionals who work as part of your team.', people],
  ['Built Around You', 'People and processes aligned with how you work.', data],
  ['Secure By Design', 'Secure systems and controlled access to your data.', secure],
  ['Flexible Capacity', 'Extend your finance team as your needs change.', flexible],
] as const;

const TRUST = [
  ['Secure UK Storage', 'Your finance data is securely stored in the UK.', workspace],
  ['Controlled access', 'Permissions control who can access your files and information.', access],
  ['Indemnity Cover', 'UK professional indemnity insurance in place', indemnity],
  ['Quality Oversight', 'Ongoing supervision, performance oversight and quality checks.', quality],
] as const;

export default function AboutMobile() {
  return (
    <div className="about-mobile overflow-hidden bg-brand-purple-dark text-white">
      <section className="relative h-[501px] overflow-hidden">
        <div className="absolute left-0 top-[57px] h-[444px] w-full overflow-hidden">
          <img src={hero} alt="Outsource.com team" className="absolute left-1/2 top-0 h-auto w-[max(100%,673px)] max-w-none -translate-x-1/2 -translate-y-[9.68%]" />
        </div>
        <div className="absolute left-10 right-10 top-[157px] flex flex-col items-center text-center text-[36px] font-medium leading-[42px] tracking-[-.36px] max-[379px]:left-5 max-[379px]:right-5">
          <div className="flex items-center whitespace-nowrap">
            <span className="w-[110px] shrink-0"><span className="inline-block origin-left bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(99.75872692332885deg, rgb(133, 101, 186) 36.003%, rgb(255, 255, 255) 61.415%, rgb(133, 101, 186) 140.84%)', transform: 'scaleX(0.9284)' }}>Real <span className="text-brand-lime">Pe</span></span></span>
            <span className="flex flex-col items-start pt-1"><img src={eye} alt="o" className="h-[18px] w-[19px] object-contain" /></span>
            <span className="w-[126px] shrink-0"><span className="inline-block origin-left bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(101.14482119787377deg, rgb(133, 101, 186) 36.003%, rgb(255, 255, 255) 61.415%, rgb(133, 101, 186) 140.84%)', transform: 'scaleX(0.9213)' }}><span className="text-brand-lime">ple</span>, Real</span></span>
          </div>
          <span className="w-[143px] whitespace-nowrap bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(102.60317760093419deg, rgb(133, 101, 186) 36.003%, rgb(255, 255, 255) 61.415%, rgb(133, 101, 186) 140.84%)' }}>Visibility</span>
        </div>
      </section>

      <section className="rounded-t-3xl bg-gradient-to-b from-[#280e57] to-[#20094a] px-10 py-[60px] max-[379px]:px-5">
        <h2 className="text-[30px] font-medium leading-9">Clearer. Safer. More <span className="text-brand-lime">Human.</span></h2>
        <p className="mt-4 text-lg font-light leading-6">We combine dedicated finance professionals with secure technology and managed delivery.</p>
        <div className="mt-[60px] flex flex-col gap-5">
          {VALUES.map(([title, body, icon], index) => (
            <Fragment key={title}>
              <div className="flex gap-5"><img src={icon} alt="" className="h-[50px] w-[50px] shrink-0" /><div><h3 className="text-lg font-bold leading-6 text-brand-lime">{title}</h3><p className="mt-3 text-xs leading-[18px]">{body}</p></div></div>
              {index < VALUES.length - 1 && <span aria-hidden className="relative h-0"><span className="absolute inset-x-0 top-0 border-b border-white/20" /></span>}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="h-[672px] px-10 py-[60px] max-[380px]:h-auto max-[379px]:px-5">
        <div className="text-center"><h2 className="text-[30px] font-medium leading-9"><span className="text-brand-lime">Manchester-led.</span> Dhaka-powered.</h2><p className="mt-4 text-xs font-light leading-[18px]">Managed delivery from our Dhaka office, with UK oversight and accountability.</p></div>
        <div className="mt-10 flex flex-col items-center"><div className="mb-[-34px] h-[214px] w-[539px] overflow-hidden"><img src={globe} alt="Manchester and Dhaka" className="h-[262px] w-[660px] object-contain" /></div><div className="flex gap-5 max-[380px]:w-full max-[380px]:flex-col">
          <article className="h-[208px] w-[146px] rounded-lg border border-brand-purple/70 bg-gradient-to-b from-[#270c56] to-[#270c56]/25 px-4 py-5 max-[380px]:h-auto max-[380px]:min-h-[172px] max-[380px]:w-full"><img src={pin} alt="" className="h-[30px] w-[30px]" /><h3 className="mt-[10px] text-lg font-bold leading-6 text-brand-lime">Manchester, <span className="font-normal">UK</span></h3><p className="mt-2 text-xs leading-[18px]">UK leadership, client support and accountability.</p></article>
          <article className="h-[208px] w-[146px] rounded-lg border border-brand-purple/70 bg-gradient-to-b from-[#270c56] to-[#270c56]/25 px-4 py-5 max-[380px]:h-auto max-[380px]:min-h-[172px] max-[380px]:w-full"><img src={dhaka} alt="" className="h-[30px] w-[30px]" /><h3 className="mt-[10px] text-lg font-bold leading-6 text-brand-lime">Dhaka, <span className="font-normal">Bangladesh</span></h3><p className="mt-2 text-xs leading-[18px]">Dedicated finance professionals, managed delivery and scale.</p></article>
        </div></div>
      </section>

      <section className="bg-[#190a36] px-10 py-[60px] max-[379px]:px-5">
        <h2 className="text-center text-[30px] font-medium leading-9">Built for <span className="text-brand-lime">Quality &amp; Trust</span></h2>
        <div className="mt-[60px] grid grid-cols-2 gap-x-5 gap-y-10 max-[380px]:grid-cols-1">{TRUST.map(([title, body, icon]) => <div key={title} className="flex min-w-0 flex-col items-center gap-3 text-center"><img src={icon} alt="" className="h-[50px] w-[50px]" /><h3 className="text-lg font-bold leading-6">{title}</h3><p className="text-xs leading-[18px] text-brand-periwinkle">{body}</p></div>)}</div>
      </section>

      <section className="h-[640px] bg-gradient-to-b from-brand-purple-mid/0 to-brand-purple-mid/50 px-10 py-[60px] max-[379px]:px-5">
        <h2 className="text-[30px] font-medium leading-9">Our commitment to <span className="text-brand-lime">Quality</span></h2>
        <p className="mt-4 text-xs font-light leading-[18px]">Your work matters. We select the right people and support them with clear standards and ongoing oversight.</p>
        <div className="mt-[60px] space-y-6">
          <article className="flex h-[90px] items-center gap-3 rounded-lg border border-brand-lime p-4"><img src={student} alt="" className="h-[50px] w-[50px] shrink-0" /><div><h3 className="text-xs font-bold leading-[18px] text-brand-lime">Selected and assessed</h3><p className="mt-1 text-xs font-light leading-[18px]">Finance professionals assessed for the roles they will perform.</p></div></article>
          <article className="relative flex h-[90px] items-center gap-3 overflow-hidden rounded-lg border border-brand-purple/70 p-4"><img src={interview} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" /><img src={check} alt="" className="relative h-[30px] w-[30px] shrink-0" /><div className="relative"><h3 className="text-xs font-bold leading-[18px] text-brand-lime">Meet your people</h3><p className="mt-1 text-xs font-light leading-[18px]">Interview shortlisted professionals to discuss your specific requirements.</p></div></article>
          <article className="relative flex h-[90px] items-center gap-3 overflow-hidden rounded-lg border border-brand-purple/70 p-4"><img src={meeting} alt="" className="absolute -top-6 left-0 h-[176px] w-full object-cover opacity-20" /><img src={check} alt="" className="relative h-[30px] w-[30px] shrink-0" /><div className="relative"><h3 className="text-xs font-bold leading-[18px] text-brand-lime">Making it right</h3><p className="mt-1 text-xs font-light leading-[18px]">If work does not meet the agreed brief, we will review it and make it right.</p></div></article>
        </div>
      </section>

      <ReliefSection mobileClassName="h-[676px]" fluidMobile />
    </div>
  );
}
