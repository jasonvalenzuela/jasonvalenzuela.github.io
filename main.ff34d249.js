!function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],_=0,p=[];_<c.length;_++)i=c[_],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={2:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+"templates/"+({0:"__react_static_root__/src/pages/404.tsx",1:"__react_static_root__/src/pages/index.tsx",3:"vendors~__react_static_root__/src/pages/index.tsx"}[t]||t)+"."+{0:"a620eadf",1:"c2a0b235",3:"0127a05d"}[t]+".js"}(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([59,4]),n()}({116:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"notFoundTemplate",(function(){return d}));var r=n(20),o=n.n(r),a=n(21),i=n.n(a),c=n(0),s=n.n(c),u=n(8),l=n.n(u);Object(u.setHasBabelPlugin)();var _={loading:function(){return null},error:function(t){return console.error(t.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},p=l()(i()({id:"__react_static_root__/src/pages/404.tsx",load:function(){return Promise.all([n.e(0).then(n.bind(null,57))]).then((function(t){return t[0]}))},path:function(){return o.a.join(t,"__react_static_root__/src/pages/404.tsx")},resolve:function(){return 57},chunkName:function(){return"__react_static_root__/src/pages/404.tsx"}}),_);p.template="__react_static_root__/src/pages/404.tsx";var f=l()(i()({id:"__react_static_root__/src/pages/index.tsx",load:function(){return Promise.all([Promise.all([n.e(3),n.e(1)]).then(n.bind(null,58))]).then((function(t){return t[0]}))},path:function(){return o.a.join(t,"__react_static_root__/src/pages/index.tsx")},resolve:function(){return 58},chunkName:function(){return"__react_static_root__/src/pages/index.tsx"}}),_);f.template="__react_static_root__/src/pages/index.tsx",e.default={"__react_static_root__/src/pages/404.tsx":p,"__react_static_root__/src/pages/index.tsx":f};var d="__react_static_root__/src/pages/404.tsx"}.call(this,"/")},118:function(t,e,n){var r={".":11,"./":11,"./index":11,"./index.js":11};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=118},126:function(t,e,n){"use strict";n.r(e),function(t){var r=n(0),o=n.n(r),a=n(30),i=n.n(a),c=n(56),s=n(23);if(e.default=s.a,"undefined"!=typeof document){var u=document.getElementById("root"),l=u.hasChildNodes()?i.a.hydrate:i.a.render,_=function(t){l(o.a.createElement(c.AppContainer,null,o.a.createElement(t,null)),u)};_(s.a),t&&t.hot&&t.hot.accept("./App",(function(){_(s.a)}))}}.call(this,n(127)(t))},23:function(t,e,n){"use strict";var r=n(14),o=n.n(r),a=n(0),i=n.n(a),c=n(19),s=n(29),u=n(15);function l(){var t=o()(["\n    body {\n    font-family: 'Roboto', sans-serif;\n    color: #545E6C;\n    background: #f5f5f5;\n    font-size: 14px;\n    padding: 30px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    }\n    @media (max-width: 767px) {\n        body{ \n            padding: 0;\n        }\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n    font-weight: 700;\n    }\n    p {\n    line-height: 1.5;\n    }\n"]);return l=function(){return t},t}var _=Object(u.a)(l());function p(){var t=o()(["\n  background: #42a8c0;\n  max-width: 960px;\n  margin: 0 auto;\n  position: relative;\n  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n"]);return p=function(){return t},t}e.a=function(){return i.a.createElement(c.Root,null,i.a.createElement(_,null),i.a.createElement(f,null,i.a.createElement(i.a.Suspense,{fallback:i.a.createElement("em",null,"Loading...")},i.a.createElement(c.Routes,null,i.a.createElement(s.Router,{pattern:"*"})))))};var f=u.b.div(p())},59:function(t,e,n){n(60),n(115),t.exports=n(123)},61:function(t,e,n){"use strict";n.r(e);var r=n(52),o=[{location:"__react_static_root__/node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];e.default=o}});