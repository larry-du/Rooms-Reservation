(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d94e9f84"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var s=n[c],f=s&&s.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(u){f.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"21bb":function(t,e,r){"use strict";var n=r("2dad"),o=r.n(n);o.a},"2dad":function(t,e,r){},"2fe1":function(t,e,r){"use strict";var n=r("fcf3"),o=r.n(n);o.a},"3aac":function(t,e,r){},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=r("ae40"),c=i("filter"),s=a("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"50fe":function(t,e,r){},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),f=r("fdbf"),u=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),m=r("825a"),p=r("7b0b"),h=r("fc6a"),v=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),O=r("241c"),_=r("057f"),S=r("7418"),C=r("06cf"),j=r("9bf2"),P=r("d1e7"),L=r("9112"),x=r("6eeb"),E=r("5692"),T=r("f772"),k=r("d012"),I=r("90e3"),D=r("b622"),N=r("e538"),A=r("746f"),M=r("d44e"),R=r("69f3"),V=r("b727").forEach,$=T("hidden"),G="Symbol",z="prototype",H=D("toPrimitive"),q=R.set,F=R.getterFor(G),J=Object[z],U=o.Symbol,W=i("JSON","stringify"),B=C.f,Q=j.f,K=_.f,X=P.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),nt=o.QObject,ot=!nt||!nt[z]||!nt[z].findChild,it=c&&u((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=B(J,e);n&&delete J[e],Q(t,e,r),n&&t!==J&&Q(J,e,n)}:Q,at=function(t,e){var r=Y[t]=y(U[z]);return q(r,{type:G,tag:t,description:e}),c||(r.description=e),r},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},st=function(t,e,r){t===J&&st(Z,e,r),m(t);var n=v(e,!0);return m(r),l(Y,n)?(r.enumerable?(l(t,$)&&t[$][n]&&(t[$][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,$)||Q(t,$,g(1,{})),t[$][n]=!0),it(t,n,r)):Q(t,n,r)},ft=function(t,e){m(t);var r=h(e),n=w(r).concat(mt(r));return V(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===J&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,$)&&this[$][e])||r)},bt=function(t,e){var r=h(t),n=v(e,!0);if(r!==J||!l(Y,n)||l(Z,n)){var o=B(r,n);return!o||!l(Y,n)||l(r,$)&&r[$][n]||(o.enumerable=!0),o}},dt=function(t){var e=K(h(t)),r=[];return V(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},mt=function(t){var e=t===J,r=K(e?Z:h(t)),n=[];return V(r,(function(t){!l(Y,t)||e&&!l(J,t)||n.push(Y[t])})),n};if(s||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===J&&r.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),it(this,e,g(1,t))};return c&&ot&&it(J,e,{configurable:!0,set:r}),at(e,t)},x(U[z],"toString",(function(){return F(this).tag})),x(U,"withoutSetter",(function(t){return at(I(t),t)})),P.f=lt,j.f=st,C.f=bt,O.f=_.f=dt,S.f=mt,N.f=function(t){return at(D(t),t)},c&&(Q(U[z],"description",{configurable:!0,get:function(){return F(this).description}}),a||x(J,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:U}),V(w(rt),(function(t){A(t)})),n({target:G,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:ft,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:mt}),n({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),W){var pt=!s||u((function(){var t=U();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!ct(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,W.apply(null,o)}})}U[z][H]||L(U[z],H,U[z].valueOf),M(U,G),k[$]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},b9a9:function(t,e,r){"use strict";var n=r("50fe"),o=r.n(n);o.a},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("companyContact"),r("b-container",{staticClass:"room_info_area"},[r("b-row",t._l(t.getAllRooms,(function(e){return r("roomPreview",{key:e.id,attrs:{roomInfo:e},on:{"get-room-id":function(e){return t.toPage(e)}}})})),1)],1),r("carousel",{staticClass:"move",attrs:{roomImage:t.getAllRooms}})],1)},o=[],i=r("5530"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"company_contact"},[r("header",{staticClass:"ourInfo"},[t._m(0),r("div",{staticClass:"contact"},[r("div",{staticClass:"social_media"},[r("a",{staticClass:"social_contact",attrs:{href:"##"}},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"],"fixed-width":"",size:"lg"}})],1),r("a",{staticClass:"social_contact",attrs:{href:"##"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],"fixed-width":"",size:"lg"}})],1)]),r("div",{staticClass:"contact_us"},[r("div",{staticClass:"telephone"},[r("font-awesome-icon",{attrs:{icon:["fas","phone-alt"],"fixed-width":"",size:"lg"}}),r("span",[t._v("02-17264937")])],1),r("div",{staticClass:"mail"},[r("font-awesome-icon",{attrs:{icon:["fas","envelope"],"fixed-width":"",size:"lg"}}),r("a",{attrs:{href:"##"}},[t._v("whitespace@whitespace.com.tw")])],1),r("div",{staticClass:"adress"},[r("font-awesome-icon",{attrs:{icon:["fas","home"],"fixed-width":"",size:"lg"}}),r("span",[t._v("台北市羅斯福路十段30號")])],1)])])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"log"},[r("a",{staticClass:"logo_body",attrs:{href:"##"}},[t._v("White space")])])}],s={name:"companyContact"},f=s,u=(r("f438"),r("2877")),l=Object(u["a"])(f,a,c,!1,null,null,null),b=l.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{staticClass:"room_detial",attrs:{sm:"6",md:"4"},on:{click:function(e){return t.$emit("get-room-id",t.roomInfo.id)}}},[r("b-card",{staticClass:"room_preview",attrs:{"no-body":"","img-src":t.roomInfo.imageUrl,"img-alt":t.roomInfo.name,"img-top":"","img-height":"280px","img-width":"100%"}},[r("b-card-text",{staticClass:"room_info"},[r("div",{staticClass:"room_name"},[r("span",[t._v(t._s(t.roomInfo.name))])]),r("div",{staticClass:"room_price"},[r("div",{staticClass:"nomorl_price"},[r("span",[t._v("NT:"+t._s(t.roomInfo.normalDayPrice))]),r("span",[t._v("平日")])]),r("div",{staticClass:"holiday_price"},[r("span",[t._v("NT:"+t._s(t.roomInfo.holidayPrice))]),r("span",[t._v("假日")])])])])],1)],1)},m=[],p={name:"roomPreview",props:{roomInfo:{type:Object,required:!0}}},h=p,v=(r("b9a9"),Object(u["a"])(h,d,m,!1,null,null,null)),g=v.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{interval:4e3,background:"#ababab"}},t._l(t.roomImage,(function(t){return r("b-carousel-slide",{key:t.id,staticClass:"carousel_img",attrs:{"img-src":t.imageUrl}})})),1)},w=[],O={name:"carousel",props:{roomImage:{type:Array,require:!0}}},_=O,S=(r("2fe1"),Object(u["a"])(_,y,w,!1,null,null,null)),C=S.exports,j=r("2f62"),P={name:"Home",components:{companyContact:b,roomPreview:g,carousel:C},computed:Object(i["a"])({},Object(j["b"])(["getAllRooms"])),methods:{toPage:function(t){this.$router.push({name:"About",params:{id:t}})}}},L=P,x=(r("21bb"),Object(u["a"])(L,n,o,!1,null,null,null));e["default"]=x.exports},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,f=i(n),u={},l=0;while(f.length>l)r=o(n,e=f[l++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=o((function(){a(1)})),f=!c||s;n({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},f438:function(t,e,r){"use strict";var n=r("3aac"),o=r.n(n);o.a},fcf3:function(t,e,r){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-d94e9f84.ebcc3caa.js.map