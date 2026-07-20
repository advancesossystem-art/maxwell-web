import Link from "next/link";
import { businessAddress } from "@/lib/business-address";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

/** India-wide money pages — primary SEO targets (website engineering first) */
const indiaLinks = [
  { href: "/services/website-development", label: "Website development company India" },
  { href: "/services/website-development-for-manufacturers", label: "Manufacturer website development" },
  { href: "/cost/web-development-cost-india", label: "Website development cost India" },
  { href: "/solutions/web-development-company-vadodara", label: "Website developer Vadodara" },
  { href: "/solutions/web-development-company-gujarat", label: "Website development Gujarat" },
  { href: "/services/web-application-development", label: "Web application development" },
  { href: "/services/custom-software-development", label: "Custom software development India" },
  { href: "/locations/india", label: "Delivery hubs across India" },
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
            Website engineering company for businesses in India
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {siteConfig.legalName} builds manufacturer, corporate, and industrial websites — plus web
            applications, custom software, and AI automation — for businesses across India: Mumbai,
            Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Surat, and nationwide.
            Headquartered in Vadodara, Gujarat. Milestone billing and 100% source code ownership.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Why Indian businesses choose Maxwell
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Website-first growth — catalogs and corporate sites that generate buyer inquiries</li>
              <li>Nationwide delivery — same team serves Mumbai enterprises and Gujarat SMEs</li>
              <li>Core Web Vitals 95+ Next.js websites engineered for Google and AI search</li>
              <li>Industry verticals: chemical, ceramic, textile, engineering, pharma, export</li>
              <li>Web apps and AI automation as supporting systems around the website core</li>
              <li>Clear international delivery for US, UK, and UAE buyers when intent is verified</li>
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              HQ: {businessAddress.formatted} ·{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-300 underline decoration-brand-400/70 underline-offset-2 hover:text-brand-200"
              >
                {siteConfig.email}
              </a>{" "}
              ·{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="font-medium text-brand-300 underline decoration-brand-400/70 underline-offset-2 hover:text-brand-200"
              >
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
