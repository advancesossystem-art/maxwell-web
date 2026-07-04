import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Website Development for MSME India — Small Business Websites | Maxwell Electrodeal",
  description:
    "Professional websites for Indian MSMEs starting from ₹75,000. Product catalog, WhatsApp inquiry integration, Google-optimized. GST invoice included. For manufacturers, traders, and service businesses.",
  path: "/services/website-development/msme-india",
  keywords: [
    "website development for MSME India",
    "MSME website development",
    "small business website India",
    "website for small manufacturer India",
    "affordable website development India",
    "MSME digital website India",
    "manufacturer website MSME",
    "website development India 75000",
  ],
});

export default function MsmeIndiaWebsitePage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/website-development-for-manufacturers" className="hover:text-white transition-colors">
              Manufacturer Websites
            </Link>
            <span>/</span>
            <span className="text-white/80">MSME India</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            For Indian MSMEs · Manufacturers · Traders
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Website Development for MSMEs in India — Starting From ₹75,000
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            India has 63 million registered MSMEs — most have no professional website. A basic
            brochure site is not enough. You need product catalog pages that Google indexes and
            buyers can browse before contacting you. Maxwell builds exactly that.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=MSME+Website&source=msme-india"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/services/website-development-for-manufacturers"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              See All Packages →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["₹75,000 Starting Price", "GST Invoice Included", "No Monthly Fees", "100% Code Ownership"].map((b) => (
              <span key={b} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
                {b}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
            What MSME Owners Ask Before Building a Website
          </h2>
          <div className="prose prose-slate max-w-3xl">
            <p className="text-slate-700 leading-relaxed mb-4">
              India has 63 million registered MSMEs. Most have no professional website — they run
              their businesses through WhatsApp catalogs, personal referrals, and paid B2B
              directory subscriptions. A basic brochure website ("5 pages, contact form") is not
              enough in 2026. Buyers — both domestic and international — want to browse your
              product catalog, verify your certifications, and understand your specifications
              before they contact you.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Maxwell builds MSME websites that: appear on Google search for your product and
              location keywords, load fast on Jio and mobile networks (94+ PageSpeed is our
              standard), generate WhatsApp inquiries directly from product pages, and come with
              GST invoice and full code ownership. One-time payment. No monthly SaaS fee. No
              retainer.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              A properly built MSME website with your Udyam registration certificate displayed,
              your certifications visible, and your product catalog indexed by Google positions
              you ahead of competitors who are still only on paid listing platforms. For GeM
              (Government e-Marketplace) sellers, a professional website significantly improves
              buyer confidence and tender credibility.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Available for manufacturers, traders, industrial suppliers, exporters, and service
              businesses across India. Based in Vadodara — understanding Gujarat's MSME
              ecosystem — with projects delivered pan-India.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Product catalog pages indexed by Google",
              "WhatsApp Business inquiry integration on all pages",
              "Udyam registration and certification display",
              "Mobile-first, fast-loading on Jio/mobile networks",
              "GST-compliant quote and inquiry forms",
              "Google Analytics and Search Console setup included",
              "No monthly fee, no retainer — one-time project",
              "100% source code and IP ownership",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex-shrink-0 text-indigo-600">✓</span>
                <p className="text-sm text-slate-700">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">Pricing</h3>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {[
                { name: "Starter", price: "₹75,000", desc: "15 pages, 50 products, WhatsApp, basic SEO" },
                { name: "Professional", price: "₹1,50,000", desc: "60 pages, 200 products, full catalog SEO" },
                { name: "Enterprise", price: "₹3,00,000+", desc: "Unlimited products, multilingual, ERP integration" },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-lg p-4 border border-indigo-100">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-2xl font-bold text-indigo-600 mt-1">{t.price}</p>
                  <p className="text-xs text-slate-500 mt-1">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="/services/website-development-for-manufacturers" className="text-sm text-indigo-600 hover:underline">
              Manufacturer Website Packages →
            </Link>
            <Link href="/blog/website-for-gujarat-manufacturer-2026" className="text-sm text-indigo-600 hover:underline">
              Gujarat Manufacturer Website Guide 2026 →
            </Link>
            <Link href="/blog/website-vs-whatsapp-for-manufacturer-india" className="text-sm text-indigo-600 hover:underline">
              Website vs WhatsApp for Manufacturers →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#030b1f] text-white">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-3">
              Ready to Build Your MSME Website?
            </h2>
            <p className="text-slate-300 mb-8">
              Free consultation. GST invoice. No monthly fees. Full code ownership. We will tell
              you honestly what your website would include and cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-estimate?service=MSME+Website"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
              >
                Get Free Estimate
              </Link>
              <a
                href="https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20need%20a%20website%20for%20my%20MSME%20business."
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
