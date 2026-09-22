import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import logoWhite from '../../../assets/landing/logo/02_logo_com_white_lime.svg';
import logoPurple from '../../../assets/landing/logo/02_logo_com_purple.svg';
import logoMark from '../../../assets/landing/logo/00_small_logo_lime.svg';
import menuIcon from '../../../assets/landing/home/menu.svg';
import callButton from '../../../assets/landing/home/call-button.svg';
import rolesChevron from '../../../assets/landing/home/roles-chevron.svg';

// Primary links shown inline in the header bar (desktop).
const TOP_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
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

// Full set shown in the slide-over menu, in Figma's order.
// NOTE: "Insights" (/insights) is deliberately omitted — the client asked for it
// to be hidden. The route still exists, it just isn't linked from the menu.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'How it Works', to: '/how-it-works' },
  { label: 'Support Scenarios', to: '/support-scenarios' },
  { label: 'Roles', to: '/roles' },
  { label: 'Accountants', to: '/roles/accountants' },
  { label: 'Bookkeepers', to: '/roles/bookkeepers' },
  { label: 'Payroll Specialists', to: '/roles/payroll-specialists' },
  { label: 'Virtual CFOs', to: '/roles/virtual-cfos' },
  { label: 'Engagement models', to: '/solutions' },
  { label: 'Careers', to: '/careers' },
  { label: 'Succession & Exit', to: '/succession-and-exit' },
  { label: 'Contact Us', to: '/contact' },
];

interface MarketingNavbarProps {
  /** When true, the navbar sits transparently over a dark hero (white logo). */
  overlay?: boolean;
}

export default function MarketingNavbar({ overlay = true }: MarketingNavbarProps) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [rolesMenuOpen, setRolesMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const triggerColor = overlay ? 'text-white' : 'text-brand-purple-dark';
  const collapsedLogo = overlay ? logoWhite : logoPurple;

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 12);

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

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
    <header className={`fixed inset-x-0 top-0 z-40 font-dmsans transition-[background-color,box-shadow,padding] duration-300 ${overlay ? (scrolled ? 'bg-[#180a34] pb-2 shadow-lg shadow-black/15' : 'bg-gradient-to-b from-[rgba(32,12,73,0.45)] to-transparent lg:from-[#180a34] lg:via-[#180a34]/45') : 'bg-white'}`}>
      <nav className="mx-auto flex h-[82px] max-w-nav items-center justify-between px-10 max-[379px]:px-5 lg:h-20 lg:px-[47px]">
        <Link to="/" className="min-w-0 shrink lg:w-[255px] lg:shrink-0">
          <img src={collapsedLogo} alt="Outsource" className="h-auto w-[143px] lg:w-[255px]" />
        </Link>

        <div className="flex shrink-0 items-center gap-4 lg:gap-6 min-[1024px]:max-[1259px]:gap-3">
          <div className="hidden items-center lg:flex lg:translate-y-2">
            <ul className="mr-3 flex items-center max-[1100px]:hidden">
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
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium leading-[normal] transition-colors hover:bg-white hover:text-brand-purple-dark min-[1024px]:max-[1259px]:px-2 min-[1024px]:max-[1259px]:text-base ${triggerColor}`}
                  >
                    {link.label}
                    {'chevron' in link && link.chevron && <img src={rolesChevron} alt="" className="h-[7px] w-[10px]" />}
                  </NavLink>
                  {'chevron' in link && link.chevron && (
                    <div className={`absolute left-0 top-full z-50 pt-2 transition-opacity ${rolesMenuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}>
                      <ul className="flex h-[174px] w-52 flex-col justify-center gap-2 rounded-lg bg-white px-4 py-[13px] shadow-xl">
                        {ROLE_LINKS.map((role) => (
                          <li key={role.to}>
                            <Link
                              to={role.to}
                              onClick={() => setRolesMenuOpen(false)}
                              className="block whitespace-nowrap px-2 py-1 text-lg font-medium leading-[normal] text-brand-purple-mid transition-colors hover:text-brand-purple"
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

            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-brand-lime px-4 py-2 text-lg font-medium leading-[normal] text-brand-purple-mid transition-colors hover:bg-brand-lime-hover min-[1024px]:max-[1259px]:px-2 min-[1024px]:max-[1259px]:text-base"
            >
              Book a call
            </Link>
          </div>

          {/* Lime call button (mobile only) */}
          {pathname !== '/careers/register' && pathname !== '/contact' && <a
            href="tel:01618705253"
            aria-label="Call us"
            className="block h-[34px] w-[34px] lg:hidden"
          >
            <img src={callButton} alt="" className="h-[34px] w-[34px]" />
          </a>}

          <button
            aria-label="Open menu"
            onClick={openMenu}
            className="flex h-5 w-7 items-center justify-center transition-opacity hover:opacity-80 lg:h-10 lg:w-10 lg:translate-y-2"
          >
            <img src={menuIcon} alt="" className="h-5 w-7 lg:h-4 lg:w-6" />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu.
          Figma: dark base the whole way down with a soft purple glow low-left,
          not a bright purple wash at the bottom. All three stops are brand
          tokens — #1F0849 purple-dark, #2A124D purple-alt, #411C80 purple-mid. */}
      {open && (
        <div
          className={`marketing-menu-backdrop fixed inset-0 z-50 overflow-y-auto text-white ${closing ? 'is-closing' : ''}`}
          style={{
            backgroundImage:
              'radial-gradient(60% 45% at 32% 78%, rgba(65,28,128,0.35) 0%, rgba(65,28,128,0) 70%), linear-gradient(to bottom, #1F0849 0%, #2A124D 100%)',
          }}
        >
          <div className={`marketing-menu-panel mx-auto flex min-h-full max-w-container flex-col px-6 lg:px-10 ${closing ? 'is-closing' : ''}`}>
            {/* Top bar */}
            <div className="flex items-center justify-between py-6">
              <Link to="/" onClick={closeMenu} className="min-w-0 shrink">
                <img src={logoWhite} alt="Outsource" className="h-5 w-auto sm:h-6 md:h-8" />
              </Link>
              <div className="flex shrink-0 items-center gap-2.5">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="whitespace-nowrap rounded-lg bg-brand-lime px-3 py-1.5 text-xs font-semibold text-brand-purple-mid transition-colors hover:bg-brand-lime-hover sm:px-4 sm:py-2 sm:text-sm"
                >
                  Book a call
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  <X size={26} />
                </button>
              </div>
            </div>

            {/* Body — one left-hand column of links with Login Now beneath it.
                The inline email form was replaced by a plain link to /login. */}
            <nav className="flex flex-1 flex-col pt-14 md:pt-20">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `inline-block text-base transition-colors hover:text-brand-lime ${
                          isActive ? 'text-brand-lime' : 'text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/login"
                onClick={closeMenu}
                className="mt-14 inline-flex w-fit items-center gap-2.5 text-xl font-semibold text-brand-lime transition-opacity hover:opacity-80"
              >
                <img src={logoMark} alt="" aria-hidden className="h-6 w-auto" />
                Login Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
