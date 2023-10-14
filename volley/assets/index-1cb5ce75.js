import{b5 as O,b3 as c}from"./index-e6d6265d.js";import{t as h}from"./tslib.es6-c2094241.js";const b="PARSE_ERROR",F="INVALID_REQUEST",N="METHOD_NOT_FOUND",w="INVALID_PARAMS",y="INTERNAL_ERROR",f="SERVER_ERROR",A=[-32700,-32600,-32601,-32602,-32603],s={[b]:{code:-32700,message:"Parse error"},[F]:{code:-32600,message:"Invalid Request"},[N]:{code:-32601,message:"Method not found"},[w]:{code:-32602,message:"Invalid params"},[y]:{code:-32603,message:"Internal error"},[f]:{code:-32e3,message:"Server error"}},m=f;function D(e){return A.includes(e)}function p(e){return Object.keys(s).includes(e)?s[e]:s[m]}function I(e){const r=Object.values(s).find(t=>t.code===e);return r||s[m]}function V(e,r,t){return e.message.includes("getaddrinfo ENOTFOUND")||e.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${t} RPC url at ${r}`):e}var S={};const M=O(h);var o={},l;function j(){if(l)return o;l=1,Object.defineProperty(o,"__esModule",{value:!0}),o.isBrowserCryptoAvailable=o.getSubtleCrypto=o.getBrowerCrypto=void 0;function e(){return(c===null||c===void 0?void 0:c.crypto)||(c===null||c===void 0?void 0:c.msCrypto)||{}}o.getBrowerCrypto=e;function r(){const a=e();return a.subtle||a.webkitSubtle}o.getSubtleCrypto=r;function t(){return!!e()&&!!r()}return o.isBrowserCryptoAvailable=t,o}var n={},E;function T(){if(E)return n;E=1,Object.defineProperty(n,"__esModule",{value:!0}),n.isBrowser=n.isNode=n.isReactNative=void 0;function e(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}n.isReactNative=e;function r(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}n.isNode=r;function t(){return!e()&&!r()}return n.isBrowser=t,n}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const r=M;r.__exportStar(j(),e),r.__exportStar(T(),e)})(S);function _(e=3){const r=Date.now()*Math.pow(10,e),t=Math.floor(Math.random()*Math.pow(10,e));return r+t}function $(e=6){return BigInt(_(e))}function J(e,r,t){return{id:t||_(),jsonrpc:"2.0",method:e,params:r}}function H(e,r){return{id:e,jsonrpc:"2.0",result:r}}function Q(e,r,t){return{id:e,jsonrpc:"2.0",error:U(r,t)}}function U(e,r){return typeof e>"u"?p(y):(typeof e=="string"&&(e=Object.assign(Object.assign({},p(f)),{message:e})),typeof r<"u"&&(e.data=r),D(e.code)&&(e=I(e.code)),e)}var k=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),C="%[a-f0-9]{2}",v=new RegExp("("+C+")|([^%]+?)","gi"),g=new RegExp("("+C+")+","gi");function d(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;var t=e.slice(0,r),a=e.slice(r);return Array.prototype.concat.call([],d(t),d(a))}function B(e){try{return decodeURIComponent(e)}catch{for(var r=e.match(v)||[],t=1;t<r.length;t++)e=d(r,t).join(""),r=e.match(v)||[];return e}}function x(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},t=g.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{var a=B(t[0]);a!==t[0]&&(r[t[0]]=a)}t=g.exec(e)}r["%C2"]="�";for(var i=Object.keys(r),u=0;u<i.length;u++){var R=i[u];e=e.replace(new RegExp(R,"g"),r[R])}return e}var G=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return x(e)}},z=(e,r)=>{if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[e];const t=e.indexOf(r);return t===-1?[e]:[e.slice(0,t),e.slice(t+r.length)]};export{k as a,Q as b,S as c,G as d,V as e,J as f,$ as g,H as h,_ as p,M as r,z as s};
