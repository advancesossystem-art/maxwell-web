import {
  CityHero,
  LocalInsights,
  LocalChallenges,
  CityServices,
  CityIndustries,
  CityCaseStudies,
  CityWhyMaxwell,
  ProgrammaticSeoBlock,
  LocationFAQ,
  LocationCTA,
} from "@/components/locations/LocationSections";
import { CityPageJsonLd } from "@/components/seo/JsonLd";
import type { CityPageData } from "@/lib/locations-data";

export function CityLandingPage({ city }: { city: CityPageData }) {
  return (
    <>
      <CityPageJsonLd city={city} />
      <CityHero city={city} />
      <LocalInsights city={city} />
      <LocalChallenges
        challenges={city.localChallenges}
        title={`Business challenges in ${city.name}`}
      />
      <CityServices city={city} />
      <CityIndustries city={city} />
      <CityCaseStudies city={city} />
      <CityWhyMaxwell city={city} />
      <LocationFAQ
        faqs={city.faqs}
        title={`Software development in ${city.name}`}
        locationName={city.name}
      />
      <ProgrammaticSeoBlock cityName={city.name} />
      <LocationCTA locationName={city.name} />
    </>
  );
}
