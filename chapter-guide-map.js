/* Immutable chapter-to-guide registry.
 * Each guide object carries chapterId. Missing mappings deliberately fall back
 * to the generic chapter explanation rather than a positional guide.
 */
var DPA_GUIDE_BY_CHAPTER = {};
(function(){
 function register(guides){
  (guides||[]).forEach(function(guide){
   if(!guide||!guide.chapterId)return;
   if(DPA_GUIDE_BY_CHAPTER[guide.chapterId]){
    throw new Error("Duplicate DPA chapter guide ID: "+guide.chapterId);
   }
   DPA_GUIDE_BY_CHAPTER[guide.chapterId]=guide;
  });
 }
 register(typeof FULLSTACK_GUIDES!=="undefined"?FULLSTACK_GUIDES:[]);
 register(typeof PAID_SOCIAL_GUIDES!=="undefined"?PAID_SOCIAL_GUIDES:[]);
 if(typeof ROLE_STUDY_GUIDES!=="undefined"){
  Object.keys(ROLE_STUDY_GUIDES).forEach(function(role){register(ROLE_STUDY_GUIDES[role]);});
 }
})();
