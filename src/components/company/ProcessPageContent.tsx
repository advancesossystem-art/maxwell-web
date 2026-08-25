"use client";

import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { ProcessFlowInteractive } from "@/components/company/ProcessFlow";
import { TrustMetricsGrid } from "@/components/company/TrustMetrics";
import { processTrustFramework } from "@/lib/company-data";
import { AccentGradient, H3 } from "@/components/design/typography";
import { Card } from "@/components/design/Card";

const trustSections = [
  { key: "riskReduction", title: "Risk reduction", items: processTrustFramework.riskReduction },
  { key: "qualityGates", title: "Quality gates", items: processTrustFramework.qualityGates },
  { key: "reviewCycles", title: "Review cycles", items: processTrustFramework.reviewCycles },
  { key: "testingStandards", title: "Testing standards", items: processTrustFramework.testingStandards },
  { key: "communication", title: "Communication process", items: processTrustFramework.communication },
  { key: "escalation", title: "Escalation process", items: processTrustFramework.escalation },
] as const;

export function ProcessPageContent() {
  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "About", href: "/about" }, { label: "Process" }]}
        eyebrow="Website delivery"
        title={
          <>
            From discovery to <AccentGradient>SEO go-live &amp; AMC</AccentGradient>
          </>
        }
        description="Discovery → design → build → SEO go-live → AMC. Weekly visibility, no advance on website packages, and clear handoff so you own the site."
      />

      <PageSection>
        <SectionHeader
          title="Interactive delivery map"
          description="Click each phase to see deliverables, your involvement, and what “done” means for a manufacturer or business website."
        />
        <ProcessFlowInteractive />
      </PageSection>

      <PageSection tone="elevated">
        <SectionHeader
          title="How we reduce delivery risk"
          description="Explicit controls—not assumptions—so stakeholders know what happens when priorities shift."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustSections.map((section) => (
            <Card key={section.key} interactive={false} padding="lg">
              <H3 className="text-base">{section.title}</H3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted">
                    <span className="shrink-0 text-brand-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <TrustMetricsGrid />
      </PageSection>

      <CompanyCTA />
    </>
  );
}
