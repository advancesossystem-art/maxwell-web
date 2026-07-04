import Link from "next/link";
import { CTA_LABELS, CONVERSION_ROUTES } from "@/lib/conversion-copy";

const offers = [
  {
    label: "Free Consultation",
    href: CONVERSION_ROUTES.consultation,
    desc: "30-min strategy session",
    ariaLabel: CTA_LABELS.primary,
  },
  {
    label: "Free Project Estimate",
    href: CONVERSION_ROUTES.estimate,
    desc: "Phased quote in 24–48 hrs",
    ariaLabel: CTA_LABELS.secondary,
  },
  {
    label: "Free ERP Assessment",
    href: "/tools/erp-roi-calculator",
    desc: "ROI & readiness check",
    ariaLabel: CTA_LABELS.freeErpAssessment,
  },
  {
    label: "Free Custom Roadmap",
    href: "/tools/project-roadmap",
    desc: "Phased delivery plan",
    ariaLabel: CTA_LABELS.customRoadmap,
  },
] as const;

export function RiskReductionBar({ className }: { className?: string }) {
  return (
    <section
      className={className ?? "border-b border-[var(--v6-border)] bg-white py-6"}
      aria-label="Free offers — no obligation"
    >
      <div className="v6-container">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
          Zero-risk next steps
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <li key={o.label}>
              <Link
                href={o.href}
                aria-label={o.ariaLabel}
                className="group block rounded-xl border border-[var(--v6-border)] bg-[#f8fafc] p-4 transition-colors hover:border-[#4f46e5]/30 hover:bg-white"
              >
                <span className="font-display text-sm font-semibold text-[var(--v6-text)] group-hover:text-[#4f46e5]">
                  {o.label}
                </span>
                <span className="mt-1 block text-xs text-[var(--v6-text-secondary)]">{o.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
