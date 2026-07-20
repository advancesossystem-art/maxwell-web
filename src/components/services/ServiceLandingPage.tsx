import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/services/ServiceHero";
import {
  ServiceProblems,
  ServiceSolutions,
  ServiceFeatures,
  ServiceTechStack,
} from "@/components/services/ServiceSections";
import {
  ServiceIndustries,
  ServiceProjects,
  ServiceWhy,
  ServiceProcessWrapper,
  ServiceFAQ,
} from "@/components/services/ServiceSections2";
import { ServiceCTA, ServiceCTAStrip } from "@/components/services/ServiceCTA";
import { ServiceLeadForm } from "@/components/leads/ServiceLeadForm";
import { ServiceSeoSections } from "@/components/services/ServiceSeoSections";
import { RecommendedServicesBlock } from "@/components/engagement/RecommendedServicesBlock";
import { ServicePageJsonLd } from "@/components/seo/JsonLd";
import { GeoContentSection } from "@/components/authority/GeoContentSection";
import { StatisticsPanel } from "@/components/authority/StatisticsPanel";
import { ProofSignalsBar } from "@/components/trust/ProofSignalsBar";
import { FounderAuthorityCard } from "@/components/trust/FounderAuthorityCard";
import { ServiceCommercialTrust } from "@/components/trust/ServiceCommercialTrust";
import { buildServiceGeo } from "@/lib/geo-page-content";
import { getStatisticsForService } from "@/lib/statistics-data";
import { StickyEstimateCTA } from "@/components/common/StickyEstimateCTA";
import { StraightAnswers } from "@/components/conversion/StraightAnswers";
import { ServiceConversionNarrativeSection } from "@/components/services/ServiceConversionNarrative";
import { serviceConversionNarratives } from "@/lib/service-conversion-data";
import type { ServicePageData } from "@/lib/services-data";
import type { ServiceSlug } from "@/lib/services-data";

export function ServiceLandingPage({ service }: { service: ServicePageData }) {
  const geo = buildServiceGeo(service);
  const stats = getStatisticsForService(service.slug as ServiceSlug);
  const conversionNarrative = serviceConversionNarratives[service.slug];

  return (
    <>
      <ServicePageJsonLd service={service} />
      <ServiceHero service={service} />
      <FounderAuthorityCard compact />
      {conversionNarrative ? <ServiceConversionNarrativeSection narrative={conversionNarrative} /> : null}
      <ServiceCommercialTrust service={service} />
      <GeoContentSection geo={geo} />
      <StatisticsPanel {...stats} />
      <ProofSignalsBar />
      <ServiceProblems service={service} />
      <ServiceSolutions service={service} />
      <ServiceFeatures service={service} />
      <ServiceTechStack service={service} />
      <ServiceProcessWrapper />
      <ServiceIndustries service={service} />
      <ServiceProjects service={service} />
      <ServiceWhy service={service} />
      <StraightAnswers />
      <ServiceFAQ service={service} />
      <ServiceSeoSections service={service} />
      <ServiceLeadForm serviceName={service.title} serviceSlug={service.slug} />
      <Container>
        <RecommendedServicesBlock serviceSlug={service.slug} />
        <ServiceCTA serviceName={service.title} serviceSlug={service.slug} />
      </Container>
      <ServiceCTAStrip serviceName={service.title} />
      <StickyEstimateCTA service={service.title} source={`service-${service.slug}`} />
    </>
  );
}
