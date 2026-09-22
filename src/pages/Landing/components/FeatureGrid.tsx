import type { ComponentType, ReactNode } from 'react';
import ChatIcon from './ChatIcon';

export interface FeatureItem {
  title: string;
  desc?: string;
  /** Optional per-item icon; falls back to the brand chat bubble. */
  icon?: ComponentType<{ className?: string }>;
}

interface FeatureGridProps {
  /** Section heading (supports highlighted spans). */
  heading: ReactNode;
  /** Optional sub-paragraph under the heading. */
  sub?: ReactNode;
  items: FeatureItem[];
  className?: string;
  /** When true, wrap the content in a rounded bordered panel. */
  card?: boolean;
}

/**
 * The brand "chat-icon" feature band used across the marketing pages:
 * a centered heading with four (or more) lime chat-bubble columns.
 */
export default function FeatureGrid({ heading, sub, items, className = '', card = false }: FeatureGridProps) {
  const content = (
    <>
      <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-snug md:text-3xl lg:text-4xl">
        {heading}
      </h2>
      {sub && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          {sub}
        </p>
      )}
      <div
        className={`mt-12 grid grid-cols-2 gap-y-10 md:divide-x md:divide-white/15 ${
          items.length === 3
            ? 'md:grid-cols-3'
            : items.length === 6
              ? 'md:grid-cols-3 lg:grid-cols-6'
              : 'md:grid-cols-4'
        }`}
      >
        {items.map((it) => {
          const Icon = it.icon ?? ChatIcon;
          return (
            <div key={it.title} className="px-4 text-center md:px-8">
              <Icon className="mx-auto h-10 w-10 text-brand-lime" />
              <h3 className="mt-4 text-base font-semibold text-white">{it.title}</h3>
              {it.desc && <p className="mt-2 text-sm leading-relaxed text-white/65">{it.desc}</p>}
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      {/* No shell indent: this block's heading is centred, so an asymmetric
          left gutter would knock it off the page's centre line. */}
      <div className="mx-auto max-w-container px-6 lg:px-10">
        {card ? (
          <div className="rounded-3xl border border-white/10 bg-brand-purple/20 px-6 py-14 lg:px-14">
            {content}
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
