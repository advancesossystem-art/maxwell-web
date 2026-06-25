import Link from "next/link";
import { footerBrandNote, siteConfig } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { CookieSettingsLink } from "@/components/layout/CookieSettingsLink";
import { consultationHref, estimateHref } from "@/lib/conversion-copy";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "ERP Development", href: "/services/erp-development" },
      { label: "CRM Development", href: "/services/crm-development" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Retail", href: "/industries/retail" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Engagement Models", href: "/engagement-models" },
      { label: "Reviews", href: "/reviews" },
      { label: "Security", href: "/security" },
      { label: "Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Center", href: "/knowledge-center" },
      { label: "Maxwell Answers", href: "/answers" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Research", href: "/research" },
      { label: "Compare", href: "/compare" },
      { label: "Cost Guides", href: "/cost" },
      { label: "Tools", href: "/tools" },
      { label: "Client Portal", href: "/portal" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="v6-footer">
      <div className="v6-container py-10 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-6">
          <div className="sm:col-span-2 lg:col-span-4">
            <BrandLogo size="footer" href="/" />
            <p className="mt-3 max-w-xs text-sm leading-snug text-[var(--v6-text-secondary)]">
              {siteConfig.tagline}. Custom software and accountable delivery for growing businesses.
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-[var(--v6-text-muted)]">
              {footerBrandNote}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-snug text-[var(--v6-text-secondary)]">
              {siteConfig.legalName}
              <br />
              {siteConfig.address}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--v6-text-secondary)]">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--v6-text)]">
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-[var(--v6-text)]"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={estimateHref({ source: "footer" })}
                className="v6-btn v6-btn-primary inline-flex !min-h-9 !px-4 !py-2 text-sm"
              >
                Get Free Estimate
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={consultationHref({ source: "footer" })}
                className="v6-btn v6-btn-secondary inline-flex !min-h-9 !px-4 !py-2 text-sm"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-sm font-semibold text-[var(--v6-text)]">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--v6-text-secondary)] transition-colors hover:text-[var(--v6-blue)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--v6-border)] pt-6 text-sm text-[var(--v6-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-[var(--v6-text)]">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[var(--v6-text)]">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-[var(--v6-text)]">
              Cookies
            </Link>
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
