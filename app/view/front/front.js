module.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/public/client/",t(t.s=45)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){e.exports=function(e,t,n,o){var r,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var u=Object.create(s.computed||null);Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}}),s.computed=u}return{esModule:r,exports:a,options:s}}},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++)for(var o=t[n].parts,r=0;r<o.length;r++){var a=o[r],i=a.media||"default",s=e[i];s?s.ids.indexOf(a.id)<0&&(s.ids.push(a.id),s.css+="\n"+a.css):e[i]={ids:[a.id],css:a.css,media:a.media}}}function r(e,t){for(var n=0;n<t.length;n++)for(var o=t[n].parts,r=0;r<o.length;r++){var a=o[r];e[a.id]={ids:[a.id],css:a.css,media:a.media}}}function a(e){var t="";for(var n in e){var o=e[n];t+='<style data-vue-ssr-id="'+o.ids.join(" ")+'"'+(o.media?' media="'+o.media+'"':"")+">"+o.css+"</style>"}return t}var i=n(27);e.exports=function(e,t,n,s){if(s||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),s){s.hasOwnProperty("styles")||Object.defineProperty(s,"styles",{enumberable:!0,get:function(){return a(s._styles)}});var u=s._styles||(s._styles={});t=i(e,t),n?o(u,t):r(u,t)}}},function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n(9),n(8),n(7);var i={};i.data=function(){return window.__INITIAL_STATE__||{}},i.init=function(e){return"object"===("undefined"==typeof window?"undefined":o(window))?i.client(e):i.server(e)},i.client=function(e){return a.default.prototype.$http=n(5),e.el="#app",e.store?e.store.replaceState(i.data()):window.__INITIAL_STATE__&&(e.data=i.data()),new a.default(e)},i.server=function(e){return e.store&&e.router?function(t){e.router.push(t.state.url);var n=e.router.getMatchedComponents();return n?Promise.all(n.map(function(t){return t.preFetch?t.preFetch(e.store):null})).then(function(){return t.state=e.store.state,new a.default(e)}):Promise.reject({code:"404"})}:function(t){var n=a.default.extend(e),o=new n({data:t.state});return new Promise(function(e){e(o)})}},i.use=function(e){a.default.use(e)},i.component=function(e,t){a.default.component(e,t)},t.default=i,e.exports=t.default},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(20),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Layout",props:["title","description","keywords"],components:{MainLayout:a.default},computed:{vTitle:function(){return this.$root.title||this.title||"iPhone"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass},version:function(){return new Date}},template:"object"===("undefined"==typeof window?"undefined":o(window))?'\n<div id="app" \n  xz-src="layout/standard/index.js"\n  class="page"\n  >\n  <MainLayout>\n    <div slot="main" xz-layout="main">\n      <slot></slot>\n    </div>\n  </MainLayout>\n</div>':'<!DOCTYPE html>\n<html class="hb-loaded">\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=GBK">\n    <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport">\n    <meta content="yes" name="apple-mobile-web-app-capable">\n    <meta content="yes" name="apple-touch-fullscreen">\n    <meta content="black" name="apple-mobile-web-app-status-bar-style">\n    <meta content="320" name="MobileOptimized">\n    <meta content="telephone=no" name="format-detection">\n    <link href="http://www.csxiangfa.com/favicon.ico" type="image/x-icon" rel="icon">\n    <title>正品官网 {{vTitle}}</title>\n    <meta name="keywords" content="正品官网">\n    <meta name="description" content="正品官网">\n    <meta name="author" content="黑眼圈单品管理系统，作者QQ：860180810，www.not3.com">\n</head>\n<body :class="baseClass">\n  \x3c!-- 经过实际使用后发现，这个id="app"的定义，还不能替地方，或者更不能被删掉 --\x3e\n  <div\n    id="app"\n    xz-src="layout/standard/index.js"\n    class="page">\n    <MainLayout>\n      <div slot="main" xz-layout="main">\n        <slot></slot>\n      </div>\n    </MainLayout>\n  </div>\n</body>\n</html>'},e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(3),a=o(r),i=n(6),s=o(i);a.default.component(s.default.name,s.default)},function(e,t,n){"use strict"},function(e,t,n){"use strict";var o=n(3);(function(e){return e&&e.__esModule?e:{default:e}})(o).default.filter("removeHtml",function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},computed:{},mounted:function(){}},e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),a=o(r),i=n(18),s=o(i);t.default={components:{LayoutHeader:a.default,LayoutContent:s.default}},e.exports=t.default},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"",""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"",""])},function(e,t,n){t=e.exports=n(0)(),t.i(n(14),""),t.push([e.i,"",""])},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,"body{background:#856d35}.page{max-width:640px;margin:0 auto;padding:0;padding-bottom:50px;width:100%;height:auto;min-height:100%;background:#f9f9f9}",""])},function(e,t,n){t=e.exports=n(0)(),t.i(n(13),""),t.push([e.i,"",""])},function(e,t,n){n(26);var o=n(1)(n(10),n(23),null,null);e.exports=o.exports},function(e,t,n){n(24);var o=n(1)(n(11),n(21),null,null);e.exports=o.exports},function(e,t,n){n(25);var o=n(1)(n(12),n(22),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("header",{attrs:{"xz-src":"layout/standard/header/header.vue"}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{"xz-layout":"layout","xz-src":"layout/standard/main.vue"}},[n("LayoutHeader"),e._v(" "),n("LayoutContent",[n("div",{attrs:{"xz-slot":"content"},slot:"content"},[e._t("main",null,{xzSlot:"main"})],2)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"content","xz-slot":"content","xz-src":"layout/standard/content/content.vue"}},[e._t("content")],2)},staticRenderFns:[]}},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),n(2)("9e258d5e",o,!0)},function(e,t,n){var o=n(16);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),n(2)("8d94cad6",o,!0)},function(e,t,n){var o=n(17);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),n(2)("3f319f61",o,!0)},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=a[0],s=a[1],u=a[2],l=a[3],c={id:e+":"+r,css:s,media:u,sourceMap:l};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}},function(e,t){e.exports=require("element-ui")},,,,,,,,,function(e,t,n){n(133);var o=n(1)(n(61),n(118),null,null);e.exports=o.exports},,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(4),i=o(a),s=n(28),u=o(s),l=n(37),c=o(l);i.default.use(u.default),t.default=i.default.client(r({},c.default)),e.exports=t.default},,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{pageIndex:1,pageSize:10}},computed:{},methods:{fetch:function(){var e=this;this.$http.get("/pager?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize).then(function(t){e.total=t.data.total,e.list=t.data.list})},handleSelectionChange:function(e){},handleSizeChange:function(e){this.pageSize=e,this.fetch()},handleCurrentChange:function(e){this.pageIndex=e,this.fetch()},handleEdit:function(e,t){this.$message("你点击了编辑操作 index:"+e+", id:"+t.id)},handleDelete:function(e,t){this.$message("你点击了删除操作 index:"+e+", id:"+t.id)}},mounted:function(){this.fetch()}},e.exports=t.default},,,,,,,,,,,function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".header{line-height:0}",""])},,,,,,,function(e,t,n){t=e.exports=n(0)(),t.i(n(72),""),t.push([e.i,"",""])},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{description:"vue server side render",keywords:"egg, vue, webpack, server side render"}},[n("el-alert",{attrs:{title:"el-table有bug, 服务器渲染出来数据是空的,用简单的模板结果是可以出来",type:"info"}}),e._v(" "),n("p"),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"},domProps:{textContent:e._s(t.row.id)}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"标题"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[n("a",{attrs:{href:t.row.url,target:"_blank"}},[e._v(e._s(t.row.title))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"简介"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v(e._s(t.row.summary))]),e._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[e._v(e._s(t.row.title))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"block",staticStyle:{"text-align":"right","margin-top":"16px"}},[n("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,15,20,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}},,,,,,,,,,,,,,,function(e,t,n){var o=n(79);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),n(2)("531ce662",o,!0)}]);