import Link from 'next/link';
import SchemaMarkup from './SchemaMarkup';
import { breadcrumbSchema } from '@/lib/schema';
import { SITE } from '@/content/site';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `${SITE.domain}${item.href}`,
  }));

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <SchemaMarkup schema={breadcrumbSchema(schemaItems)} />
      <ol className="flex flex-wrap items-center gap-1 text-sm text-text-muted">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && (
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="text-navy font-medium" aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-orange transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
