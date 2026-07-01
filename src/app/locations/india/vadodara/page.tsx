import type { Metadata } from "next";
import { VadodaraLandingPage } from "@/components/locations/VadodaraLandingPage";
import { createMetadata } from "@/lib/metadata";

const vadodaraKeywords = [
  "software company Vadodara",
  "website development company Vadodara",
  "IT company Vadodara",
  "ERP software Vadodara",
  "custom software development Vadodara",
  "web development company Vadodara Gujarat",
  "manufacturer website developer Vadodara",
  "CRM software Vadodara",
  "software development Baroda",
  "IT services Vadodara Gujarat",
];

const pageTitle = "Software & Website Development Company in Vadodara | Maxwell Electrodeal";
const pageDescription =
  "Maxwell Electrodeal — Vadodara's custom software, website, ERP & CRM development company. GST-registered, ISO-aligned. Serving manufacturers, pharma, engineering & MSME across Gujarat. Free consultation.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/locations/india/vadodara",
  keywords: vadodaraKeywords,
});

export default function VadodaraLocationPage() {
  return <VadodaraLandingPage />;
}
