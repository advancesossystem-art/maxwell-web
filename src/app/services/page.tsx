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

/** Hub-and-spoke commercial silos — maps audit pillars to existing routes. */
const serviceSpokes = [
  {
    href: "/services/website-development",
    title: "Custom Web Development",
    desc: "Core pillar — business, corporate, and industrial sites from ₹35,000",
  },
  {
    href: "/services/business-website-development",
    title: "Corporate & Business Websites",
    desc: "MSME company sites, clinics, traders — not only factories",
  },
  {
    href: "/services/website-technologies",
    title: "Next.js Development",
    desc: "React, SSR, headless CMS — the stack behind every build",
  },
  {
    href: "/services/ecommerce-website-development",
    title: "Ecommerce Development",
    desc: "Online stores with UPI or B2B RFQ catalogs",
  },
  {
    href: "/services/website-redesign",
    title: "Website Redesign",
    desc: "Rebuild slow WordPress sites — keep domain, fix speed",
  },
  {
    href: "/services/web-design",
    title: "Web Design",
    desc: "Design + development as one enquiry-ready build",
  },
  {
    href: "/services/website-development-for-manufacturers",
    title: "Manufacturer Websites",
    desc: "Product catalogs, RFQ, GIDC SEO — our specialty depth",
  },
  {
    href: "/services/website-seo",
    title: "Website SEO",
    desc: "Technical SEO and content on sites we build or inherit",
  },
  {
    href: "/services/website-maintenance",
    title: "Website AMC",
    desc: "Monthly maintenance from ₹15,000 — updates, SEO, articles",
  },
] as const;

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

      <PageSection tone="elevated" compact>
        <h2 className="font-display text-xl font-bold">Website services — hub & spokes</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Four commercial pillars — corporate sites, Next.js builds, ecommerce, redesign — plus
          manufacturer specialty depth. All routes below are live money pages.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSpokes.map((spoke) => (
            <Card key={spoke.href} href={spoke.href} padding="md">
              <H3 className="text-base group-hover:text-brand-400 transition-colors">{spoke.title}</H3>
              <Caption className="mt-1 line-clamp-2 text-xs">{spoke.desc}</Caption>
            </Card>
          ))}
        </div>
      </PageSection>

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
