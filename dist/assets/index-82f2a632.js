(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function i1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ta={},s1={get exports(){return ta},set exports(t){ta=t}},Ga={},_t={},o1={get exports(){return _t},set exports(t){_t=t}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),a1=Symbol.for("react.portal"),l1=Symbol.for("react.fragment"),u1=Symbol.for("react.strict_mode"),c1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),d1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),p1=Symbol.for("react.suspense"),m1=Symbol.for("react.memo"),g1=Symbol.for("react.lazy"),pf=Symbol.iterator;function y1(t){return t===null||typeof t!="object"?null:(t=pf&&t[pf]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Wm={};function di(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Hm}di.prototype.isReactComponent={};di.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};di.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=di.prototype;function lh(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Hm}var uh=lh.prototype=new Km;uh.constructor=lh;qm(uh,di.prototype);uh.isPureReactComponent=!0;var mf=Array.isArray,Gm=Object.prototype.hasOwnProperty,ch={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,r)&&!Qm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ps,type:t,key:s,ref:o,props:i,_owner:ch.current}}function v1(t,e){return{$$typeof:Ps,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ps}function w1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gf=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w1(""+t.key):e.toString(36)}function Mo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ps:case a1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ql(o,0):r,mf(i)?(n="",t!=null&&(n=t.replace(gf,"$&/")+"/"),Mo(i,e,n,"",function(u){return u})):i!=null&&(hh(i)&&(i=v1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",mf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ql(s,a);o+=Mo(s,e,n,l,i)}else if(l=y1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ql(s,a++),o+=Mo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uo(t,e,n){if(t==null)return t;var r=[],i=0;return Mo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function E1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},$o={transition:null},_1={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:$o,ReactCurrentOwner:ch};j.Children={map:uo,forEach:function(t,e,n){uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uo(t,function(){e++}),e},toArray:function(t){return uo(t,function(e){return e})||[]},only:function(t){if(!hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=di;j.Fragment=l1;j.Profiler=c1;j.PureComponent=lh;j.StrictMode=u1;j.Suspense=p1;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ch.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gm.call(e,l)&&!Qm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ps,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:d1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h1,_context:t},t.Consumer=t};j.createElement=Ym;j.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:f1,render:t}};j.isValidElement=hh;j.lazy=function(t){return{$$typeof:g1,_payload:{_status:-1,_result:t},_init:E1}};j.memo=function(t,e){return{$$typeof:m1,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return We.current.useCallback(t,e)};j.useContext=function(t){return We.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return We.current.useDeferredValue(t)};j.useEffect=function(t,e){return We.current.useEffect(t,e)};j.useId=function(){return We.current.useId()};j.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return We.current.useMemo(t,e)};j.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};j.useRef=function(t){return We.current.useRef(t)};j.useState=function(t){return We.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return We.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(o1);const gn=i1(_t);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=_t,T1=Symbol.for("react.element"),I1=Symbol.for("react.fragment"),k1=Object.prototype.hasOwnProperty,C1=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N1={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)k1.call(e,r)&&!N1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:T1,type:t,key:s,ref:o,props:i,_owner:C1.current}}Ga.Fragment=I1;Ga.jsx=Xm;Ga.jsxs=Xm;(function(t){t.exports=Ga})(s1);const G=ta.jsx,ht=ta.jsxs;var Lu={},Mu={},A1={get exports(){return Mu},set exports(t){Mu=t}},at={},$u={},D1={get exports(){return $u},set exports(t){$u=t}},Jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,b){var V=k.length;k.push(b);e:for(;0<V;){var ue=V-1>>>1,Ee=k[ue];if(0<i(Ee,b))k[ue]=b,k[V]=Ee,V=ue;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var b=k[0],V=k.pop();if(V!==b){k[0]=V;e:for(var ue=0,Ee=k.length,ao=Ee>>>1;ue<ao;){var Bn=2*(ue+1)-1,Hl=k[Bn],jn=Bn+1,lo=k[jn];if(0>i(Hl,V))jn<Ee&&0>i(lo,Hl)?(k[ue]=lo,k[jn]=V,ue=jn):(k[ue]=Hl,k[Bn]=V,ue=Bn);else if(jn<Ee&&0>i(lo,V))k[ue]=lo,k[jn]=V,ue=jn;else break e}}return b}function i(k,b){var V=k.sortIndex-b.sortIndex;return V!==0?V:k.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=k)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function w(k){if(v=!1,m(k),!y)if(n(l)!==null)y=!0,Bl(T);else{var b=n(u);b!==null&&jl(w,b.startTime-k)}}function T(k,b){y=!1,v&&(v=!1,p(O),O=-1),g=!0;var V=d;try{for(m(b),h=n(l);h!==null&&(!(h.expirationTime>b)||k&&!gt());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var Ee=ue(h.expirationTime<=b);b=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),m(b)}else r(l);h=n(l)}if(h!==null)var ao=!0;else{var Bn=n(u);Bn!==null&&jl(w,Bn.startTime-b),ao=!1}return ao}finally{h=null,d=V,g=!1}}var C=!1,N=null,O=-1,J=5,z=-1;function gt(){return!(t.unstable_now()-z<J)}function _i(){if(N!==null){var k=t.unstable_now();z=k;var b=!0;try{b=N(!0,k)}finally{b?Si():(C=!1,N=null)}}else C=!1}var Si;if(typeof f=="function")Si=function(){f(_i)};else if(typeof MessageChannel<"u"){var ff=new MessageChannel,r1=ff.port2;ff.port1.onmessage=_i,Si=function(){r1.postMessage(null)}}else Si=function(){D(_i,0)};function Bl(k){N=k,C||(C=!0,Si())}function jl(k,b){O=D(function(){k(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Bl(T))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var V=d;d=b;try{return k()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var V=d;d=k;try{return b()}finally{d=V}},t.unstable_scheduleCallback=function(k,b,V){var ue=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ue+V:ue):V=ue,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=V+Ee,k={id:c++,callback:b,priorityLevel:k,startTime:V,expirationTime:Ee,sortIndex:-1},V>ue?(k.sortIndex=V,e(u,k),n(l)===null&&k===n(u)&&(v?(p(O),O=-1):v=!0,jl(w,V-ue))):(k.sortIndex=Ee,e(l,k),y||g||(y=!0,Bl(T))),k},t.unstable_shouldYield=gt,t.unstable_wrapCallback=function(k){var b=d;return function(){var V=d;d=b;try{return k.apply(this,arguments)}finally{d=V}}}})(Jm);(function(t){t.exports=Jm})(D1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=_t,st=$u;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eg=new Set,ns={};function gr(t,e){Gr(t,e),Gr(t+"Capture",e)}function Gr(t,e){for(ns[t]=e,t=0;t<e.length;t++)eg.add(e[t])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,R1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},vf={};function x1(t){return Uu.call(vf,t)?!0:Uu.call(yf,t)?!1:R1.test(t)?vf[t]=!0:(yf[t]=!0,!1)}function O1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function P1(t,e,n,r){if(e===null||typeof e>"u"||O1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){De[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];De[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){De[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){De[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){De[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){De[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){De[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){De[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){De[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dh,fh);De[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dh,fh);De[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dh,fh);De[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){De[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});De.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){De[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function ph(t,e,n,r){var i=De.hasOwnProperty(e)?De[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(P1(e,n,i,r)&&(n=null),r||i===null?x1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),tg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Wl;function Pi(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var Kl=!1;function Gl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pi(t):""}function L1(t){switch(t.tag){case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return t=Gl(t.type,!1),t;case 11:return t=Gl(t.type.render,!1),t;case 1:return t=Gl(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cr:return"Fragment";case kr:return"Portal";case Fu:return"Profiler";case mh:return"StrictMode";case bu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ng:return(t.displayName||"Context")+".Consumer";case tg:return(t._context.displayName||"Context")+".Provider";case gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yh:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $1(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ho(t){t._valueTracker||(t._valueTracker=$1(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ig(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function na(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ef(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&ph(t,"checked",e,!1)}function ju(t,e){og(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hu(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _f(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hu(t,e,n){(e!=="number"||na(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Li(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function ag(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,ug=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U1=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){U1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var F1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(F1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function vh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,br=null,Vr=null;function If(t){if(t=$s(t)){if(typeof Yu!="function")throw Error(_(280));var e=t.stateNode;e&&(e=Za(e),Yu(t.stateNode,t.type,e))}}function dg(t){br?Vr?Vr.push(t):Vr=[t]:br=t}function fg(){if(br){var t=br,e=Vr;if(Vr=br=null,If(t),e)for(t=0;t<e.length;t++)If(e[t])}}function pg(t,e){return t(e)}function mg(){}var Ql=!1;function gg(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return pg(t,e,n)}finally{Ql=!1,(br!==null||Vr!==null)&&(mg(),fg())}}function is(t,e){var n=t.stateNode;if(n===null)return null;var r=Za(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Xu=!1;if(Kt)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Xu=!1}function b1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Bi=!1,ra=null,ia=!1,Ju=null,V1={onError:function(t){Bi=!0,ra=t}};function z1(t,e,n,r,i,s,o,a,l){Bi=!1,ra=null,b1.apply(V1,arguments)}function B1(t,e,n,r,i,s,o,a,l){if(z1.apply(this,arguments),Bi){if(Bi){var u=ra;Bi=!1,ra=null}else throw Error(_(198));ia||(ia=!0,Ju=u)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kf(t){if(yr(t)!==t)throw Error(_(188))}function j1(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kf(i),t;if(s===r)return kf(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function vg(t){return t=j1(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=st.unstable_scheduleCallback,Cf=st.unstable_cancelCallback,H1=st.unstable_shouldYield,q1=st.unstable_requestPaint,ce=st.unstable_now,W1=st.unstable_getCurrentPriorityLevel,wh=st.unstable_ImmediatePriority,_g=st.unstable_UserBlockingPriority,sa=st.unstable_NormalPriority,K1=st.unstable_LowPriority,Sg=st.unstable_IdlePriority,Qa=null,xt=null;function G1(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:X1,Q1=Math.log,Y1=Math.LN2;function X1(t){return t>>>=0,t===0?32:31-(Q1(t)/Y1|0)|0}var po=64,mo=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mi(a):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function J1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=J1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tg(){var t=po;return po<<=1,!(po&4194240)&&(po=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function eE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function Ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,_h,Cg,Ng,Ag,ec=!1,go=[],yn=null,vn=null,wn=null,ss=new Map,os=new Map,un=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,e){switch(t){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(e.pointerId)}}function ki(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$s(e),e!==null&&_h(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nE(t,e,n,r,i){switch(e){case"focusin":return yn=ki(yn,t,e,n,r,i),!0;case"dragenter":return vn=ki(vn,t,e,n,r,i),!0;case"mouseover":return wn=ki(wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ss.set(s,ki(ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,os.set(s,ki(os.get(s)||null,t,e,n,r,i)),!0}return!1}function Dg(t){var e=Kn(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Ag(t.priority,function(){Cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qu=r,n.target.dispatchEvent(r),Qu=null}else return e=$s(n),e!==null&&_h(e),t.blockedOn=n,!1;e.shift()}return!0}function Af(t,e,n){Uo(t)&&n.delete(e)}function rE(){ec=!1,yn!==null&&Uo(yn)&&(yn=null),vn!==null&&Uo(vn)&&(vn=null),wn!==null&&Uo(wn)&&(wn=null),ss.forEach(Af),os.forEach(Af)}function Ci(t,e){t.blockedOn===e&&(t.blockedOn=null,ec||(ec=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,rE)))}function as(t){function e(i){return Ci(i,t)}if(0<go.length){Ci(go[0],t);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yn!==null&&Ci(yn,t),vn!==null&&Ci(vn,t),wn!==null&&Ci(wn,t),ss.forEach(e),os.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&un.shift()}var zr=nn.ReactCurrentBatchConfig,aa=!0;function iE(t,e,n,r){var i=Q,s=zr.transition;zr.transition=null;try{Q=1,Sh(t,e,n,r)}finally{Q=i,zr.transition=s}}function sE(t,e,n,r){var i=Q,s=zr.transition;zr.transition=null;try{Q=4,Sh(t,e,n,r)}finally{Q=i,zr.transition=s}}function Sh(t,e,n,r){if(aa){var i=tc(t,e,n,r);if(i===null)ou(t,e,r,la,n),Nf(t,r);else if(nE(i,t,e,n,r))r.stopPropagation();else if(Nf(t,r),e&4&&-1<tE.indexOf(t)){for(;i!==null;){var s=$s(i);if(s!==null&&kg(s),s=tc(t,e,n,r),s===null&&ou(t,e,r,la,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ou(t,e,r,null,n)}}var la=null;function tc(t,e,n,r){if(la=null,t=vh(r),t=Kn(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return la=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W1()){case wh:return 1;case _g:return 4;case sa:case K1:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var pn=null,Th=null,Fo=null;function xg(){if(Fo)return Fo;var t,e=Th,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fo=i.slice(t,1<r?1-r:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Df(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:Df,this.isPropagationStopped=Df,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ih=lt(fi),Ms=oe({},fi,{view:0,detail:0}),oE=lt(Ms),Xl,Jl,Ni,Ya=oe({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(Xl=t.screenX-Ni.screenX,Jl=t.screenY-Ni.screenY):Jl=Xl=0,Ni=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),Rf=lt(Ya),aE=oe({},Ya,{dataTransfer:0}),lE=lt(aE),uE=oe({},Ms,{relatedTarget:0}),Zl=lt(uE),cE=oe({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),hE=lt(cE),dE=oe({},fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fE=lt(dE),pE=oe({},fi,{data:0}),xf=lt(pE),mE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yE[t])?!!e[t]:!1}function kh(){return vE}var wE=oe({},Ms,{key:function(t){if(t.key){var e=mE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),EE=lt(wE),_E=oe({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=lt(_E),SE=oe({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),TE=lt(SE),IE=oe({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),kE=lt(IE),CE=oe({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NE=lt(CE),AE=[9,13,27,32],Ch=Kt&&"CompositionEvent"in window,ji=null;Kt&&"documentMode"in document&&(ji=document.documentMode);var DE=Kt&&"TextEvent"in window&&!ji,Og=Kt&&(!Ch||ji&&8<ji&&11>=ji),Pf=String.fromCharCode(32),Lf=!1;function Pg(t,e){switch(t){case"keyup":return AE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function RE(t,e){switch(t){case"compositionend":return Lg(e);case"keypress":return e.which!==32?null:(Lf=!0,Pf);case"textInput":return t=e.data,t===Pf&&Lf?null:t;default:return null}}function xE(t,e){if(Nr)return t==="compositionend"||!Ch&&Pg(t,e)?(t=xg(),Fo=Th=pn=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var OE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OE[t.type]:e==="textarea"}function Mg(t,e,n,r){dg(r),e=ua(e,"onChange"),0<e.length&&(n=new Ih("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,ls=null;function PE(t){Wg(t,0)}function Xa(t){var e=Rr(t);if(sg(e))return t}function LE(t,e){if(t==="change")return e}var $g=!1;if(Kt){var eu;if(Kt){var tu="oninput"in document;if(!tu){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),tu=typeof $f.oninput=="function"}eu=tu}else eu=!1;$g=eu&&(!document.documentMode||9<document.documentMode)}function Uf(){Hi&&(Hi.detachEvent("onpropertychange",Ug),ls=Hi=null)}function Ug(t){if(t.propertyName==="value"&&Xa(ls)){var e=[];Mg(e,ls,t,vh(t)),gg(PE,e)}}function ME(t,e,n){t==="focusin"?(Uf(),Hi=e,ls=n,Hi.attachEvent("onpropertychange",Ug)):t==="focusout"&&Uf()}function $E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xa(ls)}function UE(t,e){if(t==="click")return Xa(e)}function FE(t,e){if(t==="input"||t==="change")return Xa(e)}function bE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:bE;function us(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uu.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Ff(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bf(t,e){var n=Ff(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ff(n)}}function Fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bg(){for(var t=window,e=na();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=na(t.document)}return e}function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VE(t){var e=bg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(r!==null&&Nh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bf(n,s);var o=bf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zE=Kt&&"documentMode"in document&&11>=document.documentMode,Ar=null,nc=null,qi=null,rc=!1;function Vf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rc||Ar==null||Ar!==na(r)||(r=Ar,"selectionStart"in r&&Nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qi&&us(qi,r)||(qi=r,r=ua(nc,"onSelect"),0<r.length&&(e=new Ih("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ar)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},nu={},Vg={};Kt&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Ja(t){if(nu[t])return nu[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vg)return nu[t]=e[n];return t}var zg=Ja("animationend"),Bg=Ja("animationiteration"),jg=Ja("animationstart"),Hg=Ja("transitionend"),qg=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){qg.set(t,e),gr(e,[t])}for(var ru=0;ru<zf.length;ru++){var iu=zf[ru],BE=iu.toLowerCase(),jE=iu[0].toUpperCase()+iu.slice(1);$n(BE,"on"+jE)}$n(zg,"onAnimationEnd");$n(Bg,"onAnimationIteration");$n(jg,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Hg,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HE=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Bf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B1(r,e,void 0,t),t.currentTarget=null}function Wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Bf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Bf(i,a,u),s=l}}}if(ia)throw t=Ju,ia=!1,Ju=null,t}function Z(t,e){var n=e[lc];n===void 0&&(n=e[lc]=new Set);var r=t+"__bubble";n.has(r)||(Kg(e,t,2,!1),n.add(r))}function su(t,e,n){var r=0;e&&(r|=4),Kg(n,t,r,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[wo]){t[wo]=!0,eg.forEach(function(n){n!=="selectionchange"&&(HE.has(n)||su(n,!1,t),su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,su("selectionchange",!1,e))}}function Kg(t,e,n,r){switch(Rg(e)){case 1:var i=iE;break;case 4:i=sE;break;default:i=Sh}n=i.bind(null,e,n,t),i=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ou(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Kn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gg(function(){var u=s,c=vh(n),h=[];e:{var d=qg.get(t);if(d!==void 0){var g=Ih,y=t;switch(t){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":g=EE;break;case"focusin":y="focus",g=Zl;break;case"focusout":y="blur",g=Zl;break;case"beforeblur":case"afterblur":g=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=TE;break;case zg:case Bg:case jg:g=hE;break;case Hg:g=kE;break;case"scroll":g=oE;break;case"wheel":g=NE;break;case"copy":case"cut":case"paste":g=fE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Of}var v=(e&4)!==0,D=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=is(f,p),w!=null&&v.push(hs(f,w,m)))),D)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Qu&&(y=n.relatedTarget||n.fromElement)&&(Kn(y)||y[Gt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Kn(y):null,y!==null&&(D=yr(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Rf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Of,w="onPointerLeave",p="onPointerEnter",f="pointer"),D=g==null?d:Rr(g),m=y==null?d:Rr(y),d=new v(w,f+"leave",g,n,c),d.target=D,d.relatedTarget=m,w=null,Kn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=D,w=v),D=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=_r(m))f++;for(m=0,w=p;w;w=_r(w))m++;for(;0<f-m;)v=_r(v),f--;for(;0<m-f;)p=_r(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=_r(v),p=_r(p)}v=null}else v=null;g!==null&&jf(h,d,g,v,!1),y!==null&&D!==null&&jf(h,D,y,v,!0)}}e:{if(d=u?Rr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=LE;else if(Mf(d))if($g)T=FE;else{T=$E;var C=ME}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=UE);if(T&&(T=T(t,u))){Mg(h,T,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Hu(d,"number",d.value)}switch(C=u?Rr(u):window,t){case"focusin":(Mf(C)||C.contentEditable==="true")&&(Ar=C,nc=u,qi=null);break;case"focusout":qi=nc=Ar=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,Vf(h,n,c);break;case"selectionchange":if(zE)break;case"keydown":case"keyup":Vf(h,n,c)}var N;if(Ch)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Nr?Pg(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Og&&n.locale!=="ko"&&(Nr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Nr&&(N=xg()):(pn=c,Th="value"in pn?pn.value:pn.textContent,Nr=!0)),C=ua(u,O),0<C.length&&(O=new xf(O,t,null,n,c),h.push({event:O,listeners:C}),N?O.data=N:(N=Lg(n),N!==null&&(O.data=N)))),(N=DE?RE(t,n):xE(t,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(c=new xf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Wg(h,e)})}function hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=is(t,n),s!=null&&r.unshift(hs(t,s,i)),s=is(t,e),s!=null&&r.push(hs(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=is(n,s),l!=null&&o.unshift(hs(n,l,a))):i||(l=is(n,s),l!=null&&o.push(hs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qE=/\r\n?/g,WE=/\u0000|\uFFFD/g;function Hf(t){return(typeof t=="string"?t:""+t).replace(qE,`
`).replace(WE,"")}function Eo(t,e,n){if(e=Hf(e),Hf(t)!==e&&n)throw Error(_(425))}function ca(){}var ic=null,sc=null;function oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,KE=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,GE=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(QE)}:ac;function QE(t){setTimeout(function(){throw t})}function au(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),as(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);as(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),Dt="__reactFiber$"+pi,ds="__reactProps$"+pi,Gt="__reactContainer$"+pi,lc="__reactEvents$"+pi,YE="__reactListeners$"+pi,XE="__reactHandles$"+pi;function Kn(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wf(t);t!==null;){if(n=t[Dt])return n;t=Wf(t)}return e}t=n,n=t.parentNode}return null}function $s(t){return t=t[Dt]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function Za(t){return t[ds]||null}var uc=[],xr=-1;function Un(t){return{current:t}}function te(t){0>xr||(t.current=uc[xr],uc[xr]=null,xr--)}function Y(t,e){xr++,uc[xr]=t.current,t.current=e}var On={},be=Un(On),Xe=Un(!1),or=On;function Qr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function ha(){te(Xe),te(be)}function Kf(t,e,n){if(be.current!==On)throw Error(_(168));Y(be,e),Y(Xe,n)}function Gg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,M1(t)||"Unknown",i));return oe({},n,r)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,or=be.current,Y(be,t),Y(Xe,Xe.current),!0}function Gf(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=Gg(t,e,or),r.__reactInternalMemoizedMergedChildContext=t,te(Xe),te(be),Y(be,t)):te(Xe),Y(Xe,n)}var bt=null,el=!1,lu=!1;function Qg(t){bt===null?bt=[t]:bt.push(t)}function JE(t){el=!0,Qg(t)}function Fn(){if(!lu&&bt!==null){lu=!0;var t=0,e=Q;try{var n=bt;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bt=null,el=!1}catch(i){throw bt!==null&&(bt=bt.slice(t+1)),Eg(wh,Fn),i}finally{Q=e,lu=!1}}return null}var Or=[],Pr=0,fa=null,pa=0,ut=[],ct=0,ar=null,zt=1,Bt="";function Hn(t,e){Or[Pr++]=pa,Or[Pr++]=fa,fa=t,pa=e}function Yg(t,e,n){ut[ct++]=zt,ut[ct++]=Bt,ut[ct++]=ar,ar=t;var r=zt;t=Bt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zt=1<<32-St(e)+i|n<<i|r,Bt=s+t}else zt=1<<s|n<<i|r,Bt=t}function Ah(t){t.return!==null&&(Hn(t,1),Yg(t,1,0))}function Dh(t){for(;t===fa;)fa=Or[--Pr],Or[Pr]=null,pa=Or[--Pr],Or[Pr]=null;for(;t===ar;)ar=ut[--ct],ut[ct]=null,Bt=ut[--ct],ut[ct]=null,zt=ut[--ct],ut[ct]=null}var it=null,nt=null,ne=!1,Et=null;function Xg(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,it=t,nt=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,it=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:zt,overflow:Bt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,it=t,nt=null,!0):!1;default:return!1}}function cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(ne){var e=nt;if(e){var n=e;if(!Qf(t,e)){if(cc(t))throw Error(_(418));e=En(n.nextSibling);var r=it;e&&Qf(t,e)?Xg(r,n):(t.flags=t.flags&-4097|2,ne=!1,it=t)}}else{if(cc(t))throw Error(_(418));t.flags=t.flags&-4097|2,ne=!1,it=t}}}function Yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;it=t}function _o(t){if(t!==it)return!1;if(!ne)return Yf(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oc(t.type,t.memoizedProps)),e&&(e=nt)){if(cc(t))throw Jg(),Error(_(418));for(;e;)Xg(t,e),e=En(e.nextSibling)}if(Yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=it?En(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=nt;t;)t=En(t.nextSibling)}function Yr(){nt=it=null,ne=!1}function Rh(t){Et===null?Et=[t]:Et.push(t)}var ZE=nn.ReactCurrentBatchConfig;function vt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ma=Un(null),ga=null,Lr=null,xh=null;function Oh(){xh=Lr=ga=null}function Ph(t){var e=ma.current;te(ma),t._currentValue=e}function dc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){ga=t,xh=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ye=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(xh!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(ga===null)throw Error(_(308));Lr=t,ga.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var Gn=null;function Lh(t){Gn===null?Gn=[t]:Gn.push(t)}function Zg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qt(t,r)}function Qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _n(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qt(t,n)}return i=r.interleaved,i===null?(e.next=e,Lh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qt(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eh(t,n)}}function Xf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ya(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=oe({},h,d);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=h}}function Jf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var ty=new Zm.Component().refs;function fc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Tn(t),s=Wt(r,i);s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(Tt(e,t,i,r),Vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=Tn(t),s=Wt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_n(t,s,i),e!==null&&(Tt(e,t,i,r),Vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=Tn(t),i=Wt(n,r);i.tag=2,e!=null&&(i.callback=e),e=_n(t,i,r),e!==null&&(Tt(e,t,r,n),Vo(e,t,r))}};function Zf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!us(n,r)||!us(i,s):!0}function ny(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Je(e)?or:be.current,r=e.contextTypes,s=(r=r!=null)?Qr(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tl.enqueueReplaceState(e,e.state,null)}function pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ty,Mh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Je(e)?or:be.current,i.context=Qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tl.enqueueReplaceState(i,i.state,null),ya(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ty&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function ry(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=In(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=mu(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Cr?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&tp(T)===f.type)?(w=i(f,m.props),w.ref=Ai(p,f,m),w.return=p,w):(w=Wo(m.type,m.key,m.props,null,p.mode,w),w.ref=Ai(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=gu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,T){return f===null||f.tag!==7?(f=tr(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mu(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case co:return m=Wo(f.type,f.key,f.props,null,p.mode,m),m.ref=Ai(p,null,f),m.return=p,m;case kr:return f=gu(f,p.mode,m),f.return=p,f;case an:var w=f._init;return h(p,w(f._payload),m)}if(Li(f)||Ti(f))return f=tr(f,p.mode,m,null),f.return=p,f;So(p,f)}return null}function d(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case co:return m.key===T?l(p,f,m,w):null;case kr:return m.key===T?u(p,f,m,w):null;case an:return T=m._init,d(p,f,T(m._payload),w)}if(Li(m)||Ti(m))return T!==null?null:c(p,f,m,w,null);So(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case co:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case kr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case an:var C=w._init;return g(p,f,m,C(w._payload),T)}if(Li(w)||Ti(w))return p=p.get(m)||null,c(f,p,w,T,null);So(f,w)}return null}function y(p,f,m,w){for(var T=null,C=null,N=f,O=f=0,J=null;N!==null&&O<m.length;O++){N.index>O?(J=N,N=null):J=N.sibling;var z=d(p,N,m[O],w);if(z===null){N===null&&(N=J);break}t&&N&&z.alternate===null&&e(p,N),f=s(z,f,O),C===null?T=z:C.sibling=z,C=z,N=J}if(O===m.length)return n(p,N),ne&&Hn(p,O),T;if(N===null){for(;O<m.length;O++)N=h(p,m[O],w),N!==null&&(f=s(N,f,O),C===null?T=N:C.sibling=N,C=N);return ne&&Hn(p,O),T}for(N=r(p,N);O<m.length;O++)J=g(N,p,O,m[O],w),J!==null&&(t&&J.alternate!==null&&N.delete(J.key===null?O:J.key),f=s(J,f,O),C===null?T=J:C.sibling=J,C=J);return t&&N.forEach(function(gt){return e(p,gt)}),ne&&Hn(p,O),T}function v(p,f,m,w){var T=Ti(m);if(typeof T!="function")throw Error(_(150));if(m=T.call(m),m==null)throw Error(_(151));for(var C=T=null,N=f,O=f=0,J=null,z=m.next();N!==null&&!z.done;O++,z=m.next()){N.index>O?(J=N,N=null):J=N.sibling;var gt=d(p,N,z.value,w);if(gt===null){N===null&&(N=J);break}t&&N&&gt.alternate===null&&e(p,N),f=s(gt,f,O),C===null?T=gt:C.sibling=gt,C=gt,N=J}if(z.done)return n(p,N),ne&&Hn(p,O),T;if(N===null){for(;!z.done;O++,z=m.next())z=h(p,z.value,w),z!==null&&(f=s(z,f,O),C===null?T=z:C.sibling=z,C=z);return ne&&Hn(p,O),T}for(N=r(p,N);!z.done;O++,z=m.next())z=g(N,p,O,z.value,w),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?O:z.key),f=s(z,f,O),C===null?T=z:C.sibling=z,C=z);return t&&N.forEach(function(_i){return e(p,_i)}),ne&&Hn(p,O),T}function D(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case co:e:{for(var T=m.key,C=f;C!==null;){if(C.key===T){if(T=m.type,T===Cr){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&tp(T)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=Ai(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Cr?(f=tr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Wo(m.type,m.key,m.props,null,p.mode,w),w.ref=Ai(p,f,m),w.return=p,p=w)}return o(p);case kr:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=gu(m,p.mode,w),f.return=p,p=f}return o(p);case an:return C=m._init,D(p,f,C(m._payload),w)}if(Li(m))return y(p,f,m,w);if(Ti(m))return v(p,f,m,w);So(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=mu(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return D}var Xr=ry(!0),iy=ry(!1),Us={},Ot=Un(Us),fs=Un(Us),ps=Un(Us);function Qn(t){if(t===Us)throw Error(_(174));return t}function $h(t,e){switch(Y(ps,e),Y(fs,t),Y(Ot,Us),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}te(Ot),Y(Ot,e)}function Jr(){te(Ot),te(fs),te(ps)}function sy(t){Qn(ps.current);var e=Qn(Ot.current),n=Wu(e,t.type);e!==n&&(Y(fs,t),Y(Ot,n))}function Uh(t){fs.current===t&&(te(Ot),te(fs))}var ie=Un(0);function va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uu=[];function Fh(){for(var t=0;t<uu.length;t++)uu[t]._workInProgressVersionPrimary=null;uu.length=0}var zo=nn.ReactCurrentDispatcher,cu=nn.ReactCurrentBatchConfig,lr=0,se=null,me=null,Se=null,wa=!1,Wi=!1,ms=0,e_=0;function xe(){throw Error(_(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Vh(t,e,n,r,i,s){if(lr=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zo.current=t===null||t.memoizedState===null?i_:s_,t=n(r,i),Wi){s=0;do{if(Wi=!1,ms=0,25<=s)throw Error(_(301));s+=1,Se=me=null,e.updateQueue=null,zo.current=o_,t=n(r,i)}while(Wi)}if(zo.current=Ea,e=me!==null&&me.next!==null,lr=0,Se=me=se=null,wa=!1,e)throw Error(_(300));return t}function zh(){var t=ms!==0;return ms=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=t:Se=Se.next=t,Se}function mt(){if(me===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Se===null?se.memoizedState:Se.next;if(e!==null)Se=e,me=t;else{if(t===null)throw Error(_(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Se===null?se.memoizedState=Se=t:Se=Se.next=t}return Se}function gs(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=mt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,se.lanes|=c,ur|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(Ye=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function du(t){var e=mt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Ye=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function oy(){}function ay(t,e){var n=se,r=mt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ye=!0),r=r.queue,Bh(cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,ys(9,uy.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(_(349));lr&30||ly(n,e,i)}return i}function ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function uy(t,e,n,r){e.value=n,e.getSnapshot=r,hy(e)&&dy(t)}function cy(t,e,n){return n(function(){hy(e)&&dy(t)})}function hy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function dy(t){var e=Qt(t,1);e!==null&&Tt(e,t,1,-1)}function np(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:t},e.queue=t,t=t.dispatch=r_.bind(null,se,t),[e.memoizedState,t]}function ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function fy(){return mt().memoizedState}function Bo(t,e,n,r){var i=At();se.flags|=t,i.memoizedState=ys(1|e,n,void 0,r===void 0?null:r)}function nl(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&bh(r,o.deps)){i.memoizedState=ys(e,n,s,r);return}}se.flags|=t,i.memoizedState=ys(1|e,n,s,r)}function rp(t,e){return Bo(8390656,8,t,e)}function Bh(t,e){return nl(2048,8,t,e)}function py(t,e){return nl(4,2,t,e)}function my(t,e){return nl(4,4,t,e)}function gy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yy(t,e,n){return n=n!=null?n.concat([t]):null,nl(4,4,gy.bind(null,e,t),n)}function jh(){}function vy(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wy(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ey(t,e,n){return lr&21?(kt(n,e)||(n=Tg(),se.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ye=!0),t.memoizedState=n)}function t_(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=cu.transition;cu.transition={};try{t(!1),e()}finally{Q=n,cu.transition=r}}function _y(){return mt().memoizedState}function n_(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sy(t))Ty(e,n);else if(n=Zg(t,e,n,r),n!==null){var i=qe();Tt(n,t,r,i),Iy(n,e,r)}}function r_(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sy(t))Ty(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Lh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Zg(t,e,i,r),n!==null&&(i=qe(),Tt(n,t,r,i),Iy(n,e,r))}}function Sy(t){var e=t.alternate;return t===se||e!==null&&e===se}function Ty(t,e){Wi=wa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eh(t,n)}}var Ea={readContext:pt,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},i_={readContext:pt,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=n_.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:np,useDebugValue:jh,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=np(!1),e=t[0];return t=t_.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=At();if(ne){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),Te===null)throw Error(_(349));lr&30||ly(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rp(cy.bind(null,r,s,t),[t]),r.flags|=2048,ys(9,uy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=Te.identifierPrefix;if(ne){var n=Bt,r=zt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ms++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=e_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},s_={readContext:pt,useCallback:vy,useContext:pt,useEffect:Bh,useImperativeHandle:yy,useInsertionEffect:py,useLayoutEffect:my,useMemo:wy,useReducer:hu,useRef:fy,useState:function(){return hu(gs)},useDebugValue:jh,useDeferredValue:function(t){var e=mt();return Ey(e,me.memoizedState,t)},useTransition:function(){var t=hu(gs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:_y,unstable_isNewReconciler:!1},o_={readContext:pt,useCallback:vy,useContext:pt,useEffect:Bh,useImperativeHandle:yy,useInsertionEffect:py,useLayoutEffect:my,useMemo:wy,useReducer:du,useRef:fy,useState:function(){return du(gs)},useDebugValue:jh,useDeferredValue:function(t){var e=mt();return me===null?e.memoizedState=t:Ey(e,me.memoizedState,t)},useTransition:function(){var t=du(gs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:_y,unstable_isNewReconciler:!1};function Zr(t,e){try{var n="",r=e;do n+=L1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function ky(t,e,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sa||(Sa=!0,kc=r),mc(t,e)},n}function Cy(t,e,n){n=Wt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mc(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ip(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new a_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=__.bind(null,t,e,n),e.then(t,t))}function sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function op(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wt(-1,1),e.tag=2,_n(n,e,1))),n.lanes|=1),t)}var l_=nn.ReactCurrentOwner,Ye=!1;function je(t,e,n,r){e.child=t===null?iy(e,null,n,r):Xr(e,t.child,n,r)}function ap(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=Vh(t,e,n,r,s,i),n=zh(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yt(t,e,i)):(ne&&n&&Ah(e),e.flags|=1,je(t,e,r,i),e.child)}function lp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ny(t,e,s,r,i)):(t=Wo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:us,n(o,r)&&t.ref===e.ref)return Yt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ny(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(us(s,r)&&t.ref===e.ref)if(Ye=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ye=!0);else return e.lanes=t.lanes,Yt(t,e,i)}return gc(t,e,n,r,i)}function Ay(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y($r,tt),tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y($r,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y($r,tt),tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y($r,tt),tt|=r;return je(t,e,i,n),e.child}function Dy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gc(t,e,n,r,i){var s=Je(n)?or:be.current;return s=Qr(e,s),Br(e,i),n=Vh(t,e,n,r,s,i),r=zh(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yt(t,e,i)):(ne&&r&&Ah(e),e.flags|=1,je(t,e,n,i),e.child)}function up(t,e,n,r,i){if(Je(n)){var s=!0;da(e)}else s=!1;if(Br(e,i),e.stateNode===null)jo(t,e),ny(e,n,r),pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Je(n)?or:be.current,u=Qr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ep(e,o,r,u),ln=!1;var d=e.memoizedState;o.state=d,ya(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xe.current||ln?(typeof c=="function"&&(fc(e,n,c,r),l=e.memoizedState),(a=ln||Zf(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ey(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:vt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Je(n)?or:be.current,l=Qr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&ep(e,o,r,l),ln=!1,d=e.memoizedState,o.state=d,ya(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Xe.current||ln?(typeof g=="function"&&(fc(e,n,g,r),y=e.memoizedState),(u=ln||Zf(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return yc(t,e,n,r,s,i)}function yc(t,e,n,r,i,s){Dy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gf(e,n,!1),Yt(t,e,s);r=e.stateNode,l_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,a,s)):je(t,e,a,s),e.memoizedState=r.state,i&&Gf(e,n,!0),e.child}function Ry(t){var e=t.stateNode;e.pendingContext?Kf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kf(t,e.context,!1),$h(t,e.containerInfo)}function cp(t,e,n,r,i){return Yr(),Rh(i),e.flags|=256,je(t,e,n,r),e.child}var vc={dehydrated:null,treeContext:null,retryLane:0};function wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function xy(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ie,i&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sl(o,r,0,null),t=tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wc(n),e.memoizedState=vc,t):Hh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return u_(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=In(a,s):(s=tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vc,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hh(t,e){return e=sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,r){return r!==null&&Rh(r),Xr(e,t.child,null,n),t=Hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fu(Error(_(422))),To(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sl({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=wc(o),e.memoizedState=vc,s);if(!(e.mode&1))return To(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=fu(s,r,void 0),To(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ye||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(t,i),Tt(r,t,i,-1))}return Yh(),r=fu(Error(_(421))),To(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=S_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=En(i.nextSibling),it=e,ne=!0,Et=null,t!==null&&(ut[ct++]=zt,ut[ct++]=Bt,ut[ct++]=ar,zt=t.id,Bt=t.overflow,ar=e),e=Hh(e,r.children),e.flags|=4096,e)}function hp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dc(t.return,e,n)}function pu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Oy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,n,e);else if(t.tag===19)hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pu(e,!0,n,null,s);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c_(t,e,n){switch(e.tag){case 3:Ry(e),Yr();break;case 5:sy(e);break;case 1:Je(e.type)&&da(e);break;case 4:$h(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?xy(t,e,n):(Y(ie,ie.current&1),t=Yt(t,e,n),t!==null?t.sibling:null);Y(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Oy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Ay(t,e,n)}return Yt(t,e,n)}var Py,Ec,Ly,My;Py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ec=function(){};Ly=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(Ot.current);var s=null;switch(n){case"input":i=Bu(t,i),r=Bu(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=qu(t,i),r=qu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}Ku(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ns.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};My=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function h_(t,e,n){var r=e.pendingProps;switch(Dh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(e),null;case 1:return Je(e.type)&&ha(),Oe(e),null;case 3:return r=e.stateNode,Jr(),te(Xe),te(be),Fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(Ac(Et),Et=null))),Ec(t,e),Oe(e),null;case 5:Uh(e);var i=Qn(ps.current);if(n=e.type,t!==null&&e.stateNode!=null)Ly(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return Oe(e),null}if(t=Qn(Ot.current),_o(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dt]=e,r[ds]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)Z($i[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Ef(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Sf(r,s),Z("invalid",r)}Ku(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,a,t),i=["children",""+a]):ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":ho(r),_f(r,s,!0);break;case"textarea":ho(r),Tf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[ds]=r,Py(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gu(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)Z($i[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Ef(t,r),i=Bu(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Sf(t,r),i=qu(t,r),Z("invalid",t);break;default:i=r}Ku(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ug(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&rs(t,l):typeof l=="number"&&rs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&ph(t,s,l,o))}switch(n){case"input":ho(t),_f(t,r,!1);break;case"textarea":ho(t),Tf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Oe(e),null;case 6:if(t&&e.stateNode!=null)My(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=Qn(ps.current),Qn(Ot.current),_o(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(s=r.nodeValue!==n)&&(t=it,t!==null))switch(t.tag){case 3:Eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Oe(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&nt!==null&&e.mode&1&&!(e.flags&128))Jg(),Yr(),e.flags|=98560,s=!1;else if(s=_o(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[Dt]=e}else Yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Oe(e),s=!1}else Et!==null&&(Ac(Et),Et=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?ge===0&&(ge=3):Yh())),e.updateQueue!==null&&(e.flags|=4),Oe(e),null);case 4:return Jr(),Ec(t,e),t===null&&cs(e.stateNode.containerInfo),Oe(e),null;case 10:return Ph(e.type._context),Oe(e),null;case 17:return Je(e.type)&&ha(),Oe(e),null;case 19:if(te(ie),s=e.memoizedState,s===null)return Oe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Di(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=va(t),o!==null){for(e.flags|=128,Di(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>ei&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304)}else{if(!r)if(t=va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Oe(e),null}else 2*ce()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ie.current,Y(ie,r?n&1|2:n&1),e):(Oe(e),null);case 22:case 23:return Qh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tt&1073741824&&(Oe(e),e.subtreeFlags&6&&(e.flags|=8192)):Oe(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function d_(t,e){switch(Dh(e),e.tag){case 1:return Je(e.type)&&ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jr(),te(Xe),te(be),Fh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uh(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Jr(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var Io=!1,Le=!1,f_=typeof WeakSet=="function"?WeakSet:Set,I=null;function Mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function _c(t,e,n){try{n()}catch(r){ae(t,e,r)}}var dp=!1;function p_(t,e){if(ic=aa,t=bg(),Nh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:t,selectionRange:n},aa=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:vt(e.type,v),D);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return y=dp,dp=!1,y}function Ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_c(e,n,s)}i=i.next}while(i!==r)}}function rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $y(t){var e=t.alternate;e!==null&&(t.alternate=null,$y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[ds],delete e[lc],delete e[YE],delete e[XE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uy(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}function Ic(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}var ke=null,wt=!1;function sn(t,e,n){for(n=n.child;n!==null;)Fy(t,e,n),n=n.sibling}function Fy(t,e,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:Le||Mr(n,e);case 6:var r=ke,i=wt;ke=null,sn(t,e,n),ke=r,wt=i,ke!==null&&(wt?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(wt?(t=ke,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),as(t)):au(ke,n.stateNode));break;case 4:r=ke,i=wt,ke=n.stateNode.containerInfo,wt=!0,sn(t,e,n),ke=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_c(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!Le&&(Mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,sn(t,e,n),Le=r):sn(t,e,n);break;default:sn(t,e,n)}}function pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f_),e.forEach(function(r){var i=T_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ke=a.stateNode,wt=!1;break e;case 3:ke=a.stateNode.containerInfo,wt=!0;break e;case 4:ke=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(ke===null)throw Error(_(160));Fy(s,o,i),ke=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)by(e,t),e=e.sibling}function by(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),Nt(t),r&4){try{Ki(3,t,t.return),rl(3,t)}catch(v){ae(t,t.return,v)}try{Ki(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:yt(e,t),Nt(t),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(yt(e,t),Nt(t),r&512&&n!==null&&Mr(n,n.return),t.flags&32){var i=t.stateNode;try{rs(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&og(i,s),Gu(a,o);var u=Gu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?hg(i,h):c==="dangerouslySetInnerHTML"?ug(i,h):c==="children"?rs(i,h):ph(i,c,h,u)}switch(a){case"input":ju(i,s);break;case"textarea":ag(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Fr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(yt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(yt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:yt(e,t),Nt(t);break;case 13:yt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kh=ce())),r&4&&pp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(u=Le)||c,yt(e,t),Le=u):yt(e,t),Nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(I=t,c=t.child;c!==null;){for(h=I=c;I!==null;){switch(d=I,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ki(4,d,d.return);break;case 1:Mr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Mr(d,d.return);break;case 22:if(d.memoizedState!==null){gp(h);continue}}g!==null?(g.return=d,I=g):gp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(v){ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yt(e,t),Nt(t),r&4&&pp(t);break;case 21:break;default:yt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uy(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(rs(i,""),r.flags&=-33);var s=fp(t);Ic(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=fp(t);Tc(t,a,o);break;default:throw Error(_(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m_(t,e,n){I=t,Vy(t)}function Vy(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Io;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=Io;var u=Le;if(Io=o,(Le=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?yp(i):l!==null?(l.return=o,I=l):yp(i);for(;s!==null;)I=s,Vy(s),s=s.sibling;I=i,Io=a,Le=u}mp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):mp(t)}}function mp(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&as(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Le||e.flags&512&&Sc(e)}catch(d){ae(e,e.return,d)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function gp(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function yp(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rl(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{Sc(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{Sc(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var g_=Math.ceil,_a=nn.ReactCurrentDispatcher,qh=nn.ReactCurrentOwner,ft=nn.ReactCurrentBatchConfig,q=0,Te=null,fe=null,Ne=0,tt=0,$r=Un(0),ge=0,vs=null,ur=0,il=0,Wh=0,Gi=null,Ge=null,Kh=0,ei=1/0,Ft=null,Sa=!1,kc=null,Sn=null,ko=!1,mn=null,Ta=0,Qi=0,Cc=null,Ho=-1,qo=0;function qe(){return q&6?ce():Ho!==-1?Ho:Ho=ce()}function Tn(t){return t.mode&1?q&2&&Ne!==0?Ne&-Ne:ZE.transition!==null?(qo===0&&(qo=Tg()),qo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function Tt(t,e,n,r){if(50<Qi)throw Qi=0,Cc=null,Error(_(185));Ls(t,n,r),(!(q&2)||t!==Te)&&(t===Te&&(!(q&2)&&(il|=n),ge===4&&cn(t,Ne)),Ze(t,r),n===1&&q===0&&!(e.mode&1)&&(ei=ce()+500,el&&Fn()))}function Ze(t,e){var n=t.callbackNode;Z1(t,e);var r=oa(t,t===Te?Ne:0);if(r===0)n!==null&&Cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cf(n),e===1)t.tag===0?JE(vp.bind(null,t)):Qg(vp.bind(null,t)),GE(function(){!(q&6)&&Fn()}),n=null;else{switch(Ig(r)){case 1:n=wh;break;case 4:n=_g;break;case 16:n=sa;break;case 536870912:n=Sg;break;default:n=sa}n=Gy(n,zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zy(t,e){if(Ho=-1,qo=0,q&6)throw Error(_(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=oa(t,t===Te?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ia(t,r);else{e=r;var i=q;q|=2;var s=jy();(Te!==t||Ne!==e)&&(Ft=null,ei=ce()+500,er(t,e));do try{w_();break}catch(a){By(t,a)}while(1);Oh(),_a.current=s,q=i,fe!==null?e=0:(Te=null,Ne=0,e=ge)}if(e!==0){if(e===2&&(i=Zu(t),i!==0&&(r=i,e=Nc(t,i))),e===1)throw n=vs,er(t,0),cn(t,r),Ze(t,ce()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!y_(i)&&(e=Ia(t,r),e===2&&(s=Zu(t),s!==0&&(r=s,e=Nc(t,s))),e===1))throw n=vs,er(t,0),cn(t,r),Ze(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:qn(t,Ge,Ft);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=Kh+500-ce(),10<e)){if(oa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ac(qn.bind(null,t,Ge,Ft),e);break}qn(t,Ge,Ft);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g_(r/1960))-r,10<r){t.timeoutHandle=ac(qn.bind(null,t,Ge,Ft),r);break}qn(t,Ge,Ft);break;case 5:qn(t,Ge,Ft);break;default:throw Error(_(329))}}}return Ze(t,ce()),t.callbackNode===n?zy.bind(null,t):null}function Nc(t,e){var n=Gi;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=Ia(t,e),t!==2&&(e=Ge,Ge=n,e!==null&&Ac(e)),t}function Ac(t){Ge===null?Ge=t:Ge.push.apply(Ge,t)}function y_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~Wh,e&=~il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function vp(t){if(q&6)throw Error(_(327));jr();var e=oa(t,0);if(!(e&1))return Ze(t,ce()),null;var n=Ia(t,e);if(t.tag!==0&&n===2){var r=Zu(t);r!==0&&(e=r,n=Nc(t,r))}if(n===1)throw n=vs,er(t,0),cn(t,e),Ze(t,ce()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qn(t,Ge,Ft),Ze(t,ce()),null}function Gh(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(ei=ce()+500,el&&Fn())}}function cr(t){mn!==null&&mn.tag===0&&!(q&6)&&jr();var e=q;q|=1;var n=ft.transition,r=Q;try{if(ft.transition=null,Q=1,t)return t()}finally{Q=r,ft.transition=n,q=e,!(q&6)&&Fn()}}function Qh(){tt=$r.current,te($r)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KE(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:Jr(),te(Xe),te(be),Fh();break;case 5:Uh(r);break;case 4:Jr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Ph(r.type._context);break;case 22:case 23:Qh()}n=n.return}if(Te=t,fe=t=In(t.current,null),Ne=tt=e,ge=0,vs=null,Wh=il=ur=0,Ge=Gi=null,Gn!==null){for(e=0;e<Gn.length;e++)if(n=Gn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gn=null}return t}function By(t,e){do{var n=fe;try{if(Oh(),zo.current=Ea,wa){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wa=!1}if(lr=0,Se=me=se=null,Wi=!1,ms=0,qh.current=null,n===null||n.return===null){ge=1,vs=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=sp(o);if(g!==null){g.flags&=-257,op(g,o,a,s,e),g.mode&1&&ip(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){ip(s,u,e),Yh();break e}l=Error(_(426))}}else if(ne&&a.mode&1){var D=sp(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),op(D,o,a,s,e),Rh(Zr(l,a));break e}}s=l=Zr(l,a),ge!==4&&(ge=2),Gi===null?Gi=[s]:Gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ky(s,l,e);Xf(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Cy(s,a,e);Xf(s,w);break e}}s=s.return}while(s!==null)}qy(n)}catch(T){e=T,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function jy(){var t=_a.current;return _a.current=Ea,t===null?Ea:t}function Yh(){(ge===0||ge===3||ge===2)&&(ge=4),Te===null||!(ur&268435455)&&!(il&268435455)||cn(Te,Ne)}function Ia(t,e){var n=q;q|=2;var r=jy();(Te!==t||Ne!==e)&&(Ft=null,er(t,e));do try{v_();break}catch(i){By(t,i)}while(1);if(Oh(),q=n,_a.current=r,fe!==null)throw Error(_(261));return Te=null,Ne=0,ge}function v_(){for(;fe!==null;)Hy(fe)}function w_(){for(;fe!==null&&!H1();)Hy(fe)}function Hy(t){var e=Ky(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?qy(t):fe=e,qh.current=null}function qy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d_(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}else if(n=h_(n,e,tt),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function qn(t,e,n){var r=Q,i=ft.transition;try{ft.transition=null,Q=1,E_(t,e,n,r)}finally{ft.transition=i,Q=r}return null}function E_(t,e,n,r){do jr();while(mn!==null);if(q&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eE(t,s),t===Te&&(fe=Te=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,Gy(sa,function(){return jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=Q;Q=1;var a=q;q|=4,qh.current=null,p_(t,n),by(n,t),VE(sc),aa=!!ic,sc=ic=null,t.current=n,m_(n),q1(),q=a,Q=o,ft.transition=s}else t.current=n;if(ko&&(ko=!1,mn=t,Ta=i),s=t.pendingLanes,s===0&&(Sn=null),G1(n.stateNode),Ze(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sa)throw Sa=!1,t=kc,kc=null,t;return Ta&1&&t.tag!==0&&jr(),s=t.pendingLanes,s&1?t===Cc?Qi++:(Qi=0,Cc=t):Qi=0,Fn(),null}function jr(){if(mn!==null){var t=Ig(Ta),e=ft.transition,n=Q;try{if(ft.transition=null,Q=16>t?16:t,mn===null)var r=!1;else{if(t=mn,mn=null,Ta=0,q&6)throw Error(_(331));var i=q;for(q|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Ki(8,c,s)}var h=c.child;if(h!==null)h.return=c,I=h;else for(;I!==null;){c=I;var d=c.sibling,g=c.return;if($y(c),c===u){I=null;break}if(d!==null){d.return=g,I=d;break}I=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ki(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var f=t.current;for(I=f;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=f;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(T){ae(a,a.return,T)}if(a===o){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(q=i,Fn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Qa,t)}catch{}r=!0}return r}finally{Q=n,ft.transition=e}}return!1}function wp(t,e,n){e=Zr(n,e),e=ky(t,e,1),t=_n(t,e,1),e=qe(),t!==null&&(Ls(t,1,e),Ze(t,e))}function ae(t,e,n){if(t.tag===3)wp(t,t,n);else for(;e!==null;){if(e.tag===3){wp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=Zr(n,t),t=Cy(e,t,1),e=_n(e,t,1),t=qe(),e!==null&&(Ls(e,1,t),Ze(e,t));break}}e=e.return}}function __(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>ce()-Kh?er(t,0):Wh|=n),Ze(t,e)}function Wy(t,e){e===0&&(t.mode&1?(e=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):e=1);var n=qe();t=Qt(t,e),t!==null&&(Ls(t,e,n),Ze(t,n))}function S_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wy(t,n)}function T_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),Wy(t,n)}var Ky;Ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Ye=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ye=!1,c_(t,e,n);Ye=!!(t.flags&131072)}else Ye=!1,ne&&e.flags&1048576&&Yg(e,pa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jo(t,e),t=e.pendingProps;var i=Qr(e,be.current);Br(e,n),i=Vh(null,e,r,t,i,n);var s=zh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,da(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mh(e),i.updater=tl,e.stateNode=i,i._reactInternals=e,pc(e,r,t,n),e=yc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Ah(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=k_(r),t=vt(r,t),i){case 0:e=gc(null,e,r,t,n);break e;case 1:e=up(null,e,r,t,n);break e;case 11:e=ap(null,e,r,t,n);break e;case 14:e=lp(null,e,r,vt(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),gc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),up(t,e,r,i,n);case 3:e:{if(Ry(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ey(t,e),ya(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zr(Error(_(423)),e),e=cp(t,e,r,n,i);break e}else if(r!==i){i=Zr(Error(_(424)),e),e=cp(t,e,r,n,i);break e}else for(nt=En(e.stateNode.containerInfo.firstChild),it=e,ne=!0,Et=null,n=iy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Yt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return sy(e),t===null&&hc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,oc(r,i)?o=null:s!==null&&oc(r,s)&&(e.flags|=32),Dy(t,e),je(t,e,o,n),e.child;case 6:return t===null&&hc(e),null;case 13:return xy(t,e,n);case 4:return $h(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),ap(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(ma,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Xe.current){e=Yt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=pt(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=vt(r,e.pendingProps),i=vt(r.type,i),lp(t,e,r,i,n);case 15:return Ny(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),jo(t,e),e.tag=1,Je(r)?(t=!0,da(e)):t=!1,Br(e,n),ny(e,r,i),pc(e,r,i,n),yc(null,e,r,!0,t,n);case 19:return Oy(t,e,n);case 22:return Ay(t,e,n)}throw Error(_(156,e.tag))};function Gy(t,e){return Eg(t,e)}function I_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new I_(t,e,n,r)}function Xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function k_(t){if(typeof t=="function")return Xh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gh)return 11;if(t===yh)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cr:return tr(n.children,i,s,e);case mh:o=8,i|=8;break;case Fu:return t=dt(12,n,e,i|2),t.elementType=Fu,t.lanes=s,t;case bu:return t=dt(13,n,e,i),t.elementType=bu,t.lanes=s,t;case Vu:return t=dt(19,n,e,i),t.elementType=Vu,t.lanes=s,t;case rg:return sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tg:o=10;break e;case ng:o=9;break e;case gh:o=11;break e;case yh:o=14;break e;case an:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tr(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function sl(t,e,n,r){return t=dt(22,t,r,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function mu(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function gu(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jh(t,e,n,r,i,s,o,a,l){return t=new C_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),t}function N_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qy(t){if(!t)return On;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(Je(n))return Gg(t,n,e)}return e}function Yy(t,e,n,r,i,s,o,a,l){return t=Jh(n,r,!0,t,i,s,o,a,l),t.context=Qy(null),n=t.current,r=qe(),i=Tn(n),s=Wt(r,i),s.callback=e??null,_n(n,s,i),t.current.lanes=i,Ls(t,i,r),Ze(t,r),t}function ol(t,e,n,r){var i=e.current,s=qe(),o=Tn(i);return n=Qy(n),e.context===null?e.context=n:e.pendingContext=n,e=Wt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_n(i,e,o),t!==null&&(Tt(t,i,o,s),Vo(t,i,o)),o}function ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zh(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function A_(){return null}var Xy=typeof reportError=="function"?reportError:function(t){console.error(t)};function ed(t){this._internalRoot=t}al.prototype.render=ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));ol(t,e,null,null)};al.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cr(function(){ol(null,t,null,null)}),e[Gt]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Dg(t)}};function td(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function D_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ka(o);s.call(u)}}var o=Yy(e,r,t,0,null,!1,!1,"",_p);return t._reactRootContainer=o,t[Gt]=o.current,cs(t.nodeType===8?t.parentNode:t),cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ka(l);a.call(u)}}var l=Jh(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=l,t[Gt]=l.current,cs(t.nodeType===8?t.parentNode:t),cr(function(){ol(e,l,n,r)}),l}function ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ka(o);a.call(l)}}ol(e,o,t,i)}else o=D_(n,e,t,i,r);return ka(o)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(Eh(e,n|1),Ze(e,ce()),!(q&6)&&(ei=ce()+500,Fn()))}break;case 13:cr(function(){var r=Qt(t,1);if(r!==null){var i=qe();Tt(r,t,1,i)}}),Zh(t,1)}};_h=function(t){if(t.tag===13){var e=Qt(t,134217728);if(e!==null){var n=qe();Tt(e,t,134217728,n)}Zh(t,134217728)}};Cg=function(t){if(t.tag===13){var e=Tn(t),n=Qt(t,e);if(n!==null){var r=qe();Tt(n,t,e,r)}Zh(t,e)}};Ng=function(){return Q};Ag=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};Yu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Za(r);if(!i)throw Error(_(90));sg(r),ju(r,i)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};pg=Gh;mg=cr;var R_={usingClientEntryPoint:!1,Events:[$s,Rr,Za,dg,fg,Gh]},Ri={findFiberByHostInstance:Kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x_={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Qa=Co.inject(x_),xt=Co}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(e))throw Error(_(200));return N_(t,e,null,n)};at.createRoot=function(t,e){if(!td(t))throw Error(_(299));var n=!1,r="",i=Xy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jh(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,cs(t.nodeType===8?t.parentNode:t),new ed(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return cr(t)};at.hydrate=function(t,e,n){if(!ll(e))throw Error(_(200));return ul(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!td(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yy(e,null,t,1,n??null,i,!1,s,o),t[Gt]=e.current,cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new al(e)};at.render=function(t,e,n){if(!ll(e))throw Error(_(200));return ul(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!ll(t))throw Error(_(40));return t._reactRootContainer?(cr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};at.unstable_batchedUpdates=Gh;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ll(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return ul(t,e,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=at})(A1);var Sp=Mu;Lu.createRoot=Sp.createRoot,Lu.hydrateRoot=Sp.hydrateRoot;var Jy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tp=gn.createContext&&gn.createContext(Jy),kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},kn.apply(this,arguments)},O_=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Zy(t){return t&&t.map(function(e,n){return gn.createElement(e.tag,kn({key:n},e.attr),Zy(e.child))})}function P_(t){return function(e){return gn.createElement(L_,kn({attr:kn({},t.attr)},e),Zy(t.child))}}function L_(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=O_(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),gn.createElement("svg",kn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:kn(kn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&gn.createElement("title",null,s),t.children)};return Tp!==void 0?gn.createElement(Tp.Consumer,null,function(n){return e(n)}):e(Jy)}function M_(t){return P_({tag:"svg",attr:{t:"1551322312294",style:"",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"}},{tag:"path",attr:{d:"M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"}}]})(t)}const xi={li:"flex text-sm justify-between rounded-md p-2 mb-2 mt-2 ml-4 mr-4 bg-slate-200",liComplete:"flex text-sm justify-between rounded-md p-2 mb-2 mt-2 ml-4 mr-4 bg-red-300",row:"flex",text:"ml-4 cursor-pointer",textComplete:"ml-4 cursor-pointer line-through",button:"cursor-pointer flex items-center"},$_=({todo:t,toggleComplete:e,deleteTodo:n})=>ht("li",{className:t.completed?xi.liComplete:xi.li,children:[ht("div",{className:xi.row,children:[G("input",{onChange:()=>e(t),type:"checkbox",checked:t.completed?"checked":""}),G("p",{onClick:()=>e(t),className:t.completed?xi.textComplete:xi.text,children:t.text})]}),G("button",{onClick:()=>n(t.id),children:"🗑"})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ev(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},F_=function(t){const e=ev(t);return tv.encodeByteArray(e,!0)},Ca=function(t){return F_(t).replace(/\./g,"")},nv=function(t){try{return tv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=()=>b_().__FIREBASE_DEFAULTS__,z_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},B_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nv(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return V_()||z_()||B_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rv=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},j_=t=>{const e=rv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},H_=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config},iv=t=>{var e;return(e=nd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ca(JSON.stringify(n)),Ca(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function G_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y_(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function X_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Z_,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function eS(t,e){return t.replace(tS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tS=/\{\$([^}]+)}/g;function nS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ip(s)&&Ip(o)){if(!Na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ip(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rS(t,e){const n=new iS(t,e);return n.subscribe.bind(n)}class iS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yu),i.error===void 0&&(i.error=yu),i.complete===void 0&&(i.complete=yu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new q_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lS(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aS(t){return t===Wn?void 0:t}function lS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const cS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},hS=W.INFO,dS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},fS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rd{constructor(e){this.name=e,this._logLevel=hS,this._logHandler=fS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const pS=(t,e)=>e.some(n=>t instanceof n);let kp,Cp;function mS(){return kp||(kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gS(){return Cp||(Cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,Dc=new WeakMap,ov=new WeakMap,vu=new WeakMap,id=new WeakMap;function yS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sv.set(n,t)}).catch(()=>{}),id.set(e,t),e}function vS(t){if(Dc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dc.set(t,e)}let Rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wS(t){Rc=t(Rc)}function ES(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wu(this),e,...n);return ov.set(r,e.sort?e.sort():[e]),Cn(r)}:gS().includes(t)?function(...e){return t.apply(wu(this),e),Cn(sv.get(this))}:function(...e){return Cn(t.apply(wu(this),e))}}function _S(t){return typeof t=="function"?ES(t):(t instanceof IDBTransaction&&vS(t),pS(t,mS())?new Proxy(t,Rc):t)}function Cn(t){if(t instanceof IDBRequest)return yS(t);if(vu.has(t))return vu.get(t);const e=_S(t);return e!==t&&(vu.set(t,e),id.set(e,t)),e}const wu=t=>id.get(t);function SS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cn(o.result),l.oldVersion,l.newVersion,Cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const TS=["get","getKey","getAll","getAllKeys","count"],IS=["put","add","delete","clear"],Eu=new Map;function Np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eu.get(e))return Eu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Eu.set(e,s),s}wS(t=>({...t,get:(e,n,r)=>Np(e,n)||t.get(e,n,r),has:(e,n)=>!!Np(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",Ap="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new rd("@firebase/app"),NS="@firebase/app-compat",AS="@firebase/analytics-compat",DS="@firebase/analytics",RS="@firebase/app-check-compat",xS="@firebase/app-check",OS="@firebase/auth",PS="@firebase/auth-compat",LS="@firebase/database",MS="@firebase/database-compat",$S="@firebase/functions",US="@firebase/functions-compat",FS="@firebase/installations",bS="@firebase/installations-compat",VS="@firebase/messaging",zS="@firebase/messaging-compat",BS="@firebase/performance",jS="@firebase/performance-compat",HS="@firebase/remote-config",qS="@firebase/remote-config-compat",WS="@firebase/storage",KS="@firebase/storage-compat",GS="@firebase/firestore",QS="@firebase/firestore-compat",YS="firebase",XS="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="[DEFAULT]",JS={[xc]:"fire-core",[NS]:"fire-core-compat",[DS]:"fire-analytics",[AS]:"fire-analytics-compat",[xS]:"fire-app-check",[RS]:"fire-app-check-compat",[OS]:"fire-auth",[PS]:"fire-auth-compat",[LS]:"fire-rtdb",[MS]:"fire-rtdb-compat",[$S]:"fire-fn",[US]:"fire-fn-compat",[FS]:"fire-iid",[bS]:"fire-iid-compat",[VS]:"fire-fcm",[zS]:"fire-fcm-compat",[BS]:"fire-perf",[jS]:"fire-perf-compat",[HS]:"fire-rc",[qS]:"fire-rc-compat",[WS]:"fire-gcs",[KS]:"fire-gcs-compat",[GS]:"fire-fst",[QS]:"fire-fst-compat","fire-js":"fire-js",[YS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Map,Pc=new Map;function ZS(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Pc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Pc.set(e,t);for(const n of Aa.values())ZS(n,t);return!0}function sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new Fs("app","Firebase",eT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=XS;function av(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=H_()),!n)throw Nn.create("no-options");const s=Aa.get(i);if(s){if(Na(n,s.options)&&Na(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new uS(i);for(const l of Pc.values())o.addComponent(l);const a=new tT(n,r,o);return Aa.set(i,a),a}function lv(t=Oc){const e=Aa.get(t);if(!e&&t===Oc)return av();if(!e)throw Nn.create("no-app",{appName:t});return e}function An(t,e,n){var r;let i=(r=JS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}ti(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="firebase-heartbeat-database",rT=1,ws="firebase-heartbeat-store";let _u=null;function uv(){return _u||(_u=SS(nT,rT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ws)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),_u}async function iT(t){try{return(await uv()).transaction(ws).objectStore(ws).get(cv(t))}catch(e){if(e instanceof rn)dr.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Dp(t,e){try{const r=(await uv()).transaction(ws,"readwrite");return await r.objectStore(ws).put(e,cv(t)),r.done}catch(n){if(n instanceof rn)dr.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function cv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1024,oT=30*24*60*60*1e3;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rp(),{heartbeatsToSend:n,unsentEntries:r}=lT(this._heartbeatsCache.heartbeats),i=Ca(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rp(){return new Date().toISOString().substring(0,10)}function lT(t,e=sT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xp(t){return Ca(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){ti(new hr("platform-logger",e=>new kS(e),"PRIVATE")),ti(new hr("heartbeat",e=>new aT(e),"PRIVATE")),An(xc,Ap,t),An(xc,Ap,"esm2017"),An("fire-js","")}cT("");var hT="firebase",dT="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(hT,dT,"app");var fT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,od=od||{},$=fT||self;function Da(){}function cl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,Su)&&t[Su]||(t[Su]=++mT)}var Su="closure_uid_"+(1e9*Math.random()>>>0),mT=0;function gT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ue=gT:Ue=yT,Ue.apply(null,arguments)}function No(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Re(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function bn(){this.s=this.s,this.o=this.o}var vT=0;bn.prototype.s=!1;bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vT!=0)&&pT(this)};bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const hv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ad(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Op(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var wT=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Da,e),$.removeEventListener("test",Da,e)}catch{}return t}();function Ra(t){return/^[\s\xa0]*$/.test(t)}var Pp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Tu(t,e){return t<e?-1:t>e?1:0}function hl(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return hl().indexOf(t)!=-1}function ld(t){return ld[" "](t),t}ld[" "]=Da;function ET(t){var e=TT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _T=Rt("Opera"),ni=Rt("Trident")||Rt("MSIE"),dv=Rt("Edge"),Lc=dv||ni,fv=Rt("Gecko")&&!(hl().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),ST=hl().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function pv(){var t=$.document;return t?t.documentMode:void 0}var xa;e:{var Iu="",ku=function(){var t=hl();if(fv)return/rv:([^\);]+)(\)|;)/.exec(t);if(dv)return/Edge\/([\d\.]+)/.exec(t);if(ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ST)return/WebKit\/(\S+)/.exec(t);if(_T)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ku&&(Iu=ku?ku[1]:""),ni){var Cu=pv();if(Cu!=null&&Cu>parseFloat(Iu)){xa=String(Cu);break e}}xa=Iu}var TT={};function IT(){return ET(function(){let t=0;const e=Pp(String(xa)).split("."),n=Pp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Tu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Tu(i[2].length==0,s[2].length==0)||Tu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Mc;if($.document&&ni){var Lp=pv();Mc=Lp||parseInt(xa,10)||void 0}else Mc=void 0;var kT=Mc;function Es(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(fv){e:{try{ld(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Es.X.h.call(this)}}Re(Es,Fe);var CT={2:"touch",3:"pen",4:"mouse"};Es.prototype.h=function(){Es.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bs="closure_listenable_"+(1e6*Math.random()|0),NT=0;function AT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++NT,this.ba=this.ea=!1}function dl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ud(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mv(t){const e={};for(const n in t)e[n]=t[n];return e}const Mp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Mp.length;s++)n=Mp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fl(t){this.src=t,this.g={},this.h=0}fl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Uc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new AT(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function $c(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=hv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var cd="closure_lm_"+(1e6*Math.random()|0),Nu={};function yv(t,e,n,r,i){if(r&&r.once)return wv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)yv(t,e[s],n,r,i);return null}return n=fd(n),t&&t[Bs]?t.N(e,n,zs(r)?!!r.capture:!!r,i):vv(t,e,n,!1,r,i)}function vv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=zs(i)?!!i.capture:!!i,a=dd(t);if(a||(t[cd]=a=new fl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_v(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DT(){function t(n){return e.call(t.src,t.listener,n)}const e=RT;return t}function wv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wv(t,e[s],n,r,i);return null}return n=fd(n),t&&t[Bs]?t.O(e,n,zs(r)?!!r.capture:!!r,i):vv(t,e,n,!0,r,i)}function Ev(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ev(t,e[s],n,r,i);else r=zs(r)?!!r.capture:!!r,n=fd(n),t&&t[Bs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Uc(s,n,r,i),-1<n&&(dl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=dd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uc(e,n,r,i)),(n=-1<t?e[t]:null)&&hd(n))}function hd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Bs])$c(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_v(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dd(e))?($c(n,t),n.h==0&&(n.src=null,e[cd]=null)):dl(t)}}}function _v(t){return t in Nu?Nu[t]:Nu[t]="on"+t}function RT(t,e){if(t.ba)t=!0;else{e=new Es(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&hd(t),t=n.call(r,e)}return t}function dd(t){return t=t[cd],t instanceof fl?t:null}var Au="__closure_events_fn_"+(1e9*Math.random()>>>0);function fd(t){return typeof t=="function"?t:(t[Au]||(t[Au]=function(e){return t.handleEvent(e)}),t[Au])}function Ie(){bn.call(this),this.i=new fl(this),this.P=this,this.I=null}Re(Ie,bn);Ie.prototype[Bs]=!0;Ie.prototype.removeEventListener=function(t,e,n,r){Ev(this,t,e,n,r)};function Ae(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(r,t),gv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ao(o,r,!0,e)&&i}if(o=e.g=t,i=Ao(o,r,!0,e)&&i,i=Ao(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ao(o,r,!1,e)&&i}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dl(n[r]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ie.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ao(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&$c(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var pd=$.JSON.stringify;function xT(){var t=Iv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OT{constructor(){this.h=this.g=null}add(e,n){const r=Sv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new PT,t=>t.reset());class PT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LT(t){$.setTimeout(()=>{throw t},0)}function Tv(t,e){Fc||MT(),bc||(Fc(),bc=!0),Iv.add(t,e)}var Fc;function MT(){var t=$.Promise.resolve(void 0);Fc=function(){t.then($T)}}var bc=!1,Iv=new OT;function $T(){for(var t;t=xT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=Sv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bc=!1}function pl(t,e){Ie.call(this),this.h=t||1,this.g=e||$,this.j=Ue(this.lb,this),this.l=Date.now()}Re(pl,Ie);R=pl.prototype;R.ca=!1;R.R=null;R.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(md(this),this.start()))}};R.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function md(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}R.M=function(){pl.X.M.call(this),md(this),delete this.g};function gd(t,e,n){if(typeof t=="function")n&&(t=Ue(t,n));else if(t&&typeof t.handleEvent=="function")t=Ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function kv(t){t.g=gd(()=>{t.g=null,t.i&&(t.i=!1,kv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UT extends bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:kv(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(t){bn.call(this),this.h=t,this.g={}}Re(_s,bn);var $p=[];function Cv(t,e,n,r){Array.isArray(n)||(n&&($p[0]=n.toString()),n=$p);for(var i=0;i<n.length;i++){var s=yv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Nv(t){ud(t.g,function(e,n){this.g.hasOwnProperty(n)&&hd(e)},t),t.g={}}_s.prototype.M=function(){_s.X.M.call(this),Nv(this)};_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ml(){this.g=!0}ml.prototype.Aa=function(){this.g=!1};function FT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function bT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zT(t,n)+(r?" "+r:"")})}function VT(t,e){t.info(function(){return"TIMEOUT: "+e})}ml.prototype.info=function(){};function zT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pd(n)}catch{return e}}var vr={},Up=null;function gl(){return Up=Up||new Ie}vr.Pa="serverreachability";function Av(t){Fe.call(this,vr.Pa,t)}Re(Av,Fe);function Ss(t){const e=gl();Ae(e,new Av(e))}vr.STAT_EVENT="statevent";function Dv(t,e){Fe.call(this,vr.STAT_EVENT,t),this.stat=e}Re(Dv,Fe);function He(t){const e=gl();Ae(e,new Dv(e,t))}vr.Qa="timingevent";function Rv(t,e){Fe.call(this,vr.Qa,t),this.size=e}Re(Rv,Fe);function js(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var yl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},xv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function yd(){}yd.prototype.h=null;function Fp(t){return t.h||(t.h=t.i())}function Ov(){}var Hs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vd(){Fe.call(this,"d")}Re(vd,Fe);function wd(){Fe.call(this,"c")}Re(wd,Fe);var Vc;function vl(){}Re(vl,yd);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};Vc=new vl;function qs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new _s(this),this.O=BT,t=Lc?125:void 0,this.T=new pl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Pv}function Pv(){this.i=null,this.g="",this.h=!1}var BT=45e3,zc={},Oa={};R=qs.prototype;R.setTimeout=function(t){this.O=t};function Bc(t,e,n){t.K=1,t.v=El(Xt(e)),t.s=n,t.P=!0,Lv(t,null)}function Lv(t,e){t.F=Date.now(),Ws(t),t.A=Xt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Bv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Pv,t.g=u0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new UT(Ue(t.La,t,t.g),t.N)),Cv(t.S,t.g,"readystatechange",t.ib),e=t.H?mv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ss(),FT(t.j,t.u,t.A,t.m,t.U,t.s)}R.ib=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.La(t)};R.La=function(t){try{if(t==this.g)e:{const c=jt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Lc||this.g&&(this.h.h||this.g.fa()||Bp(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ss(3):Ss(2)),wl(this);var n=this.g.aa();this.Y=n;t:if(Mv(this)){var r=Bp(this.g);t="";var i=r.length,s=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Yi(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,bT(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ra(a)){var u=a;break t}}u=null}if(n=u)Ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jc(this,n);else{this.i=!1,this.o=3,He(12),Yn(this),Yi(this);break e}}this.P?($v(this,c,o),Lc&&this.i&&c==3&&(Cv(this.S,this.T,"tick",this.hb),this.T.start())):(Ur(this.j,this.m,o,null),jc(this,o)),c==4&&Yn(this),this.i&&!this.I&&(c==4?s0(this.l,this):(this.i=!1,Ws(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Yn(this),Yi(this)}}}catch{}finally{}};function Mv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function $v(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jT(t,n),i==Oa){e==4&&(t.o=4,He(14),r=!1),Ur(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zc){t.o=4,He(15),Ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ur(t.j,t.m,i,null),jc(t,i);Mv(t)&&i!=Oa&&i!=zc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cd(e),e.K=!0,He(11))):(Ur(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Yi(t))}R.hb=function(){if(this.g){var t=jt(this.g),e=this.g.fa();this.C<e.length&&(wl(this),$v(this,t,e),this.i&&t!=4&&Ws(this))}};function jT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Oa:(n=Number(e.substring(n,r)),isNaN(n)?zc:(r+=1,r+n>e.length?Oa:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Yn(this)};function Ws(t){t.V=Date.now()+t.O,Uv(t,t.O)}function Uv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=js(Ue(t.gb,t),e)}function wl(t){t.B&&($.clearTimeout(t.B),t.B=null)}R.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VT(this.j,this.A),this.K!=2&&(Ss(),He(17)),Yn(this),this.o=2,Yi(this)):Uv(this,this.V-t)};function Yi(t){t.l.G==0||t.I||s0(t.l,t)}function Yn(t){wl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,md(t.T),Nv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hc(n.h,t))){if(!t.J&&Hc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ma(n),Tl(n);else break e;kd(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=js(Ue(n.cb,n),6e3));if(1>=qv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&Ma(n),!Ra(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ed(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=l0(r,r.H?r.ka:null,r.V),o.J){Wv(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(wl(a),Ws(a)),r.g=o}else r0(r);0<n.i.length&&Il(n)}else u[0]!="stop"&&u[0]!="close"||Xn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xn(n,7):Id(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ss(4)}catch{}}function HT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qT(t),r=HT(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nr){this.h=e!==void 0?e:t.h,Pa(this,t.j),this.s=t.s,this.g=t.g,La(this,t.m),this.l=t.l,e=t.i;var n=new Ts;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bp(this,n),this.o=t.o}else t&&(n=String(t).match(bv))?(this.h=!!e,Pa(this,n[1]||"",!0),this.s=Ui(n[2]||""),this.g=Ui(n[3]||"",!0),La(this,n[4]),this.l=Ui(n[5]||"",!0),bp(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.h=!!e,this.i=new Ts(null,this.h))}nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fi(e,Vp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fi(e,Vp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fi(n,n.charAt(0)=="/"?QT:GT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fi(n,XT)),t.join("")};function Xt(t){return new nr(t)}function Pa(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function La(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bp(t,e,n){e instanceof Ts?(t.i=e,JT(t.i,t.h)):(n||(e=Fi(e,YT)),t.i=new Ts(e,t.h))}function re(t,e,n){t.i.set(e,n)}function El(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vp=/[#\/\?@]/g,GT=/[#\?:]/g,QT=/[#\?]/g,YT=/[#\?@]/g,XT=/#/g;function Ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&WT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Ts.prototype;R.add=function(t,e){Vn(this),this.i=null,t=mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vv(t,e){Vn(t),e=mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zv(t,e){return Vn(t),e=mi(t,e),t.g.has(e)}R.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.oa=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.W=function(t){Vn(this);let e=[];if(typeof t=="string")zv(this,t)&&(e=e.concat(this.g.get(mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Vn(this),this.i=null,t=mi(this,t),zv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Bv(t,e,n){Vv(t,e),0<n.length&&(t.i=null,t.g.set(mi(t,e),ad(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JT(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Vv(this,r),Bv(this,i,n))},t)),t.j=e}var ZT=class{constructor(e,n){this.h=e,this.g=n}};function jv(t){this.l=t||eI,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eI=10;function Hv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qv(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ed(t,e){t.g?t.g.add(e):t.h=e}function Wv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jv.prototype.cancel=function(){if(this.i=Kv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ad(t.i)}function _d(){}_d.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};_d.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function tI(){this.g=new _d}function nI(t,e,n){const r=n||"";try{Fv(t,function(i,s){let o=i;zs(i)&&(o=pd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rI(t,e){const n=new ml;if($.Image){const r=new Image;r.onload=No(Do,n,r,"TestLoadImage: loaded",!0,e),r.onerror=No(Do,n,r,"TestLoadImage: error",!1,e),r.onabort=No(Do,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=No(Do,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Do(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ks(t){this.l=t.ac||null,this.j=t.jb||!1}Re(Ks,yd);Ks.prototype.g=function(){return new _l(this.l,this.j)};Ks.prototype.i=function(t){return function(){return t}}({});function _l(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Re(_l,Ie);var Sd=0;R=_l.prototype;R.open=function(t,e){if(this.readyState!=Sd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Is(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=Sd};R.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Gv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}R.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gs(this):Is(this),this.readyState==3&&Gv(this)}};R.Va=function(t){this.g&&(this.response=this.responseText=t,Gs(this))};R.Ua=function(t){this.g&&(this.response=t,Gs(this))};R.ga=function(){this.g&&Gs(this)};function Gs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Is(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iI=$.JSON.parse;function le(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qv,this.K=this.L=!1}Re(le,Ie);var Qv="",sI=/^https?$/i,oI=["POST","PUT"];R=le.prototype;R.Ka=function(t){this.L=t};R.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vc.g(),this.C=this.u?Fp(this.u):Fp(Vc),this.g.onreadystatechange=Ue(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){zp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=hv(oI,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jv(this),0<this.B&&((this.K=aI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ue(this.qa,this)):this.A=gd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zp(this,s)}};function aI(t){return ni&&IT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.qa=function(){typeof od<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function zp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yv(t),Sl(t)}function Yv(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Sl(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sl(this,!0)),le.X.M.call(this)};R.Ha=function(){this.s||(this.F||this.v||this.l?Xv(this):this.fb())};R.fb=function(){Xv(this)};function Xv(t){if(t.h&&typeof od<"u"&&(!t.C[1]||jt(t)!=4||t.aa()!=2)){if(t.v&&jt(t)==4)gd(t.Ha,0,t);else if(Ae(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(bv)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!sI.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Yv(t)}}finally{Sl(t)}}}}function Sl(t,e){if(t.g){Jv(t);const n=t.g,r=t.C[0]?Da:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}R.aa=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};R.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iI(e)}};function Bp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Ea=function(){return this.m};R.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zv(t){let e="";return ud(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Td(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Zv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e0(t){this.Ca=0,this.i=[],this.j=new ml,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Oi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Oi("baseRetryDelayMs",5e3,t),this.bb=Oi("retryDelaySeedMs",1e4,t),this.$a=Oi("forwardChannelMaxRetries",2,t),this.ta=Oi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new jv(t&&t.concurrentRequestLimit),this.Fa=new tI,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}R=e0.prototype;R.ma=8;R.G=1;function Id(t){if(t0(t),t.G==3){var e=t.U++,n=Xt(t.F);re(n,"SID",t.I),re(n,"RID",e),re(n,"TYPE","terminate"),Qs(t,n),e=new qs(t,t.j,e,void 0),e.K=2,e.v=El(Xt(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=u0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ws(e)}a0(t)}function Tl(t){t.g&&(Cd(t),t.g.cancel(),t.g=null)}function t0(t){Tl(t),t.u&&($.clearTimeout(t.u),t.u=null),Ma(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Il(t){Hv(t.h)||t.m||(t.m=!0,Tv(t.Ja,t),t.C=0)}function lI(t,e){return qv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=js(Ue(t.Ja,t,e),o0(t,t.C)),t.C++,!0)}R.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new qs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=mv(s),gv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=n0(this,i,e),n=Xt(this.F),re(n,"RID",t),re(n,"CVER",22),this.D&&re(n,"X-HTTP-Session-Id",this.D),Qs(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Zv(s)))+"&"+e:this.o&&Td(n,this.o,s)),Ed(this.h,i),this.Ya&&re(n,"TYPE","init"),this.O?(re(n,"$req",e),re(n,"SID","null"),i.Z=!0,Bc(i,n,null)):Bc(i,n,e),this.G=2}}else this.G==3&&(t?jp(this,t):this.i.length==0||Hv(this.h)||jp(this))};function jp(t,e){var n;e?n=e.m:n=t.U++;const r=Xt(t.F);re(r,"SID",t.I),re(r,"RID",n),re(r,"AID",t.T),Qs(t,r),t.o&&t.s&&Td(r,t.o,t.s),n=new qs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=n0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ed(t.h,n),Bc(n,r,e)}function Qs(t,e){t.ia&&ud(t.ia,function(n,r){re(e,r,n)}),t.l&&Fv({},function(n,r){re(e,r,n)})}function n0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ue(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{nI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function r0(t){t.g||t.u||(t.Z=1,Tv(t.Ia,t),t.A=0)}function kd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=js(Ue(t.Ia,t),o0(t,t.A)),t.A++,!0)}R.Ia=function(){if(this.u=null,i0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=js(Ue(this.eb,this),t)}};R.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),Tl(this),i0(this))};function Cd(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function i0(t){t.g=new qs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Xt(t.sa);re(e,"RID","rpc"),re(e,"SID",t.I),re(e,"CI",t.L?"0":"1"),re(e,"AID",t.T),re(e,"TYPE","xmlhttp"),Qs(t,e),t.o&&t.s&&Td(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=El(Xt(e)),n.s=null,n.P=!0,Lv(n,t)}R.cb=function(){this.v!=null&&(this.v=null,Tl(this),kd(this),He(19))};function Ma(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function s0(t,e){var n=null;if(t.g==e){Ma(t),Cd(t),t.g=null;var r=2}else if(Hc(t.h,e))n=e.D,Wv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gl(),Ae(r,new Rv(r,n)),Il(t)}else r0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&lI(t,e)||r==2&&kd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function o0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ue(t.kb,t);n||(n=new nr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Pa(n,"https"),El(n)),rI(n.toString(),r)}else He(2);t.G=0,t.l&&t.l.va(e),a0(t),t0(t)}R.kb=function(t){t?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function a0(t){if(t.G=0,t.la=[],t.l){const e=Kv(t.h);(e.length!=0||t.i.length!=0)&&(Op(t.la,e),Op(t.la,t.i),t.h.i.length=0,ad(t.i),t.i.length=0),t.l.ua()}}function l0(t,e,n){var r=n instanceof nr?Xt(n):new nr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),La(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new nr(null,void 0);r&&Pa(s,r),e&&(s.g=e),i&&La(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&re(r,n,e),re(r,"VER",t.ma),Qs(t,r),r}function u0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new Ks({jb:!0})):new le(t.ra),e.Ka(t.H),e}function c0(){}R=c0.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Ra=function(){};function $a(){if(ni&&!(10<=Number(kT)))throw Error("Environmental error: no available transport.")}$a.prototype.g=function(t,e){return new ot(t,e)};function ot(t,e){Ie.call(this),this.g=new e0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ra(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ra(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}Re(ot,Ie);ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=l0(t,null,t.V),Il(t)};ot.prototype.close=function(){Id(this.g)};ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pd(t),t=n);e.i.push(new ZT(e.ab++,t)),e.G==3&&Il(e)};ot.prototype.M=function(){this.g.l=null,delete this.j,Id(this.g),delete this.g,ot.X.M.call(this)};function h0(t){vd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Re(h0,vd);function d0(){wd.call(this),this.status=1}Re(d0,wd);function gi(t){this.g=t}Re(gi,c0);gi.prototype.xa=function(){Ae(this.g,"a")};gi.prototype.wa=function(t){Ae(this.g,new h0(t))};gi.prototype.va=function(t){Ae(this.g,new d0)};gi.prototype.ua=function(){Ae(this.g,"b")};$a.prototype.createWebChannel=$a.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;yl.NO_ERROR=0;yl.TIMEOUT=8;yl.HTTP_ERROR=6;xv.COMPLETE="complete";Ov.EventType=Hs;Hs.OPEN="a";Hs.CLOSE="b";Hs.ERROR="c";Hs.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var uI=function(){return new $a},cI=function(){return gl()},Du=yl,hI=xv,dI=vr,Hp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fI=Ks,Ro=Ov,pI=le;const qp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new rd("@firebase/firestore");function Wp(){return fr.logLevel}function x(t,...e){if(fr.logLevel<=W.DEBUG){const n=e.map(Nd);fr.debug(`Firestore (${yi}): ${t}`,...n)}}function Jt(t,...e){if(fr.logLevel<=W.ERROR){const n=e.map(Nd);fr.error(`Firestore (${yi}): ${t}`,...n)}}function qc(t,...e){if(fr.logLevel<=W.WARN){const n=e.map(Nd);fr.warn(`Firestore (${yi}): ${t}`,...n)}}function Nd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw Jt(e),new Error(e)}function X(t,e){t||L()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class gI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yI{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new f0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Pe(e)}}class vI{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(X(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wI{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new vI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _I{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.A=n.token,new EI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new ye(0,0))}static max(){return new U(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ks?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends ks{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const TI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ks{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return TI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ee.fromString(e))}static fromName(e){return new P(ee.fromString(e).popFirst(5))}static empty(){return new P(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ee(e.slice()))}}function II(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Pn(i,P.empty(),e)}function kI(t){return new Pn(t.readTime,t.key,-1)}class Pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pn(U.min(),P.empty(),-1)}static max(){return new Pn(U.max(),P.empty(),-1)}}function CI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==NI)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Xs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ad.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Cs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function m0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function RI(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const xI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(X(!!t),typeof t=="string"){let e=0;const n=xI.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function y0(t){const e=t.mapValue.fields.__previous_value__;return g0(e)?y0(e):e}function Ns(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?g0(t)?4:OI(t)?9007199254740991:10:L()}function $t(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ln(r.timestampValue),o=Ln(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ii(r.bytesValue).isEqual(ii(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=de(r.doubleValue),o=de(i.doubleValue);return s===o?Ua(s)===Ua(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Kp(s)!==Kp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!$t(s[a],o[a])))return!1;return!0}(t,e);default:return L()}}function As(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=de(i.integerValue||i.doubleValue),a=de(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gp(t.timestampValue,e.timestampValue);case 4:return Gp(Ns(t),Ns(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ii(i),a=ii(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=K(o[l],a[l]);if(u!==0)return u}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(de(i.latitude),de(s.latitude));return o!==0?o:K(de(i.longitude),de(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=si(o[l],a[l]);if(u)return u}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===xo.mapValue&&s===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(s===xo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=K(a[c],u[c]);if(h!==0)return h;const d=si(o[a[c]],l[u[c]]);if(d!==0)return d}return K(a.length,u.length)}(t.mapValue,e.mapValue);default:throw L()}}function Gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=Ln(t),r=Ln(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function oi(t){return Wc(t)}function Wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ln(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Wc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Wc(r.fields[a])}`;return s+"}"}(t.mapValue):L();var e,n}function Qp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kc(t){return!!t&&"integerValue"in t}function Dd(t){return!!t&&"arrayValue"in t}function Yp(t){return!!t&&"nullValue"in t}function Xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ko(t){return!!t&&"mapValue"in t}function Xi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.position=e,this.inclusive=n}}function Jp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=si(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{}class pe extends v0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new UI(e,r):n==="in"?new FI(e,r):n==="not-in"?new bI(e,r):n==="array-contains-any"?new VI(e,r):new pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MI(e,r):new $I(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ct extends v0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ct(e,n)}matches(e){return w0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function w0(t){return t.op==="and"}function E0(t){return PI(t)&&w0(t)}function PI(t){for(const e of t.filters)if(e instanceof Ct)return!1;return!0}function Gc(t){if(t instanceof pe)return t.field.canonicalString()+t.op.toString()+oi(t.value);if(E0(t))return t.filters.map(e=>Gc(e)).join(",");{const e=t.filters.map(n=>Gc(n)).join(",");return`${t.op}(${e})`}}function _0(t,e){return t instanceof pe?function(n,r){return r instanceof pe&&n.op===r.op&&n.field.isEqual(r.field)&&$t(n.value,r.value)}(t,e):t instanceof Ct?function(n,r){return r instanceof Ct&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&_0(s,r.filters[o]),!0):!1}(t,e):void L()}function S0(t){return t instanceof pe?function(e){return`${e.field.canonicalString()} ${e.op} ${oi(e.value)}`}(t):t instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(S0).join(" ,")+"}"}(t):"Filter"}class LI extends pe{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class MI extends pe{constructor(e,n){super(e,"in",n),this.keys=T0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $I extends pe{constructor(e,n){super(e,"not-in",n),this.keys=T0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function T0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class UI extends pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dd(n)&&As(n.arrayValue,this.value)}}class FI extends pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class bI extends pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class VI extends pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>As(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function zI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oo(this.root,e,this.comparator,!0)}}class Oo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ce.EMPTY,this.right=s??Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new em(this.data.getIterator())}getIteratorFrom(e){return new em(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class em{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new rt([])}unionWith(e){let n=new ve($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ko(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qe(Xi(this.value))}}function I0(t){const e=[];return wr(t.fields,(n,r)=>{const i=new $e([n]);if(Ko(r)){const s=I0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,U.min(),U.min(),U.min(),Qe.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,U.min(),U.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,U.min(),U.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function tm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BI(t,e,n,r,i,s,o)}function Rd(t){const e=F(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oi(r)).join(",")),e.ft=n}return e.ft}function xd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zp(t.startAt,e.startAt)&&Zp(t.endAt,e.endAt)}function Qc(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function jI(t,e,n,r,i,s,o,a){return new Js(t,e,n,r,i,s,o,a)}function Od(t){return new Js(t)}function nm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function k0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function C0(t){return t.collectionGroup!==null}function Hr(t){const e=F(t);if(e.dt===null){e.dt=[];const n=Pd(e),r=k0(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ji(n)),e.dt.push(new Ji($e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ji($e.keyField(),s))}}}return e.dt}function Zt(t){const e=F(t);if(!e._t)if(e.limitType==="F")e._t=tm(e.path,e.collectionGroup,Hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Hr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ji(s.field,o))}const r=e.endAt?new Fa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Fa(e.startAt.position,e.startAt.inclusive):null;e._t=tm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Yc(t,e){e.getFirstInequalityField(),Pd(t);const n=t.filters.concat([e]);return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cl(t,e){return xd(Zt(t),Zt(e))&&t.limitType===e.limitType}function N0(t){return`${Rd(Zt(t))}|lt:${t.limitType}`}function Jc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>S0(r)).join(", ")}]`),kl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oi(r)).join(",")),`Target(${n})`}(Zt(t))}; limitType=${t.limitType})`}function Ld(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Hr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Hr(n),r)||n.endAt&&!function(i,s,o){const a=Jp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Hr(n),r))}(t,e)}function HI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function A0(t){return(e,n)=>{let r=!1;for(const i of Hr(t)){const s=qI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qI(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?si(a,l):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function R0(t){return{integerValue:""+t}}function WI(t,e){return RI(e)?R0(e):D0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this._=void 0}}function KI(t,e,n){return t instanceof ba?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ds?O0(t,e):t instanceof Rs?P0(t,e):function(r,i){const s=x0(r,i),o=rm(s)+rm(r.gt);return Kc(s)&&Kc(r.gt)?R0(o):D0(r.yt,o)}(t,e)}function GI(t,e,n){return t instanceof Ds?O0(t,e):t instanceof Rs?P0(t,e):n}function x0(t,e){return t instanceof Va?Kc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ba extends Nl{}class Ds extends Nl{constructor(e){super(),this.elements=e}}function O0(t,e){const n=L0(e);for(const r of t.elements)n.some(i=>$t(i,r))||n.push(r);return{arrayValue:{values:n}}}class Rs extends Nl{constructor(e){super(),this.elements=e}}function P0(t,e){let n=L0(e);for(const r of t.elements)n=n.filter(i=>!$t(i,r));return{arrayValue:{values:n}}}class Va extends Nl{constructor(e,n){super(),this.yt=e,this.gt=n}}function rm(t){return de(t.integerValue||t.doubleValue)}function L0(t){return Dd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ds&&r instanceof Ds||n instanceof Rs&&r instanceof Rs?ri(n.elements,r.elements,$t):n instanceof Va&&r instanceof Va?$t(n.gt,r.gt):n instanceof ba&&r instanceof ba}(t.transform,e.transform)}class YI{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Al{}function M0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Md(t.key,It.none()):new Zs(t.key,t.data,It.none());{const n=t.data,r=Qe.empty();let i=new ve($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zn(t.key,r,new rt(i.toArray()),It.none())}}function XI(t,e,n){t instanceof Zs?function(r,i,s){const o=r.value.clone(),a=sm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(r,i,s){if(!Go(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll($0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,r){return t instanceof Zs?function(i,s,o,a){if(!Go(i.precondition,s))return o;const l=i.value.clone(),u=om(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof zn?function(i,s,o,a){if(!Go(i.precondition,s))return o;const l=om(i.fieldTransforms,a,s),u=s.data;return u.setAll($0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Go(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function JI(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=x0(r.transform,i||null);s!=null&&(n===null&&(n=Qe.empty()),n.set(r.field,s))}return n||null}function im(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ri(n,r,(i,s)=>QI(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zs extends Al{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends Al{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sm(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,GI(o,a,n[i]))}return r}function om(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KI(s,o,e))}return r}class Md extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZI extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,H;function tk(t){switch(t){default:return L();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function U0(t){if(t===void 0)return Jt("GRPC error has no .code"),E.UNKNOWN;switch(t){case he.OK:return E.OK;case he.CANCELLED:return E.CANCELLED;case he.UNKNOWN:return E.UNKNOWN;case he.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case he.INTERNAL:return E.INTERNAL;case he.UNAVAILABLE:return E.UNAVAILABLE;case he.UNAUTHENTICATED:return E.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case he.NOT_FOUND:return E.NOT_FOUND;case he.ALREADY_EXISTS:return E.ALREADY_EXISTS;case he.PERMISSION_DENIED:return E.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case he.ABORTED:return E.ABORTED;case he.OUT_OF_RANGE:return E.OUT_OF_RANGE;case he.UNIMPLEMENTED:return E.UNIMPLEMENTED;case he.DATA_LOSS:return E.DATA_LOSS;default:return L()}}(H=he||(he={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return m0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new we(P.comparator);function en(){return nk}const F0=new we(P.comparator);function bi(...t){let e=F0;for(const n of t)e=e.insert(n.key,n);return e}function b0(t){let e=F0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jn(){return es()}function V0(){return es()}function es(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const rk=new we(P.comparator),ik=new ve(P.comparator);function B(...t){let e=ik;for(const n of t)e=e.add(n);return e}const sk=new ve(K);function z0(){return sk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dl(U.min(),i,z0(),en(),B())}}class eo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class B0{constructor(e,n){this.targetId=e,this.Et=n}}class j0{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class am{constructor(){this.At=0,this.Rt=um(),this.bt=Be.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=B(),n=B(),r=B();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new eo(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=um()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ok{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=en(),this.qt=lm(),this.Ut=new ve(K)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Qc(s))if(r===0){const o=new P(s.path);this.Qt(n,o,Me.newNoDocument(o,U.min()))}else X(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Qc(a.target)){const l=new P(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Me.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=B();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Dl(e,n,this.Ut,this.Lt,r);return this.Lt=en(),this.qt=lm(),this.Ut=new ve(K),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new am,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new ve(K),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new am),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function lm(){return new we(P.comparator)}function um(){return new we(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uk=(()=>({and:"AND",or:"OR"}))();class ck{constructor(e,n){this.databaseId=e,this.wt=n}}function za(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H0(t,e){return t.wt?e.toBase64():e.toUint8Array()}function hk(t,e){return za(t,e.toTimestamp())}function Pt(t){return X(!!t),U.fromTimestamp(function(e){const n=Ln(e);return new ye(n.seconds,n.nanos)}(t))}function $d(t,e){return function(n){return new ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function q0(t){const e=ee.fromString(t);return X(Q0(e)),e}function Zc(t,e){return $d(t.databaseId,e.path)}function Ru(t,e){const n=q0(e);if(n.get(1)!==t.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(W0(n))}function eh(t,e){return $d(t.databaseId,e)}function dk(t){const e=q0(t);return e.length===4?ee.emptyPath():W0(e)}function th(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W0(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cm(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function fk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(X(u===void 0||typeof u=="string"),Be.fromBase64String(u||"")):(X(u===void 0||u instanceof Uint8Array),Be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:U0(l.code);return new A(u,l.message||"")}(o);n=new j0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ru(t,r.document.name),s=Pt(r.document.updateTime),o=r.document.createTime?Pt(r.document.createTime):U.min(),a=new Qe({mapValue:{fields:r.document.fields}}),l=Me.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Qo(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ru(t,r.document),s=r.readTime?Pt(r.readTime):U.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Qo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ru(t,r.document),s=r.removedTargetIds||[];n=new Qo([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new ek(i),o=r.targetId;n=new B0(o,s)}}return n}function pk(t,e){let n;if(e instanceof Zs)n={update:cm(t,e.key,e.value)};else if(e instanceof Md)n={delete:Zc(t,e.key)};else if(e instanceof zn)n={update:cm(t,e.key,e.data),updateMask:Tk(e.fieldMask)};else{if(!(e instanceof ZI))return L();n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ba)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ds)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Rs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Va)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:hk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L()}(t,e.precondition)),n}function mk(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Pt(r.updateTime):Pt(i);return s.isEqual(U.min())&&(s=Pt(i)),new YI(s,r.transformResults||[])}(n,e))):[]}function gk(t,e){return{documents:[eh(t,e.path)]}}function yk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=eh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return G0(Ct.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Tr(c.field),direction:Ek(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||kl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vk(t){let e=dk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=K0(c);return h instanceof Ct&&E0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ji(Ir(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,kl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Fa(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Fa(d,h)}(n.endAt)),jI(e,i,o,s,a,"F",l,u)}function wk(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function K0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ir(e.unaryFilter.field);return pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ir(e.unaryFilter.field);return pe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ir(e.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ir(e.unaryFilter.field);return pe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(e){return pe.create(Ir(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(n=>K0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(t):L()}function Ek(t){return ak[t]}function _k(t){return lk[t]}function Sk(t){return uk[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Ir(t){return $e.fromServerFormat(t.fieldPath)}function G0(t){return t instanceof pe?function(e){if(e.op==="=="){if(Xp(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NAN"}};if(Yp(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xp(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NAN"}};if(Yp(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(e.field),op:_k(e.op),value:e.value}}}(t):t instanceof Ct?function(e){const n=e.getFilters().map(r=>G0(r));return n.length===1?n[0]:{compositeFilter:{op:Sk(e.op),filters:n}}}(t):L()}function Tk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XI(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=M0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>im(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>im(n,r))}}class Ud{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=rk;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ud(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,i,s=U.min(),o=U.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.ie=e}}function Nk(t){const e=vk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.Je=new Dk}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Pn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Pn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Dk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ai(0)}static vn(){return new ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zi(r.mutation,i,rt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,n,r=B()){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,B()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=en();const o=es(),a=es();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof zn)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Zi(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new xk(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=es();let i=new we((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||rt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||B()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=V0();c.forEach(d=>{if(!s.has(d)){const g=M0(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Jn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,B())).next(c=>({batchId:a,changes:b0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=bi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=bi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new Js(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Me.newInvalidDocument(u)))});let o=bi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Zi(u.mutation,l,rt.empty(),ye.now()),Ld(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Pt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Nk(r.bundledQuery),readTime:Pt(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.overlays=new we(P.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Jn(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Jn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Jn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kk(n,r));let s=this.es.get(n);s===void 0&&(s=B(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.ns=new ve(_e.ss),this.rs=new ve(_e.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new _e(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new _e(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new P(new ee([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new P(new ee([])),r=new _e(n,e),i=new _e(n,e+1);let s=B();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return P.comparator(e.key,n.key)||K(e._s,n._s)}static os(e,n){return K(e._s,n._s)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ve(_e.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ik(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(K);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new _e(new P(s),0);let a=new ve(K);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new _e(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.Es=e,this.docs=new we(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=en();const s=new P(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||CI(kI(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){L()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Uk(this)}getSize(e){return S.resolve(this.size)}}class Uk extends Rk{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.persistence=e,this.Rs=new vi(n=>Rd(n),xd),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Fd,this.targetCount=0,this.vs=ai.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ai(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ad(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Fk(this),this.indexManager=new Ak,this.remoteDocumentCache=function(r){return new $k(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new Ck(n),this.Ns=new Pk(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Lk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Mk(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new Vk(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Vk extends AI{constructor(e){super(),this.currentSequenceNumber=e}}class bd{constructor(e){this.persistence=e,this.Fs=new Fd,this.$s=null}static Bs(e){return new bd(e)}get Ls(){if(this.$s)return this.$s;throw L()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=P.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=B(),i=B();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(nm(n))return S.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xc(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=B(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Xc(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return nm(n)||i.isEqual(U.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Wp()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jc(n)),this.Bi(e,o,n,II(i,-1)))})}Fi(e,n){let r=new ve(A0(e));return n.forEach((i,s)=>{Ld(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Wp()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Jc(n)),this.Ni.getDocumentsMatchingQuery(e,n,Pn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new we(K),this.Ui=new vi(s=>Rd(s),xd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ok(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function jk(t,e,n,r){return new Bk(t,e,n,r)}async function Y0(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=B();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Hk(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);X(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=B();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function X0(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function qk(t,e){const n=F(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Be.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=en(),u=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Wk(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(U.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function Wk(t,e,n){let r=B(),i=B();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=en();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function Kk(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gk(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new ir(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function nh(t,e,n){const r=F(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xs(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function hm(t,e,n){const r=F(t);let i=U.min(),s=B();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),h=c.Ui.get(u);return h!==void 0?S.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,Zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:B())).next(a=>(Qk(r,HI(e),a),{documents:a,Hi:s})))}function Qk(t,e,n){let r=t.Ki.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class dm{constructor(){this.activeTargetIds=z0()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yk{constructor(){this.Lr=new dm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(x("RestConnection","Received: ",l),l),l=>{throw qc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=Jk[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new pI;a.setWithCredentials(!0),a.listenOnce(hI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Du.NO_ERROR:const u=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Du.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const c=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(v)>=0?v:E.UNKNOWN}(d.status);o(new A(g,d.message))}else o(new A(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(E.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uI(),o=cI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fI({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");x("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new Zk({Hr:y=>{h?x("Connection","Not sending because WebChannel is closed:",y):(c||(x("Connection","Opening WebChannel transport."),u.open(),c=!0),x("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,D)=>{y.listen(v,p=>{try{D(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,Ro.EventType.OPEN,()=>{h||x("Connection","WebChannel transport opened.")}),g(u,Ro.EventType.CLOSE,()=>{h||(h=!0,x("Connection","WebChannel transport closed"),d.io())}),g(u,Ro.EventType.ERROR,y=>{h||(h=!0,qc("Connection","WebChannel transport errored:",y),d.io(new A(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ro.EventType.MESSAGE,y=>{var v;if(!h){const D=y.data[0];X(!!D);const p=D,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){x("Connection","WebChannel received error:",f);const m=f.status;let w=function(C){const N=he[C];if(N!==void 0)return U0(N)}(m),T=f.message;w===void 0&&(w=E.INTERNAL,T="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new A(w,T)),u.close()}else x("Connection","WebChannel received:",D),d.ro(D)}}),g(o,dI.STAT_EVENT,y=>{y.stat===Hp.PROXY?x("Connection","Detected buffering proxy"):y.stat===Hp.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function xu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){return new ck(t,!0)}class J0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new J0(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tC extends Z0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=fk(this.yt,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?Pt(s.readTime):U.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=th(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Qc(a)?{documents:gk(i,a)}:{query:yk(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=H0(i,s.resumeToken):s.snapshotVersion.compareTo(U.min())>0&&(o.readTime=za(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=wk(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=th(this.yt),n.removeTarget=e,this.Bo(n)}}class nC extends Z0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=mk(e.writeResults,e.commitTime),r=Pt(e.commitTime);return this.listener.Zo(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=th(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pk(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(E.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class iC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Jt(n),this.ou=!1):x("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Er(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l._u.add(4),await to(l),l.gu.set("Unknown"),l._u.delete(4),await xl(l)}(this))})}),this.gu=new iC(r,i)}}async function xl(t){if(Er(t))for(const e of t.wu)await e(!0)}async function to(t){for(const e of t.wu)await e(!1)}function ew(t,e){const n=F(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),jd(n)?Bd(n):wi(n).ko()&&zd(n,e))}function tw(t,e){const n=F(t),r=wi(n);n.du.delete(e),r.ko()&&nw(n,e),n.du.size===0&&(r.ko()?r.Fo():Er(n)&&n.gu.set("Unknown"))}function zd(t,e){t.yu.Ot(e.targetId),wi(t).zo(e)}function nw(t,e){t.yu.Ot(e),wi(t).Ho(e)}function Bd(t){t.yu=new ok({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),wi(t).start(),t.gu.uu()}function jd(t){return Er(t)&&!wi(t).No()&&t.du.size>0}function Er(t){return F(t)._u.size===0}function rw(t){t.yu=void 0}async function oC(t){t.du.forEach((e,n)=>{zd(t,e)})}async function aC(t,e){rw(t),jd(t)?(t.gu.hu(e),Bd(t)):t.gu.set("Unknown")}async function lC(t,e,n){if(t.gu.set("Online"),e instanceof j0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ba(t,r)}else if(e instanceof Qo?t.yu.Kt(e):e instanceof B0?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(U.min()))try{const r=await X0(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),nw(i,a);const u=new ir(l.target,a,1,l.sequenceNumber);zd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Ba(t,r)}}async function Ba(t,e,n){if(!Xs(e))throw e;t._u.add(1),await to(t),t.gu.set("Offline"),n||(n=()=>X0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await xl(t)})}function iw(t,e){return e().catch(n=>Ba(t,n,e))}async function Ol(t){const e=F(t),n=Mn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;uC(e);)try{const i=await Kk(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,cC(e,i)}catch(i){await Ba(e,i)}sw(e)&&ow(e)}function uC(t){return Er(t)&&t.fu.length<10}function cC(t,e){t.fu.push(e);const n=Mn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function sw(t){return Er(t)&&!Mn(t).No()&&t.fu.length>0}function ow(t){Mn(t).start()}async function hC(t){Mn(t).eu()}async function dC(t){const e=Mn(t);for(const n of t.fu)e.Xo(n.mutations)}async function fC(t,e,n){const r=t.fu.shift(),i=Ud.from(r,e,n);await iw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ol(t)}async function pC(t,e){e&&Mn(t).Yo&&await async function(n,r){if(i=r.code,tk(i)&&i!==E.ABORTED){const s=n.fu.shift();Mn(n).Mo(),await iw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ol(n)}var i}(t,e),sw(t)&&ow(t)}async function pm(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Er(n);n._u.add(3),await to(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await xl(n)}async function mC(t,e){const n=F(t);e?(n._u.delete(2),await xl(n)):e||(n._u.add(2),await to(n),n.gu.set("Unknown"))}function wi(t){return t.pu||(t.pu=function(e,n,r){const i=F(e);return i.su(),new tC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:oC.bind(null,t),Zr:aC.bind(null,t),Wo:lC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),jd(t)?Bd(t):t.gu.set("Unknown")):(await t.pu.stop(),rw(t))})),t.pu}function Mn(t){return t.Iu||(t.Iu=function(e,n,r){const i=F(e);return i.su(),new nC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:hC.bind(null,t),Zr:pC.bind(null,t),tu:dC.bind(null,t),Zo:fC.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ol(t)):(await t.Iu.stop(),t.fu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Hd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qd(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),Xs(t))return new A(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.Tu=new we(P.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):L():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class li{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new li(e,n,qr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.Au=void 0,this.listeners=[]}}class yC{constructor(){this.queries=new vi(e=>N0(e),Cl),this.onlineState="Unknown",this.Ru=new Set}}async function vC(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gC),i)try{s.Au=await n.onListen(r)}catch(o){const a=qd(o,`Initialization of query '${Jc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Wd(n)}async function wC(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EC(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Wd(n)}function _C(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Wd(t){t.Ru.forEach(e=>{e.next()})}class SC{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.key=e}}class lw{constructor(e){this.key=e}}class TC{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=B(),this.mutatedKeys=B(),this.Gu=A0(e),this.Qu=new qr(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new mm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Ld(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),D=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),D=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),D=!0):d&&!g&&(r.track({type:1,doc:d}),D=!0,(l||u)&&(a=!0)),D&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new li(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new mm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=B(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new lw(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new aw(r))}),n}tc(e){this.qu=e.Hi,this.Ku=B();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return li.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class IC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kC{constructor(e){this.key=e,this.nc=!1}}class CC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new vi(a=>N0(a),Cl),this.rc=new Map,this.oc=new Set,this.uc=new we(P.comparator),this.cc=new Map,this.ac=new Fd,this.hc={},this.lc=new Map,this.fc=ai.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function NC(t,e){const n=UC(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await Gk(n.localStore,Zt(e));n.isPrimaryClient&&ew(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AC(n,e,r,a==="current",o.resumeToken)}return i}async function AC(t,e,n,r,i){t._c=(h,d,g)=>async function(y,v,D,p){let f=v.view.Wu(D);f.$i&&(f=await hm(y.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return ym(y,v.targetId,w.Xu),w.snapshot}(t,h,d,g);const s=await hm(t.localStore,e,!0),o=new TC(e,s.Hi),a=o.Wu(s.documents),l=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ym(t,n,u.Xu);const c=new IC(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function DC(t,e){const n=F(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Cl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await nh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),tw(n.remoteStore,r.targetId),rh(n,r.targetId)}).catch(Ys)):(rh(n,r.targetId),await nh(n.localStore,r.targetId,!0))}async function RC(t,e,n){const r=FC(t);try{const i=await function(s,o){const a=F(s),l=ye.now(),u=o.reduce((d,g)=>d.add(g.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=en(),y=B();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach((D,p)=>{p.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const D=[];for(const p of o){const f=JI(p,c.get(p.key).overlayedDocument);f!=null&&D.push(new zn(p.key,f,I0(f.value.mapValue),It.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,D,o)}).next(v=>{h=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,D)})}).then(()=>({batchId:h.batchId,changes:b0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new we(K)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await no(r,i.changes),await Ol(r.remoteStore)}catch(i){const s=qd(i,"Failed to persist write");n.reject(s)}}async function uw(t,e){const n=F(t);try{const r=await qk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?X(o.nc):i.removedDocuments.size>0&&(X(o.nc),o.nc=!1))}),await no(n,r,e)}catch(r){await Ys(r)}}function gm(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Wd(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xC(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new we(P.comparator);o=o.insert(s,Me.newNoDocument(s,U.min()));const a=B().add(s),l=new Dl(U.min(),new Map,new ve(K),o,a);await uw(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Kd(r)}else await nh(r.localStore,e,!1).then(()=>rh(r,e,n)).catch(Ys)}async function OC(t,e){const n=F(t),r=e.batch.batchId;try{const i=await Hk(n.localStore,e);hw(n,r,null),cw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,i)}catch(i){await Ys(i)}}async function PC(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(X(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);hw(r,e,n),cw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,i)}catch(i){await Ys(i)}}function cw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function hw(t,e,n){const r=F(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||dw(t,r)})}function dw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(tw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Kd(t))}function ym(t,e,n){for(const r of n)r instanceof aw?(t.ac.addReference(r.key,e),LC(t,r)):r instanceof lw?(x("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||dw(t,r.key)):L()}function LC(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.oc.add(r),Kd(t))}function Kd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new P(ee.fromString(e)),r=t.fc.next();t.cc.set(r,new kC(n)),t.uc=t.uc.insert(n,r),ew(t.remoteStore,new ir(Zt(Od(n.path)),r,2,Ad.at))}}async function no(t,e,n){const r=F(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Vd.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Xs(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,s))}async function MC(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await Y0(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.ji)}}function $C(t,e){const n=F(t),r=n.cc.get(e);if(r&&r.nc)return B().add(r.key);{let i=B();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function UC(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$C.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xC.bind(null,e),e.sc.Wo=EC.bind(null,e.eventManager),e.sc.wc=_C.bind(null,e.eventManager),e}function FC(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PC.bind(null,e),e}class bC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Rl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return jk(this.persistence,new zk,e.initialUser,this.yt)}yc(e){return new bk(bd.Bs,this.yt)}gc(e){return new Yk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MC.bind(null,this.syncEngine),await mC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yC}createDatastore(e){const n=Rl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new eC(i));var i;return function(s,o,a,l){return new rC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>gm(this.syncEngine,a,0),o=fm.C()?new fm:new Xk,new sC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new CC(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);x("RemoteStore","RemoteStore shutting down."),n._u.add(5),await to(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e,n){if(!n)throw new A(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zC(t,e,n,r){if(e===!0&&r===!0)throw new A(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vm(t){if(!P.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wm(t){if(P.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pl(t);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Map;class _m{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _m({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _m(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mI;switch(n.type){case"gapi":const r=n.client;return new wI(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Em.get(e);n&&(x("ComponentProvider","Removing Datastore"),Em.delete(e),n.terminate())}(this),Promise.resolve()}}function BC(t,e,n,r={}){var i;const s=(t=Dn(t,Ll))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&qc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Pe.MOCK_USER;else{o=W_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pe(l)}t._authCredentials=new gI(new f0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class Ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class Rn extends Ei{constructor(e,n,r){super(e,n,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new P(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Sm(t,e,...n){if(t=ze(t),fw("collection","path",e),t instanceof Ll){const r=ee.fromString(e,...n);return wm(r),new Rn(t,null,r)}{if(!(t instanceof et||t instanceof Rn))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return wm(r),new Rn(t.firestore,null,r)}}function ih(t,e,...n){if(t=ze(t),arguments.length===1&&(e=p0.R()),fw("doc","path",e),t instanceof Ll){const r=ee.fromString(e,...n);return vm(r),new et(t,null,new P(r))}{if(!(t instanceof et||t instanceof Rn))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return vm(r),new et(t.firestore,t instanceof Rn?t.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=p0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qC(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Y0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function WC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KC(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>pm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>pm(e.remoteStore,s)),t.onlineComponents=e}async function KC(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await qC(t,new bC)),t.offlineComponents}async function pw(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await WC(t,new VC)),t.onlineComponents}function GC(t){return pw(t).then(e=>e.syncEngine)}async function Tm(t){const e=await pw(t),n=e.eventManager;return n.onListen=NC.bind(null,e.syncEngine),n.onUnlisten=DC.bind(null,e.syncEngine),n}class QC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new J0(this,"async_queue_retry"),this.Wc=()=>{const n=xu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=xu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new rr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Xs(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Jt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Hd.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&L()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Im(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ui extends Ll{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new QC,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gw(this),this._firestoreClient.terminate()}}function YC(t,e){const n=typeof t=="object"?t:lv(),r=typeof t=="string"?t:e||"(default)",i=sd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=j_("firestore");s&&BC(i,...s)}return i}function mw(t){return t._firestoreClient||gw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new DI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new HC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ci(Be.fromBase64String(e))}catch(n){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ci(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^__.*__$/;class JC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zs(e,this.data,n,this.fieldTransforms)}}class yw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Yd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ja(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(vw(this.sa)&&XC.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ZC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Rl(e)}da(e,n,r,i=!1){return new Yd({sa:e,methodName:n,fa:r,path:$e.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Xd(t){const e=t._freezeSettings(),n=Rl(t._databaseId);return new ZC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eN(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Jd("Data must be an object, but it was:",o,r);const a=ww(r,o);let l,u;if(s.merge)l=new rt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=sh(e,h,n);if(!o.contains(d))throw new A(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_w(c,d)||c.push(d)}l=new rt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new JC(new Qe(a),l,u)}class $l extends Gd{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $l}}function tN(t,e,n,r){const i=t.da(1,e,n);Jd("Data must be an object, but it was:",i,r);const s=[],o=Qe.empty();wr(r,(l,u)=>{const c=Zd(e,l,n);u=ze(u);const h=i.ca(c);if(u instanceof $l)s.push(c);else{const d=ro(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new rt(s);return new yw(o,a,i.fieldTransforms)}function nN(t,e,n,r,i,s){const o=t.da(1,e,n),a=[sh(e,r,n)],l=[i];if(s.length%2!=0)throw new A(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(sh(e,s[d])),l.push(s[d+1]);const u=[],c=Qe.empty();for(let d=a.length-1;d>=0;--d)if(!_w(u,a[d])){const g=a[d];let y=l[d];y=ze(y);const v=o.ca(g);if(y instanceof $l)u.push(g);else{const D=ro(y,v);D!=null&&(u.push(g),c.set(g,D))}}const h=new rt(u);return new yw(c,h,o.fieldTransforms)}function rN(t,e,n,r=!1){return ro(n,t.da(r?4:3,e))}function ro(t,e){if(Ew(t=ze(t)))return Jd("Unsupported field value:",e,t),ww(t,e);if(t instanceof Gd)return function(n,r){if(!vw(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ro(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WI(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:za(r.yt,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:za(r.yt,i)}}if(n instanceof Qd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ci)return{bytesValue:H0(r.yt,n._byteString)};if(n instanceof et){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$d(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Pl(n)}`)}(t,e)}function ww(t,e){const n={};return m0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,i)=>{const s=ro(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ew(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Qd||t instanceof ci||t instanceof et||t instanceof Gd)}function Jd(t,e,n){if(!Ew(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Pl(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function sh(t,e,n){if((e=ze(e))instanceof Ml)return e._internalPath;if(typeof e=="string")return Zd(t,e);throw ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const iN=new RegExp("[~\\*/\\[\\]]");function Zd(t,e,n){if(e.search(iN)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ml(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ja(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(E.INVALID_ARGUMENT,a+t+l)}function _w(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sN extends Sw{data(){return super.data()}}function Tw(t,e){return typeof e=="string"?Zd(t,e):e instanceof Ml?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ef{}class aN extends ef{}function lN(t,e,...n){let r=[];e instanceof ef&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof nf).length,o=i.filter(a=>a instanceof tf).length;if(s>1||s>0&&o>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class tf extends aN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tf(e,n,r)}_apply(e){const n=this._parse(e);return Iw(e._query,n),new Ei(e.firestore,e.converter,Yc(e._query,n))}_parse(e){const n=Xd(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cm(c,u);const d=[];for(const g of c)d.push(km(a,i,g));h={arrayValue:{values:d}}}else h=km(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cm(c,u),h=rN(o,s,c,u==="in"||u==="not-in");return pe.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class nf extends ef{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ct.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Iw(s,a),s=Yc(s,a)}(e._query,n),new Ei(e.firestore,e.converter,Yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function km(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C0(e)&&n.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!P.isDocumentKey(r))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qp(t,new P(r))}if(n instanceof et)return Qp(t,n._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pl(n)}.`)}function Cm(t,e){if(!Array.isArray(t)||t.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new A(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Iw(t,e){if(e.isInequality()){const r=Pd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=k0(t);s!==null&&uN(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function uN(t,e,n){if(!n.isEqual(e))throw new A(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class cN{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){const r={};return wr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qd(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=y0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);X(Q0(r));const i=new Cs(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||Jt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kw extends Sw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yo extends kw{data(e={}){return super.data(e)}}class dN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yo(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Yo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Yo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:fN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Cw extends cN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ci(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function pN(t,e,n,...r){t=Dn(t,et);const i=Dn(t.firestore,ui),s=Xd(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof Ml?nN(s,"updateDoc",t._key,e,n,r):tN(s,"updateDoc",t._key,e),rf(i,[o.toMutation(t._key,It.exists(!0))])}function mN(t){return rf(Dn(t.firestore,ui),[new Md(t._key,It.none())])}function gN(t,e){const n=Dn(t.firestore,ui),r=ih(t),i=hN(t.converter,e);return rf(n,[eN(Xd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function yN(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Im(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Im(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof et)u=Dn(t.firestore,ui),c=Od(t._key.path),l={next:h=>{e[o]&&e[o](vN(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Dn(t,Ei);u=Dn(h.firestore,ui),c=h._query;const d=new Cw(u);l={next:g=>{e[o]&&e[o](new dN(u,d,h,g))},error:e[o+1],complete:e[o+2]},oN(t._query)}return function(h,d,g,y){const v=new jC(y),D=new SC(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>vC(await Tm(h),D)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>wC(await Tm(h),D))}}(mw(u),c,a,l)}function rf(t,e){return function(n,r){const i=new rr;return n.asyncQueue.enqueueAndForget(async()=>RC(await GC(n),r,i)),i.promise}(mw(t),e)}function vN(t,e,n){const r=n.docs.get(e._key),i=new Cw(t);return new kw(t,i,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){yi=n})(Vs),ti(new hr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ui(new yI(n.getProvider("auth-internal")),new _I(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),An(qp,"3.8.1",t),An(qp,"3.8.1","esm2017")})();const wN={apiKey:"AIzaSyA9l_pDyXdKxwpS3YDheeOxeHv7yaM3vlM",authDomain:"to-do-app-ibi.firebaseapp.com",projectId:"to-do-app-ibi",storageBucket:"to-do-app-ibi.appspot.com",messagingSenderId:"1040169712931",appId:"1:1040169712931:web:f979f69b0fe586d525a096",measurementId:"G-MYBN18Y3KM"},EN=av(wN),Po=YC(EN),Sr={container:"bg-slate-100 max-w-[400px] w-full m-auto rounded-md shadow-xl",heading:"text-2xl font-bold text-center text-gray-800 mt-2 mb-2",form:"flex justify-between mb-2 mt-2 ml-4 mr-4",input:"border p-2 w-full text-sm rounded-md mt-4",button:"border p-2 ml-2 bg-black text-slate-100 rounded-md mt-4",count:"text-center p-2 text-xs"};function _N(){const[t,e]=_t.useState([]),[n,r]=_t.useState(""),i=async a=>{if(a.preventDefault(a),n===""){alert("Please enter a valid task");return}await gN(Sm(Po,"todos"),{text:n,completed:!1}),r("")};_t.useEffect(()=>{const a=lN(Sm(Po,"todos")),l=yN(a,u=>{const c=[];u.forEach(h=>{c.push({...h.data(),id:h.id})}),e(c)});return()=>l()},[]);const s=async a=>{await pN(ih(Po,"todos",a.id),{completed:!a.completed})},o=async a=>{await mN(ih(Po,"todos",a))};return G("div",{className:Sr.bg,children:ht("div",{className:Sr.container,children:[ht("form",{onSubmit:i,className:Sr.form,children:[G("input",{value:n,onChange:a=>r(a.target.value),className:Sr.input,type:"text",placeholder:"Add Todo"}),G("button",{className:Sr.button,children:G(M_,{size:20})})]}),G("ul",{children:t.map((a,l)=>G($_,{todo:a,toggleComplete:s,deleteTodo:o},l))}),t.length<1?null:G("p",{className:Sr.count,children:`You have ${t.length} todos`})]})})}const SN={container:"flex items-center justify-between flex-wrap bg-slate-100 p-2 rounded-md shadow-xl"};function TN(){return G("div",{children:ht("nav",{className:SN.container,children:[ht("div",{class:"flex items-center flex-shrink-0 text-black mr-6",children:[G("p",{class:"font-semibold text-xl mr-2 ml-1",children:"📓"}),G("span",{class:"font-semibold text-xl tracking-tight",children:"Task Manager"})]}),G("div",{class:"block lg:hidden",children:G("button",{class:"flex items-center px-3 py-2 border rounded text-black hover:text-white hover:border-white",children:ht("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[G("title",{children:"Menu"}),G("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),ht("div",{class:"w-full block flex-grow lg:flex lg:items-center lg:w-auto",children:[ht("div",{class:"text-sm lg:flex-grow",children:[G("a",{href:"#responsive-header",class:"block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4",children:"Important"}),G("a",{href:"#responsive-header",class:"block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4",children:"Planned"}),G("a",{href:"#responsive-header",class:"block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white",children:"Tasks"})]}),G("div",{children:G("a",{href:"#",class:"inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0",children:"Login"})})]})]})})}function sf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IN=Nw,Aw=new Fs("auth","Firebase",Nw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new rd("@firebase/auth");function Xo(t,...e){Nm.logLevel<=W.ERROR&&Nm.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw of(t,...e)}function Lt(t,...e){return of(t,...e)}function Dw(t,e,n){const r=Object.assign(Object.assign({},IN()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function kN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ut(t,"argument-error"),Dw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Aw.create(t,...e)}function M(t,e,...n){if(!t)throw of(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function tn(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Map;function qt(t){tn(t instanceof Function,"Expected a class definition");let e=Am.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Am.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t,e){const n=sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Na(s,e??{}))return i;Ut(i,"already-initialized")}return n.initialize({options:e})}function NN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AN(){return Dm()==="http:"||Dm()==="https:"}function Dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AN()||G_()||"connection"in navigator)?navigator.onLine:!0}function RN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=K_()||Q_()}get(){return DN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new io(3e4,6e4);function PN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ul(t,e,n,r,i={}){return xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=bs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rw.fetch()(Ow(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xN),e);try{const i=new MN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Lo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dw(t,c,u);Ut(t,c)}}catch(i){if(i instanceof rn)throw i;Ut(t,"network-request-failed")}}async function LN(t,e,n,r,i={}){const s=await Ul(t,e,n,r,i);return"mfaPendingCredential"in s&&Ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?af(t.config,i):`${t.config.apiScheme}://${i}`}class MN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),ON.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e){return Ul(t,"POST","/v1/accounts:delete",e)}async function UN(t,e){return Ul(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FN(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=lf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ts(Ou(i.auth_time)),issuedAtTime:ts(Ou(i.iat)),expirationTime:ts(Ou(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ou(t){return Number(t)*1e3}function lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=nv(n);return i?JSON.parse(i):(Xo("Failed to decode base64 JWT payload"),null)}catch(i){return Xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bN(t){const e=lf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&VN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xs(t,UN(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HN(s.providerUserInfo):[],a=jN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function BN(t){const e=ze(t);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HN(t){return t.map(e=>{var{providerId:n}=e,r=sf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e){const n=await xw(t,{},async()=>{const r=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ow(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FN(this,e)}reload(){return BN(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xs(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:N}=n;M(m&&N,e,"internal-error");const O=Os.fromJSON(this.name,N);M(typeof m=="string",e,"internal-error"),on(h,e.name),on(d,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),on(g,e.name),on(y,e.name),on(v,e.name),on(D,e.name),on(p,e.name),on(f,e.name);const J=new sr({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(J.providerData=C.map(z=>Object.assign({},z))),D&&(J._redirectEventId=D),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ha(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lw.type="NONE";const Rm=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(qt(Rm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qt(Rm);const o=Jo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Wr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bw(e))return"Blackberry";if(Vw(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||$w(e))&&!e.includes("edge/"))return"Chrome";if(Fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=Ve()){return/firefox\//i.test(t)}function uf(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $w(t=Ve()){return/crios\//i.test(t)}function Uw(t=Ve()){return/iemobile/i.test(t)}function Fw(t=Ve()){return/android/i.test(t)}function bw(t=Ve()){return/blackberry/i.test(t)}function Vw(t=Ve()){return/webos/i.test(t)}function Fl(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WN(t=Ve()){var e;return Fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KN(){return Y_()&&document.documentMode===10}function zw(t=Ve()){return Fl(t)||Fw(t)||Vw(t)||bw(t)||/windows phone/i.test(t)||Uw(t)}function GN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e=[]){let n;switch(t){case"Browser":n=xm(Ve());break;case"Worker":n=`${xm(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new QN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Aw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bl(t){return ze(t)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=rS(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function XN(t,e,n){const r=bl(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=jw(e),{host:o,port:a}=JN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZN()}function jw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JN(t){const e=jw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pm(o)}}}function Pm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e){return LN(t,"POST","/v1/accounts:signInWithIdp",PN(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="http://localhost";class mr extends Hw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=sf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:eA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends cf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends so{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends so{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends so{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=Lm(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lm(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function tA(t,e,n=!1){const r=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await xs(t,qw(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=lf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e,n=!1){const r="signIn",i=await qw(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function iA(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function sA(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}const Wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){const t=Ve();return uf(t)||Fl(t)}const aA=1e3,lA=10;class Kw extends Ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oA()&&GN(),this.fallbackToPolling=zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const uA=Kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends Ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gw.type="SESSION";const Qw=Gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await cA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function dA(t){Mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function fA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mA(){return Yw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="firebaseLocalStorageDb",gA=1,Ka="firebaseLocalStorage",Jw="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function yA(){const t=indexedDB.deleteDatabase(Xw);return new oo(t).toPromise()}function ah(){const t=indexedDB.open(Xw,gA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ka,{keyPath:Jw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ka)?e(r):(r.close(),await yA(),e(await ah()))})})}async function Mm(t,e,n){const r=zl(t,!0).put({[Jw]:e,value:n});return new oo(r).toPromise()}async function vA(t,e){const n=zl(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function $m(t,e){const n=zl(t,!0).delete(e);return new oo(n).toPromise()}const wA=800,EA=3;class Zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(mA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fA(),!this.activeServiceWorker)return;this.sender=new hA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await Mm(e,Wa,"1"),await $m(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zl(i,!1).getAll();return new oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zw.type="LOCAL";const _A=Zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function TA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SA().appendChild(r)})}function IA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e){return e?qt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends Hw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kA(t){return rA(t.auth,new df(t),t.bypassAuthState)}function CA(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),nA(n,new df(t),t.bypassAuthState)}async function NA(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),tA(n,new df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kA;case"linkViaPopup":case"linkViaRedirect":return NA;case"reauthViaPopup":case"reauthViaRedirect":return CA;default:Ut(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new io(2e3,1e4);async function DA(t,e,n){const r=bl(t);kN(t,e,cf);const i=e1(r,n);return new Zn(r,"signInViaPopup",e,i).executeNotNull()}class Zn extends t1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,AA.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="pendingRedirect",Zo=new Map;class xA extends t1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const r=await OA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OA(t,e){const n=MA(e),r=LA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PA(t,e){Zo.set(t._key(),e)}function LA(t){return qt(t._redirectPersistence)}function MA(t){return Jo(RA,t.config.apiKey,t.name)}async function $A(t,e,n=!1){const r=bl(t),i=e1(r,e),o=await new xA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!n1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e={}){return Ul(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BA=/^https?/;async function jA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VA(t);for(const n of e)try{if(HA(n))return}catch{}Ut(t,"unauthorized-domain")}function HA(t){const e=oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BA.test(n))return!1;if(zA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new io(3e4,6e4);function Fm(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var r,i,s;function o(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),n(Lt(t,"network-request-failed"))},timeout:qA.get()})}if(!((i=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mt().gapi)===null||s===void 0)&&s.load)o();else{const a=IA("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},TA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ea=null,e})}let ea=null;function KA(t){return ea=ea||WA(t),ea}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new io(5e3,15e3),QA="__/auth/iframe",YA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZA(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?af(e,YA):`https://${t.config.authDomain}/${QA}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=JA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bs(r).slice(1)}`}async function eD(t){const e=await KA(t),n=Mt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:ZA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Mt().setTimeout(()=>{s(o)},GA.get());function l(){Mt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nD=500,rD=600,iD="_blank",sD="http://localhost";class bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oD(t,e,n,r=nD,i=rD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(a=$w(u)?iD:n),Mw(u)&&(e=e||sD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(WN(u)&&a!=="_self")return aD(e||"",a),new bm(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new bm(h)}function aD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="__/auth/handler",uD="emulator/auth/handler";function Vm(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof cf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof so){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cD(t)}?${bs(a).slice(1)}`}function cD({config:t}){return t.emulator?af(t,uD):`https://${t.authDomain}/${lD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="webStorageSupport";class hD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qw,this._completeRedirectFn=$A,this._overrideRedirectResult=PA}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vm(e,n,r,oh(),i);return oD(e,o,hf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),dA(Vm(e,n,r,oh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eD(e),r=new FA(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pu,{type:Pu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pu];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zw()||uf()||Fl()}}const dD=hD;var zm="@firebase/auth",Bm="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mD(t){ti(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bw(t)},c=new YN(a,l,u);return NN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new hr("auth-internal",e=>{const n=bl(e.getProvider("auth").getImmediate());return(r=>new fD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(zm,Bm,pD(t)),An(zm,Bm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=5*60,yD=iv("authIdTokenMaxAge")||gD;let jm=null;const vD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yD)return;const i=n==null?void 0:n.token;jm!==i&&(jm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wD(t=lv()){const e=sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CN(t,{popupRedirectResolver:dD,persistence:[_A,uA,Qw]}),r=iv("authTokenSyncURL");if(r){const s=vD(r);sA(n,s,()=>s(n.currentUser)),iA(n,o=>s(o))}const i=rv("auth");return i&&XN(n,`http://${i}`),n}mD("Browser");function ED(){const[t,e]=_t.useState(null),[n,r]=_t.useState(!1),i=new Vt,s=wD();return _t.useEffect(()=>{s.onAuthStateChanged(a=>{})},[s]),ht("div",{children:[n?G("div",{children:"Loading..."}):G("button",{onClick:()=>{r(!0),DA(s,i).then(a=>{a.user}).catch(a=>{e(a.message),r(!1)})},children:"Login with Google"}),t&&ht("div",{children:["Error: ",t]})]})}const _D={bg:"h-screen w-screen p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"};function SD(){return ht("div",{className:_D.bg,children:[G(TN,{}),G(_N,{}),G(ED,{})]})}Lu.createRoot(document.getElementById("root")).render(G(gn.StrictMode,{children:G(SD,{})}));
