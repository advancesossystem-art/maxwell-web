/** Scan src for internal hrefs and validate against route registries. Run: node scripts/validate-routes.mjs */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "src");

async function loadRegistries() {
  const lib = path.join(src, "lib");
  const content = path.join(lib, "content");

  const [
    { caseStudySlugs },
    { projectSlugs },
    { serviceSlugs },
    { solutionSlugs },
    { articleSlugs },
    { guideSlugs, guides },
    { resourceSlugs },
    { reportSlugs },
    { industrySlugs },
    { compareSlugs, costSlugs },
    { toolSlugs },
    { countrySlugs, citySlugs },
  ] = await Promise.all([
    import(pathToFileURL(path.join(lib, "case-studies-data.ts")).href),
    import(pathToFileURL(path.join(lib, "projects-data.ts")).href),
    import(pathToFileURL(path.join(lib, "services-data.ts")).href),
    import(pathToFileURL(path.join(lib, "solutions-data.ts")).href),
    import(pathToFileURL(path.join(content, "articles.ts")).href),
    import(pathToFileURL(path.join(content, "guides.ts")).href),
    import(pathToFileURL(path.join(content, "resources.ts")).href),
    import(pathToFileURL(path.join(content, "reports.ts")).href),
    import(pathToFileURL(path.join(lib, "industries-data.ts")).href),
    import(pathToFileURL(path.join(lib, "seo/programmatic/build-pages.ts")).href),
    import(pathToFileURL(path.join(lib, "tools/registry.ts")).href),
    import(pathToFileURL(path.join(lib, "locations-data.ts")).href),
  ]);

  const guideSlugSet = new Set(guideSlugs ?? guides?.map((g) => g.slug) ?? []);

  const staticPages = new Set([
    "/",
    "/about",
    "/company",
    "/team",
    "/process",
    "/careers",
    "/why-maxwell",
    "/contact",
    "/services",
    "/solutions",
    "/industries",
    "/locations",
    "/work",
    "/case-studies",
    "/blog",
    "/tools",
    "/compare",
    "/cost",
    "/resources",
    "/guides",
    "/reports",
    "/portal",
    "/get-estimate",
    "/book-consultation",
    "/discovery-call",
    "/project-calculator",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/disclaimer",
    "/data-processing",
    "/thank-you",
  ]);

  return {
    staticPages,
    caseStudySlugs: new Set(caseStudySlugs),
    projectSlugs: new Set(projectSlugs),
    serviceSlugs: new Set(serviceSlugs),
    solutionSlugs: new Set(solutionSlugs),
    articleSlugs: new Set(articleSlugs),
    guideSlugs: guideSlugSet,
    resourceSlugs: new Set(resourceSlugs),
    reportSlugs: new Set(reportSlugs),
    industrySlugs: new Set(industrySlugs),
    compareSlugs: new Set(compareSlugs),
    costSlugs: new Set(costSlugs),
    toolSlugs: new Set(toolSlugs),
    countrySlugs: new Set(countrySlugs),
    citySlugs: new Set(citySlugs),
  };
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|jsx?|mdx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

function validateHref(href, r) {
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  let pathOnly = href.split(/[#?]/)[0];
  if (pathOnly.endsWith("/") && pathOnly.length > 1) pathOnly = pathOnly.slice(0, -1);
  if (pathOnly.startsWith("/downloads/") || pathOnly.startsWith("/portal") || pathOnly.startsWith("/admin")) return null;

  const parts = pathOnly.split("/").filter(Boolean);
  if (parts.length === 0) return r.staticPages.has("/") ? null : pathOnly;

  const top = "/" + parts[0];

  if (r.staticPages.has(pathOnly)) return null;

  const validators = {
    "/case-studies": () => parts.length === 2 && r.caseStudySlugs.has(parts[1]),
    "/work": () => parts.length === 2 && r.projectSlugs.has(parts[1]),
    "/services": () => parts.length === 2 && r.serviceSlugs.has(parts[1]),
    "/solutions": () => parts.length === 2 && r.solutionSlugs.has(parts[1]),
    "/blog": () => parts.length === 2 && r.articleSlugs.has(parts[1]),
    "/guides": () => parts.length === 2 && r.guideSlugs.has(parts[1]),
    "/resources": () => parts.length === 2 && r.resourceSlugs.has(parts[1]),
    "/reports": () => parts.length === 2 && r.reportSlugs.has(parts[1]),
    "/industries": () =>
      parts.length === 2 ? r.industrySlugs.has(parts[1]) : parts.length === 3,
    "/compare": () => parts.length === 2 && r.compareSlugs.has(parts[1]),
    "/cost": () => parts.length === 2 && r.costSlugs.has(parts[1]),
    "/tools": () => parts.length === 2 && r.toolSlugs.has(parts[1]),
    "/locations": () => {
      if (parts.length === 2) return r.countrySlugs.has(parts[1]);
      if (parts.length === 3) return parts[0] === "india" && r.citySlugs.includes(parts[2]);
      if (parts.length === 4) return parts[0] === "india"; // city/service programmatic
      return false;
    },
  };

  const fn = validators[top];
  if (!fn) return pathOnly;
  return fn() ? null : pathOnly;
}

const registries = await loadRegistries();
const hrefRe = /href=["'](\/(?!\/)[^"'#?]*?)["']/g;
const broken = new Map();

for (const file of walk(src)) {
  const text = fs.readFileSync(file, "utf8");
  let m;
  while ((m = hrefRe.exec(text))) {
    const bad = validateHref(m[1], registries);
    if (bad) {
      if (!broken.has(bad)) broken.set(bad, []);
      broken.get(bad).push(path.relative(root, file));
    }
  }
}

// Also validate blog relatedSlugs pointing to guides/resources incorrectly
const { getAllArticles } = await import(pathToFileURL(path.join(src, "lib/content/articles.ts")).href);
for (const a of getAllArticles()) {
  for (const rel of a.relatedSlugs ?? []) {
    const asBlog = `/blog/${rel}`;
    const asGuide = `/guides/${rel}`;
    const asResource = `/resources/${rel}`;
    if (!registries.articleSlugs.has(rel) && registries.guideSlugs.has(rel)) {
      const key = `${asBlog} (should be ${asGuide})`;
      if (!broken.has(key)) broken.set(key, []);
      broken.get(key).push(`articles.ts:${a.slug}`);
    }
    if (!registries.articleSlugs.has(rel) && registries.resourceSlugs.has(rel)) {
      const key = `${asBlog} (should be ${asResource})`;
      if (!broken.has(key)) broken.set(key, []);
      broken.get(key).push(`articles.ts:${a.slug}`);
    }
    if (
      !registries.articleSlugs.has(rel) &&
      !registries.guideSlugs.has(rel) &&
      !registries.resourceSlugs.has(rel)
    ) {
      const key = `/blog/${rel} (missing content)`;
      if (!broken.has(key)) broken.set(key, []);
      broken.get(key).push(`articles.ts:${a.slug}`);
    }
  }
}

if (broken.size === 0) {
  console.log("No broken internal routes found.");
} else {
  console.log(`Found ${broken.size} broken route references:\n`);
  for (const [href, files] of [...broken.entries()].sort()) {
    console.log(href);
    console.log("  " + [...new Set(files)].slice(0, 4).join("\n  "));
    console.log();
  }
  process.exit(1);
}
