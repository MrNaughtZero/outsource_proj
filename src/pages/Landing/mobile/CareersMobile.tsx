import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LOCATIONS, AFTER } from '../careersData';
import heroMosaic from '../../../assets/landing/images/about_01.png';
import usersIcon from '../../../assets/landing/images/icons/career_users.svg';
import pinIcon from '../../../assets/landing/images/icons/career_pin.svg';
import growthIcon from '../../../assets/landing/images/icons/career_growth.svg';
import cultureIcon from '../../../assets/landing/images/icons/career_culture.svg';
import learningIcon from '../../../assets/landing/images/icons/career_learning.svg';
import workIcon from '../../../assets/landing/images/icons/career_work.svg';

const HIGHLIGHTS = [
  ['Career growth', growthIcon],
  ['Supportive culture', cultureIcon],
  ['Professional development', learningIcon],
  ['Meaningful work', workIcon],
] as const;

export default function CareersMobile() {
  const navigate = useNavigate();
  const [expandedCities, setExpandedCities] = useState<string[]>([]);
  const handleRegister = (event: React.SyntheticEvent) => { event.preventDefault(); navigate('/careers/register'); };

  return (
    <div className="careers-mobile bg-brand-purple-dark text-white">
      <section className="careers-mobile-hero relative min-h-[663px] overflow-hidden bg-gradient-to-b from-brand-purple-dark to-[rgba(57,24,116,.53)] px-10 pb-[60px] pt-[141px] max-[379px]:px-5">
        <div className="careers-mobile-hero-content mx-auto w-full max-w-[720px]">
          <div className="relative aspect-[313/210] w-full overflow-hidden"><img src={heroMosaic} alt="Careers at Outsource.com" className="absolute left-0 top-[-46.26%] h-[146.32%] w-full max-w-none" /></div>
          <h1 className="mt-9 text-[30px] font-medium leading-9">Build your career with <span className="text-brand-lime">Outsource.com</span></h1>
          <p className="mt-4 text-lg leading-6">Explore career opportunities in Dhaka and Manchester. Register your interest and we’ll contact you when a suitable role becomes available.</p>
          <button onClick={handleRegister} className="mt-8 inline-flex h-12 w-[225px] max-w-full items-center justify-center whitespace-nowrap rounded-lg border border-brand-periwinkle px-5 py-2 text-lg leading-6 transition-colors duration-200 ease-linear hover:border-transparent hover:bg-brand-lime hover:text-brand-purple-mid">Register your interest</button>
        </div>
      </section>

      <section className="careers-mobile-highlights flex h-[380px] items-center px-10 py-[60px] max-[379px]:px-5">
        <div className="mx-auto grid w-full max-w-[720px] grid-cols-2 gap-x-5 gap-y-10 max-[380px]:grid-cols-1">{HIGHLIGHTS.map(([title, icon]) => <div key={title} className="flex min-w-0 flex-col items-center text-center"><img src={icon} alt="" className="h-[50px] w-[50px]" /><p className="mt-3 text-lg leading-6">{title}</p></div>)}</div>
      </section>

      <section className="min-h-[628px] space-y-10 bg-gradient-to-b from-[#37176e] from-[19%] to-[rgba(25,10,54,.23)] px-10 py-[60px] max-[379px]:px-5">
        {LOCATIONS.map((loc, index) => <article key={loc.city} className="fading-card-border mx-auto flex min-h-[234px] w-full max-w-[720px] flex-col gap-6 rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 px-6 py-8">
          <div className="flex items-start gap-4 px-[6px]"><img src={loc.city.startsWith('Dhaka') ? usersIcon : pinIcon} alt="" className="h-[50px] w-[50px] shrink-0" /><div><h3 className="text-lg font-bold leading-6 text-brand-lime">{loc.city}</h3><p className="mt-2 text-lg font-bold leading-6">{loc.tag}</p></div></div>
          <p className="px-[6px] text-lg leading-6 text-brand-periwinkle">{loc.desc}</p>
          <div className={expandedCities.includes(loc.city) ? 'border-t border-white/20 pt-6' : ''}>
            <button type="button" aria-expanded={expandedCities.includes(loc.city)} aria-controls={`career-roles-${index}`} onClick={() => setExpandedCities((current) => current.includes(loc.city) ? current.filter((city) => city !== loc.city) : [...current, loc.city])} className="flex items-center gap-2 text-lg leading-6 text-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime">Example Roles <ChevronDown size={18} className={expandedCities.includes(loc.city) ? 'rotate-180' : ''} /></button>
            <ul id={`career-roles-${index}`} hidden={!expandedCities.includes(loc.city)} className={`mt-[18px] flex-wrap gap-3 ${expandedCities.includes(loc.city) ? 'flex' : 'hidden'}`}>
              {loc.roles.map((role) => <li key={role} className="max-w-full rounded border-2 border-brand-purple/50 px-4 py-2 text-lg leading-6">{role}</li>)}
            </ul>
          </div>
        </article>)}
      </section>

      <section className="h-[540px] rounded-t-3xl px-10 py-[60px] max-[379px]:px-5">
        <div className="mx-auto w-full max-w-[720px]"><h2 className="text-center text-[30px] font-medium leading-9"><span className="text-brand-lime">How to join</span> our talent network</h2><ol className="relative mt-[60px] space-y-10"><span aria-hidden className="absolute bottom-5 left-5 top-5 w-px -translate-x-1/2 bg-white/15" />{AFTER.map((step) => <li key={step.n} className="relative flex items-center gap-5"><span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-lime text-lg font-bold text-brand-purple-dark">{step.n}</span><span className="text-lg leading-6">{step.label}</span></li>)}</ol></div>
      </section>

      <section className="careers-mobile-register group/register min-h-[243px] bg-brand-purple-mid px-10 py-10 max-[379px]:px-5 transition-colors duration-300 ease-out hover:delay-300 hover:bg-brand-lime hover:text-brand-purple-mid"><div className="mx-auto w-full max-w-[720px]"><h2 className="text-2xl font-bold leading-7">Register your interest</h2><p className="mt-3 text-lg leading-6">Interested in joining us? Register for future opportunities.</p><button onClick={handleRegister} className="mt-8 min-h-12 w-full rounded-lg bg-brand-lime px-6 py-3 leading-6 text-lg font-medium text-brand-purple-mid outline outline-1 outline-offset-[-1px] outline-transparent transition-colors duration-300 ease-out group-hover/register:delay-300 group-hover/register:outline-brand-lime group-hover/register:bg-brand-purple-mid group-hover/register:text-brand-lime">Register your interest</button></div></section>
    </div>
  );
}
