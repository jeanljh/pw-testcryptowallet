/*! For license information please see 8133.js.LICENSE.txt */
"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[8133],{95632:(e,t,r)=>{r.d(t,{$:()=>w});var n,o=r(2784),a=r(63470),i=r(83112),u=r(86421),c=r(48972),s=r(52163),l=r(61641),f=r(52322);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var h,y,v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=(0,a.vU)({copyToClipboard:{id:"kIubEO",defaultMessage:[{type:0,value:"Copy to clipboard"}]},copiedToClipboard:{id:"JxoQv7",defaultMessage:[{type:0,value:"Copied to clipboard"}]}}),g={cursor:"pointer"},m={cursor:"text"},x={filter:"blur(5px)"};function w(e){var t=e.text,r=e.placeholder,n=e.onBlurToggle,a=e.onCopy,d=p((0,o.useState)(!0),2),h=d[0],y=d[1],v=p((0,o.useState)(!1),2),w=v[0],k=v[1],L=p((0,o.useState)([0,0]),2),S=L[0],C=L[1],T=(0,i.Z)().formatMessage,j=(0,o.useRef)(null),B=(0,o.useCallback)((function(){navigator.clipboard.writeText(t),k(!0),null==a||a(),setTimeout((function(){return k(!1)}),6e4)}),[t,a]);(0,o.useEffect)((function(){n&&n(h),j.current&&h&&clearTimeout(j.current)}),[j,h,n]);var E=(0,o.useCallback)((function(){y(!h),h&&(j.current=setTimeout((function(){y(!0)}),6e4))}),[h]),P=(0,o.useCallback)((function(e){Math.abs(e.clientX-S[0])+Math.abs(e.clientY-S[1])>10||E()}),[E,S]),G=(0,o.useCallback)((function(e){C([e.clientX,e.clientY])}),[C]),I=(0,o.useCallback)((function(e){"Space"===e.code&&E()}),[E]),M=w?"positive":"foreground";return(0,f.jsxs)(c.VStack,{children:[(0,f.jsx)(s.Pressable,{as:"button",onMouseUp:P,onMouseDown:G,onKeyPress:I,testID:"blur-text-container",noScaleOnPress:!0,backgroundColor:"transparent",children:(0,f.jsxs)(c.Box,{bordered:!0,borderRadius:"rounded",height:109,spacingVertical:1,spacingHorizontal:2,position:"relative",id:"blur-text-main-container",children:[(0,f.jsx)(c.Box,{dangerouslySetStyle:h?g:m,children:(0,f.jsx)(l.TextBody,{as:"div",testID:"blur-text-content",color:"foregroundMuted",children:h?(0,f.jsx)(c.Box,{display:"inline-block",dangerouslySetStyle:x,children:r}):t})}),(0,f.jsx)(c.Box,{justifyContent:"flex-end",position:"absolute",bottom:"10px",right:"10px",children:(0,f.jsx)(u.Icon,{size:"s",name:h?"visibleInactive":"visibleActive",color:"foreground"})})]})}),(0,f.jsx)(s.Pressable,{backgroundColor:"transparent",as:"button",onPress:B,testID:"blur-text-clipboard-copy",noScaleOnPress:!0,children:(0,f.jsxs)(c.HStack,{spacingTop:2,children:[(0,f.jsx)(u.Icon,{name:w?"circleCheckmark":"copy",color:M,size:"s"}),(0,f.jsx)(l.TextLabel1,{as:"p",spacingStart:1,children:T(w?b.copiedToClipboard:b.copyToClipboard)})]})})]})}v(w,"useState{[isBlur, setIsBlur](true)}\nuseState{[isCopied, setIsCopied](false)}\nuseState{[mouseDownPos, setMouseDownPos]([0, 0])}\nuseIntl{{ formatMessage }}\nuseRef{activeBlurTimer}\nuseCallback{copySeed}\nuseEffect{}\nuseCallback{toggleBlur}\nuseCallback{onMouseUp}\nuseCallback{onMouseDown}\nuseCallback{onKeyPress}",(function(){return[i.Z]})),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(b,"messages","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(g,"isBlurred","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(m,"isNotBlurred","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(x,"blur","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(w,"BlurText","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)},18133:(e,t,r)=>{r.r(t),r.d(t,{PrivateKey:()=>G});var n=r(2784),o=r(63470),a=r(83112),i=r(4517),u=r(95632),c=r(27052),s=r(57430),l=r(62197),f=r.n(l),p=r(22455),d=r(60723),h=r(48972),y=r(61641),v=r(48925),b=r(95545);const g=()=>(0,b.bH)("your_private_key.viewed",{loggingId:"617cc542-149d-4516-8ad9-e53b207cec06",componentType:b.re.page});var m,x=r(52322);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(){k=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=x(i,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function f(){}function p(){}function d(){}var h={};u(h,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(T([])));v&&v!==t&&r.call(v,o)&&(h=v);var b=d.prototype=f.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function m(e,t){function n(o,a,i,u){var c=s(e[o],e,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==w(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,u)}))}u(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,u(b,"constructor",d),u(d,"constructor",p),p.displayName=u(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,u(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(m.prototype),u(m.prototype,a,(function(){return this})),e.AsyncIterator=m,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new m(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(b),u(b,i,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function L(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function S(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){L(a,n,o,i,u,"next",e)}function u(e){L(a,n,o,i,u,"throw",e)}i(void 0)}))}}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&m(e);var j,B,E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},P=(0,o.vU)({backButtonAriaLabel:{id:"p72mKW",defaultMessage:[{type:0,value:"Go back"}]},pageTitle:{id:"0lwXLw",defaultMessage:[{type:0,value:"Your Ethereum Private Key"}]},pageInstructions:{id:"atVsKD",defaultMessage:[{type:0,value:"Do not share this with anyone, even Coinbase. Anyone with your private key can steal your funds"}]},done:{id:"1v8v5C",defaultMessage:[{type:0,value:"Done"}]}});function G(){var e=(0,n.useRef)(!1),t=(0,a.Z)().formatMessage,r=(0,i.k6)(),o=C((0,n.useState)(),2),l=o[0],m=o[1],w=(0,n.useCallback)((function(){return r.push("/settings/advancedSettings/")}),[r]);g(),(0,n.useEffect)((function(){function t(){return t=S(k().mark((function t(){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.L.getMnemonicPromise();case 2:if(r=t.sent,e.current=!0,r){t.next=7;break}return w(),t.abrupt("return");case 7:(0,p.getEthereumWalletKeyPair)(new(f())(0),r).then((function(e){m(e.privateKey.toString("hex"))}));case 8:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}l||e.current||function(){t.apply(this,arguments)}()}),[w,l]);var L=(0,n.useCallback)((function(){(0,b.Kz)("your_private_key.done_btn",{loggingId:"bd32ebef-01d6-4eec-9b8d-f42e388a78f7",action:b.Us.click,componentType:b.re.button}),w()}),[w]),T=(0,n.useCallback)((function(){r.goBack()}),[r]),j=(0,n.useCallback)((function(){(0,s.Gb)()}),[]),B=(0,n.useCallback)((function(e){(0,s.wt)(e)}),[]);return l?(0,x.jsxs)(v.n,{testID:"private-key-container",spacing:2,height:"100%",justifyContent:"space-between",overflow:"scroll",children:[(0,x.jsx)(h.Box,{offsetStart:1,children:(0,x.jsx)(d.IconButton,{name:"backArrow",onPress:T,transparent:!0,accessibilityLabel:t(P.backButtonAriaLabel)})}),(0,x.jsx)(h.Box,{children:(0,x.jsx)(y.TextTitle1,{as:"h3",children:t(P.pageTitle)})}),(0,x.jsx)(y.TextBody,{as:"div",color:"foregroundMuted",children:t(P.pageInstructions)}),(0,x.jsx)(h.VStack,{spacingTop:5,spacingBottom:5,children:(0,x.jsx)(u.$,{text:l,placeholder:"This is your private key",onCopy:j,onBlurToggle:B})}),(0,x.jsx)(d.Button,{testID:"private-key-done-btn",block:!0,onPress:L,children:t(P.done)})]}):null}E(G,"useRef{mnemonicFetchedRef}\nuseIntl{{ formatMessage }}\nuseHistory{history}\nuseState{[privateKey, setPrivateKey]}\nuseCallback{handleGoBack}\nuseYourPrivateKeyViewed{}\nuseEffect{}\nuseCallback{onDone}\nuseCallback{handleBackPress}\nuseCallback{onCopy}\nuseCallback{onBlurToggle}",(function(){return[a.Z,i.k6,g]})),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(P,"messages","/workspaces/apps/extension/src/components/PrivateKey/PrivateKey.tsx"),j.register(G,"PrivateKey","/workspaces/apps/extension/src/components/PrivateKey/PrivateKey.tsx")),(B="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&B(e)}}]);
//# sourceMappingURL=8133.js.map