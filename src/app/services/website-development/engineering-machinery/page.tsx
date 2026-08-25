import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { engineeringMachineryBlueprintSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: engineeringMachineryBlueprintSeo.title,
  description: engineeringMachineryBlueprintSeo.description,
  path: engineeringMachineryBlueprintSeo.path,
  keywords: [...engineeringMachineryBlueprintSeo.keywords],
});

export default function EngineeringMachineryBlueprintPage() {
  return (
    <IndustryWebsitePage
      industry="Engineering & Machinery OEM"
      location="Makarpura · Savli GIDC · Vadodara engineering belt"
      h1="Website Development for Engineering & Machinery — Makarpura & Savli"
      description="Machine builders and precision engineering firms in Makarpura and Savli need model pages buyers can quote from — capacity, CAD/drawing RFQ, and machinery video — not a PDF brochure. Maxwell engineers RFQ-first Next.js catalogs so plant buyers send drawings and get WhatsApp routes without living only on paid directories."
      canonicalPath={engineeringMachineryBlueprintSeo.path}
      serviceName="Website Development for Engineering & Machinery OEMs"
      directAnswer="Maxwell builds engineering and machinery websites for Makarpura and Savli GIDC OEMs: model catalogs, CAD/drawing RFQ upload, and optional machinery video embeds tuned for Core Web Vitals. Starter ₹35,000 · Professional ₹75,000 · Growth ₹1,50,000 — no advance; pay within 3 days of go-live + 18% GST with 100% IP ownership."
      catalogWireframe={[
        "Model hub: grid of machines with capacity chips and application tags",
        "Model page: specs, footprint, options, short machinery video block",
        "RFQ form: quantity, destination, PDF/STEP/DWG upload",
        "After-sales / spares secondary nav (models stay primary for SEO)",
        "Estate context: Makarpura / Savli GIDC internal links",
      ]}
      specificFeatures={[
        "Indexable machine / model pages with capacity and application sections",
        "RFQ forms with CAD / drawing upload (PDF, STEP, DWG where needed)",
        "Machinery video embeds that protect PageSpeed 90+ targets",
        "After-sales and spares content without burying primary models",
        "Makarpura & Savli GIDC locality SEO + industrial website silos",
        "Export English for international OEMs researching Indian builders",
      ]}
      relatedLinks={[
        { label: "Engineering company website", href: "/services/website-development/engineering-company" },
        { label: "Machinery & OEM spoke", href: "/services/website-development/machinery-oem" },
        { label: "Makarpura GIDC", href: "/locations/india/gujarat/makarpura-gidc" },
        { label: "Savli GIDC", href: "/locations/india/gujarat/savli-gidc" },
        { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
        { label: "RFQ website development", href: "/services/rfq-website-development" },
      ]}
    />
  );
}
