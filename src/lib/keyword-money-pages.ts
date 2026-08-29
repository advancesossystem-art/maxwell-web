import type { IndustrialServicePageProps } from "@/components/services/IndustrialServicePage";

export type KeywordMoneyDef = {
  meta: {
    title: string;
    description: string;
    path: string;
    keywords: string[];
  };
  page: Omit<IndustrialServicePageProps, "path"> & { path: string };
};

const relatedCore = [
  { label: "Website development", href: "/services/website-development" },
  { label: "Website AMC from ₹15,000", href: "/services/website-maintenance" },
  { label: "SEO company Vadodara", href: "/solutions/seo-company-vadodara" },
  { label: "Published pricing", href: "/pricing" },
  { label: "Request Quote", href: "/get-estimate" },
];

export const keywordMoneyPages = {
  webDesignIndia: {
    meta: {
      title: "Web Design Company India | From ₹35,000",
      description:
        "Web design company in India — custom business and manufacturer websites from ₹35,000. Mobile, brand, SEO. AMC from ₹15,000. GST invoice. Request a quote.",
      path: "/services/web-design",
      keywords: [
        "web design company India",
        "website designing company India",
        "web design agency India",
        "custom website design",
      ],
    },
    page: {
      path: "/services/web-design",
      breadcrumb: "Web Design",
      eyebrow: "Web design · India · from ₹35,000",
      h1: "Web design company in India — usable, rankable sites",
      lead: "Pretty templates that crawl at 4 seconds do not get enquiries. We design business websites around how a buyer actually decides: product, proof, WhatsApp, then a quote — not a slideshow.",
      pageDirectAnswer:
        "Maxwell Electrodeal is a web design company in India based in Vadodara. Business and manufacturer sites start at ₹35,000. Design includes mobile layout, brand colours, enquiry paths, and SEO-ready structure — not a ThemeForest skin.",
      estimateSource: "web-design-india",
      schemaName: "Web Design Company India",
      schemaDescription:
        "Custom web design and website development for Indian businesses and manufacturers from ₹35,000.",
      sections: [
        {
          heading: "Design that sells a product, not a moodboard",
          directAnswer:
            "Web design here means hierarchy: what you make, proof you exist, how to enquire. We do not sell illustration packs as strategy.",
          paragraphs: [
            "Most ‘web design’ quotes in India are a purchased theme plus your logo. Buyers bounce because they cannot find a product spec or a GST-ready enquiry form.",
            "We start from pages that earn money: home, about with a real address, product or service clusters, and a quote path. Visual polish comes after that skeleton is honest.",
          ],
          bullets: [
            "Mobile-first layouts tested on cheap Android, not only iPhone mockups",
            "Brand colours and type that stay readable on factory wifi",
            "WhatsApp and Request Quote on every money page",
          ],
        },
        {
          heading: "Website designing vs website development",
          directAnswer:
            "People search both. Design is how it looks and flows. Development is how it loads, ranks, and stays editable. We sell both as one build from ₹35,000.",
          paragraphs: [
            "If you typed website designing company, you still need hosting, Core Web Vitals, and a sitemap. We do not split that into two vendors and two invoices.",
          ],
        },
      ],
      featureGridTitle: "What a Maxwell web design build includes",
      features: [
        "Custom page layouts (not a 2018 multipurpose theme)",
        "Mobile and desktop design",
        "On-page SEO titles and H1s",
        "Enquiry + WhatsApp paths",
        "GST invoice and code ownership",
        "Optional AMC from ₹15,000/month",
      ],
      related: relatedCore,
    },
  },
  webDesignVadodara: {
    meta: {
      title: "Web Design Company Vadodara | From ₹35,000",
      description:
        "Web design company in Vadodara (Baroda) — custom business sites from ₹35,000. AMC from ₹15,000. Local office. Request a quote.",
      path: "/solutions/web-design-company-vadodara",
      keywords: [
        "web design company in Vadodara",
        "web design company Vadodara",
        "website designing company in Vadodara",
        "website designing company Vadodara",
        "web design Baroda",
      ],
    },
    page: {
      path: "/solutions/web-design-company-vadodara",
      breadcrumb: "Web Design Vadodara",
      eyebrow: "Vadodara · Baroda · web design",
      h1: "Web design company in Vadodara — sites that get enquiries",
      lead: "If you searched web design company in Vadodara or website designing company in Baroda, you want a local team that will sit with your product list — not a freelancer disappearing after a theme install.",
      pageDirectAnswer:
        "Maxwell Electrodeal is a web design and website designing company in Vadodara (Baroda). Business sites from ₹35,000. We work from our office in Vadodara and visit Makarpura, Savli, and Nandesari when the catalog needs a plant visit.",
      estimateSource: "web-design-vadodara",
      schemaName: "Web Design Company Vadodara",
      schemaDescription: "Web design and website designing services in Vadodara, Gujarat from ₹35,000.",
      sections: [
        {
          heading: "Why Vadodara searches say ‘design’ as often as ‘development’",
          directAnswer:
            "Owners type web design company in Vadodara when they want how the site looks. They still need it to rank. We treat designing and development as one job.",
          paragraphs: [
            "Alkapuri clinics, Fatehgunj traders, and GIDC plants all use that query. A pretty homepage with a PDF ‘brochure’ is not design. Design is: can a buyer on Jio 4G find your SKU and WhatsApp you in two taps.",
            "We will not sell you 12 unused inner pages. We will design the five pages that create calls, then add catalog depth if you manufacture.",
          ],
        },
        {
          heading: "Baroda office, India delivery",
          directAnswer:
            "Majority of work is Vadodara. We also design sites for Ahmedabad, Surat, and other Indian cities from the same published prices.",
          paragraphs: [
            "Meet at Office in Vadodara. Or send product photos on WhatsApp and we still quote in writing.",
          ],
        },
      ],
      featureGridTitle: "Vadodara web design, in practice",
      features: [
        "On-site or WhatsApp discovery",
        "Custom layout, not a cloned competitor",
        "Gujarati/English as needed on key pages",
        "Google Business + NAP matching your GST board",
        "Sites from ₹35,000 · AMC from ₹15,000",
        "Request Quote — no ‘call for price’ theatre",
      ],
      related: [
        ...relatedCore,
        { label: "Website development company Vadodara", href: "/solutions/web-development-company-vadodara" },
      ],
    },
  },
  bestVadodara: {
    meta: {
      title: "Best Website Company Vadodara | From ₹35,000",
      description:
        "Best website company in Vadodara — judge published prices from ₹35,000, live chemical catalog proof, GST invoices, and AMC from ₹15,000. Request a quote.",
      path: "/solutions/best-website-development-company-vadodara",
      keywords: [
        "best website development company in Vadodara",
        "best website development company Vadodara",
        "top website company Vadodara",
        "best web developer Vadodara",
      ],
    },
    page: {
      path: "/solutions/best-website-development-company-vadodara",
      breadcrumb: "Best Website Company Vadodara",
      eyebrow: "Proof over adjectives",
      h1: "Best website company in Vadodara — judge the work, not the badge",
      lead: "Every Vadodara agency claims ‘best’. We publish the number, the case, and the office. If that is not enough, do not hire us.",
      pageDirectAnswer:
        "Maxwell Electrodeal is a Vadodara website company with published Starter pricing from ₹35,000, monthly AMC from ₹15,000, and a live manufacturer catalog (Drashti Chemicals). No fake 500-client counters.",
      estimateSource: "best-vadodara",
      schemaName: "Website Development Company Vadodara",
      schemaDescription: "Vadodara website development with published pricing and a live industrial case study.",
      sections: [
        {
          heading: "How to pick a website company in Vadodara without getting burned",
          directAnswer:
            "Ask for a live URL, GST invoice, who owns the code, and a written AMC. If they only send a Behance moodboard, walk away.",
          paragraphs: [
            "Cheap ₹8,000 WordPress jobs die in six months. ₹2 lakh ‘branding’ jobs often hide monthly plugin rent. Our middle path: own the code, pay after go-live, keep the site on AMC if you want ranking to continue.",
            "See the Drashti catalog if you sell industrial products. If you run a clinic or trader office, the same stack still applies — fewer SKUs, same speed and enquiry path.",
          ],
          bullets: [
            "Live site you can open: drashtichemical.com",
            "No advance on website packages",
            "Office in Vadodara — not a virtual address",
          ],
        },
      ],
      featureGridTitle: "What ‘best’ means here",
      features: [
        "Published ₹35,000 / ₹75,000 / ₹1.5L tiers",
        "AMC ₹15,000 with SEO + two articles",
        "Next.js Core Web Vitals, not bloated builders",
        "GST + IP in your name",
      ],
      related: relatedCore,
    },
  },
  bestIndia: {
    meta: {
      title: "Best Website Company India | From ₹35,000",
      description:
        "Best website company in India without metro retainers — business and manufacturer sites from ₹35,000 from Vadodara, delivered pan-India. Request a quote.",
      path: "/solutions/best-website-development-company-india",
      keywords: [
        "best website development company in India",
        "best website development company India",
        "website development company India",
      ],
    },
    page: {
      path: "/solutions/best-website-development-company-india",
      breadcrumb: "Best Website Company India",
      eyebrow: "India delivery · Vadodara HQ",
      h1: "Best website company in India — Vadodara team, published rates",
      lead: "India has thousands of website shops. We are not a Bangalore body shop. We are a small Vadodara company that ships catalog and business sites with GST invoices and monthly AMC.",
      pageDirectAnswer:
        "Maxwell Electrodeal builds websites for Indian businesses from ₹35,000 and website AMC from ₹15,000/month. HQ in Vadodara; we deliver anywhere in India over Zoom and courier of content.",
      estimateSource: "best-india",
      schemaName: "Website Development Company India",
      schemaDescription: "Indian website development from ₹35,000 with monthly AMC from ₹15,000.",
      sections: [
        {
          heading: "Pan-India without a Delhi or Bengaluru office theatre",
          directAnswer:
            "You do not need a Noida campus to get a serious website. You need a written scope, a go-live date, and someone who answers WhatsApp after launch.",
          paragraphs: [
            "Most of our plants are in Gujarat. Traders and MSMEs from other states work the same way: product list in Excel, photos on Drive, we build, you pay after go-live.",
          ],
        },
      ],
      featureGridTitle: "India-wide, same rules",
      features: [
        "English (and Gujarati where needed)",
        "Same published prices as Vadodara clients",
        "Remote discovery + optional plant visit in Gujarat",
        "SEO and AMC after launch",
      ],
      related: relatedCore,
    },
  },
  wordpressIndia: {
    meta: {
      title: "WordPress Website India | Next.js Rebuilds",
      description:
        "WordPress website India search? We rebuild slow WP sites on Next.js from ₹35,000 and keep your Google equity — no cheap theme installs. Request a quote.",
      path: "/services/wordpress-website-development",
      keywords: [
        "WordPress website Vadodara",
        "WordPress development company Vadodara",
        "WordPress website India",
        "WordPress vs Next.js",
      ],
    },
    page: {
      path: "/services/wordpress-website-development",
      breadcrumb: "WordPress Websites",
      eyebrow: "WordPress search · Next.js build",
      h1: "WordPress website India — when to rebuild on Next.js",
      lead: "If you googled WordPress website Vadodara, you will get 40 theme sellers. We build Next.js sites instead: faster, fewer hacks, you own the code. If you already have WordPress, we migrate it without torching your rankings.",
      pageDirectAnswer:
        "Maxwell does not sell ₹12,000 WordPress theme installs. For WordPress website Vadodara and India searches we offer a rebuild or migration to Next.js from ₹35,000, with 301s from old URLs and AMC from ₹15,000.",
      estimateSource: "wordpress",
      schemaName: "WordPress to Next.js Website Rebuild",
      schemaDescription: "WordPress website migration and Next.js rebuilds for Vadodara and India businesses.",
      sections: [
        {
          heading: "When WordPress is the wrong tool",
          directAnswer:
            "Plugin stacks, page builders, and cheap hosting fail Core Web Vitals. Google then parks you on page 4. A catalog of 80 chemicals does not belong in a bloated WP theme.",
          paragraphs: [
            "We still respect the query. Many owners only know the word WordPress. The outcome they want is: I can send a link, it loads, buyers enquire. Next.js does that with less monthly firefighting.",
          ],
        },
        {
          heading: "Migration, not a vanished site",
          directAnswer:
            "Old WP URLs 301 to new URLs. Search Console stays connected. Content is rewritten where it was thin, not dumped.",
          paragraphs: [
            "If a plugin is the only reason you stay on WordPress (WooCommerce checkout), say so on the quote form. Most Gujarat manufacturers need RFQ, not a cart.",
          ],
        },
      ],
      featureGridTitle: "WordPress searchers get a straight offer",
      features: [
        "Audit of your current WP site",
        "Rebuild on Next.js from ₹35,000",
        "Redirect map so Google does not drop you",
        "AMC so plugins are not your night job",
      ],
      related: [
        ...relatedCore,
        { label: "Next.js vs WordPress guide", href: "/blog/nextjs-vs-wordpress-industrial-website" },
      ],
    },
  },
  wordpressVadodara: {
    meta: {
      title: "WordPress Website Vadodara | Next.js Rebuilds",
      description:
        "WordPress website Vadodara — we migrate slow WP sites to Next.js catalogs from ₹35,000. Honest comparison, redirects kept. Request a quote.",
      path: "/solutions/wordpress-website-vadodara",
      keywords: [
        "WordPress website Vadodara",
        "WordPress development company in Vadodara",
        "WordPress developer Vadodara",
      ],
    },
    page: {
      path: "/solutions/wordpress-website-vadodara",
      breadcrumb: "WordPress Vadodara",
      eyebrow: "Baroda · WordPress query",
      h1: "WordPress website Vadodara — local rebuilds, not another theme",
      lead: "Half the Vadodara business sites we audit are WordPress with 40 plugins. They rank for nothing and the owner pays a ‘AMC’ that is just updates until it breaks. We replace that stack.",
      pageDirectAnswer:
        "For WordPress website Vadodara searches, Maxwell offers Next.js rebuilds from ₹35,000 with redirects from your old WP URLs. We are in Vadodara — we can look at your live site on a call today.",
      estimateSource: "wordpress-vadodara",
      schemaName: "WordPress Website Vadodara",
      schemaDescription: "WordPress to Next.js website rebuilds in Vadodara from ₹35,000.",
      sections: [
        {
          heading: "Typical Vadodara WordPress failure",
          directAnswer:
            "Elementor + WooCommerce + five SEO plugins on shared hosting. LCP over 4s. Forms dying after a PHP update.",
          paragraphs: [
            "Send us the URL. We will tell you in writing whether to patch or rebuild. Rebuild is usually cheaper over 24 months than plugin rent.",
          ],
        },
      ],
      featureGridTitle: "Vadodara WordPress migration",
      features: ["URL mapping", "Content lift", "Speed target 90+ on mobile", "AMC after go-live"],
      related: relatedCore,
    },
  },
  ecommerceIndia: {
    meta: {
      title: "Ecommerce Website India | Catalogs from ₹35,000",
      description:
        "Ecommerce website development in India — carts for retail, RFQ catalogs for B2B plants. From ₹35,000. AMC ₹15,000. Request a quote.",
      path: "/services/ecommerce-website-development",
      keywords: [
        "ecommerce website development India",
        "ecommerce website development company",
        "online store development India",
      ],
    },
    page: {
      path: "/services/ecommerce-website-development",
      breadcrumb: "Ecommerce Websites",
      eyebrow: "Ecommerce · India",
      h1: "Ecommerce website India — carts for retail, RFQ for plants",
      lead: "Ecommerce is not one product. A tile exporter and a D2C snack brand need different checkout. We will not bolt WooCommerce onto a factory that quotes in tonnes.",
      pageDirectAnswer:
        "Maxwell builds ecommerce and B2B catalog websites in India from ₹35,000. Retail stores get cart and UPI; manufacturers get RFQ, WhatsApp, and GST enquiry — which converts better than a fake ‘buy now’ on industrial SKUs.",
      estimateSource: "ecommerce-india",
      schemaName: "Ecommerce Website Development India",
      schemaDescription: "Ecommerce and B2B catalog website development in India from ₹35,000.",
      sections: [
        {
          heading: "When you actually need a cart",
          directAnswer:
            "Fixed SKU, fixed price, ship by courier, UPI/Razorpay. Then yes: catalog + cart. If price depends on grade and destination, you need RFQ, not ecommerce theatre.",
          paragraphs: [
            "Say so on the quote form. We will not upsell a shopping cart to a chemical plant that will never sell 1 kg online.",
          ],
        },
      ],
      featureGridTitle: "Ecommerce, scoped honestly",
      features: [
        "Product catalog + filters",
        "Razorpay / UPI when it fits",
        "Or RFQ + WhatsApp for B2B",
        "SEO category pages",
        "AMC for product updates",
      ],
      related: relatedCore,
    },
  },
  ecommerceVadodara: {
    meta: {
      title: "Ecommerce Website Vadodara | From ₹35,000",
      description:
        "Ecommerce website development in Vadodara — online stores with UPI/Razorpay or B2B RFQ catalogs. From ₹35,000. Local team. We won't force a cart on a plant. Get a quote.",
      path: "/solutions/ecommerce-website-vadodara",
      keywords: [
        "ecommerce website development vadodara",
        "ecommerce website development Vadodara",
        "ecommerce website Vadodara",
        "online store Vadodara",
        "ecommerce web design vadodara",
        "shopify alternative vadodara",
      ],
    },
    page: {
      path: "/solutions/ecommerce-website-vadodara",
      breadcrumb: "Ecommerce Vadodara",
      eyebrow: "Vadodara · ecommerce · catalogs",
      h1: "Ecommerce website development in Vadodara",
      lead: "Retailers in Raopura want UPI checkout. GIDC manufacturers want RFQ. Both search ecommerce website development Vadodara — we build the right flow for each, from ₹35,000.",
      pageDirectAnswer:
        "Maxwell builds ecommerce websites in Vadodara from ₹35,000. Local retail gets catalog + cart + Razorpay/UPI; industrial sellers get SKU pages + quote + WhatsApp. AMC from ₹15,000 for product changes.",
      estimateSource: "ecommerce-vadodara",
      schemaName: "Ecommerce Website Development Vadodara",
      schemaDescription: "Ecommerce and catalog websites in Vadodara from ₹35,000.",
      sections: [
        {
          heading: "Vadodara retail vs Vadodara plant",
          directAnswer:
            "A clothing label in Raopura and a pump OEM in Makarpura should not share the same WooCommerce template.",
          paragraphs: [
            "Tell us what a buyer does after they like a product: pay now, or ask for a rate and MOQ. That one sentence decides cart vs RFQ.",
            "We will not upsell a shopping cart to a chemical plant that will never sell 1 kg online.",
          ],
          bullets: [
            "Retail: category pages, filters, cart, UPI/Razorpay",
            "B2B: product specs, certificates, Request Quote, WhatsApp",
            "Both: mobile speed, SEO titles, GST invoice from Maxwell",
          ],
        },
        {
          heading: "Ecommerce without the agency theatre",
          directAnswer:
            "Published Starter ₹35,000 and Professional ₹75,000 — not a ‘discovery workshop’ before you see a price.",
          paragraphs: [
            "If you need 200+ SKUs with filters, that is Professional territory. A 30-product boutique store can launch on Starter with a honest catalog.",
          ],
        },
      ],
      featureGridTitle: "Ecommerce in Baroda, scoped honestly",
      features: [
        "Product catalog + filters",
        "Razorpay / UPI when it fits",
        "RFQ + WhatsApp for B2B",
        "SEO category pages",
        "AMC for product updates",
        "Local Vadodara team",
      ],
      related: [
        { label: "Business website Vadodara", href: "/solutions/business-website-vadodara" },
        { label: "Manufacturer catalogs", href: "/services/website-development-for-manufacturers" },
        ...relatedCore,
      ],
    },
  },
  redesignIndia: {
    meta: {
      title: "Website Redesign India | From ₹35,000",
      description:
        "Website redesign in India — rebuild outdated or WordPress sites on Next.js. Keep domain and Google history. From ₹35,000. AMC ₹15,000. Request a quote.",
      path: "/services/website-redesign",
      keywords: [
        "website redesign India",
        "website redesign company",
        "website revamp India",
      ],
    },
    page: {
      path: "/services/website-redesign",
      breadcrumb: "Website Redesign",
      eyebrow: "Redesign · India",
      h1: "Website redesign in India — keep the domain, lose the 2016 template",
      lead: "A redesign is not new colours on a dead theme. It is new IA, speed, and enquiry paths with 301s from every old URL that still ranks.",
      pageDirectAnswer:
        "Maxwell redesigns Indian business websites from ₹35,000. We map old URLs, rebuild on Next.js, and offer AMC from ₹15,000 so the new site does not rot.",
      estimateSource: "redesign-india",
      schemaName: "Website Redesign India",
      schemaDescription: "Website redesign and rebuild services in India from ₹35,000.",
      sections: [
        {
          heading: "What we refuse to call a redesign",
          directAnswer:
            "Changing the slider plugin is not a redesign. If Core Web Vitals stay red, you paid for paint.",
          paragraphs: [
            "Send the current URL. We quote a rebuild, not a theme swap, unless a swap is genuinely enough — we will say that too.",
          ],
        },
      ],
      featureGridTitle: "Redesign checklist",
      features: ["URL inventory", "Redirects", "New H1s and titles", "Faster templates", "GSC recrawl list"],
      related: relatedCore,
    },
  },
  redesignVadodara: {
    meta: {
      title: "Website Redesign Vadodara | From ₹35,000",
      description:
        "Website redesign in Vadodara for slow WordPress or outdated sites. Next.js rebuild, 301 redirects, keep your domain. From ₹35,000. Local Baroda team. Request a quote.",
      path: "/solutions/website-redesign-vadodara",
      keywords: [
        "website redesign vadodara",
        "website redesign Vadodara",
        "website redesign in Vadodara",
        "website revamp Vadodara",
        "corporate website revamp vadodara",
        "wordpress to nextjs vadodara",
      ],
    },
    page: {
      path: "/solutions/website-redesign-vadodara",
      breadcrumb: "Redesign Vadodara",
      eyebrow: "Vadodara · redesign · speed",
      h1: "Website redesign in Vadodara — keep the domain, fix the site",
      lead: "If your Baroda site still runs a 2016 WordPress theme, buyers bounce before they find your phone number. We rebuild on Next.js, map every old URL, and put Request Quote where the slider was.",
      pageDirectAnswer:
        "Website redesign Vadodara starts at ₹35,000 with Maxwell Electrodeal. Local discovery, Next.js rebuild, 301 redirects from old pages, Search Console recrawl list, AMC from ₹15,000.",
      estimateSource: "redesign-vadodara",
      schemaName: "Website Redesign Vadodara",
      schemaDescription: "Website redesign services in Vadodara from ₹35,000.",
      sections: [
        {
          heading: "What counts as a redesign here",
          directAnswer:
            "New IA, mobile speed, enquiry paths, and 301s from URLs that still rank. Changing the slider plugin alone is not a redesign.",
          paragraphs: [
            "Send the current URL. We inventory pages in Search Console, quote a rebuild, and keep anything that still earns impressions.",
            "Corporate website revamp vadodara searches usually mean: same company, better Google presence — not a ₹8 lakh brand sprint.",
          ],
          bullets: [
            "URL inventory + 301 map before launch",
            "Core Web Vitals target: green on mobile",
            "WhatsApp + quote form on every money page",
          ],
        },
        {
          heading: "Local redesign, not a new brand agency circus",
          directAnswer:
            "We will not charge ₹8 lakh for a ‘brand sprint’ to replace a five-page company site. We will make it fast and findable.",
          paragraphs: [
            "Bring the login to the old site or just the domain. Office in Vadodara — we can meet locally for content handoff.",
          ],
        },
      ],
      featureGridTitle: "Vadodara redesign deliverables",
      features: [
        "Same domain + redirects",
        "Next.js speed",
        "New enquiry paths",
        "GSC recrawl list",
        "Optional AMC ₹15,000/mo",
        "GST invoice",
      ],
      related: [
        { label: "Web development Vadodara", href: "/solutions/web-development-company-vadodara" },
        { label: "Web design Vadodara", href: "/solutions/web-design-company-vadodara" },
        ...relatedCore,
      ],
    },
  },
  amcVadodara: {
    meta: {
      title: "Website AMC Vadodara | From ₹15,000/mo",
      description:
        "Website AMC in Vadodara: ₹15,000/month — two product changes, weekly updates, SEO report, two articles. Local maintenance. Request a quote.",
      path: "/solutions/website-amc-vadodara",
      keywords: [
        "website AMC Vadodara",
        "website AMC Baroda",
        "website maintenance Vadodara",
        "website maintenance company Vadodara",
      ],
    },
    page: {
      path: "/solutions/website-amc-vadodara",
      breadcrumb: "Website AMC Vadodara",
      eyebrow: "Vadodara · Baroda · AMC",
      h1: "Website AMC in Vadodara — monthly maintenance from ₹15,000",
      lead: "Website AMC Vadodara and Baroda searches mean: someone to update products, keep Google happy, and not vanish. That is this plan — not ‘we’ll look at it if it hacks’.",
      pageDirectAnswer:
        "Website AMC in Vadodara with Maxwell starts at ₹15,000 per month: two product changes, weekly updates, monthly SEO and performance report, two published articles, backups and uptime. GST invoice.",
      estimateSource: "amc-vadodara",
      schemaName: "Website AMC Vadodara",
      schemaDescription: "Website annual/monthly maintenance contract in Vadodara from ₹15,000 per month.",
      sections: [
        {
          heading: "What ₹15,000 actually buys in Baroda",
          directAnswer:
            "Two SKU or page edits, weekly checks, SEO work with a written report, two original posts on your domain. Not unlimited design retainers.",
          paragraphs: [
            "If you need eight product changes a week, say so — Growth AMC is ₹19,000. We will not pretend the starter plan covers a 2,000-SKU dump every Monday.",
          ],
        },
      ],
      featureGridTitle: "Vadodara AMC",
      features: [
        "₹15,000/mo starter",
        "Weekly updates",
        "SEO + performance report",
        "Two articles",
        "Two product changes",
        "Local WhatsApp",
      ],
      related: [
        { label: "Full AMC inclusions", href: "/services/website-maintenance" },
        ...relatedCore,
      ],
    },
  },
  seoIndia: {
    meta: {
      title: "SEO Services India | Vadodara Team",
      description:
        "SEO services in India for business and manufacturer websites — technical SEO, content, Search Console. Sites from ₹35,000 · AMC from ₹15,000. Get a quote.",
      path: "/services/website-seo",
      keywords: [
        "SEO services India",
        "SEO company India",
        "website SEO India",
        "technical SEO India",
      ],
    },
    page: {
      path: "/services/website-seo",
      breadcrumb: "Website SEO",
      eyebrow: "SEO · India",
      h1: "SEO services in India — ranking work on a site you actually own",
      lead: "SEO without a fast, crawlable website is a monthly PDF of excuses. We either build the site or inherit it, then do technical SEO, titles, internal links, and content — measured in Search Console, not vanity dashboards.",
      pageDirectAnswer:
        "Maxwell Electrodeal offers SEO services in India from Vadodara. Technical SEO and content on Next.js business sites. Website builds from ₹35,000; monthly AMC from ₹15,000 already includes SEO hours. Larger SEO-only retainers are scoped after a GSC look.",
      estimateSource: "seo-india",
      schemaName: "SEO Services India",
      schemaDescription: "Website SEO services in India for manufacturers and businesses.",
      sections: [
        {
          heading: "What we will not guarantee",
          directAnswer:
            "We will not sell ‘#1 in 7 days’. We will fix indexation, intent pages, and a monthly content cadence you can see in GSC.",
          paragraphs: [
            "If your HTML is a client-rendered mess, SEO money is wasted. That is why we push Next.js builds first for serious catalogs.",
          ],
        },
      ],
      featureGridTitle: "SEO we actually do",
      features: [
        "Search Console and sitemap hygiene",
        "Title / H1 / internal links",
        "Manufacturer and local intent pages",
        "Two articles on AMC plans",
        "No fake rank trackers as the product",
      ],
      related: relatedCore,
    },
  },
  ahmedabad: {
    meta: {
      title: "Website Company Ahmedabad | From ₹35,000",
      description:
        "Website development for Ahmedabad — Maxwell delivers from Vadodara to Sanand, Vatva, Naroda. Catalogs and business sites from ₹35,000. Request a quote.",
      path: "/solutions/website-development-company-ahmedabad",
      keywords: [
        "website development company Ahmedabad",
        "website development company in Ahmedabad",
        "web development company Ahmedabad",
        "website designing company Ahmedabad",
      ],
    },
    page: {
      path: "/solutions/website-development-company-ahmedabad",
      breadcrumb: "Ahmedabad Websites",
      eyebrow: "Ahmedabad · Gujarat spillover",
      h1: "Website company Ahmedabad — Gujarat delivery from Vadodara",
      lead: "You searched website development company Ahmedabad. We are not an SG Highway glass office. We are a Vadodara engineering team that already builds for Vatva, Naroda, Sanand, and Changodar plants.",
      pageDirectAnswer:
        "Maxwell Electrodeal serves Ahmedabad from Vadodara: business and manufacturer websites from ₹35,000, AMC from ₹15,000. Gujarat prices, GST invoice, plant visits on the Ahmedabad–Vadodara belt when the catalog needs it.",
      estimateSource: "ahmedabad",
      schemaName: "Website Development Company Ahmedabad",
      schemaDescription: "Website development for Ahmedabad and Gujarat businesses from ₹35,000.",
      sections: [
        {
          heading: "Why an Ahmedabad plant hires Vadodara",
          directAnswer:
            "Same state, same GIDC language, published prices. You are not paying Mumbai retainers for a 40-page catalog.",
          paragraphs: [
            "Vatva chemical units and Sanand auto vendors need the same RFQ site as Makarpura. We already have those page types.",
          ],
        },
      ],
      featureGridTitle: "Ahmedabad / Gujarat",
      features: ["₹35,000 Starter", "AMC ₹15,000", "Vatva / Naroda / Sanand familiarity", "Request Quote"],
      related: relatedCore,
    },
  },
  businessIndia: {
    meta: {
      title: "Business Website India | From ₹35,000",
      description:
        "Company and business website development in India for MSMEs — not only factories. From ₹35,000. AMC ₹15,000. GST invoice. Request a quote.",
      path: "/services/business-website-development",
      keywords: [
        "business website development India",
        "company website development",
        "MSME website India",
        "corporate website India",
      ],
    },
    page: {
      path: "/services/business-website-development",
      breadcrumb: "Business Websites",
      eyebrow: "MSME · company websites · India",
      h1: "Business website India — company sites, not only factories",
      lead: "Traders, clinics, CA firms, hotels, and distributors also need a site that ranks. You do not have to be a GIDC plant to get published pricing and a GST invoice.",
      pageDirectAnswer:
        "Maxwell builds company and business websites in India from ₹35,000. MSME sites: home, services, about, contact, Google map, WhatsApp. AMC from ₹15,000 if you want monthly SEO and two articles.",
      estimateSource: "business-india",
      schemaName: "Business Website Development India",
      schemaDescription: "MSME and company website development in India from ₹35,000.",
      sections: [
        {
          heading: "What an MSME site actually needs",
          directAnswer:
            "Five to fifteen honest pages, fast mobile, NAP matching your board, and a quote or booking path. Not a 40-page fake ‘enterprise’ IA.",
          paragraphs: [
            "If you later add a product catalog, we expand. Starter is enough to stop looking unprofessional next to a competitor who paid ₹8,000 for a template.",
          ],
        },
      ],
      featureGridTitle: "Company website, scoped",
      features: ["Home / About / Services / Contact", "WhatsApp", "Basic SEO", "Optional AMC", "No ERP upsell"],
      related: relatedCore,
    },
  },
  businessVadodara: {
    meta: {
      title: "Business Website Vadodara | MSME from ₹35,000",
      description:
        "Custom business website design in Vadodara for MSMEs, startups, traders & professionals — not only manufacturers. From ₹35,000. AMC ₹15,000. Local office. Get a quote.",
      path: "/solutions/business-website-vadodara",
      keywords: [
        "business website Vadodara",
        "company website Vadodara",
        "MSME website Vadodara",
        "corporate website Vadodara",
        "custom business website design vadodara",
        "startup web design agency vadodara",
        "affordable corporate website developers vadodara",
        "website development for small business vadodara",
      ],
    },
    page: {
      path: "/solutions/business-website-vadodara",
      breadcrumb: "Business Website Vadodara",
      eyebrow: "Vadodara MSME · company websites",
      h1: "Business website Vadodara — custom company sites from ₹35,000",
      lead: "If you run a trading office in Alkapuri, a clinic in Gotri, or a startup near Sayajigunj, buyers Google you before they call. This page is for company websites — not ERP software and not GIDC catalogs unless you need them later.",
      pageDirectAnswer:
        "Maxwell builds custom business and company websites in Vadodara from ₹35,000 for MSMEs, startups, and professionals. Local office, GST invoice, WhatsApp enquiry, AMC from ₹15,000. Manufacturer catalogs are our specialty — not our only client type.",
      estimateSource: "business-vadodara",
      schemaName: "Business Website Vadodara",
      schemaDescription: "MSME and company website development in Vadodara from ₹35,000.",
      sections: [
        {
          heading: "Who searches ‘business website Vadodara’",
          directAnswer:
            "Clinics, CA firms, dealerships, hotels, distributors, and 5–50 person firms that need to look real on Google — not a 500-SKU chemical catalog.",
          paragraphs: [
            "If you typed custom business website design vadodara or startup web design agency vadodara, you want a Vadodara team with published prices — not a Mumbai deck and a ₹8 lakh retainer.",
            "Starter (₹35,000) is 25–30 pages: home, services, about, contact, map, WhatsApp. Enough to stop losing enquiries to a competitor on a ₹8,000 template.",
          ],
          bullets: [
            "Affordable corporate website developers vadodara — published ₹35k / ₹75k / ₹1.5L tiers",
            "Same Next.js stack as our manufacturer builds — fast mobile, crawlable HTML",
            "Optional AMC ₹15,000/mo for SEO and two articles",
          ],
        },
        {
          heading: "Factories are our specialty. They are not our only client.",
          directAnswer:
            "Manufacturer catalogs are what we are known for. Company websites for local Vadodara businesses use the same delivery: enquiry paths, SEO titles, GST invoice.",
          paragraphs: [
            "Say what you sell in one sentence on the quote form. We will not force a 200-SKU catalog on a five-person firm.",
            "When you outgrow Starter, we add service clusters or a small product section — without rebuilding from scratch.",
          ],
        },
        {
          heading: "What you get on Starter (₹35,000)",
          directAnswer:
            "Home, about, services, contact, Google map, WhatsApp, basic on-page SEO, Search Console at go-live. Pay within 3 days of launch + 18% GST.",
          paragraphs: [
            "We are a website company in Vadodara — not an ERP vendor. If someone sent you here looking for SAP, see /services/website-development instead.",
          ],
        },
      ],
      featureGridTitle: "Vadodara company website",
      features: [
        "Local Vadodara office",
        "Google map + NAP",
        "WhatsApp on money pages",
        "₹35,000 Starter published",
        "Optional AMC ₹15,000/mo",
        "No ERP upsell",
      ],
      related: [
        { label: "Web development company Vadodara", href: "/solutions/web-development-company-vadodara" },
        { label: "Web design Vadodara", href: "/solutions/web-design-company-vadodara" },
        { label: "Website redesign Vadodara", href: "/solutions/website-redesign-vadodara" },
        ...relatedCore,
      ],
    },
  },
} satisfies Record<string, KeywordMoneyDef>;
