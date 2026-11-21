const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = process.cwd();
const sourceFiles = [
  "fullstack-guides.js",
  "paid-social-guides.js",
  "role-study-guides-part1.js",
  "role-study-guides-part2.js",
  "role-study-guides-part3.js",
  "chapter-guide-map.js",
  "chapter-resources.js",
  "chapter-credential-routes.js"
];

const sandbox = { console };
for (const relativePath of sourceFiles) {
  const absolutePath = path.join(root, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  vm.runInNewContext(source, sandbox, { filename: relativePath });
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const chapterIds = [...html.matchAll(/data-chapter-id=["'](DPA-T[0-9]{2}-CH[0-9]{2})["']/g)]
  .map((match) => match[1]);
const uniqueChapterIds = [...new Set(chapterIds)];
const registry = sandbox.DPA_GUIDE_BY_CHAPTER;
const registryIds = Object.keys(registry || {});
const sourceMap = sandbox.DPA_CHAPTER_RESOURCE_MAP || {};
const sourceMapIds = Object.keys(sourceMap);
const missing = uniqueChapterIds.filter((id) => !registry[id]);
const orphaned = registryIds.filter((id) => !uniqueChapterIds.includes(id));
const missingSourceMapIds = uniqueChapterIds.filter((id) => !sourceMap[id]);
const orphanSourceMapIds = sourceMapIds.filter((id) => !uniqueChapterIds.includes(id));
const invalidOrThinSourceMaps = uniqueChapterIds.filter((id) => {
  const entries = sourceMap[id] || [];
  const urls = [...new Set(entries.map((entry) => entry && entry.url)
    .filter((url) => /^https?:\/\//i.test(String(url || ""))))];
  return urls.length < 2;
});

assert.equal(chapterIds.length, 169, "index.html must expose exactly 169 core chapter IDs.");
assert.equal(uniqueChapterIds.length, 169, "Chapter IDs in index.html must be unique.");
assert.equal(registryIds.length, 169, "Guide registry must contain exactly 169 entries.");
assert.deepEqual(missing, [], `Missing chapter guides: ${missing.join(", ")}`);
assert.deepEqual(orphaned, [], `Guide IDs not present in index.html: ${orphaned.join(", ")}`);
assert.ok(html.includes('<script src="./chapter-resources.js"></script>'), "index.html must load the objective-level chapter resource map.");
assert.equal(sourceMapIds.length, 169, "Chapter resource map must contain exactly 169 core IDs.");
assert.deepEqual(missingSourceMapIds, [], `Missing objective-level resources: ${missingSourceMapIds.join(", ")}`);
assert.deepEqual(orphanSourceMapIds, [], `Orphan objective-level resource IDs: ${orphanSourceMapIds.join(", ")}`);
assert.deepEqual(invalidOrThinSourceMaps, [], `Every core chapter must have at least two unique HTTP(S) objective-level source URLs: ${invalidOrThinSourceMaps.join(", ")}`);

for (const id of uniqueChapterIds) {
  const guide = registry[id];
  assert.ok(guide, `Guide not found for ${id}`);
  assert.ok(typeof guide.concept === "string" && guide.concept.trim(), `Empty concept for ${id}`);
  assert.ok(typeof guide.example === "string" && guide.example.trim(), `Empty worked example for ${id}`);
  assert.ok(Array.isArray(guide.steps) && guide.steps.length > 0, `Missing learning steps for ${id}`);
  assert.ok(typeof guide.practice === "string" && guide.practice.trim(), `Missing practice task for ${id}`);
  assert.ok(Array.isArray(guide.checks) && guide.checks.length > 0, `Missing knowledge checks for ${id}`);
}

console.log(`PASS: ${registryIds.length}/169 chapter guides and ${sourceMapIds.length}/169 objective-level resource maps; every core chapter has at least two unique HTTP(S) sources plus concept, example, steps, practice, and knowledge checks.`);


const credentialRegistry = sandbox.DPA_CREDENTIAL_REGISTRY || {};
const chapterCredentialMap = sandbox.DPA_CHAPTER_CREDENTIAL_MAP || {};
const credentialAudit = sandbox.DPA_CHAPTER_CREDENTIAL_AUDIT || {};
const credentialMapIds = Object.keys(chapterCredentialMap);
const auditIds = Object.keys(credentialAudit);
assert.ok(html.includes('<script src="./chapter-credential-routes.js"></script>'), "index.html must load the chapter credential route registry.");
assert.equal(credentialMapIds.length, 169, "Credential map must explicitly cover all 169 core chapters.");
assert.equal(auditIds.length, 169, "Credential audit must explicitly cover all 169 core chapters.");
assert.deepEqual([...credentialMapIds].sort(), [...uniqueChapterIds].sort(), "Credential map IDs must exactly match core chapter IDs.");
assert.deepEqual([...auditIds].sort(), [...uniqueChapterIds].sort(), "Credential audit IDs must exactly match core chapter IDs.");
for (const [id, routeIds] of Object.entries(chapterCredentialMap)) {
  assert.ok(Array.isArray(routeIds), "Credential route list must be an array: " + id);
  assert.ok(routeIds.length <= 3, "No more than three credential suggestions per chapter: " + id);
  for (const routeId of routeIds) {
    const route = credentialRegistry[routeId];
    assert.ok(route, "Unknown credential route " + routeId + " in " + id);
    assert.ok(/^https:\/\//i.test(route.url), "Credential route must link to an HTTPS issuer URL: " + routeId);
    assert.ok(/^https:\/\//i.test(route.sourceUrl), "Issuer evidence URL must be HTTPS: " + routeId);
    assert.ok(route.provider && route.title && route.label && route.type && route.description, "Credential route metadata incomplete: " + routeId);
    assert.equal(route.verifiedOn, "2026-11-21", "Credential issuer desk-check date missing: " + routeId);
    assert.ok(/indonesia/i.test(route.regional || ""), "Every route must disclose Indonesia access status: " + routeId);
  }
  assert.deepEqual(credentialAudit[id].routeIds, routeIds, "Credential audit and runtime map diverged for " + id);
  assert.ok(credentialAudit[id].verificationStatus === "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "Credential mapping must not be overclaimed as accepted: " + id);
  if (!routeIds.length) assert.equal(credentialAudit[id].outcome, "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE", "No-route chapter needs an applied evidence outcome: " + id);
}
const credentialRegister = fs.readFileSync(path.join(root, "docs/credential-route-mapping-register.csv"), "utf8").trim().split(/\r?\n/);
assert.equal(credentialRegister.length - 1, 169, "Credential route register must contain 169 core chapter rows.");
const electiveRegister = fs.readFileSync(path.join(root, "docs/28-elective-credential-route-review.csv"), "utf8").trim().split(/\r?\n/);
assert.equal(electiveRegister.length - 1, 28, "Elective credential review must contain 28 chapter rows.");
assert.ok(electiveRegister.slice(1).every((line) => line.includes("NOT_YET_REVIEWED_IN_THIS_IMPLEMENTATION")), "All elective credential reviews must remain explicitly open until reviewed.");

console.log("PASS: chapter credential routes cover all 169 core chapters; no more than three suggestions per chapter; 28 elective reviews remain transparently OPEN.");
