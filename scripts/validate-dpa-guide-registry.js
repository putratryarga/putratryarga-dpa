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
  "chapter-resources.js"
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
