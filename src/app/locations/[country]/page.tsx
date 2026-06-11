import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryLandingPage } from "@/components/locations/CountryLandingPage";
import { createLocationCountryMetadata } from "@/lib/metadata";
import { getCountryBySlug, getLocationStaticParams } from "@/lib/locations-data";

type PageProps = {
  params: Promise<{ country: string }>;
};

export async function generateStaticParams() {
  return getLocationStaticParams()
    .filter((p) => !p.city)
    .map((p) => ({ country: p.country }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return { robots: { index: false, follow: false } };

  return createLocationCountryMetadata(country);
}

export default async function CountryPage({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) notFound();

  return <CountryLandingPage country={country} />;
}
