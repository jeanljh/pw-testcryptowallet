import{h as E}from"./chunk-T5IRHW4Y.js";import{b as F}from"./chunk-TQE77AJX.js";import{c as q}from"./chunk-GWKXKPCT.js";import{I as U,db as u,ha as z,m as e}from"./chunk-FMF67RFP.js";import{a as N}from"./chunk-EVXXECVZ.js";import{ea as P}from"./chunk-TQDE7426.js";import{s as L,w as Q}from"./chunk-GSVPXWLR.js";import{T as $,V as i,X as W,Z as A,a as y,r as V}from"./chunk-LYTSCHVN.js";import{a as o,g as h,i as l,n as s}from"./chunk-NSVULBS3.js";l();s();var d=h(y(),1);var Y=e.div`
  position: relative;
  width: 100%;
`,_=e.div`
  position: absolute;
  right: 12px;
  top: calc(50% - 27px / 2);
  display: flex;
  align-items: center;
`,G=e(u)`
  margin-right: ${t=>`calc(120px - (${t.textLength}px * 5))`};
`,J=e(u)`
  margin-right: 10px;
`,X=e(q)`
  height: 27px;
`,Z=e.div`
  position: relative;
  width: 100%;
  padding: 0px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`,ut=o(({symbol:t,alignSymbol:m,buttonText:g,width:c,borderRadius:f,onSetTarget:x,targetButtonDisabled:C,placeholder:b,...n})=>{let{t:k}=V(),I=n.value.toString().length;return d.default.createElement(Y,null,d.default.createElement(E,{placeholder:b??k("maxInputAmount"),borderRadius:f,...n}),d.default.createElement(_,null,m==="left"?d.default.createElement(G,{size:16,textLength:I,color:i.colors.legacy.textDiminished},t):d.default.createElement(J,{size:16,color:i.colors.legacy.textDiminished},t),d.default.createElement(X,{disabled:C,fontSize:13,width:`${c}px`,borderRadius:"100px",paddingY:4,onClick:x},d.default.createElement(Z,null,g))))},"TargetInput");l();s();var a=h(y(),1);var R=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${t=>t.color};
  height: ${t=>t.width}px;
  min-width: ${t=>t.width}px;
  border-radius: 6px;
`,tt=e.img`
  border-radius: ${t=>t.shape==="square"?"0":"50%"};
  height: ${t=>t.width}px;
  width: ${t=>t.width}px;
`,j=a.default.memo(({alt:t,backgroundColor:m=i.colors.legacy.areaBase,className:g,defaultIcon:c,iconUrl:f,localImageSource:x,questionMarkWidth:C,shape:b="circle",width:n})=>{let[k,I]=(0,a.useState)(!1),[w,O]=(0,a.useState)(!1),M=o(()=>{I(!0)},"onLoad"),K=o(()=>{O(!0)},"onError"),p=f;f&&n?p=A(f,n,n):x&&(p=x);let S=k?"clear":m,B=p?a.default.createElement(tt,{src:p,alt:t,width:n,shape:b,loading:"lazy",onLoad:M,onError:K}):null,D=c||a.default.createElement(U,{width:C});return b==="square"?a.default.createElement(R,{className:g,color:S,width:n},p&&!w?B:D):a.default.createElement(F,{className:g,color:S,diameter:n},p&&!w?B:D)});l();s();var r=h(y(),1);var At=o(t=>{let{data:m}=P(t.keybaseUsername),g=t.name??t.keybaseUsername??t.identifier;return r.default.createElement(rt,null,r.default.createElement(ot,null,r.default.createElement(it,{width:28,iconUrl:t.iconUrl??m}),r.default.createElement(u,{textAlign:"left",weight:600,size:16,noWrap:!0},g),t.website&&r.default.createElement(nt,{href:t.website},r.default.createElement(z,null)),t.onInfoClick&&r.default.createElement("div",{className:et.infoContainer,onClick:t.onInfoClick},r.default.createElement(W.InfoCircle,{size:16,color:"textIncidental"}))),r.default.createElement(at,null,t.data.map(c=>r.default.createElement(lt,{key:c.label},r.default.createElement(u,{textAlign:"left",color:i.colors.legacy.textDiminished,size:14,lineHeight:17,noWrap:!0},c.label),c.value))))},"ValidatorCard"),et={infoContainer:$({cursor:"pointer"})},rt=e.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 47px auto;
  align-items: center;
  justify-content: flex-start;
  background: ${i.colors.legacy.elementBase};
  width: 100%;
  border-radius: 6px;
  margin-top: 12px;
`,ot=e.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 33px 1fr auto;
  align-items: center;
  padding: 9px 14px;
  border-bottom: 0.5px solid ${i.colors.legacy.borderBase};
`,nt=e.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`,it=e(j)``,at=e.section`
  padding: 14px;
`,lt=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`;l();s();var T=h(y(),1);var H=o((t,m)=>N(L(typeof t=="string"?Number(t):t),m),"format"),Ft=o(t=>typeof t.children>"u"?null:T.default.createElement(T.default.Fragment,null,H(t.children,t.format)," SOL"),"SolBalance"),jt=o(t=>typeof t.balance>"u"?null:`${H(t.balance,t.format)} SOL`,"formatSolBalance");export{ut as a,j as b,At as c,Ft as d,jt as e};
//# sourceMappingURL=chunk-W7HWP67X.js.map
