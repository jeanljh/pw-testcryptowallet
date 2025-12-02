import{a as S}from"./chunk-XVSHIHTB.js";import{b as X}from"./chunk-RLKSRZDI.js";import{c as Q}from"./chunk-PYLKOKDS.js";import{R as B,ba as J,da as A,db as F,m as w}from"./chunk-FMF67RFP.js";import{d as q}from"./chunk-34JK5YK5.js";import{i as T,xb as $}from"./chunk-COS4XKZ5.js";import{V as C,a as v,gb as Se,oa as G,sa as K}from"./chunk-LYTSCHVN.js";import{a as o,g as x,i as a,j as c,n as s}from"./chunk-NSVULBS3.js";a();s();var I=x(v());a();s();var Z=x(v());function Y(){var e=(0,Z.useRef)(!0);return e.current?(e.current=!1,!0):e.current}o(Y,"useFirstMountState");var De=o(function(e,t){return e===t},"strictEquals");function b(e,t){t===void 0&&(t=De);var r=(0,I.useRef)(),u=(0,I.useRef)(e),n=Y();return!n&&!t(u.current,e)&&(r.current=u.current,u.current=e),r.current}o(b,"usePreviousDistinct");a();s();a();s();var j=o(function(){},"noop");function P(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}o(P,"on");function L(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}o(L,"off");var E=typeof self<"u";a();s();var V=x(v());var Ve=["mousedown","touchstart"],ye=o(function(e,t,r){r===void 0&&(r=Ve);var u=(0,V.useRef)(t);(0,V.useEffect)(function(){u.current=t},[t]),(0,V.useEffect)(function(){for(var n=o(function(l){var g=e.current;g&&!g.contains(l.target)&&u.current(l)},"handler"),i=0,f=r;i<f.length;i++){var m=f[i];P(document,m,n)}return function(){for(var l=0,g=r;l<g.length;l++){var H=g[l];L(document,H,n)}}},[r,e])},"useClickAway"),Ce=ye;a();s();var _=x(v());var be=o(function(e){return(e+1)%1e6},"updateReducer");function N(){var e=(0,_.useReducer)(be,0),t=e[1];return t}o(N,"useUpdate");a();s();var M=x(v());var Pe=E?M.useLayoutEffect:M.useEffect,ee=Pe;a();s();var h=x(v());function O(e,t){t===void 0&&(t=0);var r=(0,h.useRef)(!1),u=(0,h.useRef)(),n=(0,h.useRef)(e),i=(0,h.useCallback)(function(){return r.current},[]),f=(0,h.useCallback)(function(){r.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout(function(){r.current=!0,n.current()},t)},[t]),m=(0,h.useCallback)(function(){r.current=null,u.current&&clearTimeout(u.current)},[]);return(0,h.useEffect)(function(){n.current=e},[e]),(0,h.useEffect)(function(){return f(),m},[t]),[i,m,f]}o(O,"useTimeoutFn");a();s();var te=x(v());var Le=o(function(e){(0,te.useEffect)(e,[])},"useEffectOnce"),re=Le;a();s();var D=x(v());a();s();var oe=x(v());var Ee=o(function(e){var t=(0,oe.useRef)(e);t.current=e,re(function(){return function(){return t.current()}})},"useUnmount"),W=Ee;var Me=o(function(e){var t=(0,D.useRef)(0),r=(0,D.useState)(e),u=r[0],n=r[1],i=(0,D.useCallback)(function(f){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){n(f)})},[]);return W(function(){cancelAnimationFrame(t.current)}),[u,i]},"useRafState"),ae=Me;a();s();var R=x(v());function se(e){var t=(0,R.useRef)();return(0,R.useEffect)(function(){t.current=e}),t.current}o(se,"usePrevious");a();s();var ue=x(v());var Re=o(function(e){c.NODE_ENV==="development"&&(typeof e!="object"||typeof e.current>"u")&&console.error("`useScroll` expects a single ref argument.");var t=ae({x:0,y:0}),r=t[0],u=t[1];return(0,ue.useEffect)(function(){var n=o(function(){e.current&&u({x:e.current.scrollLeft,y:e.current.scrollTop})},"handler");return e.current&&P(e.current,"scroll",n,{capture:!1,passive:!0}),function(){e.current&&L(e.current,"scroll",n)}},[e]),r},"useScroll"),ke=Re;a();s();function ne(e){e===void 0&&(e=0);var t=N();return O(t,e)}o(ne,"useTimeout");a();s();var y=x(v());var ie={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function He(){var e=(0,y.useState)(null),t=e[0],r=e[1],u=(0,y.useState)(ie),n=u[0],i=u[1],f=(0,y.useMemo)(function(){return new self.ResizeObserver(function(m){if(m[0]){var l=m[0].contentRect,g=l.x,H=l.y,me=l.width,xe=l.height,ve=l.top,ge=l.left,he=l.bottom,we=l.right;i({x:g,y:H,width:me,height:xe,top:ve,left:ge,bottom:he,right:we})}})},[]);return ee(function(){if(t)return f.observe(t),function(){f.disconnect()}},[t]),[r,n]}o(He,"useMeasure");var Te=E&&typeof self.ResizeObserver<"u"?He:function(){return[j,ie]};a();s();a();s();var fe=o(e=>{if(e.length!==0)return e[e.length-1]},"getLast");var le=x(Se(),1);var d=x(v(),1);var de=(0,d.createContext)({pushDetailViewCallback:o(()=>S,"pushDetailViewCallback"),pushDetailView:S,popDetailView:S,resetDetailView:S,detailViewStackLength:0}),Be=w(K.div)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${e=>e.theme?.detailViewMaxHeight??"100%"};
  min-height: ${e=>e.theme?.detailViewMinHeight??"initial"};
`,Lr=d.default.memo(({children:e,shouldResetOnAccountChange:t,shouldPushDetailView:r})=>{let{detailViewStack:u,setDetailViewStack:n,pushDetailView:i,...f}=Fe(),{data:m}=$();return(0,d.useEffect)(()=>{t&&n([])},[m,n,t]),(0,d.useEffect)(()=>{r&&i(e)},[e,r,i]),d.default.createElement(de.Provider,{value:{...f,pushDetailView:i,detailViewStackLength:u.length}},d.default.createElement(Ne,{stack:u},e))}),Ae=navigator.webdriver?0:500,Fe=o(()=>{let[e,t]=(0,d.useState)([]),r=(0,d.useMemo)(()=>(0,le.default)(f=>{t(m=>T(m,l=>{l.push(f)}))},Ae,{leading:!0,trailing:!1}),[t]),u=(0,d.useCallback)(()=>{t(f=>T(f,m=>{m.pop()}))},[t]),n=(0,d.useCallback)(f=>()=>{r(f)},[r]),i=(0,d.useCallback)(()=>()=>{t([])},[t]);return(0,d.useMemo)(()=>({detailViewStack:e,setDetailViewStack:t,pushDetailView:r,popDetailView:u,resetDetailView:i,pushDetailViewCallback:n}),[e,u,r,i,n])},"useDetailViewStack"),Ie=.15,Ne=o(({children:e,stack:t})=>{let r=b(t,(l,g)=>l?.length===g.length),u=fe(t),n=t.length>(r??[]).length,i=r===void 0,f=i?0:n?10:-10,m=i?1:0;return d.default.createElement(G,{mode:"wait"},d.default.createElement(Be,{key:`${t.length}_${r?.length}`,initial:{x:f,opacity:m},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:Ie},ref:Oe},u||e))},"DetailViewsController"),U=o(()=>{let e=(0,d.useContext)(de);if(!e)throw new Error("Missing detail view context");return e},"useDetailViews"),Oe=o(e=>{e&&e.parentElement&&(e.parentElement.scrollTop=0)},"resetScroll");a();s();var k=x(v(),1);var We=(0,k.createContext)({isOpen:!1,showSettingsMenu:S,hideSettingsMenu:S}),pe=o(()=>(0,k.useContext)(We),"useSettingsMenu");a();s();var p=x(v(),1);var Ue=w.section`
  z-index: 1;
  background-color: ${C.colors.legacy.areaBase};
  padding: 10px 16px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${C.colors.legacy.elementBase};
  height: ${q}px;
  width: 100%;
`,ze=w(F).attrs(e=>({size:16,weight:500,lineHeight:25,maxWidth:e.maxWidth??"280px",noWrap:e.noWrap??!0}))``,$e=w.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding-bottom: 17px;
  position: relative;
  width: 100%;
`,ce=w(X)`
  position: absolute;
  right: 0;
`,z=w(Q)`
  position: absolute;
  left: 0;
`,qr=o(({children:e,items:t,sections:r,icon:u,shouldWrap:n,onIconClick:i,onLeftButtonClick:f,useCloseButton:m})=>{let l=qe({withCloseButton:m??!1,onLeftButtonClick:f}),g=r&&r.length>0||t&&t.length>0;return p.default.createElement($e,null,l,p.default.createElement(F,{weight:500,size:22,noWrap:!n,maxWidth:"280px"},e),g||i?p.default.createElement(ce,{sections:r,items:t,icon:u||p.default.createElement(J,null),onIconClick:i}):p.default.createElement("div",null))},"PageHeader"),Ge=w(Ue)`
  position: relative;
  border-bottom: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid ${C.colors.legacy.borderDiminished};
  }
`,Ke=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`,Jr=o(({children:e,sections:t,items:r,icon:u,shouldWrap:n,onIconClick:i,onLeftButtonClick:f,disableIconBackground:m})=>{let l=Je(f),g=t&&t.length>0||r&&r.length>0;return p.default.createElement(Ge,null,l,p.default.createElement(Ke,null,typeof e=="string"?p.default.createElement(ze,{noWrap:!n},e):e),g||i?p.default.createElement(ce,{sections:t,items:r,icon:u,onIconClick:i,disableIconBackground:m}):p.default.createElement("div",null))},"SettingsHeader"),qe=o(({withCloseButton:e,onLeftButtonClick:t})=>{let{popDetailView:r,detailViewStackLength:u}=U();return(0,p.useMemo)(()=>u===0?p.default.createElement("div",null):p.default.createElement(z,{onClick:()=>{t?.(),r()},"data-testid":"header--back"},e?p.default.createElement(B,null):p.default.createElement(A,null)),[e])},"usePageHeaderLeftButton"),Je=o(e=>{let{hideSettingsMenu:t}=pe(),{popDetailView:r,detailViewStackLength:u}=U();return(0,p.useMemo)(()=>u>0?p.default.createElement(z,{onClick:()=>{r()},"data-testid":"header--back"},p.default.createElement(A,null)):p.default.createElement(z,{"data-testid":"settings-menu-close-button",onClick:e??t},p.default.createElement(B,null)),[])},"useSettingsHeaderLeftButton");export{fe as a,Ce as b,W as c,se as d,b as e,ke as f,ne as g,Te as h,Lr as i,U as j,We as k,pe as l,Ue as m,ze as n,qr as o,Jr as p,Je as q};
//# sourceMappingURL=chunk-F74QCQCY.js.map
