import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryLandingPage } from "@/components/locations/CountryLandingPage";
import { createLocationCountryMetadata } from "@/lib/metadata";
import { getCountryBySlug, getLocationStaticParams } from "@/lib/locations-data";

type PageProps = {
  params: Promise<{ country: string }>;
};

/** No static pre-build for programmatic country pages — noindexed. */
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return { robots: { index: false, follow: false } };
}

export default async function CountryPage({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) notFound();

  return <CountryLandingPage country={country} />;
}
