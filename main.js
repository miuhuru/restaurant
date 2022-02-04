(()=>{"use strict";var e,t,n,r,a,o,i,c,s,d,l,u,p,f,m={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),s=n.n(c),d=new URL(n(825),n.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;1,700&display=swap);"]);var u=s()(d);l.push([e.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: "Arvo", serif;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.navbar {\n  display: flex;\n  gap: 15px;\n  font-size: 15px;\n  height: 42px;\n  width: 1250px;\n}\n\n\n \nli {\n  padding-top: 10px;\n  list-style: none;\n}\n\n.restaurantName {\n  font-size: 95px;\n  position: fixed;\n  color: hsl(45, 94%, 53%);\n  bottom: 100px;\n  right: 15px;\n}\n\n.tab-content, #home {\n  height: 100%;\n  width: 100%;\n}\n\n.heroSection {\n  background: url('+u+");\n  height: 100%;\n  width: 100%;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},825:(e,t,n)=>{e.exports=n.p+"af867a1e28a264e7df4c.jpg"}},h={};function v(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return m[e](n,n.exports,v),n.exports}v.m=m,v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var t=v.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,e=v(379),t=v.n(e),n=v(795),r=v.n(n),a=v(569),o=v.n(a),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),u=v.n(l),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.createElement("div");document.body.appendChild(e),console.log(e);const t=document.createElement("li"),n=document.createElement("li"),r=document.createElement("li");e.classList.add("navbar"),e.appendChild(t),e.appendChild(n),e.appendChild(r),t.classList.add("home"),t.dataset.tabTarget="#home",n.classList.add("menu"),n.dataset.tabTarget="#menu",r.classList.add("contact"),r.dataset.tabTarget="#contact",t.innerText="HOME",n.innerText="MENU",r.innerText="CONTACT"}(),function(){const e=document.createElement("div");e.classList.add("tab-content"),document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t),t.id="home",t.setAttribute("dataset","data-tab-content");const n=document.createElement("div");e.appendChild(n),n.id="menu",n.setAttribute("dataset","data-tab-content");const r=document.createElement("div");e.appendChild(r),r.id="contact",r.setAttribute("dataset","data-tab-content")}(),function(){const e=document.getElementById("home"),t=document.createElement("div");t.classList.add("heroSection"),e.appendChild(t)}(),function(){const e=document.getElementById("home"),t=document.createElement("div");t.innerText="Lazare.",t.classList.add("restaurantName"),e.appendChild(t)}()})();