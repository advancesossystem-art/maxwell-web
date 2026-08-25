import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Dealer Portal Development | B2B Login",
  description:
    "Custom dealer portals for manufacturers — login prices, stock, order enquiries. Gujarat delivery from Vadodara. Built after your owned site.",
  path: "/services/dealer-portal-development",
  keywords: [
    "dealer portal development",
    "B2B dealer login portal India",
    "manufacturer dealer portal",
    "distributor portal website",
    "dealer price list portal",
  ],
});

export default function DealerPortalDevelopmentPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services/website-development" className="hover:text-white transition-colors">
              Website Development
            </Link>
            <span>/</span>
            <span className="text-white/80">Dealer Portal</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            After the public catalog
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Dealer Portal Development for Manufacturers
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Give distributors a secure login for price lists, schemes, and stock — without exposing
            dealer pricing on the public site. Built as a Next.js portal that extends your owned
            enquiry website.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-estimate?service=Dealer+Portal&source=dealer-portal"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition"
            >
              Scope a Dealer Portal
            </Link>
            <Link
              href="/services/website-development-for-manufacturers"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Start with manufacturer website →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 border-b border-slate-200 bg-white">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            What dealers actually need
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              "Role-based login for dealers / distributors / sales reps",
              "Dealer-only price lists and scheme visibility",
              "Product catalog synced with public SKUs where useful",
              "Enquiry or indent forms tied to account codes",
              "Optional stock / ETA fields from ERP later",
              "Mobile-friendly UI for field teams on GIDC visits",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Recommended sequence
          </h2>
          <p className="text-slate-700 max-w-3xl leading-relaxed mb-4">
            Portals fail when the public website is still a PDF brochure. We usually ship an{" "}
            <Link
              href="/services/website-development/owned-enquiry-channel"
              className="text-indigo-600 hover:underline"
            >
              owned enquiry channel
            </Link>{" "}
            first (From ₹35,000 Starter / ₹75,000 Professional catalog), then layer dealer auth and
            private pricing. ERP sync is phase two — after dealers adopt the portal.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/services/web-application-development" className="text-indigo-600 hover:underline">
              Web application development →
            </Link>
            <Link href="/cost/manufacturing-website-cost" className="text-indigo-600 hover:underline">
              Manufacturing website cost →
            </Link>
            <Link href="/locations/india/gujarat/gidc" className="text-indigo-600 hover:underline">
              Gujarat GIDC pages →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
