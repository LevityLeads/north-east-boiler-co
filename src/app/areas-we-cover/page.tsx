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
  { name: 'Houghton-le-Spring', description: 'Former mining town with solid stone terraces and 1950s-70s council estates. Back boiler replacements are common here, and many households qualify for ECO4 grants. We typically complete 2-3 installations per week in the Houghton area.' },
  { name: 'Chester-le-Street', description: 'Market town sitting between Durham and Gateshead with housing ranging from Victorian terraces near the centre to modern estates on the outskirts. Straightforward access and good parking make installations here efficient.' },
  { name: 'Seaham', description: 'Coastal town with a growing population and new-build developments alongside older mining community housing. Like nearby Sunderland seafront properties, homes close to the coast benefit from marine-grade flue terminals.' },
  { name: 'Washington', description: 'A large share of our Sunderland installations happen in Washington. The mix of 1960s-80s new town estates and recent housing developments means a range of boiler types, from ageing system boilers needing full replacement to builder-grade combis ready for an upgrade.' },
  { name: 'Jarrow', description: 'Traditional terraces and post-war housing along the south bank of the Tyne. Many properties here have older heating systems that benefit from modern combi boiler replacements. Good ECO4 eligibility rates across the town.' },
  { name: 'Hebburn', description: 'Residential town with a mix of Victorian and inter-war properties. The terraced streets near the river often have back boilers still in service. Hebburn is within 15 minutes of our Sunderland base, so response times are quick.' },
  { name: 'Whitley Bay', description: 'Popular coastal resort with Victorian and Edwardian properties near the seafront and 1930s semis further inland. Coastal exposure means marine-grade flue components are recommended for seafront properties.' },
  { name: 'Boldon', description: 'East and West Boldon offer a mix of period cottages and modern family homes. Larger detached properties here often benefit from system boilers with unvented cylinders for strong hot water pressure across multiple bathrooms.' },
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

      {/* Coverage details */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-navy">Boiler Replacement Across the North East</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Our coverage area spans roughly 20 miles from our Sunderland base, taking in all major towns and cities across Tyne and Wear and County Durham. Because we are locally based, our engineers know the housing stock in each area and can advise on the right boiler for your specific property type.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              The North East has some of the most varied housing in England, from coastal Victorian villas in South Shields and Whitley Bay to distinctive Tyneside flats in Gateshead, conservation area terraces in Durham, and modern new builds across Washington and Chester-le-Street. Each property type has specific heating requirements, and choosing the right boiler makes a real difference to your comfort and energy bills.
            </p>
            <p className="text-text-muted leading-relaxed">
              We install Worcester Bosch, Vaillant, Baxi, and Ideal boilers across our entire service area, with the same fixed pricing regardless of location. There is no additional charge for travel within our coverage zone. Our free home survey takes about 30 minutes and gives you a clear, written quote with no obligation and no hidden costs.
            </p>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-navy">Our Coverage Map</h2>
          <p className="mb-6 max-w-2xl text-text-muted">
            We cover all postcodes across SR, DH, NE8-NE11, NE31-NE34, and surrounding areas.
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
