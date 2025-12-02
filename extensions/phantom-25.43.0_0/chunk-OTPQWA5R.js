import{a as b}from"./chunk-PLSIE3Z6.js";import{o as u,p as x,s as h}from"./chunk-PRM4QCVC.js";import{db as m,l as f,m as r}from"./chunk-FMF67RFP.js";import{V as t,a as I,ja as g}from"./chunk-LYTSCHVN.js";import{a as i,g as w,i as p,n as d}from"./chunk-NSVULBS3.js";p();d();var e=w(I(),1);var v=r.div`
  display: flex;
  height: 49px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-of-type {
    margin-bottom: 0;
  }
  background-color: ${o=>o.customBackground??t.colors.legacy.elementBase};
  ${o=>o.onClick?f`
          :hover {
            background-color: ${t.colors.legacy.elementAccent};
          }
          cursor: pointer;
        `:""}
`,L=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,N=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,W=r.div`
  display: flex;
  margin: 2px 4px 0 0;
`,B=r(m).attrs(o=>({color:o.color||t.colors.legacy.textDiminished,size:14,lineHeight:17,weight:400,noWrap:!0,paddingLeft:8}))`
  cursor: ${o=>o.onClick?"pointer":"default"};
  text-decoration: none;
`,S=i(({children:o,icon:n,fontWeight:l,label:k,lineHeight:y,customBackground:T,color:C,tooltipContent:c,isLoading:a=!1,error:s,onClick:R})=>e.default.createElement(v,{customBackground:T,onClick:a?void 0:R},e.default.createElement(N,null,e.default.createElement(L,null,n?e.default.createElement(W,null,n):null,e.default.createElement(b,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:y??17,fontWeight:l??400,info:c?e.default.createElement(P,{tooltipContent:c}):null,textColor:C||t.colors.legacy.textBase},k)),s?e.default.createElement(g,{color:"spotNegative",font:"label",children:s}):null),a?e.default.createElement(h,{width:"75px",height:"15px",borderRadius:"50px",backgroundColor:t.colors.legacy.borderDiminished}):o),"InfoRow"),P=i(({tooltipContent:o})=>e.default.createElement(x,null,typeof o=="string"?e.default.createElement(u,null,o):o),"InfoTooltip"),j=i(({children:o,color:n,onClick:l})=>e.default.createElement(B,{onClick:l,color:n||t.colors.legacy.textDiminished},o||"-"),"Value");export{S as a,P as b,j as c};
//# sourceMappingURL=chunk-OTPQWA5R.js.map
