import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/services/website-maintenance";

export const metadata: Metadata = createMetadata({
  title: "Website Maintenance AMC India | Manufacturer Sites from ₹4,999/mo",
  description:
    "Monthly website maintenance for manufacturer catalogs — backups, security, product edits, Search Console watch. Care ₹4,999 · Growth ₹9,999 · Plant ₹19,999. Vadodara.",
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
      h1="Website maintenance AMC for manufacturer sites"
      lead="A catalog that is not updated after launch dies on Google. Maxwell runs monthly care plans: backups, security patches, product edits, form checks, and Search Console watch — so your RFQ site keeps earning enquiries."
      pageDirectAnswer="Website maintenance for manufacturer sites is a monthly AMC, not a one-time launch. Maxwell Care is ₹4,999/month (uptime, backups, two edits). Growth is ₹9,999/month (catalog edits + Search Console). Plant is ₹19,999/month for export catalogs with weekly SKU or certificate changes."
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
            "Care ₹4,999/mo, Growth ₹9,999/mo, Plant ₹19,999/mo — all +18% GST. Website packages stay no-advance. AMC is billed monthly after go-live.",
          paragraphs: [
            "Care: keep the site online and safe — two edits a month. Growth: eight catalog edits, new product pages, monthly GSC note. Plant: priority edits and a quarterly ranking/enquiry call for export catalogs.",
            "You can start AMC on a Maxwell-built site or on a site we take over after a paid health check. We do not lock you into annual prepay.",
          ],
          bullets: [
            "Care ₹4,999/mo — security, backups, 2 edits",
            "Growth ₹9,999/mo — catalog ops + GSC watch (most manufacturers)",
            "Plant ₹19,999/mo — SLA edits + quarterly review",
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
