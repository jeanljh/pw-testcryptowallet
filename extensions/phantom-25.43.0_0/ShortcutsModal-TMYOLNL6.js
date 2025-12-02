import{a as B,c as N}from"./chunk-PONMCV2V.js";import"./chunk-FYHA5XUW.js";import{a as A}from"./chunk-VC6GOMGS.js";import{c as O}from"./chunk-GWKXKPCT.js";import{Aa as f,Ba as a,Ca as x,Da as k,Ea as y,Fa as w,Ga as L,Ha as T,Ia as v,Ja as C,Ka as M,La as P,Ma as b,Na as D,Oa as W,Pa as F,Qa as m,Ra as G,db as V,m as o,za as S}from"./chunk-FMF67RFP.js";import{b as g}from"./chunk-CM4ZFCT2.js";import"./chunk-RKMQYZSN.js";import"./chunk-MN377ENM.js";import"./chunk-6XVVS35Q.js";import"./chunk-COS4XKZ5.js";import"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as d,a as u,r as I}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as i,g as l,i as c,n as s}from"./chunk-NSVULBS3.js";c();s();var t=l(u(),1);c();s();var U=l(u(),1);var H={[A]:m,vote:T,"vote-2":v,stake:C,"stake-2":M,view:P,chat:b,tip:D,mint:W,"mint-2":F,"generic-link":m,"generic-add":G,discord:S,twitter:f,"twitter-2":a,x:a,instagram:x,telegram:k,leaderboard:L,gaming:y,"gaming-2":w};function z({icon:e,...n}){let p=H[e];return U.default.createElement(p,{...n})}i(z,"ShortcutsIcon");var Y=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -16px; // compensate for generic screen margins
`,_=o.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,j=o.div`
  overflow: scroll;
`,q=o.ul`
  flex: 1;
  max-height: 350px;
  padding-top: 16px; // compensate for the override of the generic screen margins
`,J=o.li``,K=o.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
`,Q=o(V).attrs(e=>({margin:e.margin??"12px 0px"}))`
  text-align: left;
`;function X({shortcuts:e,...n}){let{t:p}=I(),h=(0,t.useMemo)(()=>n.hostname.includes("//")?new URL(n.hostname).hostname:n.hostname,[n.hostname]);return t.default.createElement(Y,null,t.default.createElement(j,null,t.default.createElement(q,null,e.map(r=>t.default.createElement(J,{key:r.uri},t.default.createElement(O,{type:"button",onClick:()=>{g.capture("walletShortcutsLinkOpenClick",B(n,r)),self.open(r.uri)},theme:"text",paddingY:6},t.default.createElement(K,null,t.default.createElement(z,{icon:N(r.uri,r.icon)})),r.label))))),t.default.createElement(_,null,h&&t.default.createElement(Q,{color:d.colors.legacy.textDiminished,size:14,lineHeight:17},p("shortcutsWarningDescription",{url:h}))))}i(X,"ShortcutsModal");var ht=X;export{X as ShortcutsModal,ht as default};
//# sourceMappingURL=ShortcutsModal-TMYOLNL6.js.map
