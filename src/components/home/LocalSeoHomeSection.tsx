import Link from "next/link";
import { businessAddress } from "@/lib/business-address";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const localLinks = [
  { href: "/solutions/software-development-company-vadodara", label: "Software development company Vadodara" },
  { href: "/solutions/erp-development-company-vadodara", label: "ERP development company Vadodara" },
  { href: "/solutions/web-development-company-vadodara", label: "Web development company Vadodara" },
  { href: "/solutions/mobile-app-development-company-vadodara", label: "Mobile app development Vadodara" },
  { href: "/solutions/software-development-company-gujarat", label: "Software company Gujarat" },
  { href: "/solutions/erp-development-company-gujarat", label: "ERP development Gujarat" },
  { href: "/locations/india/vadodara", label: "IT company Vadodara HQ" },
  { href: "/industries/manufacturing", label: "Manufacturing software Gujarat" },
];

/**
 * Visible local SEO block — targets Vadodara/Gujarat queries competitors rank for
 * (Matiyas, Sigzen, Scrupulous, Ascendtis). Unique content + internal links.
 */
export function LocalSeoHomeSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[#0a0f1a] py-16 md:py-20" data-seo-speakable>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Vadodara · Gujarat · India
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            Custom software development company in Vadodara, Gujarat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {siteConfig.legalName} builds custom ERP, CRM, websites, and mobile apps for manufacturers,
            healthcare networks, logistics firms, and growing SMEs across Vadodara, Ahmedabad, Surat, and
            Rajkot. Unlike template ERP resellers, we engineer systems around your workflows — with GST,
            Tally integration, shop-floor mobile apps, and milestone billing. Headquartered at{" "}
            {businessAddress.formatted}.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Why businesses choose us over local IT agencies
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>On-site discovery in Alkapuri, Gotri, Manjalpur &amp; industrial estates across Gujarat</li>
              <li>Custom ERP &amp; CRM — not one-size Odoo/ERPNext installs with forced workflows</li>
              <li>Core Web Vitals 95+ Next.js websites that rank and convert</li>
              <li>Industrial AI &amp; computer vision for manufacturing safety (AdvanceSafe)</li>
              <li>Offshore delivery for US &amp; UAE clients with 40–60% cost savings vs local agencies</li>
              <li>100% source code ownership, NDAs, and transparent milestone billing</li>
            </ul>
            <p className="mt-6 text-sm text-slate-400">
              Contact:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-400 hover:underline">
                {siteConfig.email}
              </a>{" "}
              ·{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-400 hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Local &amp; industry pages</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {localLinks.map((link) => (
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
      </Container>
    </section>
  );
}
