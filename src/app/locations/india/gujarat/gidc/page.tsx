import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { gidcEstates, gidcHubPath } from "@/lib/gidc-estates";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Gujarat GIDC Manufacturer Websites | Makarpura to Vatva | From ₹45,000",
  description:
    "Website development for Gujarat GIDC estates — Makarpura, Savli, Nandesari, Halol, Ankleshwar, Vatva. Owned enquiry catalogs from ₹45,000. Vadodara HQ.",
  path: gidcHubPath,
  keywords: [
    "Gujarat GIDC website development",
    "Makarpura GIDC website",
    "Savli GIDC website",
    "Nandesari GIDC website",
    "Halol GIDC website",
    "Ankleshwar GIDC website",
    "Vatva GIDC website",
    "manufacturer website Gujarat GIDC",
  ],
});

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gujarat GIDC manufacturer websites",
  url: `${siteConfig.url}${gidcHubPath}`,
  isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  about: "Website development for manufacturers across major Gujarat GIDC estates",
};

export default function GujaratGidcHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubJsonLd) }}
      />
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/locations/india/vadodara" className="hover:text-white transition-colors">
              Vadodara
            </Link>
            <span>/</span>
            <span className="text-white/80">Gujarat GIDC</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Gujarat industrial estates
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Manufacturer Websites for Gujarat GIDC Estates
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Hand-built catalog sites for plants in Makarpura, Savli, Nandesari, Halol, Ankleshwar, and
            Vatva — so buyers find your products on Google and enquire on channels you own. Starter
            from ₹45,000 (25–30 pages + core SEO).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=GIDC+Manufacturer+Website&source=gidc-hub"
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

      <section className="py-16 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">
            Estate pages in this cluster
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8">
            Each page is written for that estate — not a thin city×service template. Pick your GIDC
            for local buyer search language and inclusions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gidcEstates.map((estate) => (
              <Link
                key={estate.slug}
                href={estate.path}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-indigo-300 transition"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {estate.cityRegion}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">{estate.name}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{estate.intro}</p>
                <span className="mt-4 inline-block text-sm font-medium text-indigo-600">
                  Open estate page →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Owned enquiries beat yearly directory renewals
          </h2>
          <p className="text-slate-700 max-w-3xl leading-relaxed mb-4">
            Most GIDC units still renew paid listings every year and share the buyer with twenty
            competitors on the same results page. Maxwell builds product catalog websites that rank
            for estate + product searches and send RFQs to WhatsApp — an asset you own.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/services/website-development/owned-enquiry-channel"
              className="text-indigo-600 hover:underline"
            >
              Owned enquiry channel →
            </Link>
            <Link href="/cost/manufacturing-website-cost" className="text-indigo-600 hover:underline">
              Manufacturing website cost →
            </Link>
            <Link
              href="/solutions/web-development-company-vadodara"
              className="text-indigo-600 hover:underline"
            >
              Website development company Vadodara →
            </Link>
            <Link href="/solutions/seo-company-gujarat" className="text-indigo-600 hover:underline">
              SEO company Gujarat →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
