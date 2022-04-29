"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[806],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:0},s="Config",d={unversionedId:"reference/data_monitoring/config",id:"reference/data_monitoring/config",isDocsHomePage:!1,title:"Config",description:"To run redata you would usually need to set up some variables in your dbtproject.yml config. Below example configuration followed with an explanation of it.",source:"@site/docs/reference/data_monitoring/config.md",sourceDirName:"reference/data_monitoring",slug:"/reference/data_monitoring/config",permalink:"/feature-slack-notifications/docs/reference/data_monitoring/config",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/data_monitoring/config.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Observability UI \ud83d\udc40",permalink:"/feature-slack-notifications/docs/getting_started/toy_shop/generate_ui"},next:{title:"Metrics",permalink:"/feature-slack-notifications/docs/reference/data_monitoring/metrics"}},c=[{value:"re_data:time_window_start, re_data:time_window_end",id:"re_datatime_window_start-re_datatime_window_end",children:[]},{value:"re_data:monitored",id:"re_datamonitored",children:[]},{value:"re_data:metrics_base",id:"re_datametrics_base",children:[]},{value:"re_data:alerting_z_score",id:"re_dataalerting_z_score",children:[]},{value:"re_data:anomaly_detection_look_back_days",id:"re_dataanomaly_detection_look_back_days",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config"},"Config"),(0,i.kt)("p",null,"To run re_data you would usually need to set up some variables in your ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," config. Below example configuration followed with an explanation of it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"dbt_project.yml","dbt_project.yml":!0},"# to enable re_data models\nmodels:\n  re_data:\n    enabled: true\n\nvars:\n  # if not passed, last day stats will be computed\n  re_data:time_window_start: '{{ (run_started_at - modules.datetime.timedelta(1)).strftime(\"%Y-%m-%d 00:00:00\") }}'\n  re_data:time_window_end: '{{ run_started_at.strftime(\"%Y-%m-%d 00:00:00\") }}'\n\n  # *required if you want to configure re_data in code (not in DB)\n  re_data:monitored:\n\n    - schema: dq_raw # (optional)\n      database: postgres # (optional)\n      tables:\n        - name: sample_table\n          time_filter: creation_time\n\n          # (optional) specify columns for which re_data should run\n          columns:\n            - event_type\n            - value1\n            - value2\n          \n          metrics: # my additional metrics for table\n            table:\n              - my_custom_table_metric\n              - distinct_rows:\n                  key: value # table metrics can take in config unique to it.\n\n            column:\n              event_type:\n                - distinct_count\n                - match_regex:\n                    regex: ([A-Za-z0-9]+) # passing a key value pair of config to a column metric.\n\n        - name: sample_with_anomaly\n          time_filter: creation_time\n\n      # this would work for all tables in the list\n      actively_monitored: true\n\n  # (optional) if not passed, all metrics below except custom \n  # ones will be used\n  re_data:metrics_base:\n    table:\n      - row_count\n      - freshness\n      - buy_count # my own custom metric\n      \n    column:\n      numeric:\n        - min\n        - max\n        - avg\n        - stddev\n        - variance\n        - nulls_count\n        - diff # my own custom metric\n        \n      text:\n        - min_length\n        - max_length\n        - avg_length\n        - nulls_count\n        - missing_count\n\n  # (optional) global z_score threshold to use for alerting\n  # usually keeping default will be enough\n  re_data:alerting_z_score: 3\n\n  # (optional) tells how much hisory you want to consider when looking for anomalies\n  re_data:anomaly_detection_look_back_days: 30\n")),(0,i.kt)("h3",{id:"re_datatime_window_start-re_datatime_window_end"},"re_data:time_window_start, re_data:time_window_end"),(0,i.kt)("p",null,"re_data metrics are time-based. (re_data filters all your table data to a specific time window.)\nIn general, we advise setting up a time window this way that all new data is monitored.\nIt's also possible to compute metrics from overlapping data for example last 7 days."),(0,i.kt)("p",null,"By default, re_data computes daily stats from the last day (it actually uses exact configuration from example for that)"),(0,i.kt)("h3",{id:"re_datamonitored"},"re_data:monitored"),(0,i.kt)("p",null,"One of the most important settings. You can define here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"what tables you would like to monitor"),(0,i.kt)("li",{parentName:"ul"},"what columns you would like to use for time filtering in them"),(0,i.kt)("li",{parentName:"ul"},"what metrics to compute for those tables")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"re_data:monitored")," is expected to be a list with elements containing: ",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"database"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tables")," keys.\n",(0,i.kt)("inlineCode",{parentName:"p"},"tables")," key is expected to be a list of tables to monitor."),(0,i.kt)("p",null,"(",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"database")," keys are optional here, if not passed re_data will use dbt project schema/database to infer those, you still need to pass: ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data:schemas")," with all schemas to monitor)"),(0,i.kt)("p",null,"Each element of ",(0,i.kt)("inlineCode",{parentName:"p"},"tables")," has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," which is the name of the table (dbt model, seed, source)  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_filter")," column for time filter (",(0,i.kt)("inlineCode",{parentName:"li"},"null")," in case you would like to compute global metric)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actively_monitored")," information if you with to monitor table"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"columns")," if you would like to run re_data only for subset of columns specify them here"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metrics")," what additional metrics you would like to compute for tables. Check out the exact syntax in the config example.")),(0,i.kt)("p",null,"Notice, above table settings, except ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," can be also set for all\ntables at once (check ",(0,i.kt)("inlineCode",{parentName:"p"},"actively_monitored: true")," usage in the example)"),(0,i.kt)("h3",{id:"re_datametrics_base"},"re_data:metrics_base"),(0,i.kt)("p",null,"This is a set of metrics to compute for all monitored tables.\nSome metrics like ",(0,i.kt)("inlineCode",{parentName:"p"},"row_count")," are table level, others are specified\nper column type: so that expression will be run for all columns of this type."),(0,i.kt)("p",null,"Here you only add metrics if you want to compute them for all tables which are monitored. If you want to add metrics to be computed for a specific table (or tables) you can do it with ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data:monitored")," var."),(0,i.kt)("h3",{id:"re_dataalerting_z_score"},"re_data:alerting_z_score"),(0,i.kt)("p",null,"The threshold for alerting, you can leave it as is or update depending on your experience.  (By default it's 3)"),(0,i.kt)("h3",{id:"re_dataanomaly_detection_look_back_days"},"re_data:anomaly_detection_look_back_days"),(0,i.kt)("p",null,"The period which ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data")," considers when looking for anomalies. (By default it's 30 days)"))}u.isMDXComponent=!0}}]);