import { TrustCTA } from "@/components/conversion/TrustCTA";
import { InlineCTA } from "@/components/conversion/InlineCTA";

export function CompanyCTA({ variant = "full" }: { variant?: "full" | "inline" }) {
  if (variant === "inline") {
    return (
      <InlineCTA
        title="Partner with a team built for the long term"
        description="Book a consultation or request a scoped estimate."
        context={{ source: "company-inline" }}
        location="company_inline"
      />
    );
  }

  return (
    <TrustCTA
      location="company_footer"
      context={{ source: "company" }}
      title="Partner with a team built for the long term"
      description="Real people. Real processes. Measurable delivery — from discovery through long-term support."
    />
  );
}

export { BreadcrumbNav as CompanyBreadcrumb } from "@/components/design/PortfolioCTA";
