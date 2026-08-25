import { ContactPageContent } from "@/components/leads/ContactPageContent";
import { ContactPageJsonLd } from "@/components/seo/ContactPageJsonLd";
import { MoneyInternalLinks } from "@/components/seo/MoneyInternalLinks";
import { PageHero } from "@/components/design/PageHero";
import { Button } from "@/components/ui/Button";
import { AccentGradient } from "@/components/design/typography";
import { ArrowRight } from "@/components/ui/Icons";
import { createMetadata } from "@/lib/metadata";
import { TrackedWhatsAppLink } from "@/components/conversion/TrackedWhatsAppLink";

export const metadata = createMetadata({
  title: "Contact Maxwell | Quote in 4 Hours",
  description:
    "Contact Maxwell for website development, SEO, or AMC in Vadodara. Reply within 4 hours on WhatsApp, phone, or form. From ₹35,000. No obligation.",
  path: "/contact",
  keywords: [
    "contact website development company Vadodara",
    "Maxwell Electrodeal contact",
    "website quote Vadodara",
    "get estimate manufacturer website",
  ],
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
        <TrackedWhatsAppLink className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
          WhatsApp instead
        </TrackedWhatsAppLink>
      </PageHero>
      <ContactPageContent />
      <MoneyInternalLinks path="/contact" />
    </>
  );
}
