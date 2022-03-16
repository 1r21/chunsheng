var fe=Object.defineProperty,he=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var G=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t)=>{for(var n in t||(t={}))ye.call(t,n)&&G(e,n,t[n]);if(q)for(var n of q(t))me.call(t,n)&&G(e,n,t[n]);return e},K=(e,t)=>he(e,ge(t));var H=(e,t,n)=>new Promise((l,o)=>{var s=d=>{try{r(n.next(d))}catch(v){o(v)}},a=d=>{try{r(n.throw(d))}catch(v){o(v)}},r=d=>d.done?l(d.value):Promise.resolve(d.value).then(s,a);r((n=n.apply(e,t)).next())});import{d as A,o as i,c as _,n as xe,t as k,a as Z,r as be,b as u,e as Y,f as c,g as we,h as M,i as P,j as Q,w as V,k as ee,F as O,p as R,l as X,m as B,q as $e,s as L,v as z,u as te,x as $,y as ne,z as ke,A as Ie,B as Te,C as Se,D as Ce,E as Ee,G as Be,H as Ne,I as He,J as Oe}from"./vendor.8735f004.js";const Ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Ve();var T=(e,t)=>{const n=e.__vccOpts||e;for(const[l,o]of t)n[l]=o;return n};const Ae={key:0,class:"loading-wrap"},Fe={key:1,class:"error"},Le=A({props:{icon:{default:"loading"},size:{default:"default"},loading:{type:Boolean},error:null},setup(e){return(t,n)=>e.loading||e.error?(i(),_("div",Ae,[e.loading?(i(),_("i",{key:0,class:xe(["iconfont","loading",`i-${e.icon}`,e.size])},null,2)):e.error?(i(),_("span",Fe,k(e.error),1)):Z("",!0)])):be(t.$slots,"default",{key:1},void 0,!0)}});var W=T(Le,[["__scopeId","data-v-ef7857a6"]]);const ze={class:"post-card"},De=["src"],Me={class:"content"},Ye=A({props:{news:null},setup(e){const t=e,n=[1004,1016],l=Math.floor(Math.random()*n.length),o=d=>`./place/${d[l]}.jpg`,s=u(o(n)),a=u(null);function r(){s.value=o([10,102])}return Y(()=>{if("IntersectionObserver"in window){const d=new IntersectionObserver(v=>{v.forEach(g=>{if(g.isIntersecting){const w=g.target;setTimeout(()=>{/place\/1004|1016\.jpg/.test(w.src)&&(s.value=t.news.cover)},300)}})});a.value&&d.observe(a.value)}}),(d,v)=>(i(),_("article",ze,[c("img",{src:s.value,alt:"Fetch cover err",class:"cover",ref_key:"image",ref:a,onError:r},null,40,De),c("div",Me,[c("p",null,k(e.news.date),1),c("p",null,k(e.news.title),1)])]))}});var Pe=T(Ye,[["__scopeId","data-v-171bc0bc"]]);const Re=e=>(R("data-v-0e701d23"),e=e(),X(),e),Xe={class:"article-list"},We=Re(()=>c("div",{class:"footer"},"\uFF5Eover\uFF5E",-1)),je=A({setup(e){const t=u(!1),n=u([]);return Y(()=>H(this,null,function*(){t.value=!0;const{list:l}=yield we();n.value=l,t.value=!1,M("I Believe")})),(l,o)=>{const s=P("router-link");return i(),Q(W,{loading:t.value,size:"large"},{default:V(()=>[c("div",Xe,[(i(!0),_(O,null,ee(n.value,a=>(i(),Q(s,{custom:"",key:a.id,to:`/detail/${a.id}`},{default:V(({navigate:r})=>[B(Pe,{news:a,onClick:r,role:"link"},null,8,["news","onClick"])]),_:2},1032,["to"]))),128))]),We]),_:1},8,["loading"])}}});var Ue=T(je,[["__scopeId","data-v-0e701d23"]]);const oe=e=>(R("data-v-89d51650"),e=e(),X(),e),qe={key:0,class:"content"},Ge={key:0},Je={class:"before"},Ke=oe(()=>c("span",null,"S:",-1)),Qe={class:"after"},Ze=oe(()=>c("span",{class:"dst"},"D:",-1)),et=A({props:{position:null,text:null,visible:{type:Boolean},btnVisible:{type:Boolean}},emits:["hide-btn","show-box"],setup(e,{emit:t}){const n=e,l=u(null),o=u(!1);function s(){return H(this,null,function*(){t("hide-btn"),t("show-box"),o.value=!0,l.value=null;const{list:r}=yield ne(n.text);if(r&&r.length>0){const[d]=r;l.value=d}o.value=!1})}const a=$e(()=>{const{clientWidth:r,clientHeight:d}=document.documentElement,{x:v=0,y:g=0}=n.position,w=r-v,S=d-g,N=40,F=g>N?g-N:g,m=S+N/2;return w<=v&&S<=g?{bottom:`${m}px`,right:`${w}px`}:w<=v?{top:`${F}px`,right:`${w}px`}:S<=g?{bottom:`${m}px`,left:`${v}px`}:{top:`${F}px`,left:`${v}px`}});return(r,d)=>(i(),_("div",{class:"translate",style:te($(a))},[L(c("i",{class:"iconfont i-fanyi",onClick:s},null,512),[[z,e.btnVisible]]),B(W,{loading:o.value,icon:"translater",size:"small"},{default:V(()=>[e.visible?(i(),_("div",qe,[l.value?(i(),_(O,{key:1},[c("p",Je,[Ke,c("span",null,k(l.value.src),1)]),c("p",Qe,[Ze,c("span",null,k(l.value.dst),1)])],64)):(i(),_("div",Ge,"No result"))])):Z("",!0)]),_:1},8,["loading"])],4))}});var tt=T(et,[["__scopeId","data-v-89d51650"]]);function nt(e){const t=u(!1),n=u(""),l=u(null),o=u([]);return Y(()=>H(this,null,function*(){t.value=!0;try{const s=yield ke(String(e));if(s&&(l.value=s,s.transcript)){const a=Ie(s.transcript);a&&(o.value=a)}}catch(s){const a=typeof s=="string"?s:"error";n.value=a}t.value=!1})),{news:l,texts:o,loading:t,exceptionText:n}}const ot=e=>(R("data-v-7049fce9"),e=e(),X(),e),st={class:"transcript-wrap"},at=["onContextmenu"],lt={key:0,class:"title"},ct={class:"text"},rt=["onClick"],it={key:1,class:"transcript"},ut=ot(()=>c("p",{class:"text"},"The transcript is on the way!",-1)),dt=[ut],_t={class:"footer"},pt=Ee(" from: "),vt=["href"],ft=["src"],ht=["onClick"],gt=A({setup(e){const t=u(!0),n=u(!1),l=u(!1),o=u(""),s=u({x:0,y:0}),a=u(null),r=u(null),d=u(0),v=u(0),g=u(0),w=u(0),S=navigator.userAgent.indexOf("Html5Plus")>-1,N=Se(),{id:F}=N.params,{news:m,texts:D,loading:j,exceptionText:ae}=nt(Number(F));Te(()=>{var f;j.value?M("loading..."):M((f=m.value)==null?void 0:f.date)});function le(f){const p=Be(f);if(p){const{x,y:b,sectionText:y}=p;o.value=y,s.value={x,y:b},l.value=!0}}function ce(){var f,p;S&&window.plusShare({title:(f=m.value)==null?void 0:f.date,content:(p=m.value)==null?void 0:p.title,href:location.href,thumbs:["http://ai.1r21.cn/logo.png"]})}function re(){a.value&&(a.value.play(),t.value=!1)}function ie(){a.value&&(a.value.pause(),t.value=!0)}function ue(){t.value=!0}function de(f,p){return H(this,null,function*(){if(!p){const{list:x=[]}=yield ne(f);if(x&&x.length){const[b]=x;D.value=D.value.map(y=>K(J({},y),{trans:y.type==="text"&&y.value===b.src?b.dst:""}))}}})}function U(){n.value=!1,l.value=!1}function _e(f){const{pageX:p,pageY:x}=f.targetTouches[0];if(d.value=p,v.value=x,r.value){const{style:b,offsetLeft:y,offsetTop:C,offsetWidth:E,offsetHeight:I}=r.value;g.value=y+E,w.value=C+I,b.boxShadow="0 0 10px rgba(0, 0, 0, .5)"}}function pe(){r.value&&(r.value.style.boxShadow="none")}function ve(f){f.preventDefault();const{clientHeight:p,clientWidth:x}=document.documentElement,{pageX:b,pageY:y}=f.targetTouches[0],C=b-d.value,E=y-v.value;if(r.value){const{style:I}=r.value;I.right=`${x-(g.value+C)}px`,I.bottom=`${p-(w.value+E)}px`}}return(f,p)=>{const x=P("router-link");return i(),_("div",st,[B(W,{loading:$(j),error:$(ae),size:"large"},{default:V(()=>{var b,y,C,E,I;return[((b=$(m))==null?void 0:b.transcript)?(i(),_("div",{key:0,class:"transcript",onContextmenu:Ce(le,["prevent"]),onClick:U,onTouchstart:U},[(i(!0),_(O,null,ee($(D),h=>(i(),_(O,{key:h.type+h.value},[h.type==="title"?(i(),_("p",lt,k(h.value),1)):(i(),_(O,{key:1},[c("p",ct,[c("span",null,k(h.value),1),c("span",null,[c("i",{class:"iconfont i-translater",onClick:Bt=>de(h.value,h.trans)},null,8,rt)])]),L(c("p",{class:"text trans"},k(h.trans),513),[[z,h.trans]])],64))],64))),128))],40,at)):(i(),_("div",it,dt)),L(c("p",_t,[pt,c("a",{href:(y=$(m))==null?void 0:y.source,target:"__blank"},"pbs",8,vt)],512),[[z,(C=$(m))==null?void 0:C.source]]),c("audio",{src:(E=$(m))==null?void 0:E.src,onEnded:ue,ref_key:"audioEl",ref:a},null,40,ft),c("div",{class:"action",ref_key:"actionBtn",ref:r,onTouchstart:_e,onTouchend:pe,onTouchmove:ve,style:te({backgroundImage:`url(${(I=$(m))==null?void 0:I.cover})`})},[L(c("i",{class:"iconfont i-share",onClick:ce},null,512),[[z,S]]),t.value?(i(),_("i",{key:0,class:"iconfont i-play",onClick:re})):(i(),_("i",{key:1,class:"iconfont i-pause",onClick:ie})),B(x,{to:"/",custom:""},{default:V(({navigate:h})=>[c("i",{class:"iconfont i-home",onClick:h},null,8,ht)]),_:1})],36),B(tt,{text:o.value,position:s.value,visible:n.value,btnVisible:l.value,onShowBox:p[0]||(p[0]=h=>n.value=!0),onHideBtn:p[1]||(p[1]=h=>l.value=!1)},null,8,["text","position","visible","btnVisible"])]}),_:1},8,["loading","error"])])}}});var yt=T(gt,[["__scopeId","data-v-7049fce9"]]);const mt={},xt={class:"content"};function bt(e,t){return i(),_("div",xt,"404 Not Found")}var wt=T(mt,[["render",bt],["__scopeId","data-v-432e681e"]]);const{BASE_URL:$t}={VITE_API_HOST:"https://api.1r21.cn",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},kt=[{path:"/",component:Ue},{path:"/detail/:id",component:yt},{path:"/:pathMatch(.*)*",component:wt}];var It=Ne({history:He($t),routes:kt});const Tt={},St={class:"container"};function Ct(e,t){const n=P("router-view");return i(),_("div",St,[B(n)])}var Et=T(Tt,[["render",Ct],["__scopeId","data-v-79ebb873"]]);const se=Oe(Et);se.use(It);se.mount("#app");
