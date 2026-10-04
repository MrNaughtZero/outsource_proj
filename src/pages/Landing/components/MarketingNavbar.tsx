import { useEffect, useRef, useState } from 'react';
import { useCalculator } from '../calculator/CalculatorContext';
import { Link, NavLink } from 'react-router-dom';
import logoPurple from '../../../assets/landing/logo/02_logo_com_purple.svg';
import menuIcon from '../../../assets/landing/home/menu.svg';
import authMenuIcon from '../../../assets/landing/login/auth-menu.svg';
import callButton from '../../../assets/landing/home/call-button.svg';
import rolesChevron from '../../../assets/landing/home/roles-chevron.svg';
import rolesChevronHover from '../../../assets/landing/home/roles-chevron-hover.svg';
import calculatorHover from '../../../assets/landing/home/calculator-hover.svg';
import clientLoginHover from '../../../assets/landing/footer/client-login-hover.svg';
import calculatorIcon from '../../../assets/landing/home/calculator.svg';
import menuLogoMain from '../../../assets/landing/home/menu-logo-main.svg';
import menuLogoCom from '../../../assets/landing/home/menu-logo-com.svg';
import menuLogoMainMobile from '../../../assets/landing/home/menu-logo-main-mobile.svg';
import menuLogoComMobile from '../../../assets/landing/home/menu-logo-com-mobile.svg';
import menuClose from '../../../assets/landing/home/menu-close.svg';
import menuCalculator from '../../../assets/landing/home/menu-calculator.svg';
import menuCalculatorHover from '../../../assets/landing/home/menu-calculator-hover.svg';
import menuRolesUp from '../../../assets/landing/home/menu-roles-up.svg';
import joinTeam from '../../../assets/landing/footer/join-team.svg';
import joinTeamHover from '../../../assets/landing/footer/join-team-hover.svg';
import clientLogin from '../../../assets/landing/footer/client-login.svg';
import headerLogoMainMobile from '../../../assets/landing/home/header-logo-main-mobile.svg';
import headerLogoComMobile from '../../../assets/landing/home/header-logo-com-mobile.svg';
import menuDividerDesktop from '../../../assets/landing/home/menu-divider-desktop.svg';
import menuDividerMobile from '../../../assets/landing/home/menu-divider-mobile.svg';

function MobileCallButton() {
  return <a href="tel:01618705253" aria-label="Call us" className="mobile-call-button block h-[34px] w-[34px] shrink-0 lg:hidden">
    <img src={callButton} alt="" className="block max-w-none" />
  </a>;
}

function NavigationLogo({ expanded = false }: { expanded?: boolean }) {
  return <span className="relative block h-[18.001px] w-[160.602px] lg:h-[28.572px] lg:w-[255px]">
    <img src={expanded ? menuLogoMainMobile : headerLogoMainMobile} alt="" className="absolute left-0 top-0 max-w-none lg:hidden" />
    <img src={expanded ? menuLogoComMobile : headerLogoComMobile} alt="" className="absolute left-[130.89px] top-[10.48px] max-w-none lg:hidden" />
    <img src={menuLogoMain} alt="" className="absolute left-0 top-0 hidden max-w-none lg:block" />
    <img src={menuLogoCom} alt="" className="absolute left-[207.83px] top-[16.64px] hidden max-w-none lg:block" />
  </span>;
}

// Primary links shown inline in the header bar (desktop).
const TOP_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Solutions', to: '/support-scenarios' },
  { label: 'Roles', to: '/roles', chevron: true },
  { label: 'Team Options', to: '/solutions' },
];

const ROLE_LINKS = [
  { label: 'Accountants', to: '/roles/accountants' },
  { label: 'Payroll Specialists', to: '/roles/payroll-specialists' },
  { label: 'Bookkeepers', to: '/roles/bookkeepers' },
  { label: 'Virtual CFOs', to: '/roles/virtual-cfos' },
];

// Expanded navigation, shared by every marketing page.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'How it Works', to: '/how-it-works' },
  { label: 'Solutions', to: '/support-scenarios' },
  { label: 'Roles', to: '/roles' },
  { label: 'Team Options', to: '/solutions' },
  { label: 'Contact Us', to: '/contact' },
];
const MOBILE_ROLE_LINKS = [ROLE_LINKS[0], ROLE_LINKS[2], ROLE_LINKS[1], ROLE_LINKS[3]];
const MENU_LINK_CLASS = 'inline-flex items-center rounded-lg px-4 py-2 text-base font-medium leading-[normal] text-white transition-colors duration-200 ease-linear hover:bg-[#f9f7fd] hover:text-brand-purple-mid';

interface MarketingNavbarProps {
  /** When true, the navbar sits transparently over a dark hero (white logo). */
  overlay?: boolean;
  /** Lighter closed header used over the login/reset page background. */
  variant?: 'marketing' | 'auth';
}

export default function MarketingNavbar({ overlay = true, variant = 'marketing' }: MarketingNavbarProps) {
  const { openCalculator } = useCalculator();
  const menuTrigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [rolesMenuOpen, setRolesMenuOpen] = useState(false);
  const [expandedRolesOpen, setExpandedRolesOpen] = useState(false);
  const [mobileRolesOpen, setMobileRolesOpen] = useState(false);
  const triggerColor = overlay ? 'text-white' : 'text-brand-purple-dark';

  // Lock page scroll while the full-screen menu is open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!closing) return;

    const timeout = window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 280);

    return () => window.clearTimeout(timeout);
  }, [closing]);

  const openMenu = () => {
    setRolesMenuOpen(false);
    setExpandedRolesOpen(false);
    setMobileRolesOpen(false);
    setClosing(false);
    setOpen(true);
  };

  const closeMenu = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOpen(false);
      setClosing(false);
      return;
    }

    setClosing(true);
  };

  return (
    <header className={`marketing-header antialiased fixed inset-x-0 top-0 z-40 ${variant === 'auth' ? 'marketing-header-auth' : overlay ? 'marketing-header-overlay' : 'bg-white'}`}>
      <nav className="mx-auto flex h-[82px] max-w-nav items-center justify-between px-10 max-[379px]:px-5 lg:h-20 lg:items-start lg:px-[47px] lg:py-[21px]">
        <Link to="/" aria-label="Outsource home" className="min-w-0 shrink lg:w-[255px] lg:shrink-0">
          {overlay ? <NavigationLogo /> : <img src={logoPurple} alt="" className="h-auto w-[160.6px] lg:w-[255px]" />}
        </Link>

        <div className="flex shrink-0 items-center gap-4 lg:gap-6 min-[1024px]:max-[1259px]:gap-3">
          <div className="hidden items-center lg:flex">
            <ul className="flex items-center max-[1100px]:hidden">
              {TOP_LINKS.map((link) => (
                <li
                  key={link.to}
                  className={'chevron' in link && link.chevron ? 'relative' : undefined}
                  onMouseEnter={'chevron' in link && link.chevron ? () => setRolesMenuOpen(true) : undefined}
                  onMouseLeave={'chevron' in link && link.chevron ? () => setRolesMenuOpen(false) : undefined}
                  onFocus={'chevron' in link && link.chevron ? () => setRolesMenuOpen(true) : undefined}
                  onBlur={'chevron' in link && link.chevron ? (event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setRolesMenuOpen(false);
                  } : undefined}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={'chevron' in link && link.chevron ? () => setRolesMenuOpen(false) : undefined}
                    className={`group/nav-link flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium leading-[normal] transition-colors duration-200 ease-linear hover:bg-[#f9f7fd] hover:text-brand-purple-mid min-[1024px]:max-[1259px]:px-2 ${triggerColor}`}
                  >
                    {link.label}
                    {'chevron' in link && link.chevron && <span className="relative h-[7px] w-[10px]"><img src={rolesChevron} alt="" className="absolute -left-px top-0 h-2 w-3 max-w-none group-hover/nav-link:invisible" /><img src={rolesChevronHover} alt="" className="invisible absolute -left-px top-0 h-2 w-3 max-w-none group-hover/nav-link:visible" /></span>}
                  </NavLink>
                  {'chevron' in link && link.chevron && (
                    <div className={`absolute left-0 top-full z-50 pt-2 transition-opacity duration-300 ease-out ${rolesMenuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}>
                      <ul className="flex h-[166px] w-52 flex-col justify-center gap-2 rounded-lg bg-white px-4 py-[13px] shadow-xl">
                        {ROLE_LINKS.map((role) => (
                          <li key={role.to}>
                            <Link
                              to={role.to}
                              onClick={() => setRolesMenuOpen(false)}
                              className="block whitespace-nowrap px-2 py-1 text-base font-medium leading-[normal] text-brand-purple-mid transition-colors duration-200 ease-out hover:font-semibold hover:underline"
                            >
                              {role.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={event => openCalculator(undefined, event.currentTarget)}
              aria-label="Compare costs"
              className="group/calculator relative flex h-[37px] w-[65px] shrink-0 items-center justify-center"
            >
              <span className="relative h-[33px] w-[25px]">
                <img src={calculatorIcon} alt="" className="absolute inset-0 max-w-none group-hover/calculator:invisible" />
                <img src={calculatorHover} alt="" className="invisible absolute inset-0 max-w-none group-hover/calculator:visible" />
                <span role="tooltip" className="pointer-events-none invisible absolute left-[-66.066px] top-[46.333px] whitespace-nowrap rounded-lg bg-white/70 px-4 py-2 text-lg font-light leading-6 text-brand-purple-mid opacity-0 transition-opacity duration-100 ease-out group-hover/calculator:visible group-hover/calculator:opacity-100">Compare costs</span>
              </span>
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-brand-lime px-4 py-2 text-base font-medium leading-[normal] text-brand-purple-mid transition-colors duration-200 ease-linear hover:bg-white min-[1024px]:max-[1259px]:px-2"
            >
              Book a call
            </Link>
          </div>

          {variant !== 'auth' && <MobileCallButton />}

          <button
            ref={menuTrigger}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="marketing-expanded-menu"
            onClick={openMenu}
            className="flex h-4 w-6 items-center justify-center transition-opacity hover:opacity-80 lg:h-8 lg:w-10"
          >
            <span className="relative block h-4 w-6"><img src={variant === 'auth' ? authMenuIcon : menuIcon} alt="" className="absolute -left-0.5 -top-0.5 h-5 w-7 max-w-none" /></span>
          </button>
        </div>
      </nav>

      {/* Expanded desktop/mobile navigation from Figma's header variants. */}
      {open && (
        <div
          id="marketing-expanded-menu"
          className={`marketing-menu-backdrop fixed inset-0 z-50 overflow-y-auto text-white antialiased backdrop-blur-[6px] ${closing ? 'is-closing' : ''}`}
          style={{ backgroundImage: 'linear-gradient(to top, rgba(37,16,80,0.5) 0%, #251050 41.201%, #180a34 82.403%)' }}
        >
          <div className={`marketing-menu-panel mx-auto flex min-h-full max-w-nav flex-col gap-[60px] px-10 py-6 max-[379px]:px-5 lg:gap-[100px] lg:px-[47px] lg:py-[21px] ${closing ? 'is-closing' : ''}`}>
            <div className="flex items-center justify-between lg:items-start">
              <Link to="/" onClick={closeMenu} aria-label="Outsource home" className="shrink-0">
                <NavigationLogo expanded />
              </Link>
              <div className="flex shrink-0 items-center gap-4 lg:gap-6">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="hidden whitespace-nowrap rounded-lg bg-brand-lime px-4 py-2 text-base font-medium leading-[normal] text-brand-purple-mid transition-colors duration-200 ease-linear hover:bg-white lg:inline-flex"
                >
                  Book a call
                </Link>
                <MobileCallButton />
                <button type="button" aria-label="Close menu" onClick={closeMenu} className="flex items-center justify-center lg:p-2">
                  <span className="relative block h-[18px] w-6"><img src={menuClose} alt="" className="absolute left-0 top-[-2px] max-w-none" /></span>
                </button>
              </div>
            </div>

            <nav aria-label="Expanded navigation" className="flex flex-col items-start gap-[30px] lg:gap-6 lg:px-[97px]">
              <ul className="flex flex-col items-start gap-2.5">
                {NAV_LINKS.map((link) => link.to === '/roles' ? (
                  <li key={link.to}>
                    <div
                      className="relative hidden lg:block"
                      onMouseEnter={() => setExpandedRolesOpen(true)}
                      onMouseLeave={() => setExpandedRolesOpen(false)}
                      onFocus={() => setExpandedRolesOpen(true)}
                      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setExpandedRolesOpen(false); }}
                    >
                      <NavLink to={link.to} onClick={closeMenu} className={`group/menu-roles gap-2 ${MENU_LINK_CLASS}`} aria-expanded={expandedRolesOpen} aria-controls="expanded-desktop-roles">
                        Roles
                        <span className="relative h-[7px] w-[10px]">
                          <img src={rolesChevron} alt="" className="absolute -left-px top-0 max-w-none group-hover/menu-roles:invisible" />
                          <img src={rolesChevronHover} alt="" className="invisible absolute -left-px top-0 max-w-none group-hover/menu-roles:visible" />
                        </span>
                      </NavLink>
                      <div className={`absolute left-0 top-full z-10 pt-[14px] transition-opacity duration-300 ease-out ${expandedRolesOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}>
                        <ul id="expanded-desktop-roles" className="flex h-[166px] w-52 flex-col justify-center gap-2 rounded-lg bg-white px-4 py-[13px]">
                          {ROLE_LINKS.map((role) => <li key={role.to}><Link to={role.to} onClick={closeMenu} className="block whitespace-nowrap px-2 py-1 text-base font-medium leading-[normal] text-brand-purple-mid transition-colors duration-200 ease-out hover:font-semibold hover:underline">{role.label}</Link></li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:hidden">
                      <button type="button" onClick={() => setMobileRolesOpen(!mobileRolesOpen)} aria-expanded={mobileRolesOpen} aria-controls="expanded-mobile-roles" className="inline-flex items-center gap-2.5 rounded-lg px-4 py-2 text-base font-medium leading-[normal] text-white">
                        Roles
                        <span className="relative h-[7px] w-[10px]"><img src={mobileRolesOpen ? menuRolesUp : rolesChevron} alt="" className="absolute -left-px top-0 max-w-none" /></span>
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-200 ${mobileRolesOpen ? 'grid-rows-[1fr] ease-in' : 'grid-rows-[0fr] ease-out'}`}>
                        <ul id="expanded-mobile-roles" aria-hidden={!mobileRolesOpen} className="flex min-h-0 flex-col items-start gap-2 overflow-hidden pl-4">
                          {MOBILE_ROLE_LINKS.map((role, index) => <li key={role.to} className={index === 0 ? 'pt-2' : undefined}><Link to={role.to} tabIndex={mobileRolesOpen ? undefined : -1} onClick={closeMenu} className={`${MENU_LINK_CLASS} !text-[#cabcf6] hover:!text-brand-purple-mid`}>{role.label}</Link></li>)}
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={link.to}>
                    <NavLink to={link.to} end={link.to === '/'} onClick={closeMenu} className={MENU_LINK_CLASS}>{link.label}</NavLink>
                  </li>
                ))}
                <li>
                  <button type="button" onClick={() => {
                    setClosing(false);
                    setOpen(false);
                    // Let the menu release its scroll lock before the dialog acquires it.
                    window.setTimeout(() => openCalculator(undefined, menuTrigger.current ?? undefined), 0);
                  }} aria-label="Compare costs" className="group/menu-costs inline-flex items-center gap-[14px] rounded-lg px-4 py-2 text-lg font-medium leading-6 text-brand-lime transition-colors duration-300 ease-out hover:bg-white hover:text-brand-purple-mid">
                    <span className="relative h-[24.5px] w-[18.682px]">
                      <img src={menuCalculator} alt="" className="absolute inset-0 max-w-none group-hover/menu-costs:invisible" />
                      <img src={menuCalculatorHover} alt="" className="invisible absolute inset-0 max-w-none group-hover/menu-costs:visible" />
                    </span>
                    Compare costs
                  </button>
                </li>
              </ul>
              <div aria-hidden="true" className="relative h-0 w-full lg:w-[395.159px]">
                <img src={menuDividerMobile} alt="" className="absolute top-0 h-px w-full lg:hidden" />
                <img src={menuDividerDesktop} alt="" className="absolute top-0 hidden max-w-none lg:block" />
              </div>
              <div className="flex flex-col items-start gap-3">
                <Link to="/careers" onClick={closeMenu} className="group/menu-team inline-flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium leading-[normal] text-white transition-colors duration-200 ease-linear hover:text-brand-lime">
                  <span className="relative h-6 w-6"><img src={joinTeam} alt="" className="absolute inset-0 hidden max-w-none group-hover/menu-team:invisible lg:block" /><img src={joinTeamHover} alt="" className="absolute inset-0 max-w-none group-hover/menu-team:visible lg:invisible" /></span>
                  <span className="group-hover/menu-team:underline [text-underline-position:from-font]">Join our team</span>
                </Link>
                <Link to="/login" onClick={closeMenu} className="group/menu-login inline-flex items-center gap-[14px] rounded-lg px-4 py-2 text-lg font-medium leading-6 text-brand-lime transition-colors duration-300 ease-out hover:bg-white hover:text-brand-purple-mid">
                  <span className="relative flex h-[22.154px] w-6 items-center"><img src={clientLogin} alt="" className="max-w-none group-hover/menu-login:invisible" /><img src={clientLoginHover} alt="" className="invisible absolute left-0 top-0 max-w-none group-hover/menu-login:visible" /></span>
                  Client login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
