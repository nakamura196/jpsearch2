(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{521:function(t,e,n){"use strict";n.r(e);n(26),n(45),n(306),n(32),n(231),n(51);var r=n(16),o=n(27),c=n(36),l=n(42),h=n(35),d=n(28),f=n(13),m=n(179),w=n(118),v=n.n(w),y=n(510);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(l.a)(h,t);var e,n=R(h);function h(){var t;return Object(o.a)(this,h),(t=n.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(c.a)(h,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var u,e,n,r,o,i,c,label,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=this.u,e=this.$i18n.locale,n="\n        PREFIX schema: <http://schema.org/>\n        PREFIX type: <https://jpsearch.go.jp/term/type/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        PREFIX owl: <http://www.w3.org/2002/07/owl#>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX hpdb: <https://w3id.org/hpdb/api/>\n        PREFIX sh: <http://www.w3.org/ns/shacl#>\n        SELECT DISTINCT ?keyword ?label ?name WHERE { \n          ?s schema:about <".concat(u,"> . \n          ?s schema:about ?keyword . \n          FILTER(?keyword != <").concat(u,"> ) . \n\n          ?keyword rdfs:label ?label . \n\n          ").concat("ja"===e?"":"OPTIONAL {?keyword schema:name ?name . filter (lang(?name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(20,"\n      "),t.next=6,v.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(n)+"&output=json");case 6:for(r=t.sent,o=r.data.results.bindings,i=0;i<o.length;i++)c=o[i],label=c.label.value,label=c.name?c.name.value:label,l={_id:c.keyword.value,to:this.localePath({name:"keyword",query:{id:c.keyword.value}}),_source:{_label:label,_url:c.keyword.value,_thumbnail:c.thumbnail?c.thumbnail.value:"https://jpsearch.go.jp/assets/img/no-image/curation-no-image_greylighter.png"}},this.results.results_w_thumbnail.push(l);case 9:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),h}(m.Vue);j([Object(m.Prop)()],_.prototype,"u",void 0),j([Object(m.Watch)("u")],_.prototype,"watchU",null);var I=_=j([Object(m.Component)({components:{HorizontalItems:y.default}})],_),E=n(103),P=n(142),O=n.n(P),X=n(508),component=Object(E.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return this.results.results_w_thumbnail.length>0?e("v-container",[e("h2",{staticClass:"mt-5 mb-3 text-center"},[this._v(this._s(this.$t("Related Keywords")))]),this._v(" "),e("HorizontalItems",{attrs:{data:this.results.results_w_thumbnail}})],1):this._e()}),[],!1,null,null,null);e.default=component.exports;O()(component,{HorizontalItems:n(510).default}),O()(component,{VContainer:X.a})},522:function(t,e,n){"use strict";n.r(e);n(309),n(310),n(26),n(45),n(306),n(32),n(231),n(51);var r=n(16),o=n(27),c=n(36),l=n(42),h=n(35),d=n(28),f=n(13),m=n(179),w=n(118),v=n.n(w),y=n(510);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(l.a)(h,t);var e,n=R(h);function h(){var t;return Object(o.a)(this,h),(t=n.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(c.a)(h,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,u,r,o,c,l,i,h,label,d,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=f.length>0&&void 0!==f[0]&&f[0],console.log({searchNoThumbFlag:e}),n=20,u=this.u,r=this.$i18n.locale,o="\n        PREFIX schema: <http://schema.org/>\n        PREFIX type: <https://jpsearch.go.jp/term/type/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        PREFIX owl: <http://www.w3.org/2002/07/owl#>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX hpdb: <https://w3id.org/hpdb/api/>\n        PREFIX sh: <http://www.w3.org/ns/shacl#>\n        SELECT distinct ?dest ?label ?thumbnail ?description ?name WHERE {\n          \n          ?cho schema:about <".concat(u,'>;\n          jps:agential\n          [jps:relationType/skos:broader?/rdfs:label "制作"; jps:value ?dest ] .\n          \n          ').concat(e?"MINUS { ?dest schema:image ?thumbnail } ":"?dest schema:image ?thumbnail .","\n          ?dest rdfs:label ?label .\n          optional { ?dest schema:description ?description . }\n\n          ").concat("ja"===r?"":"OPTIONAL {?dest schema:name ?name . filter (lang(?name) = 'en')} OPTIONAL {?p schema:name ?p_name . filter (lang(?p_name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(n,"\n      "),t.next=8,v.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(o)+"&output=json");case 8:for(c=t.sent,l=c.data.results.bindings,i=0;i<l.length;i++)h=l[i],label=h.label.value,label=h.name?h.name.value:label,d={_id:h.dest.value,to:this.localePath({name:"item",query:{id:h.dest.value}}),_source:{_label:label,description:h.description?h.description.value:"",_url:h.dest.value,_thumbnail:h.thumbnail?h.thumbnail.value:"https://jpsearch.go.jp/assets/img/no-image/curation-no-image_greylighter.png"}},this.results.results_w_thumbnail.push(d);!e&&l.length<10&&this.search(!0);case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),h}(m.Vue);j([Object(m.Prop)()],_.prototype,"u",void 0),j([Object(m.Prop)()],_.prototype,"type",void 0),j([Object(m.Watch)("u")],_.prototype,"watchU",null);var I=_=j([Object(m.Component)({components:{HorizontalItems:y.default}})],_),E=n(103),P=n(142),O=n.n(P),X=n(508),component=Object(E.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.results.results_w_thumbnail.length>0?n("v-container",[n("h2",{staticClass:"mt-5 mb-3 text-center"},[t._v(t._s(t.$t("Related "+t.type)))]),t._v(" "),n("HorizontalItems",{attrs:{data:t.results.results_w_thumbnail}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;O()(component,{HorizontalItems:n(510).default}),O()(component,{VContainer:X.a})},531:function(t,e,n){"use strict";n(26),n(45),n(14),n(32),n(52);var r=n(532),o=n(118),c=n.n(o),l={name:"Chart",extends:r.a,props:["query","type","u"],data:function(){return{uris:[],total:0}},watch:{u:function(){this.init()}},created:function(){this.init()},methods:{handle:function(t,e){var n=e[0];if(n){var r=this.uris[n._index],o="keyword"===this.type?"schema:about <".concat(this.u,"> "):"",c="\n        PREFIX schema: <http://schema.org/>\n        PREFIX type: <https://jpsearch.go.jp/term/type/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        PREFIX owl: <http://www.w3.org/2002/07/owl#>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX hpdb: <https://w3id.org/hpdb/api/>\n        PREFIX sh: <http://www.w3.org/ns/shacl#>\n        SELECT DISTINCT ?cho ?label ?image WHERE {\n          {\n            ?cho rdfs:label ?label;\n            ".concat(o,"\n          } UNION {\n            ?cho rdfs:label ?label;\n            ?x ?y . ?y <https://jpsearch.go.jp/term/property#value> <").concat(this.u,">\n          }\n          ?cho rdfs:label ?label ;  jps:sourceInfo/schema:provider <").concat(r,"> .\n          OPTIONAL {?cho schema:image ?image}\n        }\n      "),l="https://jpsearch.go.jp/rdf/sparql/easy/?query="+encodeURIComponent(c);open(l,"_blank")}else console.log({point:t})},init:function(){var t=this;this.chartData=[];var e=this.query;c.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(e)+"&output=json").then((function(e){for(var n=e.data.results.bindings,r=[],o=[],c=[],i=0;i<n.length;i++){var l=n[i],h=l.provider.value.split("/"),label=l.pLabel?l.pLabel.value:h[h.length-1];label=l.name?l.name.value:label,r.push(label),o.push(Number(l.c.value)),c.push(l.provider.value),Number(l.c.value)}t.total=0,t.uris=c;var data={labels:r,datasets:[{label:"Item",data:o,borderWidth:1}]},d={scales:{yAxes:[{ticks:{beginAtZero:TextTrackCue}}]},responsive:!0,maintainAspectRatio:!1,onClick:t.handle};t.renderChart(data,d)}))}}},h=n(103),component=Object(h.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},540:function(t,e,n){"use strict";n.r(e);n(26),n(45),n(306),n(32),n(63),n(231),n(52),n(51);var r=n(16),o=n(27),c=n(36),l=n(42),h=n(35),d=n(28),f=n(13),m=n(179),w=n(118),v=n.n(w),y=n(510),R=n(531);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},I=function(t){Object(l.a)(h,t);var e,n=j(h);function h(){var t;return Object(o.a)(this,h),(t=n.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(c.a)(h,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,u,r,o,c,l,i,h,label,d,f,m,w=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=w.length>0&&void 0!==w[0]&&w[0],n=20,u=this.u,r=this.$i18n.locale,o="\n        PREFIX schema: <http://schema.org/>\n        PREFIX type: <https://jpsearch.go.jp/term/type/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        PREFIX owl: <http://www.w3.org/2002/07/owl#>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX hpdb: <https://w3id.org/hpdb/api/>\n        PREFIX sh: <http://www.w3.org/ns/shacl#>\n        SELECT distinct ?cho ?label ?thumbnail ?p ?p_label ?name ?p_name WHERE {\n          {\n            ?cho rdfs:label ?label;\n            ".concat("schema:spatial <"+u+"> .","\n          } \n          \n          ").concat(e?"MINUS { ?cho schema:image ?thumbnail } ":"?cho schema:image ?thumbnail .","\n          ?cho jps:sourceInfo ?sourceInfo .\n          ?sourceInfo schema:provider ?p .\n          optional { ?p rdfs:label ?p_label . } \n\n          ").concat("ja"===r?"":"OPTIONAL {?cho schema:name ?name . filter (lang(?name) = 'en')} OPTIONAL {?p schema:name ?p_name . filter (lang(?p_name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(n,"\n      "),t.next=8,v.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(o)+"&output=json");case 8:for(c=t.sent,l=c.data.results.bindings,i=0;i<l.length;i++)h=l[i],label=h.label.value,label=h.name?h.name.value:label,d=h.p.value.split("/"),f=h.p_label?h.p_label.value:d[d.length-1],f=h.p_name?h.p_name.value:f,m={_id:h.cho.value,href:h.cho.value.replace("/data/","/item/"),_source:{_label:label,description:f,_url:h.cho.value,_thumbnail:h.thumbnail?h.thumbnail.value:"https://jpsearch.go.jp/assets/img/no-image/curation-no-image_greylighter.png"}},this.results.results_w_thumbnail.push(m);!e&&l.length<10&&this.search(!0);case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"query",get:function(){var t=this.$i18n.locale,u=this.u;return"\n        PREFIX schema: <http://schema.org/>\n        PREFIX type: <https://jpsearch.go.jp/term/type/>\n        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n        PREFIX owl: <http://www.w3.org/2002/07/owl#>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX hpdb: <https://w3id.org/hpdb/api/>\n        PREFIX sh: <http://www.w3.org/ns/shacl#>\n        SELECT (count(distinct ?cho) as ?c) ?pLabel ?name ?provider WHERE {\n          {\n            ?cho rdfs:label ?label;\n            ".concat("schema:spatial <"+u+"> .","\n          } \n\n          \n          \n          ?cho jps:sourceInfo ?source .\n\n          ?source schema:provider ?provider .\n          optional { ?provider rdfs:label ?pLabel . }\n\n          ").concat("ja"===t?"":'?provider schema:name ?name . filter(lang(?name) = "en")',"\n        }\n        group by ?pLabel ?name ?provider order by desc(?c)\n        LIMIT 10\n    ")}}]),h}(m.Vue);_([Object(m.Prop)()],I.prototype,"u",void 0),_([Object(m.Prop)()],I.prototype,"type",void 0),_([Object(m.Watch)("u")],I.prototype,"watchU",null);var E=I=_([Object(m.Component)({components:{HorizontalItems:y.default,Chart:R.a}})],I),P=n(103),O=n(142),X=n.n(O),k=n(218),C=n(508),component=Object(P.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.results.results_w_thumbnail.length>0?n("v-container",[n("h2",{staticClass:"mt-5 mb-3 text-center"},[t._v(t._s(t.$t("Items")))]),t._v(" "),n("HorizontalItems",{attrs:{data:t.results.results_w_thumbnail}}),t._v(" "),n("v-card",{staticClass:"my-5 pa-5",attrs:{flat:""}},[n("div",{staticClass:"text-center"},[n("small",[n("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("データベース（上位10件）")))])])]),t._v(" "),n("Chart",{attrs:{height:300,query:t.query,type:"keyword",u:t.u}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;X()(component,{HorizontalItems:n(510).default,Chart:n(523).default}),X()(component,{VCard:k.a,VContainer:C.a})},579:function(t,e,n){"use strict";n.r(e);n(45),n(306),n(32),n(52);var r=n(27),o=n(36),c=n(42),l=n(35),h=n(28),d=n(13),f=n(179),m=n(511),w=n(517),v=n(521),y=n(540),R=n(522),j=n(516),_=n(515),I=n(514),E=n(513);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},X=function(t){Object(c.a)(n,t);var e=P(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).endpoint="https://jpsearch.go.jp/rdf/sparql?query=",t.title=t.$t("Item"),t.id=null,t}return Object(o.a)(n,[{key:"watchR",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){var t=this.$route.query.id+""||"https://jpsearch.go.jp/term/keyword/教会";this.id=t;var e=t.split("/");this.title=e[e.length-1]}},{key:"head",value:function(){return{title:this.title}}},{key:"type",get:function(){return this.$route.params.entity}},{key:"name",get:function(){var t=this.type;return"spatial"===t?"map":t}},{key:"items",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t(this.type),disabled:!1,to:this.localePath({name:this.name})},{text:this.title+this.$t("の自動ギャラリー")}]}}]),n}(f.Vue);O([Object(f.Watch)("$route")],X.prototype,"watchR",null);var k=X=O([Object(f.Component)({components:{Grid:m.default,TargetAgent:w.default,RelatedKeywords:v.default,EntityRelatedItems:y.default,KeywordRelatedAgentials:R.default,Event:j.default,Europeana:I.default,DPLA:E.default,Keywords:_.default}})],X),C=n(103),F=n(142),x=n.n(F),L=n(546),T=n(508),D=n(216),A=n(57),component=Object(C.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.id?n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}],null,!1,3681283568)})],1)],1),t._v(" "),n("TargetAgent",{staticClass:"mb-5",attrs:{u:t.id}}),t._v(" "),n("RelatedKeywords",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("Keywords",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("KeywordRelatedAgentials",{staticClass:"mt-10 mb-5",attrs:{u:t.id,type:"agential"}}),t._v(" "),n("EntityRelatedItems",{staticClass:"mt-10 mb-5",attrs:{u:t.id,type:t.type}}),t._v(" "),n("Event",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("Europeana",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("DPLA",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("v-container",{staticClass:"my-10"},[n("div",{staticClass:"text-center"},[n("small",[n("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("二次利用について")))]),t._v(" "),"ja"==t.$i18n.locale?[n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),n("br"),t._v("この作品は"),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n        ")]:[n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),n("br"),t._v("This work is licensed under a\n          "),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n        ")],t._v(" "),n("p",{staticClass:"mt-5"},[t._v(t._s(t.$t("ただし、画像は個々の権利表示による")))])],2)])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;x()(component,{TargetAgent:n(517).default,RelatedKeywords:n(521).default,Keywords:n(515).default,KeywordRelatedAgentials:n(522).default,EntityRelatedItems:n(540).default,Event:n(516).default,Europeana:n(514).default,DPLA:n(513).default}),x()(component,{VBreadcrumbs:L.a,VContainer:T.a,VIcon:D.a,VSheet:A.a})}}]);