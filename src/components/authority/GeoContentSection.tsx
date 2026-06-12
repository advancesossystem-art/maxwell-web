import type { GeoContent } from "@/lib/geo-content-types";
import { ExpertCommentary, GeoDefinitionBlock } from "@/components/authority/GeoDefinitionBlock";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { siteConfig } from "@/lib/constants";

interface GeoContentSectionProps {
  geo: GeoContent;
  /** For FAQ JSON-LD when not already rendered by parent */
  faqPath?: string;
  variant?: "light" | "dark";
}

export function GeoQuickAnswer({
  geo,
  variant = "light",
}: {
  geo: Pick<GeoContent, "quickAnswer" | "quickAnswerQuestion">;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "border-b border-white/10 bg-[#0a0f1a] py-10"
          : "border-b border-border bg-surface-elevated py-10"
      }
      data-seo-speakable
      aria-label="Quick answer"
    >
      <div className="v6-container">
        {geo.quickAnswerQuestion && (
          <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-brand-400" : "text-brand-600"}`}>
            Quick answer
          </p>
        )}
        {geo.quickAnswerQuestion && (
          <h2 className={`mt-2 font-display text-xl font-bold ${isDark ? "text-white" : "text-[var(--v6-text)]"}`}>
            {geo.quickAnswerQuestion}
          </h2>
        )}
        <p className={`mt-4 max-w-3xl text-lg leading-relaxed ${isDark ? "text-white/85" : "text-[var(--v6-text-secondary)]"}`}>
          {geo.quickAnswer}
        </p>
      </div>
    </section>
  );
}

export function GeoContentSection({ geo, faqPath, variant = "light" }: GeoContentSectionProps) {
  const isDark = variant === "dark";

  return (
    <>
      {faqPath && geo.faqs && geo.faqs.length > 0 && (
        <FaqPageJsonLd faqs={geo.faqs} id={`${siteConfig.url}${faqPath}#geo-faq`} />
      )}

      <GeoQuickAnswer geo={geo} variant={variant} />

      {geo.definition && (
        <section className={isDark ? "border-b border-white/10 py-10" : "border-b border-border py-10"}>
          <div className="v6-container max-w-4xl">
            <GeoDefinitionBlock term={geo.definition.term} definition={geo.definition.text} />
          </div>
        </section>
      )}

      {geo.keyTakeaways.length > 0 && (
        <section className={isDark ? "border-b border-white/10 py-10" : "border-b border-border py-10"}>
          <div className="v6-container max-w-4xl">
            <h2 className={`font-display text-xl font-bold ${isDark ? "text-white" : "text-[var(--v6-text)]"}`}>
              Key takeaways
            </h2>
            <ul className={`mt-4 space-y-2 text-sm ${isDark ? "text-white/75" : "text-muted"}`}>
              {geo.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-brand-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {geo.comparisonTable && (
        <section className={isDark ? "border-b border-white/10 py-10" : "border-b border-border py-10"}>
          <div className="v6-container">
            <h2 className={`font-display text-xl font-bold ${isDark ? "text-white" : "text-[var(--v6-text)]"}`}>
              Comparison
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className={isDark ? "border-b border-white/10 bg-white/5" : "border-b border-border bg-surface-elevated"}>
                    {geo.comparisonTable.headers.map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {geo.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className={isDark ? "border-b border-white/[0.06]" : "border-b border-border"}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 ${isDark ? "text-white/70" : "text-muted"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {geo.expertQuote && (
        <section className={isDark ? "border-b border-white/10 py-10" : "border-b border-border py-10"}>
          <div className="v6-container max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Expert insight</p>
            <div className="mt-4">
              <ExpertCommentary
                author={geo.expertQuote.author}
                role={geo.expertQuote.role}
                quote={geo.expertQuote.text}
              />
            </div>
          </div>
        </section>
      )}

      {geo.summary && (
        <section
          className={isDark ? "border-b border-white/10 py-10" : "border-b border-border py-10"}
          data-seo-speakable
          aria-label="Summary"
        >
          <div className="v6-container max-w-4xl">
            <h2 className={`font-display text-xl font-bold ${isDark ? "text-white" : "text-[var(--v6-text)]"}`}>
              Summary
            </h2>
            <p className={`mt-4 leading-relaxed ${isDark ? "text-white/75" : "text-muted"}`}>{geo.summary}</p>
          </div>
        </section>
      )}
    </>
  );
}

export function GeoFaqSection({
  faqs,
  title = "Frequently asked questions",
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
}) {
  if (faqs.length === 0) return null;
  return (
    <section className="py-12" data-seo-speakable aria-label="FAQ">
      <div className="v6-container max-w-4xl">
        <h2 className="font-display text-xl font-bold">{title}</h2>
        <dl className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-[var(--v6-text)]">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
