import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Data Processing", href: "/data-processing" },
] as const;

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
  activeHref,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  activeHref: string;
}) {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-5xl">
        <nav aria-label="Legal documents" className="mb-10 flex flex-wrap gap-2">
          {legalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === activeHref ? "page" : undefined}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                item.href === activeHref
                  ? "bg-brand-600 text-white"
                  : "bg-surface text-muted hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <h1 className="font-display text-4xl font-bold text-foreground">{title}</h1>
        <p className="mt-3 text-muted">Last updated: {lastUpdated}</p>
        <p className="mt-2 text-sm text-muted">
          {siteConfig.legalName} · Questions:{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
            {siteConfig.email}
          </a>
        </p>
        <article className="prose prose-slate mt-12 max-w-none space-y-6 text-muted">{children}</article>
      </Container>
    </section>
  );
}
