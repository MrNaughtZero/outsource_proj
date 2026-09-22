/* ------------------------------------------------------------------ */
/*  Brand "people" glyphs — inline SVG so the purple + lime engagement  */
/*  icons match the Figma design exactly and stay consistent.           */
/*  Shared between the desktop (Solutions) and mobile (SolutionsMobile).*/
/* ------------------------------------------------------------------ */

import heroPeople from '../../assets/landing/images/work_together2.png';
import oboardIcon from '../../assets/landing/images/icons/oboard.png';
import collabIcon from '../../assets/landing/images/icons/collab.png';

const PURPLE_BACK = '#5C34A1';

/** Dedicated Hire — onboarding a single person (brand icon asset). */
export function IconHire({ className }: { className?: string }) {
  return (
    <img src={oboardIcon} alt="" aria-hidden className={`object-contain ${className ?? ''}`} />
  );
}

/** Dedicated Pod — a collaborating team (brand icon asset). */
export function IconPod({ className }: { className?: string }) {
  return (
    <img src={collabIcon} alt="" aria-hidden className={`object-contain ${className ?? ''}`} />
  );
}

/** Project Support — a lead lime figure stepping out in front of a pair. */
export function IconProject({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <g fill={PURPLE_BACK}>
        <circle cx="22" cy="22" r="6" />
        <path d="M12 40v-2a10 10 0 0 1 20 0v2z" />
        <circle cx="42" cy="22" r="6" />
        <path d="M32 40v-2a10 10 0 0 1 20 0v2z" />
      </g>
      <g fill="#CCF043">
        <circle cx="32" cy="29" r="8" />
        <path d="M18 53v-3a14 14 0 0 1 28 0v3z" />
      </g>
    </svg>
  );
}

/** Hero graphic — the "one stands out" people row: faint purple figures with
 *  one bigger, prominent lime figure in front (brand asset). */
export function HeroFigure({ className }: { className?: string }) {
  return <img src={heroPeople} alt="" aria-hidden className={className} />;
}
