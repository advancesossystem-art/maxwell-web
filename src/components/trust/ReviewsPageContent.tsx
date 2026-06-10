"use client";

import Link from "next/link";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { H3, Text } from "@/components/design/typography";
import { TestimonialGrid } from "@/components/trust/TestimonialGrid";
import { reviewPlatforms } from "@/lib/trust-content";
import { siteConfig } from "@/lib/constants";

export function ReviewsPageContent() {
  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "Reviews" }]}
        eyebrow="Reviews"
        title="Third-party reviews & client feedback"
        description="We publish feedback honestly — no fabricated scores or client names. Verified third-party profiles are linked here when live."
      />

      <PageSection>
        <SectionHeader
          title="Review platforms"
          description="Independent sites where clients can leave public feedback. We only display ratings that exist on these platforms."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewPlatforms.map((platform) => (
            <Card key={platform.id} interactive={false} padding="lg">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">{platform.name}</p>
              <H3 className="mt-2 text-lg">{platform.status}</H3>
              <Text className="mt-3 text-sm leading-relaxed">{platform.description}</Text>
              {platform.href ? (
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-600 hover:underline"
                >
                  View profile →
                </a>
              ) : (
                <p className="mt-4 text-xs text-[var(--v6-text-muted)]">Link will be added when the profile is live.</p>
              )}
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection tone="raised">
        <SectionHeader
          title="Client feedback on this site"
          description="Quotes below are anonymized where required. Attribution shows role, organization type, and region — not fabricated company names."
        />
        <div className="mt-8">
          <TestimonialGrid limit={6} />
        </div>
      </PageSection>

      <PageSection>
        <Card interactive={false} padding="lg" className="mx-auto max-w-2xl text-center">
          <H3>Worked with Maxwell?</H3>
          <Text className="mt-3">
            If you are a current or past client, we welcome honest feedback on Clutch, G2, or Google once your
            project is complete. It helps other leaders evaluate fit — and helps us improve delivery.
          </Text>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}?subject=Client%20review%20request`}
              className="v6-btn v6-btn-primary inline-flex !min-h-10"
            >
              Request a review link
            </a>
            <Link href="/contact" className="v6-btn v6-btn-secondary inline-flex !min-h-10">
              Contact us
            </Link>
          </div>
        </Card>
      </PageSection>

      <CompanyCTA />
    </>
  );
}
