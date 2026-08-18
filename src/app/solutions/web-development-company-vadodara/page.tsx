import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";

const path = "/solutions/web-development-company-vadodara";

export const metadata: Metadata = createMetadata({
  title: "Website Development Company in Vadodara | From ₹35,000 | Maxwell",
  description:
    "Website development company in Vadodara — manufacturer catalogs, GIDC estates, business sites from ₹35,000. AMC ₹11,000/month. Jetalpur Road office. GST invoice. Request a quote.",
  path,
  keywords: [
    "website development company in Vadodara",
    "website development company Vadodara",
    "web development company Vadodara",
    "manufacturer website Vadodara",
    "Makarpura GIDC website",
  ],
});

const gidcAreas = [
  {
    area: "Makarpura GIDC",
    href: "/locations/india/gujarat/makarpura-gidc",
    desc: "Engineering and auto-component plants. Catalog + spec + RFQ, not a PDF brochure.",
  },
  {
    area: "Nandesari GIDC",
    href: "/locations/india/gujarat/nandesari-gidc",
    desc: "Chemicals and intermediates. Product pages with SDS / COA request paths.",
  },
  {
    area: "Savli GIDC",
    href: "/locations/india/gujarat/savli-gidc",
    desc: "Process and auto parts. Pages a purchase manager can search on Google.",
  },
  {
    area: "Waghodia GIDC",
    href: "/locations/india/gujarat/waghodia-gidc",
    desc: "FMCG and packaging. Product list + export enquiry.",
  },
  {
    area: "Halol GIDC",
    href: "/locations/india/gujarat/halol-gidc",
    desc: "Auto, plastics, pharma equipment. Certificates on the page, not in a ZIP file.",
  },
  {
    area: "Ankleshwar GIDC",
    href: "/locations/india/gujarat/ankleshwar-gidc",
    desc: "Chemical belt. CAS-style product pages and export RFQ.",
  },
];

export default function VadodaraWebDevPage() {
  return (
    <>
      <IndustrialServicePage
        path={path}
        breadcrumb="Website Development Vadodara"
        eyebrow="Vadodara · Jetalpur Road · sites from ₹35,000"
        h1="Website development company in Vadodara"
        lead="If your plant is in Makarpura, Savli, Nandesari, or Waghodia, buyers already Google you. We build the site they should open: products, proof, WhatsApp. Starter from ₹35,000. Office on Jetalpur Road — not a ‘virtual Vadodara’ listing."
        pageDirectAnswer="Starter ₹35,000. Catalog ₹75,000. AMC ₹11,000/month. GST invoice. Pay after go-live. Plant visits across Vadodara GIDC. Live proof: Drashti Chemicals catalog."
        estimateSource="web-vadodara"
        schemaName="Website Development Company Vadodara"
        schemaDescription="Website development in Vadodara for manufacturers and MSMEs from ₹35,000, with monthly AMC from ₹11,000. Maxwell Electrodeal, Jetalpur Road."
        sections={[
          {
            heading: "What a Vadodara manufacturer actually needs on a site",
            directAnswer:
              "Product names, grade or size, a certificate if you have one, and a quote path. A ‘Welcome to our company’ homepage does not get a call from Ankleshwar or Pune.",
            paragraphs: [
              "Starter (₹35,000) is 25–30 pages for a business that needs to look real on Google. Professional (₹75,000) is the catalog most GIDC units need.",
              "We sit at 419, Lalita Tower, Near Hotel Rajpath, Jetalpur Road. If the product list is wrong without seeing the shop floor, we come to the gate.",
            ],
            bullets: [
              "WhatsApp on every money page",
              "English pages; Gujarati on key pages if you ask",
              "Search Console + sitemap at go-live",
            ],
          },
          {
            heading: "Proof you can open",
            directAnswer:
              "Drashti Chemicals, Vadodara: 263 pages, 154 products, 94/100 mobile PageSpeed. Live site, not a slide deck.",
            paragraphs: [
              "We do not invent ‘50 factories this year’. One named catalog beats a logo wall.",
            ],
            bullets: [
              "Case study: /case-studies/drashti-chemicals",
              "Live: drashtichemical.com",
              `Call ${siteConfig.phone}`,
            ],
          },
          {
            heading: "Price, in rupees",
            directAnswer:
              "Published tiers. No advance on website packages. Pay within 3 days of go-live + 18% GST.",
            paragraphs: [
              "₹35,000 — 25–30 pages, enquiry, SEO setup. ₹75,000 — catalog + RFQ. ₹1,50,000 — large SKU / filters. AMC ₹11,000/month: two product edits, weekly checks, SEO report, two articles.",
            ],
          },
          {
            heading: "What we will not sell on this page",
            directAnswer: "Websites, SEO, and AMC. Not SAP, not a custom ERP, not a mobile-app factory.",
            paragraphs: [
              "Older Maxwell pages talked software. That is not this offer. Tell us you want a website.",
            ],
          },
        ]}
        featureGridTitle="Vadodara website package"
        features={[
          "Starter ₹35,000 · Professional ₹75,000 · Growth ₹1.5L",
          "AMC ₹11,000/mo with SEO",
          "GIDC plant visits when the catalog needs it",
          "Next.js — no plugin rent",
          "Code ownership at go-live",
          "Request Quote — written scope",
        ]}
        related={[
          { label: "Gujarat website company", href: "/solutions/web-development-company-gujarat" },
          { label: "India website company", href: "/solutions/web-development-company-india" },
          { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
          { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
          { label: "Website pricing", href: "/pricing" },
          { label: "Drashti case study", href: "/case-studies/drashti-chemicals" },
        ]}
      />

      <section className="border-b border-slate-200 bg-white py-10">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Vadodara GIDC — we know the estates
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Same published prices. The page types change with the estate: chemicals vs CNC vs packaging.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gidcAreas.map((item) => (
              <Link
                key={item.area}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-indigo-300"
              >
                <p className="text-sm font-semibold text-indigo-700">{item.area} →</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                Office — Jetalpur Road
              </h2>
              <address className="mt-4 not-italic text-slate-700 leading-relaxed">
                <strong>{siteConfig.legalName}</strong>
                <br />
                {businessAddress.formatted}
              </address>
              <p className="mt-3 text-sm text-slate-600">
                Mon–Sat, 9:00 AM – 6:30 PM IST · {siteConfig.phone}
              </p>
              <a
                href={businessAddress.googleMapsLink}
                className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 min-h-[240px]">
              <iframe
                title="Maxwell Electrodeal office, Jetalpur Road, Vadodara"
                src={businessAddress.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 240 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
