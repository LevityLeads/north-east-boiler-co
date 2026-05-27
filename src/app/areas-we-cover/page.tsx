import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { locations } from '@/content/locations';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Areas We Cover | Boiler Replacement Across the North East',
  description: 'We cover Sunderland, Durham, Gateshead, South Shields, and surrounding areas. Gas Safe boiler replacement throughout the North East. Free quotes.',
  alternates: { canonical: '/areas-we-cover/' },
  openGraph: {
    title: 'Areas We Cover | Boiler Replacement Across the North East',
    description: 'We cover Sunderland, Durham, Gateshead, South Shields, and surrounding areas for boiler replacement.',
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
  },
};

const surroundingAreas = [
  { name: 'Houghton-le-Spring', description: 'Former mining town with a mix of older terraces and modern estates.' },
  { name: 'Chester-le-Street', description: 'Market town between Durham and Gateshead with varied housing stock.' },
  { name: 'Seaham', description: 'Coastal town with Victorian terraces and growing new-build developments.' },
  { name: 'Washington', description: 'New town with 1960s-80s estates and expanding modern housing.' },
  { name: 'Jarrow', description: 'Traditional terraces and post-war housing along the south bank of the Tyne.' },
  { name: 'Hebburn', description: 'Residential town with a mix of Victorian and inter-war properties.' },
  { name: 'Whitley Bay', description: 'Coastal resort with Victorian and Edwardian properties near the seafront.' },
  { name: 'Boldon', description: 'East and West Boldon, offering a mix of period and modern family homes.' },
];

export default function AreasWeCoverPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Cover', href: '/areas-we-cover/' },
  ];

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema()} />
      <SchemaMarkup schema={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, url: `${SITE.domain}${b.href}` })))} />

      <div className="mx-auto max-w-6xl px-4">
        <BreadcrumbNav items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-navy py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Areas We Cover
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Based in Sunderland, we provide boiler replacement and installation services across the North East. From Durham to South Shields, our Gas Safe engineers are never far away.
            </p>
          </div>
        </div>
      </section>

      {/* Main locations */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-navy">Main Service Areas</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}/`}
                className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:border-orange hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-navy group-hover:text-orange transition-colors">
                  {location.city}
                </h3>
                <p className="mb-3 text-sm text-text-muted leading-relaxed">
                  {location.intro.split('\n')[0].slice(0, 150)}...
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {location.areas.slice(0, 5).map((area) => (
                    <span key={area} className="rounded bg-bg-alt px-2 py-0.5 text-xs text-text-muted">{area}</span>
                  ))}
                  {location.areas.length > 5 && (
                    <span className="rounded bg-bg-alt px-2 py-0.5 text-xs text-text-muted">+{location.areas.length - 5} more</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding areas */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-navy">Surrounding Areas</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {surroundingAreas.map((area) => (
              <div key={area.name} className="rounded-lg bg-white p-5 border border-border">
                <h3 className="mb-1 font-semibold text-navy">{area.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage map placeholder */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-navy">Our Coverage Area</h2>
          <p className="mb-6 max-w-2xl text-text-muted">
            We cover a roughly 20-mile radius from our Sunderland base, taking in all major towns and cities across Tyne and Wear and County Durham.
          </p>
          <div className="aspect-video rounded-lg bg-navy/5 border border-border flex items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto mb-2 h-12 w-12 text-navy/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm text-text-muted">Interactive coverage map</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Not Sure if We Cover Your Area?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Get in touch and we will let you know. If you are within our service area, we will arrange a free home survey at a time that suits you.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
