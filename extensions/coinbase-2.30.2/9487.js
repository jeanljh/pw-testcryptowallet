/*! For license information please see 9487.js.LICENSE.txt */
"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[9487],{80023:(t,e,r)=>{r.d(e,{y:()=>y});var n,o=r(2784),a=r(83112),i=r(60723),l=r(72205),c=r(48972),u=r(61641),s=r(52322);t=r.hmd(t),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(t);var f,d,h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},p="wallet-nickname",y=(0,o.memo)(h((function(t){var e=t.messages,r=t.handlePressSave,n=t.handleNicknameInputChange,o=(0,a.Z)().formatMessage;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c.VStack,{testID:p,flexGrow:1,spacingHorizontal:2,children:[(0,s.jsxs)(c.VStack,{gap:4,flexGrow:1,children:[(0,s.jsxs)(c.VStack,{children:[(0,s.jsx)(u.TextTitle1,{testID:"".concat(p,"--title"),spacingBottom:1,as:"h1",children:o(e.title)}),(0,s.jsx)(u.TextBody,{testID:"".concat(p,"--body"),color:"foregroundMuted",as:"p",children:o(e.body)})]}),(0,s.jsx)(l.TextInput,{placeholder:o(e.placeholder),onChange:n,label:o(e.label)})]}),(0,s.jsx)(c.HStack,{gap:1,width:"100%",children:(0,s.jsx)(i.Button,{testID:"".concat(p,"--save"),block:!0,onPress:r,children:o(e.actionSave)})})]})})}),"useIntl{{ formatMessage }}",(function(){return[a.Z]})));(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(p,"testID","/workspaces/apps/extension/src/screens/Wallet/Nickname.tsx"),f.register(y,"WalletNickname","/workspaces/apps/extension/src/screens/Wallet/Nickname.tsx")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(t)},79487:(t,e,r)=>{r.r(e),r.d(e,{EditNickname:()=>b});var n,o=r(2784),a=r(63470),i=r(4517),l=r(17726),c=r(77637),u=r(95561),s=r(48972),f=r(80023),d=r(52322);function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t=r.hmd(t),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(t);var y,v,m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},g=(0,a.vU)({title:{id:"apDf52",defaultMessage:[{type:0,value:"Edit Label"}]},body:{id:"2CrtWy",defaultMessage:[{type:0,value:"Give your wallet a label to easily identify it. Labels are stored locally and can only be seen by you."}]},label:{id:"DVZqEI",defaultMessage:[{type:0,value:"Wallet label"}]},placeholder:{id:"8U6QwG",defaultMessage:[{type:0,value:"Add a label"}]},actionSave:{id:"jvo0vs",defaultMessage:[{type:0,value:"Save"}]}}),b=(0,o.memo)(m((function(){var t=(0,i.k6)().goBack,e=(0,i.UO)().id,r=(0,u.c)(decodeURIComponent(e)),n=h((0,o.useState)(""),2),a=n[0],p=n[1],y=(0,c.r)(),v=(0,o.useCallback)((function(){r&&y(r.id,a),t()}),[t,a,r,y]),m=(0,o.useCallback)((function(t){p(t.target.value.trim())}),[p]);return(0,d.jsxs)(s.VStack,{height:"100%",flexGrow:1,overflow:"auto",children:[(0,d.jsx)(l.w,{}),(0,d.jsx)(f.y,{messages:g,handlePressSave:v,handleNicknameInputChange:m})]})}),"useHistory{{ goBack }}\nuseParams{{ id }}\nuseWalletGroupToDisplay{walletGroup}\nuseState{[newNickname, setNewNickname]('')}\nuseUpdateWalletGroupNickname{updateWalletGroupNickname}\nuseCallback{handlePressSave}\nuseCallback{handleNicknameInputChange}",(function(){return[i.k6,i.UO,u.c,c.r]})));(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"messages","/workspaces/apps/extension/src/screens/Wallet/pages/EditNickname.tsx"),y.register(b,"EditNickname","/workspaces/apps/extension/src/screens/Wallet/pages/EditNickname.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(t)},77637:(t,e,r)=>{r.d(e,{r:()=>d});var n,o,a,i=r(2784),l=r(78372),c=r(97898);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=L(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var d={};function h(){}function p(){}function y(){}var v={};l(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==e&&r.call(g,o)&&(v=g);var b=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,i,l){var c=f(t[o],t,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==u(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,l)}))}l(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=y,l(b,"constructor",y),l(y,"constructor",p),p.displayName=l(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),l(b,i,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function f(t,e,r,n,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function d(){var t=(0,c.w)();return(0,i.useCallback)(function(){var e,r=(e=s().mark((function e(r,n){var o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Tk)(r,n);case 2:return e.next=4,(0,l.EV)();case 4:o=e.sent,t(o);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){f(a,n,o,i,l,"next",t)}function l(t){f(a,n,o,i,l,"throw",t)}i(void 0)}))});return function(t,e){return r.apply(this,arguments)}}(),[t])}t=r.hmd(t),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(t),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t})(d,"useSetWalletGroups{setWalletGroups}\nuseCallback{}",(function(){return[c.w]})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(d,"useUpdateWalletGroupNickname","/workspaces/libs/data/stores/WalletGroups/hooks/useUpdateWalletGroupNickname.tsx"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(t)}}]);
//# sourceMappingURL=9487.js.map