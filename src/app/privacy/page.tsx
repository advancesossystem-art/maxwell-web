import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted">Last updated: June 2026</p>

        <div className="prose prose-slate mt-12 max-w-none space-y-6 text-muted">
          <p>
            {siteConfig.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
            and is committed to protecting your personal data.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as name, email, company, phone number, and
            project details when you contact us through our website forms.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, provide services, improve our website, and
            communicate about projects you have engaged us for.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share data
            with service providers who assist in operating our website, subject to confidentiality agreements.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
