import fs from "fs";
import path from "path";

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

const contentDir = "src/lib/content";
for (const file of walk(contentDir)) {
  if (file.endsWith("authors.ts")) continue;
  let s = fs.readFileSync(file, "utf8");
  const next = s.replace(/authorId: "[^"]+"/g, 'authorId: "maxwell-team"');
  if (next !== s) {
    fs.writeFileSync(file, next);
    console.log("Updated", file);
  }
}
