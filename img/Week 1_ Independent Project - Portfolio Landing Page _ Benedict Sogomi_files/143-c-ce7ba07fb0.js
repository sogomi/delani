(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[143,581],{"0crz":function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
var o=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
i("jQeR")
i("0sPK")
var a=o["default"].scoped("lib.text_helper")
var l=i("5Ky4")
var c,d,_
c="LINK-PLACEHOLDER"
d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=_={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(a.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+s.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,i,n,s,o,r,a,u
s=[]
o=[]
e=e.replace(d,(function(e,t){var i
o.push(e===c?c:(i=e,"http://"===i.slice(0,7)||"https://"===i.slice(0,8)||(i="http://"+i),s.push(i),"<a href='"+Object(l["a"])(i)+"'>"+Object(l["a"])(e)+"</a>"))
return c}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return o.shift()}))
e=e.replace(/\n/g,"<br />\n")
r=[]
a=[]
u=e.split("\n")
for(t=0,i=u.length;t<i;t++){n=u[t]
if(n.match(/^(&gt;|>)/))a.push(n)
else{a.length&&r.push(_.quoteClump(a))
a=[]
r.push(n)}}a.length&&r.push(_.quoteClump(a))
return r.join("\n")},delimit:function(e){var t,i,n,s,o
if(isNaN(e))return String(e)
o=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
i=Math.floor(t)
s=t===i?"":String(t).replace(/^\d+\./,".")
while(i>=1e3){n=String(i).replace(/\d+(\d\d\d)$/,",$1")
i=Math.floor(i/1e3)
s=n+s}return o+String(i)+s},truncateText:function(e,t){var i,n,s,o,r,l
null==t&&(t={})
n=null!=(o=t.max)?o:30
i=a.t("ellipsis","...")
l=a.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=n)return e
r=0
while(true){s=e.indexOf(l,r+1)
if(s<0||s>n-i.length)break
r=s}r||(r=n-i.length)
return e.substring(0,r)+i},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"7LJr":function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
s.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let i
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
t.data("loading_images",i)
return this}"register_image"==e&&3==arguments.length&&(s.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=s.a.extend({},s.a.fn.loadingImg.defaults,e)
let n=s.a.fn.loadingImg.image_files.normal
e.image_size&&s.a.fn.loadingImg.image_files[e.image_size]&&(n=s.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let o=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)o=t.outerHeight()
else if("middle"==e.vertical)o=t.outerHeight()/2-n.height/2
else{o=parseInt(e.vertical,10)
isNaN(o)&&(o=0)}let r=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)r=t.outerWidth()-n.width
else if("middle"==e.horizontal)r=t.outerWidth()/2-n.width/2
else{r=parseInt(e.horizontal,10)
isNaN(r)&&(r=0)}const a=t.zIndex()+1
const l=s()(document.createElement("div")).addClass("loading_image_holder")
const c=s()(document.createElement("img")).attr("src",n.url)
l.append(c)
i=t.data("loading_images")||[]
i.push(l)
t.data("loading_images",i)
if(t.css("position")&&"static"!=t.css("position")){l.css({zIndex:a,position:"absolute",top:o,left:r})
t.append(l)}else{const i=t.offset()
let n=i.top,c=i.left
e.vertical&&(n+=o)
e.horizontal&&(c+=r)
l.css({zIndex:a,position:"absolute",top:n,left:c})
s()("body").append(l)}return s()(this)}
s.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
s.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
s.a.fn.loadingImage=s.a.fn.loadingImg},B1vq:function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
i("s/PJ")
s.a.fn.scrollToVisible=function(e){const t={}
const i=s()(e)
if(0===i.length)return
let n=i.offset(),o=i.outerWidth(),r=i.outerHeight(),a=n.top,l=a+r,c=n.left,d=c+o,_="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),u=this.scrollLeft(),m=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{e=s()(this).offset()
return false}catch(e){}}))
a-=e.top
l-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){m=s()(window).height()
s()("#wizard_box:visible").length>0&&(m-=s()("#wizard_box:visible").height())
g=s()(window).width()
a-=_
c-=u
l-=_
d-=u}a<0||m<r&&l>m?t.scrollTop=a+_:l>m&&(t.scrollTop=l+_-m+20)
c<0?t.scrollLeft=c+u:d>g&&(t.scrollLeft=d+u-g+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},IZD0:function(e,t,i){"use strict"
var n=i("An8g")
var s=i("pQTu")
var o=i("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"additional_comments_9aed10bb":"التعليقات الإضافية","criterion_long_description_e9a97247":"الوصف الطويل للمعيار","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"غير مسموح بإضافة رصيد إضافي على النواتج، تم تعديل النتيجة لأقصى حد ممكن لـ %{outcome}","select_1e849959":"[ تحديد ]"},"cy":{"additional_comments_9aed10bb":"Sylwadau Ychwanegol","criterion_long_description_e9a97247":"Disgrifiad Hir o Faen Prawf","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Ni chaniateir credyd ychwanegol ar gyfer canlyniadau, mae’r sgôr wedi’i haddasu i’r un uchaf posib ar gyfer %{outcome}","select_1e849959":"[ Dewiswch ]"},"da":{"additional_comments_9aed10bb":"Yderligere kommentarer","criterion_long_description_e9a97247":"Kriterie lang beskrivelse","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Ekstra kredit ikke tilladt for læringsudbytter, resultat justeret til maksimalt muligt for %{outcome}","select_1e849959":"[ Vælg ]"},"da-x-k12":{"additional_comments_9aed10bb":"Yderligere kommentarer","criterion_long_description_e9a97247":"Kriterie lang beskrivelse","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Ekstra kredit ikke tilladt for læringsudbytte, resultat justeret til maksimalt muligt for %{outcome}","select_1e849959":"[ Vælg ]"},"de":{"additional_comments_9aed10bb":"Zusätzliche Kommentare","criterion_long_description_e9a97247":"Ausführliche Kriteriumsbeschreibung","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Zusätzliche Gutschrift auf Ergebnisse nicht zulässig, Punktzahl maximal angepasst für %{outcome}","select_1e849959":"[ Bitte auswählen ]"},"en-AU":{"additional_comments_9aed10bb":"Additional Comments","criterion_long_description_e9a97247":"Criterion Long Description","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}","select_1e849959":"[ Select ]"},"en-AU-x-unimelb":{"additional_comments_9aed10bb":"Additional Comments","criterion_long_description_e9a97247":"Criterion Long Description","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}","select_1e849959":"[ Select ]"},"en-CA":{"additional_comments_9aed10bb":"Additional Comments","criterion_long_description_e9a97247":"Criterion Long Description","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}","select_1e849959":"[ Select ]"},"en-GB":{"additional_comments_9aed10bb":"Additional comments","criterion_long_description_e9a97247":"Criterion long description","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}","select_1e849959":"[ Select ]"},"en-GB-x-lbs":{"additional_comments_9aed10bb":"Additional comments","criterion_long_description_e9a97247":"Criterion long description","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}","select_1e849959":"[ Select ]"},"en-GB-x-ukhe":{"additional_comments_9aed10bb":"Additional comments","criterion_long_description_e9a97247":"Criterion long description","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}","select_1e849959":"[ Select ]"},"es":{"additional_comments_9aed10bb":"Comentarios adicionales","criterion_long_description_e9a97247":"Descripción detallada de los criterios","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"No se permite el crédito extra en los resultados; puntaje ajustado al máximo posible para %{outcome}","select_1e849959":"[ Seleccionar ]"},"fa":{"additional_comments_9aed10bb":"نظرهای دیگر","criterion_long_description_e9a97247":"شرح طولانی معیار","select_1e849959":"[ انتخاب ]"},"fi":{"additional_comments_9aed10bb":"Lisäkommentit","criterion_long_description_e9a97247":"Kriteerien pitkä kuvaus","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Tuloksille ei sallita ylimääräisiä krediittejä, pistemäärä säädetty suurimpaan mahdolliseen kohteelle %{outcome}","select_1e849959":"[Valitse]"},"fr":{"additional_comments_9aed10bb":"Commentaires complémentaires","criterion_long_description_e9a97247":"Description longue du critère","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Les crédits supplémentaires ne sont pas autorisés sur les résultats, la note est ajustée au maximum possible pour %{outcome}","select_1e849959":"[ Sélectionner ]"},"fr-CA":{"additional_comments_9aed10bb":"Commentaires supplémentaires","criterion_long_description_e9a97247":"Longue description du critère","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Les crédits supplémentaires ne sont pas permis sur les résultats, le score est ajusté au maximum possible pour %{outcome}","select_1e849959":"[ Sélectionner ]"},"he":{"additional_comments_9aed10bb":"הערות נוספות","criterion_long_description_e9a97247":"תאור מלא של הקריטריון"},"ht":{"additional_comments_9aed10bb":"Kòmantè Adisyonèl","criterion_long_description_e9a97247":"Deskripsyon Long Kritè","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Kredi adisyonèl non otorize sou rezilta yo, nòt regle a yon maksimòm posib pou %{outcome}","select_1e849959":"[ Select ]"},"hu":{"select_1e849959":"[Kiválaszt]"},"is":{"additional_comments_9aed10bb":"Viðbótarathugasemdir","criterion_long_description_e9a97247":"Löng lýsing á viðmiðun","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Auka eining ekki leyfð á niðurstöðu, einkunn breytt í leyfilegt hámark fyrir %{outcome}","select_1e849959":"[ Velja]"},"it":{"additional_comments_9aed10bb":"Commenti aggiuntivi","criterion_long_description_e9a97247":"Descrizione lunga criterio","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Credito extra non consentito per gli esiti. Punteggio regolato in base al valore massimo possibile per %{outcome}","select_1e849959":"[ Seleziona ]"},"ja":{"additional_comments_9aed10bb":"追加コメント","criterion_long_description_e9a97247":"基準の長い説明","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"結果に余分なクレジットは認められません。スコアは（）の最大可能のものに調整されています%{outcome}","select_1e849959":"[ 選択 ]"},"mi":{"additional_comments_9aed10bb":"Ētahi atu Kōrero","criterion_long_description_e9a97247":"Paearu Whakāturanga roa","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Kaore i te whakāetia he utu atu mō ngā hua, ko te kaute e tika ana mo te mea ka taea %{outcome}","select_1e849959":"[Tīpakohia]"},"nb":{"additional_comments_9aed10bb":"Tilleggskommentarer","criterion_long_description_e9a97247":"Lang beskrivelse av kriterium","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Ekstra fortjeneste er ikke tillatt på læringsmål,resultat som er justert til maksimalt for %{outcome}","select_1e849959":"[ Velg ]"},"nb-x-k12":{"additional_comments_9aed10bb":"Tilleggskommentarer","criterion_long_description_e9a97247":"Lang beskrivelse av kriterium","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Ekstra-poeng ikke tillatt på mål, resultat justert til maksimalt mulig for %{outcome}","select_1e849959":"[ Velg ]"},"nl":{"additional_comments_9aed10bb":"Extra opmerkingen","criterion_long_description_e9a97247":"Criterium voor uitgebreide beschrijving","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Geen extra punten toegestaan voor leerdoelen, score aangepast tot mogelijk maximum voor %{outcome}","select_1e849959":"[ Selecteren ]"},"nn":{"additional_comments_9aed10bb":"Tilleggskommentarar","criterion_long_description_e9a97247":"Lang skildring av kriterium","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Det er ikkje tillate å gi ekstra utbyte for læringsmål. Resultat må justerast til det høgast moglege for %{outcome}","select_1e849959":"[ Vel ]"},"pl":{"additional_comments_9aed10bb":"Dodatkowe komentarze","criterion_long_description_e9a97247":"Długi opis kryterium","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Dodatkowe kredyty nie są dozwolone dla wyników, ocenę dostosowano do maksymalnej wartości dla %{outcome}","select_1e849959":"[ Wybierz ]"},"pt":{"additional_comments_9aed10bb":"Comentários adicionais","criterion_long_description_e9a97247":"Descrição longa de criação","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Crédito extra não permitido nos resultados, pontuação ajustada ao máximo possível para %{outcome}","select_1e849959":"[ Selecionar ]"},"pt-BR":{"additional_comments_9aed10bb":"Comentários adicionais","criterion_long_description_e9a97247":"Descrição longa do critério","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Crédito extra não permitido em objetivos, pontuação ajustada ao máximo possível para %{outcome}","select_1e849959":"[ Selecionar ]"},"ru":{"additional_comments_9aed10bb":"Дополнительные комментарии","criterion_long_description_e9a97247":"Длинное описание критерия","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Дополнительный кредит не разрешен по результатам, оценка изменена до максимально возможной для %{outcome}","select_1e849959":"[ Выбрать ]"},"sl":{"additional_comments_9aed10bb":"Dodatni komentarji","criterion_long_description_e9a97247":"Dolgi opis merila","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Pri učnih izidih dodatne točke niso dovoljene, rezultat je prilagojen na najvišjega možnega za %{outcome}","select_1e849959":"[Izberi]"},"sv":{"additional_comments_9aed10bb":"Ytterligare kommentarer","criterion_long_description_e9a97247":"Kriterium lång beskrivning","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra pluspoäng är inte tillåtet för lärandemål; resultat justerat till högsta möjliga för %{outcome}","select_1e849959":"[ Välj ]"},"sv-x-k12":{"additional_comments_9aed10bb":"Ytterligare kommentarer","criterion_long_description_e9a97247":"Kriterium lång beskrivning","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"Extra pluspoäng är inte tillåtet för lärandemål; resultat justerat till högsta möjliga för %{outcome}","select_1e849959":"[ Välj ]"},"tr":{"additional_comments_9aed10bb":"Ek Yorumlar","criterion_long_description_e9a97247":"Ölçüt İçin Uzun Açıklama"},"uk":{"additional_comments_9aed10bb":"Додаткові коментарі","criterion_long_description_e9a97247":"Детальний опис критерія","select_1e849959":"[ Обрати ]"},"zh-Hans":{"additional_comments_9aed10bb":"其它评论","criterion_long_description_e9a97247":"标准长说明","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"不允许对结果额外增加学分，调整后的最高可能评分%{outcome}","select_1e849959":"[选择]"},"zh-Hant":{"additional_comments_9aed10bb":"其他評論","criterion_long_description_e9a97247":"標準完整描述","extra_credit_not_permitted_on_outcomes_score_adjus_714dd746":"學習成果不允許額外分數，分數調整為最大可能值%{outcome}","select_1e849959":"[選擇]"}}'))
i("jQeR")
i("0sPK")
var r=s["default"].scoped("rubric_assessment")
var a=i("ouhR")
var l=i.n(a)
i("LvDl")
i("q1tI")
var c=i("i8i4")
var d=i.n(c)
var _=i("5Ky4")
var u=i("0crz")
var m=i("ejBJ")
var g=i("HbFp")
i("Z+Ib")
i("YGE8")
i("p6Wi")
i("OShF")
i("s/PJ")
i("MWZS")
var p=i("N0c5")
var h=i("PxBm")
window.rubricAssessment={init(){const e=l()("#rubric_criterion_comments_dialog")
l()(".rubric").delegate(".rating","click",(function(e){l()(this).parents(".criterion").find(".criterion_points").val(l()(this).find(".points").text()).change()})).delegate(".long_description_link","click",(function(e){e.preventDefault()
if(!l()(this).parents(".rubric").hasClass("editing")){const e=l()(this).parents(".criterion").getTemplateData({textValues:["long_description","description"]}),t=l()(this).parents(".criterion").hasClass("learning_outcome_criterion")
l()("#rubric_long_description_dialog").fillTemplateData({data:e,htmlValues:t?["long_description"]:[]}).find(".editing").hide().end().find(".displaying").show().end().dialog({title:r.t("Criterion Long Description"),width:400})}})).delegate(".criterion .saved_custom_rating","change",(function(){if(l()(this).parents(".rubric").hasClass("assessing")){const e=l()(this).val()
e&&e.length>0&&l()(this).parents(".custom_ratings_entry").find(".custom_rating_field").val(e)}})).delegate(".criterion_comments_link","click",(function(t){t.preventDefault()
const i=l()(this)
const n=l()(this).parents(".criterion")
const s=n.getTemplateData({textValues:["custom_rating"]}).custom_rating
const o=l()(this).parents(".rubric.assessing").length>0
const a={criterion_comments:s,criterion_description:n.find(".description:first").text()}
e.data("current_rating",n)
e.fillTemplateData({data:a})
e.fillFormData(a)
e.find(".editing").showIf(o)
e.find(".displaying").showIf(!o)
e.dialog({title:r.t("Additional Comments"),width:400,close(){i.focus()}})
e.find("textarea.criterion_comments").focus()})).find(".criterion_points").bind("keyup change blur",(function(e){const t=l()(e.target)
if(t.parents(".rubric").hasClass("assessing")){let e=g["a"].parse(t.val())
isNaN(e)&&(e=null)
const i=t.parents(".criterion")
i.find(".rating.selected").removeClass("selected")
if(e||0===e){i.find(".criterion_description").addClass("completed")
rubricAssessment.highlightCriterionScore(i,e)}else i.find(".criterion_description").removeClass("completed")
let n=0
t.parents(".rubric").find(".criterion:visible:not(.ignore_criterion_for_scoring) .criterion_points").each((function(){let e=g["a"].parse(l()(this).val(),10)
isNaN(e)&&(e=0)
n+=e}))
n=window.rubricAssessment.roundAndFormat(n)
t.parents(".rubric").find(".rubric_total").text(n)}}))
l()(".rubric_summary").delegate(".rating_comments_dialog_link","click",(function(t){t.preventDefault()
const i=l()(this)
const n=l()(this).parents(".criterion")
const s=n.getTemplateData({textValues:["rating_custom"]}).rating_custom
const o={criterion_comments:s,criterion_description:n.find(".description_title:first").text()}
e.data("current_rating",n)
e.fillTemplateData({data:o})
e.fillFormData(o)
e.find(".editing").hide()
e.find(".displaying").show()
e.dialog({title:r.t("Additional Comments"),width:400,close(){i.focus()}})
e.find(".criterion_description").focus()}))
e.find(".save_button").click(()=>{const t=e.find("textarea.criterion_comments").val(),i=e.data("current_rating")
if(i){i.find(".custom_rating").text(t)
i.find(".criterion_comments").toggleClass("empty",!t)}e.dialog("close")})
e.find(".cancel_button").click(t=>{e.dialog("close")})
setInterval(rubricAssessment.sizeRatings,2500)},checkScoreAdjustment:(e,t,i)=>{const n=i["rubric_assessment[criterion_".concat(t.criterion_id,"][points]")]
const s=rubricAssessment.roundAndFormat(t.points)
if(n>s){const t=Object(_["a"])(e.find(".description_title").text())
l.a.flashWarning(r.t("Extra credit not permitted on outcomes, score adjusted to maximum possible for %{outcome}",{outcome:t}))}},highlightCriterionScore(e,t){e.find(".rating").each((function(){const i=g["a"].parse(l()(this).find(".points").text())
const n=e.find(".criterion_use_range").attr("checked")
if(i===t)l()(this).addClass("selected")
else if(n){const e=l()(this).next(".rating")
let n=0
e.find(".points").text()&&(n=g["a"].parse(e.find(".points").text()))
i>t&&n<t&&l()(this).addClass("selected")}}))},sizeRatings(){const e=l()(".rubric .criterion:visible")
if(e.length){const e=l.a.windowScrollTop()
l()(".rubric .criterion:visible").each((function(){const e=l()(this),t=e.find(".ratings:visible")
if(t.length){const i=t.find(".rating .container").css("height",""),n=Math.max(t.height(),e.find(".criterion_description .container").height())
i.css("height",n-10+"px")}}))
l()("html,body").scrollTop(e)}},assessmentData(e){e=rubricAssessment.findRubric(e)
const t={}
ENV.RUBRIC_ASSESSMENT.assessment_user_id||e.find(".user_id").length>0?t["rubric_assessment[user_id]"]=ENV.RUBRIC_ASSESSMENT.assessment_user_id||e.find(".user_id").text():t["rubric_assessment[anonymous_id]"]=ENV.RUBRIC_ASSESSMENT.anonymous_id||e.find(".anonymous_id").text()
t["rubric_assessment[assessment_type]"]=ENV.RUBRIC_ASSESSMENT.assessment_type||e.find(".assessment_type").text()
if(ENV.nonScoringRubrics&&void 0!==this.currentAssessment){const e=this.currentAssessment
e.data.forEach(e=>{const i="rubric_assessment[criterion_".concat(e.criterion_id,"]")
const n=e=>"".concat(i).concat(e)
const s=e.points.value
t[n("[rating_id]")]=e.id
t[n("[points]")]=Number.isNaN(s)?void 0:s
t[n("[description]")]=e.description
t[n("[comments]")]=e.comments||""
t[n("[save_comment]")]=true===e.saveCommentsForLater?"1":"0"})}else e.find(".criterion:not(.blank)").each((function(){const e=l()(this).attr("id")
const i="rubric_assessment["+e+"]"
const n=g["a"].parse(l()(this).find(".criterion_points").val())
t[i+"[points]"]=isNaN(n)?void 0:n
if(l()(this).find(".rating.selected")){t[i+"[description]"]=l()(this).find(".rating.selected .description").text()
t[i+"[comments]"]=l()(this).find(".custom_rating").text()}if(l()(this).find(".custom_rating_field:visible").length>0){t[i+"[comments]"]=l()(this).find(".custom_rating_field:visible").val()
t[i+"[save_comment]"]=l()(this).find(".save_custom_rating").attr("checked")?"1":"0"}}))
return t},findRubric(e){if(!e.hasClass("rubric")){let t=e.closest(".rubric")
0===t.length&&(t=e.find(".rubric:first"))
e=t}return e},updateRubricAssociation(e,t){const i=t.summary_data
if(ENV.nonScoringRubrics&&void 0!==this.currentAssessment){const e=this.currentAssessment
Object(h["c"])(this.currentAssociation,e)}else if(i&&i.saved_comments)for(const t in i.saved_comments){const n=i.saved_comments[t],s=e.find("#criterion_"+t).find(".saved_custom_rating_holder").hide(),o=s.find(".saved_custom_rating")
o.find(".comment").remove()
o.empty().append('<option value="">'+Object(_["a"])(r.t("[ Select ]"))+"</option>")
for(const e in n)if(n[e]){o.append('<option value="'+Object(_["a"])(n[e])+'">'+Object(_["a"])(u["a"].truncateText(n[e],{max:50}))+"</option>")
s.show()}}},fillAssessment:h["a"],populateNewRubric(e,t,i){if(ENV.nonScoringRubrics&&ENV.rubric){const s=e.hasClass("assessing")
const o=e=>{rubricAssessment.currentAssessment=e
a(e)}
const r=rubricAssessment.currentAssociation||i
rubricAssessment.currentAssociation=r
const a=t=>{d.a.render(Object(n["a"])(p["a"],{allowExtraCredit:ENV.outcome_extra_credit_enabled,onAssessmentChange:s?o:null,rubric:ENV.rubric,rubricAssessment:t,customRatings:ENV.outcome_proficiency?ENV.outcome_proficiency.ratings:[],rubricAssociation:i},void 0,null),e.get(0))}
o(rubricAssessment.fillAssessment(ENV.rubric,t||{},ENV.RUBRIC_ASSESSMENT))
const l=e.find("th").first()
l.attr("tabindex",-1).focus()}else rubricAssessment.populateRubric(e,t)},populateRubric(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
e=rubricAssessment.findRubric(e)
e.attr("id").substring(7)
ENV.RUBRIC_ASSESSMENT.assessment_user_id||t.user_id?e.find(".user_id").text(ENV.RUBRIC_ASSESSMENT.assessment_user_id||t.user_id):e.find(".anonymous_id").text(ENV.RUBRIC_ASSESSMENT.anonymous_id||t.anonymous_id)
e.find(".assessment_type").text(ENV.RUBRIC_ASSESSMENT.assessment_type||t.assessment_type)
e.find(".criterion_description").removeClass("completed").removeClass("original_completed").end().find(".rating").removeClass("selected").removeClass("original_selected").end().find(".custom_rating_field").val("").end().find(".custom_rating_comments").text("").end().find(".criterion_points").val("").change().end().find(".criterion_rating_points").text("").end().find(".custom_rating").text("").end().find(".save_custom_rating").attr("checked",false)
e.find(".criterion_comments").addClass("empty")
if(t){const o=t
let r=0
for(const t in o.data){var n=o.data[t]
const a=n.comments_enabled?n.comments:n.description
if(n.comments_enabled&&n.comments_html)var s=n.comments_html
else s=Object(_["a"])(a)
const c=e.find("#criterion_"+n.criterion_id)
n.id||c.find(".rating").each((function(){const e=parseFloat(l()(this).find(".points").text(),10)
e==n.points&&(n.id=l()(this).find(".rating_id").text())}))
i&&c.hasClass("learning_outcome_criterion")&&rubricAssessment.checkScoreAdjustment(c,n,i)
c.find(".custom_rating_field").val(a).end().find(".custom_rating_comments").html(s).end().find(".criterion_points").val(window.rubricAssessment.roundAndFormat(n.points)).change().end().find(".criterion_rating_points_holder").showIf(n.points||0===n.points).end().find(".criterion_rating_points").text(window.rubricAssessment.roundAndFormat(n.points)).end().find(".custom_rating").text(a).end().find(".criterion_comments").toggleClass("empty",!a).end().find(".save_custom_rating").attr("checked",false)
if(f(n)){c.find(".criterion_description").addClass("original_completed").end().find("#rating_"+n.id).addClass("original_selected").addClass("selected").end()
rubricAssessment.highlightCriterionScore(c,n.points)
n.ignore_for_scoring||(r+=n.points)}a&&c.find(".criterion_comments").show()}r=window.rubricAssessment.roundAndFormat(r)
e.find(".rubric_total").text(r)}},populateNewRubricSummary(e,t,i,s){const o=e.get(0)
if(ENV.nonScoringRubrics&&ENV.rubric){d.a.unmountComponentAtNode(o)
if(t){const e=rubricAssessment.fillAssessment(ENV.rubric,t||{},ENV.RUBRIC_ASSESSMENT)
d.a.render(Object(n["a"])(p["a"],{customRatings:ENV.outcome_proficiency?ENV.outcome_proficiency.ratings:[],rubric:ENV.rubric,rubricAssessment:e,rubricAssociation:i,isSummary:true},void 0,null),o)}else o.innerHTML=""}else rubricAssessment.populateRubricSummary(e,t,s)},populateRubricSummary(e,t,i){e.find(".criterion_points").text("").end().find(".rating_custom").text("")
if(t){const n=t
let s=0
let o=null
for(let t=0;t<n.data.length;t++){const r=n.data[t]
o=e.find("#criterion_"+r.criterion_id)
i&&o.hasClass("learning_outcome_criterion")&&rubricAssessment.checkScoreAdjustment(o,r,i)
o.find(".rating").hide().end().find(".rating_"+r.id).show().end().find(".criterion_points").text(window.rubricAssessment.roundAndFormat(r.points)).end().find(".ignore_for_scoring").showIf(r.ignore_for_scoring)
f(r)&&!e.hasClass("free_form")&&o.find(".rating.description").show().text(r.description).end()
r.comments_enabled&&r.comments&&o.find(".rating_custom").show().text(r.comments)
r.points&&!r.ignore_for_scoring&&(s+=r.points)}s=window.rubricAssessment.roundAndFormat(s,m["a"].DEFAULT)
e.show().find(".rubric_total").text(s)
e.closest(".edit").show()}else e.hide()},roundAndFormat(e){if(null==e||""===e)return""
return r.n(Object(m["a"])(e,m["a"].DEFAULT))}}
function f(e){return e.points||0===e.points}l()(rubricAssessment.init)
t["a"]=rubricAssessment},p6Wi:function(e,t,i){"use strict"
var n=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("instructure_misc_plugins")
var r=i("ouhR")
var a=i.n(r)
var l=i("5Ky4")
var c=i("JD5e")
i("jYyc")
i("YGE8")
i("B1vq")
i("s/PJ")
a.a.fn.setOptions=function(e,t){let i=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
i+='<option value="'+t+'">'+t+"</option>"})
return this.html(a.a.raw(i))}
a.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
a.a.fn.scrollbarWidth=function(){const e=a()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const i=t.innerWidth()
e.css("overflow-y","scroll")
const n=t.innerWidth()
e.remove()
return i-n}
a.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
a.a.fn.undim=function(e){return this.animate({opacity:1},e)}
a.a.fn.confirmDelete=function(e){e=a.a.extend({},a.a.fn.confirmDelete.defaults,e)
const t=this
let i=null
let n=true
e.noMessage=e.noMessage||e.no_message
const s=function(){if(!n){e.cancelled&&a.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const n=e.prepareData?e.prepareData.call(t,i):{}
n.authenticity_token=Object(c["a"])()
a.a.ajaxJSON(e.url,"DELETE",n,i=>{e.success.call(t,i)},(i,n,s,o)=>{e.error&&a.a.isFunction(e.error)?e.error.call(t,i,n,s,o):a.a.ajaxJSON.unhandledXHRs.push(n)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!a.a.skipConfirmations){if(e.dialog){n=false
const t="object"===typeof e.dialog?e.dialog:{}
const r=e.url.includes("assignments")?"btn-danger":"btn-primary"
i=a()(e.message).dialog(a.a.extend({},{modal:true,close:s,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){a()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:r,click(){n=true
a()(this).dialog("close")}}]},t))
return}n=confirm(e.message)}s()}
a.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
a.a.fn.fragmentChange=function(e){if(e&&true!==e){const i=(window.location.search||"").replace(/^\?/,"").split("&")
let n=null
for(var t=0;t<i.length;t++){const e=i[t]
e&&0===e.indexOf("hash=")&&(n="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let o=false
for(t=0;t<a.a._checkFragments.fragmentList.length;t++){const e=a.a._checkFragments.fragmentList[t]
e.doc[0]==s[0]&&(o=true)}o||a.a._checkFragments.fragmentList.push({doc:s,fragment:""})
a()(window).bind("hashchange",a.a._checkFragments)
setTimeout(()=>{n&&n.length>0?s.triggerHandler("document_fragment_change",n):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
a.a._checkFragments=function(){const e=a.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const i=e[t]
const n=i.doc
if(n[0].location.hash!=i.fragment){n.triggerHandler("document_fragment_change",n[0].location.hash)
i.fragment=n[0].location.hash
a.a._checkFragments.fragmentList[t]=i}}}
a.a._checkFragments.fragmentList=[]
a.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
a.a.fn.showIf=function(e){if(a.a.isFunction(e))return this.each((function(t){a()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
a.a.fn.disableIf=function(e){a.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
a.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}a()(".indicator_box").remove()
let i=this.offset()
e&&e.offset&&(i=e.offset)
const n=this.width()
const s=this.height()
const o=(e.container||this).zIndex()
t=a()(document.createElement("div"))
t.css({width:n+6,height:s+6,top:i.top-3,left:i.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){a()(this).stop().fadeOut("fast",(function(){a()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
a()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){a()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){a()(this).remove()}))
e&&e.scroll&&a()("html,body").scrollToVisible(t)}
a.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
a.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
a.a.fn.fillWindowWithMe=function(e){const t=a.a.extend({minHeight:400},e),i=a()(this),n=a()("#wrapper"),s=a()("#main"),o=a()("#not_right_side"),r=a()(window),l=a()(this).add(t.alsoResize)
function c(){l.height(0)
const e=r.height()-(n.offset().top+n.outerHeight())+(s.height()-o.height()),c=Math.max(400,e)
l.height(c)
a.a.isFunction(t.onResize)&&t.onResize.call(i,c)}c()
r.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
a.a.fn.autoGrowInput=function(e){e=a.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||a()(this).width(),i="",n=a()(this),s=a()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(i===(i=n.val()))return
s.text(i)
const o=s.width(),r=o+e.comfortZone>=t?o+e.comfortZone:t,a=n.width(),l=r<a&&r>=t||r>t&&r<e.maxWidth
l&&n.width(r)})}
s.insertAfter(n)
a()(this).bind("keyup keydown blur update change",o)}))
return this}
a.a}}])

//# sourceMappingURL=143-c-ce7ba07fb0.js.map