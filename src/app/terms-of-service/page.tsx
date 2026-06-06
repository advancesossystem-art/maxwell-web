import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { legalLastUpdated, termsSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for using ${siteConfig.name} website and tools.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={legalLastUpdated} activeHref="/terms-of-service">
      <p>These terms govern your use of {siteConfig.url} operated by {siteConfig.legalName}.</p>
      {termsSections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </LegalPageLayout>
  );
}
