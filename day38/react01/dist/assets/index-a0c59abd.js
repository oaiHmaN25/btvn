(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var ve=/([:*])(\w+)/g,pe="([^/]+)",me=/\*/g,ge="?(?:.*)",_e=/\/\?/g,ye="/?([^/]+|)",Oe="(?:/^|^)",Ee="";function $(e){return e===void 0&&(e="/"),C()?location.pathname+location.search+location.hash:e}function l(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function P(e){return typeof e=="string"}function Le(e){return typeof e=="function"}function b(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Re(e,r){return r.length===0||!e?null:e.slice(1,e.length).reduce(function(a,n,i){return a===null&&(a={}),a[r[i]]=decodeURIComponent(n),a},null)}function S(e){var r=l(e).split(/\?(.*)?$/);return[l(r[0]),r.slice(1).join("")]}function F(e){for(var r={},a=e.split("&"),n=0;n<a.length;n++){var i=a[n].split("=");if(i[0]!==""){var s=decodeURIComponent(i[0]);r[s]?(Array.isArray(r[s])||(r[s]=[r[s]]),r[s].push(decodeURIComponent(i[1]||""))):r[s]=decodeURIComponent(i[1]||"")}}return r}function z(e,r){var a=S(l(e.currentLocationPath)),n=a[0],i=a[1],s=i===""?null:F(i),f=[],d;if(P(r.path)){if(d=Oe+l(r.path).replace(ve,function(O,_,E){return f.push(E),pe}).replace(me,ge).replace(_e,ye)+"$",l(r.path)===""&&l(n)==="")return{url:n,queryString:i,hashString:b(e.to),route:r,data:null,params:s}}else d=r.path;var g=new RegExp(d,Ee),v=n.match(g);if(v){var L=P(r.path)?Re(v,f):v.groups?v.groups:v.slice(1);return{url:l(n.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:b(e.to),route:r,data:L,params:s}}return!1}function K(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function y(e,r){return typeof e[r]>"u"||e[r]===!0}function Ae(e){if(!e)return{};var r=e.split(","),a={},n;return r.forEach(function(i){var s=i.split(":").map(function(f){return f.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":a.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=s[1];break;case"resolveOptionsHash":n||(n={}),n.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":a[s[0]]=s[1]==="true";break}}),n&&(a.resolveOptions=n),a}function C(){return typeof window<"u"}function Pe(e,r){return e===void 0&&(e=[]),r===void 0&&(r={}),e.filter(function(a){return a}).forEach(function(a){["before","after","already","leave"].forEach(function(n){a[n]&&(r[n]||(r[n]=[]),r[n].push(a[n]))})}),r}function m(e,r,a){var n=r||{},i=0;(function s(){if(!e[i]){a&&a(n);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](n)?e[i][1]:e[i][2])),s()):e[i](n,function(f){typeof f>"u"||f===!0?(i+=1,s()):a&&a(n)})})()}m.if=function(e,r,a){return Array.isArray(r)||(r=[r]),Array.isArray(a)||(a=[a]),[e,r,a]};function j(e,r){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=$(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),r()}function w(e,r){for(var a=0;a<e.instance.routes.length;a++){var n=e.instance.routes[a],i=z(e,n);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){r();return}}r()}function be(e,r){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),r()}function Se(e,r){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),r(!1)):r()}var D=C(),we=K();function ke(e,r){if(y(e.navigateOptions,"updateBrowserURL")){var a=("/"+e.to).replace(/\/\//g,"/"),n=D&&e.resolveOptions&&e.resolveOptions.hash===!0;we?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",n?"#"+a:a),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!n){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):D&&(window.location.href=e.to)}r()}function V(e,r){var a=e.instance;if(!a.lastResolved()){r();return}m(a.lastResolved().map(function(n){return function(i,s){if(!n.route.hooks||!n.route.hooks.leave){s();return}var f=!1,d=e.instance.matchLocation(n.route.path,e.currentLocationPath,!1);if(n.route.path!=="*")f=!d;else{var g=e.matches?e.matches.find(function(v){return n.route.path===v.route.path}):!1;f=!g}if(y(e.navigateOptions,"callHooks")&&f){m(n.route.hooks.leave.map(function(v){return function(L,O){return v(function(_){_===!1?e.instance.__markAsClean(e):O()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return r()})}function He(e,r){e.match.route.hooks&&e.match.route.hooks.before&&y(e.navigateOptions,"callHooks")?m(e.match.route.hooks.before.map(function(a){return function(i,s){return a(function(f){f===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return r()}])):r()}function Te(e,r){y(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),r()}function Fe(e,r){e.match.route.hooks&&e.match.route.hooks.after&&y(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(a){return a(e.match)}),r()}function Ce(e,r){var a=e.instance.lastResolved();if(a&&a[0]&&a[0].route===e.match.route&&a[0].url===e.match.url&&a[0].queryString===e.match.queryString){a.forEach(function(n){n.route.hooks&&n.route.hooks.already&&y(e.navigateOptions,"callHooks")&&n.route.hooks.already.forEach(function(i){return i(e.match)})}),r(!1);return}r()}function Ne(e,r){var a=e.instance._notFoundRoute;if(a){e.notFoundHandled=!0;var n=S(e.currentLocationPath),i=n[0],s=n[1],f=b(e.to);a.path=l(i);var d={url:a.path,queryString:s,hashString:f,data:null,route:a,params:s!==""?F(s):null};e.matches=[d],e.match=d}r()}function Me(e,r){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),r()}function Ge(e,r){e.instance._setCurrent(null),r()}function Q(e,r){y(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),r()}var Y=[Ce,He,Te,Fe],q=[V,Ne,m.if(function(e){var r=e.notFoundHandled;return r},Y.concat([Q]),[Me,Ge])];function H(){return H=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},H.apply(this,arguments)}function W(e,r){var a=0;function n(){if(a===e.matches.length){Q(e,r);return}m(Y,H({},e,{match:e.matches[a]}),function(){a+=1,n()})}V(e,n)}function k(e){e.instance.__markAsClean(e)}function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T.apply(this,arguments)}var X="[data-navigo]";function Ie(e,r){var a=r||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:X},n=this,i="/",s=null,f=[],d=!1,g,v=K(),L=C();e?i=l(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function O(t){return t.indexOf("#")>=0&&(a.hash===!0?t=t.split("#")[1]||"/":t=t.split("#")[0]),t}function _(t){return l(i+"/"+l(t))}function E(t,o,u,h){return t=P(t)?_(t):t,{name:h||l(String(t)),path:t,handler:o,hooks:Pe(u)}}function J(t,o,u){var h=this;return typeof t=="object"&&!(t instanceof RegExp)?(Object.keys(t).forEach(function(c){if(typeof t[c]=="function")h.on(c,t[c]);else{var p=t[c],R=p.uses,le=p.as,de=p.hooks;f.push(E(c,R,[g,de],le))}}),this):(typeof t=="function"&&(u=o,o=t,t=i),f.push(E(t,o,[g,u])),this)}function N(t,o){if(n.__dirty){n.__waiting.push(function(){return n.resolve(t,o)});return}else n.__dirty=!0;t=t?l(i)+"/"+l(t):void 0;var u={instance:n,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:T({},a,o)};return m([j,w,m.if(function(h){var c=h.matches;return c&&c.length>0},W,q)],u,k),u.matches?u.matches:!1}function M(t,o){if(n.__dirty){n.__waiting.push(function(){return n.navigate(t,o)});return}else n.__dirty=!0;t=l(i)+"/"+l(t);var u={instance:n,to:t,navigateOptions:o||{},resolveOptions:o&&o.resolveOptions?o.resolveOptions:a,currentLocationPath:O(t)};m([be,Se,w,m.if(function(h){var c=h.matches;return c&&c.length>0},W,q),ke,k],u,k)}function Z(t,o,u){var h=I(t,o);return h!==null?(M(h.replace(new RegExp("^/?"+i),""),u),!0):!1}function x(t){return this.routes=f=f.filter(function(o){return P(t)?l(o.path)!==l(t):Le(t)?t!==o.handler:String(o.path)!==String(t)}),this}function ee(){v&&(this.__popstateListener=function(){n.__freezeListening||N()},window.addEventListener("popstate",this.__popstateListener))}function te(){this.routes=f=[],v&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=d=!0}function re(t,o){return n._notFoundRoute=E("*",t,[g,o],"__NOT_FOUND__"),this}function G(){if(L)return ne().forEach(function(t){if(t.getAttribute("data-navigo")==="false"||t.getAttribute("target")==="_blank"){t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler);return}t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(o){if((o.ctrlKey||o.metaKey)&&o.target.tagName.toLowerCase()==="a")return!1;var u=t.getAttribute("href");if(typeof u>"u"||u===null)return!1;if(u.match(/^(http|https)/)&&typeof URL<"u")try{var h=new URL(u);u=h.pathname+h.search}catch{}var c=Ae(t.getAttribute("data-navigo-options"));d||(o.preventDefault(),o.stopPropagation(),n.navigate(l(u),c))},t.addEventListener("click",t.navigoHandler))}),n}function ne(){return L?[].slice.call(document.querySelectorAll(a.linksSelector||X)):[]}function ae(t){return"/"+i+"/"+l(t)}function ie(t){return g=t,this}function oe(){return s}function I(t,o,u){var h=f.find(function(R){return R.name===t}),c=null;if(h){if(c=h.path,o)for(var p in o)c=c.replace(":"+p,o[p]);c=c.match(/^\//)?c:"/"+c}return c&&u&&!u.includeRoot&&(c=c.replace(new RegExp("^/"+i),"")),c}function se(t){return t.getAttribute("href")}function U(t){var o=S(l(t)),u=o[0],h=o[1],c=h===""?null:F(h),p=b(t),R=E(u,function(){},[g],u);return{url:u,queryString:h,hashString:p,route:R,data:null,params:c}}function ue(){return U(l($(i)).replace(new RegExp("^"+i),""))}function ce(t){var o={instance:n,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:a};return w(o,function(){}),o.matches?o.matches:!1}function fe(t,o,u){typeof o<"u"&&(typeof u>"u"||u)&&(o=_(o));var h={instance:n,to:o,currentLocationPath:o};j(h,function(){}),typeof t=="string"&&(t=typeof u>"u"||u?_(t):t);var c=z(h,{name:String(t),path:t,handler:function(){},hooks:{}});return c||!1}function A(t,o,u){return typeof o=="string"&&(o=B(o)),o?(o.hooks[t]||(o.hooks[t]=[]),o.hooks[t].push(u),function(){o.hooks[t]=o.hooks[t].filter(function(h){return h!==u})}):(console.warn("Route doesn't exists: "+o),function(){})}function B(t){return typeof t=="string"?f.find(function(o){return o.name===_(t)}):f.find(function(o){return o.handler===t})}function he(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()}this.root=i,this.routes=f,this.destroyed=d,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=he,this.on=J,this.off=x,this.resolve=N,this.navigate=M,this.navigateByName=Z,this.destroy=te,this.notFound=re,this.updatePageLinks=G,this.link=ae,this.hooks=ie,this.extractGETParameters=function(t){return S(O(t))},this.lastResolved=oe,this.generate=I,this.getLinkPath=se,this.match=ce,this.matchLocation=fe,this.getCurrentLocation=ue,this.addBeforeHook=A.bind(this,"before"),this.addAfterHook=A.bind(this,"after"),this.addAlreadyHook=A.bind(this,"already"),this.addLeaveHook=A.bind(this,"leave"),this.getRoute=B,this._pathToMatchObject=U,this._clean=l,this._checkForAHash=O,this._setCurrent=function(t){return s=n.current=t},ee.call(this),G.call(this)}const Ue="./assets/404notfound-7bae2bfd.jpg";const Be=()=>`
  <div class ="error-page">
  <img src="${Ue}"/></div>
  `,je=(e,r)=>{const a=new Ie("/",{hash:!0});return e.forEach(n=>{a.on(n.path,({data:i})=>{const s=n.component||r;document.getElementById("root").innerHTML=s(i)})}),a.notFound(()=>{document.getElementById("root").innerHTML=Be()}),a.resolve(),window.navigate=n=>{a.navigate(n)},a},De=()=>`
    <header class = "mb-3">
    <div class = "container">
        <h1><a href = "/" data-router>Header</a></h1>
    </div>
  </header>
  <main id="main">
    <div class = "container">
        <div class = "row">
            <div class = "col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-router>Trang chu</a></li>
                    <li><a href = "/gioi-thieu" data-router>Gioi thieu</a></li>
                    <li><a href = "/san-pham" data-router>San pham</a></li>              
                </ul>
            </div>
            
        </div>
  </div>
  <footer class="mt-3">
  <div class= "container">
   <h1>FOOTER</h1>
   </div>
  </footer>
  </main>`,qe=()=>`
    <header class = "mb-3">
    <div class = "container">
        <h1><a href = "/" data-router>Header</a></h1>
    </div>
  </header>
  <main id="main">
    <div class = "container">
        <div class = "row">
            <div class = "col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-router>Trang chu</a></li>
                    <li><a href = "/gioi-thieu" data-router>Gioi thieu</a></li>
                    <li><a href = "/san-pham" data-router>San pham</a></li>              
                </ul>
            </div>
            <div class = "col-9">
            <h1>Gioi thieu</h1>
            </div>
        </div>
  </div>
  <footer class="mt-3">
  <div class= "container">
   <h1>FOOTER</h1>
   </div>
  </footer>
  </main>

    `,We=({id:e})=>`
    <header class = "mb-3">
    <div class = "container">
        <h1><a href = "/" data-router>Header</a></h1>
    </div>
  </header>
  <main id="main">
    <div class = "container">
        <div class = "row">
            <div class = "col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-router>Trang chu</a></li>
                    <li><a href = "/gioi-thieu" data-router>Gioi thieu</a></li>
                    <li><a href = "/san-pham" data-router>San pham</a></li>              
                </ul>
            </div>
            <div class = "col-9">
           <h1>Chi tiết sản phẩm : ${e} </h1>
            <button onclick="navigate('/san-pham')">Back</button>
            </div>
        </div>
  </div>
  <footer class="mt-3">
  <div class= "container">
   <h1>FOOTER</h1>
   </div>
  </footer>
  </main>
    `,Xe=()=>`
    <header class = "mb-3">
    <div class = "container">
        <h1><a href = "/" data-router>Header</a></h1>
    </div>
  </header>
  <main id="main">
    <div class = "container">
        <div class = "row">
            <div class = "col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-router>Trang chu</a></li>
                    <li><a href = "/gioi-thieu" data-router>Gioi thieu</a></li>
                    <li><a href = "/san-pham" data-router>San pham</a></li>              
                </ul>
            </div>
            <div class = "col-9">
            <h1> Danh sach san pham</h1>
            <ul>
                 <li><a href = "/san-pham/1" data-router>San pham 1</a></li>
                <li><a href = "/san-pham/2" data-router>San pham 2</a></li>
                <li><a href = "/san-pham/3" data-router>San pham 3</a></li>              
            </ul>
            </div>
        </div>
  </div>
  <footer class="mt-3">
  <div class= "container">
   <h1>FOOTER</h1>
   </div>
  </footer>
  </main>

   `;const $e=()=>`
  <header class = "mb-3">
    <div class = "container">
        <h1><a href = "/" data-router>Header</a></h1>
    </div>
  </header>
  <main id="main">
    <div class = "container">
        <div class = "row">
            <div class = "col-3">
                <h2>Menu</h2>
                <ul>
                    <li><a href = "/" data-router>Trang chu</a></li>
                    <li><a href = "/gioi-thieu" data-router>Gioi thieu</a></li>
                    <li><a href = "/san-pham" data-router>San pham</a></li>              
                </ul>
            </div>
            <div class = "col-9">
            {body}
            </div>
        </div>
  </div>
  <footer class="mt-3">
  <div class= "container">
   <h1>FOOTER</h1>
   </div>
  </footer>
  </main>
  `,ze=()=>je([{path:"/",component:De},{path:"/gioi-thieu",component:qe},{path:"/san-pham",component:Xe},{path:"/san-pham/:id",component:We}],$e);ze();
