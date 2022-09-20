(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},n.parcelRequirea886=o);var i=o("aZikt"),r=o("gDkTC"),s=o("ihAua");o("5dL5p");var c=o("lwple"),u=o("czDD7"),d=o("6SQSC"),m=o("2WP7v"),p=o("1DdzG"),g=o("7OhhO"),h=o("5y3N4"),f=o("dgKOx"),y=(i=o("aZikt"),r=o("gDkTC"),o("lxqKj")),b=(c=o("lwple"),g=o("7OhhO"),o("16KRF")),E=o("HyeVU"),x=o("j1GR2"),v=(i=o("aZikt"),o("ltHDB")),k=(c=o("lwple"),o("2zUeX")),w=o("bBAGA"),T=(E=o("HyeVU"),b=o("16KRF"),o("cNv5c")),S=o("41J1p"),C=o("9jgL5"),A=o("keALh"),M=o("d9LKp"),P=(x=o("j1GR2"),o("fwZPo")),F={};t(F,"AssetDetail",(function(){return ct}),(function(e){return ct=e}));i=o("aZikt"),r=o("gDkTC");var B=o("h6IZU"),R=o("hHMPk"),H=(v=o("ltHDB"),o("6oEu9")),L=(c=o("lwple"),o("7Lj33")),D=(k=o("2zUeX"),o("cFuyE")),I=(S=o("41J1p"),w=o("bBAGA"),b=o("16KRF"),{});t(I,"RichTransactionHistoryProvider",(function(){return W}),(function(e){return W=e})),t(I,"useRichTransactionHistory",(function(){return N}),(function(e){return N=e}));i=o("aZikt");var O=o("ehJ6P"),z=o("dlVlr"),K=(H=o("6oEu9"),E=o("HyeVU"),o("jhy6c")),U=o("9R0of"),j=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const $=i.createContext({transactionHistory:{},refreshTransactionHistory:H.NOOP}),W=({children:t})=>{const[n,a]=i.useState({}),{accountClient:l}=E.useSelectedSolanaAccount(),[o,r]=i.useState(l.publicKey),[s]=e(i).useState(H.TX_HISTORY_REFRESH_INTERVAL_MS),c=o&&o!==l.publicKey?l.publicKey:void 0,{data:u,error:d}=K.useQuery({enabled:!0,queryKey:["rich-transaction-history-api",o,c],refetchInterval:s,queryFn:()=>j(void 0,void 0,void 0,(function*(){const{results:e}=yield z.getRichTransactionHistory({publicKey:o.toString(),observer:null==c?void 0:c.toString()});return e}))});return i.useEffect((()=>{const e=O.default(n,(e=>{e[o.toString()]=d?[]:u}));a(e)}),[u,d]),i.useEffect((()=>{r(l.publicKey)}),[l.publicKey]),e(i).createElement($.Provider,{value:{transactionHistory:n,refreshTransactionHistory:e=>r(e)}},t)},N=e=>{const t=i.useContext($);if(!t)throw new Error("Missing transaction history context");const{accountClient:n}=E.useSelectedSolanaAccount(),a=U.usePendingTransactions(n.publicKey);return{transactionInfos:i.useMemo((()=>{var l;const o=null!==(l=t.transactionHistory[e.toString()])&&void 0!==l?l:[];if(e.toString()!==n.publicKey.toString())return{confirmed:o,pending:[]};const i=[],r=o.map((e=>e.signature));for(const e of a)r.includes(e.signature)||i.push(e);return{pending:i,confirmed:o}}),[t.transactionHistory,e,n.publicKey,a]),isLoadingInitial:void 0===t.transactionHistory[e.toString()],refreshTransactionHistory:t.refreshTransactionHistory}};var V={};t(V,"TransactionHistoryProvider",(function(){return _}),(function(e){return _=e})),t(V,"useTransactionHistory",(function(){return Q}),(function(e){return Q=e}));O=o("ehJ6P"),i=o("aZikt"),H=o("6oEu9"),U=o("9R0of");var Z=o("4o0lv"),G=(E=o("HyeVU"),function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))});const Y=i.createContext({transactionHistory:{},refreshTransactionHistory:H.NOOP}),_=({children:t})=>{const[n]=Z.useIncrementingNonce(H.TX_HISTORY_REFRESH_INTERVAL_MS),[a,l]=i.useState({}),{accountClient:o}=E.useSelectedSolanaAccount(),[r,s]=i.useState(o.publicKey),c=i.useCallback((e=>G(void 0,void 0,void 0,(function*(){const t=yield o.getTransactionHistoryAsync(e,{limit:H.TX_HISTORY_PAGINATION_COUNT}),n=O.default(a,(n=>{n[e.toString()]=t}));l(n)}))),[o,a]),u=i.useCallback((e=>G(void 0,void 0,void 0,(function*(){var t;const n=null!==(t=a[e.toString()])&&void 0!==t?t:[];let i;if(n.length>0){const{signature:e}=n[0];i=e}const r=yield o.getTransactionHistoryAsync(e,{until:i,limit:H.TX_HISTORY_PAGINATION_COUNT}),s=O.default(a,(t=>{t[e.toString()]=[...r,...t[e.toString()]]}));l(s)}))),[o,a]),d=i.useCallback((e=>G(void 0,void 0,void 0,(function*(){a[e.toString()]?u(e):c(e),s(e)}))),[c,u,a]);return i.useEffect((()=>{0!==n&&d(r)}),[n]),i.useEffect((()=>{s(o.publicKey),d(o.publicKey)}),[o.publicKey]),e(i).createElement(Y.Provider,{value:{transactionHistory:a,refreshTransactionHistory:d}},t)},Q=e=>{const t=i.useContext(Y);if(!t)throw new Error("Missing transaction history context");const{accountClient:n}=E.useSelectedSolanaAccount(),a=U.usePendingTransactions(n.publicKey);return{transactionInfos:i.useMemo((()=>{var l;const o=null!==(l=t.transactionHistory[e.toString()])&&void 0!==l?l:[];if(e.toString()!==n.publicKey.toString())return o;const i=[],r=o.map((e=>e.signature));for(const e of a)r.includes(e.signature)||i.push(e);return[...i,...o]}),[t.transactionHistory,e,n.publicKey,a]),isLoadingInitial:void 0===t.transactionHistory[e.toString()],refreshTransactionHistory:t.refreshTransactionHistory}};E=o("HyeVU");var J=o("eW1cp"),X=(x=o("j1GR2"),C=o("9jgL5"),A=o("keALh"),o("kaQO6")),q=o("hHJQk"),ee=(i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),o("99Anx")),te=(T=o("cNv5c"),b=o("16KRF"),o("d503d")),ne=o("elS0S"),ae=o("awYjP"),le=o("hDM6n"),oe=o("45nY7"),ie=(i=o("aZikt"),v=o("ltHDB"),b=o("16KRF"),te=o("d503d"),q=o("hHJQk"),ae=o("awYjP"),o("7KDpr")),re=(i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),D=o("cFuyE"),c=o("lwple"),b=o("16KRF"),te=o("d503d"),X=o("kaQO6"),o("8hi3c")),se=o("rkI0w"),ce=o("8xzWM");le=o("hDM6n"),ie=o("7KDpr"),S=o("41J1p");const ue=()=>{var t;i.useEffect((()=>(S.analytics.capture("showStakeAccountList"),()=>S.analytics.capture("hideStakeAccountList"))),[]);const n=te.useFetchStakeAccounts({refetchOnMount:"always"}),a=null!==(t=n.data)&&void 0!==t?t:[];return e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!n.isFetched},n.isError?e(i).createElement(de,{message:n.error.message,onRefetch:()=>{n.isFetching||n.refetch()}}):e(i).createElement(me,{data:a}),e(i).createElement("br",null))},de=t=>{const{t:n}=v.useTranslation();return e(i).createElement(e(i).Fragment,null,e(i).createElement(X.Text,{size:16,color:"red"},n("stakeAccountListErrorFetching"),": ",t.message),e(i).createElement(ce.Button,{onClick:t.onRefetch},n("stakeAccountListReload")))},me=t=>{const{t:n}=v.useTranslation(),a=ve(),l=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),o=l.filter((e=>e.type===c.StakeAccountType.Delegated)),r=l.filter((e=>e.type===c.StakeAccountType.Initialized));return o.length||r.length?e(i).createElement(e(i).Fragment,null,o.length>0&&e(i).createElement(e(i).Fragment,null,o.map((t=>{var n,l;const{stake:o,voter:r}=t.info.stake.delegation,s=a.get(r),c=null===(n=null==s?void 0:s.info)||void 0===n?void 0:n.name,u=null===(l=null==s?void 0:s.info)||void 0===l?void 0:l.keybaseUsername;return e(i).createElement(Ee,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,delegatedStake:Number(o),inflationReward:t.inflationReward,voteAccountPubkey:r,name:c,keybaseUsername:u})}))),r.length>0&&e(i).createElement(e(i).Fragment,null,r.map((t=>e(i).createElement(xe,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,inflationReward:t.inflationReward}))))):e(i).createElement(pe,null,e(i).createElement(X.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},pe=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,ge=R.default(re.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,he=R.default(se.TokenImage).attrs({width:44})``,fe=R.default.div`
  overflow: hidden;
`,ye=R.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,be=R.default(X.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,Ee=t=>{var n,a;const{t:l}=v.useTranslation(),{showStakeAccountModal:o}=b.useModals(),{data:r}=te.useFetchKeybaseUserAvatar(t.keybaseUsername),s=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:D.formatHashMedium(t.voteAccountPubkey),c=te.useFetchStakeActivationData(t.pubkey).data,u=t.inflationReward&&t.inflationReward>0;return e(i).createElement(ge,{onClick:()=>{o({stakeAccountPubkey:t.pubkey})}},e(i).createElement(he,{iconUrl:r}),e(i).createElement(fe,null,e(i).createElement(ye,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},s),e(i).createElement(X.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.delegatedStake))),e(i).createElement(ye,null,e(i).createElement(be,{size:14,activationState:null==c?void 0:c.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==c?void 0:c.state)?l("stakeAccountListActivationActivating"):"","active"===(null==c?void 0:c.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==c?void 0:c.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==c?void 0:c.state)?l("stakeAccountListActivationDeactivating"):""),e(i).createElement(X.Text,{size:14,color:""+(u?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},u?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,t.inflationReward)):"-"))))},xe=t=>{const{t:n}=v.useTranslation(),{showStakeAccountModal:a}=b.useModals(),l=te.useFetchStakeActivationData(t.pubkey).data,o=t.inflationReward&&t.inflationReward>0;return e(i).createElement(ge,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(i).createElement(he,null),e(i).createElement(fe,null,e(i).createElement(ye,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(i).createElement(X.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.balance))),e(i).createElement(ye,null,e(i).createElement(be,{size:14,activationState:null==l?void 0:l.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==l?void 0:l.state)?n("stakeAccountListActivationActivating"):"","active"===(null==l?void 0:l.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==l?void 0:l.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==l?void 0:l.state)?n("stakeAccountListActivationDeactivating"):""),e(i).createElement(X.Text,{size:14,color:""+(o?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},o&&"+",e(i).createElement(le.SolBalance,null,t.inflationReward)))))},ve=()=>{var e;const t=te.useFetchValidators(),n=null!==(e=t.data)&&void 0!==e?e:[],a=i.useRef(n);a.current=n;return i.useMemo((()=>new Map(a.current.map((e=>[e.voteAccountPubkey,e])))),[t.dataUpdatedAt,a])},ke=()=>{const{t:t}=v.useTranslation(),{showValidatorListModal:n,hideValidatorListModal:a}=b.useModals(),l=!te.useFetchStakeAccounts().isFetched;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,{items:[{label:t("stakeAccountListViewStakeSOL"),onClick:()=>{n({onClose:a})}}],icon:e(i).createElement(ae.PlusIcon,null)},t("stakeAccountListViewPrimaryText")),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:l},e(i).createElement(ue,null)))};re=o("8hi3c"),X=o("kaQO6");const we=R.default(re.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Te=R.default.div`
  overflow: hidden;
`,Se=R.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,Ce=R.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Ae=()=>{var t;const{t:n}=v.useTranslation(),{pushDetailView:a}=T.useDetailViews(),{showValidatorListModal:l,hideValidatorListModal:o}=b.useModals(),r=te.useFetchStakeAccounts(),{isFetching:s,isError:c}=r,u=null!==(t=r.data)&&void 0!==t?t:[],d=u.reduce(((e,t)=>e+t.lamports),0),m=u.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),p=u.length;return e(i).createElement(we,{isDisabled:s,onClick:()=>{c?r.refetch():s||(p>0?a(e(i).createElement(ke,null),{shouldShowBackButton:!0}):l({onClose:o}))}},s?e(i).createElement(ne.Circle,{diameter:44,color:ee.hexToRGB("#8A81F8",.2)},e(i).createElement(oe.Spinner,{diameter:28})):c?e(i).createElement(ne.Circle,{diameter:44,color:ee.hexToRGB("#EB3742",.1)},e(i).createElement(ae.FailureIcon,null)):e(i).createElement(ne.Circle,{diameter:44,color:"#3F3D29"},e(i).createElement(ae.StarIcon,null)),e(i).createElement(Te,null,s?e(i).createElement(Se,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):c?e(i).createElement(Se,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ce,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(i).createElement(X.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,d))),e(i).createElement(Ce,null,e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},p," ",1===p?"account":"accounts"),e(i).createElement(X.Text,{size:14,color:""+(m>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},m>0?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,m)):"–"))):e(i).createElement(Se,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))};i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB");var Me=o("d3pmY"),Pe=(ee=o("99Anx"),D=o("cFuyE"),o("HEK4k")),Fe=(L=o("7Lj33"),J=o("eW1cp"),E=o("HyeVU"),o("j89eZ")),Be=o("b32BY"),Re=(w=o("bBAGA"),ae=o("awYjP"),ne=o("elS0S"),ie=o("7KDpr"),X=o("kaQO6"),oe=o("45nY7"),o("2yhRe"));const He=R.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Le=R.default(X.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin: 25px 0;
`,De=R.default(ie.LoadingContent)`
  flex: 1;
`,Ie=({className:t,publicKey:n})=>{var a;const{t:l}=v.useTranslation(),{transactionInfos:o,isLoadingInitial:r}=V.useTransactionHistory(n),s=null===(a=w.useFetchConnection())||void 0===a?void 0:a.data,c=null==s?void 0:s.cluster;return e(i).createElement(De,{isLoading:r},e(i).createElement(He,{className:t},0!==o.length?o.map((t=>e(i).createElement($e,{key:t.signature,cluster:c,transactionInfo:t}))):e(i).createElement(Le,null,l("transactionsNoActivity"))))},Oe=R.default.div`
  display: flex;
  justify-content: space-between;
`,ze=R.default.div`
  background: #2a2a2a;
  border-radius: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 15px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ke=R.default(Me.motion.div)`
  display: flex;
  align-items: center;
`,Ue=R.default.div`
  width: 100%;
  margin-left: 10px;
  > * {
    margin-top: 2px;
  }
`,je=R.default.div`
  padding-top: 3px;
  padding-left: 3px;
`,$e=({cluster:t,transactionInfo:n})=>{var a,l,o,r,s;const{t:c}=v.useTranslation(),{latestBlockTimestamp:u}=J.useBlockchainState(),{accountClient:d}=E.useSelectedSolanaAccount(),{getExistingAccountMeta:m}=E.useSolanaAccounts(),{getSavedAddressLabel:p}=Fe.useAddressBook(),{preferredExplorer:g}=Re.usePreferredExplorer(),h=Be.useFetchAssetsWithAccount().data,f=i.useMemo(Date.now,[]),y=f-(null!=u?u:f),b=n.blockTime?Math.min(f,1e3*n.blockTime+y):void 0,{err:x,isLoading:k,isOptimistic:w,transaction:T,signature:S}=n;let C=ee.hexToRGB("#3CC852",.1),A=e(i).createElement(ae.CheckmarkIcon,{fill:"#27D843"}),M=D.formatHashMedium(S),P=c("transactionsSuccess");if(k||w)C=ee.hexToRGB("#8A81F8",.2),M=c("transactionsSending"),P=c("transactionsWaitingForConfirmation"),A=e(i).createElement(oe.Spinner,{diameter:28});else if(x)C=ee.hexToRGB("#E72C2C",.1),A=e(i).createElement(ae.FailureIcon,null),P=c("transactionsError");else if(T){const t=Pe.classifyParsedTransaction(T,d.publicKey,h);if(t===Pe.ParsedTransactionType.ReceivedSol){const t=Pe.getSolTransferInstructions(T)[0],n=t.parsed.info.source,a=D.lamportsToSolana(t.parsed.info.lamports);M=c("transactionsReceivedInterpolated",{amount:D.formatTokenAmount(a)}),C=ee.hexToRGB("#4E44CE",.2),A=e(i).createElement(ae.ReceiveIcon,{fill:"#968DFF"}),P=`${c("transactionsFrom")}: ${D.formatAddress(n,m(n),p(n))}`}else if(t===Pe.ParsedTransactionType.SentSol){const t=Pe.getSolTransferInstructions(T)[0],n=t.parsed.info.destination,a=D.lamportsToSolana(t.parsed.info.lamports);M=c("transactionsSentInterpolated",{amount:D.formatTokenAmount(a)}),C=ee.hexToRGB("#37AAEB",.1),A=e(i).createElement(je,null,e(i).createElement(ae.SendIcon,{width:24,fill:"#6BCEFF"})),P=`${c("transactionsTo")}: ${D.formatAddress(n,m(n),p(n))}`}else if(h&&[Pe.ParsedTransactionType.SentSplFungible,Pe.ParsedTransactionType.SentSplCollectible,Pe.ParsedTransactionType.ReceivedSplFungible,Pe.ParsedTransactionType.ReceivedSplCollectible].includes(t)){const n=Pe.getSplTransferInstructions(T)[0],{source:u,destination:d}=n.parsed.info,m=h.find((e=>u===e.account.toString())),p=h.find((e=>d===e.account.toString()));let g=null===(o=null===(l=null===(a=n.parsed)||void 0===a?void 0:a.info)||void 0===l?void 0:l.tokenAmount)||void 0===o?void 0:o.uiAmount;(null==m?void 0:m.symbol)||(null==m?void 0:m.name)?(g=null!=g?g:D.amountToUiAmount(n.parsed.info.amount,m.decimals),A=e(i).createElement(je,null,e(i).createElement(ae.SendIcon,{width:24,fill:"#6BCEFF"})),C=ee.hexToRGB("#37AAEB",.1),P="",t===Pe.ParsedTransactionType.SentSplFungible?M=`${c("transactionsSent")} ${D.formatTokenAmount(g)} ${m.symbol}`:t===Pe.ParsedTransactionType.SentSplCollectible&&(M=`${c("transactionsSent")} ${null!==(r=m.name)&&void 0!==r?r:m.symbol}`)):((null==p?void 0:p.symbol)||(null==p?void 0:p.name))&&(g=null!=g?g:D.amountToUiAmount(n.parsed.info.amount,p.decimals),C=ee.hexToRGB("#4E44CE",.2),A=e(i).createElement(ae.ReceiveIcon,{fill:"#968DFF"}),P="",t===Pe.ParsedTransactionType.ReceivedSplFungible?M=`${c("transactionsReceived")} ${D.formatTokenAmount(g)} ${p.symbol}`:t===Pe.ParsedTransactionType.ReceivedSplCollectible&&(M=`${c("transactionsReceived")} ${null!==(s=p.name)&&void 0!==s?s:p.symbol}`))}}return e(i).createElement(ze,{onClick:()=>{t&&window.open(L.generateTxExplorerUrl(S,t,g.type))}},e(i).createElement(Me.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(i).createElement(Ke,{key:M+S,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},e(i).createElement(ne.Circle,{diameter:44,color:C},A),e(i).createElement(Ue,null,e(i).createElement(Oe,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,noWrap:!0},M),e(i).createElement(X.Text,{size:14,color:"#777777",lineHeight:17},b?D.formatTimestampFromNow(b):"")),e(i).createElement(Oe,null,e(i).createElement(X.Text,{size:14,color:"#777777",lineHeight:17,textAlign:"left",noWrap:!0,maxWidth:"200px"},P))))))};i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),L=o("7Lj33");var We=o("iqlzl"),Ne=(i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),D=o("cFuyE"),o("7AUIG")),Ve=(X=o("kaQO6"),o("691SI")),Ze=(P=o("fwZPo"),g=o("7OhhO"),Fe=o("j89eZ"),E=o("HyeVU"),o("3KHBf"));const Ge=R.default(Ve.Row)`
  border-radius: 6px;
  background-color: #2a2a2a;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ye=R.default(Ve.Row)`
  margin-left: 10px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`,_e=e=>{const{topLeft:t,topRight:n,bottomLeft:a,bottomRight:l,image:o,onClick:r}=e;return i.createElement(Ge,{onClick:r},i.createElement(Ye,null,o,i.createElement(P.Column,{width:.69*g.PHANTOM_WIDTH+"px",margin:"0 0 0 10px"},i.createElement(Ve.Row,{justify:"space-between"},i.createElement(X.Text,{size:16,weight:600,color:null==t?void 0:t.color,margin:"0",noWrap:!0,maxWidth:"80%",lineHeight:21},(null==t?void 0:t.label)||""),i.createElement(X.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==n?void 0:n.color)||"#777777",lineHeight:21},(null==n?void 0:n.label)||"")),i.createElement(Ve.Row,{justify:"space-between"},i.createElement(X.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==a?void 0:a.color)||"#777777",lineHeight:21},(null==a?void 0:a.label)||""),i.createElement(X.Text,{weight:500,size:14,color:null==l?void 0:l.color,margin:"0",noWrap:!0,lineHeight:21},(null==l?void 0:l.label)||"")))))},Qe=({transaction:e,onClick:t})=>{const{t:n}=v.useTranslation(),{getSavedAddressLabel:a}=Fe.useAddressBook(),{getExistingAccountMeta:l}=E.useSolanaAccounts(),o=D.lamportsToSolana(e.detail.feePayer.amountLamports);let r={topLeft:{label:n("transactionsAppInteraction")},topRight:{label:`-${o} SOL`},image:Ne.createIcon({transactionType:"unknown"})};try{r=((e,t,n,a)=>{var l;const{err:o,detail:i,dapp:r}=e,{data:s,feePayer:c}=i,{imageUrl:u,name:d}=null!=r?r:{};if(o)return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:t("transactionsFailed")},bottomLeft:{label:d},image:Ne.createIcon({transactionType:s.type,transactionState:"error"})};const m=D.lamportsToSolana(c.amountLamports);switch(s.type){case"swap":{const{sendAsset:e,receiveAsset:n}=s,a=D.formatAddressShort(e.mint||""),l=D.formatAddressShort(n.mint||"");return{topLeft:{label:(null==r?void 0:r.name)?t("transactionsSwapOn",{dappName:r.name}):t("transactionsTokenSwap")},topRight:{label:`+${D.formatTokenAmount(s.receiveUiAmount)} ${n.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${e.symbol||a} → ${n.symbol||l}`},bottomRight:{label:`-${D.formatTokenAmount(s.sendUiAmount)} ${e.symbol||a}`},image:Ne.createIcon({transactionType:s.type,mintType:e.type,primaryImage:e.imageUrl,secondaryImage:n.imageUrl})}}case"send":{const{asset:e}=s,l=D.formatAddressShort(e.mint||""),o=D.formatAddress(s.to,a(s.to),n(s.to));return{topLeft:{label:`${t("transactionsSent")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`-${D.formatTokenAmount(s.uiAmount)} ${e.symbol||l}`,color:"#FFFFFF"},bottomLeft:{label:`${t("transactionsTo")}: ${o}`},image:Ne.createIcon({transactionType:s.type,mintType:e.type,primaryImage:e.imageUrl})}}case"receive":{const{asset:e}=s,l=D.formatAddressShort(e.mint||""),o=D.formatAddress(s.from,a(s.from),n(s.from));return{topLeft:{label:`${t("transactionsReceived")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`+${D.formatTokenAmount(s.uiAmount)} ${e.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${t("transactionsFrom")}: ${o}`},image:Ne.createIcon({transactionType:s.type,mintType:e.type,primaryImage:e.imageUrl})}}case"stake":{const{uiAmount:e,stakeAccount:n,validatorName:a}=s;return{topLeft:{label:t("transactionsStaked")},topRight:{label:`-${D.formatTokenAmount(e)} SOL`},bottomLeft:{label:a||D.formatHashMedium(n,4)},image:Ne.createIcon({transactionType:s.type})}}case"withdrawStake":{const{uiAmount:e,stakeAccount:n}=s;return{topLeft:{label:t("transactionsWithdrawStake")},topRight:{label:`+${D.formatTokenAmount(e)} SOL`,color:"#21E56F"},bottomLeft:{label:D.formatHashMedium(n,4)},image:Ne.createIcon({transactionType:s.type})}}case"deactivateStake":{const{uiAmount:e,stakeAccount:n}=s;return{topLeft:{label:t("transactionsUnstaked")},topRight:{label:`${D.formatTokenAmount(e)} SOL`},bottomLeft:{label:D.formatHashMedium(n,4)},image:Ne.createIcon({transactionType:s.type})}}case"burn":{const{asset:e,uiAmount:n}=s,a=D.lamportsToSolana(null!==(l=Ze.useFetchTokenAccountMinBalance().data)&&void 0!==l?l:0);return{topLeft:{label:t("transactionsBurned")},topRight:{label:`+${D.formatTokenAmount(a)} SOL`,color:"#21E56F"},bottomLeft:{label:(null==e?void 0:e.name)?"1"===n?e.name:`${e.name} (${n})`:t("richTransactionDetailUnknownNFT")},image:Ne.createIcon({transactionType:s.type,mintType:null==e?void 0:e.type,primaryImage:null==e?void 0:e.imageUrl})}}case"listItem":case"cancelListing":case"bidItem":case"cancelBid":case"buyItem":case"sellItem":{const e=`${D.formatTokenAmount(s.forUiAmount)} ${s.forAsset.symbol||""}`,n=s.item.name||t("richTransactionDetailUnknownNFT"),a={listItem:{topLeft:{label:t("transactionsListedInterpolated",{name:n})},topRight:{label:""}},bidItem:{topLeft:{label:t("transactionsBidOnInterpolated",{name:n})},topRight:{label:`-${e}`,color:"#777"}},cancelBid:{topLeft:{label:t("transactionsCancelBidOnInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#777"}},cancelListing:{topLeft:{label:t("transactionsUnlistedInterpolated",{name:n})},topRight:{label:""}},sellItem:{topLeft:{label:t("transactionsSoldInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#21E56F"}},buyItem:{topLeft:{label:t("transactionsBoughtInterpolated",{name:n})},topRight:{label:`-${e}`}}};return{topLeft:a[s.type].topLeft,topRight:a[s.type].topRight,bottomLeft:{label:d||""},image:Ne.createIcon({transactionType:s.type,primaryImage:s.item.imageUrl,secondaryImage:u})}}case"unknown":return{topLeft:{label:t("transactionsAppInteraction")},bottomLeft:{label:d},topRight:{label:`-${m} SOL`},image:Ne.createIcon({transactionType:s.type,primaryImage:u})};default:return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:`-${m} SOL`},image:Ne.createIcon({transactionType:"unknown"})}}})(e,n,a,l)}catch(e){console.error("Failed to render details for transaction")}return i.createElement(_e,Object.assign({},r,{onClick:t}))};w=o("bBAGA"),X=o("kaQO6"),ie=o("7KDpr"),b=o("16KRF"),P=o("fwZPo"),oe=o("45nY7"),ne=o("elS0S"),Re=o("2yhRe");const Je=R.default(P.Column)`
  align-items: stretch;
  margin-top: -15px;
`,Xe=R.default.div`
  margin-top: 5px;
  margin-bottom: 5px;
`,qe=R.default(X.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin: 25px 0;
`,et=R.default(ie.LoadingContent)`
  flex: 1;
`,tt=(e,t)=>{const n=(e=>e.reduce(((e,t)=>{var n;const a=We.date(1e3*(null!==(n=null==t?void 0:t.blockTime)&&void 0!==n?n:0)).format("YYYY-MM-DD");return(e[a]=e[a]||[]).push(t),e}),{}))(e);return Object.keys(n).sort(((e,t)=>t.localeCompare(e))).map((e=>{const a=We.date(e),l=We.date().diff(a,t("richTransactionsDays"));return{title:l>1?a.format("MMM D, YYYY"):t(l>0?"richTransactionsYesterday":"richTransactionsToday"),data:n[e].sort(((e,t)=>t.blockTime-e.blockTime))}}))},nt=({publicKey:t})=>{const{t:n}=v.useTranslation(),{showTransactionItemModal:a}=b.useModals(),{transactionInfos:l,isLoadingInitial:o}=I.useRichTransactionHistory(t),{pending:r,confirmed:s}=l,c=i.useMemo((()=>{const e=r.map((e=>Object.assign(Object.assign({},e),{blockTime:e.blockTime||We.date().unix()})));return tt([...e,...s],n)}),[s,r,n]);return e(i).createElement(et,{isLoading:o},e(i).createElement(Je,null,r.length+s.length!==0&&c?c.map((({title:t,data:n},l)=>((t,n,l)=>e(i).createElement(e(i).Fragment,{key:`${t}-${l}`},e(i).createElement(X.Text,{size:16,textAlign:"left",weight:500,margin:"15px 0 5px 0",color:"#777777"},t),n.map((t=>e(i).createElement(Xe,{key:t.signature},"detail"in t?e(i).createElement(Qe,{transaction:t,onClick:()=>a(t)}):e(i).createElement(at,{transaction:t}))))))(t,n,l))):e(i).createElement(qe,null,n("transactionsNoActivity"))))},at=({transaction:t})=>{var n;const{t:a}=v.useTranslation(),l=null===(n=w.useFetchConnection())||void 0===n?void 0:n.data,o=null==l?void 0:l.cluster,{preferredExplorer:r}=Re.usePreferredExplorer();return e(i).createElement(_e,{image:e(i).createElement(ne.Circle,{diameter:44},e(i).createElement(oe.Spinner,{diameter:28})),topLeft:{label:a("transactionsSending")},bottomLeft:{label:a("transactionsWaitingForConfirmation")},onClick:()=>o?window.open(L.generateTxExplorerUrl(t.signature,o,r.type)):null})};ce=o("8xzWM"),Ve=o("691SI"),P=o("fwZPo"),i=o("aZikt"),R=o("hHMPk"),i=o("aZikt");X=o("kaQO6");const lt=R.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,ot=R.default(X.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: 500;
`;var it=o("jzCyU"),rt=(Re=o("2yhRe"),function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))});const st=["Fungible"],ct=e(i).memo((t=>{const{mint:n,name:a,symbol:l}=t,o=(()=>{var e,t;const[n]=x.useFeatureFlags(["kill-rich-transactions-extension"]),{preferredExplorer:a}=Re.usePreferredExplorer(),{t:l}=v.useTranslation(),o=l("assetDetailViewOnExplorer",{explorer:a.name}),i=l("assetDetailStakeSOL"),r=l("assetDetailEditTokenMetadata"),s=l("assetDetailUnwrapAll"),c=l("assetDetailRecentActivity"),u=l("assetDetailActionButtonSend"),d=l("assetDetailActionButtonDeposit"),{feeCalculator:m}=J.useBlockchainState(),p=m.lamportsPerSignature,g=w.useFetchConnection(),h=g.data,f=null!==(e=null==h?void 0:h.cluster)&&void 0!==e?e:"mainnet-beta",{customMetaMap:y,customMetaMapQuery:b}=A.useCustomTokenMetaMap(),{accountClient:T}=E.useSelectedSolanaAccount(),S=T.publicKey,M=S.toString(),P=T.closeTokenAccountAsync,{data:F,loading:B}=C.useCachedSPLAssetData(M,f),R=k.useSPLTokenAccountsByStandard(M,f),H=R.data,L=null!==(t=null==H?void 0:H.infos)&&void 0!==t?t:new Map,{data:D,isFetching:I}=k.useSPLAssets(Object.assign(Object.assign({},F),{publicKey:M,standards:st,cluster:f}));return{owner:S,cluster:f,assets:D,tokenInfos:L,isFetching:!g.isFetched||!b.isFetched||!R.isFetched||B||I,lamportsPerSignature:p,closeTokenAccountAsync:P,areRichTransactionsDisabled:n,customMetaMap:y,viewOnSolScanText:o,stakeSolText:i,editTokenMetaText:r,unwrapAllText:s,recentActivityText:c,sendButtonText:u,depositButtonText:d,preferredExplorer:a}})(),{isFetching:s,owner:u,cluster:d,customMetaMap:m,tokenInfos:p,lamportsPerSignature:g,areRichTransactionsDisabled:h,closeTokenAccountAsync:f,assets:y,viewOnSolScanText:T,stakeSolText:M,unwrapAllText:P,editTokenMetaText:F,recentActivityText:R,sendButtonText:O,depositButtonText:z,preferredExplorer:K}=o,U=r.useHistory(),{showValidatorListModal:j,hideValidatorListModal:$,showEditTokenModal:W,showSendModal:N,showDepositAssetModal:Z}=b.useModals(),G=void 0===n,Y=i.useMemo((()=>y.find((e=>{switch(e.type){case"solana":return G?e:void 0;case"spl-token":return e.data.mintPubKey===n?e:void 0}}))),[n,y,G]),_=i.useMemo((()=>{var e,t;switch(null==Y?void 0:Y.type){case"solana":return;case"spl-token":return{name:null===(e=m.get(Y.data.mintPubKey))||void 0===e?void 0:e.name,symbol:null===(t=m.get(Y.data.mintPubKey))||void 0===t?void 0:t.symbol}}}),[Y,m]),Q=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Y?void 0:Y.data.name)&&void 0!==e?e:null==_?void 0:_.name)&&void 0!==t?t:a}),[null==Y?void 0:Y.data.name,null==_?void 0:_.name,a]),X=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Y?void 0:Y.data.symbol)&&void 0!==e?e:null==_?void 0:_.symbol)&&void 0!==t?t:l}),[null==Y?void 0:Y.data.symbol,null==_?void 0:_.symbol,l]),q=i.useMemo((()=>{if(!Y)return u;switch(null==Y?void 0:Y.type){case"solana":return u;case"spl-token":return new B.PublicKey(null==Y?void 0:Y.data.pubkey)}}),[u,Y]),ee=!h&&"mainnet-beta"===d,{refreshTransactionHistory:te}=ee?I.useRichTransactionHistory(q):V.useTransactionHistory(q),ne=i.useMemo((()=>Y?ee?e(i).createElement(nt,{publicKey:q}):e(i).createElement(Ie,{publicKey:q}):null),[Y,ee,q]),ae=i.useMemo((()=>{const e=[{label:T,onClick:()=>window.open(L.generateAddressExplorerUrl(q.toString(),d,K.type),"_blank")}];if(G&&e.push({label:M,onClick:()=>j({onClose:$})}),"spl-token"===(null==Y?void 0:Y.type)&&Y.data.mintPubKey===H.WRAPPED_SOLANA.address){const t=y.find((e=>"solana"===e.type));t&&+t.data.amount>g&&e.unshift({label:P,onClick:()=>{rt(void 0,void 0,void 0,(function*(){yield f(new B.PublicKey(Y.data.pubkey)),U.push(c.Path.Notifications)}))}})}return"spl-token"!==(null==Y?void 0:Y.type)||p.has(Y.data.mintPubKey)||e.push({label:F,onClick:()=>{S.analytics.capture("selectEditCustomToken"),W({mint:Y.data.mintPubKey,name:Q,symbol:X})}}),e}),[T,G,Y,p,q,d,K.type,M,j,$,y,g,P,f,U,F,W,Q,X]);return i.useEffect((()=>{te(q)}),[q]),e(i).createElement(ut,{isFetching:s,cluster:d,mint:"spl-token"===(null==Y?void 0:Y.type)?Y.data.mintPubKey:null!=n?n:void 0,name:Q,symbol:X,balance:Y?D.amountToUiAmount(Y.data.amount,Y.data.decimals):0,dollarValue:null==Y?void 0:Y.data.usd,isSolana:G,txPublicKey:q,TransactionsComponent:ne,actionItems:ae,recentActivityText:R,sendButtonText:O,depositButtonText:z,shouldUseRichTxs:ee,preferredExplorer:K,showSendModal:i.useCallback((()=>{Y&&N(Y)}),[Y,N]),showDepositAssetModal:i.useCallback((()=>{Z({mint:"spl-token"===(null==Y?void 0:Y.type)?Y.data.mintPubKey:void 0,symbol:l})}),[Y,Z,l])})})),ut=e(i).memo((t=>{const{isFetching:n,cluster:a,mint:l,name:o,symbol:r,balance:s,dollarValue:c,isSolana:u,TransactionsComponent:d,actionItems:m,recentActivityText:p,sendButtonText:g,depositButtonText:h,shouldUseRichTxs:f,showSendModal:y,showDepositAssetModal:b}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,{items:m},n?e(i).createElement(e(i).Fragment,null," "):o),e(i).createElement(bt,{balance:s,symbol:r,mint:l,dollarValue:c,isFetching:n,isMainnet:"mainnet-beta"===a,sendButtonText:g,depositButtonText:h,showSendModal:y,showDepositAssetModal:b}),u&&!n&&e(i).createElement(Ae,null),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(it.SkeletonLoader,{height:"10px",backgroundColor:"#2D2D2D",borderRadius:"8px",width:"100px",margin:"0 0 15px 0"}),[1,2].map((t=>e(i).createElement(mt,{key:t})))):e(i).createElement(e(i).Fragment,null,!f&&e(i).createElement(X.Text,{size:16,color:"#777777",textAlign:"left",margin:"0 auto 12px 0",noWrap:!0},null===d?null:p),d))})),dt=R.default(it.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,mt=()=>e(i).createElement(it.SkeletonLoader,{align:"center",width:"100%",height:"64px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(it.SkeletonLoader,{width:"54px",height:"100%",backgroundColor:"#434343",borderRadius:"50%",margin:"0 15px 0 0"}),e(i).createElement(P.Column,null,e(i).createElement(Ve.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(dt,{width:"120px"}),e(i).createElement(dt,{width:"60px"})),e(i).createElement(Ve.Row,{justify:"space-between"},e(i).createElement(dt,{width:"75px"})))),pt=R.default(P.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,gt=R.default((({children:t,className:n,maxFontSize:a})=>{const[l,o]=(()=>{const e=i.useRef(null),[t,n]=i.useState({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return i.useEffect((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t)return void(i&&n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}));let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]})();return e(i).createElement(lt,{className:n,ref:o,fontSize:a},e(i).createElement(ot,{fontSize:l,noWrap:!0},t))}))`
  margin-bottom: 7px;
`,ht=R.default(X.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,ft=R.default(ce.ButtonPair)`
  width: 296px;
`,yt=R.default(it.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,bt=e(i).memo((t=>{const{mint:n,symbol:a,balance:l,dollarValue:o,isFetching:r,isMainnet:s,sendButtonText:c,depositButtonText:u,showSendModal:d,showDepositAssetModal:m}=t,p=n?D.formatAddressShort(n):void 0,g=`${D.formatTokenAmount(l)} ${null!=a?a:p}`;return e(i).createElement(e(i).Fragment,null,e(i).createElement(pt,null,r?e(i).createElement(Et,null):e(i).createElement(e(i).Fragment,null,e(i).createElement(gt,{maxFontSize:38},g),s&&e(i).createElement(ht,null,o?D.formatDollarAmount(o):"–")),e(i).createElement(ft,{primaryTheme:r?"default":"primary",primaryText:c,primaryDisabled:r,onPrimaryClicked:d,secondaryTheme:r?"default":"primary",secondaryText:u,secondaryDisabled:r,onSecondaryClicked:m,buttonPairStyle:ce.ButtonPairStyle.Small})))})),Et=()=>e(i).createElement(it.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(i).createElement(P.Column,null,e(i).createElement(Ve.Row,{justify:"center",margin:"0 auto"},e(i).createElement(yt,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(Ve.Row,{justify:"center",margin:"0 auto"},e(i).createElement(yt,{width:"60px",height:"8px"}))));i=o("aZikt"),R=o("hHMPk"),ae=o("awYjP");var xt=o("6pkBl");Ve=o("691SI"),X=o("kaQO6");const vt=R.default(Ve.Row).attrs({justify:"center"})`
  cursor: pointer;
  margin: 0 auto;
  width: auto;
  height: 48px;
  margin-bottom: 18px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #8a81f8 !important;
    }
    svg {
      fill: #8a81f8;
      path {
        stroke: #8a81f8;
      }
      circle {
        stroke: #8a81f8;
      }
    }
  }
`,kt=e(i).memo((t=>e(i).createElement(vt,{onClick:t.onClick},e(i).createElement(xt.IconWrapper,null,e(i).createElement(ae.TokenListSettingsIcon,null)),e(i).createElement(X.Text,{size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0},t.buttonText))));i=o("aZikt"),v=o("ltHDB"),i=o("aZikt"),R=o("hHMPk"),P=o("fwZPo"),ae=o("awYjP"),X=o("kaQO6"),Ve=o("691SI");const wt=({title:t,description:n})=>e(i).createElement(Tt,null,e(i).createElement(St,null,e(i).createElement(Ct,null,e(i).createElement(ae.FailureIcon,{width:32}))),e(i).createElement(At,null,t),e(i).createElement(Mt,null,n)),Tt=R.default(P.Column).attrs({align:"center",justify:"center"})`
  height: 100%;
`,St=R.default.div`
  width: 94px;
  height: 94px;
  position: relative;
  border-radius: 100%;
  background: rgba(235, 55, 66, 0.1);
`,Ct=R.default(Ve.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,At=R.default(X.Text).attrs({size:28,weight:500,margin:"30px 0 10px 0"})``,Mt=R.default(X.Text).attrs({size:16,weight:400,margin:"0 30px",color:"#777777"})``,Pt=()=>{const{t:t}=v.useTranslation();return e(i).createElement(wt,{title:t("homeErrorTitle"),description:t("homeErrorDescription")})};i=o("aZikt"),R=o("hHMPk"),P=o("fwZPo"),Ve=o("691SI"),it=o("jzCyU");const Ft=R.default.div`
  width: 44px;
  height: 44px;
  margin-right: 15px;
`,Bt=R.default(it.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,Rt=()=>e(i).createElement(it.SkeletonLoader,{align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(Ft,null,e(i).createElement(it.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(i).createElement(P.Column,null,e(i).createElement(Ve.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(Bt,{width:"120px"}),e(i).createElement(Bt,{width:"60px"})),e(i).createElement(Ve.Row,{justify:"space-between"},e(i).createElement(Bt,{width:"75px"}),e(i).createElement(Bt,{width:"35px"}))));i=o("aZikt");var Ht=o("ldf3y");R=o("hHMPk"),ee=o("99Anx"),D=o("cFuyE"),g=o("7OhhO"),ce=o("8xzWM"),P=o("fwZPo"),Ve=o("691SI"),it=o("jzCyU"),X=o("kaQO6");const Lt=R.default(P.Column).attrs({align:"center"})`
  position: relative;
  width: ${g.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,Dt=R.default(X.Text).attrs({weight:600,size:38})`
  margin-top: 33px;
  margin-bottom: 18px;
`,It=R.default(Ve.Row).attrs({justify:"center"})`
  margin-bottom: 22px;
  min-height: 25px;
`,Ot=R.default(X.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,zt=R.default(X.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,Kt=R.default.div`
  display: flex;
  flex-direction: row;
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,Ut=R.default(ce.ButtonPair)`
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,jt=R.default(ce.Button)`
  margin-left: 10px;
  margin-right: 10px;
`,$t={fontSize:14,lineHeight:17,paddingY:10},Wt=R.default(P.Column).attrs({align:"center",padding:"49px 0"})``,Nt=e(i).memo((t=>{const{balance:n,balanceChange:a,isFetching:l,isMainnet:o,sendButtonText:r,depositButtonText:s,buyButtonText:c,isBuyEnabled:u,showSendSelectionModal:d,showDepositSelectionModal:m,showBuySelectionModal:p}=t,g=!o||l?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":a>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":a<0?"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)":"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)",h=0===n?"$0.00":D.formatDollarAmount(n),f=0===a?"+$0.00":D.formatDollarAmount(a,!0),y=a>0?"#21E56F":a<0?"#EB3742":"#777777",b=D.formatPercentage(Ht.calculateDollarChangePercentage(n,a),"0.00%",!0),E=l?"default":"primary";return e(i).createElement(Lt,{background:g},l?e(i).createElement(Wt,null,e(i).createElement(it.SkeletonLoader,{width:"150px",height:"10px",borderRadius:"6px",backgroundColor:"#4D4D4D",margin:"0 0 10px 0"}),e(i).createElement(it.SkeletonLoader,{width:"75px",height:"10px",borderRadius:"6px",backgroundColor:"#484848"})):o?e(i).createElement(e(i).Fragment,null,e(i).createElement(Dt,null,h),e(i).createElement(It,null,e(i).createElement(Ot,{color:y},f),e(i).createElement(zt,{color:y,backgroundColor:ee.hexToRGB(y,.1)},b))):e(i).createElement(Wt,null,e(i).createElement(X.Text,{size:36,weight:"bold",color:"#777"},"–")),u?e(i).createElement(Kt,null,e(i).createElement(ce.Button,Object.assign({onClick:m,theme:E,disabled:l},$t),s),e(i).createElement(jt,Object.assign({onClick:p,theme:E,disabled:l},$t),c),e(i).createElement(ce.Button,Object.assign({onClick:d,theme:E,disabled:l},$t),r)):e(i).createElement(Ut,{primaryTheme:"default",primaryText:r,primaryDisabled:l,onPrimaryClicked:d,secondaryText:s,secondaryDisabled:l,onSecondaryClicked:m,buttonPairStyle:ce.ButtonPairStyle.Small}))}));i=o("aZikt"),R=o("hHMPk"),k=o("2zUeX"),D=o("cFuyE");var Vt=o("7TimZ");const Zt=R.default.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,Gt=e(i).memo((t=>{const n=i.useCallback((e=>null!=e?e:t.unknownTokenText),[t.unknownTokenText]);return e(i).createElement(e(i).Fragment,null,t.data.map(((a,l)=>{var o,r,s;const c=k.assetKeyExtractor(a,l),u=D.amountToUiAmount(a.data.amount,a.data.decimals);switch(a.type){case"solana":return e(i).createElement(Zt,{key:c},e(i).createElement(Vt.AssetRow,{balance:u,name:a.data.name,symbol:a.data.symbol,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>t.onClick({name:a.data.name,symbol:a.data.symbol})}));case"spl-token":{const l=t.customMetaMap.get(a.data.mintPubKey),d=null!==(r=null!==(o=a.data.symbol)&&void 0!==o?o:null==l?void 0:l.symbol)&&void 0!==r?r:null;return e(i).createElement(Zt,{key:c},e(i).createElement(Vt.AssetRow,{balance:u,mint:a.data.mintPubKey,name:n(null!==(s=a.data.name)&&void 0!==s?s:null==l?void 0:l.name),symbol:d,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>{var e;return t.onClick({mint:a.data.mintPubKey,name:n(null!==(e=a.data.name)&&void 0!==e?e:null==l?void 0:l.name),symbol:d})}}))}}})))})),Yt=["Fungible"],_t=()=>{const t=(()=>{var t;const{t:n}=v.useTranslation(),a=n("homeManageTokenList"),l=n("homeSend"),o=n("homeDeposit"),r=n("homeBuy"),s=n("assetDetailUnknownToken"),[u]=x.useFeatureFlags(["enable-buy"]),{showAssetVisibilityModal:d,showSendSelectionModal:m,showDepositSelectionModal:p,showBuySelectionModal:g}=b.useModals(),{pushDetailView:h}=T.useDetailViews(),f=w.useFetchConnection(),y=null==f?void 0:f.data,P=null!==(t=null==y?void 0:y.cluster)&&void 0!==t?t:"mainnet-beta",{accountClient:B}=E.useSelectedSolanaAccount(),R=B.publicKey.toString(),{hiddenMints:H,hiddenMintsMapQuery:L}=M.useHiddenMints(R),{customMetaMap:D,customMetaMapQuery:I}=A.useCustomTokenMetaMap(),{data:{cachedLamportBalance:O,cachedPrices:z},loading:K,error:U}=C.useCachedSPLAssetData(R,P),{data:j,isFetching:$,error:W}=k.useSPLAssets({cachedLamportBalance:O,cachedPrices:z,publicKey:R,standards:Yt,cluster:P,hiddenMints:H,sortByPrice:!0}),{totalBalance:N,totalBalanceChange:V}=i.useMemo((()=>k.getTotalAssetsBalance(j)),[j]),Z=!f.isFetched||!L.isFetched||!I.isFetched||K||$,G=f.isError||L.isError||I.isError||!!U&&j.length<=0||!!W,Y=i.useCallback((t=>{const{mint:n,name:a,symbol:l}=t;S.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:c.Chain.Solana,isNativeOfType:n?void 0:"sol",address:n,symbol:l,name:a}}),h(e(i).createElement(F.AssetDetail,{mint:n,name:a,symbol:l}),{shouldShowBackButton:!0})}),[h]);return{data:j,isFetching:Z,isError:G,isMainnet:"mainnet-beta"===P,isBuyEnabled:u,totalBalance:N,totalBalanceChange:V,customMetaMap:D,manageTokenListButtonText:a,sendButtonText:l,depositButtonText:o,buyButtonText:r,unknownTokenText:s,showAssetVisibilityModal:d,showSendSelectionModal:m,showDepositSelectionModal:p,showBuySelectionModal:g,onAssetRowClick:Y}})();return t.isError?e(i).createElement(Pt,null):e(i).createElement(Qt,Object.assign({},t))},Qt=e(i).memo((t=>e(i).createElement(P.Column,{align:"center"},e(i).createElement(Nt,{balance:t.totalBalance,balanceChange:t.totalBalanceChange,isBuyEnabled:t.isBuyEnabled,isFetching:t.isFetching,isMainnet:t.isMainnet,sendButtonText:t.sendButtonText,depositButtonText:t.depositButtonText,buyButtonText:t.buyButtonText,showSendSelectionModal:t.showSendSelectionModal,showDepositSelectionModal:t.showDepositSelectionModal,showBuySelectionModal:t.showBuySelectionModal}),t.isFetching?[1,2,3].map((t=>e(i).createElement(Rt,{key:t}))):e(i).createElement(e(i).Fragment,null,e(i).createElement(Gt,{data:t.data,customMetaMap:t.customMetaMap,isMainnet:t.isMainnet,unknownTokenText:t.unknownTokenText,onClick:t.onAssetRowClick}),e(i).createElement(kt,{buttonText:t.manageTokenListButtonText,onClick:t.showAssetVisibilityModal})))));var Jt=o("8sCMi");ae=o("awYjP"),i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),E=o("HyeVU"),x=o("j1GR2"),q=o("hHJQk"),w=o("bBAGA");const Xt=R.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,qt=()=>{const{t:t}=v.useTranslation(),{accountClient:n}=E.useSelectedSolanaAccount(),{data:a}=w.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),[o]=x.useFeatureFlags(["kill-rich-transactions-extension"]);return e(i).createElement(Xt,null,e(i).createElement(q.PageHeader,null,t("recentActivityPrimaryText")),!o&&l?e(i).createElement(nt,{publicKey:n.publicKey}):e(i).createElement(Ie,{publicKey:n.publicKey}))};i=o("aZikt"),v=o("ltHDB");var en=o("69REY"),tn=o("9OxTN"),nn=o("7yWWO"),an=(b=o("16KRF"),o("g9tZv"));E=o("HyeVU"),x=o("j1GR2"),w=o("bBAGA"),i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB");const ln=(R=o("hHMPk")).default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 15px;
  > * {
    margin: 5px;
  }
`;i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),k=o("2zUeX"),i=o("aZikt"),T=o("cNv5c"),i=o("aZikt"),R=o("hHMPk"),nn=o("7yWWO"),k=o("2zUeX");var on=o("jEn2x"),rn=(v=o("ltHDB"),E=o("HyeVU"),w=o("bBAGA"),oe=o("45nY7"),i=o("aZikt"),T=o("cNv5c"),v=o("ltHDB"),i=o("aZikt"),R=o("hHMPk"),nn=o("7yWWO"),o("2aCEZ")),sn=o("f8jMK"),cn=(k=o("2zUeX"),ee=o("99Anx"),D=o("cFuyE"),o("4CRqq"));b=o("16KRF"),w=o("bBAGA"),on=o("jEn2x"),E=o("HyeVU"),x=o("j1GR2"),Re=o("2yhRe"),ce=o("8xzWM"),P=o("fwZPo"),q=o("hHJQk"),X=o("kaQO6"),i=o("aZikt"),R=o("hHMPk"),ae=o("awYjP"),X=o("kaQO6");const un=R.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  top: 4px;
  padding: 4px 6px;
  margin: 8px;
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
`,dn=R.default.div`
  padding-left: 6px;
  padding-right: 4px;
`,mn=R.default(X.StyledText).attrs({textAlign:"left",weight:600,noWrap:!0})``,pn=e(i).memo((t=>{const{title:n,amount:a,symbol:l}=t;return e(i).createElement(un,null,e(i).createElement(ae.MagicEdenCirleIcon,null),e(i).createElement(dn,null,e(i).createElement(mn,{opacity:.5,size:12,lineHeight:16,textTransform:"capitalize"},n),e(i).createElement(mn,{noWrap:!0,lineHeight:20,textTransform:"capitalize"},`${a} ${l}`)))}));var gn=o("1zlW3"),hn=o("bXcFZ");L=o("7Lj33");const fn=R.default.div`
  display: flex;
  flex-direction: column;
`,yn=R.default.div`
  position: relative;
`,bn=R.default.div`
  > * {
    margin: 10px 0px;
  }
  margin-bottom: 20px;
`,En=R.default.div`
  padding: 16px 0px;
  display: flex;
  gap: 10px;
`,xn=R.default.div`
  display: flex;
  flex-wrap: wrap;
`,vn=R.default.div`
  border-radius: 6px;
  border: 1px solid #333333;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
  max-width: fit-content;
  word-break: break-word;
  align-items: flex-start;
`,kn=R.default(ce.Button)`
  margin-bottom: 10px;
`,wn=e(i).memo((t=>{var n,a,l,o,r,s,c,u,d,m;const{collectible:p,collectionKey:g}=t,{uri:h,mintPubKey:f,amount:y,decimals:T,name:S,pubkey:C}=p,A=D.amountToUiAmount(y,T),{t:M}=v.useTranslation(),[F,B]=x.useFeatureFlags(["list-on-marketplace-browser-ext","enable-burn-token"]),R=cn.useListCollectibleStore((e=>e.setListCollectible)),H=cn.useListCollectibleStore((e=>e.setListPrice)),I=null!==(n=k.useFetchSPLTokenJSONMetadata(h).data)&&void 0!==n?n:null;let O,z,K,U;I&&(O=null==I?void 0:I.external_url,z=null==I?void 0:I.description,K=null==I?void 0:I.attributes,U=null==I?void 0:I.image);const j=i.useMemo((()=>S&&S.length>0?S:(null==I?void 0:I.name)?null==I?void 0:I.name:p.mintPubKey?p.mintPubKey:void e(i).Fragment),[S,null==I?void 0:I.name,p.mintPubKey]),$=k.useSelectBestMedia(I),W=A>1,{showSendModal:N,showCollectibleBurnModal:V,showCollectibleListingModal:Z,showEditCollectibleListingModal:G}=b.useModals(),Y=null===(a=w.useFetchConnection())||void 0===a?void 0:a.data,_=null!==(l=null==Y?void 0:Y.cluster)&&void 0!==l?l:"mainnet-beta",{accountClient:Q}=E.useSelectedSolanaAccount(),J=Q.publicKey.toString(),te=sn.parseURL(O),ne=nn.useSubscribeListedSPLCollectible(on.getAPIEnvironment(),_,J,C),ae=!!(null===(o=null==ne?void 0:ne.listings)||void 0===o?void 0:o.magic_eden),le="SemiFungible"!==p.standard&&"unknownTokens"!==g,oe=null===(s=null===(r=null==ne?void 0:ne.listings)||void 0===r?void 0:r.magic_eden)||void 0===s?void 0:s.url,ie=i.useCallback((()=>{oe&&window.open(oe)}),[oe]),{preferredExplorer:re}=Re.usePreferredExplorer(),se=nn.useGetCollectibleVerificationStatus(on.getAPIEnvironment(),_,f),ue=void 0!==se&&!se&&!ae;return e(i).createElement(fn,null,e(i).createElement(q.PageHeader,{items:[{label:M("collectibleDetailViewOnExplorer",{explorer:re.name}),onClick:()=>_&&window.open(L.generateAddressExplorerUrl(f,_,re.type),"_blank")},...B&&ue?[{label:M("collectibleBurnTitleWithCount",{count:A}),onClick:()=>V(p),variant:hn.CTAVariant.Warning}]:[]]},j,W?e(i).createElement("label",{style:{opacity:.5}}," (",Math.floor(A),")"):null),e(i).createElement(yn,null,e(i).createElement(gn.CollectibleDisplay,{width:328,height:328,media:$,image:U,enableCameraControls:!0,enableMedia:!0}),(null===(u=null===(c=null==ne?void 0:ne.listings)||void 0===c?void 0:c.magic_eden)||void 0===u?void 0:u.listingPriceUiAmount)?e(i).createElement(pn,{title:M("collectiblesListed"),amount:null===(m=null===(d=ne.listings)||void 0===d?void 0:d.magic_eden)||void 0===m?void 0:m.listingPriceUiAmount,symbol:"SOL"}):null),e(i).createElement(En,null,ne?null:e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{const e={type:"spl-token",data:Object.assign(Object.assign({},p),{usd:0,usd24hChange:0})};N(e),(()=>{const e=document.querySelector("audio"),t=document.querySelector("video"),n=null!=e?e:t;(null==n?void 0:n.paused)||null==n||n.pause()})()}},M("collectibleDetailSend")),F&&le&&!ne?e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{R({asset:p,listings:null}),Z(p)}},M("collectibleDetailList")):null,F&&ae?e(i).createElement(P.Column,null,e(i).createElement(kn,{theme:"primary",disabled:!oe,onClick:ie},M("listStatusViewOnMagicEden")),e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{var e,t,n;R(ne),H(rn.lamportsToSolana(null!==(n=null===(t=null===(e=ne.listings)||void 0===e?void 0:e.magic_eden)||void 0===t?void 0:t.listingPrice)&&void 0!==n?n:0)),G(p)}},M("collectiblesEditListing"))):null),e(i).createElement(bn,null,(z||O)&&e(i).createElement(X.Text,{weight:500,size:16,color:"#777",textAlign:"left"},M("collectibleDetailDescription")),z&&e(i).createElement(X.Text,{size:14,textAlign:"left",lineHeight:20},z),te&&e(i).createElement(X.Text,{href:te.href,color:"#8A81F8",hoverColor:ee.hexToRGB("#8A81F8",.5),size:14,weight:500,rel:"noopener noreferrer",target:"_blank"},te.host)),e(i).createElement(bn,null,K&&K.length&&e(i).createElement(e(i).Fragment,null,e(i).createElement(X.Text,{weight:500,size:16,color:"#777",textAlign:"left"},M("collectibleDetailProperties")),e(i).createElement(xn,null,K.map((t=>e(i).createElement(vn,{key:t.trait_type},e(i).createElement(X.Text,{lineHeight:15,weight:500,size:12,color:"#777",textTransform:"uppercase",textAlign:"left"},t.trait_type),e(i).createElement(X.Text,{lineHeight:17,color:"white",size:14,weight:500,textAlign:"left"},t.value))))))))}));gn=o("1zlW3");const Tn=e(i).memo((t=>{const{collectible:n,media:a,image:l,collectionKey:o}=t,{pushDetailView:r}=T.useDetailViews(),s=i.useCallback((()=>{r(e(i).createElement(wn,{collectible:n,collectionKey:o}),{shouldShowBackButton:!0})}),[n,o,r]);return e(i).createElement(gn.CollectibleDisplay,{onClick:s,media:a,image:l,enableCameraControls:!1})}));q=o("hHJQk"),X=o("kaQO6"),i=o("aZikt"),R=o("hHMPk"),X=o("kaQO6");const Sn=R.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  ${({position:e})=>{switch(e){case"bottom-left":return"\n          bottom: 4px;\n          padding: 6px 11px;\n        ";case"top-left":return"\n          top: 4px;\n          padding: 2px 6px;\n        "}}}
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
  max-width: 146px;
`,Cn=R.default(X.StyledText).attrs({lineHeight:17,weight:600,noWrap:!0})``,An=e(i).memo((t=>{const{name:n,count:a,position:l,textSize:o}=t;return e(i).createElement(Sn,{position:l},e(i).createElement(Cn,{size:"small"===o?12:14,noWrap:!0,textTransform:"capitalize"},n),a?e(i).createElement(Cn,{opacity:.5,size:14,paddingLeft:4},a):null)})),Mn=R.default(X.StyledText).attrs({as:"span",weight:500})``,Pn=R.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Fn=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Bn=e(i).memo((t=>{var n;const{collectible:a,collectionKey:l}=t,{accountClient:o}=E.useSelectedSolanaAccount(),r=o.publicKey.toString(),{t:s}=v.useTranslation(),c=w.useFetchConnection().data,u=null!==(n=null==c?void 0:c.cluster)&&void 0!==n?n:"mainnet-beta",d=nn.useSubscribeListedSPLCollectible(on.getAPIEnvironment(),u,r,a.pubkey),m=k.useFetchSPLTokenJSONMetadata(a.uri),{isFetched:p}=m,g=m.data||null;let h,f;return g&&(h=null==g?void 0:g.image,f=k.parseMediaFromImage(g)),e(i).createElement(Pn,null,p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Tn,{key:a.mintPubKey,collectionKey:l,collectible:a,media:f,image:h}),d?e(i).createElement(An,{name:s("collectiblesListed"),textSize:"small",position:"top-left"}):null):e(i).createElement(Fn,null,e(i).createElement(oe.Spinner,null)))})),Rn=e(i).memo((t=>{const{name:n,collection:a}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,e(i).createElement(Mn,{textTransform:"capitalize"},n)," ",e(i).createElement(Mn,{opacity:.5},a.items.length)),e(i).createElement(ln,null,a.items.map((t=>e(i).createElement(Bn,{key:t.pubkey,collectible:t,collectionKey:a.key})))))}));gn=o("1zlW3");const Hn=e(i).memo((t=>{const{name:n,collection:a,media:l,image:o}=t,{pushDetailView:r}=T.useDetailViews(),s=i.useCallback((()=>r(e(i).createElement(Rn,{name:n,collection:a}),{shouldShowBackButton:!0})),[n,a,r]);return e(i).createElement(gn.CollectibleDisplay,{onClick:s,media:l,image:o,enableCameraControls:!1})}));oe=o("45nY7");const Ln=R.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Dn=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,In=e(i).memo((t=>{var n,a;const{collectionKey:l,collection:o,nrOfListed:r}=t,{t:s}=v.useTranslation(),c=o.items[0],u=k.useFetchSPLTokenJSONMetadata(o.uri),{isFetched:d}=u,m=u.data||null;let p;const g=null!==(n=k.useBestCollectionName(m))&&void 0!==n?n:l,h=null!==(a=o.name)&&void 0!==a?a:g;m&&(p=m.image);const f=k.useSelectCollectionMedia(m),y=o.items.length;let b=y.toString();if(1==y){const[e]=o.items;"SemiFungible"===e.standard&&(b=e.amount)}return e(i).createElement(Ln,null,d?e(i).createElement(e(i).Fragment,null,1===y?e(i).createElement(Tn,{key:c.pubkey,collectionKey:l,collectible:c,media:f,image:p}):e(i).createElement(Hn,{key:o.key,name:h,collection:o,media:f,image:p}),r>0?e(i).createElement(An,{name:1===y&&1===r?s("collectiblesListed"):s("collectiblesNrOfListed",{nrOfListed:r}),textSize:"small",position:"top-left"}):null,e(i).createElement(An,{name:h,count:b,position:"bottom-left"})):e(i).createElement(Dn,null,e(i).createElement(oe.Spinner,null)))}));i=o("aZikt");const On=(R=o("hHMPk")).default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,zn=e(i).memo((t=>{var n;const{collectionKey:a,collection:l}=t,o=l.items[0],r=null!==(n=l.name)&&void 0!==n?n:a,s=l.items.length;let c=s.toString();if(1==s){const[e]=l.items;"SemiFungible"===e.standard&&(c=e.amount)}return e(i).createElement(On,null,1===s?e(i).createElement(Tn,{key:o.pubkey,collectionKey:a,collectible:o,media:null,image:void 0}):e(i).createElement(Hn,{key:l.key,name:r,collection:l,media:null,image:void 0}),e(i).createElement(An,{name:r,count:c,position:"bottom-left"}))}));X=o("kaQO6"),ee=o("99Anx"),ae=o("awYjP"),b=o("16KRF");const Kn=R.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`,Un=R.default.div`
  background-color: ${ee.hexToRGB("#e5a221",.7)};
  align-items: center;
  border-radius: 6px;
  margin: 5px;
  padding: 8px 10px;
  display: flex;
  cursor: pointer;
`,jn=R.default(X.StyledText).attrs({textAlign:"left",weight:500,size:14,noWrap:!0})`
  margin-left: 7px;
`,$n=e(i).memo((t=>{const{collections:n,listedCollectibles:a,isError:l,listingsError:o,hasUnknownTokens:r}=t,{t:s}=v.useTranslation(),{showListingsErrorModal:c}=b.useModals();return l?e(i).createElement(Kn,null,s("homeErrorDescription")):n&&n.length?e(i).createElement(e(i).Fragment,null,o?e(i).createElement(Un,{onClick:c},e(i).createElement(ae.InfoIcon,{fill:"#fff"}),e(i).createElement(jn,null,s("collectiblesUnableToLoadListingsFrom",{marketplace:"Magic Eden"}))):null,e(i).createElement(ln,null,n.map(((t,l)=>{const o=(null!=a?a:[]).reduce(((e,n)=>e+ +(n.asset.collectionPubKey===t.key)),0);return l===n.length-1&&r&&0!==t.items.length?e(i).createElement(zn,{key:`${t.name}-${l}`,collectionKey:t.key,collection:t}):e(i).createElement(In,{key:`${t.name}-${l}`,collectionKey:t.key,collection:t,nrOfListed:o})})))):e(i).createElement(Kn,null,s("collectiblesNoCollectibles"))}));ie=o("7KDpr"),q=o("hHJQk"),c=o("lwple"),on=o("jEn2x");const Wn=()=>{var t,n;const{t:a}=v.useTranslation(),{showDepositAssetModal:l}=b.useModals(),[o]=x.useFeatureFlags(["list-on-marketplace-browser-ext"]),{accountClient:r}=E.useSelectedSolanaAccount(),s=r.publicKey.toString(),u=w.useFetchConnection().data,d=null!==(t=null==u?void 0:u.cluster)&&void 0!==t?t:"mainnet-beta",m=e(en)(tn.getNFTBlocklist),[p]=an.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),g=m.loading?null:null!==(n=null==m?void 0:m.value)&&void 0!==n?n:[],{data:h,isError:f}=nn.useSPLTokenAccountsByCollectibleStandard(on.getAPIEnvironment(),d,s,p,g,o),y=!!(null==h?void 0:h.error),{collections:k,collectionsLoaded:T}=nn.useSubscribeSPLTokenCollections(on.getAPIEnvironment(),d,s,p),S=nn.useSubscribeListedSPLCollectibles(on.getAPIEnvironment(),d,s),C=i.useMemo((()=>k.filter((e=>e.uri))),[k]),A=i.useMemo((()=>k.filter((e=>!e.uri)).map((e=>{const{items:t}=e;return t})).flat(2)),[k]),M={key:"unknownTokens",name:"Unknown Tokens",uri:"",items:A};return 0===A.length||C.find((e=>"Unknown Tokens"===e.name))||C.push(M),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!f&&!T},e(i).createElement(q.PageHeader,{items:[{label:a("collectiblesReceiveCollectible"),onClick:()=>l({symbol:null,mint:void 0})}]},a("collectiblesPrimaryText")),e(i).createElement($n,{isError:f,collections:C,listedCollectibles:S,listingsError:!!y,hasUnknownTokens:0!==A.length}))};var Nn={};t(Nn,"Settings",(function(){return ia}),(function(e){return ia=e}));B=o("h6IZU"),i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),c=o("lwple"),D=o("cFuyE"),H=o("6oEu9");var Vn=o("7h7pw"),Zn=(sn=o("f8jMK"),S=o("41J1p"),E=o("HyeVU"),T=o("cNv5c"),w=o("bBAGA"),o("eGDJt")),Gn=(b=o("16KRF"),Fe=o("j89eZ"),Re=o("2yhRe"),an=o("g9tZv"),o("5X25N"));X=o("kaQO6"),ae=o("awYjP"),i=o("aZikt"),R=o("hHMPk"),H=o("6oEu9"),S=o("41J1p"),E=o("HyeVU"),ae=o("awYjP");const Yn=R.default.input`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  background: none;
  border: none;
  width: 166px;
  &:focus {
    outline: 0;
  }
`,_n=R.default.form`
  border: 1px solid #323232;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 15px;
  width: 230px;
  position: relative;
`,Qn=R.default.div`
  position: absolute;
  right: 18px;
  top: 18px;
  svg {
    fill: #666;
  }
  &:hover {
    cursor: pointer;
    svg {
      fill: white;
    }
  }
`,Jn=()=>{const t=i.useRef(null),{accountMeta:n,setSelectedAccountName:a}=E.useSelectedSolanaAccount(),l=n.name,[o,r]=i.useState(l),s=i.useCallback((()=>{var e;r(""),null===(e=t.current)||void 0===e||e.focus()}),[r]),c=i.useCallback((e=>r(e.currentTarget.value)),[r]),u=i.useCallback((()=>{o.length>0&&o!==l&&(S.analytics.capture("changeAccountName",{data:{name:o}}),a(o))}),[l,o,a]),d=i.useCallback((e=>{e.preventDefault(),u()}),[u]);return e(i).createElement(_n,{onSubmit:d},e(i).createElement(Yn,{ref:t,maxLength:H.MAX_WALLET_NAME_LENGTH,value:o,onChange:c,onBlur:u}),e(i).createElement(Qn,{onClick:s},e(i).createElement(ae.PencilIcon,{width:18})))};ce=o("8xzWM"),q=o("hHJQk");var Xn=o("eXQFq"),qn=o("iccRv"),ea=o("5eccS"),ta=o("kaz4F"),na=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const aa=R.default.div`
  margin-top: 30px;
  margin-bottom: 33px;
  p {
    margin-top: 10px;
  }
`,la=R.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Gn.ContentRowContainer} {
    margin-bottom: 10px;
  }
`,oa=R.default.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  > * {
    margin-top: 10px;
  }
`,ia=()=>{const{t:t}=v.useTranslation(),{accountClient:n,accountMeta:a}=E.useSelectedSolanaAccount(),{accountMetas:l}=E.useSolanaAccounts(),{pushDetailView:o}=T.useDetailViews(),{showRemoveAccountModal:r,showResetSeedModal:s,showExportMnemonicModal:u,showExportPrivateKeyModal:d}=b.useModals(),m=1===l.length,p=a.type===c.AccountType.Ledger,g=a.type===c.AccountType.PrivateKey,h=n.publicKey.toString();return e(i).createElement(la,null,e(i).createElement(aa,null,e(i).createElement(Jn,null),e(i).createElement(ta.DelayedRenderComponent,{delayedChildren:e(i).createElement(ea.CopyTooltip,{copyString:h},e(i).createElement(X.Text,{size:16,color:"#777777"},"(",D.formatHashMedium(h),")"))},e(i).createElement(X.Text,{size:16,color:"#777777"},"(",D.formatHashMedium(h),")"))),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsDisplayLanguage"),secondaryContent:Vn.languageDisplayValue(v.i18next.language),onClick:()=>{o(e(i).createElement(fa,null),{shouldShowBackButton:!0})}}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsAddressBookPrimary"),secondaryContent:t("settingsAddressBookSecondary"),onClick:()=>{o(e(i).createElement(ya,null),{shouldShowBackButton:!0})}}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsTrustedAppsPrimary"),secondaryContent:t("settingsTrustedAppsSecondary"),onClick:()=>{o(e(i).createElement(ua,null),{shouldShowBackButton:!0})}}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsChangeNetworkPrimary"),secondaryContent:t("settingsChangeNetworkSecondary"),onClick:()=>{o(e(i).createElement(sa,null),{shouldShowBackButton:!0})}}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsSecurityPrimary"),secondaryContent:t("settingsSecuritySecondary"),onClick:()=>{o(e(i).createElement(Ea,null),{shouldShowBackButton:!0})}}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsPreferredExplorers"),secondaryContent:t("settingsPreferredExplorersSecondary"),onClick:()=>{o(e(i).createElement(ba,null),{shouldShowBackButton:!0})}}),e(i).createElement(oa,null,!p&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ce.Button,{"data-testid":"settings-button-export-private-key",disabled:p,onClick:d,title:p?t("settingsErrorCannotExportLedgerPrivateKey"):""},t("settingsExportPrivateKey")),!g&&e(i).createElement(ce.Button,{"data-testid":"settings-button-show-secret-recovery-phrase",onClick:u},t("settingsShowSecretRecoveryPhrase"))),e(i).createElement(ce.Button,{disabled:m,theme:"warning",onClick:r,title:m?t("settingsErrorCannotRemoveAllWallets"):""},t("settingsRemoveWallet")),e(i).createElement(ce.Button,{theme:"warning",onClick:s},t("settingsResetSecretRecoveryPhrase"))))},ra=R.default.div`
  > * {
    margin-top: 10px;
  }
  *:first-child {
    margin-top: 0px;
  }
`,sa=()=>{var t;const{t:n}=v.useTranslation(),a=null===(t=w.useFetchConnection())||void 0===t?void 0:t.data,l=null==a?void 0:a.mainnetRpcUrl,o=null==a?void 0:a.cluster,{mutateAsync:r}=Zn.useStoreStorageValue(c.StorageKeys.Cluster),s=i.useMemo((()=>[{cluster:"mainnet-beta",primaryContent:n("settingsNetworkMainnetBeta"),secondaryContent:l},{cluster:"testnet",primaryContent:n("settingsNetworkTestnet"),secondaryContent:B.clusterApiUrl("testnet")},{cluster:"devnet",primaryContent:n("settingsNetworkDevnet"),secondaryContent:B.clusterApiUrl("devnet")},{cluster:"localhost",primaryContent:n("settingsNetworkLocalhost"),secondaryContent:H.DEFAULT_LOCALHOST_RPC_URL}]),[l,n]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,n("settingsChangeNetworkPrimary")),e(i).createElement(ra,null,s.map((t=>e(i).createElement(Gn.ContentRow,{key:t.cluster,primaryContent:t.primaryContent,secondaryContent:t.secondaryContent,rightContent:o===t.cluster&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>{var e;(e=t.cluster)!==o&&r(e)}})))))},ca=R.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,ua=()=>{var t,n;const{t:a}=v.useTranslation(),{accountClient:l}=E.useSelectedSolanaAccount(),[o,r,s]=an.useStorage(c.StorageKeys.TrustedApplicationsByOwnerBrowser,{});if(r)return null;const u=l.publicKey.toString(),d=null!==(t=o[u])&&void 0!==t?t:{},m=null!==(n=Object.keys(d))&&void 0!==n?n:[],p=m.length>0;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,a("settingsTrustedAppsPrimary")),p?e(i).createElement(e(i).Fragment,null,e(i).createElement(ra,null,m.map((t=>{var n;return e(i).createElement(Gn.ContentRow,{key:t,primaryContent:null===(n=sn.parseURL(t))||void 0===n?void 0:n.host,secondaryContent:null,rightContent:e(i).createElement(ce.Button,{fontSize:12,width:"70px",theme:"warning",paddingY:5,onClick:()=>(e=>{const t=Object.assign({},d);delete t[e],s(Object.assign(Object.assign({},o),{[u]:t}))})(t)},a("settingsTrustedAppsRevoke"))})})))):e(i).createElement(ca,null,a("settingsNoTrustedApps")))},da=R.default(X.Text).attrs({size:16,weight:500,color:"white",textAlign:"left"})`
  margin-top: 30px;
  margin-bottom: 14px;
`,ma=R.default(ra)`
  padding-bottom: 20px;
`,pa=R.default(ra)`
  padding-left: 0px;
  padding-right: 0px;
`,ga=R.default(X.Text).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,ha=R.default(X.Text).attrs({size:14,lineHeight:20,weight:400,color:"#777",textAlign:"left"})`
  padding-bottom: 16px;
`,fa=()=>{const{t:t}=v.useTranslation(),[n,a]=i.useState(v.i18next.language);return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,t("settingsDisplayLanguage")),e(i).createElement(ma,null,H.SUPPORTED_LANGUAGES.map((t=>e(i).createElement(Gn.ContentRow,{key:t.value,primaryContent:t.displayValue,secondaryContent:null,rightContent:Vn.languageMatches(n,t.value)&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>{S.analytics.capture("displayLanguageChanged",{data:{targetLanguage:t.value}}),v.i18next.changeLanguage(t.value),a(t.value)}})))))},ya=()=>{const{t:t}=v.useTranslation(),{savedAddresses:n,recentAddresses:a}=Fe.useAddressBook(),{showAddAddressModal:l,showEditAddressModal:o}=b.useModals();return i.useEffect((()=>{S.analytics.capture("addressBookOpen")}),[]),e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,{icon:e(i).createElement(ae.PlusIcon,null),onIconClick:()=>l(void 0)},t("settingsAddressBookPrimary")),e(i).createElement(pa,null,n.length>0&&n.map((t=>e(i).createElement(Gn.ContentRow,{key:t.address,primaryContent:t.label,secondaryContent:null,rightContent:e(i).createElement(X.Text,{size:16,color:"#666666"},D.formatHashMedium(t.address,4)),onClick:()=>{o(t)}}))),a.length>0&&e(i).createElement(e(i).Fragment,null,e(i).createElement(da,null,t("settingsAddressBookRecentlyUsed")),a.map((n=>e(i).createElement(Gn.ContentRow,{key:n,primaryContent:e(i).createElement(ga,null,t("settingsAddressBookNoLabel")),secondaryContent:null,rightContent:e(i).createElement(X.Text,{size:16,color:"#666666"},D.formatHashMedium(n,4)),onClick:()=>{l(n)}}))))),0===n.length&&0===a.length&&e(i).createElement(ca,null,e(i).createElement(X.Text,{size:18,weight:500,color:"#666666"},t("settingsNoAddresses"))))},ba=()=>{const{t:t}=v.useTranslation(),{preferredExplorer:n,setPreferredExplorer:a}=Re.usePreferredExplorer(),l=Object.entries(qn.SUPPORTED_EXPLORERS).map((([e,t])=>({key:e,name:t.name}))),o=i.useCallback((e=>na(void 0,void 0,void 0,(function*(){a(e)}))),[a]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,t("settingsPreferredExplorers")),e(i).createElement(ra,null,l.map((t=>e(i).createElement(Gn.ContentRow,{key:t.key,primaryContent:t.name,secondaryContent:null,rightContent:t.key===n.type&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>o(t.key)})))))},Ea=()=>{const{t:t}=v.useTranslation(),{showChangePasswordModal:n,showChangeLockTimerModal:a}=b.useModals(),[l,o,r]=an.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),[s,u,d]=an.useStorage(c.StorageKeys.IsAnalyticsOptedOut,!1);return o||u?null:e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,t("settingsSecurityPrimary")),e(i).createElement(ra,null,e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsChangePasswordPrimary"),secondaryContent:t("settingsChangePasswordSecondary"),onClick:n}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsAutoLockTimerPrimary"),secondaryContent:t("settingsAutoLockTimerSecondary"),onClick:a}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsSuspiciousCollectiblesPrimary"),secondaryContent:t("settingsSuspiciousCollectiblesSecondary"),rightContent:e(i).createElement(Xn.ToggleSwitch,{id:"toggleSuspiciousCollectibles",checked:l,onChange:()=>r(!l)})}),e(i).createElement(Gn.ContentRow,{primaryContent:t("settingsSecurityAnalyticsPrimary"),secondaryContent:t("settingsSecurityAnalyticsSecondary"),rightContent:e(i).createElement(Xn.ToggleSwitch,{id:"toggleAnalytics",checked:!s,onChange:()=>d(!s)})}),e(i).createElement(ha,null,t("settingsSecurityAnalyticsHelper"))))};i=o("aZikt");var xa=o("ldtl8"),va=(E=o("HyeVU"),i=o("aZikt"),R=o("hHMPk"),v=o("ltHDB"),xa=o("ldtl8"),S=o("41J1p"),b=o("16KRF"),o("ExhNP")),ka=(ae=o("awYjP"),ne=o("elS0S"),X=o("kaQO6"),i=o("aZikt"),R=o("hHMPk"),ae=o("awYjP"),se=o("rkI0w"),X=o("kaQO6"),oe=o("45nY7"),o("cGG4P"));const wa=R.default.div`
  display: flex;
  align-items: center;
  input {
    font-size: 34px;
    line-height: 41px;
    font-weight: 400;
    padding: 0;
    background: none;
  }
`,Ta=R.default.div`
  width: 100%;
`,Sa=({assetButtonTitle:t,decimals:n,disabled:a,hasWarning:l,iconUrl:o,isLoading:r,value:s,onClick:c,onUserInput:u})=>e(i).createElement(wa,{hasWarning:l},r?e(i).createElement(Ta,null,e(i).createElement(oe.Spinner,{diameter:28,color:"#8A81F8"})):e(i).createElement(ka.NumericalInput,{name:"amount",border:"0",placeholder:"0",warning:l,value:s,decimalLimit:n,disabled:a,onUserInput:u}),e(i).createElement(Aa,{assetButtonTitle:t,iconUrl:o,onClick:c})),Ca=R.default.div`
  border-radius: 40px;
  background-color: #181818;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 6px;
  div {
    margin-right: 4px;
  }
  p {
    margin-right: 9px;
  }
  & > svg {
    fill: #ffffff;
    margin-right: 11px;
  }
  ${e=>e.isClickable?R.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,Aa=({assetButtonTitle:t,iconUrl:n,onClick:a})=>e(i).createElement(Ca,{isClickable:void 0!==a,onClick:a},e(i).createElement(se.TokenImage,{width:30,iconUrl:n,alt:t}),e(i).createElement(X.Text,{weight:600,size:16,color:"white"},t),void 0!==a&&e(i).createElement(ae.DownChevronIcon,{width:9})),Ma=()=>{const t=(()=>{const{t:e}=v.useTranslation(),t=va.useSwapperArgs(),n=xa.useSwapSellAssetProps(t),{showSwapSellAssetSelectModal:a}=b.useModals();return Object.assign(Object.assign({},n),{onSellAssetClicked:a,t:e})})();return e(i).createElement(Pa,Object.assign({},t))},Pa=e(i).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:a,iconUrl:l,notEnoughAssets:o,uiSellAmount:r,onSellAssetClicked:s,setMaxSellAmount:c,updateSellAmount:u,t:d})=>e(i).createElement(Ra,null,e(i).createElement(Ha,null,e(i).createElement(La,null,d("swapFlowYouPay")),e(i).createElement(Ka,{onClick:c},e(i).createElement(Da,null,d("swapperMax")," ",a))),e(i).createElement(Sa,{assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:o,iconUrl:l,isLoading:!1,onClick:s,onUserInput:u,value:r})))),Fa=e(i).memo((({assetButtonTitle:t,buyAmount:n,decimals:a,iconUrl:l,isFetchingQuote:o,onBuyAssetClicked:r,onSwitchTokens:s,t:c})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(Ia,null,e(i).createElement(za,null),e(i).createElement(Oa,{onClick:s},e(i).createElement(ae.VerticalDoubleArrowsIcon,{fill:"#FFFFFF",width:20}))),e(i).createElement(Ra,null,e(i).createElement(Ha,null,e(i).createElement(La,null,c("swapFlowYouReceive"))),e(i).createElement(Sa,{assetButtonTitle:t,decimals:a,disabled:!0,hasWarning:!1,iconUrl:l,isLoading:o,onClick:r,onUserInput:()=>{},value:n}))))),Ba=()=>{const t=(()=>{const{t:e}=v.useTranslation(),{showSwapBuyAssetSelectModal:t}=b.useModals(),n=i.useCallback((()=>{t()}),[t]),a=xa.useSwapBuyAssetProps(S.analytics),l=va.useSwapperArgs();return xa.useInitialAssets(l),Object.assign(Object.assign({},a),{onBuyAssetClicked:n,t:e})})();return e(i).createElement(Fa,Object.assign({},t))},Ra=R.default.div`
  margin-bottom: 5px;
`,Ha=R.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 14px;
`,La=R.default(X.Text).attrs({size:16,color:"#777",weight:500,lineHeight:19,textAlign:"left"})``,Da=R.default(X.Text).attrs({size:14,color:"#777",lineHeight:17,hoverColor:"#8A81F8",weight:500,textAlign:"left"})``,Ia=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Oa=R.default(ne.Circle).attrs({color:"#333333",diameter:40})`
  z-index: 0;
  cursor: pointer;
  &:hover:enabled {
    background: #444444;
  }
`,za=R.default.div`
  position: absolute;
  height: 1px;
  width: calc(100% + 2 * 16px); // TODO: create a constant for screen (tab) padding
  top: 20px;
  left: -16px; // TODO: use tab /screen padding
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Ka=R.default.div`
  cursor: pointer;
`;var Ua=o("jkJgs");i=o("aZikt"),v=o("ltHDB"),k=o("2zUeX"),va=o("ExhNP"),ie=o("7KDpr");const ja=["Fungible"],$a=({errorBody:t,errorTitle:n,status:a})=>"loading"===a?e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!0}):"failure"===a?e(i).createElement(wt,{title:n,description:t}):null;i=o("aZikt"),v=o("ltHDB"),xa=o("ldtl8"),b=o("16KRF"),ce=o("8xzWM");const Wa=()=>{const{showSwapReviewModal:t}=b.useModals(),{disabled:n,theme:a,title:l}=Na();return e(i).createElement(ce.Button,{type:"submit",theme:a,disabled:n,onClick:t},l)},Na=()=>{const{t:e}=v.useTranslation(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a}=xa.useSwapReviewButtonProps();return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText")}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound")}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText")}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance")}};i=o("aZikt"),R=o("hHMPk"),i=o("aZikt"),v=o("ltHDB"),R=o("hHMPk"),ee=o("99Anx"),xa=o("ldtl8"),X=o("kaQO6");const Va=R.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${ee.hexToRGB("#222222",.75)};
`,Za=R.default.div`
  background-color: ${ee.hexToRGB("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,Ga=R.default(X.Text).attrs({size:16,lineHeight:19,weight:500,color:"#fff",textAlign:"center"})``,Ya=()=>{const{t:t}=v.useTranslation();return xa.useResetSwapperOnMount(),e(i).createElement(Va,null,e(i).createElement(Za,null,e(i).createElement(Ga,null,t("swapAvailableOnMainnet"))))};w=o("bBAGA");const _a=R.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,Qa=({children:t})=>{const{data:n}=w.useFetchConnection();return"mainnet-beta"!==(null==n?void 0:n.cluster)?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ya,null),e(i).createElement(_a,null,t)):e(i).createElement(e(i).Fragment,null,t)},Ja=()=>{const t=(()=>{const{t:e}=v.useTranslation(),{owner:t,cluster:n,hiddenMints:a}=va.useSwapperArgs(),{error:l,isFetching:o}=k.useSPLAssets({publicKey:t,standards:ja,cluster:n,hiddenMints:a}),r=o,s=!!l;return i.useMemo((()=>({status:r?"loading":s?"failure":"success",errorTitle:e("errorAndOfflineSomethingWentWrong"),errorBody:e("errorAndOfflineUnableToFetchSwap")})),[s,r,e])})();return"success"!==t.status?e(i).createElement($a,Object.assign({},t)):e(i).createElement(Xa,null)},Xa=()=>{const t=qa();return xa.useSubscribeSwapQuoteToQueries(t),e(i).createElement(Qa,null,e(i).createElement(Ma,null),e(i).createElement(Ba,null),e(i).createElement(Ua.SwapCard,null),e(i).createElement(Wa,null))},qa=()=>{const{accountClient:e}=E.useSelectedSolanaAccount();return e.publicKey.toString()};i=o("aZikt"),R=o("hHMPk"),Me=o("d3pmY"),sn=o("f8jMK"),v=o("ltHDB"),hn=o("bXcFZ"),ee=o("99Anx"),Z=o("4o0lv"),i=o("aZikt");var el,tl=o("4BniU");!function(e){e.NetworkHealth="network-health",e.Cluster="cluster"}(el||(el={}));const nl=i.createContext(null),al=({children:t})=>{const n=[],[a,l]=i.useReducer(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),o=e=>l({type:"delete",payload:{id:e.id}});return e(i).createElement(nl.Provider,{value:{banners:a,createBanner:e=>{const{type:t,variant:n,message:a,dismissable:i=!0,icon:r,autohide:s=!0,delay:c=5e3,onClick:u}=e;t&&n&&a||console.error("You must supply a type, variant and message when creating a Banner.");const d=tl.v4();return l({type:"create",payload:{id:d,type:t,variant:n,message:a,dismissable:i,icon:r,autohide:s,delay:c,onClick:u}}),s&&setTimeout((()=>{o({id:d})}),c),d},deleteBanner:o,resetBanners:()=>l({type:"reset"})}},t)};b=o("16KRF"),w=o("bBAGA"),ae=o("awYjP");const ll=R.default.button`
  cursor: ${e=>e.onClick?"pointer":"default"};
  display: flex;
  align-items: center;
  vertical-align: middle;
  overflow: visible;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  width: 100%;
  padding: 10px 16px;
  svg {
    fill: #fff;
    margin-right: 8px;
  }
`,ol=R.default(Me.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case hn.CTAVariant.Primary:return ee.hexToRGB("#4E44CE",.7);case hn.CTAVariant.Success:return ee.hexToRGB("#21E56F",.7);case hn.CTAVariant.Warning:return ee.hexToRGB("#E5A221",.7);case hn.CTAVariant.Danger:return ee.hexToRGB("#EB3742",.7);default:return ee.hexToRGB("#E5A221",.7)}}};
  ${ll} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case hn.CTAVariant.Primary:return ee.hexToRGB("#4E44CE",.7);case hn.CTAVariant.Success:return ee.hexToRGB("#21E56F",.7);case hn.CTAVariant.Warning:return ee.hexToRGB("#E5A221",.7);case hn.CTAVariant.Danger:return ee.hexToRGB("#EB3742",.7);default:return ee.hexToRGB("#E5A221",.7)}}};
    }
  }
`,il=R.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  svg {
    margin-right: 10px;
  }
`,rl=R.default.button`
  cursor: pointer;
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  overflow: visible;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  &:focus,
  &:focus-visible {
    border-color: ${ee.hexToRGB("#FFFFFF",.3)};
  }
  svg {
    fill: #ffffff;
    margin: 0;
  }
`,sl=()=>{const{banners:t,createBanner:n,deleteBanner:a}=(()=>{const e=i.useContext(nl);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e})(),l=t[t.length-1],{showNetworkHealthModal:o}=b.useModals(),{t:r,i18n:s}=v.useTranslation(),c=w.useFetchConnection(),u=null==c?void 0:c.data,d=null==u?void 0:u.cluster,m=Z.useNetworkHealth(s.language).data;i.useEffect((()=>{if(!d)return;const e=t.find((e=>e.type===el.Cluster));e&&a({id:e.id}),"mainnet-beta"!==d&&n({type:el.Cluster,variant:hn.CTAVariant.Warning,message:r("connectionClusterInterpolated",{cluster:sn.capitalizeFirstLetter(d)}),dismissable:!1,autohide:!1})}),[d,r]),i.useEffect((()=>{if(!d)return;const l=t.find((e=>e.type===el.NetworkHealth));if("mainnet-beta"===d){if(m){const{bannerVariant:t,bannerMessage:r,notificationMessageTitle:s,notificationMessage:c}=m;!!t&&!!r?r!==(null==l?void 0:l.message)&&n({type:el.NetworkHealth,variant:t,message:r,dismissable:!1,icon:e(i).createElement(ae.ExclamationMarkCircleIcon,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:c&&s?()=>o({variant:t,title:s,message:c}):void 0}):l&&a({id:l.id})}}else l&&a({id:l.id})}),[d,m]);const p=i.useCallback((()=>{l&&a({id:l.id})}),[a,l]);return{banner:l,dismissBanner:p}},cl=e(i).memo((t=>{const{banner:n,dismissBanner:a}=t;return e(i).createElement(Me.AnimatePresence,null,n&&e(i).createElement(ol,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},e(i).createElement(ll,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon&&n.icon,e(i).createElement(il,null,n.message)),n.dismissable&&e(i).createElement(rl,{onClick:a},e(i).createElement(ae.CloseIcon,{width:14,fill:"#FFFFFF"}))))})),ul=()=>{const t=sl();return e(i).createElement(cl,Object.assign({},t))};i=o("aZikt"),R=o("hHMPk"),Me=o("d3pmY"),r=o("gDkTC"),T=o("cNv5c");var dl,ml=o("86k8E"),pl=(i=o("aZikt"),R=o("hHMPk"),Me=o("d3pmY"),/^\s+|\s+$/g),gl=/^[-+]0x[0-9a-f]+$/i,hl=/^0b[01]+$/i,fl=/^0o[0-7]+$/i,yl=parseInt,bl="object"==typeof n&&n&&n.Object===Object&&n,El="object"==typeof self&&self&&self.Object===Object&&self,xl=bl||El||Function("return this")(),vl=Object.prototype.toString,kl=Math.max,wl=Math.min,Tl=function(){return xl.Date.now()};function Sl(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Cl(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==vl.call(e)}(e))return NaN;if(Sl(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Sl(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(pl,"");var n=hl.test(e);return n||fl.test(e)?yl(e.slice(2),n?2:8):gl.test(e)?NaN:+e}dl=function(e,t,n){var a,l,o,i,r,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,o=l;return a=l=void 0,c=t,i=e.apply(o,n)}function g(e){return c=e,r=setTimeout(f,t),u?p(e):i}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=o}function f(){var e=Tl();if(h(e))return y(e);r=setTimeout(f,function(e){var n=t-(e-s);return d?wl(n,o-(e-c)):n}(e))}function y(e){return r=void 0,m&&a?p(e):(a=l=void 0,i)}function b(){var e=Tl(),n=h(e);if(a=arguments,l=this,s=e,n){if(void 0===r)return g(s);if(d)return r=setTimeout(f,t),p(s)}return void 0===r&&(r=setTimeout(f,t)),i}return t=Cl(t)||0,Sl(n)&&(u=!!n.leading,o=(d="maxWait"in n)?kl(Cl(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),b.cancel=function(){void 0!==r&&clearTimeout(r),c=0,a=s=l=r=void 0},b.flush=function(){return void 0===r?i:y(Tl())},b};const Al=R.default(Me.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8a81f8;
`,Ml=({refs:t,activeRoute:n,onFinishedAnimating:a,isAnimating:l})=>{const[{x:o,width:r},s]=i.useState({x:0,width:0}),c=i.useCallback((()=>{t&&t[n]&&t[n].current&&s({x:t[n].current.offsetLeft,width:t[n].current.getBoundingClientRect().width})}),[n,t]);return i.useEffect((()=>{c()}),[n,t,c]),i.useEffect((()=>{const t=e(dl)((()=>{c()}),500);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}})),e(i).createElement(Al,{animate:{x:o,width:r},style:{opacity:l?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},Pl=R.default.div`
  position: relative;
  height: 60px;
  display: flex;
`,Fl=R.default(Me.motion.div)`
  flex: 1;
  overflow: auto;
  padding: 15px;
`,Bl=R.default(ml.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,Rl=({items:t})=>{const n=r.useLocation(),[a,l]=i.useState(!1),o=t.find((e=>r.matchPath(n.pathname,{path:`/${e.route}`,exact:!0}))),s=t.reduce(((e,t)=>(e[t.route]=i.createRef(),e)),{}),c=o&&o.route;return e(i).createElement(e(i).Fragment,null,e(i).createElement(Me.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(r.Switch,{location:n,key:n.pathname},t.map((n=>e(i).createElement(r.Route,{key:n.route,path:`/${n.route}`,render:({history:a})=>{const l=a.entries;let o=0;if(l.length>1){const e=l[l.length-1].pathname,n=l[l.length-2].pathname;o=Hl(t,e,n)?10:-10}return e(i).createElement(Fl,{initial:{x:o,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.15}},e(i).createElement(T.DetailViewsProvider,null,n.renderContent()))}}))),e(i).createElement(r.Route,{key:"redirection",render:()=>e(i).createElement(Me.motion.div,{exit:{opacity:0},transition:{duration:.15}},e(i).createElement(r.Redirect,{to:t[0]?t[0].route:"/"}))}))),e(i).createElement(Pl,null,e(i).createElement(Ml,{refs:s,activeRoute:c,onFinishedAnimating:()=>l(!1),isAnimating:a}),e(i).createElement(Bl,{role:"tablist","aria-orientation":"horizontal"},t.map((t=>e(i).createElement(Il,{isActive:c===t.route,key:t.route,item:t,ref:s[t.route],isAnimating:a,startAnimating:()=>l(!0)}))))))},Hl=(e,t,n)=>e.findIndex((e=>e.route===Ll(t)))>e.findIndex((e=>e.route===Ll(n))),Ll=e=>"/"===e?e:e.replace(/^\/+/g,""),Dl=R.default(r.Link)`
  display: block;
  padding: 15px 0px;
  margin: 0px 12px;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: white;
    svg {
      fill: white;
    }
  }
  :after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    ${e=>e.$isActive&&!e.$isAnimating&&"background-color: #8A81F8;"}
    ${e=>e.$isAnimating&&"background-color: transparent;"}
  }
  svg {
    fill: #666;
    transition: fill 200ms ease;
    ${e=>e.$isActive&&"fill: white;"}
  }
`,Il=i.forwardRef((({isActive:t,item:n,isAnimating:a,startAnimating:l},o)=>e(i).createElement(Dl,{"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:t,$isAnimating:a,to:n.route,ref:o,onClick:l},n.renderButton())));var Ol=o("kQXty"),zl=o("iZDso");const Kl=()=>{const{value:t}=y.useAsync((()=>Ol.shouldRenderWhatsNewOverlay())),[n,a]=i.useState(!1);return i.useEffect((()=>{t&&a(!0)}),[t]),zl.useRootGroupEffect(),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(Jt.AccountHeader,null),e(i).createElement(Ol.WhatsNewOverlay,{onClose:()=>{Ol.acknowledgeWhatsNewOverlay(),a(!1)}})):e(i).createElement(e(i).Fragment,null,e(i).createElement(Jt.AccountHeader,null),e(i).createElement(ul,null),e(i).createElement(Ul,{shouldRenderWhatsNew:t}),e(i).createElement("div",{id:g.MODAL_ID}))},Ul=({shouldRenderWhatsNew:t})=>{const{accountClient:n}=E.useSelectedSolanaAccount(),[a,l]=x.useFeatureFlags(["kill-swapper","kill-collectibles"]),o=r.useHistory(),{closeAllModals:s}=b.useModals();i.useEffect((()=>{t||(s(),o.push(c.Path.Wallet))}),[n.publicKey,t]);const u=[{route:c.Path.Wallet,renderButton:()=>e(i).createElement(ae.WalletIcon,null),renderContent:()=>e(i).createElement(_t,null)},l?null:{route:c.Path.Collectibles,renderButton:()=>e(i).createElement(ae.CollectiblesIcon,{width:22}),renderContent:()=>e(i).createElement(Wn,null)},a?null:{route:c.Path.Swap,renderButton:()=>e(i).createElement(ae.DoubleArrowsIcon,{width:24,height:24}),renderContent:()=>e(i).createElement(Ja,null)},{route:c.Path.Notifications,renderButton:()=>e(i).createElement(ae.NotificationsIcon,null),renderContent:()=>e(i).createElement(qt,null)},{route:c.Path.Settings,renderButton:()=>e(i).createElement(ae.SettingsIcon,null),renderContent:()=>e(i).createElement(Nn.Settings,null)}].filter((e=>null!==e));return e(i).createElement(Rl,{items:u})};var jl=o("kHEYY");i=o("aZikt"),x=o("j1GR2"),w=o("bBAGA");const $l=({children:t})=>{const[n]=x.useFeatureFlags(["kill-rich-transactions-extension"]),{data:a}=w.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),o=!n&&l?I.RichTransactionHistoryProvider:V.TransactionHistoryProvider;return e(i).createElement(o,null,t)};E=o("HyeVU");var Wl=o("eg8ck"),Nl=(b=o("16KRF"),J=o("eW1cp"),o("fGPQl")),Vl=(Fe=o("j89eZ"),o("2R5r6")),Zl=(U=o("9R0of"),K=o("jhy6c"),o("3jzCT"));zl=o("iZDso");d.initSentry();const Gl=()=>{i.useEffect((()=>{u.setStorageValue(c.StorageKeys.PopupHasBeenSeen,!0)}),[]);const t=i.useCallback((t=>e(i).createElement(b.ModalsProvider,null,e(i).createElement(Vl.WalletMenuProvider,null,e(i).createElement(jl.Unlock,{onUnlock:t})))),[]),n=i.useCallback((()=>{p.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return zl.useCaptureOpen("popupOpen"),e(i).createElement(e(i).Fragment,null,e(i).createElement(m.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(h.PopupAndNotificationErrorBoundary,null,e(i).createElement(f.Main,{withBorder:!0},e(i).createElement(r.MemoryRouter,null,e(i).createElement(al,null,e(i).createElement(K.QueryProvider,null,e(i).createElement(Wl.BrowserProvider,null,e(i).createElement(Zl.ExtensionLockWrapper,{renderLocked:t,openOnboarding:n},e(i).createElement(U.TransactionsProvider,null,e(i).createElement(Nl.HardwareWalletProvider,null,e(i).createElement(E.SolanaAccountsProvider,null,e(i).createElement(Fe.AddressBookProvider,null,e(i).createElement(J.BlockchainProvider,null,e(i).createElement($l,null,e(i).createElement(b.ModalsProvider,null,e(i).createElement(Vl.WalletMenuProvider,null,e(i).createElement(Kl,null))))))))))))),e(i).createElement("div",{id:g.MODAL_ID})))))};s.render(e(i).createElement(Gl,null),document.getElementById("root"));define=__define;})(window.define);