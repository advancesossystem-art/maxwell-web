import { TrustCTA } from "@/components/conversion/TrustCTA";
import { StickyCTA } from "@/components/conversion/StickyCTA";
import { BreadcrumbNav } from "@/components/design/PortfolioCTA";
import type { ConversionContext } from "@/lib/conversion-copy";

export function CaseStudyCTA({ studyTitle }: { studyTitle?: string }) {
  const context: ConversionContext | undefined = studyTitle
    ? { service: studyTitle, source: "case-study-footer" }
    : undefined;

  return (
    <TrustCTA
      location="case_study_footer"
      context={context}
      title={studyTitle ? "Ready to achieve similar results?" : "Start your success story"}
      description="Book a consultation or request a phased estimate — we'll map scope, timeline, and measurable ROI."
    />
  );
}

export function CaseStudyBreadcrumb({ title }: { title: string }) {
  return (
    <BreadcrumbNav items={[{ label: "Case Studies", href: "/case-studies" }, { label: title }]} />
  );
}

export function CaseStudyCTAStrip({ studyTitle }: { studyTitle: string }) {
  return (
    <StickyCTA
      context={{ service: studyTitle, source: "case-study-sticky" }}
      location="case_study_sticky"
    />
  );
}
