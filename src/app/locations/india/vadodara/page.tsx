import type { Metadata } from "next";
import { VadodaraLandingPage } from "@/components/locations/VadodaraLandingPage";
import { createMetadata } from "@/lib/metadata";

const vadodaraKeywords = [
  "website developer in Vadodara",
  "website development in Vadodara",
  "website development company Vadodara",
  "software company Vadodara",
  "web development company Vadodara",
  "IT company Vadodara",
  "ERP software Vadodara",
  "custom software development Vadodara",
  "web development company Vadodara Gujarat",
  "manufacturer website developer Vadodara",
  "CRM software Vadodara",
  "software development Baroda",
  "IT services Vadodara Gujarat",
];

const pageTitle = "Website Developer in Vadodara — Software & Web Dev Company";
const pageDescription =
  "Website developer in Vadodara, Gujarat: Next.js business sites, manufacturer catalogs, ERP & CRM. Local team at Lalita Tower · 50+ projects · From ₹75K. Free quote in 24h.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/locations/india/vadodara",
  keywords: vadodaraKeywords,
});

export default function VadodaraLocationPage() {
  return <VadodaraLandingPage />;
}
