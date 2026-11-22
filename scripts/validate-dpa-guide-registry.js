const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        value += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === '"' && value.length === 0) {
      quoted = true;
    } else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(value);
      value = "";
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
    } else {
      value += char;
    }
  }
  if (value.length || row.length) {
    row.push(value);
    if (row.some((cell) => cell.length > 0)) rows.push(row);
  }
  assert.equal(quoted, false, "Credential route CSV must not contain an unterminated quoted cell.");
  return rows;
}

const root = process.cwd();
const sourceFiles = [
  "fullstack-guides.js",
  "paid-social-guides.js",
  "role-study-guides-part1.js",
  "role-study-guides-part2.js",
  "role-study-guides-part3.js",
  "role-study-guides-part4.js",
  "chapter-guide-map.js",
  "chapter-resources.js",
  "chapter-credential-routes.js",
  "chapter-credential-routes-integration.js"
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
const part4Guides = sandbox.ROLE_STUDY_GUIDES_PART4 || [];
const part4Ids = part4Guides.map((guide) => guide.chapterId);
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
assert.equal(part4Ids.length, 10, "Recovered Part 4 must contain exactly ten authored guide overrides.");
assert.equal(new Set(part4Ids).size, 10, "Recovered Part 4 guide IDs must be unique.");
assert.deepEqual([...part4Ids].sort(), [
  "DPA-T03-CH01", "DPA-T03-CH04", "DPA-T03-CH05", "DPA-T03-CH06",
  "DPA-T08-CH01", "DPA-T08-CH05", "DPA-T08-CH06",
  "DPA-T10-CH01", "DPA-T10-CH07", "DPA-T10-CH08"
].sort(), "Recovered Part 4 scope must match the reviewed nine guide IDs.");
for (const guide of part4Guides) {
  assert.equal(registry[guide.chapterId], guide, "Authored Part 4 guide must override its existing guide object: " + guide.chapterId);
}
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
const foundationCredentialMap = sandbox.DPA_FOUNDATION_CREDENTIAL_MAP || {};
const foundationCredentialAudit = sandbox.DPA_FOUNDATION_CREDENTIAL_AUDIT || {};
const credentialMapIds = Object.keys(chapterCredentialMap);
const auditIds = Object.keys(credentialAudit);
const foundationIds = [...html.matchAll(/data-chapter-id=["'](DPA-CF-CH\d{2})["']/g)].map((match) => match[1]);
assert.ok(html.includes('<script src="./chapter-credential-routes.js"></script>'), "index.html must load the base chapter credential route registry.");
assert.ok(html.includes('<script src="./chapter-credential-routes-integration.js"></script>'), "index.html must load the reconciled credential route integration.");
assert.equal(credentialMapIds.length, 169, "Credential map must explicitly cover all 169 core chapters.");
assert.equal(auditIds.length, 169, "Credential audit must explicitly cover all 169 core chapters.");
assert.equal(foundationIds.length, 6, "The learner-facing Common Foundation must expose six stable chapter IDs.");
assert.equal(new Set(foundationIds).size, 6, "Common Foundation chapter IDs must be unique.");
assert.equal(Object.keys(foundationCredentialMap).length, 6, "Credential map must explicitly cover all six Common Foundation chapters.");
assert.equal(Object.keys(foundationCredentialAudit).length, 6, "Credential audit must explicitly cover all six Common Foundation chapters.");
assert.equal(Object.keys(credentialRegistry).length, 75, "Reconciled issuer route registry must contain 75 unique routes.");
const metaCompletionIds = ["meta_v10_ads_campaign","meta_v10_campaign_objectives","meta_v10_audience_strategy","meta_v10_buying_types","meta_v10_creative_best_practices","meta_v10_pixel_capi","meta_v10_campaign_measurement","meta_v10_privacy_brand_safety"];
const tiktokCompletionIds = ["tiktok_basics_achievement","tiktok_build_brand_achievement","tiktok_website_sales_achievement","tiktok_promote_app_achievement","tiktok_lead_generation_achievement","tiktok_shop_achievement","tiktok_search_achievement","tiktok_auto_ads_achievement","tiktok_advanced_shop_achievement","tiktok_advanced_leadgen_achievement","tiktok_advanced_app_achievement","tiktok_creative_production_achievement","tiktok_creative_iteration_achievement","tiktok_ai_solutions_achievement","tiktok_brand_safety_achievement","t02_tiktok_creative_planning"];
for (const id of [...metaCompletionIds, ...tiktokCompletionIds]) {
  assert.ok(credentialRegistry[id], "Required Meta/TikTok completion route missing: " + id);
  assert.equal(credentialRegistry[id].type, "course_completion_credential", "Meta/TikTok completion award must not be labelled as a professional exam: " + id);
  assert.equal(credentialRegistry[id].paidExam, false, "Completion route must not be marked as a paid professional exam: " + id);
}
assert.ok(credentialRegistry["meta_sba_ads_manager_skilling_certificate"], "Meta Small Business Academy Ads Manager skilling certificate must remain distinct.");
assert.equal(credentialRegistry["meta_sba_ads_manager_skilling_certificate"].type, "skilling_certificate", "Meta SBA Ads Manager route is a skilling certificate, not a completion course or professional certification.");
assert.equal(credentialRegistry["meta_sba_ads_manager_skilling_certificate"].paidExam, false, "Meta SBA skill test is not a paid professional certification exam.");
assert.equal(credentialRegistry["meta_sba_ads_manager_skilling_certificate"].tagClass, "t-coursecert", "Meta SBA skilling certificate must have a distinct visual type from course-completion credentials.");
assert.deepEqual(chapterCredentialMap["DPA-T05-CH01"], ["meta_v10_ads_campaign", "tiktok_basics_achievement", "meta_sba_ads_manager_skilling_certificate"], "T05 entry chapter must prioritize completion credentials before Meta SBA skilling test.");
assert.ok(/fee.*not state|does not state.*fee/i.test(credentialRegistry["meta_sba_ads_manager_skilling_certificate"].cost), "Meta SBA assessment price uncertainty must remain explicit.");
for (const id of ["meta_media_buying", "meta_media_planning", "meta_marketing_science", "tiktok_media_buying"]) {
  assert.ok(credentialRegistry[id], "Paid platform professional certification must be retained: " + id);
  assert.equal(credentialRegistry[id].type, "professional_certification", "Paid platform exam must remain a professional certification: " + id);
  assert.equal(credentialRegistry[id].paidExam, true, "Paid platform exam must remain separately disclosed: " + id);
}
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
    assert.ok(typeof route.verifiedOn === "string" && /^\d{4}-\d{2}-\d{2}$/.test(route.verifiedOn), "Credential issuer desk-check date must be an ISO calendar date: " + routeId);
    assert.ok(/indonesia/i.test(route.regional || ""), "Every route must disclose Indonesia access status: " + routeId);
  }
  assert.deepEqual(credentialAudit[id].routeIds, routeIds, "Credential audit and runtime map diverged for " + id);
  assert.ok(credentialAudit[id].verificationStatus === "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "Credential mapping must not be overclaimed as accepted: " + id);
  if (!routeIds.length) assert.equal(credentialAudit[id].outcome, "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE", "No-route chapter needs an applied evidence outcome: " + id);
}
for (const [id, routeIds] of Object.entries(foundationCredentialMap)) {
  assert.ok(Array.isArray(routeIds), "Common Foundation credential route list must be an array: " + id);
  assert.ok(routeIds.length <= 3, "No more than three credential suggestions per Foundation chapter: " + id);
  for (const routeId of routeIds) {
    const route = credentialRegistry[routeId];
    assert.ok(route, "Unknown credential route " + routeId + " in " + id);
    assert.ok(/^https:\/\//i.test(route.url) && /^https:\/\//i.test(route.sourceUrl), "Foundation issuer and evidence URLs must be HTTPS: " + routeId);
  }
  assert.deepEqual(foundationCredentialAudit[id].routeIds, routeIds, "Foundation credential audit and runtime map diverged for " + id);
  assert.ok(foundationCredentialAudit[id].verificationStatus === "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "Foundation mappings must remain first-pass: " + id);
}
const credentialRegister = parseCsv(fs.readFileSync(path.join(root, "docs/credential-route-mapping-register.csv"), "utf8"));
assert.equal(credentialRegister.length - 1, 175, "Credential route register must contain 169 core and six Common Foundation rows.");
const credentialRegisterHeader = credentialRegister[0];
const credentialColumn = Object.fromEntries(credentialRegisterHeader.map((name, index) => [name, index]));
for (const requiredColumn of ["chapter_id", "credential_route_ids", "journey_status", "mapping_verification_status", "notes"]) {
  assert.notEqual(credentialColumn[requiredColumn], undefined, "Credential register is missing column " + requiredColumn);
}
const credentialRows = credentialRegister.slice(1);
const credentialRowsById = new Map(credentialRows.map((row) => [row[credentialColumn.chapter_id], row]));
assert.equal(credentialRowsById.size, 175, "Credential register chapter IDs must be unique.");
assert.deepEqual([...credentialRowsById.keys()].sort(), [...uniqueChapterIds, ...foundationIds].sort(), "Credential register IDs must exactly cover core plus Common Foundation chapters.");
for (const [id, runtimeMap, runtimeAudit] of [
  ...Object.entries(chapterCredentialMap).map(([id, routes]) => [id, routes, credentialAudit[id]]),
  ...Object.entries(foundationCredentialMap).map(([id, routes]) => [id, routes, foundationCredentialAudit[id]])
]) {
  const row = credentialRowsById.get(id);
  const registeredRoutes = String(row[credentialColumn.credential_route_ids] || "").split(";").filter(Boolean);
  assert.deepEqual(registeredRoutes, [...runtimeMap], "Credential CSV route IDs must match runtime order for " + id);
  assert.equal(row[credentialColumn.journey_status], runtimeMap.length ? "OPTIONAL_EXTERNAL_EARN" : "APPLIED_SKILL_PORTFOLIO", "Credential CSV journey status diverged for " + id);
  assert.equal(row[credentialColumn.mapping_verification_status], "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "Credential CSV must preserve first-pass status for " + id);
  assert.equal(row[credentialColumn.notes], runtimeAudit.note, "Credential CSV note must match its runtime audit note for " + id);
}
const electiveRegister = fs.readFileSync(path.join(root, "docs/28-elective-credential-route-review.csv"), "utf8").trim().split(/\r?\n/);
assert.equal(electiveRegister.length - 1, 28, "Elective credential review must contain 28 chapter rows.");
assert.ok(electiveRegister.slice(1).every((line) => line.includes("NOT_YET_REVIEWED_IN_THIS_IMPLEMENTATION")), "All elective credential reviews must remain explicitly open until reviewed.");

console.log("PASS: chapter credential routes cover all 169 core chapters; no more than three suggestions per chapter; 28 elective reviews remain transparently OPEN.");
