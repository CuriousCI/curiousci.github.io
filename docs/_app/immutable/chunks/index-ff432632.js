function m(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function q(){return Object.create(null)}function y(t){t.forEach(P)}function S(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ot(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function I(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(G(e,n))}function at(t,e,n,i){if(t){const r=T(t,e,n,i);return t[0](r)}}function T(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,s){if(r){const c=T(e,n,i,s);t.p(c,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ht(t){return t&&S(t.destroy)?t.destroy:m}let E=!1;function J(){E=!0}function K(){E=!1}function W(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:W(1,r,g=>e[n[g]].claim_order,l))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const s=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(s.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[u],f)}}function R(t,e){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){E&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){Y(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(e))}function $t(t,e,n){return Z(t,e,n,V)}function tt(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function vt(t){return tt(t," ")}function Et(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function wt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Nt(t,e){return new t(e)}let p;function h(t){p=t}function C(){if(!p)throw new Error("Function called outside component initialization");return p}function At(t){C().$$.on_mount.push(t)}function St(t){C().$$.after_update.push(t)}function jt(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=et(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const _=[],B=[],$=[],L=[],O=Promise.resolve();let N=!1;function z(){N||(N=!0,O.then(F))}function Ct(){return z(),O}function A(t){$.push(t)}const w=new Set;let b=0;function F(){const t=p;do{for(;b<_.length;){const e=_[b];b++,h(e),nt(e.$$)}for(h(null),_.length=0,b=0;B.length;)B.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];w.has(n)||(w.add(n),n())}$.length=0}while(_.length);for(;L.length;)L.pop()();N=!1,w.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const v=new Set;let d;function kt(){d={r:0,c:[],p:d}}function Mt(){d.r||y(d.c),d=d.p}function it(t,e){t&&t.i&&(v.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t){t&&t.c()}function Lt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(P).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),s.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(_.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(t,e,n,i,r,s,c,o=[-1]){const u=p;h(t);const l=t.$$={fragment:null,ctx:[],props:s,update:m,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:q(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,g,...k)=>{const M=k.length?k[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),f&&ut(t,a)),g}):[],l.update(),f=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){J();const a=X(e.target);l.fragment&&l.fragment.l(a),a.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),K(),F()}h(u)}class Tt{$destroy(){ct(this,1),this.$destroy=m}$on(e,n){if(!S(n))return m;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ct as A,m as B,ht as C,jt as D,at as E,dt as F,_t as G,ft as H,R as I,st as J,pt as K,ot as L,xt as M,Tt as S,yt as a,mt as b,vt as c,Mt as d,gt as e,it as f,kt as g,U as h,Pt as i,St as j,V as k,$t as l,X as m,bt as n,At as o,wt as p,j as q,tt as r,lt as s,qt as t,Et as u,Nt as v,Bt as w,Lt as x,rt as y,ct as z};
