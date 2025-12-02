import{a as D}from"./chunk-LFYXA4SS.js";import{a as P,b as x}from"./chunk-CAL4LHLS.js";import{a as y}from"./chunk-FYGLBDJG.js";import{a as I}from"./chunk-XVSHIHTB.js";import{aa as V,m as M}from"./chunk-FMF67RFP.js";import{_ as E,p as L}from"./chunk-UHG6ISVN.js";import{a as v}from"./chunk-LYTSCHVN.js";import{a as h,g as w,i as b,n as C}from"./chunk-NSVULBS3.js";b();C();var t=w(v(),1);b();C();var o=w(v(),1);b();C();var u=w(v(),1);var O=M.div`
  visibility: ${e=>e.isHidden?"hidden":"visible"};
  model-viewer {
    --poster-color: transparent;
    --progress-bar-color: transparent;
    --progress-mask: transparent;
    width: ${e=>e.width}px;
    height: ${e=>e.height}px;
  }
`,H=!1;function T(){H||(H=!0,import("./model-viewer-UGJPWLRV.js"))}h(T,"loadModelViewer");var U=h(({src:e,alt:s,autoRotate:i,autoPlay:l,cameraControls:r,loading:n,width:d=154,height:c=154,onLoad:a=I,onError:p=I,isHidden:g=!1})=>{T();let f=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let m=f.current;if(m)return m.addEventListener("load",a),m.addEventListener("error",p),()=>{m.removeEventListener("load",a),m.removeEventListener("error",p)}},[p,a,f]),u.default.createElement(O,{width:d,height:c,isHidden:g},u.default.createElement("model-viewer",{alt:s,loading:n??"eager","auto-rotate-delay":0,"auto-rotate":i||void 0,autoplay:l||void 0,"camera-controls":r||void 0,ref:f,src:e}))},"ModelViewer"),$=U;var A=o.default.memo(e=>{let{uri:s,width:i,height:l,isCameraControlsEnabled:r}=e,[n,d]=(0,o.useState)(!0),[c,a]=(0,o.useState)(!1);return o.default.createElement(o.default.Fragment,null,c?o.default.createElement(y,null,o.default.createElement(V,null)):o.default.createElement(y,null,o.default.createElement($,{src:s,autoRotate:!0,autoPlay:!0,cameraControls:r,onLoad:h(()=>{d(!1),a(!1)},"onLoad"),onError:h(()=>{d(!1),a(!0)},"onError"),width:i,height:l,isHidden:n})),n?o.default.createElement(P,{showBadge:!1}):null)});var B=328,k=M.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
`,le=t.default.memo(({media:e,collectibleChainData:s,width:i=328,height:l=328})=>{let r=e?.type??"image",n=E(e,r,!0),d=E(e,"image",!1,"large"),c=r==="image",a=r==="video",p=r==="audio",g=r==="model",f=r==="other"||a||p,m=(0,t.useMemo)(()=>{if(n)return t.default.createElement(t.default.Fragment,null,c?t.default.createElement(x,{width:B,height:B,uri:n,isZoomControlsEnabled:!0,showSkeletonBadge:!1}):g?t.default.createElement(A,{uri:n,width:i,height:l,isCameraControlsEnabled:!0}):f?t.default.createElement(x,{uri:d??"",width:i,height:l}):null);if(L(s))return t.default.createElement(D,{...s.utxoDetails})},[s,l,c,g,f,n,d,i]);return t.default.createElement(k,{width:i,height:l},m)});export{le as a};
//# sourceMappingURL=chunk-75PTV5IZ.js.map
