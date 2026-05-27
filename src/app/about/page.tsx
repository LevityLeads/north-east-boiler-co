import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'About Us | Your Local Heating Engineers in Sunderland',
  description: 'North East Boiler Co: Gas Safe registered heating engineers in Sunderland. 10+ years experience, 500+ boilers installed, 4.9/5 customer rating.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Us | Your Local Heating Engineers in Sunderland',
    description: 'Gas Safe registered heating engineers in Sunderland. 10+ years experience, 500+ boilers installed.',
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
  ];

  const stats = [
    { value: '500+', label: 'Boilers Installed' },
    { value: '10+', label: 'Years Experience' },
    { value: '4.9/5', label: 'Customer Rating' },
    { value: '127', label: 'Reviews' },
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
              About North East Boiler Co
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We are a Sunderland-based heating company that specialises in one thing: replacing boilers properly. No repair call-outs, no annual servicing. Just expert boiler installations, done right.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-navy">Our Story</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              North East Boiler Co was founded by engineers who spent years working for large national companies and saw the same problems again and again: rushed installations, upselling, and a lack of genuine care about getting the right boiler into the right home.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              We started with a simple idea: focus exclusively on boiler replacements, get really good at it, and treat every customer the way we would want to be treated. No high-pressure sales tactics. No commission-driven recommendations. Just honest advice and quality work.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              Today, we have installed over 500 boilers across Sunderland, Durham, Gateshead, and South Shields. Our engineers are Gas Safe registered, manufacturer-trained, and genuinely care about doing the job properly. That is why our customers keep recommending us to their neighbours.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-bold text-navy">What Makes Us Different</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Most heating companies try to do everything: boiler repairs, annual servicing, plumbing, even bathrooms. We chose the opposite approach. We specialise in one thing: boiler replacements. Every engineer on our team fits new boilers every day, which means faster installations, fewer mistakes, and better results.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              Because we focus purely on replacements, we buy boilers in volume directly from manufacturers. That buying power translates to better prices for you and access to extended warranty programmes that smaller companies cannot offer. Our Worcester Bosch accreditation means we can register warranties of up to 12 years on selected models.
            </p>
            <p className="mb-4 text-text-muted leading-relaxed">
              We also know the North East. Our engineers have worked in hundreds of Sunderland terraces, Durham conservation area properties, Gateshead Tyneside flats, and South Shields coastal homes. Each type brings specific challenges, from back boiler removals in Victorian properties to salt-resistant flue terminals on the coast. We have seen it all and know how to handle it.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-bold text-navy">Our Commitment to You</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Every quote we provide is written, itemised, and fixed. The price you agree to is the price you pay. No additional charges on installation day, no hidden extras. We explain every line so you know exactly what you are paying for.
            </p>
            <p className="text-text-muted leading-relaxed">
              We are also an approved ECO4 installer, which means we can help eligible households across the North East access free boiler replacements funded by the government. We handle the entire application process, from eligibility check to installation, at no cost to qualifying homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-navy">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Team Member', role: 'Lead Engineer', years: '15+ years experience' },
              { name: 'Team Member', role: 'Installation Engineer', years: '10+ years experience' },
              { name: 'Team Member', role: 'Customer Service', years: 'Your first point of contact' },
            ].map((member, i) => (
              <div key={i} className="rounded-lg border border-border bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy/5">
                  <svg className="h-10 w-10 text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-orange font-medium">{member.role}</p>
                <p className="mt-1 text-xs text-text-muted">{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-navy">Accreditations & Partnerships</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: 'Gas Safe Register', description: 'Every engineer carries a valid Gas Safe ID card. Our registration can be verified on the Gas Safe Register website.' },
              { name: 'Worcester Bosch Accredited', description: 'Accredited installer for Worcester Bosch boilers, allowing us to offer extended warranties of up to 10 years.' },
              { name: 'Vaillant Advance', description: 'Approved Vaillant installer with access to exclusive extended warranty options and priority parts supply.' },
            ].map((accred) => (
              <div key={accred.name} className="rounded-lg border border-border bg-bg-alt p-6">
                <h3 className="mb-2 font-semibold text-navy">{accred.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{accred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-bg-alt py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-navy">Where We Work</h2>
          <p className="mb-6 max-w-3xl text-text-muted leading-relaxed">
            Based in Sunderland, we cover a roughly 20-mile radius including Durham, Gateshead, South Shields, and all surrounding towns. Our local knowledge means we understand the specific heating requirements of North East homes, from Victorian terraces to modern new builds.
          </p>
          <Link href="/areas-we-cover/" className="inline-block rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light">
            See All Areas We Cover
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Get a free, no-obligation quote. We will call you within 2 hours to discuss your requirements.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
