import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildSeoMetadata } from "@/lib/seo/metadata-utils";
import { getAllComparePages } from "@/lib/seo/programmatic/build-pages";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = buildSeoMetadata({
  title: "Software Comparison Guides — ERP, CRM, SaaS vs Custom",
  description: `Compare ERP, CRM, SaaS vs custom software, SAP vs Odoo, Tally vs ERP, and more. ${getAllComparePages().length}+ expert guides from ${siteConfig.name} India.`,
  path: "/compare",
  keywords: ["ERP vs CRM", "custom ERP vs SAP", "Odoo vs custom ERP", "Tally vs ERP", "SaaS vs custom software"],
});

export default function CompareHubPage() {
  const pages = getAllComparePages();

  return (
    <>
      <section className="bg-background section-hero">
        <Container>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">Software Comparison Guides</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            ERP vs CRM, SAP vs custom, Odoo vs bespoke—expert comparisons for Indian CTOs and founders. {pages.length}{" "}
            guides from {siteConfig.name}.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((p) => (
              <li key={p.slug}>
                <Link href={p.path} className="text-sm text-slate-300 hover:text-brand-400 hover:underline">
                  {p.headline}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
