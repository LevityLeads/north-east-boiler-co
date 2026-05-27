'use client';

import { useState } from 'react';
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-8 w-8 text-orange" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16 2c-1.5 3-6 8-6 14a6 6 0 0012 0c0-6-4.5-11-6-14zm-2 14a2 2 0 104 0c0-2-2-5-2-5s-2 3-2 5z" />
            </svg>
            <span className="text-lg font-bold text-navy">{SITE.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {/* Services dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => { setServicesOpen(!servicesOpen); setLocationsOpen(false); }}
                onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-bg-alt hover:text-navy transition-colors"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-1 w-64 rounded-lg border border-border bg-white py-2 shadow-lg">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => { setLocationsOpen(!locationsOpen); setServicesOpen(false); }}
                onBlur={() => setTimeout(() => setLocationsOpen(false), 200)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-bg-alt hover:text-navy transition-colors"
                aria-expanded={locationsOpen}
                aria-haspopup="true"
              >
                Locations
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationsOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-white py-2 shadow-lg">
                  {locationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog/" className="rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-bg-alt hover:text-navy transition-colors">
              Blog
            </Link>
            <Link href="/about/" className="rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-bg-alt hover:text-navy transition-colors">
              About
            </Link>
            <Link href="/contact/" className="rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-bg-alt hover:text-navy transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-sm font-medium text-navy">
              {SITE.phone}
            </a>
            <Link
              href="/contact/"
              className="rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-text lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-white lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-1">
            <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">Services</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-bg-alt"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-border" />
            <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">Locations</p>
            {locationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-bg-alt"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-border" />
            <Link href="/blog/" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-bg-alt">
              Blog
            </Link>
            <Link href="/about/" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-bg-alt">
              About
            </Link>
            <Link href="/contact/" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-bg-alt">
              Contact
            </Link>
            <div className="my-2 border-t border-border" />
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="block rounded-lg px-3 py-2 text-sm font-medium text-navy">
              Call: {SITE.phone}
            </a>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg bg-orange px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Get Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
