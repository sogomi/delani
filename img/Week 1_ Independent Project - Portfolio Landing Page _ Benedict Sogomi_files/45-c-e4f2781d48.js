(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[45],{HbFp:function(e,t,n){"use strict"
var o=n("qJBq")
var c=n.n(o)
var s=n("pQTu")
const r={_parseNumber:c.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=r._parseNumber(e.toString(),{thousands:s["default"].lookup("number.format.delimiter"),decimal:s["default"].lookup("number.format.separator")})
isNaN(t)&&(t=r._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(r.parse(e))}
t["a"]=r},OgVL:function(e,t,n){"use strict"
n.d(t,"c",(function(){return c}))
n.d(t,"b",(function(){return s}))
n.d(t,"a",(function(){return r}))
n.d(t,"d",(function(){return i}))
var o=n("ejBJ")
function c(e,t){const n="".concat(e).trim().toLowerCase()
return t.findIndex(e=>e[0].toLowerCase()===n)}function s(e,t){const n=c(e,t)
if(-1===n)return null
if(0===n)return 100
const s=t[n][1]
const r=t[n-1][1]
let i=1
Object(o["a"])(r-s,4)<=.01&&(i=.1)
return Object(o["a"])(100*r-i,2)}function r(e,t){const n=c(e,t)
if(-1===n)return null
const s=t[n][1]
return Object(o["a"])(100*s,2)}function i(e,t){if(null==t)return null
const n=Object(o["a"])(e,4)
const c=Math.max(n,0)
const s=t.find((e,n)=>{const o=(100*e[1]).toPrecision(4)
return c>=o||n===t.length-1})
return s[0]}},ejBJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
"number"===typeof e||e instanceof Number||(e=parseFloat(e))
const n=Math.round("".concat(e,"e").concat(t))
return Number("".concat(n,"e-").concat(t))}o.DEFAULT=2},nc0P:function(e,t,n){var o;(function(c){"use strict"
var s,r=20,i=1,l=1e6,a=1e6,f=-7,d=21,p="[big.js] ",u=p+"Invalid ",m=u+"decimal places",_=u+"rounding mode",b=p+"Division by zero",h={},g=void 0,v=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i
function x(){function e(t){var n=this
if(!(n instanceof e))return t===g?x():new e(t)
if(t instanceof e){n.s=t.s
n.e=t.e
n.c=t.c.slice()}else w(n,t)
n.constructor=e}e.prototype=h
e.DP=r
e.RM=i
e.NE=f
e.PE=d
e.version="5.2.2"
return e}function w(e,t){var n,o,c
if(0===t&&1/t<0)t="-0"
else if(!v.test(t+=""))throw Error(u+"number")
e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1;(n=t.indexOf("."))>-1&&(t=t.replace(".",""))
if((o=t.search(/e/i))>0){n<0&&(n=o)
n+=+t.slice(o+1)
t=t.substring(0,o)}else n<0&&(n=t.length)
c=t.length
for(o=0;o<c&&"0"==t.charAt(o);)++o
if(o==c)e.c=[e.e=0]
else{for(;c>0&&"0"==t.charAt(--c););e.e=n-o-1
e.c=[]
for(n=0;o<=c;)e.c[n++]=+t.charAt(o++)}return e}function P(e,t,n,o){var c=e.c,s=e.e+t+1
if(s<c.length){if(1===n)o=c[s]>=5
else if(2===n)o=c[s]>5||5==c[s]&&(o||s<0||c[s+1]!==g||1&c[s-1])
else if(3===n)o=o||!!c[0]
else{o=false
if(0!==n)throw Error(_)}if(s<1){c.length=1
if(o){e.e=-t
c[0]=1}else c[0]=e.e=0}else{c.length=s--
if(o)for(;++c[s]>9;){c[s]=0
if(!s--){++e.e
c.unshift(1)}}for(s=c.length;!c[--s];)c.pop()}}else if(n<0||n>3||n!==~~n)throw Error(_)
return e}function k(e,t,n,o){var c,s,r=e.constructor,i=!e.c[0]
if(n!==g){if(n!==~~n||n<(3==t)||n>l)throw Error(3==t?u+"precision":m)
e=new r(e)
n=o-e.e
e.c.length>++o&&P(e,n,r.RM)
2==t&&(o=e.e+n+1)
for(;e.c.length<o;)e.c.push(0)}c=e.e
s=e.c.join("")
n=s.length
if(2!=t&&(1==t||3==t&&o<=c||c<=r.NE||c>=r.PE))s=s.charAt(0)+(n>1?"."+s.slice(1):"")+(c<0?"e":"e+")+c
else if(c<0){for(;++c;)s="0"+s
s="0."+s}else if(c>0)if(++c>n)for(c-=n;c--;)s+="0"
else c<n&&(s=s.slice(0,c)+"."+s.slice(c))
else n>1&&(s=s.charAt(0)+"."+s.slice(1))
return e.s<0&&(!i||4==t)?"-"+s:s}h.abs=function(){var e=new this.constructor(this)
e.s=1
return e}
h.cmp=function(e){var t,n=this,o=n.c,c=(e=new n.constructor(e)).c,s=n.s,r=e.s,i=n.e,l=e.e
if(!o[0]||!c[0])return o[0]?s:c[0]?-r:0
if(s!=r)return s
t=s<0
if(i!=l)return i>l^t?1:-1
r=(i=o.length)<(l=c.length)?i:l
for(s=-1;++s<r;)if(o[s]!=c[s])return o[s]>c[s]^t?1:-1
return i==l?0:i>l^t?1:-1}
h.div=function(e){var t=this,n=t.constructor,o=t.c,c=(e=new n(e)).c,s=t.s==e.s?1:-1,r=n.DP
if(r!==~~r||r<0||r>l)throw Error(m)
if(!c[0])throw Error(b)
if(!o[0])return new n(0*s)
var i,a,f,d,p,u=c.slice(),_=i=c.length,h=o.length,v=o.slice(0,i),x=v.length,w=e,k=w.c=[],T=0,j=r+(w.e=t.e-e.e)+1
w.s=s
s=j<0?0:j
u.unshift(0)
for(;x++<i;)v.push(0)
do{for(f=0;f<10;f++){if(i!=(x=v.length))d=i>x?1:-1
else for(p=-1,d=0;++p<i;)if(c[p]!=v[p]){d=c[p]>v[p]?1:-1
break}if(!(d<0))break
for(a=x==i?c:u;x;){if(v[--x]<a[x]){p=x
for(;p&&!v[--p];)v[p]=9;--v[p]
v[x]+=10}v[x]-=a[x]}for(;!v[0];)v.shift()}k[T++]=d?f:++f
v[0]&&d?v[x]=o[_]||0:v=[o[_]]}while((_++<h||v[0]!==g)&&s--)
if(!k[0]&&1!=T){k.shift()
w.e--}T>j&&P(w,r,n.RM,v[0]!==g)
return w}
h.eq=function(e){return!this.cmp(e)}
h.gt=function(e){return this.cmp(e)>0}
h.gte=function(e){return this.cmp(e)>-1}
h.lt=function(e){return this.cmp(e)<0}
h.lte=function(e){return this.cmp(e)<1}
h.minus=h.sub=function(e){var t,n,o,c,s=this,r=s.constructor,i=s.s,l=(e=new r(e)).s
if(i!=l){e.s=-l
return s.plus(e)}var a=s.c.slice(),f=s.e,d=e.c,p=e.e
if(!a[0]||!d[0])return d[0]?(e.s=-l,e):new r(a[0]?s:0)
if(i=f-p){if(c=i<0){i=-i
o=a}else{p=f
o=d}o.reverse()
for(l=i;l--;)o.push(0)
o.reverse()}else{n=((c=a.length<d.length)?a:d).length
for(i=l=0;l<n;l++)if(a[l]!=d[l]){c=a[l]<d[l]
break}}if(c){o=a
a=d
d=o
e.s=-e.s}if((l=(n=d.length)-(t=a.length))>0)for(;l--;)a[t++]=0
for(l=t;n>i;){if(a[--n]<d[n]){for(t=n;t&&!a[--t];)a[t]=9;--a[t]
a[n]+=10}a[n]-=d[n]}for(;0===a[--l];)a.pop()
for(;0===a[0];){a.shift();--p}if(!a[0]){e.s=1
a=[p=0]}e.c=a
e.e=p
return e}
h.mod=function(e){var t,n=this,o=n.constructor,c=n.s,s=(e=new o(e)).s
if(!e.c[0])throw Error(b)
n.s=e.s=1
t=1==e.cmp(n)
n.s=c
e.s=s
if(t)return new o(n)
c=o.DP
s=o.RM
o.DP=o.RM=0
n=n.div(e)
o.DP=c
o.RM=s
return this.minus(n.times(e))}
h.plus=h.add=function(e){var t,n=this,o=n.constructor,c=n.s,s=(e=new o(e)).s
if(c!=s){e.s=-s
return n.minus(e)}var r=n.e,i=n.c,l=e.e,a=e.c
if(!i[0]||!a[0])return a[0]?e:new o(i[0]?n:0*c)
i=i.slice()
if(c=r-l){if(c>0){l=r
t=a}else{c=-c
t=i}t.reverse()
for(;c--;)t.push(0)
t.reverse()}if(i.length-a.length<0){t=a
a=i
i=t}c=a.length
for(s=0;c;i[c]%=10)s=(i[--c]=i[c]+a[c]+s)/10|0
if(s){i.unshift(s);++l}for(c=i.length;0===i[--c];)i.pop()
e.c=i
e.e=l
return e}
h.pow=function(e){var t=this,n=new t.constructor(1),o=n,c=e<0
if(e!==~~e||e<-a||e>a)throw Error(u+"exponent")
c&&(e=-e)
for(;;){1&e&&(o=o.times(t))
e>>=1
if(!e)break
t=t.times(t)}return c?n.div(o):o}
h.round=function(e,t){var n=this.constructor
if(e===g)e=0
else if(e!==~~e||e<-l||e>l)throw Error(m)
return P(new n(this),e,t===g?n.RM:t)}
h.sqrt=function(){var e,t,n,o=this,c=o.constructor,s=o.s,r=o.e,i=new c(.5)
if(!o.c[0])return new c(o)
if(s<0)throw Error(p+"No square root")
s=Math.sqrt(o+"")
if(0===s||s===1/0){t=o.c.join("")
t.length+r&1||(t+="0")
s=Math.sqrt(t)
r=((r+1)/2|0)-(r<0||1&r)
e=new c((s==1/0?"1e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+r)}else e=new c(s)
r=e.e+(c.DP+=4)
do{n=e
e=i.times(n.plus(o.div(n)))}while(n.c.slice(0,r).join("")!==e.c.slice(0,r).join(""))
return P(e,c.DP-=4,c.RM)}
h.times=h.mul=function(e){var t,n=this,o=n.constructor,c=n.c,s=(e=new o(e)).c,r=c.length,i=s.length,l=n.e,a=e.e
e.s=n.s==e.s?1:-1
if(!c[0]||!s[0])return new o(0*e.s)
e.e=l+a
if(r<i){t=c
c=s
s=t
a=r
r=i
i=a}for(t=new Array(a=r+i);a--;)t[a]=0
for(l=i;l--;){i=0
for(a=r+l;a>l;){i=t[a]+s[l]*c[a-l-1]+i
t[a--]=i%10
i=i/10|0}t[a]=(t[a]+i)%10}i?++e.e:t.shift()
for(l=t.length;!t[--l];)t.pop()
e.c=t
return e}
h.toExponential=function(e){return k(this,1,e,e)}
h.toFixed=function(e){return k(this,2,e,this.e+e)}
h.toPrecision=function(e){return k(this,3,e,e-1)}
h.toString=function(){return k(this)}
h.valueOf=h.toJSON=function(){return k(this,4)}
s=x()
s["default"]=s.Big=s
o=function(){return s}.call(t,n,t,e),void 0!==o&&(e.exports=o)})()},nibu:function(e,t,n){"use strict"
n.d(t,"b",(function(){return l}))
n.d(t,"f",(function(){return f}))
n.d(t,"a",(function(){return d}))
n.d(t,"d",(function(){return p}))
n.d(t,"e",(function(){return u}))
n.d(t,"c",(function(){return m}))
n.d(t,"g",(function(){return _}))
var o=n("GLiE")
var c=n.n(o)
var s=n("nc0P")
var r=n.n(s)
function i(e,t){return new r.a(e||0).plus(t||0)}function l(e,t){return new r.a(e||0).div(t||0)}function a(e,t){return new r.a(e||0).times(t||0)}function f(e){return Number.parseFloat(e,10)}function d(e){return e.reduce((e,t)=>e.plus(t||0),r()(0))}function p(e){const t=c.a.reduce(e,i,0)
return f(t)}function u(e,t){const n=c.a.map(e,t)
return p(n)}function m(e,t){const n=e/t*100
if(!Number.isFinite(n))return n
return f(a(l(e,t),100))}function _(e){let t=e.score,n=e.possible,o=e.weight
return t&&o?r()(t).div(n).times(o):r()(0)}},qJBq:function(e,t){(function(){var t,n,o
o=[]
t={}
e.exports=n=function(e,n,c){var s,r,i,l,a,f,d,p,u
null==c&&(c=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
u=n[0],s=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
u=n[0],s=n[1]}else{u=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
s=(null!=n?n.decimal:void 0)||t.decimal}d=""+u+s+c
f=o[d]
if(null==f){i=c?3:1
f=o[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+u+"\\d{"+i+",3})+)|\\d*))(?:\\"+s+"(\\d*))?\\s*$")}p=e.match(f)
if(!(null!=p&&3===p.length))return NaN
l=p[1].replace(new RegExp("\\"+u,"g"),"")
r=p[2]
a=parseFloat(l+"."+r)
return a}
e.exports.setOptions=function(e){var n,o
for(n in e){o=e[n]
t[n]=o}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(o){return n(o,e,t)}}
e.exports.factoryReset()}).call(this)},vI2V:function(e,t,n){"use strict"
var o=n("pQTu")
var c=n("m0r6")
Object(c["a"])(JSON.parse('{"ar":{"complete_4f4efbc":"اكتمل","complete_fd828dea":"مكتمل","excused_cf8792eb":"ليس إجباري","incomplete_95612d72":"غير مكتمل","incomplete_da3c2ea2":"غير مكتمل","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"cy":{"complete_4f4efbc":"cwblhau","complete_fd828dea":"Cwblhau","excused_cf8792eb":"Wedi esgusodi","incomplete_95612d72":"heb gwblhau","incomplete_da3c2ea2":"Heb Gwblhau","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"da":{"complete_4f4efbc":"fuldført","complete_fd828dea":"Fuldført","excused_cf8792eb":"Undskyldt","incomplete_95612d72":"ufuldstændig","incomplete_da3c2ea2":"Ufuldstændig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"da-x-k12":{"complete_4f4efbc":"fuldført","complete_fd828dea":"Fuldført","excused_cf8792eb":"Undskyldt","incomplete_95612d72":"ufuldstændig","incomplete_da3c2ea2":"Ufuldstændig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"de":{"complete_4f4efbc":"fertig","complete_fd828dea":"Abschließen","excused_cf8792eb":"Entschuldigt","incomplete_95612d72":"unvollständig","incomplete_da3c2ea2":"Unvollständig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"el":{"excused_cf8792eb":"Δικαιολογημένος/η","incomplete_da3c2ea2":"Μη ολοκληρωμένο"},"en-AU":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-AU-x-unimelb":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-CA":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-GB":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-GB-x-lbs":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-GB-x-ukhe":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"es":{"complete_4f4efbc":"completo","complete_fd828dea":"Completa","excused_cf8792eb":"Justificado","incomplete_95612d72":"incompleto","incomplete_da3c2ea2":"Incompleta","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"fa":{"complete_4f4efbc":"کامل","complete_fd828dea":"کامل","excused_cf8792eb":"معاف شد","incomplete_95612d72":"ناقص","incomplete_da3c2ea2":"ناقص"},"fi":{"complete_4f4efbc":"valmis","complete_fd828dea":"Valmis","excused_cf8792eb":"Annettu anteeksi","incomplete_95612d72":"keskeneräinen","incomplete_da3c2ea2":"Keskeneräinen","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"fr":{"complete_4f4efbc":"termine","complete_fd828dea":"Terminer","excused_cf8792eb":"Pas obligatoire","incomplete_95612d72":"incomplet","incomplete_da3c2ea2":"Incomplet","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"fr-CA":{"complete_4f4efbc":"terminer","complete_fd828dea":"Terminer","excused_cf8792eb":"Pas obligatoire","incomplete_95612d72":"incomplet","incomplete_da3c2ea2":"Incomplet","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"he":{"complete_4f4efbc":"השלמה","complete_fd828dea":"הושלם","excused_cf8792eb":"נסלח","incomplete_95612d72":"לא הושלם","incomplete_da3c2ea2":"לא הושלם"},"ht":{"complete_4f4efbc":"fini","complete_fd828dea":"Fini","excused_cf8792eb":"Egzante","incomplete_95612d72":"enkonplè","incomplete_da3c2ea2":"Enkonplè","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"hu":{"complete_4f4efbc":"kész","complete_fd828dea":"Kész","excused_cf8792eb":"Felmentve","incomplete_95612d72":"befejezetlen","incomplete_da3c2ea2":"Befejezetlen"},"hy":{"excused_cf8792eb":"Ներված է"},"is":{"complete_4f4efbc":"lokið","complete_fd828dea":"Ljúka","excused_cf8792eb":"Undanþegið","incomplete_95612d72":"ólokið","incomplete_da3c2ea2":"Ólokið","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"it":{"complete_4f4efbc":"completato","complete_fd828dea":"Completato","excused_cf8792eb":"Giustificato","incomplete_95612d72":"non completato","incomplete_da3c2ea2":"Non completato","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"ja":{"complete_4f4efbc":"完了","complete_fd828dea":"完了","excused_cf8792eb":"免除","incomplete_95612d72":"未完了","incomplete_da3c2ea2":"不完全","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"mi":{"complete_4f4efbc":"oti","complete_fd828dea":"Oti","excused_cf8792eb":"Whakawātea","incomplete_95612d72":"pahara","incomplete_da3c2ea2":"Kaore i te oti","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nb":{"complete_4f4efbc":"godkjent","complete_fd828dea":"Godkjent","excused_cf8792eb":"Fritatt","incomplete_95612d72":"ikke godkjent","incomplete_da3c2ea2":"Ikke godkjent","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nb-x-k12":{"complete_4f4efbc":"fullført","complete_fd828dea":"Fullført","excused_cf8792eb":"Fritatt","incomplete_95612d72":"ikke fullført","incomplete_da3c2ea2":"Ikke fullført","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nl":{"complete_4f4efbc":"voltooid","complete_fd828dea":"Voltooid","excused_cf8792eb":"Geëxcuseerd!","incomplete_95612d72":"niet voltooid","incomplete_da3c2ea2":"Incompleet","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nn":{"complete_4f4efbc":"fullført","complete_fd828dea":"Fullført","excused_cf8792eb":"Fritak er innvilga","incomplete_95612d72":"ikkje fullført","incomplete_da3c2ea2":"Ikkje fullført","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"pl":{"complete_4f4efbc":"zakończ","complete_fd828dea":"Ukończony","excused_cf8792eb":"Usprawiedliwiony!","incomplete_95612d72":"nieukończony","incomplete_da3c2ea2":"Nie ukończono","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"pt":{"complete_4f4efbc":"completo","complete_fd828dea":"Completo","excused_cf8792eb":"Desculpado","incomplete_95612d72":"incompleto","incomplete_da3c2ea2":"Incompleto","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"pt-BR":{"complete_4f4efbc":"completo","complete_fd828dea":"Concluído","excused_cf8792eb":"Dispensado","incomplete_95612d72":"incompleto","incomplete_da3c2ea2":"Incompleto","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"ru":{"complete_4f4efbc":"завершенный","complete_fd828dea":"Завершить","excused_cf8792eb":"По уважительной причине","incomplete_95612d72":"незавершенный","incomplete_da3c2ea2":"Не завершено","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"sl":{"complete_4f4efbc":"zaključi","complete_fd828dea":"Zaključeno","excused_cf8792eb":"Opravičeno","incomplete_95612d72":"nezaključeno","incomplete_da3c2ea2":"Nezaključeno"},"sv":{"complete_4f4efbc":"färdig","complete_fd828dea":"Färdig","excused_cf8792eb":"Ursäktad","incomplete_95612d72":"ej fullständig","incomplete_da3c2ea2":"Ofullständig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"sv-x-k12":{"complete_4f4efbc":"fullgjord","complete_fd828dea":"Färdig","excused_cf8792eb":"Ursäktad","incomplete_95612d72":"ej fullständig","incomplete_da3c2ea2":"Ofullständig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"tr":{"complete_4f4efbc":"tamam","complete_fd828dea":"Tamamlandı","excused_cf8792eb":"Mazeretli","incomplete_da3c2ea2":"Eksik"},"uk":{"complete_4f4efbc":"Завершити","complete_fd828dea":"Завершити","excused_cf8792eb":"Виправдано","incomplete_95612d72":"незавершений","incomplete_da3c2ea2":"Незавершений"},"zh-Hans":{"complete_4f4efbc":"完成","complete_fd828dea":"完成","excused_cf8792eb":"已免除","incomplete_95612d72":"未完成","incomplete_da3c2ea2":"未完成","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"zh-Hant":{"complete_4f4efbc":"完成","complete_fd828dea":"完成","excused_cf8792eb":"已免除","incomplete_95612d72":"未完成","incomplete_da3c2ea2":"未完成","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"}}'))
n("jQeR")
n("0sPK")
var s=o["default"].scoped("sharedGradeFormatHelper")
var r=n("ejBJ")
var i=n("HbFp")
var l=n("nibu")
var a=n("OgVL")
const f="points"
const d="percent"
const p="pass_fail"
const u="points_out_of_fraction"
const m=["complete","pass"]
const _=["incomplete","fail"]
const b="–"
function h(e,t){if(t)return t===p
return m.includes(e)||_.includes(e)}function g(e,t){if(t)return t===d
return/%/g.test(e)}function v(e){return"EX"===e}function x(e,t){if(null==e||""===e)return e
if(null==t||""===t)return e
const n={precision:2,strip_insignificant_zeros:true}
let o=b
null!=e&&(o=s.n(e,n))
const c=s.n(t,n)
return s.t("%{score}/%{pointsPossibleTranslated}",{pointsPossibleTranslated:c,score:o})}function w(e){if(m.includes(e))return"complete"
if(_.includes(e))return"incomplete"
return null}function P(e){return e===f||e===d||e===p}function k(e,t){if(t)return P(t)
return"number"===typeof e||h(e)}function T(){return s.t("Excused")}function j(e){return s.n(e,{precision:2,strip_insignificant_zeros:true})}function E(e,t){const n=t.pointsPossible?Object(l["c"])(e,t.pointsPossible):e
return s.n(Object(r["a"])(n,2),{percentage:true,precision:2,strip_insignificant_zeros:true})}function N(e,t,n){if(n.pointsPossible){const t=Object(l["c"])(e,n.pointsPossible)
return Object(a["d"])(t,n.gradingScheme)}return null!=t?t:Object(a["d"])(e,n.gradingScheme)}function y(e,t,n){let o=false
o=n.pointsPossible?e>0:m.includes(t)
return o?s.t("Complete"):s.t("Incomplete")}function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(e.excused)return T()
if(null==e.grade)return null!=t.defaultValue?t.defaultValue:b
return e.grade}const z={formatGrade(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
let n=e
if(null==e||""===e)return"defaultValue"in t?t.defaultValue:e
if(v(e))return T()
let o=z.parseGrade(e,t)
if(k(o,t.gradingType))if(h(o,t.gradingType)){o=w(o)
n="complete"===o?s.t("complete"):s.t("incomplete")}else{const c=Object(r["a"])(o,t.precision||2)
n=s.n(c,{percentage:g(e,t.gradingType)})}t.gradingType===f&&t.formatType===u&&(n=x(e,t.pointsPossible))
return n},delocalizeGrade(e){if(void 0===e||null===e||"string"!==typeof e)return e
const t=i["a"].parse(e.replace("%",""))
if(isNaN(t))return e
return t+(/%/g.test(e)?"%":"")},parseGrade(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
let n
if(null==e||""===e||"number"===typeof e)return e
const o=e.replace("%","")
n="delocalize"in t&&!t.delocalize&&!isNaN(o)?parseFloat(o):i["a"].parse(o)
if(isNaN(n))return e
return n},excused:T,isExcused:v,formatGradeInfo:O,formatPointsOutOf:x,formatSubmissionGrade(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{version:"final"}
if(e.excused)return T()
const n="entered"===t.version?e.enteredScore:e.score
const o="entered"===t.version?e.enteredGrade:e.grade
if(null==n)return null!=t.defaultValue?t.defaultValue:b
switch(t.formatType){case"percent":return E(n,t)
case"gradingScheme":return N(n,o,t)
case"passFail":return y(n,o,t)
default:return j(n)}},UNGRADED:b}
t["a"]=z}}])

//# sourceMappingURL=45-c-e4f2781d48.js.map