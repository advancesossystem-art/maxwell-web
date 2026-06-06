"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { InlineCTA } from "@/components/conversion/InlineCTA";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";
import { SecondaryCTA } from "@/components/conversion/SecondaryCTA";
import { StickyCTA } from "@/components/conversion/StickyCTA";
import { TrustCTA } from "@/components/conversion/TrustCTA";
import { TertiaryCTA } from "@/components/conversion/TertiaryCTA";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  discoveryHref,
  type ConversionContext,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { trackIndustryAudit } from "@/lib/conversion-events";

type IndustryCTAProps = {
  industryName: string;
  variant?: "full" | "inline" | "compact";
  caseStudySlug?: string;
  className?: string;
};

function industryContext(industryName: string): ConversionContext {
  return { industry: industryName, source: "industry-page" };
}

export function IndustryCTA({
  industryName,
  variant = "full",
  caseStudySlug,
  className,
}: IndustryCTAProps) {
  const context = industryContext(industryName);
  const auditHref = `${CONVERSION_ROUTES.consultation}?industry=${encodeURIComponent(industryName)}&intent=audit`;

  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        <PrimaryCTA context={context} location="industry_compact" size="sm" showArrow={false} />
        <Button
          href={auditHref}
          variant="secondary"
          size="sm"
          onClick={() => {
            trackIndustryAudit(industryName, "industry_compact");
            trackCTAClick(CTA_LABELS.industryAudit, auditHref, "industry_compact");
          }}
        >
          {CTA_LABELS.industryAudit}
        </Button>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <InlineCTA
        title={`Can Maxwell solve your ${industryName.toLowerCase()} challenges?`}
        description="Free industry audit · Discovery call · ROI-focused roadmap"
        context={context}
        location="industry_inline"
        className={className}
      />
    );
  }

  return (
    <div className={className}>
      <TrustCTA
        location="industry_footer"
        context={context}
        title={`Start your ${industryName} digital transformation`}
        description="Book a consultation or request a workflow audit — we'll map gaps and recommend a phased path forward."
      />
      <div className="mx-auto -mt-8 flex max-w-3xl flex-wrap justify-center gap-3 pb-8">
        <Button
          href={auditHref}
          size="md"
          variant="glass"
          onClick={() => {
            trackIndustryAudit(industryName, "industry_footer");
            trackCTAClick(CTA_LABELS.industryAudit, auditHref, "industry_footer");
          }}
        >
          {CTA_LABELS.industryAudit}
        </Button>
        <Button
          href={discoveryHref(context)}
          size="md"
          variant="glass"
          onClick={() => trackCTAClick(CTA_LABELS.discoveryCall, discoveryHref(context), "industry_footer")}
        >
          {CTA_LABELS.discoveryCall}
        </Button>
        <SecondaryCTA context={context} location="industry_footer_roi" label={CTA_LABELS.secondary} size="md" />
        {caseStudySlug ? (
          <Link
            href={`${CONVERSION_ROUTES.caseStudies}/${caseStudySlug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-500"
          >
            {CTA_LABELS.tertiary} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <TertiaryCTA location="industry_footer" size="sm" variant="ghost" />
        )}
      </div>
    </div>
  );
}

export function IndustryCTAStrip({ industryName }: { industryName: string }) {
  return <StickyCTA context={industryContext(industryName)} location="industry_sticky" />;
}

export const industryIcons: Record<string, React.ReactNode> = {
  factory: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 21V9.75m0 0L12 3.75l8.25 6M3.75 21l8.25-6 8.25 6M12 9.75V21" />
    </svg>
  ),
  health: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  education: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
    </svg>
  ),
  logistics: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  retail: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  ),
  construction: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.88m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  ),
};

export function IndustryBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-white/40">
      <Link href="/" className="hover:text-white/70 transition-colors">
        Home
      </Link>
      <span>/</span>
      <Link href="/industries" className="hover:text-white/70 transition-colors">
        Industries
      </Link>
      <span>/</span>
      <span className="text-white/70">{title}</span>
    </nav>
  );
}
