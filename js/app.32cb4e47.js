(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function s(e){return i.p+"js/"+({impressum:"impressum"}[e]||e)+"."+{impressum:"ec5094ca"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,r[1](c)}n[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2703:function(e,t,r){},"46e4":function(e,t,r){"use strict";r("d12e")},"49f8":function(e,t,r){var a={"./de.json":"6ce2","./en.json":"edd4"};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="49f8"},"4e26":function(e,t,r){"use strict";r("2703")},"6ce2":function(e){e.exports=JSON.parse('{"lang":"Deutsch","language":"Sprache","hello":"Hallo {user}!","darktheme":"Dunkles Farbschema","message":"Nachricht","title":"Titel"}')},9739:function(e,t,r){"use strict";r("ff2e")},cd49:function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=r("7496"),o=r("62ad"),s=r("a523"),i=r("f6c4"),l=r("0fd9"),c=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(n["a"],{attrs:{id:"app"}},[t("LoadingOverlay"),t("NavDrawer",{ref:"navDrawer"}),t("NavBar",{on:{"toggle-drawer":function(t){return e.$refs.navDrawer.toggle()}}}),t(i["a"],{staticStyle:{position:"relative"}},[t("external-background"),t("div",{staticStyle:{"overflow-y":"auto",position:"absolute",top:"0 !important",width:"100%",height:"100%"}},[t(s["a"],{attrs:{fluid:"",id:"main-container"}},[t(l["a"],{attrs:{justify:"center"}},[t(o["a"],{style:{"max-width":e.$vuetify.breakpoint.thresholds.md+"px"},attrs:{align:"center"}},[t("router-view")],1)],1)],1)],1)],1)],1)},u=[],d=r("9ab4"),f=r("1b40"),p=r("0798"),m=r("8336"),v=r("a797"),h=r("490a"),g=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t(v["a"],{attrs:{value:e.$store.state.loading,"z-index":1e3}},[t(h["a"],{attrs:{indeterminate:"",size:"64"}})],1),t(v["a"],{attrs:{value:e.$store.state.error,"z-index":1001}},[t(p["a"],{staticClass:"bo",attrs:{prominent:"",type:"error",elevation:"3"}},[t(l["a"],{attrs:{align:"center"}},[t(o["a"],{staticClass:"grow font-weight-medium"},[e._v(e._s(e.$store.state.errorNote))]),t(o["a"],{staticClass:"shrink"},[t(m["a"],{attrs:{color:"error lighten-1",elevation:"5"},on:{click:e.restartApp}},[e._v("Restart App")])],1)],1)],1)],1)],1)},b=[];let y=class extends f["b"]{restartApp(){const e=new URL(window.location.href);e.hash="",e.pathname="",window.location.href=e.href}};y=Object(d["a"])([f["a"]],y);var k=y,w=k,_=r("2877"),x=Object(_["a"])(w,g,b,!1,null,null,null),O=x.exports,j=r("132d"),$=r("8860"),P=r("da13"),A=r("1800"),N=r("5d23"),E=r("f774"),S=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(E["a"],{attrs:{app:"",clipped:e.$vuetify.breakpoint.lgAndUp},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t($["a"],{attrs:{dense:""}},[t(P["a"],{attrs:{to:"/",color:e.itemcolor()}},[t(A["a"],[t(j["a"],{attrs:{color:"secondary"}},[e._v("mdi-bookmark")])],1),t(N["a"],[t(N["b"],{attrs:{varian:""}},[e._v("Home")])],1)],1),t(P["a"],{attrs:{to:"/impressum",color:e.itemcolor()}},[t(A["a"],[t(j["a"],{attrs:{color:"secondary"}},[e._v("mdi-bookmark")])],1),t(N["a"],[t(N["b"],[e._v("Impressum")])],1)],1)],1)],1)},T=[];let C=class extends f["b"]{constructor(){super(...arguments),this.visible=!1}itemcolor(){return this.$vuetify.theme.dark?"secondary accent-4":"secondary darken-4"}toggle(){this.visible=!this.visible}close(){this.visible=!1}};C=Object(d["a"])([f["a"]],C);var L=C,D=L,M=Object(_["a"])(D,S,T,!1,null,null,null),U=M.exports,z=r("40dc"),B=r("5bc1"),F=r("b0af"),H=r("e449"),J=r("b974"),q=r("2fa4"),I=r("b73d"),R=r("2a7f"),Z=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(z["a"],{attrs:{app:"","clipped-right":"",color:"primary",dark:"","clipped-left":e.$vuetify.breakpoint.lgAndUp,id:"menubar"}},[t(B["a"],{on:{click:function(t){return t.stopPropagation(),e.$emit("toggle-drawer")}}}),t(R["a"],[e._v("krueckl.de")]),t(q["a"]),t(H["a"],{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function({on:r,attrs:a}){return[t(m["a"],e._g(e._b({attrs:{fab:"",small:"",color:"primary lighten-1"}},"v-btn",a,!1),r),[t(j["a"],[e._v("mdi-application-cog-outline")])],1)]}}])},[t(F["a"],[t($["a"],[t(P["a"],[t(A["a"],[t(I["a"],{attrs:{color:"secondary"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),t(N["b"],{on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[e._v(e._s(e.$t("darktheme")))])],1),t(P["a"],[t(J["a"],{attrs:{items:Object.keys(e.$i18n.messages).map(t=>({value:t,text:e.$i18n.messages[t].lang})),label:e.$t("language")},model:{value:e.$i18n.locale,callback:function(t){e.$set(e.$i18n,"locale",t)},expression:"$i18n.locale"}})],1)],1)],1)],1)],1)},G=[];let K=class extends f["b"]{constructor(){super(...arguments),this.lang="de"}};K=Object(d["a"])([f["a"]],K);var Q=K,V=Q,W=(r("46e4"),Object(_["a"])(V,Z,G,!1,null,null,null)),X=W.exports,Y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{ref:"animation",attrs:{id:"animation"}})},ee=[];let te=class extends f["b"]{};te=Object(d["a"])([f["a"]],te);var re=te,ae=re,ne=(r("4e26"),Object(_["a"])(ae,Y,ee,!1,null,null,null)),oe=ne.exports;let se=class extends f["b"]{};se=Object(d["a"])([Object(f["a"])({name:"App",components:{LoadingOverlay:O,NavDrawer:U,NavBar:X,ExternalBackground:oe}})],se);var ie=se,le=ie,ce=(r("9739"),Object(_["a"])(le,c,u,!1,null,null,null)),ue=ce.exports,de=r("9483");Object(de["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var fe=r("8c4f"),pe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"})},me=[];let ve=class extends f["b"]{};ve=Object(d["a"])([f["a"]],ve);var he=ve,ge=he,be=Object(_["a"])(ge,pe,me,!1,null,null,null),ye=be.exports;const ke=[{path:"/",name:"Home",component:ye,meta:{title:"krueckl.de",metaTags:[{property:"???",content:"???"}]}},{path:"/impressum",name:"Impressum",component:()=>r.e("impressum").then(r.bind(null,"761a"))}];var we=ke;a["default"].use(fe["a"]);const _e=new fe["a"]({mode:"history",base:"/",routes:we});_e.beforeEach((e,t,r)=>{const a=e.matched.slice().reverse().find(e=>e.meta&&e.meta.title),n=e.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);t.matched.slice().reverse().find(e=>e.meta&&e.meta.metaTags);if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(e=>e.parentNode.removeChild(e)),!n)return r();n.meta.metaTags.map(e=>{const t=document.createElement("meta");return Object.keys(e).forEach(r=>{t.setAttribute(r,e[r])}),t.setAttribute("data-vue-router-controlled",""),t}).forEach(e=>document.head.appendChild(e)),r()});var xe=_e,Oe=r("f309"),je=r("fcf4");a["default"].use(Oe["a"]);var $e=new Oe["a"]({icons:{iconfont:"mdi"},theme:{options:{customProperties:!0},themes:{light:{primary:"#35d6d0",secondary:"#ff43bb",accent:je["a"].shades.black,error:je["a"].red.accent3,background:je["a"].shades.white,drawerbackground:"#d9dede",cardbackground:"#ffffff"},dark:{primary:"#35d6d0",secondary:"#ff35d5",background:je["a"].shades.black,drawerbackground:"#212626",cardbackground:"#212626"}}}}),Pe=r("a925");function Ae(){const e=r("49f8"),t={};return e.keys().forEach(r=>{const a=r.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const n=a[1];t[n]=e(r)}}),t}function Ne(){const e=void 0!==navigator.languages?navigator.languages[0]:navigator.language;if(!e)return;const t=e.trim().split(/-|_/)[0];return t}a["default"].use(Pe["a"]);var Ee=new Pe["a"]({locale:Ne(),fallbackLocale:"en",messages:Ae()}),Se=r("2f62");const Te={error:!1,loading:!1,loadingList:[],errorNote:""};a["default"].use(Se["a"]);var Ce=new Se["a"].Store({state:Te,mutations:{},actions:{}}),Le=r("9541"),De=r.n(Le);r("fe2e");a["default"].use(De.a),a["default"].config.productionTip=!1;const Me=new a["default"]({router:xe,vuetify:$e,i18n:Ee,store:Ce,render:e=>e(ue)}).$mount("#app");window.matchMedia&&(Me.$vuetify.theme.dark=window.matchMedia("(prefers-color-scheme: dark)").matches),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{Me.$vuetify.theme.dark=e.matches})},d12e:function(e,t,r){},edd4:function(e){e.exports=JSON.parse('{"lang":"English","language":"Language","hello":"Hello {user}!","darktheme":"Dark Theme","message":"Message","title":"Title"}')},ff2e:function(e,t,r){}});