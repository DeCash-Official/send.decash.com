(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8408:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/receipt",function(){return r(2527)}])},2527:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return M}});var t=r(5893),a=r(4051),i=r.n(a),o=r(3312),s=r(7294),c=r(8130),u=r(5253),d=r(4184),l=r.n(d),f=r(3465),x=r(4319),p=r(5549),_=r(287),h=r(581),v=r(8552),N=r.n(v),m=r(8163),g=r(8057),j=r(8131),w=r.n(j);function b(e){var n=e.className;return(0,t.jsxs)("div",{className:l()(w().loadingContainer,n),children:[(0,t.jsx)("div",{className:w().item}),(0,t.jsx)("div",{className:w().item}),(0,t.jsx)("div",{className:w().item}),(0,t.jsx)("div",{className:w().item})]})}var E=r(3985),k=r.n(E);function S(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function C(e){var n=e.transactionStatus,r=void 0===n?x.LN.PENDING:n,a=(0,s.useMemo)((function(){var e;return S(e={},x.LN.REJECTED,"text-red-500"),S(e,x.LN.PENDING,"text-orange-500"),S(e,x.LN.CONFIRMED,"text-green-500"),e}),[]),i=(0,s.useMemo)((function(){var e;return S(e={},x.LN.REJECTED,k().failedBackground),S(e,x.LN.PENDING,k().pendingBackground),S(e,x.LN.CONFIRMED,k().successBackground),e}),[]),o=(0,s.useMemo)((function(){var e;return S(e={},x.LN.REJECTED,k().iconShadowFailed),S(e,x.LN.PENDING,k().iconShadowPending),S(e,x.LN.CONFIRMED,k().iconShadowSuccess),e}),[]),c=(0,s.useMemo)((function(){var e;return S(e={},x.LN.REJECTED,(0,t.jsx)(m.Z,{className:k().svgIcon})),S(e,x.LN.PENDING,(0,t.jsx)(b,{})),S(e,x.LN.CONFIRMED,(0,t.jsx)(g.Z,{className:k().svgIcon})),e}),[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:k().container,children:[(0,t.jsx)("div",{className:l()(k().iconBackground,i[r]),children:c[r]}),(0,t.jsx)("div",{className:l()(k().iconShadow,o[r])})]}),(0,t.jsxs)("h1",{className:l()("text-2xl",a[r]),children:["Transaction ",r,"!"]})]})}var I=r(1163);function T(e,n,r,t,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void r(u)}s.done?n(c):Promise.resolve(c).then(t,a)}function L(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){T(i,t,a,o,s,"next",e)}function s(e){T(i,t,a,o,s,"throw",e)}o(void 0)}))}}var D=r(1664),y=r.n(D);function O(e,n,r,t,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void r(u)}s.done?n(c):Promise.resolve(c).then(t,a)}function R(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function P(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function F(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var n=(0,I.useRouter)(),r=(0,h.mv)().state,a=r.redirectUrlSuccess,d=r.redirectUrlFailure,v=r.redirectWaitForConfirmation,m=n.query,g=m.txId,j=void 0===g?"":g,w=m.txGroupId,b=void 0===w?"":w,E=P(m,["txId","txGroupId"]),k=(0,_.aC)().chain,S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=(0,s.useState)(x.LN.PENDING),r=n[0],t=n[1],a=(0,_.aC)(),o=a.chain,c=a.updateAccounts,u=(0,I.useRouter)().query.txId,d=void 0===u?"":u;return(0,s.useEffect)((function(){var n=setInterval(L(i().mark((function e(){var n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d||r!==x.LN.PENDING){e.next=6;break}return e.next=3,(0,x.Lv)({chain:o,params:{txId:d}});case 3:n=e.sent,"status"in(a=n.data)&&(s=a.status,t(s));case 6:case"end":return e.stop()}}),e)}))),e);return function(){return clearInterval(n)}}),[o,e,d,r]),(0,s.useEffect)((function(){r===x.LN.CONFIRMED&&c()}),[r]),{transactionStatus:r}}(1e3),T=S.transactionStatus,D=void 0===T?x.LN.PENDING:T,F=(0,s.useMemo)((function(){var e;return R(e={},x.LN.REJECTED,"text-red-500"),R(e,x.LN.PENDING,"text-orange-500"),R(e,x.LN.CONFIRMED,"text-green-500"),e}),[]),H=(0,s.useMemo)((function(){var e;return R(e={},p.Jb.MainNet,"https://algoexplorer.io/tx/group/".concat(b)),R(e,p.Jb.TestNet,"https://testnet.algoexplorer.io/tx/group/".concat(b)),R(e,p.Jb.BetaNet,"https://betanet.algoexplorer.io/tx/group/".concat(b)),e}),[b]),M=(0,s.useMemo)((function(){return null===a||void 0===a?void 0:a.replace("__txId__",j)}),[j,a]),B=(0,s.useCallback)((function(){window&&d&&D===x.LN.REJECTED?window.open(d,"_self"):window&&a&&D===x.LN.CONFIRMED&&window.open(M,"_self")}),[d,a,M,D]),J=function(){var e,r=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.push("/",{query:E});case 2:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){O(i,t,a,o,s,"next",e)}function s(e){O(i,t,a,o,s,"throw",e)}o(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,t.jsx)(f.F,{subtitle:"Receipt",children:(0,t.jsxs)("div",{className:"flex flex-col justify-center gap-3 items-center py-5",children:[(0,t.jsx)(C,{transactionStatus:D}),(0,t.jsxs)("div",{className:"inline text-center",children:["Transaction group"," ",(0,t.jsx)(y(),{href:H[k],passHref:!0,children:(0,t.jsx)("a",{target:"_blank",className:"p-1 bg-gray-100 rounded underline text-blue-600",children:"".concat(b.slice(0,4),"..").concat(b.slice(-4))})})," ","is"," ",(0,t.jsx)("span",{className:F[D],children:D}),".",(0,t.jsx)(u.u,{data:{title:"Share transaction link ",url:H[k],text:"Transaction link in block explorer"},children:(0,t.jsx)("button",{className:l()("block mx-auto mt-3 border p-2 border-0.5 border-gray-400 rounded-full text-sm text-gray-400","hover:text-gray-600 hover:bg-blue-100 focus:border-blue-400 focus:outline focus:outline-2"),children:(0,t.jsx)(o.Z,{width:30})})}),(D===x.LN.CONFIRMED&&a||D===x.LN.REJECTED&&d)&&(0,t.jsxs)("div",{children:[!v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),"You will be redirected in",(0,t.jsx)(c.ZP,{date:new Date(Date.now()+5e3),renderer:function(e){var n=e.seconds;return(0,t.jsx)("span",{className:"text-orange-500",children:" ".concat(n," ").concat(n>1?"seconds":"second")})},onComplete:B}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{children:"Click the button below to follow the redirect now."})]}),(0,t.jsx)(y(),{href:(D===x.LN.CONFIRMED?M:d)||"/",passHref:!0,children:(0,t.jsx)("a",{target:"_blank",className:l()(N().button,"m-2"),children:"Click here to continue"})})]}),D===x.LN.REJECTED&&!d&&(0,t.jsx)("button",{onClick:J,className:l()(N().button,"m-2"),children:"Try again"})]})]})})}var H=r(4197),M=function(){return(0,t.jsx)(H.Z,{children:(0,t.jsx)(F,{})})}},4197:function(e,n,r){"use strict";r.d(n,{Z:function(){return w}});var t=r(5893),a=r(4184),i=r.n(a),o=r(1174),s=r.n(o);function c(){return(0,t.jsx)("footer",{className:s().footer,children:(0,t.jsx)("p",{children:"DCIC Limited, 3rd Floor, Yamaraj Building, Market Square, P.O. Box 3175, Road Town, Tortola, British Virgin Islands"})})}var u=r(8163),d=r(93),l=r(7294),f=r(1422),x=r(9242),p=r.n(x),_=r(1664),h=r.n(_);function v(e){var n=e.url,r=e.appearance,a=void 0===r?"link":r,o=e.children,s=e.className,c=i()(s,p()[a]);return(0,t.jsx)(h(),{href:n,children:(0,t.jsx)("a",{className:c,children:o})})}function N(e){var n=e.className,r=void 0===n?"":n;return(0,t.jsx)("img",{src:"/img/logo.png",alt:"Decash Logo",className:r})}var m=r(2443),g=r.n(m);function j(e){var n=e.links,r=(0,l.useState)(!1),a=r[0],o=r[1],s=i()(g().wrapper,g().headerIsFixed),c=i()(g().linksWrapper,a&&g().open),x=function(){window.innerWidth<768&&o((function(e){return!e}))};return(0,t.jsx)("div",{className:s,children:(0,t.jsxs)("header",{className:g().header,children:[(0,t.jsx)(v,{appearance:"link",url:"/",children:(0,t.jsx)(N,{className:"w-[172px] md:w-fit"})}),n&&(0,t.jsx)(f.zx,{onClick:x,variant:"text",className:g().burgerMenu,children:a?(0,t.jsx)(u.Z,{}):(0,t.jsx)(d.Z,{})}),(0,t.jsx)("div",{className:c,onClick:x,children:(0,t.jsx)("div",{className:g().links,children:null===n||void 0===n?void 0:n.map((function(e){var n=e.title,r=e.url,a=e.appearance;return(0,t.jsx)(v,{url:r,appearance:a,children:n},r)}))})})]})})}function w(e){var n=e.children,r=e.container,a=void 0===r||r,o=e.wrapperClassName,s=void 0===o?"":o;return(0,t.jsxs)("div",{className:i()("min-h-screen flex flex-col justify-between",s),children:[(0,t.jsx)(j,{}),(0,t.jsx)("div",{className:i()("mx-auto flex flex-col justify-center items-center py-16",{"container md:px-8 px-4":a}),children:n}),(0,t.jsx)(c,{})]})}},1174:function(e){e.exports={footer:"Footer_footer__nKPS_"}},2443:function(e){e.exports={wrapper:"Header_wrapper__otIQq",header:"Header_header__D4RXM",linksWrapper:"Header_linksWrapper___rmqE",open:"Header_open__iZvng",links:"Header_links__A0NNi",headerIsFixed:"Header_headerIsFixed__TCrU3",burgerMenu:"Header_burgerMenu__vVRp5"}},9242:function(e){e.exports={button:"Link_button__iMUoO",link:"Link_link__1F_mp"}},8552:function(e){e.exports={button:"Receipt_button__rrYSC"}},8131:function(e){e.exports={loadingContainer:"loading_loadingContainer__JA6nb",item:"loading_item__e1fps",spin:"loading_spin__vLTEF"}},3985:function(e){e.exports={container:"TransactionStatusHeader_container__hyp11",iconBackground:"TransactionStatusHeader_iconBackground__aQ0iS",animateContainer:"TransactionStatusHeader_animateContainer__7l26H",successBackground:"TransactionStatusHeader_successBackground__3cv5T",pendingBackground:"TransactionStatusHeader_pendingBackground__cVOXX",failedBackground:"TransactionStatusHeader_failedBackground__Quvl7",svgIcon:"TransactionStatusHeader_svgIcon__h0vhO",animateCheck:"TransactionStatusHeader_animateCheck__rfj6W",iconShadow:"TransactionStatusHeader_iconShadow__HoZwz",animateShadow:"TransactionStatusHeader_animateShadow__a5MdL",iconShadowSuccess:"TransactionStatusHeader_iconShadowSuccess__c15c8",iconShadowFailed:"TransactionStatusHeader_iconShadowFailed__RVOoa",iconShadowPending:"TransactionStatusHeader_iconShadowPending__RBKBO"}}},function(e){e.O(0,[171,774,888,179],(function(){return n=8408,e(e.s=n);var n}));var n=e.O();_N_E=n}]);