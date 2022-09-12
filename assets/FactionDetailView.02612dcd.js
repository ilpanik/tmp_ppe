import{d as ne,m as ae,p as le,u as te,t as L,c as g,a as W,b as d,e as N,i as oe,r as C,f as ie,g as pe,h as fe,o as se,j as it,k as st,I as R,l as K,n as re,V as me,q as rt,w as He,v as ut,s as Ne,x as De,R as ct,y as be,z as Fe,A as Oe,B as we,C as Se,D as dt,E as Re,F as vt,G as Z,H as ke,J as ft,K as We,L as Ge,M as _e,N as Ce,O as mt,P as gt,Q as Le,S as Me,T as ht,U as ge,W as Ye,X,Y as je,Z as yt,_ as pt,$ as bt,a0 as wt,a1 as St,a2 as kt,a3 as _t,a4 as Ct,a5 as Vt,a6 as O,a7 as Pt,a8 as $t,a9 as It,aa as Lt,ab as T,ac as A,ad as B,ae as Mt,af as Tt,ag as de,ah as Te,ai as ee,aj as U,ak as Bt,al as ze,am as ve,an as Be,ao as xt}from"./index.2b486f78.js";const Xe=ne({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ae()},setup(e,l){let{attrs:n}=l;const{themeClasses:t}=le(e),{backgroundColorClasses:o,backgroundColorStyles:a}=te(L(e,"color")),i=g(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=N(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=N(e.thickness)),s});return W(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,o.value],style:[i.value,a.value],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}});const he=Symbol.for("vuetify:list");function Ue(){const e=oe(he,{hasPrepend:C(!1),updateHasPrepend:()=>null}),l={hasPrepend:C(!1),updateHasPrepend:n=>{n&&(l.hasPrepend.value=n)}};return ie(he,l),e}function Ze(){return oe(he,null)}const At={open:e=>{let{id:l,value:n,opened:t,parents:o}=e;if(n){const a=new Set;a.add(l);let i=o.get(l);for(;i!=null;)a.add(i),i=o.get(i);return a}else return t.delete(l),t},select:()=>null},qe={open:e=>{let{id:l,value:n,opened:t,parents:o}=e;if(n){let a=o.get(l);for(t.add(l);a!=null&&a!==l;)t.add(a),a=o.get(a);return t}else t.delete(l);return t},select:()=>null},Et={open:qe.open,select:e=>{let{id:l,value:n,opened:t,parents:o}=e;if(!n)return t;const a=[];let i=o.get(l);for(;i!=null;)a.push(i),i=o.get(i);return new Set(a)}},Ve=e=>{const l={select:n=>{let{id:t,value:o,selected:a}=n;if(e&&!o){const i=Array.from(a.entries()).reduce((s,f)=>{let[m,v]=f;return v==="on"?[...s,m]:s},[]);if(i.length===1&&i[0]===t)return a}return a.set(t,o?"on":"off"),a},in:(n,t,o)=>{let a=new Map;for(const i of n||[])a=l.select({id:i,value:!0,selected:new Map(a),children:t,parents:o});return a},out:n=>{const t=[];for(const[o,a]of n.entries())a==="on"&&t.push(o);return t}};return l},Ke=e=>{const l=Ve(e);return{select:t=>{let{selected:o,id:a,...i}=t;const s=o.has(a)?new Map([[a,o.get(a)]]):new Map;return l.select({...i,id:a,selected:s})},in:(t,o,a)=>{let i=new Map;return t!=null&&t.length&&(i=l.in(t.slice(0,1),o,a)),i},out:(t,o,a)=>l.out(t,o,a)}},Ht=e=>{const l=Ve(e);return{select:t=>{let{id:o,selected:a,children:i,...s}=t;return i.has(o)?a:l.select({id:o,selected:a,children:i,...s})},in:l.in,out:l.out}},Nt=e=>{const l=Ke(e);return{select:t=>{let{id:o,selected:a,children:i,...s}=t;return i.has(o)?a:l.select({id:o,selected:a,children:i,...s})},in:l.in,out:l.out}},Dt=e=>{const l={select:n=>{let{id:t,value:o,selected:a,children:i,parents:s}=n;const f=new Map(a),m=[t];for(;m.length;){const r=m.shift();a.set(r,o?"on":"off"),i.has(r)&&m.push(...i.get(r))}let v=s.get(t);for(;v;){const r=i.get(v),u=r.every(y=>a.get(y)==="on"),c=r.every(y=>!a.has(y)||a.get(y)==="off");a.set(v,u?"on":c?"off":"indeterminate"),v=s.get(v)}return e&&!o&&Array.from(a.entries()).reduce((u,c)=>{let[y,b]=c;return b==="on"?[...u,y]:u},[]).length===0?f:a},in:(n,t,o)=>{let a=new Map;for(const i of n||[])a=l.select({id:i,value:!0,selected:new Map(a),children:t,parents:o});return a},out:(n,t)=>{const o=[];for(const[a,i]of n.entries())i==="on"&&!t.has(a)&&o.push(a);return o}};return l},q=Symbol.for("vuetify:nested"),Je={id:C(),root:{register:()=>null,unregister:()=>null,parents:C(new Map),children:C(new Map),open:()=>null,select:()=>null,opened:C(new Set),selected:C(new Map),selectedValues:C([])}},Ft=pe({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),Ot=e=>{let l=!1;const n=C(new Map),t=C(new Map),o=fe(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Nt(e.mandatory);case"leaf":return Ht(e.mandatory);case"independent":return Ve(e.mandatory);case"single-independent":return Ke(e.mandatory);case"classic":default:return Dt(e.mandatory)}}),i=g(()=>{if(typeof e.openStrategy=="function")return e.openStrategy;switch(e.openStrategy){case"list":return Et;case"single":return At;case"multiple":default:return qe}}),s=fe(e,"selected",e.selected,r=>a.value.in(r,n.value,t.value),r=>a.value.out(r,n.value,t.value));se(()=>{l=!0});function f(r){const u=[];let c=r;for(;c!=null;)u.unshift(c),c=t.value.get(c);return u}const m=it("nested"),v={id:C(),root:{opened:o,selected:s,selectedValues:g(()=>{const r=[];for(const[u,c]of s.value.entries())c==="on"&&r.push(u);return r}),register:(r,u,c)=>{u&&r!==u&&t.value.set(r,u),c&&n.value.set(r,[]),u!=null&&n.value.set(u,[...n.value.get(u)||[],r])},unregister:r=>{if(l)return;n.value.delete(r);const u=t.value.get(r);if(u){var c;const y=(c=n.value.get(u))!=null?c:[];n.value.set(u,y.filter(b=>b!==r))}t.value.delete(r),o.value.delete(r)},open:(r,u,c)=>{m.emit("click:open",{id:r,value:u,path:f(r),event:c});const y=i.value.open({id:r,value:u,opened:new Set(o.value),children:n.value,parents:t.value,event:c});y&&(o.value=y)},select:(r,u,c)=>{m.emit("click:select",{id:r,value:u,path:f(r),event:c});const y=a.value.select({id:r,value:u,selected:new Map(s.value),children:n.value,parents:t.value,event:c});y&&(s.value=y);const b=i.value.select({id:r,value:u,selected:new Map(s.value),opened:new Set(o.value),children:n.value,parents:t.value,event:c});b&&(o.value=b)},children:n,parents:t}};return ie(q,v),v.root},Qe=(e,l)=>{const n=oe(q,Je),t=g(()=>{var a;return(a=e.value)!=null?a:st().toString()}),o={...n,id:t,open:(a,i)=>n.root.open(t.value,a,i),isOpen:g(()=>n.root.opened.value.has(t.value)),parent:g(()=>n.root.parents.value.get(t.value)),select:(a,i)=>n.root.select(t.value,a,i),isSelected:g(()=>n.root.selected.value.get(t.value)==="on"),isIndeterminate:g(()=>n.root.selected.value.get(t.value)==="indeterminate"),isLeaf:g(()=>!n.root.children.value.get(t.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(t.value,n.id.value,l),se(()=>{!n.isGroupActivator&&n.root.unregister(t.value)}),l&&ie(q,o),o},Rt=()=>{const e=oe(q,Je);ie(q,{...e,isGroupActivator:!0})},Wt=ne({name:"VListGroupActivator",setup(e,l){let{slots:n}=l;return Rt(),()=>{var t;return(t=n.default)==null?void 0:t.call(n)}}}),Gt=pe({activeColor:String,color:String,collapseIcon:{type:R,default:"$collapse"},expandIcon:{type:R,default:"$expand"},prependIcon:R,appendIcon:R,fluid:Boolean,subgroup:Boolean,value:null,...K()}),et=re()({name:"VListGroup",props:{title:String,...Gt()},setup(e,l){let{slots:n}=l;const{isOpen:t,open:o}=Qe(L(e,"value"),!0),a=Ze(),i=m=>{o(!t.value,m)},s=g(()=>({onClick:i,class:"v-list-group__header"})),f=g(()=>t.value?e.collapseIcon:e.expandIcon);return W(()=>{var m;return d(e.tag,{class:["v-list-group",{"v-list-group--prepend":a==null?void 0:a.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup}]},{default:()=>[n.activator&&d(me,{defaults:{VListItem:{active:t.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&f.value,appendIcon:e.appendIcon||!e.subgroup&&f.value,title:e.title,value:e.value}}},{default:()=>[d(Wt,null,{default:()=>[n.activator({props:s.value,isOpen:t})]})]}),d(rt,null,{default:()=>[He(d("div",{class:"v-list-group__items"},[(m=n.default)==null?void 0:m.call(n)]),[[ut,t.value]])]})]})}),{}}});function Yt(e){return Ne(e,Object.keys(et.props))}const jt=De("v-list-item-subtitle"),ye=De("v-list-item-title"),H=re()({name:"VListItem",directives:{Ripple:ct},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...be(),...Fe(),...Oe(),...we(),...Se(),...dt(),...K(),...ae(),...Re({variant:"text"})},setup(e,l){let{attrs:n,slots:t}=l;const o=vt(e,n),a=g(()=>{var _;return(_=e.value)!=null?_:o.href.value}),{select:i,isSelected:s,isIndeterminate:f,isGroupActivator:m,root:v,parent:r}=Qe(a,!1),u=Ze(),c=g(()=>{var _;return e.active!==!1&&(e.active||((_=o.isExactActive)==null?void 0:_.value)||s.value)}),y=g(()=>e.link!==!1&&o.isLink.value),b=g(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value||e.value!=null&&!!u)),P=g(()=>e.rounded||e.nav),x=g(()=>{var _;return{color:c.value&&(_=e.activeColor)!=null?_:e.color,variant:e.variant}});Z(()=>{var _;return(_=o.isExactActive)==null?void 0:_.value},_=>{_&&r.value!=null&&v.open(r.value,!0)},{immediate:!0});const{themeClasses:S}=le(e),{borderClasses:h}=ke(e),{colorClasses:E,colorStyles:p,variantClasses:w}=ft(x),{densityClasses:k}=We(e),{dimensionStyles:V}=Ge(e),{elevationClasses:M}=_e(e),{roundedClasses:$}=Ce(P),J=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),D=g(()=>({isActive:c.value,select:i,isSelected:s.value,isIndeterminate:f.value}));return W(()=>{var _,G,Q,I,Y,j,z;const ue=y.value?"a":e.tag,Pe=!u||s.value||c.value,at=t.title||e.title,lt=t.subtitle||e.subtitle,ot=!!(t.append||e.appendAvatar||e.appendIcon),ce=!!(t.prepend||e.prependAvatar||e.prependIcon);return u==null||u.updateHasPrepend(ce),He(d(ue,{class:["v-list-item",{"v-list-item--active":c.value,"v-list-item--disabled":e.disabled,"v-list-item--link":b.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ce&&(u==null?void 0:u.hasPrepend.value),[`${e.activeClass}`]:c.value},S.value,h.value,Pe?E.value:void 0,k.value,M.value,J.value,$.value,w.value],style:[Pe?p.value:void 0,V.value],href:o.href.value,tabindex:b.value?0:void 0,onClick:b.value&&($e=>{var Ie;m||((Ie=o.navigate)==null||Ie.call(o,$e),e.value!=null&&i(!s.value,$e))})},{default:()=>[gt(b.value||c.value,"v-list-item"),ce&&d(me,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[d("div",{class:"v-list-item__prepend"},[e.prependAvatar&&d(Le,{key:"prepend-avatar"},null),e.prependIcon&&d(Me,{key:"prepend-icon"},null),(_=t.prepend)==null?void 0:_.call(t,D.value)])]}),d("div",{class:"v-list-item__content"},[at&&d(ye,{key:"title"},{default:()=>[(G=(Q=t.title)==null?void 0:Q.call(t,{title:e.title}))!=null?G:e.title]}),lt&&d(jt,{key:"subtitle"},{default:()=>[(I=(Y=t.subtitle)==null?void 0:Y.call(t,{subtitle:e.subtitle}))!=null?I:e.subtitle]}),(j=t.default)==null?void 0:j.call(t,D.value)]),ot&&d(me,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[d("div",{class:"v-list-item__append"},[(z=t.append)==null?void 0:z.call(t,D.value),e.appendIcon&&d(Me,{key:"append-icon"},null),e.appendAvatar&&d(Le,{key:"append-avatar"},null)])]})]}),[[mt("ripple"),b.value]])}),{}}}),zt=ne({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...K()},setup(e,l){let{slots:n}=l;const{textColorClasses:t,textColorStyles:o}=ht(L(e,"color"));return W(()=>{var a,i;const s=!!(n.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value],style:{textColorStyles:o}},{default:()=>[s&&d("div",{class:"v-list-subheader__text"},[(a=(i=n.default)==null?void 0:i.call(n))!=null?a:e.title])]})}),{}}}),tt=re()({name:"VListChildren",props:{items:Array},setup(e,l){let{slots:n}=l;return Ue(),()=>{var t,o,a;return(t=(o=n.default)==null?void 0:o.call(n))!=null?t:(a=e.items)==null?void 0:a.map(i=>{let{children:s,props:f,type:m,raw:v}=i;if(m==="divider"){var r,u;return(r=(u=n.divider)==null?void 0:u.call(n,{props:f}))!=null?r:d(Xe,f,null)}if(m==="subheader"){var c,y;return(c=(y=n.subheader)==null?void 0:y.call(n,{props:f}))!=null?c:d(zt,f,{default:n.subheader})}const b={subtitle:n.subtitle?S=>{var h;return(h=n.subtitle)==null?void 0:h.call(n,{...S,item:v})}:void 0,prepend:n.prepend?S=>{var h;return(h=n.prepend)==null?void 0:h.call(n,{...S,item:v})}:void 0,append:n.append?S=>{var h;return(h=n.append)==null?void 0:h.call(n,{...S,item:v})}:void 0,default:n.default?S=>{var h;return(h=n.default)==null?void 0:h.call(n,{...S,item:v})}:void 0,title:n.title?S=>{var h;return(h=n.title)==null?void 0:h.call(n,{...S,item:v})}:void 0},[P,x]=Yt(f);return s?d(et,ge({value:f==null?void 0:f.value},P),{activator:S=>{let{props:h}=S;return n.header?n.header({...f,...h}):d(H,ge(f,h),b)},default:()=>d(tt,{items:s},n)}):n.item?n.item(f):d(H,f,b)})}}}),Xt=pe({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Ut(e,l){const n=X(l,e.itemType,"item"),t=typeof l=="string"?l:X(l,e.itemTitle),o=X(l,e.itemValue,void 0),a=X(l,e.itemChildren),i=e.itemProps===!0?Ne(l,["children"])[1]:X(l,e.itemProps),s={title:t,value:o,...i};return{type:n,title:s.title,value:s.value,props:s,children:n==="item"&&a?nt(e,a):void 0,raw:l}}function nt(e,l){const n=[];for(const t of l)n.push(Ut(e,t));return n}function Zt(e){return{items:g(()=>nt(e,e.items))}}const xe=re()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Ft({selectStrategy:"single-leaf",openStrategy:"list"}),...be(),...Fe(),...Oe(),...we(),itemType:{type:String,default:"type"},...Xt(),...Se(),...K(),...ae(),...Re({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:n}=l;const{items:t}=Zt(e),{themeClasses:o}=le(e),{backgroundColorClasses:a,backgroundColorStyles:i}=te(L(e,"bgColor")),{borderClasses:s}=ke(e),{densityClasses:f}=We(e),{dimensionStyles:m}=Ge(e),{elevationClasses:v}=_e(e),{roundedClasses:r}=Ce(e),{open:u,select:c}=Ot(e),y=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),b=L(e,"activeColor"),P=L(e,"color");return Ue(),Ye({VListGroup:{activeColor:b,color:P},VListItem:{activeClass:L(e,"activeClass"),activeColor:b,color:P,density:L(e,"density"),disabled:L(e,"disabled"),lines:L(e,"lines"),nav:L(e,"nav"),variant:L(e,"variant")}}),W(()=>d(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,a.value,s.value,f.value,v.value,y.value,r.value],style:[i.value,m.value]},{default:()=>[d(tt,{items:t.value},n)]})),{open:u,select:c}}});function qt(e){let{rootEl:l,isSticky:n,layoutItemStyles:t}=e;const o=C(!1),a=C(0),i=g(()=>{const m=typeof o.value=="boolean"?"top":o.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,o.value?{[m]:N(a.value)}:{top:t.value.top}]});je(()=>{Z(n,m=>{m?window.addEventListener("scroll",f,{passive:!0}):window.removeEventListener("scroll",f)},{immediate:!0})}),se(()=>{document.removeEventListener("scroll",f)});let s=0;function f(){var m;const v=s>window.scrollY?"up":"down",r=l.value.getBoundingClientRect(),u=parseFloat((m=t.value.top)!=null?m:0),c=window.scrollY-Math.max(0,a.value-u),y=r.height+Math.max(a.value,u)-window.scrollY-window.innerHeight;r.height<window.innerHeight-u?(o.value="top",a.value=u):v==="up"&&o.value==="bottom"||v==="down"&&o.value==="top"?(a.value=window.scrollY+r.top,o.value=!0):v==="down"&&y<=0?(a.value=0,o.value="bottom"):v==="up"&&c<=0&&(a.value=r.top+c,o.value="top"),s=window.scrollY}return{isStuck:o,stickyStyles:i}}const Kt=100,Jt=20;function Ae(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function Ee(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const t=Ae(l),o=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);l+=(o-t)*Math.abs(o),n===e.length-1&&(l*=.5)}return Ae(l)*1e3}function Qt(){const e={};function l(o){Array.from(o.changedTouches).forEach(a=>{var i;((i=e[a.identifier])!=null?i:e[a.identifier]=new yt(Jt)).push([o.timeStamp,a])})}function n(o){Array.from(o.changedTouches).forEach(a=>{delete e[a.identifier]})}function t(o){var a;const i=(a=e[o])==null?void 0:a.values().reverse();if(!i)throw new Error(`No samples for touch id ${o}`);const s=i[0],f=[],m=[];for(const v of i){if(s[0]-v[0]>Kt)break;f.push({t:v[0],d:v[1].clientX}),m.push({t:v[0],d:v[1].clientY})}return{x:Ee(f),y:Ee(m),get direction(){const{x:v,y:r}=this,[u,c]=[Math.abs(v),Math.abs(r)];return u>c&&v>=0?"right":u>c&&v<=0?"left":c>u&&r>=0?"down":c>u&&r<=0?"up":en()}}}return{addMovement:l,endTouch:n,getVelocity:t}}function en(){throw new Error}function tn(e){let{isActive:l,isTemporary:n,width:t,touchless:o,position:a}=e;je(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",h,{passive:!0})}),se(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",h)});const i=g(()=>a.value!=="bottom"),{addMovement:s,endTouch:f,getVelocity:m}=Qt();let v=!1;const r=C(!1),u=C(0),c=C(0);let y;function b(p,w){return(a.value==="left"?p:a.value==="right"?document.documentElement.clientWidth-p:a.value==="bottom"?document.documentElement.clientHeight-p:F())-(w?t.value:0)}function P(p){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const k=a.value==="left"?(p-c.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-p-c.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-p-c.value)/t.value:F();return w?Math.max(0,Math.min(1,k)):k}function x(p){if(o.value)return;const w=p.changedTouches[0].clientX,k=p.changedTouches[0].clientY,V=25,M=a.value==="left"?w<V:a.value==="right"?w>document.documentElement.clientWidth-V:a.value==="bottom"?k>document.documentElement.clientHeight-V:F(),$=l.value&&(a.value==="left"?w<t.value:a.value==="right"?w>document.documentElement.clientWidth-t.value:a.value==="bottom"?k>document.documentElement.clientHeight-t.value:F());(M||$||l.value&&n.value)&&(v=!0,y=[w,k],c.value=b(i.value?w:k,l.value),u.value=P(i.value?w:k),f(p),s(p))}function S(p){const w=p.changedTouches[0].clientX,k=p.changedTouches[0].clientY;if(v){if(!p.cancelable){v=!1;return}const M=Math.abs(w-y[0]),$=Math.abs(k-y[1]);(i.value?M>$&&M>3:$>M&&$>3)?(r.value=!0,v=!1):(i.value?$:M)>3&&(v=!1)}if(!r.value)return;p.preventDefault(),s(p);const V=P(i.value?w:k,!1);u.value=Math.max(0,Math.min(1,V)),V>1?c.value=b(i.value?w:k,!0):V<0&&(c.value=b(i.value?w:k,!1))}function h(p){if(v=!1,!r.value)return;s(p),r.value=!1;const w=m(p.changedTouches[0].identifier),k=Math.abs(w.x),V=Math.abs(w.y);(i.value?k>V&&k>400:V>k&&V>3)?l.value=w.direction===({left:"right",right:"left",bottom:"up"}[a.value]||F()):l.value=u.value>.5}const E=g(()=>r.value?{transform:a.value==="left"?`translateX(calc(-100% + ${u.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${u.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${u.value*t.value}px))`:F(),transition:"none"}:void 0);return{isDragging:r,dragProgress:u,dragStyles:E}}function F(){throw new Error}const nn=["start","end","left","right","bottom"],an=ne({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>nn.includes(e)},sticky:Boolean,...be(),...we(),...pt(),...Se(),...K({tag:"nav"}),...ae()},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:n,slots:t}=l;const{isRtl:o}=bt(),{themeClasses:a}=le(e),{borderClasses:i}=ke(e),{backgroundColorClasses:s,backgroundColorStyles:f}=te(L(e,"color")),{elevationClasses:m}=_e(e),{mobile:v}=wt(),{roundedClasses:r}=Ce(e),u=St(),c=fe(e,"modelValue",null,I=>!!I),{ssrBootStyles:y}=kt(),b=C(),P=C(!1),x=g(()=>e.rail&&e.expandOnHover&&P.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),S=g(()=>Pt(e.location,o.value)),h=g(()=>!e.permanent&&(v.value||e.temporary)),E=g(()=>e.sticky&&!h.value&&S.value!=="bottom");e.disableResizeWatcher||Z(h,I=>!e.permanent&&(c.value=!I)),!e.disableRouteWatcher&&u&&Z(u.currentRoute,()=>h.value&&(c.value=!1)),Z(()=>e.permanent,I=>{I&&(c.value=!0)}),_t(()=>{e.modelValue!=null||h.value||(c.value=e.permanent||!v.value)});const{isDragging:p,dragProgress:w,dragStyles:k}=tn({isActive:c,isTemporary:h,width:x,touchless:L(e,"touchless"),position:S}),V=g(()=>{const I=h.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value;return p.value?I*w.value:I}),{layoutItemStyles:M,layoutRect:$,layoutItemScrimStyles:J}=Ct({id:e.name,order:g(()=>parseInt(e.order,10)),position:S,layoutSize:V,elementSize:x,active:g(()=>c.value||p.value),disableTransitions:g(()=>p.value),absolute:g(()=>e.absolute||E.value&&typeof D.value!="string")}),{isStuck:D,stickyStyles:_}=qt({rootEl:b,isSticky:E,layoutItemStyles:M}),G=te(g(()=>typeof e.scrim=="string"?e.scrim:null)),Q=g(()=>({...p.value?{opacity:w.value*.2,transition:"none"}:void 0,...$.value?{left:N($.value.left),right:N($.value.right),top:N($.value.top),bottom:N($.value.bottom)}:void 0,...J.value}));return Ye({VList:{bgColor:"transparent"}}),W(()=>{var I,Y,j,z;const ue=t.image||e.image;return d(O,null,[d(e.tag,ge({ref:b,onMouseenter:()=>P.value=!0,onMouseleave:()=>P.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":P.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":h.value,"v-navigation-drawer--active":c.value,"v-navigation-drawer--sticky":E.value},a.value,s.value,i.value,m.value,r.value],style:[f.value,M.value,k.value,y.value,_.value]},n),{default:()=>[ue&&d("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(I=t.image)==null?void 0:I.call(t,{image:e.image}):d("img",{src:e.image,alt:""},null)]),t.prepend&&d("div",{class:"v-navigation-drawer__prepend"},[(Y=t.prepend)==null?void 0:Y.call(t)]),d("div",{class:"v-navigation-drawer__content"},[(j=t.default)==null?void 0:j.call(t)]),t.append&&d("div",{class:"v-navigation-drawer__append"},[(z=t.append)==null?void 0:z.call(t)])]}),d(Vt,{name:"fade-transition"},{default:()=>[h.value&&(p.value||c.value)&&!!e.scrim&&d("div",{class:["v-navigation-drawer__scrim",G.backgroundColorClasses.value],style:[Q.value,G.backgroundColorStyles.value],onClick:()=>c.value=!1},null)]})])}),{isStuck:D}}}),ln=It({name:"FactionDetailView",inject:["partiti"],components:{HeaderCustom:Tt},data(){return{sidebar:{drawer:!1,group:null},nomePartito:"",faction:null,items:[{title:"Foo",value:"foo"},{title:"Bar",value:"bar"},{title:"Fizz",value:"fizz"},{title:"Buzz",value:"buzz"}]}},watch:{group(){this.drawer=!1}},created(){this.nomePartito=this.$route.params.nomePartito,console.log(this.nomePartito),this.faction=this.currentFaction()[0]},computed:{},mounted(){this.nomePartito=this.$route.params.nomePartito,console.log(this.nomePartito),console.log(this.test)},methods:{ciccio(){},goBack(){this.$router.go(-1)},async goto(e){await this.$nextTick(),window.scrollTo({top:document.getElementById(e).offsetTop-60,left:0,behavior:"smooth"})},currentFaction(e){return console.log(this.partiti),console.log(this.nomePartito),console.log(this.nomePartito.split("_").join(" ")),console.log(this.partiti.filter(l=>l.nomePartito===this.nomePartito.split("_").join(" "))),this.partiti.filter(l=>l.nomePartito===this.nomePartito.split("_").join(" "))},testFaction(){console.log(this.currentFaction()[0].programmaElettorale.sezioni[0].contenuto)}}}),on={class:"d-flex justify-space-between top-view pa-4"},sn=ze(" Sezioni "),rn=ze(" Torna indietro "),un={class:"mb-12"},cn={key:0,class:"bg-red"},dn=["id","innerHTML"],vn=["innerHTML"],fn={key:1,class:"bg-yellow"},mn=["id","innerHTML"],gn=["innerHTML"];function hn(e,l,n,t,o,a){const i=Lt("HeaderCustom");return T(),A(O,null,[d(an,{modelValue:e.sidebar.drawer,"onUpdate:modelValue":l[1]||(l[1]=s=>e.sidebar.drawer=s),bottom:"",temporary:""},{default:B(()=>[d(H,{title:"Sezioni",nav:""},{append:B(()=>[d(de,{variant:"text",icon:"mdi-chevron-left",onClick:l[0]||(l[0]=Te(s=>e.sidebar.drawer=!e.sidebar.drawer,["stop"]))})]),_:1}),d(Xe),d(xe,null,{default:B(()=>[d(H,{color:"primary"},{default:B(()=>[(T(!0),A(O,null,ee(e.faction.programmaElettorale.sezioni,(s,f)=>(T(),ve(H,{key:f},{default:B(()=>[d(ye,{onClick:m=>e.goto(s.titolo),textContent:Be(s.titolo)},null,8,["onClick","textContent"]),s.sottotitoli.length>0?(T(),ve(xe,{key:0},{default:B(()=>[d(H,{color:"primary"},{default:B(()=>[(T(!0),A(O,null,ee(s.sottotitoli,(m,v)=>(T(),ve(H,{key:v},{default:B(()=>[d(ye,{onClick:r=>e.goto(m.titolo),textContent:Be(m.titolo)},null,8,["onClick","textContent"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)):xt("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),d(Mt,{class:"relative"},{default:B(()=>[d(i,{data:this.faction},null,8,["data"]),U("div",on,[d(de,{"prepend-icon":"mdi-format-list-bulleted",class:"ma-1",onClick:l[2]||(l[2]=Te(s=>e.sidebar.drawer=!e.sidebar.drawer,["stop"]))},{default:B(()=>[sn]),_:1}),d(de,{"prepend-icon":"mdi-arrow-left",color:"grey-darken-4",class:"text-white ma-1",onClick:l[3]||(l[3]=s=>e.goBack())},{default:B(()=>[rn]),_:1})]),d(Bt,null,{default:B(()=>[(T(!0),A(O,null,ee(e.faction.programmaElettorale.sezioni,s=>(T(),A("div",un,[s.contenuto===""?(T(),A("div",cn,[(T(!0),A(O,null,ee(s.sottotitoli,(f,m)=>(T(),A("div",null,[U("div",{id:m===0?s.titolo:f.titolo,innerHTML:m===0?s.titolo:f.titolo,class:"text-h4 text-center font-weight-bold mb-4"},null,8,dn),U("div",{innerHTML:f.contenuto,class:"mb-4"},null,8,vn)]))),256))])):(T(),A("div",fn,[U("div",{id:s.titolo,innerHTML:s.titolo,class:"text-h4 text-center font-weight-bold mb-4"},null,8,mn),U("div",{innerHTML:s.contenuto},null,8,gn)]))]))),256))]),_:1})]),_:1})],64)}const pn=$t(ln,[["render",hn],["__scopeId","data-v-6c938d03"]]);export{pn as default};
