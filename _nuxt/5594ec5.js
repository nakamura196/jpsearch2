(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(t,e,n){"use strict";var o=n(178);o.a.apps.length||o.a.initializeApp({apiKey:"AIzaSyBOOt8xvbTh5JAJ4kJxPD_6ohcyb0LfR7k",authDomain:"genji2022.firebaseapp.com",databaseURL:"https://genji2022.firebaseio.com",projectId:"genji2022",storageBucket:"genji2022.appspot.com",messagingSenderId:"52466352397",appId:"1:52466352397:web:cdc45cbe4b1ab3f96df044"}),e.a=o.a},226:function(t,e,n){"use strict";var o=n(2),r=n(464);o.default.use(r.a)},228:function(t,e,n){"use strict";e.a={appId:"LA1L89ESU7",apiKey:"a8dc3bccca1af99f7a77ea55f7dd9f4d"}},229:function(t,e,n){"use strict";n(70),n(32),n(63),n(52);var o=n(27),r=n(37),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"xml2html",value:function(data,t){return data?data=data.split("&lt;").join("<").split("&gt;").join(">").replace("<head",'<p class="teiHead"><b').replace("</head>","</b></p>").split("<lb/>").join("<br/>").split("<date").join('<span class="'.concat(t?"teiDate":"",'"')).split("</date>").join("</span>").split("<persName").join('<span class="'.concat(t?"teiPersName":"",'"')).split("</persName>").join("</span>").split("<place").join('<span class="'.concat(t?"teiPlaceName":"",'"')).split("</placeName>").join("</span>").split("<time").join('<span class="'.concat(t?"teiTime":"",'"')).split("</time>").join("</span>"):null}},{key:"formatArrayValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ";if(null==t)return"";if(1===t.length)return t[0];var n=t.join(e);return n}},{key:"truncate",value:function(t,e){return t&&t["@id"]?"":(t=String(t)).length<=e?t:t.substring(0,e)+"..."}}]),t}();e.a=function(t,e){e("utils",new c)}},262:function(t,e,n){var content=n(345);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("50f9c72e",content,!0,{sourceMap:!1})},271:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("56b15182",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n(306),n(51);var o=n(16),r=n(27),c=n(37),l=n(42),d=n(35),v=n(28),f=n(13),m=n(179),h=n(102);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(v.a)(t);if(e){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(l.a)(d,t);var e,n=_(d);function d(){var t;return Object(r.a)(this,d),(t=n.apply(this,arguments)).fab=!1,t.drawer=!1,t.baseUrl="https://nakamura196.github.io/jpsearch2",t.siteName="JPS自動ギャラリー",t.userName=null,t.userPic=null,t.dialog=!1,t.dialog4login=!1,t}return Object(c.a)(d,[{key:"created",value:function(){this.onAuthStateChanged()}},{key:"onScroll",value:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}}},{key:"toTop",value:function(){this.$vuetify.goTo(0)}},{key:"signInWithGoogle",value:function(){this.$store.dispatch("login"),this.dialog4login=!this.dialog4login}},{key:"onAuthStateChanged",value:function(){var t=this;h.a.auth().onAuthStateChanged((function(e){t.userName=e?e.displayName:null,t.userPic=e?e.photoURL:null,t.isSignedIn=!!e}))}},{key:"signOut",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.auth().signOut();case 2:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"isSignedIn",get:function(){return this.$store.getters.getIsSignedIn},set:function(t){this.$store.commit("setSignedIn",t)}}]),d}(m.Vue),k=j=y([Object(m.Component)({components:{}})],j),w=(n(366),n(103)),x=n(142),N=n.n(x),O=n(478),C=n(486),V=n(479),P=n(217),I=n(297),S=n(218),U=n(92),T=n(487),A=n(480),L=n(481),E=n(216),R=n(219),D=n(132),$=n(220),F=n(100),J=n(482),M=n(483),B=n(485),G=n(484),z=n(298),H=n(299),W=n.n(H),K=n(168),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-navigation-drawer",{attrs:{app:"",temporary:!0},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{link:"",to:t.localePath({name:"index"}),exact:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath({name:"search"})}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("search")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",target:"_blank",href:"https://jpsearch.go.jp"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("ジャパンサーチ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",target:"_blank",href:"https://jpsearch.go.jp/rdf/sparql/easy/"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-content",[n("v-list-item-title",[t._v("ジャパンサーチ利活用スキーマ")])],1)],1)],1)],1)],1),t._v(" "),n("v-app-bar",{attrs:{dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[n("nuxt-link",{staticStyle:{color:"inherit","text-decoration":"inherit"},attrs:{to:t.localePath({name:"index"})}},[t._v("\n          "+t._s(t.$t(t.siteName))+"\n        ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{depressed:"",btn:""}},o),[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-translate")]),t._v(" "),"xs"!=t.$vuetify.breakpoint.name?[t._v("\n              "+t._s("ja"==t.$i18n.locale?"日本語":"English"))]:t._e(),t._v(" "),n("v-icon",{staticClass:"ml-2"},[t._v("mdi-menu-down")])],2)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:t.switchLocalePath("ja")}},[n("v-list-item-title",[t._v("日本語")])],1),t._v(" "),n("v-list-item",{attrs:{to:t.switchLocalePath("en")}},[n("v-list-item-title",[t._v("English")])],1)],1)],1),t._v(" "),t._e()],1)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("v-footer",{staticClass:"mt-5",attrs:{dark:!0}},[n("v-container",[n("p",{staticClass:"text-center my-5"},[t._v("\n        "+t._s(t.$t(t.siteName))+"\n      ")])])],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("プロフィールを編集")]),t._v(" "),n("v-card-text",{staticClass:"mt-5"},[t._v("Lorem ipsum dolor sit amet, consectetur a")]),t._v(" "),n("v-card-actions",[n("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("キャンセル")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"}},[t._v("更新")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog4login,callback:function(e){t.dialog4login=e},expression:"dialog4login"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v(t._s(t.$t("login")))]),t._v(" "),n("v-card-text",{staticClass:"mt-5"},[t._v("\n        ログインにはGoogle"),t._v("アカウントが必要です。\n        "),n("div",{staticClass:"text-center mb-5"},[n("v-btn",{staticClass:"error mt-5",on:{click:t.signInWithGoogle}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi mdi-google")]),t._v(t._s(t.$t("login_with_google"))+"\n          ")],1)],1)])],1)],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",large:"",color:"error"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;N()(component,{VApp:O.a,VAppBar:C.a,VAppBarNavIcon:V.a,VAvatar:P.a,VBtn:I.a,VCard:S.a,VCardActions:U.a,VCardText:U.b,VCardTitle:U.c,VContainer:T.a,VDialog:A.a,VFooter:L.a,VIcon:E.a,VList:R.a,VListItem:D.a,VListItemAction:$.a,VListItemContent:F.a,VListItemTitle:F.b,VMain:J.a,VMenu:M.a,VNavigationDrawer:B.a,VSpacer:G.a,VToolbarTitle:z.a}),W()(component,{Scroll:K.b})},320:function(t,e,n){n(321),t.exports=n(322)},344:function(t,e,n){"use strict";n(262)},345:function(t,e,n){(e=n(17)(!1)).push([t.i,"h1[data-v-63e85905]{font-size:20px}",""]),t.exports=e},366:function(t,e,n){"use strict";n(271)},367:function(t,e,n){(e=n(17)(!1)).push([t.i,".teiDate{background-color:#bbdefb}.teiTime{background-color:#fff9c4}.teiPersName{background-color:#ffccbc}.teiPlaceName{background-color:#c8e6c9}a{text-decoration:none}",""]),t.exports=e},423:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return d})),n.d(e,"actions",(function(){return v})),n.d(e,"getters",(function(){return f}));n(60),n(22),n(68),n(69);var o=n(102),r=o.a.firestore(),c=r.collection("todos"),l=function(){return{userUid:"",userName:"",userPic:"",todos:[],numbers:[],isSignedIn:!1}},d={setUserUid:function(t,e){t.userUid=e},setUserName:function(t,e){t.userName=e},addTodo:function(t,e){t.todos.push(e)},addNumber:function(t,e){t.numbers.push(e)},clearTodo:function(t){t.todos=[]},setSignedIn:function(t,e){t.isSignedIn=e},setUserPic:function(t,e){t.userPic=e}},v={login:function(t){var e=t.commit,n=new o.a.auth.GoogleAuthProvider;o.a.auth().signInWithPopup(n).then((function(t){var n=t.user;e("setUserUid",n.uid),e("setUserName",n.displayName),e("setUserPic",n.photoURL)})).catch((function(t){var e=t.code;console.log("error : "+e)}))},fetchTodos:function(t){var e=t.commit;c.get().then((function(t){t.forEach((function(t){e("addTodo",t.data())}))})).catch((function(t){console.log("error : "+t)}))},addTodo:function(t,e){var n=t.commit;c.add({todo:e.todo,limit:e.limit}).then((function(t){n("addTodo",e)})).catch((function(t){console.error("Error adding document: ",t)}))},addNumber:function(t,e){var n=t.commit;r.collection(e.parent).doc(e.id).set({values:e.values}).then((function(t){n("addNumber",e)})).catch((function(t){console.error("Error adding document: ",t)}))}},f={getUserUid:function(t){return t.userUid},getUserName:function(t){return t.userName},getTodos:function(t){return t.todos},getIsSignedIn:function(t){return t.isSignedIn},getUserPic:function(t){return t.userPic}}},430:function(t,e,n){var map={"./en":[313,0],"./en.json":[313,0],"./ja":[314,1],"./ja.json":[314,1]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=430,t.exports=o},450:function(t,e,n){var map={"./ja":211,"./ja.js":211};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=450},89:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(344),n(103)),c=n(142),l=n.n(c),d=n(478),v=n(487),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-container",{staticClass:"my-10"},[404===t.error.statusCode?n("h1",[t._v("\n      "+t._s(t.pageNotFound)+"\n    ")]):n("h1",[t._v("\n      "+t._s(t.otherError)+"\n    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)],1)}),[],!1,null,"63e85905",null);e.a=component.exports;l()(component,{VApp:d.a,VContainer:v.a})}},[[320,8,3,9]]]);