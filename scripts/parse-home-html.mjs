import fs from "node:fs";

const h = fs.readFileSync("tmp-home.html", "utf8");
const scripts = [...new Set([...h.matchAll(/\/_next\/static\/chunks\/[^"']+\.js/g)].map((m) => m[0]))];
const css = [...new Set([...h.matchAll(/\/_next\/static\/chunks\/[^"']+\.css/g)].map((m) => m[0]))];
const fonts = [...new Set([...h.matchAll(/\/_next\/static\/media\/[^"']+\.woff2/g)].map((m) => m[0]))];
console.log("JS chunk refs:", scripts.length);
scripts.forEach((s) => console.log(s));
console.log("CSS:", css.length, css);
console.log("Fonts:", fonts.length, fonts);
