import{c as tt}from"./chunk-PYLKOKDS.js";import{l as et,m as K}from"./chunk-FMF67RFP.js";import{V as Y,a as l,c as $n,db as An}from"./chunk-LYTSCHVN.js";import{a as o,g as s,i as E,n as R}from"./chunk-NSVULBS3.js";E();R();E();R();E();R();var y=s(l(),1);E();R();var _=s(l(),1);E();R();var $=s(l(),1);E();R();var rt=s(l(),1),ot=s(l(),1),oe=s(l(),1),it=s(l(),1),Fn=s(l(),1),ye=s(l(),1),ct=s(l(),1),st=s(l(),1),ae=s(l(),1),ue=s(l(),1),Un=s(l(),1),dt=s(l(),1),Ce=s(l(),1),pt=s(l(),1),mt=s(l(),1);function nt(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}o(nt,"canUseDOM");function _n(t){return!!(t&&{}.toString.call(t)=="[object Function]")}o(_n,"isFunction");function Wn(t,e){if(t!=null)if(_n(t))t(e);else try{t.current=e}catch{throw new Error(`Cannot assign value "${e}" to ref "${t}"`)}}o(Wn,"assignRef");function at(...t){return(0,ot.useCallback)(e=>{for(let n of t)Wn(n,e)},t)}o(at,"useComposedRefs");function ut(t){return nt()?t?t.ownerDocument:document:null}o(ut,"getOwnerDocument");function lt(){let[,t]=(0,ae.useState)(Object.create(null));return(0,ae.useCallback)(()=>{t(Object.create(null))},[])}o(lt,"useForceUpdate");var ft=nt()?ue.useLayoutEffect:ue.useEffect;var ht=s($n(),1);var Bn=o(({children:t,type:e="reach-portal",containerRef:n})=>{let r=$.useRef(null),a=$.useRef(null),i=lt();return $.useEffect(()=>{n!=null&&(typeof n!="object"||!("current"in n)?console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`."):n.current==null&&console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."))},[n]),ft(()=>{if(!r.current)return;let u=r.current.ownerDocument,c=n?.current||u.body;return a.current=u?.createElement(e),c.appendChild(a.current),i(),()=>{a.current&&c&&c.removeChild(a.current)}},[e,i,n]),a.current?(0,ht.createPortal)(t,a.current):$.createElement("span",{ref:r})},"PortalImpl"),xe=o(({unstable_skipInitialRender:t,...e})=>{let[n,r]=$.useState(!1);return $.useEffect(()=>{t&&r(!0)},[t]),t&&!n?null:$.createElement(Bn,{...e})},"Portal");xe.displayName="Portal";E();R();var A=s(l(),1);E();R();var Hn=["bottom","height","left","right","top","width"],jn=o(function(e,n){return e===void 0&&(e={}),n===void 0&&(n={}),Hn.some(function(r){return e[r]!==n[r]})},"rectChanged"),H=new Map,wt,Xn=o(function t(){var e=[];H.forEach(function(n,r){var a=r.getBoundingClientRect();jn(a,n.rect)&&(n.rect=a,e.push(n))}),e.forEach(function(n){n.callbacks.forEach(function(r){return r(n.rect)})}),wt=self.requestAnimationFrame(t)},"run");function Yn(t,e){return{observe:o(function(){var r=H.size===0;H.has(t)?H.get(t).callbacks.push(e):H.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),r&&Xn()},"observe"),unobserve:o(function(){var r=H.get(t);if(r){var a=r.callbacks.indexOf(e);a>=0&&r.callbacks.splice(a,1),r.callbacks.length||H.delete(t),H.size||cancelAnimationFrame(wt)}},"unobserve")}}o(Yn,"observeRect");var gt=Yn;E();R();var bt=s(l(),1),zn=s(l(),1),ie=s(l(),1),vt=s(l(),1),Vn=s(l(),1),De=s(l(),1),Et=s(l(),1),Rt=s(l(),1),yt=s(l(),1),ce=s(l(),1),qn=s(l(),1),Ct=s(l(),1),ke=s(l(),1),xt=s(l(),1),St=s(l(),1);function Kn(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}o(Kn,"canUseDOM");function Se(t){return typeof t=="boolean"}o(Se,"isBoolean");function Ie(t){return!!(t&&{}.toString.call(t)=="[object Function]")}o(Ie,"isFunction");var se=Kn()?ce.useLayoutEffect:ce.useEffect;var Qn=o(({onChange:t,observe:e=!0,children:n})=>{let r=A.useRef(null),a=le(r,{observe:e,onChange:t});return n({ref:r,rect:a})},"Rect");Qn.displayName="Rect";function le(t,e,n){let r,a;Se(e)?r=e:(r=e?.observe??!0,a=e?.onChange),Ie(n)&&(a=n),A.useEffect(()=>{Se(e)&&console.warn("Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe")},[e]),A.useEffect(()=>{Ie(n)&&console.warn("Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange")},[n]);let[i,u]=A.useState(t.current),c=A.useRef(!1),w=A.useRef(!1),[b,p]=A.useState(null),m=A.useRef(a);return se(()=>{m.current=a,t.current!==i&&u(t.current)}),se(()=>{i&&!c.current&&(c.current=!0,p(i.getBoundingClientRect()))},[i]),se(()=>{if(!r)return;let v=i;if(w.current||(w.current=!0,v=t.current),!v){console.warn("You need to place the ref");return}let h=gt(v,C=>{m.current?.(C),p(C)});return h.observe(),()=>{h.unobserve()}},[r,i,t]),b}o(le,"useRect");E();R();var Gn=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Te=Gn.join(","),kt=typeof Element>"u",q=kt?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Pe=!kt&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Zn=o(function(e,n,r){var a=Array.prototype.slice.apply(e.querySelectorAll(Te));return n&&q.call(e,Te)&&a.unshift(e),a=a.filter(r),a},"getCandidates"),Jn=o(function t(e,n,r){for(var a=[],i=Array.from(e);i.length;){var u=i.shift();if(u.tagName==="SLOT"){var c=u.assignedElements(),w=c.length?c:u.children,b=t(w,!0,r);r.flatten?a.push.apply(a,b):a.push({scope:u,candidates:b})}else{var p=q.call(u,Te);p&&r.filter(u)&&(n||!e.includes(u))&&a.push(u);var m=u.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(u),v=!r.shadowRootFilter||r.shadowRootFilter(u);if(m&&v){var h=t(m===!0?u.children:m.children,!0,r);r.flatten?a.push.apply(a,h):a.push({scope:u,candidates:h})}else i.unshift.apply(i,u.children)}}return a},"getCandidatesIteratively"),Tt=o(function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},"getTabindex"),er=o(function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},"sortOrderedTabbables"),Pt=o(function(e){return e.tagName==="INPUT"},"isInput"),tr=o(function(e){return Pt(e)&&e.type==="hidden"},"isHiddenInput"),nr=o(function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},"isDetailsWithSummary"),rr=o(function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},"getCheckedRadio"),or=o(function(e){if(!e.name)return!0;var n=e.form||Pe(e),r=o(function(c){return n.querySelectorAll('input[type="radio"][name="'+c+'"]')},"queryRadios"),a;if(typeof self<"u"&&typeof self.CSS<"u"&&typeof self.CSS.escape=="function")a=r(self.CSS.escape(e.name));else try{a=r(e.name)}catch(u){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",u.message),!1}var i=rr(a,e.form);return!i||i===e},"isTabbableRadio"),ar=o(function(e){return Pt(e)&&e.type==="radio"},"isRadio"),ur=o(function(e){return ar(e)&&!or(e)},"isNonTabbableRadio"),It=o(function(e){var n=e.getBoundingClientRect(),r=n.width,a=n.height;return r===0&&a===0},"isZeroArea"),ir=o(function(e,n){var r=n.displayCheck,a=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var i=q.call(e,"details>summary:first-of-type"),u=i?e.parentElement:e;if(q.call(u,"details:not([open]) *"))return!0;var c=Pe(e).host,w=c?.ownerDocument.contains(c)||e.ownerDocument.contains(e);if(!r||r==="full"){if(typeof a=="function"){for(var b=e;e;){var p=e.parentElement,m=Pe(e);if(p&&!p.shadowRoot&&a(p)===!0)return It(e);e.assignedSlot?e=e.assignedSlot:!p&&m!==e.ownerDocument?e=m.host:e=p}e=b}if(w)return!e.getClientRects().length}else if(r==="non-zero-area")return It(e);return!1},"isHidden"),cr=o(function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var a=n.children.item(r);if(a.tagName==="LEGEND")return q.call(n,"fieldset[disabled] *")?!0:!a.contains(e)}return!0}n=n.parentElement}return!1},"isDisabledFromFieldset"),sr=o(function(e,n){return!(n.disabled||tr(n)||ir(n,e)||nr(n)||cr(n))},"isNodeMatchingSelectorFocusable"),Dt=o(function(e,n){return!(ur(n)||Tt(n)<0||!sr(e,n))},"isNodeMatchingSelectorTabbable"),lr=o(function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},"isValidShadowRootTabbable"),fr=o(function t(e){var n=[],r=[];return e.forEach(function(a,i){var u=!!a.scope,c=u?a.scope:a,w=Tt(c,u),b=u?t(a.candidates):c;w===0?u?n.push.apply(n,b):n.push(c):r.push({documentOrder:i,tabIndex:w,item:a,isScope:u,content:b})}),r.sort(er).reduce(function(a,i){return i.isScope?a.push.apply(a,i.content):a.push(i.content),a},[]).concat(n)},"sortByOrder"),W=o(function(e,n){n=n||{};var r;return n.getShadowRoot?r=Jn([e],n.includeContainer,{filter:Dt.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:lr}):r=Zn(e,n.includeContainer,Dt.bind(null,n)),fr(r)},"tabbable");var Q=_.forwardRef(o(function({unstable_skipInitialPortalRender:e,...n},r){return _.createElement(xe,{unstable_skipInitialRender:e},_.createElement(Lt,{ref:r,...n}))},"Popover2"));Q.displayName="Popover";var Lt=_.forwardRef(o(function({as:e="div",targetRef:n,position:r=mr,unstable_observableRefs:a=[],...i},u){let c=_.useRef(null),w=le(c,{observe:!i.hidden}),b=le(n,{observe:!0}),p=at(c,u);return wr(n,c),_.createElement(e,{"data-reach-popover":"",ref:p,...i,style:{position:"absolute",...dr(r,b,w,...a),...i.style}})},"PopoverImpl2"));Lt.displayName="PopoverImpl";function dr(t,e,n,...r){return n?t(e,n,...r.map(a=>a.current)):{visibility:"hidden"}}o(dr,"getStyles");function pr(t,e,n){return{top:n?`${t.top-e.height+self.pageYOffset}px`:`${t.top+t.height+self.pageYOffset}px`}}o(pr,"getTopPosition");var mr=o((t,e)=>{if(!t||!e)return{};let{directionRight:n,directionUp:r}=hr(t,e);return{left:n?`${t.right-e.width+self.pageXOffset}px`:`${t.left+self.pageXOffset}px`,...pr(t,e,r)}},"positionDefault");function hr(t,e,n=0,r=0){let a={top:t.top-e.height<0,right:self.innerWidth<t.left+e.width-n,bottom:self.innerHeight<t.bottom+e.height-r,left:t.left+t.width-e.width<0},i=a.right&&!a.left,u=a.left&&!a.right,c=a.bottom&&!a.top,w=a.top&&!a.bottom;return{directionRight:i,directionLeft:u,directionUp:c,directionDown:w}}o(hr,"getCollisions");function wr(t,e){let n=ut(t.current);function r(f){f.key==="Tab"&&e.current&&W(e.current).length===0||(f.key==="Tab"&&f.shiftKey?b(f)?p(f):m(f)?v(f):C(f)&&k():f.key==="Tab"&&(i()?u(f):c()?w(f):h(f)&&k()))}o(r,"handleKeyDown"),_.useEffect(()=>(n.addEventListener("keydown",r),()=>{n.removeEventListener("keydown",r)}),[]);function a(){let f=W(n),d=f&&t.current?f.indexOf(t.current):-1,T=f&&f[d+1];return e.current&&e.current.contains(T||null)?!1:T}o(a,"getElementAfterTrigger");function i(){return t.current?t.current===n.activeElement:!1}o(i,"tabbedFromTriggerToPopover");function u(f){let d=e.current&&W(e.current);d&&d[0]&&(f.preventDefault(),d[0].focus())}o(u,"focusFirstPopoverTabbable");function c(){if(e.current?e.current.contains(n.activeElement||null):!1){let d=e.current&&W(e.current);return!!(d&&d[d.length-1]===n.activeElement)}return!1}o(c,"tabbedOutOfPopover");function w(f){let d=a();d&&(f.preventDefault(),d.focus())}o(w,"focusTabbableAfterTrigger");function b(f){if(!f.shiftKey)return;let d=a();return f.target===d}o(b,"shiftTabbedFromElementAfterTrigger");function p(f){let d=e.current&&W(e.current),T=d&&d[d.length-1];T&&(f.preventDefault(),T.focus())}o(p,"focusLastTabbableInPopover");function m(f){let d=e.current&&W(e.current);return d?d.length===0?!1:f.target===d[0]:!1}o(m,"shiftTabbedOutOfPopover");function v(f){f.preventDefault(),t.current?.focus()}o(v,"focusTriggerRef");function h(f){let d=e.current?W(n).filter(T=>!e.current.contains(T)):null;return d?f.target===d[d.length-1]:!1}o(h,"tabbedToBrowserChrome");function C(f){return f.target===W(n)[0]}o(C,"shiftTabbedToBrowserChrome");let x=[];function k(){let f=e.current&&W(e.current);f&&(f.forEach(d=>{x.push([d,d.tabIndex]),d.tabIndex=-1}),n.addEventListener("focusin",S))}o(k,"disableTabbablesInPopover");function S(){n.removeEventListener("focusin",S),x.forEach(([f,d])=>{f.tabIndex=d})}o(S,"enableTabbablesInPopover")}o(wr,"useSimulateTabNavigationForReactTree");E();R();var g=s(l(),1);E();R();var z=s(l(),1);E();R();var Nt=s(l(),1),Ot=s(l(),1),j=s(l(),1),_t=s(l(),1),br=s(l(),1),Ne=s(l(),1),Wt=s(l(),1),Ft=s(l(),1),fe=s(l(),1),de=s(l(),1),vr=s(l(),1),me=s(l(),1),Oe=s(l(),1),we=s(l(),1),Ht=s(l(),1);function Mt(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}o(Mt,"canUseDOM");function M(t,e){return n=>{if(t&&t(n),!n.defaultPrevented)return e(n)}}o(M,"composeEventHandlers");function Le(t){return!!(t&&{}.toString.call(t)=="[object Function]")}o(Le,"isFunction");function $t(t){return typeof t=="string"}o($t,"isString");function gr(t,e){if(t!=null)if(Le(t))t(e);else try{t.current=e}catch{throw new Error(`Cannot assign value "${e}" to ref "${t}"`)}}o(gr,"assignRef");function G(...t){return(0,Ot.useCallback)(e=>{for(let n of t)gr(n,e)},t)}o(G,"useComposedRefs");function Z(t){return Mt()?t?t.ownerDocument:document:null}o(Z,"getOwnerDocument");function At(t,e){let n=j.createContext(e);function r(i){let{children:u,...c}=i,w=j.useMemo(()=>c,Object.values(c));return j.createElement(n.Provider,{value:w},u)}o(r,"Provider");function a(i){let u=j.useContext(n);if(u)return u;if(e)return e;throw Error(`${i} must be rendered inside of a ${t} component.`)}return o(a,"useContext2"),n.displayName=`${t}Context`,r.displayName=`${t}Provider`,[r,a]}o(At,"createContext2");function J(t){return"which"in t?t.which===3:"button"in t?t.button===2:!1}o(J,"isRightClick");function ee(...t){return t.filter(e=>e!=null).join("--")}o(ee,"makeId");function Me(){}o(Me,"noop");function Ut(){let[,t]=(0,fe.useState)(Object.create(null));return(0,fe.useCallback)(()=>{t(Object.create(null))},[])}o(Ut,"useForceUpdate");var pe=Mt()?de.useLayoutEffect:de.useEffect;function he(t){let e=(0,me.useRef)(null);return(0,me.useEffect)(()=>{e.current=t},[t]),e.current}o(he,"usePrevious");function Bt(t,e){let[n,r]=(0,we.useState)(e),a=(0,we.useCallback)(i=>{t.current=i,r(i)},[]);return[n,a]}o(Bt,"useStatefulRefValue");var $e=!1,Er=0;function jt(){return++Er}o(jt,"genId");var Xt=z.useId;function Yt(t){if(Xt!==void 0){let a=Xt();return t??a}let e=t??($e?jt():null),[n,r]=z.useState(e);return pe(()=>{n===null&&r(jt())},[]),z.useEffect(()=>{$e===!1&&($e=!0)},[]),t??n??void 0}o(Yt,"useId");E();R();var N=s(l(),1);function zt(t,e={}){let r=N.createContext({descendants:[],registerDescendant:o(()=>Me,"registerDescendant"),...e});return r.displayName=t,r}o(zt,"createDescendantContext");function Vt(t,e,n){let r=Ut(),{registerDescendant:a,descendants:i}=N.useContext(e),u=n??i.findIndex(c=>c.element===t.element);return pe(()=>(t.element||r(),a({...t,index:u})),[t,r,u,a,...Object.values(t)]),u}o(Vt,"useDescendant");function qt(){return N.useState([])}o(qt,"useDescendantsInit");function Qt(t){return N.useContext(t).descendants}o(Qt,"useDescendants");function Gt({context:t,children:e,items:n,set:r}){let a=N.useCallback(({element:i,index:u,...c})=>i?(r(w=>{if(u!=null&&u!==-1)return Kt(w,{element:i,index:u,...c},u);if(w.length===0)return[{...c,element:i,index:0}];if(w.find(m=>m.element===i))return console.warn(`[reach-ui]: \`useDescendant\` was called with an element that was already registered.

If you are using the \`@reach/descendants\` package directly, make sure to only register descendants once. Registering a descendant more than once will lead to bugs in your app.

If you are using another \`reach-ui\` package, this is probably our bug!

To report a bug, open a new issue:

  https://github.com/reach/reach-ui/issues/new?assignees=&labels=&template=Bug_report.md

IMPORTANT: this check will only run in the development build, so if you see this warning please be aware that your app may crash when deployed.`),yr(w);let b=Rr(w,i),p;return b===-1?p=[...w,{...c,element:i,index:w.length}]:p=Kt(w,{...c,element:i,index:b},b),p}),()=>{i&&r(w=>w.filter(b=>i!==b.element))}):Me,[]);return N.createElement(t.Provider,{value:N.useMemo(()=>({descendants:n,registerDescendant:a}),[n,a])},e)}o(Gt,"DescendantProvider");function Zt(t,e){let{descendants:n}=N.useContext(t),{callback:r,currentIndex:a,filter:i,key:u="index",orientation:c="vertical",rotate:w=!0,rtl:b=!1}=e;return o(function(m){if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(m.key))return;let v=a??-1,h=i?n.filter(i):n;if(!h.length)return;let C=h.findIndex(d=>d.index===a);function x(){return v===f().index?w?S():h[C]:h[(C+1)%h.length]}o(x,"getNextOption");function k(){return v===S().index?w?f():h[C]:h[(C-1+h.length)%h.length]}o(k,"getPreviousOption");function S(){return h[0]}o(S,"getFirstOption");function f(){return h[h.length-1]}switch(o(f,"getLastOption"),m.key){case"ArrowDown":if(c==="vertical"||c==="both"){m.preventDefault();let D=x();r(u==="option"?D:D[u])}break;case"ArrowUp":if(c==="vertical"||c==="both"){m.preventDefault();let D=k();r(u==="option"?D:D[u])}break;case"ArrowLeft":if(c==="horizontal"||c==="both"){m.preventDefault();let D=(b?x:k)();r(u==="option"?D:D[u])}break;case"ArrowRight":if(c==="horizontal"||c==="both"){m.preventDefault();let D=(b?k:x)();r(u==="option"?D:D[u])}break;case"PageUp":m.preventDefault();let d=(m.ctrlKey?k:S)();r(u==="option"?d:d[u]);break;case"Home":m.preventDefault();let T=S();r(u==="option"?T:T[u]);break;case"PageDown":m.preventDefault();let F=(m.ctrlKey?x:f)();r(u==="option"?F:F[u]);break;case"End":m.preventDefault();let O=f();r(u==="option"?O:O[u]);break}},"handleKeyDown")}o(Zt,"useDescendantKeyDown");function Jt(t,e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING)}o(Jt,"isElementPreceding");function Rr(t,e){if(!e||!t.length)return-1;let n=t.length;for(;n--;){let r=t[n].element;if(r&&Jt(r,e))return n+1}return-1}o(Rr,"findDOMIndex");function Kt(t,e,n){return n==null||!(n in t)?[...t,e]:[...t.slice(0,n),e,...t.slice(n)]}o(Kt,"insertAt");function yr(t){return t.sort((e,n)=>!e.element||!n.element?0:Jt(e.element,n.element)?-1:1).map((e,n)=>({...e,index:n}))}o(yr,"updateIndices");var en="CLEAR_SELECTION_INDEX",Fe="CLICK_MENU_ITEM",te="CLOSE_MENU",Cr="OPEN_MENU_AT_FIRST_ITEM",Ae="OPEN_MENU_AT_INDEX",tn="OPEN_MENU_CLEARED",_e="SEARCH_FOR_ITEM",X="SELECT_ITEM_AT_INDEX",We="SET_BUTTON_ID",be=zt("DropdownDescendantContext"),[xr,V]=At("Dropdown"),Sr={triggerId:null,isExpanded:!1,typeaheadQuery:"",selectionIndex:-1},Ue=o(({id:t,children:e})=>{let n=g.useRef(null),r=g.useRef(null),a=g.useRef(null),[i,u]=qt(),c=Yt(t),w=t||ee("menu",c),b=ee("menu-button",w),[p,m]=g.useReducer(Mr,{...Sr,triggerId:b}),v=g.useRef(!1),h=g.useRef([]),C=g.useRef(!1),x=g.useRef({x:0,y:0});return g.useEffect(()=>{p.isExpanded?(self.__REACH_DISABLE_TOOLTIPS=!0,self.requestAnimationFrame(()=>{ge(r.current)})):self.__REACH_DISABLE_TOOLTIPS=!1},[p.isExpanded]),g.createElement(Gt,{context:be,items:i,set:u},g.createElement(xr,{dispatch:m,dropdownId:w,dropdownRef:r,mouseDownStartPosRef:x,popoverRef:a,readyToSelect:C,selectCallbacks:h,state:p,triggerClickedRef:v,triggerRef:n},Le(e)?e({isExpanded:p.isExpanded,isOpen:p.isExpanded}):e))},"DropdownProvider_");Ue.displayName="DropdownProvider";function Be({onKeyDown:t,onMouseDown:e,id:n,ref:r,...a}){let{dispatch:i,dropdownId:u,mouseDownStartPosRef:c,triggerClickedRef:w,triggerRef:b,state:{triggerId:p,isExpanded:m}}=V("useDropdownTrigger"),v=G(b,r),h=rn(),C=g.useMemo(()=>h.findIndex(S=>!S.disabled),[h]);g.useEffect(()=>{n!=null&&n!==p&&i({type:We,payload:n})},[p,i,n]),g.useEffect(()=>{n==null&&i({type:We,payload:ee("menu-button",u)})},[u,i,n]);function x(S){switch(S.key){case"ArrowDown":case"ArrowUp":S.preventDefault(),i({type:Ae,payload:{index:C}});break;case"Enter":case" ":i({type:Ae,payload:{index:C}});break;default:break}}o(x,"handleKeyDown");function k(S){J(S.nativeEvent)||(c.current={x:S.clientX,y:S.clientY},m||(w.current=!0),i(m?{type:te}:{type:tn}))}return o(k,"handleMouseDown"),{data:{isExpanded:m,controls:u},props:{...a,ref:v,id:p||void 0,onKeyDown:M(t,x),onMouseDown:M(e,k),type:"button"}}}o(Be,"useDropdownTrigger");var Ir=g.forwardRef(({as:t="button",...e},n)=>{let{props:r}=Be({...e,ref:n});return g.createElement(t,{"data-reach-dropdown-trigger":"",...r})});Ir.displayName="DropdownTrigger";function He({index:t,isLink:e=!1,onClick:n,onDragStart:r,onMouseDown:a,onMouseEnter:i,onMouseLeave:u,onMouseMove:c,onMouseUp:w,onSelect:b,disabled:p,onFocus:m,valueText:v,ref:h,...C}){let{dispatch:x,dropdownRef:k,mouseDownStartPosRef:S,readyToSelect:f,selectCallbacks:d,triggerRef:T,state:{selectionIndex:F,isExpanded:O}}=V("useDropdownItem"),D=g.useRef(null),[Re,En]=g.useState(v||""),Rn=g.useCallback(I=>{!v&&I?.textContent&&En(I.textContent)},[v]),ne=g.useRef(!1),[Ze,yn]=Bt(D,null),Cn=g.useMemo(()=>({element:Ze,key:Re,disabled:p,isLink:e}),[p,Ze,e,Re]),U=Vt(Cn,be,t),re=U===F&&!p,xn=G(h,yn,Rn);d.current[U]=b;function Je(){ge(T.current),b&&b(),x({type:Fe})}o(Je,"select");function Sn(I){J(I.nativeEvent)||e&&(p?I.preventDefault():Je())}o(Sn,"handleClick");function In(I){e&&I.preventDefault()}o(In,"handleDragStart");function Dn(I){J(I.nativeEvent)||(e?ne.current=!0:I.preventDefault())}o(Dn,"handleMouseDown");function kn(I){let B=Z(k.current);!re&&U!=null&&!p&&(k?.current&&k.current!==B.activeElement&&D.current!==B.activeElement&&k.current.focus(),x({type:X,payload:{index:U}}))}o(kn,"handleMouseEnter");function Tn(I){x({type:en})}o(Tn,"handleMouseLeave");function Pn(I){if(!f.current){let B=8,Nn=Math.abs(I.clientX-S.current.x),On=Math.abs(I.clientY-S.current.y);(Nn>B||On>B)&&(f.current=!0)}!re&&U!=null&&!p&&x({type:X,payload:{index:U,dropdownRef:k}})}o(Pn,"handleMouseMove");function Ln(){f.current=!0,!re&&U!=null&&!p&&x({type:X,payload:{index:U}})}o(Ln,"handleFocus");function Mn(I){if(!J(I.nativeEvent)){if(!f.current){f.current=!0;return}e?ne.current?ne.current=!1:D.current&&D.current.click():p||Je()}}return o(Mn,"handleMouseUp"),g.useEffect(()=>{if(O){let I=self.setTimeout(()=>{f.current=!0},400);return()=>{self.clearTimeout(I)}}else f.current=!1},[O,f]),g.useEffect(()=>{let I=Z(D.current);return I.addEventListener("mouseup",B),()=>{I.removeEventListener("mouseup",B)};function B(){ne.current=!1}o(B,"listener")},[]),{data:{disabled:p},props:{id:nn(U),tabIndex:-1,...C,ref:xn,"data-disabled":p?"":void 0,"data-selected":re?"":void 0,"data-valuetext":Re,onClick:M(n,Sn),onDragStart:M(r,In),onMouseDown:M(a,Dn),onMouseEnter:M(i,kn),onMouseLeave:M(u,Tn),onMouseMove:M(c,Pn),onFocus:M(m,Ln),onMouseUp:M(w,Mn)}}}o(He,"useDropdownItem");var Dr=g.forwardRef(({as:t="div",...e},n)=>{let{props:r}=He({...e,ref:n});return g.createElement(t,{"data-reach-dropdown-item":"",...r})});Dr.displayName="DropdownItem";function je({id:t,onKeyDown:e,ref:n,...r}){let{dispatch:a,triggerRef:i,dropdownRef:u,selectCallbacks:c,dropdownId:w,state:{isExpanded:b,triggerId:p,selectionIndex:m,typeaheadQuery:v}}=V("useDropdownItems"),h=rn(),C=G(u,n);g.useEffect(()=>{let d=Pr(h,v);v&&d!=null&&a({type:X,payload:{index:d,dropdownRef:u}});let T=self.setTimeout(()=>v&&a({type:_e,payload:""}),1e3);return()=>self.clearTimeout(T)},[a,h,v,u]);let x=he(h.length),k=he(h[m]),S=he(m);g.useEffect(()=>{m>h.length-1?a({type:X,payload:{index:h.length-1,dropdownRef:u}}):x!==h.length&&m>-1&&k&&S===m&&h[m]!==k&&a({type:X,payload:{index:h.findIndex(d=>d.key===k?.key),dropdownRef:u}})},[u,a,h,x,k,S,m]);let f=M(o(function(T){let{key:F}=T;if(b)switch(F){case"Enter":case" ":let O=h.find(D=>D.index===m);O&&!O.disabled&&(T.preventDefault(),O.isLink&&O.element?O.element.click():(ge(i.current),c.current[O.index]&&c.current[O.index](),a({type:Fe})));break;case"Escape":ge(i.current),a({type:te});break;case"Tab":T.preventDefault();break;default:if($t(F)&&F.length===1){let D=v+F.toLowerCase();a({type:_e,payload:D})}break}},"handleKeyDown2"),Zt(be,{currentIndex:m,orientation:"vertical",rotate:!1,filter:o(d=>!d.disabled,"filter"),callback:o(d=>{a({type:X,payload:{index:d,dropdownRef:u}})},"callback"),key:"index"}));return{data:{activeDescendant:nn(m)||void 0,triggerId:p},props:{tabIndex:-1,...r,ref:C,id:w,onKeyDown:M(e,f)}}}o(je,"useDropdownItems");var kr=g.forwardRef(({as:t="div",...e},n)=>{let{props:r}=je({...e,ref:n});return g.createElement(t,{"data-reach-dropdown-items":"",...r})});kr.displayName="DropdownItems";function Xe({onBlur:t,portal:e=!0,position:n,ref:r,...a}){let{triggerRef:i,triggerClickedRef:u,dispatch:c,dropdownRef:w,popoverRef:b,state:{isExpanded:p}}=V("useDropdownPopover"),m=G(b,r);return g.useEffect(()=>{if(!p)return;let v=Z(b.current);function h(C){u.current?u.current=!1:Lr(b.current,C.target)||c({type:te})}return o(h,"listener"),v.addEventListener("mousedown",h),()=>{v.removeEventListener("mousedown",h)}},[u,i,c,w,b,p]),{data:{portal:e,position:n,targetRef:i,isExpanded:p},props:{ref:m,hidden:!p,onBlur:M(t,v=>{v.currentTarget.contains(v.relatedTarget)||c({type:te})}),...a}}}o(Xe,"useDropdownPopover");var Tr=g.forwardRef(({as:t="div",...e},n)=>{let{data:{portal:r,targetRef:a,position:i},props:u}=Xe({...e,ref:n}),c={"data-reach-dropdown-popover":""};return r?g.createElement(Q,{...u,...c,as:t,targetRef:a,position:i,unstable_skipInitialPortalRender:!0}):g.createElement(t,{...u,...c})});Tr.displayName="DropdownPopover";function Pr(t,e=""){if(!e)return null;let n=t.find(r=>r.disabled?!1:r.element?.dataset?.valuetext?.toLowerCase().startsWith(e));return n?t.indexOf(n):null}o(Pr,"findItemFromTypeahead");function nn(t){let{dropdownId:e}=V("useItemId");return t!=null&&t>-1?ee(`option-${t}`,e):void 0}o(nn,"useItemId");function ge(t){t&&t.focus()}o(ge,"focus");function Lr(t,e){return!!(t&&t.contains(e))}o(Lr,"popoverContainsEventTarget");function Mr(t,e={}){switch(e.type){case Fe:return{...t,isExpanded:!1,selectionIndex:-1};case te:return{...t,isExpanded:!1,selectionIndex:-1};case Cr:return{...t,isExpanded:!0,selectionIndex:0};case Ae:return{...t,isExpanded:!0,selectionIndex:e.payload.index};case tn:return{...t,isExpanded:!0,selectionIndex:-1};case X:{let{dropdownRef:n={current:null}}=e.payload;if(e.payload.index>=0&&e.payload.index!==t.selectionIndex){if(n.current){let r=Z(n.current);n.current!==r?.activeElement&&n.current.focus()}return{...t,selectionIndex:e.payload.max!=null?Math.min(Math.max(e.payload.index,0),e.payload.max):Math.max(e.payload.index,0)}}return t}case en:return{...t,selectionIndex:-1};case We:return{...t,triggerId:e.payload};case _e:return typeof e.payload<"u"?{...t,typeaheadQuery:e.payload}:t;default:return t}}o(Mr,"reducer");function rn(){return Qt(be)}o(rn,"useDropdownDescendants");E();R();var on=s(l(),1),Or=s(l(),1),ve=s(l(),1),an=s(l(),1),$r=s(l(),1),Ye=s(l(),1),cn=s(l(),1),sn=s(l(),1),ln=s(l(),1),Ee=s(l(),1),Ar=s(l(),1),fn=s(l(),1),Ke=s(l(),1),dn=s(l(),1),pn=s(l(),1);function Nr(){return!!(typeof self<"u"&&self.document&&self.document.createElement)}o(Nr,"canUseDOM");function un(){}o(un,"noop");var zo=Nr()?Ee.useLayoutEffect:Ee.useEffect;var mn=s(An(),1);var ze=y.forwardRef(({as:t=y.Fragment,id:e,children:n,...r},a)=>{let u=y.useMemo(()=>{try{return(0,mn.isFragment)(y.createElement(t,null))}catch{return!1}},[t])?{}:{ref:a,id:e,"data-reach-menu":"",...r};return y.createElement(t,{...u},y.createElement(Ue,{id:e,children:n}))});ze.displayName="Menu";var Ve=y.forwardRef(({as:t="button",...e},n)=>{let{data:{isExpanded:r,controls:a},props:i}=Be({...e,ref:n});return y.createElement(t,{"aria-expanded":r?!0:void 0,"aria-haspopup":!0,"aria-controls":a,...i,"data-reach-menu-button":""})});Ve.displayName="MenuButton";var qe=y.forwardRef(({as:t="div",...e},n)=>{let{data:{disabled:r},props:a}=He({...e,ref:n});return y.createElement(t,{role:"menuitem",...a,"aria-disabled":r||void 0,"data-reach-menu-item":""})});qe.displayName="MenuItemImpl";var Qe=y.forwardRef(({as:t="div",...e},n)=>y.createElement(qe,{...e,ref:n,as:t}));Qe.displayName="MenuItem";var hn=y.forwardRef(({as:t="div",...e},n)=>{let{data:{activeDescendant:r,triggerId:a},props:i}=je({...e,ref:n});return y.createElement(t,{"aria-activedescendant":r,"aria-labelledby":a||void 0,role:"menu",...i,"data-reach-menu-items":""})});hn.displayName="MenuItems";var _r=y.forwardRef(({as:t="a",component:e,onSelect:n,...r},a)=>(y.useEffect(()=>{e&&console.warn("[@reach/menu-button]: Please use the `as` prop instead of `component`")},[e]),y.createElement(qe,{...r,ref:a,"data-reach-menu-link":"",as:t,isLink:!0,onSelect:n||un})));_r.displayName="MenuLink";var Ge=y.forwardRef(({portal:t=!0,...e},n)=>y.createElement(wn,{portal:t},y.createElement(hn,{...e,ref:n,"data-reach-menu-list":""})));Ge.displayName="MenuList";var wn=y.forwardRef(({as:t="div",...e},n)=>{let{data:{portal:r,targetRef:a,position:i},props:u}=Xe({...e,ref:n}),c={"data-reach-menu-popover":""};return r?y.createElement(Q,{...u,...c,as:t,targetRef:a,position:i,unstable_skipInitialPortalRender:!0}):y.createElement(t,{...u,...c})});wn.displayName="MenuPopover";var P=s(l(),1);var gn=K(Ge)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${Y.colors.legacy.areaAccent};
  border-radius: 6px;
  padding: 10px 17px;
  margin-top: 4px;
  width: ${t=>t.width};

  /* this is needed for the dropdown to correctly overlay on our settings popups */
  z-index: 999;
  position: relative;
`,bn=K.div`
  overflow: scroll;
  max-height: ${t=>t.maxHeight};
`,vn=K(Qe)`
  font-size: 16px;
  padding: 7px 0px;
  display: flex;
  color: ${t=>t.variant==="warning"?Y.colors.legacy.spotNegative:Y.colors.legacy.textBase};
  justify-content: space-between;
  ${t=>{let e=t.variant==="warning"?Y.colors.legacy.spotNegative:Y.colors.legacy.spotBase;return et`
      &[data-selected] {
        background: inherit;
        color: ${e};
        p {
          color: ${e};
        }
      }
    `}}
`,Wr=K(vn)`
  padding: 0;
`,Fr=K.div`
  width: 100%;
  margin: 6px 0px;
  border-bottom: 1px solid ${Y.colors.legacy.borderDiminished};
`,ma=o(({icon:t,items:e,sections:n,onIconClick:r,className:a,children:i,dropdownWidth:u="250px",noDropdownItemPadding:c=!1,disableIconBackground:w=!1})=>{let b="330px",p=(0,P.useMemo)(()=>c?Wr:vn,[c]);return P.default.createElement(ze,null,({isExpanded:m})=>P.default.createElement(P.default.Fragment,null,P.default.createElement(Ve,{as:"span",className:a,onClick:r},t?w?t:P.default.createElement(tt,{isActive:e&&m},t):i),n?P.default.createElement(gn,{width:u},P.default.createElement(bn,{maxHeight:b},n.map((v,h)=>v.data.length?P.default.createElement("div",{key:v.key},v.data.map((C,x)=>P.default.createElement(p,{"data-testid":`dropdown-section-${h}-item-${x}`,key:C.key,onSelect:C.onClick,variant:C.variant},C.label)),h!==n.length-1?P.default.createElement(Fr,null):null):null))):null,e?P.default.createElement(gn,{width:u},P.default.createElement(bn,{maxHeight:b},e.map((v,h)=>P.default.createElement(p,{"data-testid":`dropdown-item-${h}`,key:v.key,onSelect:v.onClick,variant:v.variant},v.label)))):null))},"Dropdown");export{gt as a,ma as b};
/*! Bundled license information:

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/portal/dist/reach-portal.mjs:
  (**
    * @reach/portal v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/rect/dist/reach-rect.mjs:
  (**
    * @reach/rect v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

@reach/popover/dist/reach-popover.mjs:
  (**
    * @reach/popover v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/auto-id/dist/reach-auto-id.mjs:
  (**
    * @reach/auto-id v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/descendants/dist/reach-descendants.mjs:
  (**
    * @reach/descendants v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/dropdown/dist/reach-dropdown.mjs:
  (**
    * @reach/dropdown v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/utils/dist/reach-utils.mjs:
  (**
    * @reach/utils v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)

@reach/menu-button/dist/reach-menu-button.mjs:
  (**
    * @reach/menu-button v0.18.0
    *
    * Copyright (c) 2018-2022, React Training LLC
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.md file in the root directory of this source tree.
    *
    * @license MIT
    *)
*/
//# sourceMappingURL=chunk-RLKSRZDI.js.map
