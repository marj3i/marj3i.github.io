(window.webpackJsonp=window.webpackJsonp||[]).push([[31,2,13,19],{274:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0921c2d5",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n.r(e);var l={name:"AddCourse",props:{link:String,img:String,title:String,type:String,top:Boolean}},r=n(24),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"crs",attrs:{href:t.link,target:"_blank",type:t.type,top:t.top}},[1==t.top?n("i",{staticClass:"fas fa-star top"}):t._e(),t._v(" "),n("img",{attrs:{src:"/assets/img/icon-learn/"+t.img}}),t._v(" "),n("p",[t._v(t._s(t.title))]),t._v(" "),"file"===t.type?n("i",{staticClass:"fas fa-file-alt"}):"play"===t.type?n("i",{staticClass:"fas fa-play-circle"}):"support"===t.type?n("i",{staticClass:"fas fa-life-ring"}):"download"===t.type?n("i",{staticClass:"fas fa-download"}):t._e()])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var l={name:"InfoCourse",props:{title:String,info:String}},r=n(24),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-info-crs"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.info))])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n(274)},278:function(t,e,n){var l=n(22)(!1);l.push([t.i,".edit_githab{margin-top:-20px}.edit_githab a{font-size:14px;-webkit-text-decoration:revert;text-decoration:revert}",""]),t.exports=l},279:function(t,e,n){"use strict";n.r(e);var l={props:{link:String},data:function(){return{to:"https://github.com/marj3i/marj3i.github.io/tree/main/components/global/Support-for-MD"}}},r=(n(277),n(24)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit_githab"},[n("a",{attrs:{target:"_blanc",href:t.to+t.link}},[t._v("عدل محتوى الصندوق على Githab")])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var l=n(24),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-list-crs"},[n("InfoCourse",{attrs:{title:"تعلم OP",info:"دورة في انظمة التشغيل و طريقة عملها"}}),t._v(" "),n("div",{staticClass:"all-crs"},[n("AddCourse",{attrs:{link:"https://www.youtube.com/playlist?list=PLiBRXSnNzUuqhJ767kWhkCHTV5h5j0i6G",img:"youtube.jpg",title:"دورة OP",type:"play",top:!0}})],1),t._v(" "),n("EditBox",{attrs:{link:"/information-security/Op.vue"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InfoCourse:n(276).default,AddCourse:n(275).default,EditBox:n(279).default})}}]);