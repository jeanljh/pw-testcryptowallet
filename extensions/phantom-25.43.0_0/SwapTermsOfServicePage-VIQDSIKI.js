import{f as w}from"./chunk-46EVJGR2.js";import{Ia as C}from"./chunk-53EKYYOD.js";import"./chunk-TJGCGL4J.js";import"./chunk-W7HWP67X.js";import"./chunk-BO5X4B7T.js";import"./chunk-PRM4QCVC.js";import"./chunk-22S374UP.js";import"./chunk-YCV6CTZK.js";import"./chunk-P3VWKB2X.js";import"./chunk-TCCWLNBV.js";import"./chunk-TFRCNF4E.js";import"./chunk-6WMUBTJC.js";import"./chunk-365YWPIP.js";import"./chunk-YEESR7EU.js";import"./chunk-T5IRHW4Y.js";import"./chunk-I3QHDDEG.js";import"./chunk-PQNSQOE2.js";import"./chunk-F74QCQCY.js";import"./chunk-XVSHIHTB.js";import"./chunk-TQE77AJX.js";import"./chunk-UFN6RPHX.js";import"./chunk-XSN3P2VT.js";import"./chunk-RNES5QWV.js";import"./chunk-5JE2EH74.js";import"./chunk-RLKSRZDI.js";import"./chunk-PYLKOKDS.js";import"./chunk-W5CO46MJ.js";import"./chunk-IWYOR6BJ.js";import"./chunk-5HTF5CEZ.js";import"./chunk-YLX2CXTY.js";import"./chunk-VGIRFM65.js";import"./chunk-E5SPQ6GD.js";import"./chunk-RCXDI445.js";import"./chunk-6DKZGOGT.js";import{d as v}from"./chunk-GWKXKPCT.js";import{db as a,fa as g,m as r}from"./chunk-FMF67RFP.js";import{W as y,bb as T}from"./chunk-44NW6BSR.js";import"./chunk-CHXPHGEW.js";import"./chunk-3JCRVFH6.js";import"./chunk-UHG6ISVN.js";import"./chunk-EVXXECVZ.js";import{v as u}from"./chunk-TQDE7426.js";import"./chunk-5RCV3KPE.js";import"./chunk-X5YMBRTT.js";import"./chunk-34JK5YK5.js";import"./chunk-CM4ZFCT2.js";import"./chunk-RKMQYZSN.js";import"./chunk-MN377ENM.js";import"./chunk-6XVVS35Q.js";import"./chunk-COS4XKZ5.js";import"./chunk-IJLITZAC.js";import"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as t,a as h,r as S}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import{t as d,u as f}from"./chunk-PPQ6BNOX.js";import{a as n,g as O,i as m,n as p}from"./chunk-NSVULBS3.js";m();p();var e=O(h(),1);var k=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,b=r.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,P=r(a).attrs({size:28,weight:500,color:t.colors.legacy.textBase})`
  margin-top: 24px;
`,A=r(a).attrs({size:16,weight:500,color:t.colors.legacy.textDiminished})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: ${t.colors.legacy.textBase};
  }
  label {
    color: ${t.colors.legacy.spotBase};
    cursor: pointer;
  }
`,B=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,M=r.div`
  margin-top: auto;
  width: 100%;
`,F=n(()=>{let{t:i}=S(),{mutateAsync:s}=w(),{handleHideModalVisibility:o,handleShowModalVisibility:c}=C(),x=(0,e.useCallback)(()=>{c("swapConfirmation",void 0,{event:"showSwapModal",payload:{data:{uiContext:y.SwapConfirmation}}}),o("swapTermsOfService")},[c,o]),l=T({goToConfirmation:x});return{onAgreeClick:(0,e.useCallback)(()=>{s(!0),l()},[s,l]),onCancelClick:n(()=>{o("swapTermsOfService")},"onCancelClick"),t:i}},"useSwapTermsOfServiceProps"),L=n(()=>{self.open(d,"_blank")},"handleTermsClick"),_=n(()=>{self.open(f,"_blank")},"handleFeesClick"),V=e.default.memo(({onAgreeClick:i,onCancelClick:s,t:o})=>e.default.createElement(k,null,e.default.createElement(b,null,e.default.createElement(B,null,e.default.createElement(g,null),e.default.createElement(P,null,o("termsOfServicePrimaryText")),e.default.createElement(A,null,e.default.createElement(u,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:L},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:_},"fee structure")," for certain products.")))),e.default.createElement(M,null,e.default.createElement(v,{primaryText:o("termsOfServiceActionButtonAgree"),secondaryText:o("commandCancel"),onPrimaryClicked:i,onSecondaryClicked:s})))),E=n(()=>{let i=F();return e.default.createElement(V,{...i})},"SwapTermsOfServicePage"),Y=E;export{E as SwapTermsOfServicePage,Y as default};
//# sourceMappingURL=SwapTermsOfServicePage-VIQDSIKI.js.map
