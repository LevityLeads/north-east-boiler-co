import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  priceFrom?: string;
}

export default function ServiceCard({ title, description, href, priceFrom }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:border-orange hover:shadow-md"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-orange/10 group-hover:text-orange transition-colors">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-navy group-hover:text-orange transition-colors">{title}</h3>
      <p className="mb-3 text-sm text-text-muted leading-relaxed">{description}</p>
      {priceFrom && (
        <span className="text-sm font-semibold text-orange">From {priceFrom}</span>
      )}
    </Link>
  );
}
