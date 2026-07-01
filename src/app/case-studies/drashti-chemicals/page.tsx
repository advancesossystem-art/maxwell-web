import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { drashtiCaseStudySeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: drashtiCaseStudySeo.title,
  description: drashtiCaseStudySeo.description,
  path: drashtiCaseStudySeo.path,
  keywords: [...drashtiCaseStudySeo.keywords],
  openGraphType: "article",
  publishedTime: drashtiCaseStudySeo.publishedAt,
});

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How We Built a 263-Page Product Website for Drashti Chemicals — Vadodara",
  description: drashtiCaseStudySeo.description,
  datePublished: drashtiCaseStudySeo.publishedAt,
  dateModified: drashtiCaseStudySeo.publishedAt,
  author: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.legalName,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logoUrl,
    },
  },
  url: `${siteConfig.url}${drashtiCaseStudySeo.path}`,
  mainEntityOfPage: `${siteConfig.url}${drashtiCaseStudySeo.path}`,
};

const metrics = [
  { num: "263", label: "Pages Built" },
  { num: "154", label: "Products Listed" },
  { num: "47", label: "Categories" },
  { num: "94", label: "Desktop PageSpeed" },
];

const whatWeBuilt = [
  "Complete product catalog with 154 products organized across 47 categories",
  "Programmatically generated pages for each product and category using Next.js 14 App Router static generation",
  "SEO-optimized metadata for every single product page",
  "Mobile-first responsive design — fast on all devices",
  "WhatsApp inquiry integration on every product page",
  "Contact forms with product pre-selection for faster B2B inquiry workflow",
];

const techDetails = [
  { label: "Stack", value: "Next.js 14 App Router, TypeScript, Tailwind CSS, Vercel" },
  { label: "Architecture", value: "100% static generation (SSG) for maximum performance" },
  { label: "Desktop PageSpeed", value: "94 / 100" },
  { label: "Total Pages", value: "263 (products + categories + static pages)" },
  { label: "Canonical tags", value: "Properly configured across all pages" },
  { label: "Sitemap", value: "Auto-generated for all 263 pages" },
];

export default function DrashtiChemicalsCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-white/80">Drashti Chemicals</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Case Study · Industrial Chemical Supplier · Vadodara, Gujarat
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Drashti Chemicals Website — Chemical Supplier Vadodara
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            How Maxwell Electrodeal built a 263-page Next.js product catalog for an industrial
            chemical supplier in Vadodara — replacing IndiaMART dependency with direct Google leads.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl">
            {metrics.map((m) => (
              <div key={m.label} className="text-center rounded-xl bg-white/10 p-4">
                <p className="text-3xl font-bold text-indigo-400">{m.num}</p>
                <p className="mt-1 text-xs text-slate-300">{m.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-14 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-[var(--v6-text,#0f172a)] mb-5">
              The Challenge
            </h2>
            <p className="text-[var(--v6-text-secondary,#475569)] leading-relaxed">
              Drashti Chemicals, a Vadodara-based industrial chemical supplier, had no standalone
              web presence. All buyer inquiries came through IndiaMART and TradeIndia listings —
              costing ₹2L+ per year with no ownership of the leads or data.
            </p>
            <p className="mt-4 text-[var(--v6-text-secondary,#475569)] leading-relaxed">
              Buyers searching Google for chemical products in Vadodara and Gujarat couldn&apos;t
              find them directly. The client needed a way to own buyer relationships and rank for
              long-tail chemical supplier keywords.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Built */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text,#0f172a)] mb-8">
            What We Built
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {whatWeBuilt.map((item) => (
              <div
                key={item}
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
                <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Details */}
      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-[var(--v6-text,#0f172a)] mb-8">
            Technical Details
          </h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <tbody>
                {techDetails.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-5 py-3 font-semibold text-slate-700 w-48">{row.label}</td>
                    <td className="px-5 py-3 text-slate-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Results */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-[var(--v6-text,#0f172a)] mb-5">
              Results
            </h2>
            <p className="text-[var(--v6-text-secondary,#475569)] leading-relaxed">
              The website launched in June 2025 and is now indexed by Google. Product category
              pages in Vadodara and Gujarat are beginning to rank for long-tail chemical supplier
              keywords. Direct WhatsApp inquiries have begun arriving from buyers who found the
              site on Google — without any paid advertising.
            </p>
            <p className="mt-4 text-[var(--v6-text-secondary,#475569)] leading-relaxed">
              The client now has a permanent digital asset they own outright. No annual fees, no
              lead sharing with competitors, no dependency on a marketplace&apos;s algorithm
              changes.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Is Your Business in a Similar Situation?
            </h2>
            <p className="text-slate-300 mb-8">
              Talk to us about replacing your IndiaMART dependency with a website that generates
              direct buyer inquiries from Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?source=drashti-case-study"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Talk to us →
              </Link>
              <Link
                href="/services/website-development-for-manufacturers"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                See Manufacturer Website Packages
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
