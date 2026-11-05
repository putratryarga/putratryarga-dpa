/* Immutable chapter-to-guide registry.
 * Every one of the 169 core chapter IDs must resolve to its authored guide.
 * Missing mappings fall back to generic copy only as a defensive runtime behavior;
 * CI validates exact 169/169 coverage and prevents silent loss of authored material.
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
 function registerGroup(group){
  if(!group)return;
  Object.keys(group).forEach(function(role){
   register(group[role]);
  });
 }
 register(typeof FULLSTACK_GUIDES!=="undefined"?FULLSTACK_GUIDES:[]);
 register(typeof PAID_SOCIAL_GUIDES!=="undefined"?PAID_SOCIAL_GUIDES:[]);
 registerGroup(typeof ROLE_STUDY_GUIDES!=="undefined"?ROLE_STUDY_GUIDES:null);
 registerGroup(typeof ROLE_STUDY_GUIDES_PART2!=="undefined"?ROLE_STUDY_GUIDES_PART2:null);
 registerGroup(typeof ROLE_STUDY_GUIDES_PART3!=="undefined"?ROLE_STUDY_GUIDES_PART3:null);
})();
