import{b as c}from"./chunk-RCXDI445.js";import{S as s,db as w,m as t}from"./chunk-FMF67RFP.js";import{u as m}from"./chunk-TQDE7426.js";import{fb as y}from"./chunk-5RCV3KPE.js";import{b as f,c as T}from"./chunk-34JK5YK5.js";import{b as E}from"./chunk-CM4ZFCT2.js";import{V as e,a as D,r as h}from"./chunk-LYTSCHVN.js";import{r as l}from"./chunk-PPQ6BNOX.js";import{a as n,g as B,i as x,n as b}from"./chunk-NSVULBS3.js";x();b();var r=B(D(),1);var C="Unknown Error",F="Looks like you ran into an unknown error. Please close Phantom and try again.",A="Close",g=t(w).attrs({wordBreak:"break-word",color:e.colors.legacy.textDiminished,size:16,lineHeight:20.8,maxWidth:"400px"})``,k=t.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: ${e.colors.legacy.spotBase};
  text-decoration: none;
  cursor: pointer;
  svg {
    fill: ${e.colors.legacy.spotBase};
    margin-right: 5px;
  }
`,P=n(o=>r.default.createElement(m,{fallback:a=>a instanceof y?r.default.createElement(H,null):o.fallback},o.children),"ErrorBoundaryWithDefaultFallback"),H=n(()=>{let{t:o}=h(),a=n(()=>{E.capture("walletScreenErrorBoundaryClosed"),self.close()},"onClose");return r.default.createElement(S,null,r.default.createElement(c,{icon:"error",title:o("transactionsDisabledTitle"),buttonText:o("commandClose"),onClose:a},r.default.createElement(g,{margin:"0 0 5px 0"},o("transactionsDisabledMessage")),r.default.createElement(k,{href:l,onClick:a},r.default.createElement(s,null),"Help & Support")))},"WalletScreenErrorFallback"),S=t.main`
  width: ${f}px;
  height: ${T}px;
  padding: 15px;
`,q=n(({title:o=C,message:a=F,buttonText:d=A,onReset:i=n(()=>self.close(),"onReset"),children:p})=>{function u(){return r.default.createElement(N,null,r.default.createElement(c,{icon:"error",title:o,buttonText:d,onClose:i},r.default.createElement(g,{margin:"0 0 5px 0"},a),r.default.createElement(k,{href:l,onClick:i},r.default.createElement(s,null),"Help & Support")))}return n(u,"PopupAndNotificationFallback"),r.default.createElement(P,{fallback:r.default.createElement(u,null)},p)},"PopupAndNotificationErrorBoundary"),N=t.main`
  min-width: ${f}px;
  height: 100vh;
  padding: 15px;
  width: 100vw;
`,J=n(({title:o=C,message:a="Looks like you ran into an unknown error. Please refresh the page and try again.",buttonText:d="Refresh",onReset:i=n(()=>self.location.reload(),"onReset"),children:p})=>{function u(){return r.default.createElement(L,null,r.default.createElement(c,{icon:"error",title:o,buttonText:d,onClose:i},r.default.createElement(g,{margin:"0 0 5px 0"},a),r.default.createElement(k,{href:l,onClick:i},r.default.createElement(s,null),"Help & Support")))}return n(u,"OnboardingAndConnectHardwareFallback"),r.default.createElement(P,{fallback:r.default.createElement(u,null)},p)},"OnboardingAndConnectHardwareErrorBoundary"),L=t.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 450px;
  background-color: ${e.colors.legacy.areaBase};
  border: 1px solid ${e.colors.legacy.borderDiminished};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;export{P as a,q as b,J as c};
//# sourceMappingURL=chunk-E5SPQ6GD.js.map
