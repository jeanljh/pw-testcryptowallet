import{a as R,b as E}from"./chunk-6GJE4RI5.js";import{a as F}from"./chunk-E5SPQ6GD.js";import"./chunk-RCXDI445.js";import{a as _}from"./chunk-6DKZGOGT.js";import"./chunk-GWKXKPCT.js";import{d as N,db as g,k as P,m as p,s as D}from"./chunk-FMF67RFP.js";import"./chunk-RFCRC6DA.js";import{d as I,f as C}from"./chunk-HQZCOMEL.js";import"./chunk-5SS664LD.js";import{b as y,g as v}from"./chunk-44NW6BSR.js";import"./chunk-CHXPHGEW.js";import"./chunk-3JCRVFH6.js";import"./chunk-UHG6ISVN.js";import"./chunk-EVXXECVZ.js";import{v as L}from"./chunk-TQDE7426.js";import"./chunk-5RCV3KPE.js";import"./chunk-X5YMBRTT.js";import"./chunk-34JK5YK5.js";import{a as U}from"./chunk-CM4ZFCT2.js";import"./chunk-RKMQYZSN.js";import"./chunk-MN377ENM.js";import{a as T}from"./chunk-6XVVS35Q.js";import"./chunk-COS4XKZ5.js";import{tb as j}from"./chunk-IJLITZAC.js";import{qd as m,yc as B}from"./chunk-GSVPXWLR.js";import"./chunk-P42QO3R7.js";import{V as f,a as O,r as W}from"./chunk-LYTSCHVN.js";import"./chunk-RCTLXTBM.js";import"./chunk-Z26KXQRL.js";import"./chunk-NUMCZRU4.js";import"./chunk-P5BPG5MC.js";import"./chunk-PPQ6BNOX.js";import{a as e,g as l,i as s,n as a}from"./chunk-NSVULBS3.js";s();a();var S=l(O(),1);var A=l(R(),1);s();a();var n=l(O(),1);s();a();var $=l(j(),1);var o=l(O(),1);var c=f.colors.legacy.spotNegative,q=p.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${f.colors.brand.white};
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,Q=p.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,V=p.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,J=p.a`
  text-decoration: underline;
  color: ${c};
`,u=new U,z=e(({origin:i,subdomain:t})=>{let{t:d}=W(),h=i?v(i):"",G=i??"",b=new URL(G).hostname,x=t==="true"?b:h,k=(0,$.toUnicode)(x),H=e(async()=>{if(t==="true"){let w=await u.get(m.UserWhitelistSubdomains),r=JSON.parse(`${w}`);r?r.push(b):r=[b],r=[...new Set(r)],u.set(m.UserWhitelistSubdomains,JSON.stringify(r))}else{let w=await u.get(m.UserWhitelistedOrigins),r=JSON.parse(`${w}`);r?r.push(h):r=[h],r=[...new Set(r)],u.set(m.UserWhitelistedOrigins,JSON.stringify(r))}self.location.href=i},"handleClick");return o.default.createElement(q,null,o.default.createElement(V,null,o.default.createElement(Q,null,o.default.createElement(D,{width:128,fill:f.colors.brand.white})),o.default.createElement(g,{size:30,color:c,weight:"600"},d("blocklistOriginDomainIsBlocked",{domainName:k||d("blocklistOriginThisDomain")})),o.default.createElement(g,{color:c},d("blocklistOriginSiteIsMalicious")),o.default.createElement(g,{color:c},o.default.createElement(L,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",o.default.createElement(J,{href:y,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",o.default.createElement(J,{href:y,rel:"noopener",target:"_blank"},"please file an issue"),".")),x?o.default.createElement(g,{color:c,onClick:H,hoverUnderline:!0},d("blocklistOriginIgnoreWarning",{domainName:k})):o.default.createElement(o.default.Fragment,null)))},"BlocklistOrigin");var X=e(()=>{let i;try{i=new URLSearchParams(self.location.search).get("origin")||"",new URL(i)}catch{i=""}return i},"getOriginParam"),Y=e(()=>new URLSearchParams(self.location.search).get("subdomain")||"","getSubdomainParam"),K=e(()=>{let i=(0,n.useMemo)(X,[]),t=(0,n.useMemo)(Y,[]);return n.default.createElement(N,{future:{v7_startTransition:!0}},n.default.createElement(F,null,n.default.createElement(z,{origin:i,subdomain:t})))},"Blocklist");T();B.init({provider:E});await I("frontend",C);var Z=document.getElementById("root"),oo=(0,A.createRoot)(Z);oo.render(S.default.createElement(P,{theme:_},S.default.createElement(K,null)));
//# sourceMappingURL=Phishing.js.map
