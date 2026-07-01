import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, WHATSAPP_HREF_CONTACT } from "@/lib/constants";

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
  priceRange = "₹75,000 - ₹3,00,000+",
}: IndustryWebsitePageProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: ["India", "Gujarat", "Vadodara"],
    description,
    priceRange,
    url: `${siteConfig.url}${canonicalPath}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/website-development-for-manufacturers" className="hover:text-white transition-colors">
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
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">{description}</p>
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

      {/* Industry-Specific Features */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
            Industry-Specific Features for {industry}s
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Beyond the standard website — these are features we build specifically for this
            industry&apos;s B2B buyer workflow.
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

      {/* Standard Inclusions */}
      <section className="py-16 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text,#0f172a)] mb-8">
            What Every Manufacturer Website Includes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Product catalog with search and filtering",
              "WhatsApp and direct inquiry integration",
              "Google-optimized category and product pages",
              "Mobile-first, fast-loading design",
              "GST-compliant quote request forms",
              "Google Analytics + Search Console setup",
            ].map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-xl border border-[var(--v6-border,#e2e8f0)] bg-white p-4"
              >
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-[var(--v6-text-secondary,#475569)]">{f}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Study Reference */}
      {caseStudy && (
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <Container>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
                  Real Project
                </p>
                <p className="font-display font-semibold text-slate-900">
                  We built a 263-page product website for Drashti Chemicals — an industrial
                  chemical supplier in Vadodara with 154 products.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Desktop PageSpeed: 94. 47 product categories. 6 weeks delivery.
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

      {/* Bottom CTA */}
      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to Get Direct Buyer Inquiries?
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
                href="/services/website-development-for-manufacturers"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                View All Packages
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
