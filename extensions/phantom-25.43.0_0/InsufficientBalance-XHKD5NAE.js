import{a as s,c as f}from"./chunk-OTPQWA5R.js";import{a as b}from"./chunk-5MAMJBN4.js";import"./chunk-PLSIE3Z6.js";import{Ia as w,R as T}from"./chunk-53EKYYOD.js";import"./chunk-TJGCGL4J.js";import"./chunk-W7HWP67X.js";import"./chunk-BO5X4B7T.js";import"./chunk-PRM4QCVC.js";import"./chunk-22S374UP.js";import"./chunk-YCV6CTZK.js";import"./chunk-P3VWKB2X.js";import"./chunk-TCCWLNBV.js";import"./chunk-TFRCNF4E.js";import"./chunk-6WMUBTJC.js";import"./chunk-365YWPIP.js";import"./chunk-YEESR7EU.js";import"./chunk-T5IRHW4Y.js";import"./chunk-I3QHDDEG.js";import"./chunk-PQNSQOE2.js";import"./chunk-F74QCQCY.js";import"./chunk-XVSHIHTB.js";import"./chunk-TQE77AJX.js";import"./chunk-UFN6RPHX.js";import"./chunk-XSN3P2VT.js";import"./chunk-RNES5QWV.js";import"./chunk-5JE2EH74.js";import"./chunk-RLKSRZDI.js";import"./chunk-PYLKOKDS.js";import"./chunk-IWYOR6BJ.js";import"./chunk-5HTF5CEZ.js";import"./chunk-YLX2CXTY.js";import"./chunk-VGIRFM65.js";import"./chunk-E5SPQ6GD.js";import"./chunk-RCXDI445.js";import"./chunk-6DKZGOGT.js";import{c as C,d as I}from"./chunk-GWKXKPCT.js";import{db as l,m as o}from"./chunk-FMF67RFP.js";import"./chunk-44NW6BSR.js";import"./chunk-CHXPHGEW.js";import"./chunk-3JCRVFH6.js";import"./chunk-UHG6ISVN.js";import"./chunk-EVXXECVZ.js";import"./chunk-TQDE7426.js";import"./chunk-5RCV3KPE.js";import"./chunk-X5YMBRTT.js";import"./chunk-34JK5YK5.js";import"./chunk-CM4ZFCT2.js";import"./chunk-RKMQYZSN.js";import"./chunk-MN377ENM.js";import"./chunk-6XVVS35Q.js";import"./chunk-COS4XKZ5.js";import"./chunk-IJLITZAC.js";import{Pb as c,Wb as g,jc as x}from"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as a,a as M,ca as h,r as B}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as u,g as D,i as d,n as y}from"./chunk-NSVULBS3.js";d();y();var n=D(M(),1);var P=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,N=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,S=o(l).attrs({size:28,weight:500,color:a.colors.legacy.textBase})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textDiminished})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=u(({networkId:t,token:r})=>{let{t:i}=B(),{handleHideModalVisibility:m}=w(),p=(0,n.useCallback)(()=>{m("insufficientBalance")},[m]),k=t&&g(x(c.getChainID(t))),{canBuy:F,openBuy:v}=T({caip19:k||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?c.getTokenSymbol(t):i("tokens");return n.default.createElement(P,null,n.default.createElement("div",null,n.default.createElement(N,null,n.default.createElement(b,{type:"failure",backgroundWidth:75}),n.default.createElement(S,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),r?n.default.createElement(h,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(s,{label:i("insufficientBalanceRemaining")},n.default.createElement(f,{color:a.colors.legacy.spotNegative},`${r.balance} ${e}`)),n.default.createElement(s,{label:i("insufficientBalanceRequired")},n.default.createElement(f,null,`${r.required} ${e}`))):null)),F?n.default.createElement(I,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:v,secondaryText:i("commandCancel"),onSecondaryClicked:p}):n.default.createElement(C,{onClick:p},i("commandCancel")))},"InsufficientBalance"),Q=$;export{$ as InsufficientBalance,Q as default};
//# sourceMappingURL=InsufficientBalance-XHKD5NAE.js.map
