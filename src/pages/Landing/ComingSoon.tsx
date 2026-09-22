import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-purple-dark px-6 font-poppins">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark to-brand-purple/40" />
      <div className="relative text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-brand-lime">
          {title}
        </span>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Coming soon</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          This page is being designed. Check back shortly — or get in touch with our team in the
          meantime.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-semibold text-brand-purple-dark transition-colors hover:bg-brand-lime-hover"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
