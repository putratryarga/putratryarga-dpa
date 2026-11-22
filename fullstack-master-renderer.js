/* Presentation renderer for the original Full-Stack eight-week master roadmap.
 * Loaded before index.html's inline study builder; fullstackMasterEsc() is resolved at call time.
 */
function fullstackMasterEsc(value){
 return String(value==null?"":value)
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;");
}
function renderFullstackMasterCrosswalk(index){
 if(typeof FULLSTACK_MASTER_MAP==="undefined"||typeof FULLSTACK_MASTER_WEEKS==="undefined")return "";
 var refs=FULLSTACK_MASTER_MAP[index]||[];
 if(!refs.length)return "";
 var out='<details class="lesson-fold fullstack-master-crosswalk"><summary>Crosswalk roadmap original · 8-week core + W0 sandbox</summary><div class="lesson-fold-body">';
 out+='<p>Mapping ini mempertahankan urutan belajar 8 minggu dari master roadmap. Bab di atas adalah struktur kompetensi role; minggu di bawah menunjukkan urutan belajar, credential route, exact courses, build, dan verify. W0 adalah setup sandbox, bukan minggu core.</p>';
 refs.forEach(function(id){
  var w=FULLSTACK_MASTER_WEEKS[id];if(!w)return;
  out+='<details class="lesson-fold master-week-fold"><summary><b>'+fullstackMasterEsc(id)+'</b> · '+fullstackMasterEsc(w.title)+' <span class="lesson-source-count">'+fullstackMasterEsc(w.time)+'</span></summary><div class="lesson-fold-body">';
  out+='<h5>LEARN</h5><ul>'+w.learn.map(function(x){return '<li>'+fullstackMasterEsc(x)+'</li>';}).join("")+'</ul>';
  out+='<h5>CREDENTIAL ROUTE</h5><p>'+fullstackMasterEsc(w.credential)+'</p>';
  out+='<h5>EXACT COURSES / PATHS</h5><div class="chapter-source-list">'+w.exact.map(function(x){return '<div class="chapter-resource-item"><a href="'+fullstackMasterEsc(x[1])+'" target="_blank" rel="noopener noreferrer"><b>'+fullstackMasterEsc(x[0])+'</b><span> — '+fullstackMasterEsc(x[2])+'</span></a></div>';}).join("")+'</div>';
  out+='<h5>BUILD</h5><ol>'+w.build.map(function(x){return '<li>'+fullstackMasterEsc(x)+'</li>';}).join("")+'</ol>';
  out+='<h5>VERIFY</h5><ol>'+w.verify.map(function(x){return '<li>'+fullstackMasterEsc(x)+'</li>';}).join("")+'</ol>';
  out+='<div class="chapter-deliverable"><b>ARCHITECT ADD-ON:</b> '+fullstackMasterEsc(w.architect)+'</div></div></details>';
 });
 out+='<p class="source-note">Credential status can change. Course completion, badge, skilling certificate, dan professional certification harus dicatat sesuai nama issuer. Exact result/forecast dari exercise tetap diberi label SIMULATED.</p></div></details>';
 return out;
}
