import{_ as u}from"../../chunks/preload-helper-b21cceae.js";import{S as d,i as h,s as v,C as E,k as $,a as b,l as w,m as y,h as c,c as A,n as _,b as f,D as k,E as C,F as D,f as I,t as L,o as O}from"../../chunks/index-edd250b0.js";function P(l){let s,i,a;const o=l[1].default,e=E(o,l,l[0],null);return{c(){s=$("canvas"),i=b(),e&&e.c(),this.h()},l(t){s=w(t,"CANVAS",{class:!0,id:!0}),y(s).forEach(c),i=A(t),e&&e.l(t),this.h()},h(){_(s,"class","absolute top-0 left-0 w-screen h-screen"),_(s,"id","sketch")},m(t,n){f(t,s,n),f(t,i,n),e&&e.m(t,n),a=!0},p(t,[n]){e&&e.p&&(!a||n&1)&&k(e,o,t,t[0],a?D(o,t[0],n,null):C(t[0]),null)},i(t){a||(I(e,t),a=!0)},o(t){L(e,t),a=!1},d(t){t&&c(s),t&&c(i),e&&e.d(t)}}}function S(l,s,i){let{$$slots:a={},$$scope:o}=s;return O(async()=>{const e=await u(()=>import("../../chunks/p5.min-28751275.js").then(r=>r.p),[],import.meta.url),t=await u(()=>import("../../chunks/waves-c9ca115c.js"),[],import.meta.url),{default:n}=e;Object.entries(e).filter(([r,p])=>p instanceof Function&&r[0]!=="_"&&r!=="default");let m=document.getElementById("#sketch")||document.createElement("canvas");new n(t,m)}),l.$$set=e=>{"$$scope"in e&&i(0,o=e.$$scope)},[o,a]}class T extends d{constructor(s){super(),h(this,s,S,P,v,{})}}export{T as default};
