import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { locations } from '@/content/locations';
import { blogPosts } from '@/content/blog';

export const dynamic = 'force-static';

const BASE_URL = 'https://northeastboilerco.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas-we-cover/`,
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}/`,
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}/`,
    lastModified: new Date('2026-05-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
