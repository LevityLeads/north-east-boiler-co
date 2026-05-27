import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import QuoteForm from '@/components/QuoteForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { blogPosts, getBlogPostBySlug } from '@/content/blog';
import { SITE } from '@/content/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      locale: 'en_GB',
      siteName: SITE.name,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog/' },
    { label: post.title, href: `/blog/${post.slug}/` },
  ];

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const formattedDate = new Date(post.datePublished).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <SchemaMarkup schema={blogPostingSchema(post)} />
      <SchemaMarkup schema={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, url: `${SITE.domain}${b.href}` })))} />

      <div className="mx-auto max-w-6xl px-4">
        <BreadcrumbNav items={breadcrumbs} />
      </div>

      {/* Article hero */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm text-white/60">
              <time dateTime={post.datePublished}>{formattedDate}</time>
              <span aria-hidden="true">|</span>
              <span>{post.readTime} min read</span>
            </div>
            <h1 className="text-3xl font-bold text-white md:text-4xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article content + sidebar */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Content */}
            <article className="lg:col-span-2">
              <div className="prose max-w-none">
                {post.content.split('\n\n').map((block, i) => {
                  if (block.startsWith('## ')) {
                    return <h2 key={i} className="mt-8 mb-4 text-2xl font-bold text-navy">{block.slice(3)}</h2>;
                  }
                  if (block.startsWith('### ')) {
                    return <h3 key={i} className="mt-6 mb-3 text-xl font-semibold text-navy">{block.slice(4)}</h3>;
                  }
                  if (block.startsWith('- ')) {
                    const items = block.split('\n').filter((line) => line.startsWith('- '));
                    return (
                      <ul key={i} className="mb-4 list-disc pl-6 space-y-2 text-text-muted leading-relaxed">
                        {items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}
                      </ul>
                    );
                  }
                  return <p key={i} className="mb-4 text-text-muted leading-relaxed">{block}</p>;
                })}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <QuoteForm />
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-semibold text-navy">Related Articles</h3>
                <div className="space-y-3">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}/`}
                      className="block text-sm text-text hover:text-orange transition-colors"
                    >
                      {related.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Need a New Boiler?
          </h2>
          <p className="mb-6 text-lg text-white/80">
            Get a free, no-obligation quote from our Gas Safe registered engineers.
          </p>
          <Link
            href="/contact/"
            className="inline-block rounded-lg bg-orange px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-dark"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
