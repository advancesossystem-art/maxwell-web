import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { siteConfig, WHATSAPP_HREF_CONTACT } from "@/lib/constants";
import { manufacturerHubSeo } from "@/lib/manufacturer-website-seo";

export const metadata: Metadata = createMetadata({
  title: manufacturerHubSeo.title,
  description: manufacturerHubSeo.description,
  path: manufacturerHubSeo.path,
  keywords: [...manufacturerHubSeo.keywords],
});

const industries = [
  {
    emoji: "⚗️",
    name: "Chemical Manufacturers",
    desc: "Product catalogs, MSDS downloads, and inquiry forms for chemical suppliers.",
    href: "/services/website-development/chemical-manufacturer",
  },
  {
    emoji: "💊",
    name: "Pharmaceutical Companies",
    desc: "WHO-GMP display, API product catalogs, and international buyer forms.",
    href: "/services/website-development/pharmaceutical-company",
  },
  {
    emoji: "⚙️",
    name: "Engineering Companies",
    desc: "Technical spec sheets, RFQ forms, and ISO certification display for GIDC manufacturers.",
    href: "/services/website-development/engineering-company",
  },
  {
    emoji: "🧵",
    name: "Textile Manufacturers",
    desc: "Fabric swatch galleries, sample request forms, and export-ready product pages.",
    href: "/services/website-development/textile-manufacturer",
  },
  {
    emoji: "🏺",
    name: "Ceramic Manufacturers",
    desc: "Tile catalogs with size, finish, and PEI ratings — targeting Morbi's 800+ factories.",
    href: "/services/website-development/ceramic-manufacturer",
  },
  {
    emoji: "🥫",
    name: "Food Processing Companies",
    desc: "FSSAI-linked product pages and export compliance content.",
    href: "/services/website-development/food-processing-company",
  },
  {
    emoji: "🔧",
    name: "Auto Parts Manufacturers",
    desc: "Part catalogs with OEM fitment data and B2B RFQ workflows.",
    href: "/services/website-development/auto-parts-manufacturer",
  },
  {
    emoji: "🎨",
    name: "Paint & Coating Companies",
    desc: "Product range pages, shade cards, and technical data sheets for Ankleshwar corridor.",
    href: "/services/website-development/paint-coating-company",
  },
  {
    emoji: "♻️",
    name: "Plastic Manufacturers",
    desc: "Grade specifications, material data, and direct B2B inquiry forms.",
    href: "/services/website-development/plastic-manufacturer",
  },
  {
    emoji: "🌍",
    name: "Exporters & Trading Companies",
    desc: "International buyer acquisition pages with country-specific inquiry forms.",
    href: "/services/website-development/exporter-india",
  },
];

const features = [
  "Product catalog pages for all your items — with search, filtering, and inquiry forms",
  "Google-optimized content so buyers find you when searching your product category",
  "WhatsApp and direct inquiry integration — leads come to you, not a marketplace",
  "Mobile-first design — most B2B buyers in India browse on mobile",
  "GST-compliant contact and quote request forms",
  "Optional: multi-language support for export markets (Hindi, Arabic, French)",
];

const pricingTiers = [
  {
    name: "Starter",
    price: "₹75,000",
    highlight: false,
    features: [
      "Up to 15 pages",
      "Product listing (up to 50 products)",
      "Contact + WhatsApp inquiry form",
      "Basic on-page SEO",
      "Mobile responsive",
      "1 month support",
    ],
    bestFor: "Small manufacturers, single product category",
  },
  {
    name: "Professional",
    price: "₹1,50,000",
    highlight: true,
    features: [
      "Up to 60 pages",
      "Full product catalog (up to 200 products) with search + filter",
      "Category pages optimized for Google",
      "GST quote request forms",
      "Google Analytics + Search Console setup",
      "3 months support",
    ],
    bestFor: "Mid-size manufacturers with multiple product lines",
  },
  {
    name: "Enterprise",
    price: "₹3,00,000+",
    highlight: false,
    features: [
      "Unlimited pages (programmatic generation)",
      "200+ products with dynamic filtering",
      "Multi-language support",
      "ERP/CRM integration",
      "Monthly SEO reporting",
      "12 months support",
    ],
    bestFor: "Large manufacturers targeting international export markets",
  },
];

const faqs = [
  {
    q: "How is your website better than my IndiaMART listing?",
    a: "Your IndiaMART listing puts you next to 20 competitors. Your own website shows only you — and Google sends buyers directly to your catalog, WhatsApp, or phone number. You own the leads.",
  },
  {
    q: "Will buyers actually find my website on Google?",
    a: "Yes, if it's built correctly. We optimize every product category page for the search terms your buyers use. For example, if someone searches 'industrial defoamer supplier India', your product page should appear — not IndiaMART's listing.",
  },
  {
    q: "How long does it take to build?",
    a: "6–8 weeks for a Professional plan. We start with a detailed discovery session to understand your product catalog, then deliver a staging site within 4 weeks for your review.",
  },
  {
    q: "Do I need to maintain the website myself?",
    a: "No. We build a simple content management system so your team can update product details and prices without touching code. We also offer maintenance packages.",
  },
  {
    q: "Can you migrate our existing IndiaMART product listings to the website?",
    a: "Yes. We scrape and restructure your existing catalog as part of the project — you don't need to re-enter product data manually.",
  },
  {
    q: "Do you provide GST invoice?",
    a: "Yes. Maxwell Electrodeal Private Limited is GST registered. All invoices are GST-compliant and can be used for input tax credit.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development for Manufacturers",
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: ["India", "Gujarat", "Vadodara"],
  priceRange: "₹75,000 - ₹3,00,000+",
  description: manufacturerHubSeo.description,
  url: `${siteConfig.url}${manufacturerHubSeo.path}`,
  offers: {
    "@type": "OfferCatalog",
    name: "Manufacturer Website Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "75000",
        priceCurrency: "INR",
        description: "Up to 15 pages, 50 products, basic SEO",
      },
      {
        "@type": "Offer",
        name: "Professional",
        price: "150000",
        priceCurrency: "INR",
        description: "Up to 60 pages, 200 products, full catalog SEO",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "300000",
        priceCurrency: "INR",
        description: "Unlimited pages, multi-language, ERP integration",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ManufacturerWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              For Indian Manufacturers
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Website Development for Manufacturers India
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              Stop depending on IndiaMART. Get a professional website that generates direct buyer
              inquiries from Google — built for MSME manufacturers, exporters, and industrial
              suppliers across Gujarat and India.{" "}
              <Link href="/locations/india/vadodara" className="text-indigo-400 hover:text-indigo-300 underline">
                We&apos;re based in Vadodara →
              </Link>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-estimate?service=Manufacturer+Website&source=mfr-hero"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Project Estimate
              </Link>
              <Link
                href="/case-studies/drashti-chemicals"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                See Case Study →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "₹75,000 Starting Price",
                "Delivered in 6–8 Weeks",
                "100% Code Ownership",
                "GST Invoice Included",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-3">
            Why IndiaMART is a Trap
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            Every year, thousands of manufacturers pay platforms to get leads that should be coming
            directly to them.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "💸",
                title: "You Pay — Every Year",
                body: "You pay ₹1.5–3L/year with no ownership — rates increase every renewal and you have nothing to show for it.",
              },
              {
                icon: "🏪",
                title: "Buyers See Your Competitors",
                body: "On every IndiaMART listing, buyers see your competitors right next to you — often at lower prices.",
              },
              {
                icon: "🔒",
                title: "Zero Control Over Your Brand",
                body: "You have zero control over your own brand, data, or leads. IndiaMART owns the relationship.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base font-medium text-slate-700">
            Your own website costs{" "}
            <span className="text-indigo-600 font-bold">₹75K once</span>. Runs forever. Every
            inquiry comes to <span className="font-bold">YOU</span>, not a marketplace.
          </p>
        </Container>
      </section>

      {/* Who This Is For */}
      <section className="py-16">
        <Container>
          <h2 className="font-display text-3xl font-bold text-center text-[var(--v6-text,#0f172a)] mb-3">
            Built for These Industries
          </h2>
          <p className="text-center text-[var(--v6-text-muted,#64748b)] mb-10 max-w-2xl mx-auto">
            We specialize in industrial and manufacturing websites — not generic business sites.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="group rounded-2xl border border-[var(--v6-border,#e2e8f0)] bg-white p-5 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">{ind.emoji}</div>
                <h3 className="font-display text-base font-semibold text-[var(--v6-text,#0f172a)] group-hover:text-indigo-600 transition-colors">
                  {ind.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--v6-text-muted,#64748b)] leading-relaxed">
                  {ind.desc}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <Container>
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-3">
            What Your Manufacturer Website Includes
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            Every website we build for manufacturers comes with these essentials — not as add-ons.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="mt-0.5 flex-shrink-0 text-indigo-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Study Preview */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl bg-[#030b1f] text-white p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-2">
              Case Study
            </p>
            <h2 className="font-display text-2xl font-bold mb-6">
              How We Did It: Drashti Chemicals
            </h2>
            <div className="grid gap-4 mb-6 grid-cols-2 sm:grid-cols-4">
              {[
                { num: "263", label: "Pages Built" },
                { num: "154", label: "Products Listed" },
                { num: "94", label: "Desktop PageSpeed" },
                { num: "6 Wks", label: "Delivery Time" },
              ].map((m) => (
                <div key={m.label} className="text-center rounded-xl bg-white/10 p-4">
                  <p className="text-3xl font-bold text-indigo-400">{m.num}</p>
                  <p className="mt-1 text-xs text-slate-300">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm text-slate-300 leading-relaxed max-w-2xl mb-6">
              <p>
                Drashti Chemicals is an industrial chemical supplier in Vadodara with 154 products
                across 47 categories. They were entirely dependent on IndiaMART and TradeIndia for
                buyer inquiries.
              </p>
              <p>
                Maxwell Electrodeal built them a 263-page static website on Next.js 14 with a
                complete product catalog, SEO-optimized category and product pages, and a
                mobile-first design. Desktop PageSpeed score: 94.
              </p>
              <p>
                The site is now indexed by Google and migrating organic traffic away from the
                marketplace listings — generating direct inquiries to Drashti&apos;s inbox and
                WhatsApp without paying any platform fee.
              </p>
            </div>
            <Link
              href="/case-studies/drashti-chemicals"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition"
            >
              Read Full Case Study →
            </Link>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <Container>
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-3">
            Transparent Pricing for Manufacturer Websites
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            No hidden fees. Milestone-based billing so you pay as work gets done.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 flex flex-col ${
                  tier.highlight
                    ? "border-indigo-500 bg-indigo-600 text-white shadow-xl"
                    : "border-slate-200 bg-white text-slate-900"
                }`}
              >
                {tier.highlight && (
                  <span className="mb-3 self-start rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-indigo-600"}`}
                >
                  {tier.price}
                </p>
                <ul className="mt-4 space-y-2 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.highlight ? "text-indigo-200" : "text-indigo-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={tier.highlight ? "text-indigo-100" : "text-slate-600"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-5 text-xs ${tier.highlight ? "text-indigo-200" : "text-slate-500"}`}
                >
                  Best for: {tier.bestFor}
                </p>
                <Link
                  href="/get-estimate?service=Manufacturer+Website"
                  className={`mt-5 block rounded-lg py-2.5 text-center text-sm font-semibold transition ${
                    tier.highlight
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-500"
                  }`}
                >
                  Get Estimate
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            All prices include GST invoice. Milestone-based billing — 40% on start, 40% on
            staging, 20% on go-live. Full IP and source code ownership.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <h2 className="font-display text-3xl font-bold text-center text-[var(--v6-text,#0f172a)] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-2xl divide-y divide-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-semibold text-[var(--v6-text,#0f172a)] list-none">
                  {faq.q}
                  <span className="flex-shrink-0 text-indigo-600 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--v6-text-muted,#64748b)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-3">
              Ready to Own Your Buyer Inquiries?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation. No commitment. We&apos;ll tell you honestly if a website makes
              sense for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?service=Manufacturer+Website"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Estimate
              </Link>
              <a
                href={WHATSAPP_HREF_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
