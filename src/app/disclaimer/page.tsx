import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { legalLastUpdated, disclaimerSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: `Website disclaimer for ${siteConfig.name} content and business tools.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated={legalLastUpdated} activeHref="/disclaimer">
      {disclaimerSections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </LegalPageLayout>
  );
}
