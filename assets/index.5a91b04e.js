var e=(e,t,a)=>new Promise(((n,s)=>{var l=e=>{try{r(a.next(e))}catch(t){s(t)}},o=e=>{try{r(a.throw(e))}catch(t){s(t)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,o);r((a=a.apply(e,t)).next())}));import{a as t,p as a,b as n,d as s,o as l,c as o,n as r,t as i,e as u,r as c,f as p,g as d,h as v,i as g,j as f,w as m,k as h,F as y,l as b,m as x,q as w,v as k,s as T,u as q,x as _,y as I,z as E,A as S,B as $,C}from"./vendor.a522ed54.js";const O={lt:"",gt:"",amp:"&",quot:'"',apos:"'",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",times:"×",divide:"÷",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦","#8226":"•","#8212":"—"};function A(e){const{env:t,biz:a}=window.dd;"notInDingTalk"!==t.platform?a.navigation.setTitle({title:e}):document.title=e}function P(a){return e(this,null,(function*(){return t.post("/translate",{q:a})}))}t.defaults.baseURL="http://api.1r21.cn/api",t.defaults.headers.post["Content-Type"]="application/json",t.interceptors.request.use((e=>e),(e=>Promise.reject(e))),t.interceptors.response.use((e=>{const{status:t,data:a}=e;if(200===t){const{code:e,message:t,data:n}=a;return 0===e?n:Promise.reject(t)}return Promise.reject("error")})),a("data-v-ef7857a6");const z={key:0,class:"loading-wrap"},j={key:1,class:"error"};n();var B=s({props:{icon:{type:String,required:!1,default:"loading"},size:{type:[String,String,String],required:!0,default:"default"},loading:{type:Boolean,required:!0},error:{type:String,required:!1}},setup:e=>(t,a)=>e.loading||e.error?(l(),o("div",z,[e.loading?(l(),o("i",{key:0,class:r(["iconfont","loading",`i-${e.icon}`,e.size])},null,2)):e.error?(l(),o("span",j,i(e.error),1)):u("",!0)])):c(t.$slots,"default",{key:1},void 0,!0)});B.__scopeId="data-v-ef7857a6",a("data-v-714a9421");const R={class:"post-card"},U=["src"],D={class:"content"};n();var M=s({props:{news:{type:null,required:!0}},setup(e){const t=e,a=[10,102,1004,1016],n=Math.floor(Math.random()*a.length),s=p(`./place/${a[n]}.jpg`),r=p(null);return d((()=>{if("IntersectionObserver"in window){const e=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const a=e.target;setTimeout((()=>{/\place\/\d+\.jpg/.test(a.src)&&(a.src=t.news.cover)}),300)}}))}));r.value&&e.observe(r.value)}})),(t,a)=>(l(),o("article",R,[v("img",{src:s.value,alt:"news cover",class:"cover",ref:r},null,8,U),v("div",D,[v("p",null,i(e.news.date),1),v("p",null,i(e.news.title),1)])]))}});M.__scopeId="data-v-714a9421",a("data-v-6e80e770");const H={class:"article-list"},L=v("div",{class:"footer"},"～over～",-1);n();var N=s({setup(a){const n=p(!1),s=p([]);return d((()=>e(this,null,(function*(){n.value=!0;const{list:a}=yield function(){return e(this,null,(function*(){return t.get("/news")}))}();s.value=a,n.value=!1,A("I Believe")})))),(e,t)=>{const a=g("router-link");return l(),f(B,{loading:n.value,size:"large"},{default:m((()=>[v("div",H,[(l(!0),o(y,null,h(s.value,(e=>(l(),f(a,{custom:"",key:e.id,to:`/detail/${e.id}`},{default:m((({navigate:t})=>[b(M,{news:e,onClick:t,role:"link"},null,8,["news","onClick"])])),_:2},1032,["to"])))),128))]),L])),_:1},8,["loading"])}}});N.__scopeId="data-v-6e80e770",a("data-v-7bbc2d4e");const V={key:0,class:"content"},Y={key:0},W={class:"before"},X=v("span",null,"S:",-1),F={class:"after"},G=v("span",{class:"dst"},"D:",-1);n();var K=s({props:{position:{type:Object,required:!0},text:{type:String,required:!0},visible:{type:Boolean,required:!0},btnVisible:{type:Boolean,required:!0}},emits:["hide-btn","show-box"],setup(t,{emit:a}){const n=t,s=p(null),r=p(!1);function c(){return e(this,null,(function*(){a("hide-btn"),a("show-box"),r.value=!0,s.value=null;const{list:e}=yield P(n.text);if(e&&e.length>0){const[t]=e;s.value=t}r.value=!1}))}const d=x((()=>{const{clientWidth:e,clientHeight:t}=document.documentElement,{x:a=0,y:s=0}=n.position,l=e-a,o=t-s,r=s>40?s-40:s,i=o+20;return l<=a&&o<=s?{bottom:`${i}px`,right:`${l}px`}:l<=a?{top:`${r}px`,right:`${l}px`}:o<=s?{bottom:`${i}px`,left:`${a}px`}:{top:`${r}px`,left:`${a}px`}}));return(e,a)=>(l(),o("div",{class:"translate",style:T(q(d))},[w(v("i",{class:"iconfont i-fanyi",onClick:c},null,512),[[k,t.btnVisible]]),b(B,{loading:r.value,icon:"translater",size:"small"},{default:m((()=>[t.visible?(l(),o("div",V,[s.value?(l(),o(y,{key:1},[v("p",W,[X,v("span",null,i(s.value.src),1)]),v("p",F,[G,v("span",null,i(s.value.dst),1)])],64)):(l(),o("div",Y,"No result"))])):u("",!0)])),_:1},8,["loading"])],4))}});function Z(){return{parseText:function(e){let t=e.replace(/(\r\n|\n|\r)/gm,"");for(let n in O){const e=new RegExp("&"+n+";","g");t=t.replace(e,O[n])}const a=t.match(/<p[^>]*>(.*?)<\/p>/gm);if(a)return a.map((e=>{if(e.includes("</strong>")){const t=/<p><strong[^>]*>(.*?)<\/strong><\/p>/g;return{type:"title",value:e.replace(t,"$1")}}return{type:"text",value:e.replace(/<p[^>]*>(.*?)<\/p>/g,"$1")}}))},doTranslate:function(t,a,n){return e(this,null,(function*(){if(n)return t.map((e=>e.value===a?(e.trans="",e):e));{const{list:e}=yield P(a);if(e&&e.length>0){const[n]=e;return t.map((e=>e.value===a?(e.trans=n.dst,e):e))}}}))},getMousePos:function(e){const{x:t,y:a}=e,n=window.getSelection();if(n){const e=n.getRangeAt(0);return{x:t,y:a,sectionText:String(e)}}}}}function J(a){const n=p(!1),s=p(""),l=p(""),o=p(null),r=p([]),{parseText:i}=Z();return d((()=>e(this,null,(function*(){n.value=!0;try{const n=yield function(a){return e(this,null,(function*(){return t.post("/news/detail",{id:a})}))}(String(a));if(n){const{date:e,title:t}=n;if(o.value=n,n.transcript){const e=i(n.transcript);e&&(r.value=e)}l.value=`(${e}) ${t}`}}catch(u){const e="string"==typeof u?u:"error";s.value=e,l.value=e}n.value=!1})))),{news:o,texts:r,loading:n,exceptionText:s,docTitle:l}}K.__scopeId="data-v-7bbc2d4e",a("data-v-2a179744");const Q={class:"transcript-wrap"},ee=["onContextmenu"],te={key:0,class:"title"},ae={class:"text"},ne=["onClick"],se={key:1,class:"transcript"},le=[v("p",{class:"text"},"The transcript is on the way!",-1)],oe={class:"footer"},re=E(" from: "),ie=["href"],ue=["src"],ce=["onClick"];n();var pe=s({setup(e){const t=p(!0),a=p(!1),n=p(!1),s=p(""),r=p({x:0,y:0}),u=p(null),c=p(null),f=p(0),x=p(0),E=p(0),S=p(0),{getMousePos:$,doTranslate:C}=Z(),O=_(),{id:P}=O.params,{news:z,texts:j,loading:R,exceptionText:U,docTitle:D}=J(Number(P));function M(e){const t=$(e);if(t){const{x:e,y:a,sectionText:l}=t;s.value=l,r.value={x:e,y:a},n.value=!0}}function H(){u.value&&(u.value.play(),t.value=!1)}function L(){u.value&&(u.value.pause(),t.value=!0)}function N(){t.value=!0}function V(){a.value=!1,n.value=!1}function Y(e){const{pageX:t,pageY:a}=e.targetTouches[0];if(f.value=t,x.value=a,c.value){const{style:e,offsetLeft:t,offsetTop:a,offsetWidth:n,offsetHeight:s}=c.value;E.value=t+n,S.value=a+s,e.boxShadow="0 0 10px rgba(0, 0, 0, .5)"}}function W(){c.value&&(c.value.style.boxShadow="none")}function X(e){e.preventDefault();const{clientHeight:t,clientWidth:a}=document.documentElement,{pageX:n,pageY:s}=e.targetTouches[0],l=n-f.value,o=s-x.value;if(c.value){const{style:e}=c.value;e.right=a-(E.value+l)+"px",e.bottom=t-(S.value+o)+"px"}}return d((()=>{A(D.value)})),(e,p)=>{const d=g("router-link");return l(),o("div",Q,[b(B,{loading:q(R),error:q(U),size:"large"},{default:m((()=>{var e,g,f,x,_;return[(null==(e=q(z))?void 0:e.transcript)?(l(),o("div",{key:0,class:"transcript",onContextmenu:I(M,["prevent"]),onClick:V,onTouchstart:V},[(l(!0),o(y,null,h(q(j),(e=>(l(),o(y,{key:e.type+e.value},["title"===e.type?(l(),o("p",te,i(e.value),1)):(l(),o(y,{key:1},[v("p",ae,[v("span",null,i(e.value),1),v("span",null,[v("i",{class:"iconfont i-translater",onClick:t=>{return a=e.value,n=e.trans,C(j.value,a,n);var a,n}},null,8,ne)])]),w(v("p",{class:"text trans"},i(e.trans),513),[[k,e.trans]])],64))],64)))),128))],40,ee)):(l(),o("div",se,le)),w(v("p",oe,[re,v("a",{href:null==(g=q(z))?void 0:g.source},"pbs",8,ie)],512),[[k,null==(f=q(z))?void 0:f.source]]),v("audio",{src:null==(x=q(z))?void 0:x.src,onEnded:N,ref:u},null,40,ue),v("div",{class:"action",ref:c,onTouchstart:Y,onTouchend:W,onTouchmove:X,style:T({backgroundImage:`url(${null==(_=q(z))?void 0:_.cover})`})},[t.value?(l(),o("i",{key:0,class:"iconfont i-play",onClick:H})):(l(),o("i",{key:1,class:"iconfont i-pause",onClick:L})),b(d,{to:"/",custom:""},{default:m((({navigate:e})=>[v("i",{class:"iconfont i-home",onClick:e},null,8,ce)])),_:1})],36),b(K,{text:s.value,position:r.value,visible:a.value,btnVisible:n.value,onShowBox:p[0]||(p[0]=e=>a.value=!0),onHideBtn:p[1]||(p[1]=e=>n.value=!1)},null,8,["text","position","visible","btnVisible"])]})),_:1},8,["loading","error"])])}}});pe.__scopeId="data-v-2a179744";const de={};a("data-v-432e681e");const ve={class:"content"};n(),de.render=function(e,t){return l(),o("div",ve,"404 Not Found")},de.__scopeId="data-v-432e681e";const{BASE_URL:ge}={VITE_API_URL:"http://api.1r21.cn",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},fe=[{path:"/",component:N},{path:"/detail/:id",component:pe},{path:"/:pathMatch(.*)*",component:de}];var me=S({history:$(ge),routes:fe});const he={};a("data-v-79ebb873");const ye={class:"container"};n(),he.render=function(e,t){const a=g("router-view");return l(),o("div",ye,[b(a)])},he.__scopeId="data-v-79ebb873";const be=C(he);be.use(me),be.mount("#app");
