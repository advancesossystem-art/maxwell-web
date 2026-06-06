"use client";

import Link from "next/link";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { ComparisonTable } from "@/components/company/ComparisonTable";
import { TrustMetricsGrid, CertificationsRow } from "@/components/company/TrustMetrics";
import { whyMaxwellOutcomes } from "@/lib/company-data";
import { ArrowRight } from "@/components/ui/Icons";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3 } from "@/components/design/typography";
import { TrustStrip } from "@/components/trust/TrustStrip";

export function WhyMaxwellPageContent() {
  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "Why Maxwell" }]}
        eyebrow="Why Maxwell"
        title={
          <>
            Enterprise quality. Startup speed. <AccentGradient>India value.</AccentGradient>
          </>
        }
        description="See how Maxwell Electrodeal compares to freelancers, small agencies, and large consultancies."
        below={<TrustStrip compact />}
      />

      <PageSection>
        <SectionHeader
          title="How we compare"
          description="An honest comparison across the criteria that matter most to decision-makers."
          className="text-center [&>div]:mx-auto [&>div]:text-center"
        />
        <ComparisonTable />
      </PageSection>

      <PageSection tone="elevated">
        <SectionHeader title="Outcomes our clients report" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyMaxwellOutcomes.map((o) => (
            <Card key={o.label} interactive={false} padding="lg" href={o.caseStudy}>
              <p className="font-display text-2xl font-bold text-brand-500">{o.metric}</p>
              <H3 className="mt-2 text-base">{o.label}</H3>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <TrustMetricsGrid />
        <div className="mt-12">
          <CertificationsRow />
        </div>
        <Link
          href="/work"
          className="mt-10 inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-400"
        >
          View our work <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </PageSection>

      <CompanyCTA />
    </>
  );
}
