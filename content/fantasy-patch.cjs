const settings=require('./fantasy.cjs');
const domains={
 siming:'命簿 · 逆因果 · 未写终章',shuishi:'万水 · 沉海王城 · 逆潮',sichen:'盗时 · 失落星宿 · 归墟刻',simeng:'梦魇 · 虚实易位 · 梦中神国',siyuan:'因缘 · 千生赤结 · 真名缚魂',
 siyu:'龙雨 · 返生敕 · 万川灵息',siqi:'神誓 · 真名锁链 · 背誓之罚',sideng:'魂灯 · 冥河归途 · 不灭鬼国',sihui:'无名 · 认知抹令 · 天影',siheng:'神权 · 等价偿算 · 诸天之债',
 zhanshen:'战魂 · 失主神兵 · 无旗军阵',leishen:'天罚 · 因果雷印 · 诛神',fengbo:'长风 · 破界 · 封天之锁',huoshen:'劫火 · 熔敕 · 创世残炉',wenchang:'禁书 · 敕律 · 一字成界',
 caishen:'命钱 · 夺运 · 诸天宝局',yueshen:'月影 · 剥魂 · 碎月封印',yanluo:'幽冥 · 真名追索 · 十殿终判',shanjun:'祖山 · 百兽神甲 · 山骨',zaoshen:'灶火 · 烟火神城 · 封凶',
 yaowang:'百毒 · 咒脉 · 万劫药炉',tudi:'地脉 · 古城兵阵 · 镇龙',huashen:'命花 · 花期生杀 · 葬神阵',rishen:'第十日 · 日冕 · 归墟断箭',mengpo:'忘川 · 前尘炼汤 · 轮回禁名',
 jiushen:'白酒 · 青瓷封魂 · 席间禁锋',xiangshen:'香篆 · 嗅魂 · 千界烟路',zhishen:'星丝 · 命线 · 封界天衣',xueshen:'神雪 · 停咒 · 纪元封存',yingshen:'魂萤 · 换位 · 夜冢古军',jingshen:'神镜 · 倒影易主 · 千面镜宫',
 shangui:'无敕幽林 · 食阵山径 · 藤冠',yunzhongjun:'云相 · 折天 · 九霄云衣',baicao:'灵根 · 草木真名 · 万根还源',baiguo:'灵果 · 因果熟落 · 果中千界'
};
const bonds={
 siming:['sideng','siheng'],shuishi:['siyu','siqi'],sichen:['rishen','siming'],simeng:['wenchang','jingshen'],siyuan:['huashen','fengbo'],siyu:['yaowang','huoshen'],siqi:['siheng','shuishi'],sideng:['siming','yanluo'],sihui:['yueshen','jingshen'],siheng:['siqi','siming'],
 zhanshen:['leishen','yanluo'],leishen:['zhanshen','sihui'],fengbo:['shuishi','siyuan'],huoshen:['shanjun','siyu'],wenchang:['simeng','siming'],caishen:['tudi','siheng'],yueshen:['sihui','rishen'],yanluo:['siming','sideng'],shanjun:['huoshen','shangui'],zaoshen:['sideng','huoshen'],yaowang:['siyu','yanluo'],tudi:['caishen','shanjun'],
 huashen:['siyuan','xueshen'],rishen:['sichen','yueshen'],mengpo:['yanluo','jingshen'],jiushen:['xiangshen','mengpo'],xiangshen:['jiushen','sihui'],zhishen:['yingshen','fengbo'],xueshen:['mengpo','huashen'],yingshen:['zhishen','rishen'],jingshen:['yueshen','simeng'],shangui:['baicao','shanjun'],yunzhongjun:['shangui','fengbo'],baicao:['baiguo','yaowang'],baiguo:['baicao','sichen']
};
const rumors={
 siming:'司命生来便是命簿之主，祂的笔下从没有不受控的角色。',shuishi:'沉海旧国毁于神战，水师是唯一活下来的无辜王裔。',sichen:'第二十九宿已经彻底熄灭，无针钟不过是一件计时的旧器。',simeng:'创世神早已陨落，司梦的所有梦境都只听从自己。',siyuan:'腕上赤结没有另一端，是因为世间无人能与司缘结契。',
 siyu:'最后一滴龙泪只是遗物，古龙从未见过今日的司雨。',siqi:'司契的本命初誓只会惩罚背誓者，天庭永远不在其中。',sideng:'魂灯里全是被救回的亡魂，最暗的那一盏只是燃得慢些。',sihui:'当年无名匣打开，里面囚着的天影已经被司晦吞尽。',siheng:'司衡是祭台之外的裁定者，从未与创世之债有牵连。',
 zhanshen:'战神胸中最初的断刃，是祂当年斩落敌将的战利品。',leishen:'第一道天罚被折断，只因天雷误认了一位无罪之神。',fengbo:'风伯是第一位逃出天狱的囚徒，最恨的便是那道狱门。',huoshen:'火神只在劫后诞生，绝不会知道旧纪元为何被烧尽。',wenchang:'那部焚毁的禁书，只记录凡灵无权知晓的天律。',
 caishen:'太初古钱只记载财富，不会记载诸天自己的死期。',yueshen:'月神是碎月中诞生的守狱者，绝非封印想困住的神。',yanluo:'冥府空棺从未装过死者，阎罗也没有尚未受判的旧案。',shanjun:'祖山当年被劈开，纯粹是古神想夺取一枚山胎。',zaoshen:'吞日凶神已被完整镇入锅底，绝无一缕神息漏出。',
 yaowang:'万毒神冢埋的只是失控毒咒，药王偶然从中生出神形。',tudi:'镇龙碑镇着祸世骨龙，土地只需永远把它压在地底。',huashen:'禁苑血花只是旧花主留下的遗孤，不带任何诛神敕令。',rishen:'射日者与日神乃万世死敌，那一箭从未得到日轮允许。',mengpo:'缺口碗只是古渡旧器，补全与否都不会改动孟婆的前尘。',
 jiushen:'那场古神宴早已散尽，青瓷瓶里不过是最后半盅陈白酒。',xiangshen:'香神只是无名旧神的传香者，古庙受供之人与祂无关。',zhishen:'织神是天衣的修补者，界外裂隙从来不是为了封住祂。',xueshen:'雪神从旧冬中幸存，雪棺里封着的都是不相干的旧物。',yingshen:'万只魂萤皆是萤神分身，其中没有其他战魂。',jingshen:'镜神走出了神镜，从此镜外只有一个确切无疑的本体。',
 shangui:'失踪的传敕神使早被幽林吞尽，没有任何旧神仍在树中。',yunzhongjun:'古祭之客离席后便再未归来，云衣早已归云中君独有。',baicao:'仙圃毁于外敌，断根所生的百草仙子是无辜的幸存者。',baiguo:'分食太初灵果的古神早已远去，果园不可能留下祂们的身影。'
};
// Keep literary anchors distinct from the new original magic and backstories.
const notes={
 huashen:'《镜花缘》第一回有总司天下名花的百花仙子。本页借花木意象创作；出身、禁苑、命花与葬神阵均为原创幻想设定。',
 mengpo:'借民间孟婆、忘川与汤的意象创作；前尘炼汤、禁名与身世秘密均为原创幻想设定。',
 jiushen:'酒神为本测试原创泛称，以中国白酒、青瓷瓶与小瓷盅为意象。古神宴、酒令与封魂能力均为原创幻想设定。',
 xiangshen:'香神为原创细分神职。古庙、原初香、追魂与千界烟路均为原创幻想设定。',
 zhishen:'借织女与机杼意象，文学参照为《古诗十九首·迢迢牵牛星》。本页的星丝、命线、天衣封界与身世均为原创幻想设定。',
 xueshen:'霜雪意象参考《淮南子·天文训》青女降霜雪的记述。旧纪之冬、停咒与雪棺均为原创幻想设定。',
 yingshen:'萤神为原创萤火神职。魂萤、夜冢古军与分身能力均为原创幻想设定。',
 jingshen:'借古典灵镜意象创作；镜神神格、倒影易主与镜宫身世均为原创幻想设定。',
 shangui:'文学意象借自《楚辞·九歌·山鬼》的山林、草木佩饰与相待之情。无祀幽林、藤冠与食阵能力均为原创幻想设定。',
 yunzhongjun:'《楚辞·九歌·云中君》有同名神灵。本页借云气与临降意象；云衣、折天与千身能力均为原创幻想设定。',
 baicao:'《镜花缘》第一回有与百花仙子相契、同赴盛会的百草仙子。本页的仙圃根主、神血生根与具体能力均为原创幻想设定。',
 baiguo:'《镜花缘》第一回有与百花、百草、百谷仙子同行的百果仙子。本页的太初果核、果中千界与因果熟落均为原创幻想设定。'
};
module.exports=g=>{
 const s=settings[g.id];if(!s)throw Error('Missing fantasy dossier: '+g.id);
 return {...g,title:s.title,tags:s.tags,quote:s.quote,domain:domains[g.id],analysis:s.analysis,
  power:`「${s.gift[0]}」：${s.gift[1]}`,scene:s.scene,flaw:s.taboo,prayer:s.prayer,reply:s.reply,temple:s.temple,hook:s.hook,
  deep:[s.origin,s.chronicle,s.secret],thrill:[s.release[0],s.release[1]],
  modes:[[s.gift[0],s.gift[1],s.quote],s.favored,s.overload],
  gossip:[rumors[g.id],s.secret],
  forum:s.forum,ally:bonds[g.id][0],rival:bonds[g.id][1],allyText:s.allyText,rivalText:s.rivalText,
  sourceNotes:notes[g.id]||'借常见神话神职意象创作；本页出身、禁术、神域与秘闻均为原创幻想设定。',
  fantasy:{lineage:s.lineage,origin:s.origin,chronicle:s.chronicle,gift:s.gift,release:s.release,taboo:s.taboo}
 };
};
