import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { legalLastUpdated, privacySections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. How we collect, use, and protect your data.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={legalLastUpdated} activeHref="/privacy-policy">
      <p>
        {siteConfig.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to
        protecting your personal data in accordance with applicable laws.
      </p>
      {privacySections.map((s) => (
        <section key={s.title}>
          <h2 className="font-display text-xl font-semibold text-foreground">{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}
    </LegalPageLayout>
  );
}
