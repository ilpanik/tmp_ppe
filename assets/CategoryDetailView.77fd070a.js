import{d as _,ap as A,l as k,m as R,aq as j,p as q,c as p,W as G,t as y,a as m,b as o,R as M,i as I,u as P,w as T,O as N,S as F,g as O,I as w,ar as E,as as Y,v as U,q as W,B as J,at as K,C as Q,au as X,M as Z,N as ee,f as ae,a8 as te,a9 as se,aa as oe,ab as x,ac as C,ad as c,ae as ne,ag as S,a6 as V,af as le,aj as v,ak as ie,ai as re,av as de,aw as ce,ax as ue,ay as pe,az as ve,aA as ge,aB as _e,aC as me,aD as fe,aE as xe,aF as he,al as be,am as ye,aG as we,an as Ce,aH as Se,aI as Ve}from"./index.cb487f5d.js";const g=Symbol.for("vuetify:v-expansion-panel"),ke=["default","accordion","inset","popout"],Ie=_({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>ke.includes(e)},readonly:Boolean,...A(),...k(),...R()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;j(e,g);const{themeClasses:a}=q(e),d=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return G({VExpansionPanel:{color:y(e,"color")},VExpansionPanelTitle:{readonly:y(e,"readonly")}}),m(()=>o(e.tag,{class:["v-expansion-panels",a.value,d.value]},s)),{}}}),B=O({color:String,expandIcon:{type:w,default:"$expand"},collapseIcon:{type:w,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean}),$=_({name:"VExpansionPanelTitle",directives:{Ripple:M},props:{...B()},setup(e,t){let{slots:s}=t;const a=I(g);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:d,backgroundColorStyles:u}=P(e,"color"),i=p(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return m(()=>{var n;return T(o("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value},d.value],style:u.value,type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[o("span",{class:"v-expansion-panel-title__overlay"},null),(n=s.default)==null?void 0:n.call(s,i.value),!e.hideActions&&o("span",{class:"v-expansion-panel-title__icon"},[s.actions?s.actions(i.value):o(F,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[N("ripple"),e.ripple]])}),{}}}),H=_({name:"VExpansionPanelText",props:{...E()},setup(e,t){let{slots:s}=t;const a=I(g);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:d,onAfterLeave:u}=Y(e,a.isSelected);return m(()=>{var i;return o(W,{onAfterLeave:u},{default:()=>[T(o("div",{class:"v-expansion-panel-text"},[s.default&&d.value&&o("div",{class:"v-expansion-panel-text__wrapper"},[(i=s.default)==null?void 0:i.call(s)])]),[[U,a.isSelected.value]])]})}),{}}}),Pe=_({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...J(),...K(),...E(),...Q(),...k(),...B()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:s}=t;const a=X(e,g),{backgroundColorClasses:d,backgroundColorStyles:u}=P(e,"bgColor"),{elevationClasses:i}=Z(e),{roundedClasses:n}=ee(e),h=p(()=>(a==null?void 0:a.disabled.value)||e.disabled),b=p(()=>a.group.items.value.reduce((r,l,f)=>(a.group.selected.value.includes(l.id)&&r.push(f),r),[])),D=p(()=>{const r=a.group.items.value.findIndex(l=>l.id===a.id);return!a.isSelected.value&&b.value.some(l=>l-r===1)}),z=p(()=>{const r=a.group.items.value.findIndex(l=>l.id===a.id);return!a.isSelected.value&&b.value.some(l=>l-r===-1)});return ae(g,a),m(()=>{var r;const l=!!(s.text||e.text),f=!!(s.title||e.title);return o(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":D.value,"v-expansion-panel--after-active":z.value,"v-expansion-panel--disabled":h.value},n.value,d.value],style:u.value,"aria-expanded":a.isSelected.value},{default:()=>[o("div",{class:["v-expansion-panel__shadow",...i.value]},null),f&&o($,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[s.title?s.title():e.title]}),l&&o(H,{key:"text",eager:e.eager},{default:()=>[s.text?s.text():e.text]}),(r=s.default)==null?void 0:r.call(s)]})}),{}}}),Te=se({name:"CategoryDetailView",inject:["categorie"],components:{HeaderCustom:le},data(){return{sidebar:{drawer:!1,group:null},panel:[],nomeCategoria:"",categoria:null,showButtonPercentage:"",footerHeight:""}},watch:{group(){this.drawer=!1}},created(){this.nomeCategoria=this.$route.params.nomeCategoria,console.log(this.nomeCategoria),this.categoria=this.currentCategory()[0],window.addEventListener("scroll",this.handleScroll),this.showButtonPercentage=this.$vuetify.display.height*30/100,this.footerHeight=document.querySelector(".v-footer").offsetHeight},destroyed(){window.removeEventListener("scroll",this.handleScroll)},computed:{},mounted(){},methods:{goBack(){this.$router.go(-1)},async goto(e){await this.$nextTick(),window.scrollTo({top:document.getElementById(e).offsetTop-60,left:0,behavior:"smooth"})},currentCategory(){return this.categorie.filter(e=>e.nome===this.nomeCategoria)},getSrc:function(e){const t=`/src/assets/images/${e}`;return Object.assign({"/src/assets/images/alleanza-verdi-sinistra.png":de,"/src/assets/images/azione-italia-viva.png":ce,"/src/assets/images/coalizione-centro-destra.png":ue,"/src/assets/images/forza-italia.png":pe,"/src/assets/images/fratelli-italia.png":ve,"/src/assets/images/impegno-civico.png":ge,"/src/assets/images/lega-nord.png":_e,"/src/assets/images/movimento-cinque-stelle.png":me,"/src/assets/images/noi-moderati.png":fe,"/src/assets/images/partito-democratico.png":xe,"/src/assets/images/piu-europa.png":he})[t].default},scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll(){let e=document.documentElement.scrollHeight;this.scrollpx=window.scrollY;const t=document.querySelector("#scrollToTop");this.scrollpx>this.showButtonPercentage&&t.classList.contains("hide")&&t.classList.remove("hide"),this.scrollpx<250&&t.classList.add("hide"),t.getBoundingClientRect().top+window.scrollY>=e-this.footerHeight?(t.style.bottom=this.footerHeight+16+"px",console.log("ok",t)):t.style.bottom=16+"px"}}}),L=e=>(Se("data-v-7782a8d8"),e=e(),Ve(),e),Ee={class:"d-flex justify-space-between top-view pa-4 events-none"},Be=L(()=>v("div",null,null,-1)),$e=be(" Torna indietro "),He={class:"font-weight-bold ml-4"},Le=["innerHTML"],De=L(()=>v("div",null,null,-1));function ze(e,t,s,a,d,u){const i=oe("HeaderCustom");return x(),C(V,null,[o(ne,{class:"relative pb-15"},{default:c(()=>[o(i,{data:this.categoria},null,8,["data"]),v("div",Ee,[Be,o(S,{"prepend-icon":"mdi-arrow-left",color:"grey-darken-4",class:"text-white ma-1 events-all",onClick:t[0]||(t[0]=n=>e.goBack())},{default:c(()=>[$e]),_:1})]),o(ie,null,{default:c(()=>[o(Ie,{modelValue:e.panel,"onUpdate:modelValue":t[1]||(t[1]=n=>e.panel=n),multiple:""},{default:c(()=>[(x(!0),C(V,null,re(e.categoria.partiti,(n,h)=>(x(),ye(Pe,null,{default:c(()=>[o($,{class:"sticky-button bg-secondary"},{default:c(()=>[v("div",null,[o(we,{height:"50px",width:"50px",src:e.getSrc(n.iconaPartito)},null,8,["src"])]),v("div",He,Ce(n.nome),1)]),_:2},1024),o(H,null,{default:c(()=>[v("div",{innerHTML:n.contenuto},null,8,Le)]),_:2},1024)]),_:2},1024))),256))]),_:1},8,["modelValue"]),De]),_:1})]),_:1}),o(S,{class:"hide fixed",id:"scrollToTop",color:"error",icon:"mdi-chevron-up",size:"large",onClick:t[2]||(t[2]=n=>e.scrollToTop())})],64)}const Re=te(Te,[["render",ze],["__scopeId","data-v-7782a8d8"]]);export{Re as default};
