import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { legalLastUpdated, dataProcessingSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Data Processing",
  description: `Data processing information and enterprise DPA details for ${siteConfig.name}.`,
  path: "/data-processing",
});

export default function DataProcessingPage() {
  return (
    <LegalPageLayout title="Data Processing" lastUpdated={legalLastUpdated} activeHref="/data-processing">
      <p>Enterprise data processing overview for clients and prospects engaging {siteConfig.legalName}.</p>
      {dataProcessingSections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </LegalPageLayout>
  );
}
