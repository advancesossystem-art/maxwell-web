import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { H2, Lead } from "@/components/design/typography";

const WHATSAPP = "919586868538";

type PortfolioCTAProps = {
  title: string;
  description: string;
  contactHref?: string;
  whatsappMessage?: string;
  variant?: "full" | "inline";
  actions?: React.ReactNode;
};

export function PortfolioCTA({
  title,
  description,
  contactHref = "/contact",
  whatsappMessage = "Hi Maxwell, I'd like to discuss a software project.",
  variant = "full",
  actions,
}: PortfolioCTAProps) {
  if (variant === "inline") {
    return (
      <div className="v6-inline-cta">
        <div>
          <p className="v6-inline-cta__title">{title}</p>
          <p className="v6-inline-cta__desc">{description}</p>
        </div>
        {actions ?? (
          <div className="flex flex-wrap gap-3">
            <Button href={contactHref} size="sm">
              Book Consultation
            </Button>
            <Button href={contactHref} variant="glass" size="sm">
              Request Proposal
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="section-py" aria-label="Call to action">
      <div className="card-premium relative overflow-hidden rounded-3xl border-brand-500/20 bg-[#030b1f] px-8 py-16 sm:px-16 lg:py-20">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <H2>{title}</H2>
          <Lead className="mx-auto mt-4 text-[#94A3B8]">{description}</Lead>
          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            {actions ?? (
              <>
                <Button href={contactHref} size="lg">
                  Book Consultation <ArrowRight />
                </Button>
                <Button href={contactHref} size="lg" variant="glass">
                  Request Proposal
                </Button>
                <Button
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`}
                  size="lg"
                  variant="glass"
                  external
                >
                  WhatsApp
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BreadcrumbNav({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={className ?? "mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--v6-text-muted,#94A3B8)]"}
    >
      <Link href="/" className="transition-colors hover:text-[var(--v6-text,#fff)]">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className="text-[var(--v6-border-strong,rgba(255,255,255,0.25))]">/</span>
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-[var(--v6-text,#fff)]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--v6-text,#CBD5E1)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
