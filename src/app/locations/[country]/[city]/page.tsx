import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityLandingPage } from "@/components/locations/CityLandingPage";
import { createLocationCityMetadata } from "@/lib/metadata";
import { getCityBySlug, getLocationStaticParams } from "@/lib/locations-data";

type PageProps = {
  params: Promise<{ country: string; city: string }>;
};

/** Only pre-build Ahmedabad and Hyderabad — the two cities with real GSC traffic. All others are noindexed on-demand. */
const INDEXABLE_CITIES = new Set(["ahmedabad", "hyderabad"]);

export async function generateStaticParams() {
  return getLocationStaticParams()
    .filter((p): p is { country: string; city: string } => !!p.city && INDEXABLE_CITIES.has(p.city))
    .map((p) => ({ country: p.country, city: p.city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, city: citySlug } = await params;
  const cityData = getCityBySlug(country, citySlug);
  if (!cityData) return { robots: { index: false, follow: false } };

  const base = createLocationCityMetadata({
    metaTitle: cityData.metaTitle,
    metaDescription: cityData.metaDescription,
    countrySlug: country,
    citySlug,
    primaryKeyword: cityData.primaryKeyword,
    secondaryKeywords: cityData.secondaryKeywords,
    name: cityData.name,
  });

  // Noindex all cities except the two with real GSC equity
  if (!INDEXABLE_CITIES.has(citySlug)) {
    return { ...base, robots: { index: false, follow: false } };
  }
  return base;
}

export default async function CityPage({ params }: PageProps) {
  const { country, city: citySlug } = await params;
  const cityData = getCityBySlug(country, citySlug);

  if (!cityData) notFound();

  return <CityLandingPage city={cityData} />;
}
