(window.webpackJsonp=window.webpackJsonp||[]).push([[38,2,16,22],{274:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("0921c2d5",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";r.r(e);var l={name:"AddCourse",props:{link:String,img:String,title:String,type:String,top:Boolean}},n=r(24),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"crs",attrs:{href:t.link,target:"_blank",type:t.type,top:t.top}},[1==t.top?r("i",{staticClass:"fas fa-star top"}):t._e(),t._v(" "),r("img",{attrs:{src:"/assets/img/icon-learn/"+t.img}}),t._v(" "),r("p",[t._v(t._s(t.title))]),t._v(" "),"file"===t.type?r("i",{staticClass:"fas fa-file-alt"}):"play"===t.type?r("i",{staticClass:"fas fa-play-circle"}):"support"===t.type?r("i",{staticClass:"fas fa-life-ring"}):"download"===t.type?r("i",{staticClass:"fas fa-download"}):t._e()])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);var l={name:"InfoCourse",props:{title:String,info:String}},n=r(24),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box-info-crs"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.info))])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,r){"use strict";r(274)},278:function(t,e,r){var l=r(22)(!1);l.push([t.i,".edit_githab{margin-top:-20px}.edit_githab a{font-size:14px;-webkit-text-decoration:revert;text-decoration:revert}",""]),t.exports=l},279:function(t,e,r){"use strict";r.r(e);var l={props:{link:String},data:function(){return{to:"https://github.com/marj3i/marj3i.github.io/tree/main/components/global/Support-for-MD"}}},n=(r(277),r(24)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit_githab"},[r("a",{attrs:{target:"_blanc",href:t.to+t.link}},[t._v("عدل محتوى الصندوق على Githab")])])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);var l=r(24),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box-list-crs"},[r("InfoCourse",{attrs:{title:"تعلم + Security",info:"هي أول شهادة أمنية يجب على محترفي تكنولوجيا المعلومات كسبها. إنها تحدد المعرفة الأساسية المطلوبة لأي دور للأمن السيبراني وتوفر نقطة انطلاق لوظائف الأمن السيبراني المتوسطة المستوى."}}),t._v(" "),r("div",{staticClass:"all-crs"},[r("AddCourse",{attrs:{link:"https://www.youtube.com/playlist?list=PLCIJjtzQPZJ9tmm43K6KCeZo2MNbB1F3P",img:"youtube.jpg",title:"دورة Security",type:"play",top:!0}})],1),t._v(" "),r("EditBox",{attrs:{link:"/information-security/Security.vue"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InfoCourse:r(276).default,AddCourse:r(275).default,EditBox:r(279).default})}}]);