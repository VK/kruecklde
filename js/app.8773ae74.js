(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,v=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"be288a77"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/kruecklde/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},1182:function(e,t,n){},"1c4b":function(e,t,n){},"29dd":function(e,t,n){"use strict";n("1c4b")},"34ba":function(e,t,n){"use strict";n("1182")},"49f8":function(e,t,n){var a={"./de.json":"6ce2","./en.json":"edd4"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="49f8"},"6ce2":function(e){e.exports=JSON.parse('{"lang":"Deutsch","language":"Sprache","hello":"Hallo {user}!","darktheme":"Dunkles Farbschema","message":"Nachricht","title":"Titel"}')},"760c":function(e,t,n){"use strict";n("c3f5")},"85ec":function(e,t,n){},c3f5:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("LoadingOverlay"),n("NavDrawer",{ref:"navDrawer"}),n("NavBar",{on:{"toggle-drawer":function(t){return e.$refs.navDrawer.toggle()}}}),n("v-main",{staticStyle:{position:"relative"}},[n("animated-background"),n("div",{staticStyle:{"overflow-y":"auto",position:"absolute",top:"0 !important",width:"100%",height:"100%"}},[n("v-container",{attrs:{fluid:"",id:"main-container"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{style:{"max-width":e.$vuetify.breakpoint.thresholds.md+"px"},attrs:{align:"center"}},[n("router-view")],1)],1)],1)],1)],1),n("Footer")],1)},i=[],o=n("d4ec"),s=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("1b40"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-overlay",{attrs:{value:e.$store.state.loading,"z-index":1e3}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),n("v-overlay",{attrs:{value:e.$store.state.error,"z-index":1001}},[n("v-alert",{staticClass:"bo",attrs:{prominent:"",type:"error",elevation:"3"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"grow font-weight-medium"},[e._v(e._s(e.$store.state.errorNote))]),n("v-col",{staticClass:"shrink"},[n("v-btn",{attrs:{color:"error lighten-1",elevation:"5"},on:{click:e.restartApp}},[e._v("Restart App")])],1)],1)],1)],1)],1)},v=[],f=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("bee2")),h=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"restartApp",value:function(){var e=new URL(window.location.href);e.hash="",e.pathname="",window.location.href=e.href}}]),n}(u["b"]);h=Object(l["a"])([u["a"]],h);var m=h,p=m,b=n("2877"),g=n("6544"),k=n.n(g),w=n("0798"),y=n("8336"),O=n("62ad"),j=n("a797"),_=n("490a"),V=n("0fd9"),$=Object(b["a"])(p,d,v,!1,null,null,null),x=$.exports;k()($,{VAlert:w["a"],VBtn:y["a"],VCol:O["a"],VOverlay:j["a"],VProgressCircular:_["a"],VRow:V["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"",clipped:e.$vuetify.breakpoint.lgAndUp},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-bookmark")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Home")])],1)],1),n("v-list-item",{attrs:{to:"/about"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-bookmark")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("About")])],1)],1),n("v-list-item",{attrs:{to:"/test"}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-bookmark")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Test")])],1)],1)],1)],1)},S=[],A=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.visible=!1,e}return Object(f["a"])(n,[{key:"toggle",value:function(){this.visible=!this.visible}},{key:"close",value:function(){this.visible=!1}}]),n}(u["b"]);A=Object(l["a"])([u["a"]],A);var T=A,C=T,L=n("132d"),M=n("8860"),I=n("da13"),z=n("1800"),N=n("5d23"),P=n("f774"),D=Object(b["a"])(C,E,S,!1,null,null,null),B=D.exports;k()(D,{VIcon:L["a"],VList:M["a"],VListItem:I["a"],VListItemAction:z["a"],VListItemContent:N["a"],VListItemTitle:N["b"],VNavigationDrawer:P["a"]});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"","clipped-right":"",color:"primary",dark:"","clipped-left":e.$vuetify.breakpoint.lgAndUp,id:"menubar"}},[n("v-app-bar-nav-icon",{on:{click:function(t){return t.stopPropagation(),e.$emit("toggle-drawer")}}}),n("v-toolbar-title",[e._v("Toolbar")]),n("v-spacer"),n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition",bottom:"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",small:"",color:"primary lighten-1"}},"v-btn",r,!1),a),[n("v-icon",[e._v("mdi-screwdriver")])],1)]}}])},[n("v-card",[n("v-list",[n("v-list-item",[n("v-list-item-action",[n("v-switch",{attrs:{color:"secondary"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),n("v-list-item-title",{on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[e._v(e._s(e.$t("darktheme")))])],1),n("v-list-item",[n("v-select",{attrs:{items:Object.keys(e.$i18n.messages).map((function(t){return{value:t,text:e.$i18n.messages[t].lang}})),label:e.$t("language")},model:{value:e.$i18n.locale,callback:function(t){e.$set(e.$i18n,"locale",t)},expression:"$i18n.locale"}})],1)],1)],1)],1)],1)},R=[],W=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.lang="de",e}return n}(u["b"]);W=Object(l["a"])([u["a"]],W);var q=W,H=q,J=(n("34ba"),n("40dc")),U=n("5bc1"),K=n("b0af"),X=n("e449"),Y=n("b974"),Z=n("2fa4"),G=n("b73d"),Q=n("2a7f"),ee=Object(b["a"])(H,F,R,!1,null,null,null),te=ee.exports;k()(ee,{VAppBar:J["a"],VAppBarNavIcon:U["a"],VBtn:y["a"],VCard:K["a"],VIcon:L["a"],VList:M["a"],VListItem:I["a"],VListItemAction:z["a"],VListItemTitle:N["b"],VMenu:X["a"],VSelect:Y["a"],VSpacer:Z["a"],VSwitch:G["a"],VToolbarTitle:Q["a"]});var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{app:"",color:"primary",dark:"",id:"footer"}},[n("v-spacer"),n("span",[e._v("© "+e._s((new Date).getFullYear())+" VK")])],1)},ae=[],re=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);re=Object(l["a"])([u["a"]],re);var ie=re,oe=ie,se=(n("760c"),n("553a")),ce=Object(b["a"])(oe,ne,ae,!1,null,null,null),le=ce.exports;k()(ce,{VFooter:se["a"],VSpacer:Z["a"]});var ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"animated-background"}})},de=[],ve=(n("b0c0"),n("159b"),n("6338")),fe=n("34ad"),he=n("5a89"),me=n("6550"),pe=n.n(me),be=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.camera=void 0,e.scene=new he["fb"],e.renderer=new he["rb"]({antialias:!0}),e.model=void 0,e.mixer=void 0,e.ground=new he["J"],e.clock=new he["i"],e.fsm=void 0,e.invRate={walk:200,idle:500},e.animations={},e.height=0,e.width=0,e.container=null,e.resizeObserver=new ve["ResizeObserver"](e.resize),e.resizeTimer=void 0,e}return Object(f["a"])(n,[{key:"initStateMachine",value:function(){var e=this;console.log("initStateMachine"),this.fsm||(this.fsm=new pe.a({init:"idle",transitions:[{name:"idle",from:"walk",to:"idle"},{name:"walk",from:"idle",to:"walk"}],methods:{onIdle:function(){"Idle"in e.animations&&"Walking"in e.animations&&(e.animations["Idle"].stop(),e.animations["Walking"].crossFadeTo(e.animations["Idle"],1,!0).play())},onWalk:function(){"Idle"in e.animations&&"Walking"in e.animations&&(e.animations["Walking"].stop(),e.animations["Idle"].crossFadeTo(e.animations["Walking"],1,!0).play())}}}))}},{key:"chooseEvent",value:function(e){var t=this,n="";return e.forEach((function(e){0==Math.floor(Math.random()*Math.floor(t.invRate[e]))&&(n=e)})),n}},{key:"initCamera",value:function(){this.camera=new he["W"](45,this.height/this.width,.25,100),this.camera.position.set(-2,2,20),this.camera.lookAt(new he["pb"](0,8,0))}},{key:"updateBackground",value:function(){this.$vuetify.theme.dark?(this.scene.background=new he["j"](1514521),this.scene.fog=new he["n"](1118481,20,170),this.ground.material=new he["L"]({color:3355443,depthWrite:!1,flatShading:!0})):(this.scene.background=new he["j"](16777215),this.scene.fog=new he["n"](16777215,20,100),this.ground.material=new he["L"]({color:7369328,depthWrite:!1,flatShading:!0}))}},{key:"resize",value:function(){var e,t,n,a,r=this,i=null===(e=this.container)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.clientWidth,o=null===(n=this.container)||void 0===n||null===(a=n.parentElement)||void 0===a?void 0:a.clientHeight;o&&i&&(this.height!=o||this.width!=i)&&(this.height=i,this.width=o,clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((function(){r.initCamera(),r.renderer&&r.renderer.setSize(r.height,r.width)}),100))}},{key:"animate",value:function(){var e=this.clock.getDelta();if(this.mixer&&this.mixer.update(e),requestAnimationFrame(this.animate),this.fsm){var t=this.fsm.transitions(),n=this.chooseEvent(t);""!==n&&this.fsm[n]()}this.camera&&this.renderer.render(this.scene,this.camera)}},{key:"mounted",value:function(){var e,t,n=this;this.container=document.getElementById("animated-background"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=he["V"],this.resize(),this.initCamera(),this.scene.fog=new he["n"](14737632,20,100);var a=new he["q"](16777215,4473924);a.position.set(-15,10,20),this.scene.add(a);var r=new he["k"](16777215);r.position.set(4,10,20),r.target.position.set(0,0,0),r.castShadow=!0,this.scene.add(r),this.ground.geometry=new he["X"](200,200),this.ground.receiveShadow=!0,this.ground.rotation.x=-Math.PI/2,this.scene.add(this.ground),this.updateBackground();var i=new fe["a"];i.load("./RobotExpressive.glb",(function(e){n.model=e.scene,n.model&&(n.model.traverse((function(e){e.isObject3D&&(e.castShadow=!0,e.receiveShadow=!0)})),n.scene.add(n.model),n.mixer=new he["b"](n.model)),e.animations.forEach((function(e){var t,a=null===(t=n.mixer)||void 0===t?void 0:t.clipAction(e);a&&(n.animations[e.name]=a)})),n.initStateMachine()}),void 0,(function(e){console.error(e)})),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.height,this.width),null===(e=this.container)||void 0===e||e.appendChild(this.renderer.domElement),this.animate(),this.resizeObserver&&this.container&&this.container.parentElement&&this.resizeObserver.observe(null===(t=this.container)||void 0===t?void 0:t.parentElement)}},{key:"distroyed",value:function(){delete this.resizeObserver}},{key:"onPropertyChanged",value:function(){this.updateBackground()}}]),n}(u["b"]);Object(l["a"])([Object(u["c"])("$vuetify.theme.dark")],be.prototype,"onPropertyChanged",null),be=Object(l["a"])([u["a"]],be);var ge=be,ke=ge,we=(n("29dd"),Object(b["a"])(ke,ue,de,!1,null,null,null)),ye=we.exports,Oe=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);Oe=Object(l["a"])([Object(u["a"])({name:"App",components:{LoadingOverlay:x,NavDrawer:B,NavBar:te,Footer:le,AnimatedBackground:ye}})],Oe);var je=Oe,_e=je,Ve=(n("034f"),n("7496")),$e=n("a523"),xe=n("f6c4"),Ee=Object(b["a"])(_e,r,i,!1,null,null,null),Se=Ee.exports;k()(Ee,{VApp:Ve["a"],VCol:O["a"],VContainer:$e["a"],VMain:xe["a"],VRow:V["a"]});var Ae=n("9483");Object(Ae["a"])("".concat("/kruecklde/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("7db0"),n("a630"),n("d81d"),n("fb6a"),n("b64b");var Te=n("8c4f"),Ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Le=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],Me=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);Me=Object(l["a"])([u["a"]],Me);var Ie=Me,ze=Ie,Ne=Object(b["a"])(ze,Ce,Le,!1,null,null,null),Pe=Ne.exports,De=[{path:"/",name:"Home",component:Pe,meta:{title:"krueckl.de",metaTags:[{property:"???",content:"???"}]}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Be=De;a["a"].use(Te["a"]);var Fe=new Te["a"]({mode:"history",base:"/kruecklde/",routes:Be});Fe.beforeEach((function(e,t,n){var a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),r=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!r)return n();r.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),n()}));var Re=Fe,We=n("f309"),qe=n("fcf4");a["a"].use(We["a"]);var He=new We["a"]({icons:{iconfont:"mdi"},theme:{options:{customProperties:!0},themes:{light:{primary:"#4CAF50",secondary:"#00b006",accent:qe["a"].shades.black,error:qe["a"].red.accent3,background:qe["a"].shades.white,drawerbackground:"#d9ded9",cardbackground:"#fff"},dark:{primary:"#47a64a",secondary:"#00b006",background:"#21272c",drawerbackground:"#212621",cardbackground:"#212621"}}}}),Je=(n("ac1f"),n("466d"),n("1276"),n("498a"),n("a925"));function Ue(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}function Ke(){var e=void 0!==navigator.languages?navigator.languages[0]:navigator.language;if(e){var t=e.trim().split(/-|_/)[0];return t}}a["a"].use(Je["a"]);var Xe=new Je["a"]({locale:Ke(),fallbackLocale:"en",messages:Ue()}),Ye=n("2f62"),Ze={error:!1,loading:!1,loadingList:[],errorNote:""};a["a"].use(Ye["a"]);var Ge=new Ye["a"].Store({state:Ze,mutations:{},actions:{}});a["a"].config.productionTip=!1;var Qe=new a["a"]({router:Re,vuetify:He,i18n:Xe,store:Ge,render:function(e){return e(Se)}}).$mount("#app");window.matchMedia&&(Qe.$vuetify.theme.dark=window.matchMedia("(prefers-color-scheme: dark)").matches),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){Qe.$vuetify.theme.dark=e.matches}))},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},edd4:function(e){e.exports=JSON.parse('{"lang":"English","language":"Language","hello":"Hello {user}!","darktheme":"Dark Theme","message":"Message","title":"Title"}')}});