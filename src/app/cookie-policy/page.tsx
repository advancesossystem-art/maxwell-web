import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { legalLastUpdated, cookieSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies.`,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated={legalLastUpdated} activeHref="/cookie-policy">
      <p>This policy explains how {siteConfig.legalName} uses cookies on {siteConfig.url}.</p>
      {cookieSections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </LegalPageLayout>
  );
}
