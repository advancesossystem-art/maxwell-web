import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/services/industrial-catalog-development";

export const metadata: Metadata = createMetadata({
  title: "Industrial Product Catalogue Website Development | SKU Catalogs",
  description:
    "Industrial product catalogue website builder for manufacturers — HTML specs, filters, SDS/datasheet links, SEO for 100s–1000s of SKUs. From ₹45,000 / ₹75,000 catalog tiers.",
  path,
  keywords: [
    "industrial product catalogue website builder",
    "industrial catalogue website design",
    "b2b ecommerce catalog software manufacturers",
    "digital product catalog manufacturer India",
    "SKU catalog website development",
    "electrical equipment catalogue website",
  ],
});

export default function IndustrialCatalogDevelopmentPage() {
  return (
    <IndustrialServicePage
      path={path}
      breadcrumb="Industrial Catalog Development"
      eyebrow="Catalog architecture · industrial SKUs"
      h1="Industrial product catalogue website development"
      lead="Organize hundreds or thousands of SKUs so engineers can filter by specification — and Google can index real HTML pages. Maxwell builds industrial catalogues that sell capability, not just company history."
      pageDirectAnswer="An industrial product catalogue website gives each rankable SKU or category an HTML home with specs, documents, and RFQ — so engineers and Google both use the same structure. Maxwell plans taxonomy first; Starter from ₹45,000, Professional multi-category catalogs often from ₹75,000."
      estimateSource="industrial-catalog"
      schemaName="Industrial Catalog Website Development"
      schemaDescription="Industrial product catalog websites with SEO and RFQ for manufacturers by Maxwell Electrodeal."
      sections={[
        {
          heading: "Catalog architecture that ranks and converts",
          directAnswer:
            "Winning industrial catalogs give each rankable unit an HTML page with unique titles, tables, and internal links. PDF-only dumps do not rank for grade, dimension, CAS, or voltage long-tails that create RFQs.",
          paragraphs: [
            "High-intent industrial search is long-tail: part dimensions, polymer grades, CAS numbers, voltage ratings, and application phrases. Winning catalogs give each rankable unit an HTML home with unique titles, tables, and internal links — PDF dumps do not.",
            "We plan taxonomy first (category → sub-category → SKU or capability), control filter crawl risk, and attach RFQ on the pages that matter. Facets stay useful for users without exploding the index.",
          ],
          bullets: [
            "Flat enough hierarchy to reach products in few clicks",
            "Indexable HTML for key categories and hero SKUs",
            "Datasheet / SDS / CAD download patterns where appropriate",
            "RFQ and owned enquiry paths on catalog pages",
          ],
        },
        {
          heading: "ERP and PIM later — catalog first",
          directAnswer:
            "Most plants start from Excel or ERP exports. Launch a clean catalog site first, then connect deeper ERP/PIM sync when product data stewardship is ready — avoiding stalled mega-projects.",
          paragraphs: [
            "Most Gujarat plants start with structured Excel or ERP exports. We launch a clean catalog website first, then connect deeper ERP/PIM sync when product data stewardship is ready. That avoids stalled mega-projects.",
          ],
        },
      ]}
      featureGridTitle="What your catalog website includes"
      features={[
        "Taxonomy design for industrial buyers",
        "Spec tables and comparison-friendly layouts",
        "Search-friendly titles/metas at category and product level",
        "Document vault links (SDS, datasheet, CoA request)",
        "Export English for UAE, Europe, US procurement research",
        "Core SEO package + Search Console setup",
        "Optional multi-language sections for target markets",
        "Mobile-first performance for factory networks",
      ]}
      related={[
        { label: "Industrial website design", href: "/services/industrial-website-design" },
        { label: "RFQ website development", href: "/services/rfq-website-development" },
        { label: "Industrial website cost estimator", href: "/tools/industrial-website-rfq-estimator" },
        { label: "Chemical manufacturer websites", href: "/services/website-development/chemical-manufacturers" },
        { label: "Electrical manufacturer websites", href: "/services/website-development/electrical-manufacturer" },
        { label: "Plastic manufacturer websites", href: "/services/website-development/plastic-manufacturer" },
        { label: "Auto-parts catalogs", href: "/services/website-development/auto-parts-manufacturer" },
        { label: "Manufacturing website cost", href: "/cost/manufacturing-website-cost" },
      ]}
    />
  );
}
