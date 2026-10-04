import { Fragment, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import plus from '../../../assets/landing/home/roles-plus.svg';
import minus from '../../../assets/landing/home/role-mobile-minus.svg';
import check from '../../../assets/landing/home/role-mobile-check.svg';
import divider from '../../../assets/landing/home/role-mobile-divider.svg';
import arrow from '../../../assets/landing/home/role-view-arrow.svg';
import arrowHover from '../../../assets/landing/home/role-view-arrow-hover.svg';

type Role = {
  mobileImage: string;
  mobileTitle: string;
  to: string;
  details: readonly string[];
};

export default function MobileHomeRoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();

  return (
    <article className="home-mobile-role rounded-lg bg-[#f9f7fd] p-2 lg:hidden" data-expanded={expanded}>
      <button
        type="button"
        id={`${id}-toggle`}
        aria-expanded={expanded}
        aria-controls={`${id}-details`}
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-5 rounded pr-3 text-left text-brand-purple-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      >
        <img src={role.mobileImage} alt="" className="h-[87px] w-[85px] shrink-0 rounded-lg object-contain" />
        <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
          <span className="min-w-0 text-lg font-medium leading-6">{role.mobileTitle}</span>
          <img src={expanded ? minus : plus} alt="" className="h-6 w-6 shrink-0" />
        </span>
      </button>
      <div className="home-mobile-role-reveal" inert={!expanded} aria-hidden={!expanded}>
        <div className="min-h-0 overflow-hidden">
          <div id={`${id}-details`} role="region" aria-labelledby={`${id}-toggle`} className="mt-5 flex flex-col gap-6 rounded bg-brand-purple-mid p-5">
            <ul className="flex flex-col gap-2">
              {role.details.map((detail, index) => (
                <Fragment key={detail}>
                  {index > 0 && <li aria-hidden className="relative h-0"><img src={divider} alt="" className="absolute -top-px h-px w-full" /></li>}
                  <li className="flex items-start gap-2.5 text-lg font-normal leading-6 text-brand-periwinkle">
                    <img src={check} alt="" className="h-6 w-6 shrink-0" />
                    <span className="min-w-0">{detail}</span>
                  </li>
                </Fragment>
              ))}
            </ul>
            <Link to={role.to} className="group/mobile-role-view flex w-fit items-end gap-2 text-lg font-semibold leading-6 text-brand-lime transition-colors duration-200 ease-out hover:text-white hover:underline focus-visible:text-white focus-visible:underline">
              <span>View {role.mobileTitle}</span>
              <span className="relative h-[20.75px] w-[15px] shrink-0">
                <img src={arrow} alt="" className="absolute inset-0 group-hover/mobile-role-view:invisible group-focus-visible/mobile-role-view:invisible" />
                <img src={arrowHover} alt="" className="invisible absolute inset-0 group-hover/mobile-role-view:visible group-focus-visible/mobile-role-view:visible" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
