import{a as W}from"./chunk-GWKXKPCT.js";import{J as I,l as u,m as n,sa as f}from"./chunk-FMF67RFP.js";import{V as r,a as E}from"./chunk-LYTSCHVN.js";import{a as g,g as A,i as m,n as y}from"./chunk-NSVULBS3.js";m();y();var t=A(E(),1);var c=u`
  width: 100%;
  padding: ${e=>e.padding||"14px"};
  background: ${e=>e.backgroundColor||r.colors.legacy.areaAccent};
  border-width: ${e=>e.borderWidth||"1px"};
  border-style: solid;
  border-color: ${e=>e.warning?r.colors.legacy.spotNegative:r.colors.legacy.borderDiminished};
  border-radius: ${e=>e.borderRadius||"6px"};
  color: white;
  font-size: ${e=>e.fontSize||"16px"};
  line-height: 19px;

  &::placeholder {
    color: ${e=>e.placeholderColor||r.colors.legacy.textIncidental};
  }

  &:focus {
    outline: 0;
  }

  ::selection {
    background: ${r.colors.legacy.spotBase};
  }

  ::-moz-selection {
    background: ${r.colors.legacy.spotBase};
  }
`,H=u`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,d=g(e=>{let s=(0,t.forwardRef)(({warningMessage:o,...a},l)=>t.default.createElement(R,null,t.default.createElement(e,{...a,ref:l}),o&&t.default.createElement(N,null,o))),p=(0,t.forwardRef)(({label:o,...a},l)=>t.default.createElement(F,{label:o},t.default.createElement(e,{...a,ref:l}))),i=e;return i.WithWarning=s,i.WithLabel=p,i},"withVariants"),R=n.div`
  width: 100%;
`,h=n.input`
  ${c}
  ${H}
`,N=n.div`
  color: ${r.colors.legacy.spotNegative};
  font-size: 16px;
  line-height: 1.2;
  margin-top: 10px;
  text-align: left;
`,F=n.div`
  position: relative;
  &:after {
    ${e=>e.label?`content: "${e.label}"`:""};
    color: ${r.colors.legacy.textIncidental};
    position: absolute;
    right: 20px;
    bottom: 17px;
    font-size: 16px;
  }
`,_=d(h),V=n.textarea`
  ${c}
  resize: none;
  padding: 25px;
  line-height: 150%;
  word-spacing: 10px;
  text-align: left;
  white-space: normal;
  &:placeholder-shown {
    word-spacing: 3px;
  }
`,B=n.textarea`
  ${c}
  height: 68px;
  text-align: start;
  resize: none;
`,K=n.textarea`
  ${c}
  height: 68px;
  text-align: start;
  resize: none;
`,D=n.textarea`
  ${c}
  overflow: auto;
  height: 50px;
  text-align: start;
`,ee=d(V),te=d(B),ne=d(K),re=d(D),q=n(h)`
  padding-left: 43px;
  padding-right: 43px;
`,O=n.div`
  width: 100%;
  position: relative;
`,U=n.div`
  position: absolute;
  top: 16px;
  left: 15px;
`,j=n.div`
  position: absolute;
  top: 16px;
  right: 15px;
  cursor: pointer;
`,oe=(0,t.forwardRef)((e,s)=>{let{showClearIcon:p,onClear:i,showLoadingIcon:o=!1,...a}=e;return t.default.createElement(O,null,t.default.createElement(U,null,o?t.default.createElement(W,{diameter:17}):t.default.createElement(I,null)),t.default.createElement(q,{...a,ref:s,type:"text"}),p&&t.default.createElement(j,{onClick:i},t.default.createElement(f,null)))}),G=n(h)`
  border: ${({border:e})=>e||"inherit"};
  color: ${({color:e})=>e||"inherit"};

  &:disabled {
    cursor: not-allowed;
  }
`,ae=t.default.memo(g(function({value:s,placeholder:p,fontSize:i="16px",required:o,warning:a,minLength:l=1,maxLength:C=79,decimalLimit:S=9,border:P,borderRadius:w,disabled:v,"aria-labelledby":T,"aria-label":$,onKeyPress:L,onUserInput:M,name:k}){return t.default.createElement(G,{value:s,required:o,warning:a,border:P,borderRadius:w,color:a?r.colors.legacy.spotNegative:r.colors.legacy.textBase,type:"text",inputMode:"decimal",pattern:`^\\d*(\\.\\d{0,${S}})?$`,autoComplete:"off",autoCorrect:"off",spellCheck:"false",fontSize:i,placeholder:p,step:"any",minLength:l,maxLength:C,disabled:v,name:k,"aria-labelledby":T,"aria-label":$,onKeyPress:L,onInput:b=>{let x=b.target;if(!x.validity.valid)b.preventDefault();else{let z=x.value.replace(/,/g,".");M(z)}}})},"InnerInput"));export{d as a,_ as b,ee as c,te as d,ne as e,re as f,oe as g,ae as h};
//# sourceMappingURL=chunk-T5IRHW4Y.js.map
