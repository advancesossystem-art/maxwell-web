const html = await fetch("https://maxwellelectrodeal.com/contact").then((r) => r.text());
console.log("md:text-sm in HTML:", html.includes("md:text-sm"));
console.log("text-base text-foreground:", html.includes("text-base text-foreground"));

const chunks = [...new Set(html.match(/\/_next\/static\/chunks\/[^"']+/g) ?? [])].slice(0, 60);
for (const u of chunks) {
  const js = await fetch(`https://maxwellelectrodeal.com${u}`).then((r) => r.text());
  if (js.includes("text-base text-foreground md:text-sm")) {
    console.log("iOS fix class FOUND in:", u);
    process.exit(0);
  }
}
console.log("iOS fix class not found in first", chunks.length, "chunks");
