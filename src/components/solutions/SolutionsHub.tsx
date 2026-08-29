import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageHero } from "@/components/design/PageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";
import { TrustStrip } from "@/components/trust/TrustStrip";

const indiaWebPages = [
  {
    href: "/services/website-development",
    title: "Website Development — India",
    keyword: "Website development company India",
  },
  {
    href: "/solutions/web-development-company-india",
    title: "Web Development Company — India",
    keyword: "Web development company India",
  },
  {
    href: "/solutions/web-development-company-gujarat",
    title: "Website Development — Gujarat",
    keyword: "Website development company Gujarat",
  },
  {
    href: "/solutions/web-development-company-vadodara",
    title: "Website Developer — Vadodara",
    keyword: "Website developer in Vadodara",
  },
  {
    href: "/services/business-website-development",
    title: "Business / Corporate Websites",
    keyword: "Corporate website development India",
  },
  {
    href: "/services/ecommerce-website-development",
    title: "Ecommerce Development",
    keyword: "Ecommerce website development",
  },
  {
    href: "/services/website-redesign",
    title: "Website Redesign",
    keyword: "Website redesign company",
  },
  {
    href: "/services/website-technologies",
    title: "Next.js Development",
    keyword: "Next.js web development services",
  },
  {
    href: "/solutions/web-design-company-vadodara",
    title: "Web Design Company — Vadodara",
    keyword: "Web design company in Vadodara",
  },
  {
    href: "/solutions/business-website-vadodara",
    title: "Business Website — Vadodara MSME",
    keyword: "Company website Vadodara",
  },
  {
    href: "/solutions/ecommerce-website-vadodara",
    title: "Ecommerce — Vadodara",
    keyword: "Ecommerce website Vadodara",
  },
  {
    href: "/solutions/website-redesign-vadodara",
    title: "Redesign — Vadodara",
    keyword: "Website redesign Vadodara",
  },
  {
    href: "/solutions/seo-company-vadodara",
    title: "SEO Company — Vadodara",
    keyword: "SEO company Vadodara",
  },
  {
    href: "/services/website-maintenance",
    title: "Website AMC — from ₹15,000/mo",
    keyword: "Website maintenance Vadodara",
  },
  {
    href: "/pricing",
    title: "Website pricing — from ₹35,000",
    keyword: "Website development cost Vadodara",
  },
] as const;

export function SolutionsHub() {
  return (
    <>
      <PageHero
        eyebrow="Website company"
        title={
          <>
            Website development, <AccentGradient>SEO & AMC</AccentGradient>
          </>
        }
        description="Vadodara business websites from ₹35,000. Monthly AMC from ₹15,000. SEO so buyers find you on Google — including manufacturer and industrial catalogs."
        below={<TrustStrip compact />}
      >
        <PrimaryCTA location="solutions_hub" context={{ source: "solutions-hub" }} />
        <SecondaryCTA location="solutions_hub" variant="outline" />
      </PageHero>

      <PageSection tone="elevated" compact>
        <h2 className="font-display text-xl font-bold">Website development — India, Gujarat & Vadodara</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Dedicated pages for buyers searching website development in Vadodara, Gujarat, or nationwide — local HQ team with pan-India delivery.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {indiaWebPages.map((page) => (
            <Card key={page.href} href={page.href} padding="md">
              <H3 className="text-base group-hover:text-brand-400 transition-colors">{page.title}</H3>
              <Caption className="mt-1 line-clamp-2 text-xs">{page.keyword}</Caption>
            </Card>
          ))}
        </div>
      </PageSection>

      <FinalCTA />
    </>
  );
}
