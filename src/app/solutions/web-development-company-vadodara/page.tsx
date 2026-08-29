import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { IndustrialServicePage } from "@/components/services/IndustrialServicePage";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";

const path = "/solutions/web-development-company-vadodara";

export const metadata: Metadata = createMetadata({
  title: "Web Development Company Vadodara | From ₹35,000",
  description:
    "Web development company in Vadodara for businesses, startups, retailers & manufacturers. Custom sites, ecommerce, redesign from ₹35,000. AMC ₹15,000. Local office. Request a quote.",
  path,
  keywords: [
    "web development company in vadodara",
    "website development company in vadodara",
    "website development company Vadodara",
    "website developer in vadodara",
    "web developer in vadodara",
    "custom web development vadodara",
    "website development vadodara",
    "affordable corporate website developers vadodara",
    "startup web design agency vadodara",
    "ecommerce website development vadodara",
    "website redesign vadodara",
    "web design company vadodara",
    "website AMC Vadodara",
    "manufacturer website Vadodara",
  ],
});

const audienceSegments = [
  {
    title: "Local businesses & startups",
    href: "/solutions/business-website-vadodara",
    desc: "Clinics, CA firms, traders, dealerships — company sites that rank and convert from ₹35,000.",
    queries: "custom business website design vadodara · startup web design agency",
  },
  {
    title: "E-commerce & retail",
    href: "/solutions/ecommerce-website-vadodara",
    desc: "Online stores with UPI checkout — or B2B catalogs with RFQ when a cart does not fit.",
    queries: "ecommerce website development vadodara · online store vadodara",
  },
  {
    title: "Corporate & redesign",
    href: "/solutions/website-redesign-vadodara",
    desc: "Slow WordPress or brochure sites rebuilt on Next.js — keep domain, fix speed, add enquiry paths.",
    queries: "website redesign vadodara · corporate website revamp",
  },
  {
    title: "Manufacturers & catalogs",
    href: "/services/website-development-for-manufacturers",
    desc: "Product catalogs, RFQ, GIDC SEO — our specialty when you need 50–500 SKU pages.",
    queries: "manufacturer website vadodara · GIDC catalog",
  },
] as const;

const vadodaraFaqs = [
  {
    question: "Who is the best website development company in Vadodara?",
    answer:
      "Maxwell Electrodeal builds business websites, ecommerce stores, and manufacturer catalogs from our Vadodara office. Starter packages from ₹35,000, Professional catalogs from ₹75,000, and monthly AMC from ₹15,000. Live proof: Drashti Chemicals (263 pages, 94/100 mobile PageSpeed). We are a website company — not an ERP or printer dealer.",
  },
  {
    question: "How much does website development cost in Vadodara?",
    answer:
      "Published prices: Starter ₹35,000 (25–30 pages), Professional ₹75,000 (product catalog + RFQ), Growth ₹1,50,000 (large SKU / filters). No advance — pay within 3 days of go-live + 18% GST. Monthly website AMC from ₹15,000.",
  },
  {
    question: "Do you build websites for startups and local businesses — not only factories?",
    answer:
      "Yes. Traders, clinics, retailers, and corporate offices get the same Next.js stack, GST invoice, and published pricing. Manufacturer catalogs are our specialty, not our only client type. See /solutions/business-website-vadodara.",
  },
  {
    question: "Do you build websites for Makarpura, Savli, Nandesari, and Ankleshwar GIDC?",
    answer:
      "Yes. We do plant visits across Vadodara and Bharuch-corridor GIDC estates when the catalog needs shop-floor accuracy. Same published prices — page types change by estate (chemicals vs CNC vs packaging).",
  },
  {
    question: "Is Maxwell an ERP or CRM company?",
    answer:
      "No. This page and our primary offer are websites, SEO, and AMC. We do not sell SAP, custom ERP, or mobile-app factories here. If you need a business website that ranks on Google, we are the right team.",
  },
  {
    question: "How fast can you launch a Vadodara business website?",
    answer:
      "Starter sites typically launch in 21–30 days. Professional catalogs 30–45 days. You get Search Console + sitemap at go-live, WhatsApp on money pages, and full code ownership.",
  },
] as const;

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
        eyebrow="Vadodara · web development · from ₹35,000"
        h1="Web development company in Vadodara"
        lead="Whether you run a clinic in Gotri, a retail store on RC Dutt Road, or a plant in Makarpura GIDC — buyers Google you before they call. We build business websites, ecommerce stores, and manufacturer catalogs that load fast, rank, and send enquiries to WhatsApp. Starter from ₹35,000. Office in Vadodara."
        pageDirectAnswer="Business websites from ₹35,000. Catalogs ₹75,000. AMC ₹15,000/month. GST invoice. Pay after go-live. Local Vadodara team — not a virtual listing. Manufacturer catalogs are our specialty; startups and MSMEs use the same stack."
        estimateSource="web-vadodara"
        schemaName="Web Development Company Vadodara"
        schemaDescription="Web and website development in Vadodara for businesses, ecommerce, and manufacturers from ₹35,000, with monthly AMC from ₹15,000. Maxwell Electrodeal, office in Vadodara."
        faqs={vadodaraFaqs}
        sections={[
          {
            heading: "Who this page is for",
            directAnswer:
              "Any Vadodara business that needs a website — not only GIDC plants. Startups, retailers, professionals, and manufacturers all get published pricing and a GST invoice.",
            paragraphs: [
              "If you searched web development company in Vadodara or website developer in Vadodara, you want a local team that answers the phone and ships pages — not a 40-slide agency deck.",
              "Pick your path below. Manufacturer catalogs are our deepest specialty; company and ecommerce sites use the same Next.js delivery.",
            ],
            bullets: audienceSegments.map((s) => s.title),
          },
          {
            heading: "What a Vadodara business site actually needs",
            directAnswer:
              "Clear services, proof you exist, mobile speed, and a quote path. A ‘Welcome to our company’ homepage does not get a call.",
            paragraphs: [
              "Starter (₹35,000) is 25–30 pages for MSMEs and professionals. Professional (₹75,000) is the catalog most GIDC units need.",
              "We have an office in Vadodara. If the product list is wrong without seeing the shop floor, we come to the gate.",
            ],
            bullets: [
              "WhatsApp on every money page",
              "English pages; Gujarati on key pages if you ask",
              "Search Console + sitemap at go-live",
            ],
          },
          {
            heading: "Keywords Vadodara buyers actually type",
            directAnswer:
              "Local buyers search ‘website development company in Vadodara’, ‘web development company in Vadodara’, ‘website developer in Vadodara’, and product + city terms — not ‘digital transformation partner’.",
            paragraphs: [
              "We write titles, H1s, and service pages to match those queries. Your site should rank for your services — and our company page should rank when someone wants a Vadodara web team with published prices.",
            ],
            bullets: [
              "website development company in vadodara",
              "web development company in vadodara",
              "website developer in vadodara",
              "custom web development vadodara",
              "ecommerce website development vadodara",
              "website redesign vadodara",
            ],
          },
          {
            heading: "How we build and launch",
            directAnswer:
              "Discovery → sitemap → design → Next.js build → content → go-live with Analytics and Search Console. Typical Starter: 21–30 days.",
            paragraphs: [
              "Week 1: products, competitors, and whether we need a plant visit. Week 2–3: pages and enquiry paths. Final week: speed pass, forms to your WhatsApp/email, handover of code and hosting access.",
              "You own the domain, hosting, and source. No plugin rent. Optional AMC keeps rankings and product edits moving after launch.",
            ],
            bullets: [
              "Core Web Vitals targeted 90+ mobile",
              "RFQ / WhatsApp conversion on product pages",
              "Written scope before build — published prices",
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
              "₹35,000 — 25–30 pages, enquiry, SEO setup. ₹75,000 — catalog + RFQ. ₹1,50,000 — large SKU / filters. AMC ₹15,000/month: two product edits, weekly checks, SEO report, two articles.",
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
          "AMC ₹15,000/mo with SEO",
          "GIDC plant visits when the catalog needs it",
          "Next.js — no plugin rent",
          "Code ownership at go-live",
          "Request Quote — written scope",
        ]}
        related={[
          { label: "Business websites Vadodara", href: "/solutions/business-website-vadodara" },
          { label: "Ecommerce Vadodara", href: "/solutions/ecommerce-website-vadodara" },
          { label: "Website redesign Vadodara", href: "/solutions/website-redesign-vadodara" },
          { label: "Web design company Vadodara", href: "/solutions/web-design-company-vadodara" },
          { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
          { label: "Website pricing", href: "/pricing" },
          { label: "Request a quote", href: "/get-estimate" },
          { label: "Website AMC Vadodara", href: "/solutions/website-amc-vadodara" },
          { label: "Gujarat website company", href: "/solutions/web-development-company-gujarat" },
          { label: "Drashti case study", href: "/case-studies/drashti-chemicals" },
        ]}
      />

      <section className="border-b border-slate-200 bg-white py-10">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Website development for every business type
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Same Vadodara team, same published prices — different page types depending on what you sell.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {audienceSegments.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-indigo-300"
              >
                <p className="text-sm font-semibold text-indigo-700">{item.title} →</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                <p className="mt-2 text-xs text-slate-500">{item.queries}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Vadodara GIDC — we know the estates
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Same published prices. The page types change with the estate: chemicals vs CNC vs packaging.
            These are manufacturer website pages — not GIDC company directories.
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
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            Office in Vadodara
          </h2>
          <p className="mt-4 max-w-xl text-slate-700 leading-relaxed">
            <strong>{siteConfig.legalName}</strong>
            <br />
            {businessAddress.publicLabel} — plant visits across Gujarat GIDC when your catalog needs
            them.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Mon–Sat, 9:00 AM – 6:30 PM IST · {siteConfig.phone}
          </p>
        </Container>
      </section>
    </>
  );
}
