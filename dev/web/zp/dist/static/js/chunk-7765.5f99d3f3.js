(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7765"],{"/nMM":function(e,t,a){"use strict";a.r(t);var n={name:"recruitManage",data:function(){return{activeName:"doing"}},created:function(){},computed:{},methods:{handleClick:function(e,t){this.activeName=e.name,this.$router.push("/recruitManage/index/"+e.name)}}},i=(a("gcwH"),a("KHd+")),c=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"recruitManage"}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"招聘中",name:"doing"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"招聘完结",name:"finish"}})],1),e._v(" "),a("div",{staticClass:"tbl-content"},[a("router-view")],1)],1)},[],!1,null,"1b3fcd12",null);c.options.__file="index.vue";t.default=c.exports},Ujj9:function(e,t,a){},gcwH:function(e,t,a){"use strict";var n=a("Ujj9");a.n(n).a}}]);