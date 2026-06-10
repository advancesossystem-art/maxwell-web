import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { engagementModelFaqs, engagementModels } from "@/lib/engagement-models";
import { CONVERSION_ROUTES } from "@/lib/conversion-copy";

export function EngagementModelsPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Engagement Models"
        title={
          <>
            Pricing that fits <AccentGradient>how you buy</AccentGradient>
          </>
        }
        description="Fixed price, time & materials, or a dedicated team—transparent models with milestone billing, weekly demos, and full IP ownership."
        below={<TrustStrip compact />}
      >
        <SecondaryCTA location="engagement_models_hero" context={{ source: "engagement-models" }} />
        <PrimaryCTA location="engagement_models_hero" context={{ source: "engagement-models" }} variant="outline" />
      </PageHero>

      <PageSection tone="elevated">
        <SectionHeader
          title="Choose your engagement model"
          description="Every model includes discovery, documented delivery, and post-launch support options."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <Card key={model.slug} interactive={false} padding="lg" className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">{model.tagline}</p>
              <H3 className="mt-2">{model.title}</H3>
              <Caption className="mt-3">{model.description}</Caption>
              <p className="mt-4 text-sm font-semibold text-brand-600">{model.investment}</p>
              <div className="mt-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Best for</p>
                <ul className="mt-2 space-y-1.5">
                  {model.bestFor.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="shrink-0 text-brand-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">Includes</p>
                <ul className="mt-2 space-y-1.5">
                  {model.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="shrink-0 text-brand-500">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Related resources"
          description="Compare options and explore cost guides before you commit."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <Card href="/compare" padding="md">
            <H3 className="text-base group-hover:text-brand-400 transition-colors">Compare guides</H3>
            <Caption className="mt-2">ERP vs CRM, SAP vs custom, and more</Caption>
          </Card>
          <Card href="/cost" padding="md">
            <H3 className="text-base group-hover:text-brand-400 transition-colors">Cost guides</H3>
            <Caption className="mt-2">Transparent pricing by service and region</Caption>
          </Card>
          <Card href={CONVERSION_ROUTES.estimate} padding="md">
            <H3 className="text-base group-hover:text-brand-400 transition-colors">Get a custom quote</H3>
            <Caption className="mt-2">Itemized estimate within 24–48 hours</Caption>
          </Card>
        </div>
      </PageSection>

      <PageSection tone="elevated">
        <SectionHeader title="Common questions" align="center" />
        <dl className="mx-auto max-w-3xl space-y-6">
          {engagementModelFaqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-display text-base font-bold">{faq.question}</dt>
              <dd className="mt-2 text-sm text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-center text-sm text-muted">
          Still deciding?{" "}
          <Link href="/process" className="font-semibold text-brand-600 hover:underline">
            See our delivery process
          </Link>{" "}
          or book a free strategy session.
        </p>
      </PageSection>
    </>
  );
}
