import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustryWebsitePage } from "@/components/services/IndustryWebsitePage";
import { machineryOemSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: machineryOemSeo.title,
  description: machineryOemSeo.description,
  path: machineryOemSeo.path,
  keywords: [...machineryOemSeo.keywords],
});

export default function MachineryOemWebsitePage() {
  return (
    <IndustryWebsitePage
      industry="Machinery & OEM"
      location="India · Gujarat manufacturing clusters"
      h1="Website Development for Machinery & OEM Manufacturers"
      description="Machine builders and OEM suppliers win RFQs when model pages list capacity, tolerances, and typical applications — then route drawings to sales. Maxwell builds machinery and OEM websites for Gujarat plants: model catalogs, application pages, RFQ with file upload, and optional dealer login roadmap after the public site ships."
      canonicalPath={machineryOemSeo.path}
      serviceName="Website Development for Machinery & OEM Manufacturers"
      specificFeatures={[
        "Machine / model pages with capacity and application sections",
        "RFQ forms with drawing upload (PDF / STEP / DWG where needed)",
        "After-sales / spare-parts content blocks without burying primary models",
        "Export English for international OEMs researching Indian builders",
        "Links into industrial website design, RFQ systems, and GIDC estate pages",
      ]}
    />
  );
}
