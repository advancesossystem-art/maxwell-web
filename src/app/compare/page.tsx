import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getAllComparePages } from "@/lib/seo/programmatic/build-pages";
import { compareTemplates } from "@/lib/seo/programmatic/catalog";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildSeoMetadata({
  title: "Website & Software Comparison Guides — WordPress, Shopify, Next.js",
  description: `Compare WordPress vs custom, Shopify vs WooCommerce, Next.js vs React, and more buyer guides. ${siteConfig.name} — website engineering for businesses.`,
  path: "/compare",
  keywords: [
    "WordPress vs custom website",
    "Shopify vs WooCommerce",
    "Next.js vs WordPress",
    "Wix vs WordPress",
    "custom website vs no-code",
  ],
});

export default function CompareHubPage() {
  const pages = getAllComparePages().filter((p) => !p.noIndex);
  const websiteSlugs = new Set(compareTemplates.filter((t) => t.category === "website").map((t) => t.slug));
  const websitePages = pages.filter((p) => websiteSlugs.has(p.slug));
  const otherPages = pages.filter((p) => !websiteSlugs.has(p.slug));

  return (
    <>
      <section className="bg-background section-hero">
        <Container>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            Website &amp; buyer comparison guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Decide WordPress vs custom, Shopify vs WooCommerce, Next.js vs React, and more — written for business
            buyers, not software catalogs. {pages.length} indexable guides from {siteConfig.name}.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-white">Website engineering comparisons</h2>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {websitePages.map((p) => (
              <li key={p.slug}>
                <Link href={p.path} className="text-sm text-slate-300 hover:text-brand-400 hover:underline">
                  {p.headline}
                </Link>
              </li>
            ))}
          </ul>

          {otherPages.length > 0 ? (
            <>
              <h2 className="mt-12 font-display text-2xl font-bold text-white">Supporting comparisons</h2>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {otherPages.map((p) => (
                  <li key={p.slug}>
                    <Link href={p.path} className="text-sm text-slate-300 hover:text-brand-400 hover:underline">
                      {p.headline}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </Container>
      </section>
    </>
  );
}
