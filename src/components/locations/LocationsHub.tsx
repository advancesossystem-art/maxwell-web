import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ArrowRight } from "@/components/ui/Icons";
import { getAllCountries, getAllCities } from "@/lib/locations-data";
import { PageHero } from "@/components/design/PageHero";
import { PageSection, SectionHeader } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3, Caption } from "@/components/design/typography";

export function LocationsHub() {
  const countries = getAllCountries();
  const cities = getAllCities();
  const india = countries.find((c) => c.slug === "india");
  const international = countries.filter((c) => c.region === "international");

  return (
    <>
      <PageHero
        eyebrow="Locations"
        title={
          <>
            Software development <AccentGradient>where you operate</AccentGradient>
          </>
        }
        description="Local market expertise across India and global delivery for USA, UK, UAE, and more."
      >
        <Button href="/contact" size="lg">
          Discuss Your Project <ArrowRight />
        </Button>
      </PageHero>

      {india && (
        <PageSection>
          <SectionHeader
            eyebrow="India"
            title="Indian cities we serve"
            action={
              <Link href="/locations/india" className="text-sm font-medium text-brand-500 hover:text-brand-400">
                View India hub →
              </Link>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Card key={city.slug} href={`/locations/india/${city.slug}`}>
                <H3 className="group-hover:text-brand-400 transition-colors">{city.name}</H3>
                <Caption>{city.state}</Caption>
                <Caption className="mt-2 line-clamp-2">{city.primaryKeyword}</Caption>
              </Card>
            ))}
          </div>
        </PageSection>
      )}

      <PageSection tone="elevated">
        <SectionHeader eyebrow="International" title="Global delivery" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {international.map((country) => (
            <Card key={country.slug} href={`/locations/${country.slug}`} padding="lg">
              <H3 className="group-hover:text-brand-400 transition-colors">{country.name}</H3>
              <Caption className="mt-2 line-clamp-2">{country.subheadline}</Caption>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-500">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Caption>
          Looking for solution-specific pages?{" "}
          <Link href="/solutions" className="font-medium text-brand-500 hover:text-brand-400">
            Browse Solutions
          </Link>{" "}
          or{" "}
          <Link href="/services" className="font-medium text-brand-500 hover:text-brand-400">
            Services catalog
          </Link>
          .
        </Caption>
      </PageSection>

      <FinalCTA />
    </>
  );
}
