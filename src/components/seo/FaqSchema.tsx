import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import type { FaqItem } from "@/lib/seo/faq-schema";

/**
 * FAQPage JSON-LD — alias for FaqPageJsonLd per SEO content guidelines.
 * Mount at most once per page.
 */
export function FaqSchema({
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
  return <FaqPageJsonLd faqs={faqs} id={id} name={name} description={description} />;
}

export type { FaqItem };
