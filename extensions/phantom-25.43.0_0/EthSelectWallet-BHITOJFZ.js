import{e as f,g as k,h as A,i as w}from"./chunk-C45Q7HUI.js";import"./chunk-TBD3HHGN.js";import"./chunk-U6PL3II4.js";import{d as g}from"./chunk-365YWPIP.js";import"./chunk-XVSHIHTB.js";import"./chunk-6BTGDHLT.js";import"./chunk-YLX2CXTY.js";import{db as h,m as t,qa as x}from"./chunk-FMF67RFP.js";import"./chunk-3JCRVFH6.js";import"./chunk-MN377ENM.js";import"./chunk-6XVVS35Q.js";import{y as r}from"./chunk-P42QO3R7.js";import{Ba as p,Ha as d,V as l,X as u,a as _,r as m}from"./chunk-LYTSCHVN.js";import"./chunk-PPQ6BNOX.js";import{g as T,i as a,n as c}from"./chunk-NSVULBS3.js";a();c();var e=T(_(),1);var S=t.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 6px;
`,y=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,I=t.div`
  background: ${l.colors.legacy.elementBase};
  border-radius: 6px;
  padding: 12px 16px;
`,W=t.div`
  display: flex;
  flex-direction: row;
  color: ${l.colors.legacy.textBase};
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 8px;

  > span {
    min-height: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    width: 14px !important;
    border-radius: 3px !important;
  }
`,b=t.div`
  display: flex;
  gap: 16px;
`,B=t.div`
  padding: 27px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,G=e.default.memo(({requestId:s})=>{let{t:n}=m(),i=f(),[o,C]=(0,e.useState)(!1),M=(0,e.useCallback)(()=>{i({jsonrpc:"2.0",id:s,result:o?r.user_selectEthWallet.result.enum.ALWAYS_USE_PHANTOM:r.user_selectEthWallet.result.enum.CONTINUE_WITH_PHANTOM})},[s,i,o]),E=(0,e.useCallback)(()=>{i({jsonrpc:"2.0",id:s,result:o?r.user_selectEthWallet.result.enum.ALWAYS_USE_METAMASK:r.user_selectEthWallet.result.enum.CONTINUE_WITH_METAMASK})},[s,i,o]);return e.default.createElement(A,null,e.default.createElement(k,{style:{display:"flex",alignItems:"center"}},e.default.createElement(B,null,e.default.createElement(g,{icon:e.default.createElement(b,null,e.default.createElement(u.LogoFill,{size:64,color:"spotBase"}),e.default.createElement(x,{width:64,height:64})),primaryText:n("whichExtensionToConnectWith"),headerStyle:"small"}))),e.default.createElement(w,{plain:!0},e.default.createElement(S,null,e.default.createElement(y,null,e.default.createElement(p,{onClick:E,testID:"select_wallet--metamask"},n("useMetaMask"))),e.default.createElement(y,null,e.default.createElement(p,{background:"spot",onClick:M,testID:"select_wallet--phantom"},n("usePhantom"))),e.default.createElement(I,null,e.default.createElement(W,null,e.default.createElement(d,{checked:o,onChange:()=>C(!o),label:{text:n("dontAskMeAgain"),color:"textBase"},shape:"square"})),e.default.createElement(h,{color:l.colors.legacy.textDiminished,size:13,weight:500,lineHeight:16,textAlign:"left"},n("configureInSettings"))))))}),K=G;export{G as EthSelectWallet,K as default};
//# sourceMappingURL=EthSelectWallet-BHITOJFZ.js.map
