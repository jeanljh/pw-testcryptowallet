import{a as C}from"./chunk-5MAMJBN4.js";import{a as I}from"./chunk-TCCWLNBV.js";import{e as F,f as q,g as D}from"./chunk-6WMUBTJC.js";import{a as H}from"./chunk-PQNSQOE2.js";import{a as T}from"./chunk-TQE77AJX.js";import{p as b}from"./chunk-RNES5QWV.js";import{a as v,c as P,e as B}from"./chunk-GWKXKPCT.js";import{db as V,m as u}from"./chunk-FMF67RFP.js";import{Ma as k}from"./chunk-TQDE7426.js";import{V as c,a as A,ca as E,ja as x,oa as y,sa as f}from"./chunk-LYTSCHVN.js";import{a as s,g as w,i as g,n as S}from"./chunk-NSVULBS3.js";g();S();var l=w(A(),1);g();S();var t=w(A(),1);var K=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${r=>r.addScreenPadding?"16px":"0"};
`,N=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,O=u.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,W=u(H).attrs({align:"center",justify:"center",margin:"0 0 15px 0"})`
  position: relative;
  border-radius: 50%;
  background-color: ${T(c.colors.legacy.spotBase,.2)};
  box-shadow: 0 0 0 20px ${T(c.colors.legacy.spotBase,.2)};
`,X=u(V).attrs({size:28,weight:500,color:c.colors.legacy.textBase})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,z=s(()=>t.default.createElement(W,null,t.default.createElement(v,{diameter:54,color:c.colors.legacy.spotBase,trackColor:c.colors.legacy.areaAccent})),"LoadingIcon"),M=s(({message:r})=>t.default.createElement(E,{marginX:12,alignItems:"center"},Array.isArray(r)?r.map((i,o)=>t.default.createElement(x,{key:`message-${o}`,font:"body",color:"textDiminished",align:"center",marginX:12,marginTop:16},i)):t.default.createElement(x,{font:"body",marginTop:16,color:"textDiminished",align:"center"},r)),"Message"),h=s(({header:r,icon:i,title:o,message:e,txHash:a,txHashTitle:p,isClosable:n,primaryButton:d,secondaryButton:m})=>t.default.createElement(K,null,r,t.default.createElement(N,null,t.default.createElement(y,{mode:"wait",initial:!0},t.default.createElement(f.div,{key:o,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},i)),t.default.createElement(X,null,o),t.default.createElement(M,{message:e}),a&&t.default.createElement(y,{mode:"wait",initial:!1},t.default.createElement(f.div,{key:a,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},t.default.createElement(I,{txHash:a},p)))),n?t.default.createElement(O,null,m&&d?t.default.createElement(B,{buttons:[{text:m.title,onClick:m.onPress},{theme:"primary",text:d.title,onClick:d.onPress}]}):d?t.default.createElement(P,{theme:"primary",onClick:d.onPress},d.title):m?t.default.createElement(P,{onClick:m.onPress},m.title):null):null),"StakeStatus"),U=s(({ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:e})=>t.default.createElement(K,{addScreenPadding:!0},t.default.createElement(q,{ledgerAction:r,numberOfTransactions:i,cancel:o,ledgerApp:e})),"StakeStatusLedger"),$=s(({title:r,message:i,txHash:o,txHashTitle:e,primaryButton:a,showUKDisclaimer:p,openExternalLink:n})=>t.default.createElement(h,{icon:t.default.createElement(z,null),message:i,title:r,txHash:o,txHashTitle:e,primaryButton:a,isClosable:!!o,header:p&&n?t.default.createElement(k,{navigateToExternalLink:n,paddingTop:8}):null}),"StakeStatusLoading"),L=s(({title:r,message:i,txHash:o,txHashTitle:e,primaryButton:a,showUKDisclaimer:p,openExternalLink:n})=>t.default.createElement(h,{icon:t.default.createElement(C,{type:"failure"}),message:i,title:r,txHash:o,txHashTitle:e,primaryButton:a,isClosable:!0,header:p&&n?t.default.createElement(k,{navigateToExternalLink:n,paddingTop:8}):null}),"StakeStatusError"),j=s(({title:r,message:i,txHash:o,txHashTitle:e,primaryButton:a,secondaryButton:p,showUKDisclaimer:n,openExternalLink:d})=>t.default.createElement(h,{icon:t.default.createElement(C,{type:"success"}),title:r,message:i,txHash:o,txHashTitle:e,isClosable:!0,primaryButton:a,secondaryButton:p,header:n&&d?t.default.createElement(k,{navigateToExternalLink:d,paddingTop:8}):null}),"StakeStatusSuccess");var J=s(({txError:r,addressType:i,statusPageProps:o,executeConvertStake:e,onClose:a})=>F(r)?l.default.createElement(D,{ledgerActionError:r,onRetryClick:e,onCancelClick:a}):o.type==="error"?l.default.createElement(L,{...o}):l.default.createElement(U,{ledgerAction:e,numberOfTransactions:1,cancel:a,ledgerApp:b(i)}),"StakeLedgerView"),St=l.default.memo(r=>{let{addressType:i,isLedger:o,statusPageProps:e,txError:a,onClose:p,executeLiquidStake:n}=r;if(o&&!e.txHash)return l.default.createElement(J,{txError:a,addressType:i,statusPageProps:e,executeConvertStake:n,onClose:p});switch(e.type){case"loading":return l.default.createElement($,{...e});case"error":return l.default.createElement(L,{...e});case"success":return l.default.createElement(j,{title:e.title,txHash:e.txHash,txHashTitle:e.txHashTitle,primaryButton:e.primaryButton,secondaryButton:e.secondaryButton,message:e.message,paddingBottom:e.paddingBottom,showUKDisclaimer:e.showUKDisclaimer,openExternalLink:e.openExternalLink});default:throw new Error("Unsupported status page type")}});export{St as a};
//# sourceMappingURL=chunk-E547OZGE.js.map
