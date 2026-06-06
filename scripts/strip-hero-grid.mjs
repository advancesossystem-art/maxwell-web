import fs from "fs";
import path from "path";

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) {
      const c = fs.readFileSync(p, "utf8");
      const n = c.replace(/\n\s*<div className="hero-grid[^"]*" \/>\n/g, "\n");
      if (n !== c) fs.writeFileSync(p, n);
    }
  }
}

walk("src");
console.log("done");
