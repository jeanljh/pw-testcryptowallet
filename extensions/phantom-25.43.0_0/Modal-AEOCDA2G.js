import{a as D}from"./chunk-UFN6RPHX.js";import{c as A}from"./chunk-PYLKOKDS.js";import{c as v}from"./chunk-GWKXKPCT.js";import{R as k,db as C,m as e}from"./chunk-FMF67RFP.js";import{se as g}from"./chunk-IJLITZAC.js";import"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as m,X as u,a as I,ca as w,r as y,rb as b}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as p,g as H,i as h,n as T}from"./chunk-NSVULBS3.js";h();T();var o=H(I(),1);var F=16,B=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 100%;
`,M=e.div`
  overflow: scroll;
`,$=e.div`
  margin: 45px 16px 16px 16px;
  padding-top: 16px;
`,z=e(A)`
  left: ${F}px;
  position: absolute;
`,N=e.div`
  align-items: center;
  background: ${m.colors.legacy.areaBase};
  border-bottom: 1px solid ${m.colors.legacy.borderDiminished};
  display: flex;
  height: 46px;
  padding: ${F}px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,P=e.div`
  display: flex;
  flex: 1;
  justify-content: center;
`,G=e.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,W=e(C).attrs(r=>({margin:r.margin??"12px 0px"}))`
  text-align: left;
`,L=e(C).attrs({size:16,weight:500,lineHeight:25})``;function S(r){let{actions:i,shortcuts:a,trackAction:n,onClose:s}=r;return(0,o.useMemo)(()=>{let c=i.more.map(t=>{let d=u[g(t.type)],l=t.isDestructive?"spotNegative":"textBase";return{start:o.default.createElement(d,{size:18,type:t.type,color:l}),topLeft:{text:t.text,color:l},onClick:p(()=>{n(t),s(),t.onClick(t.type)},"onClick")}}),x=a?.map(t=>{let d=u[g(t.type)],l=t.isDestructive?"spotNegative":"textBase";return{start:o.default.createElement(d,{size:18,color:l}),topLeft:{text:t.text,color:l},onClick:p(()=>{n(t),s(),t.onClick(t.type)},"onClick")}})??[];return[{rows:c},{rows:x}]},[i,s,a,n])}p(S,"useConvertActionsToRows");function j(r){let{t:i}=y(),{headerText:a,hostname:n,shortcuts:s}=r,f=S(r);return o.default.createElement(B,null,o.default.createElement(M,null,o.default.createElement(N,{onClick:r.onClose},o.default.createElement(z,null,o.default.createElement(k,null)),o.default.createElement(P,null,o.default.createElement(L,null,a))),o.default.createElement($,null,o.default.createElement(w,{gap:"section"},f.map((c,x)=>o.default.createElement(b,{key:`group-${x}`,rows:c.rows}))),o.default.createElement(G,null,n&&s&&s.length>0&&o.default.createElement(W,{color:m.colors.legacy.textDiminished,size:14,lineHeight:17},i("shortcutsWarningDescription",{url:n})))),o.default.createElement(D,{removeFooterExpansion:!0},o.default.createElement(v,{onClick:r.onClose},i("commandClose")))))}p(j,"CTAModal");var Z=j;export{j as CTAModal,Z as default};
//# sourceMappingURL=Modal-AEOCDA2G.js.map
