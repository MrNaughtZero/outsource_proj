import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    tag: 'Outsourcing',
    title: '5 signs it’s time to outsource your accounting',
    excerpt: 'Spotting the moment to bring in expert finance support can save you time, money and stress.',
    date: 'May 2026',
  },
  {
    tag: 'Payroll',
    title: 'A simple guide to staying payroll compliant in the UK',
    excerpt: 'PAYE, pensions and RTI made clear — everything a growing business needs to know.',
    date: 'Apr 2026',
  },
  {
    tag: 'Cash Flow',
    title: 'How a virtual CFO transforms your cash flow',
    excerpt: 'Strategic forecasting that turns financial uncertainty into confident decisions.',
    date: 'Apr 2026',
  },
  {
    tag: 'Bookkeeping',
    title: 'Why real-time books beat month-end scrambles',
    excerpt: 'Keeping your books current gives you a constant, accurate view of your business.',
    date: 'Mar 2026',
  },
  {
    tag: 'Growth',
    title: 'Scaling your finance function without the overhead',
    excerpt: 'Build a complete finance team on demand — and only pay for what you actually need.',
    date: 'Mar 2026',
  },
  {
    tag: 'Technology',
    title: 'One platform, total visibility into your finances',
    excerpt: 'See how a single dashboard keeps your whole finance operation aligned and transparent.',
    date: 'Feb 2026',
  },
];

export default function Insights() {
  return (
    <div className="font-poppins">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-purple-dark pb-16 pt-36 lg:pt-44">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark to-brand-purple/40" />
        <div className="relative mx-auto max-w-container px-6 text-center lg:px-10">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-brand-lime">
            Insights
          </span>
          <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Ideas to help your business <span className="text-brand-lime">grow</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Practical advice on accounting, payroll, cash flow and scaling — from the Outsource team.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="mx-auto max-w-container px-6 py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-3xl ring-1 ring-gray-100 transition-shadow hover:shadow-xl"
            >
              {/* Decorative cover */}
              <div className="relative h-40 bg-gradient-to-br from-brand-purple to-brand-purple-mid">
                <span className="absolute left-4 top-4 rounded-full bg-brand-lime px-3 py-1 text-xs font-semibold text-brand-purple-dark">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-gray-400">{a.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-purple-dark">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight size={16} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-lavender/60">
        <div className="mx-auto max-w-container px-6 py-16 text-center lg:px-10">
          <h2 className="text-2xl font-semibold text-brand-purple-dark md:text-3xl">
            Get insights straight to your inbox
          </h2>
          <p className="mt-3 text-gray-600">No spam — just useful finance tips, now and then.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-brand-purple-dark outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-brand-purple"
            />
            <button
              type="submit"
              className="rounded-full bg-brand-purple px-7 py-3 text-sm font-semibold text-brand-lime transition-colors hover:bg-brand-purple-mid"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
