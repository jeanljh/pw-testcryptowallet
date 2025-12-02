import{p as u}from"./chunk-F74QCQCY.js";import{db as d,m as i}from"./chunk-FMF67RFP.js";import{S as f}from"./chunk-5RCV3KPE.js";import{Ba as S,V as n,a as v,r as C}from"./chunk-LYTSCHVN.js";import{a as p,g as k,i as m,n as x}from"./chunk-NSVULBS3.js";m();x();var t=k(v(),1);var w=i.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${e=>e.settingsContainerHeight??"100%"};
`,H=i.div``,b=i.div`
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 32px;
`,B=i.div`
  display: flex;
  background-color: ${e=>e.selected?n.colors.legacy.spotBase:n.colors.legacy.elementBase};
  padding: 16px;
  align-items: center;
  cursor: pointer;

  & + & {
    border-top: 1px solid ${n.colors.legacy.areaBase};
  }
`,A=i.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,D=p(({selected:e,title:o,description:r,onClick:a})=>t.default.createElement(B,{onClick:a,selected:e},t.default.createElement(A,null,t.default.createElement(d,{margin:"0 0 7px",lineHeight:16,textAlign:"left",weight:500,size:16,color:e?n.colors.legacy.areaBase:n.colors.legacy.textBase},o),t.default.createElement(d,{textAlign:"left",weight:500,size:12,lineHeight:12,color:e?n.colors.legacy.elementBase:n.colors.legacy.textDiminished},r||t.default.createElement("span",null,"\xA0")))),"Preset"),U=p(({onSelectTransactionSpeed:e,selectedTransactionSpeed:o,networkID:r,transactionUnitAmount:a,closeModal:c,settingsContainerHeight:s})=>{let{t:l}=C(),{presets:T,transactionSpeed:g}=f(r,o,a),y=(0,t.useCallback)(()=>{e(g),c()},[c,g,e]),P=l("settingsTransactions"),h=l("commandSave");return{headerText:P,primaryText:h,onPress:y,presetViewStates:T,settingsContainerHeight:s}},"useProps"),q=p(e=>{let o=U(e);return t.default.createElement(I,{...o})},"TransactionSettings"),I=t.default.memo(({headerText:e,primaryText:o,onPress:r,settingsContainerHeight:a,presetViewStates:c})=>t.default.createElement(t.default.Fragment,null,t.default.createElement(H,null,t.default.createElement(u,null,e)),t.default.createElement(w,{settingsContainerHeight:a},t.default.createElement(b,null,c.map((s,l)=>t.default.createElement(D,{key:l,onClick:s.onClick,title:s.title,description:s.description,selected:s.selected}))),t.default.createElement(S,{background:"spot",onClick:r},o))));export{q as a};
//# sourceMappingURL=chunk-GHLGNLW6.js.map
