import{a as L}from"./chunk-FYHA5XUW.js";import{a as v}from"./chunk-PLSIE3Z6.js";import{b as $}from"./chunk-W7HWP67X.js";import{o as S}from"./chunk-PRM4QCVC.js";import{O as P,m as r,w as z}from"./chunk-FMF67RFP.js";import{X as I}from"./chunk-5RCV3KPE.js";import{b as D}from"./chunk-CM4ZFCT2.js";import{la as k}from"./chunk-RKMQYZSN.js";import{E as b}from"./chunk-COS4XKZ5.js";import{aa as w}from"./chunk-GSVPXWLR.js";import{V as s,a as B,ca as C,ja as R,rb as T}from"./chunk-LYTSCHVN.js";import{a as l,g as V,i as x,n as f}from"./chunk-NSVULBS3.js";x();f();var t=V(B(),1);x();f();var h={header:"_14rx5di1 _14rx5di0 _48j31a5c _48j31a3p _48j31a6z _48j31a22 _48j31a1kf _48j31a1nm _48j31a1mr _48j31akz _48j31a2c6 _48j31as6 _48j31ax9",summaryContainer:"_14rx5di2 _48j31a1c4 _48j31a1x6"};x();f();var u=V(B(),1),A=u.default.memo(({address:e,networkID:o,showConcise:a})=>{let{getExistingAccount:c,getKnownAddressLabel:n}=k(),{data:y}=I(e,o),m=y?.address;if(!e)return null;let i=c(e),p=n(e,o),g=i?i.name:p;return m?u.default.createElement(R,null,e," ",u.default.createElement(R,{color:"textDiminished"},"(",b(m,4),")")):g?u.default.createElement(R,null,g," ",u.default.createElement(R,{color:"textDiminished"},"(",b(e,4),")")):u.default.createElement(R,null,a?b(e,4):e)});function F(e){if(!e){let a=parseInt(s.radiusBase.replace("px",""),10);return{borderTopLeftRadius:a,borderTopRightRadius:a,borderBottomRightRadius:a,borderBottomLeftRadius:a}}let o=e.split(" ").map(a=>a.replace("px","")).map(a=>parseInt(a,10));return o.length===1?{borderTopLeftRadius:o[0],borderTopRightRadius:o[0],borderBottomRightRadius:o[0],borderBottomLeftRadius:o[0]}:o.length===2?{borderTopLeftRadius:o[0],borderTopRightRadius:o[1],borderBottomRightRadius:o[0],borderBottomLeftRadius:o[1]}:{borderTopLeftRadius:o[0],borderTopRightRadius:o[1],borderBottomRightRadius:o[2],borderBottomLeftRadius:o[3]}}l(F,"explodeBorderRadius");var O=r.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${s.colors.legacy.areaBase};
  border-bottom-width: ${e=>e.border?1:0}px;
  padding: ${e=>e.padding?e.padding:14}px;
  cursor: ${e=>e.onClick?"pointer":"default"};
`,j=r.div`
  padding-top: 3px;
`,E=r.div`
  display: flex;
  justify-content: space-between;
  font-size: ${e=>e.fontSize?e.fontSize:14}px;
`,M=r.div`
  display: flex;
  justify-content: space-between;
`,W=r.div`
  text-align: left;
  flex: 1;
`,H=r.div`
  text-align: right;
  flex: 1;
`,U=r.div`
  display: flex;
  align-items: center;
  ${e=>e.truncate?"flex: 1; min-width: 0; justify-content:end;":""}
`,K=r.div`
  padding-left: 8px;
  color: ${s.colors.legacy.textDiminished};
`,_=l(({children:e,showArrow:o})=>t.createElement(U,{truncate:!o},e,o&&t.createElement(K,null,t.createElement(z,{height:12}))),"Value"),d=r.span`
  color: ${e=>e.color||"white"};
  text-align: ${e=>e.align||"left"};
  font-weight: ${e=>e.weight||400};
  overflow-wrap: break-word;
  ${e=>e.margin?"margin: "+e.margin+";":""};
  ${e=>e.size?"font-size: "+e.size+"px;":""}
  ${e=>e.truncate?"white-space: nowrap; text-overflow: ellipsis; overflow:hidden; width: 100%;"+(e.size?"line-height: "+e.size*1.2+"px;":"line-height: 17px;"):""}
`,q=r.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${s.colors.legacy.spotBase};
  text-decoration: none;
  cursor: pointer;
`,G=r.div`
  text-align: center;
  width: 100%;
`,J=l(({children:e,label:o,tooltipContent:a,fontSize:c})=>t.createElement(t.Fragment,null,t.createElement(v,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontSize:c,fontWeight:500,info:a?t.createElement(S,null,a):null},o),e),"InfoRow"),Q=l(e=>{D.capture("activityItemDetailLinkClicked",{data:{hostname:L(e)}})},"captureLinkClickAnalytics"),X=l(e=>"designSystemOptIn"in e&&e.designSystemOptIn===!0?t.createElement(Y,{...e}):t.createElement(Z,{...e}),"Summary"),Y=l(({header:e,rows:o,borderRadius:a})=>{let c=F(a);return t.createElement(C,{className:h.summaryContainer,...c},e?t.createElement("div",{className:h.header},e):null,t.createElement(T,{rows:o.map(n=>({...n.onPress?{onClick:n.onPress}:{},topLeft:n.tooltipContent?{component:l(()=>t.createElement(v,{textColor:s.colors.legacy.textDiminished,iconColor:s.colors.legacy.textDiminished,tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontSize:14,fontWeight:500,info:t.createElement(S,null,n.tooltipContent)},n.label),"component")}:{text:n.label,font:"captionMedium",color:"textDiminished"},topRight:{text:n.value,font:"captionMedium",color:"textBase"}}))}))},"SummaryDesignSystem"),Z=l(({header:e,rows:o,borderRadius:a,padding:c,fontSize:n,networkID:y})=>{let m=F(a);return t.createElement(C,{className:h.summaryContainer,...m}," ",e?t.createElement("div",{className:h.header},e):null,o.map((i,p)=>{if(i.value===void 0)return null;let g=i.onClick?{role:"button"}:void 0;return t.createElement(O,{border:o.length-1!==p,padding:c,onClick:i.onClick,key:`summary-row-${p}`,...g},t.createElement(E,{key:i.label,fontSize:n},typeof i.value=="string"?i.type==="link"?t.createElement(G,null,t.createElement(q,{href:i.value,onClick:()=>Q(i.value)},i.label)):t.createElement(J,{label:i.label,tooltipContent:i.tooltipContent,fontSize:n},t.createElement(_,{showArrow:!!i.onClick},i.type==="address"?t.createElement(A,{address:i.value,networkID:y??w.Mainnet}):t.createElement(d,{color:i.color,weight:500,align:"right",truncate:!i.onClick},i.value))):t.createElement(t.Fragment,null,t.createElement(d,{color:s.colors.legacy.textDiminished,size:n},i.label),t.createElement(_,{showArrow:!!i.onClick},i.value))),t.createElement(M,null,i.leftSubtext?t.createElement(W,null,t.createElement(j,null,t.createElement(d,{color:i.leftSubtextColor||s.colors.legacy.textDiminished,size:13},i.leftSubtext))):null,i.rightSubtext?t.createElement(H,null,t.createElement(j,null,t.createElement(d,{color:i.rightSubtextColor||s.colors.legacy.textDiminished,size:13},i.rightSubtext))):null))}))},"SummaryLegacy"),at=l(({name:e,imageURL:o})=>t.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},t.createElement($,{iconUrl:o,width:16}),t.createElement(d,{margin:"0 0 0 5px",weight:500},e)),"ActivityProvider"),ee=r.div`
  height: 100%;
  overflow: scroll;
  margin-top: -16px;
  padding-top: 16px;
  padding-bottom: 64px;
`,te=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,oe=r.div`
  margin-top: 10px;
  margin-bottom: 10px;
`,ie=r.div`
  margin-top: 10px;
  margin-bottom: 20px;
`,re=r.div`
  margin-bottom: 10px;
`,ae=r.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0 10px 0;
`,ne=r(d)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`,se=r.div`
  background-color: ${s.colors.legacy.spotWarning};
  width: 100%;
  margin-top: 24px;
  margin-bottom: 14px;
  border-radius: 9px;
  padding: 16px;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
`,le=r.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`,nt=l(({title:e,primaryText:o,secondaryText:a,image:c,sections:n,leftButton:y,warning:m})=>t.createElement(ee,null,t.createElement(te,null,t.createElement(ae,null,y||!1,t.createElement(d,{weight:500,size:22},e)),t.createElement(oe,null,c),o.value&&t.createElement(ne,{weight:600,size:34,color:o.color,align:"center",margin:"10px 0 10px 0"},o.value),a.value&&t.createElement(d,{size:16,color:s.colors.legacy.textDiminished,margin:"0 0 10px 0"},a.value),m&&t.createElement(se,null,t.createElement(le,null,t.createElement(P,null)),t.createElement(d,{size:14,color:s.colors.legacy.areaBase,margin:"3px 0px 3px 8px"},m))),n.map(({title:i,rows:p},g)=>t.createElement(ie,{key:`summary-item-${g}`},i&&t.createElement(re,null,t.createElement(d,{size:14,weight:500,color:s.colors.legacy.textDiminished},i)),t.createElement(X,{rows:p})))),"Details");export{X as a,at as b,nt as c};
//# sourceMappingURL=chunk-3EES3B5S.js.map
