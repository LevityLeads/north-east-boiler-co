import type { Metadata } from 'next';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BlogCard from '@/components/BlogCard';
import SchemaMarkup from '@/components/SchemaMarkup';
import { breadcrumbSchema } from '@/lib/schema';
import { blogPosts } from '@/content/blog';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Blog | Boiler Advice & Guides for North East Homeowners',
  description: 'Expert boiler advice for North East homeowners. Costs, grants, comparisons, and practical guides to help you make the right heating decision.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: 'Blog | Boiler Advice & Guides for North East Homeowners',
    description: 'Expert boiler advice for North East homeowners. Costs, grants, comparisons, and practical guides.',
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
  },
};

export default function BlogIndexPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, url: `${SITE.domain}${b.href}` })))} />

      <div className="mx-auto max-w-6xl px-4">
        <BreadcrumbNav items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Boiler Advice & Guides
          </h1>
          <p className="text-lg text-white/80">
            Practical advice to help North East homeowners make informed heating decisions.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
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
        </div>
      </section>
    </>
  );
}
