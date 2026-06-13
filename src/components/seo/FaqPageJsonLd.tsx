import { buildFaqPageSchema, type FaqItem } from "@/lib/seo/faq-schema";

/**
 * Single source of truth for FAQPage JSON-LD.
 * Mount at most once per page — FAQ UI may repeat; this script must not.
 */
export function FaqPageJsonLd({
  faqs,
  id,
  name,
  description,
}: {
  faqs: readonly FaqItem[];
  id?: string;
  name?: string;
  description?: string;
}) {
  const schema = buildFaqPageSchema(faqs, { id, name, description });
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
