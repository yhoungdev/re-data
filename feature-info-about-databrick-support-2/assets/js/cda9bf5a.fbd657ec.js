"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,_=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(_,s(s({ref:t},l),{},{components:r})):o.createElement(_,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9819:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:2},p="Observability data",u={unversionedId:"getting_started/toy_shop/compute_monitoring",id:"getting_started/toy_shop/compute_monitoring",isDocsHomePage:!1,title:"Observability data",description:"Now, let's compute the first health data. We will use the redata configuration already defined in the project. Check it out **in our repo** - or in your own editor.",source:"@site/docs/getting_started/toy_shop/compute_monitoring.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/compute_monitoring",permalink:"/re-data/feature-info-about-databrick-support-2/docs/getting_started/toy_shop/compute_monitoring",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/compute_monitoring.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to a toy shop!",permalink:"/re-data/feature-info-about-databrick-support-2/docs/getting_started/toy_shop/toy_shop_data"},next:{title:"Observability UI \ud83d\udc40",permalink:"/re-data/feature-info-about-databrick-support-2/docs/getting_started/toy_shop/generate_ui"}},l=[{value:"First re_data run",id:"first-re_data-run",children:[]},{value:"re_data run for January 2021",id:"re_data-run-for-january-2021",children:[]},{value:"Looking into anomalies",id:"looking-into-anomalies",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"observability-data"},"Observability data"),(0,a.kt)("p",null,"Now, let's compute the first health data. We will use the re_data configuration already defined in the project. Check it out ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/re-data/re-data/blob/master/getting_started/toy_shop/dbt_project.yml"},"in our repo"))," - or in your own editor."),(0,a.kt)("h2",{id:"first-re_data-run"},"First re_data run"),(0,a.kt)("p",null,"We choose to run re_data for the first day of 2021:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --models package:re_data --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note, if we don't pass time window parameters re_data will compute stats from the previous day")),(0,a.kt)("p",null,"This computes ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/data_monitoring/metrics#default-metrics"},"metrics"))," for the monitored tables. Let's just see how many customers/order_items/orders we have added in on 01-01-2021."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed metrics"',title:'"Viewing',computed:!0,'metrics"':!0},'select table_name, metric, value from toy_shop_re.re_data_metrics where metric in( \'row_count\', \'global__row_count\');\n\n               table_name                |      metric       | value\n-----------------------------------------+-------------------+-------\n "postgres"."toy_shop"."orders"          | row_count         |   151\n "postgres"."toy_shop"."companies"       | global__row_count |    49\n "postgres"."toy_shop"."orders_per_age"  | row_count         |   151\n "postgres"."toy_shop"."customers"       | row_count         |    14\n "postgres"."toy_shop"."pending_orders"  | row_count         |    35\n "postgres"."toy_shop"."order_items"     | row_count         |   226\n "postgres"."toy_shop"."revenue_per_age" | row_count         |    17\n')),(0,a.kt)("h2",{id:"re_data-run-for-january-2021"},"re_data run for January 2021"),(0,a.kt)("p",null,"On production, we would set up re_data to run daily/hourly/etc. For toy shop, by using the re_data python package command we backfill daily data for the past (whole January 2021)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"re_data run --start-date 2021-01-01 --end-date 2021-01-30\n")),(0,a.kt)("h2",{id:"looking-into-anomalies"},"Looking into anomalies"),(0,a.kt)("p",null,"And now let's look into the ",(0,a.kt)("inlineCode",{parentName:"p"},"alerting")," table to see if ",(0,a.kt)("inlineCode",{parentName:"p"},"re_data")," found anything suspicious for us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Viewing computed anomalies"',title:'"Viewing',computed:!0,'anomalies"':!0},'select table_name, metric, z_score_value, last_value, time_window_end from toy_shop_re.re_data_alerting ;\n\n               table_name               |     metric      |    z_score_value    |     last_value     |   time_window_end\n----------------------------------------+-----------------+---------------------+--------------------+---------------------\n "postgres"."toy_shop"."order_items"    | freshness       |  3.0867937457815877 |               2048 | 2021-01-20 00:00:00\n "postgres"."toy_shop"."orders"         | nulls_percent   |   4.248529154190601 | 0.6211180124223602 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."orders"         | min_length      |    -4.2485291562996 |                  2 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."orders"         | distinct_values |   4.248529155349601 |                  6 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."orders_per_age" | nulls_percent   |   4.248529154190601 | 0.6211180124223602 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."orders_per_age" | min_length      |    -4.2485291562996 |                  2 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."customers"      | min             | -3.4050793706927704 |                  0 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."customers"      | avg             | -3.3494095494136444 |  22.88888888888889 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."customers"      | stddev          |  3.1074734473171137 |  22.20728255984533 | 2021-01-21 00:00:00\n "postgres"."toy_shop"."pending_orders" | freshness       |  3.5280241130823335 |              15951 | 2021-01-22 00:00:00\n "postgres"."toy_shop"."customers"      | freshness       |  3.0806274651669603 |              28700 | 2021-01-23 00:00:00\n "postgres"."toy_shop"."customers"      | min_length      |        4.7999999976 |                  4 | 2021-01-26 00:00:00\n')),(0,a.kt)("p",null,"We can see there are a couple of things re_data flagged for us."),(0,a.kt)("p",null,"In the next setup, let's generate UI to look closer into what's happening."))}d.isMDXComponent=!0}}]);