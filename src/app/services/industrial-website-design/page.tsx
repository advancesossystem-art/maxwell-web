import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/services/industrial-website-design";

export const metadata: Metadata = createMetadata({
  title: "Industrial Website Design | From ₹35,000",
  description:
    "Industrial website design for manufacturers — catalogs, RFQ paths, specs, GIDC SEO. Vadodara HQ from ₹35,000. B2B factory sites that earn enquiries.",
  path,
  keywords: [
    "industrial website design company",
    "industrial website design company Vadodara",
    "b2b manufacturing website development",
    "industrial web design agency",
    "manufacturing website development Gujarat",
    "factory website design India",
    "GIDC manufacturer website design",
    "catalog website for manufacturers",
  ],
});

export default function IndustrialWebsiteDesignPage() {
  return (
    <IndustrialServicePage
      path={path}
      breadcrumb="Industrial Website Design"
      eyebrow="Industrial digital · Vadodara · Gujarat"
      h1="Industrial website design for B2B manufacturers"
      lead="Generic agency pages rarely match how engineers and procurement search. Maxwell builds factory-ready websites: structured product catalogs, RFQ journeys, certificates, and Gujarat GIDC locality — not a PDF brochure online."
      pageDirectAnswer="Industrial website design for manufacturers means HTML product catalogs, RFQ paths, certificates, and GIDC locality SEO — not a flat brochure site. Maxwell Electrodeal builds these from Vadodara starting at ₹35,000 (Starter) with Professional catalogs often from ₹75,000."
      estimateSource="industrial-website-design"
      schemaName="Industrial Website Design"
      schemaDescription="B2B industrial and manufacturing website design with catalogs, RFQ, and SEO from Maxwell Electrodeal Vadodara."
      sections={[
        {
          heading: "Why industrial sites need different architecture",
          directAnswer:
            "Industrial buyers filter by grade, voltage, tolerance, MOQ, and certification. Brochure templates bury those facts in PDFs that neither rank nor convert, so industrial websites need structured specs and RFQ fields on every capability page.",
          paragraphs: [
            "Industrial buyers filter by grade, CAS, voltage, tolerance, MOQ, and certification — not marketing slogans. Static brochure templates bury that data in PDFs Google cannot rank and engineers cannot share as links.",
            "Competitors across Vadodara still sell generic “website packages” with no RFQ depth, no catalog IA, and no estate-level SEO. That gap is where Maxwell wins: manufacturer workflows first, then beautiful UI.",
          ],
          bullets: [
            "HTML spec tables over locked PDF-only catalogs",
            "RFQ / WhatsApp paths on every capability and product page",
            "Core SEO for product + estate + export English queries",
            "Optional dealer login and ERP/PIM feeds when scale justifies them",
          ],
        },
        {
          heading: "Who this is for",
          directAnswer:
            "This service fits chemical, pharma, electrical, machinery, polymer, and fabrication units selling B2B — especially plants across Vadodara-area and Gujarat GIDC estates that need owned enquiries instead of directory-only leads.",
          paragraphs: [
            "Chemical, pharma, electrical, machinery, polymer, and fabrication units selling B2B across India and export markets — especially plants in Makarpura, Savli, Nandesari, and Ankleshwar GIDC estates.",
          ],
        },
        {
          heading: "Realistic ranking window",
          directAnswer:
            "Hyper-local industrial phrases and SKU long-tails often move in 60–90 days after launch. Broad national agency head terms take far longer and convert worse — we prioritise queries that create RFQs.",
          paragraphs: [
            "Hyper-local industrial phrases and SKU long-tails often move in 60–90 days after launch; broad national “website company India” terms take far longer and convert worse. We design for the queries that create RFQs — not vanity head terms alone.",
          ],
        },
      ]}
      featureGridTitle="Industrial website capabilities we ship"
      features={[
        "Multi-level product and capability taxonomy",
        "Spec tables (materials, ratings, grades, packaging)",
        "Certificate and compliance display (ISO, SDS links, export docs)",
        "RFQ forms with MOQ / destination / drawing upload fields",
        "WhatsApp handoff for plant procurement urgency",
        "GIDC + city internal linking (hand-written estate pages)",
        "Core Web Vitals–focused Next.js delivery",
        "Analytics + Search Console setup for RFQ tracking",
      ]}
      related={[
        { label: "RFQ website development", href: "/services/rfq-website-development" },
        { label: "Industrial catalog development", href: "/services/industrial-catalog-development" },
        { label: "Industrial website cost estimator", href: "/tools/industrial-website-rfq-estimator" },
        { label: "Manufacturer websites hub", href: "/services/website-development-for-manufacturers" },
        { label: "Chemical manufacturer websites", href: "/services/website-development/chemical-manufacturers" },
        { label: "Electrical manufacturer websites", href: "/services/website-development/electrical-manufacturer" },
        { label: "Machinery websites", href: "/services/website-development/engineering-machinery" },
        { label: "Vadodara website company", href: "/solutions/web-development-company-vadodara" },
        { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
      ]}
    />
  );
}
