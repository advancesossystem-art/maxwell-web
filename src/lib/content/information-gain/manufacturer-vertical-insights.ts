/**
 * Phase 6A — Per-vertical information gain for manufacturer website spokes.
 * Factual, industry-specific — no invented clients or statistics.
 */

export type ManufacturerVerticalInsight = {
  slug: string;
  buyerChecklist: string[];
  commonMistakes: string[];
  selectionCriteria: string[];
  uniqueFaqs: { question: string; answer: string }[];
  ownedVsMarketplace: string;
  readinessQuestions: string[];
};

const BASE_CHECKLIST = [
  "List every product line that needs its own Google landing page",
  "Define the inquiry fields buyers must complete (MOQ, grade, destination port)",
  "Collect certificates, SDS/GMP docs, and factory photos before design starts",
];

export const manufacturerVerticalInsights: Record<string, ManufacturerVerticalInsight> = {
  "chemical-manufacturer": {
    slug: "chemical-manufacturer",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Map which products require SDS/MSDS download vs inquiry-only",
      "Plan CoA request workflow for bulk buyers",
      "Separate domestic GST quotes from export IEC inquiries",
    ],
    commonMistakes: [
      "Publishing SDS as unsearchable PDFs without product-linked pages",
      "Hiding CAS numbers and grades — buyers search by specification",
      "Using one generic contact form for bulk, sample, and compliance requests",
    ],
    selectionCriteria: [
      "Vendor understands GPCB documentation display (not legal advice — display only)",
      "Catalog supports filter by application, grade, and packaging",
      "Page speed on mobile — plant buyers browse on factory floor networks",
    ],
    uniqueFaqs: [
      {
        question: "Should chemical product pages include MSDS downloads?",
        answer:
          "Yes for B2B trust — link each SKU to its SDS with version date. Maxwell builds per-product document libraries; you supply approved files.",
      },
      {
        question: "How is a chemical catalog different from a corporate brochure site?",
        answer:
          "Catalog sites need spec tables, grade filters, and inquiry per product — brochure sites cap at 8 pages. Maxwell Professional tier targets 15–25 pages with up to 50 products.",
      },
    ],
    ownedVsMarketplace:
      "IndiaMART lists you beside competitors; owned pages rank for your product grades and Vadodara/Bharuch corridor searches. Layer both — see Drashti Chemicals case study.",
    readinessQuestions: [
      "Do you have structured product data (grade, CAS, packaging) in Excel or Tally?",
      "Who approves SDS text and marketing claims before publish?",
    ],
  },
  "bharuch-ankleshwar-chemical": {
    slug: "bharuch-ankleshwar-chemical",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Highlight GIDC location and logistics (JNPT, Hazira) for export buyers",
      "List specialty chemicals vs commodity solvents separately in navigation",
    ],
    commonMistakes: [
      "Treating Bharuch and Ankleshwar as SEO footnotes instead of primary local signals",
      "No separate landing pages for top 10 revenue SKUs",
    ],
    selectionCriteria: [
      "Local discovery call within Gujarat chemical belt",
      "Experience with multi-page industrial catalogs (see Drashti case study)",
    ],
    uniqueFaqs: [
      {
        question: "Why a separate Bharuch-Ankleshwar page?",
        answer:
          "Buyers search by cluster — a dedicated page matches 'chemical website Bharuch' intent without diluting national chemical hub content.",
      },
    ],
    ownedVsMarketplace:
      "GIDC buyers still Google your company name after trade fairs — owned site captures those high-intent visits.",
    readinessQuestions: ["Which products drive 80% of export inquiries?", "Do you need Hindi/Gujarati product summaries?"],
  },
  "pharmaceutical-company": {
    slug: "pharmaceutical-company",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Separate API, formulation, and CDMO service pages",
      "Facility and quality pages aligned to WHO-GMP display (documents you approve)",
      "Partner inquiry vs product inquiry routing",
    ],
    commonMistakes: [
      "Mixing consumer health claims with B2B API marketing on one page",
      "Missing DMF/registration status display where you are permitted to publish",
      "Stock photos instead of validated facility imagery",
    ],
    selectionCriteria: [
      "Structured data for organization and product (schema)",
      "Audit-friendly page hierarchy for procurement teams",
      "Fast LCP — global buyers evaluate multiple suppliers in one session",
    ],
    uniqueFaqs: [
      {
        question: "Can you build pharma sites without making regulatory claims?",
        answer:
          "Yes. We display certificates and facility facts you provide — we do not write regulatory submissions or claims.",
      },
    ],
    ownedVsMarketplace:
      "Pharma procurement teams research manufacturers directly — marketplace listings rarely replace facility and API portfolio depth.",
    readinessQuestions: ["API list vs formulation list — same site or split?", "Export-only or domestic + export inquiries?"],
  },
  "engineering-company": {
    slug: "engineering-company",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Capability matrix: CNC, fabrication, casting, finishing",
      "RFQ form with drawing upload and tolerance fields",
      "Industries served and equipment list with capacities",
    ],
    commonMistakes: [
      "No MOQ or lead-time guidance — buyers abandon vague RFQ forms",
      "Equipment list as PDF only (not crawlable)",
      "Missing Rajkot/Gujarat GIDC local signals for engineering searches",
    ],
    selectionCriteria: [
      "RFQ workflow design experience",
      "Technical SEO for long-tail part/process queries",
    ],
    uniqueFaqs: [
      {
        question: "What should an engineering company website prioritize?",
        answer:
          "Capabilities, equipment, tolerances, and RFQ — not animated sliders. Buyers validate fit before calling.",
      },
    ],
    ownedVsMarketplace:
      "OEM buyers search 'CNC machining Gujarat' — owned pages outperform generic directory listings for specific processes.",
    readinessQuestions: ["Do you quote from drawings or standard catalog parts?", "Export certifications to display?"],
  },
  "rajkot-engineering-company": {
    slug: "rajkot-engineering-company",
    buyerChecklist: [
      "Highlight Rajkot auto parts / casting cluster specialization",
      "Part category navigation matching OEM search terms",
      "Quality and testing equipment page",
    ],
    commonMistakes: ["Generic 'engineering' copy with no Rajkot cluster keywords", "No part-number or application taxonomy"],
    selectionCriteria: ["Gujarat on-site discovery", "Catalog + RFQ in one flow"],
    uniqueFaqs: [
      {
        question: "How is Rajkot engineering SEO different from generic Gujarat?",
        answer: "Searchers use city + process — dedicated page matches Rajkot engineering company intent.",
      },
    ],
    ownedVsMarketplace: "Directory leads are shared; owned site ranks for your plant name and process specialties.",
    readinessQuestions: ["Top 20 SKUs for individual landing pages?", "IATF/ISO certificates ready to publish?"],
  },
  "textile-manufacturer": {
    slug: "textile-manufacturer",
    buyerChecklist: [
      "Fabric swatch / sample request workflow",
      "GSM, width, composition filters",
      "Export vs domestic MOQ clarity",
    ],
    commonMistakes: [
      "Instagram-style galleries without spec data",
      "No HS code or composition on export product pages",
      "Single WhatsApp number with no product context on inquiry",
    ],
    selectionCriteria: ["Filterable fabric catalog", "Sample request tracking fields"],
    uniqueFaqs: [
      {
        question: "Do textile sites need e-commerce?",
        answer: "Most B2B textile exporters need catalog + sample request first — checkout comes later if at all.",
      },
    ],
    ownedVsMarketplace:
      "Surat-Ahmedabad buyers search fabric specs on Google — catalog pages capture intent IndiaMART cannot structure.",
    readinessQuestions: ["Digital swatch data available?", "Minimum order quantities per fabric line?"],
  },
  "surat-textile-manufacturer": {
    slug: "surat-textile-manufacturer",
    buyerChecklist: ["Surat cluster specialization (synthetic, denim, embroidery)", "Export buyer currency and port fields"],
    commonMistakes: ["Duplicating national textile page without Surat-specific proof"],
    selectionCriteria: ["Experience with high SKU fabric catalogs"],
    uniqueFaqs: [
      {
        question: "Why a Surat-specific textile page?",
        answer: "Matches 'textile manufacturer Surat' and export buyer searches tied to the cluster.",
      },
    ],
    ownedVsMarketplace: "Use marketplace for RFQ volume; owned catalog for spec-led SEO.",
    readinessQuestions: ["How many active fabric SKUs need pages?", "Trade fair lead capture integration?"],
  },
  "ceramic-manufacturer": {
    slug: "ceramic-manufacturer",
    buyerChecklist: [
      "Tile size, finish, and series filters",
      "Container-load and pallet MOQ on inquiry",
      "Export market pages (Middle East, Africa, etc.)",
    ],
    commonMistakes: [
      "PDF catalogs only — no filterable web catalog",
      "Missing anti-dumping / certification context you are allowed to publish",
    ],
    selectionCriteria: ["Visual catalog performance on mobile", "Export inquiry forms"],
    uniqueFaqs: [
      {
        question: "What do Morbi ceramic buyers expect on a website?",
        answer: "Series navigation, technical specs, packing info, and direct export inquiry — see Morbi-specific page.",
      },
    ],
    ownedVsMarketplace: "International tile buyers Google series names — owned pages win long-tail searches.",
    readinessQuestions: ["Series vs SKU structure for navigation?", "Multiple brands under one manufacturer?"],
  },
  "morbi-ceramic-website": {
    slug: "morbi-ceramic-website",
    buyerChecklist: ["Morbi sanitary ware / vitrified positioning", "Export-grade imagery and packing details"],
    commonMistakes: ["Treating Morbi as a keyword stub without catalog depth"],
    selectionCriteria: ["Large visual catalog with fast CDN delivery"],
    uniqueFaqs: [
      {
        question: "Morbi ceramic website cost?",
        answer: "Published Maxwell tiers start at ₹35,000 (Starter) — Professional (₹75,000) suits tile catalogs. See /pricing.",
      },
    ],
    ownedVsMarketplace: "Morbi exporters compete globally — owned SEO complements trade fair contacts.",
    readinessQuestions: ["How many series need dedicated landing pages?"],
  },
  "food-processing-company": {
    slug: "food-processing-company",
    buyerChecklist: ["FSSAI license display (number you provide)", "Product nutrition and packaging pages", "Bulk B2B inquiry separate from retail"],
    commonMistakes: ["Consumer D2C layout on a B2B bulk site", "Missing allergen and shelf-life data structure"],
    selectionCriteria: ["Clear B2B vs retail path", "Certificate document library"],
    uniqueFaqs: [
      {
        question: "FSSAI information on the website?",
        answer: "We display license numbers and certificates you supply — no regulatory advice.",
      },
    ],
    ownedVsMarketplace: "Retail marketplaces differ from bulk ingredient supplier discovery — owned site for B2B.",
    readinessQuestions: ["Export markets and labeling requirements per SKU?"],
  },
  "plastic-manufacturer": {
    slug: "plastic-manufacturer",
    buyerChecklist: ["Material grade, application, and molding process pages", "RoHS/recyclability data where applicable"],
    commonMistakes: ["Product photos without material spec tables", "No application-based navigation (automotive, packaging)"],
    selectionCriteria: ["Technical spec tables", "RFQ with annual volume field"],
    uniqueFaqs: [
      {
        question: "Injection molding vs extrusion — one website?",
        answer: "Use separate capability sections or child pages so buyers land on the right process.",
      },
    ],
    ownedVsMarketplace: "Engineering buyers search material grades — structured pages beat directory blurbs.",
    readinessQuestions: ["Custom compounds vs standard grades?", "UL/VDE certs to publish?"],
  },
  "paint-coating-company": {
    slug: "paint-coating-company",
    buyerChecklist: ["SDS/TDS per product line", "Application method and surface prep guides", "Industrial vs decorative segmentation"],
    commonMistakes: ["Hiding technical data sheets behind contact gates", "Mixing decorative retail with industrial B2B"],
    selectionCriteria: ["Document library per SKU", "Search by application (marine, powder, protective)"],
    uniqueFaqs: [
      {
        question: "TDS downloads vs lead forms?",
        answer: "Publish TDS for trust; gate only custom formulation inquiries.",
      },
    ],
    ownedVsMarketplace: "Contractors and OEMs search coating systems — owned pages capture specification-led intent.",
    readinessQuestions: ["How many active SKUs with approved TDS?", "Color matching service — online or sales-only?"],
  },
  "auto-parts-manufacturer": {
    slug: "auto-parts-manufacturer",
    buyerChecklist: ["OEM vs aftermarket segmentation", "Part numbering or vehicle application taxonomy", "IATF display if applicable"],
    commonMistakes: ["No VIN/OEM cross-reference strategy", "Missing torque/spec tables"],
    selectionCriteria: ["RFQ with OEM program fields", "Fast mobile catalog for field sales"],
    uniqueFaqs: [
      {
        question: "Auto parts website without showing OEM customer names?",
        answer: "Use application categories and certifications — publish only approved references.",
      },
    ],
    ownedVsMarketplace: "Tier-2 suppliers need process and quality depth — directories show contact only.",
    readinessQuestions: ["Catalog public or login-gated for dealers?"],
  },
  "exporter-india": {
    slug: "exporter-india",
    buyerChecklist: ["IEC and export documentation page", "HS code on product templates", "Multi-currency inquiry (no fake FX rates)"],
    commonMistakes: ["No port/INCOTERM fields on export forms", "English-only when buyers need Arabic/Spanish summaries"],
    selectionCriteria: ["International Core Web Vitals", "Schema for organization and products"],
    uniqueFaqs: [
      {
        question: "Website for exporters vs domestic-only manufacturers?",
        answer: "Export sites need HS codes, packing, port logistics fields, and certification pages — domestic sites prioritize GST quote flows.",
      },
    ],
    ownedVsMarketplace: "Export buyers research before IndiaMART — owned SEO builds direct pipeline.",
    readinessQuestions: ["Top 5 destination countries for dedicated landing pages?"],
  },
  "manufacturer-export-website": {
    slug: "manufacturer-export-website",
    buyerChecklist: ["Same as exporter-india plus dealer/distributor finder", "Downloadable company profile PDF you approve"],
    commonMistakes: ["Auto-translated product pages without technical review"],
    selectionCriteria: ["Hreflang only when content is truly localized"],
    uniqueFaqs: [
      {
        question: "Export website timeline?",
        answer: "Professional tier (₹75,000) is 30 days for catalog foundation; Growth tier for 40+ pages and multi-language.",
      },
    ],
    ownedVsMarketplace: "Own the buyer relationship — marketplace is discovery, website is conversion.",
    readinessQuestions: ["Distributor portal needed in phase 1?"],
  },
  "msme-india": {
    slug: "msme-india",
    buyerChecklist: ["Udyam/MSME registration display if you choose", "Clear starter package fit (₹35,000 tier)", "WhatsApp + form on every page"],
    commonMistakes: [
      "Overbuilding e-commerce before catalog proof",
      "Paying for marketplace premium before basic owned presence exists",
    ],
    selectionCriteria: ["Published pricing — no quote games", "Milestone payment terms"],
    uniqueFaqs: [
      {
        question: "MSME website subsidy or government scheme integration?",
        answer: "We build the site; subsidy eligibility is your CA/MSME office process — we provide GST invoices for your records.",
      },
    ],
    ownedVsMarketplace: "MSMEs benefit from owned site + basic marketplace listing — not marketplace-only dependency.",
    readinessQuestions: ["How many products in first launch vs phase 2?"],
  },
  "electrical-manufacturer": {
    slug: "electrical-manufacturer",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "List voltage classes, IP ratings, and key standards references per product family",
      "Decide which datasheets are public vs request-gated",
    ],
    commonMistakes: [
      "Publishing only generic panel photos without electrical ratings tables",
      "No RFQ fields for installation context or quantity",
    ],
    selectionCriteria: [
      "Catalog supports filters by application and rating band",
      "Link into industrial website design and RFQ silos",
    ],
    uniqueFaqs: [
      {
        question: "Do electrical manufacturers need a different website than general engineering firms?",
        answer:
          "Yes — buyers search ratings, standards, and duty cycle. Pages need structured specs and RFQ fields; brochure company pages underserve OEM procurement.",
      },
    ],
    ownedVsMarketplace:
      "Owned catalog pages rank for product + rating long-tails; directories put you beside competitors on rented placement.",
    readinessQuestions: ["Top 20 SKUs that need HTML pages at launch?"],
  },
  "machinery-oem": {
    slug: "machinery-oem",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "One model page template: capacity, footprint, typical application, options",
      "Define who receives drawing-attached RFQs in sales",
    ],
    commonMistakes: [
      "All machines on one scroll with no indexable model URLs",
      "Contact form only — no draw-upload RFQ for custom lines",
    ],
    selectionCriteria: [
      "Vendor understands RFQ UX vs consumer ecommerce carts",
      "Optional dealer portal phase after public models ship",
    ],
    uniqueFaqs: [
      {
        question: "Should spare parts be on the same OEM website as machines?",
        answer:
          "Often yes as secondary navigation so models stay primary for SEO — spare-parts depth can expand in phase 2.",
      },
    ],
    ownedVsMarketplace:
      "Machine buyers research models before directory calls — model pages and RFQs create owned pipeline.",
    readinessQuestions: ["How many machine models for phase-one launch?"],
  },
  "chemical-manufacturers": {
    slug: "chemical-manufacturers",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Map CAS numbers, grades, and packaging units for each SKU",
      "Approve SDS/PDF version dates before publish",
      "Flag products that need REACH / export disclosure copy (you supply legal text)",
    ],
    commonMistakes: [
      "CAS and SDS buried in unsearchable multi-megabyte PDFs only",
      "One generic form for sample, bulk, and export inquiries",
      "No Ankleshwar / Nandesari locality signals buyers use after trade shows",
    ],
    selectionCriteria: [
      "Corridor experience on Bharuch–Ankleshwar chemical belt SEO",
      "Per-product document library + RFQ field schema",
      "Published pricing — Starter ₹35,000 · Professional ₹75,000 · Growth ₹1,50,000",
    ],
    uniqueFaqs: [
      {
        question: "Should chemical sites list CAS and SDS on HTML product pages?",
        answer:
          "Yes for B2B trust and long-tail search. Link each SKU to an SDS PDF with version date; keep CAS and grade in HTML tables buyers and Google can parse.",
      },
      {
        question: "How do owned catalogs reduce IndiaMART-style directory dependency?",
        answer:
          "Directories rent placement beside competitors. Your catalog ranks for grade + CAS + corridor queries and sends WhatsApp/RFQ leads you own — no annual listing fee.",
      },
    ],
    ownedVsMarketplace:
      "Paid directory listings put you next to competitors on rented real estate. An owned Next.js catalog with CAS/SDS/RFQ paths captures corridor and grade search traffic after fairs without perpetual platform fees.",
    readinessQuestions: [
      "Excel of SKUs with CAS, grade, packaging?",
      "Who signs off SDS marketing display before go-live?",
    ],
  },
  "engineering-machinery": {
    slug: "engineering-machinery",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Model list with capacity, footprint, power, and options",
      "Define CAD / drawing file types sales accepts on RFQ",
      "Short machinery video or process clips per flagship model (optional phase 1)",
    ],
    commonMistakes: [
      "All machines on one long page with no indexable model URLs",
      "No file upload on quote forms — drawings stay in personal WhatsApp",
      "Ignoring Makarpura / Savli estate locality for plant buyers nearby",
    ],
    selectionCriteria: [
      "RFQ UX with drawing upload, not consumer cart",
      "Video embed that does not destroy Core Web Vitals",
      "Path to dealer portal after public models ship",
    ],
    uniqueFaqs: [
      {
        question: "Do Makarpura and Savli OEMs need different website architecture?",
        answer:
          "Architecture is shared (model pages + RFQ); locality and cluster SEO differ. We link GIDC estate pages and industrial silos so nearby buyers and Google understand plant context.",
      },
    ],
    ownedVsMarketplace:
      "Engineering buyers research models online before directory cold-calls. Owned model pages + CAD RFQ create pipeline you control.",
    readinessQuestions: ["How many models in phase-one launch?", "Who owns application page content?"],
  },
  "ceramic-exporters": {
    slug: "ceramic-exporters",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Size × finish matrix and PEI / abrasion class per SKU family",
      "Export packing, destination ports, and sample request fields",
      "English export pages for overseas buyers researching Morbi",
    ],
    commonMistakes: [
      "Image galleries without size/finish filters overseas buyers need",
      "No PEI or technical rating tables — only lifestyle photos",
      "Contact-only sites that force export buyers onto directories",
    ],
    selectionCriteria: [
      "Morbi cluster SEO literacy",
      "Catalog filters for size, finish, application",
      "Direct RFQ / sample workflow, not only email links",
    ],
    uniqueFaqs: [
      {
        question: "Should tile sites publish PEI and size matrices in HTML?",
        answer:
          "Yes — overseas procurement filters by size, finish, and PEI. HTML tables rank and convert better than PDF-only catalogues.",
      },
    ],
    ownedVsMarketplace:
      "Export buyers often land on Morbi company sites and WhatsApp RFQs after fair research — owned pages capture that, while directories keep you in a rented multi-supplier view.",
    readinessQuestions: ["Top export SKU families for phase one?", "Sample vs container RFQ routing?"],
  },
  "pharma-equipment": {
    slug: "pharma-equipment",
    buyerChecklist: [
      ...BASE_CHECKLIST,
      "Equipment lines: process, packaging, utility, cleanroom accessories — separate IA",
      "Facility / validation narrative pages (claims you approve)",
      "RFQ fields for capacity, utility requirements, destination plant",
    ],
    commonMistakes: [
      "Stock lifestyle photos instead of clean, label-safe equipment presentation",
      "Mixing consumer health claims with B2B equipment marketing",
      "No Halol / Vadodara corridor context for pharma cluster buyers",
    ],
    selectionCriteria: [
      "Clean industrial visual system, not generic agency templates",
      "Document request / brochure RFQ without compliance theater you cannot support",
      "Optional dealer or service-partner portal later",
    ],
    uniqueFaqs: [
      {
        question: "Is a pharma equipment website different from a formulation company site?",
        answer:
          "Yes — equipment OEM sites need model specs, utility data, and RFQ for capex buyers; formulation sites need API/product compliance narrative. Architecture and trust signals diverge.",
      },
    ],
    ownedVsMarketplace:
      "Capex buyers shortlist vendors from owned sites with clear models and RFQ. Directory listings alone rarely show the validation-ready depth equipment RFQs need.",
    readinessQuestions: ["How many equipment models at launch?", "Service network pages needed in phase 1?"],
  },
};

export function getManufacturerVerticalInsight(slug: string): ManufacturerVerticalInsight | undefined {
  return manufacturerVerticalInsights[slug];
}

export function verticalSlugFromPath(canonicalPath: string): string {
  const match = canonicalPath.match(/\/services\/website-development\/([^/]+)$/);
  return match?.[1] ?? "";
}
