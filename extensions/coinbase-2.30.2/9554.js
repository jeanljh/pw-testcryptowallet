/*! For license information please see 9554.js.LICENSE.txt */
"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[9554],{95632:(e,t,r)=>{r.d(t,{$:()=>w});var n,o=r(2784),a=r(63470),i=r(83112),c=r(86421),s=r(48972),u=r(52163),l=r(61641),f=r(52322);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var h,y,v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=(0,a.vU)({copyToClipboard:{id:"kIubEO",defaultMessage:[{type:0,value:"Copy to clipboard"}]},copiedToClipboard:{id:"JxoQv7",defaultMessage:[{type:0,value:"Copied to clipboard"}]}}),g={cursor:"pointer"},m={cursor:"text"},x={filter:"blur(5px)"};function w(e){var t=e.text,r=e.placeholder,n=e.onBlurToggle,a=e.onCopy,d=p((0,o.useState)(!0),2),h=d[0],y=d[1],v=p((0,o.useState)(!1),2),w=v[0],k=v[1],L=p((0,o.useState)([0,0]),2),S=L[0],C=L[1],T=(0,i.Z)().formatMessage,j=(0,o.useRef)(null),B=(0,o.useCallback)((function(){navigator.clipboard.writeText(t),k(!0),null==a||a(),setTimeout((function(){return k(!1)}),6e4)}),[t,a]);(0,o.useEffect)((function(){n&&n(h),j.current&&h&&clearTimeout(j.current)}),[j,h,n]);var P=(0,o.useCallback)((function(){y(!h),h&&(j.current=setTimeout((function(){y(!0)}),6e4))}),[h]),E=(0,o.useCallback)((function(e){Math.abs(e.clientX-S[0])+Math.abs(e.clientY-S[1])>10||P()}),[P,S]),I=(0,o.useCallback)((function(e){C([e.clientX,e.clientY])}),[C]),G=(0,o.useCallback)((function(e){"Space"===e.code&&P()}),[P]),M=w?"positive":"foreground";return(0,f.jsxs)(s.VStack,{children:[(0,f.jsx)(u.Pressable,{as:"button",onMouseUp:E,onMouseDown:I,onKeyPress:G,testID:"blur-text-container",noScaleOnPress:!0,backgroundColor:"transparent",children:(0,f.jsxs)(s.Box,{bordered:!0,borderRadius:"rounded",height:109,spacingVertical:1,spacingHorizontal:2,position:"relative",id:"blur-text-main-container",children:[(0,f.jsx)(s.Box,{dangerouslySetStyle:h?g:m,children:(0,f.jsx)(l.TextBody,{as:"div",testID:"blur-text-content",color:"foregroundMuted",children:h?(0,f.jsx)(s.Box,{display:"inline-block",dangerouslySetStyle:x,children:r}):t})}),(0,f.jsx)(s.Box,{justifyContent:"flex-end",position:"absolute",bottom:"10px",right:"10px",children:(0,f.jsx)(c.Icon,{size:"s",name:h?"visibleInactive":"visibleActive",color:"foreground"})})]})}),(0,f.jsx)(u.Pressable,{backgroundColor:"transparent",as:"button",onPress:B,testID:"blur-text-clipboard-copy",noScaleOnPress:!0,children:(0,f.jsxs)(s.HStack,{spacingTop:2,children:[(0,f.jsx)(c.Icon,{name:w?"circleCheckmark":"copy",color:M,size:"s"}),(0,f.jsx)(l.TextLabel1,{as:"p",spacingStart:1,children:T(w?b.copiedToClipboard:b.copyToClipboard)})]})})]})}v(w,"useState{[isBlur, setIsBlur](true)}\nuseState{[isCopied, setIsCopied](false)}\nuseState{[mouseDownPos, setMouseDownPos]([0, 0])}\nuseIntl{{ formatMessage }}\nuseRef{activeBlurTimer}\nuseCallback{copySeed}\nuseEffect{}\nuseCallback{toggleBlur}\nuseCallback{onMouseUp}\nuseCallback{onMouseDown}\nuseCallback{onKeyPress}",(function(){return[i.Z]})),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(b,"messages","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(g,"isBlurred","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(m,"isNotBlurred","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(x,"blur","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),h.register(w,"BlurText","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)},99554:(e,t,r)=>{r.r(t),r.d(t,{RecoveryPhrase:()=>B});var n=r(2784),o=r(63470),a=r(83112),i=r(4517),c=r(95632),s=r(27052),u=r(57430),l=r(60723),f=r(48972),p=r(61641),d=r(95545),h=r(48925);const y=()=>(0,d.bH)("your_recovery_phrase.viewed",{loggingId:"ca9563a0-538d-4d0c-9a1f-71392c57498a",componentType:d.re.page});var v,b=r(52322);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function f(){}function p(){}function d(){}var h={};c(h,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(T([])));v&&v!==t&&r.call(v,o)&&(h=v);var b=d.prototype=f.prototype=Object.create(h);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,i,c){var s=u(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==g(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,c(b,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(w.prototype),c(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(b),c(b,i,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function x(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){x(a,n,o,i,c,"next",e)}function c(e){x(a,n,o,i,c,"throw",e)}i(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&v(e);var S,C,T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},j=(0,o.vU)({backButtonAriaLabel:{id:"p72mKW",defaultMessage:[{type:0,value:"Go back"}]},pageTitle:{id:"JnB63T",defaultMessage:[{type:0,value:"Your recovery phrase"}]},pageInstructions:{id:"nhZ2ac",defaultMessage:[{type:0,value:"Save these 12 words in a safe place. Do not share them with anyone, even Coinbase. Anyone with your recovery phrase can steal your funds"}]},done:{id:"1v8v5C",defaultMessage:[{type:0,value:"Done"}]}});function B(){var e=(0,n.useRef)(!1),t=(0,a.Z)().formatMessage,r=(0,i.k6)(),o=k((0,n.useState)(),2),v=o[0],g=o[1],x=(0,n.useCallback)((function(){r.push("/settings/")}),[r]);y();var L=(0,n.useCallback)((function(){(0,d.Kz)("your_recovery_phrase.done_btn",{loggingId:"50e19455-4ccc-4bee-8557-90c1433ba21e",action:d.Us.click,componentType:d.re.button}),x()}),[x]),S=(0,n.useCallback)((function(){r.push("/settings/showRecoveryPhrase")}),[r]);(0,n.useEffect)((function(){function t(){return(t=w(m().mark((function t(){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.L.getMnemonicPromise();case 2:r=t.sent,e.current=!0,r||x(),g(r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}v||e.current||function(){t.apply(this,arguments)}()}),[x,v]);var C=(0,n.useCallback)((function(){(0,u.I4)()}),[]),T=(0,n.useCallback)((function(e){(0,u.en)(e)}),[]);return v?(0,b.jsxs)(h.n,{testID:"recovery-phrase-container",spacing:2,height:"100%",justifyContent:"space-between",overflow:"scroll",children:[(0,b.jsx)(f.Box,{offsetStart:1,children:(0,b.jsx)(l.IconButton,{name:"backArrow",onPress:S,transparent:!0,accessibilityLabel:t(j.backButtonAriaLabel)})}),(0,b.jsx)(f.Box,{children:(0,b.jsx)(p.TextTitle1,{as:"h3",children:t(j.pageTitle)})}),(0,b.jsx)(p.TextBody,{as:"div",color:"foregroundMuted",children:t(j.pageInstructions)}),(0,b.jsx)(f.VStack,{spacingTop:5,spacingBottom:5,children:(0,b.jsx)(c.$,{text:v,placeholder:"Save these 12 words to a password manager, or write down and store in a secure place.",onCopy:C,onBlurToggle:T})}),(0,b.jsx)(l.Button,{testID:"recovery-phrase-done-btn",block:!0,onPress:L,children:t(j.done)})]}):null}T(B,"useRef{mnemonicFetchedRef}\nuseIntl{{ formatMessage }}\nuseHistory{history}\nuseState{[recoveryPhrase, setRecoveryPhrase]}\nuseCallback{handleGoBack}\nuseYourRecoveryPhraseViewed{}\nuseCallback{onDone}\nuseCallback{handlePress}\nuseEffect{}\nuseCallback{onCopy}\nuseCallback{onBlurToggle}",(function(){return[a.Z,i.k6,y]})),(S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(S.register(j,"messages","/workspaces/apps/extension/src/components/RecoveryPhrase/RecoveryPhrase.tsx"),S.register(B,"RecoveryPhrase","/workspaces/apps/extension/src/components/RecoveryPhrase/RecoveryPhrase.tsx")),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)}}]);
//# sourceMappingURL=9554.js.map