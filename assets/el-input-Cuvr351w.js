import{aE as Ve,c0 as Se,bZ as Ce,bd as re,c1 as Ae,bb as Qe,b6 as Je,bc as je,c2 as et,c as f,a6 as Oe,bD as tt,q as T,bC as q,v as Q,X as at,aA as nt,b as Re,k as Ie,aH as ot,i as ae,K as Ee,m as st,M as ne,d as Le,c3 as lt,Q as rt,u as Pe,al as it,a1 as F,S as ut,av as ct,W as dt,o as m,L as S,a5 as h,a8 as oe,n as y,e as n,r as Y,z as N,a as I,w as B,g as G,C as M,O as se,x as pt,aI as ft,a7 as vt,bE as mt,am as Z,f as ht,_ as gt,l as ze,aD as yt,c4 as bt,c5 as xt,ak as wt,h as St}from"./index-DzAmo6o_.js";import{i as Be,j as Ct,k as It,b as Et,c as Pt,a as zt,e as kt,d as ke}from"./el-message-FYlAGrWi.js";const Ft=()=>Ve&&/firefox/i.test(window.navigator.userAgent);function Nt(e){return e}function Tt(e,o,l){switch(l.length){case 0:return e.call(o);case 1:return e.call(o,l[0]);case 2:return e.call(o,l[0],l[1]);case 3:return e.call(o,l[0],l[1],l[2])}return e.apply(o,l)}var Vt=800,At=16,Ot=Date.now;function Rt(e){var o=0,l=0;return function(){var a=Ot(),s=At-(a-l);if(l=a,s>0){if(++o>=Vt)return arguments[0]}else o=0;return e.apply(void 0,arguments)}}function Lt(e){return function(){return e}}var Bt=Se?function(e,o){return Se(e,"toString",{configurable:!0,enumerable:!1,value:Lt(o),writable:!0})}:Nt,Mt=Rt(Bt),Fe=Math.max;function Ht(e,o,l){return o=Fe(o===void 0?e.length-1:o,0),function(){for(var a=arguments,s=-1,r=Fe(a.length-o,0),i=Array(r);++s<r;)i[s]=a[o+s];s=-1;for(var p=Array(o+1);++s<o;)p[s]=a[s];return p[o]=l(i),Tt(e,this,p)}}var Ne=Ce?Ce.isConcatSpreadable:void 0;function $t(e){return re(e)||Be(e)||!!(Ne&&e&&e[Ne])}function Dt(e,o,l,a,s){var r=-1,i=e.length;for(l||(l=$t),s||(s=[]);++r<i;){var p=e[r];l(p)?Ct(s,p):s[s.length]=p}return s}function Kt(e){var o=e==null?0:e.length;return o?Dt(e):[]}function Ut(e){return Mt(Ht(e,void 0,Kt),e+"")}function ya(){if(!arguments.length)return[];var e=arguments[0];return re(e)?e:[e]}function Wt(e,o){return e!=null&&o in Object(e)}function _t(e,o,l){o=Ae(o,e);for(var a=-1,s=o.length,r=!1;++a<s;){var i=Qe(o[a]);if(!(r=e!=null&&l(e,i)))break;e=e[i]}return r||++a!=s?r:(s=e==null?0:e.length,!!s&&It(s)&&Je(i,s)&&(re(e)||Be(e)))}function Xt(e,o){return e!=null&&_t(e,o,Wt)}function Yt(e,o,l){for(var a=-1,s=o.length,r={};++a<s;){var i=o[a],p=je(e,i);l(p,i)&&et(r,Ae(i,e),p)}return r}function Gt(e,o){return Yt(e,o,function(l,a){return Xt(e,a)})}var Zt=Ut(function(e,o){return e==null?{}:Gt(e,o)});const le="update:modelValue",ba="change",qt=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),Qt=["class","style"],Jt=/^on[A-Z]/,jt=(e={})=>{const{excludeListeners:o=!1,excludeKeys:l}=e,a=f(()=>((l==null?void 0:l.value)||[]).concat(Qt)),s=Oe();return s?f(()=>{var r;return tt(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([i])=>!a.value.includes(i)&&!(o&&Jt.test(i))))}):f(()=>({}))};function ea(e){const o=T();function l(){if(e.value==null)return;const{selectionStart:s,selectionEnd:r,value:i}=e.value;if(s==null||r==null)return;const p=i.slice(0,Math.max(0,s)),v=i.slice(Math.max(0,r));o.value={selectionStart:s,selectionEnd:r,value:i,beforeTxt:p,afterTxt:v}}function a(){if(e.value==null||o.value==null)return;const{value:s}=e.value,{beforeTxt:r,afterTxt:i,selectionStart:p}=o.value;if(r==null||i==null||p==null)return;let v=s.length;if(s.endsWith(i))v=s.length-i.length;else if(s.startsWith(r))v=r.length;else{const x=r[p-1],w=s.indexOf(x,p-1);w!==-1&&(v=w+1)}e.value.setSelectionRange(v,v)}return[l,a]}function ta(e,{afterFocus:o,beforeBlur:l,afterBlur:a}={}){const s=Oe(),{emit:r}=s,i=q(),p=T(!1),v=d=>{p.value||(p.value=!0,r("focus",d),o==null||o())},x=d=>{var V;nt(l)&&l(d)||d.relatedTarget&&((V=i.value)!=null&&V.contains(d.relatedTarget))||(p.value=!1,r("blur",d),a==null||a())},w=()=>{var d;(d=e.value)==null||d.focus()};return Q(i,d=>{d&&d.setAttribute("tabindex","-1")}),at(i,"click",w),{wrapperRef:i,isFocused:p,handleFocus:v,handleBlur:x}}const aa=Re({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),na=e=>Zt(aa,e);let b;const oa=`
  height:0 !important;
  visibility:hidden !important;
  ${Ft()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,sa=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function la(e){const o=window.getComputedStyle(e),l=o.getPropertyValue("box-sizing"),a=Number.parseFloat(o.getPropertyValue("padding-bottom"))+Number.parseFloat(o.getPropertyValue("padding-top")),s=Number.parseFloat(o.getPropertyValue("border-bottom-width"))+Number.parseFloat(o.getPropertyValue("border-top-width"));return{contextStyle:sa.map(i=>`${i}:${o.getPropertyValue(i)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:l}}function Te(e,o=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:s,borderSize:r,boxSizing:i,contextStyle:p}=la(e);b.setAttribute("style",`${p};${oa}`),b.value=e.value||e.placeholder||"";let v=b.scrollHeight;const x={};i==="border-box"?v=v+r:i==="content-box"&&(v=v-s),b.value="";const w=b.scrollHeight-s;if(Ie(o)){let d=w*o;i==="border-box"&&(d=d+s+r),v=Math.max(d,v),x.minHeight=`${d}px`}if(Ie(l)){let d=w*l;i==="border-box"&&(d=d+s+r),v=Math.min(d,v)}return x.height=`${v}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const ra=Re({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>st({})},autofocus:{type:Boolean,default:!1},...na(["ariaLabel"])}),ia={[le]:e=>ne(e),input:e=>ne(e),change:e=>ne(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ua=["role"],ca=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],da=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],pa=Le({name:"ElInput",inheritAttrs:!1}),fa=Le({...pa,props:ra,emits:ia,setup(e,{expose:o,emit:l}){const a=e,s=lt(),r=rt(),i=f(()=>{const t={};return a.containerRole==="combobox"&&(t["aria-haspopup"]=s["aria-haspopup"],t["aria-owns"]=s["aria-owns"],t["aria-expanded"]=s["aria-expanded"]),t}),p=f(()=>[a.type==="textarea"?ue.b():c.b(),c.m(ie.value),c.is("disabled",P.value),c.is("exceed",De.value),{[c.b("group")]:r.prepend||r.append,[c.bm("group","append")]:r.append,[c.bm("group","prepend")]:r.prepend,[c.m("prefix")]:r.prefix||a.prefixIcon,[c.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[c.bm("suffix","password-clear")]:_.value&&j.value,[c.b("hidden")]:a.type==="hidden"},s.class]),v=f(()=>[c.e("wrapper"),c.is("focus",K.value)]),x=jt({excludeKeys:f(()=>Object.keys(i.value))}),{form:w,formItem:d}=Et(),{inputId:V}=Pt(a,{formItemContext:d}),ie=zt(),P=kt(),c=Pe("input"),ue=Pe("textarea"),H=q(),C=q(),J=T(!1),A=T(!1),$=T(!1),ce=T(),D=q(a.inputStyle),z=f(()=>H.value||C.value),{wrapperRef:Me,isFocused:K,handleFocus:U,handleBlur:W}=ta(z,{afterBlur(){var t;a.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"blur").catch(u=>ke()))}}),de=f(()=>{var t;return(t=w==null?void 0:w.statusIcon)!=null?t:!1}),O=f(()=>(d==null?void 0:d.validateState)||""),pe=f(()=>O.value&&yt[O.value]),He=f(()=>$.value?bt:xt),$e=f(()=>[s.style]),fe=f(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=f(()=>wt(a.modelValue)?"":String(a.modelValue)),_=f(()=>a.clearable&&!P.value&&!a.readonly&&!!E.value&&(K.value||J.value)),j=f(()=>a.showPassword&&!P.value&&!a.readonly&&!!E.value&&(!!E.value||K.value)),k=f(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!P.value&&!a.readonly&&!a.showPassword),ee=f(()=>E.value.length),De=f(()=>!!k.value&&ee.value>Number(a.maxlength)),Ke=f(()=>!!r.suffix||!!a.suffixIcon||_.value||a.showPassword||k.value||!!O.value&&de.value),[Ue,We]=ea(H);it(C,t=>{if(_e(),!k.value||a.resize!=="both")return;const u=t[0],{width:g}=u.contentRect;ce.value={right:`calc(100% - ${g+15+6}px)`}});const R=()=>{const{type:t,autosize:u}=a;if(!(!Ve||t!=="textarea"||!C.value))if(u){const g=ze(u)?u.minRows:void 0,X=ze(u)?u.maxRows:void 0,we=Te(C.value,g,X);D.value={overflowY:"hidden",...we},F(()=>{C.value.offsetHeight,D.value=we})}else D.value={minHeight:Te(C.value).minHeight}},_e=(t=>{let u=!1;return()=>{var g;if(u||!a.autosize)return;((g=C.value)==null?void 0:g.offsetParent)===null||(t(),u=!0)}})(R),L=()=>{const t=z.value,u=a.formatter?a.formatter(E.value):E.value;!t||t.value===u||(t.value=u)},te=async t=>{Ue();let{value:u}=t.target;if(a.formatter&&(u=a.parser?a.parser(u):u),!A.value){if(u===E.value){L();return}l(le,u),l("input",u),await F(),L(),We()}},ve=t=>{l("change",t.target.value)},me=t=>{l("compositionstart",t),A.value=!0},he=t=>{var u;l("compositionupdate",t);const g=(u=t.target)==null?void 0:u.value,X=g[g.length-1]||"";A.value=!qt(X)},ge=t=>{l("compositionend",t),A.value&&(A.value=!1,te(t))},Xe=()=>{$.value=!$.value,ye()},ye=async()=>{var t;await F(),(t=z.value)==null||t.focus()},Ye=()=>{var t;return(t=z.value)==null?void 0:t.blur()},Ge=t=>{J.value=!1,l("mouseleave",t)},Ze=t=>{J.value=!0,l("mouseenter",t)},be=t=>{l("keydown",t)},qe=()=>{var t;(t=z.value)==null||t.select()},xe=()=>{l(le,""),l("change",""),l("clear"),l("input","")};return Q(()=>a.modelValue,()=>{var t;F(()=>R()),a.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"change").catch(u=>ke()))}),Q(E,()=>L()),Q(()=>a.type,async()=>{await F(),L(),R()}),ut(()=>{!a.formatter&&a.parser,L(),F(R)}),ct({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},f(()=>!!a.label)),o({input:H,textarea:C,ref:z,textareaStyle:fe,autosize:dt(a,"autosize"),focus:ye,blur:Ye,select:qe,clear:xe,resizeTextarea:R}),(t,u)=>(m(),S("div",se(n(i),{class:n(p),style:n($e),role:t.containerRole,onMouseenter:Ze,onMouseleave:Ge}),[h(" input "),t.type!=="textarea"?(m(),S(oe,{key:0},[h(" prepend slot "),t.$slots.prepend?(m(),S("div",{key:0,class:y(n(c).be("group","prepend"))},[Y(t.$slots,"prepend")],2)):h("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Me,class:y(n(v))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),S("span",{key:0,class:y(n(c).e("prefix"))},[N("span",{class:y(n(c).e("prefix-inner"))},[Y(t.$slots,"prefix"),t.prefixIcon?(m(),I(n(M),{key:0,class:y(n(c).e("icon"))},{default:B(()=>[(m(),I(G(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),N("input",se({id:n(V),ref_key:"input",ref:H,class:n(c).e("inner")},n(x),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?$.value?"text":"password":t.type,disabled:n(P),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[0]||(u[0]=(...g)=>n(U)&&n(U)(...g)),onBlur:u[1]||(u[1]=(...g)=>n(W)&&n(W)(...g)),onChange:ve,onKeydown:be}),null,16,ca),h(" suffix slot "),n(Ke)?(m(),S("span",{key:1,class:y(n(c).e("suffix"))},[N("span",{class:y(n(c).e("suffix-inner"))},[!n(_)||!n(j)||!n(k)?(m(),S(oe,{key:0},[Y(t.$slots,"suffix"),t.suffixIcon?(m(),I(n(M),{key:0,class:y(n(c).e("icon"))},{default:B(()=>[(m(),I(G(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),n(_)?(m(),I(n(M),{key:1,class:y([n(c).e("icon"),n(c).e("clear")]),onMousedown:vt(n(mt),["prevent"]),onClick:xe},{default:B(()=>[pt(n(ft))]),_:1},8,["class","onMousedown"])):h("v-if",!0),n(j)?(m(),I(n(M),{key:2,class:y([n(c).e("icon"),n(c).e("password")]),onClick:Xe},{default:B(()=>[(m(),I(G(n(He))))]),_:1},8,["class"])):h("v-if",!0),n(k)?(m(),S("span",{key:3,class:y(n(c).e("count"))},[N("span",{class:y(n(c).e("count-inner"))},Z(n(ee))+" / "+Z(t.maxlength),3)],2)):h("v-if",!0),n(O)&&n(pe)&&n(de)?(m(),I(n(M),{key:4,class:y([n(c).e("icon"),n(c).e("validateIcon"),n(c).is("loading",n(O)==="validating")])},{default:B(()=>[(m(),I(G(n(pe))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(m(),S("div",{key:1,class:y(n(c).be("group","append"))},[Y(t.$slots,"append")],2)):h("v-if",!0)],64)):(m(),S(oe,{key:1},[h(" textarea "),N("textarea",se({id:n(V),ref_key:"textarea",ref:C,class:[n(ue).e("inner"),n(c).is("focus",n(K))]},n(x),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:n(P),readonly:t.readonly,autocomplete:t.autocomplete,style:n(fe),"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[2]||(u[2]=(...g)=>n(U)&&n(U)(...g)),onBlur:u[3]||(u[3]=(...g)=>n(W)&&n(W)(...g)),onChange:ve,onKeydown:be}),null,16,da),n(k)?(m(),S("span",{key:0,style:ht(ce.value),class:y(n(c).e("count"))},Z(n(ee))+" / "+Z(t.maxlength),7)):h("v-if",!0)],64))],16,ua))}});var va=gt(fa,[["__file","input.vue"]]);const xa=St(va);export{ba as C,xa as E,le as U,na as a,Nt as b,ya as c,Dt as d,Xt as h,qt as i,Ht as o,Zt as p,Mt as s,ta as u};