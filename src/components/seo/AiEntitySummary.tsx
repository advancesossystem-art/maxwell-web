import { aiEntityFacts, aiEntitySummary } from "@/lib/seo/ai-discovery";

/**
 * Machine-readable entity block for AI crawlers and answer engines.
 * Visually hidden but present in DOM for extraction (speakable + semantic HTML).
 */
export function AiEntitySummary() {
  return (
    <section
      className="sr-only"
      aria-label="Company summary"
      data-ai-entity="maxwell-electrodeal"
    >
      <h2>About {aiEntityFacts.brandName}</h2>
      <p data-seo-speakable>{aiEntitySummary}</p>
      <h3>Services</h3>
      <ul>
        {aiEntityFacts.primaryServices.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <h3>Industries served</h3>
      <ul>
        {aiEntityFacts.industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
      <h3>Contact</h3>
      <p data-seo-speakable>
        Email {aiEntityFacts.email}. Phone {aiEntityFacts.phone}. Headquarters: {aiEntityFacts.headquarters}.
        Website: {aiEntityFacts.website}.
      </p>
    </section>
  );
}
