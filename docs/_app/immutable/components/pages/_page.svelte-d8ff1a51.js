import{S as Z,i as ee,s as te,k as v,a as V,q as U,l as b,m as E,c as x,h as m,r as L,n,p as de,b as P,I as h,u as _e,B as G,K as B,L as Ee,e as H,M as N,g as F,t as D,d as Q,f as T,o as ye,N as $e,w as z,x as W,y as q,z as J,O as se}from"../../chunks/index-f52294b6.js";function me(u){let e,r,t,l;return{c(){e=v("a"),r=v("img"),this.h()},l(c){e=b(c,"A",{href:!0});var s=E(e);r=b(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(m),this.h()},h(){B(r.src,t="github.svg")||n(r,"src",t),n(r,"alt","GitHub"),n(r,"class","w-7"),n(e,"href",l=u[0].github)},m(c,s){P(c,e,s),h(e,r)},p(c,s){s&1&&l!==(l=c[0].github)&&n(e,"href",l)},d(c){c&&m(e)}}}function pe(u){let e,r,t,l;return{c(){e=v("a"),r=v("img"),this.h()},l(c){e=b(c,"A",{href:!0});var s=E(e);r=b(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(m),this.h()},h(){B(r.src,t="website.svg")||n(r,"src",t),n(r,"alt","Website"),n(r,"class","w-8"),n(e,"href",l=u[0].website)},m(c,s){P(c,e,s),h(e,r)},p(c,s){s&1&&l!==(l=c[0].website)&&n(e,"href",l)},d(c){c&&m(e)}}}function Ie(u){let e,r,t,l,c,s,o,i=u[0].name+"",k,f,_,w=u[0].description+"",I,p=u[0].github&&me(u),y=u[0].website&&pe(u);return{c(){e=v("div"),r=v("div"),t=v("div"),p&&p.c(),l=V(),y&&y.c(),c=V(),s=v("div"),o=v("h1"),k=U(i),f=V(),_=v("p"),I=U(w),this.h()},l(a){e=b(a,"DIV",{class:!0});var g=E(e);r=b(g,"DIV",{class:!0,style:!0});var d=E(r);t=b(d,"DIV",{class:!0});var $=E(t);p&&p.l($),l=x($),y&&y.l($),$.forEach(m),d.forEach(m),c=x(g),s=b(g,"DIV",{class:!0});var j=E(s);o=b(j,"H1",{class:!0});var R=E(o);k=L(R,i),R.forEach(m),f=x(j),_=b(j,"P",{class:!0});var M=E(_);I=L(M,w),M.forEach(m),j.forEach(m),g.forEach(m),this.h()},h(){n(t,"class","absolute right-6 bottom-4 flex items-center justify-end gap-4"),n(r,"class","rounded-t-2xl w-full h-[75%] shadow-2xl shadow-black relative bg-cover bg-center"),de(r,"background-image","url("+u[0].assets[0]+")"),n(o,"class","text-3xl text-dfg"),n(_,"class","text-dfg1 text-xl font-light"),n(s,"class","w-full h-20"),n(e,"class","w-full h-full flex flex-col items-center justify-between box-border p-10 bg-dbg rounded-3xl shadow-2xl shadow-black transition-all hover:scale-105")},m(a,g){P(a,e,g),h(e,r),h(r,t),p&&p.m(t,null),h(t,l),y&&y.m(t,null),h(e,c),h(e,s),h(s,o),h(o,k),h(s,f),h(s,_),h(_,I)},p(a,[g]){a[0].github?p?p.p(a,g):(p=me(a),p.c(),p.m(t,l)):p&&(p.d(1),p=null),a[0].website?y?y.p(a,g):(y=pe(a),y.c(),y.m(t,null)):y&&(y.d(1),y=null),g&1&&de(r,"background-image","url("+a[0].assets[0]+")"),g&1&&i!==(i=a[0].name+"")&&_e(k,i),g&1&&w!==(w=a[0].description+"")&&_e(I,w)},i:G,o:G,d(a){a&&m(e),p&&p.d(),y&&y.d()}}}function je(u,e,r){let{project:t}=e;return u.$$set=l=>{"project"in l&&r(0,t=l.project)},[t]}class Y extends Z{constructor(e){super(),ee(this,e,je,Ie,te,{project:0})}}function ge(u,e,r){const t=u.slice();return t[1]=e[r],t}function ve(u,e,r){const t=u.slice();return t[1]=e[r],t}function Ve(u){let e,r,t=u[0],l=[];for(let s=0;s<t.length;s+=1)l[s]=be(ge(u,t,s));const c=s=>D(l[s],1,1,()=>{l[s]=null});return{c(){e=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var o=E(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(m),this.h()},h(){n(e,"class","flex flex-col h-full gap-10 items-center justify-center max-w-full min-w-full")},m(s,o){P(s,e,o);for(let i=0;i<l.length;i+=1)l[i].m(e,null);r=!0},p(s,o){if(o&1){t=s[0];let i;for(i=0;i<t.length;i+=1){const k=ge(s,t,i);l[i]?(l[i].p(k,o),T(l[i],1)):(l[i]=be(k),l[i].c(),T(l[i],1),l[i].m(e,null))}for(F(),i=t.length;i<l.length;i+=1)c(i);Q()}},i(s){if(!r){for(let o=0;o<t.length;o+=1)T(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)D(l[o]);r=!1},d(s){s&&m(e),$e(l,s)}}}function xe(u){let e,r,t,l,c,s,o,i,k,f,_,w,I,p,y;return s=new Y({props:{project:u[0][u[2][0]]}}),i=new Y({props:{project:u[0][u[2][1]]}}),{c(){e=v("div"),r=v("button"),t=v("img"),c=V(),z(s.$$.fragment),o=V(),z(i.$$.fragment),k=V(),f=v("button"),_=v("img"),this.h()},l(a){e=b(a,"DIV",{class:!0});var g=E(e);r=b(g,"BUTTON",{});var d=E(r);t=b(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(m),c=x(g),W(s.$$.fragment,g),o=x(g),W(i.$$.fragment,g),k=x(g),f=b(g,"BUTTON",{});var $=E(f);_=b($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(m),g.forEach(m),this.h()},h(){B(t.src,l="arrow.svg")||n(t,"src",l),n(t,"alt","Left Arrow"),n(t,"class","w-20"),B(_.src,w="chevron-right.svg")||n(_,"src",w),n(_,"alt","Left Arrow"),n(_,"class","w-20"),n(e,"class","flex h-[50vh] gap-10 items-center justify-center max-w-full min-w-full")},m(a,g){P(a,e,g),h(e,r),h(r,t),h(e,c),q(s,e,null),h(e,o),q(i,e,null),h(e,k),h(e,f),h(f,_),I=!0,p||(y=[N(r,"click",u[7]),N(f,"click",u[8])],p=!0)},p(a,g){const d={};g&5&&(d.project=a[0][a[2][0]]),s.$set(d);const $={};g&5&&($.project=a[0][a[2][1]]),i.$set($)},i(a){I||(T(s.$$.fragment,a),T(i.$$.fragment,a),I=!0)},o(a){D(s.$$.fragment,a),D(i.$$.fragment,a),I=!1},d(a){a&&m(e),J(s),J(i),p=!1,se(y)}}}function Te(u){let e,r,t=u[0].length&&we(u);return{c(){t&&t.c(),e=H()},l(l){t&&t.l(l),e=H()},m(l,c){t&&t.m(l,c),P(l,e,c),r=!0},p(l,c){l[0].length?t?(t.p(l,c),c&1&&T(t,1)):(t=we(l),t.c(),T(t,1),t.m(e.parentNode,e)):t&&(F(),D(t,1,1,()=>{t=null}),Q())},i(l){r||(T(t),r=!0)},o(l){D(t),r=!1},d(l){t&&t.d(l),l&&m(e)}}}function be(u){let e,r,t,l;return r=new Y({props:{project:u[1]}}),{c(){e=v("div"),z(r.$$.fragment),t=V(),this.h()},l(c){e=b(c,"DIV",{class:!0});var s=E(e);W(r.$$.fragment,s),t=x(s),s.forEach(m),this.h()},h(){n(e,"class","w-full h-[50vh]")},m(c,s){P(c,e,s),q(r,e,null),h(e,t),l=!0},p(c,s){const o={};s&1&&(o.project=c[1]),r.$set(o)},i(c){l||(T(r.$$.fragment,c),l=!0)},o(c){D(r.$$.fragment,c),l=!1},d(c){c&&m(e),J(r)}}}function we(u){let e,r,t,l,c,s,o,i,k,f,_,w,I=u[2],p=[];for(let a=0;a<I.length;a+=1)p[a]=ke(ve(u,I,a));const y=a=>D(p[a],1,1,()=>{p[a]=null});return{c(){e=v("div"),r=v("button"),t=v("img"),c=V();for(let a=0;a<p.length;a+=1)p[a].c();s=V(),o=v("button"),i=v("img"),this.h()},l(a){e=b(a,"DIV",{class:!0});var g=E(e);r=b(g,"BUTTON",{});var d=E(r);t=b(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(m),c=x(g);for(let j=0;j<p.length;j+=1)p[j].l(g);s=x(g),o=b(g,"BUTTON",{});var $=E(o);i=b($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(m),g.forEach(m),this.h()},h(){B(t.src,l="arrow.svg")||n(t,"src",l),n(t,"alt","Left Arrow"),n(t,"class","w-20"),B(i.src,k="chevron-right.svg")||n(i,"src",k),n(i,"alt","Left Arrow"),n(i,"class","w-20"),n(e,"class","flex h-[50vh] gap-10 items-center justify-center max-w-full min-w-full")},m(a,g){P(a,e,g),h(e,r),h(r,t),h(e,c);for(let d=0;d<p.length;d+=1)p[d].m(e,null);h(e,s),h(e,o),h(o,i),f=!0,_||(w=[N(r,"click",u[5]),N(o,"click",u[6])],_=!0)},p(a,g){if(g&5){I=a[2];let d;for(d=0;d<I.length;d+=1){const $=ve(a,I,d);p[d]?(p[d].p($,g),T(p[d],1)):(p[d]=ke($),p[d].c(),T(p[d],1),p[d].m(e,s))}for(F(),d=I.length;d<p.length;d+=1)y(d);Q()}},i(a){if(!f){for(let g=0;g<I.length;g+=1)T(p[g]);f=!0}},o(a){p=p.filter(Boolean);for(let g=0;g<p.length;g+=1)D(p[g]);f=!1},d(a){a&&m(e),$e(p,a),_=!1,se(w)}}}function ke(u){let e,r;return e=new Y({props:{project:u[0][u[1]]}}),{c(){z(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){q(e,t,l),r=!0},p(t,l){const c={};l&5&&(c.project=t[0][t[1]]),e.$set(c)},i(t){r||(T(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Pe(u){let e,r,t,l,c,s;Ee(u[4]);const o=[Te,xe,Ve],i=[];function k(f,_){return f[3]>1500?0:f[3]>1110?1:2}return e=k(u),r=i[e]=o[e](u),{c(){r.c(),t=H()},l(f){r.l(f),t=H()},m(f,_){i[e].m(f,_),P(f,t,_),l=!0,c||(s=N(window,"resize",u[4]),c=!0)},p(f,[_]){let w=e;e=k(f),e===w?i[e].p(f,_):(F(),D(i[w],1,1,()=>{i[w]=null}),Q(),r=i[e],r?r.p(f,_):(r=i[e]=o[e](f),r.c()),T(r,1),r.m(t.parentNode,t))},i(f){l||(T(r),l=!0)},o(f){D(r),l=!1},d(f){i[e].d(f),f&&m(t),c=!1,s()}}}function De(u,e,r){let t=0,l=[],c=[0,1,2],s;ye(async()=>r(0,l=await(await fetch("projects.json")).json()));function o(){r(3,s=window.innerWidth)}const i=()=>r(1,t-=1),k=()=>r(1,t+=1),f=()=>r(1,t-=1),_=()=>r(1,t+=1);return u.$$.update=()=>{u.$$.dirty&3&&t<0&&r(1,t=l.length-1),u.$$.dirty&3&&r(2,c=[t%l.length,(t+1)%l.length,(t+2)%l.length])},[l,t,c,s,o,i,k,f,_]}class Be extends Z{constructor(e){super(),ee(this,e,De,Pe,te,{})}}function Ge(u){let e,r,t,l,c,s,o,i;return{c(){e=v("div"),r=V(),t=v("div"),l=v("script"),s=V(),o=v("script"),i=U(`xProductBrowser(\r
            "categoriesPerRow=3",\r
            "views=grid(20,3) list(60) table(60)",\r
            "categoryView=grid",\r
            "searchView=list",\r
            "id=my-store-85014551"\r
        );`),this.h()},l(k){e=b(k,"DIV",{id:!0}),E(e).forEach(m),r=x(k),t=b(k,"DIV",{});var f=E(t);l=b(f,"SCRIPT",{"data-cfasync":!0,type:!0,src:!0,charset:!0});var _=E(l);_.forEach(m),s=x(f),o=b(f,"SCRIPT",{type:!0});var w=E(o);i=L(w,`xProductBrowser(\r
            "categoriesPerRow=3",\r
            "views=grid(20,3) list(60) table(60)",\r
            "categoryView=grid",\r
            "searchView=list",\r
            "id=my-store-85014551"\r
        );`),w.forEach(m),f.forEach(m),this.h()},h(){n(e,"id","my-store-85014551"),n(l,"data-cfasync","false"),n(l,"type","text/javascript"),B(l.src,c="https://app.ecwid.com/script.js?85014551&data_platform=code&data_date=2023-02-28")||n(l,"src",c),n(l,"charset","utf-8"),n(o,"type","text/javascript")},m(k,f){P(k,e,f),P(k,r,f),P(k,t,f),h(t,l),h(t,s),h(t,o),h(o,i)},p:G,i:G,o:G,d(k){k&&m(e),k&&m(r),k&&m(t)}}}class Me extends Z{constructor(e){super(),ee(this,e,null,Ge,te,{})}}function Ce(u){let e,r,t,l,c,s,o,i,k;return s=new Be({}),{c(){e=v("div"),r=v("button"),t=v("img"),c=V(),z(s.$$.fragment),this.h()},l(f){e=b(f,"DIV",{class:!0});var _=E(e);r=b(_,"BUTTON",{class:!0});var w=E(r);t=b(w,"IMG",{src:!0,alt:!0,class:!0}),w.forEach(m),c=x(_),W(s.$$.fragment,_),_.forEach(m),this.h()},h(){B(t.src,l="home.svg")||n(t,"src",l),n(t,"alt","Home"),n(t,"class","w-12"),n(r,"class","absolute top-8 right-8"),n(e,"class","relative w-full h-full box-border p-20 grid items-center")},m(f,_){P(f,e,_),h(e,r),h(r,t),h(e,c),q(s,e,null),o=!0,i||(k=N(r,"click",u[4]),i=!0)},p:G,i(f){o||(T(s.$$.fragment,f),o=!0)},o(f){D(s.$$.fragment,f),o=!1},d(f){f&&m(e),J(s),i=!1,k()}}}function Ne(u){let e,r,t,l,c,s,o,i,k,f,_,w,I,p,y,a,g,d,$,j,R,M,S,A,re,le,ce;return{c(){e=v("div"),r=v("h1"),t=U("Ionu\u0163 Cicio"),l=V(),c=v("div"),s=v("div"),o=v("a"),i=v("img"),f=V(),_=v("a"),w=v("img"),p=V(),y=v("a"),a=v("img"),d=V(),$=v("button"),j=v("img"),M=V(),S=v("button"),A=v("span"),re=U("PROJECTS!"),this.h()},l(K){e=b(K,"DIV",{class:!0});var O=E(e);r=b(O,"H1",{class:!0});var ie=E(r);t=L(ie,"Ionu\u0163 Cicio"),ie.forEach(m),l=x(O),c=b(O,"DIV",{class:!0});var X=E(c);s=b(X,"DIV",{class:!0});var C=E(s);o=b(C,"A",{href:!0});var ae=E(o);i=b(ae,"IMG",{src:!0,alt:!0,class:!0}),ae.forEach(m),f=x(C),_=b(C,"A",{href:!0});var ne=E(_);w=b(ne,"IMG",{src:!0,alt:!0,class:!0}),ne.forEach(m),p=x(C),y=b(C,"A",{href:!0,target:!0});var oe=E(y);a=b(oe,"IMG",{src:!0,alt:!0,class:!0}),oe.forEach(m),d=x(C),$=b(C,"BUTTON",{});var ue=E($);j=b(ue,"IMG",{src:!0,alt:!0,class:!0}),ue.forEach(m),C.forEach(m),M=x(X),S=b(X,"BUTTON",{});var fe=E(S);A=b(fe,"SPAN",{class:!0});var he=E(A);re=L(he,"PROJECTS!"),he.forEach(m),fe.forEach(m),X.forEach(m),O.forEach(m),this.h()},h(){n(r,"class","text-8xl sm:text-9xl text-dfg text-center"),B(i.src,k="github.svg")||n(i,"src",k),n(i,"alt","GitHub"),n(i,"class","w-14"),n(o,"href","https://github.com/CuriousCI"),B(w.src,I="linkedin.svg")||n(w,"src",I),n(w,"alt","LinkedIn"),n(w,"class","w-12"),n(_,"href","https://www.linkedin.com/in/ionut-cicio-395541211/"),B(a.src,g="resume.svg")||n(a,"src",g),n(a,"alt","Resume"),n(a,"class","w-14"),n(y,"href","https://en.wikipedia.org/wiki/Work_in_process"),n(y,"target","_blank"),B(j.src,R="icon.svg")||n(j,"src",R),n(j,"alt","Store"),n(j,"class","w-14"),n(s,"class","flex items-center gap-4 justify-center sm:justify-start"),n(A,"class","text-white text-5xl sm:text-6xl text-center projects"),n(c,"class","flex items-center justify-between flex-col md:flex-row"),n(e,"class","relative")},m(K,O){P(K,e,O),h(e,r),h(r,t),h(e,l),h(e,c),h(c,s),h(s,o),h(o,i),h(s,f),h(s,_),h(_,w),h(s,p),h(s,y),h(y,a),h(s,d),h(s,$),h($,j),h(c,M),h(c,S),h(S,A),h(A,re),le||(ce=[N($,"click",u[2]),N(S,"click",u[3])],le=!0)},p:G,i:G,o:G,d(K){K&&m(e),le=!1,se(ce)}}}function Re(u){let e,r;return e=new Me({}),{c(){z(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){q(e,t,l),r=!0},p:G,i(t){r||(T(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Se(u){let e,r,t,l,c,s,o,i,k,f,_,w,I,p;const y=[Re,Ne,Ce],a=[];function g(d,$){return d[1]?0:d[0]?1:2}return _=g(u),w=a[_]=y[_](u),{c(){e=v("div"),r=v("div"),t=V(),l=v("div"),c=v("script"),o=V(),i=v("script"),k=U(`xProductBrowser(
                "categoriesPerRow=3",
                "views=grid(20,3) list(60) table(60)",
                "categoryView=grid",
                "searchView=list",
                "id=my-store-85014551"
            );`),f=V(),w.c(),I=H(),this.h()},l(d){e=b(d,"DIV",{class:!0});var $=E(e);r=b($,"DIV",{id:!0}),E(r).forEach(m),t=x($),l=b($,"DIV",{});var j=E(l);c=b(j,"SCRIPT",{"data-cfasync":!0,type:!0,src:!0,charset:!0});var R=E(c);R.forEach(m),o=x(j),i=b(j,"SCRIPT",{type:!0});var M=E(i);k=L(M,`xProductBrowser(
                "categoriesPerRow=3",
                "views=grid(20,3) list(60) table(60)",
                "categoryView=grid",
                "searchView=list",
                "id=my-store-85014551"
            );`),M.forEach(m),j.forEach(m),$.forEach(m),f=x(d),w.l(d),I=H(),this.h()},h(){n(r,"id","my-store-85014551"),n(c,"data-cfasync","false"),n(c,"type","text/javascript"),B(c.src,s="https://app.ecwid.com/script.js?85014551&data_platform=code&data_date=2023-02-28")||n(c,"src",s),n(c,"charset","utf-8"),n(i,"type","text/javascript"),n(e,"class","relative z-50")},m(d,$){P(d,e,$),h(e,r),h(e,t),h(e,l),h(l,c),h(l,o),h(l,i),h(i,k),P(d,f,$),a[_].m(d,$),P(d,I,$),p=!0},p(d,[$]){let j=_;_=g(d),_===j?a[_].p(d,$):(F(),D(a[j],1,1,()=>{a[j]=null}),Q(),w=a[_],w?w.p(d,$):(w=a[_]=y[_](d),w.c()),T(w,1),w.m(I.parentNode,I))},i(d){p||(T(w),p=!0)},o(d){D(w),p=!1},d(d){d&&m(e),d&&m(f),a[_].d(d),d&&m(I)}}}function Ae(u,e,r){let t=!0,l=!1;return[t,l,()=>r(1,l=!0),()=>r(0,t=!1),()=>r(0,t=!0)]}class Ue extends Z{constructor(e){super(),ee(this,e,Ae,Se,te,{})}}export{Ue as default};
