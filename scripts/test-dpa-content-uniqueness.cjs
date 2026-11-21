#!/usr/bin/env node
"use strict";

/**
 * Content-uniqueness gate (anti-gaming) for the DPA chapter guides.
 *
 * Question this test answers: could a chapter whose text is produced by the
 * generic fallback generator in index.html (buildGuide without a registry
 * roleNote) still pass the structural checks (">=3 steps + >=2 links") while
 * its content is generic boilerplate?
 *
 * Design:
 *  1. Load the authored guide corpus (fullstack-guides.js, paid-social-guides.js,
 *     role-study-guides-part1/2/3.js + chapter-guide-map.js) inside a node:vm
 *     sandbox — pure Node, no DOM, no dependency, no edits to other files.
 *  2. Compare guide text pairwise WITHIN a track (same Txx) using token-set
 *     containment: dup% = |A∩B| / min(|A|,|B|) * 100. Duplication > 50% = flag.
 *  3. Detector self-test (canary): two synthetic chapters built from the exact
 *     fallback templates of buildGuide (generic "Tindakan belajar: ..." steps,
 *     'Untuk "<topic>": input apa ...' checks, etc.) MUST be flagged. If the
 *     canary is not flagged, the detector is broken and the run fails.
 *
 * Exit codes: 0 = pass (no real pair > 50% AND canary flagged), 1 = fail.
 */

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const DUP_THRESHOLD = 50; // percent — >50% duplication flags a pair

const GUIDE_FILES = [
  "fullstack-guides.js",
  "paid-social-guides.js",
  "role-study-guides-part1.js",
  "role-study-guides-part2.js",
  "role-study-guides-part3.js",
  "chapter-guide-map.js"
];

const STOPWORDS = new Set([
  // Indonesian function words
  "yang","dan","untuk","dengan","pada","dari","ini","itu","adalah","tidak","akan",
  "atau","bila","jika","sebagai","oleh","agar","sudah","belum","dapat","harus",
  "satu","dua","tiga","lebih","hanya","juga","apa","bagaimana","sebelum",
  "sesudah","setelah","antara","dalam","lalu","serta","para","setiap","setiap",
  "ketika","karena","tetapi","namun","agar","agar","agar","masing","selama",
  "tersebut","terhadap","tanpa","selain","misal","contoh","gunakan","gunakan",
  "buat","tuliskan","tulis","catat","jelaskan","pastikan","periksa","petakan",
  "simpan","simulasikan","bandingkan","tentukan","definisikan","hitung","pilih",
  "bangun","tambahkan","susun","uraikan","bedakan","pisahkan","kumpulkan",
  "seharusnya","sebagai","melalui","secara","sehingga","yaitu","yakni","bahwa",
  // English function words
  "the","and","for","with","from","that","this","not","are","was","were","have",
  "has","had","its","their","per","into","out","use","used","using","make","made",
  "your","you","each","any","all","can","will","may","one","two","than","then",
  "when","what","how","why","which","who","also","more","most","some","such"
]);

function loadGuideRegistry() {
  const context = vm.createContext({ console: { log() {}, error() {} } });
  for (const file of GUIDE_FILES) {
    const source = fs.readFileSync(path.join(ROOT, file), "utf8");
    vm.runInContext(source, context, { filename: file });
  }
  const registry = context.DPA_GUIDE_BY_CHAPTER;
  if (!registry || typeof registry !== "object") {
    throw new Error("DPA_GUIDE_BY_CHAPTER not produced by " + GUIDE_FILES.join(", "));
  }
  return registry;
}

function canonicalChapterIds() {
  const raw = fs.readFileSync(path.join(ROOT, "docs", "169-core-chapter-ids.txt"), "utf8");
  return raw.split(/\r?\n/).map((x) => x.trim()).filter((x) => x && !x.startsWith("#"));
}

function guideText(guide) {
  const parts = [guide.concept, guide.example, ...(guide.steps || []), guide.practice];
  for (const check of guide.checks || []) {
    if (check && typeof check === "object") { parts.push(check.q, check.a); }
    else if (check) { parts.push(check); }
  }
  for (const term of guide.terms || []) { parts.push(term.term, term.definition); }
  return parts.filter(Boolean).join(" ");
}

function tokenize(text) {
  return new Set(
    text
      .replace(/<[^>]*>/g, " ")
      .replace(/&[a-z#0-9]+;/gi, " ")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length >= 3 && !/^\d+$/.test(w) && !STOPWORDS.has(w))
  );
}

function containment(a, b) {
  let shared = 0;
  for (const token of a) { if (b.has(token)) shared++; }
  const smaller = Math.min(a.size, b.size);
  return smaller === 0 ? 0 : (shared / smaller) * 100;
}

function sharedTokens(a, b, limit) {
  const shared = [];
  for (const token of a) { if (b.has(token)) shared.push(token); }
  shared.sort((x, y) => x.localeCompare(y));
  return shared.slice(0, limit);
}

// --- Canary: replicate the generic fallback templates from index.html buildGuide
function fallbackGuide(topics, title, outcome) {
  const genericStepBody =
    "Penjelasan umum topik ini pada konteks bab dan deliverable. " +
    "Tindakan belajar: tulis definisi dan sumber, petakan input serta proses, " +
    "lalu catat output dan kesalahan yang harus dicegah.";
  return {
    concept:
      'Tujuan track ini Bab "' + title + '" menghubungkan ' + topics.slice(0, 3).join("; ") +
      ". Kuasai input, proses, output, dan quality control agar keputusan dapat dipertanggungjawabkan.",
    example:
      'Contoh generik Fokuskan pada bab "' + title + '": gunakan ' + topics.slice(0, 3).join(" dan ") +
      ', lalu tunjukkan dampaknya pada deliverable "' + outcome + '".',
    steps: topics.map((t) => "<b>" + t + "</b>. " + genericStepBody),
    practice:
      'Lembar kerja standar Kerjakan deliverable "' + outcome + '" dalam urutan: (1) tulis brief dan asumsi; ' +
      "(2) isi komponen wajib dari subtopik; (3) tambahkan sumber, evidence, owner, dan versi; " +
      "(4) review dengan quality check; (5) tulis keputusan, risiko, dan next action.",
    checks: topics.slice(0, 3).map(
      (t) =>
        'Untuk "' + t + '": input apa yang diperlukan, seperti apa output yang benar, ' +
        "dan bagaimana lu memverifikasinya sebelum dipakai?"
    ),
    terms: []
  };
}

function comparePairSet(pairs, chapterTokens) {
  const flagged = [];
  let maxDup = 0;
  let maxPair = null;
  for (const pair of pairs) {
    const a = chapterTokens.get(pair[0]);
    const b = chapterTokens.get(pair[1]);
    const dup = containment(a, b);
    if (dup > maxDup) { maxDup = dup; maxPair = pair; }
    if (dup > DUP_THRESHOLD) {
      flagged.push({
        chapters: pair,
        duplicationPercent: Math.round(dup * 10) / 10,
        sharedTokens: sharedTokens(a, b, 12)
      });
    }
  }
  return { flagged, maxDup: Math.round(maxDup * 10) / 10, maxPair };
}

function main() {
  const result = {
    test: "dpa-content-uniqueness",
    thresholdPercent: DUP_THRESHOLD,
    metric: "token-set containment = |A∩B| / min(|A|,|B|) on normalized guide text (HTML stripped, stopwords removed)",
    generatedAt: new Date().toISOString(),
    checks: {},
    flaggedPairs: [],
    perTrackMax: [],
    failure: []
  };

  // --- 1. Load authored corpus -------------------------------------------------
  const registry = loadGuideRegistry();
  const ids = canonicalChapterIds();
  const missing = ids.filter((id) => !registry[id]);
  result.checks.guideRegistryCoverage = {
    canonicalChapters: ids.length,
    guidesFound: Object.keys(registry).length,
    missingGuides: missing
  };
  if (missing.length) {
    result.failure.push("Missing authored guides for " + missing.length + " chapters: " + missing.slice(0, 12).join(", "));
  }

  const tracks = new Map();
  const tokens = new Map();
  for (const id of ids) {
    const guide = registry[id];
    if (!guide) continue;
    tokens.set(id, tokenize(guideText(guide)));
    const track = id.slice(4, 7);
    if (!tracks.has(track)) tracks.set(track, []);
    tracks.get(track).push(id);
  }

  // --- 2. Pairwise comparison within each track -------------------------------
  for (const track of [...tracks.keys()].sort()) {
    const chapters = tracks.get(track).sort();
    const pairs = [];
    for (let i = 0; i < chapters.length; i++) {
      for (let j = i + 1; j < chapters.length; j++) pairs.push([chapters[i], chapters[j]]);
    }
    const outcome = comparePairSet(pairs, tokens);
    result.perTrackMax.push({ track, pairs: pairs.length, maxDuplicationPercent: outcome.maxDup, maxPair: outcome.maxPair });
    for (const item of outcome.flagged) result.flaggedPairs.push(item);
  }

  result.checks.pairwiseComparison = {
    tracksCompared: result.perTrackMax.length,
    totalPairs: result.perTrackMax.reduce((sum, t) => sum + t.pairs, 0),
    flaggedPairCount: result.flaggedPairs.length,
    globalMaxDuplicationPercent: Math.max(0, ...result.perTrackMax.map((t) => t.maxDuplicationPercent))
  };

  // --- 3. Canary: fallback-generator content MUST be flagged -------------------
  const canaryA = fallbackGuide(
    ["Impression", "Reach", "Frequency"], "Bab A", "media plan"
  );
  const canaryB = fallbackGuide(
    ["CPM", "Budget", "Pacing"], "Bab B", "media plan"
  );
  const canaryTokensA = tokenize(guideText(canaryA));
  const canaryTokensB = tokenize(guideText(canaryB));
  const canaryDup = containment(canaryTokensA, canaryTokensB);
  result.checks.fallbackCanary = {
    description: "Two synthetic chapters built from buildGuide's generic fallback templates must be flagged",
    duplicationPercent: Math.round(canaryDup * 10) / 10,
    flagged: canaryDup > DUP_THRESHOLD,
    fallbackStepsPassStructuralCheck: canaryA.steps.length >= 3 && canaryB.steps.length >= 3
  };
  if (!(canaryDup > DUP_THRESHOLD)) {
    result.failure.push(
      "DETECTOR BROKEN: fallback-generator canary pair was NOT flagged (" +
      Math.round(canaryDup * 10) / 10 + "% <= " + DUP_THRESHOLD + "%) — content-uniqueness gate cannot catch generic chapters."
    );
  }

  // --- 4. Verdict ---------------------------------------------------------------
  for (const item of result.flaggedPairs) {
    result.failure.push(
      "Duplicate content pair within one track: " + item.chapters[0] + " vs " + item.chapters[1] +
      " — " + item.duplicationPercent + "% (shared: " + item.sharedTokens.slice(0, 8).join(", ") + ")"
    );
  }

  const pass = result.failure.length === 0;
  result.status = pass ? "PASS" : "FAIL";
  console.log(JSON.stringify(result, null, 2));
  if (!pass) {
    console.error("FAIL: " + result.failure.length + " finding(s); see failure[] above.");
    process.exit(1);
  }
  console.log("PASS: no cross-chapter duplication above " + DUP_THRESHOLD + "% within any track; fallback canary flagged as expected.");
}

main();
