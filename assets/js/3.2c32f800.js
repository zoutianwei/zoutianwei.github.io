(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{388:function(e,n,t){"use strict";var s=t(214),r=t(12),o=t(24),i=t(28),a=t(215),g=t(216);s("match",(function(e,n,t){return[function(n){var t=i(this),s=null==n?void 0:n[e];return void 0!==s?s.call(n,t):new RegExp(n)[e](String(t))},function(e){var s=t(n,this,e);if(s.done)return s.value;var i=r(this),c=String(e);if(!i.global)return g(i,c);var d=i.unicode;i.lastIndex=0;for(var u,w=[],l=0;null!==(u=g(i,c));){var p=String(u[0]);w[l]=p,""===p&&(i.lastIndex=a(c,o(i.lastIndex),d)),l++}return 0===l?null:w}]}))},389:function(e,n,t){"use strict";var s=t(37),r=t(12),o=t(3),i=t(213),a=RegExp.prototype,g=a.toString,c=o((function(){return"/a/b"!=g.call({source:"a",flags:"b"})})),d="toString"!=g.name;(c||d)&&s(RegExp.prototype,"toString",(function(){var e=r(this),n=String(e.source),t=e.flags;return"/"+n+"/"+String(void 0===t&&e instanceof RegExp&&!("flags"in a)?i.call(e):t)}),{unsafe:!0})},409:function(e,n,t){},410:function(e,n,t){},442:function(e,n,t){var s=t(37),r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&s(r,"toString",(function(){var e=i.call(this);return e==e?o.call(this):"Invalid Date"}))},443:function(e,n,t){"use strict";var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("unable to locate global object")}();e.exports=n=s.fetch,s.fetch&&(n.default=s.fetch.bind(s)),n.Headers=s.Headers,n.Request=s.Request,n.Response=s.Response},444:function(e,n,t){"use strict";t(409)},445:function(e,n,t){"use strict";t(410)},454:function(e,n,t){"use strict";t.r(n);var s=t(35);t(84),t(59),t(83),t(442),t(8),t(389),t(388);function r(){var e=navigator.userAgent.toLowerCase(),n=function(n){return n.test(e)},t=function(n){return e.match(n).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},s="unknown";n(/windows|win32|win64|wow32|wow64/g)?s="Windows":n(/macintosh|macintel/g)?s="MacOS":n(/x11/g)?s="Linux":n(/android|adr/g)?s="Android":n(/ios|iphone|ipad|ipod|iwatch/g)&&(s="iOS");var r="unknown";"Windows"===s?n(/windows nt 5.0|windows 2000/g)?r="2000":n(/windows nt 5.1|windows xp/g)?r="XP":n(/windows nt 5.2|windows 2003/g)?r="2003":n(/windows nt 6.0|windows vista/g)?r="Vista":n(/windows nt 6.1|windows 7/g)?r="7":n(/windows nt 6.2|windows 8/g)?r="8":n(/windows nt 6.3|windows 8.1/g)?r="8.1":n(/windows nt 10.0|windows 10/g)&&(r="10"):"MacOS"===s?r=t(/os x [\d._]+/g):"Android"===s?r=t(/android [\d._]+/g):"iOS"===s&&(r=t(/os [\d._]+/g));var o="unknown";"Windows"===s||"MacOS"===s||"Linux"===s?o="desktop":("Android"===s||"iOS"===s||n(/mobile/g))&&(o="mobile");var i="unknown",a="unknown";n(/applewebkit/g)?(i="WebKit",n(/edge/g)?a="Edge":n(/opr/g)?a="Opera":n(/chrome/g)?a="Chrome":n(/safari/g)&&(a="Safari")):n(/gecko/g)&&n(/firefox/g)?(i="gecko",a="Firefox"):n(/presto/g)?(i="presto",a="Opera"):n(/trident|compatible|msie/g)&&(i="trident",a="Internet Explorer");var g="unknown";"webkit"===i?g=t(/applewebkit\/[\d._]+/g):"gecko"===i?g=t(/gecko\/[\d._]+/g):"presto"===i?g=t(/presto\/[\d._]+/g):"trident"===i&&(g=t(/trident\/[\d._]+/g));var c="unknown";"Chrome"===a?c=t(/chrome\/[\d._]+/g):"Safari"===a?c=t(/version\/[\d._]+/g):"Firefox"===a?c=t(/firefox\/[\d._]+/g):"Opera"===a?c=t(/opr\/[\d._]+/g):"Internet Expolorer"===a?c=t(/(msie [\d._]+)|(rv:[\d._]+)/g):"Edge"===a&&(c=t(/edge\/[\d._]+/g));var d="none",u="unknown";return n(/micromessenger/g)?(d="WeChat",u=t(/micromessenger\/[\d._]+/g)):n(/qqbrowser/g)?(d="QQ",u=t(/qqbrowser\/[\d._]+/g)):n(/ucbrowser/g)?(d="s",u=t(/ucbrowser\/[\d._]+/g)):n(/qihu 360se/g)?d="360":n(/2345explorer/g)?(d="2345",u=t(/2345explorer\/[\d._]+/g)):n(/metasr/g)?d="sougou":n(/lbbrowser/g)?d="liebao":n(/maxthon/g)&&(d="maxthon",u=t(/maxthon\/[\d._]+/g)),Object.assign({engine:i,engineVs:g,platform:o,browser:a,browserVs:c,system:s,systemVs:r},"none"===d?{}:{shell:d,shellVs:u})}var o=t(443),i=t.n(o),a={name:"Home",data:function(){return{ip:"",region:"",ipVersion:"",message:"",messageZh:"",browser:"",systemVs:"",system:""}},created:function(){this.getIpAdress(),this.getMotto()},mounted:function(){this.browser=r().browser,this.systemVs=r().systemVs,this.system=r().system},methods:{getMotto:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function n(){var t,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("https://starbucks-proxy.vercel.app/");case 2:return t=n.sent,n.next=5,t.json();case 5:s=n.sent,console.log(s.data.messageZh),e.message=s.data.message,e.messageZh=s.data.messageZh;case 9:case"end":return n.stop()}}),n)})))()},getIpAdress:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function n(){var t,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i()("https://ipapi.co/json/");case 2:return t=n.sent,n.next=5,t.json();case 5:s=n.sent,e.ip=s.ip,e.region=s.region,e.ipVersion=s.version,console.log(s);case 10:case"end":return n.stop()}}),n)})))()}}},g=(t(444),t(445),t(58)),c=Object(g.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"main"},[e.message?e._e():t("div",{staticClass:"greeting"},[t("div",{staticClass:"cn-title"},[e._v("加载中...")])]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.message?t("div",{staticClass:"greeting"},[t("div",{staticClass:"cn-title"},[e._v("欢迎")]),e._v(" "),t("div",{staticClass:"en-title"},[e._v("Welcome")]),e._v(" "),e.messageZh?t("div",{staticClass:"motto"},[e._v(e._s(e.messageZh))]):e._e(),e._v(" "),e.message!=e.messageZh?t("div",{staticClass:"motto"},[e._v(e._s(e.message))]):e._e()]):e._e()])],1),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.message?t("div",{staticClass:"foot"},[t("div",[e._v("\n        "+e._s("unknown"!=e.browser?e.browser:"")+"\n        "+e._s("unknown"!=e.system?e.system:"")+"\n        "+e._s("unknown"!=e.systemVs?e.systemVs:"")+"\n      ")]),e._v(" "),t("div",[e._v("Location:"+e._s(e.region))]),e._v(" "),t("div",["IPv4"===e.ipVersion?t("span",[e._v("Your IP:")]):e._e(),e._v(e._s(e.ip)+"("+e._s(e.ipVersion)+")\n      ")])]):e._e()])],1)}),[],!1,null,"6f5a7695",null);n.default=c.exports}}]);