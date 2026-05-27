import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/FAQSection';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, aggregateRatingSchema, breadcrumbSchema } from '@/lib/schema';
import { locations, getLocationBySlug } from '@/content/locations';
import { services } from '@/content/services';
import { SITE } from '@/content/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/locations/${location.slug}/` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: 'website',
      locale: 'en_GB',
      siteName: SITE.name,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations/sunderland/' },
    { label: location.city, href: `/locations/${location.slug}/` },
  ];

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema()} />
      <SchemaMarkup schema={aggregateRatingSchema()} />
      <SchemaMarkup schema={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, url: `${SITE.domain}${b.href}` })))} />

      <div className="mx-auto max-w-6xl px-4">
        <BreadcrumbNav items={breadcrumbs} />
      </div>

      <HeroSection
        headline={location.heroHeadline}
        subheadline={`Local Gas Safe registered engineers serving ${location.city} and surrounding areas. Free quotes, next-day installation available.`}
        showForm={true}
        trustPoints={[
          'Gas Safe registered engineers',
          `Serving all areas of ${location.city}`,
          'Free, no-obligation home surveys',
        ]}
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            {location.intro.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-text-muted leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Housing context */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-navy">
            Housing in {location.city}
          </h2>
          <p className="mb-6 max-w-3xl text-text-muted leading-relaxed">{location.housingContext}</p>
          <div className="flex flex-wrap gap-2">
            {location.areas.map((area) => (
              <span key={area} className="rounded-full bg-white border border-border px-4 py-1.5 text-sm text-navy font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body Sections */}
      {location.sections && location.sections.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              {location.sections.map((section, i) => (
                <div key={i} className="mb-10 last:mb-0">
                  <h2 className="mb-4 text-2xl font-bold text-navy">{section.heading}</h2>
                  {section.content.split('\n').map((paragraph, j) => (
                    <p key={j} className="mb-4 text-text-muted leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services for this location */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-navy">
            Boiler Services in {location.city}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex items-start gap-3 rounded-lg border border-border bg-white p-5 shadow-sm transition-all hover:border-orange hover:shadow-md"
              >
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <div>
                  <h3 className="font-medium text-navy group-hover:text-orange transition-colors">
                    {service.shortTitle} in {location.city}
                  </h3>
                  {service.priceFrom && (
                    <p className="mt-1 text-sm text-text-muted">From {service.priceFrom}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-navy">Find Us in {location.city}</h2>
          <div className="aspect-video rounded-lg bg-navy/5 border border-border flex items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto mb-2 h-12 w-12 text-navy/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-text-muted">Google Maps integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4">
        <FAQSection faqs={location.faqs} heading={`${location.city} Boiler Replacement FAQs`} />
      </div>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Need a New Boiler in {location.city}?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Get a free, no-obligation quote from our local Gas Safe engineers. We will call you within 2 hours.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
