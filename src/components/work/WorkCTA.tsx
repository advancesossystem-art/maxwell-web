import { TrustCTA } from "@/components/conversion/TrustCTA";
import { StickyCTA } from "@/components/conversion/StickyCTA";
import { BreadcrumbNav } from "@/components/design/PortfolioCTA";
import type { ConversionContext } from "@/lib/conversion-copy";

export function WorkCTA({ projectTitle }: { projectTitle?: string }) {
  const context: ConversionContext | undefined = projectTitle
    ? { service: projectTitle, source: "work-footer" }
    : undefined;

  return (
    <TrustCTA
      location="work_footer"
      context={context}
      title={projectTitle ? "Build your own success story" : "Ready to start your project?"}
      description="Book a consultation or explore documented case studies with measurable outcomes."
    />
  );
}

export function WorkBreadcrumb({ title }: { title: string }) {
  return <BreadcrumbNav items={[{ label: "Work", href: "/work" }, { label: title }]} />;
}

export function WorkCTAStrip({ projectTitle }: { projectTitle: string }) {
  return (
    <StickyCTA
      context={{ service: projectTitle, source: "work-sticky" }}
      location="work_sticky"
    />
  );
}
