"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[139],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9343:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:0,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},s="Overview",c={unversionedId:"reference/metrics/overview_metric",id:"reference/metrics/overview_metric",title:"Overview",description:"How metrics look like",source:"@site/docs/reference/metrics/overview_metric.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/overview_metric",permalink:"/latest/docs/reference/metrics/overview_metric",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/metrics/overview_metric.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Notify",permalink:"/latest/docs/reference/cli/notify"},next:{title:"Base metrics",permalink:"/latest/docs/reference/metrics/base_metrics"}},m={},u=[{value:"How metrics look like",id:"how-metrics-look-like",level:2},{value:"Time based",id:"time-based",level:2},{value:"Global",id:"global",level:2},{value:"Table level",id:"table-level",level:2},{value:"Column level",id:"column-level",level:2},{value:"Base",id:"base",level:2},{value:"Extra",id:"extra",level:2},{value:"Custom",id:"custom",level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"how-metrics-look-like"},"How metrics look like"),(0,i.kt)("p",null,"re_data metrics are currently ",(0,i.kt)("em",{parentName:"p"},"just")," expressions which\nare added to select statements run automatically by re_data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data query"',title:'"re_data','query"':!0},"select metric1, metric2, metric3\nfrom your_table\nwhere data in time_window\n")),(0,i.kt)("p",null,"These simple definitions still make it possible to create a wide variety of metrics.\nIn case metric is more than single sql expression, you can also create them by using sub queries in metric macros (more details in custom metrics section)"),(0,i.kt)("h2",{id:"time-based"},"Time based"),(0,i.kt)("p",null,"We recommend that most of your metrics computed would be time-based (data is then filtered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter")," specified in the table config.\n",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter")," can be either some date column comparable to timestamp or SQL expression that will be comparable to the timestamp in your data warehouse. ",(0,i.kt)("em",{parentName:"p"},"(And if you think we can shorten this definition to just SQL expression as column name is one, you are right \ud83d\ude0a")),(0,i.kt)("h2",{id:"global"},"Global"),(0,i.kt)("p",null,"In cases when time-based filtering is not possible re_data can compute global metrics for a table. Global metrics don't filter by time and work on data from the whole table. You can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"time_filter: null")," in the re_data table config to compute global metrics."),(0,i.kt)("h2",{id:"table-level"},"Table level"),(0,i.kt)("p",null,"Table level metrics compute stats based on the whole table row, the most simple example of this is ",(0,i.kt)("inlineCode",{parentName:"p"},"row_count")," metric. Your custom table level metrics can use multiple columns when computing the value."),(0,i.kt)("h2",{id:"column-level"},"Column level"),(0,i.kt)("p",null,"Column level metrics are testing a single column of data values. For example, computing maximal value appears in the column. They take column names as an argument, which makes them generic. (you can use them on different columns and different tables)"),(0,i.kt)("h2",{id:"base"},"Base"),(0,i.kt)("p",null,"re_data comes with a set of metrics that are computed by default for all monitored tables. This is controlled by ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics_base"),". By default ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics_base")," variable is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data:metrics_base:"',title:'"re_data:metrics_base:"'},"  re_data:metrics_base:\n    table:\n      - row_count\n      - freshness\n\n    column:\n      numeric:\n        - min\n        - max\n        - avg\n        - stddev\n        - variance\n        - nulls_count\n        - nulls_percent\n      text:\n        - min_length\n        - max_length\n        - avg_length\n        - nulls_count\n        - missing_count\n        - nulls_percent\n        - missing_percent\n")),(0,i.kt)("p",null,"Definition of all base metrics is available under ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/base_metrics"},"Base metrics"))," section."),(0,i.kt)("h2",{id:"extra"},"Extra"),(0,i.kt)("p",null,"Apart from base metrics which are computed by default, re_data contains set of macros which can be\ncomputed as extra metrics. Full list of those metrics is available in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/extra_metrics"},"Extra metrics"))," section."),(0,i.kt)("h2",{id:"custom"},"Custom"),(0,i.kt)("p",null,"re_data makes it possible to create macros which will compute your own metrics. More information about that in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/your_own_metric"},"Custom metrics")),"  section."))}d.isMDXComponent=!0}}]);