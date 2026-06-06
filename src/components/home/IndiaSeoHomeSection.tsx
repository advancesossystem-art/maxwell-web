import Link from "next/link";
import { businessAddress } from "@/lib/business-address";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

/** India-wide money pages — primary SEO targets */
const indiaLinks = [
  { href: "/solutions/software-development-company-india", label: "Software development company India" },
  { href: "/solutions/erp-development-company", label: "ERP development company India" },
  { href: "/solutions/crm-development-company-india", label: "CRM development company India" },
  { href: "/solutions/ai-development-company-india", label: "AI development company India" },
  { href: "/solutions/mobile-app-development-company", label: "Mobile app development India" },
  { href: "/solutions/website-development-company", label: "Website development company India" },
  { href: "/solutions/custom-software-development-company", label: "Custom software development India" },
  { href: "/locations/india", label: "Software company serving all India" },
];

/** Major metros — location hub pages */
const metroLinks = [
  { href: "/locations/india/mumbai", label: "Mumbai" },
  { href: "/locations/india/bengaluru", label: "Bengaluru" },
  { href: "/locations/india/delhi", label: "Delhi NCR" },
  { href: "/locations/india/hyderabad", label: "Hyderabad" },
  { href: "/locations/india/pune", label: "Pune" },
  { href: "/locations/india/chennai", label: "Chennai" },
  { href: "/locations/india/ahmedabad", label: "Ahmedabad" },
  { href: "/locations/india/vadodara", label: "Vadodara (HQ)" },
];

/**
 * India-wide SEO block — national keywords first; Vadodara is HQ only.
 */
export function IndiaSeoHomeSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0f1a] py-16 md:py-20" data-seo-speakable>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            India · USA · UAE · Global delivery
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Custom software development company in India
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {siteConfig.legalName} delivers custom ERP, CRM, websites, mobile apps, AI, and SaaS for
            businesses across India — Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad,
            Surat, and nationwide. Headquartered in Vadodara, Gujarat, we combine on-site discovery for
            Gujarat clients with remote delivery for every major metro. GST-ready systems, Tally
            integration, milestone billing, and 100% source code ownership.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Why Indian businesses choose Maxwell
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Nationwide delivery — same team serves Mumbai enterprises and Gujarat SMEs</li>
              <li>Custom ERP &amp; CRM built for Indian GST, e-invoice, and Tally workflows</li>
              <li>Manufacturing, healthcare, logistics, retail &amp; education industry expertise</li>
              <li>Core Web Vitals 95+ Next.js websites that rank across India</li>
              <li>Industrial AI &amp; computer vision for factory safety (AdvanceSafe)</li>
              <li>Offshore-ready for US &amp; UAE clients — 40–60% cost advantage vs Western agencies</li>
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              HQ: {businessAddress.formatted} ·{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-400 hover:underline">
                {siteConfig.email}
              </a>{" "}
              ·{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-400 hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">India service pages</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {indiaLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-400 hover:text-brand-300 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Major cities we serve</h3>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {metroLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-400 hover:text-brand-300 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
