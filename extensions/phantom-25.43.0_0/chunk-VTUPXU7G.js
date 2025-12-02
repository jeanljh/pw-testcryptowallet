import{e as ye}from"./chunk-CS343FBX.js";import{a as z,c as K,d as H,e as _,f as O}from"./chunk-UV7OXNVV.js";import{a as S}from"./chunk-P3VWKB2X.js";import{a as he,b as j}from"./chunk-T5IRHW4Y.js";import{a as ie}from"./chunk-IWYOR6BJ.js";import{db as I,m as a,u as E}from"./chunk-FMF67RFP.js";import{nc as ue,oc as fe}from"./chunk-44NW6BSR.js";import{a as W}from"./chunk-X5YMBRTT.js";import{b as me}from"./chunk-CM4ZFCT2.js";import{g as ce}from"./chunk-RKMQYZSN.js";import{$a as se,$b as $,Cb as le,D as te,E as oe,Ya as L,cb as ae,ha as re,jb as de,ma as ne,oc as pe,u as ee}from"./chunk-COS4XKZ5.js";import{Ac as Z,Pb as g,kd as R,qa as J,xc as Y}from"./chunk-GSVPXWLR.js";import{Fa as T,V as M,a as v,la as b,r as x}from"./chunk-LYTSCHVN.js";import{E as G,F as Q}from"./chunk-PPQ6BNOX.js";import{a as d,g as C,i as c,n as m}from"./chunk-NSVULBS3.js";c();m();var n=C(v(),1);c();m();var r=C(v(),1);var we=d(({onChange:e,value:t,networkID:o})=>{let l=L(),i=(0,r.useMemo)(()=>{if(!o)return[];let y=g.getAddressTypes(o);return l.filter(p=>y.includes(p))},[l,o]);if(!i||i.length===0)return null;let f=i.includes(t)?t:i[0];return r.default.createElement(ke,{onChange:e,value:f},({isExpanded:y})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(De,{isActive:y},r.default.createElement(Se,{networkID:o,addressType:f},r.default.createElement(Ae,null,r.default.createElement(E,{fill:M.colors.legacy.textDiminished,width:10})))),r.default.createElement(Be,{portal:!1},r.default.createElement(_,{maxHeight:"300px"},i?.filter(p=>p!==f)?.map(p=>r.default.createElement(Fe,{key:p,value:p},r.default.createElement(Se,{networkID:o,addressType:p})))))))},"SelectAddressTypeDropdown"),Se=d(({addressType:e,networkID:t,children:o})=>!t||!e?null:r.default.createElement(S,{justify:"space-between"},r.default.createElement(S,null,r.default.createElement(W,{networkID:t,size:32}),r.default.createElement(Pe,null,J.getDisplayName(e))),o),"SelectRow"),ke=a(z)`
  width: 100%;
  position: relative;
`,Ae=a.div`
  display: inline-flex;
  line-height: 0;
`,De=a(({isActive:e,...t})=>r.default.createElement(K,{...t}))`
  padding: 8px 16px 8px 12px;

  ${Ae} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,Be=a(H)`
  z-index: 2;
  width: 100%;
`,Fe=a(O)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,Pe=a(I).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``;c();m();var s=C(v(),1);var Ne=a(z)`
  width: 100%;
  position: relative;
`,xe=a.div`
  display: inline-flex;
  line-height: 0;
`,Le=a(({isActive:e,...t})=>s.default.createElement(K,{...t}))`
  padding: 8px 16px 8px 12px;

  ${xe} {
    svg {
      transform: rotate(${e=>e.isActive?"-180deg":"0"});
      transition: transform 0.2s ease-in-out;
    }
  }
`,Me=a(H)`
  z-index: 2;
  width: 100%;
`,We=a(O)`
  padding: 8px 16px 8px 12px;
  min-height: 50px;
`,Ee=a(I).attrs({size:16,weight:400,lineHeight:19,margin:"0 0 0 8px"})``,Ie=d(({onChange:e,value:t})=>{let o=se();return s.default.createElement(Ne,{onChange:e,value:t},({isExpanded:l})=>s.default.createElement(s.default.Fragment,null,s.default.createElement(Le,{isActive:l},s.default.createElement(ge,{networkID:t},s.default.createElement(xe,null,s.default.createElement(E,{fill:M.colors.legacy.textDiminished,width:10})))),s.default.createElement(Me,{portal:!1},s.default.createElement(_,{maxHeight:"300px"},o.filter(i=>i!==t).map(i=>s.default.createElement(We,{key:i,value:i},s.default.createElement(ge,{networkID:i})))))))},"SelectChainDropdown"),ge=d(({networkID:e,children:t})=>s.default.createElement(S,{justify:"space-between"},s.default.createElement(S,null,s.default.createElement(W,{networkID:e,size:32}),s.default.createElement(Ee,null,g.getNetworkName(e))),t),"SelectRow");var Nt=d(({onClick:e,disabled:t})=>{let{t:o}=x(),l=ae();return n.default.createElement(b,{topLeft:{text:o("addAccountImportWalletPrimaryText")},bottomLeft:{text:o(l?"addAccountImportWalletSolanaSecondaryText":"addAccountImportWalletSecondaryText")},start:n.default.createElement(T,{backgroundColor:"borderBase",color:"textBase",icon:"Download",shape:"circle",size:32}),onClick:e,disabled:t})},"ImportPrivateKeyButton"),Lt=d(({control:e,getValues:t,register:o,setValue:l,trigger:i,errors:f,nameValidations:y,privateKey:p,privateKeyValidations:F,addressPreview:k})=>{let{t:D}=x(),P=pe(A=>A.editableAccountMetadata),h=t("networkID"),U=g.getAddressTypes(h),u=L(),w=u.filter(A=>U.includes(A));return n.default.createElement(ye,null,n.default.createElement($,{name:"networkID",control:e,render:({field:{onChange:A,value:V}})=>u.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(Ie,{onChange:N=>{A(N);let ve=g.getAddressTypes(N),be=u.filter(Te=>ve.includes(Te));l("addressType",be[0]),p&&i("privateKey")},value:V})}),n.default.createElement($,{name:"addressType",control:e,render:({field:{onChange:A,value:V}})=>w.length===1?n.default.createElement(n.default.Fragment,null):n.default.createElement(we,{onChange:N=>{A(N),p&&i("privateKey")},value:V,networkID:h})}),n.default.createElement(j.WithWarning,{placeholder:D("addAccountImportAccountName"),defaultValue:P?.name,warning:!!f.name,warningMessage:f.name?.message,autoComplete:"off",maxLength:ce,...o("name",y)}),n.default.createElement(He.WithWarning,{placeholder:D("addAccountImportAccountPrivateKey"),defaultValue:"",warning:!!f.privateKey,warningMessage:f.privateKey?.message,autoComplete:"off",...o("privateKey",F)}),k?n.default.createElement(ze,{label:D("settingsWalletAddress"),pubkey:k}):null)},"ImportPrivateKeyFormInputStack"),ze=n.default.memo(({label:e,pubkey:t})=>n.default.createElement(S,{justify:"space-between",align:"center",margin:"-7px 0 0"},n.default.createElement(I,{size:16,weight:600},e),n.default.createElement(I,{size:16},oe(t,4)))),Ke=a(j).attrs({as:"textarea"})`
  height: 120px;
  text-align: start;
  resize: none;
  -webkit-text-security: disc;
  font-size: 16px;
`,He=he(Ke);c();m();var X=C(v(),1);var Ot=d(({onClick:e,disabled:t})=>{let{t:o}=x(),l=G||Q;return X.default.createElement(b,{topLeft:{text:o("addAccountHardwareWalletPrimaryText")},bottomLeft:{text:o("addAccountHardwareWalletSecondaryText")},start:X.default.createElement(T,{backgroundColor:"borderBase",color:"textBase",icon:"WalletHardware",shape:"circle",size:32}),onClick:e,disabled:t||l})},"ConnectHardwareWalletButton");c();m();var q=C(v(),1);var Gt=d(({onClick:e,disabled:t})=>{let{t:o}=x();return q.default.createElement(b,{topLeft:{text:o("addAccountImportSeedPhrasePrimaryText")},bottomLeft:{text:o("addAccountImportSeedPhraseSecondaryText")},start:q.default.createElement(T,{backgroundColor:"borderBase",color:"textBase",icon:"File",shape:"circle",size:32}),onClick:e,disabled:t})},"ImportSecretPhraseButton");c();m();var Ce=C(v(),1);var ao=d(e=>{let t=ne(),{mutateAsync:o}=le(),{mutateAsync:l}=de(),i=R();return{handleImportSeed:(0,Ce.useCallback)(async({mnemonic:y,accountMetas:p,accountName:F,offsetIndex:k=0,seedlessOnboardingType:D})=>{let P={},h=await(e==="seed"?ue(y,p,F):fe(y,p,F));if(h.forEach((u,w)=>{P[u.identifier]=ee({account:u,index:w,offsetIndex:k})}),h.length===0)throw new Error("Failed to set seed phrase");if(await l({metadataBatch:P}),await o({identifier:h[0].identifier}),e==="seedless"&&D===ie.SeedlessBackup)try{let u=new Set(h.map(w=>w.seedIdentifier));await Promise.all([...u].map(w=>t.addAuthFactor({secretIdentifier:w})))}catch{Z.captureError(new Error("Unable to add auth factor for se*dless!"),Y.Auth)}let U=h.flatMap(u=>te(u));me.capture("addSeedAccount",{data:{walletIndex:k+1,numAccounts:h.length,accountType:e,walletAddresses:U}}),re(i)},[l,o,e,i,t])}},"useImportSeed");export{ao as a,Ie as b,Nt as c,Lt as d,Ot as e,Gt as f};
//# sourceMappingURL=chunk-VTUPXU7G.js.map
