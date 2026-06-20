import { ContactPageContent } from "@/components/leads/ContactPageContent";
import { ContactPageJsonLd } from "@/components/seo/ContactPageJsonLd";
import { PageHero } from "@/components/design/PageHero";
import { Button } from "@/components/ui/Button";
import { AccentGradient } from "@/components/design/typography";
import { ArrowRight } from "@/components/ui/Icons";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us — Free Quote, 24hrs",
  description:
    "Talk to Maxwell Electrodeal in Vadodara, India. Free ERP, CRM, web or mobile app quote within 24 hours. Call, email, or book online — 50+ projects shipped.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start with a <AccentGradient>clear conversation</AccentGradient>
          </>
        }
        description="Tell us what is slowing the business down. We respond within one business day with a practical next step."
      >
        <Button href="/book-consultation" size="lg">
          Book Consultation
          <ArrowRight />
        </Button>
        <Button href="/get-estimate" size="lg" variant="outline">
          Get Project Estimate
        </Button>
      </PageHero>
      <ContactPageContent />
    </>
  );
}
