(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5ee4140"],{"4ebb":function(t,s,e){},"753d":function(t,s,e){"use strict";e("4ebb")},e022:function(t,s,e){"use strict";e.r(s);e("14d9");var r=function(){var t=this,s=t._self._c;return s("div",[t.results?s("div",[t.grep_keyword("STALKERWARE","high")?s("div",{staticClass:"high-wrapper"},[s("div",{staticClass:"center"},[s("h1",{staticClass:"warning-title",domProps:{innerHTML:t._s(t.$t("report.stalkerware_msg"))}}),s("button",{staticClass:"btn btn-report-low-light",on:{click:function(s){return t.new_capture()}}},[t._v(t._s(t.$t("report.start_new_capture")))]),s("button",{staticClass:"btn btn-report-high",on:{click:function(s){t.show_report=!0,t.results=!1}}},[t._v(t._s(t.$t("report.show_full_report")))])])]):t.alerts.high.length>=1?s("div",{staticClass:"high-wrapper"},[s("div",{staticClass:"center"},[s("h1",{staticClass:"warning-title",domProps:{innerHTML:t._s(t.$t("report.high_msg",{nb:t.$i18n.messages[t.$i18n.locale].report.numbers[t.alerts.high.length]}))}}),s("button",{staticClass:"btn btn-report-low-light",on:{click:function(s){return t.new_capture()}}},[t._v(t._s(t.$t("report.start_new_capture")))]),s("button",{staticClass:"btn btn-report-high",on:{click:function(s){t.show_report=!0,t.results=!1}}},[t._v(t._s(t.$t("report.show_full_report")))])])]):t.alerts.moderate.length>=1?s("div",{staticClass:"med-wrapper"},[s("div",{staticClass:"center"},[s("h1",{staticClass:"warning-title",domProps:{innerHTML:t._s(t.$t("report.moderate_msg",{nb:t.$i18n.messages[t.$i18n.locale].report.numbers[t.alerts.moderate.length]}))}}),s("button",{staticClass:"btn btn-report-low-light",on:{click:function(s){return t.new_capture()}}},[t._v(t._s(t.$t("report.start_new_capture")))]),s("button",{staticClass:"btn btn-report-moderate",on:{click:function(s){t.show_report=!0,t.results=!1}}},[t._v(t._s(t.$t("report.show_full_report")))])])]):t.alerts.low.length>=1?s("div",{staticClass:"low-wrapper"},[s("div",{staticClass:"center"},[s("h1",{staticClass:"warning-title",domProps:{innerHTML:t._s(t.$t("report.low_msg",{nb:t.$i18n.messages[t.$i18n.locale].report.numbers[t.alerts.low.length]}))}}),s("button",{staticClass:"btn btn-report-low-light",on:{click:function(s){return t.new_capture()}}},[t._v(t._s(t.$t("report.start_new_capture")))]),s("button",{staticClass:"btn btn-report-low",on:{click:function(s){t.show_report=!0,t.results=!1}}},[t._v(t._s(t.$t("report.show_full_report")))])])]):s("div",{staticClass:"none-wrapper"},[s("div",{staticClass:"center"},[s("h1",{staticClass:"warning-title",domProps:{innerHTML:t._s(t.$t("report.fine_msg"))}}),s("button",{staticClass:"btn btn-report-low-light",on:{click:function(s){t.show_report=!0,t.results=!1}}},[t._v(t._s(t.$t("report.show_full_report")))]),s("button",{staticClass:"btn btn-report-low",on:{click:function(s){return t.new_capture()}}},[t._v(t._s(t.$t("report.start_new_capture")))])])])]):t.show_report?s("div",{staticClass:"wrapper"},[s("div",{staticClass:"report-wrapper"},[s("div",{staticClass:"device-ctx"},[s("h3",{staticStyle:{margin:"0","padding-left":"10px"}},[t._v(t._s(t.$t("report.report_of"))+" "+t._s(t.device.name))]),s("div",{staticClass:"device-ctx-legend"},[t._v(" "+t._s(t.$t("report.pcap_sha1"))+" "+t._s(t.pcap.SHA1)),s("br"),t._v(" "+t._s(t.$t("report.capture_started"))+" "+t._s(t.pcap["First packet time"].split(",")[0])),s("br"),t._v(" "+t._s(t.$t("report.capture_ended"))+" "+t._s(t.pcap["Last packet time"].split(",")[0])),s("br"),t._v(" "+t._s(t.$t("report.detection_methods"))+" "+t._s(t.detection_methods)+" ")])]),t.alerts.length>0?s("div",[s("ul",{staticClass:"alerts"},[t._l(t.alerts.high,(function(e){return s("li",{key:e.message,staticClass:"alert"},[s("div",{staticClass:"alert-header"},[s("span",{staticClass:"high-label"},[t._v(t._s(t.$t("report.high")))]),s("span",{staticClass:"alert-id"},[t._v(t._s(e.id))]),s("span",{staticClass:"btn-whitelist",on:{click:function(s){return t.add_whitelist(e.host)}}},[t._v("Add to the whitelist")])]),s("div",{staticClass:"alert-body"},[s("span",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"description"},[t._v(t._s(e.description))])])])})),t._l(t.alerts.moderate,(function(e){return s("li",{key:e.message,staticClass:"alert"},[s("div",{staticClass:"alert-header"},[s("span",{staticClass:"moderate-label"},[t._v(t._s(t.$t("report.moderate")))]),s("span",{staticClass:"alert-id"},[t._v(t._s(e.id))]),s("span",{staticClass:"btn-whitelist",on:{click:function(s){return t.add_whitelist(e.host)}}},[t._v("Add to the whitelist")])]),s("div",{staticClass:"alert-body"},[s("span",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"description"},[t._v(t._s(e.description))])])])})),t._l(t.alerts.low,(function(e){return s("li",{key:e.message,staticClass:"alert"},[s("div",{staticClass:"alert-header"},[s("span",{staticClass:"moderate-label"},[t._v(t._s(t.$t("report.low")))]),s("span",{staticClass:"alert-id"},[t._v(t._s(e.id))]),s("span",{staticClass:"btn-whitelist",on:{click:function(s){return t.add_whitelist(e.host)}}},[t._v("Add to the whitelist")])]),s("div",{staticClass:"alert-body"},[s("span",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"description"},[t._v(t._s(e.description))])])])}))],2)]):s("div",{staticClass:"no-alerts-to-show"},[s("span",{staticClass:"main-text"},[t._v(t._s(t.$t("report.no_alerts_title")))]),s("br"),s("span",{staticClass:"second-text"},[t._v(t._s(t.$t("report.no_alerts_subtext")))])]),t.uncategorized_records.length>0?s("h5",{staticClass:"title-report"},[t._v(t._s(t.$t("report.uncat_coms_table")))]):t._e(),t.uncategorized_records.length>0?s("div",[s("table",{staticClass:"table-uncat"},[s("thead",[s("tr",[s("td",[t._v(t._s(t.$t("report.protocol")))]),s("td",[t._v(t._s(t.$t("report.domain_name")))]),s("td",[t._v(t._s(t.$t("report.ip_address")))]),s("td",[t._v(t._s(t.$t("report.port")))])])]),t._l(t.uncategorized_records,(function(e){return s("tr",{key:e.ip_dst},[s("td",[t._v(t._s(Object.keys(e.protocols).map(t=>e.protocols[t].name).join(", ")))]),s("td",{on:{click:function(s){return t.add_whitelist(e.domains[0])}}},[t._v(t._s(e.domains.join(", ")))]),s("td",{on:{click:function(s){return t.add_whitelist(e.ip_dst)}}},[t._v(t._s(e.ip_dst))]),s("td",[t._v(t._s(Object.keys(e.protocols).map(t=>e.protocols[t].port).join(", ")))])])}))],2)]):t._e(),t.whitelisted_records.length>0?s("h5",{staticClass:"title-report"},[t._v(t._s(t.$t("report.whitelisted_coms_table")))]):t._e(),t.whitelisted_records.length>0?s("div",[s("table",{staticClass:"table-uncat"},[s("thead",[s("tr",[s("td",[t._v(t._s(t.$t("report.protocol")))]),s("td",[t._v(t._s(t.$t("report.domain_name")))]),s("td",[t._v(t._s(t.$t("report.ip_address")))]),s("td",[t._v(t._s(t.$t("report.port")))])])]),t._l(t.whitelisted_records,(function(e){return s("tr",{key:e.ip_dst},[s("td",[t._v(t._s(Object.keys(e.protocols).map(t=>e.protocols[t].name).join(", ")))]),s("td",[t._v(t._s(e.domains.join(", ")))]),s("td",[t._v(t._s(e.ip_dst))]),s("td",[t._v(t._s(Object.keys(e.protocols).map(t=>e.protocols[t].port).join(", ")))])])}))],2)]):t._e(),s("div",{attrs:{id:"controls-analysis"}},[s("div",{staticClass:"column col-6"},[s("button",{staticClass:"btn btn btn-primary width-100",on:{click:function(s){return t.save_capture()}}},[t._v(t._s(t.$t("report.save")))])]),s("div",{staticClass:"column col-6"},[s("button",{staticClass:"btn width-100",on:{click:function(s){return t.$router.push("generate-ap")}}},[t._v(t._s(t.$t("report.start_new_capture")))])])])])]):t._e()])},i=[],a=e("a18c"),o=e("bc3a"),n=e.n(o),c=e("56d7"),l={name:"report",data(){return{results:!0,detection_methods:"",uncategorized_records:[],whitelisted_records:[]}},props:{device:Object,methods:Object,pcap:Object,records:Array,alerts:Array,capture_token:String},methods:{save_capture:function(){console.log("[report.vue] Saving the capture"),a["a"].replace({name:"save-capture",params:{capture_token:this.capture_token}})},new_capture:function(){console.log("[report.vue] Deleting the capture and creating a new AP"),n.a.get("/api/misc/delete-captures",{timeout:3e4}).then(()=>{a["a"].push({name:"generate-ap"})}).catch(t=>{console.log(t)})},grep_keyword:function(t,s){try{var e,r;return!!this.alerts[s].length&&(this.alerts[s].forEach(s=>{e=s.title.indexOf(t),r||(r=e>0)}),r)}catch(i){console.log(i)}},get_detection_methods:function(){this.detection_methods+=1==this.methods.iocs?`☑ ${this.$t("report.indicators")} `:`☐ ${this.$t("report.indicators")} `,this.detection_methods+=1==this.methods.heuristics?`☑ ${this.$t("report.heuristics")} `:`☐ ${this.$t("report.heuristics")} `,this.detection_methods+=1==this.methods.active?`☑ ${this.$t("report.active")} `:`☐ ${this.$t("report.active")} `},add_whitelist:function(t){c["EventBus"].$emit("showModal",{action:"whitelist",host:t})},get_records:function(){this.records.forEach(t=>{t.suspicious||t.whitelisted?t.whitelisted&&this.whitelisted_records.push(t):this.uncategorized_records.push(t)})}},created:function(){console.log("[report.vue] Showing report.vue"),this.get_detection_methods(),this.get_records()}},_=l,p=(e("753d"),e("2877")),d=Object(p["a"])(_,r,i,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-b5ee4140.977f56b6.js.map