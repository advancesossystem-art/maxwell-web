import fs from "fs";

const files = [
  "src/lib/case-studies-data.ts",
  "src/lib/projects-data.ts",
  "src/lib/testimonials-data.ts",
  "src/lib/homepage.ts",
  "src/lib/constants.ts",
];

const nameToDescriptor = {
  "Precision Fab Industries": "Leading manufacturing organization",
  "Precision Manufacturing Co.": "Leading manufacturing organization",
  "CareFirst Clinic Network": "Leading healthcare organization",
  "CareFirst Clinics": "Leading healthcare organization",
  "CareFirst Network": "Leading healthcare organization",
  "SwiftRoute Logistics": "Leading logistics organization",
  "LogiTrack Express": "Leading logistics organization",
  "LogiStream Inc.": "Leading logistics organization",
  "EduNova Academy": "Leading education organization",
  "StyleMart Retail Group": "Leading retail organization",
  "StyleMart Retail": "Leading retail organization",
  "BuildRight Construction": "Leading construction organization",
  TeamPulse: "Leading SaaS organization",
  FlowMetrics: "Leading SaaS organization",
};

const textReplacements = [
  ["CareFirst Clinic Network", "a multi-clinic healthcare network"],
  ["CareFirst Clinics", "a multi-clinic healthcare network"],
  ["CareFirst Network", "a multi-clinic healthcare network"],
  ["CareFirst", "the healthcare network"],
  ["Precision Fab Industries", "a precision manufacturing group"],
  ["Precision Manufacturing Co.", "a precision manufacturing group"],
  ["Precision Fab", "a manufacturing client"],
  ["SwiftRoute Logistics", "a regional logistics operator"],
  ["EduNova Academy", "an education institution group"],
  ["StyleMart Retail Group", "a retail group"],
  ["StyleMart Retail", "a retail group"],
  ["BuildRight Construction", "a construction firm"],
  ["TeamPulse", "a workforce SaaS company"],
  ["FlowMetrics", "a SaaS analytics company"],
  ["LogiTrack Express", "a logistics operator"],
  ["LogiStream Inc.", "a logistics operator"],
  ["Maharashtra, India", "Multi-region operations"],
  ["across Maharashtra.", "across multiple regions."],
  ["across Maharashtra", "across multiple regions"],
];

function esc(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/author: "[^"]*"/g, 'author: ""');
  s = s.replace(/company: "[^"]*"/g, 'company: ""');
  for (const [from, to] of Object.entries(nameToDescriptor)) {
    s = s.replace(new RegExp(`name: "${esc(from)}"`, "g"), `name: "${to}"`);
    s = s.replace(new RegExp(`client: "${esc(from)}"`, "g"), `client: "${to}"`);
  }
  for (const [from, to] of textReplacements) {
    s = s.split(from).join(to);
  }
  fs.writeFileSync(file, s);
  console.log("Updated", file);
}
