import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, readTime, slug }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}/`}
      className="group block rounded-lg border border-border bg-white overflow-hidden shadow-sm transition-all hover:border-orange hover:shadow-md"
    >
      <div className="h-2 bg-navy group-hover:bg-orange transition-colors" />
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-text-muted">
          <time dateTime={date}>{formattedDate}</time>
          <span aria-hidden="true">|</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-navy leading-snug group-hover:text-orange transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">{excerpt}</p>
      </div>
    </Link>
  );
}
