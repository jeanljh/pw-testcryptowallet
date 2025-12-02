import{c as I}from"./chunk-GWKXKPCT.js";import{A as h,D as b,db as g,ga as C,m as t}from"./chunk-FMF67RFP.js";import{V as r,a as p,r as f}from"./chunk-LYTSCHVN.js";import{a as i,g as m,i as a,n as s}from"./chunk-NSVULBS3.js";a();s();var e=m(p(),1);var P=t.div`
  width: 94px;
  height: 94px;
  margin: auto;
  position: relative;
  border-radius: ${o=>o.borderRadius};
  background: ${o=>o.background};
`,L=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,F=t.div`
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  animation: rotate 0.5s linear infinite;
  position: absolute;
  margin: 0 auto;
  width: 94px;
  height: 94px;
  border-radius: 100%;
  box-shadow: 0 0 0 7px rgba(from ${r.colors.legacy.spotWarning} r g b / 10%);
  & > svg {
    position: absolute;
    bottom: -8px;
    right: -9px;
  }
`,x=i(({children:o,color:c=r.colors.brand.yellowMoon})=>e.createElement(P,null,e.createElement(F,null,e.createElement("svg",{width:38,height:60,viewBox:"0 0 38 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.897 5.75301C33.5532 5.70601 34.9339 7.01051 34.9809 8.6667C35.2548 18.3187 32.5493 27.8208 27.2322 35.8808C21.9151 43.9408 14.2446 50.1676 5.26377 53.7144C3.72274 54.323 1.98013 53.5671 1.37153 52.0261C0.762941 50.485 1.51883 48.7424 3.05986 48.1338C10.8942 45.0398 17.5855 39.6079 22.2238 32.5769C26.8621 25.5458 29.2223 17.2567 28.9833 8.8369C28.9363 7.18071 30.2408 5.80001 31.897 5.75301Z",fill:c}))),o&&e.createElement(L,null,o)),"IconLoading");a();s();var n=m(p(),1);var _=i(({icon:o,title:c,onClose:S,iconSize:y="normal",showButton:l=!0,buttonText:k,children:T,onIgnore:z,ignoreText:u})=>{let{t:$}=f(),d=y==="large"?44:32,B=k||$("commandClose");return n.default.createElement(D,null,n.default.createElement("section",null,o==="loading"?n.default.createElement(x,null,n.default.createElement(C,{width:d})):o==="error"?n.default.createElement(M,{iconSize:d}):n.default.createElement(N,{iconSize:d}),n.default.createElement(j,null,c),T),u!==void 0&&n.default.createElement(R,{onClick:z},u),n.default.createElement(Z,{hasMarginBottom:!l},l?n.default.createElement(I,{onClick:S},B):n.default.createElement(n.default.Fragment,null,"\xA0")))},"TransactionStatusDetail"),M=i(({iconSize:o})=>n.default.createElement(v,{borderRadius:"100%",background:`rgba(from ${r.colors.legacy.spotNegative} r g b / 10%)`},n.default.createElement(w,null,n.default.createElement(h,{width:o}))),"ErrorIcon"),N=i(({iconSize:o})=>n.default.createElement(v,{borderRadius:"100%",background:`rgba(from ${r.colors.legacy.spotPositive} r g b / 10%)`},n.default.createElement(w,null,n.default.createElement(b,{width:o,fill:r.colors.legacy.spotPositive}))),"IconSuccess"),D=t.section`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  & > section:first-child {
    display: grid;
    gap: 8.5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`,j=t(g).attrs({size:28,lineHeight:33.89,weight:500})`
  word-wrap: break-word;
  overflow: hidden;
  margin-top: 15px;
`,v=t.div`
  width: 94px;
  height: 94px;
  margin: auto;
  position: relative;
  border-radius: ${o=>o.borderRadius};
  background: ${o=>o.background};
`,w=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Z=t.div`
  margin-bottom: ${o=>o.hasMarginBottom&&"60px"};
  width: 100%;
`,R=t(g)`
  margin: auto;
  font-size: 14px;
  padding-bottom: 35px;
  color: ${r.colors.legacy.textDiminished};
  font-weight: 500;
  &:hover {
    color: ${r.colors.legacy.spotNegative};
  }
`;export{x as a,_ as b};
//# sourceMappingURL=chunk-RCXDI445.js.map
