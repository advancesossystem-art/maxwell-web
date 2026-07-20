import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { companyAuthorityFacts, founderAuthorityPaths } from "@/lib/trust/company-authority";

type CompanyAuthorityStripProps = {
  showMapLink?: boolean;
  className?: string;
};

/** NAP + business facts — contact, company, footer. */
export function CompanyAuthorityStrip({ showMapLink = true, className = "" }: CompanyAuthorityStripProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface-elevated p-5 text-sm text-muted ${className}`}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content={companyAuthorityFacts.legalName} />
      <p className="font-display font-semibold text-white" itemProp="legalName">
        {companyAuthorityFacts.legalName}
      </p>
      <p className="mt-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">{businessAddress.streetAddress}</span>,{" "}
        <span itemProp="addressLocality">{businessAddress.addressLocality}</span>,{" "}
        <span itemProp="addressRegion">{businessAddress.addressRegion}</span>{" "}
        <span itemProp="postalCode">{businessAddress.postalCode}</span>, India
      </p>
      <ul className="mt-4 space-y-1.5">
        <li>
          <span className="text-white">Phone:</span>{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-brand-600 hover:underline" itemProp="telephone">
            {siteConfig.phone}
          </a>
        </li>
        <li>
          <span className="text-white">Email:</span>{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline" itemProp="email">
            {siteConfig.email}
          </a>
        </li>
        <li>
          <span className="text-white">Hours:</span> {companyAuthorityFacts.businessHours}
        </li>
        <li>
          <span className="text-white">Founded:</span> {companyAuthorityFacts.foundedYear} · Vadodara HQ
        </li>
        <li>{companyAuthorityFacts.gstNote}</li>
        <li>{companyAuthorityFacts.responseExpectation}</li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
        {showMapLink ? (
          <a
            href={businessAddress.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            Open in Google Maps →
          </a>
        ) : null}
        <Link href={founderAuthorityPaths.company} className="text-brand-600 hover:underline">
          Company profile →
        </Link>
        <Link href={founderAuthorityPaths.process} className="text-brand-600 hover:underline">
          Delivery process →
        </Link>
      </div>
    </div>
  );
}
