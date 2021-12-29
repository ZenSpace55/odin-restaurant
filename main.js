(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),a=n(645),i=n.n(a),c=n(667),s=n.n(c),u=new URL(n(930),n.b),l=i()(r()),d=s()(u);l.push([e.id,"html{\n    background-image: url("+d+");\n}\n\nbody{\n    margin: 0;\n}\n\ndiv{\n}\n\n.restaurantHeader{\n    background-color: rgb(39, 38, 37);\n    opacity: 80%;\n    /*rgb(0, 35, 115);*/\n    display: flex;\n    height: 70px;\n    \n}\n\n.headerButtons{\n    display: flex;\n    justify-content: right;\n}\n\n.headerButton{\n    background-color: transparent;\n    color: white;\n    /*color: rgb(205, 0, 25);*/\n    font-size: 24px;\n    border: 0;\n}\n.headerButton:hover{\n    transform: scale(1.1);\n    color:tomato;\n}\n\n.homeText{\n    color: white;\n    font-size: 18px;\n    margin: 0 15% 0 15%;\n    padding-top: 100px;\n}\n\n.menuPanel{\n    display: grid;\n    margin: 100px 15% 0 15%;\n}\n\n.menuItem{\n\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=o.base?s[0]+o.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},930:(e,t,n)=>{e.exports=n.p+"2c36d47ff562101534fa.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),c=n(565),s=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),m=n(28),f={};function h(e){!function(){const e=document.getElementById("content");for(let t=1;t<e.childNodes.length;t++)e.removeChild(e.childNodes[t])}(),"home"===e?(console.log("show "+e),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna placerat, finibus turpis vitae, gravida lacus. Proin consequat erat sodales quam ornare scelerisque. Ut eleifend sollicitudin orci, id molestie purus vehicula vel. Sed enim lectus, vestibulum nec sem bibendum, congue egestas dui. Praesent auctor condimentum lorem. Sed mauris orci, porta in urna eu, finibus vestibulum libero. Etiam consequat eu nisl quis vehicula. In ac suscipit lacus, eu vehicula erat. Cras porta, nibh ac cursus imperdiet, turpis nunc facilisis magna, sit amet luctus ante tortor vel purus. Nullam a lorem at dui iaculis efficitur. Pellentesque ac justo id purus egestas scelerisque vitae at risus. Quisque id varius lorem.",e.classList.add("homeText"),e}())):"contact"===e?(console.log("show "+e),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.textContent="Contact information goes here.",e}())):"menu"===e&&(console.log("show "+e),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.textContent="Menu information goes here.",e}()))}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,console.log("hey what's up!??!?"),console.log("made it to loadpage"),document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.classList.add("headerButtons"),e.textContent="testing testing 123...",e.classList.add("restaurantHeader");const t=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button");return t.textContent="Home",n.textContent="Menu",o.textContent="Contact Us",t.classList.add("headerButton"),n.classList.add("headerButton"),o.classList.add("headerButton"),t.id="homeButton",n.id="menuButton",o.id="contactButton",e.appendChild(t),e.appendChild(n),e.appendChild(o),e}()),console.log("calling load page function"),console.log("trying tab switch"),document.getElementById("homeButton").addEventListener("click",(function(){h("home")})),document.getElementById("menuButton").addEventListener("click",(function(){h("menu")})),document.getElementById("contactButton").addEventListener("click",(function(){h("contact")}))})()})();