"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[9393],{46100:(e,o,t)=>{t.d(o,{Q:()=>p});var l,a=t(63470),r=t(83112),s=t(41368),n=t(77024),d=t(52322);e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var i,f,c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=(0,a.vU)({usersEmptyFolloweeHeader:{id:"zSvZ/m",defaultMessage:[{type:0,value:"You aren't following anyone"}]},userEmptyFolloweeBody:{id:"0vT0o4",defaultMessage:[{type:0,value:"You can follow any ETH address, including ENS names, to watch the address's balances and activity."}]},addressEmptyFolloweeHeader:{id:"/9HJQP",defaultMessage:[{type:0,value:"Not following anyone yet"}]},addressEmptyFolloweeBody:{id:"XkwIn0",defaultMessage:[{type:0,value:"This address isn't using Coinbase Wallet to follow anyone."}]}});function p(e){var o=e.address,t=(0,r.Z)().formatMessage;return(0,d.jsx)(n.u,{address:o,userHeaderTitle:t(u.usersEmptyFolloweeHeader),headerTitle:t(u.addressEmptyFolloweeHeader),userMessage:t(u.userEmptyFolloweeBody),nonUserMessage:t(u.addressEmptyFolloweeBody),illustration:(0,d.jsx)(s.Pictogram,{name:"addressBook",testID:"decentralizedIdentityIllustration"})})}c(p,"useIntl{{ formatMessage }}",(function(){return[r.Z]})),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileEmptyTabStates/EmptyFolloweesState.tsx"),i.register(p,"EmptyFolloweeState","/workspaces/apps/extension/src/screens/Profile/components/ProfileEmptyTabStates/EmptyFolloweesState.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},77599:(e,o,t)=>{t.d(o,{S:()=>p});var l,a=t(63470),r=t(83112),s=t(41368),n=t(77024),d=t(52322);e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var i,f,c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=(0,a.vU)({emptyFollowersHeader:{id:"XFGMaa",defaultMessage:[{type:0,value:"No followers yet"}]},emptyFollowersBodyForUsersAddress:{id:"lP6th6",defaultMessage:[{type:0,value:"If someone follows you, their address will appear here."}]},emptyFollowersBodyForOtherAddress:{id:"u/qobx",defaultMessage:[{type:0,value:"You can be the first! The owner of this address will see that you follow them."}]},followButton:{id:"3bBaCD",defaultMessage:[{type:0,value:"Follow"}]}});function p(e){var o=e.address,t=(0,r.Z)().formatMessage;return(0,d.jsx)(n.u,{address:o,headerTitle:t(u.emptyFollowersHeader),nonUserMessage:t(u.emptyFollowersBodyForOtherAddress),userMessage:t(u.emptyFollowersBodyForUsersAddress),illustration:(0,d.jsx)(s.Pictogram,{name:"decentralizedIdentity",testID:"decentralizedIdentityIllustration"})})}c(p,"useIntl{{ formatMessage }}",(function(){return[r.Z]})),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(u,"messages","/workspaces/apps/extension/src/screens/Profile/components/ProfileEmptyTabStates/EmptyFollowersState.tsx"),i.register(p,"EmptyFollowersState","/workspaces/apps/extension/src/screens/Profile/components/ProfileEmptyTabStates/EmptyFollowersState.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)},77024:(e,o,t)=>{t.d(o,{u:()=>p});var l,a=t(2784),r=t(99347),s=t(65158),n=t(48972),d=t(61641),i=t(52322);e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var f,c,u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=(0,a.memo)(u((function(e){var o=e.address,t=e.headerTitle,l=e.userMessage,a=e.nonUserMessage,f=e.illustration,c=e.userHeaderTitle,u=e.testID,p=(0,s.S)(),w=(0,r.W)(p,o);return(0,i.jsxs)(n.VStack,{spacingTop:2,justifyContent:"center",alignItems:"center",gap:1,spacingHorizontal:3,testID:u,children:[f,(0,i.jsx)(d.TextTitle3,{align:"center",as:"h3",children:c&&w?c:t}),(0,i.jsx)(d.TextBody,{align:"center",as:"p",color:"foregroundMuted",children:w?l:a})]})}),"useProfileAddress{usersAddress}",(function(){return[s.S]})));(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(p,"EmptyState","/workspaces/apps/extension/src/screens/Profile/components/ProfileEmptyTabStates/EmptyState.tsx"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)},59393:(e,o,t)=>{t.r(o),t.d(o,{ProfileFollowInfo:()=>g});var l,a=t(2784),r=t(4517),s=t(17726),n=t(15721),d=t(48972),i=t(38595),f=t(93260),c=t(40292),u=t(52322);e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var p,w,y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=(0,a.memo)(y((function(){var e=(0,r.k6)().goBack,o=(0,r.UO)().query,t=(0,n.j)(o),l=t.followee,a=t.follower,p=t.title;return(0,u.jsxs)(d.VStack,{height:"100%",children:[(0,u.jsx)(d.VStack,{spacingHorizontal:1,children:(0,u.jsx)(s.w,{onBack:e,title:p})}),(0,u.jsx)(d.Box,{spacingHorizontal:3,children:(0,u.jsx)(c.H,{query:o,followerAddress:a.address})}),(0,u.jsxs)(r.rs,{children:[(0,u.jsx)(r.AW,{exact:!0,path:"/profile/".concat(o,"/follow-info/followers"),children:(0,u.jsx)(f.o,{address:l.address})}),(0,u.jsx)(r.AW,{exact:!0,path:"/profile/".concat(o,"/follow-info/following"),children:(0,u.jsx)(i.t,{address:l.address})})]})]})}),"useHistory{{ goBack }}\nuseParams{{ query }}\nuseProfileDetails{{ followee, follower, title }}",(function(){return[r.k6,r.UO,n.j]})));(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&p.register(g,"ProfileFollowInfo","/workspaces/apps/extension/src/screens/Profile/screens/ProfileFollowInfo/ProfileFollowInfo.tsx"),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)},40292:(e,o,t)=>{t.d(o,{H:()=>m});var l,a=t(2784),r=t(63470),s=t(83112),n=t(4517),d=t(25641),i=t(99312),f=t(31703),c=t(5831),u=t(34291),p=t.n(u),w=t(15796),y=t(52322);e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var g,v,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},H=(0,r.vU)({followers:{id:"QG9N1O",defaultMessage:[{type:0,value:"Followers"}]},following:{id:"H16mEC",defaultMessage:[{type:0,value:"Following"}]}}),m=(0,a.memo)(b((function(e){var o=e.query,t=e.followerAddress,l=(0,d.x)("replace"),r=(0,s.Z)().formatMessage,u=(0,n.TH)().pathname,g=(0,a.useMemo)((function(){return"/profile/".concat(o)}),[o]),v=(0,a.useCallback)((function(){t&&(0,c.Av)((0,i.p)(t)),l({query:o,subpage:"follow-info/followers"})}),[l,o,t]),b=(0,a.useCallback)((function(){t&&(0,c.nW)((0,i.p)(t)),l({query:o,subpage:"follow-info/following"})}),[l,o,t]),m=(0,a.useMemo)((function(){return[{id:"followers",label:r(H.followers),onPress:v},{label:r(H.following),onPress:b,id:"following"}]}),[r,v,b]),L=(0,a.useMemo)((function(){return(0,n.LX)(u,(0,f.A)(g,"follow-info/followers"))?"followers":"following"}),[u,g]);return(0,y.jsx)(w.TabNavigation,{testID:"profile-follow-nav",tabs:m,value:L,onChange:p()})}),"useNavigateToProfilePage{navigateToProfile}\nuseIntl{{ formatMessage }}\nuseLocation{{ pathname }}\nuseMemo{root}\nuseCallback{handleFollowersPress}\nuseCallback{handleFollowingPress}\nuseMemo{tabs}\nuseMemo{value}",(function(){return[d.x,s.Z,n.TH]})));(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(H,"messages","/workspaces/apps/extension/src/screens/Profile/screens/ProfileFollowInfo/ProfileFollowInfoSelector.tsx"),g.register(m,"ProfileFollowInfoSelector","/workspaces/apps/extension/src/screens/Profile/screens/ProfileFollowInfo/ProfileFollowInfoSelector.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},64061:(e,o,t)=>{t.d(o,{v:()=>i});var l,a=t(41517),r=t(48972),s=t(52322);e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var n,d;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(e){var o=e.isLoading,t=e.children,l=e.testID;return(0,s.jsx)(a.q,{count:7,isLoading:o,spacingVertical:1,spacingHorizontal:3,children:(0,s.jsx)(r.VStack,{spacingVertical:1,spacingHorizontal:3,height:"100%",overflow:"auto",testID:l,children:t})})}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(i,"ProfileFollowList","/workspaces/apps/extension/src/screens/Profile/screens/ProfileFollowInfo/ProfileFollowList.tsx"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},38595:(e,o,t)=>{t.d(o,{t:()=>p});var l,a,r,s=t(46100),n=t(26691),d=t(99347),i=t(12910),f=t(94173),c=t(64061),u=t(52322);function p(e){var o=e.address,t=void 0===o?"":o,l=(0,f.G)().profile,a=(0,i.v)(t,null==l?void 0:l.address,{size:50}),r=a.followees,p=a.isLoading;return(0,u.jsx)(c.v,{isLoading:p||!t,testID:"profile-followee-list",children:r.length>0?r.map((function(e){return(0,u.jsx)(n.k,{address:e.address,ensDomain:e.ensDomain,isFollowing:e.isFollowing,analyticsContext:e.isFollowing?"profile_following":"discovery",hideAction:(0,d.W)(null==l?void 0:l.address,e.address)},e.address)})):(0,u.jsx)(s.Q,{address:t})})}e=t.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(p,"useUserProfile{{ profile }}\nuseAddressFollowees{{ followees, isLoading }}",(function(){return[f.G,i.v]})),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&a.register(p,"ProfileFollowees","/workspaces/apps/extension/src/screens/Profile/screens/ProfileFollowInfo/ProfileFollowees.tsx"),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)},93260:(e,o,t)=>{t.d(o,{o:()=>v});var l=t(2784),a=t(77599),r=t(26691),s=t(99347),n=t(82066),d=t(98664);function i(e,o,t){const{data:l,isLoading:a}=(0,n.useQuery)([d.O_.GetFollowers,e],(async()=>(0,d.ny)(e,o,t)),{enabled:!!e,notifyOnChangeProps:["data"]});return{followers:l?.wallets||[],isLoading:a}}var f,c=t(94173),u=t(64061),p=t(52322);e=t.hmd(e),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&f(e);var w,y,g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=(0,l.memo)(g((function(e){var o=e.address,t=void 0===o?"":o,l=(0,c.G)().profile,n=i(t,null==l?void 0:l.address,{size:50}),d=n.followers,f=n.isLoading;return(0,p.jsx)(u.v,{isLoading:f||!t,testID:"profile-follower-list",children:d.length>0?d.map((function(e){return(0,p.jsx)(r.k,{address:e.address,ensDomain:e.ensDomain,isFollowing:e.isFollowing,analyticsContext:e.isFollowing?"profile_followers":"discovery",hideAction:(0,s.W)(null==l?void 0:l.address,e.address)},e.address)})):(0,p.jsx)(a.S,{address:t})})}),"useUserProfile{{ profile }}\nuseAddressFollowers{{ followers, isLoading }}",(function(){return[c.G,i]})));(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&w.register(v,"ProfileFollowers","/workspaces/apps/extension/src/screens/Profile/screens/ProfileFollowInfo/ProfileFollowers.tsx"),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)},31703:(e,o,t)=>{function l(e,o){const t=o?`${e}/${o}`:e;switch(o){case"crypto":case"nfts":case"activity":case"follow-info/followers":case"follow-info/following":return{path:t,strict:!1,exact:!1};default:return{path:t,strict:!1,exact:!0}}}t.d(o,{A:()=>l})},99347:(e,o,t)=>{function l(e,o){return e?.toLowerCase()===o?.toLowerCase()}t.d(o,{W:()=>l})}}]);
//# sourceMappingURL=9393.js.map