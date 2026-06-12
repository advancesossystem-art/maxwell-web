import Link from "next/link";
import { founderInsights } from "@/lib/founder-insights-data";
import { getFounderAuthor } from "@/lib/content/authors";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { formatPublishDate } from "@/lib/content/utils";

export function FounderInsightsHub() {
  const founder = getFounderAuthor();

  return (
    <>
      <PageHero
        compact
        title={
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-2xl font-bold text-white">
              {founder.initials}
            </div>
            <div>
              <p className="v6-eyebrow">Founder Insights</p>
              <h1 className="v6-section-title mt-2">
                <AccentGradient>{founder.name}</AccentGradient>
              </h1>
              <Caption className="text-brand-500">{founder.role}</Caption>
              <p className="mt-4 max-w-2xl text-[var(--v6-text-secondary)]">{founder.bio}</p>
              <Link href={`/authors/${founder.slug}`} className="mt-4 inline-block text-sm text-brand-600 hover:text-brand-500">
                Full author profile →
              </Link>
            </div>
          </div>
        }
        description="Practical perspectives on ERP, CRM, AI, automation, and technology strategy — from delivery experience, not theory."
      />

      <PageSection>
        <div className="grid gap-6 md:grid-cols-2">
          {founderInsights.map((insight) => (
            <Card key={insight.slug} href={insight.href} padding="lg">
              <Caption className="text-brand-500">{insight.topic}</Caption>
              <H3 className="mt-2 group-hover:text-brand-400 transition-colors">{insight.title}</H3>
              <Caption className="mt-3 line-clamp-3">{insight.excerpt}</Caption>
              <Caption className="mt-4">{formatPublishDate(insight.publishedAt)}</Caption>
            </Card>
          ))}
        </div>
      </PageSection>
    </>
  );
}
