type JsonLdValue = Record<string, unknown>;

/** Reusable JSON-LD script tag for any schema.org object or @graph. */
export function JsonLd({ data }: { data: JsonLdValue | JsonLdValue[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
