import { Link } from 'react-router-dom';
import arrowLight from '../../../assets/landing/home/arrow-light.svg';
import arrowPurple from '../../../assets/landing/home/arrow-purple.svg';

function ReliefCard({
  to,
  title,
  highlight,
  copy,
  mobileCopy,
  lime = false,
  className = '',
}: {
  to: string;
  title: string;
  highlight?: string;
  copy: string;
  mobileCopy?: string;
  lime?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`relief-card ${lime ? 'relief-card-call' : 'relief-card-arrow'} group relative flex min-h-[124px] flex-col rounded-lg border p-5 transition-[background-color,border-color,box-shadow] duration-200 ease-out lg:h-[226px] lg:border-0 lg:p-8 lg:ring-1 lg:ring-inset ${lime ? 'border-brand-purple/70 bg-brand-lime text-brand-purple-mid lg:ring-[rgba(92,52,161,0.67)] hover:bg-white hover:border-brand-lime hover:ring-1 hover:ring-inset hover:ring-brand-lime lg:hover:ring-2' : 'border-brand-purple/50 bg-gradient-to-r from-brand-purple to-brand-purple/15 text-white lg:bg-gradient-to-b lg:ring-brand-purple/50 hover:bg-brand-purple hover:border-brand-periwinkle hover:ring-brand-periwinkle'} ${className}`}
    >
      <div className="relief-card-heading contents">
        <h3 className={`pr-10 text-lg font-bold leading-6 lg:pr-0 lg:text-2xl lg:leading-8 ${lime ? 'pl-10 lg:pl-0' : ''}`}>
          {title} {highlight && <span className={lime ? '' : 'text-brand-lime'}>{highlight}</span>}
        </h3>
        <img
          src={lime ? arrowPurple : arrowLight}
          alt=""
          className={`absolute h-8 w-8 shrink-0 lg:bottom-8 lg:left-auto lg:right-8 lg:top-auto ${lime ? 'left-5 top-5' : 'right-5 top-5'}`}
        />
      </div>
      <p className="relief-card-mobile-copy mt-3 text-lg leading-6 lg:hidden">{mobileCopy ?? copy}</p>
      <p className="mt-4 hidden text-lg leading-6 lg:block">{copy}</p>
    </Link>
  );
}

type ReliefCardDetails = {
  to: string;
  title: string;
  highlight?: string;
  copy: string;
  mobileCopy?: string;
};

export default function ReliefSection({
  firstCard = {
    to: '/how-it-works',
    title: 'See',
    highlight: 'how it works',
    copy: 'Learn how we match, onboard and manage your people.',
  },
  secondCard = {
    to: '/solutions',
    title: 'Compare',
    highlight: 'team options',
    copy: 'Choose a dedicated finance professional, a finance pod or an enterprise team.',
  },
  mobileClassName = '',
  fluidMobile = true,
}: {
  firstCard?: ReliefCardDetails;
  secondCard?: ReliefCardDetails;
  mobileClassName?: string;
  fluidMobile?: boolean;
}) {
  return (
    <section className={`home-relief bg-[#3c1979] px-10 pb-[67px] pt-[60px] lg:h-[586px] lg:bg-gradient-to-b lg:from-brand-purple-mid lg:to-brand-purple-mid/60 lg:px-0 lg:pb-[120px] lg:pt-24 ${mobileClassName}`}>
      <div className={`mx-auto w-full ${fluidMobile ? '' : 'max-w-[313px] md:max-w-[720px]'} lg:max-w-[992px]`}>
        <h2 className="text-[30px] font-medium leading-9 lg:text-[42px] lg:leading-[48px]">
          The <span className="text-brand-lime">relief</span> you've been looking for.
        </h2>
        <p className="mt-3 text-lg font-light leading-6 lg:mt-4">
          Where would you like to go <span className="text-brand-lime">next?</span>
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-[351px_351px_242px] lg:gap-6">
          <ReliefCard {...firstCard} />
          <ReliefCard {...secondCard} />
          <ReliefCard className="md:col-span-2 lg:col-span-1" to="/contact" title="Ready to talk?" copy="Book a 15-minute call and let's discuss your needs." lime />
        </div>
      </div>
    </section>
  );
}
