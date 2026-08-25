import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Owned Enquiry Channel | From ₹35,000",
  description:
    "Stop renting buyers on paid directories. Own your enquiry channel — product catalog, SEO, WhatsApp RFQs. Gujarat manufacturers from ₹35,000. Get a quote.",
  path: "/services/website-development/owned-enquiry-channel",
  keywords: [
    "owned enquiry channel",
    "manufacturer website vs directory",
    "paid listings alternative manufacturers",
    "B2B catalog website India",
    "direct buyer inquiries manufacturer",
  ],
});

export default function OwnedEnquiryChannelPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services/website-development-for-manufacturers"
              className="hover:text-white transition-colors"
            >
              Manufacturer Websites
            </Link>
            <span>/</span>
            <span className="text-white/80">Owned Enquiry Channel</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Website engineering for manufacturers
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Owned Enquiry Channel vs Paid Listings
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Paid directories put your brand beside twenty competitors and own the buyer relationship.
            An owned enquiry channel — your catalog, your rankings, your WhatsApp — compounds every
            month you do not renew a listing fee.
          </p>
          <p className="mt-4 text-indigo-200">
            Starter from ₹35,000 · 25–30 pages + core SEO · Professional catalogs often ₹75,000
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Owned+Enquiry+Website&source=owned-enquiry"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/cost/manufacturing-website-cost"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              See manufacturing website cost →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200 bg-white">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            What “owned enquiry” actually means
          </h2>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              When a buyer searches a product grade plus your city or GIDC estate, Google should
              open <em>your</em> product page — not a marketplace results grid. The inquiry form and
              WhatsApp deep link belong to you. Cancel a directory subscription and you lose the
              listing; your website stays online.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Maxwell Electrodeal builds these channels as Next.js catalog sites for Gujarat and
              India manufacturers: category architecture, core SEO, schema, and conversion paths —
              then optional dealer portals when distributors need login pricing.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            Paid listings vs owned channel (honest comparison)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-slate-200 bg-white">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Paid listings / directories</th>
                  <th className="px-4 py-3 font-semibold">Owned enquiry website</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium">Buyer sees</td>
                  <td className="px-4 py-3">You + many competitors on one page</td>
                  <td className="px-4 py-3">Only your products and proof</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium">Data ownership</td>
                  <td className="px-4 py-3">Platform holds history</td>
                  <td className="px-4 py-3">Leads land in your CRM / WhatsApp</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium">Cost shape</td>
                  <td className="px-4 py-3">₹1.5L–₹3L+ every renewal cycle (typical)</td>
                  <td className="px-4 py-3">One-time build from ₹35,000 / ₹75,000 catalog</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium">SEO compounding</td>
                  <td className="px-4 py-3">Weak for long-tail grades</td>
                  <td className="px-4 py-3">Product pages rank for specific buyer queries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200 bg-white">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Typical build path
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 max-w-3xl">
            <li>Starter or Professional catalog with enquiry CTAs (From ₹35,000 / ₹75,000).</li>
            <li>Technical SEO + GIDC / city internal links so Google understands locality.</li>
            <li>
              Optional{" "}
              <Link href="/services/dealer-portal-development" className="text-indigo-600 hover:underline">
                dealer portal
              </Link>{" "}
              for price lists and stock visibility.
            </li>
            <li>Ongoing SEO or content sprints via our website SEO practice.</li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/services/website-development-for-manufacturers"
              className="text-indigo-600 hover:underline"
            >
              Manufacturer websites hub →
            </Link>
            <Link href="/locations/india/gujarat/gidc" className="text-indigo-600 hover:underline">
              Gujarat GIDC cluster →
            </Link>
            <Link
              href="/blog/directory-renewal-vs-owned-manufacturer-website"
              className="text-indigo-600 hover:underline"
            >
              Directory renewal vs owned site (blog) →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
