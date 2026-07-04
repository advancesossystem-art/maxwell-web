import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

const canonical = `${siteConfig.url}/solutions/web-development-company-india-international`;
const usaUrl = `${siteConfig.url}/solutions/web-development-company-india-usa`;
const ukUrl = `${siteConfig.url}/solutions/web-development-company-india-uk`;
const uaeUrl = `${siteConfig.url}/solutions/web-development-company-india-uae`;

export const metadata: Metadata = {
  title: "Web Development Company India for International Clients | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal builds websites and custom software for international clients — US, UK, UAE, Turkey, Germany, Canada, Australia. USD pricing. NDA on request. Milestone-based delivery. Next.js, React, TypeScript.",
  keywords: [
    "web development company India for international clients",
    "Indian web development agency USA",
    "outsource web development India",
    "website development company India USD",
    "Indian software company UK clients",
    "web development India Turkey",
    "website development India UAE",
    "Next.js development company India",
    "custom software development India international",
    "affordable web development India",
  ],
  alternates: {
    canonical,
    languages: {
      "en-US": usaUrl,
      "en-GB": ukUrl,
      "en-AE": uaeUrl,
    },
  },
  openGraph: {
    title: "Web Development Company India for International Clients | Maxwell Electrodeal",
    description:
      "Websites and custom software for US, UK, UAE, Turkey, Germany clients. USD pricing. NDA. Milestone delivery. Maxwell Electrodeal, Vadodara, India.",
    url: canonical,
    siteName: "Maxwell Electrodeal",
    locale: "en_IN",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Web Development Services",
  provider: {
    "@type": "Organization",
    name: "Maxwell Electrodeal Private Limited",
    url: siteConfig.url,
  },
  areaServed: ["US", "GB", "AE", "TR", "DE", "CA", "AU", "IN"],
  description:
    "Custom website development and software for international clients. USD pricing, NDA, milestone delivery.",
  priceRange: "$900 - $40,000",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maxwell Electrodeal Private Limited",
  url: siteConfig.url,
  areaServed: ["US", "GB", "AE", "TR", "DE", "CA", "AU", "IN"],
  priceRange: "$900 - $40,000",
};

const faqItems = [
  {
    q: "How do I pay an Indian web development company from the US/UK/UAE?",
    a: "International wire transfer (SWIFT) to our Indian bank account is standard. We also accept Wise (formerly TransferWise) for lower fees, and PayPal or Stripe for smaller milestones. We provide a proforma invoice before each payment. Payment receipts and FIRC (Foreign Inward Remittance Certificate) are provided.",
  },
  {
    q: "Will there be a language barrier?",
    a: "No. Our team communicates in professional business English. All written communication — proposals, progress updates, documentation — is in English. Video calls are conducted in English with no language difficulty.",
  },
  {
    q: "What timezone do you work in?",
    a: "We work Indian Standard Time (IST, UTC+5:30). For UK/Europe clients, we have 3–4 hours of direct business-hours overlap daily. For US East Coast clients, we schedule morning (IST) calls that fall in US afternoon. We respond to all messages within 4 business hours.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. We sign a Non-Disclosure Agreement before any project discussion. Template available on request, or we sign your NDA.",
  },
  {
    q: "Who owns the code and design?",
    a: "You do — 100%, from day one. IP assignment is included in our standard contract. We deliver full source code at each milestone. We use no proprietary tools or systems that lock you in.",
  },
  {
    q: "How is this different from hiring a freelancer on Upwork?",
    a: "You work with a registered private limited company (Maxwell Electrodeal Private Limited) with GST registration, company bank accounts, and formal contracts. You deal with a business, not an individual. If a team member changes, the project continues.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function InternationalWebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            International Delivery from India
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-4xl">
            Web Development Company in India for International Clients
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Maxwell Electrodeal builds websites, custom software, and B2B platforms for clients in
            the US, UK, UAE, Turkey, Germany, and beyond — with USD pricing, milestone-based
            billing, and full IP ownership. 60–80% cost savings vs Western agencies.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
            Why International Clients Choose Maxwell
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Cost Advantage",
                body: "Web development in India costs 65–80% less than equivalent US or UK agencies for the same technology stack (Next.js, React, TypeScript) and delivery quality. A project that costs $15,000 in the US typically costs $3,000–$5,000 with us.",
              },
              {
                title: "Modern Tech Stack",
                body: "We build on Next.js 14, React, TypeScript, and Tailwind CSS — not outdated template stacks. Our code is clean, documented, and fully owned by you from day one.",
              },
              {
                title: "English Communication",
                body: "Our team communicates in professional English via Slack, WhatsApp, video calls, and email. Weekly progress updates with 3–4 hours UK/Europe overlap, plus adaptable schedules for US East Coast clients.",
              },
              {
                title: "Full IP Ownership",
                body: "You own 100% of code, design, and data from day one. NDA signed before discovery, source code shared at each milestone, and no vendor lock-in with proprietary systems.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
            Transparent USD Pricing
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$900 / ₹75,000",
                items: [
                  "Up to 15 pages",
                  "Product catalog (up to 50 items)",
                  "Contact and WhatsApp inquiry forms",
                  "Basic on-page SEO",
                  "Mobile responsive",
                  "1 month post-launch support",
                  "Best for: Small businesses, product landing pages",
                ],
              },
              {
                name: "Professional",
                price: "$1,800 / ₹1,50,000",
                items: [
                  "Up to 60 pages",
                  "Full product catalog (up to 200 items) with search and filter",
                  "Google Analytics + Search Console setup",
                  "3 months post-launch support",
                  "Video call progress reviews at each milestone",
                  "Best for: B2B companies, exporters, mid-size businesses",
                ],
              },
              {
                name: "Enterprise",
                price: "$3,600+ / ₹3,00,000+",
                items: [
                  "Unlimited pages (programmatic generation)",
                  "Custom backend / CMS / API integrations",
                  "ERP or CRM integration",
                  "Multi-language support",
                  "12 months support",
                  "Dedicated project manager",
                  "Best for: Enterprises, SaaS platforms, complex portals",
                ],
              },
            ].map((tier) => (
              <div key={tier.name} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-lg font-bold text-slate-900">{tier.name}</p>
                <p className="mt-1 text-xl font-bold text-blue-700">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {tier.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            All prices in USD. INR equivalent at current exchange rate. International payments
            accepted via wire transfer (SWIFT), Wise, PayPal, or Stripe. GST invoice available for
            Indian clients. VAT invoice structure available on request.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">
            How We Work With International Clients
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "Free Discovery Call (30 min)",
                body: "We schedule a video call at your convenience — US, UK, UAE, Turkey, all timezones accommodated. NDA signed before project details are discussed.",
              },
              {
                title: "Written Proposal in 48 Hours",
                body: "After the call, we send a detailed proposal: scope, timeline, milestone breakdown, and fixed price in USD. No vague estimates.",
              },
              {
                title: "Milestone-Based Development",
                body: "Typical payment: 40% on project start, 40% on staging delivery, 20% on final go-live. You approve each milestone before next payment.",
              },
              {
                title: "Weekly Progress Updates",
                body: "Every Monday: written update with completed work, upcoming milestones, and pending decisions. Staging link shared from week 2 onward.",
              },
              {
                title: "Full Handover",
                body: "At go-live: complete source code, admin credentials, documentation, and a 30-minute walkthrough call. You own everything.",
              },
            ].map((step, idx) => (
              <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-blue-700">Step {idx + 1}</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{step.title}</p>
                <p className="mt-2 text-sm text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Countries We&apos;ve Served
          </h2>
          <p className="text-base text-slate-700">
            🇺🇸 United States · 🇬🇧 United Kingdom · 🇦🇪 UAE · 🇩🇪 Germany · 🇨🇦 Canada · 🇦🇺
            Australia · 🇹🇷 Turkey · 🇸🇬 Singapore · 🇫🇷 France · 🇮🇳 India
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Case Study: What We Build
          </h2>
          <p className="text-slate-700 max-w-3xl">
            For a Gujarat chemical supplier targeting international buyers, we built a 263-page
            product catalog website on Next.js 14. Desktop PageSpeed: 94. The site generates direct
            buyer inquiries from Google — replacing marketplace dependency. Build time: 6 weeks.
            Total cost: $1,800 USD.
          </p>
          <Link
            href="/case-studies/drashti-chemicals"
            className="inline-flex mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            View case study →
          </Link>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Common Questions from International Clients
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Start With a Free 30-Minute Discovery Call</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              No commitment. NDA on request. We&apos;ll tell you exactly what your project would
              cost and how long it would take — before you spend a penny.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/book-consultation?source=international-page"
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Book Free Discovery Call →
              </Link>
              <a
                href="mailto:maxwellelectrodealsystems@gmail.com?subject=International Project Enquiry&body=Hi Maxwell, I'd like to discuss a web development project."
                className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Email Us Directly
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Response within 4 business hours · NDA signed before discussion · USD quotes available
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
