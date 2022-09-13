import{d as ne,m as ae,p as le,u as te,t as I,c as g,a as W,b as d,e as H,i as oe,r as _,f as ie,g as pe,h as fe,o as se,j as st,k as rt,I as R,l as J,n as re,V as me,q as ut,w as Ne,v as ct,s as De,x as Oe,R as dt,y as we,z as Re,A as Fe,B as be,C as Se,D as vt,E as We,F as ft,G as q,H as ke,J as mt,K as Ge,L as Ye,M as Ce,N as _e,O as gt,P as ht,Q as Ie,S as Me,T as yt,U as ge,W as je,X as U,Y as Xe,Z as pt,_ as wt,$ as bt,a0 as St,a1 as kt,a2 as Ct,a3 as _t,a4 as Vt,a5 as $t,a6 as O,a7 as Pt,a8 as Lt,a9 as It,aa as Mt,ab as M,ac as A,ad as B,ae as Tt,af as Bt,ag as de,ah as Te,ai as ee,aj as Z,ak as At,al as Ue,am as ve,an as Be,ao as Ae}from"./index.e02865c5.js";const Ze=ne({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ae()},setup(e,l){let{attrs:n}=l;const{themeClasses:t}=le(e),{backgroundColorClasses:o,backgroundColorStyles:a}=te(I(e,"color")),i=g(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=H(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=H(e.thickness)),s});return W(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,o.value],style:[i.value,a.value],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}});const he=Symbol.for("vuetify:list");function qe(){const e=oe(he,{hasPrepend:_(!1),updateHasPrepend:()=>null}),l={hasPrepend:_(!1),updateHasPrepend:n=>{n&&(l.hasPrepend.value=n)}};return ie(he,l),e}function Ke(){return oe(he,null)}const xt={open:e=>{let{id:l,value:n,opened:t,parents:o}=e;if(n){const a=new Set;a.add(l);let i=o.get(l);for(;i!=null;)a.add(i),i=o.get(i);return a}else return t.delete(l),t},select:()=>null},Je={open:e=>{let{id:l,value:n,opened:t,parents:o}=e;if(n){let a=o.get(l);for(t.add(l);a!=null&&a!==l;)t.add(a),a=o.get(a);return t}else t.delete(l);return t},select:()=>null},Et={open:Je.open,select:e=>{let{id:l,value:n,opened:t,parents:o}=e;if(!n)return t;const a=[];let i=o.get(l);for(;i!=null;)a.push(i),i=o.get(i);return new Set(a)}},Ve=e=>{const l={select:n=>{let{id:t,value:o,selected:a}=n;if(e&&!o){const i=Array.from(a.entries()).reduce((s,f)=>{let[m,v]=f;return v==="on"?[...s,m]:s},[]);if(i.length===1&&i[0]===t)return a}return a.set(t,o?"on":"off"),a},in:(n,t,o)=>{let a=new Map;for(const i of n||[])a=l.select({id:i,value:!0,selected:new Map(a),children:t,parents:o});return a},out:n=>{const t=[];for(const[o,a]of n.entries())a==="on"&&t.push(o);return t}};return l},Qe=e=>{const l=Ve(e);return{select:t=>{let{selected:o,id:a,...i}=t;const s=o.has(a)?new Map([[a,o.get(a)]]):new Map;return l.select({...i,id:a,selected:s})},in:(t,o,a)=>{let i=new Map;return t!=null&&t.length&&(i=l.in(t.slice(0,1),o,a)),i},out:(t,o,a)=>l.out(t,o,a)}},Ht=e=>{const l=Ve(e);return{select:t=>{let{id:o,selected:a,children:i,...s}=t;return i.has(o)?a:l.select({id:o,selected:a,children:i,...s})},in:l.in,out:l.out}},Nt=e=>{const l=Qe(e);return{select:t=>{let{id:o,selected:a,children:i,...s}=t;return i.has(o)?a:l.select({id:o,selected:a,children:i,...s})},in:l.in,out:l.out}},Dt=e=>{const l={select:n=>{let{id:t,value:o,selected:a,children:i,parents:s}=n;const f=new Map(a),m=[t];for(;m.length;){const r=m.shift();a.set(r,o?"on":"off"),i.has(r)&&m.push(...i.get(r))}let v=s.get(t);for(;v;){const r=i.get(v),u=r.every(y=>a.get(y)==="on"),c=r.every(y=>!a.has(y)||a.get(y)==="off");a.set(v,u?"on":c?"off":"indeterminate"),v=s.get(v)}return e&&!o&&Array.from(a.entries()).reduce((u,c)=>{let[y,w]=c;return w==="on"?[...u,y]:u},[]).length===0?f:a},in:(n,t,o)=>{let a=new Map;for(const i of n||[])a=l.select({id:i,value:!0,selected:new Map(a),children:t,parents:o});return a},out:(n,t)=>{const o=[];for(const[a,i]of n.entries())i==="on"&&!t.has(a)&&o.push(a);return o}};return l},K=Symbol.for("vuetify:nested"),ze={id:_(),root:{register:()=>null,unregister:()=>null,parents:_(new Map),children:_(new Map),open:()=>null,select:()=>null,opened:_(new Set),selected:_(new Map),selectedValues:_([])}},Ot=pe({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),Rt=e=>{let l=!1;const n=_(new Map),t=_(new Map),o=fe(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Nt(e.mandatory);case"leaf":return Ht(e.mandatory);case"independent":return Ve(e.mandatory);case"single-independent":return Qe(e.mandatory);case"classic":default:return Dt(e.mandatory)}}),i=g(()=>{if(typeof e.openStrategy=="function")return e.openStrategy;switch(e.openStrategy){case"list":return Et;case"single":return xt;case"multiple":default:return Je}}),s=fe(e,"selected",e.selected,r=>a.value.in(r,n.value,t.value),r=>a.value.out(r,n.value,t.value));se(()=>{l=!0});function f(r){const u=[];let c=r;for(;c!=null;)u.unshift(c),c=t.value.get(c);return u}const m=st("nested"),v={id:_(),root:{opened:o,selected:s,selectedValues:g(()=>{const r=[];for(const[u,c]of s.value.entries())c==="on"&&r.push(u);return r}),register:(r,u,c)=>{u&&r!==u&&t.value.set(r,u),c&&n.value.set(r,[]),u!=null&&n.value.set(u,[...n.value.get(u)||[],r])},unregister:r=>{if(l)return;n.value.delete(r);const u=t.value.get(r);if(u){var c;const y=(c=n.value.get(u))!=null?c:[];n.value.set(u,y.filter(w=>w!==r))}t.value.delete(r),o.value.delete(r)},open:(r,u,c)=>{m.emit("click:open",{id:r,value:u,path:f(r),event:c});const y=i.value.open({id:r,value:u,opened:new Set(o.value),children:n.value,parents:t.value,event:c});y&&(o.value=y)},select:(r,u,c)=>{m.emit("click:select",{id:r,value:u,path:f(r),event:c});const y=a.value.select({id:r,value:u,selected:new Map(s.value),children:n.value,parents:t.value,event:c});y&&(s.value=y);const w=i.value.select({id:r,value:u,selected:new Map(s.value),opened:new Set(o.value),children:n.value,parents:t.value,event:c});w&&(o.value=w)},children:n,parents:t}};return ie(K,v),v.root},et=(e,l)=>{const n=oe(K,ze),t=g(()=>{var a;return(a=e.value)!=null?a:rt().toString()}),o={...n,id:t,open:(a,i)=>n.root.open(t.value,a,i),isOpen:g(()=>n.root.opened.value.has(t.value)),parent:g(()=>n.root.parents.value.get(t.value)),select:(a,i)=>n.root.select(t.value,a,i),isSelected:g(()=>n.root.selected.value.get(t.value)==="on"),isIndeterminate:g(()=>n.root.selected.value.get(t.value)==="indeterminate"),isLeaf:g(()=>!n.root.children.value.get(t.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(t.value,n.id.value,l),se(()=>{!n.isGroupActivator&&n.root.unregister(t.value)}),l&&ie(K,o),o},Ft=()=>{const e=oe(K,ze);ie(K,{...e,isGroupActivator:!0})},Wt=ne({name:"VListGroupActivator",setup(e,l){let{slots:n}=l;return Ft(),()=>{var t;return(t=n.default)==null?void 0:t.call(n)}}}),Gt=pe({activeColor:String,color:String,collapseIcon:{type:R,default:"$collapse"},expandIcon:{type:R,default:"$expand"},prependIcon:R,appendIcon:R,fluid:Boolean,subgroup:Boolean,value:null,...J()}),tt=re()({name:"VListGroup",props:{title:String,...Gt()},setup(e,l){let{slots:n}=l;const{isOpen:t,open:o}=et(I(e,"value"),!0),a=Ke(),i=m=>{o(!t.value,m)},s=g(()=>({onClick:i,class:"v-list-group__header"})),f=g(()=>t.value?e.collapseIcon:e.expandIcon);return W(()=>{var m;return d(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup}]},{default:()=>[n.activator&&d(me,{defaults:{VListItem:{active:t.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&f.value,appendIcon:e.appendIcon||!e.subgroup&&f.value,title:e.title,value:e.value}}},{default:()=>[d(Wt,null,{default:()=>[n.activator({props:s.value,isOpen:t})]})]}),d(ut,null,{default:()=>[Ne(d("div",{class:"v-list-group__items"},[(m=n.default)==null?void 0:m.call(n)]),[[ct,t.value]])]})]})}),{}}});function Yt(e){return De(e,Object.keys(tt.props))}const jt=Oe("v-list-item-subtitle"),ye=Oe("v-list-item-title"),F=re()({name:"VListItem",directives:{Ripple:dt},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...we(),...Re(),...Fe(),...be(),...Se(),...vt(),...J(),...ae(),...We({variant:"text"})},setup(e,l){let{attrs:n,slots:t}=l;const o=ft(e,n),a=g(()=>{var C;return(C=e.value)!=null?C:o.href.value}),{select:i,isSelected:s,isIndeterminate:f,isGroupActivator:m,root:v,parent:r}=et(a,!1),u=Ke(),c=g(()=>{var C;return e.active!==!1&&(e.active||((C=o.isExactActive)==null?void 0:C.value)||s.value)}),y=g(()=>e.link!==!1&&o.isLink.value),w=g(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value||e.value!=null&&!!u)),$=g(()=>e.rounded||e.nav),x=g(()=>{var C;return{color:c.value&&(C=e.activeColor)!=null?C:e.color,variant:e.variant}});q(()=>{var C;return(C=o.isExactActive)==null?void 0:C.value},C=>{C&&r.value!=null&&v.open(r.value,!0)},{immediate:!0});const{themeClasses:S}=le(e),{borderClasses:h}=ke(e),{colorClasses:E,colorStyles:p,variantClasses:b}=mt(x),{densityClasses:k}=Ge(e),{dimensionStyles:V}=Ye(e),{elevationClasses:T}=Ce(e),{roundedClasses:P}=_e($),Q=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=g(()=>({isActive:c.value,select:i,isSelected:s.value,isIndeterminate:f.value}));return W(()=>{var C,G,z,L,Y,j,X;const ue=y.value?"a":e.tag,$e=!u||s.value||c.value,lt=t.title||e.title,ot=t.subtitle||e.subtitle,it=!!(t.append||e.appendAvatar||e.appendIcon),ce=!!(t.prepend||e.prependAvatar||e.prependIcon);return u==null||u.updateHasPrepend(ce),Ne(d(ue,{class:["v-list-item",{"v-list-item--active":c.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ce&&(u==null?void 0:u.hasPrepend.value),[`${e.activeClass}`]:c.value},S.value,h.value,$e?E.value:void 0,k.value,T.value,Q.value,P.value,b.value],style:[$e?p.value:void 0,V.value],href:o.href.value,tabindex:w.value?0:void 0,onClick:w.value&&(Pe=>{var Le;m||((Le=o.navigate)==null||Le.call(o,Pe),e.value!=null&&i(!s.value,Pe))})},{default:()=>[ht(w.value||c.value,"v-list-item"),ce&&d(me,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[d("div",{class:"v-list-item__prepend"},[e.prependAvatar&&d(Ie,{key:"prepend-avatar"},null),e.prependIcon&&d(Me,{key:"prepend-icon"},null),(C=t.prepend)==null?void 0:C.call(t,N.value)])]}),d("div",{class:"v-list-item__content"},[lt&&d(ye,{key:"title"},{default:()=>[(G=(z=t.title)==null?void 0:z.call(t,{title:e.title}))!=null?G:e.title]}),ot&&d(jt,{key:"subtitle"},{default:()=>[(L=(Y=t.subtitle)==null?void 0:Y.call(t,{subtitle:e.subtitle}))!=null?L:e.subtitle]}),(j=t.default)==null?void 0:j.call(t,N.value)]),it&&d(me,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[d("div",{class:"v-list-item__append"},[(X=t.append)==null?void 0:X.call(t,N.value),e.appendIcon&&d(Me,{key:"append-icon"},null),e.appendAvatar&&d(Ie,{key:"append-avatar"},null)])]})]}),[[gt("ripple"),w.value]])}),{}}}),Xt=ne({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...J()},setup(e,l){let{slots:n}=l;const{textColorClasses:t,textColorStyles:o}=yt(I(e,"color"));return W(()=>{var a,i;const s=!!(n.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value],style:{textColorStyles:o}},{default:()=>[s&&d("div",{class:"v-list-subheader__text"},[(a=(i=n.default)==null?void 0:i.call(n))!=null?a:e.title])]})}),{}}}),nt=re()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:n}=l;return qe(),()=>{var t,o,a;return(t=(o=n.default)==null?void 0:o.call(n))!=null?t:(a=e.items)==null?void 0:a.map(i=>{let{children:s,props:f,type:m,raw:v}=i;if(m==="divider"){var r,u;return(r=(u=n.divider)==null?void 0:u.call(n,{props:f}))!=null?r:d(Ze,f,null)}if(m==="subheader"){var c,y;return(c=(y=n.subheader)==null?void 0:y.call(n,{props:f}))!=null?c:d(Xt,f,{default:n.subheader})}const w={subtitle:n.subtitle?S=>{var h;return(h=n.subtitle)==null?void 0:h.call(n,{...S,item:v})}:void 0,prepend:n.prepend?S=>{var h;return(h=n.prepend)==null?void 0:h.call(n,{...S,item:v})}:void 0,append:n.append?S=>{var h;return(h=n.append)==null?void 0:h.call(n,{...S,item:v})}:void 0,default:n.default?S=>{var h;return(h=n.default)==null?void 0:h.call(n,{...S,item:v})}:void 0,title:n.title?S=>{var h;return(h=n.title)==null?void 0:h.call(n,{...S,item:v})}:void 0},[$,x]=Yt(f);return s?d(tt,ge({value:f==null?void 0:f.value},$),{activator:S=>{let{props:h}=S;return n.header?n.header({...f,...h}):d(F,ge(f,h),w)},default:()=>d(nt,{items:s},n)}):n.item?n.item(f):d(F,f,w)})}}}),Ut=pe({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Zt(e,l){const n=U(l,e.itemType,"item"),t=typeof l=="string"?l:U(l,e.itemTitle),o=U(l,e.itemValue,void 0),a=U(l,e.itemChildren),i=e.itemProps===!0?De(l,["children"])[1]:U(l,e.itemProps),s={title:t,value:o,...i};return{type:n,title:s.title,value:s.value,props:s,children:n==="item"&&a?at(e,a):void 0,raw:l}}function at(e,l){const n=[];for(const t of l)n.push(Zt(e,t));return n}function qt(e){return{items:g(()=>at(e,e.items))}}const xe=re()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Ot({selectStrategy:"single-leaf",openStrategy:"list"}),...we(),...Re(),...Fe(),...be(),itemType:{type:String,default:"type"},...Ut(),...Se(),...J(),...ae(),...We({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:n}=l;const{items:t}=qt(e),{themeClasses:o}=le(e),{backgroundColorClasses:a,backgroundColorStyles:i}=te(I(e,"bgColor")),{borderClasses:s}=ke(e),{densityClasses:f}=Ge(e),{dimensionStyles:m}=Ye(e),{elevationClasses:v}=Ce(e),{roundedClasses:r}=_e(e),{open:u,select:c}=Rt(e),y=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=I(e,"activeColor"),$=I(e,"color");return qe(),je({VListGroup:{activeColor:w,color:$},VListItem:{activeClass:I(e,"activeClass"),activeColor:w,color:$,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}}),W(()=>d(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,a.value,s.value,f.value,v.value,y.value,r.value],style:[i.value,m.value]},{default:()=>[d(nt,{items:t.value},n)]})),{open:u,select:c}}});function Kt(e){let{rootEl:l,isSticky:n,layoutItemStyles:t}=e;const o=_(!1),a=_(0),i=g(()=>{const m=typeof o.value=="boolean"?"top":o.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[m]:H(a.value)}:{top:t.value.top}]});Xe(()=>{q(n,m=>{m?window.addEventListener("scroll",f,{passive:!0}):window.removeEventListener("scroll",f)},{immediate:!0})}),se(()=>{document.removeEventListener("scroll",f)});let s=0;function f(){var m;const v=s>window.scrollY?"up":"down",r=l.value.getBoundingClientRect(),u=parseFloat((m=t.value.top)!=null?m:0),c=window.scrollY-Math.max(0,a.value-u),y=r.height+Math.max(a.value,u)-window.scrollY-window.innerHeight;r.height<window.innerHeight-u?(o.value="top",a.value=u):v==="up"&&o.value==="bottom"||v==="down"&&o.value==="top"?(a.value=window.scrollY+r.top,o.value=!0):v==="down"&&y<=0?(a.value=0,o.value="bottom"):v==="up"&&c<=0&&(a.value=r.top+c,o.value="top"),s=window.scrollY}return{isStuck:o,stickyStyles:i}}const Jt=100,Qt=20;function Ee(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function He(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const t=Ee(l),o=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);l+=(o-t)*Math.abs(o),n===e.length-1&&(l*=.5)}return Ee(l)*1e3}function zt(){const e={};function l(o){Array.from(o.changedTouches).forEach(a=>{var i;((i=e[a.identifier])!=null?i:e[a.identifier]=new pt(Qt)).push([o.timeStamp,a])})}function n(o){Array.from(o.changedTouches).forEach(a=>{delete e[a.identifier]})}function t(o){var a;const i=(a=e[o])==null?void 0:a.values().reverse();if(!i)throw new Error(`No samples for touch id ${o}`);const s=i[0],f=[],m=[];for(const v of i){if(s[0]-v[0]>Jt)break;f.push({t:v[0],d:v[1].clientX}),m.push({t:v[0],d:v[1].clientY})}return{x:He(f),y:He(m),get direction(){const{x:v,y:r}=this,[u,c]=[Math.abs(v),Math.abs(r)];return u>c&&v>=0?"right":u>c&&v<=0?"left":c>u&&r>=0?"down":c>u&&r<=0?"up":en()}}}return{addMovement:l,endTouch:n,getVelocity:t}}function en(){throw new Error}function tn(e){let{isActive:l,isTemporary:n,width:t,touchless:o,position:a}=e;Xe(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",h,{passive:!0})}),se(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",h)});const i=g(()=>a.value!=="bottom"),{addMovement:s,endTouch:f,getVelocity:m}=zt();let v=!1;const r=_(!1),u=_(0),c=_(0);let y;function w(p,b){return(a.value==="left"?p:a.value==="right"?document.documentElement.clientWidth-p:a.value==="bottom"?document.documentElement.clientHeight-p:D())-(b?t.value:0)}function $(p){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const k=a.value==="left"?(p-c.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-p-c.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-p-c.value)/t.value:D();return b?Math.max(0,Math.min(1,k)):k}function x(p){if(o.value)return;const b=p.changedTouches[0].clientX,k=p.changedTouches[0].clientY,V=25,T=a.value==="left"?b<V:a.value==="right"?b>document.documentElement.clientWidth-V:a.value==="bottom"?k>document.documentElement.clientHeight-V:D(),P=l.value&&(a.value==="left"?b<t.value:a.value==="right"?b>document.documentElement.clientWidth-t.value:a.value==="bottom"?k>document.documentElement.clientHeight-t.value:D());(T||P||l.value&&n.value)&&(v=!0,y=[b,k],c.value=w(i.value?b:k,l.value),u.value=$(i.value?b:k),f(p),s(p))}function S(p){const b=p.changedTouches[0].clientX,k=p.changedTouches[0].clientY;if(v){if(!p.cancelable){v=!1;return}const T=Math.abs(b-y[0]),P=Math.abs(k-y[1]);(i.value?T>P&&T>3:P>T&&P>3)?(r.value=!0,v=!1):(i.value?P:T)>3&&(v=!1)}if(!r.value)return;p.preventDefault(),s(p);const V=$(i.value?b:k,!1);u.value=Math.max(0,Math.min(1,V)),V>1?c.value=w(i.value?b:k,!0):V<0&&(c.value=w(i.value?b:k,!1))}function h(p){if(v=!1,!r.value)return;s(p),r.value=!1;const b=m(p.changedTouches[0].identifier),k=Math.abs(b.x),V=Math.abs(b.y);(i.value?k>V&&k>400:V>k&&V>3)?l.value=b.direction===({left:"right",right:"left",bottom:"up"}[a.value]||D()):l.value=u.value>.5}const E=g(()=>r.value?{transform:a.value==="left"?`translateX(calc(-100% + ${u.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${u.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${u.value*t.value}px))`:D(),transition:"none"}:void 0);return{isDragging:r,dragProgress:u,dragStyles:E}}function D(){throw new Error}const nn=["start","end","left","right","bottom"],an=ne({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>nn.includes(e)},sticky:Boolean,...we(),...be(),...wt(),...Se(),...J({tag:"nav"}),...ae()},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:n,slots:t}=l;const{isRtl:o}=bt(),{themeClasses:a}=le(e),{borderClasses:i}=ke(e),{backgroundColorClasses:s,backgroundColorStyles:f}=te(I(e,"color")),{elevationClasses:m}=Ce(e),{mobile:v}=St(),{roundedClasses:r}=_e(e),u=kt(),c=fe(e,"modelValue",null,L=>!!L),{ssrBootStyles:y}=Ct(),w=_(),$=_(!1),x=g(()=>e.rail&&e.expandOnHover&&$.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),S=g(()=>Pt(e.location,o.value)),h=g(()=>!e.permanent&&(v.value||e.temporary)),E=g(()=>e.sticky&&!h.value&&S.value!=="bottom");e.disableResizeWatcher||q(h,L=>!e.permanent&&(c.value=!L)),!e.disableRouteWatcher&&u&&q(u.currentRoute,()=>h.value&&(c.value=!1)),q(()=>e.permanent,L=>{L&&(c.value=!0)}),_t(()=>{e.modelValue!=null||h.value||(c.value=e.permanent||!v.value)});const{isDragging:p,dragProgress:b,dragStyles:k}=tn({isActive:c,isTemporary:h,width:x,touchless:I(e,"touchless"),position:S}),V=g(()=>{const L=h.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value;return p.value?L*b.value:L}),{layoutItemStyles:T,layoutRect:P,layoutItemScrimStyles:Q}=Vt({id:e.name,order:g(()=>parseInt(e.order,10)),position:S,layoutSize:V,elementSize:x,active:g(()=>c.value||p.value),disableTransitions:g(()=>p.value),absolute:g(()=>e.absolute||E.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:C}=Kt({rootEl:w,isSticky:E,layoutItemStyles:T}),G=te(g(()=>typeof e.scrim=="string"?e.scrim:null)),z=g(()=>({...p.value?{opacity:b.value*.2,transition:"none"}:void 0,...P.value?{left:H(P.value.left),right:H(P.value.right),top:H(P.value.top),bottom:H(P.value.bottom)}:void 0,...Q.value}));return je({VList:{bgColor:"transparent"}}),W(()=>{var L,Y,j,X;const ue=t.image||e.image;return d(O,null,[d(e.tag,ge({ref:w,onMouseenter:()=>$.value=!0,onMouseleave:()=>$.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":$.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":h.value,"v-navigation-drawer--active":c.value,"v-navigation-drawer--sticky":E.value},a.value,s.value,i.value,m.value,r.value],style:[f.value,T.value,k.value,y.value,C.value]},n),{default:()=>[ue&&d("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(L=t.image)==null?void 0:L.call(t,{image:e.image}):d("img",{src:e.image,alt:""},null)]),t.prepend&&d("div",{class:"v-navigation-drawer__prepend"},[(Y=t.prepend)==null?void 0:Y.call(t)]),d("div",{class:"v-navigation-drawer__content"},[(j=t.default)==null?void 0:j.call(t)]),t.append&&d("div",{class:"v-navigation-drawer__append"},[(X=t.append)==null?void 0:X.call(t)])]}),d($t,{name:"fade-transition"},{default:()=>[h.value&&(p.value||c.value)&&!!e.scrim&&d("div",{class:["v-navigation-drawer__scrim",G.backgroundColorClasses.value],style:[z.value,G.backgroundColorStyles.value],onClick:()=>c.value=!1},null)]})])}),{isStuck:N}}}),ln=It({name:"FactionDetailView",inject:["partiti"],components:{HeaderCustom:Bt},data(){return{sidebar:{drawer:!1,group:null},nomePartito:"",faction:null,window:{height:null,width:null}}},watch:{group(){this.drawer=!1}},created(){this.nomePartito=this.$route.params.nomePartito,console.log(this.nomePartito),this.faction=this.currentFaction()[0],this.window.height=this.$vuetify.display.height,this.window.width=this.$vuetify.display.width,console.log(this.window)},computed:{},mounted(){this.nomePartito=this.$route.params.nomePartito,console.log(this.nomePartito),console.log(this.test)},methods:{goBack(){this.$router.go(-1)},async goto(e){await this.$nextTick(),window.scrollTo({top:document.getElementById(e).offsetTop-60,left:0,behavior:"smooth"})},currentFaction(e){return console.log(this.partiti),console.log(this.nomePartito),console.log(this.nomePartito.split("_").join(" ")),console.log(this.partiti.filter(l=>l.nomePartito===this.nomePartito.split("_").join(" "))),this.partiti.filter(l=>l.nomePartito===this.nomePartito.split("_").join(" "))},testFaction(){console.log(this.currentFaction()[0].programmaElettorale.sezioni[0].contenuto)}}}),on={class:"d-flex justify-space-between top-view pa-4"},sn=Ue(" Sezioni "),rn=Ue(" Torna indietro "),un={class:"mb-12"},cn={key:0,class:"bg-yellow"},dn=["id","innerHTML"],vn=["id","innerHTML"],fn=["innerHTML"],mn={key:1,class:"bg-red"},gn=["id","innerHTML"],hn=["innerHTML"];function yn(e,l,n,t,o,a){const i=Mt("HeaderCustom");return M(),A(O,null,[d(an,{modelValue:e.sidebar.drawer,"onUpdate:modelValue":l[1]||(l[1]=s=>e.sidebar.drawer=s),bottom:"",temporary:"",class:"sidebar-sections-partiti"},{default:B(()=>[d(F,{title:"Sezioni",nav:""},{append:B(()=>[d(de,{variant:"text",icon:"mdi-chevron-left",onClick:l[0]||(l[0]=Te(s=>e.sidebar.drawer=!e.sidebar.drawer,["stop"]))})]),_:1}),d(Ze),d(xe,{class:"sidebar-list-primary"},{default:B(()=>[d(F,{color:"primary"},{default:B(()=>[(M(!0),A(O,null,ee(e.faction.programmaElettorale.sezioni,(s,f)=>(M(),ve(F,{key:f,value:s.titolo,rounded:"shaped"},{default:B(()=>[d(ye,{onClick:m=>{e.goto(s.titolo),e.sidebar.drawer=!e.sidebar.drawer},textContent:Be(s.titolo)},null,8,["onClick","textContent"]),s.sottotitoli.length>0?(M(),ve(xe,{key:0},{default:B(()=>[(M(!0),A(O,null,ee(s.sottotitoli,(m,v)=>(M(),ve(F,{key:v},{default:B(()=>[d(ye,{onClick:r=>{e.goto(m.titolo),e.sidebar.drawer=!e.sidebar.drawer},textContent:Be(m.titolo)},null,8,["onClick","textContent"])]),_:2},1024))),128))]),_:2},1024)):Ae("",!0)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),d(Tt,{class:"relative"},{default:B(()=>[d(i,{data:this.faction},null,8,["data"]),Z("div",on,[d(de,{"prepend-icon":"mdi-format-list-bulleted",class:"ma-1",onClick:l[2]||(l[2]=Te(s=>e.sidebar.drawer=!e.sidebar.drawer,["stop"]))},{default:B(()=>[sn]),_:1}),d(de,{"prepend-icon":"mdi-arrow-left",color:"grey-darken-4",class:"text-white ma-1",onClick:l[3]||(l[3]=s=>e.goBack())},{default:B(()=>[rn]),_:1})]),d(At,null,{default:B(()=>[(M(!0),A(O,null,ee(e.faction.programmaElettorale.sezioni,s=>(M(),A("div",un,[s.sottotitoli.length>0?(M(),A("div",cn,[(M(!0),A(O,null,ee(s.sottotitoli,(f,m)=>(M(),A("div",null,[m===0?(M(),A("div",{key:0,id:s.titolo,innerHTML:s.titolo,class:"text-h4 text-center font-weight-bold mb-4"},null,8,dn)):Ae("",!0),Z("div",{id:f.titolo,innerHTML:f.titolo,class:"text-h4 text-center font-weight-bold mb-4"},null,8,vn),Z("div",{innerHTML:f.contenuto,class:"mb-4"},null,8,fn)]))),256))])):(M(),A("div",mn,[Z("div",{id:s.titolo,innerHTML:s.titolo,class:"text-h4 text-center font-weight-bold mb-4"},null,8,gn),Z("div",{innerHTML:s.contenuto},null,8,hn)]))]))),256))]),_:1})]),_:1})],64)}const wn=Lt(ln,[["render",yn],["__scopeId","data-v-ddead9db"]]);export{wn as default};
