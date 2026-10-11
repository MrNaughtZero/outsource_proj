import { useCookiePreferences } from '../../../components/cookies/CookieContext';
import { Link } from 'react-router-dom';
import { useCalculator } from '../calculator/CalculatorContext';
import compareCostsIcon from '../../../assets/landing/home/menu-calculator.svg';
import footerContact from '../../../assets/landing/footer/contact.svg';
import footerContactHover from '../../../assets/landing/footer/contact-hover.svg';
import footerClientLoginHover from '../../../assets/landing/footer/client-login-hover.svg';
import footerLogoMain from '../../../assets/landing/footer/logo-main.svg';
import footerLogoCom from '../../../assets/landing/footer/logo-com.svg';
import footerPhone from '../../../assets/landing/footer/phone.svg';
import footerInstagram from '../../../assets/landing/footer/instagram.svg';
import footerLinkedin from '../../../assets/landing/footer/linkedin.svg';
import footerClientLogin from '../../../assets/landing/footer/client-login.svg';
import footerLogoMainMobile from '../../../assets/landing/footer/logo-main-mobile.svg';
import footerLogoComMobile from '../../../assets/landing/footer/logo-com-mobile.svg';
import footerPhoneMobile from '../../../assets/landing/footer/phone-mobile.svg';
import footerInstagramMobile from '../../../assets/landing/footer/instagram-mobile.svg';
import footerLinkedinMobile from '../../../assets/landing/footer/linkedin-mobile.svg';
import footerDivider from '../../../assets/landing/footer/divider.svg';

const EXPLORE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Solutions', to: '/support-scenarios' },
  { label: 'Team Options', to: '/solutions' },
];
const ROLE_LINKS = [
  { label: 'Accountants', to: '/roles/accountants' },
  { label: 'Bookkeepers', to: '/roles/bookkeepers' },
  { label: 'Payroll Specialists', to: '/roles/payroll-specialists' },
  { label: 'Virtual CFOs', to: '/roles/virtual-cfos' },
];
const MOBILE_ROLE_LINKS = [ROLE_LINKS[0], ROLE_LINKS[2], ROLE_LINKS[1], ROLE_LINKS[3]];
const NAV_LINK = 'block text-lg font-light leading-6 text-white transition-colors duration-200 ease-out hover:text-brand-lime min-[381px]:whitespace-nowrap';

function FooterNavigation({ mobile = false }: { mobile?: boolean }) {
  const { openCalculator } = useCalculator();
  return <nav aria-label="Footer" className={mobile ? 'grid w-full grid-cols-2 gap-x-6' : 'contents'}>
    <div className="flex flex-col items-start gap-[18px]">
      <h2>Explore</h2>
      <ul className="space-y-[18px]">
        {EXPLORE_LINKS.map(link => <li key={link.to}><Link to={link.to} className={NAV_LINK}>{link.label}</Link></li>)}
        <li><button type="button" onClick={event => openCalculator(undefined, event.currentTarget)} className="footer-compare flex h-[24.5px] items-center gap-2.5 whitespace-nowrap text-white transition-colors duration-200 ease-out hover:text-brand-lime">
          <img src={compareCostsIcon} alt="" className="shrink-0 max-w-none" />Compare costs
        </button></li>
      </ul>
    </div>
    <div className="flex flex-col items-start gap-[18px]">
      <h2><Link to="/roles" className="transition-colors duration-200 hover:text-brand-lime">Roles</Link></h2>
      <ul className="space-y-[18px]">
        {(mobile ? MOBILE_ROLE_LINKS : ROLE_LINKS).map(link => <li key={link.to}><Link to={link.to} className={NAV_LINK}>{link.label}</Link></li>)}
      </ul>
    </div>
  </nav>;
}

function FooterLogo({ mobile = false }: { mobile?: boolean }) {
  return <Link to="/" aria-label="Outsource home" className={`inline-flex shrink-0 items-end ${mobile ? 'h-4 gap-[0.5px]' : 'h-[26.33px] gap-px'}`}>
    <img src={mobile ? footerLogoMainMobile : footerLogoMain} alt="Outsource" className="max-w-none" />
    <img src={mobile ? footerLogoComMobile : footerLogoCom} alt=".com" className="max-w-none" />
  </Link>;
}

function FooterContact({ mobile = false }: { mobile?: boolean }) {
  return <div className="flex flex-col items-start gap-4">
    <p className="text-lg leading-6 text-brand-periwinkle">HQ · Manchester, UK</p>
    <a href="tel:01618705253" className={`inline-flex h-6 items-center gap-2 font-bold leading-6 text-white ${mobile ? 'text-base' : 'text-lg'}`}>
      <img src={mobile ? footerPhoneMobile : footerPhone} alt="" className="shrink-0 max-w-none" />0161 870 5253
    </a>
    <Link to="/contact" className="group/footer-contact inline-flex h-6 items-center gap-2 text-lg font-bold leading-6 text-brand-lime transition-colors duration-100 ease-out hover:text-white hover:underline">
      <span className="relative h-4 w-4 shrink-0">
        <img src={footerContact} alt="" className="absolute -left-[0.75px] -top-[0.75px] max-w-none group-hover/footer-contact:invisible" />
        <img src={footerContactHover} alt="" className="invisible absolute -left-[0.75px] -top-[0.75px] max-w-none group-hover/footer-contact:visible" />
      </span>Contact Us
    </Link>
  </div>;
}

function FooterSocials({ mobile = false }: { mobile?: boolean }) {
  return <div className="flex items-start gap-8">
    <span><img src={mobile ? footerInstagramMobile : footerInstagram} alt="Instagram" className="max-w-none" /></span>
    <a href="https://www.linkedin.com/company/outsource-com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={mobile ? footerLinkedinMobile : footerLinkedin} alt="" className="max-w-none" /></a>
  </div>;
}

function FooterLegal({ mobile = false }: { mobile?: boolean }) {
  const { openCookieSettings } = useCookiePreferences();
  return <div className={`flex w-full text-xs leading-6 ${mobile ? 'flex-col gap-2' : 'items-start justify-between gap-6'}`}>
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-brand-muted">
      {!mobile && <><Link to="/careers" className="underline hover:text-brand-lime">Join our team</Link><span aria-hidden="true">•</span></>}
      <Link to="/legal" className="underline hover:text-brand-lime">Legal</Link>
      <span className="inline-flex items-center gap-4"><span aria-hidden="true">•</span><Link to="/privacy" className="underline hover:text-brand-lime">Privacy Policy</Link></span>
      <span className="inline-flex items-center gap-4"><span aria-hidden="true">•</span><Link to="/cookie-policy" className="underline hover:text-brand-lime">Cookie Policy</Link></span>
      <span className="inline-flex items-center gap-4"><span aria-hidden="true">•</span><button type="button" className="underline hover:text-brand-lime" onClick={event => openCookieSettings(event.currentTarget)}>Manage Cookies</button></span>
      {mobile && <Link to="/careers" className="w-full underline hover:text-brand-lime">Join our team</Link>}
    </div>
    <p className="shrink-0 text-white/30">© Copyright 2026 Outsource.com</p>
  </div>;
}

function FooterActions() {
  return <div className="flex shrink-0 items-start text-lg font-medium leading-6">
    <Link to="/login" className="group/client-login flex h-10 items-center gap-[14px] rounded-lg px-4 py-2 text-brand-lime transition-colors duration-300 ease-out hover:bg-white hover:text-brand-purple-mid">
      <span className="relative h-[22px] w-6 shrink-0"><img src={footerClientLogin} alt="" className="absolute inset-0 max-w-none group-hover/client-login:invisible" /><img src={footerClientLoginHover} alt="" className="invisible absolute inset-0 max-w-none group-hover/client-login:visible" /></span>Client login
    </Link>
  </div>;
}

function FooterDivider() {
  return <div className="relative h-0 w-full"><img src={footerDivider} alt="" className="absolute -top-[0.5px] h-px w-full" /></div>;
}

export default function MarketingFooter() {
  return <footer className="marketing-footer bg-brand-purple-darkest text-white">
    <div className="mx-auto w-full px-10 py-[60px] max-[379px]:px-5 lg:max-w-[1072px] lg:py-16">
      <div className="flex flex-col gap-12 lg:hidden">
        <FooterNavigation mobile />
        <div className="flex flex-col items-start gap-[30px]">
          <FooterDivider />
          <div className="flex w-full flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-10"><FooterLogo mobile /><FooterContact mobile /></div>
            <FooterSocials mobile />
            <FooterLegal mobile />
          </div>
          <FooterDivider />
          <FooterActions />
        </div>
      </div>
      <div className="hidden flex-col gap-[57px] lg:flex">
        <div className="flex items-stretch justify-between">
          <div className="flex w-[235px] flex-col items-start justify-between"><FooterLogo /><FooterContact /><FooterSocials /></div>
          <div className="flex w-[572px] items-start justify-between"><FooterNavigation /><FooterActions /></div>
        </div>
        <FooterLegal />
      </div>
    </div>
  </footer>;
}
