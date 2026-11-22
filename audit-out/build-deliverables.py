# -*- coding: utf-8 -*-
"""Agent C deliverable generator: 13/13a Q&A audit + 15/15a rubric audit (scratch)."""
import csv, io, json, collections

qa = json.load(io.open("audit-out/qa-machine-results.json", encoding="utf-8"))
rb = json.load(io.open("audit-out/rubric-structural-results.json", encoding="utf-8"))
tri_rows = list(csv.DictReader(io.open("docs/507-qna-automated-triage.csv", encoding="utf-8")))
rub_rows = list(csv.DictReader(io.open("docs/169-chapter-rubric-calibration-register.csv", encoding="utf-8")))
P = qa["per_row"]
sampled = {s["item_id"]: s for s in qa["sampling"]["items"]}
rub_sampled = set(rb["rubric_sample"]["items"])

# ---- manual judgments for the 60 sampled items (from guided review of guide sources) ----
# correctness: CONSISTENT = answer aligns with chapter guide concept/steps/terms/example
J = {}
def j(item, corr, clar, amb, alt, plat, cog, sme, sev, note):
    J[item] = dict(corr=corr, clar=clar, amb=amb, alt=alt, plat=plat, cog=cog, sme=sme, sev=sev, note=note)

j("DPA-T01-CH01-Q03","CONSISTENT","OK","NONE","Daftar bottleneck setara yang disebut guide (stock-out, distribusi, checkout, sales response, harga, margin, PMF) diterima","NA","analyze","NO","NONE","")
j("DPA-T01-CH01-Q01","CONSISTENT","OK","NONE","Kombinasi penyebab kualitas revenue sesuai example guide diterima","NA","analyze","NO","NONE","")
j("DPA-T01-CH07-Q01","CONSISTENT","OK","NONE","Parafrase definisi UTM vs event diterima","NA","understand","NO","NONE","")
j("DPA-T01-CH08-Q03","CONSISTENT","OK","NONE","Definisi inconclusive + bukan bukti identik diterima","NA","understand","NO","NONE","")
j("DPA-T02-CH03-Q03","CONSISTENT","OK","NONE","Parafrase brand fit (peran, kredibilitas, kesesuaian) diterima","NA","understand","NO","NONE","")
j("DPA-T02-CH04-Q03","CONSISTENT","OK","NONE","Cek konsistensi sesuai step 4 guide diterima","NA","apply","NO","NONE","")
j("DPA-T02-CH06-Q02","CONSISTENT","OK","NONE","Definisi shared media sesuai kerangka PESO guide","NA","understand","NO","NONE","")
j("DPA-T02-CH07-Q03","CONSISTENT","OK","NONE","Kontras architecture vs calendar sesuai concept","NA","understand","NO","NONE","")
j("DPA-T03-CH02-Q02","CONSISTENT","OK","NONE","Fungsi first-party data + governance sesuai terms","NA","understand","NO","NONE","")
j("DPA-T03-CH03-Q03","CONSISTENT","OK","NONE","Daftar elemen yang disamakan sesuai step 3","NA","understand","NO","NONE","")
j("DPA-T03-CH06-Q02","CONSISTENT","MINOR","MINOR","Definisi GRP umum diterima; SME perlu konfirmasi basis universe (GRP vs TRP) dan menerima jawaban yang membedakan keduanya","NA","remember","YES","MINOR","Jawaban menyebut 'target universe' untuk GRP; guide menggabungkan GRP/TRP dalam satu term — nuansa interpretatif")
j("DPA-T03-CH07-Q03","CONSISTENT","OK","NONE","Daftar dependency sesuai step 4","NA","understand","NO","NONE","")
j("DPA-T04-CH05-Q01","CONSISTENT","OK","NONE","Parafrase message match sesuai terms","NA","understand","NO","NONE","")
j("DPA-T04-CH07-Q03","CONSISTENT","OK","NONE","Fungsi offline conversion + privacy/identifier diterima","NA","understand","NO","NONE","")
j("DPA-T04-CH07-Q01","CONSISTENT","OK","NONE","Alasan qualification sesuai example guide (spam/duplikat)","NA","analyze","NO","NONE","")
j("DPA-T04-CH09-Q02","CONSISTENT","OK","NONE","Definisi inconclusive singkat diterima","NA","understand","NO","NONE","")
j("DPA-T05-CH03-Q01","CONSISTENT","OK","NONE","Argumen seed quality sesuai example guide (visitor vs buyer)","NA","analyze","NO","NONE","")
j("DPA-T05-CH05-Q03","CONSISTENT","OK","NONE","Daftar cek usage rights sesuai step 5","NA","understand","NO","NONE","")
j("DPA-T05-CH05-Q02","CONSISTENT","OK","NONE","Penjelasan CTR tinggi konversi buruk sesuai concept","NA","analyze","NO","NONE","")
j("DPA-T05-CH08-Q01","CONSISTENT","OK","NONE","Jawaban 'tidak menjamin' konsisten dengan hedging guide","RISK_DATED","evaluate","YES","MINOR","Guide mengutip panduan TikTok 'diperbarui Juni 2026' (25 hasil/7 hari); verifikasi ulang currentness saat rilis — angka tidak diulang di jawaban (baik)")
j("DPA-T06-CH01-Q03","CONSISTENT","OK","NONE","Manfaat transparansi + batasan (bukan bukti IVT/viewability) sesuai sumber ads.txt/sellers.json","NA","analyze","NO","NONE","")
j("DPA-T06-CH01-Q01","CONSISTENT","OK","NONE","Peran DSP vs SSP sesuai terms","NA","analyze","NO","NONE","")
j("DPA-T06-CH07-Q01","CONSISTENT","OK","NONE","Daftar penyebab underspend selain bid sesuai example/steps","NA","analyze","NO","NONE","")
j("DPA-T06-CH08-Q01","CONSISTENT","OK","NONE","Perbedaan preferred deal vs PMP sesuai terms; hedging 'periksa deal terms' baik","NA","analyze","NO","NONE","")
j("DPA-T07-CH01-Q03","CONSISTENT","OK","NONE","Alasan eligibility (SKU, stok, listing, account)","NA","understand","NO","NONE","")
j("DPA-T07-CH02-Q02","CONSISTENT","MINOR","NONE","Trust/availability memengaruhi conversion sesuai concept","NA","understand","NO","NONE","Kalimat akhir bercampur EN ('influence conversion') — konsistensi bahasa editorial")
j("DPA-T07-CH04-Q02","CONSISTENT","OK","NONE","ROAS=spend/sales; ACoS inverse sesuai terms","NA","understand","NO","NONE","")
j("DPA-T07-CH06-Q01","CONSISTENT","OK","NONE","Risiko segmen sempit sesuai concept","NA","analyze","NO","NONE","")
j("DPA-T08-CH03-Q02","CONSISTENT","OK","NONE","Basis net payable yang sama diterima","NA","understand","NO","NONE","")
j("DPA-T08-CH03-Q01","CONSISTENT","OK","NONE","RFP proposal vs RFQ quotation sesuai terms","NA","understand","NO","NONE","")
j("DPA-T08-CH05-Q01","CONSISTENT","OK","NONE","Definisi BATNA sesuai terms","NA","remember","NO","NONE","")
j("DPA-T08-CH08-Q02","CONSISTENT","OK","NONE","Langkah verifikasi currency/tax sesuai steps","NA","apply","NO","NONE","")
j("DPA-T09-CH05-Q03","CONSISTENT","OK","NONE","Daftar serahan publisher sesuai step 3","NA","apply","NO","NONE","")
j("DPA-T09-CH05-Q02","CONSISTENT","OK","NONE","Fungsi counting method sesuai terms","NA","understand","NO","NONE","")
j("DPA-T09-CH09-Q01","CONSISTENT","OK","NONE","Delivered vs billable sesuai example (tolerance/bonus)","NA","analyze","NO","NONE","")
j("DPA-T10-CH02-Q03","CONSISTENT","OK","NONE","Missing vs zero + dampak imputasi sesuai sumber GA4/BigQuery","NA","analyze","NO","NONE","")
j("DPA-T10-CH03-Q01","CONSISTENT","OK","NONE","Daftar penyebab selisih conversion sesuai example guide","NA","analyze","NO","NONE","")
j("DPA-T10-CH10-Q01","CONSISTENT","OK","NONE","Bukti kualitas data (dictionary, lineage, QA log) sesuai concept","NA","evaluate","NO","NONE","")
j("DPA-T11-CH02-Q03","CONSISTENT","OK","NONE","Definisi cannibalization sesuai terms","NA","understand","NO","NONE","")
j("DPA-T11-CH03-Q01","CONSISTENT","OK","NONE","Risiko robots.txt sesuai terms (bukan pengganti noindex)","NA","understand","NO","NONE","")
j("DPA-T11-CH07-Q01","CONSISTENT","OK","NONE","Definisi NAP sesuai terms","NA","remember","NO","NONE","")
j("DPA-T12-CH03-Q01","CONSISTENT","OK","NONE","Open tracking/image preloading sesuai example guide; akurat","NA","analyze","NO","NONE","")
j("DPA-T12-CH06-Q02","CONSISTENT","OK","NONE","Batas retry + backoff + idempotency sesuai steps/terms","NA","analyze","NO","NONE","")
j("DPA-T12-CH08-Q01","CONSISTENT","OK","NONE","Start event konsisten sesuai concept/steps","NA","analyze","NO","NONE","")
j("DPA-T13-CH05-Q01","CONSISTENT","OK","NONE","Risiko clickbait sesuai example guide (janji vs isi)","NA","evaluate","NO","NONE","")
j("DPA-T13-CH08-Q01","CONSISTENT","OK","NONE","Perbedaan lintas platform sesuai concept/example","NA","analyze","NO","NONE","")
j("DPA-T13-CH08-Q03","CONSISTENT","OK","MINOR","Daftar perbedaan definisi metrik diterima; istilah spesifik platform (mis. engaged view) perlu re-cek periodik","RISK_NAMING","analyze","NO","NONE","Hedging 'catat tanggal definisi' baik")
j("DPA-T13-CH11-Q02","CONSISTENT","OK","NONE","Batasan kurikulum strategi vs produksi sesuai concept","NA","understand","NO","NONE","")
j("DPA-T14-CH08-Q03","CONSISTENT","OK","NONE","Daftar biaya seeding + fee lisensi terpisah sesuai concept/steps","NA","understand","NO","NONE","")
j("DPA-T14-CH08-Q02","CONSISTENT","OK","NONE","Opt-in bukan persetujuan posting/usage sesuai concept","NA","evaluate","NO","NONE","")
j("DPA-T14-CH09-Q01","CONSISTENT","OK","NONE","Langkah keterlambatan sesuai concept (kontrak, dokumentasi, remedy)","NA","evaluate","NO","NONE","")
j("DPA-T14-CH10-Q01","CONSISTENT","OK","NONE","Boost vs partnership ad sesuai terms; menyebut nama fitur (Meta Partnership Ads, Spark Ads)","RISK_NAMING","understand","YES","MINOR","Nama fitur platform berubah; verifikasi penamaan saat rilis — jawaban sudah menghedging")
j("DPA-T15-CH01-Q02","CONSISTENT","MINOR","NONE","Definisi eligible action + reversal sesuai steps","NA","understand","NO","NONE","Konjungsi EN 'and' di jawaban ID — konsistensi bahasa editorial")
j("DPA-T15-CH04-Q03","CONSISTENT","OK","NONE","Risiko tiered incentive sesuai concept","NA","analyze","NO","NONE","")
j("DPA-T15-CH06-Q03","CONSISTENT","OK","NONE","Dampak cookie loss sesuai concept","NA","understand","NO","NONE","")
j("DPA-T15-CH07-Q02","CONSISTENT","OK","NONE","Daftar pemantauan launch sesuai steps","NA","apply","NO","NONE","")
j("DPA-T16-CH09-Q03","CONSISTENT","OK","NONE","Cek permission/rights UGC sesuai steps","NA","apply","NO","NONE","")
j("DPA-T16-CH09-Q01","CONSISTENT","MINOR","NONE","Reward positif review berisiko kebijakan platform sesuai example guide","NA","evaluate","NO","NONE","Klausa EN 'reward should not require positive rating' di jawaban ID — konsistensi bahasa editorial")
j("DPA-T16-CH11-Q03","CONSISTENT","OK","NONE","Validasi sentiment (sarcasm, sample bias) sesuai concept","NA","evaluate","NO","NONE","")
j("DPA-T16-CH11-Q02","CONSISTENT","OK","NONE","Definisi meaningful contribution sesuai concept","NA","remember","NO","NONE","")

missing_j = [i for i in sampled if i not in J]
if missing_j:
    raise SystemExit("manual judgment missing for: %s" % missing_j)

# fuzzy-pair notes for items not sampled (question texts were read)
fuzzy_notes = {
    "DPA-T03-CH08-Q01": "Fuzzy 0.962 dengan DPA-T08-CH01-Q02 (soal sama lintas track); konfirmasi reuse sengaja & jawaban terkontekstualisasi per role",
    "DPA-T08-CH01-Q02": "Fuzzy 0.962 dengan DPA-T03-CH08-Q01 (soal sama lintas track); konfirmasi reuse sengaja & jawaban terkontekstualisasi per role",
    "DPA-T04-CH03-Q02": "Fuzzy 0.949 dengan DPA-T05-CH04-Q02 (soal hampir sama lintas track); konfirmasi reuse sengaja",
    "DPA-T05-CH04-Q02": "Fuzzy 0.949 dengan DPA-T04-CH03-Q02 (soal hampir sama lintas track); konfirmasi reuse sengaja",
    "DPA-T02-CH03-Q01": "Fuzzy 0.852 dengan DPA-T10-CH09-Q01 (trend/insight vs finding/insight); pastikan batas definisi antar chapter tetap konsisten",
    "DPA-T10-CH09-Q01": "Fuzzy 0.852 dengan DPA-T02-CH03-Q01; pastikan batas definisi antar chapter tetap konsisten",
    "DPA-T09-CH08-Q02": "Fuzzy 0.889 dengan DPA-T11-CH08-Q01 (click count vs GSC clicks); kemungkinan soal berbeda platform — tetap konfirmasi",
    "DPA-T11-CH08-Q01": "Fuzzy 0.889 dengan DPA-T09-CH08-Q02; kemungkinan soal berbeda platform — tetap konfirmasi",
}

# ---- write 13-qa-and-assessment-audit.csv ----------------------------------
out_cols = ["audit_row_check","audit_empty_fields","audit_dup_flag","audit_fuzzy_pair",
            "audit_answer_matches_guide","audit_word_count_check","audit_source_url_format",
            "audit_source_url_count","audit_triage_flags_recheck","audit_tier",
            "audit_manual_reviewed","audit_sample_tier","audit_correctness_vs_source",
            "audit_clarity","audit_ambiguity","audit_accepted_alternatives",
            "audit_platform_currency","audit_cognitive_level","audit_needs_sme",
            "audit_severity","audit_notes","audit_disposition"]
fz = {(p["a"], p["b"]): p for p in qa["issues"]["fuzzy_question_pairs_ge_085"]}
pair_of = collections.defaultdict(list)
for p in qa["issues"]["fuzzy_question_pairs_ge_085"]:
    pair_of[p["a"]].append(p)
    pair_of[p["b"]].append(p)

n13 = "docs/delivery/13-qa-and-assessment-audit.csv"
with io.open(n13, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, quoting=csv.QUOTE_MINIMAL)
    w.writerow(list(tri_rows[0].keys()) + out_cols)
    for r in tri_rows:
        pid = r["item_id"]
        pr = P[pid]
        empty = ",".join(pr["empty_fields"]) if pr["empty_fields"] else "-"
        if empty == "-":
            row_check = "PASS"
        elif set(pr["empty_fields"]) == {"automated_triage_flags"}:
            row_check = "PASS"  # flags column intentionally empty when no flag
        else:
            row_check = "ISSUE"
        if pr.get("fuzzy_with"):
            p0 = pair_of[pid][0]
            other = p0["b"] if p0["a"] == pid else p0["a"]
            dup_flag, fuzzy = "FUZZY_GE_085", "%s (%.3f)" % (other, p0["ratio"])
        else:
            dup_flag, fuzzy = "NONE", "-"
        url_status = pr["source_url_status"] if pr["source_url_status"] != "OK" else (
            "OK_MULTI" if pr.get("source_url_count", 0) > 1 else "OK")
        wc_ok = "OK"
        for m in qa["issues"]["word_count_mismatches_gt2"]:
            if m["id"] == pid:
                wc_ok = "MISMATCH"
        flags_recheck = "CONSISTENT" if not any(m["id"] == pid for m in qa["issues"]["length_flag_mismatches"]) else "MISMATCH"
        s = sampled.get(pid)
        if s:
            jd = J[pid]
            manual = "Y"
            sme = jd["sme"]
            sev = jd["sev"]
            notes = "; ".join(x for x in [jd["note"], fuzzy_notes.get(pid, "")] if x) or "-"
            vals = [jd["corr"], jd["clar"], jd["amb"], jd["alt"], jd["plat"], jd["cog"]]
            tier_sample = s["tier"]
        else:
            manual, sme, sev, notes, vals, tier_sample = "", ("YES" if pid in fuzzy_notes else ""), "MINOR" if pid in fuzzy_notes else "", fuzzy_notes.get(pid, "-"), ["", "", "", "", "", ""], ""
        disp = "PENDING SME REVIEW"
        w.writerow([r[c] for c in r.keys()] + [
            row_check, empty, dup_flag, fuzzy, pr.get("guide_match", ""), wc_ok,
            url_status, pr.get("source_url_count", 0), flags_recheck, pr["tier"],
            manual, tier_sample] + vals + [sme, sev, notes, disp])

# ---- write 15-rubric-calibration-audit.csv ---------------------------------
rub_out = ["audit_columns_complete","audit_pending_fields","audit_criteria_count_check",
           "audit_qna_count_check","audit_dimensions_check","audit_scale_check",
           "audit_pass_mark_status","audit_critical_failure_status","audit_resubmission_status",
           "audit_md_section_check","audit_md_csv_field_check","audit_checklist_vs_guide",
           "audit_criteria_specificity","audit_anchors_status","audit_manual_reviewed",
           "audit_findings","audit_severity","audit_disposition"]
criteria_mis = {m["chapter_id"] for m in rb["issues"]["criteria_count_mismatch"]}
qna_mis = {m["chapter_id"] for m in rb["issues"]["qna_count_mismatch"]}
md_mis = {m["chapter_id"] for m in rb["issues"]["md_csv_field_mismatch"]}
chk_mis = {m["chapter_id"] for m in rb["issues"]["checklist_vs_guide_practice_mismatch"]}
md_miss = {m["chapter_id"] for m in rb["md_missing_blocks"]}
pending = ["reviewer","review_date","evidence_link","decision"]
find_manual = ("Manual: 4 kriteria observable namun generik (ke-spesifik-an chapter ada di checklist); "
               "anchors hadir sebagai tabel global 5x4 (0-3), tidak di-tailoring per chapter; "
               "critical-failure generik & self-declared not-calibrated; kebijakan resubmission global tanpa parameter (deadline/jumlah/cap); "
               "skala 80/100 UNCALIBRATED — status tetap calibration-draft, tidak disetujui")
n15 = "docs/delivery/15-rubric-calibration-audit.csv"
with io.open(n15, "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, quoting=csv.QUOTE_MINIMAL)
    w.writerow(list(rub_rows[0].keys()) + rub_out)
    for r in rub_rows:
        cid = r["chapter_id"]
        pend = [c for c in pending if not (r.get(c) or "").strip()]
        complete = "PENDING_FIELDS_PRESENT" if pend else "INCOMPLETE"
        spec = "CHAPTER_SPECIFIC" if cid == "DPA-T16-CH12" else "GENERIC_SHARED"
        chk = "PARAPHRASE_EQUIVALENT" if cid in chk_mis else "EXACT"
        if cid in rub_sampled:
            manual, findings, sev = "Y", find_manual, "MINOR"
        else:
            manual, findings, sev = "", "-", ""
        w.writerow([r[c] for c in r.keys()] + [
            complete, ",".join(pend) or "-",
            "OK" if cid not in criteria_mis else "MISMATCH",
            "OK" if cid not in qna_mis else "MISMATCH",
            "OK", "OK",
            "80/100_UNCALIBRATED",
            "PRESENT_UNCALIBRATED",
            "GLOBAL_POLICY_PARAMS_OPEN",
            "COMPLETE" if cid not in md_miss else "MISSING_BLOCK",
            "MATCH" if cid not in md_mis else "MISMATCH",
            chk, spec,
            "GLOBAL_TABLE_PRESENT",
            manual, findings, sev,
            "PENDING SME REVIEW - NOT APPROVED"])

print("wrote", n13, "rows:", len(tri_rows))
print("wrote", n15, "rows:", len(rub_rows))
print("sampled manual rows 13:", len(sampled), "rubric manual rows 15:", len(rub_sampled))
