#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const evidence = fs.readFileSync("docs/169-chapter-evidence-register.md","utf8");
const mapping = fs.readFileSync("docs/169-chapter-resource-mapping.md","utf8");
const canonical = fs.readFileSync("docs/169-core-chapter-ids.txt","utf8").split(/\r?\n/).map(x=>x.trim()).filter(x=>/^DPA-T\d{2}-CH\d{2}$/.test(x));
const headings = [...evidence.matchAll(/^### (DPA-T\d{2}-CH\d{2}) — ([^\n]+)/gm)];
const map = new Map();
for (const line of mapping.split(/\r?\n/)) {
  if (!/^\|\s*DPA-T\d{2}-CH\d{2}\s*\|/.test(line)) continue;
  const cells = line.split("|").slice(1,-1).map(x=>x.trim());
  map.set(cells[0], new Set([...line.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(m=>m[1])).size);
}
const normalize = value => value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();
const questions = new Set();
const duplicates = [];
const failures = [];
const min = {objective:Infinity,example:Infinity,workflow:Infinity,steps:Infinity,practice:Infinity,glossary:Infinity,qna:Infinity,urls:Infinity};
for (let i=0;i<headings.length;i++) {
  const id=headings[i][1];
  const block=evidence.slice(headings[i].index,i+1<headings.length?headings[i+1].index:evidence.length);
  const extract=(start,end)=>{
    const p=block.indexOf(start); if(p<0)return "";
    const rest=block.slice(p+start.length); const e=end?rest.indexOf(end):-1;
    return (e<0?rest:rest.slice(0,e)).trim();
  };
  const objective=extract("**Learning objective / concept:**","**Simulated example:**");
  const example=extract("**Simulated example:**","**Technical depth / workflow:**");
  const workflow=extract("**Technical depth / workflow:**","**Practice / deliverable:**");
  const practice=extract("**Practice / deliverable:**","**Assessment / comprehension checks:**");
  const glossary=extract("**Glossary:**","**Tools / method / workflow:**");
  const q=[...block.matchAll(/^\s*\d+\. \*\*Q:\*\* (.+?)\r?\n\s+\*\*Expected answer in guide[^:]*:\*\* (.+)$/gm)];
  for(const item of q){const n=normalize(item[1]);if(questions.has(n))duplicates.push({chapter:id,question:item[1]});else questions.add(n);}
  const steps=(workflow.match(/^\s*(?:-|\(\d+\)|\d+\.)/gm)||[]).length;
  const terms=(glossary.match(/^\s*-\s*\*\*/gm)||[]).length;
  const urls=map.get(id)||0;
  const metrics={objective:objective.length,example:example.length,workflow:workflow.length,steps,practice:practice.length,glossary:terms,qna:q.length,urls};
  for(const [key,value] of Object.entries(metrics))min[key]=Math.min(min[key],value);
  const flags=[];
  if(objective.length<100)flags.push("OBJECTIVE_TEXT_SHORT");
  if(example.length<100)flags.push("EXAMPLE_TEXT_SHORT");
  if(workflow.length<240||steps<3)flags.push("WORKFLOW_DEPTH_SIGNAL_LOW");
  if(practice.length<100)flags.push("PRACTICE_TEXT_SHORT");
  if(terms<3)flags.push("GLOSSARY_TERMS_LOW");
  if(q.length!==3)flags.push("QNA_COUNT_NOT_3");
  if(urls<2)flags.push("RESOURCE_URLS_LT_2");
  if(flags.length)failures.push({id,flags});
}
if(canonical.length!==169||headings.length!==169||map.size!==169)throw new Error("Canonical chapter identity/count mismatch.");
if(duplicates.length)throw new Error("Exact duplicate Q&A question texts: "+JSON.stringify(duplicates.slice(0,5)));
if(failures.length)throw new Error("Chapter structural-depth screening flags: "+JSON.stringify(failures.slice(0,20)));
console.log(JSON.stringify({status:"PASS — STRUCTURE SIGNALS ONLY",chapters:headings.length,priorityTracks:["T02","T03","T07","T10","T13","T16"],priorityChapterCount:63,exactDuplicateQnaQuestions:duplicates.length,minimumMetrics:min,contentAndSmeApproval:"OPEN — not assessed by this script"},null,2));
