import type { Metadata } from "next";
import { VadodaraLandingPage } from "@/components/locations/VadodaraLandingPage";
import { createMetadata } from "@/lib/metadata";

const vadodaraKeywords = [
  "website developer in Vadodara",
  "website development in Vadodara",
  "website development company Vadodara",
  "web development company Vadodara",
  "website company Vadodara Gujarat",
  "manufacturer website developer Vadodara",
  "SEO company Vadodara",
  "website AMC Vadodara",
  "web development company Vadodara Gujarat",
  "Next.js website company Vadodara",
];

const pageTitle = "Web Development Vadodara | Local Office";
const pageDescription =
  "Website development in Vadodara for any business that needs a site — SEO & AMC included. Starter from ₹35,000 · AMC from ₹15,000/mo. Free quote in 24h.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/locations/india/vadodara",
  keywords: vadodaraKeywords,
});

export default function VadodaraLocationPage() {
  return <VadodaraLandingPage />;
}
