import Link from 'next/link';
import QuoteForm from './QuoteForm';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  trustPoints?: string[];
  showForm?: boolean;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText = 'Get Free Quote',
  ctaHref = '/contact/',
  trustPoints,
  showForm = false,
}: HeroSectionProps) {
  return (
    <section className="bg-navy py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className={`${showForm ? 'grid gap-10 md:grid-cols-2 md:items-start' : 'max-w-3xl'}`}>
          <div>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              {headline}
            </h1>
            <p className="mb-6 text-lg text-white/80 leading-relaxed">{subheadline}</p>
            {!showForm && (
              <Link
                href={ctaHref}
                className="inline-block rounded-lg bg-orange px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-dark"
              >
                {ctaText}
              </Link>
            )}
            {trustPoints && trustPoints.length > 0 && (
              <ul className="mt-8 space-y-2">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {showForm && (
            <div>
              <QuoteForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
