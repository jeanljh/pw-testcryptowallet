import{a as b}from"./chunk-5MAMJBN4.js";import{f as T}from"./chunk-6WMUBTJC.js";import{c as y}from"./chunk-GWKXKPCT.js";import{S as C,db as l,l as x,m as i}from"./chunk-FMF67RFP.js";import{V as e,a as L,oa as m,r as f,sa as d}from"./chunk-LYTSCHVN.js";import{a as r,g as P,i as w,n as S}from"./chunk-NSVULBS3.js";w();S();var o=P(L(),1);var h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${t=>t.addScreenPadding?"16px":"0"};
`,A=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`,D=i.div`
  width: 100%;
  > * {
    margin-top: 10px;
  }
  padding: 16px;
`,$=i.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  padding: 16px;
`,N=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Y=i.div`
  position: relative;
`,Z=i.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${e.colors.legacy.spotPositive};
  }
`,I=i(l).attrs({size:28,weight:500,color:e.colors.legacy.textBase})`
  margin-top: 24px;
  margin-left: 12px;
  margin-right: 12px;
`,k=i(l).attrs({size:16,weight:400,color:e.colors.legacy.textDiminished})`
  margin-top: 9px;
  margin-left: 12px;
  margin-right: 12px;
  span {
    color: ${e.colors.legacy.textDiminished};
    font-weight: bold;
  }
`,E=i(l).attrs({size:16,weight:500,color:e.colors.legacy.spotBase})`
  margin-top: 18px;
  text-decoration: none;
  ${t=>t.opacity!==0&&x`
      &:hover {
        cursor: pointer;
        color: ${e.colors.legacy.spotAccent};
      }
    `}
`,F=r(({description:t,header:a,icon:s,onClose:n,title:p,txLink:c,isClosable:g,disclaimer:v})=>{let{t:u}=f(),B=r(()=>{c&&self.open(c)},"onViewTransactionClick");return o.default.createElement(h,null,a,o.default.createElement(A,null,o.default.createElement(m,{mode:"wait",initial:!0},o.default.createElement(d.div,{key:p,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},s)),o.default.createElement(I,null,p),o.default.createElement(k,null,t),c&&o.default.createElement(m,{mode:"wait",initial:!1},o.default.createElement(d.div,{key:c,initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.2}},o.default.createElement(E,{opacity:1,onClick:B},u("swapTxConfirmationViewTransaction"))))),g&&n?o.default.createElement(D,null,o.default.createElement(k,null,v),g&&n?o.default.createElement(y,{onClick:n},u("commandClose")):null):null)},"SwapStatus");var R=r(({ledgerAction:t,numberOfTransactions:a,cancel:s,ledgerApp:n})=>o.default.createElement(h,{addScreenPadding:!0},o.default.createElement(T,{ledgerAction:t,numberOfTransactions:a,cancel:s,ledgerApp:n})),"SwapStatusLedger");var H=r(t=>self.open(t,"_blank"),"openSupportLink"),oo=r(({txErrorTitle:t,txErrorMessage:a,txErrorHelpButtonLink:s,txLink:n,onClose:p})=>o.default.createElement(F,{header:o.default.createElement($,null,o.default.createElement(N,{onClick:()=>H(s)},o.default.createElement(C,{fill:"white"}))),icon:o.default.createElement(b,{type:"failure"}),description:a,onClose:p,title:t,txLink:n,isClosable:!0}),"SwapStatusError");export{R as a,oo as b};
//# sourceMappingURL=chunk-KG2S5QU2.js.map
