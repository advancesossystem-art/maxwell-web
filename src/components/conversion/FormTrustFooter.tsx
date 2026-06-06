import { TrustStrip } from "@/components/trust/TrustStrip";
import { CONVERSION_EXPECTATIONS } from "@/lib/conversion-copy";
import { cn } from "@/lib/utils";

type FormTrustFooterProps = {
  variant?: "contact" | "consultation" | "estimate" | "discovery";
  className?: string;
  showTrustStrip?: boolean;
};

const successCopy: Record<NonNullable<FormTrustFooterProps["variant"]>, string> = {
  contact: CONVERSION_EXPECTATIONS.successContact,
  consultation: CONVERSION_EXPECTATIONS.successConsultation,
  estimate: CONVERSION_EXPECTATIONS.successEstimate,
  discovery: CONVERSION_EXPECTATIONS.successConsultation,
};

export function FormTrustFooter({
  variant = "contact",
  className,
  showTrustStrip = true,
}: FormTrustFooterProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {showTrustStrip ? <TrustStrip compact /> : null}
      <p className="text-xs text-[var(--v6-text-secondary,#94A3B8)]">
        <span className="font-medium text-[var(--v6-text,#CBD5E1)]">
          {CONVERSION_EXPECTATIONS.responseTime}.
        </span>{" "}
        {successCopy[variant]}
      </p>
      <p className="text-xs text-[var(--v6-text-muted,rgba(255,255,255,0.35))]">
        {CONVERSION_EXPECTATIONS.privacyNote}
      </p>
    </div>
  );
}
