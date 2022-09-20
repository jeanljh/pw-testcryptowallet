(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequirea886;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequirea886=r);var o=r("aZikt"),l=r("ihAua"),i=r("hHMPk"),c=r("ehJ6P"),d=r("d3pmY"),s=r("lxqKj"),u=r("gDkTC"),p=r("lwple"),m=r("czDD7");r("5dL5p");var g=r("ltHDB"),h=r("6oEu9"),y=(p=r("lwple"),r("g9tZv")),f=r("6SQSC"),v=r("41J1p"),S=r("2WP7v"),x=r("f8jMK"),E=r("cFuyE"),w=r("jKFz7"),T=r("iXlMH"),P=r("fGPQl"),b=r("bBAGA"),H=r("jhy6c"),A=r("8xzWM"),C=r("5y3N4"),k=r("awYjP"),I=r("1zKMS"),F=r("ekJeC"),L=r("lFcxH"),B=(o=r("aZikt"),i=r("hHMPk"),x=r("f8jMK"),i=r("hHMPk"),r("elS0S"));const D=i.default(B.Circle)`
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
`;B=r("elS0S"),k=r("awYjP");var O=r("691SI");const M=i.default(O.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
  position: absolute;
`,j=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,$=i.default.div`
  width: 24px;
  height: 24px;
`,R=({onBackClick:t,totalSteps:n,currentStepIndex:a,isHidden:r,showBackButtonOnFirstStep:l})=>{const i=l||0!==a;return e(o).createElement(M,{opacity:r?0:1},i?e(o).createElement(D,{right:1,onClick:t},e(o).createElement(k.LeftChevronIcon,null)):e(o).createElement($,null),e(o).createElement(j,null,x.range(n).map((t=>{const n=t<=a?"#4E44CE":"#333";return e(o).createElement(B.Circle,{key:t,diameter:12,color:n})}))),e(o).createElement($,null))};var W=r("45nY7"),_=(o=r("aZikt"),i=r("hHMPk"),r("i5Y99")),K=(k=r("awYjP"),r("3VRqy"));const N=i.default(_.ListboxInput)`
  position: relative;
  width: 100%;
`,V=i.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,Y=({value:t,placeholderText:n,options:a,onChange:r})=>{var l;const i=a.map((e=>e.value)),c=0===a.length,d=null===(l=a.find((e=>e.value===t)))||void 0===l?void 0:l.displayValue;return e(o).createElement(N,{value:null!=t?t:"__none",onChange:e=>r(e,i.indexOf(e)),tabIndex:0,disabled:c},(()=>e(o).createElement(e(o).Fragment,null,e(o).createElement(K.SelectButton,{arrow:e(o).createElement(V,null,e(o).createElement(k.DownChevronIcon,null))},void 0===t?n:d),!c&&e(o).createElement(K.SelectPopover,null,e(o).createElement(K.SelectList,null,a.map((t=>{var n;return e(o).createElement(K.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))};var z=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))};f.initSentry();const q=i.default.main`
  width: 400px;
  height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`,U=i.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,Z=i.default(L.IconHeader)`
  margin-top: 46px;
  padding-left: 10px;
  padding-right: 10px;
`,G=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,J=()=>{const t=new URLSearchParams(u.useLocation().search).get("permission");return e(o).createElement(e(o).Fragment,null,e(o).createElement(S.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(o).createElement(I.FullPageHeader,null),e(o).createElement(P.HardwareWalletProvider,null,e(o).createElement(C.OnboardingAndConnectHardwareErrorBoundary,null,t?e(o).createElement(q,null,e(o).createElement(ee,{onFinish:()=>window.close(),pushStep:h.NOOP,popStep:h.NOOP})):e(o).createElement(Q,null))))},Q=()=>{const[t,n]=o.useState([]),a=s.usePreviousDistinct(t,((e,t)=>(null==e?void 0:e.length)===t.length)),r=x.getLast(t),l=e=>{n((t=>c.default(t,(t=>{t.push(e)}))))},i=()=>{n((e=>c.default(e,(e=>{e.pop()}))))};o.useEffect((()=>{n([e(o).createElement(ee,{pushStep:l,popStep:i})])}),[]);const u=t.length,p=t.length>(null!=a?a:[]).length,m=0===(null==a?void 0:a.length),g={initial:{x:m?0:p?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(o).createElement(q,null,e(o).createElement(R,{totalSteps:3,onBackClick:i,currentStepIndex:u-1}),e(o).createElement(d.AnimatePresence,{exitBeforeEnter:!0},e(o).createElement(d.motion.div,Object.assign({style:{height:"100%"},key:`${t.length}_${null==a?void 0:a.length}`},g),r)))},X=i.default.div`
  padding: 20px;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,ee=t=>{const{t:n}=g.useTranslation(),{ledgerTransportState:a,transport:r,getPermission:l}=P.useLedgerTransport();let i,c,d=F.ConfirmationIconType.Default,s=e(o).createElement(W.SpinnerIcon,null),u=n("connectHardwareContinueActionButtonText"),p=!1,m=h.NOOP;switch(a){case P.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),c=n("connectHardwareSearchingSecondaryText"),p=!0;break;case P.LedgerTransportState.NeedsPermission:s=e(o).createElement(k.AddIcon,null),i=n("connectHardwareNeedsPermissionPrimaryText"),c=n("connectHardwareNeedsPermissionSecondaryText"),m=l;break;case P.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),c=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case P.LedgerTransportState.WaitingForApplication:s=e(o).createElement(k.SolanaIcon,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),c=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case P.LedgerTransportState.Connected:d=F.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),c=n("connectHardwareConnectedSecondaryText"),m=()=>{if(!r)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(o).createElement(ne,Object.assign({transport:r},t)))};break;case P.LedgerTransportState.Failed:d=F.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),c=n("connectHardwareFailedSecondaryText"),u=n("connectHardwareFailedRetryActionButtonText"),m=l}return e(o).createElement(X,null,e(o).createElement(Z,{icon:e(o).createElement(F.ConfirmationIcon,{defaultIcon:s,type:d}),primaryText:i,secondaryText:c,headerStyle:L.IconHeaderStyle.Large}),e(o).createElement(A.Button,{onClick:m,theme:"primary",disabled:p},u))},te=[p.DerivationPathType.Bip44RootSolana,p.DerivationPathType.Bip44Solana,p.DerivationPathType.Bip44ChangeSolana],ne=t=>{var n;const{t:a}=g.useTranslation(),[r,l]=o.useState(0),[i,d]=o.useState(void 0),[s,u]=o.useState([]),[f,S]=o.useState({}),[P,H]=o.useState(!1),C=null===(n=b.useFetchConnection())||void 0===n?void 0:n.data,I=null==C?void 0:C.connection,[F,B,D]=y.useStorage(p.StorageKeys.AccountMetas,[]),O=o.useMemo((()=>{const e=F.filter((e=>e.type===p.AccountType.Ledger)).map((e=>e.publicKey.toString()));return s.filter((t=>!e.includes(t.toString())))}),[s,F]),M=void 0!==r?te[r]:void 0,j=o.useMemo((()=>M?M===p.DerivationPathType.Bip44RootSolana?[w.solanaDerivationPath(0,0,p.DerivationPathType.Bip44RootSolana)]:x.range(10).map((e=>w.solanaDerivationPath(e,0,M))):[]),[M]),$=te.map((e=>({value:e,displayValue:h.DERIVATION_PATH_TYPE_TO_VALUE[e]})));o.useEffect((()=>{z(void 0,void 0,void 0,(function*(){if(!B&&I){H(!0);try{const e=[];for(const n of j){const a=yield w.getPublicKeyAsync(t.transport,n);e.push(a)}u(e);const n=yield T.getMultipleAccountsAsync(I,e,"finalized");S(n)}catch(e){console.error(e)}finally{H(!1)}}}))}),[t.transport,B,j,I]),o.useEffect((()=>{u([])}),[j]),o.useEffect((()=>{1===O.length&&d(0)}),[O]);const R=O.map((t=>{var n;const a=t.toString(),r=null===(n=f[t.toString()])||void 0===n?void 0:n.lamports,l=void 0!==r?E.formatTokenAmount(E.lamportsToSolana(r)):"0";return{displayValue:e(o).createElement(G,null,e(o).createElement("span",null,E.formatHashMedium(a,7)),e(o).createElement("label",null,l," SOL")),value:a}})),W=void 0===r||void 0===i,_=void 0!==i?O[i]:void 0;return e(o).createElement(X,null,e(o).createElement(Z,{icon:e(o).createElement(k.AddIcon,null),primaryText:a("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:L.IconHeaderStyle.Large}),e(o).createElement(U,null,e(o).createElement(Y,{placeholderText:a("connectHardwareSelectAddressDerivationPath"),options:$,value:M,onChange:(e,t)=>{l(t)}}),e(o).createElement(Y,{placeholderText:P?a("connectHardwareSelectAddressSearching"):0===O.length?a("connectHardwareSelectAddressAllAddressesImported"):a("connectHardwareSelectAddressWalletAddress"),options:R,value:null==_?void 0:_.toString(),onChange:(e,t)=>{d(t)}})),e(o).createElement(A.Button,{onClick:()=>{if(void 0===i)return;const n=O[i],a=s.map((e=>e.toString())).indexOf(n.toString());var r,l;r=n.toString(),l=a,z(void 0,void 0,void 0,(function*(){if(B)return;const e=c.default(F,(e=>{const t=e.filter((e=>e.type===p.AccountType.Ledger)).length+1,n=j[l].toString("hex");e.push({type:p.AccountType.Ledger,name:`Ledger ${t}`,publicKey:r,derivationPath:n})})),t=e.length-1;v.analytics.capture("connectHardwareAddAccount"),D(e),m.setStorageValue(p.StorageKeys.SelectedAccountIndex,t)})),t.pushStep(e(o).createElement(ae,Object.assign({},t)))},theme:"primary",disabled:W},"Add Account"))},ae=()=>{const{t:t}=g.useTranslation();return e(o).createElement(X,null,e(o).createElement(Z,{icon:e(o).createElement(F.ConfirmationIcon,{defaultIcon:e(o).createElement("div",null),type:F.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:L.IconHeaderStyle.Large}),e(o).createElement(A.Button,{onClick:()=>{v.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},"Done"))};l.render(e(o).createElement(u.BrowserRouter,null,e(o).createElement(H.QueryProvider,null,e(o).createElement(J,null))),document.getElementById("root")),v.analytics.capture("connectHardwareOpen");define=__define;})(window.define);