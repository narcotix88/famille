import{Q as ne,c as oe}from"./title.30a4682d.js";import{c as S,h as N,a as le,b as I,g as ie,d as re}from"./dom.387a8470.js";import{c as f,h,r as w,i as G,o as E,a as P,n as J,b as U,g as Q,l as M,d as Z,e as T,w as z,f as j,p as ee,j as ae,k as R,m as se,q as ue,s as A,t as K,u as $,v as C,x as O,y as ce}from"./index.6cd14aba.js";var de=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:t.value},N(a.default))}}),fe=S({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:t.value,role:"toolbar"},N(a.default))}});function ve(){const e=w(!G.value);return e.value===!1&&E(()=>{e.value=!0}),e}const te=typeof ResizeObserver!="undefined",X=te===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var W=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let t=null,n,o={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:s,offsetHeight:i}=n;(s!==o.width||i!==o.height)&&(o={width:s,height:i},a("resize",o))}}const{proxy:m}=Q();if(te===!0){let s;const i=g=>{n=m.$el.parentNode,n?(s=new ResizeObserver(u),s.observe(n),c()):g!==!0&&U(()=>{i(!0)})};return E(()=>{i()}),P(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():n&&s.unobserve(n))}),J}else{let g=function(){t!==null&&(clearTimeout(t),t=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",u,M.passive),i=void 0)},p=function(){g(),n&&n.contentDocument&&(i=n.contentDocument.defaultView,i.addEventListener("resize",u,M.passive),c())};const s=ve();let i;return E(()=>{U(()=>{n=m.$el,n&&p()})}),P(g),m.trigger=u,()=>{if(s.value===!0)return h("object",{style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:p})}}}}),he=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=Q(),o=Z(j,T);if(o===T)return console.error("QHeader needs to be child of QLayout"),T;const u=w(parseInt(e.heightHint,10)),c=w(!0),m=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),s=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const l=u.value-o.scroll.value.position;return l>0?l:0}),i=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=f(()=>{const l=o.rows.value.top,b={};return l[0]==="l"&&o.left.space===!0&&(b[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(b[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function d(l,b){o.update("header",l,b)}function y(l,b){l.value!==b&&(l.value=b)}function V({height:l}){y(u,l),d("size",l)}function k(l){g.value===!0&&y(c,!0),t("focusin",l)}z(()=>e.modelValue,l=>{d("space",l),y(c,!0),o.animate()}),z(s,l=>{d("offset",l)}),z(()=>e.reveal,l=>{l===!1&&y(c,e.modelValue)}),z(c,l=>{o.animate(),t("reveal",l)}),z(o.scroll,l=>{e.reveal===!0&&y(c,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",s.value),P(()=>{o.instances.header===L&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const l=le(a.default,[]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(h(W,{debounce:0,onResize:V})),h("header",{class:p.value,style:x.value,onFocusin:k},l)}}}),me=S({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:t}}=Q(),n=Z(j,T);if(n===T)return console.error("QPageContainer needs to be child of QLayout"),T;ee(ae,!0);const o=f(()=>{const u={};return n.header.space===!0&&(u.paddingTop=`${n.header.size}px`),n.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(u.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:o.value},N(a.default))}});const ge=[null,document,document.body,document.scrollingElement,document.documentElement];function pe(e,a){let t=ie(a);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return ge.includes(t)?window:t}function be(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ye(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let H;function F(){if(H!==void 0)return H;const e=document.createElement("p"),a=document.createElement("div");I(e,{width:"100%",height:"200px"}),I(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const t=e.offsetWidth;a.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=a.clientWidth),a.remove(),H=t-n,H}const{passive:Y}=M,we=["both","horizontal","vertical"];var xe=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>we.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,u;z(()=>e.scrollTarget,()=>{s(),m()});function c(){n!==null&&n();const p=Math.max(0,be(o)),x=ye(o),d={top:p-t.position.top,left:x-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const y=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:p,left:x},t.directionChanged=t.direction!==y,t.delta=d,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),a("scroll",{...t})}function m(){o=pe(u,e.scrollTarget),o.addEventListener("scroll",i,Y),i(!0)}function s(){o!==void 0&&(o.removeEventListener("scroll",i,Y),o=void 0)}function i(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(n===null){const[x,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];n=()=>{d(x),n=null}}}const{proxy:g}=Q();return z(()=>g.$q.lang.rtl,c),E(()=>{u=g.$el.parentNode,m()}),P(()=>{n!==null&&n(),s()}),Object.assign(g,{trigger:i,getPosition:()=>t}),J}}),ze=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=Q(),o=w(null),u=w(n.screen.height),c=w(e.container===!0?0:n.screen.width),m=w({position:0,direction:"down",inflectionPoint:0}),s=w(0),i=w(G.value===!0?0:F()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),x=f(()=>i.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=f(()=>i.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};m.value=v,e.onScroll!==void 0&&t("scroll",v)}}function V(r){const{height:v,width:_}=r;let q=!1;u.value!==v&&(q=!0,u.value=v,e.onScrollHeight!==void 0&&t("scrollHeight",v),L()),c.value!==_&&(q=!0,c.value=_),q===!0&&e.onResize!==void 0&&t("resize",r)}function k({height:r}){s.value!==r&&(s.value=r,L())}function L(){if(e.container===!0){const r=u.value>s.value?F():0;i.value!==r&&(i.value=r)}}let l=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:u,containerHeight:s,scrollbarWidth:i,totalWidth:f(()=>c.value+i.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:m,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,v,_){b[r][v]=_}};if(ee(j,b),F()>0){let _=function(){r=null,v.classList.remove("hide-scrollbar")},q=function(){if(r===null){if(v.scrollHeight>n.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(_,300)},B=function(D){r!==null&&D==="remove"&&(clearTimeout(r),_()),window[`${D}EventListener`]("resize",q)},r=null;const v=document.body;z(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),se(()=>{B("remove")})}return()=>{const r=re(a.default,[h(xe,{onScroll:y}),h(W,{onResize:V})]),v=h("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(W,{onResize:k}),h("div",{class:"absolute-full",style:x.value},[h("div",{class:"scroll",style:d.value},[v])])]):v}}}),_e="/rep/assets/fd.0ca1160f.mp4",Se="/rep/assets/logo.d1fa15b1.png";const Te=O("video",{id:"background-video",autoplay:"",loop:"",muted:""},[O("source",{src:_e,type:"video/mp4"})],-1),Le={class:"row"},qe=["innerHTML"],Re={__name:"MainLayout",setup(e){function a(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}return(t,n)=>{const o=ue("router-view");return A(),K(ze,{view:"hHh lpR fFf",class:"text-white"},{default:$(()=>[Te,C(he,{class:"head-custom text-white description"},{default:$(()=>[C(fe,null,{default:$(()=>[C(de,null,{default:$(()=>[O("div",Le,[C(ne,{style:{width:"50px"},fit:"scale-down",src:Se,onClick:a}),O("div",{class:"col-1",innerHTML:ce(oe),style:{"margin-left":"12px","font-size":"larger"}},null,8,qe)])]),_:1})]),_:1})]),_:1}),C(me,null,{default:$(()=>[(A(),K(o,{key:t.$route.fullPath}))]),_:1})]),_:1})}}};export{Re as default};
