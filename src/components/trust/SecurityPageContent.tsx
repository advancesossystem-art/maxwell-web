"use client";

import Link from "next/link";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { H3, Text } from "@/components/design/typography";
import { CertificationGrid } from "@/components/trust/CertificationGrid";
import { securitySections } from "@/lib/trust-content";
import { siteConfig } from "@/lib/constants";

export function SecurityPageContent() {
  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "Security" }]}
        eyebrow="Trust center"
        title="Security, privacy & delivery assurance"
        description="How we handle data, protect confidentiality, transfer IP, and host production systems — stated plainly, without implied certifications we have not earned."
      />

      <PageSection>
        <div className="grid gap-6 sm:grid-cols-2">
          {securitySections.map((section) => (
            <Card key={section.id} interactive={false} padding="lg">
              <H3>{section.title}</H3>
              <Text className="mt-3 leading-relaxed">{section.body}</Text>
              {"links" in section && section.links ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-semibold text-brand-600 hover:underline"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[var(--v6-text-muted)]">
          Security or DPA questions:{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-600 hover:underline">
            {siteConfig.email}
          </a>
        </p>
      </PageSection>

      <PageSection tone="raised">
        <SectionHeader
          title="Standards & practices"
          description="Delivery practices aligned with common frameworks — not claims of formal third-party certification unless explicitly stated on a contract or audit letter."
        />
        <CertificationGrid className="mt-8" />
      </PageSection>

      <CompanyCTA />
    </>
  );
}
