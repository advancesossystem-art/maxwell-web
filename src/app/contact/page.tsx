import { ContactPageContent } from "@/components/leads/ContactPageContent";
import { ContactPageJsonLd } from "@/components/seo/ContactPageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Software Development Company India",
  description:
    "Contact Maxwell Electrodeal — India-based software development company (Vadodara, Gujarat). Free consultation for website, ERP, mobile app, AI & SaaS. Email, phone & meeting booking.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <ContactPageContent />
    </>
  );
}
