import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import FAQSection from '@/components/FAQSection';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, aggregateRatingSchema, breadcrumbSchema } from '@/lib/schema';
import { services } from '@/content/services';
import { locations } from '@/content/locations';
import { blogPosts } from '@/content/blog';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: `New Boiler Sunderland | Boiler Replacement from £1,895 | ${SITE.name}`,
  description: 'Professional boiler replacement in Sunderland from £1,895. Gas Safe registered, next-day installation, free quotes. Combi, system, and back boiler specialists.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `New Boiler Sunderland | Boiler Replacement from £1,895 | ${SITE.name}`,
    description: 'Professional boiler replacement in Sunderland from £1,895. Gas Safe registered, next-day installation, free quotes.',
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
  },
};

const homeFaqs = [
  { question: 'How much does a new boiler cost in Sunderland?', answer: 'A straightforward combi boiler replacement in Sunderland starts from £1,895. System boilers start from around £2,400. The exact price depends on the brand, model, and complexity of the installation. We provide free, no-obligation quotes with all costs included.' },
  { question: 'How long does a boiler replacement take?', answer: 'A standard combi-to-combi swap takes 4-6 hours. If we need to move the boiler position or replace a back boiler, it may take 1-2 days. We will give you an accurate timescale during the survey.' },
  { question: 'Are your engineers Gas Safe registered?', answer: 'Yes. Every engineer at North East Boiler Co is Gas Safe registered and carries their card on every job. You can verify our registration number on the Gas Safe Register website.' },
  { question: 'Do you offer finance on new boilers?', answer: 'Yes. We offer 0% interest finance over 12 months and longer terms up to 10 years. Monthly payments start from as little as £30. No deposit required on most plans.' },
  { question: 'Can I get a free boiler through the ECO4 scheme?', answer: 'You may qualify for a free boiler replacement if you receive certain benefits or have a low household income. We can check your eligibility quickly, with no obligation. See our free boiler grants page for details.' },
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema()} />
      <SchemaMarkup schema={aggregateRatingSchema()} />
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Home', url: SITE.domain + '/' }])} />

      {/* Hero */}
      <HeroSection
        headline="New Boiler in Sunderland? Get a Free Quote Today"
        subheadline="From £1,895, fitted by Gas Safe registered engineers. Next-day installation available for emergencies. No hidden costs, no hard sell."
        showForm={true}
        trustPoints={[
          'Gas Safe registered engineers',
          'Free, no-obligation quotes',
          'Next-day installation available',
          'Up to 10 years manufacturer warranty',
        ]}
      />

      {/* Trust badges */}
      <TrustBadges />

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-2xl font-bold text-navy md:text-3xl">Our Boiler Services</h2>
          <p className="mb-8 max-w-2xl text-text-muted">
            Whether you need a straightforward combi swap, a back boiler upgrade, or help with boiler finance and grants, we have you covered.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.shortTitle}
                description={service.heroSubheadline}
                href={`/services/${service.slug}/`}
                priceFrom={service.priceFrom}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-navy md:text-3xl">Why Choose North East Boiler Co?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Local Engineers', description: 'Based in Sunderland, we know the local housing stock and can respond quickly to emergencies.', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              { title: 'Fixed Pricing', description: 'Every quote is written, itemised, and final. No hidden costs, no nasty surprises on installation day.', icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z' },
              { title: 'All Major Brands', description: 'Worcester Bosch, Vaillant, Baxi, Ideal. We fit the right boiler for your home and budget.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
              { title: 'Flexible Finance', description: '0% interest over 12 months or longer terms to suit your budget. No deposit required.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
            ].map((usp) => (
              <div key={usp.title} className="rounded-lg bg-white p-6 shadow-sm border border-border">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={usp.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold text-navy">{usp.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-3 text-2xl font-bold text-navy md:text-3xl">Areas We Cover</h2>
          <p className="mb-8 max-w-2xl text-text-muted">
            Based in Sunderland, we cover the whole of the North East including Durham, Gateshead, and South Shields.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}/`}
                className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:border-orange hover:shadow-md"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-orange/10 group-hover:text-orange transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-1 font-semibold text-navy group-hover:text-orange transition-colors">{location.city}</h3>
                <p className="text-sm text-text-muted">Boiler replacement and installation</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-navy md:text-3xl">Latest Advice</h2>
              <p className="text-text-muted">Helpful guides and tips for North East homeowners.</p>
            </div>
            <Link href="/blog/" className="hidden text-sm font-medium text-orange hover:text-orange-dark transition-colors sm:block">
              View all articles &rarr;
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.datePublished}
                readTime={post.readTime}
                slug={post.slug}
              />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/blog/" className="text-sm font-medium text-orange">
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4">
        <FAQSection faqs={homeFaqs} heading="Boiler Replacement FAQs" />
      </div>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready for a New Boiler?</h2>
              <p className="mb-6 text-lg text-white/80 leading-relaxed">
                Fill in the form and we will call you within 2 hours to arrange your free, no-obligation survey. No pressure, no hard sell.
              </p>
              <ul className="space-y-3">
                {[
                  'Free home survey and fixed-price quote',
                  'Installation in as little as 48 hours',
                  '0% finance and free boiler grants available',
                  'Up to 10 years manufacturer warranty',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/70">
                    <svg className="h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
