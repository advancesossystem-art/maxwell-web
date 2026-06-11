import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getAllServices } from "@/lib/services-data";
import { serviceIcons, ArrowRight } from "@/components/ui/Icons";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { StaggerGrid, StaggerGridItem } from "@/components/motion/StaggerGrid";
import { HubMetrics } from "@/components/design/HubMetrics";

export const metadata = createMetadata({
  title: "Software Development Services India | Website, ERP, Mobile & AI",
  description:
    "Hire a software development company in India for website development, custom software, mobile apps, ERP & CRM, SaaS, AI & cloud. Maxwell Electrodeal — Vadodara, Gujarat & pan-India.",
  path: "/services",
});

export default function ServicesPage() {
  const allServices = getAllServices();

  return (
    <>
      <PageHero
        compact
        eyebrow="Services"
        title={
          <>
            Business solutions,{" "}
            <AccentGradient>delivered as software</AccentGradient>
          </>
        }
        description="From custom platforms to ERP, CRM, mobile, SaaS, AI, and cloud—each practice is scoped around the outcome your leadership team needs."
        below={
          <HubMetrics
            className="gap-3"
            stats={[
              { value: `${allServices.length}`, label: "Service practices" },
              { value: "ERP · CRM", label: "Enterprise systems" },
              { value: "Web · Mobile", label: "Product delivery" },
              { value: "AI · Cloud", label: "Modern stack" },
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
        <StaggerGrid className="grid gap-4 sm:grid-cols-2">
          {allServices.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <StaggerGridItem key={service.slug}>
              <Card href={`/services/${service.slug}`} padding="lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-600/30 bg-brand-600/15 text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon />
                  </div>
                </div>
                <H3 className="mt-5 transition-colors group-hover:text-brand-400">{service.title}</H3>
                <Caption className="mt-2 line-clamp-2 text-muted">{service.subheadline}</Caption>
                <div className="mt-5 flex items-center justify-between border-t border-[var(--v6-border)] pt-4">
                  <span className="text-xs font-medium text-muted">From {service.startingPrice}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-500">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
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
