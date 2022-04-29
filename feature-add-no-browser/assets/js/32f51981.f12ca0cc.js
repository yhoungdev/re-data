"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[430],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(2389),i=n(3725),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),k=v.tabGroupChoices,w=v.setTabGroupChoices,_=(0,r.useState)(y),N=_[0],x=_[1],j=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=k[m];null!=T&&T!==N&&h.some((function(e){return e.value===T}))&&x(T)}var E=function(e){var t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==N&&(O(t),x(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={sidebar_position:2},d="Quickstart - new to dbt",p={unversionedId:"getting_started/installation/new_to_dbt",id:"getting_started/installation/new_to_dbt",title:"Quickstart - new to dbt",description:"You are not using dbt in your company but would like to try to re_data.",source:"@site/docs/getting_started/installation/new_to_dbt.mdx",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/new_to_dbt",permalink:"/feature-add-no-browser/docs/getting_started/installation/new_to_dbt",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/new_to_dbt.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart - dbt users",permalink:"/feature-add-no-browser/docs/getting_started/installation/for_dbt_users"},next:{title:"Welcome to toy shop!",permalink:"/feature-add-no-browser/docs/getting_started/toy_shop/toy_shop_data"}},c={},m=[{value:"Install re_data package",id:"install-re_data-package",level:2},{value:"Init your dbt project",id:"init-your-dbt-project",level:2},{value:"Setup you db connection",id:"setup-you-db-connection",level:2},{value:"Adding tables to your dbt project",id:"adding-tables-to-your-dbt-project",level:2},{value:"Learning more",id:"learning-more",level:2}],b={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart---new-to-dbt"},"Quickstart - new to dbt"),(0,o.kt)("p",null,"You are not using dbt in your company but would like to try to re_data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Excellent choice!")," re_data can help you with data quality and is a good way to start using dbt in your organization, even if you are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"not yet ready to switch,"),(0,o.kt)("li",{parentName:"ul"},"happy with the current way of transforming data. ")),(0,o.kt)("h2",{id:"install-re_data-package"},"Install re_data package"),(0,o.kt)("p",null,"For the new users we recommend starting with installing re_data package in your python environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install re_data\n")),(0,o.kt)("p",null,"re_data includes dbt-core in dependencies so after this step you will already have it installed in your system. But in order to use dbt for your specific db you need to install dbt-postgres, dbt-snowflake, dbt-redshift, dbt-bigquery python package depending on what data warehouse you are planning to use."),(0,o.kt)("h2",{id:"init-your-dbt-project"},"Init your dbt project"),(0,o.kt)("p",null,"After intallation you can initialize your project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"re_data init project_name\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note, that project which re_data initializes already contains 2 seed files (customers, orders) and pending_orders_per_customer model. Those are example tables added together with their re_data configuration. You are free to delete them, also you can follow up tutorial on running monitoring for them: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting_started/toy_shop/toy_shop_data"},"toy shop tutorial \ud83d\ude0a"))))),(0,o.kt)("h2",{id:"setup-you-db-connection"},"Setup you db connection"),(0,o.kt)("p",null,"dbt stores connection details for your db in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml"),". Example setup for dbs supported by re_data here:"),(0,o.kt)(i.Z,{defaultValue:"bigquery",values:[{label:"BigQuery",value:"bigquery"},{label:"Snowflake",value:"snowflake"},{label:"Redshift",value:"redshift"},{label:"Postgres",value:"postgres"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"snowflake",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: snowflake\n      account: xxx\n      user: xxx\n      password: xxx\n      database: database\n      warehouse: warehouse\n      schema: toy_shop\n"))),(0,o.kt)(l.Z,{value:"bigquery",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: bigquery\n      method: oauth\n      project: xxx\n      schema: toy_shop\n      location: US\n      threads: 4\n"))),(0,o.kt)(l.Z,{value:"redshift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: redshift\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5439\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n"))),(0,o.kt)(l.Z,{value:"postgres",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=~/.dbt/profiles.yml",title:"~/.dbt/profiles.yml"},"toy_shop:\n  target: dev\n  outputs:\n    dev:\n      type: postgres\n      host: xxx\n      user: xxx\n      password: xxx\n      port: 5432\n      dbname: xxx\n      schema: toy_shop\n      threads: 4\n")))),(0,o.kt)("p",null,"More details on how to set up a profile file for your DB can be found in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.getdbt.com/reference/profiles.yml"},"dbt profile docs"))),(0,o.kt)("h2",{id:"adding-tables-to-your-dbt-project"},"Adding tables to your dbt project"),(0,o.kt)("p",null,"Once you have the dbt project setup and a working connection with the data warehouse, you will need to add your current tables to your dbt project."),(0,o.kt)("p",null,"The easiest way to do that, assuming you don't want to add additional tables or views in your database, is to add tables you would like to monitor as dbt sources."),(0,o.kt)("p",null,"Assuming you have tables in your ",(0,o.kt)("inlineCode",{parentName:"p"},"schema_name")," schema, this would be the configuration you would need to set up in dbt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="sources/schema.yml"',title:'"sources/schema.yml"'},"version: 2\nsources:\n  - name: schema_name\n    tables:\n      - name: table_name1\n      - name: table_name2\n      - name: table_name3\n")),(0,o.kt)("p",null,"More details on configuring sources can be found in dbt documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/using-sources"},"here")),(0,o.kt)("p",null,"Once you add these tables and make them visible in the dbt project (the one created by re_data), you can start monitoring your tables in re_data."),(0,o.kt)("p",null,"re_data dbt source configuration needs to be your into your ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_project.yml"),". Here is example of sources configuration in re_data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},"sources:\n  project_name:\n    db_schema:\n      table_name1:\n        +re_data_monitored: true\n        +re_data_time_filter: joined_at\n      table_name1:\n        +re_data_monitored: true\n        +re_data_time_filter: joined_at\n")),(0,o.kt)("p",null,"After creating this configuration, you should be ready to compute re_data models containing metrics & anomalies of your tables. "),(0,o.kt)("h2",{id:"learning-more"},"Learning more"),(0,o.kt)("p",null,"We still recommend to follow introduction for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/feature-add-no-browser/docs/getting_started/installation/for_dbt_users"},"dbt users"))," and our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/feature-add-no-browser/docs/getting_started/toy_shop/toy_shop_data"},"example toyshop tutorial \ud83d\ude0a"))," for more details."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("h3",{parentName:"div",id:"having-problems"},"Having problems?"),(0,o.kt)("p",{parentName:"div"},"If you have more questions, got stuck anywhere, or something is not working as expected, please let us know on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),", we will help you asap, and it will help us improve this quick start guide."))))}f.isMDXComponent=!0}}]);