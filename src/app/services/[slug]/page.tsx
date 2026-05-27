import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/FAQSection';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { services, getServiceBySlug } from '@/content/services';
import { SITE } from '@/content/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      locale: 'en_GB',
      siteName: SITE.name,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services/combi-boiler-installation/' },
    { label: service.shortTitle, href: `/services/${service.slug}/` },
  ];

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema()} />
      <SchemaMarkup schema={serviceSchema(service)} />
      <SchemaMarkup schema={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, url: `${SITE.domain}${b.href}` })))} />

      <div className="mx-auto max-w-6xl px-4">
        <BreadcrumbNav items={breadcrumbs} />
      </div>

      <HeroSection
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        showForm={true}
        trustPoints={[
          'Gas Safe registered engineers',
          'Free, no-obligation quotes',
          'All major brands fitted',
        ]}
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            {service.intro.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-text-muted leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Body Sections */}
      {service.sections && service.sections.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl">
              {service.sections.map((section, i) => (
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

      {/* Benefits */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-navy">Why Choose This Service</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-lg bg-white p-4 border border-border">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-navy">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-semibold text-navy">{step.step}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {service.priceFrom && (
        <section className="bg-bg-alt py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-lg bg-white p-8 border border-border text-center max-w-xl mx-auto">
              <p className="text-sm font-medium text-text-muted mb-1">Prices from</p>
              <p className="text-4xl font-bold text-navy mb-2">{service.priceFrom}</p>
              <p className="text-sm text-text-muted mb-6">Fully installed, including VAT. No hidden costs.</p>
              <a href="/contact/" className="inline-block rounded-lg bg-orange px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark">
                Get Your Free Quote
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <div className="mx-auto max-w-6xl px-4">
        <FAQSection faqs={service.faqs} />
      </div>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Get a Free {service.shortTitle} Quote
              </h2>
              <p className="mb-6 text-lg text-white/80 leading-relaxed">
                Fill in the form and we will call you within 2 hours to discuss your requirements and arrange a free home survey.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
