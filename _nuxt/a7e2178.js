(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{513:function(t,e,r){var content=r(521);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("0dca5f8e",content,!0,{sourceMap:!1})},520:function(t,e,r){"use strict";r(513)},521:function(t,e,r){(e=r(17)(!1)).push([t.i,'.leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}.marker-cluster-small{background-color:rgba(181,226,140,.6)}.marker-cluster-small div{background-color:rgba(110,204,57,.6)}.marker-cluster-medium{background-color:rgba(241,211,87,.6)}.marker-cluster-medium div{background-color:rgba(240,194,12,.6)}.marker-cluster-large{background-color:rgba(253,156,115,.6)}.marker-cluster-large div{background-color:rgba(241,128,23,.6)}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px "Helvetica Neue",Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}',""]),t.exports=e},524:function(t,e,r){"use strict";r(306);var n=r(27),l=r(42),c=r(35),o=r(28),f=r(13),h=r(179);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(o.a)(t);if(e){var l=Object(o.a)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var d=function(t,e,r,desc){var n,l=arguments.length,c=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(l<3?n(c):l>3?n(e,r,c):n(e,r))||c);return l>3&&c&&Object.defineProperty(e,r,c),c},v={};v=r(533);var y=function(t){Object(l.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).tileProviders=[{name:"OpenStreetMap",visible:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"OpenTopoMap",visible:!1,url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}],t}return r}(h.Vue);d([Object(h.Prop)()],y.prototype,"markers",void 0),d([Object(h.Prop)({default:1})],y.prototype,"zoom",void 0),d([Object(h.Prop)({default:[]})],y.prototype,"center",void 0);var _=y=d([Object(h.Component)({components:{"l-marker-cluster":v}})],y),j=(r(520),r(103)),O=r(142),k=r.n(O),R=r(176),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("l-map",{staticStyle:{"z-index":"0"},attrs:{zoom:t.zoom,center:t.center}},[r("l-control-layers",{attrs:{position:"topright"}}),t._v(" "),t._l(t.tileProviders,(function(t){return r("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,"layer-type":"base"}})})),t._v(" "),r("l-marker-cluster",t._l(t.markers,(function(marker,e){return r("l-marker",{key:e,attrs:{"lat-lng":marker.latlng}},[r("l-popup",[r("nuxt-link",{attrs:{to:t.localePath(marker.path)}},[t._v(t._s(marker.content))]),t._v(" "),marker.image?[r("v-img",{staticClass:"ma-2",attrs:{"max-height":"150px","min-height":"90px",src:marker.image,contain:""}})]:t._e()],2)],1)})),1)],2)],1)}),[],!1,null,null,null);e.a=component.exports;k()(component,{VImg:R.a})},534:function(t,e,r){"use strict";r(26),r(45),r(14),r(306),r(32),r(231),r(51);var n=r(16),l=r(27),c=r(36),o=r(42),f=r(35),h=r(28),m=r(13),d=r(179),v=r(118),y=r.n(v),_=r(510),j=r(524);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var l=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var k=function(t,e,r,desc){var n,l=arguments.length,c=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(l<3?n(c):l>3?n(e,r,c):n(e,r))||c);return l>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(o.a)(f,t);var e,r=O(f);function f(){var t;return Object(l.a)(this,f),(t=r.apply(this,arguments)).results={results_w_thumbnail:[]},t.center=[38,0],t.markers=[],t}return Object(c.a)(f,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"getStmt",value:function(u,t){return"agential"===t?'?s jps:agential\n          [jps:relationType/skos:broader?/rdfs:label "制作"; jps:value/owl:sameAs? <'.concat(u,"> ] . "):"?s schema:spatial <".concat(u,"> . ")}},{key:"search",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var u,e,r,n,l,c,o,f,h,m,i,d,label,v,param,marker,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=this.u,e=this.$i18n.locale,r=this.type,n=this.getStmt(u,r),l="\n        SELECT DISTINCT ?keyword ?label ?name ?lat ?long WHERE { \n          ".concat(n,"\n          ?s schema:spatial ?keyword . \n          FILTER(?keyword != <").concat(u,"> ) . \n          optional { ?keyword schema:geo ?loc. ?loc schema:latitude ?lat ; schema:longitude ?long . } \n          ?keyword rdfs:label ?label . \n\n          ").concat("ja"===e?"":"OPTIONAL {?keyword schema:name ?name . filter (lang(?name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(20,"\n      "),t.next=8,y.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(l)+"&output=json");case 8:for(c=t.sent,o=c.data.results.bindings,f=[],h=0,m=0,i=0;i<o.length;i++)d=o[i],label=d.label.value,label=d.name?d.name.value:label,v={_id:d.keyword.value,to:this.localePath({name:"entity",params:{entity:"spatial"},query:{id:d.keyword.value}}),_source:{_label:label,_url:d.keyword.value,_thumbnail:d.thumbnail?d.thumbnail.value:"https://nakamura196.github.io/jpsearch2/img/icons/tag.png"}},this.results.results_w_thumbnail.push(v),d.lat&&(param={id:d.keyword.value},marker={latlng:[Number(d.lat.value),Number(d.long.value)],content:label,path:{name:"entity",params:{entity:"spatial"},query:param}},d.image&&(marker.image=d.image.value),h+=Number(d.lat.value),m+=Number(d.long.value),f.push(marker));f.length>0&&(_=f.length,this.center=[h/_,m/_]),this.markers=f;case 16:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(d.Vue);k([Object(d.Prop)()],R.prototype,"u",void 0),k([Object(d.Prop)()],R.prototype,"type",void 0),k([Object(d.Watch)("u")],R.prototype,"watchU",null);var w=R=k([Object(d.Component)({components:{HorizontalItems:_.default,Mapc:j.a}})],R),C=r(103),x=r(142),I=r.n(x),P=r(218),E=r(509),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.results.results_w_thumbnail.length>0?r("v-container",[r("h2",{staticClass:"mt-5 mb-3 text-center"},[t._v(t._s(t.$t("Related place")))]),t._v(" "),r("HorizontalItems",{attrs:{data:t.results.results_w_thumbnail}}),t._v(" "),r("v-card",{staticClass:"my-5 pa-5",attrs:{flat:""}},[r("div",{staticClass:"text-center"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("map"))+"（"+t._s(t.markers.length)+"）")])])]),t._v(" "),r("div",{staticClass:"my-2",staticStyle:{height:"40vh"},attrs:{id:"map-wrap"}},[r("mapc",{attrs:{markers:t.markers,zoom:2,center:t.center}})],1)])],1):t._e()}),[],!1,null,null,null);e.a=component.exports;I()(component,{HorizontalItems:r(510).default}),I()(component,{VCard:P.a,VContainer:E.a})},550:function(t,e,r){"use strict";r.r(e);r(26),r(45),r(306),r(32),r(63),r(231),r(51);var n=r(16),l=r(27),c=r(36),o=r(42),f=r(35),h=r(28),m=r(13),d=r(179),v=r(118),y=r.n(v),_=r(510),j=r(525);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var l=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var k=function(t,e,r,desc){var n,l=arguments.length,c=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(l<3?n(c):l>3?n(e,r,c):n(e,r))||c);return l>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(o.a)(f,t);var e,r=O(f);function f(){var t;return Object(l.a)(this,f),(t=r.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(c.a)(f,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,u,n,l,c,o,i,f,label,h,m,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=d.length>0&&void 0!==d[0]&&d[0],r=20,u=this.u,n=this.$i18n.locale,l="\n        SELECT distinct ?cho ?label ?thumbnail ?p_label ?name ?p_name WHERE {\n          {\n            ?cho rdfs:label ?label;\n            schema:creator/owl:sameAs? <".concat(u,"> .\n          } UNION {\n            ?cho rdfs:label ?label;\n              ?x ?y . ?y <https://jpsearch.go.jp/term/property#value> <").concat(u,">\n          }\n          ").concat(e?"MINUS { ?cho schema:image ?thumbnail } ":"?cho schema:image ?thumbnail .","\n          ?cho jps:sourceInfo ?sourceInfo .\n          ?sourceInfo schema:provider ?p .\n          ?p rdfs:label ?p_label .\n\n          ").concat("ja"===n?"":"OPTIONAL {?cho schema:name ?name . filter (lang(?name) = 'en')} OPTIONAL {?p schema:name ?p_name . filter (lang(?p_name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(r,"\n      "),t.next=7,y.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(l)+"&output=json");case 7:for(c=t.sent,o=c.data.results.bindings,i=0;i<o.length;i++)f=o[i],label=f.label.value,label=f.name?f.name.value:label,h=f.p_label.value,h=f.p_name?f.p_name.value:h,m={_id:f.cho.value,href:f.cho.value.replace("/data/","/item/"),_source:{_label:label,description:h,_url:f.cho.value,_thumbnail:f.thumbnail?f.thumbnail.value:"https://jpsearch.go.jp/assets/img/no-image/curation-no-image_greylighter.png"}},this.results.results_w_thumbnail.push(m);!e&&o.length<10&&this.search(!0);case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(d.Vue);k([Object(d.Prop)()],R.prototype,"u",void 0),k([Object(d.Watch)("u")],R.prototype,"watchU",null);var w=R=k([Object(d.Component)({components:{HorizontalItems:_.default,Chart:j.default}})],R),C=r(103),x=r(142),I=r.n(x),P=r(218),E=r(509),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.results.results_w_thumbnail.length>0?r("v-container",[r("h2",{staticClass:"mt-5 mb-3 text-center"},[t._v(t._s(t.$t("Items")))]),t._v(" "),r("HorizontalItems",{attrs:{data:t.results.results_w_thumbnail}}),t._v(" "),r("v-card",{staticClass:"my-5 pa-5",attrs:{flat:""}},[r("div",{staticClass:"text-center"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("データベース（上位10件）")))])])]),t._v(" "),r("Chart",{attrs:{height:300,u:t.u}})],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;I()(component,{HorizontalItems:r(510).default,Chart:r(525).default}),I()(component,{VCard:P.a,VContainer:E.a})},551:function(t,e,r){"use strict";r.r(e);r(309),r(310),r(26),r(45),r(306),r(32),r(231),r(51);var n=r(16),l=r(27),c=r(36),o=r(42),f=r(35),h=r(28),m=r(13),d=r(179),v=r(118),y=r.n(v),_=r(510);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var l=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,l=arguments.length,c=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(l<3?n(c):l>3?n(e,r,c):n(e,r))||c);return l>3&&c&&Object.defineProperty(e,r,c),c},k=function(t){Object(o.a)(f,t);var e,r=j(f);function f(){var t;return Object(l.a)(this,f),(t=r.apply(this,arguments)).results={results_w_thumbnail:[]},t}return Object(c.a)(f,[{key:"watchU",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){for(var t in this.results)this.results[t]=[];this.search()}},{key:"search",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,u,n,l,c,o,i,f,label,h,m=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m.length>0&&void 0!==m[0]&&m[0],r=20,u=this.u,n=this.$i18n.locale,l='\n        SELECT DISTINCT ?dest ?plabel ?pthumbnail ?description ?name WHERE { \n          ?s jps:agential\n          [jps:relationType/skos:broader?/rdfs:label "制作"; jps:value/owl:sameAs? <'.concat(u,'> ],\n          [jps:relationType/skos:broader?/rdfs:label "制作"; jps:value ?dest ]\n          FILTER(?dest != <').concat(u,"> )\n          \n          ").concat(e?"MINUS { ?dest schema:image ?pthumbnail } ":"?dest schema:image ?pthumbnail .","\n          ?dest rdfs:label ?plabel;\n            schema:description ?description . \n\n          ").concat("ja"===n?"":"OPTIONAL {?dest schema:name ?name . filter (lang(?name) = 'en')}","\n        }\n        ORDER BY RAND()\n        LIMIT ").concat(r,"\n      "),t.next=7,y.a.get("https://jpsearch.go.jp/rdf/sparql?query="+encodeURIComponent(l)+"&output=json");case 7:for(c=t.sent,o=c.data.results.bindings,i=0;i<o.length;i++)f=o[i],label=f.plabel.value,label=f.name?f.name.value:label,h={_id:f.dest.value,to:this.localePath({name:"item",query:{id:f.dest.value}}),_source:{_label:label,description:f.description?f.description.value:"",_url:f.dest.value,_thumbnail:f.pthumbnail?f.pthumbnail.value:"https://jpsearch.go.jp/assets/img/no-image/cultural-no-image-small_greylighter.png"}},this.results.results_w_thumbnail.push(h);!e&&o.length<10&&this.search(!0);case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(d.Vue);O([Object(d.Prop)()],k.prototype,"u",void 0),O([Object(d.Watch)("u")],k.prototype,"watchU",null);var R=k=O([Object(d.Component)({components:{HorizontalItems:_.default}})],k),w=r(103),C=r(142),x=r.n(C),I=r(509),component=Object(w.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return this.results.results_w_thumbnail.length>0?e("v-container",[e("h2",{staticClass:"mt-5 mb-3 text-center"},[this._v(this._s(this.$t("Related agential")))]),this._v(" "),e("HorizontalItems",{attrs:{data:this.results.results_w_thumbnail}})],1):this._e()}),[],!1,null,null,null);e.default=component.exports;x()(component,{HorizontalItems:r(510).default}),x()(component,{VContainer:I.a})},581:function(t,e,r){"use strict";r.r(e);r(45),r(306),r(32),r(52);var n=r(27),l=r(36),c=r(42),o=r(35),f=r(28),h=r(13),m=r(179),d=r(511),v=r(517),y=r(551),_=r(550),j=r(534),O=r(516),k=r(515),R=r(514),w=r(518);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var l=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var x=function(t,e,r,desc){var n,l=arguments.length,c=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(l<3?n(c):l>3?n(e,r,c):n(e,r))||c);return l>3&&c&&Object.defineProperty(e,r,c),c},I=function(t){Object(c.a)(r,t);var e=C(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).endpoint="https://jpsearch.go.jp/rdf/sparql?query=",t.title=t.$t("Item"),t.id=null,t.name="search",t.type="agential",t}return Object(l.a)(r,[{key:"watchR",value:function(){this.init()}},{key:"created",value:function(){this.init()}},{key:"init",value:function(){var t=this.$route.query.id+""||"https://jpsearch.go.jp/entity/chname/葛飾北斎";this.id=t;var e=t.split("/");this.title=e[e.length-1]}},{key:"head",value:function(){return{title:this.title}}},{key:"items",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t(this.type),disabled:!1,to:this.localePath({name:this.name})},{text:this.title+this.$t("の自動ギャラリー")}]}}]),r}(m.Vue);x([Object(m.Watch)("$route")],I.prototype,"watchR",null);var P=I=x([Object(m.Component)({components:{Grid:d.default,TargetAgent:v.default,RelatedGallery:y.default,Items:_.default,Event:O.default,Europeana:R.default,DPLA:w.default,Keywords:k.default,MapC:j.a}})],I),E=r(103),D=r(142),T=r.n(D),S=r(553),$=r(509),A=r(216),N=r(57),component=Object(E.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.id?r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}],null,!1,3681283568)})],1)],1),t._v(" "),r("TargetAgent",{staticClass:"mb-5",attrs:{u:t.id}}),t._v(" "),r("RelatedGallery",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),r("Keywords",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),r("Items",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),r("Event",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),r("MapC",{staticClass:"mt-10 mb-5",attrs:{u:t.id,type:"agential"}}),t._v(" "),r("Europeana",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),r("DPLA",{staticClass:"mt-10 mb-5",attrs:{u:t.id}}),t._v(" "),r("v-container",{staticClass:"my-10"},[r("div",{staticClass:"text-center"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("二次利用について")))]),t._v(" "),"ja"==t.$i18n.locale?[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n        ")]:[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("This work is licensed under a\n          "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n        ")],t._v(" "),r("p",{staticClass:"mt-5"},[t._v(t._s(t.$t("ただし、画像は個々の権利表示による")))])],2)])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;T()(component,{TargetAgent:r(517).default,RelatedGallery:r(551).default,Keywords:r(515).default,Items:r(550).default,Event:r(516).default,Europeana:r(514).default,DPLA:r(518).default}),T()(component,{VBreadcrumbs:S.a,VContainer:$.a,VIcon:A.a,VSheet:N.a})}}]);