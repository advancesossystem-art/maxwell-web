import Link from "next/link";
import { founderInsights } from "@/lib/founder-insights-data";
import { getFounderAuthor } from "@/lib/content/authors";
import { founderProfile } from "@/lib/trust/founder-profile";
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
              {founder.role ? <Caption className="text-brand-500">{founder.role}</Caption> : null}
              <p className="mt-4 max-w-2xl text-[var(--v6-text-secondary)]">{founder.bio}</p>
              <div className="mt-5 max-w-2xl space-y-3">
                {founderProfile.journey.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-[var(--v6-text-secondary)]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <blockquote className="mt-5 max-w-2xl rounded-xl border border-[var(--v6-border)] bg-[var(--v6-bg-soft)] p-4 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
                &ldquo;{founderProfile.message}&rdquo;
              </blockquote>
              <Link href={`/authors/${founder.slug}`} className="mt-4 inline-block text-sm text-brand-600 hover:text-brand-500">
                Full author profile →
              </Link>
            </div>
          </div>
        }
        description={`Practical perspectives from ${founderProfile.name}, ${founderProfile.role} — website engineering for manufacturers, product catalogs, B2B inquiry conversion, and supporting ERP, CRM, and automation when operations demand it.`}
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
