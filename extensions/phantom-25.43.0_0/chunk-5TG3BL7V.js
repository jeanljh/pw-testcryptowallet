import{l as U,s as W}from"./chunk-EKSIBE3F.js";import{Ia as E,wa as V}from"./chunk-53EKYYOD.js";import{j as B,l as M}from"./chunk-F74QCQCY.js";import{c as O}from"./chunk-PYLKOKDS.js";import{b as y}from"./chunk-YLX2CXTY.js";import{c as N,da as H,ea as _,l as b,m as a}from"./chunk-FMF67RFP.js";import{c as i,ra as L}from"./chunk-TQDE7426.js";import{V as S,a as P}from"./chunk-LYTSCHVN.js";import{a as c,g as v,i as u,n as g}from"./chunk-NSVULBS3.js";u();g();var e=v(P());u();g();var C=v(P(),1);var j=5,T=5,d=2,F=T+2*d,I=14,J=I+2*d,K=T+2*d,Q=a.div`
  display: flex;
  justify-content: ${t=>t.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${t=>(t.maxVisible-1)*F+J}px;
`,Y=a.div`
  align-items: center;
  display: flex;
  ${t=>t.shouldShift&&b`
      transform: translateX(calc(-${K}px * ${t.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,Z=a.div`
  align-items: center;
  background-color: ${S.colors.legacy.textDiminished};
  border-radius: 95px;
  display: flex;
  height: ${j}px;
  justify-content: center;
  margin: 0 ${d}px;
  min-width: ${T}px;
  transition: all 0.3s ease-in-out;
  ${t=>t.isActive&&b`
      min-width: ${I}px;
    `}
  ${t=>t.isSmall&&b`
      min-width: 3px;
      margin: 0 ${d}px;
      height: 3px;
    `}
`,R=a.div`
  width: ${I}px;
  height: ${j}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${d}px;
  background-color: ${S.colors.legacy.spotBase};
  transition: transform 0.3s ease-in-out;
  ${t=>t.position&&b`
      transform: translateX(${t.position*K}px);
    `}
`,tt=c(({numOfItems:t,currentIndex:o,maxVisible:r=5})=>{let n=t>r?o>r-3:!1,s=n?o-(r-3):0;return C.default.createElement(Q,{shouldCenter:r>t,maxVisible:r},C.default.createElement(Y,{shouldShift:n,shiftAmount:s},Array.from({length:t}).map((D,m)=>{let f=(m===o-2||m===o+2)&&n;return C.default.createElement(Z,{key:`pagination-dot-${m}`,isActive:o===m,isSmall:f})}),C.default.createElement(R,{position:o})))},"PaginationDots"),X=tt;var et=a.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${t=>t.animate?`height: ${t.shouldCollapse?t.itemHeight+26:t.itemHeight+46}px`:""}
`,nt=a.div`
  transition: transform 0.5s ease;
  width: 100%;
`,G=a(O)``,q=a.div`
  visibility: ${t=>t.isVisible?"visible":"hidden"};
`,it=a.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,ot=a.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${t=>`translateX(${t.currentIndex*-100}%)`};
`,at=a.li`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  padding: ${t=>t.isActive?"0":t.isNext||t.isPrevious?"0 6px":"0"};
  height: ${t=>t.isActive?t.itemHeight:.9*t.itemHeight}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
`,bt=c(({items:t,onIndexChange:o,itemHeight:r})=>{let[n,s]=(0,e.useState)(0),D=(0,e.useCallback)(()=>{s(l=>l+1)},[]),m=(0,e.useCallback)(()=>{s(l=>l-1)},[]),f=n<t.length-1,x=n>0;(0,e.useEffect)(()=>{!t.length||n>t.length-1||o(n)},[t,o,n]),(0,e.useEffect)(()=>{t.length>0&&n>=t.length&&s(t.length-1)},[n,t]);let k=t.length<=1;return e.default.createElement(et,{animate:t.length>0,shouldCollapse:k,itemHeight:r},e.default.createElement(nt,null,e.default.createElement(ot,{currentIndex:n},t.map((l,h)=>e.default.createElement(at,{key:l.key,isActive:n===h,isNext:n+1===h,isPrevious:n-1===h,itemHeight:r},l.node))),!k&&e.default.createElement(it,null,e.default.createElement(q,{isVisible:x},e.default.createElement(G,{onClick:m},e.default.createElement(H,null))),e.default.createElement(X,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e.default.createElement(q,{isVisible:f},e.default.createElement(G,{onClick:D},e.default.createElement(_,null))))))},"Carousel");u();g();var p=v(P(),1);u();g();var z=c(t=>{if(t===i.SettingsSecurityAndPrivacy)return W;if(t===i.SettingsCurrency)return U},"getSanityComponentMapping");var rt=p.default.lazy(()=>import("./FungibleDetailPage-Q6HHCVLI.js")),Ut=c(()=>{let{showSettingsMenu:t}=M(),{handleShowModalVisibility:o}=E(),{pushDetailView:r}=B(),n=L(),s=N();return(0,p.useCallback)((m,f)=>{let{destinationType:x,url:k,caip19:l,tokenCategoryId:h,tokenCategoryName:$}=f;switch(x){case i.ExternalLink:y({url:k});break;case i.Buy:o("onramp");break;case i.Collectibles:s("/",{state:{defaultTab:"collectibles",nonce:Date.now()}});break;case i.Explore:s("/explore");break;case i.TokenCategory:{if(!h||!$)return;r(p.default.createElement(V,{category:{id:h,name:$}}));break}case i.Swapper:s("/swap");break;case i.SettingsClaimUsername:o("quickClaimUsername");break;case i.SettingsImportSeedPhrase:y({url:"onboarding.html?append=true"});break;case i.ConnectHardwareWallet:y({url:"connect_hardware.html"});break;case i.ConvertToJito:o(n?"mintPSOLUKInfo":"mintPSOLInfo",{presentNext:!0});break;case i.Token:{if(!l)return;r(p.default.createElement(rt,{caip19:l,title:void 0,entryPoint:"actionBanner"}));break}default:{let w=z(x);if(!w)return;t(m,p.default.createElement(w,null))}}},[s,t,o,r,n])},"useDeepLink");export{Ut as a,bt as b};
//# sourceMappingURL=chunk-5TG3BL7V.js.map
