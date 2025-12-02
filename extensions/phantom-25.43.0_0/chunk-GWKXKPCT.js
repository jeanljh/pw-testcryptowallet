import{c as N,l as d,m}from"./chunk-FMF67RFP.js";import{V as o,a as C,oa as $,sa as w}from"./chunk-LYTSCHVN.js";import{a as l,g as S,i as u,n as y}from"./chunk-NSVULBS3.js";u();y();var i=S(C(),1);var A=l(({width:e=44,trackColor:a=o.colors.legacy.areaAccent,spinnerColor:n=o.colors.legacy.spotBase})=>i.default.createElement("svg",{width:e,height:e,viewBox:"0 0 26 26"},i.default.createElement("g",null,i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 23.413c5.751 0 10.413-4.662 10.413-10.413S18.751 2.587 13 2.587 2.587 7.249 2.587 13 7.249 23.413 13 23.413zm0 2.315c7.03 0 12.727-5.699 12.727-12.728S20.03.273 13 .273C5.97.273.273 5.97.273 13 .273 20.03 5.97 25.728 13 25.728z",fill:a})),i.default.createElement("g",null,i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.382 24.125a1.157 1.157 0 01.623-1.513 10.412 10.412 0 005.607-13.617 1.157 1.157 0 112.136-.89 12.726 12.726 0 01-6.853 16.643 1.157 1.157 0 01-1.513-.623z",fill:n}))),"LoaderSvg"),I=m.div`
  position: ${e=>e.position};
  height: ${e=>e.diameter}px;
  width: ${e=>e.diameter}px;
  animation: rotate 0.5s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`,h=l(({diameter:e=44,color:a,trackColor:n,position:s})=>i.default.createElement(I,{diameter:e,position:s},i.default.createElement(A,{width:e,spinnerColor:a,trackColor:n})),"Spinner"),M=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,E=l(()=>i.default.createElement(M,null,i.default.createElement(h,null)),"SpinnerIcon");u();y();var r=S(C(),1);var T=m.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.paddingY}px 0px;
  width: ${e=>e.width};
  height: ${e=>e.height};
  border-radius: ${e=>e.borderRadius};
  font-size: ${e=>e.fontSize}px;
  font-weight: ${e=>e.fontWeight};
  line-height: ${e=>e.lineHeight}px;
  color: ${o.colors.legacy.textBase};
  pointer-events: auto;
  border: none;
  outline-color: transparent;
  outline-style: none;
  cursor: ${e=>e.disabled?"auto":"pointer"};
  &:disabled {
    opacity: 0.4;
  }
  ${e=>e.noWrap&&d`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${e=>e.theme==="primary"?d`
          background: ${o.colors.legacy.spotBase};
          color: ${o.colors.legacy.areaBase};
          &:hover:enabled {
            background: ${o.colors.legacy.spotAccent};
          }
        `:e.theme==="warning"?d`
            background: ${o.colors.legacy.spotNegative};
            color: ${o.colors.legacy.areaBase};
            &:hover:enabled {
              background: ${o.colors.legacy.spotNegative};
            }
          `:e.theme==="dark"?d`
              background: ${o.colors.legacy.areaAccent};
            `:e.theme==="metamask"?d`
                /* metamask brand color */
                background: #f5841f;
                &:hover:enabled {
                  /* metamask brand color */
                  background: #d0701a;
                }
              `:e.theme==="link"?d`
                  background: transparent;
                  color: ${o.colors.legacy.spotBase};
                  justify-content: flex-start;
                  &:hover:enabled {
                    color: ${o.colors.legacy.spotBase};
                  }
                `:e.theme==="text"?d`
                    background: transparent;
                    padding-left: 4px;
                    padding-right: 4px;
                    justify-content: flex-start;
                    &:hover:enabled {
                      background: ${o.colors.legacy.gray};
                    }
                  `:d`
                    background: ${o.colors.legacy.elementAccent};
                    &:hover:enabled {
                      background: ${o.colors.legacy.gray};
                    }
                  `}
`,f=l(({children:e,loading:a,to:n,onClick:s,fontSize:c=16,fontWeight:t=600,lineHeight:p=19,paddingY:B=14,width:x="100%",borderRadius:k="16px",theme:v="default",type:b="button",noWrap:g=!0,...L})=>{let P={fontSize:c,fontWeight:t,lineHeight:p,paddingY:B,width:x,borderRadius:k,theme:v,type:b,noWrap:g,...L};return n?r.default.createElement(G,{loading:a,to:n,...P},e):r.default.createElement(T,{...P,onClick:s},a?r.default.createElement(h,{diameter:24,position:"absolute"}):e)},"Button");var G=l(({children:e,loading:a,to:n,...s})=>{let c=N();if(!n)throw new Error("ButtonWithNavigation requires a 'to' prop");return r.default.createElement(T,{...s,onClick:()=>c(n)},a?r.default.createElement(h,{diameter:24,position:"absolute"}):e)},"NavButton"),D=m.div`
  display: flex;
  flex-direction: ${e=>e.vertical?"column-reverse":"row"};
  width: 100%;
  gap: 10px;
`;var H={fontSize:14,lineHeight:17,paddingY:10},X=l(({className:e,primaryText:a,secondaryText:n,onPrimaryClicked:s,onPrimaryHover:c,onSecondaryClicked:t,primaryTheme:p="primary",secondaryTheme:B="default",primaryDisabled:x=!1,primaryLoading:k,secondaryDisabled:v,buttonPairStyle:b="normal"})=>{let g=b==="normal"?{}:H;return r.default.createElement(D,{className:e},r.default.createElement(f,{theme:B,onClick:t,disabled:v,...g,"data-testid":"secondary-button"},n),r.default.createElement(f,{type:"submit",theme:p,disabled:x,loading:k,onClick:s,onMouseEnter:c,...g,"data-testid":"primary-button"},a))},"ButtonPair");var Z=l(({buttons:e,buttonStyle:a,className:n,vertical:s})=>{let c=a==="small"?H:{};return r.default.createElement(D,{className:n,vertical:s},r.default.createElement($,null,e.map((t,p)=>typeof t.hideButton>"u"?r.default.createElement(f,{key:t.key??(typeof t.text=="string"&&t.text?t.text:p),type:t.type??"button",theme:t.theme,onClick:t.onClick,disabled:t.disabled,loading:t.loading,className:t.className,"data-testid":t.testID,...c},t.text):t.hideButton?null:r.default.createElement(w.div,{key:t.key??(typeof t.text=="string"&&t.text?t.text:p),initial:{opacity:0,scale:.8,width:0},exit:{opacity:0,width:0},animate:{height:"auto",opacity:1,scale:1,width:"100%"},transition:{ease:"easeInOut",duration:.3}},r.default.createElement(f,{type:t.type??"button",theme:t.theme,onClick:t.onClick,disabled:t.disabled,loading:t.loading,className:t.className,"data-testid":t.testID,...c},t.text)))))},"ButtonGroup");export{h as a,E as b,f as c,X as d,Z as e};
//# sourceMappingURL=chunk-GWKXKPCT.js.map
