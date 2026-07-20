import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { buildInternationalWebLanguageAlternates, marketExpansionNote } from "@/lib/seo/international-web-hreflang";

const canonical = `${siteConfig.url}/solutions/web-development-company-india-usa`;

export const metadata: Metadata = {
  title: "Web Development Company India for US Clients | Maxwell Electrodeal",
  description:
    "Maxwell Electrodeal builds websites and web apps for US businesses at 70% below US agency rates. Next.js, React, TypeScript. USD pricing. NDA. IST/EST overlap. Free discovery call.",
  alternates: buildInternationalWebLanguageAlternates(canonical),
  openGraph: {
    title: "Web Development Company India for US Clients | Maxwell Electrodeal",
    description:
      "US businesses outsource web development to India for 60–80% savings. Next.js, React, TypeScript. NDA and milestone billing.",
    url: canonical,
    siteName: "Maxwell Electrodeal",
    locale: "en_US",
    type: "website",
  },
};

export default function UsaInternationalPage() {
  return (
    <>
      <section className="bg-[#030b1f] text-white py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            USA Delivery Page
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl max-w-3xl">
            Web Development Company in India for US Clients
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            Maxwell receives US Search Console impressions; this page serves US buyers with USD pricing,
            IST/EST overlap, and Next.js delivery. {marketExpansionNote("US")} Typical US agency projects
            of $10,000–$50,000 often map to $1,800–$6,000 with us on the same stack: Next.js, React, and
            TypeScript.
          </p>
        </Container>
      </section>

      <section className="py-14 border-b border-slate-200">
        <Container>
          <div className="prose prose-slate max-w-4xl">
            <p>
              For US startups and SMBs, the challenge is not finding a web developer — it is finding
              a delivery partner that is affordable, technically current, and operationally reliable.
              Maxwell combines all three. We build modern websites and web applications using the same
              technologies adopted by Silicon Valley teams, but with offshore execution economics.
            </p>
            <p>
              Timezone is manageable and predictable: 8:30am–11:30am EST aligns with evening IST,
              allowing live calls for sprint reviews and milestone approvals. Outside calls, our team
              provides written progress updates and staging links so decisions can happen async without
              bottlenecks.
            </p>
            <p>
              Payment methods are US-friendly and straightforward: SWIFT wire transfer, Wise, Stripe,
              and PayPal for smaller milestones. We invoice per milestone, share source code as
              milestones close, and include NDA + IP ownership in the standard engagement model.
              Maxwell Electrodeal Private Limited is a DPIIT-recognised startup and GST-registered
              Indian private limited company.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "US agency equivalent project: $10K–$50K",
              "Typical Maxwell range: $1.8K–$6K",
              "Tech stack: Next.js, React, TypeScript, Tailwind",
              "Communication: Slack, WhatsApp, email, weekly video",
              "Legal: NDA + 100% IP assignment included",
              "Billing: Milestone-based, no hidden retainers",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-xl bg-blue-600 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Book a Free Discovery Call</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              We will map your scope, timeline, and fixed USD milestones in one call.
            </p>
            <Link
              href="/book-consultation?source=usa-page"
              className="inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              Book a free discovery call →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
