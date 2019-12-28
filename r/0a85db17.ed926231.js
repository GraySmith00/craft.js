(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?a.a.createElement(f,c({ref:t},s,{components:r})):a.a.createElement(f,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c}));var n=r(0),a=r.n(n);const o=({item:e})=>{const t=e[0],r=e.length>1&&"string"==typeof e[1]&&e[1],n=3==e.length?"string"==typeof e[2]&&e[2]:4==e.length&&"string"==typeof e[3]&&e[3],o=e.length>1&&Array.isArray(e[e.length-1])&&e[e.length-1];return a.a.createElement("li",{className:"api-item"},a.a.createElement("div",null,t&&a.a.createElement("code",{className:"api-title"},t),r&&a.a.createElement("strong",{className:"api-type"},r)),n&&a.a.createElement("div",{className:"api-description"},n),o&&a.a.createElement(i,{items:o}))},i=({items:e})=>a.a.createElement("ul",null,e&&e.map((e,t)=>a.a.createElement(o,{item:e,key:t}))),c=({type:e,title:t=!0,noMargin:r=!0})=>{let n;switch(e){case"hoc":n="Higher-Order Component";break;default:n=e[0].toUpperCase()+e.substring(1)}return a.a.createElement("div",{className:"badge-wrapper"},a.a.createElement("span",{className:"badge badge-"+e+" "+(t?"badge-title":"")+" "+(r?"badge-no-margin":"")},n))}},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(116)),i=r(117),c={id:"editor-state",title:"EditorState",sidebar_label:"EditorState"},l={id:"api/editor-state",title:"EditorState",description:'import {API, Badge} from "./API";',source:"@site/docs/api/EditorState.md",permalink:"/craft.js/r/docs/api/editor-state",sidebar_label:"EditorState",sidebar:"docs",previous:{title:"Save and Load",permalink:"/craft.js/r/docs/save-load-state"},next:{title:"Node",permalink:"/craft.js/r/docs/api/node"}},s=[{value:"Reference",id:"reference",children:[{value:"Properties",id:"properties",children:[]}]}],p={rightToc:s},d="wrapper";function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.b,{type:"type",mdxType:"Badge"}),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)(i.a,{items:[["nodes","Record<NodeId, Node>","A map of all the Nodes in the editor"],["events","Object",[["selected","NodeId"],["hovered","NodeId"],["dragged","NodeId"]]],["options","Object",[["resolver","Map<String, React.ComponentType>","A map of User Components that will be used in the editor"],["enabled?","boolaen","Optional. If set to false, all editing capabilities will be disabled"],["indicator?",'Record<"success" | "error", String>',"Optional. The colour to use for the drop indicator. The colour set in 'success' will be used when the indicator shows a droppable location; otherwise the colour set in 'error' will be used."],["onRender?","React.ComponentType<{element: React.ReactElement}>","Optional. Specify a custom component to render every User Element in the editor."]]]],mdxType:"API"}))}u.isMDXComponent=!0}}]);