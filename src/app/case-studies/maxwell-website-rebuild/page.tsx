import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { StraightAnswers } from "@/components/conversion/StraightAnswers";

export const metadata: Metadata = createMetadata({
  title: "We Rebuilt Our Own Website — 0 to 80 Google Clicks in 28 Days",
  description:
    "How Maxwell Electrodeal rebuilt maxwellelectrodeal.com from invisible to 80 Google clicks in 28 days — no ads, no bought backlinks. Search Console proof and methodology.",
  path: "/case-studies/maxwell-website-rebuild",
  keywords: [
    "website SEO case study India",
    "Google clicks growth",
    "technical SEO Vadodara",
    "programmatic SEO manufacturer",
  ],
  openGraphType: "article",
  publishedTime: "2026-07-01",
});

const timeline = [
  { day: "Day 0", metric: "2 impressions", detail: "Zero clicks. Invisible on Google." },
  { day: "Day 28", metric: "80 clicks", detail: "1,204 impressions · 296 pages indexed · 44 countries" },
];

const methodology = [
  "Correct technical SEO — canonical tags, sitemap hygiene, index/noindex policy",
  "Programmatic product and service pages built how Google actually reads them",
  "PageSpeed-first Next.js architecture (not bloated WordPress themes)",
  "Internal linking between compare, cost, and service hubs",
  "No paid ads and no purchased backlinks — organic only",
];

export default function MaxwellWebsiteRebuildCaseStudy() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-white/80">Maxwell Website Rebuild</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">Our own site · Unfakeable proof</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold md:text-5xl">
            We rebuilt our own website. Here&apos;s what happened in 28 days.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            From 2 Google impressions and zero clicks to 80 clicks and 1,204 impressions — with 296 pages indexed
            across 44 countries. No ads. No backlinks bought.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.day} className="rounded-2xl border border-[var(--v6-border)] bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{item.day}</p>
                <p className="mt-2 font-display text-4xl font-bold text-[var(--v6-text)]">{item.metric}</p>
                <p className="mt-2 text-[var(--v6-text-secondary)]">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-bold">What we did</h2>
            <ul className="mt-6 space-y-3">
              {methodology.map((item) => (
                <li key={item} className="flex gap-2 text-[var(--v6-text-secondary)]">
                  <span className="text-emerald-600" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-[var(--v6-border)] bg-[#f8fafc] p-8 text-center">
            <p className="text-sm font-semibold text-[var(--v6-text-muted)]">Search Console screenshots</p>
            <p className="mt-2 text-[var(--v6-text-secondary)]">
              Add performance screenshots to <code className="text-xs">public/case-studies/maxwell-rebuild/</code> when
              exported from Google Search Console.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/get-estimate?source=maxwell-rebuild-case-study"
              className="v6-btn v6-btn-primary inline-flex"
            >
              Get your free website audit
            </Link>
            <Link href="/pricing" className="v6-btn v6-btn-secondary inline-flex">
              See published pricing
            </Link>
            <Link href="/case-studies/drashti-chemicals" className="text-sm font-semibold text-brand-600 hover:underline self-center">
              Client case study: Drashti Chemicals →
            </Link>
          </div>

          <p className="mt-8 text-sm text-[var(--v6-text-muted)]">
            {siteConfig.legalName} · Vadodara · We&apos;ll show you Search Console screenshots on a discovery call —
            same methodology we used here.
          </p>
        </Container>
      </section>

      <StraightAnswers title="Questions about this rebuild" />
    </>
  );
}
