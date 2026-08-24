import { ContactPageContent } from "@/components/leads/ContactPageContent";
import { ContactPageJsonLd } from "@/components/seo/ContactPageJsonLd";
import { PageHero } from "@/components/design/PageHero";
import { Button } from "@/components/ui/Button";
import { AccentGradient } from "@/components/design/typography";
import { ArrowRight } from "@/components/ui/Icons";
import { createMetadata } from "@/lib/metadata";
import { WHATSAPP_HREF_CONTACT } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact Maxwell — Free Quote in 4 Hours | Vadodara",
  description:
    "Talk to Maxwell Electrodeal about your website, ERP, CRM, or software project. Reply within 4 hours on WhatsApp, phone, or form. No obligation · NDA available.",
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
            Get a <AccentGradient>free quote</AccentGradient> in 4 hours
          </>
        }
        description="Short form below — or WhatsApp us. No obligation. We only ask what we need to reply with a clear next step."
      >
        <Button href="#contact-form" size="lg">
          Fill the quote form
          <ArrowRight />
        </Button>
        <Button href={WHATSAPP_HREF_CONTACT} size="lg" variant="outline" external>
          WhatsApp instead
        </Button>
      </PageHero>
      <ContactPageContent />
    </>
  );
}
