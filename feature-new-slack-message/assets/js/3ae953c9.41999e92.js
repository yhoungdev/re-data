"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),o=n(7294),r=n(2389),s=n(3725),l=n(6010),i="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),k=b.tabGroupChoices,N=b.setTabGroupChoices,_=(0,o.useState)(g),w=_[0],x=_[1],E=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=k[m];null!=P&&P!==w&&v.some((function(e){return e.value===P}))&&x(P)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==w&&(T(t),x(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},8942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(9877),l=n(8215),i=["components"],u={sidebar_position:1},d="Welcome to toy shop!",p={unversionedId:"getting_started/toy_shop/toy_shop_data",id:"getting_started/toy_shop/toy_shop_data",title:"Welcome to toy shop!",description:"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42",source:"@site/docs/getting_started/toy_shop/toy_shop_data.mdx",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/toy_shop_data",permalink:"/feature-new-slack-message/docs/getting_started/toy_shop/toy_shop_data",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/toy_shop_data.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart - new to dbt",permalink:"/feature-new-slack-message/docs/getting_started/installation/new_to_dbt"},next:{title:"Reliability data",permalink:"/feature-new-slack-message/docs/getting_started/toy_shop/compute_monitoring"}},c={},m=[{value:"Setting up toy shop project",id:"setting-up-toy-shop-project",level:2},{value:"Toy shop data",id:"toy-shop-data",level:2},{value:"Profile setup",id:"profile-setup",level:2},{value:"Loading data &amp; creating models",id:"loading-data--creating-models",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-toy-shop"},"Welcome to toy shop!"),(0,r.kt)("p",null,"Welcome to a re_data getting started tutorial. We will prepare, analyze and monitor toy shop data here. The toy shop is a fictional e-commerce shop \ud83d\ude42"),(0,r.kt)("p",null,"It's an example of how a re_data project can work and help you improve data in your data warehouse"),(0,r.kt)("h2",{id:"setting-up-toy-shop-project"},"Setting up toy shop project"),(0,r.kt)("p",null,"Install re_data if you don't have it already"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install re_data\n")),(0,r.kt)("p",null,"Set up a dbt project containing the toy shop data using the re_data CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"re_data init toy_shop\ncd toy_shop/\n")),(0,r.kt)("h2",{id:"toy-shop-data"},"Toy shop data"),(0,r.kt)("p",null,"You would observe that the project has two seed files included:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"toy_shop/seeds/customers.csv"),(0,r.kt)("li",{parentName:"ul"},"toy_shop/seeds/orders.csv")),(0,r.kt)("p",null,"And it also contains one model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"toy_shop/models/pending_orders_per_customer.sql")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Both seeds & model are already configured to be monitored by re_data, we will describe this configuration later on during the tutorial"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We use seeds instead of sources much more often than you would normally do in dbt. This is due to the convenient setup dbt offers for seeds"))),(0,r.kt)("h2",{id:"profile-setup"},"Profile setup"),(0,r.kt)("p",null,"For re_data to work you will need dbt connection with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"toy_shop")," (project name we used) Here are examples of how it could look like in dbs supported by re_data, you can also check more details on connection configuration in  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.getdbt.com/reference/profiles.yml"},"dbt profiles docs")),"."),(0,r.kt)(s.Z,{defaultValue:"bigquery",values:[{label:"BigQuery",value:"bigquery"},{label:"Snowflake",value:"snowflake"},{label:"Redshift",value:"redshift"},{label:"Postgres",value:"postgres"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"snowflake",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: snowflake\n      account: xxx\n      user: xxx\n      password: xxx\n      database: database\n      warehouse: warehouse\n      schema: toy_shop\n"))),(0,r.kt)(l.Z,{value:"bigquery",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: bigquery\n      method: oauth\n      project: xxx\n      schema: toy_shop\n      location: US\n      threads: 4\n"))),(0,r.kt)(l.Z,{value:"redshift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: redshift\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5439\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n"))),(0,r.kt)(l.Z,{value:"postgres",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")))),(0,r.kt)("h2",{id:"loading-data--creating-models"},"Loading data & creating models"),(0,r.kt)("p",null,"Now you are ready to load toy_shop seed data & create project models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# load seed files into the database\ndbt seed\n# Compute models for toy_shop project, only pending_orders_per_customer table in this case.\ndbt run --select package:toy_shop\n")),(0,r.kt)("p",null,"After this step 3 tables should be available in the data warehouse of your choice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Loaded data"',title:'"Loaded','data"':!0},"toy_shop=> SELECT * FROM toy_shop.orders;\n id  | customer_id |     status      | amount |    time_created\n-----+-------------+-----------------+--------+---------------------\n   1 |           2 | PAID            |  20000 | 2021-01-02 14:10:54\n   2 |           3 | SHIPPED         |  20000 | 2021-01-06 06:39:15\n   3 |           4 | DELIVERED       |  40000 | 2021-01-10 20:46:55\n   4 |           5 | PENDING_PAYMENT |  20000 | 2021-01-10 12:15:55\n   5 |           6 | PAID            |  25000 | 2021-01-09 21:38:54\n   ..\n   ..\n   ..\ntoy_shop=> SELECT * FROM toy_shop.customers;\n id | age |       name\n----+-----+-------------------\n  1 |  25 | Matias Douglas\n  2 |  38 | Raelyn Harrison\n  3 |  34 | Anaya Reed\n  4 |  46 | Mario Harris\n  5 |  28 | John Roberts\n  ..\n  ..\n  ..\ntoy_shop=> SELECT * FROM toy_shop.pending_orders_per_customer;\n id  | amount |     status      |    time_created     | customer_id | age\n-----+--------+-----------------+---------------------+-------------+-----\n   4 |  20000 | PENDING_PAYMENT | 2021-01-10 12:15:55 |           5 |  28\n   8 |   5000 | PENDING_PAYMENT | 2021-01-05 11:41:49 |           9 |  60\n  12 |  20000 | PENDING_PAYMENT | 2021-01-08 13:10:48 |          13 |  38\n  16 |  30000 | PENDING_PAYMENT | 2021-01-05 13:57:46 |           2 |  38\n  20 |  30000 | PENDING_PAYMENT | 2021-01-09 20:07:28 |           6 |  39\n  24 |  10000 | PENDING_PAYMENT | 2021-01-06 06:42:35 |          10 |  29\n  28 |  45000 | PENDING_PAYMENT | 2021-01-02 10:03:27 |          14 |  20\n  ..\n  ..\n  ..\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h3",{parentName:"div",id:"more-questions"},"More questions?"),(0,r.kt)("p",{parentName:"div"},"If you have more questions, got stuck anywhere or something is not working as expected please let us know on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap and it will help us improve this tutorial."))))}f.isMDXComponent=!0}}]);