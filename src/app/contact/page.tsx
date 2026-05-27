import type { Metadata } from 'next';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free Boiler Quote',
  description: 'Get a free, no-obligation boiler replacement quote in Sunderland. Call 0191 000 0000 or fill in our online form. We respond within 2 hours.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact Us | Get Your Free Boiler Quote',
    description: 'Get a free, no-obligation boiler replacement quote. We respond within 2 hours.',
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact/' },
  ];

  return (
    <>
      <SchemaMarkup schema={localBusinessSchema()} />
      <SchemaMarkup schema={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, url: `${SITE.domain}${b.href}` })))} />

      <div className="mx-auto max-w-6xl px-4">
        <BreadcrumbNav items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Get Your Free Boiler Quote
          </h1>
          <p className="text-lg text-white/80">
            Fill in the form below and we will call you within 2 hours to arrange your free home survey.
          </p>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Form */}
            <div>
              <QuoteForm />
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              {/* Contact info */}
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold text-navy">Contact Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-text">Phone</p>
                      <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-lg font-semibold text-navy hover:text-orange transition-colors">
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-text">Email</p>
                      <a href={`mailto:${SITE.email}`} className="text-navy hover:text-orange transition-colors">
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-text">Address</p>
                      <p className="text-text-muted">{SITE.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold text-navy">Why Trust Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Gas Safe Registered', value: `Reg: ${SITE.gasSafeNumber}` },
                    { label: 'Customer Rating', value: '4.9/5 (127 reviews)' },
                    { label: 'Experience', value: '10+ years' },
                    { label: 'Installations', value: '500+ completed' },
                  ].map((badge) => (
                    <div key={badge.label} className="text-center">
                      <p className="text-sm font-semibold text-navy">{badge.label}</p>
                      <p className="text-xs text-text-muted">{badge.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-semibold text-navy">What Happens Next</h2>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'We call you', description: 'Within 2 hours of receiving your enquiry, one of our team will call to discuss your requirements.' },
                    { step: '2', title: 'Free home survey', description: 'We arrange a convenient time to visit your property, assess your heating needs, and provide a fixed-price quote.' },
                    { step: '3', title: 'Installation', description: 'If you are happy with the quote, we schedule installation at a date that suits you. Most jobs complete in a single day.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-medium text-navy">{item.title}</h3>
                        <p className="text-sm text-text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
