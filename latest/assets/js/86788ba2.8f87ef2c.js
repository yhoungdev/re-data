"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:0},l="Init",s={unversionedId:"reference/cli/init",id:"reference/cli/init",title:"Init",description:"redata init CLI command is used for initialiazing a dbt project from scratch with redata setup.",source:"@site/docs/reference/cli/init.md",sourceDirName:"reference/cli",slug:"/reference/cli/init",permalink:"/latest/docs/reference/cli/init",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/init.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Configuration \u2699\ufe0f",permalink:"/latest/docs/reference/config"},next:{title:"Overview",permalink:"/latest/docs/reference/cli/overview"}},p={},u=[{value:"init",id:"init-1",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"init"},"Init"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"re_data init")," CLI command is used for initialiazing a dbt project from scratch with re_data setup."),(0,o.kt)("h2",{id:"init-1"},"init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"re_data init project_name\n")),(0,o.kt)("p",null,"This creates a folder with a valid dbt project setup. The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," would use the project_name specified as argument to the command."),(0,o.kt)("p",null,"The project setup contains two seed files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"toy_shop/seeds/customers.csv"),(0,o.kt)("li",{parentName:"ul"},"toy_shop/seeds/orders.csv")),(0,o.kt)("p",null,"And it also contains one model:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"toy_shop/models/pending_orders_per_customer.sql")),(0,o.kt)("p",null,"which is used to showcase a ",(0,o.kt)("a",{parentName:"p",href:"/latest/docs/getting_started/toy_shop/toy_shop_data"},"toy_shop project")," using re_data."))}f.isMDXComponent=!0}}]);