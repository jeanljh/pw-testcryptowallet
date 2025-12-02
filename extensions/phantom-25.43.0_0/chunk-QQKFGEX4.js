import{a as K,c as q,d as $}from"./chunk-W7HWP67X.js";import{b as _}from"./chunk-22S374UP.js";import{c as Q}from"./chunk-TFRCNF4E.js";import{o as f}from"./chunk-F74QCQCY.js";import{a as W,d as G}from"./chunk-GWKXKPCT.js";import{db as i,m as r}from"./chunk-FMF67RFP.js";import{$ as N,F,S as I,da as z,ha as H,v as E}from"./chunk-TQDE7426.js";import{N as M,Pa as D,gb as U,ib as O,w as B}from"./chunk-5RCV3KPE.js";import{E as V,jc as L}from"./chunk-COS4XKZ5.js";import{X as k,_ as w,jc as P,s as A,t as b,w as Co}from"./chunk-GSVPXWLR.js";import{V as n,a as yo,e as v,r as g}from"./chunk-LYTSCHVN.js";import{a as s,g as xo,i as h,n as T}from"./chunk-NSVULBS3.js";h();T();var o=xo(yo(),1);var ho=s(a=>{let{t}=g(),{voteAccountPubkey:m}=a,{showStakeAccountCreateAndDelegateStatusModal:J,closeAllModals:X}=_(),Z=s(()=>{a.onClose(),X()},"onCloseTxStatusView"),{data:R}=L(k.Solana),{data:oo}=D(),to=oo?.totalQuantityString??"";O(R,U.STAKE_FUNGIBLE);let{cluster:eo,connection:S}=M(),l=N(),io=P(w.Solana),{data:no}=B({query:{data:io}}),ro=no?.usd,e=(0,o.useMemo)(()=>l.results?.find(So=>So.voteAccountPubkey===m),[l.results,m]),ao=e?.info?.name??e?.info?.keybaseUsername??V(m),so=Q(S),[d,x]=(0,o.useState)(""),c=v(d),p=A(1+(H(S).data??0)),y=z({balance:to,cluster:eo,rentExemptionMinimum:p}),lo=s(()=>x(y.toString()),"onSetMax"),mo=c.isLessThan(p),co=c.isGreaterThan(y),uo=c.isFinite(),u=d&&mo?t("validatorViewAmountSOLRequiredToStakeInterpolated",{amount:p}):d&&co?t("validatorViewInsufficientBalance"):"",po=so.isPending,C=uo&&!u&&!po,go=s(()=>{J({lamports:b(c).toNumber(),votePubkey:m,usdPerSol:ro,onClose:Z,validatorName:ao})},"onSubmit"),fo=e?.totalApy?I(e.totalApy):null;return o.default.createElement(To,null,l.isPending?o.default.createElement(W,null):l.isError||!e?o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(Y,null,o.default.createElement(i,{size:16,color:n.colors.legacy.textDiminished,lineHeight:20},t("validatorViewErrorFetching")," ",l.error?.message??""))):o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,t("validatorViewPrimaryText")),o.default.createElement(Y,null,o.default.createElement(i,{size:16,color:n.colors.legacy.textDiminished,lineHeight:20,margin:"0 0 20px 0"},o.default.createElement(E,{i18nKey:"validatorViewDescriptionInterpolated"},"Choose how much SOL you\u2019d like to ",o.default.createElement("br",null),"stake with this validator. ",o.default.createElement(j,{href:F},"Learn more"))),o.default.createElement(K,{value:d,symbol:"SOL",alignSymbol:"right",buttonText:t("maxInputMax"),width:47,warning:!!u,onSetTarget:lo,onUserInput:x}),o.default.createElement(Ao,null,o.default.createElement(i,{color:u?n.colors.legacy.spotNegative:"transparent",size:16,textAlign:"left"},u)),o.default.createElement(ko,{onEdit:a.onClose}),o.default.createElement(q,{identifier:e.voteAccountPubkey,name:e.info?.name,keybaseUsername:e.info?.keybaseUsername,iconUrl:e.info?.iconUrl,website:e.info?.website,data:[{label:t("validatorCardEstimatedApy"),value:o.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},fo,"%")},{label:t("validatorCardCommission"),value:o.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},e.commission,"%")},{label:t("validatorCardTotalStake"),value:o.default.createElement(i,{textAlign:"right",weight:500,size:14,noWrap:!0},o.default.createElement($,null,e.activatedStake))}]})),o.default.createElement(vo,null,o.default.createElement(G,{primaryText:t("validatorViewActionButtonStake"),secondaryText:t("commandClose"),onPrimaryClicked:go,onSecondaryClicked:a.onClose,primaryTheme:C?"primary":"default",primaryDisabled:!C}))))},"StakeAmountPage"),Ro=ho,To=r.div`
  display: grid;
  grid-template-rows: 42px auto 47px;
  height: 100%;
`,Y=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=r.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${n.colors.legacy.spotBase};
  text-decoration: none;
  cursor: pointer;
`,vo=r.section`
  display: flex;
  gap: 15px;
`,Ao=r.div`
  width: 100%;
`,bo=r(i)`
  width: 100%;
  margin-top: 15px;
  > a {
    color: ${n.colors.legacy.spotBase};
    cursor: pointer;
  }
`,ko=s(a=>{let{t}=g();return o.default.createElement(bo,{size:16,color:n.colors.legacy.textDiminished,lineHeight:20,textAlign:"left"},t("validatorViewValidator")," \u2022 ",o.default.createElement(j,{onClick:a.onEdit},t("commandEdit")))},"ValidatorSectionLabel");export{ho as a,Ro as b};
//# sourceMappingURL=chunk-QQKFGEX4.js.map
