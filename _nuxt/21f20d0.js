(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{536:function(t,e,n){"use strict";n(26),n(45),n(14),n(32),n(52);var r=n(537),c=n(118),l=n.n(c),o={name:"Chart",extends:r.a,props:["query","type","u"],data:function(){return{uris:[],total:0}},watch:{u:function(){this.init()}},created:function(){this.init()},methods:{handle:function(t,e){var n=e[0];if(n){var r=this.uris[n._index],c="keyword"===this.type?"schema:about <".concat(this.u,"> "):"",l="\n        SELECT DISTINCT ?cho ?label ?image WHERE {\n          {\n            ?cho rdfs:label ?label;\n            ".concat(c,"\n          } UNION {\n            ?cho rdfs:label ?label;\n            ?x ?y . ?y <https://jpsearch.go.jp/term/property#value> <").concat(this.u,">\n          }\n          ?cho rdfs:label ?label ;  jps:sourceInfo/schema:provider <").concat(r,"> .\n          OPTIONAL {?cho schema:image ?image}\n        }\n      "),o="https://jpsearch.go.jp/rdf/sparql/easy/?query="+encodeURIComponent(l);open(o,"_blank")}else console.log({point:t})},init:function(){var t=this;this.chartData=[];var e=this.query;l.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(e)+"&output=json").then((function(e){for(var n=e.data.results.bindings,r=[],c=[],l=[],i=0;i<n.length;i++){var o=n[i],h=o.provider.value.split("/"),label=o.pLabel?o.pLabel.value:h[h.length-1];label=o.name?o.name.value:label,r.push(label),c.push(Number(o.c.value)),l.push(o.provider.value),Number(o.c.value)}t.total=0,t.uris=l;var data={labels:r,datasets:[{label:"Item",data:c,borderWidth:1}]},f={scales:{yAxes:[{ticks:{beginAtZero:TextTrackCue}}]},responsive:!0,maintainAspectRatio:!1,onClick:t.handle};t.renderChart(data,f)}))}}},h=n(103),component=Object(h.a)(o,void 0,void 0,!1,null,null,null);e.a=component.exports},547:function(t,e,n){"use strict";n.r(e);n(309),n(310),n(26),n(45),n(306),n(32),n(231),n(51);var r=n(16),c=n(27),l=n(36),o=n(42),h=n(35),f=n(28),d=n(13),m=n(179),v=n(118),y=n.n(v),_=n(510);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},R=function(t){Object(o.a)(h,t);var e,n=j(h);function h(){var t;return Object(c.a)(this,h),(t=n.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(l.a)(h,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,u,r,c,l,o,i,h,label,f,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.length>0&&void 0!==d[0]&&d[0],console.log({searchNoThumbFlag:e}),n=20,u=this.u,r=this.$i18n.locale,c="\n        SELECT distinct ?dest ?label ?thumbnail ?description ?name WHERE {\n          \n          ?cho schema:about <".concat(u,'>;\n          jps:agential\n          [jps:relationType/skos:broader?/rdfs:label "制作"; jps:value ?dest ] .\n          \n          ').concat(e?"MINUS { ?dest schema:image ?thumbnail } ":"?dest schema:image ?thumbnail .","\n          ?dest rdfs:label ?label .\n          optional { ?dest schema:description ?description . }\n\n          ").concat("ja"===r?"":"OPTIONAL {?dest schema:name ?name . filter (lang(?name) = 'en')} OPTIONAL {?p schema:name ?p_name . filter (lang(?p_name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(n,"\n      "),t.next=8,y.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(c)+"&output=json");case 8:for(l=t.sent,o=l.data.results.bindings,i=0;i<o.length;i++)h=o[i],label=h.label.value,label=h.name?h.name.value:label,f={_id:h.dest.value,to:this.localePath({name:"item",query:{id:h.dest.value}}),_source:{_label:label,description:h.description?h.description.value:"",_url:h.dest.value,_thumbnail:h.thumbnail?h.thumbnail.value:"mdi-account"}},this.results.results_w_thumbnail.push(f);!e&&o.length<10&&this.search(!0);case 12:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),h}(m.Vue);O([Object(m.Prop)()],R.prototype,"u",void 0),O([Object(m.Prop)()],R.prototype,"type",void 0),O([Object(m.Watch)("u")],R.prototype,"watchU",null);var w=R=O([Object(m.Component)({components:{HorizontalItems:_.default}})],R),C=n(103),I=n(142),k=n.n(I),E=n(508),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.results.results_w_thumbnail.length>0?n("v-container",[n("h2",{staticClass:"mt-5 mb-3 text-center"},[t._v(t._s(t.$t("Related "+t.type)))]),t._v(" "),n("HorizontalItems",{attrs:{data:t.results.results_w_thumbnail}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;k()(component,{HorizontalItems:n(510).default}),k()(component,{VContainer:E.a})},548:function(t,e,n){"use strict";n.r(e);n(26),n(45),n(306),n(32),n(63),n(231),n(52),n(51);var r=n(16),c=n(27),l=n(36),o=n(42),h=n(35),f=n(28),d=n(13),m=n(179),v=n(118),y=n.n(v),_=n(510),j=n(536);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var R=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},w=function(t){Object(o.a)(h,t);var e,n=O(h);function h(){var t;return Object(c.a)(this,h),(t=n.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(l.a)(h,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,u,r,c,l,o,i,h,label,f,d,m,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.length>0&&void 0!==v[0]&&v[0],n=20,u=this.u,r=this.$i18n.locale,c="\n        SELECT distinct ?cho ?label ?thumbnail ?p ?p_label ?name ?p_name WHERE {\n          {\n            ?cho rdfs:label ?label;\n            schema:about <".concat(u,"> .\n          } \n          \n          ").concat(e?"MINUS { ?cho schema:image ?thumbnail } ":"?cho schema:image ?thumbnail .","\n          ?cho jps:sourceInfo ?sourceInfo .\n          ?sourceInfo schema:provider ?p .\n          optional { ?p rdfs:label ?p_label . } \n\n          ").concat("ja"===r?"":"OPTIONAL {?cho schema:name ?name . filter (lang(?name) = 'en')} OPTIONAL {?p schema:name ?p_name . filter (lang(?p_name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(n,"\n      "),t.next=7,y.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(c)+"&output=json");case 7:for(l=t.sent,o=l.data.results.bindings,i=0;i<o.length;i++)h=o[i],label=h.label.value,label=h.name?h.name.value:label,f=h.p.value.split("/"),d=h.p_label?h.p_label.value:f[f.length-1],d=h.p_name?h.p_name.value:d,m={_id:h.cho.value,href:h.cho.value.replace("/data/","/item/"),_source:{_label:label,description:d,_url:h.cho.value,_thumbnail:h.thumbnail?h.thumbnail.value:"https://jpsearch.go.jp/assets/img/no-image/curation-no-image_greylighter.png"}},this.results.results_w_thumbnail.push(m);!e&&o.length<10&&this.search(!0);case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"query",get:function(){var t=this.$i18n.locale,u=this.u;return"\n        SELECT (count(distinct ?cho) as ?c) ?pLabel ?name ?provider WHERE {\n          {\n            ?cho rdfs:label ?label;\n            schema:about <".concat(u,"> .\n          } \n          \n          ?cho jps:sourceInfo ?source .\n\n          ?source schema:provider ?provider .\n          optional { ?provider rdfs:label ?pLabel . }\n\n          ").concat("ja"===t?"":'?provider schema:name ?name . filter(lang(?name) = "en")',"\n        }\n        group by ?pLabel ?name ?provider order by desc(?c)\n        LIMIT 10\n    ")}}]),h}(m.Vue);R([Object(m.Prop)()],w.prototype,"u",void 0),R([Object(m.Watch)("u")],w.prototype,"watchU",null);var C=w=R([Object(m.Component)({components:{HorizontalItems:_.default,Chart:j.a}})],w),I=n(103),k=n(142),E=n.n(k),x=n(218),P=n(508),component=Object(I.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.results.results_w_thumbnail.length>0?n("v-container",[n("h2",{staticClass:"mt-5 mb-3 text-center"},[t._v(t._s(t.$t("Items")))]),t._v(" "),n("HorizontalItems",{attrs:{data:t.results.results_w_thumbnail}}),t._v(" "),n("v-card",{staticClass:"my-5 pa-5",attrs:{flat:""}},[n("div",{staticClass:"text-center"},[n("small",[n("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("データベース（上位10件）")))])])]),t._v(" "),n("Chart",{attrs:{height:300,query:t.query,type:"keyword",u:t.u}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;E()(component,{HorizontalItems:n(510).default,Chart:n(526).default}),E()(component,{VCard:x.a,VContainer:P.a})},549:function(t,e,n){"use strict";n.r(e);n(26),n(45),n(306),n(32),n(231),n(51);var r=n(16),c=n(27),l=n(36),o=n(42),h=n(35),f=n(28),d=n(13),m=n(179),v=n(118),y=n.n(v),_=n(510);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},R=function(t){Object(o.a)(h,t);var e,n=j(h);function h(){var t;return Object(c.a)(this,h),(t=n.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(l.a)(h,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var u,e,n,r,c,i,l,label,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=this.u,e=this.$i18n.locale,n="\n        SELECT DISTINCT ?keyword ?label ?name WHERE { \n          ?s schema:about <".concat(u,"> . \n          ?s schema:about ?keyword . \n          FILTER(?keyword != <").concat(u,"> ) . \n\n          ?keyword rdfs:label ?label . \n\n          ").concat("ja"===e?"":"OPTIONAL {?keyword schema:name ?name . filter (lang(?name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(20,"\n      "),t.next=6,y.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(n)+"&output=json");case 6:for(r=t.sent,c=r.data.results.bindings,i=0;i<c.length;i++)l=c[i],label=l.label.value,label=l.name?l.name.value:label,o={_id:l.keyword.value,to:this.localePath({name:"keyword",query:{id:l.keyword.value}}),_source:{_label:label,_url:l.keyword.value,_thumbnail:l.thumbnail?l.thumbnail.value:"mdi-tag"}},this.results.results_w_thumbnail.push(o);case 9:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),h}(m.Vue);O([Object(m.Prop)()],R.prototype,"u",void 0),O([Object(m.Watch)("u")],R.prototype,"watchU",null);var w=R=O([Object(m.Component)({components:{HorizontalItems:_.default}})],R),C=n(103),I=n(142),k=n.n(I),E=n(508),component=Object(C.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return this.results.results_w_thumbnail.length>0?e("v-container",[e("h2",{staticClass:"mt-5 mb-3 text-center"},[this._v(this._s(this.$t("Related Keywords")))]),this._v(" "),e("HorizontalItems",{attrs:{data:this.results.results_w_thumbnail}})],1):this._e()}),[],!1,null,null,null);e.default=component.exports;k()(component,{HorizontalItems:n(510).default}),k()(component,{VContainer:E.a})},586:function(t,e,n){"use strict";n.r(e);n(45),n(306),n(32),n(52);var r=n(27),c=n(36),l=n(42),o=n(35),h=n(28),f=n(13),d=n(179),m=n(511),v=n(518),y=n(549),_=n(548),j=n(547),O=n(517),R=n(519),w=n(516),C=n(515),I=n(514);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var c=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var E=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(l.a)(n,t);var e=k(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).endpoint="https://jpsearch.go.jp/rdf/sparql?query=",t.title=t.$t("Item"),t.id=null,t.name="keywords",t.type="keyword",t}return Object(c.a)(n,[{key:"watchR",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){var t=this.$route.query.id+""||"https://jpsearch.go.jp/term/keyword/教会";this.id=t;var e=t.split("/");this.title=e[e.length-1]}},{key:"head",value:function(){return{title:this.title}}},{key:"items",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t(this.type),disabled:!1,to:this.localePath({name:this.name})},{text:this.title+this.$t("の自動ギャラリー")}]}}]),n}(d.Vue);E([Object(d.Watch)("$route")],x.prototype,"watchR",null);var P=x=E([Object(d.Component)({components:{Grid:m.default,TargetAgent:v.default,RelatedKeywords:y.default,KeywordRelatedItems:_.default,KeywordRelatedAgentials:j.default,Event:O.default,Europeana:w.default,DPLA:C.default,Keywords:R.default,Network:I.default}})],x),T=n(103),L=n(142),D=n.n(L),A=n(554),N=n(508),$=n(216),S=n(57),component=Object(T.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.id?n("div",[n("v-sheet",{attrs:{color:"grey lighten-2"}},[n("v-container",{staticClass:"py-4",attrs:{fluid:""}},[n("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}],null,!1,3681283568)})],1)],1),t._v(" "),n("TargetAgent",{staticClass:"mb-5",attrs:{u:t.id}}),t._v(" "),n("RelatedKeywords",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("Keywords",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("KeywordRelatedAgentials",{staticClass:"mt-10 mb-5",attrs:{u:t.id,type:"agential"}}),t._v(" "),n("KeywordRelatedItems",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("Event",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("Network",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("Europeana",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("DPLA",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),n("v-container",{staticClass:"my-10"},[n("div",{staticClass:"text-center"},[n("small",[n("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("二次利用について")))]),t._v(" "),"ja"==t.$i18n.locale?[n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),n("br"),t._v("この作品は"),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n        ")]:[n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),n("br"),t._v("This work is licensed under a\n          "),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n        ")],t._v(" "),n("p",{staticClass:"mt-5"},[t._v(t._s(t.$t("ただし、画像は個々の権利表示による")))])],2)])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;D()(component,{TargetAgent:n(518).default,RelatedKeywords:n(549).default,Keywords:n(519).default,KeywordRelatedAgentials:n(547).default,KeywordRelatedItems:n(548).default,Event:n(517).default,Network:n(514).default,Europeana:n(516).default,DPLA:n(515).default}),D()(component,{VBreadcrumbs:A.a,VContainer:N.a,VIcon:$.a,VSheet:S.a})}}]);