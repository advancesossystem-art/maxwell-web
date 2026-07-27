"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/design/Card";
import { Caption, H3 } from "@/components/design/typography";
import { persistLeadContext } from "@/lib/lead-context";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
} from "@/lib/conversion-copy";
import {
  trackCTAClick,
  trackGuideDownload,
  trackIndustryAudit,
  trackNewsletterSignup,
  trackResourceDownload,
} from "@/lib/conversion-events";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export type MicroConversionVariant =
  | "newsletter"
  | "download"
  | "resource"
  | "guide"
  | "industry-audit";

type MicroConversionCTAProps = {
  variant: MicroConversionVariant;
  title?: string;
  description?: string;
  resourceName?: string;
  industryName?: string;
  href?: string;
  location?: string;
  className?: string;
};

const defaults: Record<
  MicroConversionVariant,
  { title: string; description: string; href: string; action: string }
> = {
  newsletter: {
    title: "Stay ahead on enterprise delivery",
    description: "Monthly insights on ERP, AI, and digital transformation — no spam.",
    href: "/contact",
    action: "Subscribe",
  },
  download: {
    title: "Download the ERP readiness checklist",
    description: "Assess your systems before your next build — free PDF.",
    href: "/resources/erp-readiness-checklist",
    action: "Download",
  },
  resource: {
    title: "Free implementation resources",
    description: "Checklists, frameworks, and guides from delivered projects.",
    href: "/resources",
    action: "Browse resources",
  },
  guide: {
    title: "In-depth implementation guides",
    description: "Step-by-step playbooks for ERP, AI, and mobile delivery.",
    href: "/guides",
    action: "View guides",
  },
  "industry-audit": {
    title: "Free industry workflow audit",
    description: "We'll map gaps in your operations and recommend a phased roadmap.",
    href: CONVERSION_ROUTES.consultation,
    action: CTA_LABELS.industryAudit,
  },
};

export function MicroConversionCTA({
  variant,
  title,
  description,
  resourceName,
  industryName,
  href,
  location = "micro_conversion",
  className,
}: MicroConversionCTAProps) {
  const preset = defaults[variant];
  const resolvedHref = href ?? (variant === "industry-audit" ? CONVERSION_ROUTES.consultation : preset.href);
  const leadContext =
    variant === "newsletter"
      ? { intent: "newsletter", source: location }
      : variant === "industry-audit" && industryName
        ? { industry: industryName, source: location }
        : undefined;

  function handleClick() {
    const name = title ?? preset.title;
    trackCTAClick(preset.action, resolvedHref, location);
    if (variant === "newsletter") trackNewsletterSignup(location);
    if (variant === "download") trackResourceDownload(resourceName ?? name, location);
    if (variant === "resource") trackResourceDownload("resources_hub", location);
    if (variant === "guide") trackGuideDownload(resourceName ?? "guides_hub", location);
    if (variant === "industry-audit" && industryName) {
      trackIndustryAudit(industryName, location);
    }
  }

  return (
    <Card
      interactive={false}
      padding="lg"
      className={cn("border-dashed border-brand-500/25", className)}
    >
      <H3 className="text-lg">{title ?? preset.title}</H3>
      <Caption className="mt-2">{description ?? preset.description}</Caption>
      <div className="mt-6 flex flex-wrap gap-3">
        {variant === "industry-audit" ? (
          <>
            <Button
              href={resolvedHref}
              size="sm"
              onClick={() => {
                if (leadContext) persistLeadContext(leadContext);
                handleClick();
                if (industryName) trackIndustryAudit(industryName, location);
              }}
            >
              {CTA_LABELS.industryAudit}
            </Button>
            <Button
              href={CONVERSION_ROUTES.consultation}
              size="sm"
              variant="secondary"
              onClick={() => {
                if (industryName) persistLeadContext({ industry: industryName, source: location });
              }}
            >
              {CTA_LABELS.discoveryCall}
            </Button>
          </>
        ) : (
          <Button
            href={resolvedHref}
            size="sm"
            onClick={() => {
              if (leadContext) persistLeadContext(leadContext);
              handleClick();
            }}
          >
            {preset.action}
            <ArrowRight />
          </Button>
        )}
        <Link
          href={CONVERSION_ROUTES.estimate}
          className="inline-flex items-center text-sm font-medium text-brand-500 hover:text-brand-400"
          onClick={() => trackCTAClick(CTA_LABELS.secondary, CONVERSION_ROUTES.estimate, location)}
        >
          {CTA_LABELS.secondary}
        </Link>
      </div>
    </Card>
  );
}
