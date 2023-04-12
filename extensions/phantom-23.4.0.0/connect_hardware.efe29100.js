(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequirea886=o),o.register("5PVn1",(function(n,r){t(n.exports,"ConnectHardwareContainer",(function(){return $}),(function(e){return $=e})),t(n.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return z}),(function(e){return z=e})),t(n.exports,"ConnectHardwareStepContainer",(function(){return q}),(function(e){return q=e}));var a=o("7dqns"),l=o("c1thM"),i=o("90BMT"),c=o("lDSNw"),u=o("ef4Zh"),s=o("5oL59"),d=o("6TGHh"),p=o("LqQFk"),f=o("cZIbv");o("1KK14");var m=o("6Tvfa"),h=o("au6zr"),g=o("lMzyG"),v=o("4yY1D"),y=o("4y59b"),x=o("NQvFB"),S=o("HLcoo"),E=o("gmVmN"),w=o("cGB0F"),T=o("laYjG"),b=o("5ftLv"),C=o("kBpKb"),H=o("3olS2"),P=o("kpxNY"),A=o("aanFI"),I=o("dyeVQ"),k=o("02iAW"),F=o("03gS4"),L=o("4EOrh"),R=o("5Doro"),D=o("44z5p"),B=o("bSZtF"),N=o("ifZdO"),O=o("hvlNY"),_=o("h5kyv"),j=o("1wI6a"),M=o("bcqzL"),V=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(e){o(e)}}function i(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))};const W=e(c).lazy((()=>o("kvtww")));h.fileLogger.init({provider:j.FileLoggerProvider}),v.telemetry.init(),v.telemetry.setUser({id:_.analytics.getDeviceId()});const $=f.default.main`
  width: 400px;
  min-height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,G=f.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,K=f.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,U=()=>{const t=new URLSearchParams((0,d.useLocation)().search),{data:n}=(0,B.useIsMultiChainEnabled)(),r=t.get("permission");return n?e(c).createElement(e(c).Fragment,null,e(c).createElement(M.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(c).createElement(H.FullPageHeader,null),e(c).createElement(C.OnboardingAndConnectHardwareErrorBoundary,null,e(c).createElement(c.Suspense,{fallback:null},e(c).createElement(W,null)))):e(c).createElement(e(c).Fragment,null,e(c).createElement(M.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(c).createElement(H.FullPageHeader,null),e(c).createElement(L.HardwareWalletProvider,null,e(c).createElement(C.OnboardingAndConnectHardwareErrorBoundary,null,r?e(c).createElement($,null,e(c).createElement(Y,{onFinish:()=>window.close(),pushStep:x.NOOP,popStep:x.NOOP})):e(c).createElement(Z,null))))},z=3,Z=()=>{const[t,n]=(0,c.useState)([]),r=(0,p.default)(t,((e,t)=>(null==e?void 0:e.length)===t.length)),o=(0,y.getLast)(t),u=e=>{n((t=>(0,i.default)(t,(t=>{t.push(e)}))))},s=()=>{n((e=>(0,i.default)(e,(e=>{e.pop()}))))};(0,c.useEffect)((()=>{n([e(c).createElement(Y,{pushStep:u,popStep:s})])}),[]);const d=t.length,f=t.length>(null!=r?r:[]).length,m=0===(null==r?void 0:r.length),h={initial:{x:m?0:f?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(c).createElement($,null,e(c).createElement(F.StepHeader,{totalSteps:z,onBackClick:s,currentStepIndex:d-1}),e(c).createElement(a.AnimatePresence,{exitBeforeEnter:!0},e(c).createElement(l.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${t.length}_${null==r?void 0:r.length}`},h),o)))},q=f.default.div`
  padding: 55px 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`,Y=t=>{const{t:n}=(0,g.useTranslation)(),{ledgerTransportState:r,transport:a,getPermission:o}=(0,L.useLedgerTransport)();let l,i,u=b.ConfirmationIconType.Default,s=e(c).createElement(k.SpinnerIcon,null),d=n("commandContinue"),p=!1,f=x.NOOP;switch(r){case L.LedgerTransportState.Searching:l=n("connectHardwareSearchingPrimaryText"),i=n("connectHardwareSearchingSecondaryText"),p=!0;break;case L.LedgerTransportState.NeedsPermission:s=e(c).createElement(A.IconAdd,null),l=n("connectHardwareNeedsPermissionPrimaryText"),i=n("connectHardwareNeedsPermissionSecondaryText"),f=o;break;case L.LedgerTransportState.WaitingForPermission:l=n("connectHardwareWaitingForPermissionPrimaryText"),i=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case L.LedgerTransportState.WaitingForApplication:s=e(c).createElement(A.IconSolana,null),l=n("connectHardwareWaitingForApplicationPrimaryText"),i=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case L.LedgerTransportState.Connected:u=b.ConfirmationIconType.Success,l=n("connectHardwareConnectedPrimaryText"),i=n("connectHardwareConnectedSecondaryText"),f=()=>{if(!a)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(c).createElement(J,Object.assign({transport:a},t)))};break;case L.LedgerTransportState.Failed:u=b.ConfirmationIconType.Failure,l=n("connectHardwareFailedPrimaryText"),i=n("connectHardwareFailedSecondaryText"),d=n("commandRetry"),f=o}return e(c).createElement(q,null,e(c).createElement(P.IconHeader,{icon:e(c).createElement(b.ConfirmationIcon,{defaultIcon:s,type:u}),primaryText:l,secondaryText:i,headerStyle:P.IconHeaderStyle.Large}),e(c).createElement(T.Button,{onClick:f,theme:"primary",disabled:p},d))},Q=[m.DerivationPathType.Bip44RootSolana,m.DerivationPathType.Bip44Solana,m.DerivationPathType.Bip44ChangeSolana],J=t=>{var n;const{t:r}=(0,g.useTranslation)(),[a,o]=(0,c.useState)(0),[l,u]=(0,c.useState)(void 0),[s,d]=(0,c.useState)([]),[p,f]=(0,c.useState)({}),[h,x]=(0,c.useState)(!1),b=null===(n=(0,D.useFetchConnection)())||void 0===n?void 0:n.data,C=null==b?void 0:b.connection,[H,k,F]=(0,N.useStorage)(m.StorageKeyAccounts.AccountMetas,[]),L=(0,c.useMemo)((()=>{const e=H.filter((e=>e.type===m.AccountType.Ledger)).map((e=>e.publicKey.toString()));return s.filter((t=>!e.includes(t.toString())))}),[s,H]),R=void 0!==a?Q[a]:void 0,B=(0,c.useMemo)((()=>R?R===m.DerivationPathType.Bip44RootSolana?[(0,w.solanaDerivationPath)(0,0,m.DerivationPathType.Bip44RootSolana)]:(0,y.range)(10).map((e=>(0,w.solanaDerivationPath)(e,0,R))):[]),[R]),j=Q.map((e=>({value:e,displayValue:m.DERIVATION_PATH_TYPE_TO_VALUE[e]})));(0,c.useEffect)((()=>{V(void 0,void 0,void 0,(function*(){if(!k&&C){x(!0);try{const e=[];for(const n of B){const r=yield(0,w.getPublicKeyAsync)(t.transport,n);e.push(r)}d(e);const n=yield(0,S.getMultipleAccountsAsync)(C,e,"finalized");f(n)}catch(e){v.telemetry.captureError(e,v.FeatureTag.Ledger)}finally{x(!1)}}}))}),[t.transport,k,B,C]),(0,c.useEffect)((()=>{d([])}),[B]),(0,c.useEffect)((()=>{1===L.length&&u(0)}),[L]);const M=L.map((t=>{var n;const r=t.toString(),a=null===(n=p[t.toString()])||void 0===n?void 0:n.lamports,o=void 0!==a?(0,E.formatTokenAmount)((0,E.lamportsToSolana)(a)):"0";return{displayValue:e(c).createElement(K,null,e(c).createElement("span",null,(0,E.formatHashMedium)(r,7)),e(c).createElement("label",null,o," SOL")),value:r}})),W=void 0===a||void 0===l,$=void 0!==l?L[l]:void 0;return e(c).createElement(q,null,e(c).createElement(P.IconHeader,{icon:e(c).createElement(A.IconAdd,null),primaryText:r("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:P.IconHeaderStyle.Large}),e(c).createElement(G,null,e(c).createElement(I.Select,{placeholderText:r("connectHardwareSelectAddressDerivationPath"),options:j,value:R,onChange:(e,t)=>{o(t)}}),e(c).createElement(I.Select,{placeholderText:h?r("connectHardwareSelectAddressSearching"):0===L.length?r("connectHardwareSelectAddressAllAddressesImported"):r("connectHardwareSelectAddressWalletAddress"),options:M,value:null==$?void 0:$.toString(),onChange:(e,t)=>{u(t)}}),e(c).createElement(T.Button,{onClick:()=>{if(void 0===l)return;const n=L[l],r=s.map((e=>e.toString())).indexOf(n.toString());var a,o;a=n.toString(),o=r,V(void 0,void 0,void 0,(function*(){if(k)return;const e=(0,i.default)(H,(e=>{const t=e.filter((e=>e.type===m.AccountType.Ledger)).length+1,n=B[o].toString("hex");e.push({type:m.AccountType.Ledger,name:`Ledger ${t}`,publicKey:a,derivationPath:n})})),t=e.length-1;_.analytics.capture("connectHardwareAddAccount"),F(e);const n=new(0,O.LocalStorage);yield(0,m.setSelectedAccountIndex)(n,t)})),t.pushStep(e(c).createElement(X,Object.assign({},t)))},theme:"primary",disabled:W},r("connectHardwareAddAccountButton"))))},X=()=>{const{t:t}=(0,g.useTranslation)();return e(c).createElement(q,null,e(c).createElement(P.IconHeader,{icon:e(c).createElement(b.ConfirmationIcon,{defaultIcon:e(c).createElement("div",null),type:b.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:P.IconHeaderStyle.Large}),e(c).createElement(T.Button,{onClick:()=>{_.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},t("pastParticipleDone")))};(0,u.render)(e(c).createElement(s.BrowserRouter,null,e(c).createElement(R.QueryProvider,null,e(c).createElement(U,null))),document.getElementById("root")),_.analytics.capture("connectHardwareOpen")})),o.register("5oL59",(function(n,r){t(n.exports,"BrowserRouter",(function(){return p})),t(n.exports,"Link",(function(){return y})),t(n.exports,"matchPath",(function(){return o("6TGHh").matchPath}));var a=o("6TGHh"),l=(a=o("6TGHh"),o("blvhM")),i=o("lDSNw"),c=o("edxNJ"),u=o("7ZS2X"),s=o("jw7LZ"),d=o("lw78t"),p=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.createBrowserHistory)(e.props),e}return(0,l.default)(n,t),n.prototype.render=function(){return e(i).createElement(a.Router,{history:this.history,children:this.props.children})},n}(e(i).Component),f=(e(i).Component,function(e,t){return"function"==typeof e?e(t):e}),m=function(e,t){return"string"==typeof e?(0,c.createLocation)(e,null,null,t):e},h=function(e){return e},g=e(i).forwardRef;void 0===g&&(g=h);var v=g((function(t,n){var r=t.innerRef,a=t.navigate,o=t.onClick,l=(0,s.default)(t,["innerRef","navigate","onClick"]),c=l.target,d=(0,u.default)({},l,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return d.ref=h!==g&&n||r,e(i).createElement("a",d)})),y=g((function(t,n){var r=t.component,o=void 0===r?v:r,l=t.replace,p=t.to,y=t.innerRef,x=(0,s.default)(t,["component","replace","to","innerRef"]);return e(i).createElement(a.__RouterContext.Consumer,null,(function(t){!t&&(0,d.default)(!1);var r=t.history,a=m(f(p,t.location),t.location),s=a?r.createHref(a):"",v=(0,u.default)({},x,{href:s,navigate:function(){var e=f(p,t.location),n=(0,c.createPath)(t.location)===(0,c.createPath)(m(e));(l||n?r.replace:r.push)(e)}});return h!==g?v.ref=n||y:v.innerRef=y,e(i).createElement(o,v)}))})),x=function(e){return e},S=e(i).forwardRef;void 0===S&&(S=x);S((function(t,n){var r=t["aria-current"],o=void 0===r?"page":r,l=t.activeClassName,c=void 0===l?"active":l,p=t.activeStyle,h=t.className,g=t.exact,v=t.isActive,E=t.location,w=t.sensitive,T=t.strict,b=t.style,C=t.to,H=t.innerRef,P=(0,s.default)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return e(i).createElement(a.__RouterContext.Consumer,null,(function(t){!t&&(0,d.default)(!1);var r=E||t.location,l=m(f(C,r),r),s=l.pathname,A=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),I=A?(0,a.matchPath)(r.pathname,{path:A,exact:g,sensitive:w,strict:T}):null,k=!!(v?v(I,r):I),F="function"==typeof h?h(k):h,L="function"==typeof b?b(k):b;k&&(F=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(F,c),L=(0,u.default)({},L,p));var R=(0,u.default)({"aria-current":k&&o||null,className:F,style:L,to:l},P);return x!==S?R.ref=n||H:R.innerRef=H,e(i).createElement(y,R)}))}))})),o.register("3olS2",(function(n,r){t(n.exports,"FullPageHeader",(function(){return h}));var a=o("lMzyG"),l=o("lDSNw"),i=o("NQvFB"),c=o("cZIbv"),u=o("aanFI"),s=o("6l2nq"),d=o("kn91D");const p=c.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,f=(0,c.default)(s.Row).attrs({width:"auto",padding:"10px 20px"})`
  background: #252525;
  border-radius: 100px;
`,m=c.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    fill: #aaa;
  }
  &:hover {
    color: #fff;
    svg {
      fill: #fff;
    }
    p {
      color: #fff;
    }
  }
`,h=()=>{const{t:t}=(0,a.useTranslation)();return e(l).createElement(p,null,e(l).createElement(f,null,e(l).createElement("img",{src:"/grey_logo.png",alt:"Phantom",width:"22px"}),e(l).createElement(d.LogoText,{size:16,lineHeight:18,margin:"0 0 0 10px"},"Phantom")),e(l).createElement(m,{"data-testid":"full-page-header-support-link",href:i.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(l).createElement(u.IconHelp,null),e(l).createElement(d.Text,{color:"#AAA",size:16,weight:500,hoverColor:"#FFF",margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}})),o.register("dyeVQ",(function(n,r){t(n.exports,"Select",(function(){return p}));var a=o("bpFkY"),l=o("lDSNw"),i=o("cZIbv"),c=o("aanFI"),u=o("2t4fc");const s=(0,i.default)(a.ListboxInput)`
  position: relative;
  width: 100%;
`,d=i.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,p=({value:t,placeholderText:n,options:r,onChange:a})=>{var o;const i=r.map((e=>e.value)),p=0===r.length,f=null===(o=r.find((e=>e.value===t)))||void 0===o?void 0:o.displayValue;return e(l).createElement(s,{value:null!=t?t:"__none",onChange:e=>a(e,i.indexOf(e)),tabIndex:0,disabled:p},(()=>e(l).createElement(e(l).Fragment,null,e(l).createElement(u.SelectButton,{arrow:e(l).createElement(d,null,e(l).createElement(c.IconChevronDown,null))},void 0===t?n:f),!p&&e(l).createElement(u.SelectPopover,null,e(l).createElement(u.SelectList,null,r.map((t=>{var n;return e(l).createElement(u.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))}})),o.register("03gS4",(function(n,r){t(n.exports,"StepHeader",(function(){return h}));var a=o("4y59b"),l=o("lDSNw"),i=o("cZIbv"),c=o("gR1av"),u=o("miiws"),s=o("aanFI"),d=o("6l2nq");const p=(0,i.default)(d.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,f=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,m=i.default.div`
  width: 24px;
  height: 24px;
`,h=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:o,showBackButtonOnFirstStep:i,showBackButton:d=!0})=>{const h=d&&(i||0!==r);return e(l).createElement(p,{opacity:o?0:1},h?e(l).createElement(c.ChevronCircle,{right:1,onClick:t},e(l).createElement(s.IconChevronLeft,null)):e(l).createElement(m,null),e(l).createElement(f,null,(0,a.range)(n).map((t=>{const n=t<=r?"#4E44CE":"#333";return e(l).createElement(u.Circle,{key:t,diameter:12,color:n})}))),e(l).createElement(m,null))}})),o.register("gR1av",(function(e,n){t(e.exports,"ChevronCircle",(function(){return l}));var r=o("cZIbv"),a=o("miiws");const l=(0,r.default)(a.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`})),o.register("kvtww",(function(e,t){e.exports=Promise.all([o("22S8I")(new URL(o("5V6iE").resolve("1JCWp"),import.meta.url).toString()),import("./"+o("5V6iE").resolve("1qrGa")),import("./"+o("5V6iE").resolve("7Yz5u"))]).then((()=>o("7CSQK")))})),o.register("22S8I",(function(e,t){var n=o("bDExm");e.exports=n((function(e){return new Promise((function(t,n){var r=document.getElementsByTagName("link");if([].concat(r).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onerror=function(e){a.onerror=a.onload=null,a.remove(),n(e)},a.onload=function(){a.onerror=a.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),o.register("bDExm",(function(e,t){var n={},r={},a={};e.exports=function(e,t){return function(o){var l=function(e){switch(e){case"preload":return r;case"prefetch":return a;default:return n}}(t);return l[o]?l[o]:l[o]=e.apply(null,arguments).catch((function(e){throw delete l[o],e}))}}})),o("5V6iE").register(JSON.parse('{"8iUX0":"connect_hardware.efe29100.js","7Yz5u":"ConnectHardwareMultichainFlow.f0a3e674.js","1qrGa":"ConnectHardwareMultichainFlow.a362342e.js","1JCWp":"notification.e371f99c.css","gmATR":"notification.9cf4c952.css","cht1b":"phishing.65ce1145.js","jiDuU":"connect_hardware.4e9e1edf.js","ejMSw":"connect_hardware.4c3d9588.js","h3t8x":"TransportWebHID.6ce3c950.js","4BJU1":"Solana.360a02f0.js","2UKlV":"semver.8ccfa2da.js"}')),o("5PVn1");
//# sourceMappingURL=connect_hardware.efe29100.js.map
define=__define;})(window.define);