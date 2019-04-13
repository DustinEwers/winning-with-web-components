/*!
 * AppLibrary: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){return"sc-"+n.t+(t&&t!==c?"-"+t:"")}function t(n,t){return n+(t?"-h":"-s")}function e(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)k.push(arguments[f]);for(;k.length>0;){var c=k.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)k.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&k.push(f);t.class=k.join(" "),k.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],j):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,i:void 0,o:!1}}function r(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,o=e.hydratedCssClass||"hydrated",u=e.exclude;u&&(r=r.filter(function(n){return-1===u.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var a=i.createElement("style");a.innerHTML=c.join()+"{visibility:hidden}."+o+"{visibility:inherit}",a.setAttribute("data-styles",""),i.head.insertBefore(a,i.head.firstChild)}var s=e.namespace||"AppLibrary";return R||(R=!0,function l(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,s,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),N[s].u(function i(n){var t=$(n),e=t.s,r=d(n[0]);return t.s=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!N[s]){var u={},c=e.resourcesUrl||"./";f(s,u,n,i,c,o),N[s]=P(s,u,n,i,c,o,r)}if(window.customStyleShim)return N[s].l=window.customStyleShim,N[s].l.initShim().then(t);t()})}this&&this.v;var i=this&&this.p||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.next(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).next())})},o=this&&this.m||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,e[1])).done)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,i=e[1],e=[0];continue;case 7:e=f.g.pop(),f.M.pop();continue;default:if(!(o=(o=f.M).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.label=e[1];break}if(6===e[0]&&f.label<o[1]){f.label=o[1],o=e;break}if(o&&f.label<o[2]){f.label=o[2],f.g.push(e);break}o[2]&&f.g.pop(),f.M.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,u])}}var r,i,o,u,f={label:0,k:function(){if(1&o[0])throw o[1];return o[1]},M:[],g:[]};return u={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},u=this,f=function(){};function applyPolyfills(n){n.j=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<b;n+=2)(0,S[n])(S[n+1]),S[n]=void 0,S[n+1]=void 0;b=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.A;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.C)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.A===T?s(n,t.C):t.A===W?l(n,t.C):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.S);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.O&&n.O(n.C),p(n)}function s(n,t){n.A===x&&(n.C=t,n.A=T,0!==n._.length&&M(p,n))}function l(n,t){n.A===x&&(n.A=W,n.C=t,M(a,n))}function v(n,t,e,r){var i=n._,o=i.length;n.O=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.A&&M(p,n)}function p(n){var t=n._,e=n.A;if(0!==t.length){for(var r,i,o=n.C,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n._.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.A===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.A=void 0,n.C=void 0,n._=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},b=0,m=void 0,g=void 0,M=function(n,t){S[b]=n,S[b+1]=t,2===(b+=2)&&(g?g(e):O())},k=(y=void 0!==n?n:void 0)||{},j=k.MutationObserver||k.WebKitMutationObserver;k="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,S=Array(1e3),O=void 0;O=j?($=0,A=new j(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().T("vertx");return void 0!==(m=n.W||n.P)?function(){m(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this.N=n,this.R=new n(o),this.R[_]||h(this.R),w(t)?(this.L=this.length=t.length,this.C=Array(this.length),0===this.length?s(this.R,this.C):(this.length=this.length||0,this.D(t),0===this.L&&s(this.R,this.C))):l(this.R,Error("Array Methods must be provided an Array"))}return n.prototype.D=function(n){for(var t=0;this.A===x&&t<n.length;t++)this.F(n[t],t)},n.prototype.F=function(n,t){var e=this.N,c=e.resolve;c===i?(c=u(n))===r&&n.A!==x?this.H(n.A,t,n.C):"function"!=typeof c?(this.L--,this.C[t]=n):e===L?(f(e=new e(o),n,c),this.q(e,t)):this.q(new e(function(t){return t(n)}),t):this.q(c(n),t)},n.prototype.H=function(n,t,e){var r=this.R;r.A===x&&(this.L--,n===W?l(r,e):this.C[t]=e),0===this.L&&s(r,this.C)},n.prototype.q=function(n,t){var e=this;v(n,void 0,function(n){return e.H(T,t,n)},function(n){return e.H(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.C=this.A=void 0,this._=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).R},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.U=function(n){g=n},L.B=function(n){M=n},L.I=M,L.G=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.cast)return}n.Promise=L},L.Promise=L,L.G(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.searchParams}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var c="$",a={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},l=function(t,e,r,i){var o=r.t+c,u=r[o];if((2===r.Y||1===r.Y&&!t.J.Z)&&(i["s-sc"]=u?n(r,i.mode):n(r)),u){var f=e.K.head,a=t.V.get(f);if(a||t.V.set(f,a={}),!a[o]){var s=void 0;if(t.l?s=t.l.createHostStyle(i,o,u):((s=e.X("style")).innerHTML=u,a[o]=!0),s){var l=f.querySelectorAll("[data-styles]");e.nn(f,s,l.length&&l[l.length-1].nextSibling||f.firstChild)}}}},v=function(n){return null!=n},p=function(n){return n.toLowerCase()},d=function(n){return p(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},h=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.tn(t);f&&f.en&&f.en[e]?w(t,e,i):"ref"!==e&&(w(t,e,null==i?"":i),null!=i&&!1!==i||n.J.rn(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",p(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",p(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.J.in(t,e)&&(null==i||!1===i))&&n.J.rn(t,e);else e=p(e)in t?p(e.substring(2)):p(e[2])+e.substring(3),i?i!==r&&n.J.on(t,e,i):n.J.un(t,e);else if(r!==i){var c=y(r),a=y(i),s=c.filter(function(n){return!a.includes(n)}),l=y(t.className).filter(function(n){return!s.includes(n)}),v=a.filter(function(n){return!c.includes(n)&&!l.includes(n)});l.push.apply(l,v),t.className=l.join(" ")}},y=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},w=function(n,t,e){try{n[t]=e}catch(n){}},b=function(n,t,e,r,i){var o=11===e.i.nodeType&&e.i.host?e.i.host:e.i,u=t&&t.vattrs||a,f=e.vattrs||a;for(i in u)f&&null!=f[i]||null==u[i]||h(n,o,i,u[i],void 0,r,e.o);for(i in f)i in u&&f[i]===("value"===i||"checked"===i?o[i]:u[i])||h(n,o,i,u[i],f[i],r,e.o)},m=!1,g=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.i),n.vchildren&&n.vchildren.forEach(function(n){g(n,t)}))},M=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}},k=[],j={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},$=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{fn:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={cn:e[1],an:!!e[2],fn:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,sn:e[4]};return{t:r,s:i,en:Object.assign({},c),Y:u,ln:f?f.map(A):void 0}},A=function(n){return{vn:n[0],pn:n[1],dn:!!n[2],hn:!!n[3],yn:!!n[4]}},E=function(n,t){return v(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},C=function(n,t,e){n.wn.add(t),n.bn.has(t)||(n.bn.set(t,!0),n.mn?n.queue.write(function(){return S(n,t,e)}):n.queue.tick(function(){return S(n,t,e)}))},S=function(n,r,f,c,a,s){return i(u,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:if(n.bn.delete(r),n.gn.has(r))return[3,12];if(a=n.Mn.get(r))return[3,6];if((s=n.kn.get(r))&&!s["s-rn"])return(s["s-rc"]=s["s-rc"]||[]).push(function(){S(n,r,f)}),[2];if(!(a=x(n,r,n.jn.get(r),f)))return[3,5];o.label=1;case 1:return o.M.push([1,4,,5]),a.componentWillLoad?[4,a.componentWillLoad()]:[3,3];case 2:o.k(),o.label=3;case 3:return[3,5];case 4:return i=o.k(),n.$n(i,3,r),[3,5];case 5:return[3,11];case 6:if(!a)return[3,11];o.label=7;case 7:return o.M.push([7,10,,11]),a.componentWillUpdate?[4,a.componentWillUpdate()]:[3,9];case 8:o.k(),o.label=9;case 9:return[3,11];case 10:return u=o.k(),n.$n(u,5,r),[3,11];case 11:(function(n,r,i,o){try{var u=r.An.host,f=r.An.encapsulation,c=i;if(!i["s-rn"]){n.En(n,n.J,r,i);var a=i["s-sc"];a&&(n.J.Cn(i,t(a,!0)),"scoped"===f&&n.J.Cn(i,t(a)))}if(o.render||o.hostData||u){n.Sn=!0;var s=o.render&&o.render();n.Sn=!1;var l=e(null,void 0,s),v=n.On.get(i)||{};v.i=c,n.On.set(i,n.render(i,v,l,!1,f))}n.l&&n.l.updateHost(i),i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(function(n){return n()}),i["s-rc"]=null)}catch(t){n.Sn=!1,n.$n(t,8,i,!0)}})(n,n.tn(r),r,a),r["s-init"](),o.label=12;case 12:return[2]}})})},O=function(n,t,e,r,i,o,u){(u=n._n.get(t))||n._n.set(t,u={}),r!==u[e]&&(u[e]=r,n.Mn.get(t)&&!n.Sn&&t["s-rn"]&&C(n,t,i))},_=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},x=function(n,t,e,r,i,o){try{i=new(o=n.tn(t).An),function(n,t,e,r,i,o){n.xn.set(r,e),n._n.has(e)||n._n.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],f=t[1];(function(n,t,e,r,i,o,u,f,c){if(t.type||t.state){var a=n._n.get(e);t.state||(!t.attr||void 0!==a[i]&&""!==a[i]||(f=o&&o.Tn)&&v(c=f[t.attr])&&(a[i]=E(t.type,c)),e.hasOwnProperty(i)&&(void 0===a[i]&&(a[i]=E(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===a[i]&&(a[i]=r[i]),_(r,i,function s(t){return(t=n._n.get(n.xn.get(this)))&&t[i]},function l(e,r){(r=n.xn.get(this))&&(t.state||t.mutable)&&O(n,r,i,e,u)})}})(n,f,e,r,u,i,o)})}(n,o,t,i,e,r),function u(n,t,e){if(t){var r=n.xn.get(e);t.forEach(function(t){e[t.method]={emit:function(e){return n.Wn(r,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:e})}}})}}(n,o.events,i)}catch(e){i={},n.$n(e,7,t,!0)}return n.Mn.set(t,i),i},T=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.tn(r)&&!n.Pn.has(r))return!1;if(!T(n,r))return!1}}return!0},W=function(n,t,e,r,i,o){if(n.wn.delete(t),(i=n.kn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.kn.delete(t)),n.Nn.length&&!n.wn.size)for(;o=n.Nn.shift();)o()},P=function(n,t,r,i,o,u){var f=r.performance,a={html:{}},d=r[n]=r[n]||{},h=function(n,t,e){var r=new WeakMap,i={K:e,Z:!!e.documentElement.attachShadow,Rn:!1,Ln:function(n){return n.nodeType},X:function(n){return e.createElement(n)},Dn:function(n,t){return e.createElementNS(n,t)},Fn:function(n){return e.createTextNode(n)},Hn:function(n){return e.createComment(n)},nn:function(n,t,e){return n.insertBefore(t,e)},qn:function(n){return n.remove()},Un:function(n,t){return n.appendChild(t)},Cn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Bn:function(n){return n.childNodes},In:function(n){return n.parentNode},Gn:function(n){return n.nextSibling},Qn:function(n){return n.previousSibling},Yn:function(n){return p(n.nodeName)},Zn:function(n){return n.textContent},zn:function(n,t){return n.textContent=t},Jn:function(n,t){return n.getAttribute(t)},Kn:function(n,t,e){return n.setAttribute(t,e)},rn:function(n,t){return n.removeAttribute(t)},in:function(n,t){return n.hasAttribute(t)},Vn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},Xn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.nt(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},on:function(t,e,o,u,f,c,a,l,v){var p=t,d=o,h=r.get(t);v=e,h&&h[v]&&h[v](),"string"==typeof c?p=i.Xn(t,c):"object"==typeof c?p=c:(l=e.split(":")).length>1&&(p=i.Xn(t,l[0]),e=l[1]),p&&((l=e.split(".")).length>1&&(e=l[0],d=function(n){n.keyCode===s[l[1]]&&o(n)}),a=i.Rn?{capture:!!u,passive:!!f}:!!u,n.ael(p,e,d,a),h||r.set(t,h={}),h[v]=function(){p&&n.rel(p,e,d,a),h[v]=null})},un:function(n,t,e){(e=r.get(n))&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},tt:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},nt:function(n,t){return(t=i.In(n))&&11===i.Ln(t)?t.host:t},et:function(n,t,e,r){return n.setAttributeNS(t,e,r)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Rn=!0}}))}catch(n){}return i}(d,r,i),y=h.K.documentElement,w=r["s-defined"]=r["s-defined"]||{},k={J:h,u:function(n,t){r.customElements.get(n.t)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.gn.delete(e),n.Pn.has(e)||(n.rt=!0,n.wn.add(e),n.Pn.set(e,!0),function(n,t,e){for(e=t;e=n.J.nt(e);)if(n.it(e)){n.ot.has(t)||(n.kn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.jn.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.Vn(e)),e["s-cr"]||n.Jn(e,"ssrv")||n.Z&&1===t.Y||(e["s-cr"]=n.Fn(""),e["s-cr"]["s-cn"]=!0,n.nn(e,e["s-cr"],n.Bn(e)[0])),n.Z||1!==t.Y||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),r={Tn:{}},t.en&&Object.keys(t.en).forEach(function(o){(i=t.en[o].fn)&&(r.Tn[i]=n.Jn(e,i))}),r}(n.J,t,e)),n.ut(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){if(!n.ft&&function(n,t){for(;t;){if(!n.In(t))return 9!==n.Ln(t);t=n.In(t)}}(n.J,t)){n.gn.set(t,!0),W(n,t),g(n.On.get(t),!0),n.J.un(t),n.ct.delete(t);var e=n.Mn.get(t);e&&e.componentDidUnload&&e.componentDidUnload(),n.l&&n.l.removeHost(t),[n.kn,n.at,n.jn].forEach(function(n){return n.delete(t)})}})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(T(n,t)&&(i=n.Mn.get(t))&&!n.gn.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.ot.set(t,!0),(u=n.st.has(t))||(n.st.set(t,!0),t["s-ld"]=void 0,n.J.Cn(t,e));try{g(n.On.get(t)),(o=n.at.get(t))&&(o.forEach(function(n){return n(t)}),n.at.delete(t)),!u&&i.componentDidLoad?i.componentDidLoad():u&&i.componentDidUpdate&&i.componentDidUpdate()}catch(e){n.$n(e,4,t)}W(n,t)}})(n,this,r)},e.forceUpdate=function(){C(n,this,i)},t.en){var o=Object.entries(t.en),u={};o.forEach(function(n){var t=n[0],e=n[1].fn;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[p(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.cn&&_(e,i,function t(){return(n._n.get(this)||{})[i]},function t(e){O(n,this,i,E(o.sn,e),r)})})}(n,0,e,i)}}(k,a[n.t]=n,t.prototype,u,f),t.observedAttributes=Object.values(n.en).map(function(n){return n.fn}).filter(function(n){return!!n}),r.customElements.define(n.t,t))},tn:function(n){return a[h.Yn(n)]},lt:function(n){return t[n]},isClient:!0,it:function(n){return!(!w[h.Yn(n)]&&!k.tn(n))},$n:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:t.queue=M(d,r),ut:function(n,t){var e={mode:t.mode,scoped:!1};n.s(e).then(function(e){try{n.An=e,function r(n,t,e,i,o){if(i){var u=t.t+(o||c);t[u]||(t[u]=i)}}(0,n,n.Y,e.style,e.styleMode)}catch(t){console.error(t),n.An=function i(){}}C(k,t,f)})},Sn:!1,mn:!1,ft:!1,En:l,kn:new WeakMap,V:new WeakMap,Pn:new WeakMap,ct:new WeakMap,st:new WeakMap,ot:new WeakMap,xn:new WeakMap,jn:new WeakMap,Mn:new WeakMap,gn:new WeakMap,bn:new WeakMap,at:new WeakMap,vt:new WeakMap,On:new WeakMap,_n:new WeakMap,wn:new Set,Nn:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=r,t.location=r.location,t.document=i,t.resourcesUrl=t.publicPath=o,k.Wn=t.emit=function(n,e,r){return h.tt(n,t.eventNameFn?t.eventNameFn(e):e,r)},d.h=e,d.Context=t,d.onReady=function(){return new Promise(function(n){return k.queue.write(function(){return k.wn.size?k.Nn.push(n):n()})})},k.render=function(n,t){var e,r,i,o,u,f,c,a=function(i,l,p,d,h,y,w,g,M){if(g=l.vchildren[p],e||(o=!0,"slot"===g.vtag&&(r&&t.Cn(d,r+"-s"),g.vchildren?g.pt=!0:g.dt=!0)),v(g.vtext))g.i=t.Fn(g.vtext);else if(g.dt)g.i=t.Fn("");else{if(y=g.i=m||"svg"===g.vtag?t.Dn("http://www.w3.org/2000/svg",g.vtag):t.X(g.pt?"slot-fb":g.vtag),n.it(y)&&n.ot.delete(c),m="svg"===g.vtag||"foreignObject"!==g.vtag&&m,b(n,null,g,m),v(r)&&y["s-si"]!==r&&t.Cn(y,y["s-si"]=r),g.vchildren)for(h=0;h<g.vchildren.length;++h)(w=a(i,g,h,y))&&t.Un(y,w);"svg"===g.vtag&&(m=!1)}return g.i["s-hn"]=f,(g.pt||g.dt)&&(g.i["s-sr"]=!0,g.i["s-cr"]=u,g.i["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[p])&&M.vtag===g.vtag&&i.i&&s(i.i)),g.i},s=function(e,r,i,u){n.ft=!0;var c=t.Bn(e);for(i=c.length-1;i>=0;i--)(u=c[i])["s-hn"]!==f&&u["s-ol"]&&(t.qn(u),t.nn(y(u),u,h(u)),t.qn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&s(u,r);n.ft=!1},l=function(n,e,r,i,o,u,c,s){var l=n["s-cr"];for((c=l&&t.In(l)||n).shadowRoot&&t.Yn(c)===f&&(c=c.shadowRoot);o<=u;++o)i[o]&&(s=v(i[o].vtext)?t.Fn(i[o].vtext):a(null,r,o,n))&&(i[o].i=s,t.nn(c,s,h(e)))},p=function(n,e,r,o){for(;e<=r;++e)v(n[e])&&(o=n[e].i,i=!0,o["s-ol"]?t.qn(o["s-ol"]):s(o,!0),t.qn(o))},d=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},h=function(n){return n&&n["s-ol"]?n["s-ol"]:n},y=function(n){return t.In(n["s-ol"]?n["s-ol"]:n)},w=function(e,r,i){var o=r.i=e.i,u=e.vchildren,f=r.vchildren;m=r.i&&v(t.nt(r.i))&&void 0!==r.i.ownerSVGElement,m="svg"===r.vtag||"foreignObject"!==r.vtag&&m,v(r.vtext)?(i=o["s-cr"])?t.zn(t.In(i),r.vtext):e.vtext!==r.vtext&&t.zn(o,r.vtext):("slot"!==r.vtag&&b(n,e,r,m),v(u)&&v(f)?function(n,e,r,i,o,u,f,c){for(var b=0,m=0,g=e.length-1,M=e[0],k=e[g],j=i.length-1,$=i[0],A=i[j];b<=g&&m<=j;)if(null==M)M=e[++b];else if(null==k)k=e[--g];else if(null==$)$=i[++m];else if(null==A)A=i[--j];else if(d(M,$))w(M,$),M=e[++b],$=i[++m];else if(d(k,A))w(k,A),k=e[--g],A=i[--j];else if(d(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.In(M.i)),w(M,A),t.nn(n,M.i,t.Gn(k.i)),M=e[++b],A=i[--j];else if(d(k,$))"slot"!==M.vtag&&"slot"!==A.vtag||s(t.In(k.i)),w(k,$),t.nn(n,k.i,M.i),k=e[--g],$=i[++m];else{for(o=null,u=b;u<=g;++u)if(e[u]&&v(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}v(o)?((c=e[o]).vtag!==$.vtag?f=a(e&&e[m],r,o,n):(w(c,$),e[o]=void 0,f=c.i),$=i[++m]):(f=a(e&&e[m],r,m,n),$=i[++m]),f&&t.nn(y(M.i),f,h(M.i))}b>g?l(n,null==i[j+1]?null:i[j+1].i,r,i,m,j):m>j&&p(e,b,g)}(o,u,r,f):v(f)?(v(e.vtext)&&t.zn(o,""),l(o,null,r,f,0,f.length-1)):v(u)&&p(u,0,u.length-1)),m&&"svg"===r.vtag&&(m=!1)},g=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Bn(n)).length;i<o;i++)if(e=r[i],1===t.Ln(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t.Ln(r[u]),""!==f){if(1===c&&f===t.Jn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.Zn(r[u]).trim()){e.hidden=!0;break}g(e)}},M=[],k=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Bn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Bn(t.In(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t.Ln(o))||8===l)&&""===s||1===l&&null===t.Jn(o,"slot")&&""===s||1===l&&t.Jn(o,"slot")===s)&&(M.some(function(n){return n.ht===o})||(i=!0,o["s-sn"]=s,M.push({yt:r,ht:o})));1===t.Ln(r)&&k(r)}};return function(a,s,l,v,p,d,h,y,b,m,j,$){if(c=a,f=t.Yn(c),u=c["s-cr"],e=v,r=c["s-sc"],o=i=!1,w(s,l),o){for(k(l.i),h=0;h<M.length;h++)(y=M[h]).ht["s-ol"]||((b=t.Fn(""))["s-nr"]=y.ht,t.nn(t.In(y.ht),y.ht["s-ol"]=b,y.ht));for(n.ft=!0,h=0;h<M.length;h++){for(y=M[h],j=t.In(y.yt),$=t.Gn(y.yt),b=y.ht["s-ol"];b=t.Qn(b);)if((m=b["s-nr"])&&m&&m["s-sn"]===y.ht["s-sn"]&&j===t.In(m)&&(m=t.Gn(m))&&m&&!m["s-nr"]){$=m;break}(!$&&j!==t.In(y.ht)||t.Gn(y.ht)!==$)&&y.ht!==$&&(t.qn(y.ht),t.nn(j,y.ht,$))}n.ft=!1}return i&&g(l.i),M.length=0,l}}(k,h),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){k.ot.set(y,d.loaded=k.mn=!0),h.tt(r,"appload",{detail:{namespace:n}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.tn(t);if(r)if(n.ot.has(t))e(t);else{var i=n.at.get(t)||[];i.push(e),n.at.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(k,d,r,r["s-apps"],r["s-cr"]),d.initialized=!0,k},N={},R=!1;export{r as defineCustomElement,e as h};