import{a as j}from"./chunk-LTLGYXQT.js";import{a as K}from"./chunk-LFYXA4SS.js";import{a as $}from"./chunk-KOMFAEWT.js";import{a as U}from"./chunk-GHQF5W3Z.js";import{b as Z}from"./chunk-CAL4LHLS.js";import{b as F}from"./chunk-FYGLBDJG.js";import"./chunk-27LTROJ7.js";import{Ia as X}from"./chunk-53EKYYOD.js";import{l as G}from"./chunk-TJGCGL4J.js";import"./chunk-W7HWP67X.js";import"./chunk-BO5X4B7T.js";import"./chunk-PRM4QCVC.js";import"./chunk-22S374UP.js";import"./chunk-YCV6CTZK.js";import{a as T}from"./chunk-P3VWKB2X.js";import"./chunk-TCCWLNBV.js";import"./chunk-TFRCNF4E.js";import"./chunk-6WMUBTJC.js";import"./chunk-365YWPIP.js";import"./chunk-YEESR7EU.js";import{g as Q}from"./chunk-T5IRHW4Y.js";import"./chunk-I3QHDDEG.js";import{a as B}from"./chunk-PQNSQOE2.js";import"./chunk-F74QCQCY.js";import"./chunk-XVSHIHTB.js";import"./chunk-TQE77AJX.js";import{a as O}from"./chunk-UFN6RPHX.js";import"./chunk-XSN3P2VT.js";import"./chunk-RNES5QWV.js";import"./chunk-5JE2EH74.js";import"./chunk-RLKSRZDI.js";import"./chunk-PYLKOKDS.js";import"./chunk-IWYOR6BJ.js";import"./chunk-5HTF5CEZ.js";import"./chunk-YLX2CXTY.js";import"./chunk-VGIRFM65.js";import"./chunk-E5SPQ6GD.js";import"./chunk-RCXDI445.js";import"./chunk-6DKZGOGT.js";import{c as V}from"./chunk-GWKXKPCT.js";import{C as z,db as x,m as s}from"./chunk-FMF67RFP.js";import"./chunk-44NW6BSR.js";import"./chunk-CHXPHGEW.js";import"./chunk-3JCRVFH6.js";import{T as E,_ as A,aa as _,ba as N,p as D}from"./chunk-UHG6ISVN.js";import"./chunk-EVXXECVZ.js";import"./chunk-TQDE7426.js";import"./chunk-5RCV3KPE.js";import"./chunk-X5YMBRTT.js";import"./chunk-34JK5YK5.js";import"./chunk-CM4ZFCT2.js";import"./chunk-RKMQYZSN.js";import"./chunk-MN377ENM.js";import"./chunk-6XVVS35Q.js";import{rb as v}from"./chunk-COS4XKZ5.js";import"./chunk-IJLITZAC.js";import{Ld as W}from"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{T as L,Ua as k,V as C,_a as P,a as M,r as p}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as S,g as H,i as I,n as f}from"./chunk-NSVULBS3.js";I();f();var t=H(M(),1);I();f();var o=H(M(),1);var Y=L({marginLeft:4}),R=s(T).attrs({align:"center",padding:"10px"})`
  background-color: ${C.colors.legacy.elementBase};
  border-radius: 6px;
  height: 74px;
  margin: 4px 0;
`,tt=s.div`
  display: flex;
  align-items: center;
`,et=s(B)`
  flex: 1;
  min-width: 0;
  text-align: left;
  align-items: normal;
`,ot=s(x).attrs({size:16,weight:600,lineHeight:19,noWrap:!0,maxWidth:"175px",textAlign:"left"})``,it=s(x).attrs({color:C.colors.legacy.textDiminished,size:14,lineHeight:17,noWrap:!0})`
  text-align: left;
  margin-top: 5px;
`,nt=s.div`
  width: 55px;
  min-width: 55px;
  max-width: 55px;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  aspect-ratio: 1;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,q=o.default.memo(e=>{let{t:n}=p(),{collection:i,unknownItem:m,isHidden:r,isSpam:a,onToggleHidden:d}=e,{name:c,id:g}=i,l=_(i),h=l?.chainData,b=N(i),u=A(l?.media,"image",!1,"small"),w=c||l?.name||m;return o.default.createElement(R,null,o.default.createElement(nt,null,a&&r?o.default.createElement(j,{width:32}):u?o.default.createElement(Z,{uri:u}):D(h)?o.default.createElement(K,{...h.utxoDetails}):o.default.createElement(F,{type:"image",width:42})),o.default.createElement(T,null,o.default.createElement(et,null,o.default.createElement(tt,null,o.default.createElement(ot,null,w),a?o.default.createElement(z,{className:Y,fill:C.colors.legacy.spotWarning,height:16,width:16}):null),o.default.createElement(it,null,n("collectiblesSearchNrOfItems",{nrOfItems:b})))),o.default.createElement($,{id:g,label:`${c} visible`,checked:!r,onChange:y=>{d(y.target.checked?"show":"hide")}}))});var lt=74,st=10,rt=lt+st,at=20,mt=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,ct=s.div`
  position: relative;
  width: 100%;
`,dt=S(()=>{let{handleHideModalVisibility:e}=X(),{data:n,isPending:i}=v(),{viewState:m,viewStateLoading:r}=E({account:n}),a=(0,t.useCallback)(()=>e("collectiblesVisibility"),[e]),d=(0,t.useMemo)(()=>({...m,handleCloseModal:a}),[a,m]),c=(0,t.useMemo)(()=>i||r,[i,r]);return{data:d,loading:c}},"useProps"),pt=t.default.memo(e=>{let{t:n}=p(),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{setTimeout(()=>i.current?.focus(),200)},[]),t.default.createElement(t.default.Fragment,null,t.default.createElement(ct,null,t.default.createElement(Q,{ref:i,tabIndex:0,placeholder:n("assetListSearch"),maxLength:W,onChange:e.handleSearch,value:e.searchQuery,name:"Search collectibles"})),t.default.createElement(G,null,t.default.createElement(k,null,({height:m,width:r})=>t.default.createElement(P,{style:{padding:`${at}px 0`},scrollToIndex:e.searchQuery!==e.debouncedSearchQuery?0:void 0,height:m,width:r,rowCount:e.listItems.length,rowHeight:rt,rowRenderer:a=>t.default.createElement(gt,{...a,data:e.listItems,unknownItem:n("assetListUnknownToken"),getIsHidden:e.getIsHidden,getIsSpam:e.getIsSpam,getSpamStatus:e.getSpamStatus,onToggleHidden:e.onToggleHidden})}))))}),gt=S(e=>{let{index:n,data:i,style:m,unknownItem:r,getIsHidden:a,getIsSpam:d,getSpamStatus:c,onToggleHidden:g}=e,l=i[n],h=a(l),b=d(l),u=c(l),w=(0,t.useCallback)(y=>g({item:l,status:y}),[g,l]);return t.default.createElement("div",{style:m},t.default.createElement(q,{collection:l,unknownItem:r,isHidden:h,isSpam:b,spamStatus:u,onToggleHidden:w}))},"ResultRowWrapper"),ht=S(()=>{let{data:e,loading:n}=dt(),{t:i}=p();return t.default.createElement(mt,null,n?t.default.createElement(U,null):t.default.createElement(pt,{...e}),t.default.createElement(O,null,t.default.createElement(V,{onClick:e.handleCloseModal},i("commandClose"))))},"CollectiblesVisibilityPage"),Ft=ht;export{ht as CollectiblesVisibilityPage,Ft as default};
//# sourceMappingURL=CollectiblesVisibilityPage-AYEZ7KAA.js.map
