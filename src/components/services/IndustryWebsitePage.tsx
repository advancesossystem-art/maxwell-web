import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { websitePricingTiers, pricingTerms } from "@/lib/pricing-data";
import { ManufacturerInformationGain } from "@/components/content/ManufacturerInformationGain";
import { DirectAnswerBlock } from "@/components/seo/DirectAnswerBlock";
import {
  getManufacturerVerticalInsight,
  verticalSlugFromPath,
} from "@/lib/content/information-gain/manufacturer-vertical-insights";

export type IndustryRelatedLink = { label: string; href: string };

export interface IndustryWebsitePageProps {
  industry: string;
  location: string;
  h1: string;
  description: string;
  canonicalPath: string;
  serviceName: string;
  caseStudy?: boolean;
  specificFeatures: string[];
  priceRange?: string;
  /** GEO / AI extractable answer (2–3 sentences). */
  directAnswer?: string;
  /** Industrial digital architect line under hero. */
  positioning?: string;
  /** Textual catalog wireframe / feature blocks. */
  catalogWireframe?: string[];
  relatedLinks?: IndustryRelatedLink[];
  /** Show published website packages (Starter · Professional · Growth). */
  showPackages?: boolean;
}

export function IndustryWebsitePage({
  industry,
  location,
  h1,
  description,
  canonicalPath,
  serviceName,
  caseStudy,
  specificFeatures,
  priceRange = "₹35,000 – ₹1,50,000+",
  directAnswer,
  positioning = "Industrial digital architect for manufacturers — owned Next.js product catalogs and RFQ paths, not rented directory slots.",
  catalogWireframe,
  relatedLinks = [],
  showPackages = true,
}: IndustryWebsitePageProps) {
  const verticalSlug = verticalSlugFromPath(canonicalPath);
  const verticalInsight = getManufacturerVerticalInsight(verticalSlug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
    },
    areaServed: ["India", "Gujarat", "Vadodara"],
    description,
    priceRange,
    url: `${siteConfig.url}${canonicalPath}`,
    offers: websitePricingTiers.map((tier) => ({
      "@type": "Offer",
      name: `${tier.name} — ${serviceName}`,
      price: tier.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      description: tier.scope,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Manufacturer Websites", item: `${siteConfig.url}/services/website-development-for-manufacturers` },
      { "@type": "ListItem", position: 3, name: industry, item: `${siteConfig.url}${canonicalPath}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does a website for a ${industry.toLowerCase()} cost in India?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A Starter product catalog for a ${industry.toLowerCase()} starts at ₹35,000 (25–30 pages, core SEO, WhatsApp inquiry). A Professional catalog with 100+ products is ₹75,000. A Growth catalog with full RFQ, 200+ SKUs, and GIDC corridor SEO is ₹1,50,000+. Monthly website AMC from ₹15,000. All prices + 18% GST. Full code ownership.`,
        },
      },
      {
        "@type": "Question",
        name: `Why do ${industry.toLowerCase()}s need a website instead of IndiaMART?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `IndiaMART costs ₹1.5–3L per year and places your products beside competitors on a shared listing. An owned website builds Google SEO equity permanently — buyers who search your product category land directly on your inquiry form, not on a competitor comparison page.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does it take to build a ${industry.toLowerCase()} website?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Starter sites (25–30 pages) are delivered in 3–4 weeks. Professional catalogs (100+ products) in 5–6 weeks. Growth builds with full RFQ in 6–8 weeks. All Maxwell websites are custom Next.js builds — no WordPress, no plugin subscriptions.`,
        },
      },
    ],
  };

  const defaultLinks: IndustryRelatedLink[] = [
    { label: "Manufacturer websites hub", href: "/services/website-development-for-manufacturers" },
    { label: "Industrial website design", href: "/services/industrial-website-design" },
    { label: "RFQ website development", href: "/services/rfq-website-development" },
    { label: "Industrial catalog development", href: "/services/industrial-catalog-development" },
    { label: "RFQ cost estimator", href: "/tools/industrial-website-rfq-estimator" },
    { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
  ];
  const links = [...relatedLinks, ...defaultLinks].filter(
    (link, i, arr) => arr.findIndex((x) => x.href === link.href) === i,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
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
            <span className="text-white/80">{industry}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            {location}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            {h1}
          </h1>
          <p className="mt-4 text-sm font-medium text-indigo-200/90 max-w-2xl">{positioning}</p>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">{description}</p>
          {directAnswer ? (
            <div className="mt-6 max-w-2xl">
              <DirectAnswerBlock
                answer={directAnswer}
                className="mb-0 max-w-3xl rounded-lg border border-indigo-400/30 bg-white/5 px-4 py-3 text-base leading-relaxed text-slate-100"
              />
            </div>
          ) : null}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/get-estimate?service=${encodeURIComponent(industry + " Website")}&source=industry-hero`}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            {caseStudy && (
              <Link
                href="/case-studies/drashti-chemicals"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                See Case Study →
              </Link>
            )}
            <Link
              href="/tools/industrial-website-rfq-estimator"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Cost estimator →
            </Link>
            <a
              href={WHATSAPP_HREF_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
            Industry-specific features for {industry}s
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Beyond a brochure site — features built for this industry&apos;s B2B buyer workflow.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {specificFeatures.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="mt-0.5 flex-shrink-0 text-indigo-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {catalogWireframe && catalogWireframe.length > 0 ? (
        <section className="border-b border-slate-200 bg-white py-16">
          <Container>
            <h2 className="mb-3 font-display text-2xl font-bold text-slate-900">
              Catalog wireframe — what buyers see
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl">
              Textual architecture blocks (not mock client screenshots). We structure pages so
              procurement can find specs, documents, and RFQ in one scroll.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catalogWireframe.map((item, i) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
                    Screen {i + 1}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {verticalInsight ? (
        <ManufacturerInformationGain insight={verticalInsight} industry={industry} />
      ) : null}

      {showPackages ? (
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <Container>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
              Website packages
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl">
              Published tiers from our pricing SSoT. {pricingTerms.gst}. Payment: {pricingTerms.payment}.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              {websitePricingTiers.map((tier) => (
                <article
                  key={tier.id}
                  className={`flex flex-col rounded-xl border bg-white p-6 ${
                    tier.highlight ? "border-indigo-500 ring-2 ring-indigo-100" : "border-slate-200"
                  }`}
                >
                  {tier.highlight ? (
                    <span className="mb-2 inline-block w-fit rounded bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="font-display text-xl font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-2 font-display text-3xl font-bold text-indigo-600">{tier.price}</p>
                  <p className="mt-1 text-sm text-slate-500">{tier.scope}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{tier.timeline}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
                    {tier.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-emerald-600">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/get-estimate?service=${encodeURIComponent(industry + " Website")}&tier=${tier.id}`}
                    className="mt-6 inline-flex justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    Get estimate
                  </Link>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500 max-w-2xl">
              {pricingTerms.ownership}{" "}
              <Link href="/pricing" className="text-indigo-600 hover:underline">
                Full TCO vs WordPress →
              </Link>
            </p>
          </Container>
        </section>
      ) : null}

      <section className="border-b border-slate-200 bg-white py-16">
        <Container>
          <h2 className="mb-8 font-display text-2xl font-bold text-slate-900">
            What every manufacturer website includes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Product catalog with search and filtering",
              "WhatsApp and direct inquiry integration",
              "Google-optimized category and product pages",
              "Mobile-first, fast-loading Next.js design",
              "GST-compliant quote request forms",
              "Google Analytics + Search Console setup",
            ].map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-slate-700">{f}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {links.length > 0 ? (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <Container>
            <h2 className="font-display text-lg font-bold text-slate-900 mb-4">Related corridors & silos</h2>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-indigo-600 hover:border-indigo-200"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {caseStudy && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
                  Real project
                </p>
                <p className="font-display font-semibold text-slate-900">
                  We built a 263-page product website for an industrial chemical supplier in
                  Vadodara — 154 products, Desktop PageSpeed 94, 6 weeks delivery.
                </p>
              </div>
              <Link
                href="/case-studies/drashti-chemicals"
                className="flex-shrink-0 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition"
              >
                Read Case Study →
              </Link>
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to get direct buyer inquiries?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation. We&apos;ll tell you exactly what a website for your{" "}
              {industry.toLowerCase()} business would include and cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/get-estimate?service=${encodeURIComponent(industry + " Website")}`}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/tools/industrial-website-rfq-estimator"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                Cost estimator
              </Link>
              <a
                href={WHATSAPP_HREF_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
