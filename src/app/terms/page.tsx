import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-muted">Last updated: June 2026</p>

        <div className="prose prose-slate mt-12 max-w-none space-y-6 text-muted">
          <p>
            These Terms of Service govern your use of the website and services provided by{" "}
            {siteConfig.legalName}.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Services</h2>
          <p>
            We provide software development, design, and related technology consulting services as
            described on our website and agreed upon in individual project contracts.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p>
            Upon full payment for project deliverables, clients receive ownership of custom-developed
            source code and designs as specified in individual project agreements.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            Our liability is limited to the fees paid for the specific service giving rise to the claim,
            except where prohibited by applicable law.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about these terms? Contact{" "}
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
