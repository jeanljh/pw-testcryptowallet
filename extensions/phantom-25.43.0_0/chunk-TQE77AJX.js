import{m}from"./chunk-FMF67RFP.js";import{V as l}from"./chunk-LYTSCHVN.js";import{a as n,i as r,n as o}from"./chunk-NSVULBS3.js";r();o();var s=n((e,t)=>{let i=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16);return typeof t=="number"?"rgba("+i+", "+a+", "+c+", "+t+")":"rgb("+i+", "+a+", "+c+")"},"hexToRGB");r();o();var y=m.div.attrs(e=>({color:e.color??l.colors.legacy.elementAccent,diameter:e.diameter??24,opacity:e.opacity??1}))`
  height: ${e=>e.diameter}px;
  width: ${e=>e.diameter}px;
  margin: ${e=>e.margin};
  background-color: ${e=>e.alpha&&e.color?s(e.color,e.alpha):e.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: ${e=>e.opacity};
  overflow: hidden;
  ${e=>e.includeDarkBoxShadow?"box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);":""}
`;export{s as a,y as b};
//# sourceMappingURL=chunk-TQE77AJX.js.map
