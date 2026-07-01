import { readFileSync } from "node:fs";

const pages = [
  ["about", ".next/server/app/about.html"],
  ["retail", ".next/server/app/industries/retail.html"],
  ["contact", ".next/server/app/contact.html"],
  ["blog", ".next/server/app/blog/software-for-education-india.html"],
];

for (const [name, path] of pages) {
  const html = readFileSync(path, "utf8");
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "MISSING";
  const desc = html.match(/name="description" content="([^"]*)"/)?.[1] ?? "MISSING";
  const dup =
    title.includes("Maxwell | Maxwell") || title.includes("Maxwell Electrodeal | Maxwell Electrodeal");
  console.log(`--- ${name} ---`);
  console.log(`title (${title.length}): ${title}`);
  console.log(`desc (${desc.length}): ${desc}`);
  console.log(`duplicate brand bug: ${dup}`);
}
