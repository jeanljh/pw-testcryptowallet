import{a as L,b as N,d as F,e as G,h as I}from"./chunk-LGNXOT35.js";import{a as w}from"./chunk-RJ5IBJ7D.js";import"./chunk-5MAMJBN4.js";import{a as T}from"./chunk-VHBHMKBC.js";import"./chunk-U6PL3II4.js";import"./chunk-RIRK4I4P.js";import"./chunk-MELRMS75.js";import"./chunk-ZJ2XKLPM.js";import"./chunk-FDC2Y3EW.js";import"./chunk-53EKYYOD.js";import"./chunk-TJGCGL4J.js";import"./chunk-W7HWP67X.js";import"./chunk-BO5X4B7T.js";import"./chunk-PRM4QCVC.js";import"./chunk-22S374UP.js";import"./chunk-YCV6CTZK.js";import{a as D}from"./chunk-P3VWKB2X.js";import"./chunk-TCCWLNBV.js";import"./chunk-TFRCNF4E.js";import"./chunk-6WMUBTJC.js";import"./chunk-365YWPIP.js";import"./chunk-YEESR7EU.js";import"./chunk-T5IRHW4Y.js";import"./chunk-I3QHDDEG.js";import"./chunk-PQNSQOE2.js";import{e as _}from"./chunk-F74QCQCY.js";import"./chunk-XVSHIHTB.js";import{b as h}from"./chunk-TQE77AJX.js";import"./chunk-UFN6RPHX.js";import"./chunk-6BTGDHLT.js";import"./chunk-XSN3P2VT.js";import"./chunk-RNES5QWV.js";import"./chunk-5JE2EH74.js";import"./chunk-RLKSRZDI.js";import"./chunk-PYLKOKDS.js";import"./chunk-RJFXEHIV.js";import"./chunk-W5CO46MJ.js";import"./chunk-IWYOR6BJ.js";import"./chunk-5HTF5CEZ.js";import"./chunk-YLX2CXTY.js";import"./chunk-VGIRFM65.js";import"./chunk-E5SPQ6GD.js";import"./chunk-RCXDI445.js";import"./chunk-6DKZGOGT.js";import"./chunk-GWKXKPCT.js";import{m as s,v as O}from"./chunk-FMF67RFP.js";import{a as S}from"./chunk-5SS664LD.js";import"./chunk-44NW6BSR.js";import"./chunk-CHXPHGEW.js";import"./chunk-3JCRVFH6.js";import"./chunk-UHG6ISVN.js";import"./chunk-EVXXECVZ.js";import"./chunk-TQDE7426.js";import"./chunk-5RCV3KPE.js";import"./chunk-X5YMBRTT.js";import"./chunk-34JK5YK5.js";import"./chunk-CM4ZFCT2.js";import"./chunk-RKMQYZSN.js";import"./chunk-MN377ENM.js";import"./chunk-6XVVS35Q.js";import{hb as B,nb as E}from"./chunk-COS4XKZ5.js";import"./chunk-IJLITZAC.js";import"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as e,a as v,oa as P,sa as $}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as u,g as H,i as n,n as i}from"./chunk-NSVULBS3.js";n();i();var t=H(v(),1);n();i();var a=H(v(),1);n();i();var M=s(h)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${o=>o.$isExpanded?e.colors.legacy.black:e.colors.legacy.elementAccent} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o=>o.$isExpanded?"white":e.colors.legacy.textDiminished};
    transition: fill 200ms ease;
    position: relative;
    ${o=>o.top?`top: ${o.top}px;`:""}
    ${o=>o.right?`right: ${o.right}px;`:""}
  }
`;var q=s(D).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.areaBase};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderDiminished};
  height: 46px;
  opacity: ${o=>o.opacity??"1"};
`,z=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,W=s.div`
  width: 24px;
  height: 24px;
`,X=u(({onBackClick:o,totalSteps:c,currentStepIndex:l,isHidden:m,showBackButtonOnFirstStep:r,showBackButton:g=!0})=>a.default.createElement(q,{opacity:m?0:1},g&&(r||l!==0)?a.default.createElement(M,{right:1,onClick:o},a.default.createElement(O,null)):a.default.createElement(W,null),a.default.createElement(z,null,L(c).map(p=>{let d=p<=l?e.colors.legacy.spotBase:e.colors.legacy.elementAccent;return a.default.createElement(h,{key:p,diameter:12,color:d})})),a.default.createElement(W,null)),"StepHeader");n();i();var Q=u(()=>{let{mutateAsync:o}=E(),{hardwareStepStack:c,pushStep:l,popStep:m,currentStep:r,setOnConnectHardwareAccounts:g,setOnConnectHardwareDone:k,setExistingAccounts:p}=N(),{data:d=[],isFetched:y,isError:A}=B(),C=_(c,(f,V)=>f?.length===V.length),j=c.length>(C??[]).length,b=C?.length===0,J={initial:{x:b?0:j?150:-150,opacity:b?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},U=(0,t.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),m())},[r,m]);return T(()=>{g(async f=>{await o(f),await S.set(w,!await S.get(w))}),k(()=>self.close()),l(t.default.createElement(I,null))},c.length===0),(0,t.useEffect)(()=>{p({data:d,isFetched:y,isError:A})},[d,y,A,p]),t.default.createElement(F,null,t.default.createElement(X,{totalSteps:3,onBackClick:U,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),t.default.createElement(P,{mode:"wait"},t.default.createElement($.div,{style:{display:"flex",flexGrow:1},key:`${c.length}_${C?.length}`,...J},t.default.createElement(G,null,r()))))},"SettingsConnectHardware"),Oo=Q;export{Oo as default};
//# sourceMappingURL=SettingsConnectHardware-ERDUY6GF.js.map
