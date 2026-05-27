import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import ServiceCard from '@/components/ServiceCard';
import BlogCard from '@/components/BlogCard';
import FAQSection from '@/components/FAQSection';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { services } from '@/content/services';
import { locations } from '@/content/locations';
import { blogPosts } from '@/content/blog';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: { absolute: `New Boiler Sunderland | Boiler Replacement from £1,895 | ${SITE.name}` },
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
  { question: 'How much does a new boiler cost in Sunderland?', answer: 'A straightforward combi boiler replacement in Sunderland starts from £1,895 for a mid-range model like a Baxi 800 or Ideal Logic Plus. Premium brands like Worcester Bosch and Vaillant typically range from £2,400 to £3,200 installed. System boilers with a hot water cylinder start from around £2,400. Back boiler replacements cost more due to the additional removal work, typically £2,500 to £3,500. Every quote includes the boiler, installation, magnetic filter, system flush, and warranty registration.' },
  { question: 'How long does a boiler replacement take?', answer: 'A standard combi-to-combi swap where the boiler stays in the same position takes 4 to 6 hours. If we need to move the boiler to a new location, it is usually a full day. Back boiler replacements take 2 days because of the removal work and pipework rerouting. System boiler installations typically take 1 to 2 days. We will give you an accurate timescale during the survey so you can plan accordingly.' },
  { question: 'Are your engineers Gas Safe registered?', answer: 'Yes. Every engineer at North East Boiler Co is Gas Safe registered and carries their card on every job. We are also accredited installers for Worcester Bosch, Vaillant, and Baxi, which allows us to offer extended manufacturer warranties of up to 12 years on selected models. You can verify any engineer\'s registration on the Gas Safe Register website.' },
  { question: 'Do you offer finance on new boilers?', answer: 'Yes. We offer 0% interest finance over 12 months, meaning you pay exactly the same as you would upfront, just in smaller monthly payments. We also offer longer terms up to 10 years for lower monthly payments. No deposit is required on most plans, and decisions are usually instant. See our boiler finance page for full details and example monthly costs.' },
  { question: 'Can I get a free boiler through the ECO4 scheme?', answer: 'You may qualify for a completely free boiler replacement if you receive benefits such as Universal Credit, Pension Credit, Child Tax Credits, or Income Support. Sunderland has high eligibility rates due to its deprivation ranking. Even if you are not on benefits, the LA Flex pathway may cover you if your household income is below a certain threshold. We handle the entire application process at no cost.' },
  { question: 'What areas do you cover?', answer: 'We are based in Sunderland and cover a roughly 20-mile radius including Durham, Gateshead, South Shields, Washington, Houghton-le-Spring, Chester-le-Street, Seaham, Jarrow, Hebburn, Whitley Bay, and Boldon. There is no additional travel charge within our coverage area. See our areas we cover page for the full list.' },
  { question: 'What brands of boiler do you install?', answer: 'We install Worcester Bosch, Vaillant, Baxi, and Ideal boilers. These are the four most reliable and widely supported brands in the UK. During your survey, our engineer will recommend the best brand and model for your property based on your hot water demand, available space, and budget. We never push a particular brand for our benefit.' },
  { question: 'Do I need to be home during installation?', answer: 'Yes, an adult needs to be present at the property during the installation. Our engineers will need access to your boiler, radiators, and potentially the loft space. We will give you a morning arrival time and keep you updated throughout the day. For most combi swaps, we aim to have everything finished by late afternoon.' },
];

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema()} />
      <SchemaMarkup schema={faqSchema(homeFaqs)} />
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

      {/* Why replace your boiler */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">Boiler Replacement Specialists in Sunderland</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              We focus on one thing: replacing boilers properly. While other companies split their time between repairs, servicing, and installations, we concentrate entirely on boiler replacements across Sunderland and the wider North East. That focus means faster turnarounds, better pricing from manufacturers, and engineers who fit new boilers every single day.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              Every installation starts with a free home survey where we assess your current system, check your mains water pressure, measure your hot water demand, and recommend the right boiler for your home. You receive a written, fixed-price quote with no hidden costs. Most combi boiler swaps are completed in a single day, with your heating and hot water back on before we leave.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              We are Gas Safe registered and hold accreditations with Worcester Bosch, Vaillant, and Baxi. These accreditations allow us to offer extended manufacturer warranties of up to 12 years on selected models. All installations include a magnetic system filter, a full powerflush, and chemical inhibitor to keep your new boiler running efficiently for years.
            </p>
            <p className="text-text-muted leading-relaxed">
              Not sure what you need? Our guide on <Link href="/blog/combi-vs-system-boiler/" className="text-orange hover:text-orange-dark underline">combi vs system boilers</Link> explains the difference, or you can check our <Link href="/blog/new-boiler-cost-sunderland/" className="text-orange hover:text-orange-dark underline">Sunderland boiler cost guide</Link> for 2026 pricing. If budget is a concern, many Sunderland households qualify for a <Link href="/services/free-boiler-grants/" className="text-orange hover:text-orange-dark underline">free boiler under the ECO4 scheme</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-alt py-12 md:py-16">
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
      <section className="py-12 md:py-16">
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

      {/* Sunderland heating context */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-navy md:text-3xl">Why Sunderland Homes Need the Right Boiler</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Sunderland sits right on the North East coast, which means cold winters, damp air, and homes that work their heating systems hard from October through to April. Getting the right boiler installed properly is not a luxury here. It is a necessity.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              The city&apos;s housing stock ranges from Victorian terraces in Ashbrooke and Roker (many still running on back boilers from the 1970s) through to modern new builds in Washington and Doxford Park. Each property type needs a different approach. A compact 25kW combi suits a two-bedroom terrace, while a larger semi with multiple bathrooms may need a system boiler with a hot water cylinder.
            </p>
            <p className="text-text-muted leading-relaxed">
              Sunderland also ranks 28th on the Index of Multiple Deprivation, which means a significant proportion of households qualify for a free boiler replacement under the government&apos;s <Link href="/services/free-boiler-grants/" className="text-orange hover:text-orange-dark underline">ECO4 scheme</Link>. If you receive benefits like Universal Credit or Pension Credit, you could have a brand new boiler fitted at no cost. We handle the application process from start to finish.
            </p>
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
