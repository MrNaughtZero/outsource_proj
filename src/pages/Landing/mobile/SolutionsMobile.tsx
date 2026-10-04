import { Link } from 'react-router-dom';
import { useState } from 'react';
import expandIcon from '../../../assets/landing/images/icons/team-expand.svg';
import collapseIcon from '../../../assets/landing/images/icons/team-collapse.svg';
import { TEAM_OPTIONS } from '../teamOptionsData';
import check from '../../../assets/landing/images/icons/team_check.svg';
import hero from '../../../assets/landing/images/work_together2.png';
import workstation from '../../../assets/landing/images/team_workstation.png';
import storage from '../../../assets/landing/images/team_storage.png';
import whatsapp from '../../../assets/landing/images/team_whatsapp.png';
import builtQuality from '../../../assets/landing/images/icons/about_quality.svg';
import continuity from '../../../assets/landing/images/icons/team_hours.svg';
import secureStorage from '../../../assets/landing/images/icons/team_secure_storage_may_2026.svg';
import ukSupport from '../../../assets/landing/images/icons/team_supervised.svg';
import quality from '../../../assets/landing/images/icons/team_quality.svg';

const BUILT_IN = [
  ['Supervision & quality checks', builtQuality],
  ['Continuity cover', continuity],
  ['Secure UK Cloud Storage', secureStorage],
  ['UK-based support', ukSupport],
] as const;

const MEMBER_BENEFITS = [
  ['Office-based working', 'A dedicated, centrally managed 3-screen workstation in our Dhaka office.', workstation],
  ['Outsource.com Workspace', 'Tasks, files, progress and communication in one place, with controlled access.', storage],
  ['Dedicated WhatsApp line', 'Speak directly to your finance team throughout their working hours.', whatsapp],
] as const;

export default function SolutionsMobile() {
  const [expanded, setExpanded] = useState<string[]>([]);
  return (
    <div className="team-mobile bg-brand-purple-dark text-white">
      <section className="relative h-[479px] overflow-hidden bg-brand-purple-dark px-10 pb-[60px] pt-[180px] max-[379px]:px-5">
        <img src={hero} alt="" aria-hidden="true" className="team-hero-pattern pointer-events-none absolute max-w-none opacity-80" />
        <div className="relative"><h1 className="text-[36px] font-medium leading-[42px]"><span className="block">Finance</span><span className="text-brand-lime">team options</span> that fit how you work</h1><p className="mt-4 text-lg leading-6">Choose the team structure that matches your goals, budget and the level of finance support you need.</p></div>
      </section>

      <section className="team-option-accordions space-y-5 rounded-t-3xl bg-brand-purple-dark px-10 pb-[60px] max-[379px]:px-5">
        {TEAM_OPTIONS.map((option, index) => {
          const open = expanded.includes(option.title);
          const panelId = `team-option-${index}`;
          return (
            <article key={option.title} className="fading-card-border fading-card-border-horizontal rounded-lg border-2 border-brand-purple/80 bg-gradient-to-r from-brand-purple-mid/80 to-[#3b187b]/20 px-[22px] py-7">
              <h2>
                <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setExpanded((current) => open ? current.filter((title) => title !== option.title) : [...current, option.title])} className="flex w-full items-center gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime">
                  <img src={option.image} alt="" className="h-[50px] w-[48px] shrink-0 object-contain" />
                  <span className="min-w-0 flex-1 text-lg font-bold leading-6">{option.title}</span>
                  <img src={open ? collapseIcon : expandIcon} alt="" className="shrink-0" />
                </button>
              </h2>
              <div id={panelId} hidden={!open} className="mt-4 space-y-4">
                <p className="text-lg leading-6">{option.description}</p>
                <p className="text-lg leading-6 text-brand-lime">{index === 0 ? option.price : 'Custom pricing'}</p>
                <ul className="space-y-2 border-t border-white/20 pt-4">
                  {option.points.map((point) => <li key={point} className="flex items-start gap-4 text-lg leading-6"><img src={check} alt="" className="mt-[3px] h-[18px] w-[18px] shrink-0" /><span>{point}</span></li>)}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section className="h-[404px] rounded-t-3xl bg-[radial-gradient(ellipse_107%_98%_at_50%_-29%,#492786_0%,#341768_50%,#1f0849_100%)] px-10 pb-[60px] pt-8 max-[380px]:h-auto max-[380px]:px-5 max-[380px]:pb-12 max-[380px]:pt-8">
        <h2 className="text-left text-lg font-bold leading-6">Built Into <span className="text-brand-lime">Every Team</span></h2>
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 max-[380px]:grid-cols-1 max-[380px]:gap-y-8">{BUILT_IN.map(([title, icon]) => <div key={title} className="flex min-w-0 flex-col items-center gap-3 text-center"><img src={icon} alt="" className="h-10 w-10 object-contain" /><h3 className="text-lg font-bold leading-6 text-brand-lime">{title}</h3></div>)}</div>
      </section>

      <section className="team-member-mobile-section -mt-px min-h-[861px] bg-gradient-to-b from-[#1f0849] to-[#190a36] px-10 py-[60px] max-[379px]:px-5">
        <h2 className="text-[30px] font-medium leading-9">Every <span className="text-brand-lime">Team Member</span> Comes With</h2><p className="mt-3 text-lg font-light leading-6">Fully equipped and ready to contribute.</p>
        <div className="mt-10 space-y-5">
          {MEMBER_BENEFITS.map(([title, body, image]) => (
            <article key={title} className="team-member-mobile-card fading-card-border flex min-h-[150px] items-center gap-5 rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/50 to-[#3b187b]/20 p-6">
              <img src={image} alt="" className="h-14 w-20 shrink-0 object-contain" />
              <div>
                <h3 className="text-lg font-bold leading-6 text-brand-lime">{title}</h3>
                <p className="mt-2 text-lg leading-6">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="team-member-mobile-quality mt-10"><h3 className="flex items-center gap-2 text-lg font-bold leading-6 text-brand-lime"><img src={quality} alt="" className="h-[30px] w-[30px] shrink-0" />Quality you can rely on</h3><p className="mt-2 text-lg font-light leading-6">If work does not meet the agreed brief, we will review it and make it right.</p></div>
      </section>

      <section className="min-h-[271px] bg-brand-purple-mid px-10 py-[60px] max-[379px]:px-5"><h2 className="text-2xl font-bold leading-7">Ready to find the <span className="text-brand-lime">right team setup?</span></h2><p className="mt-3 text-lg leading-6">Book a 15-minute call to discuss the option that fits your needs.</p><Link to="/contact" className="mt-8 flex h-[55px] items-center justify-center rounded-lg bg-brand-lime text-lg font-medium text-brand-purple-mid transition-colors duration-200 ease-out hover:bg-white hover:text-brand-purple-mid hover:border-brand-lime hover:outline hover:outline-1 hover:outline-offset-[-1px] hover:outline-brand-lime">Book a Call</Link></section>
    </div>
  );
}
