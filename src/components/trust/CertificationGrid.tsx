import { Card } from "@/components/design/Card";
import { H3, Caption, Eyebrow } from "@/components/design/typography";
import { cn } from "@/lib/utils";

export type CertificationItem = {
  id: string;
  name: string;
  category: "ISO" | "AWS" | "Microsoft" | "Google Cloud" | "Security" | "Compliance";
  status: "aligned" | "partner" | "placeholder";
  description: string;
};

export const certificationCatalog: CertificationItem[] = [
  {
    id: "iso-27001",
    name: "ISO 27001",
    category: "ISO",
    status: "aligned",
    description: "Information security management processes aligned to ISO 27001 controls.",
  },
  {
    id: "aws",
    name: "AWS",
    category: "AWS",
    status: "partner",
    description: "Solutions deployed on AWS with Well-Architected review practices.",
  },
  {
    id: "microsoft",
    name: "Microsoft Azure",
    category: "Microsoft",
    status: "aligned",
    description: "Azure-native integrations and hybrid cloud delivery experience.",
  },
  {
    id: "gcp",
    name: "Google Cloud",
    category: "Google Cloud",
    status: "aligned",
    description: "Data and application workloads on GCP where client policy requires it.",
  },
  {
    id: "security",
    name: "OWASP & Secure SDLC",
    category: "Security",
    status: "aligned",
    description: "Security reviews, dependency scanning, and OWASP-aware development standards.",
  },
  {
    id: "compliance",
    name: "GDPR / SOC 2 Practices",
    category: "Compliance",
    status: "placeholder",
    description: "Privacy-by-design and SOC 2 aligned delivery — formal certification on client request.",
  },
];

const statusLabel: Record<CertificationItem["status"], string> = {
  aligned: "Process aligned",
  partner: "Cloud partner practices",
  placeholder: "On request / in progress",
};

export function CertificationGrid({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Standards & cloud readiness</Eyebrow>
        <Caption className="mx-auto mt-3">
          Labels reflect delivery practices — not implied third-party certification unless explicitly stated.
        </Caption>
      </div>
      <div
        className={cn(
          "mt-8 grid gap-4",
          compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {certificationCatalog.map((cert) => (
          <Card key={cert.id} interactive={false} padding="md">
            <div className="flex items-start justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">
                {cert.category}
              </span>
              <span className="v6-chip rounded-full px-2 py-0.5 text-[10px]">
                {statusLabel[cert.status]}
              </span>
            </div>
            <H3 className="mt-3 text-base">{cert.name}</H3>
            <Caption className="mt-2 leading-relaxed">{cert.description}</Caption>
          </Card>
        ))}
      </div>
    </div>
  );
}
