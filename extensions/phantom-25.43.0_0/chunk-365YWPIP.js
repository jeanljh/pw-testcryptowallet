import{E as d,db as m,m as a,o as p,oa as g}from"./chunk-FMF67RFP.js";import{V as n,a as O}from"./chunk-LYTSCHVN.js";import{a as x,g as L,i as r,n as i}from"./chunk-NSVULBS3.js";r();i();var o=L(O(),1);r();i();var z=n.colors.legacy.spotWarning,D=n.colors.legacy.spotNegative,T=n.colors.legacy.spotNegative;var C=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,N=p`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,k=a.div`
  animation-name: ${e=>e.animateText?N:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,v=a(m).attrs(e=>({margin:e.margin??"20px auto 0 auto"}))`
  margin: ${e=>e.margin};
`,P=a(m).attrs(e=>({margin:e.margin??"15px 0px 0px 0px"}))`
  margin: ${e=>e.margin};
`,b=a.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var w={large:30,medium:28,small:24},A={large:34,medium:34,small:29},W={large:18,medium:16,small:14},U=x(({className:e,icon:y,primaryText:c,secondaryText:s,headerStyle:t="medium",showWarning:I=!1,showError:H=!1,animateText:S=!1})=>{t=t??"medium";let f=w[t],u=A[t],E=W[t],M={large:22,medium:19,small:17}[t],l=t==="small"?"16px 0 0 0":void 0,R=H?T:n.colors.legacy.textDiminished;return o.default.createElement(C,{className:e},y??o.default.createElement(d,null),I?o.default.createElement(b,null,o.default.createElement(g,null)):o.default.createElement(o.default.Fragment,null),o.default.createElement(k,{animateText:S},c&&o.default.createElement(v,{margin:l,weight:500,size:f,lineHeight:u,maxWidth:"320px"},c),s&&o.default.createElement(P,{margin:l,wordBreak:"break-word",size:E,lineHeight:M,color:R},s)))},"IconHeader");export{z as a,D as b,T as c,U as d};
//# sourceMappingURL=chunk-365YWPIP.js.map
