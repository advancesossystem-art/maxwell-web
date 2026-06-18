import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RelatedContent } from "@/components/content/RelatedContent";
import { GeoDefinitionBlock } from "@/components/authority/GeoDefinitionBlock";
import { GeoKeyTakeaways, buildTakeawaysFromFaqs } from "@/components/authority/GeoKeyTakeaways";
import type { ServicePageData } from "@/lib/services-data";

export function ServiceSeoSections({ service }: { service: ServicePageData }) {
  const takeaways = buildTakeawaysFromFaqs(service.faqs, 4);
  const hasSeo =
    service.seoParagraphs?.length ||
    service.pricingTiers?.length ||
    service.comparisonTable?.length ||
    service.processSteps?.length ||
    takeaways.length > 0;

  if (!hasSeo) return null;

  return (
    <>
      <section className="border-t border-[var(--v6-border)] bg-white py-12" data-seo-speakable>
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <GeoDefinitionBlock
              term={`What is ${service.title}?`}
              definition={service.metaDescription}
            />
            {takeaways.length > 0 ? <GeoKeyTakeaways items={takeaways} /> : null}
          </div>
        </Container>
      </section>

      {service.seoParagraphs?.length ? (
        <section className="border-t border-[var(--v6-border)] bg-white py-16">
          <Container>
            <div className="mx-auto max-w-3xl space-y-5 text-[var(--v6-text-secondary)] leading-relaxed">
              {service.seoParagraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {service.pricingTiers?.length ? (
        <section className="v6-section v6-section--soft" aria-label="Pricing">
          <Container>
            <h2 className="v6-section-title">Indicative pricing</h2>
            <p className="v6-lead mt-3 max-w-2xl">
              Transparent ranges after discovery — milestone billing, no surprise change requests.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {service.pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-2xl border border-[var(--v6-border)] bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg font-semibold text-[var(--v6-text)]">{tier.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-[#4f46e5]">{tier.range}</p>
                  <p className="mt-3 text-sm text-[var(--v6-text-secondary)]">{tier.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {service.comparisonTable?.length ? (
        <section className="py-16">
          <Container>
            <h2 className="v6-section-title">How custom ERP compares</h2>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--v6-border)]">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-[#f8fafc] text-[var(--v6-text)]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Capability</th>
                    <th className="px-4 py-3 font-semibold">Custom ERP</th>
                    <th className="px-4 py-3 font-semibold">SAP</th>
                    <th className="px-4 py-3 font-semibold">Tally</th>
                    <th className="px-4 py-3 font-semibold">Zoho</th>
                  </tr>
                </thead>
                <tbody>
                  {service.comparisonTable.map((row) => (
                    <tr key={row.feature} className="border-t border-[var(--v6-border)]">
                      <td className="px-4 py-3 font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-[var(--v6-text-secondary)]">{row.custom}</td>
                      <td className="px-4 py-3 text-[var(--v6-text-secondary)]">{row.sap}</td>
                      <td className="px-4 py-3 text-[var(--v6-text-secondary)]">{row.tally}</td>
                      <td className="px-4 py-3 text-[var(--v6-text-secondary)]">{row.zoho}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      ) : null}

      {service.processSteps?.length ? (
        <section className="v6-section v6-section--soft">
          <Container>
            <h2 className="v6-section-title">Our development process</h2>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.processSteps.map((step) => (
                <li
                  key={step.step}
                  className="rounded-2xl border border-[var(--v6-border)] bg-white p-5"
                >
                  <span className="text-xs font-bold text-[#4f46e5]">{step.step}</span>
                  <h3 className="mt-2 font-display font-semibold text-[var(--v6-text)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--v6-text-secondary)]">{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {service.relatedIndustrySlugs?.length ? (
        <section className="border-t border-[var(--v6-border)] py-12">
          <Container>
            <h2 className="font-display text-xl font-bold text-[var(--v6-text)]">Industries we serve</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.relatedIndustrySlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/industries/${slug}`}
                  className="rounded-full border border-[var(--v6-border)] bg-[#f8fafc] px-4 py-2 text-sm font-medium text-[var(--v6-text)] hover:border-[#4f46e5]/40"
                >
                  {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {service.relatedBlogSlugs?.length ? (
        <section className="py-12">
          <Container>
            <RelatedContent
              slug={`service-${service.slug}`}
              type="article"
              relatedSlugs={service.relatedBlogSlugs}
              title="Related guides"
            />
          </Container>
        </section>
      ) : null}
    </>
  );
}
