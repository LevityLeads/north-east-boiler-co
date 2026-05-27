import Link from 'next/link';
import { SITE } from '@/content/site';

const serviceLinks = [
  { label: 'Combi Boiler Installation', href: '/services/combi-boiler-installation/' },
  { label: 'System Boiler Installation', href: '/services/system-boiler-installation/' },
  { label: 'Back Boiler Replacement', href: '/services/back-boiler-replacement/' },
  { label: 'Boiler Conversion', href: '/services/boiler-conversion/' },
  { label: 'Emergency Replacement', href: '/services/emergency-boiler-replacement/' },
  { label: 'Free Boiler Grants', href: '/services/free-boiler-grants/' },
  { label: 'Boiler Finance', href: '/services/boiler-finance/' },
];

const locationLinks = [
  { label: 'Sunderland', href: '/locations/sunderland/' },
  { label: 'Durham', href: '/locations/durham/' },
  { label: 'Gateshead', href: '/locations/gateshead/' },
  { label: 'South Shields', href: '/locations/south-shields/' },
  { label: 'Areas We Cover', href: '/areas-we-cover/' },
];

const companyLinks = [
  { label: 'About Us', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <svg className="h-7 w-7 text-orange" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 2c-1.5 3-6 8-6 14a6 6 0 0012 0c0-6-4.5-11-6-14zm-2 14a2 2 0 104 0c0-2-2-5-2-5s-2 3-2 5z" />
              </svg>
              <span className="text-lg font-bold">{SITE.name}</span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              {SITE.tagline}. Gas Safe registered engineers providing reliable boiler installations across the North East.
            </p>
            <div className="mb-4 flex items-center gap-2">
              <svg className="h-5 w-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">Gas Safe Reg: {SITE.gasSafeNumber}</span>
            </div>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-lg font-semibold text-orange">
              {SITE.phone}
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Locations</h3>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Company</h3>
            <ul className="mb-6 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">Accredited By</h3>
            <div className="flex flex-wrap gap-3">
              <span className="rounded bg-white/10 px-3 py-1.5 text-xs font-medium">Gas Safe</span>
              <span className="rounded bg-white/10 px-3 py-1.5 text-xs font-medium">Worcester Bosch</span>
              <span className="rounded bg-white/10 px-3 py-1.5 text-xs font-medium">Vaillant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/contact/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/contact/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
