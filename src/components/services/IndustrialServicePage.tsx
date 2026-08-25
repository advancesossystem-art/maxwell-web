import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { pricingTerms, websitePricingTiers } from "@/lib/pricing-data";
import { siteConfig } from "@/lib/constants";
import { CTA_LABELS, CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";
import { mergeMoneyInternalLinks } from "@/lib/seo/money-internal-links";
import type { FaqItem } from "@/lib/seo/faq-schema";
import { TrackedWhatsAppLink } from "@/components/conversion/TrackedWhatsAppLink";

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
  /** Visible FAQs + FAQPage JSON-LD (mount once). */
  faqs?: readonly FaqItem[];
};

const heroProof = [
  { label: "Starter", value: websitePricingTiers[0].price, detail: websitePricingTiers[0].scope },
  { label: "Professional", value: websitePricingTiers[1].price, detail: websitePricingTiers[1].scope },
  { label: "Timeline", value: "4–5 days", detail: "Typical launch window" },
] as const;

const heroSignals = [
  "HTML catalogs & RFQ paths — not PDF brochure sites",
  "Gujarat GIDC + manufacturer SEO from Vadodara",
  "Full code ownership · GST invoice on every build",
] as const;

export function IndustrialServicePage({
  breadcrumb,
  eyebrow,
  h1,
  lead,
  priceLine = `Starter from ${websitePricingTiers[0].price} · ${websitePricingTiers[0].scope} · Professional from ${websitePricingTiers[1].price}`,
  estimateSource,
  estimateLabel = CTA_LABELS.primary,
  pageDirectAnswer,
  sections,
  featureGridTitle,
  features,
  related,
  schemaName,
  schemaDescription,
  path,
  faqs,
}: IndustrialServicePageProps) {
  const relatedLinks = mergeMoneyInternalLinks(path, related);
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
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
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
      {faqs?.length ? (
        <FaqPageJsonLd
          faqs={faqs}
          id={`${siteConfig.url}${path}#faq`}
          name={`${schemaName} FAQs`}
        />
      ) : null}
      <section className="relative overflow-hidden bg-[#030b1f] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 90% 15%, rgba(37, 99, 235, 0.18), transparent 58%), radial-gradient(ellipse 50% 40% at 8% 95%, rgba(15, 23, 42, 0.9), transparent 55%)",
          }}
          aria-hidden
        />
        <Container className="relative z-10 py-10 md:py-12">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/50">
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

          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
            <div className="lg:col-span-7 min-w-0">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300 mb-4">
                {eyebrow}
              </p>
              <h1 className="font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] max-w-[18ch] sm:max-w-none">
                {h1}
              </h1>
              <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-[60ch] sm:text-lg">{lead}</p>
              {pageDirectAnswer ? (
                <p
                  className="mt-4 max-w-[60ch] text-base text-indigo-100/90 leading-relaxed"
                  data-speakable="direct-answer"
                >
                  {pageDirectAnswer}
                </p>
              ) : null}
              <p className="mt-5 text-indigo-200/95 max-w-[60ch]">{priceLine}</p>
              <p className="mt-2 text-sm text-slate-400 max-w-[60ch]">
                {pricingTerms.payment} · {pricingTerms.gst}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={`/get-estimate?service=${encodeURIComponent(schemaName)}&source=${estimateSource}`}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
                >
                  {estimateLabel}
                </Link>
                <TrackedWhatsAppLink className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition">
                  {CTA_LABELS.secondary}
                </TrackedWhatsAppLink>
                <Link
                  href="/tools/industrial-website-rfq-estimator"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
                >
                  Free industrial cost estimator →
                </Link>
              </div>
              <p className="mt-3 text-sm text-slate-400">{CONVERSION_EXPECTATIONS.responseTime}</p>
            </div>

            <aside className="lg:col-span-5 min-w-0 lg:pt-2" aria-label="Pricing and delivery signals">
              <div className="border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:border-white/15 lg:pt-0 lg:pl-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45 mb-5">
                  Published industrial pricing
                </p>
                <dl className="grid grid-cols-1 gap-0 sm:grid-cols-3 lg:grid-cols-1">
                  {heroProof.map((item, i) => (
                    <div
                      key={item.label}
                      className={
                        i > 0
                          ? "border-t border-white/10 pt-4 mt-4 sm:border-t-0 sm:border-l sm:border-white/10 sm:pt-0 sm:mt-0 sm:pl-4 lg:border-l-0 lg:border-t lg:border-white/10 lg:pl-0 lg:pt-4 lg:mt-4"
                          : ""
                      }
                    >
                      <dt className="text-xs uppercase tracking-wider text-white/45">{item.label}</dt>
                      <dd className="mt-1 font-display text-2xl font-bold tracking-tight text-white">
                        {item.value}
                      </dd>
                      <dd className="mt-0.5 text-sm text-slate-400">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  {heroSignals.map((signal) => (
                    <li key={signal} className="flex gap-3 text-sm text-slate-300 leading-snug">
                      <span className="mt-0.5 text-indigo-400 shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {sections.map((s) => (
        <section key={s.heading} className="border-b border-slate-200 bg-white py-10">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 lg:sticky lg:top-8">
                  {s.heading}
                </h2>
              </div>
              <div className="min-w-0 lg:col-span-8">
                {s.directAnswer ? (
                  <DirectAnswerBlock
                    answer={s.directAnswer}
                    className="mb-5 max-w-none rounded-lg border border-indigo-100 bg-indigo-50 px-4 py-3 text-base leading-relaxed text-slate-800"
                  />
                ) : null}
                <div className="max-w-[70ch] space-y-4">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="text-base leading-relaxed text-slate-700 md:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
                {s.bullets ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-slate-700">
                        <span className="shrink-0 text-indigo-600">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <Container>
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-slate-900">
            {featureGridTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
              >
                <span className="shrink-0 text-indigo-600">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {faqs?.length ? (
        <section className="border-b border-slate-200 bg-white py-10">
          <Container>
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
            <dl className="mx-auto max-w-3xl space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-relaxed text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-slate-100 bg-slate-50 py-12">
        <Container>
          <p className="mb-3 text-sm font-semibold text-slate-700">Related pages</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {relatedLinks.map((r) => (
              <Link key={r.href} href={r.href} className="text-sm text-indigo-600 hover:underline">
                {r.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-[#030b1f] text-white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 min-w-0">
              <h2 className="font-display text-2xl font-bold mb-3 md:text-3xl tracking-tight">
                Request a written website quote
              </h2>
              <p className="text-slate-300 max-w-[55ch]">
                Starter from ₹35,000. AMC from ₹15,000/month. No advance — pay after go-live.{" "}
                {pricingTerms.payment}.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 lg:justify-end">
              <Link
                href={`/get-estimate?service=${encodeURIComponent(schemaName)}&source=${estimateSource}-cta`}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                {CTA_LABELS.primary}
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                See pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
