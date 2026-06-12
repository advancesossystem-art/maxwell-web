import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrustThisContent } from "@/components/content/TrustThisContent";
import { ContentAuthorByline } from "@/components/content/ContentAuthorByline";
import { GeoDefinitionBlock, ExpertCommentary } from "@/components/authority/GeoDefinitionBlock";
import { SourcedStatisticCard } from "@/components/authority/SourcedStatistic";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import type { MaxwellAnswer } from "@/lib/answers-data";
import { siteConfig } from "@/lib/constants";

export function AnswerDetailPage({ answer }: { answer: MaxwellAnswer }) {
  const url = `${siteConfig.url}/answers/${answer.slug}`;

  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: answer.question,
      text: answer.question,
      datePublished: answer.publishedAt,
      answerCount: 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer.shortAnswer,
        datePublished: answer.updatedAt,
        url,
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaSchema) }} />
      <FaqPageJsonLd faqs={answer.faqs} id={`${url}#faq`} />

      <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 lg:pt-36">
        <Container>
          <nav className="mb-6 text-sm text-white/50">
            <Link href="/answers" className="hover:text-white">
              Maxwell Answers
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80 line-clamp-1">{answer.question}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">Direct answer</p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold text-white sm:text-4xl">
            {answer.question}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/90">{answer.shortAnswer}</p>
          <div className="mt-6">
            <ContentAuthorByline
              authorId={answer.authorId}
              category={answer.category}
              publishedAt={answer.publishedAt}
              dark
            />
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-4xl space-y-12">
          <TrustThisContent category={answer.category} authorId={answer.authorId} contentType="article" />

          {answer.definition && (
            <GeoDefinitionBlock term={answer.definition.term} definition={answer.definition.text} />
          )}

          <div>
            <h2 className="font-display text-xl font-bold">Business context</h2>
            <p className="mt-4 text-muted leading-relaxed">{answer.businessContext}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold">Examples</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              {answer.examples.map((ex) => (
                <li key={ex}>{ex}</li>
              ))}
            </ul>
          </div>

          {answer.comparisonTable && (
            <div>
              <h2 className="font-display text-xl font-bold">Comparison</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-elevated">
                      {answer.comparisonTable.headers.map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {answer.comparisonTable.rows.map((row, i) => (
                      <tr key={i} className="border-b border-border">
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 text-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-bold">Benefits</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {answer.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-brand-600">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">Limitations</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {answer.limitations.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span className="text-amber-600">!</span> {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {answer.statistics && answer.statistics.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold">Statistics</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {answer.statistics.map((stat) => (
                  <SourcedStatisticCard
                    key={stat.label}
                    stat={{
                      id: stat.label,
                      value: stat.value,
                      label: stat.label,
                      context: "",
                      source: stat.source,
                      sourceUrl: stat.sourceUrl,
                      category: answer.category === "crm" ? "crm" : "erp",
                      publishedDate: answer.updatedAt,
                      section: "benchmark" as const,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {answer.expertQuote && (
            <ExpertCommentary
              author={answer.expertQuote.author}
              role={answer.expertQuote.role}
              quote={answer.expertQuote.text}
            />
          )}

          {answer.faqs.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold">FAQ</h2>
              <dl className="mt-4 space-y-6">
                {answer.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="font-semibold text-[var(--v6-text)]">{faq.question}</dt>
                    <dd className="mt-2 text-sm text-muted leading-relaxed">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="rounded-2xl border border-border bg-surface-elevated p-8">
            <h2 className="font-display text-xl font-bold">{answer.cta.title}</h2>
            <p className="mt-2 text-muted">{answer.cta.description}</p>
            <Link href={answer.cta.href} className="v6-btn v6-btn-primary mt-6 inline-flex">
              {answer.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold">Related resources</h2>
            <ul className="mt-4 space-y-2">
              {answer.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-600 hover:text-brand-500">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
