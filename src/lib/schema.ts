import { SITE } from '@/content/site';
import type { Service } from '@/content/services';
import type { BlogPost } from '@/content/blog';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HeatingContractor',
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 High Street',
      addressLocality: 'Sunderland',
      addressRegion: 'Tyne and Wear',
      postalCode: 'SR1 1AA',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Sunderland' },
      { '@type': 'City', name: 'Durham' },
      { '@type': 'City', name: 'Gateshead' },
      { '@type': 'City', name: 'South Shields' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    hasCredential: {
      '@type': 'Credential',
      credentialCategory: 'Gas Safe Register',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Gas Safe Register',
      },
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'HeatingContractor',
      name: SITE.name,
      telephone: SITE.phone,
    },
    areaServed: {
      '@type': 'City',
      name: 'Sunderland',
    },
    ...(service.priceFrom && {
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: service.priceFrom.replace(/[^0-9.]/g, ''),
          priceCurrency: 'GBP',
        },
      },
    }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.domain}/blog/${post.slug}/`,
    },
  };
}

export function aggregateRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HeatingContractor',
    name: SITE.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '127',
    },
  };
}
