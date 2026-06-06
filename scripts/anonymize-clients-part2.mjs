import fs from "fs";

const files = [
  "src/lib/case-studies-data.ts",
  "src/lib/projects-data.ts",
  "src/lib/industries-data.ts",
  "src/lib/services-data.ts",
  "src/lib/solutions-data.ts",
];

const titleReplacements = [
  ["SwiftRoute Fleet Platform", "Fleet Management Platform"],
  ["EduNova Learning Platform", "Learning Management Platform"],
  ["StyleMart Omnichannel Platform", "Omnichannel Retail Platform"],
  ["BuildRight Project Platform", "Construction Project Platform"],
  ["BuildRight Project Management System", "Construction Project Management System"],
  ["CareFirst Patient Portal Network", "Multi-Clinic Patient Portal"],
  ["Precision Fab Manufacturing ERP", "Manufacturing ERP Platform"],
  ["Precision Fab Corporate Site", "Manufacturing Corporate Website"],
  ["CareFirst Digital Presence", "Healthcare Digital Presence"],
  ["SwiftRoute Driver App", "Logistics Driver Application"],
  ["Precision Fab ERP", "Manufacturing ERP System"],
  ["FlowMetrics Analytics SaaS", "Analytics SaaS Platform"],
  ["StyleMart Omnichannel Platform", "Omnichannel Retail Platform"],
];

const textReplacements = [
  ["SwiftRoute", "the logistics operator"],
  ["EduNova", "the education group"],
  ["StyleMart", "the retail group"],
  ["BuildRight", "the construction firm"],
  ["Precision Fab", "the manufacturing client"],
  ["FlowMetrics", "the SaaS client"],
  ["LogiTrack", "logistics"],
  ["Western India", "multiple regions"],
  ["Mumbai and Pune", "multiple metro markets"],
  ["Mumbai", "major metro markets"],
  ["Pune", "secondary markets"],
];

const clientFieldReplacements = {
  "Precision Fab Industries": "Leading manufacturing organization",
  "CareFirst Clinics": "Leading healthcare organization",
  "EduNova Academy": "Leading education organization",
  "SwiftRoute Logistics": "Leading logistics organization",
  "StyleMart Retail Group": "Leading retail organization",
  "BuildRight Construction": "Leading construction organization",
};

function esc(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  for (const [from, to] of titleReplacements) {
    s = s.split(from).join(to);
  }
  for (const [from, to] of textReplacements) {
    s = s.split(from).join(to);
  }
  for (const [from, to] of Object.entries(clientFieldReplacements)) {
    s = s.replace(new RegExp(`client: "${esc(from)}"`, "g"), `client: "${to}"`);
  }
  fs.writeFileSync(file, s);
  console.log("Updated", file);
}

// trust logos — industry labels only
let constants = fs.readFileSync("src/lib/constants.ts", "utf8");
constants = constants.replace(
  /export const trustLogos = \[[\s\S]*?\] as const;/,
  `export const trustLogos = [
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Retail",
  "Construction",
  "SaaS",
  "Education",
  "Enterprise",
] as const;`
);
fs.writeFileSync("src/lib/constants.ts", constants);
console.log("Updated trustLogos");
