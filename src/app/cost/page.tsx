import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getAllCostPages, getIndexableCostPages } from "@/lib/seo/programmatic/build-pages";

export const metadata: Metadata = buildSeoMetadata({
  title: "Website Cost Guides India | From ₹35,000",
  description: `Manufacturer website, catalog, RFQ & web cost guides for India. Starter from ₹35,000. ${getAllCostPages().length}+ pricing pages. Compare before you buy.`,
  path: "/cost",
  absoluteTitle: true,
  keywords: [
    "website development cost India",
    "manufacturer website cost",
    "industrial website cost Vadodara",
    "web development cost Gujarat",
  ],
});

export default function CostHubPage() {
  const pages = getIndexableCostPages();
  const allPages = getAllCostPages();
  const websiteFirst = [...pages].sort((a, b) => {
    const score = (slug: string) => {
      if (slug.includes("web-development") || slug.includes("website") || slug.includes("manufacturing-website"))
        return 0;
      if (slug.includes("erp") || slug.includes("crm") || slug.includes("ai-")) return 2;
      return 1;
    };
    return score(a.slug) - score(b.slug);
  });
  const indiaPages = websiteFirst.filter(
    (p) => p.slug.includes("-cost-india") || p.slug.includes("-cost-vadodara"),
  );
  const cityPages = websiteFirst.filter(
    (p) => !p.slug.endsWith("-cost-india") && !p.slug.match(/-cost-(usa|uk|uae|canada|australia|singapore|germany)$/),
  );

  return (
    <>
      <section className="bg-background section-hero">
        <Container>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Website &amp; Manufacturing Cost Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Transparent pricing for manufacturer websites, catalogs, RFQ builds, and related web work —
            India and global markets. Published Starter from ₹35,000. {allPages.length} cost guides.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cost/manufacturing-website-cost" className="text-brand-400 hover:underline">
              Manufacturing website cost →
            </Link>
            <Link href="/tools/industrial-website-rfq-estimator" className="text-brand-400 hover:underline">
              Free RFQ cost estimator →
            </Link>
            <Link href="/get-estimate" className="text-brand-400 hover:underline">
              Get website quote →
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
              {websiteFirst.map((p) => (
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
