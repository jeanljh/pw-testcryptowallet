import{a as q}from"./chunk-SNLK4N3B.js";import{H as R,I as w,h as u,m as v}from"./chunk-IWYOR6BJ.js";import{l as i,n as m}from"./chunk-FMF67RFP.js";import{f as b}from"./chunk-HQZCOMEL.js";import{a as S,b as s}from"./chunk-CM4ZFCT2.js";import{Qa as k}from"./chunk-COS4XKZ5.js";import{Ac as c,wc as l,xc as a}from"./chunk-GSVPXWLR.js";import{V as d}from"./chunk-LYTSCHVN.js";import{G as g,H as x}from"./chunk-PPQ6BNOX.js";import{a as y,i as n,n as o}from"./chunk-NSVULBS3.js";n();o();var J=new k(s,b,q);n();o();var p,I=new S,_=y(async()=>p||(p=new v(new w),p),"juiceboxClient"),L={storage:I,authRepository:b,juiceboxClient:_},h=R(L);h.subscribe(u.RotationResult,({type:e,didRotate:t})=>{let r=`Se*dless Bundle Rotation Result: ${e}, didRotate: ${t}`;c.addBreadcrumb(a.Seedless,r,l.Info),s.capture("seedlessBundleRotationResult",{data:{type:e,didRotate:t}})});h.subscribe(u.RecoverResult,({type:e,reason:t})=>{let r=`Se*dless Bundle Recover Result: ${e}`;t&&(r+=`, reason: ${t}`),c.addBreadcrumb(a.Seedless,r,l.Info),s.capture("seedlessBundleRecoverResult",{data:{type:e,reason:t}})});h.subscribe(u.BackupResult,({type:e,didBackup:t})=>{let r=`Se*dless Bundle Backup Result: ${e}, didBackup: ${t}`;c.addBreadcrumb(a.Seedless,r,l.Info),s.capture("seedlessBundleBackupResult",{data:{type:e,didBackup:t}})});n();o();n();o();var $=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},C=i(B||(B=$([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`]))),ee=m(j||(j=$(["",""],["",""])),C),T=C,B,j;var O=i`
  ::-webkit-scrollbar {
    background: ${d.colors.legacy.areaBase};
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${d.colors.legacy.elementBase};
    border-radius: 8px;
  }
`,z=i`
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    scrollbar-width: none; /* Also needed to disable scrollbar Firefox */
  }
`,ae=m`
    ${T}

    body, html, * {
        box-sizing: border-box;
        font-family: 'Inter', 'Roboto', Arial;
        user-select: none;
        color: currentColor;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
    }
    input, textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    body {
        color: ${d.colors.legacy.textBase};
        background: ${e=>e.backgroundColor};
        min-height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    *:focus, *:focus-within {
        outline-color: transparent !important;
        outline-style: none !important;
        outline-width: 0px !important;
    }

    ${g||x?z:O}
`;export{J as a,h as b,ae as c};
//# sourceMappingURL=chunk-O7I7I5Z7.js.map
