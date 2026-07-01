import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import {
  LocationBreadcrumb,
  LocationFAQ,
} from "@/components/locations/LocationSections";
import { businessAddress } from "@/lib/business-address";
import { siteConfig } from "@/lib/constants";
import { socialProfiles } from "@/lib/seo/config";

const services = [
  {
    title: "Website Development",
    description:
      "Product catalog websites, B2B landing pages, and corporate sites for Vadodara manufacturers and industrial companies.",
    href: "/services/website-development",
  },
  {
    title: "Manufacturer Websites",
    description:
      "Standalone websites that generate direct buyer inquiries — replacing IndiaMART dependency for chemical, pharma, and engineering companies in Gujarat.",
    href: "/services/website-development-for-manufacturers",
  },
  {
    title: "Custom ERP",
    description:
      "ERP systems built for Gujarat manufacturers — inventory, production, GST e-invoicing, Tally sync, and multi-plant management.",
    href: "/services/erp-development",
  },
  {
    title: "CRM Software",
    description:
      "Sales pipeline, lead tracking, and follow-up automation for Vadodara's B2B businesses.",
    href: "/services/crm-development",
  },
  {
    title: "AI Solutions",
    description:
      "Computer vision for shop-floor safety, document AI for GST invoices, and forecasting tools for Gujarat manufacturers.",
    href: "/services/ai-solutions",
  },
  {
    title: "Mobile Apps",
    description:
      "Android and iOS apps for field teams, delivery tracking, and customer portals — built for Indian mobile networks.",
    href: "/services/mobile-app-development",
  },
];

const industries = [
  { name: "Chemical Manufacturing", href: "/industries/chemical-manufacturing" },
  { name: "Pharmaceutical", href: "/industries/pharmaceutical" },
  { name: "Engineering & Fabrication", href: "/industries/manufacturing" },
  { name: "Textile & Garments", href: "/services/website-development/textile-manufacturer" },
  { name: "Ceramic (Morbi)", href: "/services/website-development/ceramic-manufacturer" },
  { name: "Food Processing", href: "/services/website-development/food-processing-company" },
  { name: "Education", href: "/industries/education" },
  { name: "Logistics", href: "/industries/logistics" },
  { name: "Healthcare", href: "/industries/healthcare" },
];

const whyVadodara = [
  {
    title: "We're Local",
    body: "Our office is at 419 Lalita Tower, Jetalpur Road, Vadodara. We meet clients in-person across Vadodara, GIDC estates, and the Bharuch-Ankleshwar chemical corridor. No timezone gaps, no language barriers.",
  },
  {
    title: "We Know Gujarat Industry",
    body: "From the 800+ ceramic factories in Morbi to the pharmaceutical hubs of Makarpura, we've built digital systems specifically for how Gujarat's manufacturing sector operates — GST, Tally, and GIDC compliance included.",
  },
  {
    title: "Proven Delivery",
    body: "50+ projects delivered. 4.9/5 client satisfaction. Response within 4 hours. Our Drashti Chemicals case study — a 263-page chemical supplier website in Vadodara — is live evidence of what we deliver.",
  },
];

const vadodaraFaqs = [
  {
    question: "Is Maxwell Electrodeal based in Vadodara?",
    answer: `Yes. Our office is at ${businessAddress.formatted}. We meet clients on-site across Gujarat and deliver pan-India and internationally.`,
  },
  {
    question: "Do you visit factories in Vadodara for ERP discovery?",
    answer:
      "Yes. Shop-floor discovery is standard for manufacturing ERP — we map BOM, job-work, and weighbridge flows before quoting modules.",
  },
  {
    question: "What industries do you serve in Vadodara?",
    answer:
      "Manufacturing, pharma, chemical, engineering, textile, ceramic, education, logistics, and healthcare — typical Golden Corridor verticals.",
  },
  {
    question: "How fast can a Vadodara project start?",
    answer:
      "Discovery can begin within one week. MVPs often launch in 6–10 weeks; ERP rollouts in 3–6 months phased by module.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.legalName,
  image: siteConfig.logoUrl,
  url: siteConfig.url,
  telephone: "+919586868538",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessAddress.streetAddress,
    addressLocality: businessAddress.addressLocality,
    addressRegion: businessAddress.addressRegion,
    postalCode: businessAddress.postalCode,
    addressCountry: businessAddress.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessAddress.latitude,
    longitude: businessAddress.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  priceRange: "₹₹",
  sameAs: socialProfiles,
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software & Website Development in Vadodara",
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "City",
    name: "Vadodara",
    containedInPlace: {
      "@type": "State",
      name: "Gujarat",
      containedInPlace: {
        "@type": "Country",
        name: "India",
      },
    },
  },
  description:
    "Custom software development, website development, ERP, CRM, AI solutions and digital transformation for businesses in Vadodara and across Gujarat.",
  priceRange: "₹75,000 - ₹50,00,000+",
  url: `${siteConfig.url}/locations/india/vadodara`,
};

const WHATSAPP_VADODARA =
  "https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20am%20from%20Vadodara%20and%20want%20to%20discuss%20a%20project.";

export function VadodaraLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background section-hero">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(37,99,235,0.15),transparent)]" />
        <Container className="relative z-10">
          <LocationBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: "India", href: "/locations/india" },
              { label: "Vadodara" },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Gujarat, India
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Software & Website Development Company in Vadodara, Gujarat
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/55">
            Maxwell Electrodeal is headquartered in Vadodara — Gujarat&apos;s industrial and
            pharmaceutical capital. We build custom websites, ERP systems, CRM software, and AI
            solutions for manufacturers, chemical companies, pharma firms, and MSMEs across
            Vadodara, Bharuch, Ankleshwar, Surat, and the rest of Gujarat. Free consultation. GST
            invoice. 100% code ownership.
          </p>
          <p className="mt-3 text-sm text-white/45">Serving Vadodara businesses since 2018</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/get-estimate?source=vadodara-location" size="lg">
              Get Free Estimate <ArrowRight />
            </Button>
            <Button href="/book-consultation?location=Vadodara" size="lg" variant="outline">
              Book Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-surface v6-lp-section" aria-label="Services in Vadodara">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Services We Deliver in Vadodara
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-border bg-surface-elevated p-8 transition-all hover:border-brand-600/25 hover:shadow-lg"
              >
                <h3 className="font-display font-semibold group-hover:text-brand-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="v6-lp-section" aria-label="Industries in Vadodara">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Industries We Serve in Vadodara & Gujarat
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand-600/25 hover:text-brand-700"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Vadodara */}
      <section className="v6-lp-section--lead" aria-label="Why Vadodara businesses choose Maxwell">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Why Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Why Vadodara Businesses Choose Maxwell
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyVadodara.map((col) => (
              <div
                key={col.title}
                className="rounded-2xl border border-border bg-surface-elevated p-8"
              >
                <h3 className="font-display font-semibold">{col.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{col.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case study */}
      <section className="bg-surface v6-lp-section" aria-label="Recent work in Vadodara">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Case Study</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Recent Work in Vadodara
          </h2>
          <div className="mt-10 rounded-3xl border border-brand-600/20 bg-[#030b1f] p-8 text-white md:p-12">
            <h3 className="font-display text-xl font-bold">
              Drashti Chemicals — Industrial Chemical Supplier, Vadodara
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
              263-page product website with 154 chemicals across 47 categories. Built on Next.js
              14. Desktop PageSpeed: 94. Replacing IndiaMART traffic with direct Google inquiries.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-xl">
              {[
                { num: "263", label: "Pages" },
                { num: "154", label: "Products" },
                { num: "94", label: "PageSpeed" },
                { num: "6 Wks", label: "Delivery" },
              ].map((m) => (
                <div key={m.label} className="text-center rounded-xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-indigo-400">{m.num}</p>
                  <p className="mt-1 text-xs text-slate-300">{m.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/case-studies/drashti-chemicals"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
            >
              Read the case study →
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="v6-lp-section border-t border-border" aria-label="Contact Vadodara team">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Talk to Our Vadodara Team
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-muted">
              <p>
                <span className="font-semibold text-[var(--v6-text)]">Address: </span>
                {businessAddress.formatted}
              </p>
              <p>
                <span className="font-semibold text-[var(--v6-text)]">Phone: </span>
                <a href="tel:+919586868538" className="hover:text-brand-600 transition">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-[var(--v6-text)]">Email: </span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-600 transition">
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <Button href="/get-estimate?source=vadodara-location" size="lg">
                Get Free Estimate
              </Button>
              <a
                href={WHATSAPP_VADODARA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:border-brand-600/30 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--v6-border)]">
            <iframe
              title="Maxwell Electrodeal office location — Vadodara, Gujarat"
              src={businessAddress.googleMapsEmbedUrl}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      <LocationFAQ
        faqs={vadodaraFaqs}
        title="Software development in Vadodara"
        locationName="Vadodara"
      />
    </>
  );
}
