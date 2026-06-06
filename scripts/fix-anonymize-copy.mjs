import fs from "fs";

const files = [
  "src/lib/case-studies-data.ts",
  "src/lib/projects-data.ts",
  "src/lib/industries-data.ts",
];

const fixes = [
  ["the logistics operator logistics platform", "Fleet management platform"],
  ["the logistics operator is a B2B", "A regional logistics operator is a B2B"],
  ["the logistics operator Logistics", "Leading logistics organization"],
  ["an education institution group is a school", "An education institution group is a school"],
  ["the retail group retail platform", "Omnichannel retail platform"],
  ["the retail group operates", "The client operates"],
  ["the retail group Retail Group", "Leading retail organization"],
  ["the construction firm construction platform", "Construction project platform"],
  ["the construction firm Construction", "Leading construction organization"],
  ["a precision manufacturing group", "A precision manufacturing group"],
  ["a multi-clinic healthcare network", "A multi-clinic healthcare network"],
  ["an education institution group's", "An education institution group's"],
  ["the retail group operated", "The client operated"],
  ["Enterprise case study: the logistics operator", "Enterprise case study: Fleet management"],
  ["Case study: the retail group", "Case study: Omnichannel retail"],
  ["Case study: the construction firm", "Case study: Construction project"],
];

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  for (const [from, to] of fixes) {
    s = s.split(from).join(to);
  }
  fs.writeFileSync(file, s);
  console.log("Fixed", file);
}
