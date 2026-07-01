const html = await fetch("http://localhost:3000/blog/software-for-education-india").then((r) =>
  r.text(),
);
const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "MISSING";
const desc = html.match(/name="description" content="([^"]*)"/)?.[1] ?? "MISSING";
console.log(`title (${title.length}): ${title}`);
console.log(`desc (${desc.length}): ${desc}`);
console.log(`duplicate brand bug: ${title.includes("Maxwell | Maxwell")}`);
