import{b as B,d as $,u as P,c as _,p as G,o as b,a as x,w as s,r as q,n as z,e as d,f as A,g as F,_ as K,h as M,i as v,m as w,j as H,k as O,l as J,q as k,s as Q,t as W,v as X,x as e,y as m,z as E,A as Y,E as L,B as ee,C as se,D as te,F as U,G as C,H as ae,I as le}from"./index-DrPP7dIZ.js";import{E as oe}from"./el-checkbox-C150B1rG.js";import{E as re,a as ue}from"./el-form-item-CE-YcYCj.js";import{E as ne}from"./el-link-BODE4CY_.js";import{_ as pe,E as de}from"./el-message-CrduQaT-.js";import{E as ie}from"./el-input-8e5eorEX.js";import"./isEqual-CbKqTeAD.js";import"./_baseClone-DmZ5Zut7.js";const T=Symbol("rowContextKey"),fe=["start","center","end","space-around","space-between","space-evenly"],ce=["top","middle","bottom"],me=B({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:fe,default:"start"},align:{type:String,values:ce}}),_e=$({name:"ElRow"}),ge=$({..._e,props:me,setup(i){const o=i,u=P("row"),t=_(()=>o.gutter);G(T,{gutter:t});const c=_(()=>{const a={};return o.gutter&&(a.marginRight=a.marginLeft=`-${o.gutter/2}px`),a}),g=_(()=>[u.b(),u.is(`justify-${o.justify}`,o.justify!=="start"),u.is(`align-${o.align}`,!!o.align)]);return(a,h)=>(b(),x(F(a.tag),{class:z(d(g)),style:A(d(c))},{default:s(()=>[q(a.$slots,"default")]),_:3},8,["class","style"]))}});var ye=K(ge,[["__file","row.vue"]]);const ve=M(ye),we=B({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:v([Number,Object]),default:()=>w({})},sm:{type:v([Number,Object]),default:()=>w({})},md:{type:v([Number,Object]),default:()=>w({})},lg:{type:v([Number,Object]),default:()=>w({})},xl:{type:v([Number,Object]),default:()=>w({})}}),be=$({name:"ElCol"}),xe=$({...be,props:we,setup(i){const o=i,{gutter:u}=H(T,{gutter:_(()=>0)}),t=P("col"),c=_(()=>{const a={};return u.value&&(a.paddingLeft=a.paddingRight=`${u.value/2}px`),a}),g=_(()=>{const a=[];return["span","offset","pull","push"].forEach(r=>{const l=o[r];O(l)&&(r==="span"?a.push(t.b(`${o[r]}`)):l>0&&a.push(t.b(`${r}-${o[r]}`)))}),["xs","sm","md","lg","xl"].forEach(r=>{O(o[r])?a.push(t.b(`${r}-${o[r]}`)):J(o[r])&&Object.entries(o[r]).forEach(([l,f])=>{a.push(l!=="span"?t.b(`${r}-${l}-${f}`):t.b(`${r}-${f}`))})}),u.value&&a.push(t.is("guttered")),[t.b(),a]});return(a,h)=>(b(),x(F(a.tag),{class:z(d(g)),style:A(d(c))},{default:s(()=>[q(a.$slots,"default")]),_:3},8,["class","style"]))}});var he=K(xe,[["__file","col.vue"]]);const $e=M(he),N=i=>(ae("data-v-6a68efa4"),i=i(),le(),i),Ee=N(()=>E("h1",null,"CMS",-1)),Ve=N(()=>E("h1",null,"註冊",-1)),ke=N(()=>E("h1",null,"登入",-1)),Ce={class:"flex"},Ne={__name:"LoginPage",setup(i){const o=k(!1),u=k(),t=k({username:"",password:"",repassword:""}),c={username:[{required:!0,message:"請輸入用戶名",trigger:"blur"},{min:3,max:10,message:"用戶名長度 3-10",trigger:"blur"}],password:[{required:!0,message:"請輸入密碼",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{6,15}$/,message:"密碼為 1-9 位英文數字組成",trigger:"blur"}],repassword:[{required:!0,message:"請輸入密碼",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{6,15}$/,message:"密碼為 1-9 位英文數字組成",trigger:"blur"},{validator:(r,l,f)=>{l!==t.value.password?f(new Error("密碼不一致")):f()},trigger:"blur"}]},g=async()=>{await u.value.validate(),await Y(t.value),L.success("註冊成功"),o.value=!1},a=Q(),h=W(),S=async()=>{await u.value.validate();const r=await ee(t.value);a.setToken(r.data.token),L.success("登入成功"),h.push("/")};return X(o,()=>u.value.resetFields()),(r,l)=>{const f=se,j=$e,n=re,y=ie,R=de,V=ne,I=ue,D=oe,Z=ve;return b(),x(Z,{class:"login-page"},{default:s(()=>[e(j,{span:12,class:"bg"},{default:s(()=>[e(f,{size:"140"},{default:s(()=>[e(d(te))]),_:1}),Ee]),_:1}),e(j,{span:6,offset:3,class:"form"},{default:s(()=>[o.value?(b(),x(I,{key:0,ref_key:"form",ref:u,size:"large",autocomplete:"on",model:t.value,rules:c},{default:s(()=>[e(n,null,{default:s(()=>[Ve]),_:1}),e(n,{prop:"username"},{default:s(()=>[e(y,{"prefix-icon":d(U),placeholder:"請輸入用戶名",modelValue:t.value.username,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value.username=p)},null,8,["prefix-icon","modelValue"])]),_:1}),e(n,{prop:"password"},{default:s(()=>[e(y,{"prefix-icon":d(C),type:"password","show-password":"",placeholder:"請輸入密碼",modelValue:t.value.password,"onUpdate:modelValue":l[1]||(l[1]=p=>t.value.password=p)},null,8,["prefix-icon","modelValue"])]),_:1}),e(n,{prop:"repassword"},{default:s(()=>[e(y,{"prefix-icon":d(C),type:"password","show-password":"",placeholder:"請再次輸入密碼",modelValue:t.value.repassword,"onUpdate:modelValue":l[2]||(l[2]=p=>t.value.repassword=p)},null,8,["prefix-icon","modelValue"])]),_:1}),e(n,null,{default:s(()=>[e(R,{class:"button",type:"primary","auto-insert-space":"",onClick:g},{default:s(()=>[m("註冊")]),_:1})]),_:1}),e(n,{class:"flex"},{default:s(()=>[e(V,{type:"info",underline:!1,onClick:l[3]||(l[3]=p=>o.value=!1)},{default:s(()=>[m("← 返回")]),_:1})]),_:1})]),_:1},8,["model"])):(b(),x(I,{key:1,ref_key:"form",ref:u,size:"large",autocomplete:"off",model:t.value,rules:c},{default:s(()=>[e(n,null,{default:s(()=>[ke]),_:1}),e(n,{prop:"username"},{default:s(()=>[e(y,{"prefix-icon":d(U),placeholder:"請輸入用戶名",modelValue:t.value.username,"onUpdate:modelValue":l[4]||(l[4]=p=>t.value.username=p)},null,8,["prefix-icon","modelValue"])]),_:1}),e(n,{prop:"password"},{default:s(()=>[e(y,{"prefix-icon":d(C),type:"password","show-password":"",placeholder:"請輸入密碼",modelValue:t.value.password,"onUpdate:modelValue":l[5]||(l[5]=p=>t.value.password=p)},null,8,["prefix-icon","modelValue"])]),_:1}),e(n,{class:"flex"},{default:s(()=>[E("div",Ce,[e(D,null,{default:s(()=>[m("記住我")]),_:1}),e(V,{type:"primary",underline:!1},{default:s(()=>[m("忘記密碼?")]),_:1})])]),_:1}),e(n,null,{default:s(()=>[e(R,{class:"button",type:"primary","auto-insert-space":"",onClick:S},{default:s(()=>[m("登入")]),_:1})]),_:1}),e(n,{class:"flex"},{default:s(()=>[e(V,{type:"info",underline:!1,onClick:l[6]||(l[6]=p=>o.value=!0)},{default:s(()=>[m("註冊 →")]),_:1})]),_:1})]),_:1},8,["model"]))]),_:1})]),_:1})}}},Pe=pe(Ne,[["__scopeId","data-v-6a68efa4"]]);export{Pe as default};