import { LocationsHub } from "@/components/locations/LocationsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Software Development Locations — India & Global",
  description:
    "Maxwell Electrodeal serves Vadodara, Mumbai, Bengaluru, Delhi, and international clients in USA, UK, UAE, Canada, Australia, Germany, and Singapore.",
  path: "/locations",
  keywords: ["software development India", "IT company locations", "offshore development"],
});

export default function LocationsPage() {
  return <LocationsHub />;
}
