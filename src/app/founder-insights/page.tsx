import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, WHATSAPP_HREF_ENGINEER } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Founder Insights | GIDC Website Audit",
  description:
    "2-minute website audit playbook for Gujarat GIDC plant managers — checklist, Loom script, and next steps. From Maxwell. Sites from ₹35,000.",
  path: "/founder-insights",
  keywords: [
    "GIDC website audit",
    "manufacturer website checklist Gujarat",
    "plant manager website review",
    "Maxwell Electrodeal founder insights",
  ],
});

const AUDIT_CHECKS = [
  "Can a buyer find a product by grade, model, size, or CAS without calling first?",
  "Does every product page offer WhatsApp or RFQ — or only a generic Contact page?",
  "Are SDS, datasheets, or PEI/specs in HTML tables — or PDF-only dumps?",
  "Does the site load usable on factory 4G (target PageSpeed 90+ on mobile)?",
  "Is the company name clearly Maxwell Electrodeal Private Limited vs unrelated Maxwell listings?",
  "Would canceling paid directory renewals still leave an owned enquiry path?",
];

const LOOM_SCRIPT = [
  "Open the prospect's live URL + one IndiaMART/directory listing side by side.",
  "Record 90–120 seconds: homepage speed, product depth, inquiry path, competitor contrast.",
  "Name three fixes: (1) catalog IA, (2) RFQ/WhatsApp, (3) corridor SEO (GIDC estate).",
  "End with: Starter ₹35K / Professional ₹75K / Growth ₹1.5L, no advance, pay after go-live.",
  "Send Loom link + link to industrial RFQ estimator + get-estimate form.",
];

export default function FounderInsightsPage() {
  return (
    <>
      <section className="bg-[#030b1f] py-16 text-white md:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Founder insights · Sales playbook
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold md:text-4xl">
            2-minute website audit for GIDC plant managers
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Outbound is still human sales (Loom, plant visits, WhatsApp). This page is the on-site
            enablement playbook staff use before a factory walk-through — not a substitute for DNS
            MX or calendar booking. From {siteConfig.legalName}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/get-estimate?source=founder-insights"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Get free estimate
            </Link>
            <a
              href={WHATSAPP_HREF_ENGINEER}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              WhatsApp an engineer
            </a>
            <Link
              href="/blog/vadodara-manufacturers-directory-to-nextjs-catalog"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Lead magnet guide →
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 py-14">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900">Plant-manager checklist</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Score yes/no in under two minutes on a laptop or phone. Three or more &quot;no&quot; answers →
            discovery conversation.
          </p>
          <ol className="mt-8 space-y-3">
            {AUDIT_CHECKS.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
              >
                <span className="font-display font-bold text-indigo-600">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Loom / video audit process (internal script)
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Record after permission; never claim rankings or revenue you cannot defend with Search
            Console. Soft CTA only.
          </p>
          <ol className="mt-8 list-decimal space-y-3 pl-5 text-sm text-slate-700">
            {LOOM_SCRIPT.map((step) => (
              <li key={step} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-slate-200 py-14">
        <Container>
          <h2 className="font-display text-xl font-bold text-slate-900">Where to send the buyer next</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { href: "/services/website-development-for-manufacturers", label: "Manufacturer hub" },
              { href: "/locations/india/gujarat/gidc", label: "GIDC estates" },
              { href: "/tools/industrial-website-rfq-estimator", label: "RFQ estimator" },
              { href: "/pricing", label: "Website pricing" },
              { href: "/services/website-development/owned-enquiry-channel", label: "Owned enquiry" },
              { href: "/engagement-models", label: "Upsell ladder" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-indigo-600 hover:border-indigo-200"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
