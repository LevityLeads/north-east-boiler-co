interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[] | null;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
