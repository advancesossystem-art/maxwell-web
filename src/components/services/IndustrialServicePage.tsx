import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { pricingTerms, websitePricingTiers } from "@/lib/pricing-data";
import { siteConfig } from "@/lib/constants";

export type IndustrialPillarLink = { label: string; href: string };

export type IndustrialServicePageProps = {
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  priceLine?: string;
  estimateSource: string;
  estimateLabel?: string;
  /** Optional page-level direct answer (GEO / speakable) */
  pageDirectAnswer?: string;
  sections: {
    heading: string;
    /** 2–3 sentence extractable answer shown under H2 */
    directAnswer?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  featureGridTitle: string;
  features: string[];
  related: IndustrialPillarLink[];
  schemaName: string;
  schemaDescription: string;
  path: string;
};

export function IndustrialServicePage({
  breadcrumb,
  eyebrow,
  h1,
  lead,
  priceLine = `Starter from ${websitePricingTiers[0].price} · ${websitePricingTiers[0].scope} · Professional from ${websitePricingTiers[1].price}`,
  estimateSource,
  estimateLabel = "Get Free Estimate",
  pageDirectAnswer,
  sections,
  featureGridTitle,
  features,
  related,
  schemaName,
  schemaDescription,
  path,
}: IndustrialServicePageProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: schemaName,
    description: schemaDescription,
    provider: {
      "@type": "Organization",
      name: "Maxwell Electrodeal Private Limited",
      url: siteConfig.url,
    },
    areaServed: ["Vadodara", "Gujarat", "India"],
    url: `${siteConfig.url}${path}`,
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    description: schemaDescription,
    url: `${siteConfig.url}${path}`,
    areaServed: [
      { "@type": "City", name: "Vadodara" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "419, Lalita Tower, Jetalpur Road",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone,
    priceRange: "₹₹",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services/website-development-for-manufacturers"
              className="hover:text-white transition-colors"
            >
              Manufacturer Websites
            </Link>
            <span>/</span>
            <span className="text-white/80">{breadcrumb}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-4xl">
            {h1}
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">{lead}</p>
          {pageDirectAnswer ? (
            <p className="mt-4 max-w-3xl text-base text-indigo-100/90 leading-relaxed" data-speakable="direct-answer">
              {pageDirectAnswer}
            </p>
          ) : null}
          <p className="mt-4 text-indigo-200">{priceLine}</p>
          <p className="mt-2 text-sm text-slate-400">
            {pricingTerms.payment} · {pricingTerms.gst}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/get-estimate?service=${encodeURIComponent(schemaName)}&source=${estimateSource}`}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              {estimateLabel}
            </Link>
            <Link
              href="/tools/industrial-website-rfq-estimator"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Free industrial cost estimator →
            </Link>
          </div>
        </Container>
      </section>

      {sections.map((s) => (
        <section key={s.heading} className="py-14 border-b border-slate-200">
          <Container>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">{s.heading}</h2>
            {s.directAnswer ? <DirectAnswerBlock answer={s.directAnswer} /> : null}
            <div className="max-w-3xl space-y-4">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {s.bullets ? (
                <ul className="mt-4 space-y-2 text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-indigo-600 shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">{featureGridTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
              >
                <span className="text-indigo-600 shrink-0">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 border-b border-slate-100 bg-[#f8fafc]">
        <Container>
          <p className="text-sm font-semibold text-slate-700 mb-3">Related industrial pages</p>
          <div className="flex flex-wrap gap-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="text-sm text-indigo-600 hover:underline">
                {r.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready for an industrial architecture estimate?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation for factory catalogs, RFQ flows, and GIDC-focused SEO. {pricingTerms.payment}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/get-estimate?service=${encodeURIComponent(schemaName)}&source=${estimateSource}-cta`}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/tools/industrial-website-rfq-estimator"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Run cost estimator
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
