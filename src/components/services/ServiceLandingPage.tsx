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
import { ServicePageJsonLd } from "@/components/seo/JsonLd";
import type { ServicePageData } from "@/lib/services-data";

export function ServiceLandingPage({ service }: { service: ServicePageData }) {
  return (
    <>
      <ServicePageJsonLd service={service} />
      <ServiceHero service={service} />
      <ServiceProblems service={service} />
      <ServiceSolutions service={service} />
      <ServiceFeatures service={service} />
      <ServiceTechStack service={service} />
      <ServiceProcessWrapper />
      <ServiceIndustries service={service} />
      <ServiceProjects service={service} />
      <ServiceWhy service={service} />
      <ServiceFAQ service={service} />
      <Container>
        <ServiceCTA serviceName={service.title} serviceSlug={service.slug} />
      </Container>
      <ServiceCTAStrip serviceName={service.title} />
    </>
  );
}
