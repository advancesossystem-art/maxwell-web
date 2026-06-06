import Link from "next/link";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ArrowRight } from "@/components/ui/Icons";
import { getAllSolutions } from "@/lib/solutions-data";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { TrustStrip } from "@/components/trust/TrustStrip";

export function SolutionsHub() {
  const all = getAllSolutions();
  const isIntlGeo = (slug: string) => slug.endsWith("-usa") || slug.endsWith("-uae");
  const isIndiaGeo = (slug: string) =>
    slug.endsWith("-india") || slug.endsWith("-gujarat") || slug.endsWith("-vadodara");
  const geoIntl = all.filter((s) => isIntlGeo(s.slug));
  const geoIndia = all.filter((s) => isIndiaGeo(s.slug));
  const solutions = all.filter((s) => !isIntlGeo(s.slug) && !isIndiaGeo(s.slug));

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            High-intent <AccentGradient>commercial solutions</AccentGradient>
          </>
        }
        description="Deep landing pages for ERP, CRM, AI, mobile, SaaS, and cloud — with market insight and proven ROI framing."
        below={<TrustStrip compact />}
      >
        <PrimaryCTA location="solutions_hub" context={{ source: "solutions-hub" }} />
        <SecondaryCTA location="solutions_hub" variant="outline" />
      </PageHero>

      <PageSection tone="elevated" compact>
        <h2 className="font-display text-xl font-bold">India — Vadodara, Gujarat & nationwide</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Local SEO pages for software, ERP, web, mobile, CRM, and AI buyers in India—HQ in Vadodara, Gujarat.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {geoIndia.map((solution) => (
            <Card key={solution.slug} href={`/solutions/${solution.slug}`} padding="md">
              <H3 className="text-base group-hover:text-brand-400 transition-colors">{solution.title}</H3>
              <Caption className="mt-1 line-clamp-2 text-xs">{solution.primaryKeyword}</Caption>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection tone="elevated" compact>
        <h2 className="font-display text-xl font-bold">USA & UAE — startup & SMB</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Geo-targeted pages for web, mobile, and custom software buyers in the United States and UAE.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {geoIntl.map((solution) => (
            <Card key={solution.slug} href={`/solutions/${solution.slug}`} padding="md">
              <H3 className="text-base group-hover:text-brand-400 transition-colors">{solution.title}</H3>
              <Caption className="mt-1 line-clamp-2 text-xs">{solution.primaryKeyword}</Caption>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection tone="elevated" compact>
        <h2 className="font-display text-xl font-bold">All commercial solutions</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {solutions.map((solution, i) => (
            <Card key={solution.slug} href={`/solutions/${solution.slug}`} padding="lg">
              <span className="font-display text-3xl font-bold text-white/10">{String(i + 1).padStart(2, "0")}</span>
              <H3 className="mt-4 group-hover:text-brand-400 transition-colors">{solution.title}</H3>
              <Caption className="mt-2 line-clamp-2">{solution.subheadline}</Caption>
              <p className="mt-3 text-xs font-medium text-brand-500">{solution.primaryKeyword}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {solution.roiExamples.slice(0, 2).map((r) => (
                  <span
                    key={r.label}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-xs text-[#94A3B8]"
                  >
                    {r.metric} {r.label}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-500 opacity-0 transition-opacity group-hover:opacity-100">
                View solution <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Caption>
          Need local delivery? Explore our{" "}
          <Link href="/locations" className="font-medium text-brand-500 hover:text-brand-400">
            Locations hub
          </Link>{" "}
          for India cities and international markets.
        </Caption>
      </PageSection>

      <FinalCTA />
    </>
  );
}
