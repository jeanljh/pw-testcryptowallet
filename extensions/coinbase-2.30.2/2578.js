/*! For license information please see 2578.js.LICENSE.txt */
"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[2578],{92578:(e,t,r)=>{r.r(t),r.d(t,{Profile:()=>f});var o,n=r(2784),a=r(43361),s=r(91149),l=r(25915),i=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var c,u,d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=(0,n.memo)(d((function(){return(0,a.aF)()?(0,i.jsx)(l.K,{}):(0,i.jsx)(s.B,{})}),"useUser{user}",(function(){return[a.aF]})));(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(f,"Profile","/workspaces/apps/extension/src/screens/Profile/Profile.tsx"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},91149:(e,t,r)=>{r.d(t,{B:()=>x});var o,n=r(2784),a=r(63470),s=r(83112),l=r(875),i=r(11071),c=r(18787),u=r(60723),d=r(41368),f=r(48972),p=r(61641),h=r(5831),g=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var y,v,m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=(0,a.vU)({headerText:{id:"Kt+obm",defaultMessage:[{type:0,value:"View and follow addresses with Coinbase Wallet"}]},bodyText:{id:"1SKnAG",defaultMessage:[{type:0,value:"Unlock our community features using your Coinbase Wallet mobile app."}]},signMessageText:{id:"b4MmyO",defaultMessage:[{type:0,value:"Send request to my phone"}]}}),x=(0,n.memo)(m((function(){var e=(0,s.Z)().formatMessage,t=(0,l.G)();return(0,h.V4)(),(0,g.jsxs)(f.VStack,{height:i.UV,spacing:3,testID:"profile-auth-gate",children:[(0,g.jsxs)(f.VStack,{height:"100%",justifyContent:"center",alignContent:"center",alignItems:"center",spacingHorizontal:2,gap:2,children:[(0,g.jsx)(d.SpotRectangle,{name:"referralsBonus"}),(0,g.jsx)(p.TextTitle3,{as:"h1",align:"center",children:e(b.headerText)}),(0,g.jsx)(p.TextBody,{as:"p",align:"center",color:"foregroundMuted",children:e(b.bodyText)})]}),(0,g.jsx)(f.VStack,{justifyContent:"flex-end",children:(0,g.jsx)(u.Button,{variant:"primary",testID:"send-request-button",onPress:t,eventConfig:c.SH,children:e(b.signMessageText)})})]})}),"useIntl{{ formatMessage }}\nuseTriggerAuthenticationRequest{triggerAuthorizationRequestMessage}\nuseLogAuthGateViewed{}",(function(){return[s.Z,l.G,h.V4]})));(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(b,"messages","/workspaces/apps/extension/src/screens/Profile/ProfileAuthGate.tsx"),y.register(x,"ProfileAuthGate","/workspaces/apps/extension/src/screens/Profile/ProfileAuthGate.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},25915:(e,t,r)=>{r.d(t,{K:()=>_});var o=r(2784),n=r(51392),a=r(25641),s=r(98673),l=r(65158),i=r(15376),c=r(53052),u=r(48972),d=r(55326),f=r(70087),p=r(80523),h=r(37432),g=r(45811),y=r(7777),v=r(23868);function m(){return"treatment"===(0,v.c1)(y.V.july_2022_wallet_extension_search)}var b,x=r(5831),S=r(65200),w=r(3403),L=r(56360),H=r(52322);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function P(){P=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function i(e,t,r,o){var n=t&&t.prototype instanceof d?t:d,a=Object.create(n.prototype),s=new L(o||[]);return a._invoke=function(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return G()}for(r.method=n,r.arg=a;;){var s=r.delegate;if(s){var l=x(s,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var i=c(e,t,r);if("normal"===i.type){if(o=r.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(o="completed",r.method="throw",r.arg=i.arg)}}}(e,r,s),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var u={};function d(){}function f(){}function p(){}var h={};l(h,n,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(H([])));y&&y!==t&&r.call(y,n)&&(h=y);var v=p.prototype=d.prototype=Object.create(h);function m(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function o(n,a,s,l){var i=c(e[n],e,a);if("throw"!==i.type){var u=i.arg,d=u.value;return d&&"object"==T(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,s,l)}),(function(e){o("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return o("throw",e,s,l)}))}l(i.arg)}var n;this._invoke=function(e,r){function a(){return new t((function(t,n){o(e,r,t,n)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var o=c(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,u;var n=o.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function H(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:G}}function G(){return{value:void 0,done:!0}}return f.prototype=p,l(v,"constructor",p),l(p,"constructor",f),f.displayName=l(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},m(b.prototype),l(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var s=new b(i(t,r,o,n),a);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},m(v),l(v,s,"Generator"),l(v,n,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=H,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return s.type="throw",s.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),i=r.call(a,"finallyLoc");if(l&&i){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;w(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:H(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function G(e,t,r,o,n,a,s){try{var l=e[a](s),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(o,n)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(l)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}e=r.hmd(e),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&b(e);var M,k,C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},I="ETH",A=(0,o.memo)(C((function(){var e=(0,a.x)(),t=m(),r=(0,o.useRef)(null),l=E((0,o.useState)(""),2),c=l[0],g=l[1],y=E((0,o.useState)(!0),2),v=y[0],b=y[1],T=E((0,o.useState)(!1),2),j=T[0],M=T[1],k=(0,o.useCallback)((function(){(0,x.wp)(),M(!0)}),[]);(0,o.useEffect)((function(){return document.addEventListener("click",C,!1),function(){document.removeEventListener("click",C,!1)}}),[]);var C=function(e){e.target&&r.current&&!r.current.contains(e.target)&&(M(!1),g(""),b(!0))},A=(0,o.useCallback)((function(e){v||b(!0),g(e.target.value)}),[v]),_=(0,o.useCallback)(function(){var t,r=(t=P().mark((function t(){var r,o,n;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(0,x.dg)(c),t.next=4,(0,i.Tf)(c,I);case 4:r=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),b(!1);case 10:if(r&&r.address){t.next=14;break}return b(!1),(0,x._$)("failed"),t.abrupt("return");case 14:(0,x._$)("successful"),o=(0,S.g)(I,r.type,r.address,r.label),n=o.ensDomain||o.address,e({query:n,subpage:"crypto"});case 18:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function s(e){G(a,o,n,s,l,"next",e)}function l(e){G(a,o,n,s,l,"throw",e)}s(void 0)}))});return function(){return r.apply(this,arguments)}}(),[c,e]),N=(0,o.useMemo)((function(){return(0,s.isValidAddress)(c)}),[c]),F=(0,o.useMemo)((function(){return t?j&&v&&!c:j&&v}),[j,t,c,v]),O=(0,o.useMemo)((function(){return t&&j&&v&&!!c}),[t,j,v,c]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(u.VStack,{spacingHorizontal:3,children:[(0,H.jsx)(h.f,{}),(0,H.jsx)(u.VStack,{ref:r,children:(0,H.jsx)(u.Box,{spacingBottom:2,children:(0,H.jsx)(w.v,{triggerFocusState:k,query:c,hasResult:v,onChange:A,testID:"search-wallet-address-text-input",onKeyDown:(0,n.f)(_),maxLength:1e3})})})]}),(0,H.jsxs)(u.VStack,{height:377,overflow:"auto",spacingHorizontal:3,children:[F&&(0,H.jsx)(p.m,{}),O&&(0,H.jsx)(L.L,{searchBarText:c,isValidAddress:N}),!j&&(0,H.jsx)(d.i,{}),v?null:(0,H.jsx)(f.T,{})]})]})}),"useNavigateToProfilePage{navigateToProfile}\nuseHasSearchExperiment{isInSearchExperiment}\nuseRef{searchRef}\nuseState{[searchBarText, setSearchBarText]('')}\nuseState{[searchHasResult, setSearchHasResult](true)}\nuseState{[focused, setFocused](false)}\nuseCallback{triggerFocusState}\nuseEffect{}\nuseCallback{handleSearchChange}\nuseCallback{handleOnSearch}\nuseMemo{isValidEthAddress}\nuseMemo{shouldShowRecent}\nuseMemo{shouldShowTypeahead}\nuseHandleEnterKeyDown{}",(function(){return[a.x,m,n.f]}))),_=(0,o.memo)(C((function(){var e=(0,l.S)();return e?(0,H.jsx)(o.Suspense,{fallback:(0,H.jsx)(u.VStack,{spacingHorizontal:1,children:(0,H.jsx)(c.ListCellFallback,{title:!0,description:!0,detail:!0,subdetail:!0})}),children:(0,H.jsx)(g.g0,{ethAddress:e,children:(0,H.jsx)(A,{})})}):null}),"useProfileAddress{ethAddress}",(function(){return[l.S]})));(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(M.register(I,"ASSET_CODE","/workspaces/apps/extension/src/screens/Profile/ProfileSearch.tsx"),M.register(A,"ProfileSearchContent","/workspaces/apps/extension/src/screens/Profile/ProfileSearch.tsx"),M.register(_,"ProfileSearch","/workspaces/apps/extension/src/screens/Profile/ProfileSearch.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)},3403:(e,t,r)=>{r.d(t,{v:()=>m});var o=r(63470),n=r(83112),a=r(72205),s=r(86421),l=r(52322);e=r.hmd(e);var i,c=["query","hasResult","triggerFocusState"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var h,g,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=(0,o.vU)({searchBoxPlaceholder:{id:"B+GkbN",defaultMessage:[{type:0,value:"Search ETH address or ENS"}]}});function m(e){var t=e.query,r=e.hasResult,o=e.triggerFocusState,i=p(e,c),u=(0,n.Z)().formatMessage,f=r?"foregroundMuted":"negative";return(0,l.jsx)(a.TextInput,d(d({},i),{},{start:(0,l.jsx)(s.Icon,{name:"search",size:"s",color:f,spacingStart:2,spacingEnd:1}),name:"search-asset",value:t,onFocus:o,type:"text",autoComplete:"off",placeholder:u(v.searchBoxPlaceholder),variant:f}))}y(m,"useIntl{{ formatMessage }}",(function(){return[n.Z]})),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(v,"messages","/workspaces/apps/extension/src/screens/Profile/ProfileSearchBar.tsx"),h.register(m,"ProfileSearchBar","/workspaces/apps/extension/src/screens/Profile/ProfileSearchBar.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)},56360:(e,t,r)=>{r.d(t,{L:()=>E});var o,n=r(63470),a=r(83112),s=r(98986),l=r(58406),i=r(63258),c=r(82066),u=r(32832),d=r(36576);!function(e){e.TypeaheadSearch="TypeaheadSearch",e.Search="Search"}(o||(o={}));const f=d.Mw?"https://coinbase.com/api/v3/coinbase.web3_search_service.Web3SearchService":"https://coinbase-dev.cbhq.net/api/v3/coinbase.web3_search_service.Web3SearchService";async function p(e,t,r,o,n){const a=`${f}/${t}`;const s={requestId:r,pageSize:n,filter:{entities:o},query:e};return(0,u.ty)(a,s,{isThirdParty:!0,authenticated:!1})}function h(e,t,r,o,n){const{data:a,isLoading:s,isError:l}=(0,c.useQuery)([t,e,o],(async()=>p(e,t,r,o,n)),{notifyOnChangeProps:["data"]});return{entries:a?.entries||[],isLoading:s,isError:l}}var g;!function(e){e.SEARCH_ENTITY_UNSPECIFIED="SEARCH_ENTITY_UNSPECIFIED",e.SEARCH_ENTITY_ASSET="SEARCH_ENTITY_ASSET",e.SEARCH_ENTITY_DAPP="SEARCH_ENTITY_DAPP",e.SEARCH_ENTITY_DEFI="SEARCH_ENTITY_DEFI",e.SEARCH_ENTITY_LEARN_ARTICLES="SEARCH_ENTITY_LEARN_ARTICLES",e.SEARCH_ENTITY_NFT="SEARCH_ENTITY_NFT",e.SEARCH_ENTITY_NFT_COLLECTIONS="SEARCH_ENTITY_NFT_COLLECTIONS",e.SEARCH_ENTITY_WALLET="SEARCH_ENTITY_WALLET",e.SEARCH_ENTITY_ENS="SEARCH_ENTITY_ENS"}(g||(g={}));var y,v=r(29904),m=r(61641),b=r(26691),x=r(52322);e=r.hmd(e),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&y(e);var S,w,L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},H="Address",T=[g.SEARCH_ENTITY_ENS],P=(0,n.vU)({goToWallet:{id:"gKyihV",defaultMessage:[{type:0,value:"Go to wallet"}]},characterLimit:{id:"1Z/ki1",defaultMessage:[{type:0,value:"Type at least 3 characters to search"}]},searching:{id:"3Iu8us",defaultMessage:[{type:0,value:"Searching..."}]},noResults:{id:"PGki7l",defaultMessage:[{type:0,value:"No results found. Try again."}]}});function G(e){var t=e.searchBarText,r=(0,a.Z)().formatMessage,n=(0,i.N)(t,300),l=h(n,o.TypeaheadSearch,void 0,T),c=l.entries,u=l.isLoading,d=l.isError;return u&&n.length>=3?(0,x.jsx)(m.TextLabel2,{as:"p",color:"foregroundMuted",children:r(P.searching)}):d?null:u||c.length?(0,x.jsx)(v.VStack,{testID:"profile-typeahead",children:c.map((function(e,t){var r=e.fields.filter((function(e){return e.key===H&&e.value}));if(!r.length)return null;var o=r[0].value;return(0,x.jsx)(b.k,{address:o,ensDomain:e.name,rankIndex:t,analyticsContext:"autocomplete",hideAction:!0,shouldSaveSearch:!0},(0,s.randomBytesHex)(8))}))}):(0,x.jsx)(m.TextLabel2,{as:"p",color:"foregroundMuted",children:r(P.noResults)})}function E(e){var t=e.searchBarText,r=e.isValidAddress,o=(0,a.Z)().formatMessage;return t&&t.length<3?(0,x.jsx)(m.TextLabel2,{as:"p",color:"foregroundMuted",children:o(P.characterLimit)}):r?(0,x.jsx)(b.k,{address:t,analyticsContext:"discovery",hideAction:!0,isExactMatch:!0}):(0,x.jsx)(l.S,{children:(0,x.jsx)(G,{searchBarText:t})})}L(G,"useIntl{{ formatMessage }}\nuseDebounce{debouncedSearchBarText}\nuseGetSearchResults{{ entries, isLoading, isError }}",(function(){return[a.Z,i.N,h]})),L(E,"useIntl{{ formatMessage }}",(function(){return[a.Z]})),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(H,"ADDRESS_KEY","/workspaces/apps/extension/src/screens/Profile/ProfileTypeahead.tsx"),S.register(T,"ENTITIES","/workspaces/apps/extension/src/screens/Profile/ProfileTypeahead.tsx"),S.register(P,"messages","/workspaces/apps/extension/src/screens/Profile/ProfileTypeahead.tsx"),S.register(G,"ProfileTypeaheadContent","/workspaces/apps/extension/src/screens/Profile/ProfileTypeahead.tsx"),S.register(E,"ProfileTypeahead","/workspaces/apps/extension/src/screens/Profile/ProfileTypeahead.tsx")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)},46361:(e,t,r)=>{r.d(t,{$:()=>w});var o,n=r(2784),a=r(63470),s=r(83112),l=r(25641),i=r(6218),c=r(45811),u=r(5831),d=r(37504),f=r(60723),p=r(48972),h=r(61641),g=r(41517),y=r(26691),v=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var m,b,x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},S=(0,a.vU)({profileFollowingTitle:{id:"ILI8oI",defaultMessage:[{type:0,value:"Following"}]},profileFollowingBody:{id:"O8qlGs",defaultMessage:[{type:0,value:"You aren't following anyone"}]},seeAllFollowees:{id:"hCYdIV",defaultMessage:[{type:0,value:"See all"}]}}),w=(0,n.memo)(x((function(){var e=(0,s.Z)().formatMessage,t=(0,l.x)(),r=(0,d.D)(),o=(0,c.V0)(),a=o.followees,m=o.isFolloweesLoading,b=(0,n.useMemo)((function(){return a.slice(0,i.O)}),[a]),x=(0,n.useMemo)((function(){return{walletAddress:r,chainName:"eth"}}),[r]),w=(0,n.useCallback)((function(){(0,u.$D)(x),t({query:r,subpage:"follow-info/following"})}),[t,r,x]);return(0,v.jsxs)(p.VStack,{children:[(0,v.jsx)(h.TextTitle3,{as:"h3",spacingVertical:2,children:e(S.profileFollowingTitle)}),(0,v.jsx)(g.q,{isLoading:m,children:b.length?(0,v.jsx)(p.VStack,{children:b.map((function(e){var t=e.address,r=e.ensDomain;return(0,v.jsx)(y.k,{address:t,ensDomain:r,analyticsContext:"following",isFollowing:!0},t)}))}):(0,v.jsx)(h.TextBody,{as:"p",align:"center",spacingVertical:2,children:e(S.profileFollowingBody)})}),!m&&a.length>i.O&&(0,v.jsx)(p.VStack,{spacingVertical:2,children:(0,v.jsx)(f.Button,{variant:"secondary",testID:"profile-following-see-all",onPress:w,children:e(S.seeAllFollowees)})})]})}),"useIntl{{ formatMessage }}\nuseNavigateToProfilePage{navigateToProfile}\nuseSelectedETHAddress{}\nuseFollowInfoContext{{ followees, isFolloweesLoading }}\nuseMemo{displayList}\nuseMemo{eventData: ProfileEventData}\nuseCallback{handleSeeAllClick}",(function(){return[s.Z,l.x,d.D,c.V0]})));(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(S,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileNullState/ProfileFollowing.tsx"),m.register(w,"ProfileFollowing","/workspaces/apps/extension/src/screens/Profile/components/ProfileNullState/ProfileFollowing.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)},55326:(e,t,r)=>{r.d(t,{i:()=>d});var o,n=r(2784),a=r(48972),s=r(46361),l=r(37985),i=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,u,d=(0,n.memo)((function(){return(0,i.jsxs)(a.VStack,{children:[(0,i.jsx)(s.$,{}),(0,i.jsx)(l.$,{})]})}));(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(d,"ProfileNullState","/workspaces/apps/extension/src/screens/Profile/components/ProfileNullState/ProfileNullState.tsx"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},37985:(e,t,r)=>{r.d(t,{$:()=>g});var o,n=r(63470),a=r(83112),s=r(45811),l=r(48972),i=r(61641),c=r(26691),u=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d,f,p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=(0,n.vU)({profileSuggestedTitle:{id:"EBDD2N",defaultMessage:[{type:0,value:"Profiles you may like"}]}});function g(){var e=(0,a.Z)().formatMessage,t=(0,s.V0)(),r=t.suggestedProfiles,o=t.updateFollowees;return(0,u.jsx)(u.Fragment,{children:!!r.length&&(0,u.jsxs)(l.VStack,{children:[(0,u.jsx)(i.TextTitle3,{as:"h3",spacingVertical:2,children:e(h.profileSuggestedTitle)}),(0,u.jsx)(l.VStack,{children:r.map((function(e){var t=e.address,r=e.ensDomain;return(0,u.jsx)(c.k,{address:t,ensDomain:r,onFollow:o,analyticsContext:"suggested"},t)}))})]})})}p(g,"useIntl{{ formatMessage }}\nuseFollowInfoContext{{ suggestedProfiles, updateFollowees }}",(function(){return[a.Z,s.V0]})),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(h,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileNullState/ProfileSuggested.tsx"),d.register(g,"ProfileSuggested","/workspaces/apps/extension/src/screens/Profile/components/ProfileNullState/ProfileSuggested.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},70087:(e,t,r)=>{r.d(t,{T:()=>h});var o,n=r(63470),a=r(83112),s=r(41368),l=r(48972),i=r(61641),c=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var u,d,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=(0,n.vU)({invalidSearchMessageTitle:{id:"ftiiAK",defaultMessage:[{type:0,value:"We can't find that address"}]},invalidSearchMessageBody:{id:"nAN25O",defaultMessage:[{type:0,value:"You can search for any valid Ethereum address, including ENS names like coinbase.eth."}]}});function h(){var e=(0,a.Z)().formatMessage;return(0,c.jsxs)(l.VStack,{alignItems:"center",spacingTop:10,spacingBottom:6,children:[(0,c.jsx)(s.Pictogram,{name:"identityCard",dimension:"48x48"}),(0,c.jsx)(i.TextTitle3,{as:"h3",spacingTop:2,spacingBottom:1,children:e(p.invalidSearchMessageTitle)}),(0,c.jsx)(i.TextBody,{as:"p",align:"center",children:e(p.invalidSearchMessageBody)})]})}f(h,"useIntl{{ formatMessage }}",(function(){return[a.Z]})),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(p,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileRecentSearches/InvalidSearchMessage.tsx"),u.register(h,"InvalidSearchMessage","/workspaces/apps/extension/src/screens/Profile/components/ProfileRecentSearches/InvalidSearchMessage.tsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},23003:(e,t,r)=>{r.d(t,{$:()=>h});var o,n=r(63470),a=r(83112),s=r(41368),l=r(48972),i=r(61641),c=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var u,d,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=(0,n.vU)({noRecentSearchesMessage:{id:"9KVgFl",defaultMessage:[{type:0,value:"Explore other wallets"}]},noSearchEntriesBody:{id:"y8hcyR",defaultMessage:[{type:0,value:"You can search for any valid Ethereum address, including ENS names like coinbase.eth."}]}});function h(){var e=(0,a.Z)().formatMessage;return(0,c.jsxs)(l.VStack,{alignItems:"center",spacingTop:10,spacingBottom:6,children:[(0,c.jsx)(s.Pictogram,{name:"identityCard",dimension:"48x48"}),(0,c.jsx)(i.TextTitle3,{as:"h3",spacingTop:2,spacingBottom:1,children:e(p.noRecentSearchesMessage)}),(0,c.jsx)(i.TextBody,{as:"p",align:"center",children:e(p.noSearchEntriesBody)})]})}f(h,"useIntl{{ formatMessage }}",(function(){return[a.Z]})),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(p,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileRecentSearches/NoRecentSearchesMessage.tsx"),u.register(h,"NoRecentSearchesMessage","/workspaces/apps/extension/src/screens/Profile/components/ProfileRecentSearches/NoRecentSearchesMessage.tsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},80523:(e,t,r)=>{r.d(t,{m:()=>S});var o=r(2784),n=r(63470),a=r(83112),s=r(6218),l=r(15376);var i,c=r(48972),u=r(52163),d=r(61641),f=r(26691),p=r(23003),h=r(52322);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(l)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}e=r.hmd(e),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var v,m,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},x=(0,n.vU)({recentSearchesTitle:{id:"vi+uHK",defaultMessage:[{type:0,value:"Recent searches"}]},clearAll:{id:"oJ8+wW",defaultMessage:[{type:0,value:"Clear all"}]}}),S=(0,o.memo)(b((function(){var e=(0,a.Z)().formatMessage,t=(0,o.useState)((()=>{const e=localStorage.getItem(s.c),t=e?JSON.parse(e):null;if(!t)return null;let r=!0;return t.some((async e=>{let t;try{if(t=await(0,l.Tf)(e.address,e.asset),!t?.address)return void(r=!1)}catch(e){r=!1}})),r?t:null})()),r=g(t,2),n=r[0],i=r[1],y=(0,o.useCallback)((function(){Array.isArray(n)&&n.length&&(localStorage.removeItem(s.c),i([]))}),[i,n]);return n?(0,h.jsxs)(c.VStack,{children:[(0,h.jsxs)(c.HStack,{spacingVertical:2,alignItems:"baseline",justifyContent:"space-between",children:[(0,h.jsx)(d.TextTitle3,{as:"h2",children:e(x.recentSearchesTitle)}),(0,h.jsx)(u.Pressable,{onPress:y,backgroundColor:"transparent",children:(0,h.jsx)(d.TextHeadline,{as:"p",color:"primary",children:e(x.clearAll)})})]}),n.map((function(e,t){return(0,h.jsx)(f.k,{hideAction:!0,ensDomain:e.ensDomain,address:e.address,analyticsContext:"recent",rankIndex:t},e.address)}))]}):(0,h.jsx)(p.$,{})}),"useIntl{{ formatMessage }}\nuseState{[savedSearches, setSavedSearches](getSavedSearches())}\nuseCallback{handleClearSearches}",(function(){return[a.Z]})));(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(x,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileRecentSearches/ProfileRecentSearches.tsx"),v.register(S,"ProfileRecentSearches","/workspaces/apps/extension/src/screens/Profile/components/ProfileRecentSearches/ProfileRecentSearches.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},37432:(e,t,r)=>{r.d(t,{f:()=>S});var o,n=r(2784),a=r(63470),s=r(83112),l=r(46276),i=r(23745),c=r(25641),u=r(59500),d=r(99312),f=r(5831),p=r(94173),h=r(48972),g=r(61641),y=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var v,m,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},x=(0,a.vU)({community:{id:"Ge+IYF",defaultMessage:[{type:0,value:"Community"}]},avatarTooltip:{id:"+7N7YB",defaultMessage:[{type:0,value:"Your profile"}]}}),S=(0,n.memo)(b((function(){var e=(0,s.Z)().formatMessage,t=(0,p.G)().profile,r=(0,c.x)(),o=null==t?void 0:t.address,a=(null==t?void 0:t.isSubdomain)&&t.primaryDomainName||(null==t?void 0:t.address),v=(0,n.useCallback)((function(){if(o){var e=t;(0,u.H)(e)?(0,u._)(null==e?void 0:e.primaryDomainName):r({query:a,subpage:"crypto"}),(0,f.fh)((0,d.p)(o))}}),[o,t,r,a]);return(0,n.useEffect)((function(){o&&(0,f.Xs)((0,d.p)(o))}),[o]),(0,y.jsxs)(h.HStack,{alignItems:"center",justifyContent:"space-between",spacingVertical:1,children:[(0,y.jsx)(g.TextTitle1,{as:"h3",children:e(x.community)}),(0,y.jsx)(h.Box,{children:(0,y.jsx)(l.u,{content:e(x.avatarTooltip),placement:"bottom",children:(0,y.jsx)(i.Y,{variant:"icon",size:"xxl",onPress:t&&v,testID:"profile-header-pressable"})})})]})}),"useIntl{{ formatMessage }}\nuseUserProfile{{ profile }}\nuseNavigateToProfilePage{navigateToProfile}\nuseCallback{handleNavigation}\nuseEffect{}",(function(){return[s.Z,p.G,c.x]})));(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(x,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileSearchHeader/ProfileSearchHeader.tsx"),v.register(S,"ProfileSearchHeader","/workspaces/apps/extension/src/screens/Profile/components/ProfileSearchHeader/ProfileSearchHeader.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},45811:(e,t,r)=>{r.d(t,{g0:()=>m,V0:()=>b});var o=r(2784),n=r(37504),a=r(12910),s=r(82066),l=r(18649);function i(){const e=function(){const e=(0,l.t)("suggestedFollows");return(0,o.useCallback)((async()=>e()),[e])}(),{data:t,isLoading:r}=(0,s.useQuery)(["suggestedFollows"],(async()=>e()),{notifyOnChangeProps:["data"]}),n=t?.wallets?.map((e=>({ensDomain:e.ens_domain,...e})));return{suggestedFollows:n||[],isSuggestedFollowsLoading:r}}var c=r(6218);var u,d=r(52322);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(l)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}e=r.hmd(e),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&u(e);var h,g,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=(0,o.createContext)({followees:[],isFolloweesLoading:!0,suggestedProfiles:[],updateFollowees:function(){}});function m(e){var t=e.ethAddress,r=e.children,s=i(),l=s.suggestedFollows,u=s.isSuggestedFollowsLoading,p=f((0,o.useState)([]),2),h=p[0],g=p[1],y=(0,n.D)();(0,o.useEffect)((function(){l&&!u&&g(l)}),[u]);var m=c.O+1,b=(0,a.v)(t,y,{size:m}),x=b.followees,S=b.isLoading,w=b.refetchFollowers,L=(0,o.useCallback)((function(e){g((function(t){return t.filter((r=e.followee_address,e=>!function(e,t){return e.toLowerCase()===t.toLowerCase()}(r,e.address)));var r})),w()}),[w]),H=(0,o.useMemo)((function(){return{followees:x,isFolloweesLoading:S,suggestedProfiles:h,updateFollowees:L}}),[x,S,h,L]);return(0,d.jsx)(v.Provider,{value:H,children:r})}function b(){return(0,o.useContext)(v)}y(m,"useSuggestedFollows{{ suggestedFollows, isSuggestedFollowsLoading }}\nuseState{[suggestedProfiles, setSuggestedProfiles]([])}\nuseSelectedETHAddress{queryAddress}\nuseEffect{}\nuseAddressFollowees{{\n    followees,\n    isLoading: isFolloweesLoading,\n    refetchFollowers,\n  }}\nuseCallback{updateFollowees}\nuseMemo{value}",(function(){return[i,n.D,a.v]})),y(b,"useContext{}"),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(v,"FollowInfoContext","/workspaces/apps/extension/src/screens/Profile/context/FollowInfoContext.tsx"),h.register(m,"FollowInfoProvider","/workspaces/apps/extension/src/screens/Profile/context/FollowInfoContext.tsx"),h.register(b,"useFollowInfoContext","/workspaces/apps/extension/src/screens/Profile/context/FollowInfoContext.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)},875:(e,t,r)=>{r.d(t,{G:()=>s});var o=r(2784),n=r(53194),a=r(61355);function s(e){const t=(0,a.E)();return(0,o.useCallback)((async()=>{await t(n.walletLinkRelay.selectedAddress),e?.()}),[e,t])}}}]);
//# sourceMappingURL=2578.js.map