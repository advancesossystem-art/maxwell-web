import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { gidcEstates, gidcHubPath, type GidcEstate } from "@/lib/gidc-estates";

export function GidcEstatePage({ estate }: { estate: GidcEstate }) {
  const otherEstates = gidcEstates.filter((e) => e.slug !== estate.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Website development for ${estate.name}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "Place",
      name: estate.name,
    },
    description: estate.intro,
    url: `${siteConfig.url}${estate.path}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "45000",
      description: "Starter manufacturer / business website — 25–30 pages + core SEO",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={gidcHubPath} className="hover:text-white transition-colors">
              Gujarat GIDC
            </Link>
            <span>/</span>
            <span className="text-white/80">{estate.shortName}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            {estate.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            {estate.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">{estate.intro}</p>
          <p className="mt-4 text-base text-indigo-200">
            Starter from ₹45,000 · 25–30 pages + core SEO · Professional catalogs often from ₹75,000
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/get-estimate?service=${encodeURIComponent(estate.name + " Website")}&source=${estate.slug}`}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/services/website-development-for-manufacturers"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Manufacturer websites hub →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Why {estate.shortName} manufacturers need an owned enquiry channel
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mb-4">
            Paid listings and B2B directories rent you a slot next to competitors. An owned website
            ranks for the product and estate searches buyers already type, then sends the enquiry to
            your WhatsApp or inbox — permanently.
          </p>
          <p className="text-slate-700 leading-relaxed max-w-3xl">{estate.nearbyNote}</p>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Industries we see in {estate.name}
              </h2>
              <ul className="space-y-2">
                {estate.industries.map((item) => (
                  <li key={item} className="text-slate-700 flex gap-2">
                    <span className="text-indigo-600" aria-hidden>
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                Buyer searches this estate should own
              </h2>
              <ul className="space-y-2">
                {estate.buyerSearches.map((item) => (
                  <li key={item} className="text-slate-700 flex gap-2">
                    <span className="text-indigo-600" aria-hidden>
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            What a {estate.shortName} manufacturer site includes
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {estate.siteIncludes.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-slate-700 max-w-3xl">
            Need distributors to log in for price lists and stock? See{" "}
            <Link href="/services/dealer-portal-development" className="text-indigo-600 hover:underline">
              dealer portal development
            </Link>
            . Comparing directory renewals vs owning leads? Read{" "}
            <Link
              href="/services/website-development/owned-enquiry-channel"
              className="text-indigo-600 hover:underline"
            >
              owned enquiry channel
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Other Gujarat GIDC estates we cover
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={gidcHubPath}
              className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-100"
            >
              Gujarat GIDC hub
            </Link>
            {otherEstates.map((e) => (
              <Link
                key={e.slug}
                href={e.path}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-indigo-300"
              >
                {e.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/solutions/web-development-company-vadodara" className="text-indigo-600 hover:underline">
              Website development company Vadodara →
            </Link>
            <Link href="/cost/manufacturing-website-cost" className="text-indigo-600 hover:underline">
              Manufacturing website cost →
            </Link>
            <Link href="/solutions/seo-company-gujarat" className="text-indigo-600 hover:underline">
              SEO company Gujarat →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <h2 className="font-display text-2xl font-bold mb-3">
            Ready for a scoped estimate for {estate.shortName}?
          </h2>
          <p className="text-slate-300 max-w-2xl mb-6">
            No advance payment on website packages — full payment within 3 days of go-live (+18% GST).
            GST invoice and full code ownership. Response typically under 4 hours on business days.
          </p>
          <Link
            href={`/get-estimate?service=${encodeURIComponent(estate.name + " Website")}&source=${estate.slug}-cta`}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
          >
            Get Free Estimate
          </Link>
        </Container>
      </section>
    </>
  );
}
