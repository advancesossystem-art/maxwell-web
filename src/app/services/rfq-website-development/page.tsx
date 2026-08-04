import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/services/rfq-website-development";

export const metadata: Metadata = createMetadata({
  title: "RFQ Website Development for Manufacturers | B2B Quote Portals",
  description:
    "RFQ website development for manufacturers — quote carts, drawing uploads, product inquiry portals. Replace static PDFs with B2B RFQ engines. From ₹45,000.",
  path,
  keywords: [
    "rfq website development for manufacturers",
    "b2b quote catalog development",
    "industrial quote cart system",
    "b2b product inquiry portal",
    "manufacturer RFQ website India",
    "custom RFQ portal website",
  ],
});

export default function RfqWebsiteDevelopmentPage() {
  return (
    <IndustrialServicePage
      path={path}
      breadcrumb="RFQ Website Development"
      eyebrow="B2B RFQ systems · manufacturers"
      h1="RFQ website development for manufacturers"
      lead="Engineers abandon sites that only offer a generic Contact form. Maxwell builds RFQ-ready manufacturer websites — inquiry carts, drawing uploads, MOQ fields, and WhatsApp routing that match plant procurement realities."
      pageDirectAnswer="RFQ website development adds structured quote fields (grade, MOQ, destination, drawings) and WhatsApp routing to manufacturer catalogs — not a consumer checkout cart. Maxwell ships practical RFQ layers from Starter ₹45,000 onward, with deeper multi-line carts on Professional and Growth builds."
      estimateSource="rfq-website"
      schemaName="RFQ Website Development for Manufacturers"
      schemaDescription="Custom RFQ and product inquiry websites for Indian manufacturers from Maxwell Electrodeal."
      sections={[
        {
          heading: "From contact form to RFQ system",
          directAnswer:
            "An RFQ system captures job-ready data — material grade, quantity, tolerance, destination, and optional CAD attachments — so sales can quote without three phone rounds. Generic Contact forms capture vanity leads instead.",
          paragraphs: [
            "A brochure site captures vanity traffic. An RFQ system captures jobs: material grade, quantity, tolerance, destination port, and optional CAD/PDF attachments. That is how industrial buyers actually shortlist vendors online in 2026.",
            "We keep the first release practical — structured enquiry on category and product pages — then upgrade to multi-step RFQ carts or dealer portals when volume justifies them. No bloated marketplace build when a sharp RFQ flow wins more quotes.",
          ],
          bullets: [
            "Per-product and multi-line inquiry patterns",
            "File uploads for drawings (PDF/STEP/DWG where required)",
            "Export / domestic field sets (IEC/GST context as needed)",
            "WhatsApp deep links with prefilled product context",
          ],
        },
        {
          heading: "vs e-commerce style carts",
          directAnswer:
            "WooCommerce-style checkout rarely fits industrial pricing. Manufacturers need quote workflows that feel fast on mobile plant networks — not consumer carts with fixed SKU prices.",
          paragraphs: [
            "WooCommerce-style checkout is rarely right for industrial pricing. Manufacturers need quote workflows, not consumer carts. We design RFQ UX that still feels instant on mobile shop-floor networks.",
          ],
        },
      ]}
      featureGridTitle="RFQ capabilities included"
      features={[
        "Quote request forms with engineering fields",
        "Product context carried into WhatsApp or email",
        "Optional multi-SKU RFQ cart patterns",
        "Lead routing rules (sales / export / region)",
        "Analytics events for RFQ start and complete",
        "Catalog architecture that supports RFQ on every SKU page",
        "GST invoice and full code ownership",
        "No advance payment on website packages — settle within 3 days of go-live",
      ]}
      related={[
        { label: "Industrial website design", href: "/services/industrial-website-design" },
        { label: "Industrial catalog development", href: "/services/industrial-catalog-development" },
        { label: "Industrial website cost estimator", href: "/tools/industrial-website-rfq-estimator" },
        { label: "Dealer portal development", href: "/services/dealer-portal-development" },
        { label: "Owned enquiry channel", href: "/services/website-development/owned-enquiry-channel" },
        { label: "Engineering company websites", href: "/services/website-development/engineering-company" },
        { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
      ]}
    />
  );
}
