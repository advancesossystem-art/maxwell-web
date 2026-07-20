"use client";

import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { GlobalDeliveryMap, OrgStructureDiagram } from "@/components/company/CompanyVisuals";
import { TrustMetricsGrid } from "@/components/company/TrustMetrics";
import { companyOverview, globalDeliveryModel } from "@/lib/company-data";
import { Card } from "@/components/design/Card";
import { H3, Text } from "@/components/design/typography";
import { CertificationGrid } from "@/components/trust/CertificationGrid";
import { ClientLogoCloud } from "@/components/trust/ClientLogoCloud";
import { CompanyAuthorityStrip } from "@/components/trust/CompanyAuthorityStrip";

const sections = [
  { key: "businessModel", title: "Business Model", content: companyOverview.businessModel },
  { key: "deliveryMethodology", title: "Delivery Methodology", content: companyOverview.deliveryMethodology },
  { key: "qualityStandards", title: "Quality Standards", content: companyOverview.qualityStandards },
  { key: "clientEngagement", title: "Client Engagement Model", content: companyOverview.clientEngagement },
  { key: "futureVision", title: "Future Vision", content: companyOverview.futureVision },
] as const;

export function CompanyPageContent() {
  return (
    <>
      <PageSection>
        <ClientLogoCloud mode="placeholder" />
      </PageSection>

      <PageSection>
        <CompanyAuthorityStrip />
      </PageSection>

      <PageSection>
        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((s) => (
            <Card key={s.key} interactive={false} padding="lg">
              <H3>{s.title}</H3>
              <Text className="mt-3">{s.content}</Text>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection tone="elevated">
        <SectionHeader title="Global delivery model" description={globalDeliveryModel.overview} />
        <GlobalDeliveryMap />
      </PageSection>

      <PageSection>
        <SectionHeader title="Organization" />
        <OrgStructureDiagram />
      </PageSection>

      <PageSection tone="elevated">
        <TrustMetricsGrid />
      </PageSection>

      <PageSection>
        <CertificationGrid />
      </PageSection>

      <CompanyCTA />
    </>
  );
}
