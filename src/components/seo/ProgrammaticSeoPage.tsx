import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type {
  ComparisonMatrixBlock,
  LocalStatsBlock,
  PricingTableBlock,
  ProgrammaticPageData,
} from "@/lib/seo/programmatic/types";
import { TrustNearCTA } from "@/components/conversion/TrustNearCTA";
import { siteConfig } from "@/lib/constants";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { ProgrammaticHeroMotion } from "@/components/seo/ProgrammaticMotion";
import { GeoQuickAnswer } from "@/components/authority/GeoContentSection";
import { ExpertCommentary } from "@/components/authority/GeoDefinitionBlock";
import { StatisticsPanel } from "@/components/authority/StatisticsPanel";
import { ProofSignalsBar } from "@/components/trust/ProofSignalsBar";
import { buildProgrammaticGeo } from "@/lib/geo-page-content";
import { getStatisticsForProgrammatic } from "@/lib/statistics-data";
import { StickyEstimateCTA } from "@/components/common/StickyEstimateCTA";

function Breadcrumb({ items }: { items: ProgrammaticPageData["breadcrumb"] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function PricingTableSection({ table }: { table: PricingTableBlock }) {
  return (
    <section className="border-b border-border bg-[#0a0f1a] py-16">
      <Container>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{table.title}</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-brand-400">
                <th className="px-4 py-3 font-semibold">Tier</th>
                <th className="px-4 py-3 font-semibold">Scope</th>
                <th className="px-4 py-3 font-semibold">Indicative price</th>
                <th className="px-4 py-3 font-semibold">Timeline</th>
                <th className="px-4 py-3 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.tier} className="border-b border-white/[0.06] text-white/80">
                  <td className="px-4 py-4 font-semibold text-white">{row.tier}</td>
                  <td className="px-4 py-4 text-muted">{row.scope}</td>
                  <td className="px-4 py-4 text-brand-400">{row.priceRange}</td>
                  <td className="px-4 py-4 text-muted">{row.timeline}</td>
                  <td className="px-4 py-4 text-muted">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-slate-400">{table.footnote}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/get-estimate" className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500">
            Get pricing estimate
          </Link>
          <Link href="/book-consultation" className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:border-brand-500/40">
            Book consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ComparisonMatrixSection({ matrix }: { matrix: ComparisonMatrixBlock }) {
  return (
    <section className="border-b border-border bg-[#0a0f1a] py-16">
      <Container>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">{matrix.title}</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-brand-400">
                <th className="px-4 py-3 font-semibold">Criterion</th>
                <th className="px-4 py-3 font-semibold">{matrix.leftLabel}</th>
                <th className="px-4 py-3 font-semibold">{matrix.rightLabel}</th>
              </tr>
            </thead>
            <tbody>
              {matrix.rows.map((row) => (
                <tr key={row.criterion} className="border-b border-white/[0.06]">
                  <td className="px-4 py-4 font-medium text-white">{row.criterion}</td>
                  <td className="px-4 py-4 text-muted">{row.left}</td>
                  <td className="px-4 py-4 text-muted">{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-slate-300">{matrix.summary}</p>
      </Container>
    </section>
  );
}

function LocalStatsSection({ block }: { block: LocalStatsBlock }) {
  return (
    <section className="border-b border-border bg-[#0a0f1a] py-10">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">{block.title}</p>
        {block.subtitle && <p className="mt-2 max-w-3xl text-sm text-slate-400">{block.subtitle}</p>}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {block.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
      <p className="font-display text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-400">{label}</p>
    </div>
  );
}

export function ProgrammaticSeoPage({ page }: { page: ProgrammaticPageData }) {
  const geo = buildProgrammaticGeo(page);
  const stats = getStatisticsForProgrammatic(page.primaryKeyword);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.headline,
            description: page.metaDescription,
            url: `${siteConfig.url}${page.path}`,
            publisher: { "@id": `${siteConfig.url}/#organization` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: page.breadcrumb.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
            })),
          }),
        }}
      />
      <FaqPageJsonLd faqs={page.faqs} id={`${siteConfig.url}${page.path}#faq`} />

      <section className="relative overflow-hidden bg-background section-hero">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ background: `radial-gradient(ellipse 60% 50% at 70% 30%, ${page.accent}33, transparent)` }}
        />
        <Container className="relative z-10">
          <Breadcrumb items={page.breadcrumb} />
          <ProgrammaticHeroMotion
            pageType={page.pageType}
            siteName={siteConfig.name}
            headline={page.headline}
            subheadline={page.subheadline}
          />
        </Container>
      </section>

      <GeoQuickAnswer geo={geo} />

      <section className="border-b border-border py-16">
        <Container>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{page.intro}</p>
          <TrustNearCTA compact className="mt-6 justify-start" />
          <ProofSignalsBar compact />
          {geo.keyTakeaways.length > 0 && (
            <div className="mt-8 max-w-3xl">
              <h2 className="font-display text-lg font-bold">Key takeaways</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {geo.keyTakeaways.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      {page.pricingTable && <PricingTableSection table={page.pricingTable} />}
      {page.comparisonMatrix && <ComparisonMatrixSection matrix={page.comparisonMatrix} />}
      {page.localStats && <LocalStatsSection block={page.localStats} />}

      <section className="border-b border-border py-8">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-400">Free — no obligation</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-estimate" className="rounded-lg border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] px-4 py-2 text-sm text-[var(--v6-text)] hover:border-brand-500/40">
              Free Project Estimate
            </Link>
            <Link href="/book-consultation" className="rounded-lg border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] px-4 py-2 text-sm text-[var(--v6-text)] hover:border-brand-500/40">
              Free Consultation
            </Link>
            <Link href="/tools/erp-roi-calculator" className="rounded-lg border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] px-4 py-2 text-sm text-[var(--v6-text)] hover:border-brand-500/40">
              Free ERP Assessment
            </Link>
          </div>
        </Container>
      </section>

      {page.sections.map((section) => (
        <section key={section.title} className="border-b border-border py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-[var(--v6-text)] md:text-3xl">{section.title}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{section.content}</p>
            {section.bullets && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-[var(--v6-text-secondary)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      ))}

      <section className="border-b border-border py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text)]">Key challenges we solve</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {page.challenges.map((c) => (
              <div key={c.title} className="v6-card rounded-xl p-6">
                <h3 className="font-semibold text-[var(--v6-text)]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text)]">Recommended approach</h2>
          <ol className="mt-6 space-y-3">
            {page.approach.map((step, i) => (
              <li key={step} className="flex gap-4 text-muted">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-border py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text)]">Related pages</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.internalLinks.map((link) => {
              const nofollow =
                /^\/industries\/[^/]+\/[^/]+$/.test(link.href) ||
                /^\/locations\/india\/[^/]+\/[^/]+$/.test(link.href);
              return (
              <Link
                key={link.href}
                href={link.href}
                rel={nofollow ? "nofollow" : undefined}
                className="group v6-card rounded-xl p-5 transition-colors hover:border-brand-500/40"
              >
                <p className="font-semibold text-[var(--v6-text)] group-hover:text-brand-600">{link.label}</p>
                {link.description && <p className="mt-1 text-sm text-muted">{link.description}</p>}
              </Link>
            );
            })}
          </div>
        </Container>
      </section>

      <StatisticsPanel {...stats} />

      {geo.expertQuote && (
        <section className="border-b border-border py-12">
          <Container className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Expert insight</p>
            <div className="mt-4">
              <ExpertCommentary
                author={geo.expertQuote.author}
                role={geo.expertQuote.role}
                quote={geo.expertQuote.text}
              />
            </div>
          </Container>
        </section>
      )}

      <section className="border-b border-border py-12" data-seo-speakable aria-label="Summary">
        <Container className="max-w-4xl">
          <h2 className="font-display text-xl font-bold">Summary</h2>
          <p className="mt-4 leading-relaxed text-muted">{geo.summary}</p>
        </Container>
      </section>

      <section className="py-16" data-seo-speakable>
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text)]">Frequently asked questions</h2>
          <dl className="mt-8 space-y-6">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-[var(--v6-text)]">{faq.question}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-border bg-[#0a0f1a] py-16">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Ready to start your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            {siteConfig.name} delivers {page.primaryKeyword.toLowerCase()} with milestone pricing and full IP ownership.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/get-estimate" size="lg">
              Get Free Estimate
            </Button>
            <Button href="/book-consultation" size="lg" variant="outline">
              Book Consultation
            </Button>
          </div>
        </Container>
      </section>
      <StickyEstimateCTA source="compare" />
    </>
  );
}
