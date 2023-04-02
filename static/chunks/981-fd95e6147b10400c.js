(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{6601:function(){},4228:function(){},6531:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var s=r(9268);r(6006);var a=r(8683),n=r.n(a);function i(e){let{children:t,className:r}=e;return(0,s.jsx)("div",{className:n()("drop-shadow-none rounded-lg",r),children:t})}},9865:function(e,t,r){"use strict";r.d(t,{S:function(){return a}});var s=r(9268);function a(){return(0,s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M10.0001 1.66614C5.40508 1.66614 1.66675 5.40447 1.66675 9.99947C1.66675 14.5945 5.40508 18.3328 10.0001 18.3328C14.5951 18.3328 18.3334 14.5945 18.3334 9.99947C18.3334 5.40447 14.5951 1.66614 10.0001 1.66614ZM10.0001 16.6661C6.32425 16.6661 3.33341 13.6753 3.33341 9.99947C3.33341 6.32364 6.32425 3.3328 10.0001 3.3328C13.6759 3.3328 16.6667 6.32364 16.6667 9.99947C16.6667 13.6753 13.6759 16.6661 10.0001 16.6661Z",fill:"white"}),(0,s.jsx)("path",{d:"M10.8334 5.83289H9.16675V10.3446L11.9109 13.0887L13.0892 11.9104L10.8334 9.65455V5.83289Z",fill:"white"})]})}},3875:function(e,t,r){"use strict";r.d(t,{l:function(){return a}});var s=r(9268);function a(){return(0,s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M13.3332 10.5745V15.0662C13.3332 17.0162 12.0332 18.3078 10.0915 18.3078H4.90817C2.9665 18.3078 1.6665 17.0162 1.6665 15.0662V8.59115C1.6665 6.64115 2.9665 5.34949 4.90817 5.34949H8.09984C8.95817 5.34949 9.78317 5.69115 10.3915 6.29949L12.3832 8.28282C12.9915 8.89115 13.3332 9.71615 13.3332 10.5745Z",stroke:"white",strokeWidth:"0.959395",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M18.3334 6.87457V11.3662C18.3334 13.3079 17.0334 14.6079 15.0917 14.6079H13.3334V10.5746C13.3334 9.71623 12.9917 8.89123 12.3834 8.2829L10.3917 6.29957C9.78341 5.69124 8.95841 5.34957 8.10008 5.34957H6.66675V4.8829C6.66675 2.94124 7.96675 1.64124 9.90841 1.64124H13.1001C13.9584 1.64124 14.7834 1.9829 15.3917 2.59124L17.3834 4.5829C17.9917 5.19124 18.3334 6.01623 18.3334 6.87457Z",stroke:"white",strokeWidth:"0.959395",strokeLinecap:"round",strokeLinejoin:"round"})]})}},3450:function(e,t,r){"use strict";r.d(t,{x:function(){return b}});var s=r(9268),a=r(6394),n=r.n(a),i=r(6006),o=r(5936),l=r(8144),c=r(3094),d=r(9865),u=r(1494),f=r(7085),m=r(210),p=r(9791),x=r(8919);function b(e){let{onClick:t}=e,[r,a]=(0,i.useState)(0),[b,g]=(0,i.useState)(0),[h,w]=(0,i.useState)(0),y=l.c.getItem("adress"),v="0x8bD582Da59Cc09b4486D29eD180FB23f94951a49",j="0x3f38e875edc17ae02730984a6f5e2a4a4ff15842";async function N(){x.ZP.loading("Carregando...");let e=await (0,o.UT)(j,3,b);await e.wait(1),(0,o.TD)(y).then(e=>a(Number(e))).catch(e=>console.log(e));let t=await (0,o.n4)(v,3,j);w(Number(t)),x.ZP.success("Sucesso!!")}return b<0&&g(0),console.log(b),(0,i.useEffect)(()=>{let e=l.c.getItem("adress");(0,o.TD)(e).then(e=>a(Number(e))).catch(e=>console.log(e)),(0,o.n4)(v,3,j).then(e=>w(Number(e))).catch(e=>console.log(e))},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50",children:[(0,s.jsx)(m.x,{className:"absolute top-16 right-[32%] cursor-pointer",onClick:t}),(0,s.jsxs)("div",{className:"h-[90vh] w-[40%] flex flex-col gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]",children:[(0,s.jsx)(n(),{height:1e3,width:1e3,src:"/ticketNao.png",alt:"preview",className:"w-[70%] self-center"}),(0,s.jsxs)("div",{className:"flex items-center w-full justify-between",children:[(0,s.jsx)(c.D,{color:"white",className:"text-lg font-bold",children:"Ticket Espectador"}),(0,s.jsx)(c.D,{color:"white",className:"text-lg font-bold",children:"$50"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(u.D,{}),(0,s.jsxs)(c.D,{className:"text-[rgba(255,255,255,.7)] font-medium",children:["Evento presencial em"," ",(0,s.jsx)("span",{className:"border-b border-brand-text text-brand-text",children:"Igloo Network - S\xe3o Paulo, SP"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(d.S,{}),(0,s.jsxs)(c.D,{className:"text-[rgba(255,255,255,.7)] font-medium",children:["31 mar - 2023 • 11:52 ",">"," 17 abr - 2023 • 11:00"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("div",{className:"bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between w-[50%] h-12 p-3 border border-[rgba(255,255,255,.3)]",children:["USD ",(0,s.jsx)("span",{children:r})]}),(0,s.jsx)("div",{className:"bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center gap-2 w-[50%] h-12 p-3 border border-[rgba(255,255,255,.3)]",children:"Token n\xe3o beneficiente"})]}),(0,s.jsxs)("div",{className:"bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start gap-4 w-full h-full border border-[rgba(255,255,255,.3)]",children:[(0,s.jsxs)("div",{className:"w-full h-14 bg-[#26252F] rounded-t-lg flex items-center justify-between border-b px-4 border-[rgba(255,255,255,.3)]",children:[(0,s.jsx)(c.D,{color:"white",className:"font-medium",children:"Ingressos restantes"}),(0,s.jsx)(c.D,{color:"white",className:"font-medium",children:h})]}),(0,s.jsxs)("div",{className:"w-full flex items-center justify-between px-4",children:[(0,s.jsx)(c.D,{color:"white",className:"font-medium",children:"Qt de ingressos"}),(0,s.jsxs)("label",{className:"flex items-center gap-1 transition-all duration-300 ease-in-out",children:[(0,s.jsx)("div",{className:"border ".concat(0===b?"border-[rgba(255,255,255,0.3)]":"border-[rgba(255,255,255,1)]"," rounded-full w-6 h-6 flex justify-center items-center pr-[2px] cursor-pointer transition-all duration-300 ease-in-out"),onClick:()=>g(b-1),children:(0,s.jsx)(p.Z,{className:"rotate-90"})}),(0,s.jsx)("div",{className:"rounded-full w-6 h-6 p-3 bg-transparent flex justify-center items-center border outline-none transition-all duration-300 ease-in-out",children:b}),(0,s.jsx)("div",{className:"border rounded-full w-6 h-6 flex justify-center items-center pl-[1px] cursor-pointer ".concat(0!=b&&"bg-[#4C24D0]"," transition-all duration-300 ease-in-out"),onClick:()=>g(b+1),children:(0,s.jsx)(p.Z,{className:"-rotate-90"})})]})]}),(0,s.jsx)("div",{className:"flex w-full justify-center items-center text-base font-normal text-[rgba(255,255,255,.7)]",children:"Vendas at\xe9 17/04/2023"}),(0,s.jsx)(f.z,{onClick:N,className:"w-[80%] mb-4 text-white self-center text-lg font-normal rounded-lg outline-none border border-[rgba(255,255,255,.3)]",children:"Comprar"})]})]})]})})}r(4228)},6023:function(e,t,r){"use strict";r.d(t,{u:function(){return x}});var s=r(9268),a=r(6394),n=r.n(a),i=r(6006),o=r(5936),l=r(8144),c=r(3094),d=r(9865),u=r(1494),f=r(7085),m=r(210),p=r(9791);function x(e){let{onClick:t}=e,[r,a]=(0,i.useState)(0),[x,b]=(0,i.useState)(0),[g,h]=(0,i.useState)(0),w=l.c.getItem("adress"),y="0x8bD582Da59Cc09b4486D29eD180FB23f94951a49",v="0x3f38e875edc17ae02730984a6f5e2a4a4ff15842";async function j(){let e=await (0,o.UT)(v,2,x);await e.wait(1),(0,o.TD)(w).then(e=>a(Number(e))).catch(e=>console.log(e));let t=await (0,o.n4)(y,2,v);h(Number(t))}return x<0&&b(0),console.log(x),(0,i.useEffect)(()=>{let e=l.c.getItem("adress");(0,o.TD)(e).then(e=>a(Number(e))).catch(e=>console.log(e)),(0,o.n4)(y,2,v).then(e=>h(Number(e))).catch(e=>console.log(e))},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"fixed h-screen w-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50",children:[(0,s.jsx)(m.x,{className:"absolute top-16 right-[32%] cursor-pointer",onClick:t}),(0,s.jsxs)("div",{className:"h-[90vh] w-[40%] flex flex-col gap-4 px-20 p-8 bg-brand-primary rounded-2xl border border-[rgba(255,255,255,.3)]",children:[(0,s.jsx)(n(),{height:1e3,width:1e3,src:"/previewModal.png",alt:"preview",className:"w-[100%]"}),(0,s.jsxs)("div",{className:"flex items-center w-full justify-between",children:[(0,s.jsx)(c.D,{color:"white",className:"text-lg font-bold",children:"Ticket Espectador"}),(0,s.jsx)(c.D,{color:"white",className:"text-lg font-bold",children:"$100"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(u.D,{}),(0,s.jsxs)(c.D,{className:"text-[rgba(255,255,255,.7)] font-medium",children:["Evento presencial em"," ",(0,s.jsx)("span",{className:"border-b border-brand-text text-brand-text",children:"Igloo Network - S\xe3o Paulo, SP"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(d.S,{}),(0,s.jsxs)(c.D,{className:"text-[rgba(255,255,255,.7)] font-medium",children:["31 mar - 2023 • 11:52 ",">"," 17 abr - 2023 • 11:00"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("div",{className:"bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center justify-between gap-2 w-[70%] h-12 p-3 border border-[rgba(255,255,255,.3)]",children:["USD ",(0,s.jsx)("span",{children:r})]}),(0,s.jsxs)("div",{className:"bg-[#26252F] text-[rgba(255,255,255,.7)] rounded-lg flex items-center gap-2 w-[70%] h-12 p-3 border border-[rgba(255,255,255,.3)]",children:["Token beneficiente",(0,s.jsx)(n(),{src:"/verificado.png",alt:"verificado",height:1e3,width:1e3,className:"w-3"})]})]}),(0,s.jsxs)("div",{className:"bg-[#1B1A26] text-[rgba(255,255,255,.7)] rounded-lg flex flex-col items-start gap-4 w-full h-full border border-[rgba(255,255,255,.3)]",children:[(0,s.jsxs)("div",{className:"w-full h-14 bg-[#26252F] rounded-t-lg flex items-center justify-between border-b px-4 border-[rgba(255,255,255,.3)]",children:[(0,s.jsx)(c.D,{color:"white",className:"font-medium",children:"Ingressos restantes"}),(0,s.jsx)(c.D,{color:"white",className:"font-medium",children:g})]}),(0,s.jsxs)("div",{className:"w-full flex items-center justify-between px-4",children:[(0,s.jsx)(c.D,{color:"white",className:"font-medium",children:"Qt de ingressos"}),(0,s.jsxs)("label",{className:"flex items-center gap-1 transition-all duration-300 ease-in-out",children:[(0,s.jsx)("div",{className:"border ".concat(0===x?"border-[rgba(255,255,255,0.3)]":"border-[rgba(255,255,255,1)]"," rounded-full w-6 h-6 flex justify-center items-center pr-[2px] cursor-pointer transition-all duration-300 ease-in-out"),onClick:()=>b(x-1),children:(0,s.jsx)(p.Z,{className:"rotate-90"})}),(0,s.jsx)("div",{className:"rounded-full w-6 h-6 p-3 bg-transparent flex justify-center items-center border outline-none transition-all duration-300 ease-in-out",children:x}),(0,s.jsx)("div",{className:"border rounded-full w-6 h-6 flex justify-center items-center pl-[1px] cursor-pointer ".concat(0!=x&&"bg-[#4C24D0]"," transition-all duration-300 ease-in-out"),onClick:()=>b(x+1),children:(0,s.jsx)(p.Z,{className:"-rotate-90"})})]})]}),(0,s.jsx)("div",{className:"flex w-full justify-center items-center text-base font-normal text-[rgba(255,255,255,.7)]",children:"Vendas at\xe9 17/04/2023"}),(0,s.jsx)(f.z,{onClick:j,className:"w-[80%] mb-4 text-white self-center text-lg font-normal rounded-lg outline-none border border-[rgba(255,255,255,.3)]",children:"Comprar"})]})]})]})})}r(4228)},5936:function(e,t,r){"use strict";r.d(t,{TD:function(){return x},UT:function(){return p},Z6:function(){return m},n4:function(){return b}});var s=r(8592),a=r(2778),n=r(7838),i=r(1679);let o="0x1117e97C3b72B9723efC6875F37b9dF670F0eDCB",l="0x4a76e13F2182f8588fE354636899eDE070AEd8f6",c=window;function d(){c.ethereum||console.log("!metamask");let e=new s.Q(c.ethereum);return e}function u(){let e=new a.r("https://alfajores-forno.celo-testnet.org");return e}async function f(e,t){let r=d(),s=r.getSigner(),a=new n.CH(o,["function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool)"],r),l=a.connect(s),c=i.vz(t),u=await l.increaseAllowance(e,c.toString());return console.log(c.toString()),await u.wait(1),console.log(u),u}async function m(e,t){let r=d(),s=r.getSigner(),a=new n.CH(t,["function reedemPrize(uint id_) external"],r),i=a.connect(s),o=await i.reedemPrize(e);return o}async function p(e,t,r){let s=d(),a=s.getSigner(),i=new n.CH(e,["function viewTicketStatus(uint id_) public view returns(uint totalSupply, uint ticketPrice, bool isBenificent)"],s),o=i.viewTicketStatus(t);f(l,Number(o.ticketPrice)*r);let c=new n.CH(l,["function buyTicket(address collection_, uint id_, uint amount_)external"],s),u=c.connect(a),m=await u.buyTicket(e,t,r);return console.log(m),m}async function x(e){let t=u(),r=new n.CH(o,["function balanceOf(address account) public view virtual override returns (uint256)"],t),s=await r.balanceOf(e);return i.dF(s.toString())}async function b(e,t,r){let s=u(),a=new n.CH(r,["function balanceOf(address account, uint256 id) external view returns (uint256)"],s),i=await a.balanceOf(e,t);return console.log(i),i.toString()}},8919:function(e,t,r){"use strict";let s,a;r.d(t,{x7:function(){return ea},ZP:function(){return en}});var n,i=r(6006);let o={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,f=(e,t)=>{let r="",s="",a="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":s+="f"==n[1]?f(i,n):n+"{"+f(i,"k"==n[1]?"":t)+"}":"object"==typeof i?s+=f(i,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=f.p?f.p(n,i):n+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+s},m={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e},x=(e,t,r,s,a)=>{var n,i;let o=p(e),l=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[l]){let t=o!==e?e:(e=>{let t,r,s=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(r=t[3].replace(u," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);m[l]=f(a?{["@keyframes "+l]:t}:t,r?"":"."+l)}let x=r&&m.g?m.g:null;return r&&(m.g=m[l]),n=m[l],i=t,x?i.data=i.data.replace(x,n):-1===i.data.indexOf(n)&&(i.data=s?n+i.data:i.data+n),l},b=(e,t,r)=>e.reduce((e,s,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+s+(null==n?"":n)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return x(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let h,w,y,v=g.bind({k:1});function j(e,t){let r=this||{};return function(){let s=arguments;function a(n,i){let o=Object.assign({},n),l=o.className||a.className;r.p=Object.assign({theme:w&&w()},o),r.o=/ *go\d+/.test(l),o.className=g.apply(r,s)+(l?" "+l:""),t&&(o.ref=i);let c=e;return e[0]&&(c=o.as||e,delete o.as),y&&c[0]&&y(o),h(c,o)}return t?t(a):a}}var N=e=>"function"==typeof e,C=(e,t)=>N(e)?e(t):e,k=(s=0,()=>(++s).toString()),D=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},E=new Map,S=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),z({type:4,toastId:e})},1e3);E.set(e,t)},T=e=>{let t=E.get(e);t&&clearTimeout(t)},$=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&T(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?$(e,{type:1,toast:r}):$(e,{type:0,toast:r});case 3:let{toastId:s}=t;return s?S(s):e.toasts.forEach(e=>{S(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},F=[],P={toasts:[],pausedAt:void 0},z=e=>{P=$(P,e),F.forEach(e=>{e(P)})},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={})=>{let[t,r]=(0,i.useState)(P);(0,i.useEffect)(()=>(F.push(r),()=>{let e=F.indexOf(r);e>-1&&F.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var r,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||H[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),A=e=>(t,r)=>{let s=I(t,e,r);return z({type:2,toast:s}),s.id},L=(e,t)=>A("blank")(e,t);L.error=A("error"),L.success=A("success"),L.loading=A("loading"),L.custom=A("custom"),L.dismiss=e=>{z({type:3,toastId:e})},L.remove=e=>z({type:4,toastId:e}),L.promise=(e,t,r)=>{let s=L.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(L.success(C(t.success,e),{id:s,...r,...null==r?void 0:r.success}),e)).catch(e=>{L.error(C(t.error,e),{id:s,...r,...null==r?void 0:r.error})}),e};var Z=(e,t)=>{z({type:1,toast:{id:e,height:t}})},M=()=>{z({type:5,time:Date.now()})},_=e=>{let{toasts:t,pausedAt:r}=O(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,r]);let s=(0,i.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),a=(0,i.useCallback)((e,r)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:n}=r||{},i=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),o=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<o&&e.visible).length;return i.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:M,endPause:s,calculateOffset:a}}},B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=j("div")`
  position: absolute;
`,W=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?i.createElement(q,null,t):t:"blank"===r?null:i.createElement(W,null,i.createElement(V,{...s}),"loading"!==r&&i.createElement(Q,null,"error"===r?i.createElement(B,{...s}):i.createElement(U,{...s})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,G=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=D()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),G(r)];return{animation:t?`${v(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(R,{toast:e}),o=i.createElement(K,{...e.ariaProps},C(e.message,e));return i.createElement(J,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:n,message:o}):i.createElement(i.Fragment,null,n,o))});n=i.createElement,f.p=void 0,h=n,w=void 0,y=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let n=i.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:n,className:t,style:r},a)},er=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},es=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ea=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,containerStyle:n,containerClassName:o})=>{let{toasts:l,handlers:c}=_(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,o=er(n,c.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return i.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?es:"",style:o},"custom"===r.type?C(r.message,r):a?a(r):i.createElement(ee,{toast:r,position:n}))}))},en=L}}]);