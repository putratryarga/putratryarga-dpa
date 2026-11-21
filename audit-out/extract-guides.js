/* Audit scratch: extract all 169 chapter guides into JSON for the Q&A audit. */
const fs = require("fs");
const vm = require("vm");
const files = [
  "fullstack-guides.js",
  "paid-social-guides.js",
  "role-study-guides-part1.js",
  "role-study-guides-part2.js",
  "role-study-guides-part3.js",
  "chapter-guide-map.js"
];
const sandbox = { console };
vm.createContext(sandbox);
for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  vm.runInContext(code, sandbox, { filename: f });
}
const reg = sandbox.DPA_GUIDE_BY_CHAPTER;
if (!reg) { console.error("DPA_GUIDE_BY_CHAPTER missing"); process.exit(1); }
const ids = Object.keys(reg);
console.log("guides extracted:", ids.length);
const out = {};
for (const id of ids) {
  const g = reg[id];
  out[id] = {
    concept: g.concept || "",
    example: g.example || "",
    steps: g.steps || [],
    practice: g.practice || "",
    checks: (g.checks || []).map(c => ({ q: c.q, a: c.a })),
    terms: (g.terms || []).map(t => ({ term: t.term, definition: t.definition }))
  };
}
fs.writeFileSync("audit-out/guides.json", JSON.stringify(out, null, 1), "utf8");
console.log("wrote audit-out/guides.json");
