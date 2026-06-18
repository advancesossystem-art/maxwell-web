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
      {city.mapEmbedUrl ? (
        <section className="border-t border-[var(--v6-border)] py-12" aria-label="Office location map">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="font-display text-xl font-bold text-[var(--v6-text)]">Visit us in {city.name}</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--v6-border)]">
              <iframe
                title={`${city.name} office map`}
                src={city.mapEmbedUrl}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
