(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{489:function(t,e,n){"use strict";n.r(e);n(306);var r=n(27),o=n(43),c=n(37),l=n(28),h=n(13),d=n(312);function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(o.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://nakamura196.github.io/jpsearch2",t}return n}(d.Vue);v([Object(d.Prop)({default:12})],w.prototype,"cols",void 0),v([Object(d.Prop)({default:3})],w.prototype,"sm",void 0),v([Object(d.Prop)({default:[]})],w.prototype,"list",void 0);var y=w=v([d.Component],w),m=n(103),R=n(142),P=n.n(R),k=n(217),j=n(93),_=n(491),O=n(514),E=n(176),F=n(492),I=n(484),C=n(515),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.list,(function(e,r){return n("v-col",{key:r,attrs:{cols:t.cols,sm:t.sm}},[n("v-card",{staticClass:"mb-4",attrs:{"no-body":""}},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("v-img",{staticClass:"grey lighten-2",staticStyle:{height:"150px"},attrs:{src:e.image,contain:"",width:"100%"}})],1),t._v(" "),n("div",{staticClass:"pa-4"},[n("nuxt-link",{attrs:{to:t.localePath(e.path)}},[n("b",[t._v(t._s(e.label))])]),t._v(" "),e.description?n("p",{staticClass:"mt-2 mb-0"},[t._v(t._s(e.description))]):t._e()],1),t._v(" "),e.url?[n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("a",t._g({attrs:{target:"_blank",href:e.url}},o),[n("img",{attrs:{width:"30px",src:t.baseUrl+"/img/icons/rdf-logo.svg"}})])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s("RDF"))])])],1)]:t._e()],2)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;P()(component,{VCard:k.a,VCardActions:j.a,VCol:_.a,VDivider:O.a,VImg:E.a,VRow:F.a,VSpacer:I.a,VTooltip:C.a})},519:function(t,e,n){"use strict";n.r(e);n(26),n(14),n(306),n(32),n(232),n(231),n(52),n(77),n(53);var r=n(16),o=n(27),c=n(36),l=n(43),h=n(37),d=n(28),f=n(13),v=n(180),w=n(137),y=n.n(w),m=n(489);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var P=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(l.a)(d,t);var e,n,h=R(d);function d(){var t;return Object(o.a)(this,d),(t=h.apply(this,arguments)).endpoint="https://jpsearch.go.jp/rdf/sparql?query=",t.title=t.$t("人物"),t.total=0,t.perPage=20,t.people=[],t.loadingFlag=!0,t.currentPage=1,t.keywordStr="",t}return Object(c.a)(d,[{key:"watchR",value:function(){this.search()}},{key:"getTotal",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.keywordStr,n="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      SELECT DISTINCT (count(distinct ?cho) as ?c) WHERE {\n        ?s schema:creator ?cho .\n        ?cho rdfs:label ?label;\n        schema:image ?thumbnail . \n        ".concat(""!==e?"?label bif:contains '\""+e+"\"'":"","\n      }\n    "),r=this.endpoint+encodeURIComponent(n)+"&output=json",t.next=5,y.a.get(r);case 5:return o=t.sent,t.abrupt("return",Number(o.data.results.bindings[0].c.value));case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"created",value:function(){this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loadingFlag=!0,e=this.$route.query.keyword||"",this.keywordStr=e,t.next=5,this.getTotal();case 5:n=t.sent,this.total=n,r=Number(this.$route.query.from)||0,this.currentPage=r/this.perPage+1,o="\n      PREFIX schema: <http://schema.org/>\n      PREFIX type: <https://jpsearch.go.jp/term/type/>\n      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX hpdb: <https://w3id.org/hpdb/api/>\n      PREFIX sh: <http://www.w3.org/ns/shacl#>\n      select distinct count(?s) as ?count ?cho ?label ?thumbnail WHERE {\n        ?s schema:creator ?cho .\n        ?cho rdfs:label ?label;\n        schema:image ?thumbnail . \n        ".concat(""!==e?"?label bif:contains '\""+e+"\"'":"","\n      }\n      ORDER BY desc(?count)\n      LIMIT ").concat(this.perPage,"\n      OFFSET ").concat(r,"\n    "),y.a.get(this.endpoint+encodeURIComponent(o)+"&output=json").then((function(t){for(var e=[],n=t.data.results.bindings,i=0;i<n.length;i++){var r=n[i],o={label:r.label.value,description:c.$t("Item")+": "+r.count.value,path:{name:"item",query:{id:r.cho.value}}};r.thumbnail?o.image=r.thumbnail.value:o.image="https://nakamura196.github.io/jpsearch2/img/icons/no-image.png",e.push(o)}c.people=e,c.loadingFlag=!1}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setCurrentPage",value:function(t){var e=(t-1)*this.perPage,n=Object.assign({},this.$route.query);n.from=e,this.$router.push(this.localePath({name:"search",query:n}),(function(){}),(function(){}))}},{key:"trigger",value:function(t){13===t.keyCode&&this.updateQuery()}},{key:"updateQuery",value:function(){var t,e=Object.assign({},this.$route.query),n=this.keywordStr;n||(n=""),t=n.startsWith('"')&&n.endsWith('"')?[n]:n.split(" "),e.keyword=t,delete e.from,this.$router.push(this.localePath({name:"search",query:e}),(function(){}),(function(){}))}},{key:"paginationLength",get:function(){return Math.ceil(this.total/this.perPage)}}]),d}(v.Vue);P([Object(v.Watch)("$route")],k.prototype,"watchR",null);var j=k=P([Object(v.Component)({components:{Grid:m.default},watchQuery:!0})],k),_=n(103),O=n(142),E=n.n(O),F=n(491),I=n(487),C=n(516),x=n(214),X=n(492),S=n(57),V=n(517),component=Object(_.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey lighten-3"}},[n("v-container",{staticClass:"py-4"},[n("h1",["ja"===t.$i18n.locale?[t._v("\n          "+t._s(t.$t(t.title))+t._s(t.$t("browse_by"))+"\n        ")]:[t._v("\n          "+t._s(t.$t("browse_by"))+"\n          "+t._s(t.$t(t.title))+"\n        ")],t._v("\n        （"+t._s(t.total.toLocaleString())+"）\n      ")],2)])],1),t._v(" "),n("v-container",[t.loadingFlag?[n("div",{staticClass:"text-center my-10"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]:[n("v-row",{staticClass:"mt-5",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{staticClass:"px-4",attrs:{"single-line":"","background-color":"grey lighten-3",filled:"",rounded:"",dense:"","hide-details":"",label:t.$t("add_a_search_term"),"append-icon":"mdi-magnify",clearable:"","clear-icon":"mdi-close-circle"},on:{"click:append":function(e){return t.updateQuery()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.trigger(e)}},model:{value:t.keywordStr,callback:function(e){t.keywordStr=e},expression:"keywordStr"}})],1)],1),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("Grid",{attrs:{cols:"12",sm:2,list:t.people}}),t._v(" "),n("div",{staticClass:"text-center my-5"},[n("v-pagination",{attrs:{length:t.paginationLength,"total-visible":7},on:{input:t.setCurrentPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;E()(component,{Grid:n(489).default}),E()(component,{VCol:F.a,VContainer:I.a,VPagination:C.a,VProgressCircular:x.a,VRow:X.a,VSheet:S.a,VTextField:V.a})}}]);