"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(n),f=a,g=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(g,i(i({ref:e},d),{},{components:n})):r.createElement(g,i({ref:e},d))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2246:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Installation for dbt users",u={unversionedId:"getting_started/installation/for_dbt_users",id:"getting_started/installation/for_dbt_users",isDocsHomePage:!1,title:"Installation for dbt users",description:"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project.",source:"@site/docs/getting_started/installation/for_dbt_users.md",sourceDirName:"getting_started/installation",slug:"/getting_started/installation/for_dbt_users",permalink:"/re-data/docs/getting_started/installation/for_dbt_users",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/installation/for_dbt_users.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Supported data warehouses",permalink:"/re-data/docs/introduction/supported_warehouses"},next:{title:"Installation for starters",permalink:"/re-data/docs/getting_started/installation/new_to_dbt"}},d=[{value:"Adding re_data to packages used",id:"adding-re_data-to-packages-used",children:[]},{value:"Optionally",id:"optionally",children:[]}],c={toc:d};function p(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-for-dbt-users"},"Installation for dbt users"),(0,o.kt)("p",null,"If you are already using dbt in your company, you can install re_data by adding our dbthub package to your project."),(0,o.kt)("h2",{id:"adding-re_data-to-packages-used"},"Adding re_data to packages used"),(0,o.kt)("p",null,"Simply update your ",(0,o.kt)("inlineCode",{parentName:"p"},"packages.yml")," file with re_data package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="packages.yml"',title:'"packages.yml"'},'\npackages:\n    ***\n    \n    - package: re-data/re_data\n      version: [">=0.3.0", "<0.4.0"]\n\n')),(0,o.kt)("p",null,"And run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dbt deps\n")),(0,o.kt)("h2",{id:"optionally"},"Optionally"),(0,o.kt)("p",null,"Optionally you can install re_data python package, which simplifies running some dbt commands related to re_data models."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install re_data\n")),(0,o.kt)("p",null,"We will talk more about this in the Getting started tutorial"))}p.isMDXComponent=!0}}]);