import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Boiler Replacement Sunderland | Gas Safe Engineers`,
    template: `%s | ${SITE.name}`,
  },
  description: 'Professional boiler replacement in Sunderland and the North East. Gas Safe registered engineers, free quotes, next-day installation. Combi, system, and back boiler specialists.',
  metadataBase: new URL(SITE.domain),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
