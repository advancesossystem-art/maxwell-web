import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/solutions/web-development-company-gujarat";

export const metadata: Metadata = createMetadata({
  title: "Website Development Company in Gujarat | From ₹35,000 | Maxwell",
  description:
    "Website development company in Gujarat — manufacturer catalogs, MSME sites, GIDC SEO. From ₹35,000. AMC ₹15,000/month. Vadodara HQ. Ahmedabad, Surat, Rajkot, Morbi, Ankleshwar. Request a quote.",
  path,
  keywords: [
    "website development company in Gujarat",
    "website development company Gujarat",
    "web development company Gujarat",
    "manufacturer website Gujarat",
    "website company Ahmedabad Surat Rajkot",
  ],
});

export default function WebsiteDevelopmentCompanyGujaratPage() {
  return (
    <IndustrialServicePage
      path={path}
      breadcrumb="Website Development Gujarat"
      eyebrow="Gujarat · Vadodara HQ · sites from ₹35,000"
      h1="Website development company in Gujarat"
      lead="If you make chemicals, tiles, machines, or textiles in Gujarat, buyers already Google you before they call. Maxwell builds the site they should land on: products, proof, WhatsApp. Starter from ₹35,000. We sit in Vadodara — not a Delhi agency with a Gujarat keyword."
      pageDirectAnswer="Starter ₹35,000. Catalog ₹75,000. AMC ₹15,000/month. GST invoice. Pay after go-live. Plant visits across Vadodara GIDC, Ankleshwar, Halol, Savli, Makarpura."
      estimateSource="web-gujarat"
      schemaName="Website Development Company Gujarat"
      schemaDescription="Website development for Gujarat manufacturers and MSMEs from ₹35,000, with monthly AMC from ₹15,000. Maxwell Electrodeal, Vadodara."
      sections={[
        {
          heading: "What Gujarat buyers look for on a vendor site",
          directAnswer:
            "Grade, capacity, city, certificates, and a way to ask for a quote. A slider and a ‘Welcome to our company’ paragraph does not do that.",
          paragraphs: [
            "Ankleshwar and Nandesari plants need CAS / SDS / COA paths. Morbi exporters need size, finish, and container enquiry. Rajkot and Makarpura shops need drawings and RFQ fields — not a PDF brochure.",
            "Starter (₹35,000) covers a business site. Professional (₹75,000) is the catalog most GIDC units actually need.",
          ],
          bullets: [
            "English pages for domestic and export buyers",
            "WhatsApp on every money page",
            "GIDC and city pages when they match how you get found",
          ],
        },
        {
          heading: "Where we show up",
          directAnswer:
            "Office: 419, Lalita Tower, Near Hotel Rajpath, Jetalpur Road, Vadodara. We visit plants when the catalog is wrong without walking the floor.",
          paragraphs: [
            "Ahmedabad, Surat, Rajkot, Bharuch, and Morbi work over Zoom if you can send product photos and an Excel list. We will not pretend we have a branch in every city.",
          ],
          bullets: [
            "Vadodara — Makarpura, Savli, Nandesari, Waghodia, Padra",
            "Bharuch belt — Ankleshwar, Panoli",
            "Halol, Ahmedabad (Vatva), Surat, Rajkot, Morbi on scoped visits",
          ],
        },
        {
          heading: "Proof you can open",
          directAnswer:
            "Drashti Chemicals, Vadodara: 263 pages, 154 products, 94/100 mobile PageSpeed. Live site, not a mockup.",
          paragraphs: [
            "We do not invent ‘100 Gujarat factories’. One named catalog beats a logo wall.",
          ],
        },
        {
          heading: "Price, in rupees",
          directAnswer:
            "Same published tiers as the rest of India. Gujarat GST invoice. No advance on website packages.",
          paragraphs: [
            "₹35,000 — 25–30 pages, enquiry, SEO setup. ₹75,000 — catalog + RFQ. ₹1,50,000 — large SKU / filters. AMC ₹15,000/month: two product edits, weekly checks, SEO report, two articles.",
          ],
        },
      ]}
      featureGridTitle="Gujarat website package"
      features={[
        "Starter ₹35,000 · Professional ₹75,000 · Growth ₹1.5L",
        "AMC ₹15,000/mo with SEO",
        "Manufacturer catalogs, not brochure PDFs",
        "GIDC-aware internal links",
        "Code ownership at go-live",
        "Request Quote — written scope",
      ]}
      related={[
        { label: "Vadodara website company", href: "/solutions/web-development-company-vadodara" },
        { label: "India website company", href: "/solutions/web-development-company-india" },
        { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
        { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
        { label: "Website pricing", href: "/pricing" },
        { label: "Drashti case study", href: "/case-studies/drashti-chemicals" },
      ]}
    />
  );
}
