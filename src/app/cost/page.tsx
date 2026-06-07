import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getAllCostPages } from "@/lib/seo/programmatic/build-pages";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildSeoMetadata({
  title: "Software Development Cost Guides India & Global",
  description: `ERP, CRM, AI, mobile app, and custom software development cost guides. ${getAllCostPages().length}+ pricing pages for India cities and global markets. ${siteConfig.name}.`,
  path: "/cost",
  keywords: ["ERP development cost India", "CRM development cost", "software development cost", "AI development cost"],
});

export default function CostHubPage() {
  const pages = getAllCostPages();
  const indiaPages = pages.filter((p) => p.slug.includes("-cost-india") || p.slug.includes("-cost-vadodara"));
  const cityPages = pages.filter((p) => !p.slug.endsWith("-cost-india") && !p.slug.match(/-cost-(usa|uk|uae|canada|australia|singapore|germany)$/));

  return (
    <>
      <section className="bg-background section-hero">
        <Container>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Software Development Cost Guides</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Transparent ERP, CRM, AI, and custom software pricing for India and global markets. {pages.length} cost guides.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/tools/software-cost-calculator" className="text-brand-400 hover:underline">
              Use Cost Calculator →
            </Link>
            <Link href="/get-estimate" className="text-brand-400 hover:underline">
              Get Custom Quote →
            </Link>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container className="space-y-12">
          <div>
            <h2 className="font-display text-xl font-bold text-white">India national pricing</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {indiaPages.map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="text-sm text-slate-300 hover:text-brand-400 hover:underline">
                    {p.headline}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white">City-wise pricing (India)</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {cityPages.slice(0, 120).map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="text-sm text-slate-300 hover:text-brand-400 hover:underline">
                    {p.headline}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white">All cost guides</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="text-sm text-slate-300 hover:text-brand-400 hover:underline">
                    {p.headline}
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
