import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import hero from '../../../assets/landing/images/work_together2.png';
import financeProfessional from '../../../assets/landing/images/team_finance_professional_may_2026.png';
import financePod from '../../../assets/landing/images/team_finance_pod_may_2026.png';
import enterpriseTeam from '../../../assets/landing/images/team_enterprise_may_2026.png';
import workstation from '../../../assets/landing/images/team_workstation.png';
import storage from '../../../assets/landing/images/team_storage.png';
import whatsapp from '../../../assets/landing/images/team_whatsapp.png';
import builtQuality from '../../../assets/landing/images/icons/about_quality.svg';
import continuity from '../../../assets/landing/images/icons/team_hours.svg';
import secureStorage from '../../../assets/landing/images/icons/team_secure_storage_may_2026.svg';
import ukSupport from '../../../assets/landing/images/icons/team_supervised.svg';
import quality from '../../../assets/landing/images/icons/team_quality.svg';

const OPTIONS = [
  ['Dedicated Finance Professional', financeProfessional],
  ['Dedicated Finance Pod', financePod],
  ['Enterprise Finance Team', enterpriseTeam],
] as const;

const BUILT_IN = [
  ['Supervision & quality checks', builtQuality],
  ['Continuity cover', continuity],
  ['Secure UK Cloud Storage', secureStorage],
  ['UK-based support', ukSupport],
] as const;

const MEMBER_BENEFITS = [
  ['Office-based working', 'A dedicated, centrally managed 3-screen workstation in our Dhaka office.', workstation],
  ['Outsource.com Workspace', 'Tasks, files, progress and communication in one place, with controlled access.', storage],
  ['Dedicated WhatsApp line', 'Direct communication with your finance team when you need it.', whatsapp],
] as const;

const HERO_PEOPLE = Array.from({ length: 9 }, (_, index) => index);

export default function SolutionsMobile() {
  return (
    <div className="team-mobile bg-brand-purple-dark text-white">
      <section className="relative h-[479px] overflow-hidden bg-brand-purple-dark px-10 pb-[60px] pt-[180px] max-[379px]:px-5">
        <div aria-hidden="true" className="pointer-events-none absolute left-[-40.62%] top-[142px] flex aspect-[1500/409] w-[189.96%] max-w-none sm:left-1/2 sm:w-[786px] sm:-translate-x-1/2 md:top-[82px]">
          {HERO_PEOPLE.map((person) => (
            <span
              key={person}
              className="h-full w-[11.111111%] shrink-0 bg-brand-purple-mid"
              style={{
                WebkitMaskImage: `url(${hero})`,
                maskImage: `url(${hero})`,
                WebkitMaskPosition: 'left top',
                maskPosition: 'left top',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '900% 100%',
                maskSize: '900% 100%',
              }}
            />
          ))}
        </div>
        <div className="relative pt-6"><h1 className="text-[36px] font-medium leading-[42px]">Finance <span className="text-brand-lime">team options</span> that fit how you work</h1><p className="mt-4 text-lg leading-6">Choose the team structure that matches your goals, budget and the level of finance support you need.</p></div>
      </section>

      <section className="h-[393px] space-y-5 overflow-hidden rounded-t-3xl bg-brand-purple-dark px-10 max-[379px]:px-5">
        {OPTIONS.map(([title, image]) => (
          <article key={title} className="flex h-[100px] w-full items-center gap-4 rounded-lg border border-brand-purple/80 bg-gradient-to-r from-brand-purple-mid/80 to-[#3b187b]/20 px-5 py-4">
            <img src={image} alt="" className="h-[50px] w-[50px] shrink-0 object-contain" />
            <h2 className="min-w-0 flex-1 text-lg font-bold leading-6">{title}</h2>
            <span aria-hidden="true" className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-lime text-brand-purple-mid">
              <Plus className="h-4 w-4" strokeWidth={3} />
            </span>
          </article>
        ))}
      </section>

      <section className="h-[404px] rounded-t-3xl bg-[radial-gradient(ellipse_107%_98%_at_50%_-29%,#492786_0%,#341768_50%,#1f0849_100%)] px-10 pb-[60px] pt-8 max-[380px]:h-auto max-[380px]:px-5 max-[380px]:pb-12 max-[380px]:pt-8">
        <h2 className="text-left text-lg font-bold leading-6">Built Into <span className="text-brand-lime">Every Team</span></h2>
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 max-[380px]:grid-cols-1 max-[380px]:gap-y-8">{BUILT_IN.map(([title, icon]) => <div key={title} className="flex min-w-0 flex-col items-center gap-3 text-center"><img src={icon} alt="" className="h-[50px] w-[50px]" /><h3 className="text-lg font-bold leading-6 text-brand-lime">{title}</h3></div>)}</div>
      </section>

      <section className="-mt-px h-[861px] bg-gradient-to-b from-[#1f0849] to-[#190a36] px-10 py-[60px] max-[379px]:px-5">
        <h2 className="text-[30px] font-medium leading-9">Every <span className="text-brand-lime">Team Member</span> Comes With</h2><p className="mt-3 text-lg font-light leading-6">Fully equipped and ready to contribute.</p>
        <div className="mt-10 space-y-5">{MEMBER_BENEFITS.map(([title, body, image]) => <article key={title} className="flex h-[150px] items-center gap-5 rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/50 to-[#3b187b]/20 p-6"><img src={image} alt="" className="h-14 w-20 shrink-0 object-contain" /><div><h3 className="text-xs font-bold leading-[18px] text-brand-lime">{title}</h3><p className="mt-2 text-xs leading-[18px]">{body}</p></div></article>)}</div>
        <div className="mt-10"><h3 className="flex items-center gap-2 text-xs font-bold leading-[18px] text-brand-lime"><img src={quality} alt="" className="h-[30px] w-[30px]" />Quality you can rely on</h3><p className="mt-2 text-xs font-light leading-[18px]">If work does not meet the agreed brief, we will review it and make it right.</p></div>
      </section>

      <section className="h-[271px] bg-brand-purple-mid px-10 py-[60px] max-[379px]:px-5"><h2 className="text-2xl font-bold leading-7">Ready to find the <span className="text-brand-lime">right team setup?</span></h2><p className="mt-3 text-xs leading-[18px]">Book a 15-minute call to discuss the option that fits your needs.</p><Link to="/contact" className="mt-8 flex h-[55px] items-center justify-center rounded-lg bg-brand-lime text-lg font-medium text-brand-purple-mid">Book a Call</Link></section>
    </div>
  );
}
