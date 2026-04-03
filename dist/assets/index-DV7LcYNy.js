(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function LT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l_={exports:{}},uu={},u_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),MT=Symbol.for("react.portal"),FT=Symbol.for("react.fragment"),UT=Symbol.for("react.strict_mode"),jT=Symbol.for("react.profiler"),zT=Symbol.for("react.provider"),BT=Symbol.for("react.context"),$T=Symbol.for("react.forward_ref"),HT=Symbol.for("react.suspense"),WT=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),gm=Symbol.iterator;function KT(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,d_={};function ss(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f_(){}f_.prototype=ss.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}var Cd=Ad.prototype=new f_;Cd.constructor=Ad;h_(Cd,ss.prototype);Cd.isPureReactComponent=!0;var ym=Array.isArray,p_=Object.prototype.hasOwnProperty,Pd={current:null},m_={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p_.call(e,r)&&!m_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:Pd.current}}function GT(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function QT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QT(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case MT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gc(o,0):r,ym(i)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),Qa(i,e,n,"",function(c){return c})):i!=null&&(kd(i)&&(i=GT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ym(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+gc(s,l);o+=Qa(s,e,n,u,i)}else if(u=KT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+gc(s,l++),o+=Qa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Ya={transition:null},JT={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Pd};function y_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ss;ee.Fragment=FT;ee.Profiler=jT;ee.PureComponent=Ad;ee.StrictMode=UT;ee.Suspense=HT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;ee.act=y_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)p_.call(e,u)&&!m_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:BT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zT,_context:t},t.Consumer=t};ee.createElement=g_;ee.createFactory=function(t){var e=g_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:$T,render:t}};ee.isValidElement=kd;ee.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:YT}};ee.memo=function(t,e){return{$$typeof:WT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ee.unstable_act=y_;ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.3.1";u_.exports=ee;var N=u_.exports;const XT=LT(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=N,eI=Symbol.for("react.element"),tI=Symbol.for("react.fragment"),nI=Object.prototype.hasOwnProperty,rI=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iI={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nI.call(e,r)&&!iI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eI,type:t,key:s,ref:o,props:i,_owner:rI.current}}uu.Fragment=tI;uu.jsx=__;uu.jsxs=__;l_.exports=uu;var L=l_.exports,oh={},v_={exports:{}},It={},E_={exports:{}},w_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var X=B.length;B.push(K);e:for(;0<X;){var me=X-1>>>1,Ae=B[me];if(0<i(Ae,K))B[me]=K,B[X]=Ae,X=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],X=B.pop();if(X!==K){B[0]=X;e:for(var me=0,Ae=B.length,kr=Ae>>>1;me<kr;){var At=2*(me+1)-1,xr=B[At],Ot=At+1,Vn=B[Ot];if(0>i(xr,X))Ot<Ae&&0>i(Vn,xr)?(B[me]=Vn,B[Ot]=X,me=Ot):(B[me]=xr,B[At]=X,me=At);else if(Ot<Ae&&0>i(Vn,X))B[me]=Vn,B[Ot]=X,me=Ot;else break e}}return K}function i(B,K){var X=B.sortIndex-K.sortIndex;return X!==0?X:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,S=!1,C=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=B)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function b(B){if(P=!1,R(B),!C)if(n(u)!==null)C=!0,Pr(F);else{var K=n(c);K!==null&&ci(b,K.startTime-B)}}function F(B,K){C=!1,P&&(P=!1,E(g),g=-1),S=!0;var X=m;try{for(R(K),p=n(u);p!==null&&(!(p.expirationTime>K)||B&&!A());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var Ae=me(p.expirationTime<=K);K=t.unstable_now(),typeof Ae=="function"?p.callback=Ae:p===n(u)&&r(u),R(K)}else r(u);p=n(u)}if(p!==null)var kr=!0;else{var At=n(c);At!==null&&ci(b,At.startTime-K),kr=!1}return kr}finally{p=null,m=X,S=!1}}var j=!1,_=null,g=-1,w=5,T=-1;function A(){return!(t.unstable_now()-T<w)}function k(){if(_!==null){var B=t.unstable_now();T=B;var K=!0;try{K=_(!0,B)}finally{K?I():(j=!1,_=null)}}else j=!1}var I;if(typeof v=="function")I=function(){v(k)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Re=_e.port2;_e.port1.onmessage=k,I=function(){Re.postMessage(null)}}else I=function(){D(k,0)};function Pr(B){_=B,j||(j=!0,I())}function ci(B,K){g=D(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Pr(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var X=m;m=K;try{return B()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=m;m=B;try{return K()}finally{m=X}},t.unstable_scheduleCallback=function(B,K,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,B){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=X+Ae,B={id:f++,callback:K,priorityLevel:B,startTime:X,expirationTime:Ae,sortIndex:-1},X>me?(B.sortIndex=X,e(c,B),n(u)===null&&B===n(c)&&(P?(E(g),g=-1):P=!0,ci(b,X-me))):(B.sortIndex=Ae,e(u,B),C||S||(C=!0,Pr(F))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var K=m;return function(){var X=m;m=K;try{return B.apply(this,arguments)}finally{m=X}}}})(w_);E_.exports=w_;var sI=E_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=N,Tt=sI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T_=new Set,_o={};function si(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(_o[t]=e,t=0;t<e.length;t++)T_.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ah=Object.prototype.hasOwnProperty,aI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vm={},Em={};function lI(t){return ah.call(Em,t)?!0:ah.call(vm,t)?!1:aI.test(t)?Em[t]=!0:(vm[t]=!0,!1)}function uI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cI(t,e,n,r){if(e===null||typeof e>"u"||uI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Nd);qe[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Nd);qe[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Nd);qe[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cI(e,n,i,r)&&(n=null),r||i===null?lI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),lh=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),ch=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),wm=Symbol.iterator;function bs(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,yc;function Hs(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var _c=!1;function vc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function hI(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case Ei:return"Portal";case lh:return"Profiler";case Vd:return"StrictMode";case uh:return"Suspense";case ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S_:return(t.displayName||"Context")+".Consumer";case I_:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Od:return e=t.displayName||null,e!==null?e:hh(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return hh(t(e))}catch{}}return null}function dI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hh(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fI(t){var e=A_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=fI(t))}function C_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P_(t,e){e=e.checked,e!=null&&Dd(t,"checked",e,!1)}function fh(t,e){P_(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&ph(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ph(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ws(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function k_(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,N_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pI=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){pI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function D_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function V_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=D_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yh(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function _h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eh=null,bi=null,Oi=null;function Am(t){if(t=Yo(t)){if(typeof Eh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=pu(e),Eh(t.stateNode,t.type,e))}}function b_(t){bi?Oi?Oi.push(t):Oi=[t]:bi=t}function O_(){if(bi){var t=bi,e=Oi;if(Oi=bi=null,Am(t),e)for(t=0;t<e.length;t++)Am(e[t])}}function L_(t,e){return t(e)}function M_(){}var Ec=!1;function F_(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return L_(t,e,n)}finally{Ec=!1,(bi!==null||Oi!==null)&&(M_(),O_())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var wh=!1;if(wn)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){wh=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{wh=!1}function gI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ro=!1,El=null,wl=!1,Th=null,yI={onError:function(t){ro=!0,El=t}};function _I(t,e,n,r,i,s,o,l,u){ro=!1,El=null,gI.apply(yI,arguments)}function vI(t,e,n,r,i,s,o,l,u){if(_I.apply(this,arguments),ro){if(ro){var c=El;ro=!1,El=null}else throw Error(U(198));wl||(wl=!0,Th=c)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(t){if(oi(t)!==t)throw Error(U(188))}function EI(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cm(i),t;if(s===r)return Cm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function j_(t){return t=EI(t),t!==null?z_(t):null}function z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z_(t);if(e!==null)return e;t=t.sibling}return null}var B_=Tt.unstable_scheduleCallback,Pm=Tt.unstable_cancelCallback,wI=Tt.unstable_shouldYield,TI=Tt.unstable_requestPaint,Pe=Tt.unstable_now,II=Tt.unstable_getCurrentPriorityLevel,Md=Tt.unstable_ImmediatePriority,$_=Tt.unstable_UserBlockingPriority,Tl=Tt.unstable_NormalPriority,SI=Tt.unstable_LowPriority,H_=Tt.unstable_IdlePriority,cu=null,tn=null;function RI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:PI,AI=Math.log,CI=Math.LN2;function PI(t){return t>>>=0,t===0?32:31-(AI(t)/CI|0)|0}var Pa=64,ka=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=qs(l):(s&=o,s!==0&&(r=qs(s)))}else o=n&~i,o!==0?r=qs(o):s!==0&&(r=qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function kI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=kI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W_(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function NI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K_,Ud,G_,Q_,Y_,Sh=!1,xa=[],Zn=null,er=null,tr=null,wo=new Map,To=new Map,Hn=[],DI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function Ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&Ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VI(t,e,n,r,i){switch(e){case"focusin":return Zn=Ls(Zn,t,e,n,r,i),!0;case"dragenter":return er=Ls(er,t,e,n,r,i),!0;case"mouseover":return tr=Ls(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wo.set(s,Ls(wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,Ls(To.get(s)||null,t,e,n,r,i)),!0}return!1}function J_(t){var e=Ur(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=U_(n),e!==null){t.blockedOn=e,Y_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vh=r,n.target.dispatchEvent(r),vh=null}else return e=Yo(n),e!==null&&Ud(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Ja(t)&&n.delete(e)}function bI(){Sh=!1,Zn!==null&&Ja(Zn)&&(Zn=null),er!==null&&Ja(er)&&(er=null),tr!==null&&Ja(tr)&&(tr=null),wo.forEach(xm),To.forEach(xm)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Sh||(Sh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,bI)))}function Io(t){function e(i){return Ms(i,t)}if(0<xa.length){Ms(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Ms(Zn,t),er!==null&&Ms(er,t),tr!==null&&Ms(tr,t),wo.forEach(e),To.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)J_(n),n.blockedOn===null&&Hn.shift()}var Li=xn.ReactCurrentBatchConfig,Sl=!0;function OI(t,e,n,r){var i=ae,s=Li.transition;Li.transition=null;try{ae=1,jd(t,e,n,r)}finally{ae=i,Li.transition=s}}function LI(t,e,n,r){var i=ae,s=Li.transition;Li.transition=null;try{ae=4,jd(t,e,n,r)}finally{ae=i,Li.transition=s}}function jd(t,e,n,r){if(Sl){var i=Rh(t,e,n,r);if(i===null)Nc(t,e,r,Rl,n),km(t,r);else if(VI(i,t,e,n,r))r.stopPropagation();else if(km(t,r),e&4&&-1<DI.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&K_(s),s=Rh(t,e,n,r),s===null&&Nc(t,e,r,Rl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nc(t,e,r,null,n)}}var Rl=null;function Rh(t,e,n,r){if(Rl=null,t=Ld(r),t=Ur(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rl=t,null}function X_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case Md:return 1;case $_:return 4;case Tl:case SI:return 16;case H_:return 536870912;default:return 16}default:return 16}}var Yn=null,zd=null,Xa=null;function Z_(){if(Xa)return Xa;var t,e=zd,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Nm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:Nm,this.isPropagationStopped=Nm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bd=St(os),Qo=we({},os,{view:0,detail:0}),MI=St(Qo),Tc,Ic,Fs,hu=we({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Tc=t.screenX-Fs.screenX,Ic=t.screenY-Fs.screenY):Ic=Tc=0,Fs=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Dm=St(hu),FI=we({},hu,{dataTransfer:0}),UI=St(FI),jI=we({},Qo,{relatedTarget:0}),Sc=St(jI),zI=we({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),BI=St(zI),$I=we({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HI=St($I),WI=we({},os,{data:0}),Vm=St(WI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GI[t])?!!e[t]:!1}function $d(){return QI}var YI=we({},Qo,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JI=St(YI),XI=we({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=St(XI),ZI=we({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),eS=St(ZI),tS=we({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=St(tS),rS=we({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=St(rS),sS=[9,13,27,32],Hd=wn&&"CompositionEvent"in window,io=null;wn&&"documentMode"in document&&(io=document.documentMode);var oS=wn&&"TextEvent"in window&&!io,ev=wn&&(!Hd||io&&8<io&&11>=io),Om=" ",Lm=!1;function tv(t,e){switch(t){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function aS(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(Lm=!0,Om);case"textInput":return t=e.data,t===Om&&Lm?null:t;default:return null}}function lS(t,e){if(Ti)return t==="compositionend"||!Hd&&tv(t,e)?(t=Z_(),Xa=zd=Yn=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uS[t.type]:e==="textarea"}function rv(t,e,n,r){b_(r),e=Al(e,"onChange"),0<e.length&&(n=new Bd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,So=null;function cS(t){pv(t,0)}function du(t){var e=Ri(t);if(C_(e))return t}function hS(t,e){if(t==="change")return e}var iv=!1;if(wn){var Rc;if(wn){var Ac="oninput"in document;if(!Ac){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Ac=typeof Fm.oninput=="function"}Rc=Ac}else Rc=!1;iv=Rc&&(!document.documentMode||9<document.documentMode)}function Um(){so&&(so.detachEvent("onpropertychange",sv),So=so=null)}function sv(t){if(t.propertyName==="value"&&du(So)){var e=[];rv(e,So,t,Ld(t)),F_(cS,e)}}function dS(t,e,n){t==="focusin"?(Um(),so=e,So=n,so.attachEvent("onpropertychange",sv)):t==="focusout"&&Um()}function fS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return du(So)}function pS(t,e){if(t==="click")return du(e)}function mS(t,e){if(t==="input"||t==="change")return du(e)}function gS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:gS;function Ro(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ah.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&Wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zm(n,s);var o=zm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _S=wn&&"documentMode"in document&&11>=document.documentMode,Ii=null,Ah=null,oo=null,Ch=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||Ii==null||Ii!==vl(r)||(r=Ii,"selectionStart"in r&&Wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&Ro(oo,r)||(oo=r,r=Al(Ah,"onSelect"),0<r.length&&(e=new Bd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Cc={},lv={};wn&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function fu(t){if(Cc[t])return Cc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return Cc[t]=e[n];return t}var uv=fu("animationend"),cv=fu("animationiteration"),hv=fu("animationstart"),dv=fu("transitionend"),fv=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){fv.set(t,e),si(e,[t])}for(var Pc=0;Pc<$m.length;Pc++){var kc=$m[Pc],vS=kc.toLowerCase(),ES=kc[0].toUpperCase()+kc.slice(1);wr(vS,"on"+ES)}wr(uv,"onAnimationEnd");wr(cv,"onAnimationIteration");wr(hv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(dv,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vI(r,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,c),s=u}}}if(wl)throw t=Th,wl=!1,Th=null,t}function he(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(mv(e,t,2,!1),n.add(r))}function xc(t,e,n){var r=0;e&&(r|=4),mv(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[Va]){t[Va]=!0,T_.forEach(function(n){n!=="selectionchange"&&(wS.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,xc("selectionchange",!1,e))}}function mv(t,e,n,r){switch(X_(e)){case 1:var i=OI;break;case 4:i=LI;break;default:i=jd}n=i.bind(null,e,n,t),i=void 0,!wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}F_(function(){var c=s,f=Ld(n),p=[];e:{var m=fv.get(t);if(m!==void 0){var S=Bd,C=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":S=JI;break;case"focusin":C="focus",S=Sc;break;case"focusout":C="blur",S=Sc;break;case"beforeblur":case"afterblur":S=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=UI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=eS;break;case uv:case cv:case hv:S=BI;break;case dv:S=nS;break;case"scroll":S=MI;break;case"wheel":S=iS;break;case"copy":case"cut":case"paste":S=HI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=bm}var P=(e&4)!==0,D=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,R;v!==null;){R=v;var b=R.stateNode;if(R.tag===5&&b!==null&&(R=b,E!==null&&(b=Eo(v,E),b!=null&&P.push(Co(v,b,R)))),D)break;v=v.return}0<P.length&&(m=new S(m,C,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==vh&&(C=n.relatedTarget||n.fromElement)&&(Ur(C)||C[Tn]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=c,C=C?Ur(C):null,C!==null&&(D=oi(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=c),S!==C)){if(P=Dm,b="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=bm,b="onPointerLeave",E="onPointerEnter",v="pointer"),D=S==null?m:Ri(S),R=C==null?m:Ri(C),m=new P(b,v+"leave",S,n,f),m.target=D,m.relatedTarget=R,b=null,Ur(f)===c&&(P=new P(E,v+"enter",C,n,f),P.target=R,P.relatedTarget=D,b=P),D=b,S&&C)t:{for(P=S,E=C,v=0,R=P;R;R=pi(R))v++;for(R=0,b=E;b;b=pi(b))R++;for(;0<v-R;)P=pi(P),v--;for(;0<R-v;)E=pi(E),R--;for(;v--;){if(P===E||E!==null&&P===E.alternate)break t;P=pi(P),E=pi(E)}P=null}else P=null;S!==null&&Wm(p,m,S,P,!1),C!==null&&D!==null&&Wm(p,D,C,P,!0)}}e:{if(m=c?Ri(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var F=hS;else if(Mm(m))if(iv)F=mS;else{F=fS;var j=dS}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=pS);if(F&&(F=F(t,c))){rv(p,F,n,f);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ph(m,"number",m.value)}switch(j=c?Ri(c):window,t){case"focusin":(Mm(j)||j.contentEditable==="true")&&(Ii=j,Ah=c,oo=null);break;case"focusout":oo=Ah=Ii=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,Bm(p,n,f);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Bm(p,n,f)}var _;if(Hd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ti?tv(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(ev&&n.locale!=="ko"&&(Ti||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ti&&(_=Z_()):(Yn=f,zd="value"in Yn?Yn.value:Yn.textContent,Ti=!0)),j=Al(c,g),0<j.length&&(g=new Vm(g,t,null,n,f),p.push({event:g,listeners:j}),_?g.data=_:(_=nv(n),_!==null&&(g.data=_)))),(_=oS?aS(t,n):lS(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(f=new Vm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=_))}pv(p,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(t,n),s!=null&&r.unshift(Co(t,s,i)),s=Eo(t,e),s!=null&&r.push(Co(t,s,i))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Eo(n,s),u!=null&&o.unshift(Co(n,u,l))):i||(u=Eo(n,s),u!=null&&o.push(Co(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(IS,"")}function ba(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(U(425))}function Cl(){}var Ph=null,kh=null;function xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,RS=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(AS)}:Nh;function AS(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Io(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Io(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),Zt="__reactFiber$"+as,Po="__reactProps$"+as,Tn="__reactContainer$"+as,Dh="__reactEvents$"+as,CS="__reactListeners$"+as,PS="__reactHandles$"+as;function Ur(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[Zt])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Zt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function pu(t){return t[Po]||null}var Vh=[],Ai=-1;function Tr(t){return{current:t}}function pe(t){0>Ai||(t.current=Vh[Ai],Vh[Ai]=null,Ai--)}function ue(t,e){Ai++,Vh[Ai]=t.current,t.current=e}var pr={},tt=Tr(pr),pt=Tr(!1),Kr=pr;function qi(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Pl(){pe(pt),pe(tt)}function Qm(t,e,n){if(tt.current!==pr)throw Error(U(168));ue(tt,e),ue(pt,n)}function gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,dI(t)||"Unknown",i));return we({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Kr=tt.current,ue(tt,t),ue(pt,pt.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=gv(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,pe(pt),pe(tt),ue(tt,t)):pe(pt),ue(pt,n)}var pn=null,mu=!1,Vc=!1;function yv(t){pn===null?pn=[t]:pn.push(t)}function kS(t){mu=!0,yv(t)}function Ir(){if(!Vc&&pn!==null){Vc=!0;var t=0,e=ae;try{var n=pn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,mu=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),B_(Md,Ir),i}finally{ae=e,Vc=!1}}return null}var Ci=[],Pi=0,xl=null,Nl=0,Ct=[],Pt=0,Gr=null,mn=1,gn="";function Lr(t,e){Ci[Pi++]=Nl,Ci[Pi++]=xl,xl=t,Nl=e}function _v(t,e,n){Ct[Pt++]=mn,Ct[Pt++]=gn,Ct[Pt++]=Gr,Gr=t;var r=mn;t=gn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-zt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function qd(t){t.return!==null&&(Lr(t,1),_v(t,1,0))}function Kd(t){for(;t===xl;)xl=Ci[--Pi],Ci[Pi]=null,Nl=Ci[--Pi],Ci[Pi]=null;for(;t===Gr;)Gr=Ct[--Pt],Ct[Pt]=null,gn=Ct[--Pt],Ct[Pt]=null,mn=Ct[--Pt],Ct[Pt]=null}var wt=null,vt=null,ge=!1,Ut=null;function vv(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oh(t){if(ge){var e=vt;if(e){var n=e;if(!Jm(t,e)){if(bh(t))throw Error(U(418));e=nr(n.nextSibling);var r=wt;e&&Jm(t,e)?vv(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(bh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function Xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Oa(t){if(t!==wt)return!1;if(!ge)return Xm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xh(t.type,t.memoizedProps)),e&&(e=vt)){if(bh(t))throw Ev(),Error(U(418));for(;e;)vv(t,e),e=nr(e.nextSibling)}if(Xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?nr(t.stateNode.nextSibling):null;return!0}function Ev(){for(var t=vt;t;)t=nr(t.nextSibling)}function Ki(){vt=wt=null,ge=!1}function Gd(t){Ut===null?Ut=[t]:Ut.push(t)}var xS=xn.ReactCurrentBatchConfig;function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function wv(t){function e(E,v){if(t){var R=E.deletions;R===null?(E.deletions=[v],E.flags|=16):R.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=or(E,v),E.index=0,E.sibling=null,E}function s(E,v,R){return E.index=R,t?(R=E.alternate,R!==null?(R=R.index,R<v?(E.flags|=2,v):R):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,R,b){return v===null||v.tag!==6?(v=jc(R,E.mode,b),v.return=E,v):(v=i(v,R),v.return=E,v)}function u(E,v,R,b){var F=R.type;return F===wi?f(E,v,R.props.children,b,R.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&Zm(F)===v.type)?(b=i(v,R.props),b.ref=Us(E,v,R),b.return=E,b):(b=ol(R.type,R.key,R.props,null,E.mode,b),b.ref=Us(E,v,R),b.return=E,b)}function c(E,v,R,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=zc(R,E.mode,b),v.return=E,v):(v=i(v,R.children||[]),v.return=E,v)}function f(E,v,R,b,F){return v===null||v.tag!==7?(v=Hr(R,E.mode,b,F),v.return=E,v):(v=i(v,R),v.return=E,v)}function p(E,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jc(""+v,E.mode,R),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:return R=ol(v.type,v.key,v.props,null,E.mode,R),R.ref=Us(E,null,v),R.return=E,R;case Ei:return v=zc(v,E.mode,R),v.return=E,v;case Bn:var b=v._init;return p(E,b(v._payload),R)}if(Ws(v)||bs(v))return v=Hr(v,E.mode,R,null),v.return=E,v;La(E,v)}return null}function m(E,v,R,b){var F=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return F!==null?null:l(E,v,""+R,b);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ra:return R.key===F?u(E,v,R,b):null;case Ei:return R.key===F?c(E,v,R,b):null;case Bn:return F=R._init,m(E,v,F(R._payload),b)}if(Ws(R)||bs(R))return F!==null?null:f(E,v,R,b,null);La(E,R)}return null}function S(E,v,R,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return E=E.get(R)||null,l(v,E,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ra:return E=E.get(b.key===null?R:b.key)||null,u(v,E,b,F);case Ei:return E=E.get(b.key===null?R:b.key)||null,c(v,E,b,F);case Bn:var j=b._init;return S(E,v,R,j(b._payload),F)}if(Ws(b)||bs(b))return E=E.get(R)||null,f(v,E,b,F,null);La(v,b)}return null}function C(E,v,R,b){for(var F=null,j=null,_=v,g=v=0,w=null;_!==null&&g<R.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var T=m(E,_,R[g],b);if(T===null){_===null&&(_=w);break}t&&_&&T.alternate===null&&e(E,_),v=s(T,v,g),j===null?F=T:j.sibling=T,j=T,_=w}if(g===R.length)return n(E,_),ge&&Lr(E,g),F;if(_===null){for(;g<R.length;g++)_=p(E,R[g],b),_!==null&&(v=s(_,v,g),j===null?F=_:j.sibling=_,j=_);return ge&&Lr(E,g),F}for(_=r(E,_);g<R.length;g++)w=S(_,E,g,R[g],b),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),v=s(w,v,g),j===null?F=w:j.sibling=w,j=w);return t&&_.forEach(function(A){return e(E,A)}),ge&&Lr(E,g),F}function P(E,v,R,b){var F=bs(R);if(typeof F!="function")throw Error(U(150));if(R=F.call(R),R==null)throw Error(U(151));for(var j=F=null,_=v,g=v=0,w=null,T=R.next();_!==null&&!T.done;g++,T=R.next()){_.index>g?(w=_,_=null):w=_.sibling;var A=m(E,_,T.value,b);if(A===null){_===null&&(_=w);break}t&&_&&A.alternate===null&&e(E,_),v=s(A,v,g),j===null?F=A:j.sibling=A,j=A,_=w}if(T.done)return n(E,_),ge&&Lr(E,g),F;if(_===null){for(;!T.done;g++,T=R.next())T=p(E,T.value,b),T!==null&&(v=s(T,v,g),j===null?F=T:j.sibling=T,j=T);return ge&&Lr(E,g),F}for(_=r(E,_);!T.done;g++,T=R.next())T=S(_,E,g,T.value,b),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?g:T.key),v=s(T,v,g),j===null?F=T:j.sibling=T,j=T);return t&&_.forEach(function(k){return e(E,k)}),ge&&Lr(E,g),F}function D(E,v,R,b){if(typeof R=="object"&&R!==null&&R.type===wi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ra:e:{for(var F=R.key,j=v;j!==null;){if(j.key===F){if(F=R.type,F===wi){if(j.tag===7){n(E,j.sibling),v=i(j,R.props.children),v.return=E,E=v;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&Zm(F)===j.type){n(E,j.sibling),v=i(j,R.props),v.ref=Us(E,j,R),v.return=E,E=v;break e}n(E,j);break}else e(E,j);j=j.sibling}R.type===wi?(v=Hr(R.props.children,E.mode,b,R.key),v.return=E,E=v):(b=ol(R.type,R.key,R.props,null,E.mode,b),b.ref=Us(E,v,R),b.return=E,E=b)}return o(E);case Ei:e:{for(j=R.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(E,v.sibling),v=i(v,R.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=zc(R,E.mode,b),v.return=E,E=v}return o(E);case Bn:return j=R._init,D(E,v,j(R._payload),b)}if(Ws(R))return C(E,v,R,b);if(bs(R))return P(E,v,R,b);La(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,R),v.return=E,E=v):(n(E,v),v=jc(R,E.mode,b),v.return=E,E=v),o(E)):n(E,v)}return D}var Gi=wv(!0),Tv=wv(!1),Dl=Tr(null),Vl=null,ki=null,Qd=null;function Yd(){Qd=ki=Vl=null}function Jd(t){var e=Dl.current;pe(Dl),t._currentValue=e}function Lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){Vl=t,Qd=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(Vl===null)throw Error(U(308));ki=t,Vl.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var jr=null;function Xd(t){jr===null?jr=[t]:jr.push(t)}function Iv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xd(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function Zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Xd(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,S=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(S,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(S,p,m):C,m==null)break e;p=we({},p,m);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=p}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Jo={},nn=Tr(Jo),ko=Tr(Jo),xo=Tr(Jo);function zr(t){if(t===Jo)throw Error(U(174));return t}function ef(t,e){switch(ue(xo,e),ue(ko,t),ue(nn,Jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gh(e,t)}pe(nn),ue(nn,e)}function Qi(){pe(nn),pe(ko),pe(xo)}function Rv(t){zr(xo.current);var e=zr(nn.current),n=gh(e,t.type);e!==n&&(ue(ko,t),ue(nn,n))}function tf(t){ko.current===t&&(pe(nn),pe(ko))}var ve=Tr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function nf(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var tl=xn.ReactCurrentDispatcher,Oc=xn.ReactCurrentBatchConfig,Qr=0,Ee=null,Ve=null,je=null,Ll=!1,ao=!1,No=0,NS=0;function Qe(){throw Error(U(321))}function rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function sf(t,e,n,r,i,s){if(Qr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?OS:LS,t=n(r,i),ao){s=0;do{if(ao=!1,No=0,25<=s)throw Error(U(301));s+=1,je=Ve=null,e.updateQueue=null,tl.current=MS,t=n(r,i)}while(ao)}if(tl.current=Ml,e=Ve!==null&&Ve.next!==null,Qr=0,je=Ve=Ee=null,Ll=!1,e)throw Error(U(300));return t}function of(){var t=No!==0;return No=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ee.memoizedState=je=t:je=je.next=t,je}function bt(){if(Ve===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=je===null?Ee.memoizedState:je.next;if(e!==null)je=e,Ve=t;else{if(t===null)throw Error(U(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},je===null?Ee.memoizedState=je=t:je=je.next=t}return je}function Do(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Qr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=f,Yr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Av(){}function Cv(t,e){var n=Ee,r=bt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,af(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Vo(9,kv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(U(349));Qr&30||Pv(n,e,i)}return i}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,r){e.value=n,e.getSnapshot=r,Nv(e)&&Dv(t)}function xv(t,e,n){return n(function(){Nv(e)&&Dv(t)})}function Nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function Dv(t){var e=In(t,1);e!==null&&Bt(e,t,1,-1)}function ng(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=bS.bind(null,Ee,t),[e.memoizedState,t]}function Vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return bt().memoizedState}function nl(t,e,n,r){var i=Jt();Ee.flags|=t,i.memoizedState=Vo(1|e,n,void 0,r===void 0?null:r)}function gu(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&rf(r,o.deps)){i.memoizedState=Vo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Vo(1|e,n,s,r)}function rg(t,e){return nl(8390656,8,t,e)}function af(t,e){return gu(2048,8,t,e)}function bv(t,e){return gu(4,2,t,e)}function Ov(t,e){return gu(4,4,t,e)}function Lv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,Lv.bind(null,e,t),n)}function lf(){}function Fv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Uv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return Qr&21?(Wt(n,e)||(n=W_(),Ee.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function DS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Oc.transition;Oc.transition={};try{t(!1),e()}finally{ae=n,Oc.transition=r}}function zv(){return bt().memoizedState}function VS(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bv(t))$v(e,n);else if(n=Iv(t,e,n,r),n!==null){var i=at();Bt(n,t,r,i),Hv(n,e,r)}}function bS(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bv(t))$v(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,Xd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Iv(t,e,i,r),n!==null&&(i=at(),Bt(n,t,r,i),Hv(n,e,r))}}function Bv(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function $v(t,e){ao=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}var Ml={readContext:Vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},OS={readContext:Vt,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Lv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VS.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:lf,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=DS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=Jt();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ze===null)throw Error(U(349));Qr&30||Pv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rg(xv.bind(null,r,s,t),[t]),r.flags|=2048,Vo(9,kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=ze.identifierPrefix;if(ge){var n=gn,r=mn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:Vt,useCallback:Fv,useContext:Vt,useEffect:af,useImperativeHandle:Mv,useInsertionEffect:bv,useLayoutEffect:Ov,useMemo:Uv,useReducer:Lc,useRef:Vv,useState:function(){return Lc(Do)},useDebugValue:lf,useDeferredValue:function(t){var e=bt();return jv(e,Ve.memoizedState,t)},useTransition:function(){var t=Lc(Do)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Cv,useId:zv,unstable_isNewReconciler:!1},MS={readContext:Vt,useCallback:Fv,useContext:Vt,useEffect:af,useImperativeHandle:Mv,useInsertionEffect:bv,useLayoutEffect:Ov,useMemo:Uv,useReducer:Mc,useRef:Vv,useState:function(){return Mc(Do)},useDebugValue:lf,useDeferredValue:function(t){var e=bt();return Ve===null?e.memoizedState=t:jv(e,Ve.memoizedState,t)},useTransition:function(){var t=Mc(Do)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Cv,useId:zv,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Bt(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=sr(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Bt(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=sr(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Bt(e,t,r,n),el(e,t,r))}};function ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(i,s):!0}function Wv(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=mt(e)?Kr:tt.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yu.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=mt(e)?Kr:tt.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yu.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Yi(t,e){try{var n="",r=e;do n+=hI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FS=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,Qh=r),Uh(t,e)},n}function Kv(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=XS.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var US=xn.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?Tv(e,null,n,r):Gi(e,t.child,n,r)}function ug(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=sf(t,e,n,r,s,i),n=of(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ge&&n&&qd(e),e.flags|=1,ot(t,e,r,i),e.child)}function cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ro(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return jh(t,e,n,r,i)}function Qv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Ni,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Ni,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Ni,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Ni,_t),_t|=r;return ot(t,e,i,n),e.child}function Yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jh(t,e,n,r,i){var s=mt(n)?Kr:tt.current;return s=qi(e,s),Mi(e,i),n=sf(t,e,n,r,s,i),r=of(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ge&&r&&qd(e),e.flags|=1,ot(t,e,n,i),e.child)}function hg(t,e,n,r,i){if(mt(n)){var s=!0;kl(e)}else s=!1;if(Mi(e,i),e.stateNode===null)rl(t,e),Wv(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=mt(n)?Kr:tt.current,c=qi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&sg(e,o,r,c),$n=!1;var m=e.memoizedState;o.state=m,bl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||pt.current||$n?(typeof f=="function"&&(Mh(e,n,f,r),u=e.memoizedState),(l=$n||ig(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Sv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=mt(n)?Kr:tt.current,u=qi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&sg(e,o,r,u),$n=!1,m=e.memoizedState,o.state=m,bl(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||pt.current||$n?(typeof S=="function"&&(Mh(e,n,S,r),C=e.memoizedState),(c=$n||ig(e,n,c,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,s,i)}function zh(t,e,n,r,i,s){Yv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ym(e,n,!1),Sn(t,e,s);r=e.stateNode,US.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&Ym(e,n,!0),e.child}function Jv(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),ef(t,e.containerInfo)}function dg(t,e,n,r,i){return Ki(),Gd(i),e.flags|=256,ot(t,e,n,r),e.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function $h(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xv(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ve,i&1),t===null)return Oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$h(n),e.memoizedState=Bh,t):uf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bh,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uf(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&Gd(r),Gi(e,t.child,null,n),t=uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(U(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eu({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=$h(o),e.memoizedState=Bh,s);if(!(e.mode&1))return Ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Fc(s,r,void 0),Ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),Bt(r,t,i,-1))}return mf(),r=Fc(Error(U(421))),Ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=nr(i.nextSibling),wt=e,ge=!0,Ut=null,t!==null&&(Ct[Pt++]=mn,Ct[Pt++]=gn,Ct[Pt++]=Gr,mn=t.id,gn=t.overflow,Gr=e),e=uf(e,r.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lh(t.return,e,n)}function Uc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zS(t,e,n){switch(e.tag){case 3:Jv(e),Ki();break;case 5:Rv(e);break;case 1:mt(e.type)&&kl(e);break;case 4:ef(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?Xv(t,e,n):(ue(ve,ve.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);ue(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Qv(t,e,n)}return Sn(t,e,n)}var eE,Hh,tE,nE;eE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};tE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(nn.current);var s=null;switch(n){case"input":i=dh(t,i),r=dh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=mh(t,i),r=mh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cl)}yh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};nE=function(t,e,n,r){n!==r&&(e.flags|=4)};function js(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BS(t,e,n){var r=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&Pl(),Ye(e),null;case 3:return r=e.stateNode,Qi(),pe(pt),pe(tt),nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(Xh(Ut),Ut=null))),Hh(t,e),Ye(e),null;case 5:tf(e);var i=zr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)tE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ye(e),null}if(t=zr(nn.current),Oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[Po]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Ks.length;i++)he(Ks[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Tm(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Sm(r,s),he("invalid",r)}yh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",""+l]):_o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Aa(r),Im(r,s,!0);break;case"textarea":Aa(r),Rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Po]=r,eE(t,e,!1,!1),e.stateNode=t;e:{switch(o=_h(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ks.length;i++)he(Ks[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Tm(t,r),i=dh(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),he("invalid",t);break;case"textarea":Sm(t,r),i=mh(t,r),he("invalid",t);break;default:i=r}yh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?V_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&N_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vo(t,u):typeof u=="number"&&vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&Dd(t,s,u,o))}switch(n){case"input":Aa(t),Im(t,r,!1);break;case"textarea":Aa(t),Rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)nE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=zr(xo.current),zr(nn.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))Ev(),Ki(),e.flags|=98560,s=!1;else if(s=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Zt]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ut!==null&&(Xh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Oe===0&&(Oe=3):mf())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Qi(),Hh(t,e),t===null&&Ao(e.stateNode.containerInfo),Ye(e),null;case 10:return Jd(e.type._context),Ye(e),null;case 17:return mt(e.type)&&Pl(),Ye(e),null;case 19:if(pe(ve),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)js(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Ji&&(e.flags|=128,r=!0,js(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ye(e),null}else 2*Pe()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ve.current,ue(ve,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function $S(t,e){switch(Kd(e),e.tag){case 1:return mt(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),pe(pt),pe(tt),nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tf(e),null;case 13:if(pe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ve),null;case 4:return Qi(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Fa=!1,Ze=!1,HS=typeof WeakSet=="function"?WeakSet:Set,H=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Wh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var pg=!1;function WS(t,e){if(Ph=Sl,t=av(),Wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},Sl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,D=C.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:Mt(e.type,P),D);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Se(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=pg,pg=!1,C}function lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wh(e,n,s)}i=i.next}while(i!==r)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rE(t){var e=t.alternate;e!==null&&(t.alternate=null,rE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Po],delete e[Dh],delete e[CS],delete e[PS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iE(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}var Be=null,Ft=!1;function jn(t,e,n){for(n=n.child;n!==null;)sE(t,e,n),n=n.sibling}function sE(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:Ze||xi(n,e);case 6:var r=Be,i=Ft;Be=null,jn(t,e,n),Be=r,Ft=i,Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),Io(t)):Dc(Be,n.stateNode));break;case 4:r=Be,i=Ft,Be=n.stateNode.containerInfo,Ft=!0,jn(t,e,n),Be=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wh(n,e,o),i=i.next}while(i!==r)}jn(t,e,n);break;case 1:if(!Ze&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,jn(t,e,n),Ze=r):jn(t,e,n);break;default:jn(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HS),e.forEach(function(r){var i=eR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ft=!1;break e;case 3:Be=l.stateNode.containerInfo,Ft=!0;break e;case 4:Be=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Be===null)throw Error(U(160));sE(s,o,i),Be=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Se(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)oE(e,t),e=e.sibling}function oE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Yt(t),r&4){try{lo(3,t,t.return),_u(3,t)}catch(P){Se(t,t.return,P)}try{lo(5,t,t.return)}catch(P){Se(t,t.return,P)}}break;case 1:Lt(e,t),Yt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(Lt(e,t),Yt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{vo(i,"")}catch(P){Se(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&P_(i,s),_h(l,o);var c=_h(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?V_(i,p):f==="dangerouslySetInnerHTML"?N_(i,p):f==="children"?vo(i,p):Dd(i,f,p,c)}switch(l){case"input":fh(i,s);break;case"textarea":k_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Vi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Po]=s}catch(P){Se(t,t.return,P)}}break;case 6:if(Lt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Se(t,t.return,P)}}break;case 3:if(Lt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Io(e.containerInfo)}catch(P){Se(t,t.return,P)}break;case 4:Lt(e,t),Yt(t);break;case 13:Lt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(df=Pe())),r&4&&gg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||f,Lt(e,t),Ze=c):Lt(e,t),Yt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,S=m.child,m.tag){case 0:case 11:case 14:case 15:lo(4,m,m.return);break;case 1:xi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Se(r,n,P)}}break;case 5:xi(m,m.return);break;case 22:if(m.memoizedState!==null){_g(p);continue}}S!==null?(S.return=m,H=S):_g(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=D_("display",o))}catch(P){Se(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Se(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Yt(t),r&4&&gg(t);break;case 21:break;default:Lt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vo(i,""),r.flags&=-33);var s=mg(t);Gh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mg(t);Kh(t,l,o);break;default:throw Error(U(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){H=t,aE(t)}function aE(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Fa;var c=Ze;if(Fa=o,(Ze=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?vg(i):u!==null?(u.return=o,H=u):vg(i);for(;s!==null;)H=s,aE(s),s=s.sibling;H=i,Fa=l,Ze=c}yg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):yg(t)}}function yg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||_u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Io(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ze||e.flags&512&&qh(e)}catch(m){Se(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function _g(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function vg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{qh(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{qh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var KS=Math.ceil,Fl=xn.ReactCurrentDispatcher,cf=xn.ReactCurrentOwner,Dt=xn.ReactCurrentBatchConfig,se=0,ze=null,xe=null,We=0,_t=0,Ni=Tr(0),Oe=0,bo=null,Yr=0,vu=0,hf=0,uo=null,ht=null,df=0,Ji=1/0,fn=null,Ul=!1,Qh=null,ir=null,Ua=!1,Jn=null,jl=0,co=0,Yh=null,il=-1,sl=0;function at(){return se&6?Pe():il!==-1?il:il=Pe()}function sr(t){return t.mode&1?se&2&&We!==0?We&-We:xS.transition!==null?(sl===0&&(sl=W_()),sl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:X_(t.type)),t):1}function Bt(t,e,n,r){if(50<co)throw co=0,Yh=null,Error(U(185));Go(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(vu|=n),Oe===4&&Wn(t,We)),gt(t,r),n===1&&se===0&&!(e.mode&1)&&(Ji=Pe()+500,mu&&Ir()))}function gt(t,e){var n=t.callbackNode;xI(t,e);var r=Il(t,t===ze?We:0);if(r===0)n!==null&&Pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pm(n),e===1)t.tag===0?kS(Eg.bind(null,t)):yv(Eg.bind(null,t)),RS(function(){!(se&6)&&Ir()}),n=null;else{switch(q_(r)){case 1:n=Md;break;case 4:n=$_;break;case 16:n=Tl;break;case 536870912:n=H_;break;default:n=Tl}n=mE(n,lE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lE(t,e){if(il=-1,sl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=Il(t,t===ze?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zl(t,r);else{e=r;var i=se;se|=2;var s=cE();(ze!==t||We!==e)&&(fn=null,Ji=Pe()+500,$r(t,e));do try{YS();break}catch(l){uE(t,l)}while(!0);Yd(),Fl.current=s,se=i,xe!==null?e=0:(ze=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=Ih(t),i!==0&&(r=i,e=Jh(t,i))),e===1)throw n=bo,$r(t,0),Wn(t,r),gt(t,Pe()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!GS(i)&&(e=zl(t,r),e===2&&(s=Ih(t),s!==0&&(r=s,e=Jh(t,s))),e===1))throw n=bo,$r(t,0),Wn(t,r),gt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Mr(t,ht,fn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=df+500-Pe(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nh(Mr.bind(null,t,ht,fn),e);break}Mr(t,ht,fn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KS(r/1960))-r,10<r){t.timeoutHandle=Nh(Mr.bind(null,t,ht,fn),r);break}Mr(t,ht,fn);break;case 5:Mr(t,ht,fn);break;default:throw Error(U(329))}}}return gt(t,Pe()),t.callbackNode===n?lE.bind(null,t):null}function Jh(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=zl(t,e),t!==2&&(e=ht,ht=n,e!==null&&Xh(e)),t}function Xh(t){ht===null?ht=t:ht.push.apply(ht,t)}function GS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~hf,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function Eg(t){if(se&6)throw Error(U(327));Fi();var e=Il(t,0);if(!(e&1))return gt(t,Pe()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var r=Ih(t);r!==0&&(e=r,n=Jh(t,r))}if(n===1)throw n=bo,$r(t,0),Wn(t,e),gt(t,Pe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,ht,fn),gt(t,Pe()),null}function ff(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ji=Pe()+500,mu&&Ir())}}function Jr(t){Jn!==null&&Jn.tag===0&&!(se&6)&&Fi();var e=se;se|=1;var n=Dt.transition,r=ae;try{if(Dt.transition=null,ae=1,t)return t()}finally{ae=r,Dt.transition=n,se=e,!(se&6)&&Ir()}}function pf(){_t=Ni.current,pe(Ni)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SS(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Qi(),pe(pt),pe(tt),nf();break;case 5:tf(r);break;case 4:Qi();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Jd(r.type._context);break;case 22:case 23:pf()}n=n.return}if(ze=t,xe=t=or(t.current,null),We=_t=e,Oe=0,bo=null,hf=vu=Yr=0,ht=uo=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function uE(t,e){do{var n=xe;try{if(Yd(),tl.current=Ml,Ll){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(Qr=0,je=Ve=Ee=null,ao=!1,No=0,cf.current=null,n===null||n.return===null){Oe=1,bo=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=ag(o);if(S!==null){S.flags&=-257,lg(S,o,l,s,e),S.mode&1&&og(s,c,e),e=S,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){og(s,c,e),mf();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var D=ag(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),lg(D,o,l,s,e),Gd(Yi(u,l));break e}}s=u=Yi(u,l),Oe!==4&&(Oe=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=qv(s,u,e);eg(s,E);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(ir===null||!ir.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Kv(s,l,e);eg(s,b);break e}}s=s.return}while(s!==null)}dE(n)}catch(F){e=F,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function cE(){var t=Fl.current;return Fl.current=Ml,t===null?Ml:t}function mf(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),ze===null||!(Yr&268435455)&&!(vu&268435455)||Wn(ze,We)}function zl(t,e){var n=se;se|=2;var r=cE();(ze!==t||We!==e)&&(fn=null,$r(t,e));do try{QS();break}catch(i){uE(t,i)}while(!0);if(Yd(),se=n,Fl.current=r,xe!==null)throw Error(U(261));return ze=null,We=0,Oe}function QS(){for(;xe!==null;)hE(xe)}function YS(){for(;xe!==null&&!wI();)hE(xe)}function hE(t){var e=pE(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?dE(t):xe=e,cf.current=null}function dE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,xe=null;return}}else if(n=BS(n,e,_t),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Oe===0&&(Oe=5)}function Mr(t,e,n){var r=ae,i=Dt.transition;try{Dt.transition=null,ae=1,JS(t,e,n,r)}finally{Dt.transition=i,ae=r}return null}function JS(t,e,n,r){do Fi();while(Jn!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NI(t,s),t===ze&&(xe=ze=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,mE(Tl,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=ae;ae=1;var l=se;se|=4,cf.current=null,WS(t,n),oE(n,t),yS(kh),Sl=!!Ph,kh=Ph=null,t.current=n,qS(n),TI(),se=l,ae=o,Dt.transition=s}else t.current=n;if(Ua&&(Ua=!1,Jn=t,jl=i),s=t.pendingLanes,s===0&&(ir=null),RI(n.stateNode),gt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=Qh,Qh=null,t;return jl&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===Yh?co++:(co=0,Yh=t):co=0,Ir(),null}function Fi(){if(Jn!==null){var t=q_(jl),e=Dt.transition,n=ae;try{if(Dt.transition=null,ae=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,jl=0,se&6)throw Error(U(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:lo(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,S=f.return;if(rE(f),f===c){H=null;break}if(m!==null){m.return=S,H=m;break}H=S}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,H=R;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_u(9,l)}}catch(F){Se(l,l.return,F)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(se=i,Ir(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(cu,t)}catch{}r=!0}return r}finally{ae=n,Dt.transition=e}}return!1}function wg(t,e,n){e=Yi(n,e),e=qv(t,e,1),t=rr(t,e,1),e=at(),t!==null&&(Go(t,1,e),gt(t,e))}function Se(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Yi(n,t),t=Kv(e,t,1),e=rr(e,t,1),t=at(),e!==null&&(Go(e,1,t),gt(e,t));break}}e=e.return}}function XS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Pe()-df?$r(t,0):hf|=n),gt(t,e)}function fE(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=at();t=In(t,e),t!==null&&(Go(t,e,n),gt(t,n))}function ZS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fE(t,n)}function eR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),fE(t,n)}var pE;pE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,zS(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ge&&e.flags&1048576&&_v(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=qi(e,tt.current);Mi(e,n),i=sf(null,e,r,t,i,n);var s=of();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zd(e),i.updater=yu,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=zh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&qd(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nR(r),t=Mt(r,t),i){case 0:e=jh(null,e,r,t,n);break e;case 1:e=hg(null,e,r,t,n);break e;case 11:e=ug(null,e,r,t,n);break e;case 14:e=cg(null,e,r,Mt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),jh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),hg(t,e,r,i,n);case 3:e:{if(Jv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Sv(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(U(423)),e),e=dg(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(U(424)),e),e=dg(t,e,r,n,i);break e}else for(vt=nr(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,Ut=null,n=Tv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=Sn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return Rv(e),t===null&&Oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xh(r,i)?o=null:s!==null&&xh(r,s)&&(e.flags|=32),Yv(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Oh(e),null;case 13:return Xv(t,e,n);case 4:return ef(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ug(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Dl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!pt.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Vt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),cg(t,e,r,i,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),rl(t,e),e.tag=1,mt(r)?(t=!0,kl(e)):t=!1,Mi(e,n),Wv(e,r,i),Fh(e,r,i,n),zh(null,e,r,!0,t,n);case 19:return Zv(t,e,n);case 22:return Qv(t,e,n)}throw Error(U(156,e.tag))};function mE(t,e){return B_(t,e)}function tR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new tR(t,e,n,r)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nR(t){if(typeof t=="function")return gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Od)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return Hr(n.children,i,s,e);case Vd:o=8,i|=8;break;case lh:return t=Nt(12,n,e,i|2),t.elementType=lh,t.lanes=s,t;case uh:return t=Nt(13,n,e,i),t.elementType=uh,t.lanes=s,t;case ch:return t=Nt(19,n,e,i),t.elementType=ch,t.lanes=s,t;case R_:return Eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I_:o=10;break e;case S_:o=9;break e;case bd:o=11;break e;case Od:o=14;break e;case Bn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,r,i,s,o,l,u){return t=new rR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(s),t}function iR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gE(t){if(!t)return pr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(mt(n))return gv(t,n,e)}return e}function yE(t,e,n,r,i,s,o,l,u){return t=yf(n,r,!0,t,i,s,o,l,u),t.context=gE(null),n=t.current,r=at(),i=sr(n),s=vn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,Go(t,i,r),gt(t,r),t}function wu(t,e,n,r){var i=e.current,s=at(),o=sr(i);return n=gE(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Bt(t,i,o,s),el(t,i,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function sR(){return null}var _E=typeof reportError=="function"?reportError:function(t){console.error(t)};function vf(t){this._internalRoot=t}Tu.prototype.render=vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));wu(t,e,null,null)};Tu.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){wu(null,t,null,null)}),e[Tn]=null}};function Tu(t){this._internalRoot=t}Tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&J_(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function oR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bl(o);s.call(c)}}var o=yE(e,r,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[Tn]=o.current,Ao(t.nodeType===8?t.parentNode:t),Jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Bl(u);l.call(c)}}var u=yf(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=u,t[Tn]=u.current,Ao(t.nodeType===8?t.parentNode:t),Jr(function(){wu(e,u,n,r)}),u}function Su(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Bl(o);l.call(u)}}wu(e,o,t,i)}else o=oR(n,e,t,i,r);return Bl(o)}K_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(Fd(e,n|1),gt(e,Pe()),!(se&6)&&(Ji=Pe()+500,Ir()))}break;case 13:Jr(function(){var r=In(t,1);if(r!==null){var i=at();Bt(r,t,1,i)}}),_f(t,1)}};Ud=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=at();Bt(e,t,134217728,n)}_f(t,134217728)}};G_=function(t){if(t.tag===13){var e=sr(t),n=In(t,e);if(n!==null){var r=at();Bt(n,t,e,r)}_f(t,e)}};Q_=function(){return ae};Y_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Eh=function(t,e,n){switch(e){case"input":if(fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pu(r);if(!i)throw Error(U(90));C_(r),fh(r,i)}}}break;case"textarea":k_(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};L_=ff;M_=Jr;var aR={usingClientEntryPoint:!1,Events:[Yo,Ri,pu,b_,O_,ff]},zs={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lR={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j_(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||sR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{cu=ja.inject(lR),tn=ja}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aR;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(U(200));return iR(t,e,null,n)};It.createRoot=function(t,e){if(!Ef(t))throw Error(U(299));var n=!1,r="",i=_E;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,Ao(t.nodeType===8?t.parentNode:t),new vf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=j_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Jr(t)};It.hydrate=function(t,e,n){if(!Iu(e))throw Error(U(200));return Su(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_E;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yE(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,Ao(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tu(e)};It.render=function(t,e,n){if(!Iu(e))throw Error(U(200));return Su(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(U(40));return t._reactRootContainer?(Jr(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};It.unstable_batchedUpdates=ff;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Iu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Su(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function vE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vE)}catch(t){console.error(t)}}vE(),v_.exports=It;var uR=v_.exports,Sg=uR;oh.createRoot=Sg.createRoot,oh.hydrateRoot=Sg.hydrateRoot;/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Rg="popstate";function Ag(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function cR(t={}){function e(r,i){var c;let s=(c=i.state)==null?void 0:c.masked,{pathname:o,search:l,hash:u}=s||r.location;return Zh("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:Oo(i)}return dR(e,n,null,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hR(){return Math.random().toString(36).substring(2,10)}function Cg(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Zh(t,e,n=null,r,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ls(e):e,state:n,key:e&&e.key||r||hR(),unstable_mask:i}}function Oo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function dR(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let D=f(),E=D==null?null:D-c;c=D,u&&u({action:l,location:P.location,delta:E})}function m(D,E){l="PUSH";let v=Ag(D)?D:Zh(P.location,D,E);c=f()+1;let R=Cg(v,c),b=P.createHref(v.unstable_mask||v);try{o.pushState(R,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(b)}s&&u&&u({action:l,location:P.location,delta:1})}function S(D,E){l="REPLACE";let v=Ag(D)?D:Zh(P.location,D,E);c=f();let R=Cg(v,c),b=P.createHref(v.unstable_mask||v);o.replaceState(R,"",b),s&&u&&u({action:l,location:P.location,delta:0})}function C(D){return fR(D)}let P={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Rg,p),u=D,()=>{i.removeEventListener(Rg,p),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let E=C(D);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:S,go(D){return o.go(D)}};return P}function fR(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ye(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Oo(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function EE(t,e,n="/"){return pR(t,e,n,!1)}function pR(t,e,n,r){let i=typeof e=="string"?ls(e):e,s=Rn(i.pathname||"/",n);if(s==null)return null;let o=wE(t);mR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=AR(s);l=SR(o[u],c,r)}return l}function wE(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,c)=>{let f={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;ye(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let p=rn([r,f.relativePath]),m=n.concat(f);o.children&&o.children.length>0&&(ye(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),wE(o.children,e,m,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:TR(p,o.index),routesMeta:m})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let c of TE(o.path))s(o,l,!0,c)}),e}function TE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function mR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var gR=/^:[\w-]+$/,yR=3,_R=2,vR=1,ER=10,wR=-2,Pg=t=>t==="*";function TR(t,e){let n=t.split("/"),r=n.length;return n.some(Pg)&&(r+=wR),e&&(r+=_R),n.filter(i=>!Pg(i)).reduce((i,s)=>i+(gR.test(s)?yR:s===""?vR:ER),r)}function IR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=$l({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=$l({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:rn([s,p.pathname]),pathnameBase:xR(rn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=rn([s,p.pathnameBase]))}return o}function $l(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:p},m)=>{if(f==="*"){let C=l[m]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const S=l[m];return p&&!S?c[f]=void 0:c[f]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function RR(t,e=!1,n=!0){qt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u,c,f)=>{if(r.push({paramName:l,isOptional:u!=null}),u){let p=f.charAt(c+o.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Rn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var CR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function PR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ls(t):t,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=kg(n.substring(1),"/"):s=kg(n,e)):s=e,{pathname:s,search:NR(r),hash:DR(i)}}function kg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wf(t){let e=kR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Ru(t,e,n,r=!1){let i;typeof t=="string"?i=ls(t):(i={...t},ye(!i.pathname||!i.pathname.includes("?"),Bc("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Bc("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Bc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=PR(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var rn=t=>t.join("/").replace(/\/\/+/g,"/"),xR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,VR=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function bR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function OR(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var IE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function SE(t,e){let n=t;if(typeof n!="string"||!CR.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(IE)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=Rn(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{qt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var RE=["POST","PUT","PATCH","DELETE"];new Set(RE);var LR=["GET",...RE];new Set(LR);var us=N.createContext(null);us.displayName="DataRouter";var Au=N.createContext(null);Au.displayName="DataRouterState";var MR=N.createContext(!1),AE=N.createContext({isTransitioning:!1});AE.displayName="ViewTransition";var FR=N.createContext(new Map);FR.displayName="Fetchers";var UR=N.createContext(null);UR.displayName="Await";var Rt=N.createContext(null);Rt.displayName="Navigation";var Xo=N.createContext(null);Xo.displayName="Location";var dn=N.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Tf=N.createContext(null);Tf.displayName="RouteError";var CE="REACT_ROUTER_ERROR",jR="REDIRECT",zR="ROUTE_ERROR_RESPONSE";function BR(t){if(t.startsWith(`${CE}:${jR}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function $R(t){if(t.startsWith(`${CE}:${zR}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new VR(e.status,e.statusText,e.data)}catch{}}function HR(t,{relative:e}={}){ye(cs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=N.useContext(Rt),{hash:i,pathname:s,search:o}=Zo(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:rn([n,s])),r.createHref({pathname:l,search:o,hash:i})}function cs(){return N.useContext(Xo)!=null}function Nn(){return ye(cs(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Xo).location}var PE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kE(t){N.useContext(Rt).static||N.useLayoutEffect(t)}function If(){let{isDataRoute:t}=N.useContext(dn);return t?rA():WR()}function WR(){ye(cs(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(us),{basename:e,navigator:n}=N.useContext(Rt),{matches:r}=N.useContext(dn),{pathname:i}=Nn(),s=JSON.stringify(wf(r)),o=N.useRef(!1);return kE(()=>{o.current=!0}),N.useCallback((u,c={})=>{if(qt(o.current,PE),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=Ru(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:rn([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,s,i,t])}N.createContext(null);function Zo(t,{relative:e}={}){let{matches:n}=N.useContext(dn),{pathname:r}=Nn(),i=JSON.stringify(wf(n));return N.useMemo(()=>Ru(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function qR(t,e){return xE(t,e)}function xE(t,e,n){var D;ye(cs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=N.useContext(Rt),{matches:i}=N.useContext(dn),s=i[i.length-1],o=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",c=s&&s.route;{let E=c&&c.path||"";DE(l,!c||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let f=Nn(),p;if(e){let E=typeof e=="string"?ls(e):e;ye(u==="/"||((D=E.pathname)==null?void 0:D.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${E.pathname}" was given in the \`location\` prop.`),p=E}else p=f;let m=p.pathname||"/",S=m;if(u!=="/"){let E=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let C=EE(t,{pathname:S});qt(c||C!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),qt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=JR(C&&C.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:rn([u,r.encodeLocation?r.encodeLocation(E.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?u:rn([u,r.encodeLocation?r.encodeLocation(E.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),i,n);return e&&P?N.createElement(Xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...p},navigationType:"POP"}},P):P}function KR(){let t=nA(),e=bR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:s},"ErrorBoundary")," or"," ",N.createElement("code",{style:s},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,o)}var GR=N.createElement(KR,null),NE=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=$R(t.digest);n&&(t=n)}let e=t!==void 0?N.createElement(dn.Provider,{value:this.props.routeContext},N.createElement(Tf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?N.createElement(QR,{error:t},e):e}};NE.contextType=MR;var $c=new WeakMap;function QR({children:t,error:e}){let{basename:n}=N.useContext(Rt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=BR(e.digest);if(r){let i=$c.get(e);if(i)throw i;let s=SE(r.location,n);if(IE&&!$c.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw $c.set(e,o),o}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function YR({routeContext:t,match:e,children:n}){let r=N.useContext(us);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(dn.Provider,{value:t},n)}function JR(t,e=[],n){let r=n==null?void 0:n.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let i=t,s=r==null?void 0:r.errors;if(s!=null){let f=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);ye(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,f+1))}let o=!1,l=-1;if(n&&r){o=r.renderFallback;for(let f=0;f<i.length;f++){let p=i[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(l=f),p.route.id){let{loaderData:m,errors:S}=r,C=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||C){n.isStatic&&(o=!0),l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(f,p)=>{var m,S;u(f,{location:r.location,params:((S=(m=r.matches)==null?void 0:m[0])==null?void 0:S.params)??{},unstable_pattern:OR(r.matches),errorInfo:p})}:void 0;return i.reduceRight((f,p,m)=>{let S,C=!1,P=null,D=null;r&&(S=s&&p.route.id?s[p.route.id]:void 0,P=p.route.errorElement||GR,o&&(l<0&&m===0?(DE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,D=null):l===m&&(C=!0,D=p.route.hydrateFallbackElement||null)));let E=e.concat(i.slice(0,m+1)),v=()=>{let R;return S?R=P:C?R=D:p.route.Component?R=N.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,N.createElement(YR,{match:p,routeContext:{outlet:f,matches:E,isDataRoute:r!=null},children:R})};return r&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?N.createElement(NE,{location:r.location,revalidation:r.revalidation,component:P,error:S,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:c}):v()},null)}function Sf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XR(t){let e=N.useContext(us);return ye(e,Sf(t)),e}function ZR(t){let e=N.useContext(Au);return ye(e,Sf(t)),e}function eA(t){let e=N.useContext(dn);return ye(e,Sf(t)),e}function Rf(t){let e=eA(t),n=e.matches[e.matches.length-1];return ye(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function tA(){return Rf("useRouteId")}function nA(){var r;let t=N.useContext(Tf),e=ZR("useRouteError"),n=Rf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function rA(){let{router:t}=XR("useNavigate"),e=Rf("useNavigate"),n=N.useRef(!1);return kE(()=>{n.current=!0}),N.useCallback(async(i,s={})=>{qt(n.current,PE),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var xg={};function DE(t,e,n){!e&&!xg[t]&&(xg[t]=!0,qt(!1,n))}N.memo(iA);function iA({routes:t,future:e,state:n,isStatic:r,onError:i}){return xE(t,void 0,{state:n,isStatic:r,onError:i})}function Hc({to:t,replace:e,state:n,relative:r}){ye(cs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=N.useContext(Rt);qt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=N.useContext(dn),{pathname:o}=Nn(),l=If(),u=Ru(t,wf(s),o,r==="path"),c=JSON.stringify(u);return N.useEffect(()=>{l(JSON.parse(c),{replace:e,state:n,relative:r})},[l,c,r,e,n]),null}function Gs(t){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sA({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,unstable_useTransitions:o}){ye(!cs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:l,navigator:i,static:s,unstable_useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=ls(n));let{pathname:c="/",search:f="",hash:p="",state:m=null,key:S="default",unstable_mask:C}=n,P=N.useMemo(()=>{let D=Rn(c,l);return D==null?null:{location:{pathname:D,search:f,hash:p,state:m,key:S,unstable_mask:C},navigationType:r}},[l,c,f,p,m,S,r,C]);return qt(P!=null,`<Router basename="${l}"> is not able to match the URL "${c}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:N.createElement(Rt.Provider,{value:u},N.createElement(Xo.Provider,{children:e,value:P}))}function oA({children:t,location:e}){return qR(ed(t),e)}function ed(t,e=[]){let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,ed(r.props.children,s));return}ye(r.type===Gs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ed(r.props.children,s)),n.push(o)}),n}var al="get",ll="application/x-www-form-urlencoded";function Cu(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function aA(t){return Cu(t)&&t.tagName.toLowerCase()==="button"}function lA(t){return Cu(t)&&t.tagName.toLowerCase()==="form"}function uA(t){return Cu(t)&&t.tagName.toLowerCase()==="input"}function cA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hA(t,e){return t.button===0&&(!e||e==="_self")&&!cA(t)}var za=null;function dA(){if(za===null)try{new FormData(document.createElement("form"),0),za=!1}catch{za=!0}return za}var fA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wc(t){return t!=null&&!fA.has(t)?(qt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ll}"`),null):t}function pA(t,e){let n,r,i,s,o;if(lA(t)){let l=t.getAttribute("action");r=l?Rn(l,e):null,n=t.getAttribute("method")||al,i=Wc(t.getAttribute("enctype"))||ll,s=new FormData(t)}else if(aA(t)||uA(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?Rn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||al,i=Wc(t.getAttribute("formenctype"))||Wc(l.getAttribute("enctype"))||ll,s=new FormData(l,t),!dA()){let{name:c,type:f,value:p}=t;if(f==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Cu(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=al,r=null,i=ll,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Af(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mA(t,e,n,r){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:e&&Rn(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${r}`,i}async function gA(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yA(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function _A(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await gA(s,n);return o.links?o.links():[]}return[]}));return TA(r.flat(1).filter(yA).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Ng(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,l=(u,c)=>{var f;return n[c].pathname!==u.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||l(u,c)):s==="data"?e.filter((u,c)=>{var p;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function vA(t,e,{includeHydrateFallback:n}={}){return EA(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function EA(t){return[...new Set(t)]}function wA(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function TA(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(wA(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function VE(){let t=N.useContext(us);return Af(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function IA(){let t=N.useContext(Au);return Af(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Cf=N.createContext(void 0);Cf.displayName="FrameworkContext";function bE(){let t=N.useContext(Cf);return Af(t,"You must render this element inside a <HydratedRouter> element"),t}function SA(t,e){let n=N.useContext(Cf),[r,i]=N.useState(!1),[s,o]=N.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:p}=e,m=N.useRef(null);N.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let P=E=>{E.forEach(v=>{o(v.isIntersecting)})},D=new IntersectionObserver(P,{threshold:.5});return m.current&&D.observe(m.current),()=>{D.disconnect()}}},[t]),N.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let S=()=>{i(!0)},C=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:Bs(l,S),onBlur:Bs(u,C),onMouseEnter:Bs(c,S),onMouseLeave:Bs(f,C),onTouchStart:Bs(p,S)}]:[!1,m,{}]}function Bs(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function RA({page:t,...e}){let{router:n}=VE(),r=N.useMemo(()=>EE(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?N.createElement(CA,{page:t,matches:r,...e}):null}function AA(t){let{manifest:e,routeModules:n}=bE(),[r,i]=N.useState([]);return N.useEffect(()=>{let s=!1;return _A(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function CA({page:t,matches:e,...n}){let r=Nn(),{future:i,manifest:s,routeModules:o}=bE(),{basename:l}=VE(),{loaderData:u,matches:c}=IA(),f=N.useMemo(()=>Ng(t,e,c,s,r,"data"),[t,e,c,s,r]),p=N.useMemo(()=>Ng(t,e,c,s,r,"assets"),[t,e,c,s,r]),m=N.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let P=new Set,D=!1;if(e.forEach(v=>{var b;let R=s.routes[v.route.id];!R||!R.hasLoader||(!f.some(F=>F.route.id===v.route.id)&&v.route.id in u&&((b=o[v.route.id])!=null&&b.shouldRevalidate)||R.hasClientLoader?D=!0:P.add(v.route.id))}),P.size===0)return[];let E=mA(t,l,i.unstable_trailingSlashAwareDataRequests,"data");return D&&P.size>0&&E.searchParams.set("_routes",e.filter(v=>P.has(v.route.id)).map(v=>v.route.id).join(",")),[E.pathname+E.search]},[l,i.unstable_trailingSlashAwareDataRequests,u,r,s,f,e,t,o]),S=N.useMemo(()=>vA(p,s),[p,s]),C=AA(p);return N.createElement(N.Fragment,null,m.map(P=>N.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),S.map(P=>N.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),C.map(({key:P,link:D})=>N.createElement("link",{key:P,nonce:n.nonce,...D,crossOrigin:D.crossOrigin??n.crossOrigin})))}function PA(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var kA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kA&&(window.__reactRouterVersion="7.13.2")}catch{}function xA({basename:t,children:e,unstable_useTransitions:n,window:r}){let i=N.useRef();i.current==null&&(i.current=cR({window:r,v5Compat:!0}));let s=i.current,[o,l]=N.useState({action:s.action,location:s.location}),u=N.useCallback(c=>{n===!1?l(c):N.startTransition(()=>l(c))},[n]);return N.useLayoutEffect(()=>s.listen(u),[s,u]),N.createElement(sA,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,unstable_useTransitions:n})}var OE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=N.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,unstable_mask:l,state:u,target:c,to:f,preventScrollReset:p,viewTransition:m,unstable_defaultShouldRevalidate:S,...C},P){let{basename:D,navigator:E,unstable_useTransitions:v}=N.useContext(Rt),R=typeof f=="string"&&OE.test(f),b=SE(f,D);f=b.to;let F=HR(f,{relative:i}),j=Nn(),_=null;if(l){let Re=Ru(l,[],j.unstable_mask?j.unstable_mask.pathname:"/",!0);D!=="/"&&(Re.pathname=Re.pathname==="/"?D:rn([D,Re.pathname])),_=E.createHref(Re)}let[g,w,T]=SA(r,C),A=bA(f,{replace:o,unstable_mask:l,state:u,target:c,preventScrollReset:p,relative:i,viewTransition:m,unstable_defaultShouldRevalidate:S,unstable_useTransitions:v});function k(Re){e&&e(Re),Re.defaultPrevented||A(Re)}let I=!(b.isExternal||s),_e=N.createElement("a",{...C,...T,href:(I?_:void 0)||b.absoluteURL||F,onClick:I?k:e,ref:PA(P,w),target:c,"data-discover":!R&&n==="render"?"true":void 0});return g&&!R?N.createElement(N.Fragment,null,_e,N.createElement(RA,{page:F})):_e});en.displayName="Link";var NA=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...c},f){let p=Zo(o,{relative:c.relative}),m=Nn(),S=N.useContext(Au),{navigator:C,basename:P}=N.useContext(Rt),D=S!=null&&UA(p)&&l===!0,E=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,v=m.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(v=v.toLowerCase(),R=R?R.toLowerCase():null,E=E.toLowerCase()),R&&P&&(R=Rn(R,P)||R);const b=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let F=v===E||!i&&v.startsWith(E)&&v.charAt(b)==="/",j=R!=null&&(R===E||!i&&R.startsWith(E)&&R.charAt(E.length)==="/"),_={isActive:F,isPending:j,isTransitioning:D},g=F?e:void 0,w;typeof r=="function"?w=r(_):w=[r,F?"active":null,j?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let T=typeof s=="function"?s(_):s;return N.createElement(en,{...c,"aria-current":g,className:w,ref:f,style:T,to:o,viewTransition:l},typeof u=="function"?u(_):u)});NA.displayName="NavLink";var DA=N.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=al,action:l,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:p,unstable_defaultShouldRevalidate:m,...S},C)=>{let{unstable_useTransitions:P}=N.useContext(Rt),D=MA(),E=FA(l,{relative:c}),v=o.toLowerCase()==="get"?"get":"post",R=typeof l=="string"&&OE.test(l),b=F=>{if(u&&u(F),F.defaultPrevented)return;F.preventDefault();let j=F.nativeEvent.submitter,_=(j==null?void 0:j.getAttribute("formmethod"))||o,g=()=>D(j||F.currentTarget,{fetcherKey:e,method:_,navigate:n,replace:i,state:s,relative:c,preventScrollReset:f,viewTransition:p,unstable_defaultShouldRevalidate:m});P&&n!==!1?N.startTransition(()=>g()):g()};return N.createElement("form",{ref:C,method:v,action:E,onSubmit:r?u:b,...S,"data-discover":!R&&t==="render"?"true":void 0})});DA.displayName="Form";function VA(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LE(t){let e=N.useContext(us);return ye(e,VA(t)),e}function bA(t,{target:e,replace:n,unstable_mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:l,unstable_defaultShouldRevalidate:u,unstable_useTransitions:c}={}){let f=If(),p=Nn(),m=Zo(t,{relative:o});return N.useCallback(S=>{if(hA(S,e)){S.preventDefault();let C=n!==void 0?n:Oo(p)===Oo(m),P=()=>f(t,{replace:C,unstable_mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:l,unstable_defaultShouldRevalidate:u});c?N.startTransition(()=>P()):P()}},[p,f,m,n,r,i,e,t,s,o,l,u,c])}var OA=0,LA=()=>`__${String(++OA)}__`;function MA(){let{router:t}=LE("useSubmit"),{basename:e}=N.useContext(Rt),n=tA(),r=t.fetch,i=t.navigate;return N.useCallback(async(s,o={})=>{let{action:l,method:u,encType:c,formData:f,body:p}=pA(s,e);if(o.navigate===!1){let m=o.fetcherKey||LA();await r(m,n,o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||u,formEncType:o.encType||c,flushSync:o.flushSync})}else await i(o.action||l,{unstable_defaultShouldRevalidate:o.unstable_defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||u,formEncType:o.encType||c,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function FA(t,{relative:e}={}){let{basename:n}=N.useContext(Rt),r=N.useContext(dn);ye(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Zo(t||".",{relative:e})},o=Nn();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:rn([n,s.pathname])),Oo(s)}function UA(t,{relative:e}={}){let n=N.useContext(AE);ye(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=LE("useViewTransitionState"),i=Zo(t,{relative:e});if(!n.isTransitioning)return!1;let s=Rn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Rn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return $l(i.pathname,o)!=null||$l(i.pathname,s)!=null}const jA=()=>{};var Dg={};/**
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
 */const ME=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},FE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ME(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new BA;const m=s<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $A=function(t){const e=ME(t);return FE.encodeByteArray(e,!0)},Hl=function(t){return $A(t).replace(/\./g,"")},UE=function(t){try{return FE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WA=()=>HA().__FIREBASE_DEFAULTS__,qA=()=>{if(typeof process>"u"||typeof Dg>"u")return;const t=Dg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&UE(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return jA()||WA()||qA()||KA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jE=t=>{var e,n;return(n=(e=Pu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},GA=t=>{const e=jE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zE=()=>{var t;return(t=Pu())==null?void 0:t.config},BE=t=>{var e;return(e=Pu())==null?void 0:e[`_${t}`]};/**
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
 */class QA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function YA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function XA(){var e;const t=(e=Pu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nC(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rC(){return!XA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iC(){try{return typeof indexedDB=="object"}catch{return!1}}function sC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const oC="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oC,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function aC(t,e){return t.replace(lC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lC=/\{\$([^}]+)}/g;function uC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vg(s)&&Vg(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vg(t){return t!==null&&typeof t=="object"}/**
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
 */function ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cC(t,e){const n=new hC(t,e);return n.subscribe.bind(n)}class hC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qc),i.error===void 0&&(i.error=qc),i.complete===void 0&&(i.complete=qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function na(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $E(t){return(await fetch(t,{credentials:"include"})).ok}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class fC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mC(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pC(t){return t===Fr?void 0:t}function mC(t){return t.instantiationMode==="EAGER"}/**
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
 */class gC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const yC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},_C=te.INFO,vC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},EC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pf{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=EC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const wC=(t,e)=>e.some(n=>t instanceof n);let bg,Og;function TC(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IC(){return Og||(Og=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HE=new WeakMap,td=new WeakMap,WE=new WeakMap,Kc=new WeakMap,kf=new WeakMap;function SC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HE.set(n,t)}).catch(()=>{}),kf.set(e,t),e}function RC(t){if(td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});td.set(t,e)}let nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||WE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AC(t){nd=t(nd)}function CC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return WE.set(r,e.sort?e.sort():[e]),ar(r)}:IC().includes(t)?function(...e){return t.apply(Gc(this),e),ar(HE.get(this))}:function(...e){return ar(t.apply(Gc(this),e))}}function PC(t){return typeof t=="function"?CC(t):(t instanceof IDBTransaction&&RC(t),wC(t,TC())?new Proxy(t,nd):t)}function ar(t){if(t instanceof IDBRequest)return SC(t);if(Kc.has(t))return Kc.get(t);const e=PC(t);return e!==t&&(Kc.set(t,e),kf.set(e,t)),e}const Gc=t=>kf.get(t);function kC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ar(o.result),u.oldVersion,u.newVersion,ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const xC=["get","getKey","getAll","getAllKeys","count"],NC=["put","add","delete","clear"],Qc=new Map;function Lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Qc.set(e,s),s}AC(t=>({...t,get:(e,n,r)=>Lg(e,n)||t.get(e,n,r),has:(e,n)=>!!Lg(e,n)||t.has(e,n)}));/**
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
 */class DC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",Mg="0.14.10";/**
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
 */const An=new Pf("@firebase/app"),bC="@firebase/app-compat",OC="@firebase/analytics-compat",LC="@firebase/analytics",MC="@firebase/app-check-compat",FC="@firebase/app-check",UC="@firebase/auth",jC="@firebase/auth-compat",zC="@firebase/database",BC="@firebase/data-connect",$C="@firebase/database-compat",HC="@firebase/functions",WC="@firebase/functions-compat",qC="@firebase/installations",KC="@firebase/installations-compat",GC="@firebase/messaging",QC="@firebase/messaging-compat",YC="@firebase/performance",JC="@firebase/performance-compat",XC="@firebase/remote-config",ZC="@firebase/remote-config-compat",eP="@firebase/storage",tP="@firebase/storage-compat",nP="@firebase/firestore",rP="@firebase/ai",iP="@firebase/firestore-compat",sP="firebase",oP="12.11.0";/**
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
 */const id="[DEFAULT]",aP={[rd]:"fire-core",[bC]:"fire-core-compat",[LC]:"fire-analytics",[OC]:"fire-analytics-compat",[FC]:"fire-app-check",[MC]:"fire-app-check-compat",[UC]:"fire-auth",[jC]:"fire-auth-compat",[zC]:"fire-rtdb",[BC]:"fire-data-connect",[$C]:"fire-rtdb-compat",[HC]:"fire-fn",[WC]:"fire-fn-compat",[qC]:"fire-iid",[KC]:"fire-iid-compat",[GC]:"fire-fcm",[QC]:"fire-fcm-compat",[YC]:"fire-perf",[JC]:"fire-perf-compat",[XC]:"fire-rc",[ZC]:"fire-rc-compat",[eP]:"fire-gcs",[tP]:"fire-gcs-compat",[nP]:"fire-fst",[iP]:"fire-fst-compat",[rP]:"fire-vertex","fire-js":"fire-js",[sP]:"fire-js-all"};/**
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
 */const Wl=new Map,lP=new Map,sd=new Map;function Fg(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(sd.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;sd.set(e,t);for(const n of Wl.values())Fg(n,t);for(const n of lP.values())Fg(n,t);return!0}function xf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new ea("app","Firebase",uP);/**
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
 */class cP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=oP;function qE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:id,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=zE()),!n)throw lr.create("no-options");const s=Wl.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new gC(i);for(const u of sd.values())o.addComponent(u);const l=new cP(n,r,o);return Wl.set(i,l),l}function KE(t=id){const e=Wl.get(t);if(!e&&t===id&&zE())return qE();if(!e)throw lr.create("no-app",{appName:t});return e}function ur(t,e,n){let r=aP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(o.join(" "));return}Xi(new Zr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hP="firebase-heartbeat-database",dP=1,Lo="firebase-heartbeat-store";let Yc=null;function GE(){return Yc||(Yc=kC(hP,dP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function fP(t){try{const n=(await GE()).transaction(Lo),r=await n.objectStore(Lo).get(QE(t));return await n.done,r}catch(e){if(e instanceof Dn)An.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Ug(t,e){try{const r=(await GE()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,QE(t)),await r.done}catch(n){if(n instanceof Dn)An.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pP=1024,mP=30;class gP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _P(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>mP){const o=vP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jg(),{heartbeatsToSend:r,unsentEntries:i}=yP(this._heartbeatsCache.heartbeats),s=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function jg(){return new Date().toISOString().substring(0,10)}function yP(t,e=pP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _P{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iC()?sC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ug(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ug(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zg(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}function vP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function EP(t){Xi(new Zr("platform-logger",e=>new DC(e),"PRIVATE")),Xi(new Zr("heartbeat",e=>new gP(e),"PRIVATE")),ur(rd,Mg,t),ur(rd,Mg,"esm2020"),ur("fire-js","")}EP("");var wP="firebase",TP="12.11.0";/**
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
 */ur(wP,TP,"app");function YE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IP=YE,JE=new ea("auth","Firebase",YE());/**
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
 */const ql=new Pf("@firebase/auth");function SP(t,...e){ql.logLevel<=te.WARN&&ql.warn(`Auth (${hs}): ${t}`,...e)}function ul(t,...e){ql.logLevel<=te.ERROR&&ql.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw Nf(t,...e)}function sn(t,...e){return Nf(t,...e)}function XE(t,e,n){const r={...IP(),[e]:n};return new ea("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return XE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function G(t,e,...n){if(!t)throw Nf(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Cn(t,e){t||yn(e)}/**
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
 */function od(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function RP(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function AP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RP()||eC()||"connection"in navigator)?navigator.onLine:!0}function CP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=JA()||tC()}get(){return AP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Df(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ZE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xP=new ra(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Rr(t,e,n,r,i={}){return ew(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ta({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return ZA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&na(t.emulatorConfig.host)&&(c.credentials="include"),ZE.fetch()(await tw(t,t.config.apiHost,n,l),c)})}async function ew(t,e,n){t._canInitEmulator=!1;const r={...PP,...e};try{const i=new DP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw XE(t,f,c);Kt(t,f)}}catch(i){if(i instanceof Dn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function ia(t,e,n,r,i={}){const s=await Rr(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function tw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Df(t.config,i):`${t.config.apiScheme}://${i}`;return kP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function NP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),xP.get())})}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function $g(t){return t!==void 0&&t.enterprise!==void 0}class VP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bP(t,e){return Rr(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
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
 */async function OP(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function Kl(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Vf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ho(Jc(i.auth_time)),issuedAtTime:ho(Jc(i.iat)),expirationTime:ho(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function Vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=UE(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hg(t){const e=Vf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&MP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ho(this.lastLoginAt),this.creationTime=ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Mo(t,Kl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?nw(i.providerUserInfo):[],o=jP(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ad(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function UP(t){const e=rt(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function zP(t,e){const n=await ew(t,{},async()=>{const r=ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await tw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&na(t.emulatorConfig.host)&&(u.credentials="include"),ZE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BP(t,e){return Rr(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function zn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new FP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ad(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LP(this,e)}reload(){return UP(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Mo(this,OP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:S,providerData:C,stsTokenManager:P}=n;G(p&&P,e,"internal-error");const D=Ui.fromJSON(this.name,P);G(typeof p=="string",e,"internal-error"),zn(r,e.name),zn(i,e.name),G(typeof m=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),zn(s,e.name),zn(o,e.name),zn(l,e.name),zn(u,e.name),zn(c,e.name),zn(f,e.name);const E=new jt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return C&&Array.isArray(C)&&(E.providerData=C.map(v=>({...v}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ui;l.updateFromIdToken(r);const u=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ad(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Wg=new Map;function _n(t){Cn(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
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
 */class rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rw.type="NONE";const qg=rw;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Kl(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(_n(qg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||_n(qg);const o=cl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await Kl(e,{idToken:f}).catch(()=>{});if(!m)break;p=await jt._fromGetAccountInfoResponse(e,m,f)}else p=jt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ji(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function Kg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uw(e))return"Blackberry";if(cw(e))return"Webos";if(sw(e))return"Safari";if((e.includes("chrome/")||ow(e))&&!e.includes("edge/"))return"Chrome";if(lw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iw(t=nt()){return/firefox\//i.test(t)}function sw(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ow(t=nt()){return/crios\//i.test(t)}function aw(t=nt()){return/iemobile/i.test(t)}function lw(t=nt()){return/android/i.test(t)}function uw(t=nt()){return/blackberry/i.test(t)}function cw(t=nt()){return/webos/i.test(t)}function bf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $P(t=nt()){var e;return bf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function HP(){return nC()&&document.documentMode===10}function hw(t=nt()){return bf(t)||lw(t)||cw(t)||uw(t)||/windows phone/i.test(t)||aw(t)}/**
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
 */function dw(t,e=[]){let n;switch(t){case"Browser":n=Kg(nt());break;case"Worker":n=`${Kg(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
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
 */class WP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function qP(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const KP=6;class GP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??KP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class QP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kl(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(En(this));const n=e?rt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qP(this),n=new GP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ea("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&SP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ai(t){return rt(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=cC(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YP(t){ku=t}function fw(t){return ku.loadJS(t)}function JP(){return ku.recaptchaEnterpriseScript}function XP(){return ku.gapiScript}function ZP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ek{constructor(){this.enterprise=new tk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nk="recaptcha-enterprise",pw="NO_RECAPTCHA";class rk{constructor(e){this.type=nk,this.auth=ai(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{bP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new VP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;$g(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(pw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ek().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$g(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=JP();u.length!==0&&(u+=l),fw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Qg(t,e,n,r=!1,i=!1){const s=new rk(t);let o;if(i)o=pw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ld(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Qg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function ik(t,e){const n=xf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function sk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ok(t,e,n){const r=ai(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=mw(e),{host:o,port:l}=ak(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Xr(c,r.config.emulator)&&Xr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,na(o)?$E(`${s}//${o}${u}`):lk()}function mw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ak(t){const e=mw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yg(o)}}}function Yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Of{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function uk(t,e){return Rr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ck(t,e){return ia(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
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
 */async function hk(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function dk(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
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
 */class Fo extends Of{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,n,"signInWithPassword",ck);case"emailLink":return hk(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,r,"signUpPassword",uk);case"emailLink":return dk(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zi(t,e){return ia(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
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
 */const fk="http://localhost";class ei extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:fk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ta(n)}return e}}/**
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
 */function pk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mk(t){const e=Qs(Ys(t)).link,n=e?Qs(Ys(e)).deep_link_id:null,r=Qs(Ys(t)).deep_link_id;return(r?Qs(Ys(r)).link:null)||r||n||e||t}class Lf{constructor(e){const n=Qs(Ys(e)),r=n.apiKey??null,i=n.oobCode??null,s=pk(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=mk(e);try{return new Lf(n)}catch{return null}}}/**
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
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return Fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Lf.parseLink(n);return G(r,"argument-error"),Fo._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sa extends gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends sa{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class Gn extends sa{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Qn extends sa{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function gk(t,e){return ia(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
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
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=Jg(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jg(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ql extends Dn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ql(e,n,r,i)}}function yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,s,e,r):s})}async function yk(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
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
 */async function _k(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await Mo(t,yw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Vf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function _w(t,e,n=!1){if(kt(t.app))return Promise.reject(En(t));const r="signIn",i=await yw(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vk(t,e){return _w(ai(t),e)}/**
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
 */async function vw(t){const e=ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ek(t,e,n){if(kt(t.app))return Promise.reject(En(t));const r=ai(t),o=await ld(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vw(t),u}),l=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function wk(t,e,n){return kt(t.app)?Promise.reject(En(t)):vk(rt(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vw(t),r})}function Tk(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Ik(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}const Yl="__sak";/**
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
 */class Ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Sk=1e3,Rk=10;class ww extends Ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ww.type="LOCAL";const Ak=ww;/**
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
 */class Tw extends Ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tw.type="SESSION";const Iw=Tw;/**
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
 */function Ck(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Ck(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
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
 */function Mf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Mf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function kk(t){on().location.href=t}/**
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
 */function Sw(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Dk(){return Sw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",Vk=1,Jl="firebaseLocalStorage",Aw="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function bk(){const t=indexedDB.deleteDatabase(Rw);return new oa(t).toPromise()}function ud(){const t=indexedDB.open(Rw,Vk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:Aw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await bk(),e(await ud()))})})}async function Xg(t,e,n){const r=Nu(t,!0).put({[Aw]:e,value:n});return new oa(r).toPromise()}async function Ok(t,e){const n=Nu(t,!1).get(e),r=await new oa(n).toPromise();return r===void 0?null:r.value}function Zg(t,e){const n=Nu(t,!0).delete(e);return new oa(n).toPromise()}const Lk=800,Mk=3;class Cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(Dk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await xk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ud();return await Xg(e,Yl,"1"),await Zg(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ok(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nu(i,!1).getAll();return new oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cw.type="LOCAL";const Fk=Cw;new ra(3e4,6e4);/**
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
 */function Uk(t,e){return e?_n(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ff extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jk(t){return _w(t.auth,new Ff(t),t.bypassAuthState)}function zk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),_k(n,new Ff(t),t.bypassAuthState)}async function Bk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),yk(n,new Ff(t),t.bypassAuthState)}/**
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
 */class Pw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jk;case"linkViaPopup":case"linkViaRedirect":return Bk;case"reauthViaPopup":case"reauthViaRedirect":return zk;default:Kt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $k=new ra(2e3,1e4);class Di extends Pw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$k.get())};e()}}Di.currentPopupAction=null;/**
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
 */const Hk="pendingRedirect",hl=new Map;class Wk extends Pw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await qk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qk(t,e){const n=Qk(e),r=Gk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Kk(t,e){hl.set(t._key(),e)}function Gk(t){return _n(t._redirectPersistence)}function Qk(t){return cl(Hk,t.config.apiKey,t.name)}async function Yk(t,e,n=!1){if(kt(t.app))return Promise.reject(En(t));const r=ai(t),i=Uk(r,e),o=await new Wk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Jk=10*60*1e3;class Xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kw(t);default:return!1}}/**
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
 */async function e1(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
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
 */const t1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n1=/^https?/;async function r1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e1(t);for(const n of e)try{if(i1(n))return}catch{}Kt(t,"unauthorized-domain")}function i1(t){const e=od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!n1.test(n))return!1;if(t1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const s1=new ra(3e4,6e4);function ty(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function o1(t){return new Promise((e,n)=>{var i,s,o;function r(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),n(sn(t,"network-request-failed"))},timeout:s1.get()})}if((s=(i=on().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=on().gapi)!=null&&o.load)r();else{const l=ZP("iframefcb");return on()[l]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},fw(`${XP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw dl=null,e})}let dl=null;function a1(t){return dl=dl||o1(t),dl}/**
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
 */const l1=new ra(5e3,15e3),u1="__/auth/iframe",c1="emulator/auth/iframe",h1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f1(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,c1):`https://${t.config.authDomain}/${u1}`,r={apiKey:e.apiKey,appName:t.name,v:hs},i=d1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ta(r).slice(1)}`}async function p1(t){const e=await a1(t),n=on().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:f1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},l1.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const m1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g1=500,y1=600,_1="_blank",v1="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function E1(t,e,n,r=g1,i=y1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...m1,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(l=ow(c)?_1:n),iw(c)&&(e=e||v1,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,C])=>`${m}${S}=${C},`,"");if($P(c)&&l!=="_self")return w1(e||"",l),new ny(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new ny(p)}function w1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const T1="__/auth/handler",I1="emulator/auth/handler",S1=encodeURIComponent("fac");async function ry(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:i};if(e instanceof gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof sa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${S1}=${encodeURIComponent(u)}`:"";return`${R1(t)}?${ta(l).slice(1)}${c}`}function R1({config:t}){return t.emulator?Df(t,I1):`https://${t.authDomain}/${T1}`}/**
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
 */const Xc="webStorageSupport";class A1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=Yk,this._overrideRedirectResult=Kk}async _openPopup(e,n,r,i){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ry(e,n,r,od(),i);return E1(e,s,Mf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ry(e,n,r,od(),i);return kk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await p1(e),r=new Xk(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Xc];s!==void 0&&n(!!s),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hw()||sw()||bf()}}const C1=A1;var iy="@firebase/auth",sy="1.12.2";/**
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
 */class P1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function k1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x1(t){Xi(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dw(t)},c=new QP(r,i,s,u);return sk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new Zr("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(r=>new P1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(iy,sy,k1(t)),ur(iy,sy,"esm2020")}/**
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
 */const N1=5*60,D1=BE("authIdTokenMaxAge")||N1;let oy=null;const V1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>D1)return;const i=n==null?void 0:n.token;oy!==i&&(oy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function b1(t=KE()){const e=xf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ik(t,{popupRedirectResolver:C1,persistence:[Fk,Ak,Iw]}),r=BE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=V1(s.toString());Ik(n,o,()=>o(n.currentUser)),Tk(n,l=>o(l))}}const i=jE("auth");return i&&ok(n,`http://${i}`),n}function O1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}YP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",O1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x1("Browser");var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.F=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.D=function(T,A,k){for(var I=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)I[_e-2]=arguments[_e];return g.prototype[A].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);const T=Array(16);if(typeof g=="string")for(var A=0;A<16;++A)T[A]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(A=0;A<16;++A)T[A]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],A=_.g[2];let k=_.g[3],I;I=g+(k^w&(A^k))+T[0]+3614090360&4294967295,g=w+(I<<7&4294967295|I>>>25),I=k+(A^g&(w^A))+T[1]+3905402710&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(w^k&(g^w))+T[2]+606105819&4294967295,A=k+(I<<17&4294967295|I>>>15),I=w+(g^A&(k^g))+T[3]+3250441966&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(k^w&(A^k))+T[4]+4118548399&4294967295,g=w+(I<<7&4294967295|I>>>25),I=k+(A^g&(w^A))+T[5]+1200080426&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(w^k&(g^w))+T[6]+2821735955&4294967295,A=k+(I<<17&4294967295|I>>>15),I=w+(g^A&(k^g))+T[7]+4249261313&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(k^w&(A^k))+T[8]+1770035416&4294967295,g=w+(I<<7&4294967295|I>>>25),I=k+(A^g&(w^A))+T[9]+2336552879&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(w^k&(g^w))+T[10]+4294925233&4294967295,A=k+(I<<17&4294967295|I>>>15),I=w+(g^A&(k^g))+T[11]+2304563134&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(k^w&(A^k))+T[12]+1804603682&4294967295,g=w+(I<<7&4294967295|I>>>25),I=k+(A^g&(w^A))+T[13]+4254626195&4294967295,k=g+(I<<12&4294967295|I>>>20),I=A+(w^k&(g^w))+T[14]+2792965006&4294967295,A=k+(I<<17&4294967295|I>>>15),I=w+(g^A&(k^g))+T[15]+1236535329&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(A^k&(w^A))+T[1]+4129170786&4294967295,g=w+(I<<5&4294967295|I>>>27),I=k+(w^A&(g^w))+T[6]+3225465664&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(k^g))+T[11]+643717713&4294967295,A=k+(I<<14&4294967295|I>>>18),I=w+(k^g&(A^k))+T[0]+3921069994&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(A^k&(w^A))+T[5]+3593408605&4294967295,g=w+(I<<5&4294967295|I>>>27),I=k+(w^A&(g^w))+T[10]+38016083&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(k^g))+T[15]+3634488961&4294967295,A=k+(I<<14&4294967295|I>>>18),I=w+(k^g&(A^k))+T[4]+3889429448&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(A^k&(w^A))+T[9]+568446438&4294967295,g=w+(I<<5&4294967295|I>>>27),I=k+(w^A&(g^w))+T[14]+3275163606&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(k^g))+T[3]+4107603335&4294967295,A=k+(I<<14&4294967295|I>>>18),I=w+(k^g&(A^k))+T[8]+1163531501&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(A^k&(w^A))+T[13]+2850285829&4294967295,g=w+(I<<5&4294967295|I>>>27),I=k+(w^A&(g^w))+T[2]+4243563512&4294967295,k=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(k^g))+T[7]+1735328473&4294967295,A=k+(I<<14&4294967295|I>>>18),I=w+(k^g&(A^k))+T[12]+2368359562&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(w^A^k)+T[5]+4294588738&4294967295,g=w+(I<<4&4294967295|I>>>28),I=k+(g^w^A)+T[8]+2272392833&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^w)+T[11]+1839030562&4294967295,A=k+(I<<16&4294967295|I>>>16),I=w+(A^k^g)+T[14]+4259657740&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(w^A^k)+T[1]+2763975236&4294967295,g=w+(I<<4&4294967295|I>>>28),I=k+(g^w^A)+T[4]+1272893353&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^w)+T[7]+4139469664&4294967295,A=k+(I<<16&4294967295|I>>>16),I=w+(A^k^g)+T[10]+3200236656&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(w^A^k)+T[13]+681279174&4294967295,g=w+(I<<4&4294967295|I>>>28),I=k+(g^w^A)+T[0]+3936430074&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^w)+T[3]+3572445317&4294967295,A=k+(I<<16&4294967295|I>>>16),I=w+(A^k^g)+T[6]+76029189&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(w^A^k)+T[9]+3654602809&4294967295,g=w+(I<<4&4294967295|I>>>28),I=k+(g^w^A)+T[12]+3873151461&4294967295,k=g+(I<<11&4294967295|I>>>21),I=A+(k^g^w)+T[15]+530742520&4294967295,A=k+(I<<16&4294967295|I>>>16),I=w+(A^k^g)+T[2]+3299628645&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(A^(w|~k))+T[0]+4096336452&4294967295,g=w+(I<<6&4294967295|I>>>26),I=k+(w^(g|~A))+T[7]+1126891415&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~w))+T[14]+2878612391&4294967295,A=k+(I<<15&4294967295|I>>>17),I=w+(k^(A|~g))+T[5]+4237533241&4294967295,w=A+(I<<21&4294967295|I>>>11),I=g+(A^(w|~k))+T[12]+1700485571&4294967295,g=w+(I<<6&4294967295|I>>>26),I=k+(w^(g|~A))+T[3]+2399980690&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~w))+T[10]+4293915773&4294967295,A=k+(I<<15&4294967295|I>>>17),I=w+(k^(A|~g))+T[1]+2240044497&4294967295,w=A+(I<<21&4294967295|I>>>11),I=g+(A^(w|~k))+T[8]+1873313359&4294967295,g=w+(I<<6&4294967295|I>>>26),I=k+(w^(g|~A))+T[15]+4264355552&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~w))+T[6]+2734768916&4294967295,A=k+(I<<15&4294967295|I>>>17),I=w+(k^(A|~g))+T[13]+1309151649&4294967295,w=A+(I<<21&4294967295|I>>>11),I=g+(A^(w|~k))+T[4]+4149444226&4294967295,g=w+(I<<6&4294967295|I>>>26),I=k+(w^(g|~A))+T[11]+3174756917&4294967295,k=g+(I<<10&4294967295|I>>>22),I=A+(g^(k|~w))+T[2]+718787259&4294967295,A=k+(I<<15&4294967295|I>>>17),I=w+(k^(A|~g))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,g){g===void 0&&(g=_.length);const w=g-this.blockSize,T=this.C;let A=this.h,k=0;for(;k<g;){if(A==0)for(;k<=w;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<g;)if(T[A++]=_.charCodeAt(k++),A==this.blockSize){i(this,T),A=0;break}}else for(;k<g;)if(T[A++]=_[k++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=g},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;g=this.o*8;for(var w=_.length-8;w<_.length;++w)_[w]=g&255,g/=256;for(this.v(_),_=Array(16),g=0,w=0;w<4;++w)for(let T=0;T<32;T+=8)_[g++]=this.g[w]>>>T&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;const w=[];let T=!0;for(let A=_.length-1;A>=0;A--){const k=_[A]|0;T&&k==g||(w[A]=k,T=!1)}this.g=w}var l={};function u(_){return-128<=_&&_<128?s(_,function(g){return new o([g|0],g<0?-1:0)}):new o([_|0],_<0?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return D(c(-_));const g=[];let w=1;for(let T=0;_>=w;T++)g[T]=_/w|0,w*=4294967296;return new o(g,0)}function f(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return D(f(_.substring(1),g));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(g,8));let T=p;for(let k=0;k<_.length;k+=8){var A=Math.min(8,_.length-k);const I=parseInt(_.substring(k,k+A),g);A<8?(A=c(Math.pow(g,A)),T=T.j(A).add(c(I))):(T=T.j(w),T=T.add(c(I)))}return T}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();let _=0,g=1;for(let w=0;w<this.g.length;w++){const T=this.i(w);_+=(T>=0?T:4294967296+T)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(C(this))return"0";if(P(this))return"-"+D(this).toString(_);const g=c(Math.pow(_,6));var w=this;let T="";for(;;){const A=b(w,g).g;w=E(w,A.j(g));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(_);if(w=A,C(w))return k+T;for(;k.length<6;)k="0"+k;T=k+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function C(_){if(_.h!=0)return!1;for(let g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function P(_){return _.h==-1}t.l=function(_){return _=E(this,_),P(_)?-1:C(_)?0:1};function D(_){const g=_.g.length,w=[];for(let T=0;T<g;T++)w[T]=~_.g[T];return new o(w,~_.h).add(m)}t.abs=function(){return P(this)?D(this):this},t.add=function(_){const g=Math.max(this.g.length,_.g.length),w=[];let T=0;for(let A=0;A<=g;A++){let k=T+(this.i(A)&65535)+(_.i(A)&65535),I=(k>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);T=I>>>16,k&=65535,I&=65535,w[A]=I<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(_,g){return _.add(D(g))}t.j=function(_){if(C(this)||C(_))return p;if(P(this))return P(_)?D(this).j(D(_)):D(D(this).j(_));if(P(_))return D(this.j(D(_)));if(this.l(S)<0&&_.l(S)<0)return c(this.m()*_.m());const g=this.g.length+_.g.length,w=[];for(var T=0;T<2*g;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(let A=0;A<_.g.length;A++){const k=this.i(T)>>>16,I=this.i(T)&65535,_e=_.i(A)>>>16,Re=_.i(A)&65535;w[2*T+2*A]+=I*Re,v(w,2*T+2*A),w[2*T+2*A+1]+=k*Re,v(w,2*T+2*A+1),w[2*T+2*A+1]+=I*_e,v(w,2*T+2*A+1),w[2*T+2*A+2]+=k*_e,v(w,2*T+2*A+2)}for(_=0;_<g;_++)w[_]=w[2*_+1]<<16|w[2*_];for(_=g;_<2*g;_++)w[_]=0;return new o(w,0)};function v(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function R(_,g){this.g=_,this.h=g}function b(_,g){if(C(g))throw Error("division by zero");if(C(_))return new R(p,p);if(P(_))return g=b(D(_),g),new R(D(g.g),D(g.h));if(P(g))return g=b(_,D(g)),new R(D(g.g),g.h);if(_.g.length>30){if(P(_)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=g;T.l(_)<=0;)w=F(w),T=F(T);var A=j(w,1),k=j(T,1);for(T=j(T,2),w=j(w,2);!C(T);){var I=k.add(T);I.l(_)<=0&&(A=A.add(w),k=I),T=j(T,1),w=j(w,1)}return g=E(_,A.j(g)),new R(A,g)}for(A=p;_.l(g)>=0;){for(w=Math.max(1,Math.floor(_.m()/g.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),k=c(w),I=k.j(g);P(I)||I.l(_)>0;)w-=T,k=c(w),I=k.j(g);C(k)&&(k=m),A=A.add(k),_=E(_,I)}return new R(A,_)}t.B=function(_){return b(this,_).h},t.and=function(_){const g=Math.max(this.g.length,_.g.length),w=[];for(let T=0;T<g;T++)w[T]=this.i(T)&_.i(T);return new o(w,this.h&_.h)},t.or=function(_){const g=Math.max(this.g.length,_.g.length),w=[];for(let T=0;T<g;T++)w[T]=this.i(T)|_.i(T);return new o(w,this.h|_.h)},t.xor=function(_){const g=Math.max(this.g.length,_.g.length),w=[];for(let T=0;T<g;T++)w[T]=this.i(T)^_.i(T);return new o(w,this.h^_.h)};function F(_){const g=_.g.length+1,w=[];for(let T=0;T<g;T++)w[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(w,_.h)}function j(_,g){const w=g>>5;g%=32;const T=_.g.length-w,A=[];for(let k=0;k<T;k++)A[k]=g>0?_.i(k+w)>>>g|_.i(k+w+1)<<32-g:_.i(k+w);return new o(A,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,xw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,cr=o}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nw,Js,Dw,fl,cd,Vw,bw,Ow;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in d))break e;d=d[x]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&d.push([y,h[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,x,V){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[x].apply(y,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function C(a,h){for(let y=1;y<arguments.length;y++){const x=arguments[y];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const V=x.length||0;a.length=d+V;for(let z=0;z<V;z++)a[d+z]=x[z]}else a.push(x)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function E(){var a=_;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,d){const y=R.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var R=new P(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,j=!1,_=new v,g=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(w)}};function w(){for(var a;a=E();){try{a.h.call(a.g)}catch(d){D(d)}var h=R;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function _e(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(_e,A),_e.prototype.init=function(a,h){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Re="closure_listenable_"+(Math.random()*1e6|0),Pr=0;function ci(a,h,d,y,x){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=x,this.key=++Pr,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function me(a){const h={};for(const d in a)h[d]=a[d];return h}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kr(a,h){let d,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(d in y)a[d]=y[d];for(let V=0;V<Ae.length;V++)d=Ae[V],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,y,x){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const z=Ot(a,h,y,x);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new ci(h,this.src,V,!!y,x),h.fa=d,a.push(h)),h};function xr(a,h){const d=h.type;if(d in a.g){var y=a.g[d],x=Array.prototype.indexOf.call(y,h,void 0),V;(V=x>=0)&&Array.prototype.splice.call(y,x,1),V&&(B(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ot(a,h,d,y){for(let x=0;x<a.length;++x){const V=a[x];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==y)return x}return-1}var Vn="closure_lm_"+(Math.random()*1e6|0),Qu={};function _p(a,h,d,y,x){if(Array.isArray(h)){for(let V=0;V<h.length;V++)_p(a,h[V],d,y,x);return null}return d=wp(d),a&&a[Re]?a.J(h,d,l(y)?!!y.capture:!1,x):aT(a,h,d,!1,y,x)}function aT(a,h,d,y,x,V){if(!h)throw Error("Invalid event type");const z=l(x)?!!x.capture:!!x;let Z=Ju(a);if(Z||(a[Vn]=Z=new At(a)),d=Z.add(h,d,y,z,V),d.proxy)return d;if(y=lT(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)k||(x=z),x===void 0&&(x=!1),a.addEventListener(h.toString(),y,x);else if(a.attachEvent)a.attachEvent(Ep(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function lT(){function a(d){return h.call(a.src,a.listener,d)}const h=uT;return a}function vp(a,h,d,y,x){if(Array.isArray(h))for(var V=0;V<h.length;V++)vp(a,h[V],d,y,x);else y=l(y)?!!y.capture:!!y,d=wp(d),a&&a[Re]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],d=Ot(h,d,y,x),d>-1&&(B(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Ju(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ot(h,d,y,x)),(d=a>-1?h[a]:null)&&Yu(d))}function Yu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Re])xr(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(Ep(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Ju(h))?(xr(d,a),d.h==0&&(d.src=null,h[Vn]=null)):B(a)}}}function Ep(a){return a in Qu?Qu[a]:Qu[a]="on"+a}function uT(a,h){if(a.da)a=!0;else{h=new _e(h,this);const d=a.listener,y=a.ha||a.src;a.fa&&Yu(a),a=d.call(y,h)}return a}function Ju(a){return a=a[Vn],a instanceof At?a:null}var Xu="__closure_events_fn_"+(Math.random()*1e9>>>0);function wp(a){return typeof a=="function"?a:(a[Xu]||(a[Xu]=function(h){return a.handleEvent(h)}),a[Xu])}function Ge(){T.call(this),this.i=new At(this),this.M=this,this.G=null}p(Ge,T),Ge.prototype[Re]=!0,Ge.prototype.removeEventListener=function(a,h,d,y){vp(this,a,h,d,y)};function it(a,h){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var x=h;h=new A(y,a),kr(h,x)}x=!0;let V,z;if(d)for(z=d.length-1;z>=0;z--)V=h.g=d[z],x=da(V,y,!0,h)&&x;if(V=h.g=a,x=da(V,y,!0,h)&&x,x=da(V,y,!1,h)&&x,d)for(z=0;z<d.length;z++)V=h.g=d[z],x=da(V,y,!1,h)&&x}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let y=0;y<d.length;y++)B(d[y]);delete a.g[h],a.h--}}this.G=null},Ge.prototype.J=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},Ge.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function da(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let V=0;V<h.length;++V){const z=h[V];if(z&&!z.da&&z.capture==d){const Z=z.listener,De=z.ha||z.src;z.fa&&xr(a.i,z),x=Z.call(De,y)!==!1&&x}}return x&&!y.defaultPrevented}function cT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Tp(a){a.g=cT(()=>{a.g=null,a.i&&(a.i=!1,Tp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class hT extends T{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(a){T.call(this),this.h=a,this.g={}}p(_s,T);var Ip=[];function Sp(a){K(a.g,function(h,d){this.g.hasOwnProperty(d)&&Yu(h)},a),a.g={}}_s.prototype.N=function(){_s.Z.N.call(this),Sp(this)},_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zu=o.JSON.stringify,dT=o.JSON.parse,fT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Rp(){}function Ap(){}var vs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ec(){A.call(this,"d")}p(ec,A);function tc(){A.call(this,"c")}p(tc,A);var Nr={},Cp=null;function fa(){return Cp=Cp||new Ge}Nr.Ia="serverreachability";function Pp(a){A.call(this,Nr.Ia,a)}p(Pp,A);function Es(a){const h=fa();it(h,new Pp(h))}Nr.STAT_EVENT="statevent";function kp(a,h){A.call(this,Nr.STAT_EVENT,a),this.stat=h}p(kp,A);function st(a){const h=fa();it(h,new kp(h,a))}Nr.Ja="timingevent";function xp(a,h){A.call(this,Nr.Ja,a),this.size=h}p(xp,A);function ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ts(){this.g=!0}Ts.prototype.ua=function(){this.g=!1};function pT(a,h,d,y,x,V){a.info(function(){if(a.g)if(V){var z="",Z=V.split("&");for(let le=0;le<Z.length;le++){var De=Z[le].split("=");if(De.length>1){const Fe=De[0];De=De[1];const Qt=Fe.split("_");z=Qt.length>=2&&Qt[1]=="type"?z+(Fe+"="+De+"&"):z+(Fe+"=redacted&")}}}else z=null;else z=V;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+d+`
`+z})}function mT(a,h,d,y,x,V,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+d+`
`+V+" "+z})}function hi(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+yT(a,d)+(y?" "+y:"")})}function gT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ts.prototype.info=function(){};function yT(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let z=1;z<y.length;z++)y[z]=""}}}}return Zu(V)}catch{return h}}var pa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Np={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dp;function nc(){}p(nc,Rp),nc.prototype.g=function(){return new XMLHttpRequest},Dp=new nc;function Is(a){return encodeURIComponent(String(a))}function _T(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function bn(a,h,d,y){this.j=a,this.i=h,this.l=d,this.S=y||1,this.V=new _s(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vp}function Vp(){this.i=null,this.g="",this.h=!1}var bp={},rc={};function ic(a,h,d){a.M=1,a.A=ga(Gt(h)),a.u=d,a.R=!0,Op(a,null)}function Op(a,h){a.F=Date.now(),ma(a),a.B=Gt(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Gp(d.i,"t",y),a.C=0,d=a.j.L,a.h=new Vp,a.g=dm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new hT(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,y=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(Ip[0]=x.toString()),x=Ip);for(let V=0;V<x.length;V++){const z=_p(d,x[V],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Es(),pT(a.i,a.v,a.B,a.l,a.S,a.u)}bn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Mn(a)==3?h.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Mn(this.g),De=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||tm(this.g)))){this.K||Z!=4||De==7||(De==8||le<=0?Es(3):Es(2)),sc(this);var h=this.g.ca();this.X=h;var d=vT(this);if(this.o=h==200,mT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var V=y;break t}}V=null}if(a=V)hi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,oc(this,a);else{this.o=!1,this.m=3,st(12),Dr(this),Ss(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<d.length;)if(Fe=ET(this,d),Fe==rc){Z==4&&(this.m=4,st(14),a=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==bp){this.m=4,st(15),hi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else hi(this.i,this.l,Fe,null),oc(this,Fe);if(Lp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)hi(this.i,this.l,d,"[Invalid Chunked Response]"),Dr(this),Ss(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),pc(z),z.P=!0,st(11))}}else hi(this.i,this.l,d,null),oc(this,d);Z==4&&Dr(this),this.o&&!this.K&&(Z==4?lm(this.j,this):(this.o=!1,ma(this)))}else bT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),Dr(this),Ss(this)}}}catch{}finally{}};function vT(a){if(!Lp(a))return a.g.la();const h=tm(a.g);if(h==="")return"";let d="";const y=h.length,x=Mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Dr(a),Ss(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<y;V++)a.h.h=!0,d+=a.h.i.decode(h[V],{stream:!(x&&V==y-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Lp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ET(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?rc:(d=Number(h.substring(d,y)),isNaN(d)?bp:(y+=1,y+d>h.length?rc:(h=h.slice(y,y+d),a.C=y+d,h)))}bn.prototype.cancel=function(){this.K=!0,Dr(this)};function ma(a){a.T=Date.now()+a.H,Mp(a,a.H)}function Mp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ws(c(a.aa,a),h)}function sc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}bn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gT(this.i,this.B),this.M!=2&&(Es(),st(17)),Dr(this),this.m=2,Ss(this)):Mp(this,this.T-a)};function Ss(a){a.j.I==0||a.K||lm(a.j,a)}function Dr(a){sc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Sp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function oc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||ac(d.h,a))){if(!a.L&&ac(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)wa(d),va(d);else break e;fc(d),st(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ws(c(d.Va,d),6e3));jp(d.h)<=1&&d.ta&&(d.ta=void 0)}else br(d,11)}else if((a.L||d.g==a)&&wa(d),!I(h))for(x=d.Ba.g.parse(h),h=0;h<x.length;h++){let le=x[h];const Fe=le[0];if(!(Fe<=d.K))if(d.K=Fe,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const Qt=le[3];Qt!=null&&(d.ka=Qt,d.j.info("VER="+d.ka));const Or=le[4];Or!=null&&(d.za=Or,d.j.info("SVER="+d.za));const Fn=le[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(y=1.5*Fn,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Un=a.g;if(Un){const Ia=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var V=y.h;V.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(lc(V,V.h),V.h=null))}if(y.G){const mc=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;mc&&(y.wa=mc,ce(y.J,y.G,mc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var z=a;if(y.na=hm(y,y.L?y.ba:null,y.W),z.L){zp(y.h,z);var Z=z,De=y.O;De&&(Z.H=De),Z.D&&(sc(Z),ma(Z)),y.g=z}else om(y);d.i.length>0&&Ea(d)}else le[0]!="stop"&&le[0]!="close"||br(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?br(d,7):dc(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}Es(4)}catch{}}var wT=class{constructor(a,h){this.g=a,this.map=h}};function Fp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Up(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jp(a){return a.h?1:a.g?a.g.size:0}function ac(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lc(a,h){a.g?a.g.add(h):a.h=h}function zp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fp.prototype.cancel=function(){if(this.i=Bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return S(a.i)}var $p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TT(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let x,V=null;y>=0?(x=a[d].substring(0,y),V=a[d].substring(y+1)):x=a[d],h(x,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function On(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof On?(this.l=a.l,Rs(this,a.j),this.o=a.o,this.g=a.g,As(this,a.u),this.h=a.h,uc(this,Qp(a.i)),this.m=a.m):a&&(h=String(a).match($p))?(this.l=!1,Rs(this,h[1]||"",!0),this.o=Cs(h[2]||""),this.g=Cs(h[3]||"",!0),As(this,h[4]),this.h=Cs(h[5]||"",!0),uc(this,h[6]||"",!0),this.m=Cs(h[7]||"")):(this.l=!1,this.i=new ks(null,this.l))}On.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ps(h,Hp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ps(h,Hp,!0),"@"),a.push(Is(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ps(d,d.charAt(0)=="/"?RT:ST,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ps(d,CT)),a.join("")},On.prototype.resolve=function(a){const h=Gt(this);let d=!!a.j;d?Rs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var y=a.h;if(d)As(h,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=h.h.lastIndexOf("/");x!=-1&&(y=h.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const V=[];for(let z=0;z<x.length;){const Z=x[z++];Z=="."?y&&z==x.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),y&&z==x.length&&V.push("")):(V.push(Z),y=!0)}y=V.join("/")}else y=x}return d?h.h=y:d=a.i.toString()!=="",d?uc(h,Qp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Gt(a){return new On(a)}function Rs(a,h,d){a.j=d?Cs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function As(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function uc(a,h,d){h instanceof ks?(a.i=h,PT(a.i,a.l)):(d||(h=Ps(h,AT)),a.i=new ks(h,a.l))}function ce(a,h,d){a.i.set(h,d)}function ga(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Cs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,IT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function IT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hp=/[#\/\?@]/g,ST=/[#\?:]/g,RT=/[#\?]/g,AT=/[#\?@]/g,CT=/#/g;function ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Vr(a){a.g||(a.g=new Map,a.h=0,a.i&&TT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(a,h){Vr(this),this.i=null,a=di(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Wp(a,h){Vr(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function qp(a,h){return Vr(a),h=di(a,h),a.g.has(h)}t.forEach=function(a,h){Vr(this),this.g.forEach(function(d,y){d.forEach(function(x){a.call(h,x,y,this)},this)},this)};function Kp(a,h){Vr(a);let d=[];if(typeof h=="string")qp(a,h)&&(d=d.concat(a.g.get(di(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Vr(this),this.i=null,a=di(this,a),qp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Kp(this,a),a.length>0?String(a[0]):h):h};function Gp(a,h,d){Wp(a,h),d.length>0&&(a.i=null,a.g.set(di(a,h),S(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var d=h[y];const x=Is(d);d=Kp(this,d);for(let V=0;V<d.length;V++){let z=x;d[V]!==""&&(z+="="+Is(d[V])),a.push(z)}}return this.i=a.join("&")};function Qp(a){const h=new ks;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function PT(a,h){h&&!a.j&&(Vr(a),a.i=null,a.g.forEach(function(d,y){const x=y.toLowerCase();y!=x&&(Wp(this,y),Gp(this,x,d))},a)),a.j=h}function kT(a,h){const d=new Ts;if(o.Image){const y=new Image;y.onload=f(Ln,d,"TestLoadImage: loaded",!0,h,y),y.onerror=f(Ln,d,"TestLoadImage: error",!1,h,y),y.onabort=f(Ln,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(Ln,d,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function xT(a,h){const d=new Ts,y=new AbortController,x=setTimeout(()=>{y.abort(),Ln(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(x),V.ok?Ln(d,"TestPingServer: ok",!0,h):Ln(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Ln(d,"TestPingServer: error",!1,h)})}function Ln(a,h,d,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(d)}catch{}}function NT(){this.g=new fT}function cc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(cc,Rp),cc.prototype.g=function(){return new ya(this.i,this.h)};function ya(a,h){Ge.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ya,Ge),t=ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xs(this):Ns(this),this.readyState==3&&Yp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Na=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ns(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jp(a){let h="";return K(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function hc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Jp(d),typeof a=="string"?d!=null&&Is(d):ce(a,h,d))}function Ie(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ie,Ge);var DT=/^https?$/i,VT=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Xp(this,V);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)d.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(VT,h,void 0)>=0)||y||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Xp(this,V)}};function Xp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Zp(a),_a(a)}function Zp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),_a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_a(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?em(this):this.Xa())},t.Xa=function(){em(this)};function em(a){if(a.h&&typeof s<"u"){if(a.v&&Mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=V===0){let z=String(a.D).match($p)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),y=!DT.test(z?z.toLowerCase():"")}d=y}if(d)it(a,"complete"),it(a,"success");else{a.o=6;try{var x=Mn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",Zp(a)}}finally{_a(a)}}}}function _a(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||it(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dT(h)}};function tm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bT(a){const h={};a=(a.g&&Mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=_T(a[y]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[x]||[];h[x]=V,V.push(d)}X(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function nm(a){this.za=0,this.i=[],this.j=new Ts,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ds("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ds("baseRetryDelayMs",5e3,a),this.Za=Ds("retryDelaySeedMs",1e4,a),this.Ta=Ds("forwardChannelMaxRetries",2,a),this.va=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Fp(a&&a.concurrentRequestLimit),this.Ba=new NT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=nm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,y){st(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=hm(this,null,this.W),Ea(this)};function dc(a){if(rm(a),a.I==3){var h=a.V++,d=Gt(a.J);if(ce(d,"SID",a.M),ce(d,"RID",h),ce(d,"TYPE","terminate"),Vs(a,d),h=new bn(a,a.j,h),h.M=2,h.A=ga(Gt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=dm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ma(h)}cm(a)}function va(a){a.g&&(pc(a),a.g.cancel(),a.g=null)}function rm(a){va(a),a.v&&(o.clearTimeout(a.v),a.v=null),wa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ea(a){if(!Up(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||g(),j||(F(),j=!0),_.add(h,a),a.D=0}}function OT(a,h){return jp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ws(c(a.Ea,a,h),um(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new bn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=me(V),kr(V,this.U)):V=this.U),this.u!==null||this.R||(x.J=V,V=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=sm(this,x,h),d=Gt(this.J),ce(d,"RID",a),ce(d,"CVER",22),this.G&&ce(d,"X-HTTP-Session-Id",this.G),Vs(this,d),V&&(this.R?h="headers="+Is(Jp(V))+"&"+h:this.u&&hc(d,this.u,V)),lc(this.h,x),this.Ra&&ce(d,"TYPE","init"),this.S?(ce(d,"$req",h),ce(d,"SID","null"),x.U=!0,ic(x,d,null)):ic(x,d,h),this.I=2}}else this.I==3&&(a?im(this,a):this.i.length==0||Up(this.h)||im(this))};function im(a,h){var d;h?d=h.l:d=a.V++;const y=Gt(a.J);ce(y,"SID",a.M),ce(y,"RID",d),ce(y,"AID",a.K),Vs(a,y),a.u&&a.o&&hc(y,a.u,a.o),d=new bn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=sm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),lc(a.h,d),ic(d,y,h)}function Vs(a,h){a.H&&K(a.H,function(d,y){ce(h,y,d)}),a.l&&K({},function(d,y){ce(h,y,d)})}function sm(a,h,d){d=Math.min(a.i.length,d);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var x=a.i;let Z=-1;for(;;){const De=["count="+d];Z==-1?d>0?(Z=x[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let le=!0;for(let Fe=0;Fe<d;Fe++){var V=x[Fe].g;const Qt=x[Fe].map;if(V-=Z,V<0)Z=Math.max(0,x[Fe].g-100),le=!1;else try{V="req"+V+"_"||"";try{var z=Qt instanceof Map?Qt:Object.entries(Qt);for(const[Or,Fn]of z){let Un=Fn;l(Fn)&&(Un=Zu(Fn)),De.push(V+Or+"="+encodeURIComponent(Un))}}catch(Or){throw De.push(V+"type="+encodeURIComponent("_badmap")),Or}}catch{y&&y(Qt)}}if(le){z=De.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function om(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||g(),j||(F(),j=!0),_.add(h,a),a.A=0}}function fc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ws(c(a.Da,a),um(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,am(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ws(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),va(this),am(this))};function pc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function am(a){a.g=new bn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Gt(a.na);ce(h,"RID","rpc"),ce(h,"SID",a.M),ce(h,"AID",a.K),ce(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(h,"TO",a.ia),ce(h,"TYPE","xmlhttp"),Vs(a,h),a.u&&a.o&&hc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ga(Gt(h)),d.u=null,d.R=!0,Op(d,a)}t.Va=function(){this.C!=null&&(this.C=null,va(this),fc(this),st(19))};function wa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function lm(a,h){var d=null;if(a.g==h){wa(a),pc(a),a.g=null;var y=2}else if(ac(a.h,h))d=h.G,zp(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;y=fa(),it(y,new xp(y,d)),Ea(a)}else om(a);else if(x=h.m,x==3||x==0&&h.X>0||!(y==1&&OT(a,h)||y==2&&fc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),x){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function um(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),y=a.Ua;const x=!y;y=new On(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Rs(y,"https"),ga(y),x?kT(y.toString(),d):xT(y.toString(),d)}else st(2);a.I=0,a.l&&a.l.pa(h),cm(a),rm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function cm(a){if(a.I=0,a.ja=[],a.l){const h=Bp(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function hm(a,h,d){var y=d instanceof On?Gt(d):new On(d);if(y.g!="")h&&(y.g=h+"."+y.g),As(y,y.u);else{var x=o.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const V=new On(null);y&&Rs(V,y),h&&(V.g=h),x&&As(V,x),d&&(V.h=d),y=V}return d=a.G,h=a.wa,d&&h&&ce(y,d,h),ce(y,"VER",a.ka),Vs(a,y),y}function dm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ie(new cc({ab:d})):new Ie(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fm(){}t=fm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ta(){}Ta.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ge.call(this),this.g=new nm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}p(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){dc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Zu(a),a=d);h.i.push(new wT(h.Ya++,a)),h.I==3&&Ea(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,dc(this.g),delete this.g,yt.Z.N.call(this)};function pm(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(pm,ec);function mm(){tc.call(this),this.status=1}p(mm,tc);function fi(a){this.g=a}p(fi,fm),fi.prototype.ra=function(){it(this.g,"a")},fi.prototype.qa=function(a){it(this.g,new pm(a))},fi.prototype.pa=function(a){it(this.g,new mm)},fi.prototype.oa=function(){it(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Ow=function(){return new Ta},bw=function(){return fa()},Vw=Nr,cd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,fl=pa,Np.COMPLETE="complete",Dw=Np,Ap.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,Js=Ap,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,Nw=Ie}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let fs="12.11.0";function L1(t){fs=t}/**
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
 */const ni=new Pf("@firebase/firestore");function gi(){return ni.logLevel}function $(t,...e){if(ni.logLevel<=te.DEBUG){const n=e.map(Uf);ni.debug(`Firestore (${fs}): ${t}`,...n)}}function Pn(t,...e){if(ni.logLevel<=te.ERROR){const n=e.map(Uf);ni.error(`Firestore (${fs}): ${t}`,...n)}}function ri(t,...e){if(ni.logLevel<=te.WARN){const n=e.map(Uf);ni.warn(`Firestore (${fs}): ${t}`,...n)}}function Uf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Lw(t,r,n)}function Lw(t,e,n){let r=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Lw(e,i,r)}function J(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class F1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class U1{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new Mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class j1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class z1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new j1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ly(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ly(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=$1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function hd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Zc(i)===Zc(s)?ne(i,s):Zc(i)?1:-1}return ne(t.length,e.length)}const H1=55296,W1=57343;function Zc(t){const e=t.charCodeAt(0);return e>=H1&&e<=W1}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const uy="__name__";class Xt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Xt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Xt.isNumericId(e),i=Xt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Xt.extractNumericId(e).compare(Xt.extractNumericId(n)):hd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cr.fromString(e.substring(4,e.length-2))}}class de extends Xt{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const q1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Xt{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return q1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uy}static keyField(){return new He([uy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(de.fromString(e))}static fromName(e){return new q(de.fromString(e).popFirst(5))}static empty(){return new q(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new de(e.slice()))}}/**
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
 */function Fw(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function K1(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cy(t){if(!q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hy(t){if(q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function zf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zf(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function aa(t,e){if(!Uw(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
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
 */const dy=-62135596800,fy=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fy);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<dy)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(aa(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ne("string",fe._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function G1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new mr(i,q.empty(),e)}function Q1(t){return new mr(t.readTime,t.key,Uo)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(Y.min(),q.empty(),Uo)}static max(){return new mr(Y.max(),q.empty(),Uo)}}function Y1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const J1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ps(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==J1)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Z1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Du.ce=-1;/**
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
 */const Bf=-1;function Vu(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function ex(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const jw="";function tx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=py(e)),e=nx(t.get(n),e);return py(e)}function nx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case jw:n+="";break;default:n+=s}}return n}function py(t){return t+jw+""}/**
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
 */function my(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gy(this.data.getIterator())}getIteratorFrom(e){return new gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Bw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const rx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=rx.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */const $w="server_timestamp",Hw="__type__",Ww="__previous_value__",qw="__local_write_time__";function $f(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Hw])==null?void 0:r.stringValue)===$w}function bu(t){const e=t.mapValue.fields[Ww];return $f(e)?bu(e):e}function jo(t){const e=gr(t.mapValue.fields[qw].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class ix{constructor(e,n,r,i,s,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Zl="(default)";class zo{constructor(e,n){this.projectId=e,this.database=n||Zl}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database===Zl}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}function sx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(t.options.projectId,e)}/**
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
 */const Kw="__type__",ox="__max__",Wa={mapValue:{}},Gw="__vector__",eu="value";function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$f(t)?4:lx(t)?9007199254740991:ax(t)?10:11:Q(28295,{value:t})}function cn(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jo(t).isEqual(jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gr(i.timestampValue),l=gr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yr(i.bytesValue).isEqual(yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Xl(o)===Xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(my(o)!==my(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return yy(t.timestampValue,e.timestampValue);case 4:return yy(jo(t),jo(e));case 5:return hd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=yr(s),u=yr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ne(l[c],u[c]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ce(s.latitude),Ce(o.latitude));return l!==0?l:ne(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _y(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,S,C,P;const l=s.fields||{},u=o.fields||{},c=(m=l[eu])==null?void 0:m.arrayValue,f=(S=u[eu])==null?void 0:S.arrayValue,p=ne(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return p!==0?p:_y(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Wa.mapValue&&o===Wa.mapValue)return 0;if(s===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=hd(u[p],f[p]);if(m!==0)return m;const S=es(l[u[p]],c[f[p]]);if(S!==0)return S}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function yy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=gr(t),r=gr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function _y(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ts(t){return dd(t)}function dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dd(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function pl(t){switch(_r(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bu(t);return e?16+pl(e):16;case 5:return 2*t.stringValue.length;case 6:return yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+pl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ar(r.fields,(s,o)=>{i+=s.length+pl(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function fd(t){return!!t&&"integerValue"in t}function Hf(t){return!!t&&"arrayValue"in t}function vy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function ax(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Kw])==null?void 0:r.stringValue)===Gw}function fo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return{...t}}function lx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ox}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=fo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(fo(this.value))}}function Qw(t){const e=[];return Ar(t.fields,(n,r)=>{const i=new He([n]);if(ml(r)){const s=Qw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
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
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tu{constructor(e,n){this.position=e,this.inclusive=n}}function wy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nu{constructor(e,n="asc"){this.field=e,this.dir=n}}function ux(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yw{}class be extends Yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hx(e,n,r):n==="array-contains"?new px(e,r):n==="in"?new mx(e,r):n==="not-in"?new gx(e,r):n==="array-contains-any"?new yx(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dx(e,r):new fx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(es(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends Yw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new hn(e,n)}matches(e){return Jw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jw(t){return t.op==="and"}function Xw(t){return cx(t)&&Jw(t)}function cx(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function pd(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(Xw(t))return t.filters.map(e=>pd(e)).join(",");{const e=t.filters.map(n=>pd(n)).join(",");return`${t.op}(${e})`}}function Zw(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Zw(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function e0(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(e0).join(" ,")+"}"}(t):"Filter"}class hx extends be{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class dx extends be{constructor(e,n){super(e,"in",n),this.keys=t0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fx extends be{constructor(e,n){super(e,"not-in",n),this.keys=t0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class px extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hf(n)&&Bo(n.arrayValue,this.value)}}class mx extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class gx extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class yx extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
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
 */class _x{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Iy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _x(t,e,n,r,i,s,o)}function Wf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.Te=n}return e.Te}function qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ux(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Zw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ty(t.startAt,e.startAt)&&Ty(t.endAt,e.endAt)}function md(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ou{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function vx(t,e,n,r,i,s,o,l){return new Ou(t,e,n,r,i,s,o,l)}function Kf(t){return new Ou(t)}function Sy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ex(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function wx(t){return t.collectionGroup!==null}function po(t){const e=J(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new nu(s,r))}),n.has(He.keyField().canonicalString())||e.Ee.push(new nu(He.keyField(),r))}return e.Ee}function an(t){const e=J(t);return e.Ie||(e.Ie=Tx(e,po(t))),e.Ie}function Tx(t,e){if(t.limitType==="F")return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new nu(i.field,s)});const n=t.endAt?new tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tu(t.startAt.position,t.startAt.inclusive):null;return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gd(t,e,n){return new Ou(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return qf(an(t),an(e))&&t.limitType===e.limitType}function n0(t){return`${Wf(an(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>e0(i)).join(", ")}]`),Vu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=wy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,po(r),i)||r.endAt&&!function(o,l,u){const c=wy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,po(r),i))}(t,e)}function Ix(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r0(t){return(e,n)=>{let r=!1;for(const i of po(t)){const s=Sx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Sx(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?es(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zw(this.inner)}size(){return this.innerSize}}/**
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
 */const Rx=new Te(q.comparator);function kn(){return Rx}const i0=new Te(q.comparator);function Xs(...t){let e=i0;for(const n of t)e=e.insert(n.key,n);return e}function s0(t){let e=i0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return mo()}function o0(){return mo()}function mo(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ax=new Te(q.comparator),Cx=new Me(q.comparator);function re(...t){let e=Cx;for(const n of t)e=e.add(n);return e}const Px=new Me(ne);function kx(){return Px}/**
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
 */function Gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function a0(t){return{integerValue:""+t}}function xx(t,e){return ex(e)?a0(e):Gf(t,e)}/**
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
 */class Fu{constructor(){this._=void 0}}function Nx(t,e,n){return t instanceof $o?function(i,s){const o={fields:{[Hw]:{stringValue:$w},[qw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$f(s)&&(s=bu(s)),s&&(o.fields[Ww]=s),{mapValue:o}}(n,e):t instanceof Ho?u0(t,e):t instanceof Wo?c0(t,e):function(i,s){const o=l0(i,s),l=Ry(o)+Ry(i.Ae);return fd(o)&&fd(i.Ae)?a0(l):Gf(i.serializer,l)}(t,e)}function Dx(t,e,n){return t instanceof Ho?u0(t,e):t instanceof Wo?c0(t,e):n}function l0(t,e){return t instanceof ru?function(r){return fd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $o extends Fu{}class Ho extends Fu{constructor(e){super(),this.elements=e}}function u0(t,e){const n=h0(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Fu{constructor(e){super(),this.elements=e}}function c0(t,e){let n=h0(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class ru extends Fu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ry(t){return Ce(t.integerValue||t.doubleValue)}function h0(t){return Hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Vx{constructor(e,n){this.field=e,this.transform=n}}function bx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ho&&i instanceof Ho||r instanceof Wo&&i instanceof Wo?Zi(r.elements,i.elements,cn):r instanceof ru&&i instanceof ru?cn(r.Ae,i.Ae):r instanceof $o&&i instanceof $o}(t.transform,e.transform)}class Ox{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uu{}function d0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qf(t.key,$t.none()):new la(t.key,t.data,$t.none());{const n=t.data,r=dt.empty();let i=new Me(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new Et(i.toArray()),$t.none())}}function Lx(t,e,n){t instanceof la?function(i,s,o){const l=i.value.clone(),u=Cy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!gl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Cy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(f0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof la?function(s,o,l,u){if(!gl(s.precondition,o))return l;const c=s.value.clone(),f=Py(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!gl(s.precondition,o))return l;const c=Py(s.fieldTransforms,u,o),f=o.data;return f.setAll(f0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return gl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Mx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=l0(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>bx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends Uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function f0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Dx(o,l,n[i]))}return r}function Py(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Nx(s,o,e))}return r}class Qf extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fx extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ux{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Lx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=d0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>Ay(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>Ay(n,r))}}class Yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Ax}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yf(e,n,r,i)}}/**
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
 */class jx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,ie;function Bx(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function p0(t){if(t===void 0)return Pn("GRPC error has no .code"),M.UNKNOWN;switch(t){case ke.OK:return M.OK;case ke.CANCELLED:return M.CANCELLED;case ke.UNKNOWN:return M.UNKNOWN;case ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ke.INTERNAL:return M.INTERNAL;case ke.UNAVAILABLE:return M.UNAVAILABLE;case ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ke.NOT_FOUND:return M.NOT_FOUND;case ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ke.ABORTED:return M.ABORTED;case ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ke.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function $x(){return new TextEncoder}/**
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
 */const Hx=new cr([4294967295,4294967295],0);function ky(t){const e=$x().encode(t),n=new xw;return n.update(e),new Uint8Array(n.digest())}function xy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cr([n,r],0),new cr([i,s],0)]}class Jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=cr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(cr.fromNumber(r)));return i.compare(Hx)===1&&(i=new cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ky(e),[r,i]=xy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=ky(e),[r,i]=xy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ju(Y.min(),i,new Te(ne),kn(),re())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,re(),re(),re())}}/**
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
 */class yl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class m0{constructor(e,n){this.targetId=e,this.Ce=n}}class g0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ny{constructor(){this.ve=0,this.Fe=Dy(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new ua(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Dy()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Wx{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=qa(),this.He=qa(),this.Ze=new Te(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(md(s))if(r===0){const o=new q(s.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=yr(r).toUint8Array()}catch(u){if(u instanceof Bw)return ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jf(o,i,s)}catch(u){return ri(u instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&md(l.target)){const u=new q(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ju(e,n,this.Ze,this.je,r);return this.je=kn(),this.Je=qa(),this.He=qa(),this.Ze=new Te(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ny,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Me(ne),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Me(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ny),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function qa(){return new Te(q.comparator)}function Dy(){return new Te(q.comparator)}const qx={asc:"ASCENDING",desc:"DESCENDING"},Kx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gx={and:"AND",or:"OR"};class Qx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yd(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Yx(t,e){return iu(t,e.toTimestamp())}function ln(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=gr(n);return new fe(r.seconds,r.nanos)}(t))}function Xf(t,e){return _d(t,e).canonicalString()}function _d(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _0(t){const e=de.fromString(t);return oe(I0(e),10190,{key:e.toString()}),e}function vd(t,e){return Xf(t.databaseId,e.path)}function eh(t,e){const n=_0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(E0(n))}function v0(t,e){return Xf(t.databaseId,e)}function Jx(t){const e=_0(t);return e.length===4?de.emptyPath():E0(e)}function Ed(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function E0(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vy(t,e,n){return{name:vd(t,e),fields:n.value.mapValue.fields}}function Xx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:p0(c.code);return new W(f,c.message||"")}(o);n=new g0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=eh(t,r.document.name),s=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):Y.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new yl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=eh(t,r.document),s=r.readTime?ln(r.readTime):Y.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=eh(t,r.document),s=r.removedTargetIds||[];n=new yl([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zx(i,s),l=r.targetId;n=new m0(l,o)}}return n}function Zx(t,e){let n;if(e instanceof la)n={update:Vy(t,e.key,e.value)};else if(e instanceof Qf)n={delete:vd(t,e.key)};else if(e instanceof Cr)n={update:Vy(t,e.key,e.data),updateMask:lN(e.fieldMask)};else{if(!(e instanceof Fx))return Q(16599,{dt:e.type});n={verify:vd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ru)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Yx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function eN(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?ln(i.updateTime):ln(s);return o.isEqual(Y.min())&&(o=ln(s)),new Ox(o,i.transformResults||[])}(n,e))):[]}function tN(t,e){return{documents:[v0(t,e.path)]}}function nN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=v0(t,i);const s=function(c){if(c.length!==0)return T0(hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:_i(m.field),direction:sN(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function rN(t){let e=Jx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=w0(p);return m instanceof hn&&Xw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new nu(vi(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new tu(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new tu(S,m)}(n.endAt)),vx(e,i,o,s,l,"F",u,c)}function iN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function w0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vi(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vi(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vi(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vi(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(vi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>w0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function sN(t){return qx[t]}function oN(t){return Kx[t]}function aN(t){return Gx[t]}function _i(t){return{fieldPath:t.canonicalString()}}function vi(t){return He.fromServerFormat(t.fieldPath)}function T0(t){return t instanceof be?function(n){if(n.op==="=="){if(Ey(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(vy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ey(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(vy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:oN(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>T0(i));return r.length===1?r[0]:{compositeFilter:{op:aN(n.op),filters:r}}}(t):Q(54877,{filter:t})}function lN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function I0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function S0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Xn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uN{constructor(e){this.yt=e}}function cN(t){const e=rN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gd(e,e.limit,"L"):e}/**
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
 */class hN{constructor(){this.bn=new dN}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(mr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class dN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(de.comparator)).toArray()}}/**
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
 */const by={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},R0=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(R0,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
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
 */class ns{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ns(0)}static ar(){return new ns(-1)}}/**
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
 */const Oy="LruGarbageCollector",fN=1048576;function Ly([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class pN{constructor(e){this.Pr=e,this.buffer=new Me(Ly),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ly(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class mN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(Oy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ms(n)?$(Oy,"Ignoring IndexedDB error during garbage collection: ",n):await ps(n)}await this.Ar(3e5)})}}class gN{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Du.ce);const r=new pN(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(by)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),by):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),gi()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function yN(t,e){return new gN(t,e)}/**
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
 */class _N{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class vN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class EN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&go(r.mutation,i,Et.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kn();const o=mo(),l=function(){return mo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),go(f.mutation,c,f.mutation.getFieldMask(),fe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new vN(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=mo();let i=new Te((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=o0();f.forEach(m=>{if(!s.has(m)){const S=d0(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Ex(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Br());let l=Uo,u=s;return o.next(c=>O.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:s0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const c=function(p,m){return new Ou(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Xs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&go(f.mutation,c,Et.empty(),fe.now()),Mu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class wN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ln(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:cN(i.bundledQuery),readTime:ln(i.readTime)}}(n)),O.resolve()}}/**
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
 */class TN{constructor(){this.overlays=new Te(q.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Br(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jx(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class IN{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Zf{constructor(){this.kr=new Me(Ue.qr),this.Kr=new Me(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ue(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new de([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new q(new de([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return q.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
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
 */class SN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(Ue.qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ux(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Bf:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new q(s),0);let l=new Me(ne);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RN{constructor(e){this.ti=e,this.docs=function(){return new Te(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Y1(Q1(f),r)<=0||(i.has(f.key)||Mu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AN(this)}getSize(e){return O.resolve(this.size)}}class AN extends _N{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class CN{constructor(e){this.persistence=e,this.ri=new li(n=>Wf(n),qf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Zf,this.targetCount=0,this.oi=ns._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
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
 */class A0{constructor(e,n){this._i={},this.overlays={},this.ai=new Du(0),this.ui=!1,this.ui=!0,this.ci=new IN,this.referenceDelegate=e(this),this.li=new CN(this),this.indexManager=new hN,this.remoteDocumentCache=function(i){return new RN(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new uN(n),this.Pi=new wN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new SN(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new PN(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class PN extends X1{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Ri=new Zf,this.Ai=null}static Vi(e){return new ep(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const i=q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class su{constructor(e,n){this.persistence=e,this.fi=new li(r=>tx(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=yN(this,n)}static Vi(e,n){return new su(e,n)}Ti(){}Ei(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pl(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class kN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return rC()?8:Z1(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kN;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(gi()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(gi()<=te.DEBUG&&$("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(gi()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):O.resolve())}gs(e,n){if(Sy(n))return O.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gd(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,gd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Sy(n)||i.isEqual(Y.min())?O.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?O.resolve(null):(gi()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.Ds(e,o,n,G1(i,Uo)).next(l=>l))})}Ss(e,n){let r=new Me(r0(e));return n.forEach((i,s)=>{Mu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return gi()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",yi(n)),this.fs.getDocumentsMatchingQuery(e,n,mr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const np="LocalStore",NN=3e8;class DN{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Te(ne),this.Fs=new li(s=>Wf(s),qf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function VN(t,e,n,r){return new DN(t,e,n,r)}async function C0(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function bN(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let S=O.resolve();return m.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(P=>{const D=c.docVersions.get(C);oe(D!==null,48541),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function P0(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function ON(t,e){const n=J(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(P,D,E){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=NN?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,S,f)&&l.push(n.li.updateTargetData(s,S))});let u=kn(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(LN(s,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function LN(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(np,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function MN(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FN(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function wd(t,e,n){const r=J(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ms(o))throw o;$(np,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function My(t,e,n){const r=J(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=J(u),m=p.Fs.get(f);return m!==void 0?O.resolve(p.vs.get(m)):p.li.getTargetData(c,f)}(r,o,an(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(UN(r,Ix(e),l),{documents:l,ks:s})))}function UN(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Fy{constructor(){this.activeTargetIds=kx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jN{constructor(){this.vo=new Fy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zN{Mo(e){}shutdown(){}}/**
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
 */const Uy="ConnectivityMonitor";class jy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(Uy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(Uy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ka=null;function Td(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
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
 */const th="RestConnection",BN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $N{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Zl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Td(),l=this.Qo(e,n.toUriEncodedString());$(th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),f=na(c);return this.zo(e,l,u,r,f).then(p=>($(th,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ri(th,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=BN[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class HN{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Je="WebChannelConnection",$s=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Bi extends $N{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Bi.c_){const e=bw();$s(e,Vw.STAT_EVENT,n=>{n.stat===cd.PROXY?$(Je,"STAT_EVENT: detected buffering proxy"):n.stat===cd.NOPROXY&&$(Je,"STAT_EVENT: detected no buffering proxy")}),Bi.c_=!0}}zo(e,n,r,i,s){const o=Td();return new Promise((l,u)=>{const c=new Nw;c.setWithCredentials(!0),c.listenOnce(Dw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case fl.NO_ERROR:const p=c.getResponseJson();$(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case fl.TIMEOUT:$(Je,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const m=c.getStatus();if($(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const P=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(C.status);u(new W(P,C.message))}else u(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Je,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Td(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(Je,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.E_(f);let p=!1,m=!1;const S=new HN({Jo:C=>{m?$(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||($(Je,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),$(Je,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Ho:()=>f.close()});return $s(f,Js.EventType.OPEN,()=>{m||($(Je,`RPC '${e}' stream ${i} transport opened.`),S.i_())}),$s(f,Js.EventType.CLOSE,()=>{m||(m=!0,$(Je,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.I_(f))}),$s(f,Js.EventType.ERROR,C=>{m||(m=!0,ri(Je,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),S.o_(new W(M.UNAVAILABLE,"The operation could not be completed")))}),$s(f,Js.EventType.MESSAGE,C=>{var P;if(!m){const D=C.data[0];oe(!!D,16349);const E=D,v=(E==null?void 0:E.error)||((P=E[0])==null?void 0:P.error);if(v){$(Je,`RPC '${e}' stream ${i} received error:`,v);const R=v.status;let b=function(_){const g=ke[_];if(g!==void 0)return p0(g)}(R),F=v.message;R==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&ri(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),b===void 0&&(b=M.INTERNAL,F="Unknown error status: "+R+" with message "+v.message),m=!0,S.o_(new W(b,F)),f.close()}else $(Je,`RPC '${e}' stream ${i} received:`,D),S.__(D)}}),Bi.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ow()}}/**
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
 */function WN(t){return new Bi(t)}function nh(){return typeof document<"u"?document:null}/**
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
 */function zu(t){return new Qx(t,!0)}/**
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
 */Bi.c_=!1;class k0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const zy="PersistentStream";class x0{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new k0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(zy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(zy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qN extends x0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Xx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?ln(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Ed(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=md(u)?{documents:tN(s,u)}:{query:nN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=y0(s,o.resumeToken);const c=yd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=iu(s,o.snapshotVersion.toTimestamp());const c=yd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=iN(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Ed(this.serializer),n.removeTarget=e,this.q_(n)}}class KN extends x0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=eN(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ed(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Zx(this.serializer,r))};this.q_(n)}}/**
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
 */class GN{}class QN extends GN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,_d(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,_d(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function YN(t,e,n,r){return new QN(t,e,n,r)}class JN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ii="RemoteStore";class XN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ui(this)&&($(ii,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ia.add(4),await ca(c),c.Va.set("Unknown"),c.Ia.delete(4),await Bu(c)}(this))})}),this.Va=new JN(r,i)}}async function Bu(t){if(ui(t))for(const e of t.Ra)await e(!0)}async function ca(t){for(const e of t.Ra)await e(!1)}function N0(t,e){const n=J(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),op(n)?sp(n):gs(n).O_()&&ip(n,e))}function rp(t,e){const n=J(t),r=gs(n);n.Ea.delete(e),r.O_()&&D0(n,e),n.Ea.size===0&&(r.O_()?r.L_():ui(n)&&n.Va.set("Unknown"))}function ip(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).Z_(e)}function D0(t,e){t.da.$e(e),gs(t).X_(e)}function sp(t){t.da=new Wx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.Va.ua()}function op(t){return ui(t)&&!gs(t).x_()&&t.Ea.size>0}function ui(t){return J(t).Ia.size===0}function V0(t){t.da=void 0}async function ZN(t){t.Va.set("Online")}async function e2(t){t.Ea.forEach((e,n)=>{ip(t,e)})}async function t2(t,e){V0(t),op(t)?(t.Va.ha(e),sp(t)):t.Va.set("Unknown")}async function n2(t,e,n){if(t.Va.set("Online"),e instanceof g0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){$(ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ou(t,r)}else if(e instanceof yl?t.da.Xe(e):e instanceof m0?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await P0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(c);f&&s.Ea.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken(Ke.EMPTY_BYTE_STRING,f.snapshotVersion)),D0(s,u);const p=new Xn(f.target,u,c,f.sequenceNumber);ip(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ii,"Failed to raise snapshot:",r),await ou(t,r)}}async function ou(t,e,n){if(!ms(e))throw e;t.Ia.add(1),await ca(t),t.Va.set("Offline"),n||(n=()=>P0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ii,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Bu(t)})}function b0(t,e){return e().catch(n=>ou(t,n,e))}async function $u(t){const e=J(t),n=vr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bf;for(;r2(e);)try{const i=await MN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,i2(e,i)}catch(i){await ou(e,i)}O0(e)&&L0(e)}function r2(t){return ui(t)&&t.Ta.length<10}function i2(t,e){t.Ta.push(e);const n=vr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function O0(t){return ui(t)&&!vr(t).x_()&&t.Ta.length>0}function L0(t){vr(t).start()}async function s2(t){vr(t).ra()}async function o2(t){const e=vr(t);for(const n of t.Ta)e.ea(n.mutations)}async function a2(t,e,n){const r=t.Ta.shift(),i=Yf.from(r,e,n);await b0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $u(t)}async function l2(t,e){e&&vr(t).Y_&&await async function(r,i){if(function(o){return Bx(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();vr(r).B_(),await b0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $u(r)}}(t,e),O0(t)&&L0(t)}async function By(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$(ii,"RemoteStore received new credentials");const r=ui(n);n.Ia.add(3),await ca(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Bu(n)}async function u2(t,e){const n=J(t);e?(n.Ia.delete(2),await Bu(n)):e||(n.Ia.add(2),await ca(n),n.Va.set("Unknown"))}function gs(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new qN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:ZN.bind(null,t),Yo:e2.bind(null,t),t_:t2.bind(null,t),H_:n2.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),op(t)?sp(t):t.Va.set("Unknown")):(await t.ma.stop(),V0(t))})),t.ma}function vr(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new KN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:s2.bind(null,t),t_:l2.bind(null,t),ta:o2.bind(null,t),na:a2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await $u(t)):(await t.fa.stop(),t.Ta.length>0&&($(ii,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class ap{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ap(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lp(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),ms(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $i{static emptySet(e){return new $i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class $y{constructor(){this.ga=new Te(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new rs(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class c2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class h2{constructor(){this.queries=Hy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Hy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function Hy(){return new li(t=>n0(t),Lu)}async function d2(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new c2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=lp(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&up(n)}async function f2(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function p2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&up(n)}function m2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function up(t){t.Ca.forEach(e=>{e.next()})}var Id,Wy;(Wy=Id||(Id={})).Ma="default",Wy.Cache="cache";class g2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Id.Cache}}/**
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
 */class M0{constructor(e){this.key=e}}class F0{constructor(e){this.key=e}}class y2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=r0(e),this.tu=new $i(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new $y,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=Mu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;m&&S?m.data.isEqual(S.data)?C!==P&&(r.track({type:3,doc:S}),D=!0):this.su(m,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.eu(S,u)>0||c&&this.eu(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),D=!0):m&&!S&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(l=!0)),D&&(S?(o=o.add(S),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(S,C){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:D})}};return P(S)-P(C)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new rs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $y,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new F0(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new M0(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const cp="SyncEngine";class _2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class v2{constructor(e){this.key=e,this.hu=!1}}class E2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new li(l=>n0(l),Lu),this.Eu=new Map,this.Iu=new Set,this.Ru=new Te(q.comparator),this.Au=new Map,this.Vu=new Zf,this.du={},this.mu=new Map,this.fu=ns.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function w2(t,e,n=!0){const r=H0(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await U0(r,e,n,!0),i}async function T2(t,e){const n=H0(t);await U0(n,e,!0,!1)}async function U0(t,e,n,r){const i=await FN(t.localStore,an(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await I2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&N0(t.remoteStore,i),l}async function I2(t,e,n,r,i){t.pu=(p,m,S)=>async function(P,D,E,v){let R=D.view.ru(E);R.bs&&(R=await My(P.localStore,D.query,!1).then(({documents:_})=>D.view.ru(_,R)));const b=v&&v.targetChanges.get(D.targetId),F=v&&v.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(R,P.isPrimaryClient,b,F);return Ky(P,D.targetId,j.au),j.snapshot}(t,p,m,S);const s=await My(t.localStore,e,!0),o=new y2(e,s.ks),l=o.ru(s.documents),u=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Ky(t,n,c.au);const f=new _2(e,n,o);return t.Tu.set(e,f),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function S2(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Lu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&rp(r.remoteStore,i.targetId),Sd(r,i.targetId)}).catch(ps)):(Sd(r,i.targetId),await wd(r.localStore,i.targetId,!0))}async function R2(t,e){const n=J(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rp(n.remoteStore,r.targetId))}async function A2(t,e,n){const r=V2(t);try{const i=await function(o,l){const u=J(o),c=fe.now(),f=l.reduce((S,C)=>S.add(C.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=kn(),P=re();return u.xs.getEntries(S,f).next(D=>{C=D,C.forEach((E,v)=>{v.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(D=>{p=D;const E=[];for(const v of l){const R=Mx(v,p.get(v.key).overlayedDocument);R!=null&&E.push(new Cr(v.key,R,Qw(R.value.mapValue),$t.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,E,l)}).next(D=>{m=D;const E=D.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(S,D.batchId,E)})}).then(()=>({batchId:m.batchId,changes:s0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Te(ne)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await ha(r,i.changes),await $u(r.remoteStore)}catch(i){const s=lp(i,"Failed to persist write");n.reject(s)}}async function j0(t,e){const n=J(t);try{const r=await ON(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await ha(n,r,e)}catch(r){await ps(r)}}function qy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&up(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function C2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Te(q.comparator);o=o.insert(s,et.newNoDocument(s,Y.min()));const l=re().add(s),u=new ju(Y.min(),new Map,new Te(ne),o,l);await j0(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),hp(r)}else await wd(r.localStore,e,!1).then(()=>Sd(r,e,n)).catch(ps)}async function P2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await bN(n.localStore,e);B0(n,r,null),z0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await ps(i)}}async function k2(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);B0(r,e,n),z0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await ps(i)}}function z0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function B0(t,e,n){const r=J(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Sd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||$0(t,r)})}function $0(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(rp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),hp(t))}function Ky(t,e,n){for(const r of n)r instanceof M0?(t.Vu.addReference(r.key,e),x2(t,r)):r instanceof F0?($(cp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||$0(t,r.key)):Q(19791,{wu:r})}function x2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||($(cp,"New document in limbo: "+n),t.Iu.add(r),hp(t))}function hp(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new q(de.fromString(e)),r=t.fu.next();t.Au.set(r,new v2(n)),t.Ru=t.Ru.insert(n,r),N0(t.remoteStore,new Xn(an(Kf(n.path)),r,"TargetPurposeLimboResolution",Du.ce))}}async function ha(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=tp.Is(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(c,m=>O.forEach(m.Ts,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>O.forEach(m.Es,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!ms(p))throw p;$(np,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=f.vs.get(m),C=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(m,P)}}}(r.localStore,s))}async function N2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$(cp,"User change. New user:",e.toKey());const r=await C0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.Ns)}}function D2(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function H0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C2.bind(null,e),e.Pu.H_=p2.bind(null,e.eventManager),e.Pu.yu=m2.bind(null,e.eventManager),e}function V2(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k2.bind(null,e),e}class au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return VN(this.persistence,new xN,e.initialUser,this.serializer)}Cu(e){return new A0(ep.Vi,this.serializer)}Du(e){return new jN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}au.provider={build:()=>new au};class b2 extends au{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof su,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mN(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new A0(r=>su.Vi(r,n),this.serializer)}}class Rd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=N2.bind(null,this.syncEngine),await u2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h2}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=WN(e.databaseInfo);return YN(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new XN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qy(this.syncEngine,n,0),function(){return jy.v()?new jy:new zN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new E2(i,s,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);$(ii,"RemoteStore shutting down."),s.Ia.add(5),await ca(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Rd.provider={build:()=>new Rd};/**
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
 */class O2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Er="FirestoreClient";class L2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rh(t,e){t.asyncQueue.verifyOperationInProgress(),$(Er,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await C0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await M2(t);$(Er,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>By(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>By(e.remoteStore,i)),t._onlineComponents=e}async function M2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Er,"Using user provided OfflineComponentProvider");try{await rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await rh(t,new au)}}else $(Er,"Using default OfflineComponentProvider"),await rh(t,new b2(void 0));return t._offlineComponents}async function W0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Er,"Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):($(Er,"Using default OnlineComponentProvider"),await Gy(t,new Rd))),t._onlineComponents}function F2(t){return W0(t).then(e=>e.syncEngine)}async function Qy(t){const e=await W0(t),n=e.eventManager;return n.onListen=w2.bind(null,e.syncEngine),n.onUnlisten=S2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=T2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=R2.bind(null,e.syncEngine),n}function U2(t,e,n,r){const i=new O2(r),s=new g2(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>d2(await Qy(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>f2(await Qy(t),s))}}function j2(t,e){const n=new Wr;return t.asyncQueue.enqueueAndForget(async()=>A2(await F2(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function q0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const z2="ComponentProvider",Yy=new Map;function B2(t,e,n,r,i){return new ix(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,q0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const K0="firestore.googleapis.com",Jy=!0;class Xy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K0,this.ssl=Jy}else this.host=e.host,this.ssl=e.ssl??Jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=R0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fN)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}K1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M1;switch(r.type){case"firstParty":return new z1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yy.get(n);r&&($(z2,"Removing Datastore"),Yy.delete(n),r.terminate())}(this),Promise.resolve()}}function $2(t,e,n,r={}){var c;t=hr(t,Hu);const i=na(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&$E(`https://${l}`),s.host!==K0&&s.host!==l&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Xr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Xe.MOCK_USER;else{f=YA(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Xe(m)}t._authCredentials=new F1(new Mw(f,p))}}/**
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
 */class Wu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wu(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(aa(n,Le._jsonSchema))return new Le(e,r||null,new q(de.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Ne("string",Le._jsonSchemaVersion),referencePath:Ne("string")};class dr extends Wu{constructor(e,n,r){super(e,n,Kf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new q(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function Zy(t,e,...n){if(t=rt(t),Fw("collection","path",e),t instanceof Hu){const r=de.fromString(e,...n);return hy(r),new dr(t,null,r)}{if(!(t instanceof Le||t instanceof dr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return hy(r),new dr(t.firestore,null,r)}}function eo(t,e,...n){if(t=rt(t),arguments.length===1&&(e=jf.newId()),Fw("doc","path",e),t instanceof Hu){const r=de.fromString(e,...n);return cy(r),new Le(t,null,new q(r))}{if(!(t instanceof Le||t instanceof dr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return cy(r),new Le(t.firestore,t instanceof dr?t.converter:null,new q(r))}}/**
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
 */const e_="AsyncQueue";class t_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new k0(this,"async_queue_retry"),this._c=()=>{const r=nh();r&&$(e_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=nh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Wr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ms(e))throw e;$(e_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Pn("INTERNAL UNHANDLED ERROR: ",n_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=ap.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:n_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function n_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class is extends Hu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new t_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t_(e),this._firestoreClient=void 0,await e}}}function H2(t,e){const n=typeof t=="object"?t:KE(),r=typeof t=="string"?t:Zl,i=xf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=GA("firestore");s&&$2(i,...s)}return i}function G0(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||W2(t),t._firestoreClient}function W2(t){var r,i,s,o;const e=t._freezeSettings(),n=B2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new L2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(Ke.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(aa(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:Ne("string",xt._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class dp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qu{constructor(e){this._methodName=e}}/**
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
 */class un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(e){if(aa(e,un._jsonSchema))return new un(e.latitude,e.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Ne("string",un._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(aa(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:Ne("string",Ht._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const q2=/^__.*__$/;class K2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class Q0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class fp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new fp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return lu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Y0(this.dataSource)&&q2.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class G2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}A(e,n,r,i=!1){return new fp({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function J0(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new G2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Q2(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);mp("Data must be an object, but it was:",o,r);const l=X0(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=qo(e,p,n);if(!o.contains(m))throw new W(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);tT(f,m)||f.push(m)}u=new Et(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new K2(new dt(l),u,c)}class Ku extends qu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ku}}class pp extends qu{_toFieldTransform(e){return new Vx(e.path,new $o)}isEqual(e){return e instanceof pp}}function Y2(t,e,n,r){const i=t.A(1,e,n);mp("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();Ar(r,(u,c)=>{const f=eT(e,u,n);c=rt(c);const p=i.fc(f);if(c instanceof Ku)s.push(f);else{const m=Gu(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Et(s);return new Q0(o,l,i.fieldTransforms)}function J2(t,e,n,r,i,s){const o=t.A(1,e,n),l=[qo(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(qo(e,s[m])),u.push(s[m+1]);const c=[],f=dt.empty();for(let m=l.length-1;m>=0;--m)if(!tT(c,l[m])){const S=l[m];let C=u[m];C=rt(C);const P=o.fc(S);if(C instanceof Ku)c.push(S);else{const D=Gu(C,P);D!=null&&(c.push(S),f.set(S,D))}}const p=new Et(c);return new Q0(f,p,o.fieldTransforms)}function Gu(t,e){if(Z0(t=rt(t)))return mp("Unsupported field value:",e,t),X0(t,e);if(t instanceof qu)return function(r,i){if(!Y0(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Gu(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:iu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:iu(i.serializer,s)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:y0(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,l){const u=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[Kw]:{stringValue:Gw},[eu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.yc("VectorValues must only contain numeric values.");return Gf(l.serializer,f)})}}}}}}(r,i);if(S0(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${zf(r)}`)}(t,e)}function X0(t,e){const n={};return zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,(r,i)=>{const s=Gu(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Z0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof un||t instanceof xt||t instanceof Le||t instanceof qu||t instanceof Ht||S0(t))}function mp(t,e,n){if(!Z0(n)||!Uw(n)){const r=zf(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function qo(t,e,n){if((e=rt(e))instanceof dp)return e._internalPath;if(typeof e=="string")return eT(t,e);throw lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const X2=new RegExp("[~\\*/\\[\\]]");function eT(t,e,n){if(e.search(X2)>=0)throw lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dp(...e.split("."))._internalPath}catch{throw lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function tT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Z2{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[eu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new un(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const n=gr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);oe(I0(r),9688,{name:e});const i=new zo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nT extends Z2{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function eD(){return new pp("serverTimestamp")}const r_="@firebase/firestore",i_="4.13.0";/**
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
 */function s_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class rT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(qo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends rT{data(){return super.data()}}/**
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
 */function nD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function rD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends rT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Ne("string",qr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class _l extends qr{data(e={}){return super.data(e)}}class Hi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new to(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new to(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new _l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new to(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:iD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */Hi._jsonSchemaVersion="firestore/querySnapshot/1.0",Hi._jsonSchema={type:Ne("string",Hi._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};function ih(t,e,n,...r){t=hr(t,Le);const i=hr(t.firestore,is),s=J0(i);let o;return o=typeof(e=rt(e))=="string"||e instanceof dp?J2(s,"updateDoc",t._key,e,n,r):Y2(s,"updateDoc",t._key,e),gp(i,[o.toMutation(t._key,$t.exists(!0))])}function sD(t){return gp(hr(t.firestore,is),[new Qf(t._key,$t.none())])}function oD(t,e){const n=hr(t.firestore,is),r=eo(t),i=rD(t.converter,e),s=J0(t.firestore);return gp(n,[Q2(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function aD(t,...e){var c,f,p;t=rt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||s_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(s_(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(t instanceof Le)o=hr(t.firestore,is),l=Kf(t._key.path),s={next:m=>{e[r]&&e[r](lD(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=hr(t,Wu);o=hr(m.firestore,is),l=m._query;const S=new nT(o);s={next:C=>{e[r]&&e[r](new Hi(o,S,m,C))},error:e[r+1],complete:e[r+2]},nD(t._query)}const u=G0(o);return U2(u,l,i,s)}function gp(t,e){const n=G0(t);return j2(n,e)}function lD(t,e,n){const r=n.docs.get(e._key),i=new nT(t);return new qr(t,i,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){L1(hs),Xi(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new is(new U1(r.getProvider("auth-internal")),new B1(o,r.getProvider("app-check-internal")),sx(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ur(r_,i_,e),ur(r_,i_,"esm2020")})();const iT={apiKey:"AIzaSyBdadFfaTwyPN7iw6F_X1EswJ1QXQBVXlg",authDomain:"todowebapp-79b88.firebaseapp.com",projectId:"todowebapp-79b88",storageBucket:"todowebapp-79b88.firebasestorage.app",messagingSenderId:"703674122131",appId:"1:703674122131:web:ea531364f84de973d53266"},o_=Object.entries(iT).filter(([,t])=>!t).map(([t])=>t);if(o_.length>0)throw new Error(`Missing Firebase env config: ${o_.join(", ")}`);const sT=qE(iT),yp=b1(sT),mi=H2(sT),uD=(t,e)=>Ek(yp,t,e),cD=(t,e)=>wk(yp,t,e),hD=()=>L.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[90vh] text-center px-4",children:[L.jsxs("h1",{className:"text-6xl font-black text-gray-900 mb-6",children:["Organize your life ",L.jsx("br",{})," ",L.jsx("span",{className:"text-blue-600",children:"in one click."})]}),L.jsx("p",{className:"text-xl text-gray-500 max-w-2xl mb-10",children:"The professional task manager designed for speed and simplicity. Sync your todos across all devices with real-time Firebase integration."}),L.jsxs("div",{className:"flex gap-4",children:[L.jsx(en,{to:"/signup",className:"bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition",children:"Get Started Free"}),L.jsx(en,{to:"/login",className:"bg-white border px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition",children:"View Demo"})]})]}),dD=()=>{const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,s]=N.useState(""),o=async l=>{l.preventDefault();try{await cD(t,n)}catch{s("Invalid credentials. Try again.")}};return L.jsx("div",{className:"min-h-[80vh] flex items-center justify-center",children:L.jsxs("form",{onSubmit:o,className:"w-full max-w-md p-8 bg-white rounded-2xl shadow-xl",children:[L.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Login to Smart Todo"}),i&&L.jsx("p",{className:"text-red-500 mb-4 text-center text-sm",children:i}),L.jsx("input",{type:"email",placeholder:"Email",className:"w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500",onChange:l=>e(l.target.value),required:!0}),L.jsx("input",{type:"password",placeholder:"Password",className:"w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-blue-500",onChange:l=>r(l.target.value),required:!0}),L.jsx("button",{className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition",children:"Sign In"}),L.jsxs("p",{className:"mt-4 text-center text-sm text-gray-600",children:["New here? ",L.jsx(en,{to:"/signup",className:"text-blue-600 font-bold",children:"Create account"})]})]})})},fD=()=>{const t=If(),[e,n]=N.useState(""),[r,i]=N.useState(""),[s,o]=N.useState(""),[l,u]=N.useState(""),[c,f]=N.useState(""),[p,m]=N.useState(!1),S=async C=>{if(C.preventDefault(),f(""),s.length<6){f("Password must be at least 6 characters long.");return}if(s!==l){f("Passwords do not match.");return}try{m(!0),await uD(r,s),t("/dashboard")}catch(P){P.code==="auth/email-already-in-use"?f("An account already exists for this email."):P.code==="auth/invalid-email"?f("Enter a valid email address."):f("Unable to create your account right now.")}finally{m(!1)}};return L.jsx("div",{className:"flex min-h-[80vh] items-center justify-center px-4 py-10",children:L.jsxs("form",{onSubmit:S,className:"w-full max-w-md rounded-2xl bg-white p-8 shadow-xl",children:[L.jsx("p",{className:"mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600",children:"Get Started"}),L.jsx("h1",{className:"mb-2 text-3xl font-black text-gray-900",children:"Create an Account"}),L.jsx("p",{className:"mb-6 text-sm text-gray-500",children:"Set up your Smart Todo workspace in less than a minute."}),c&&L.jsx("p",{className:"mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600",children:c}),L.jsx("input",{type:"text",placeholder:"Full name",value:e,onChange:C=>n(C.target.value),className:"mb-4 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500",required:!0}),L.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:C=>i(C.target.value),className:"mb-4 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500",required:!0}),L.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:C=>o(C.target.value),className:"mb-4 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500",required:!0}),L.jsx("input",{type:"password",placeholder:"Confirm password",value:l,onChange:C=>u(C.target.value),className:"mb-6 w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500",required:!0}),L.jsx("button",{type:"submit",disabled:p,className:"w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400",children:p?"Creating account...":`Create Account${e?`, ${e.split(" ")[0]}`:""}`}),L.jsxs("p",{className:"mt-4 text-center text-sm text-gray-600",children:["Already have an account?"," ",L.jsx(en,{to:"/login",className:"font-bold text-blue-600",children:"Sign in"})]})]})})};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=t=>{const e=mD(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},yD=N.createContext({}),_D=()=>N.useContext(yD),vD=N.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>{const{size:c=24,strokeWidth:f=2,absoluteStrokeWidth:p=!1,color:m="currentColor",className:S=""}=_D()??{},C=r??p?Number(n??f)*24/Number(e??c):n??f;return N.createElement("svg",{ref:u,...sh,width:e??c??sh.width,height:e??c??sh.height,stroke:t??m,strokeWidth:C,className:oT("lucide",S,i),...!s&&!gD(l)&&{"aria-hidden":"true"},...l},[...o.map(([P,D])=>N.createElement(P,D)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=(t,e)=>{const n=N.forwardRef(({className:r,...i},s)=>N.createElement(vD,{ref:s,iconNode:e,className:oT(`lucide-${pD(a_(t))}`,`lucide-${t}`,r),...i}));return n.displayName=a_(t),n};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],wD=ys("calendar-days",ED);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ID=ys("pencil",TD);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],RD=ys("plus",SD);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],CD=ys("save",AD);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],kD=ys("trash-2",PD);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ND=ys("x",xD),yo=[{value:"low",label:"Low",chipClass:"bg-emerald-50 text-emerald-700 border-emerald-200"},{value:"medium",label:"Medium",chipClass:"bg-amber-50 text-amber-700 border-amber-200"},{value:"high",label:"High",chipClass:"bg-rose-50 text-rose-700 border-rose-200"}],Ga={title:"",description:"",priority:"medium",dueDate:""},DD=t=>{if(!t)return"No due date";const e=new Date(`${t}T00:00:00`);return Number.isNaN(e.getTime())?t:e.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})},VD=t=>yo.find(e=>e.value===t)??yo[1],bD=({user:t})=>{const[e,n]=N.useState(Ga),[r,i]=N.useState([]),[s,o]=N.useState(""),[l,u]=N.useState(!1),[c,f]=N.useState(null),[p,m]=N.useState(Ga);N.useEffect(()=>{const _=Zy(mi,"users",t.uid,"todos");return aD(_,w=>{const T=w.docs.map(A=>({id:A.id,...A.data()})).sort((A,k)=>{var B,K;const I=Number(A.completed)-Number(k.completed);if(I!==0)return I;const _e={high:0,medium:1,low:2},Re=(_e[A.priority]??1)-(_e[k.priority]??1);if(Re!==0)return Re;const Pr=((B=A.createdAt)==null?void 0:B.seconds)??0;return(((K=k.createdAt)==null?void 0:K.seconds)??0)-Pr});i(T),o("")},w=>{console.error("Failed to load todos:",w),o(w.message||"Tasks could not be loaded. Check your Firebase rules and config.")})},[t.uid]);const S=(_,g)=>{n(w=>({...w,[_]:g}))},C=(_,g)=>{m(w=>({...w,[_]:g}))},P=()=>{n(Ga)},D=_=>{f(_.id),m({title:_.title??"",description:_.description??"",priority:_.priority??"medium",dueDate:_.dueDate??""}),o("")},E=()=>{f(null),m(Ga)},v=async _=>{_.preventDefault();const g=e.title.trim();if(!(!g||l))try{u(!0),o(""),await oD(Zy(mi,"users",t.uid,"todos"),{title:g,description:e.description.trim(),priority:e.priority,dueDate:e.dueDate||null,completed:!1,createdAt:eD()}),P()}catch(w){console.error("Failed to add todo:",w),o(w.message||"Task could not be added. If Firebase is connected, check Firestore rules.")}finally{u(!1)}},R=async _=>{const g=p.title.trim();if(!g){o("Task title cannot be empty.");return}try{o(""),await ih(eo(mi,"users",t.uid,"todos",_),{title:g,description:p.description.trim(),priority:p.priority,dueDate:p.dueDate||null}),E()}catch(w){console.error("Failed to save todo:",w),o(w.message||"Task could not be updated.")}},b=async _=>{try{o(""),await ih(eo(mi,"users",t.uid,"todos",_.id),{completed:!_.completed})}catch(g){console.error("Failed to update todo:",g),o(g.message||"Task status could not be updated.")}},F=async(_,g)=>{try{o(""),await ih(eo(mi,"users",t.uid,"todos",_.id),{priority:g})}catch(w){console.error("Failed to update priority:",w),o(w.message||"Task priority could not be updated.")}},j=async _=>{try{o(""),await sD(eo(mi,"users",t.uid,"todos",_))}catch(g){console.error("Failed to delete todo:",g),o(g.message||"Task could not be deleted.")}};return L.jsxs("div",{className:"mx-auto max-w-5xl p-6",children:[L.jsxs("header",{className:"mb-8 flex flex-col gap-2",children:[L.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.25em] text-blue-600",children:"Dashboard"}),L.jsxs("h1",{className:"text-3xl font-black text-gray-900",children:["Welcome, ",t.email.split("@")[0]]}),L.jsx("p",{className:"text-gray-500",children:"Create tasks, set priorities, and keep deadlines visible."})]}),s&&L.jsx("p",{className:"mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600",children:s}),L.jsx("form",{onSubmit:v,className:"mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm",children:L.jsxs("div",{className:"grid gap-3 md:grid-cols-[1.5fr_1fr_0.8fr_1fr_auto]",children:[L.jsx("input",{type:"text",value:e.title,onChange:_=>S("title",_.target.value),className:"w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",placeholder:"Add a task title"}),L.jsx("input",{type:"text",value:e.description,onChange:_=>S("description",_.target.value),className:"w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",placeholder:"Short description"}),L.jsx("select",{value:e.priority,onChange:_=>S("priority",_.target.value),className:"rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",children:yo.map(_=>L.jsxs("option",{value:_.value,children:[_.label," priority"]},_.value))}),L.jsx("input",{type:"date",value:e.dueDate,onChange:_=>S("dueDate",_.target.value),className:"rounded-xl border border-gray-200 px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),L.jsx("button",{className:"inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400",type:"submit",disabled:l,"aria-label":"Add task",children:L.jsx(RD,{size:20})})]})}),L.jsxs("div",{className:"space-y-4",children:[r.length===0&&L.jsx("p",{className:"rounded-2xl border border-dashed border-gray-300 py-12 text-center text-gray-400",children:"No tasks yet."}),r.map(_=>{const g=VD(_.priority),w=c===_.id;return L.jsx("article",{className:"rounded-3xl border border-gray-200 bg-white p-5 shadow-sm",children:w?L.jsxs("div",{className:"grid gap-3 md:grid-cols-[1.3fr_1fr_0.8fr_1fr_auto]",children:[L.jsx("input",{type:"text",value:p.title,onChange:T=>C("title",T.target.value),className:"w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),L.jsx("input",{type:"text",value:p.description,onChange:T=>C("description",T.target.value),className:"w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",placeholder:"Short description"}),L.jsx("select",{value:p.priority,onChange:T=>C("priority",T.target.value),className:"rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",children:yo.map(T=>L.jsxs("option",{value:T.value,children:[T.label," priority"]},T.value))}),L.jsx("input",{type:"date",value:p.dueDate,onChange:T=>C("dueDate",T.target.value),className:"rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}),L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("button",{type:"button",onClick:()=>R(_.id),className:"inline-flex items-center justify-center rounded-xl bg-gray-900 p-3 text-white transition hover:bg-gray-700","aria-label":"Save task",children:L.jsx(CD,{size:18})}),L.jsx("button",{type:"button",onClick:E,className:"inline-flex items-center justify-center rounded-xl border border-gray-200 p-3 text-gray-500 transition hover:bg-gray-50","aria-label":"Cancel editing",children:L.jsx(ND,{size:18})})]})]}):L.jsxs("div",{className:"flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[L.jsxs("div",{className:"flex items-start gap-4",children:[L.jsx("input",{type:"checkbox",checked:!!_.completed,onChange:()=>b(_),className:"mt-1 h-5 w-5 cursor-pointer"}),L.jsxs("div",{className:"space-y-2",children:[L.jsx("p",{className:`text-lg font-semibold ${_.completed?"text-gray-400 line-through":"text-gray-900"}`,children:_.title}),_.description?L.jsx("p",{className:`max-w-2xl text-sm ${_.completed?"text-gray-400":"text-gray-500"}`,children:_.description}):null,L.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-sm",children:[L.jsx("span",{className:`rounded-full border px-3 py-1 font-semibold ${g.chipClass}`,children:g.label}),L.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-slate-600",children:[L.jsx(wD,{size:15}),DD(_.dueDate)]})]})]})]}),L.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[L.jsx("select",{value:_.priority??"medium",onChange:T=>F(_,T.target.value),className:"rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",children:yo.map(T=>L.jsx("option",{value:T.value,children:T.label},T.value))}),L.jsx("button",{type:"button",onClick:()=>D(_),className:"inline-flex items-center justify-center rounded-xl border border-gray-200 p-3 text-gray-600 transition hover:bg-gray-50","aria-label":"Edit task",children:L.jsx(ID,{size:18})}),L.jsx("button",{type:"button",onClick:()=>j(_.id),className:"inline-flex items-center justify-center rounded-xl border border-red-100 p-3 text-red-500 transition hover:bg-red-50","aria-label":"Delete task",children:L.jsx(kD,{size:18})})]})]})},_.id)})]})]})};function OD({user:t}){return L.jsx("header",{className:"border-b bg-white/90 backdrop-blur",children:L.jsxs("nav",{className:"mx-auto flex max-w-6xl items-center justify-between px-6 py-4",children:[L.jsx(en,{to:"/",className:"text-xl font-black tracking-tight text-gray-900",children:"TodoWebApp"}),L.jsx("div",{className:"flex items-center gap-3 text-sm font-semibold",children:t?L.jsxs(L.Fragment,{children:[L.jsx(en,{to:"/dashboard",className:"rounded-full px-4 py-2 text-gray-700 transition hover:bg-gray-100",children:"Dashboard"}),L.jsx("span",{className:"hidden text-gray-500 sm:inline",children:t.email})]}):L.jsxs(L.Fragment,{children:[L.jsx(en,{to:"/login",className:"rounded-full px-4 py-2 text-gray-700 transition hover:bg-gray-100",children:"Login"}),L.jsx(en,{to:"/signup",className:"rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700",children:"Sign up"})]})})]})})}function LD(){const[t,e]=N.useState(null),[n,r]=N.useState(!0);return N.useEffect(()=>yp.onAuthStateChanged(s=>{e(s),r(!1)}),[]),n?L.jsx("div",{className:"h-screen flex items-center justify-center",children:"Loading..."}):L.jsxs(xA,{children:[L.jsx(OD,{user:t}),L.jsxs(oA,{children:[L.jsx(Gs,{path:"/",element:L.jsx(hD,{})}),L.jsx(Gs,{path:"/login",element:t?L.jsx(Hc,{to:"/dashboard"}):L.jsx(dD,{})}),L.jsx(Gs,{path:"/signup",element:t?L.jsx(Hc,{to:"/dashboard"}):L.jsx(fD,{})}),L.jsx(Gs,{path:"/dashboard",element:t?L.jsx(bD,{user:t}):L.jsx(Hc,{to:"/login"})})]})]})}oh.createRoot(document.getElementById("root")).render(L.jsx(XT.StrictMode,{children:L.jsx(LD,{})}));
