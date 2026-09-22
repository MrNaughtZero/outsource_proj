import { Link } from 'react-router-dom';

interface CtaBannerProps {
  /** Defaults to the standard "Ready to build your finance team!" copy. */
  title?: string;
  highlight?: string;
  sub?: string;
  buttonLabel?: string;
}

/** Standard marketing call-to-action card used at the foot of each page. */
export default function CtaBanner({
  title = 'to build your finance team!',
  highlight = 'Ready',
  sub = 'Book a 15-minute call and we will show you how.',
  buttonLabel = 'Book a Call',
}: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-container px-6 pb-14 lg:px-10 lg:pb-24">
      <div className="group flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-purple/40 px-7 py-8 ring-1 ring-white/10 transition-colors duration-300 hover:bg-brand-lime md:flex-row md:items-center md:px-12 md:py-10">
        <div>
          <h2 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-brand-purple-dark md:text-3xl">
            <span className="text-brand-lime transition-colors duration-300 group-hover:text-brand-purple-dark">
              {highlight}
            </span>{' '}
            {title}
          </h2>
          <p className="mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-brand-purple-dark/80 md:text-base">
            {sub}
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-lime px-10 py-4 text-sm font-semibold text-brand-purple-dark transition-colors duration-300 group-hover:bg-brand-purple-dark group-hover:text-brand-lime"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
