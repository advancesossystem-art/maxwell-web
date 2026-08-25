import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getAllServices } from "@/lib/services-data";
import { WEBSITE_SERVICE_SLUGS } from "@/lib/website-only";
import { serviceIcons, ArrowRight } from "@/components/ui/Icons";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";
import { StaggerGrid, StaggerGridItem } from "@/components/motion/StaggerGrid";
import { HubMetrics } from "@/components/design/HubMetrics";

export const metadata = createMetadata({
  title: "Website Development, SEO & AMC | From ₹35,000",
  description:
    "Website development, SEO, and monthly AMC for any business that needs a site. From ₹35,000. AMC from ₹15,000. Vadodara, Gujarat. Get a quote.",
  path: "/services",
});

export default function ServicesPage() {
  const allServices = getAllServices().filter((s) => WEBSITE_SERVICE_SLUGS.has(s.slug));

  return (
    <>
      <PageHero
        compact
        eyebrow="Services"
        title="Website development, SEO & AMC"
        description="Website development from ₹35,000, monthly AMC from ₹15,000, and SEO for businesses in Vadodara and Gujarat — including manufacturers and industrial catalogs."
        below={
          <HubMetrics
            className="gap-3"
            stats={[
              { value: "₹35,000", label: "Website from" },
              { value: "₹15,000", label: "AMC / month" },
              { value: "SEO", label: "Ranking work" },
              { value: "Vadodara", label: "Gujarat HQ" },
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
