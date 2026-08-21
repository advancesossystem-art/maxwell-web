import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";

const path = "/solutions/web-development-company-india";

export const metadata: Metadata = createMetadata({
  title: "Website Development Company in India | From ₹35,000 | Maxwell",
  description:
    "Website development company in India — business and manufacturer sites from ₹35,000. Catalog + WhatsApp enquiry, SEO, monthly AMC from ₹15,000. Vadodara team, pan-India. GST invoice. Request a quote.",
  path,
  keywords: [
    "website development company in India",
    "website development company India",
    "web development company India",
    "business website development India",
    "manufacturer website India",
    "website cost India",
  ],
});

export default function WebsiteDevelopmentCompanyIndiaPage() {
  return (
    <IndustrialServicePage
      path={path}
      breadcrumb="Website Development India"
      eyebrow="India · websites from ₹35,000 · AMC ₹15,000/mo"
      h1="Website development company in India"
      lead="You need a site buyers can find on Google and message on WhatsApp — not a theme, not an ERP pitch. Maxwell is a Vadodara team that builds business and manufacturer websites for companies anywhere in India. Starter from ₹35,000. No advance. You own the code."
      pageDirectAnswer="Starter website ₹35,000. Catalog ₹75,000. AMC ₹15,000/month. Pay after go-live. GST invoice. We do websites, SEO, and AMC — not ERP."
      estimateSource="web-india"
      schemaName="Website Development Company India"
      schemaDescription="Website development for Indian businesses and manufacturers from ₹35,000, with monthly AMC from ₹15,000. Maxwell Electrodeal, Vadodara."
      sections={[
        {
          heading: "What you actually get",
          directAnswer:
            "A live website with your products or services, a WhatsApp/quote path, Google Search Console, and files in your name. Not a 40-page ‘enterprise’ deck.",
          paragraphs: [
            "Starter (₹35,000) is 25–30 pages: Home, About, Contact, and the service or product pages you need. Forms go to your email and WhatsApp. We set up Analytics and Search Console.",
            "Professional (₹75,000) is a catalog: categories, product pages, RFQ fields (grade, MOQ, city). That is what a plant in Ankleshwar or a trader in Ahmedabad actually uses.",
            "Growth (₹1,50,000) is a large catalog (filters, 200+ SKUs, extra languages if you export). AMC from ₹15,000/month keeps products and Google work going after launch.",
          ],
          bullets: [
            "No advance on website packages — pay within 3 days of go-live + 18% GST",
            "You own domain, hosting login, and source code",
            "Typical first launch window we publish: 4–5 days once content is in",
          ],
        },
        {
          heading: "Who this is for",
          directAnswer:
            "MSME owners and manufacturers who are tired of IndiaMART rent and a site that does not show products. Clinics, traders, and exporters use the same offer — fewer SKUs, same stack.",
          paragraphs: [
            "If you only need five pages for a shop in Pune or a CA firm in Jaipur, say so. We will not force a chemical catalog on you.",
            "If you make chemicals, tiles, machines, or pharma equipment, we already have those page types (CAS, SDS, RFQ, GIDC). HQ is Vadodara; Zoom works for the rest of India.",
          ],
        },
        {
          heading: "What we will not sell you here",
          directAnswer:
            "This page is websites, SEO, and AMC. Not SAP, not a custom ERP, not a mobile app factory.",
          paragraphs: [
            "Older Maxwell pages talked software. That is not the offer now. If a form asks for ERP, ignore it — tell us you want a website.",
          ],
        },
        {
          heading: "Proof, not adjectives",
          directAnswer:
            "Drashti Chemicals (Vadodara): 263 pages, 154 products, 94/100 mobile PageSpeed, live in six weeks. Open the live URL before you book a call.",
          paragraphs: [
            "We do not publish fake ‘500 enterprises’. One named catalog you can click is worth more than a logo wall.",
          ],
          bullets: [
            "Case study: /case-studies/drashti-chemicals",
            "Live: drashtichemical.com",
            "Office: 419, Lalita Tower, Near Hotel Rajpath, Jetalpur Road, Vadodara 390007",
          ],
        },
        {
          heading: "IndiaMART vs your own site",
          directAnswer:
            "Directories rent you a slot next to five competitors. A site you own can rank for your product name. AMC is how it stays updated.",
          paragraphs: [
            "Most owners already pay ₹1.5–3 lakh a year on listings. A ₹35,000 site plus ₹15,000 AMC is a different cost shape: you keep the enquiries.",
          ],
        },
        {
          heading: "How a project actually runs",
          directAnswer:
            "You send products (Excel, photos, old site). We send a written page list and price. You approve. We build. You pay after the site is live.",
          paragraphs: [
            "Week of go-live is 4–5 days once copy and photos are in. If you have 200 SKUs and no photos, the clock starts when the folder is complete — not when you sign.",
            "After launch: Search Console, sitemap, WhatsApp test from your phone. Optional AMC if you want products and Google work to continue.",
          ],
          bullets: [
            "No ‘strategy workshop’ billed as extra unless you ask for a plant visit",
            "You get logins: domain, hosting, CMS or repo — whatever we used",
            "WhatsApp +91 95868 68538 if something breaks in the first month",
          ],
        },
        {
          heading: "Questions owners actually ask",
          directAnswer:
            "Price is published. Timeline needs your content. Ranking is technical SEO plus pages that match how buyers search — not a magic package.",
          paragraphs: [
            "How much? Starter ₹35,000 for 25–30 pages. Catalog ₹75,000. Large SKU sites ₹1,50,000. GST extra.",
            "Do you work outside Gujarat? Yes — Zoom, Drive, WhatsApp. Plant visits are Gujarat-first (Vadodara, Ankleshwar, Halol, Savli, Makarpura).",
            "Will I rank? We set speed, titles, schema, and Search Console. Ranking for a product name needs those product pages to exist. AMC is the monthly work after that.",
          ],
        },
      ]}
      featureGridTitle="India website package, in one list"
      features={[
        "Starter ₹35,000 · Professional ₹75,000 · Growth ₹1.5L",
        "AMC ₹15,000/mo: 2 product edits, weekly checks, SEO report, 2 articles",
        "WhatsApp + quote on money pages",
        "Next.js — no plugin rent",
        "Pan-India delivery from Vadodara",
        "Request Quote — written scope, no ‘call for price’",
      ]}
      related={[
        { label: "Vadodara website company", href: "/solutions/web-development-company-vadodara" },
        { label: "Gujarat website company", href: "/solutions/web-development-company-gujarat" },
        { label: "Website pricing", href: "/pricing" },
        { label: "Website AMC", href: "/services/website-maintenance" },
        { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
        { label: "SEO services", href: "/services/website-seo" },
        { label: "Drashti case study", href: "/case-studies/drashti-chemicals" },
      ]}
    />
  );
}
