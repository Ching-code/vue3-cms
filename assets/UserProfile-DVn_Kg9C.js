import{_ as V}from"./PageContainer-BX_X8pSe.js";import{s as k,q as m,o as E,a as x,w as l,x as e,y as U,bM as y,E as w}from"./index-DzAmo6o_.js";import{E as q,a as B}from"./el-form-item-B2ENBCyG.js";import{E as C}from"./el-message-FYlAGrWi.js";import{E as I}from"./el-input-Cuvr351w.js";import"./_baseClone-CXCVYu-M.js";const z={__name:"UserProfile",setup(S){const{user:{email:s,id:i,nickname:d,username:p},getUser:_}=k(),u=m(),a=m({id:i,username:p,nickname:d,email:s}),f=m({nickname:[{required:!0,message:"請輸入用戶暱稱",trigger:"blur"},{min:2,max:10,message:"用戶暱稱長度為 2-10 位",trigger:"blur"}],email:[{required:!0,message:"請輸入用戶信箱",trigger:"blur"},{type:"email",message:"請輸入正確的用戶信箱",trigger:["blur","change"]}]}),c=async()=>{await u.value.validate(),await y(a.value),_(),w.success("修改成功")};return(F,o)=>{const n=I,r=q,g=C,b=B,v=V;return E(),x(v,{title:"基本資料"},{default:l(()=>[e(b,{ref_key:"formRef",ref:u,model:a.value,rules:f.value,"label-width":"100px"},{default:l(()=>[e(r,{label:"登入名稱"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.username=t),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用戶暱稱",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.nickname=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"用戶信箱",prop:"email"},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.email=t)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(g,{type:"primary",onClick:c},{default:l(()=>[U("提交修改")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}};export{z as default};
