export type FaqItem = {
  question: string;
  answer: string;
};

/** Build a single FAQPage schema object — returns null when there are no FAQs. */
export function buildFaqPageSchema(
  faqs: readonly FaqItem[],
  options?: { id?: string; name?: string; description?: string },
) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(options?.id ? { "@id": options.id } : {}),
    ...(options?.name ? { name: options.name } : {}),
    ...(options?.description ? { description: options.description } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
