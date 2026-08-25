import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/services/website-maintenance";

export const metadata: Metadata = createMetadata({
  title: "Website AMC India | From ₹15,000/mo",
  description:
    "Monthly website AMC from ₹15,000: two product changes, weekly updates, SEO + performance report, two articles. Vadodara manufacturer sites. Get a quote.",
  path,
  keywords: [
    "website maintenance India",
    "website AMC Vadodara",
    "manufacturer website maintenance",
    "website support plan Gujarat",
    "Next.js website maintenance",
    "industrial website AMC",
  ],
});

export default function WebsiteMaintenancePage() {
  return (
    <IndustrialServicePage
      path={path}
      breadcrumb="Website Maintenance"
      eyebrow="Monthly AMC · manufacturer websites · Vadodara"
      h1="Website AMC in India — monthly website maintenance from ₹15,000"
      lead="A catalog that is not updated after launch dies on Google. Maxwell AMC from ₹15,000/month: two product changes, weekly updates, SEO and performance work with a monthly report, plus two tailor-made articles published on your site."
      pageDirectAnswer="Website AMC for manufacturer sites starts at ₹15,000/month. It includes two product changes, weekly website updates, monthly SEO and performance reporting, and two original articles or knowledge posts published on your website — plus backups, SSL, and uptime monitoring."
      estimateSource="website-maintenance"
      schemaName="Website Maintenance AMC for Manufacturers"
      schemaDescription="Monthly website maintenance and AMC plans for manufacturer catalog websites from Maxwell Electrodeal, Vadodara."
      sections={[
        {
          heading: "Build is one invoice. Ranking is a monthly job.",
          directAnswer:
            "Google drops pages that go stale. Certificates expire, SKUs change, WhatsApp links break, and plugin-free Next.js still needs dependency patches. AMC is how the site you paid for keeps converting.",
          paragraphs: [
            "Most Vadodara factories buy a website, then leave it untouched for 18 months. Meanwhile a competitor adds three products, a GSTIN update, and a new GIDC landing page — and Google prefers the live site.",
            "Maxwell AMC is written for catalog sites: add a grade, swap an SDS, fix a dead RFQ field, check Core Web Vitals. Not a generic WordPress plugin-update retainer.",
          ],
          bullets: [
            "Uptime + SSL monitoring so buyers never hit a dead plant site",
            "Weekly backups with a restore test, not a forgotten zip file",
            "Product / certificate / WhatsApp edits inside the plan hours",
            "Search Console watch so indexing drops are caught early",
          ],
        },
        {
          heading: "Published monthly plans",
          directAnswer:
            "Website AMC starts at ₹15,000/month (+18% GST). Website builds stay no-advance. AMC is billed monthly after go-live.",
          paragraphs: [
            "₹15,000 plan: two product changes, weekly updates, monthly SEO + performance report, two original articles published on your site, plus backups and uptime. Growth ₹19,000 and Plant ₹29,000 add more edits and SLA.",
            "Start AMC on a Maxwell-built site or after a paid health check on an existing site. No annual lock-in beyond a 3-month minimum.",
          ],
          bullets: [
            "Website AMC ₹15,000/mo — the published starter",
            "Growth ₹19,000/mo — heavier catalog + extra posts",
            "Plant ₹29,000/mo — priority SLA",
            "See full inclusions on /pricing",
          ],
        },
        {
          heading: "Who this is for",
          directAnswer:
            "Chemical, engineering, pharma equipment, ceramic, and textile manufacturers who already have (or are launching) a product catalog and cannot assign an in-house developer to weekly edits.",
          paragraphs: [
            "If your sales team still WhatsApps PDF catalogs because the website is outdated, you need AMC more than another homepage redesign.",
          ],
        },
      ]}
      featureGridTitle="What every AMC month includes"
      features={[
        "Uptime and SSL monitoring",
        "Backups + restore drill",
        "Security and Next.js dependency patches",
        "Form and WhatsApp path checks",
        "Agreed product/content edits",
        "Search Console indexing watch (Growth+)",
        "GST invoice every month",
        "Cancel after the plan minimum — you keep the site",
      ]}
      related={[
        { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
        { label: "Published pricing + AMC", href: "/pricing" },
        { label: "Industrial website design", href: "/services/industrial-website-design" },
        { label: "RFQ website development", href: "/services/rfq-website-development" },
        { label: "Cost estimator", href: "/tools/industrial-website-rfq-estimator" },
        { label: "Vadodara web company", href: "/solutions/web-development-company-vadodara" },
      ]}
    />
  );
}
