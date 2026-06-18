interface GeoKeyTakeawaysProps {
  items: string[];
  title?: string;
}

/** Extractable bullet summary for AI answer engines (GEO). */
export function GeoKeyTakeaways({ items, title = "Key takeaways" }: GeoKeyTakeawaysProps) {
  if (items.length === 0) return null;

  return (
    <aside
      className="rounded-2xl border border-[#4f46e5]/15 bg-[#f8fafc] p-6"
      aria-label={title}
      data-seo-speakable
    >
      <h2 className="font-display text-lg font-semibold text-[var(--v6-text)]">{title}</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </aside>
  );
}

export function buildTakeawaysFromFaqs(
  faqs: { question: string; answer: string }[] | undefined,
  limit = 4,
): string[] {
  if (!faqs?.length) return [];
  return faqs.slice(0, limit).map((faq) => `${faq.question} ${faq.answer}`);
}
