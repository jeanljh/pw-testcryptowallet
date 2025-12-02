import{a as x,b as j}from"./chunk-RZLNOB52.js";import{a as Q}from"./chunk-CS343FBX.js";import{d as z}from"./chunk-YEESR7EU.js";import{c as N}from"./chunk-T5IRHW4Y.js";import{a as P}from"./chunk-PQNSQOE2.js";import{o as S,p as v}from"./chunk-F74QCQCY.js";import{c as I}from"./chunk-GWKXKPCT.js";import{db as l,m as n,z as H}from"./chunk-FMF67RFP.js";import{a as g}from"./chunk-X5YMBRTT.js";import{E as b,N as T,g as A}from"./chunk-COS4XKZ5.js";import{Pb as k}from"./chunk-GSVPXWLR.js";import{T as B,V as r,a as C,na as D,r as w}from"./chunk-LYTSCHVN.js";import{a as h,g as u,i as m,n as c}from"./chunk-NSVULBS3.js";m();c();var p=u(C(),1);var ro=p.default.memo(({chainAddress:i,onQRClick:d})=>{let{networkID:a,address:e}=i,{buttonText:s,copied:f,copy:y}=x(e),W=b(e,4),$=T(i.networkID),O=(0,p.useCallback)(_=>{_.stopPropagation(),y()},[y]);return p.default.createElement(D,{copied:f,copiedText:s,formattedAddress:W,networkBadge:p.default.createElement(z,{networkID:a,address:e}),networkLogo:p.default.createElement(g,{networkID:a,size:40}),networkName:$,onCopyClick:O,onQRClick:d})});m();c();var M=u(j(),1),o=u(C(),1);m();c();var t=u(C(),1);var F=n.div`
  width: 100%;
`,U=n(N)`
  background: ${r.colors.legacy.areaAccent};
  border: 1px solid ${r.colors.legacy.borderDiminished};
  border-radius: 6px 6px 0 0;
  border-bottom: none;
  margin: 0;
  padding: 16px 22px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  resize: none;
  overflow: hidden;
`,q=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${r.colors.legacy.areaAccent};
  border: 1px solid ${r.colors.legacy.borderDiminished};
  border-radius: 0 0 6px 6px;
  border-top: none;
  height: 40px;
  width: 100%;
  padding: 0;
  cursor: pointer;

  &:hover {
    background: ${r.colors.brand.black};
  }
`,G=n(l).attrs({size:16,weight:600,lineHeight:16})`
  margin-left: 6px;
`,L=h(({value:i})=>{let{buttonText:d,copy:a}=x(i),e=(0,t.useRef)(null);return(0,t.useEffect)(()=>{h(()=>{if(e&&e.current){let f=e.current.scrollHeight;e.current.style.height=f+"px"}},"autoSizeTextArea")()},[]),t.default.createElement(F,null,t.default.createElement(U,{ref:e,readOnly:!0,value:i}),t.default.createElement(q,{onClick:a},t.default.createElement(H,null),t.default.createElement(G,null,d)))},"CopyArea");var R=48,So=o.default.memo(({address:i,networkID:d,headerType:a,onCloseClick:e})=>{let{t:s}=w();return o.default.createElement(o.default.Fragment,null,o.default.createElement(a==="page"?S:v,null,s("depositAddress")),o.default.createElement(Q,null,o.default.createElement(P,{align:"center",justify:"center",id:"column"},o.default.createElement(J,{id:"QRCodeWrapper"},o.default.createElement(Z,{value:i,size:160,level:"Q",id:"styledqrcode"}),o.default.createElement(g,{networkID:d,size:R,borderColor:"areaBase",className:B({position:"absolute"})}))),o.default.createElement(l,{size:16,lineHeight:22,weight:600,margin:"16px 0 8px"},s("depositAddressChainInterpolated",{chain:k.getNetworkName(d)})),o.default.createElement(L,{value:i}),o.default.createElement(l,{size:14,color:r.colors.legacy.textDiminished,lineHeight:20,margin:"16px 0"},s("depositAssetSecondaryText")," ",o.default.createElement(K,{href:A,target:"_blank",rel:"noopener noreferrer"},s("commandLearnMore")))),o.default.createElement(I,{onClick:e},s("commandClose")))}),Z=n(M.default)`
  padding: 8px;
  background: ${r.colors.legacy.white};
  border-radius: 6px;
  position: relative;
`,J=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,K=n.a`
  color: ${r.colors.legacy.spotBase};
  text-decoration: none;
  font-weight: 500;
`;export{ro as a,L as b,So as c};
//# sourceMappingURL=chunk-544VJ54I.js.map
