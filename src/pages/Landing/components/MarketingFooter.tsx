import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import footerLogoMain from '../../../assets/landing/footer/logo-main.svg';
import footerLogoCom from '../../../assets/landing/footer/logo-com.svg';
import footerPhone from '../../../assets/landing/footer/phone.svg';
import footerInstagram from '../../../assets/landing/footer/instagram.svg';
import footerLinkedin from '../../../assets/landing/footer/linkedin.svg';
import footerClientLogin from '../../../assets/landing/footer/client-login.svg';
import footerJoinTeam from '../../../assets/landing/footer/join-team.svg';

interface FooterLink {
  label: string;
  to: string;
  highlight?: boolean;
}

const LINKS_COL_1: FooterLink[] = [
  { label: 'Contact Us', to: '/contact', highlight: true },
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Solutions', to: '/support-scenarios' },
  { label: 'Team Options', to: '/solutions' },
  { label: 'Careers', to: '/careers' },
];

const LINKS_COL_2: FooterLink[] = [
  { label: 'Roles', to: '/roles' },
  { label: 'Accountants', to: '/roles/accountants' },
  { label: 'Bookkeepers', to: '/roles/bookkeepers' },
  { label: 'Payroll Specialists', to: '/roles/payroll-specialists' },
  { label: 'Virtual CFOs', to: '/roles/virtual-cfos' },
];

const ROLE_LINKS_MOBILE: FooterLink[] = [
  { label: 'Roles', to: '/roles' },
  { label: 'Accountants', to: '/roles/accountants' },
  { label: 'Payroll Specialists', to: '/roles/payroll-specialists' },
  { label: 'Bookkeepers', to: '/roles/bookkeepers' },
  { label: 'Virtual CFOs', to: '/roles/virtual-cfos' },
];

function LinkColumn({ links, allowWrap = false }: { links: FooterLink[]; allowWrap?: boolean }) {
  return (
    <ul className="space-y-[18px]">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className={`block text-lg leading-6 transition-colors hover:text-brand-lime ${allowWrap ? 'min-h-6' : 'h-6 whitespace-nowrap'} ${
              link.highlight ? 'font-bold text-brand-lime' : 'font-light text-white'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function MarketingFooter() {
  const [addressOpen, setAddressOpen] = useState(false);

  return (
    <footer className="bg-brand-purple-darkest font-dmsans text-white">
      <div className="relative mx-auto min-h-[876px] w-full px-10 py-[60px] max-[379px]:px-5 lg:h-[513px] lg:min-h-0 lg:max-w-[992px] lg:px-0 lg:py-16">
          <div className="flex h-full flex-col items-start gap-[60px] lg:hidden">
            <nav className="grid w-full grid-cols-2 gap-x-6"><LinkColumn links={LINKS_COL_1} allowWrap /><LinkColumn links={ROLE_LINKS_MOBILE} allowWrap /></nav>
            <div className="flex w-full flex-col gap-[30px]">
              <div className="flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-7">
                  <Link to="/" aria-label="Outsource home" className="flex h-4 w-[143px] items-end gap-[0.5px]">
                    <img src={footerLogoMain} alt="Outsource" className="h-4 w-[115.88px]" />
                    <img src={footerLogoCom} alt=".com" className="h-[6.68px] w-[26.42px]" />
                  </Link>
                  <div className="flex flex-col items-start gap-5">
                    <button type="button" onClick={() => setAddressOpen((o) => !o)} aria-expanded={addressOpen} className="flex h-6 items-center gap-3 text-base font-bold leading-6 text-brand-lime">
                      HQ Manchester, UK
                      <ChevronDown size={16} className={`transition-transform ${addressOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {addressOpen && <p className="text-lg font-light leading-6 text-white">221 Bury New Road,<br />Manchester,<br />M45 8GW</p>}
                    <a href="tel:01618705253" className="inline-flex h-6 items-center gap-2 text-lg font-bold leading-6 text-white">
                      <img src={footerPhone} alt="" className="h-[15px] w-[15px]" />0161 870 5253
                    </a>
                  </div>
                </div>
                <div className="flex h-5 items-center gap-8">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={footerInstagram} alt="" className="h-5 w-5" /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={footerLinkedin} alt="" className="h-5 w-[21.95px]" /></a>
                </div>
                <div className="flex flex-col gap-2 text-xs leading-6">
                  <p className="font-light text-white/60">© Copyright 2026 Outsource.com</p>
                  <div className="flex items-center gap-4 text-[#a19caa]"><Link to="/privacy" className="underline">Privacy Policy</Link><span>•</span><Link to="/terms" className="underline">Terms and Conditions</Link></div>
                </div>
              </div>
              <div className="h-px w-full bg-[#5c34a1]" />
              <div className="flex flex-col items-start gap-3 text-lg font-medium leading-6">
                <Link to="/careers" className="flex h-10 items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors hover:text-brand-lime">
                  <img src={footerJoinTeam} alt="" className="h-6 w-6" />Join our team
                </Link>
                <Link to="/login" className="flex h-10 items-center gap-[14px] px-4 py-2 text-brand-lime transition-opacity hover:opacity-80">
                  <img src={footerClientLogin} alt="" className="h-[22px] w-6" />Client login
                </Link>
              </div>
            </div>
          </div>

        <div className="hidden lg:block">
          <div className="flex h-[276px] justify-between">
            <div className="flex h-full w-[235.19px] flex-col gap-[60px]">
              <Link to="/" aria-label="Outsource home" className="flex h-[26.33px] w-[235.19px] items-end gap-px">
                <img src={footerLogoMain} alt="Outsource" className="h-[26.33px] w-[190.71px]" />
                <img src={footerLogoCom} alt=".com" className="mb-[0.55px] h-[10.99px] w-[43.47px]" />
              </Link>
              <div className="flex w-[227px] flex-col gap-6">
                <h4 className="text-2xl font-bold leading-6 text-brand-lime">HQ Manchester, UK</h4>
                <div className="flex w-[215px] flex-col gap-[18px]">
                  <p className="w-[159px] text-lg font-light leading-6 text-white">221 Bury New Road<br />Manchester<br />M45 8GW</p>
                  <a href="tel:01618705253" className="inline-flex items-center gap-2 text-lg font-bold leading-6 text-white">
                    <img src={footerPhone} alt="" className="h-4 w-4" />
                    0161 870 5253
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-[489px] items-start justify-between">
              <nav className="contents"><LinkColumn links={LINKS_COL_1} /><LinkColumn links={LINKS_COL_2} /></nav>
              <div className="flex items-start gap-8">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={footerInstagram} alt="" className="h-6 w-6" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={footerLinkedin} alt="" className="h-6 w-[26.34px]" /></a>
              </div>
            </div>
          </div>
          <div className="mt-[57px] flex items-start justify-between text-xs leading-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4 text-[#a19caa]"><Link to="/privacy" className="underline">Privacy Policy</Link><span>•</span><Link to="/terms" className="underline">Terms and Conditions</Link></div>
              <p className="font-light text-white/50">© Copyright 2026 Outsource.com</p>
            </div>
            <div className="flex items-center justify-end gap-6 text-lg font-medium leading-6">
              <Link to="/careers" className="flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors hover:text-brand-lime">
                <img src={footerJoinTeam} alt="" className="h-6 w-6" />
                Join our team
              </Link>
              <Link to="/login" className="flex items-center gap-[14px] px-4 py-2 text-brand-lime transition-opacity hover:opacity-80">
                <img src={footerClientLogin} alt="" className="h-[22px] w-6" />
                Client login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
