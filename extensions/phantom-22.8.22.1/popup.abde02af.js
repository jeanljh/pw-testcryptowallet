(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},l=t.parcelRequirea886;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},t.parcelRequirea886=l),l.register("dgKOx",(function(n,t){e(n.exports,"Main",(function(){return i}));var r=l("hHMPk"),o=l("7OhhO"),a=l("fCuks");const i=r.default.div`
  background-color: #222222;
  min-width: ${o.PHANTOM_WIDTH}px;
  min-height: ${o.PHANTOM_HEIGHT}px;
  height: 100vh;
  width: 100vw;
  ${e=>e.withBorder&&o.BROWSER_ENV.browser.name!==a.BROWSER_MAP.safari?"border: 1px solid #323232;":""}
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${o.BROWSER_ENV.browser.name===a.BROWSER_MAP.firefox?"border-radius: 8px;":""}
`})),l.register("kHEYY",(function(t,r){e(t.exports,"Unlock",(function(){return M}),(function(e){return M=e}));var o=l("aZikt"),a=l("hHMPk"),i=l("ltHDB"),c=l("1vmp5"),s=l("41J1p"),u=l("1DdzG"),d=l("8xzWM"),m=l("hHJQk"),p=l("awYjP"),f=l("lFcxH"),E=l("cGG4P"),g=l("kaQO6"),w=l("6pkBl"),h=l("2bUa8"),k=l("h7pEd"),x=l("2R5r6"),b=function(e,n,t,r){return new(t||(t=Promise))((function(o,l){function a(e){try{c(r.next(e))}catch(e){l(e)}}function i(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}c((r=r.apply(e,n||[])).next())}))};const y=a.default.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,v=a.default.div`
  flex: 1;
  height: 100%;
  margin-top: ${e=>e.isFullScreen?"40px":"105px"};
  display: flex;
  flex-direction: column;
  align-items: center;
`,T=a.default(E.Input)`
  margin-top: 26px;
  margin-bottom: 15px;
`,O=a.default.div`
  width: 12px;
`,P=a.default(g.Text)`
  visibility: ${e=>e.visibility};
  margin-top: 18px;
  text-decoration: none;
  &:hover {
    color: #999999;
  }
`,M=({onUnlock:e,isFullScreen:t})=>{const{t:r}=i.useTranslation(),{register:l,handleSubmit:a,errors:d,getValues:f,setError:E}=c.useForm(),{showWalletMenu:T}=x.useWalletMenu(),P=o.useCallback((()=>b(void 0,void 0,void 0,(function*(){try{if(!(yield e(f("password"))))throw new Error("Incorrect password");s.analytics.capture("unlockWallet")}catch(e){console.error(e),e.message&&e.message.includes("Incorrect password")?E("password",{type:"manual",message:r("unlockErrorIncorrectPassword")}):E("password",{type:"manual",message:r("unlockErrorSomethingWentWrong")})}}))),[f,e,E,r]),M=()=>{s.analytics.capture("forgotPassword"),u.openTabAsync({url:"onboarding.html?restore=true"})};return t?n(o).createElement(k.Body,null,n(o).createElement(y,{onSubmit:a(P)},n(o).createElement(v,{isFullScreen:!0},n(o).createElement(H,null),n(o).createElement(W,{register:l,warning:d.password})),n(o).createElement(R,null),n(o).createElement(F,{error:d.password,onClick:M}))):n(o).createElement(k.Container,null,n(o).createElement(m.Header,{justifyContent:"space-between"},n(o).createElement(w.IconWrapper,{onClick:()=>{const e=n(o).createElement(n(o).Fragment,null,n(o).createElement(h.ResetWalletMenuItem,null),n(o).createElement(h.HelpMenuItem,null));T(e)}},n(o).createElement(p.WalletMenuIcon,null)),n(o).createElement(g.Text,{weight:500,size:16,color:"#555555"},"Phantom.app"),n(o).createElement(O,null)),n(o).createElement(k.Body,null,n(o).createElement(y,{id:"unlock-form",onSubmit:a(P)},n(o).createElement(v,{isFullScreen:!1},n(o).createElement(H,null),n(o).createElement(W,{register:l,warning:d.password}),n(o).createElement(F,{error:d.password,onClick:M})))),n(o).createElement(k.Footer,{plain:!0},n(o).createElement(R,{"data-testid":"unlock-form-submit-button",form:"unlock-form"})))},W=({register:e,warning:t})=>{const{t:r}=i.useTranslation();return n(o).createElement(T,{"data-testid":"unlock-form-password-input",name:"password",autoFocus:!0,placeholder:r("unlockPassword"),type:"password",ref:e({required:!0}),warning:t})},H=()=>{const{t:e}=i.useTranslation();return n(o).createElement(f.IconHeader,{icon:n(o).createElement(p.LogoDark,null),primaryText:e("unlockEnterPassword")})},F=({onClick:e,error:t})=>{const{t:r}=i.useTranslation();return n(o).createElement(P,{size:16,color:"#666666",onClick:e,visibility:t?"visible":"hidden"},r("unlockForgotPassword"))},R=e=>{const{t:t}=i.useTranslation();return n(o).createElement(d.Button,Object.assign({type:"submit",theme:"primary"},e),t("unlockActionButtonUnlock"))}})),l.register("3jzCT",(function(t,r){e(t.exports,"ExtensionLockWrapper",(function(){return i}));var o=l("aZikt"),a=l("kNJcR");const i=e=>{const{openOnboarding:t,renderLocked:r}=e,{state:l,refresh:i,unlock:c}=a.useExtensionLockState();return o.useEffect((()=>{"unknown"===l&&i(),"onboarding"===l&&t()}),[l,i,t]),"locked"===l?n(o).createElement(n(o).Fragment,null,r(c)):"unlocked"===l?n(o).createElement(n(o).Fragment,null,e.children):null}}));define=__define;})(window.define);