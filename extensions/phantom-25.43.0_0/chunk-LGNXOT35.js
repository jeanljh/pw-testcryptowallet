import{a as L}from"./chunk-5MAMJBN4.js";import{a as dt}from"./chunk-VHBHMKBC.js";import{b as he}from"./chunk-MELRMS75.js";import{a as ke}from"./chunk-ZJ2XKLPM.js";import{b as lt,c as mt,d as Ie}from"./chunk-6WMUBTJC.js";import{d as J}from"./chunk-365YWPIP.js";import{b as ut}from"./chunk-YEESR7EU.js";import{a as Le}from"./chunk-F74QCQCY.js";import{a as pt}from"./chunk-XVSHIHTB.js";import{a as nt,l as rt,w as de}from"./chunk-RNES5QWV.js";import{a as Re,b as Ne}from"./chunk-RJFXEHIV.js";import{l as ct,m as at}from"./chunk-YLX2CXTY.js";import{b as ue}from"./chunk-GWKXKPCT.js";import{db as V,m as d,va as it}from"./chunk-FMF67RFP.js";import{a as st}from"./chunk-EVXXECVZ.js";import{a as pe}from"./chunk-X5YMBRTT.js";import{$a as He,E as Qe,Xa as et,Ya as ve,Za as tt,i as xe,nc as ot,s as Je,v as Te}from"./chunk-COS4XKZ5.js";import{M as Z,Ob as Xe,Pb as j,T as qe,U as Ke,V as Ye,Vc as Ze,X as P,x as Ve}from"./chunk-GSVPXWLR.js";import{Ba as F,V as N,a as re,r as H}from"./chunk-LYTSCHVN.js";import{a as n,g as ne,i as m,n as f}from"./chunk-NSVULBS3.js";m();f();var Pt={existingAccounts:{data:[],isFetched:!1,isError:!1},hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{},onConnectHardwareAccounts:n(e=>Promise.resolve(),"onConnectHardwareAccounts"),onConnectHardwareDone:n(()=>{},"onConnectHardwareDone")},E=ot((e,o)=>({...Pt,pushStep:n(t=>{let r=o().hardwareStepStack;e({hardwareStepStack:r.concat(t)})},"pushStep"),popStep:n(()=>{let r=o().hardwareStepStack.length-1;if((o().hardwareStepSubStack[r]??[]).length)return e(xe(i=>{i.hardwareStepSubStack[r]=i.hardwareStepSubStack[r].slice(0,-1)}));e(xe(i=>{i.hardwareStepStack=i.hardwareStepStack.slice(0,-1)}))},"popStep"),pushSubStep:n(t=>{let c=o().hardwareStepStack.length-1,i=o().hardwareStepSubStack[c]??[];e(xe(S=>{S.hardwareStepSubStack[c]=i.concat([t])}))},"pushSubStep"),currentStep:n(()=>{let t=o().hardwareStepStack,r=o().hardwareStepSubStack,c=t.length>0?t.length-1:t.length;return r[c]?.length?Le(r[c]):Le(t)},"currentStep"),setExistingAccounts:n(t=>{e({existingAccounts:t})},"setExistingAccounts"),setSelectedChains:n((t,r)=>{e({selectedChains:t,selectedChainsMap:r})},"setSelectedChains"),setDecrementChainImportStep:n(()=>{let t=o().chainImportStep;e({chainImportStep:t-1})},"setDecrementChainImportStep"),setIncrementChainImportStep:n(()=>{let t=o().chainImportStep;e({chainImportStep:t+1})},"setIncrementChainImportStep"),setDerivedAccountGroups:n(t=>{e({derivedAccountGroups:t})},"setDerivedAccountGroups"),setDiscoveredAccounts:n((t,r)=>{e({discoveredAccounts:t,activeAccountsFound:r})},"setDiscoveredAccounts"),selectAccount:n(t=>{let c={...o().selectedAccounts};c[t]=!0,e({selectedAccounts:c})},"selectAccount"),deselectAccount:n(t=>{let c={...o().selectedAccounts};delete c[t],e({selectedAccounts:c})},"deselectAccount"),setSelectedAccounts:n(t=>{e({selectedAccounts:t})},"setSelectedAccounts"),setOnConnectHardwareAccounts:n(t=>{e({onConnectHardwareAccounts:t})},"setOnConnectHardwareAccounts"),setOnConnectHardwareDone:n(t=>{e({onConnectHardwareDone:t})},"setOnConnectHardwareDone")}));m();f();m();f();m();f();var ft=d.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  width: ${420}px;
  min-height: ${480}px;
  position: relative;
  overflow: hidden;
  background-color: ${N.colors.legacy.areaBase};
  border: 1px solid ${N.colors.legacy.borderBase};
  border-radius: 16px;
`;var bo=d(ft)`
  display: flex;
  flex-direction: column;
`,xo=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
`,Q=d.div`
  padding-top: 44px;
`,W=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  overflow: auto;
`;m();f();var k=ne(re(),1);m();f();var s=ne(re(),1);m();f();var I=ne(re(),1);m();f();var z=ne(re(),1);var De=n(()=>{let{t:e}=H(),{discoveredAccounts:o,selectedAccounts:t,onConnectHardwareAccounts:r,onConnectHardwareDone:c}=E(),{mutateAsync:i}=et(),[S,y]=(0,z.useState)(!1),C=(0,z.useMemo)(()=>o.filter(h=>!!t[h.discoveryIdentifier]),[o,t]);return(0,z.useEffect)(()=>{if(C.length){let h=[],a=new Set;for(let l of C){let{accounts:w,seedIndex:v,accountIndex:x}=l,M=[],D=[];for(let b of w)qe(b.derivationPathType)?(D.push({pathType:b.derivationPathType,value:b.publicKey}),(!("amount"in b)||parseFloat(b.amount)!==0)&&a.add(b.chainType)):(Ke(b.derivationPathType)||Ye(b.derivationPathType))&&M.push({pathType:b.derivationPathType,value:b.address});h.push({derivationIndex:v,addresses:M,publicKeys:D,accountIndex:x})}r({accounts:h}).then(()=>{a.size>0&&i({addressTypes:Array.from(a)})}).finally(()=>y(!0))}else y(!0)},[C,r,i]),z.default.createElement(W,null,z.default.createElement(Q,null,z.default.createElement(J,{icon:z.default.createElement(L,{type:"success"}),primaryText:e("connectHardwareAccountsAddedInterpolated",{numOfAccounts:C.length}),headerStyle:"large",secondaryText:e("connectHardwareFinishSecondaryText")})),z.default.createElement(F,{onClick:c,background:"spot",disabled:!S},e("pastParticipleDone")))},"ConnectHardwareImportConfirmation");m();f();var G=ne(re(),1);m();f();m();f();var ht=n((e,o=!1)=>{let t=ke.duration(ke().diff(ke(e))),r=[[t.years(),"y"],[t.months(),"mo"],[t.days(),"d"],[t.hours(),"h"],[t.minutes(),"m"],[t.seconds(),"s"],[t.milliseconds(),"ms"]].find(S=>S[0]!==0);if(!r)return"";let[c,i]=r;return o&&(i==="ms"||i==="s")?"< 1m":i==="ms"?"now":i==="s"?c<15?"now":"< 1m":`${c}${i}`},"formatTimestampFromNow");var A=ne(re(),1);var Et=n((e,o,t)=>{switch(o){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:t});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:t})}},"getAccountName"),Mt=n(({account:e})=>{let{t:o}=H();return A.default.createElement(zt,null,A.default.createElement(Ft,null,A.default.createElement(pe,{networkID:e.chain.id,size:40,borderColor:"elementBase"})),A.default.createElement(Gt,null,A.default.createElement(_t,null,A.default.createElement(ut,{networkID:e.chain.id,walletAddress:e.address},A.default.createElement(Be,null,e.chain.name)),A.default.createElement(Be,null,Qe(e.address,4))),A.default.createElement(Oe,null,"amount"in e&&"chain"in e?A.default.createElement(gt,null,st(e.amount)," ",e.chain.symbol):null,"amount"in e&&e.lastActivityTimestamp?A.default.createElement(gt,null,o("onboardingImportAccountsLastActive",{formattedTimestamp:ht(e.lastActivityTimestamp*1e3,!0)})):null)))},"DiscoveredAccountCard"),At=A.default.memo(({accountType:e,accounts:o,checked:t,accountIndex:r,onPress:c})=>{let{t:i}=H(),S=r+1;return A.default.createElement(St,null,A.default.createElement($t,null,A.default.createElement(Be,null,Et(i,e,S)),A.default.createElement(he,{checked:t,onChange:c,"data-testid":"account-select-address-row-checkbox"})),o.map((y,C)=>A.default.createElement(Mt,{key:`${y.address}-${C}`,account:y})))}),en=A.default.memo(({totalAccounts:e,selectedAccounts:o,onPress:t})=>{let{t:r}=H();return A.default.createElement(St,null,A.default.createElement(Wt,null,A.default.createElement(Be,null,r("onboardingSelectAccountsNoOfAccountsSelected",{numOfAccounts:o}))," ",A.default.createElement(jt,null,r("onboardingSelectAccountSelectAllText")," ",A.default.createElement(he,{checked:o===e,onChange:t,"data-testid":"account-select-all-checkbox"}))))}),St=d.div`
  margin-bottom: 24px;
  width: 100%;
`,Ft=d.div`
  flex-shrink: 0;
  margin-right: 10px;
`,Gt=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Oe=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,_t=d(Oe)`
  margin-bottom: 2px;
`,Wt=d(Oe)`
  background: ${N.colors.legacy.elementBase};
  margin-bottom: 1px;
  padding: 12px 10px 12px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,jt=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,$t=d(Oe)`
  background: ${N.colors.legacy.elementBase};
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,zt=d.div`
  background: ${N.colors.legacy.elementBase};
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,Be=d(V).attrs({size:16,lineHeight:19,weight:600})``,gt=d(V).attrs({size:14,lineHeight:17,weight:400,color:N.colors.legacy.textDiminished})``;var Ct=n(({activeAccounts:e})=>{let{t:o}=H(),{selectedAccounts:t,selectAccount:r,deselectAccount:c,pushSubStep:i}=E(),S=(0,G.useMemo)(()=>Object.values(t).filter(h=>!!h).length===0,[t]),y=(0,G.useCallback)(()=>{i(G.default.createElement(De,{preventBack:!0}))},[i]);return G.default.createElement(W,null,G.default.createElement("div",{style:{marginBottom:15}},G.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},G.default.createElement(V,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},o("connectHardwareSelectAccounts")),G.default.createElement(Ut,{wordBreak:"break-word",size:18,lineHeight:22,color:N.colors.legacy.textDiminished},o("connectHardwareChooseAccountsToConnect"))),G.default.createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},e.map(({accounts:C,discoveryIdentifier:h,accountIndex:a})=>{let _=!!t[h];return G.default.createElement(At,{key:h,accountType:"ledger",accounts:C,accountIndex:a,checked:_,onPress:n(()=>{_?c(h):r(h)},"onPress")})}))),G.default.createElement(F,{onClick:y,background:"spot",disabled:S},o("commandContinue")))},"ConnectHardwareSelectAccounts"),Ut=d(V)`
  margin-top: 15px;
`;var wt=n(()=>{let{t:e}=H(),{discoveredAccounts:o,activeAccountsFound:t,setSelectedAccounts:r,pushSubStep:c}=E(),i=(0,I.useMemo)(()=>{let C;if(t){let h=o.filter(a=>a.status==="undiscovered"||a.isSelectedByDefault);C=e(h.length===1?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:h.length})}else C=e("connectHardwareFoundSomeAccounts");return C},[t,e,o]),S=(0,I.useCallback)(()=>{c(I.default.createElement(Ct,{activeAccounts:o}))},[c,o]),y=(0,I.useCallback)(()=>{c(I.default.createElement(De,{preventBack:!0}))},[c]);return(0,I.useEffect)(()=>{let C=o.reduce((h,a,_)=>((a.status==="discovered"&&a.isSelectedByDefault||_===0)&&(h[a.discoveryIdentifier]=!0),h),{});r(C)},[o,r,t,e]),I.default.createElement(W,null,I.default.createElement(Vt,null,I.default.createElement(J,{icon:I.default.createElement(L,{type:"success"}),primaryText:e("connectHardwareConnectAccounts"),headerStyle:"large",secondaryText:i})),I.default.createElement(qt,{onClick:S,theme:"default"},e("connectHardwareSelectAccounts")),I.default.createElement(F,{onClick:y,background:"spot"},e("commandContinue")))},"ConnectHardwareImportAccounts"),Vt=d(Q)`
  margin-bottom: 35px;
`,qt=d(F)`
  margin-bottom: 10px;
`;var Kt=19,Yt=n(e=>{let o=new Set;for(let t of e)for(let{address:r}of t.addresses)o.add(r);return o},"getExistingAddressesSet"),ge=n(()=>{let{chainImportStep:e,setIncrementChainImportStep:o,selectedChains:t,selectedChainsMap:r,pushStep:c,pushSubStep:i,setDiscoveredAccounts:S,setDerivedAccountGroups:y,derivedAccountGroups:C}=E(),h=(0,s.useRef)(C),{t:a,i18n:_}=H(),l=e-1,w=t[l],{data:v=[],isFetched:x,isError:M}=E(u=>u.existingAccounts),[D,b]=(0,s.useState)(!1),B=(0,s.useMemo)(()=>{let u=[],g=r.get(w)||{};for(let[U,ee]of Object.entries(g))ee&&u.push(U);return[u[0]]},[w,r]),{chainNameTextOr:R,chainNameTextAnd:ce}=(0,s.useMemo)(()=>{let u=B.map(ee=>j.getChainName(de.get(ee).ledgerAppOverride??ee)),g=new Intl.ListFormat(_.resolvedLanguage,{style:"long",type:"disjunction"}),U=new Intl.ListFormat(_.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:g.format(u),chainNameTextAnd:U.format(u)}},[B,_]),Ae=(0,s.useMemo)(()=>B.map(u=>{let g=de.get(u).ledgerAppOverride??u;return s.default.createElement(pe,{key:j.getMainnetNetworkID(de.get(g).ledgerAppOverride??g),networkID:g,size:72,borderColor:"areaBase"})}),[B]);(0,s.useEffect)(()=>{let u=E.subscribe(g=>h.current=g.derivedAccountGroups);return()=>u()},[]);let q=(0,s.useMemo)(()=>{let u=[];switch(w){case P.Solana:{u.push({pathType:Z.Bip44RootSolana});break}case P.EVM:{u.push({pathType:Z.Bip44RootEthereum});break}case P.BitcoinTaproot:case P.BitcoinNativeSegwit:case P.BitcoinNestedSegwit:case P.BitcoinLegacy:case P.Sui:break}for(let g=0;g<Kt;++g)switch(w){case P.Solana:{u.push({index:g,pathType:Z.Bip44ChangeSolana}),u.push({index:g,pathType:Z.Bip44Solana});break}case P.EVM:{u.push({index:g,pathType:Z.Bip44Ethereum}),u.push({index:g,pathType:Z.Bip44EthereumSecondary});break}case P.BitcoinTaproot:case P.BitcoinNativeSegwit:case P.BitcoinNestedSegwit:case P.BitcoinLegacy:{u.push({index:g,pathType:Z.BitcoinTaproot},{index:g,pathType:Z.BitcoinNativeSegwit});break}case P.Sui:throw new Xe("connect hardware")}return u},[w]),[Se,Ce]=(0,s.useState)(!0),{data:ae=nt}=mt(Se,!0),{data:[bt]}=Ze(["kill-ledger-xpub-derivation"]),{data:te,error:Fe,fetchStatus:xt,refetch:Ge}=lt(ae,q,!0,!bt),Tt=xt==="fetching",Pe=!ae.isConnected&&ae.status!=="reconnecting",[vt,Ht]=(0,s.useState)(!1),{data:we,refetch:_e}=Ie(vt,!0);(0,s.useEffect)(()=>{Pe&&Ce(!1)},[Pe]),(0,s.useEffect)(()=>{we?.type==="granted"&&(Ce(!0),Ht(!1))},[we]);let We=tt(),je=(0,s.useCallback)(async()=>{if(te&&Object.keys(te).length){let u=[...h.current],g=0;for(let U of Object.values(te)){let le={accounts:{...(u[g]??{accounts:{}}).accounts},derivationIndex:q[g].index},ye=j.getChainIDs(U.addressType).filter(be=>We.includes(be));for(let be of ye){let me=j.getNetworkIDs(be);for(let ie of me)B.includes(ie)&&(le.accounts[`${ie}-${U.address}`]={chainType:U.addressType,chainId:ie,address:U.address,publicKey:U.publicKey,pathParams:q[g]})}u[g]=le,g++}if(y(u),x&&t.length===e){b(!0);let U=Yt(v),ee=u.reduce((p,O)=>{let fe=!1;for(let ze of Object.values(O.accounts))fe=fe||U.has(ze.address);return fe||p.push(O),p},[]),le=[],ye=[];for(let p=0;p<ee.length;p+=Ne.extension){let O=ee.slice(p,p+Ne.extension).map(fe=>Object.entries(fe.accounts).reduce((Ue,[Bt,Ot])=>(Ue[Bt]={account:Ot},Ue),{}));ye.push(O)}for(let p of ye)le.push(Re(p));let me=(await Promise.all(le)).flat().map(p=>{switch(p.status){case"discovered":return{...p,accounts:p.accounts.filter(O=>O.hasAccountActivity||Te(O.derivationPathType))};case"undiscovered":return{...p,accounts:p.accounts.filter(O=>Te(O.derivationPathType))}}}).filter(p=>p.accounts.length>0).map(p=>{let O=Ve();return{...p,discoveryIdentifier:O}}),ie=me.filter(p=>p.status==="undiscovered"||p.isSelectedByDefault),kt=me.filter(p=>!(p.status==="undiscovered"||p.isSelectedByDefault)).slice(0,2),$e=ie.length>0,It=v.filter(p=>p.type===Je.Ledger).length,Dt=($e?[...ie,...kt]:me.filter(p=>!p.accounts.some(O=>!Te(O.derivationPathType))).slice(0,3)).map((p,O)=>({...p,accountIndex:It+O}));S(Dt,$e),c(s.default.createElement(wt,{preventBack:!0}))}}},[te,y,x,t.length,e,q,We,B,v,S,c]);(0,s.useEffect)(()=>{te&&Object.keys(te).length===q.length&&(je(),t.length!==e&&(o(),i(s.default.createElement(ge,{preventBack:!0}))))},[te,q,c,i,e,t,je,o]);let K,Y,X,oe,se=n(()=>{},"onClick");return M?(K=s.default.createElement(L,{type:"failure"}),Y=a("connectHardwareErrorLedgerGeneric"),X=a("connectHardwareErrorLedgerPhantomLocked"),se=n(async()=>{let u=await ct();u.id!==void 0&&at(u.id)},"onClick"),oe=a("commandClose")):we&&we.type!=="granted"?(K=s.default.createElement(L,{type:"warning"}),Y=a("connectHardwarePermissionDeniedPrimary"),X=a("connectHardwarePermissionDeniedSecondary"),oe=a("homeErrorButtonText"),se=_e):Pe?(K=s.default.createElement(L,{type:"warning"}),Y=a("connectHardwarePermissionUnableToConnect"),X=a("connectHardwarePermissionUnableToConnectDescription"),oe=a("commandConnect"),se=_e):Fe instanceof rt?(K=s.default.createElement(L,{type:"failure"}),Y=a("connectHardwareErrorLedgerLocked"),X=a("connectHardwareErrorLedgerLockedDescription"),oe=a("homeErrorButtonText"),se=Ge):Fe?(K=s.default.createElement(L,{type:"failure"}),Y=a("connectHardwareErrorLedgerGeneric"),X=a("connectHardwareErrorLedgerGenericDescription"),oe=a("homeErrorButtonText"),se=Ge):ae.status=="reconnecting"?(K=s.default.createElement(L,{defaultIcon:s.default.createElement(ue,null),type:"default"}),Y=a("connectHardwareConnecting"),X=a("connectHardwareConnectingDescription")):D?(K=s.default.createElement(L,{defaultIcon:s.default.createElement(ue,null),type:"default"}),Y=a("connectHardwareDiscoveringAccounts"),X=a("connectHardwareDiscoveringAccountsDescription")):Tt?(K=s.default.createElement(L,{defaultIcon:s.default.createElement(ue,null),type:"default"}),Y=a("connectHardwareConnectingAccounts"),X=a("connectHardwareFindingAccountsWithActivity",{chainName:ce})):(K=s.default.createElement(Zt,null,Ae),Y=a("connectHardwareMobileOpenAppSingleChain",{chainName:R}),X=a("connectHardwareOpenAppDescription")),s.default.createElement(W,null,s.default.createElement(Q,null,s.default.createElement(J,{icon:K,primaryText:Y,headerStyle:"large",secondaryText:X})),oe?s.default.createElement(F,{onClick:se,background:"spot"},oe):s.default.createElement(Xt,null,s.default.createElement(V,{color:N.colors.legacy.textDiminished,size:14},a("connectHardwareAccountsStepOfSteps",{stepNum:e,totalSteps:t.length}))))},"ConnectHardwareOpenApp"),Xt=d.div`
  align-self: center;
  background-color: ${N.colors.legacy.borderDiminished};
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,Zt=d.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: -12.5px;
  }
`;m();f();var T=ne(re(),1);var yt=n(()=>{let{t:e}=H(),{pushSubStep:o,selectedChains:t,setSelectedChains:r,selectedChainsMap:c}=E(),i=He(),S=(0,T.useMemo)(()=>i.filter(l=>de.get(l).isLedgerEnabled),[i]),y=ve(),C=(0,T.useCallback)(l=>{let w=new Map(c),v=j.getAddressTypes(l);for(let M of v){let D=c.get(M),b=D?.[l];w.set(M,{...D,[l]:!b})}let x=y.filter(M=>{let D=w.get(M)||{};return Object.values(D).reduce((B,R)=>R?++B:B,0)>0});r(x,w)},[y,r,c]),h=n(()=>{o(T.default.createElement(ge,{preventBack:!0}))},"onPressContinue");dt(()=>{let l=new Map;for(let w of y)l.set(w,{});for(let w of S){let v=j.getAddressTypes(w);for(let x of v){let M=l.get(x);l.set(x,{...M,[w]:!1})}}r(t,l)},y.length>0&&S.length>0);let a=(0,T.useMemo)(()=>S.map(l=>{let w=j.getAddressTypes(l),v=!1;for(let x of w)v=c.get(x)?.[l]||v;return T.default.createElement(Jt,{key:l,icon:T.default.createElement(pe,{networkID:l,size:40}),networkID:l,onPressChain:C,isChecked:v})}),[S,c,C]),_=(0,T.useMemo)(()=>{let l=0;for(let w of c.values())l+=Object.values(w).reduce((v,x)=>x?++v:v,0);return l===0},[c]);return T.default.createElement(W,null,T.default.createElement(V,{weight:500,size:28,lineHeight:34},e("connectHardwareSelectChains")),T.default.createElement(eo,null,a),T.default.createElement(F,{onClick:h,background:"spot",disabled:_},e("commandContinue")))},"ConnectHardwareSelectChains"),Jt=n(({networkID:e,icon:o,onPressChain:t,isChecked:r})=>T.default.createElement(Qt,{onClick:n(()=>{t(e)},"onClickCheckbox")},T.default.createElement(to,null,T.default.createElement(Rt,null,o),T.default.createElement(V,{size:16,weight:600},j.getNetworkName(e))),T.default.createElement(he,{checked:r})),"SelectChainRow"),Qt=d.div`
  align-items: center;
  background-color: ${N.colors.legacy.elementBase};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  > span {
    margin-right: 0px;
  }
`,Rt=d.div`
  margin-right: 12px;
`,eo=d.div`
  margin-top: 20px;
`,to=d.div`
  display: flex;
  align-items: center;
`;var oo=n(()=>{let{t:e}=H(),{pushStep:o,setSelectedChains:t}=E(),r=He(),c=ve(),{data:i,isFetching:S,refetch:y}=Ie(!0,!0),{buttonDisabled:C,defaultIcon:h,primaryText:a,secondaryText:_,buttonText:l,iconType:w,onClick:v}=(0,k.useMemo)(()=>{let x=!1,M=k.default.createElement(ue,null),D,b,B,R="default",ce=pt;if(S)D=e("connectHardwareSearching"),b=e("connectHardwareMakeSureConnected"),B=e("commandContinue"),x=!0;else if(i?.type==="granted"){let Ae=i.transport.deviceModel?.productName??"Ledger";R="success",D=e("connectHardwarePairSuccessPrimary",{productName:Ae}),b=e("connectHardwarePairSuccessSecondary",{productName:Ae}),B=e("commandContinue"),x=!1,ce=n(()=>{if(c.length===1){let q=new Map;q.set(c[0],{});for(let Se of r){let Ce=j.getAddressTypes(Se);for(let ae of Ce)q.set(ae,{[Se]:!0})}t(c,q),o(k.default.createElement(ge,{preventBack:!0}))}else o(k.default.createElement(yt,{onBackCallback:()=>{t([],new Map)}}))},"onClick")}else i?.type==="denied"?(R="failure",D=e("connectHardwarePermissionDeniedPrimary"),b=e("connectHardwarePermissionDeniedSecondary"),B=e("commandTryAgain"),x=!1,ce=y):(!i||i.type==="unable-to-connect")&&(R="failure",D=e("connectHardwarePermissionUnableToConnect"),b=e("connectHardwareWaitingForApplicationSecondaryText"),B=e("commandTryAgain"),x=!1,ce=y);return{buttonDisabled:x,defaultIcon:M,primaryText:D,secondaryText:b,buttonText:B,iconType:R,onClick:ce}},[r,c,i,o,y,S,t,e]);return k.default.createElement(W,null,k.default.createElement(Q,null,k.default.createElement(J,{icon:k.default.createElement(L,{defaultIcon:h,type:w}),primaryText:a,headerStyle:"large",secondaryText:_})),k.default.createElement(F,{onClick:v,background:"spot",disabled:C},l))},"ConnectHardwareSearchForWallet"),Lr=n(()=>{let{t:e}=H(),{pushSubStep:o}=E(),t=n(()=>o(k.default.createElement(oo,null)),"onPressConnect");return k.default.createElement(W,null,k.default.createElement(Q,null,k.default.createElement(J,{icon:k.default.createElement(it,null),primaryText:e("connectHardwareLedger"),headerStyle:"large",secondaryText:e("connectHardwareStartConnection"),animateText:!0})),k.default.createElement(F,{onClick:t,background:"spot"},e("commandConnect")))},"ConnectHardware");m();f();var _r=n(e=>[...Array(e).keys()],"range");export{_r as a,E as b,ft as c,bo as d,xo as e,At as f,en as g,Lr as h};
//# sourceMappingURL=chunk-LGNXOT35.js.map
