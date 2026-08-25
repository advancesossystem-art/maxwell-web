import { LocationsHub } from "@/components/locations/LocationsHub";
import { buildPageMetadata } from "@/lib/seo-helpers";

export const metadata = buildPageMetadata({
  title: "Website Development Locations | India & Gujarat",
  description:
    "Website development locations across India and Gujarat — Vadodara office, GIDC estates, pan-India delivery. Sites from ₹35,000.",
  path: "/locations",
  keywords: ["website development India", "website company Gujarat", "Vadodara web development locations"],
  absoluteTitle: true,
});

export default function LocationsPage() {
  return <LocationsHub />;
}
