import{S as an,i as rn,s as ln,k as fn,l as un,m as cn,h as k,n as Q,b as sn,C as mn,B as nn,D as pn,o as wn,E as gn,w as _n,a as bn,x as yn,c as xn,y as Cn,F as Sn,G as vn,H as Dn,f as tn,t as en,z as En}from"../../chunks/index-d3d13c31.js";import{_ as Gn}from"../../chunks/preload-helper-9b728935.js";const $=["#1d2021","#fbf1c7","#ebdbb2","#d5c4a1","#bdae93","#a89984","#fb4934","#b8bb26","#fabd2f","#83a598","#d3869b","#8ec07c","#928374","#fe8019","#cc2412","#98971a","#d79921","#458588","#b16286","#689d6a","#a89984","#d65d0e"],Fn=.5*(Math.sqrt(3)-1),T=(3-Math.sqrt(3))/6,jn=1/3,j=1/6,N=n=>Math.floor(n)|0,on=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),h=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function zn(n=Math.random){const t=dn(n),a=new Float64Array(t).map(l=>on[l%12*2]),e=new Float64Array(t).map(l=>on[l%12*2+1]);return function(i,r){let c=0,o=0,u=0;const m=(i+r)*Fn,s=N(i+m),v=N(r+m),_=(s+v)*T,w=s-_,d=v-_,f=i-w,b=r-d;let z,L;f>b?(z=1,L=0):(z=0,L=1);const P=f-z+T,D=b-L+T,E=f-1+2*T,y=b-1+2*T,G=s&255,F=v&255;let x=.5-f*f-b*b;if(x>=0){const p=G+t[F],A=a[p],M=e[p];x*=x,c=x*x*(A*f+M*b)}let C=.5-P*P-D*D;if(C>=0){const p=G+z+t[F+L],A=a[p],M=e[p];C*=C,o=C*C*(A*P+M*D)}let S=.5-E*E-y*y;if(S>=0){const p=G+1+t[F+1],A=a[p],M=e[p];S*=S,u=S*S*(A*E+M*y)}return 70*(c+o+u)}}function An(n=Math.random){const t=dn(n),a=new Float64Array(t).map(i=>h[i%12*3]),e=new Float64Array(t).map(i=>h[i%12*3+1]),l=new Float64Array(t).map(i=>h[i%12*3+2]);return function(r,c,o){let u,m,s,v;const _=(r+c+o)*jn,w=N(r+_),d=N(c+_),f=N(o+_),b=(w+d+f)*j,z=w-b,L=d-b,P=f-b,D=r-z,E=c-L,y=o-P;let G,F,x,C,S,p;D>=E?E>=y?(G=1,F=0,x=0,C=1,S=1,p=0):D>=y?(G=1,F=0,x=0,C=1,S=0,p=1):(G=0,F=0,x=1,C=1,S=0,p=1):E<y?(G=0,F=0,x=1,C=0,S=1,p=1):D<y?(G=0,F=1,x=0,C=0,S=1,p=1):(G=0,F=1,x=0,C=1,S=1,p=0);const A=D-G+j,M=E-F+j,X=y-x+j,Y=D-C+2*j,B=E-S+2*j,U=y-p+2*j,Z=D-1+3*j,J=E-1+3*j,K=y-1+3*j,O=w&255,V=d&255,W=f&255;let I=.6-D*D-E*E-y*y;if(I<0)u=0;else{const g=O+t[V+t[W]];I*=I,u=I*I*(a[g]*D+e[g]*E+l[g]*y)}let R=.6-A*A-M*M-X*X;if(R<0)m=0;else{const g=O+G+t[V+F+t[W+x]];R*=R,m=R*R*(a[g]*A+e[g]*M+l[g]*X)}let q=.6-Y*Y-B*B-U*U;if(q<0)s=0;else{const g=O+C+t[V+S+t[W+p]];q*=q,s=q*q*(a[g]*Y+e[g]*B+l[g]*U)}let H=.6-Z*Z-J*J-K*K;if(H<0)v=0;else{const g=O+1+t[V+1+t[W+1]];H*=H,v=H*H*(a[g]*Z+e[g]*J+l[g]*K)}return 32*(u+m+s+v)}}function dn(n){const a=new Uint8Array(512);for(let e=0;e<512/2;e++)a[e]=e;for(let e=0;e<512/2-1;e++){const l=e+~~(n()*(256-e)),i=a[e];a[e]=a[l],a[l]=i}for(let e=256;e<512;e++)a[e]=a[e-256];return a}function Mn(n){let t,a,e,l,i=0;n.windowResized=()=>n.resizeCanvas(n.windowWidth,n.windowHeight),n.setup=()=>{n.createCanvas(n.windowWidth,n.windowHeight),n.colorMode(n.HSB,360,100,100,100),n.randomSeed(0),n.pixelDensity(1),n.angleMode(n.DEGREES),n.noStroke(),n.frameRate(30),t=zn(),a=An(),e=n.createGraphics(n.width,n.height),c(e,.01,!0),c(e,.01,!1),l=r(n.height/20,300)},n.draw=()=>{i++,n.background(0);for(let o of l){n.drawingContext.filter=`blur(${n.int(n.map(n.abs(o.y-n.height*3/5),0,n.height/2+o.yStep,0,20))}px)`,n.push(),n.translate(0,o.y+n.sin(i)),n.drawingContext.fillStyle=o.gradient,n.beginShape();let u=-o.xStep;for(let m of o.x)n.curveVertex(u,m*n.sin(i+m*10)),u+=o.xStep;n.vertex(n.width+o.xStep,0),n.vertex(-o.xStep,n.height+o.yStep),n.endShape(n.CLOSE),n.pop()}n.drawingContext.filter=`blur(${0}px)`,n.image(e,0,0)};function r(o,u){let m=[];for(let s=-o;s<n.height+o;s+=o/2){let v=n.map(t(s/50,n.frameCount/300),-1,1,0,1),_=n.random()>.5?n.drawingContext.createLinearGradient(0,-o*2,n.width,o*2):n.drawingContext.createLinearGradient(n.width,-o*2,0,o*2);_.addColorStop(0,$[0]),_.addColorStop(v,$[2]),_.addColorStop(1,$[1]);let w=[];for(let f=-u;f<n.width+u;f+=u)w.push(a(f/400,s/50,n.frameCount/200)*o*4);let d={y:s,x:w,yStep:o,xStep:u,gradient:_,step:0,height:0};m.push(d)}return m}function c(o,u,m){for(let s=0;s<n.width*n.height*u;s++){let v=n.random(n.width),_=n.random(n.height),w=n.width/n.map(u,0,1,n.width/50,n.width/1e4)*n.random(1,1.5),d=n.int(n.random(8))*360/8,f=w*n.sqrt(2),b=o.drawingContext.createLinearGradient(n.cos(d)*f,n.sin(d)*f,n.cos(d+n.PI)*f,n.sin(d+n.PI)*f),z=n.random(1),L=z+n.random(3);b.addColorStop(0,n.color(0,z)),b.addColorStop(1,n.color(0,L)),o.noStroke(),m?o.drawingContext.fillStyle=b:o.erase(n.random(2,8),0),o.push(),o.translate(v,_),o.rotate(n.random(360)),o.shearX(n.random(360/4)*(n.random()>.5?-1:1)),o.shearY(n.random(360/4)*(n.random()>.5?-1:1)),o.rectMode(n.CENTER),o.ellipse(0,0,w,w),o.pop(),m||o.noErase()}}}function Ln(n){let t,a,e;return{c(){t=fn("div"),this.h()},l(l){t=un(l,"DIV",{style:!0,class:!0}),cn(t).forEach(k),this.h()},h(){Q(t,"style",n[0]),Q(t,"class","m-0")},m(l,i){sn(l,t,i),a||(e=mn(n[1].call(null,t)),a=!0)},p(l,[i]){i&1&&Q(t,"style",l[0])},i:nn,o:nn,d(l){l&&k(t),a=!1,e()}}}function Pn(n,t){return t.forEach(([a,e])=>n[a]=e),n}function In(n,t,a){let{target:e=void 0}=t,{sketch:l=void 0}=t,{parentDivStyle:i="display: block;"}=t,{debug:r=!1}=t,c;const o=pn(),u={ref(){o("ref",e)},instance(){o("instance",c)}};function m(s){return a(2,e=s),{destroy(){a(2,e=void 0)}}}return wn(async()=>{const s=await Gn(()=>import("../../chunks/p5.min-28751275.js").then(d=>d.p),[],import.meta.url),{default:v}=s,w=Object.entries(s).filter(([d,f])=>f instanceof Function&&d[0]!=="_"&&d!=="default");r&&console.log("available p5 native classes",w),c=new v(d=>(d=Pn(d,w),r&&console.log("p5 instance",d),window._p5Instance=d,l(d)),e),u.ref(),u.instance()}),n.$$set=s=>{"target"in s&&a(2,e=s.target),"sketch"in s&&a(3,l=s.sketch),"parentDivStyle"in s&&a(0,i=s.parentDivStyle),"debug"in s&&a(4,r=s.debug)},[i,m,e,l,r]}class Rn extends an{constructor(t){super(),rn(this,t,In,Ln,ln,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function qn(n){let t,a,e;t=new Rn({props:{sketch:Mn,parentDivStyle:"position: absolute"}});const l=n[1].default,i=gn(l,n,n[0],null);return{c(){_n(t.$$.fragment),a=bn(),i&&i.c()},l(r){yn(t.$$.fragment,r),a=xn(r),i&&i.l(r)},m(r,c){Cn(t,r,c),sn(r,a,c),i&&i.m(r,c),e=!0},p(r,[c]){i&&i.p&&(!e||c&1)&&Sn(i,l,r,r[0],e?Dn(l,r[0],c,null):vn(r[0]),null)},i(r){e||(tn(t.$$.fragment,r),tn(i,r),e=!0)},o(r){en(t.$$.fragment,r),en(i,r),e=!1},d(r){En(t,r),r&&k(a),i&&i.d(r)}}}function Hn(n,t,a){let{$$slots:e={},$$scope:l}=t;return n.$$set=i=>{"$$scope"in i&&a(0,l=i.$$scope)},[l,e]}class On extends an{constructor(t){super(),rn(this,t,Hn,qn,ln,{})}}export{On as default};
