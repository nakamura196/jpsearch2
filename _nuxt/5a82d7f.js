(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{493:function(t,e,n){"use strict";n.r(e);n(306);var r=n(27),o=n(42),c=n(35),l=n(28),h=n(13),d=n(311);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/jpsearch2",t}return n}(d.Vue);v([Object(d.Prop)({default:12})],m.prototype,"cols",void 0),v([Object(d.Prop)({default:3})],m.prototype,"sm",void 0),v([Object(d.Prop)({default:[]})],m.prototype,"list",void 0);var y=m=v([d.Component],m),w=n(103),P=n(142),R=n.n(P),k=n(218),j=n(92),O=n(511),_=n(526),x=n(176),E=n(512),I=n(484),C=n(527),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.list,(function(e,r){return n("v-col",{key:r,attrs:{cols:t.cols,sm:t.sm}},[n("v-card",{staticClass:"mb-4",attrs:{"no-body":"",flat:""}},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:e.image,contain:"",width:"100%"}})],1),t._v(" "),n("div",{staticClass:"pa-4"},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("h3",[t._v(t._s(e.label))])]),t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v(t._s(e.description))]):t._e()],1),t._v(" "),e.url?[n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("a",t._g({attrs:{target:"_blank",href:e.url}},o),[n("img",{attrs:{width:"30px",src:t.baseUrl+"/img/icons/rdf-logo.svg"}})])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s("RDF"))])])],1)]:t._e()],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;R()(component,{VCard:k.a,VCardActions:j.a,VCol:O.a,VDivider:_.a,VImg:x.a,VRow:E.a,VSpacer:I.a,VTooltip:C.a})},551:function(t,e,n){"use strict";n.r(e);n(26),n(45),n(14),n(306),n(32),n(232),n(231),n(52),n(77),n(51);var r=n(16),o=n(27),c=n(36),l=n(42),h=n(35),d=n(28),f=n(13),v=n(179),m=n(118),y=n.n(m),w=n(493);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(l.a)(d,t);var e,n,h=P(d);function d(){var t;return Object(o.a)(this,d),(t=h.apply(this,arguments)).endpoint="https://jpsearch.go.jp/rdf/sparql?query=",t.name="search",t.type="agential",t.total=0,t.perPage=24,t.people=[],t.loadingFlag=!0,t.currentPage=1,t.keywordStr="",t}return Object(c.a)(d,[{key:"watchR",value:function(){this.search()}},{key:"getTotal",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.keywordStr,n="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      SELECT DISTINCT (count(distinct ?cho) as ?c) WHERE {\n        ?s schema:creator ?cho .\n        ?cho rdfs:label ?label;\n        schema:image ?thumbnail . \n        ".concat(""!==e?"?label bif:contains '\""+e+"\"'":"","\n      }\n    "),r=this.endpoint+encodeURIComponent(n)+"&output=json",t.next=5,y.a.get(r);case 5:return o=t.sent,t.abrupt("return",Number(o.data.results.bindings[0].c.value));case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:function(){this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c,l=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadingFlag=!0,e=this.$route.query.keyword||"",this.keywordStr=e,t.next=5,this.getTotal();case 5:n=t.sent,this.total=n,r=Number(this.$route.query.from)||0,this.currentPage=r/this.perPage+1,o=this.lang,c="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      select distinct count(?s) as ?count ?cho ?label ?name ?thumbnail WHERE {\n        ?s schema:creator ?cho .\n        ?cho rdfs:label ?label;\n        schema:image ?thumbnail . \n        ".concat("ja"===o?"":"OPTIONAL {?cho schema:name ?name . filter (lang(?name) = 'en')} ","\n        ").concat(""!==e?"?label bif:contains '\""+e+"\"'":"","\n      }\n      ORDER BY desc(?count)\n      LIMIT ").concat(this.perPage,"\n      OFFSET ").concat(r,"\n    "),y.a.get(this.endpoint+encodeURIComponent(c)+"&output=json").then((function(t){for(var e=[],n=t.data.results.bindings,i=0;i<n.length;i++){var r=n[i],label=r.label.value,o={label:label=r.name?r.name.value:label,path:{name:"item",query:{id:r.cho.value}}};r.thumbnail?o.image=r.thumbnail.value:o.image="https://nakamura196.github.io/jpsearch2/img/icons/no-image.png",e.push(o)}l.people=e,l.loadingFlag=!1}));case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setCurrentPage",value:function(t){var e=(t-1)*this.perPage,n=Object.assign({},this.$route.query);n.from=e,this.$router.push(this.localePath({name:"search",query:n}),(function(){}),(function(){}))}},{key:"trigger",value:function(t){13===t.keyCode&&this.updateQuery()}},{key:"updateQuery",value:function(){var t,e=Object.assign({},this.$route.query),n=this.keywordStr;n||(n=""),t=n.startsWith('"')&&n.endsWith('"')?[n]:n.split(" "),e.keyword=t,delete e.from,this.$router.push(this.localePath({name:"search",query:e}),(function(){}),(function(){}))}},{key:"head",value:function(){return{title:this.$t("search")}}},{key:"paginationLength",get:function(){return Math.ceil(this.total/this.perPage)}},{key:"lang",get:function(){return this.$i18n.locale}},{key:"items",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t(this.type)},{text:this.$t("search")+(this.total>0?"（"+this.total.toLocaleString()+"）":"")}]}}]),d}(v.Vue);R([Object(v.Watch)("$route")],k.prototype,"watchR",null);var j=k=R([Object(v.Component)({components:{Grid:w.default}})],k),O=n(103),_=n(142),x=n.n(_),E=n(546),I=n(511),C=n(490),F=n(216),X=n(547),S=n(215),V=n(512),$=n(57),D=n(548),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),n("v-container",[t.loadingFlag?[n("div",{staticClass:"text-center my-10"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:[n("v-row",{staticClass:"mt-5",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{staticClass:"px-4",attrs:{"single-line":"","background-color":"grey lighten-3",filled:"",rounded:"",dense:"","hide-details":"",label:t.$t("add_a_search_term"),"append-icon":"mdi-magnify",clearable:"","clear-icon":"mdi-close-circle"},on:{"click:append":function(e){return t.updateQuery()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.keywordStr,callback:function(e){t.keywordStr=e},expression:"keywordStr"}})],1)],1),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("Grid",{attrs:{cols:"12",sm:2,list:t.people}}),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{Grid:n(493).default}),x()(component,{VBreadcrumbs:E.a,VCol:I.a,VContainer:C.a,VIcon:F.a,VPagination:X.a,VProgressCircular:S.a,VRow:V.a,VSheet:$.a,VTextField:D.a})}}]);