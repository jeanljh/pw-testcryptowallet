/*! For license information please see 2185.js.LICENSE.txt */
"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[2185],{94151:(e,t,r)=>{t.u=void 0;var n,o=(n=r(2784))&&n.__esModule?n:{default:n},a=r(3975),s=r(84681),i=r(94087),c=r(4573),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(84745));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}t.u=({children:e,content:t,disabled:r,placement:n="top"})=>{const u=(0,s.useSpacingStyles)({spacing:1}),f=(0,a.useTooltipState)({placement:n,unstable_fixed:!1,unstable_offset:[0,8],unstable_preventOverflow:!0});return r?o.default.createElement(o.default.Fragment,null,e({})):o.default.createElement(o.default.Fragment,null,o.default.createElement(a.TooltipReference,f,e),o.default.createElement(a.Tooltip,d({},f,{className:(0,c.cx)(l.container,u),unstable_portal:!1}),o.default.createElement(i.TextLabel2,{as:"span",color:"primaryForeground"},t)))}},55736:(e,t,r)=>{r.d(t,{l:()=>k});var n,o=r(2784),a=r(63470),s=r(83112),i=r(68018),c=r(59554),l=r(39542),u=r(86421),d=r(48972),f=r(94151),p=r(52163),h=r(61641),m=r(52322);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=(0,a.vU)({chainDisplayName:{id:"GzartR",defaultMessage:[{type:0,value:"On "},{type:1,value:"name"}]},chainTitleWithSuffix:{id:"iNKvVW",defaultMessage:[{type:1,value:"name"},{type:0,value:" "},{type:1,value:"suffix"}]},chainTitle:{id:"Nust95",defaultMessage:[{type:1,value:"name"}]},tooltipText:{id:"v9mnGS",defaultMessage:[{type:0,value:"Switch networks"}]},mainnet:{id:"+cFBPN",defaultMessage:[{type:0,value:"Mainnet"}]},testnet:{id:"uSA5bo",defaultMessage:[{type:0,value:"Testnet"}]}});function k(e){var t=e.network,r=e.onPress,n=(0,s.Z)().formatMessage,a=(0,c.L)(),i=(0,l.Wj)({chainDetails:a});(0,l.il)({chainDetails:a});var v=(0,o.useCallback)((function(){i(),r()}),[r,i]);if(!t)return null;var g=t.asChain(),w=n(b.chainDisplayName,{name:null==g?void 0:g.displayName}),k=null!=g&&g.isTestnet?n(b.chainTitleWithSuffix,{name:w,suffix:n(b.testnet)}):n(b.chainTitle,{name:w});return(0,m.jsx)(f.u,{content:n(b.tooltipText),placement:"bottom",children:function(e){return(0,m.jsx)(p.Pressable,y(y({width:"100%"},e),{},{backgroundColor:"transparent",onPress:v,testID:"network-selection-sub-header",children:(0,m.jsxs)(d.HStack,{alignItems:"center",justifyContent:"center",children:[null!=g&&g.chainImageUrl?(0,m.jsx)(j,{src:null==g?void 0:g.chainImageUrl,alt:"".concat(null==g?void 0:g.displayName," icon")}):null,(0,m.jsxs)(d.HStack,{alignItems:"center",children:[(0,m.jsx)(h.TextLabel2,{testID:"network-selection-current-network",as:"p",color:"foregroundMuted",children:k}),(0,m.jsx)(u.Icon,{name:"caretRight",size:"xs",color:"foregroundMuted",spacingStart:.5})]})]})}))}})}w(k,"useIntl{{\n    formatMessage\n  }}\nuseChainDetails{chainDetails}\nuseNetworkSwitcherOpen{triggerNetworkSwitcherOpen}\nuseNetworkSwitcherViewed{}\nuseCallback{onOpenNetworkSelection}",(function(){return[s.Z,c.L,l.Wj,l.il]}));var x,S,j=(0,i.Z)("img")({name:"Image",class:"i1y1mzp3"});r(79995),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(x.register(b,"messages","/workspaces/apps/extension/src/components/NetworkSelectionSubHeader/NetworkSelectionSubHeader.tsx"),x.register(k,"NetworkSelectionSubHeader","/workspaces/apps/extension/src/components/NetworkSelectionSubHeader/NetworkSelectionSubHeader.tsx"),x.register(j,"Image","/workspaces/apps/extension/src/components/NetworkSelectionSubHeader/NetworkSelectionSubHeader.tsx")),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&S(e)},8512:(e,t,r)=>{r.d(t,{X:()=>H});var n=r(2784),o=r(83112),a=r(68018),s=r(62197),i=r.n(s),c=r(91322),l=r(24801),u=r(43192),d=r(86855),f=r(57761),p=r(34166),h=r(60723),m=r(48972),v=r(61641),y=r(63470),g=r(98673),w=r(9699);const b=(0,y.vU)({cancel:{id:"ti5TEd",defaultMessage:"Cancel"},save:{id:"5Vfkym",defaultMessage:"Save"},buttonGroup:{id:"0ElHKg",defaultMessage:"Action buttons"},contractAddress:{id:"AwE10W",defaultMessage:"Token Contract Address"},contractAddressRequired:{id:"Zc73ol",defaultMessage:"You must provide a valid address"},symbol:{id:"Nq6mfQ",defaultMessage:"Token Symbol"},symbolRequired:{id:"GCrGS1",defaultMessage:"You must provide a Token Symbol"},decimal:{id:"VbCcR6",defaultMessage:"Token Decimal"},decimalRequired:{id:"Whp3KX",defaultMessage:"You must provide a valid Token Decimal"}}),k={networkRawValue:"",contractAddress:"",symbol:"",decimal:18};var x,S=r(59329),j=r(52322);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),s=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=b(s,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,s),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function d(){}function f(){}function p(){}var h={};i(h,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==t&&r.call(v,o)&&(h=v);var y=p.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,s,i){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==L(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,i)}),(function(e){n("throw",e,s,i)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,i)}))}i(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=p,i(y,"constructor",p),i(p,"constructor",f),f.displayName=i(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),i(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var s=new w(c(t,r,n,o),a);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},g(y),i(y,s,"Generator"),i(y,o,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function N(e,t,r,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}e=r.hmd(e),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&x(e);var M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},G={height:"100%"};function H(e){var t=e.network,r=(0,o.Z)().formatMessage,a=(0,u.M)(),s=(0,f.Q)(),y=(0,n.useMemo)((function(){return a.find((function(e){var r=e.network;return t&&d.Zc.isEqual(t,r)}))}),[t,a]),x=(0,n.useMemo)((function(){return(e=>w.Ry({networkRawValue:w.Z_().required().test({name:"is-valid-network-raw-value",test:e=>!!e&&!!d.Zc.create(e)?.asChain()}),contractAddress:w.Z_().required(e(b.contractAddressRequired)).test({name:"is-valid-address",message:e(b.contractAddressRequired),test:e=>!!e&&(0,g.isValidAddress)(e)}),symbol:w.Z_().required(e(b.symbolRequired)),decimal:w.Rx().required(e(b.decimalRequired)).min(0).typeError(e(b.decimalRequired))}))(r)}),[r]),L=(0,n.useCallback)(function(){var e,t=(e=O().mark((function e(t,r){var n,o,a,u;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.setStatus,o=r.setSubmitting,y){e.next=3;break}return e.abrupt("return",null);case 3:return e.prev=3,u=new l.N(t.symbol),e.next=7,s(u,t.contractAddress,y,new(i())(t.decimal));case 7:(0,c.sY)({contractAddress:t.contractAddress,tokenSymbol:u.rawValue,chainId:Number(null===(a=y.network.asChain())||void 0===a?void 0:a.chainId),chainName:y.name,fromWatchAsset:!1}),n(""),o(!1),window.close(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),n(e.t0.message),o(!1);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){N(a,n,o,s,i,"next",e)}function i(e){N(a,n,o,s,i,"throw",e)}s(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),[s,y]),T=(0,n.useMemo)((function(){return A(A({},k),(null==y?void 0:y.network.rawValue)&&{networkRawValue:y.network.rawValue})}),[null==y?void 0:y.network]);return(0,j.jsx)(m.VStack,{height:"100%",spacing:1,children:(0,j.jsx)(p.J9,{initialValues:T,validationSchema:x,onSubmit:L,children:function(e){var t=e.status,n=e.isSubmitting,o=e.isValid,a=e.dirty;return(0,j.jsx)(p.l0,{style:G,children:(0,j.jsxs)(I,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(S.o,{testID:"custom-token-contract-address-input",label:r(b.contractAddress),name:"contractAddress"}),(0,j.jsx)(S.o,{testID:"custom-token-symbol-input",label:r(b.symbol),name:"symbol"}),(0,j.jsx)(S.o,{testID:"custom-token-decimal-input",label:r(b.decimal),name:"decimal"}),!!t&&(0,j.jsx)(v.TextLabel2,{testID:"text-input-error-label",as:"span",color:"negative",children:t})]}),(0,j.jsx)(h.ButtonGroup,{block:!0,accessibilityLabel:r(b.buttonGroup),children:(0,j.jsx)(h.Button,{testID:"custom-token-save",type:"submit",variant:"primary",loading:n,disabled:!o||!a,children:r(b.save)})})]})})}})})}M(H,"useIntl{{\n    formatMessage\n  }}\nuseCustomNetworkArgs{customNetworks}\nuseAddCustomEthToken{addCustomEthToken}\nuseMemo{customNetwork}\nuseMemo{validationSchema}\nuseCallback{handleSubmit}\nuseMemo{values}",(function(){return[o.Z,u.M,f.Q]}));var E,P,I=(0,a.Z)("div")({name:"Grid",class:"g1ok090o"});r(66366),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(G,"FULL_HEIGHT","/workspaces/apps/extension/src/screens/Settings/AddCustomToken.tsx"),E.register(H,"AddCustomToken","/workspaces/apps/extension/src/screens/Settings/AddCustomToken.tsx"),E.register(I,"Grid","/workspaces/apps/extension/src/screens/Settings/AddCustomToken.tsx")),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&P(e)},42185:(e,t,r)=>{r.r(t),r.d(t,{AddCustomTokenPage:()=>v});var n,o,a,s=r(2784),i=r(43192),c=r(48972),l=r(63448),u=r(15574),d=r(65542),f=r(52322);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(){var e=(0,i.M)(),t=p((0,s.useState)((function(){var t;return(null===(t=e[0])||void 0===t?void 0:t.network)||1})),2),r=t[0],n=t[1];return(0,f.jsx)(c.VStack,{height:"100%",overflow:"scroll",children:(0,f.jsxs)(d.S.Steps,{children:[(0,f.jsx)(u.k,{network:r,setNetwork:n},"choose"),(0,f.jsx)(l.l,{network:r},"add")]})})}function v(){return(0,f.jsx)(d.S.Provider,{children:(0,f.jsx)(m,{})})}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(m,"useCustomNetworkArgs{customNetworks}\nuseState{[network, setNetwork](() => customNetworks[0]?.network || 1)}",(function(){return[i.M]})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(m,"Steps","/workspaces/apps/extension/src/screens/Settings/pages/AddCustomTokenPage/AddCustomTokenPage.tsx"),o.register(v,"AddCustomTokenPage","/workspaces/apps/extension/src/screens/Settings/pages/AddCustomTokenPage/AddCustomTokenPage.tsx")),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)},63448:(e,t,r)=>{r.d(t,{l:()=>g});var n,o=r(2784),a=r(63470),s=r(83112),i=r(17726),c=r(55736),l=r(62783),u=r(8512),d=r(65542),f=r(48972),p=r(52322);e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var h,m,v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=(0,a.vU)({addTokenTitle:{id:"x+Klan",defaultMessage:[{type:0,value:"Import Token"}]}});function g(e){var t=e.network,r=(0,s.Z)().formatMessage,n=(0,l.t)(d.S).goToStep,a=(0,o.useCallback)((function(){n("choose")}),[n]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.w,{title:r(y.addTokenTitle),subTitle:(0,p.jsx)(c.l,{network:t,onPress:a}),backButtonEnabled:!1}),(0,p.jsx)(f.VStack,{height:"100%",spacingHorizontal:1,overflow:"scroll",children:(0,p.jsx)(u.X,{network:t})})]})}v(g,"useIntl{{ formatMessage }}\nuseStepper{{ goToStep }}\nuseCallback{goToChooseNetwork}",(function(){return[s.Z,l.t]})),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(y,"messages","/workspaces/apps/extension/src/screens/Settings/pages/AddCustomTokenPage/steps/AddTokenStep/AddTokenStep.tsx"),h.register(g,"AddTokenStep","/workspaces/apps/extension/src/screens/Settings/pages/AddCustomTokenPage/steps/AddTokenStep/AddTokenStep.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},15574:(e,t,r)=>{r.d(t,{k:()=>k});var n,o=r(2784),a=r(63470),s=r(83112),i=r(17726),c=r(62783),l=r(56596),u=r(39179),d=r(65542),f=r(91322),p=r(43192),h=r(86855),m=r(48972),v=r(52322);e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var y,g,w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=(0,a.vU)({chooseNetworkTitle:{id:"pGFjVl",defaultMessage:[{type:0,value:"Choose Network"}]}});function k(e){var t=e.network,r=e.setNetwork,n=(0,c.t)(d.S).goToStep,a=(0,s.Z)().formatMessage,y=(0,p.M)(),g=(0,o.useMemo)((function(){var e;return null===(e=y.find((function(e){var r=e.network;return h.Zc.isEqual(t,r)})))||void 0===e?void 0:e.id}),[y,t]),w=(0,o.useCallback)((function(e){var t,o=e&&(null===(t=y.find((function(t){return t.id===e})))||void 0===t?void 0:t.network);o&&(r(o),(0,f.hM)()),n("add")}),[r,n,y]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.w,{title:a(b.chooseNetworkTitle),onBack:w}),(0,v.jsx)(m.VStack,{height:"100%",spacingHorizontal:1,overflow:"scroll",children:(0,v.jsx)(u.k,{onChange:w,selectedNetworkId:g,type:l.UP.select,hideDefaultNetworks:!0})})]})}w(k,"useStepper{{ goToStep }}\nuseIntl{{ formatMessage }}\nuseCustomNetworkArgs{customNetworks}\nuseMemo{networkId}\nuseCallback{handleNetworkChange}",(function(){return[c.t,s.Z,p.M]})),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(b,"messages","/workspaces/apps/extension/src/screens/Settings/pages/AddCustomTokenPage/steps/ChooseNetworkStep/ChooseNetworkStep.tsx"),y.register(k,"ChooseNetworkStep","/workspaces/apps/extension/src/screens/Settings/pages/AddCustomTokenPage/steps/ChooseNetworkStep/ChooseNetworkStep.tsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)},79995:(e,t,r)=>{r.r(t)},66366:(e,t,r)=>{r.r(t)},65542:(e,t,r)=>{r.d(t,{S:()=>n});const n=(0,r(62783).v)({steps:["add","choose"],defaultStep:"add"})},82955:(e,t,r)=>{r.d(t,{Ex:()=>l,Sc:()=>u,cr:()=>d});var n=r(62783),o=r(62197),a=r.n(o),s=r(8389),i=r(86855),c=r(55598);const l=(0,n.v)({steps:["entry","confirmationPreview","phoneConfirmation","selectAsset","selectWallet","selectNetwork","status","depositGas","loadingBestQuote","swapNux"],defaultStep:"entry"}),u={selectedNetwork:i.Zc.fromChainId({chainPrefix:s.jq,chainId:new(a())(1)}),cryptoAmount:new(a())(0),enteredAmount:"",isFiat:!0,assetId:"",targetAssetId:"",sourceWalletId:"",swapTradeResponse:void 0,ledgerSwapError:void 0,unsignedApproveTxResult:void 0,unsignedSwapTxResult:void 0,unsignedSwapTxResults:void 0,signedApproveTx:void 0,signedSwapTx:void 0,nonce:void 0,formGenerateTransactionsError:void 0,formGenerateDepositAmount:void 0},d=(0,c.Z)({initialValues:u})},59554:(e,t,r)=>{r.d(t,{L:()=>i});var n=r(2784),o=r(58595),a=r(95898),s=r(82955);const i=()=>{const{selectedNetwork:{value:e},swapTradeResponse:{value:t},unsignedSwapTxResults:{value:r}}=(0,a.Z)(s.cr),{isStandalone:i}=(0,o.X)();return(0,n.useMemo)((()=>({isStandalone:i,network:e.rawValue,chainId:e.asChain()?.chainId??"",chainDisplayName:e.asChain()?.displayName??"",isLayer2:e.asChain()?.isLayer2??!1,isTestnet:e.asChain()?.isTestnet??!1,sourceCurrencyCode:t?.quote.fromAsset.currencyCode.rawValue??"",sourceAddress:t?.quote.fromAsset.address??"",targetAddress:t?.quote.toAsset.address??"",targetCurrencyCode:t?.quote.toAsset.currencyCode.rawValue??"",isMultiRouteSwap:Boolean(r&&r.length>1)})),[i,e,t?.quote.fromAsset.address,t?.quote.fromAsset.currencyCode.rawValue,t?.quote.toAsset.address,t?.quote.toAsset.currencyCode.rawValue,r])}},57761:(e,t,r)=>{r.d(t,{Q:()=>k});var n=r(2784),o=r(62197),a=r.n(o),s=r(34430),i=r(46101),c=r(27242),l=r(37420),u=r(52932),d=r(22853),f=r(73881),p=r(49117),h=r(78012),m=r(60417),v=r.n(m),y=r(20805);var g=r(86855),w=r(79547),b=r(40620);function k(){const e=(0,b.r)();return(0,n.useCallback)((async(t,r,n,o)=>{const m=g.Zc.create(n.id);if(!m)throw new Error(`Failed to create Network from custom network id ${n.id}`);if(e.find((e=>g.Zc.isEqual(m,e.network)&&r===e.contractAddress)))throw new Error(`Custom token with contract address ${r} already exists`);const b=await async function(e,t,r,n){const o=(0,i.gB)(c.m.whitelisted.ETHEREUM_MAINNET),a=await(0,y.Z)(o),s=(await(0,d.m)(t.value,"USD")??[]).find((e=>e.symbol.toUpperCase()===t.value)),m=a.map((n=>new u.kL(n.index,n.address,void 0,t,!1,r,i.XD.defaultReceiveType,(0,i.S3)(n.index),!0,i.XD.blockchain,e)));return await(0,l.bv)(m),v()(m).map((e=>{const t=(0,h.eC)(s?.image_url);return new f.w5({primaryAddress:e.address,addresses:[new p.J(i.XD.defaultReceiveType,e.address,e.index)],displayName:e.currencyCode.code,currencyCode:e.currencyCode,imageURL:t,balance:e.balance,decimals:n,blockchain:i.XD.blockchain,minimumBalance:void 0,network:e.network,contractAddress:e.contractAddress,selectedIndex:e.index})}))}(r,t,m,o);(0,w.gt)(b);const k={network:m,index:new(a())(0),mode:{kind:"Full"},isForced:!0};await(0,s.$)(k)}),[e])}}}]);
//# sourceMappingURL=2185.js.map