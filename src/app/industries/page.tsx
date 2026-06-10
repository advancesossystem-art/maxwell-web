import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getAllIndustries } from "@/lib/industries-data";
import { industryIcons } from "@/components/industries/IndustryCTA";
import { ArrowRight } from "@/components/ui/Icons";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { StaggerGrid, StaggerGridItem } from "@/components/motion/StaggerGrid";
import { HubMetrics } from "@/components/design/HubMetrics";

export const metadata = createMetadata({
  title: "Industry Software Development Company India",
  description:
    "Vertical software development for manufacturing, healthcare, education, logistics, retail & construction — ERP, mobile apps & automation by Maxwell Electrodeal, India.",
  path: "/industries",
});

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <>
      <PageHero
        compact
        eyebrow="Industries"
        title={
          <>
            Systems shaped for <AccentGradient>how your sector operates</AccentGradient>
          </>
        }
        description="Manufacturing, healthcare, education, logistics, retail, and construction—each with workflows we have shipped before."
        below={
          <HubMetrics
            className="gap-3"
            stats={[
              { value: `${industries.length}`, label: "Industry verticals" },
              { value: "ERP · MES", label: "Operations" },
              { value: "HIPAA-ready", label: "Healthcare" },
              { value: "India · Global", label: "Delivery" },
            ]}
          />
        }
      >
        <Button href="/book-consultation" size="lg">
          Book Consultation
          <ArrowRight />
        </Button>
        <Button href="/get-estimate" size="lg" variant="outline">
          Get Project Estimate
        </Button>
      </PageHero>

      <PageSection tone="raised" compact>
        <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = industryIcons[industry.icon];
            return (
              <StaggerGridItem key={industry.slug}>
              <Card href={`/industries/${industry.slug}`} padding="lg">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    {Icon}
                  </div>
                  <span className="v6-index-num text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <H3 className="mt-5 group-hover:text-brand-400 transition-colors">{industry.title}</H3>
                <Caption className="mt-2 line-clamp-2">{industry.subheadline}</Caption>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {industry.impactMetrics.slice(0, 2).map((m) => (
                    <span key={m.label} className="v6-chip font-medium">
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore solutions <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Card>
              </StaggerGridItem>
            );
          })}
        </StaggerGrid>
      </PageSection>

      <FinalCTA />
    </>
  );
}
