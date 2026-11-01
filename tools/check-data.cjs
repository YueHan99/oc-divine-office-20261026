const assert=require('node:assert/strict'),fs=require('fs'),path=require('path');
const {GODS,GODS_V2,GODS_V3,QUESTIONS,QUESTIONS_V2,QUESTIONS_V3,LEGACY_QUESTIONS,rankAnswers}=require('../data');
assert.equal(GODS.length,35);assert.equal(QUESTIONS.length,25);assert.equal(new Set(GODS.map(g=>g.id)).size,35);
const appearances=Object.fromEntries(GODS.map(g=>[g.id,0])),fixtures={};
for(const q of QUESTIONS){assert.equal(q.options.length,6);for(const [text,p,s] of q.options){assert(text.length>8);assert(p in appearances);assert(s in appearances);appearances[p]++}}
for(const g of GODS){
 assert([4,5].includes(appearances[g.id]),'unbalanced exposure: '+g.id);
 assert(g.deep.join('').length>=180,'short analysis: '+g.id);
 assert(g.modes.length===3&&g.forum.length===3&&g.gossip.length===2);
 const allLong=['sichen', 'siyu', 'siqi', 'sihui', 'siheng', 'fengbo', 'huoshen', 'caishen', 'yanluo', 'zaoshen', 'yaowang', 'tudi', 'rishen', 'mengpo', 'zhishen', 'jiushen', 'yueshen'].includes(g.id);const long=['shangui','yunzhongjun','baicao','baiguo','jiushen','yingshen','jingshen','huashen'].includes(g.id);const isLittle=['mengpo','jiushen','xiangshen','zhishen','xueshen','yingshen','jingshen','huashen'].includes(g.id);assert(fs.existsSync(path.join(__dirname,'../assets',allLong?'line-oc-v4/'+g.id+'.webp':long?'line-oc-v3/'+g.id+'.webp':isLittle?'line-oc-v2/'+g.id+'.webp':'line-oc/'+g.id+'.webp')),'missing art: '+g.id);
 const forced=QUESTIONS.map(q=>q.options.findIndex(o=>o[1]===g.id));
 const partial=forced.map((a,i)=>a>=0?a:i%6);
 for(let round=0;round<8;round++)for(let qi=0;qi<QUESTIONS.length;qi++){if(forced[qi]>=0)continue;let best=-Infinity,bestAnswer=partial[qi];for(let ai=0;ai<6;ai++){const test=[...partial];test[qi]=ai;const rank=rankAnswers(test),target=rank.find(x=>x.id===g.id),others=rank.filter(x=>x.id!==g.id);const margin=target.score-Math.max(...others.map(x=>x.score));const score=margin*1000+target.score*10-others.reduce((n,x)=>n+x.score*x.score,0);if(score>best){best=score;bestAnswer=ai}}partial[qi]=bestAnswer}

 assert.equal(rankAnswers(partial)[0].id,g.id,'unreachable result: '+g.id);
 assert.equal(rankAnswers(partial).reduce((s,x)=>s+x.score,0),100);
 fixtures[g.id]=partial.join('');
}
assert.equal(LEGACY_QUESTIONS.length,12);
assert.equal(rankAnswers('303130303031'.split('').map(Number),1)[0].id,'sideng');
assert.equal(rankAnswers('040000030200'.split('').map(Number),1)[0].id,'siming');
fs.writeFileSync(path.join(__dirname,'../content/qa-fixtures.json'),JSON.stringify(fixtures,null,2));
const oldFixtures=require('../content/qa-fixtures-v2.json');for(const [id,answer] of Object.entries(oldFixtures))assert.equal(rankAnswers(answer.split('').map(Number),2)[0].id,id,'v2 changed: '+id);assert.equal(GODS_V2.length,24);assert.equal(QUESTIONS_V2.length,16);for(const [id,a] of Object.entries(require('../content/qa-fixtures-v3.json')))assert.equal(rankAnswers(a.split('').map(Number),3)[0].id,id,'v3 changed: '+id);assert.equal(GODS_V3.length,31);assert.equal(QUESTIONS_V3.length,21);console.log('35/35 outcomes reachable; all v1/v2/v3 fixture results retained; complete lore and art.');
console.log('Dossier lengths:',GODS.map(g=>g.name+':'+[g.analysis,...g.deep,g.power,g.scene,g.flaw,...g.thrill,...g.modes.flat(),...g.gossip,...g.forum,g.allyText,g.rivalText,g.hook].join('').length).join(' / '));
