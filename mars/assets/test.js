!function(s){function e(e){for(var t,n,a=e[0],l=e[1],o=e[2],c=0,r=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&r.push(u[n][0]),u[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(s[t]=l[t]);for(d&&d(e);r.length;)r.shift()();return m.push.apply(m,o||[]),i()}function i(){for(var e,t=0;t<m.length;t++){for(var n=m[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==u[o]&&(a=!1)}a&&(m.splice(t--,1),e=c(c.s=n[0]))}return e}var n={},u={2:0},m=[];function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=s,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var l=0;l<t.length;l++)e(t[l]);var d=a;m.push([24,0]),i()}([,function(e,t,n){"use strict";t.__esModule=!0;var a=n(2);t.Toast=a.default;var l=n(4);t.Svga=l.default;var o=n(6);t.Mask=o.default;var c=n(8);t.Loading=c.default;var r=n(10);t.Img=r.default},function(e,t,n){"use strict";t.__esModule=!0;var c=n(0),r=n(0),s=n(3),i=null,u=null;t.default=function(){var e=r.useState(""),t=e[0],n=e[1],a=r.useState(!1),l=a[0],o=a[1];window.setToast=n;return r.useEffect(function(){""!==t&&(clearTimeout(i),clearTimeout(u),u=i=null,o(!0),i=setTimeout(function(){o(!1)},3e3),u=setTimeout(function(){n("")},3500))},[t]),c.createElement("div",{className:""+(""===t?s.none:s.toast)},c.createElement("div",{className:s.text+" "+(l?s.big:s.small)},t))}},function(e,t,n){e.exports={none:"none--1a16k",toast:"toast--3JZ16",text:"text--DmjBa",big:"big--xpw4W",small:"small--7PXnw"}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,c,r,s){return new(r=r||Promise)(function(n,t){function a(e){try{o(s.next(e))}catch(e){t(e)}}function l(e){try{o(s.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,l)}o((s=s.apply(e,c||[])).next())})},s=this&&this.__generator||function(n,a){var l,o,c,e,r={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(l)throw new TypeError("Generator is already executing.");for(;r;)try{if(l=1,o&&(c=2&t[0]?o.return:t[0]?o.throw||((c=o.return)&&c.call(o),0):o.next)&&!(c=c.call(o,t[1])).done)return c;switch(o=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return r.label++,{value:t[1],done:!1};case 5:r.label++,o=t[1],t=[0];continue;case 7:t=r.ops.pop(),r.trys.pop();continue;default:if(!(c=0<(c=r.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){r=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){r.label=t[1];break}if(6===t[0]&&r.label<c[1]){r.label=c[1],c=t;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(t);break}c[2]&&r.ops.pop(),r.trys.pop();continue}t=a.call(n,r)}catch(e){t=[6,e],o=0}finally{l=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};t.__esModule=!0;var a=n(0),l=n(0),o=n(5),i=n(14),u=null;t.default=function(e){var c=e.svga;return l.useEffect(function(){var a=new i.Downloader,l=new i.Parser,o=new i.Player(u);r(void 0,void 0,void 0,function(){var t,n;return s(this,function(e){switch(e.label){case 0:return[4,a.get(c)];case 1:return t=e.sent(),[4,l.do(t)];case 2:return n=e.sent(),o.set({loop:1,fillMode:"forwards"}),[4,o.mount(n)];case 3:return e.sent(),o.$on("start",function(){}).$on("pause",function(){}).$on("stop",function(){}).$on("end",function(){}).$on("clear",function(){}).$on("process",function(){83.5<o.progress&&o.pause()}),o.start(),[2]}})})},[]),a.createElement("canvas",{className:o.canvas,ref:function(e){u=e}})}},function(e,t,n){e.exports={canvas:"canvas--3D5EU"}},function(e,t,n){"use strict";t.__esModule=!0;var d=n(0),f=n(0),w=n(7);t.default=function(){var e=f.useState(!1),t=e[0],n=e[1],a=f.useState(!1),l=a[0],o=a[1],c=f.useState(null),r=c[0],s=c[1],i=f.useState(0),u=i[0],m=i[1];window.setMask=s,f.useEffect(function(){null!==r?(m(r),n(!0),o(!0)):o(!1)},[r]);return d.createElement("div",{className:t?w.modal:w.none},d.createElement("div",{className:w.bg+" "+(l?w.show:w.hide),onClick:function(){o(!1)},onAnimationEnd:function(e){-1!==e.animationName.indexOf("hide")&&(s(null),n(!1))}}),d.createElement("div",{className:w.child+" "+(l?w.big:w.small)},function(){switch(u){case 0:return d.createElement("div",{className:w.test},"1")}}()))}},function(e,t,n){e.exports={none:"none--8n_VE",modal:"modal--I_VD3",child:"child--3OxZ7",bg:"bg--3F4zK",big:"big--2u593",small:"small--UoiYh",show:"show--5m0Sb",hide:"hide--t8SeK",test:"test--1z9Hj"}},function(e,t,n){"use strict";t.__esModule=!0;var s=n(0),i=n(0),u=n(9);t.default=function(e){var t=e._show||!0,n=i.useState(!1),a=n[0],l=n[1],o=i.useState(!1),c=o[0],r=o[1];window.setLoading=r;return i.useEffect(function(){c&&l(!0)},[c]),s.createElement("div",{className:(a?u.loadingContent:u.none)+" "+(!t&&u.opacity)},s.createElement("div",{className:u.loadingBg+" "+(c?u.show:u.hide),onAnimationEnd:function(e){-1!==e.animationName.indexOf("hide")&&l(!1)}}),s.createElement("div",{className:u.ldsEllipsis+" "+(c?u.show:u.hide)},s.createElement("div",null),s.createElement("div",null),s.createElement("div",null),s.createElement("div",null)))}},function(e,t,n){e.exports={opacity:"opacity--21_ku",none:"none--T-bSV",loadingContent:"loadingContent--3vyse",loadingBg:"loadingBg--3eTvZ",ldsEllipsis:"ldsEllipsis--oJe8F",ldsEllipsis1:"ldsEllipsis1--vbzP_",ldsEllipsis2:"ldsEllipsis2--78wFJ",ldsEllipsis3:"ldsEllipsis3--3gfgv",show:"show--3ErTV",hide:"hide--3SqUj"}},function(e,t,n){"use strict";t.__esModule=!0;var i=n(0),u=n(0),m=n(11),d=null;t.default=function(e){var t=u.useState(!0),n=t[0],c=t[1],a=u.useState(1),l=a[0],r=a[1],o=e.className,s=e.children;u.useEffect(function(){d&&(d.style.webkitTransform="scale("+l+")",d.style.transform="scale("+l+")")},[l]);return i.createElement(i.Fragment,null,function(){switch(n){case!0:return i.createElement("div",{className:m.ldsContent},i.createElement("div",{className:m.lds,ref:function(e){d=e}},i.createElement("div",null),i.createElement("div",null),i.createElement("div",null),i.createElement("div",null)),i.createElement("div",{className:o,style:{opacity:0},ref:function(e){!function(e){if(e){var t=window.getComputedStyle(e).backgroundImage,n=parseInt(window.getComputedStyle(e).width),a=parseInt(window.getComputedStyle(e).height);r(a<n?a/80:n/80);var l=t.match(/\".+\"/gi)[0].slice(1,-1),o=new Image;o.src=l,o.onload=function(){c(!1)}}}(e)}}));default:return i.createElement("div",{className:o},s)}}())}},function(e,t,n){e.exports={ldsContent:"ldsContent--8CZmD",lds:"lds--2u8u_",lds1:"lds1--3jk82",lds2:"lds2--3BYKg",lds3:"lds3--1K1i9"}},,,,,,,,,,,,,function(e,t,n){e.exports=n(25)},function(e,t,n){"use strict";t.__esModule=!0;var a=n(0),l=n(13);n(26);var o=n(27);l.render(a.createElement(o.default,null),document.getElementById("main"))},function(e,t,n){},function(e,t,n){"use strict";t.__esModule=!0;var $=n(0),K=n(0),R=n(28),Y=n(1),G=n(29);t.default=function(){var e=K.useState(parseInt(window.localStorage.time)||1),t=e[0],n=e[1],a=K.useState(parseInt(window.localStorage.score)||20),l=a[0],o=a[1],c=K.useState(parseInt(window.localStorage.money)||0),r=c[0],s=c[1],i=K.useState(parseInt(window.localStorage.makeMoney)||0),u=i[0],m=i[1],d=K.useState(parseInt(window.localStorage.cutter)||0),f=d[0],w=d[1],p=K.useState(parseInt(window.localStorage.makeCutter)||0),v=p[0],E=p[1],b=K.useState(parseInt(window.localStorage.ore)||0),g=b[0],k=b[1],h=K.useState(parseInt(window.localStorage.makeOre)||0),N=h[0],S=h[1],y=K.useState(parseInt(window.localStorage.tree)||0),x=y[0],C=y[1],_=K.useState(parseInt(window.localStorage.makeTree)||0),M=_[0],I=_[1],T=K.useState(parseInt(window.localStorage.power)||0),P=T[0],B=T[1],O=K.useState(parseInt(window.localStorage.makePower)||0),j=O[0],U=O[1],Z=K.useState(parseInt(window.localStorage.hot)||0),H=Z[0],z=Z[1],F=K.useState(parseInt(window.localStorage.makeHot)||0),A=F[0],D=F[1],J=K.useState(null),L=J[0],V=J[1];K.useEffect(function(){window.localStorage.time=t,window.localStorage.score=l,window.localStorage.money=r,window.localStorage.makeMoney=u,window.localStorage.cutter=f,window.localStorage.makeCutter=v,window.localStorage.ore=g,window.localStorage.makeOre=N,window.localStorage.tree=x,window.localStorage.makeTree=M,window.localStorage.power=P,window.localStorage.makePower=j,window.localStorage.hot=H,window.localStorage.makeHot=A},[t,l,r,u,f,v,g,N,x,M,P,j,H,A]);function W(t,n,e,a){return e===L&&(a?$.createElement($.Fragment,null,$.createElement("div",{className:R.iconBoxL},$.createElement("div",{className:R.minus,onClick:function(e){e.stopPropagation(),n(t-1)}}),$.createElement("div",{className:R.minus,onClick:function(e){e.stopPropagation(),n(t-10)}})),$.createElement("div",{className:R.iconBoxR},$.createElement("div",{className:R.add,onClick:function(e){e.stopPropagation(),n(t+1)}}),$.createElement("div",{className:R.add,onClick:function(e){e.stopPropagation(),n(t+10)}}))):$.createElement($.Fragment,null,$.createElement("div",{className:R.minus+" "+R.iconAbsolute,onClick:function(e){e.stopPropagation(),n(t-1)}}),$.createElement("div",{className:R.add+" "+R.iconAbsolute,onClick:function(e){e.stopPropagation(),n(t+1)}})))}return $.createElement($.Fragment,null,$.createElement("div",{className:R.scrollView},$.createElement("div",{className:R.all},$.createElement("div",{onClick:function(){V(0!==L?0:null)}},"改造度:",l,W(l,o,0)),$.createElement("div",null,"回合:",t)),$.createElement("div",{className:R.blockBox},$.createElement("div",{className:R.block,onClick:function(){V(1!==L?1:null)}},$.createElement("div",{className:R.blockUp},"产能:",u,W(u,m,1)),$.createElement("div",{className:R.blockNumber},r,$.createElement(Y.Img,{className:R.money}),W(r,s,1,!0))),$.createElement("div",{className:R.block,onClick:function(){V(2!==L?2:null)}},$.createElement("div",{className:R.blockUp},"产能:",v,W(v,E,2)),$.createElement("div",{className:R.blockNumber},f,$.createElement(Y.Img,{className:R.cutter}),W(f,w,2))),$.createElement("div",{className:R.block,onClick:function(){V(3!==L?3:null)}},$.createElement("div",{className:R.blockUp},"产能:",N,W(N,S,3)),$.createElement("div",{className:R.blockNumber},g,$.createElement(Y.Img,{className:R.ore}),W(g,k,3))),$.createElement("div",{className:R.block,onClick:function(){V(4!==L?4:null)}},$.createElement("div",{className:R.blockUp},"产能:",M,W(M,I,4)),$.createElement("div",{className:R.blockNumber},x,$.createElement(Y.Img,{className:R.tree}),W(x,C,4,!0))),$.createElement("div",{className:R.block,onClick:function(){V(5!==L?5:null)}},$.createElement("div",{className:R.blockUp},"产能:",j,W(j,U,5)),$.createElement("div",{className:R.blockNumber},P,$.createElement(Y.Img,{className:R.power}),W(P,B,5))),$.createElement("div",{className:R.block,onClick:function(){V(6!==L?6:null)}},$.createElement("div",{className:R.blockUp},"产能:",A,W(A,D,6)),$.createElement("div",{className:R.blockNumber},H,$.createElement(Y.Img,{className:R.hot}),W(H,z,6,!0)))),$.createElement("div",{className:R.btns},$.createElement("div",{className:R.btnEnd,onClick:function(){window.setMask(0)}},"回合结束"),$.createElement("div",{className:R.btnEnd,onClick:function(){window.setMask(1)}},"数据重置"))),$.createElement(Y.Loading,null),$.createElement(G.default,{make:{score:l,makeMoney:u,makeCutter:v,makeOre:N,makeTree:M,makePower:j,makeHot:A},change:{time:t,setTime:n,money:r,setMoney:s,cutter:f,setCutter:w,ore:g,setOre:k,tree:x,setTree:C,power:P,setPower:B,hot:H,setHot:z}}),$.createElement(Y.Toast,null))}},function(e,t,n){e.exports={scrollView:"scrollView--d-I3i",all:"all--21ZDr",blockBox:"blockBox--3xyBw",block:"block--iY6Mz",blockUp:"blockUp--tyZy0",btns:"btns--3iGns",btnEnd:"btnEnd--13TzC",iconAbsolute:"iconAbsolute--2BL8E",minus:"minus--QD9Xk",add:"add--3s4aE",blockNumber:"blockNumber--2M3d7",money:"money--1Zl-E",cutter:"cutter--2iFJY money--1Zl-E",ore:"ore--K8pGt money--1Zl-E",tree:"tree--1CMR7 money--1Zl-E",power:"power--16j-2 money--1Zl-E",hot:"hot--Ml6Bl money--1Zl-E",iconBox:"iconBox--3up5W",iconBoxL:"iconBoxL--14n6y iconBox--3up5W",iconBoxR:"iconBoxR--TcU_z iconBox--3up5W"}},function(e,t,n){"use strict";t.__esModule=!0;var d=n(0),f=n(0),w=n(30);t.default=function(e){var h=e.make,N=e.change,t=f.useState(!1),n=t[0],a=t[1],l=f.useState(!1),o=l[0],c=l[1],r=f.useState(null),s=r[0],S=r[1],i=f.useState(0),u=i[0],m=i[1];window.setMask=S,f.useEffect(function(){null!==s?(m(s),a(!0),c(!0)):c(!1)},[s]);return d.createElement("div",{className:n?w.modal:w.none},d.createElement("div",{className:w.bg+" "+(o?w.show:w.hide),onClick:function(){c(!1)},onAnimationEnd:function(e){-1!==e.animationName.indexOf("hide")&&(S(null),a(!1))}}),d.createElement("div",{className:w.child+" "+(o?w.big:w.small)},function(){switch(u){case 0:return d.createElement("div",{className:w.timeEnd},d.createElement("div",{className:w.timeEndText},"下一回合将得到：",d.createElement("span",null,""+(h.score+h.makeMoney)),"金钱、",d.createElement("span",null,""+h.makeCutter),"矿、",d.createElement("span",null,""+h.makeOre),"钛、",d.createElement("span",null,""+h.makeTree),"植物、",d.createElement("span",null,""+h.makePower),"电力、",d.createElement("span",null,""+(h.makeHot+N.power)),"热能"),d.createElement("div",{className:w.btns},d.createElement("div",{className:w.btn,onClick:function(){var e,t,n,a,l,o,c,r,s,i,u,m,d,f,w,p,v,E,b,g,k;e=N.time,t=N.setTime,n=N.money,a=N.setMoney,l=N.cutter,o=N.setCutter,c=N.ore,r=N.setOre,s=N.tree,i=N.setTree,u=N.power,m=N.setPower,d=N.hot,f=N.setHot,w=h.score,p=h.makeMoney,v=h.makeCutter,E=h.makeOre,b=h.makeTree,g=h.makePower,k=h.makeHot,t(e+1),a(n+w+p),o(l+v),r(c+E),i(s+b),m(g),f(u+d+k),S(null)}},"确认结束"),d.createElement("div",{className:w.btn,onClick:function(){S(null)}},"关闭弹窗")));case 1:return d.createElement("div",{className:w.resetBox},d.createElement("div",{className:w.btn,onClick:function(){window.localStorage.clear(),window.location.href=window.location.href}},"确认重置"),d.createElement("div",{className:w.btn,onClick:function(){S(null)}},"关闭弹窗"))}}()))}},function(e,t,n){e.exports={none:"none--12OzW",modal:"modal--1bvt7",child:"child--u_iT3",bg:"bg--3X3tN",big:"big--3sQlp",small:"small--1jcjs",show:"show--3PH_u",hide:"hide--3e4Ew",timeEnd:"timeEnd--1q8uI",timeEndText:"timeEndText--1zxpy",btns:"btns--fWJjS",btn:"btn--29Sjd",resetBox:"resetBox--3vPvM"}}]);