(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,l){Object.defineProperty(e,t,{get:n,set:l,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;n.register("i5MGu",(function(l,a){var r;r=l.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),t(l.exports,"EthSelectWallet",(function(){return _})),t(l.exports,"default",(function(){return w}));var i=n("lMzyG"),o=n("4chX7"),s=n("lDSNw"),c=n("cZIbv"),u=n("cJ96h"),d=n("laYjG"),p=n("7E6dj"),m=n("kpxNY"),f=n("aanFI"),h=n("egRt4");const g=c.default.div`
  > * {
    margin: 10px 0px 0px;
  }
`,x=c.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,E=c.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 17.5px;
  color: #777;
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  margin: 0px auto;
  > span {
    min-height: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    width: 14px !important;
    border-radius: 3px !important;
  }
`,y=c.default.div`
  display: flex;
  gap: 16px;
`,_=e(s).memo((({requestId:t})=>{const{t:n}=(0,i.useTranslation)(),l=(0,u.usePostOutgoingBackgroundResponse)(),[a,r]=(0,s.useState)(!1);let c;null!==t&&(c=t);const _=(0,s.useCallback)((()=>{l({jsonrpc:"2.0",id:c,result:a?o.user.user_selectEthWallet.result.enum.ALWAYS_USE_PHANTOM:o.user.user_selectEthWallet.result.enum.CONTINUE_WITH_PHANTOM})}),[c,l,a]),w=(0,s.useCallback)((()=>{l({jsonrpc:"2.0",id:c,result:a?o.user.user_selectEthWallet.result.enum.ALWAYS_USE_METAMASK:o.user.user_selectEthWallet.result.enum.CONTINUE_WITH_METAMASK})}),[c,l,a]);return e(s).createElement(h.Container,null,e(s).createElement(h.Body,{style:{display:"flex",alignItems:"center"}},e(s).createElement(h.TopGroup,null,e(s).createElement(m.IconHeader,{icon:e(s).createElement(y,null,e(s).createElement(f.IconPhantom,{width:64}),e(s).createElement(f.IconMetaMask,{width:64,height:64})),primaryText:n("whichExtensionToUse"),secondaryText:e(s).createElement(i.Trans,{i18nKey:"pickMetamaskSecondary"},"You can change this behavior anytime by opening Phantom and going to",e(s).createElement("strong",null,"Settings → Default App Wallet.")),headerStyle:m.IconHeaderStyle.Small}))),e(s).createElement(h.Footer,{plain:!0,style:{padding:"0px 16px 24px 16px"}},e(s).createElement(g,null,e(s).createElement(x,null,e(s).createElement(d.Button,{onClick:w,"data-testid":"select_wallet--metamask"},n("useMetaMask"))),e(s).createElement(x,null,e(s).createElement(d.Button,{theme:"primary",onClick:_,"data-testid":"select_wallet--phantom"},n("usePhantom"))),e(s).createElement(E,{onClick:()=>r(!a)},e(s).createElement(p.Checkbox,{checked:a,"data-testid":"select_wallet--always"})," ",n("dontAskMeAgain")))))}));var w=_}));
//# sourceMappingURL=EthSelectWallet.7906f5af.js.map
define=__define;})(window.define);