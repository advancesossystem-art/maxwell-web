"use client";

import Link from "next/link";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { CompanyCTA } from "@/components/company/CompanyCTA";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { H3, Text } from "@/components/design/typography";
import { TestimonialGrid } from "@/components/trust/TestimonialGrid";
import { verifiableWorkFallback } from "@/lib/trust-content";
import { getAllVerifiedReviews } from "@/lib/verified-reviews";
import { siteConfig } from "@/lib/constants";

export function ReviewsPageContent() {
  const verifiedReviews = getAllVerifiedReviews();

  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "Reviews" }]}
        eyebrow="Reviews"
        title="Client reviews & verifiable work"
        description="We only display ratings that exist on third-party platforms. Until our public profiles are live, here's work you can verify yourself."
      />

      {verifiedReviews.length > 0 ? (
        <PageSection>
          <SectionHeader
            title="Verified review platforms"
            description="Independent sites where clients have left public feedback."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {verifiedReviews.map((platform) => (
              <Card key={platform.platform} interactive={false} padding="lg">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">
                  {platform.platform}
                </p>
                <H3 className="mt-2 text-lg">
                  {platform.rating}/5 · {platform.reviewCount} reviews
                </H3>
                <Text className="mt-3 text-sm leading-relaxed">{platform.label}</Text>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-600 hover:underline"
                >
                  View profile →
                </a>
              </Card>
            ))}
          </div>
        </PageSection>
      ) : (
        <PageSection>
          <SectionHeader
            title={verifiableWorkFallback.title}
            description={verifiableWorkFallback.description}
          />
          <div className="mt-8 grid gap-4">
            {verifiableWorkFallback.items.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v6-card block p-5 text-sm font-semibold text-brand-600 hover:underline"
                >
                  {item.label} →
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="v6-card block p-5 text-sm font-semibold text-brand-600 hover:underline"
                >
                  {item.label} →
                </Link>
              ),
            )}
          </div>
          <p className="mt-6 text-sm text-[var(--v6-text-muted)]">
            We are not displaying &ldquo;coming soon&rdquo; platform badges — they hurt trust more than they help.
            Email us after project completion to leave feedback on Google or Clutch.
          </p>
        </PageSection>
      )}

      <PageSection tone="raised">
        <SectionHeader
          title="Client testimonials"
          description="Role, organization type, and measurable outcomes. Names are anonymized where NDAs require — we prefer named, verifiable references when clients allow."
        />
        <div className="mt-8">
          <TestimonialGrid />
        </div>
      </PageSection>

      <PageSection>
        <Card interactive={false} padding="lg" className="mx-auto max-w-2xl text-center">
          <H3>Worked with Maxwell?</H3>
          <Text className="mt-3">
            If you are a current or past client, we welcome honest feedback on Google or Clutch once your project is
            complete. Named reviews with a specific outcome help other leaders evaluate fit.
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
