(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;e.register("e93D5",(function(t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(e("lDSNw")),u=e("4ebHJ"),i=e("7aQRu");function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var u=d(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?y(e):t}(this,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,i=s(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(y(e=i.call.apply(i,[this].concat(n))),"callPlayer",u.callPlayer),b(y(e),"duration",null),b(y(e),"currentTime",null),b(y(e),"fractionLoaded",null),b(y(e),"mute",(function(){e.setVolume(0)})),b(y(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(y(e),"ref",(function(t){e.iframe=t})),e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this;(0,u.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(r){if(n.iframe){var o=r.Widget.Events,u=o.PLAY,i=o.PLAY_PROGRESS,a=o.PAUSE,c=o.FINISH,f=o.ERROR;t||(n.player=r.Widget(n.iframe),n.player.bind(u,n.props.onPlay),n.player.bind(a,(function(){n.duration-n.currentTime<.05||n.props.onPause()})),n.player.bind(i,(function(e){n.currentTime=e.currentPosition/1e3,n.fractionLoaded=e.loadedProgress})),n.player.bind(c,(function(){return n.props.onEnded()})),n.player.bind(f,(function(e){return n.props.onError(e)}))),n.player.load(e,l(l({},n.props.config.options),{},{callback:function(){n.player.getDuration((function(e){n.duration=e/1e3,n.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",1e3*e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return o.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}])&&f(t.prototype,n),r&&f(t,r),a}(o.Component);t.exports.default=h,b(h,"displayName","SoundCloud"),b(h,"canPlay",i.canPlay.soundcloud),b(h,"loopOnEnded",!0)}));
//# sourceMappingURL=SoundCloud.98333ea6.js.map
define=__define;})(window.define);