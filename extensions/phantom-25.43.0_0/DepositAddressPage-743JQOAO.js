import{a as D,b as I}from"./chunk-RZLNOB52.js";import{a as w}from"./chunk-YCV6CTZK.js";import{a as y}from"./chunk-P3VWKB2X.js";import"./chunk-I3QHDDEG.js";import{a as u}from"./chunk-PQNSQOE2.js";import{o as k}from"./chunk-F74QCQCY.js";import"./chunk-XVSHIHTB.js";import"./chunk-RLKSRZDI.js";import"./chunk-PYLKOKDS.js";import{c as g}from"./chunk-GWKXKPCT.js";import{db as S,m as t}from"./chunk-FMF67RFP.js";import"./chunk-34JK5YK5.js";import{H as P}from"./chunk-COS4XKZ5.js";import"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as p,a as h,ja as C,r as b}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as A,g as x,i as l,n as c}from"./chunk-NSVULBS3.js";l();c();var E=x(I(),1),o=x(h(),1);l();c();var a=x(h(),1);var B=t(g).attrs({borderRadius:"100px",width:"auto",fontSize:14,fontWeight:600})`
  flex-shrink: 0;
  padding: 5px 12px;
`,T=a.default.memo(s=>{let{copyText:e,className:d}=s,{buttonText:r,copy:n}=D(e),f=(0,a.useCallback)(m=>{m.stopPropagation(),n()},[n]);return a.default.createElement(B,{className:d,onClick:f,theme:"primary"},r)});var F=t(u).attrs({align:"center",justify:"space-between"})`
  height: 100%;
`,z=t(E.default)`
  padding: 8px;
  background: ${p.colors.legacy.white};
  border-radius: 6px;
`,N=t(y).attrs({align:"center",justify:"space-between"})`
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 15px;
  background: ${p.colors.legacy.areaAccent};
  border: 1px solid ${p.colors.legacy.borderDiminished};
  border-radius: 6px;
`,H=t(u).attrs({align:"center"})`
  ${N} {
    margin-top: 32px;
    margin-bottom: 11px;
  }
`,M=t(y)`
  p:first-child {
    margin-right: 6px;
  }
`,Q=A(s=>{let{accountName:e,walletAddress:d,address:r,symbol:n,onClose:f}=s,m=n||(r?P(r):void 0),{t:i}=b();return{i18nStrings:(0,o.useMemo)(()=>({depositAssetInterpolated:i("depositAssetDepositInterpolated",{tokenSymbol:m}),secondaryText:i("depositAssetSecondaryText"),transferFromExchange:i("depositAssetTransferFromExchange"),depositAssetShareAddressError1:i("sendInvalidQRCodeLoadingError1"),depositAssetShareAddressError2:i("sendInvalidQRCodeLoadingError2"),close:i("commandClose")}),[i,m]),accountName:e,walletAddress:d,onClose:f}},"useProps"),$=o.default.memo(s=>{let{i18nStrings:e,accountName:d,walletAddress:r,onClose:n}=s;return o.default.createElement(F,null,o.default.createElement(k,null,e.depositAssetInterpolated),o.default.createElement(H,null,r?o.default.createElement(o.default.Fragment,null,o.default.createElement(z,{value:r,size:160}),o.default.createElement(N,null,o.default.createElement(M,null,o.default.createElement(w,{name:d,publicKey:r})),o.default.createElement(T,{copyText:r})),o.default.createElement(S,{size:14,color:p.colors.legacy.textDiminished,lineHeight:20},e.secondaryText)):o.default.createElement(o.default.Fragment,null,o.default.createElement(C,{align:"center",font:"labelSemibold",children:e.depositAssetShareAddressError1}),o.default.createElement(C,{align:"center",font:"body",children:e.depositAssetShareAddressError2}))),o.default.createElement(u,null,o.default.createElement(g,{onClick:n},e.close)))}),j=o.default.memo(s=>{let e=Q(s);return o.default.createElement($,{...e})}),so=j;export{so as default};
//# sourceMappingURL=DepositAddressPage-743JQOAO.js.map
