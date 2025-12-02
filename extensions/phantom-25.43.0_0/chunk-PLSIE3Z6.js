import{r as I}from"./chunk-PRM4QCVC.js";import{_ as g,db as h,m as l}from"./chunk-FMF67RFP.js";import{V as i,a as V}from"./chunk-LYTSCHVN.js";import{a as e,g as P,i as m,n as c}from"./chunk-NSVULBS3.js";m();c();var o=P(V(),1);var W=l.div`
  display: flex;
  ${n=>n.isVisible?"cursor: pointer;":""}
  align-items: center;
  margin-right: ${n=>n.hasChildren?10:0}px;
  p {
    margin-right: 6px;
    ${n=>!n.allowWrap&&"white-space: nowrap;"}
  }
`,v=l.div`
  position: relative;
  top: 1px;
`,N=e(({children:n,fontWeight:b,fontSize:u=14,iconSize:d,info:s,lineHeight:C,tooltipAlignment:x,noWrap:a,textAlign:w="left",showInfoIcon:T=!0,textColor:y,iconColor:S})=>{let[A,p]=(0,o.useState)(!1),t=!!s,r=t&&A,f=r?i.colors.legacy.spotBase:i.colors.legacy.textDiminished;return o.default.createElement(I,{label:t?s:o.default.createElement(o.default.Fragment,null),ariaLabel:"Info",color:i.colors.legacy.areaBase,alignment:x,isVisible:r,triggerParams:{onMouseEnter:e(()=>p(!0),"onMouseEnter"),onMouseLeave:e(()=>{p(!1)},"onMouseLeave")}},o.default.createElement(W,{isVisible:r,hasChildren:!!n,allowWrap:!a},o.default.createElement(h,{color:y??f,lineHeight:C,size:u,weight:b,noWrap:a,textAlign:w},n),t&&T?o.default.createElement(v,null,o.default.createElement(g,{fill:S??f,width:d})):null))},"Info");export{N as a};
//# sourceMappingURL=chunk-PLSIE3Z6.js.map
