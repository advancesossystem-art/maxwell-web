import type { Metadata } from "next";
import { SolutionLandingPage } from "@/components/solutions/SolutionLandingPage";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { AsymmetricTcoCalculator } from "@/components/conversion/AsymmetricTcoCalculator";
import { TCO_FAQ_ANSWER } from "@/lib/tco-model";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Page Metadata                                                        */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Development Company Vadodara | From ₹45,000 | Maxwell Electrodeal",
  },
  description:
    "Website development company in Vadodara — manufacturer catalogs, GIDC estates, Next.js sites from ₹45,000 (25–30 pages + core SEO). Owned enquiries, 94+ PageSpeed, GST invoice. Free estimate.",
  keywords: [
    "website development company in Vadodara",
    "website development company Vadodara",
    "website developer in Vadodara",
    "web development company Vadodara",
    "custom web development Vadodara",
    "website development services Vadodara",
    "Next.js website development Vadodara",
    "best website developer Vadodara",
    "manufacturer website Vadodara",
    "Makarpura GIDC website",
    "website development Vadodara Gujarat",
  ],
  alternates: {
    canonical: `${siteConfig.url}/solutions/web-development-company-vadodara`,
    languages: {
      "en-IN": `${siteConfig.url}/solutions/web-development-company-vadodara`,
      en: `${siteConfig.url}/solutions/web-development-company-vadodara`,
      "x-default": `${siteConfig.url}/solutions/web-development-company-vadodara`,
    },
  },
  openGraph: {
    title: "Custom Website Development Company in Vadodara | Maxwell Electrodeal",
    description:
      "Stop losing customers to slow, outdated websites. Leverage high-performance Next.js 14 websites with 94+ PageSpeed, 100% custom codebase ownership, and built-in SEO — built by Vadodara's specialist web engineering team.",
    url: `${siteConfig.url}/solutions/web-development-company-vadodara`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Website Development Company Vadodara — Maxwell Electrodeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development Company in Vadodara | Maxwell Electrodeal",
    description:
      "High-performance Next.js 14 websites for Vadodara businesses — 94+ PageSpeed, zero plugin costs, 100% code ownership. Free TCO analysis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara",
    "geo.position": `${businessAddress.latitude};${businessAddress.longitude}`,
    ICBM: `${businessAddress.latitude}, ${businessAddress.longitude}`,
  },
};

/* ------------------------------------------------------------------ */
/*  Structured Data                                                      */
/* ------------------------------------------------------------------ */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  image: siteConfig.logoUrl,
  url: `${siteConfig.url}/solutions/web-development-company-vadodara`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₹₹",
  description:
    "Website development company in Vadodara specialising in custom Next.js 14 websites, manufacturer product catalogs, and conversion-focused corporate sites with 94+ PageSpeed scores.",
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
    closes: "18:30",
  },
  areaServed: [
    { "@type": "City", name: "Vadodara" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Website Development",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Website Development",
          description:
            "Custom Next.js 14 corporate websites with 94+ PageSpeed, SEO schema, and conversion-optimised layouts.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "45000",
          priceCurrency: "INR",
          name: "Starting price for business website",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manufacturer Product Catalog Website",
          description:
            "B2B product catalog websites for Gujarat manufacturers — spec sheets, RFQ forms, export-ready content.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "300000",
          priceCurrency: "INR",
          name: "Starting price for manufacturer catalog",
        },
      },
    ],
  },
  sameAs: ["https://www.linkedin.com/company/maxwellelectrodeal", siteConfig.url],
  foundingDate: "2018",
};

const tcoFaqItems = [
  {
    question: "Why is a custom Next.js website cheaper than a WordPress site over 3 years?",
    answer:
      "A standard WordPress site in Vadodara costs ₹25,000 upfront but adds ₹54,000/year in plugin licences (₹15,000), hosting (₹8,000), maintenance (₹12,000), and developer overhead (₹14,000) — totalling ₹1,87,000 over 3 years excluding performance loss. Maxwell's custom Next.js site starts at ₹75,000 with only ₹15,000/year in cloud hosting and core maintenance, totalling ₹1,20,000 — saving you ₹67,000 in direct operating costs and eliminating performance revenue loss.",
  },
  {
    question: "How much does website development cost in Vadodara?",
    answer:
      "Starter business websites start from ₹45,000 (25–30 pages + core SEO). Professional manufacturer product catalog websites often start at ₹75,000. Larger Growth builds for 200+ SKUs are scoped after discovery. Website packages: no advance payment — full payment within 3 days after go-live (+18% GST). Response typically within 4 hours.",
  },
  {
    question: "Who is the best website development company in Vadodara?",
    answer:
      "Look for a GST-registered company with published case studies, Core Web Vitals above 90, clear payment terms, and the ability to visit your site or factory. Maxwell Electrodeal is headquartered at 419 Lalita Tower, Jetalpur Road, Vadodara and has delivered 50+ projects including a 263-page chemical supplier product catalog.",
  },
  {
    question: "What is the total cost of ownership (TCO) of a Vadodara website?",
    answer: TCO_FAQ_ANSWER,
  },
  {
    question: "Do you visit manufacturing facilities in Vadodara for discovery?",
    answer:
      "Yes. Maxwell Electrodeal conducts on-site discovery workshops at GIDC Makarpura, GIDC Savli, Halol GIDC, Bharuch-Ankleshwar chemical belt, and city offices across Vadodara. On-site visits ensure product catalogs, RFQ forms, and content accurately reflect your industrial workflows.",
  },
  {
    question: "Why does the website ranking position matter for Vadodara manufacturers?",
    answer:
      "B2B buyers research vendors on Google before calling or visiting trade fairs. A manufacturer ranking on page 1 for relevant queries captures direct enquiries at far lower cost than perpetual paid directory listing fees. Maxwell builds SEO-first Next.js websites designed to rank for your industry and location keywords.",
  },
  {
    question: "Do you build export-ready websites for Vadodara manufacturers?",
    answer:
      "Yes. We build English-language product catalogs with spec sheets, certification badges, container inquiry forms, and SEO targeting international buyer search terms — helping Vadodara exporters in chemicals, pharma, engineering, and FMCG bypass third-party directories and capture buyer enquiries directly.",
  },
  {
    question: "Why Next.js 14 instead of WordPress for Vadodara businesses?",
    answer:
      "Next.js 14 delivers server-rendered SEO, sub-2-second LCP scores, zero plugin vulnerability surface, and headless architecture for content updates without developer involvement — critical for Google and AI search visibility in 2026. WordPress plugins introduce recurring costs, security gaps, and Core Web Vitals failures that suppress rankings.",
  },
];

/* ------------------------------------------------------------------ */
/*  Section: Verified Local Case Profiles                               */
/* ------------------------------------------------------------------ */

function LocalCaseProfilesSection() {
  const profiles = [
    {
      badge: "Verified — Gujarat Chemical Industry",
      company: "Drashti Chemicals — GIDC Nandesari, Vadodara",
      industry: "Specialty Chemical Manufacturer",
      stack: ["React", "Node.js", "PostgreSQL", "AWS", "Tally Prime"],
      challenge:
        "Batch records, customer quotes, and MSDS files were disconnected and trapped in manual spreadsheets, creating shipping delays and audit preparation crises that stretched to 14 days.",
      solution:
        "Maxwell Electrodeal built a unified platform featuring batch genealogy tracking, a version-controlled SDS document vault, automated GHS label generation, and full Tally Prime integration — deployed in phased sprints.",
      outcomes: [
        { metric: "99.5%", label: "Batch Trace Accuracy" },
        { metric: "48 hrs", label: "Audit Prep (was 14 days)" },
        { metric: "35%", label: "Less Manual Shop-Floor Entry" },
      ],
      accent: "blue",
      href: "/case-studies/drashti-chemicals",
    },
    {
      badge: "Verified — GIDC Nandesari Corridor",
      company: "Specialty Chemicals Manufacturer — GIDC Nandesari",
      industry: "Industrial Chemical Intermediates",
      stack: ["React", "Node.js", "PostgreSQL", "AWS"],
      challenge:
        "Hazardous materials inventory spread across tank farms and drum warehouses with no system-enforced segregation rules or automated GHS/SDS documentation vault.",
      solution:
        "Built a secure MSDS/SDS document vault with version approval workflows, a hazmat inventory management system with UN classification flags, and drum/tank location tracking linked to dispatch checklists.",
      outcomes: [
        { metric: "100%", label: "GHS/SDS Coverage" },
        { metric: "0", label: "Dispatch Holds for Missing Docs" },
        { metric: "Clean", label: "Internal HSE Audits" },
      ],
      accent: "teal",
      href: "/industries/chemical-manufacturing",
    },
    {
      badge: "Verified — GIDC Makarpura, Vadodara",
      company: "Precision Engineering Exporter — GIDC Makarpura",
      industry: "B2B Engineering Component Export",
      stack: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS"],
      challenge:
        "International buyers could not find the company on Google and had no way to submit RFQs without using third-party B2B directories that charged listing fees and shared leads with competitors.",
      solution:
        "Built a multi-language B2B export catalog with specification sheets, product categorization by DIN/IS standards, direct RFQ submission forms, and country-targeted SEO for English-speaking markets.",
      outcomes: [
        { metric: "94+", label: "PageSpeed Score" },
        { metric: "Direct", label: "Buyer RFQs — No Directory" },
        { metric: "WHO-GMP", label: "Compliant API Catalog Format" },
      ],
      accent: "indigo",
      href: "/services/website-development-for-manufacturers",
    },
  ];

  const accentMap: Record<string, { badge: string; metric: string; border: string; bg: string }> = {
    blue: {
      badge: "bg-blue-100 text-blue-700",
      metric: "text-blue-600",
      border: "border-blue-100",
      bg: "bg-blue-50/50",
    },
    teal: {
      badge: "bg-teal-100 text-teal-700",
      metric: "text-teal-600",
      border: "border-teal-100",
      bg: "bg-teal-50/50",
    },
    indigo: {
      badge: "bg-indigo-100 text-indigo-700",
      metric: "text-indigo-600",
      border: "border-indigo-100",
      bg: "bg-indigo-50/50",
    },
  };

  return (
    <section
      id="verified-case-profiles"
      aria-label="Verified local industrial case profiles"
      className="border-t border-gray-200 bg-gray-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Legally Compliant Industrial Proof
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Real Vadodara & Gujarat Industrial Outcomes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Every profile below is based on a delivered engagement. No invented testimonials — measured
            business outcomes with verifiable technical stacks.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {profiles.map((p) => {
            const colors = accentMap[p.accent];
            return (
              <article
                key={p.company}
                className={`flex flex-col rounded-2xl border ${colors.border} ${colors.bg} p-6 shadow-sm`}
              >
                <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${colors.badge} mb-3`}>
                  {p.badge}
                </span>

                <h3 className="font-display text-base font-bold text-gray-900 leading-snug">
                  {p.company}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {p.industry}
                </p>

                {/* Tech stack pills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md bg-white border border-gray-200 px-2 py-0.5 text-xs text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700">Challenge</p>
                    <p className="mt-1 text-gray-500 leading-relaxed">{p.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Solution</p>
                    <p className="mt-1 text-gray-500 leading-relaxed">{p.solution}</p>
                  </div>
                </div>

                {/* Outcome metrics */}
                <div className={`mt-5 grid grid-cols-3 gap-2 rounded-xl bg-white border ${colors.border} p-3`}>
                  {p.outcomes.map((o) => (
                    <div key={o.label} className="text-center">
                      <p className={`text-lg font-extrabold ${colors.metric}`}>{o.metric}</p>
                      <p className="text-xs text-gray-500 leading-tight mt-0.5">{o.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  View full details →
                </Link>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          All outcomes are from documented project deliveries. Identity details of individual
          client contacts are omitted in line with our privacy policy.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Local E-E-A-T Contact & Map                               */
/* ------------------------------------------------------------------ */

function LocalEeatSection() {
  const openingHours = [
    { days: "Monday – Friday", hours: "9:00 AM – 6:30 PM" },
    { days: "Saturday", hours: "9:00 AM – 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ];

  const trustSignals = [
    { label: "Legal Entity", value: "Maxwell Electrodeal Private Limited" },
    { label: "Founded", value: "2018 — Vadodara, Gujarat" },
    { label: "Projects Delivered", value: "50+ across India & globally" },
    { label: "Response Time", value: "≤ 4 business hours guaranteed" },
    { label: "Billing", value: "GST invoice on every project" },
    { label: "Code Ownership", value: "100% IP transfer on go-live" },
  ];

  return (
    <section
      id="local-contact-eeeat"
      aria-label="Local office and contact information"
      className="border-t border-gray-200 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Local Presence — Vadodara Headquarters
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Visit Us or Call — We Are Based Here in Vadodara
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            We are not a remote-only vendor. Our team meets clients at your office or factory and is
            available in-person across Vadodara, GIDC corridors, and Bharuch-Ankleshwar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: address + trust signals */}
          <div className="flex flex-col gap-6">
            {/* Address card */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Registered Office
              </p>
              <address className="not-italic text-gray-700 leading-relaxed text-sm">
                <strong className="text-gray-900 font-semibold">Maxwell Electrodeal Private Limited</strong><br />
                {businessAddress.streetAddress},<br />
                {businessAddress.addressLocality}, {businessAddress.addressRegion}{" "}
                {businessAddress.postalCode}, India
              </address>
              <div className="mt-4 space-y-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.email}
                </a>
                <a
                  href={businessAddress.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Office Hours
              </p>
              <ul className="space-y-2">
                {openingHours.map((h) => (
                  <li key={h.days} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{h.days}</span>
                    <span className="font-medium text-gray-800">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust signals (E-E-A-T) */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Business Verification
              </p>
              <ul className="space-y-2">
                {trustSignals.map((ts) => (
                  <li key={ts.label} className="flex items-start justify-between gap-4 text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-500 flex-shrink-0">{ts.label}</span>
                    <span className="font-medium text-gray-800 text-right">{ts.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm h-80 lg:h-full min-h-[320px]">
              <iframe
                title="Maxwell Electrodeal — Vadodara Office Location, Jetalpur Road"
                src={businessAddress.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Maxwell Electrodeal office at Lalita Tower, Jetalpur Road, Vadodara"
              />
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="font-display text-sm font-semibold text-blue-800 mb-2">
                On-site Discovery Available
              </p>
              <p className="text-sm text-blue-700 leading-relaxed">
                We conduct in-person discovery workshops across Vadodara — GIDC Makarpura, GIDC
                Savli, Halol, and Bharuch-Ankleshwar chemical belt. No extra charge.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "GIDC Makarpura", href: "/locations/india/gujarat/makarpura-gidc" },
                  { label: "GIDC Savli", href: "/locations/india/gujarat/savli-gidc" },
                  { label: "Nandesari GIDC", href: "/locations/india/gujarat/nandesari-gidc" },
                  { label: "Halol GIDC", href: "/locations/india/gujarat/halol-gidc" },
                  { label: "Ankleshwar GIDC", href: "/locations/india/gujarat/ankleshwar-gidc" },
                  { label: "All Gujarat GIDC", href: "/locations/india/gujarat/gidc" },
                ].map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="rounded-full bg-white border border-blue-200 px-3 py-1 text-xs font-medium text-blue-700 hover:border-blue-400"
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/book-consultation"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Book a Free On-Site Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Root Component                                                  */
/* ------------------------------------------------------------------ */

export default function VadodaraWebDevPage() {
  const solution = getSolutionBySlug("web-development-company-vadodara");
  if (!solution) notFound();

  return (
    <>
      {/* Enhanced ProfessionalService LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* TCO-focused FAQPage schema targeting voice / AI search */}
      <FaqPageJsonLd
        faqs={tcoFaqItems}
        id={`${siteConfig.url}/solutions/web-development-company-vadodara#faq`}
        name="Website Development Company Vadodara — Frequently Asked Questions"
      />

      {/* Standard solution page (hero, market insights, challenges, approach, ROI, case studies, FAQ, CTA) */}
      <SolutionLandingPage solution={solution} />

      {/* ── Hyper-local industry depth — Vadodara neighborhoods & industrial areas ── */}
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Vadodara Industrial Map
          </p>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">
            We Know Every Industrial Pocket of Vadodara and Gujarat
          </h2>
          <p className="max-w-3xl text-gray-600 leading-relaxed mb-8">
            Unlike remote-delivery agencies, Maxwell Electrodeal visits your site. We have built
            websites and systems for manufacturers across every major industrial corridor in
            Vadodara and Gujarat — from the chemical belt in Nandesari to the engineering clusters
            in Gorwa and the pharma API suppliers in Padra.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                area: "Makarpura GIDC, Vadodara",
                href: "/locations/india/gujarat/makarpura-gidc",
                desc: "Precision engineering, auto components, and industrial equipment manufacturers. We build product catalog websites with spec sheets and RFQ forms for Makarpura OEMs targeting Tier-1 buyers.",
              },
              {
                area: "Nandesari GIDC, Vadodara",
                href: "/locations/india/gujarat/nandesari-gidc",
                desc: "Specialty chemical manufacturers, industrial chemical intermediates, and pharmaceutical API suppliers. Full catalog sites with SDS downloads, COA request forms, and hazard-class product pages.",
              },
              {
                area: "Savli GIDC, Vadodara",
                href: "/locations/india/gujarat/savli-gidc",
                desc: "Process manufacturing, auto parts, and industrial gases. B2B supplier websites with technical specification pages that procurement managers find on Google.",
              },
              {
                area: "Gorwa, Vadodara",
                desc: "Precision engineering and machine shops serving the Vadodara auto corridor. We build websites that showcase CNC capabilities, tolerance data, and export certifications for Gorwa engineering firms.",
              },
              {
                area: "Waghodia GIDC, Vadodara",
                href: "/locations/india/gujarat/waghodia-gidc",
                desc: "FMCG, food processing, and packaging manufacturers. Product portfolio websites with export inquiry flows for Waghodia manufacturers targeting domestic and international buyers.",
              },
              {
                area: "Ankleshwar GIDC, Bharuch",
                href: "/locations/india/gujarat/ankleshwar-gidc",
                desc: "India's largest chemical manufacturing cluster — chlor-alkali, dyes, surfactants, and specialty chemicals. Export-ready websites with CAS number product pages and international buyer inquiry flows.",
              },
              {
                area: "Halol GIDC, Panchmahal",
                href: "/locations/india/gujarat/halol-gidc",
                desc: "Auto components, plastics, and pharma manufacturers. Tier-2 supplier websites with OEM compliance pages, quality certificates, and digital catalogs for Halol industrial estate.",
              },
              {
                area: "Padra, Vadodara",
                desc: "Pharma API manufacturers and bulk drug suppliers. WHO-GMP compliant catalog formats with pharmacopeia specification pages and export registration documentation.",
              },
              {
                area: "Vatva GIDC, Ahmedabad",
                href: "/locations/india/gujarat/vatva-gidc",
                desc: "Dyes, pigments, agrochemicals, and textile chemicals. Category-depth websites with shade card displays, technical data sheets, and export inquiry forms for Vatva chemical exporters.",
              },
            ].map((item) => (
              <div key={item.area} className="rounded-xl border border-gray-200 bg-white p-5">
                {item.href ? (
                  <Link href={item.href} className="font-semibold text-blue-700 hover:text-blue-900 text-sm mb-1 block">
                    {item.area} →
                  </Link>
                ) : (
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.area}</p>
                )}
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional sections from the SEO brief ── */}

      {/* 1. Interactive TCO calculator (shared sitewide model) */}
      <AsymmetricTcoCalculator
        id="tco-comparison"
        title="The Total Cost of Ownership (TCO) Model for Vadodara Businesses"
        subtitle="Cheap websites are rarely cheap. Adjust the lifecycle slider to see how WordPress hidden costs compare to a Maxwell Next.js Professional build."
        source="vadodara-tco"
      />

      {/* 2. Verified local industrial case profiles */}
      <LocalCaseProfilesSection />

      <section className="border-t border-gray-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900">
            Vadodara depth: what we build for local manufacturers
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Beyond corporate brochure sites, Vadodara buyers need product architecture, enquiry
            ownership, and estate-aware SEO. Starter launches from ₹45,000 cover 25–30 pages with
            core SEO; Professional catalogs (often ₹75,000) add category depth for multi-SKU plants
            in Makarpura, Savli, Nandesari, and Halol.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
            <li>• Owned enquiry websites vs yearly paid directory renewals</li>
            <li>• Manufacturer hub with chemical, engineering, pharma verticals</li>
            <li>• GIDC estate landing pages with locality internal links</li>
            <li>• Optional dealer portals after the public catalog ships</li>
            <li>• Published cost pages for Vadodara and manufacturing scopes</li>
            <li>• SEO company engagements for technical + topical clusters</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/services/website-development-for-manufacturers"
              className="font-medium text-blue-600 hover:underline"
            >
              Manufacturer websites hub →
            </Link>
            <Link href="/locations/india/gujarat/gidc" className="font-medium text-blue-600 hover:underline">
              Gujarat GIDC hub →
            </Link>
            <Link
              href="/cost/web-development-cost-vadodara"
              className="font-medium text-blue-600 hover:underline"
            >
              Vadodara website cost →
            </Link>
            <Link
              href="/services/website-development/owned-enquiry-channel"
              className="font-medium text-blue-600 hover:underline"
            >
              Owned enquiry channel →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Local E-E-A-T contact + Google Maps */}
      <LocalEeatSection />
    </>
  );
}
