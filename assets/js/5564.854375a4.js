/*! For license information please see 5564.854375a4.js.LICENSE.txt */
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5564],{19767:function(e,t,r){"use strict";r.r(t),r.d(t,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return s},__awaiter:function(){return l},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return m},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return P},__asyncDelegator:function(){return _},__asyncValues:function(){return w},__makeTemplateObject:function(){return D},__importStar:function(){return A},__importDefault:function(){return S},__classPrivateFieldGet:function(){return j},__classPrivateFieldSet:function(){return V}});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function a(e,t,r,n){var o,u=arguments.length,i=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(t,r,i):o(t,r))||i);return u>3&&i&&Object.defineProperty(t,r,i),i}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,u){function i(e){try{c(n.next(e))}catch(t){u(t)}}function a(e){try{c(n.throw(e))}catch(t){u(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(a){u=[6,a],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=u.next()).done;)i.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],i=0,a=u.length;i<a;i++,o++)n[o]=u[i];return n}function y(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function P(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),u=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){u.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,s):l(u[0][2],r)}catch(n){l(u[0][3],n)}var r}function c(e){a("next",e)}function s(e){a("throw",e)}function l(e,t){e(t),u.shift(),u.length&&a(u[0][0],u[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function A(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function j(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function V(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},24973:function(e,t,r){"use strict";r.d(t,{Z:function(){return f},I:function(){return l}});var n=r(67294),o=/{\w+}/g,u="{}";function i(e,t){var r=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var a=n.isValidElement(i)?i:String(i);return r.push(a),u}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,t,o){return[].concat(e,[n.createElement(n.Fragment,{key:o},t,r[o])])}),[])}function a(e){return i(e.children,e.values)}var c=r(64644);function s(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function l(e,t){var r,n=e.message;return i(null!==(r=s({message:n,id:e.id}))&&void 0!==r?r:n,t)}function f(e){var t,r=e.children,o=e.id,u=e.values,i=null!==(t=s({message:r,id:o}))&&void 0!==t?t:r;return n.createElement(a,{values:u},i)}},29935:function(e,t,r){"use strict";r.r(t),r.d(t,{DEFAULT_PLUGIN_ID:function(){return n}});var n="default"},28143:function(e,t,r){"use strict";r.r(t),r.d(t,{BrowserRouter:function(){return n.VK},HashRouter:function(){return n.UT},Link:function(){return n.rU},MemoryRouter:function(){return n.VA},NavLink:function(){return n.OL},Prompt:function(){return n.NL},Redirect:function(){return n.l_},Route:function(){return n.AW},Router:function(){return n.F0},StaticRouter:function(){return n.gx},Switch:function(){return n.rs},generatePath:function(){return n.Gn},matchPath:function(){return n.LX},useHistory:function(){return n.k6},useLocation:function(){return n.TH},useParams:function(){return n.UO},useRouteMatch:function(){return n.$B},withRouter:function(){return n.EN}});var n=r(45428)},28084:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var n=r(52263);function o(){var e=(0,n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var r=u(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},48408:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(28143);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,u,i=t.getActiveVersion(e,r),a=null==i?void 0:i.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),u=o.activeVersion!==n;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:u?n:void 0}}},96730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(28143),o=r(28084),u=r(48408);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")};t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return u.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:u.getActiveVersion(r.pluginData,o)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return u.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveVersion(r,o)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveDocContext(r,o)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getDocVersionSuggestions(r,o)}},80907:function(e,t,r){try{e.exports=r(96730)}catch(o){var n={};e.exports={useAllDocsData:function(){return n},useActivePluginAndVersion:function(){}}}},86700:function(e,t,r){"use strict";t.kM=t.L5=t.J=t.c2=t.pe=t.Mg=t.HX=t.os=t.bc=t.l5=t._f=t.WA=t.LU=void 0;var n=r(86668);Object.defineProperty(t,"LU",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(50012);Object.defineProperty(t,"WA",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"_f",{enumerable:!0,get:function(){return o.listStorageKeys}});var u=r(94711);Object.defineProperty(t,"l5",{enumerable:!0,get:function(){return u.useAlternatePageUtils}});var i=r(37016);Object.defineProperty(t,"bc",{enumerable:!0,get:function(){return i.parseCodeBlockTitle}});var a=r(43320);Object.defineProperty(t,"os",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"HX",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var c=r(53438);var s=r(99016);Object.defineProperty(t,"Mg",{enumerable:!0,get:function(){return s.isSamePath}});var l=r(82128);Object.defineProperty(t,"pe",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(88824);Object.defineProperty(t,"c2",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(7674);Object.defineProperty(t,"J",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}});var v=r(78427);Object.defineProperty(t,"L5",{enumerable:!0,get:function(){return v.DocsPreferredVersionContextProvider}});var p=r(35281);Object.defineProperty(t,"kM",{enumerable:!0,get:function(){return p.ThemeClassNames}})},35281:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},37016:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;var r=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(r))||void 0===t?void 0:t[2])&&void 0!==n?n:""}},78427:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var n=r(19767),o=n.__importStar(r(67294)),u=r(86668),i=r(53438),a=r(80907),c=n.__importDefault(r(43481));function s(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=c.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(c.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){var e=a.useAllDocsData(),t=u.useThemeConfig().docs.versionPersistence,r=o.useMemo((function(){return Object.keys(e)}),[e]),n=o.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),i=n[0],l=n[1];return o.useEffect((function(){l(s({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[i,o.useMemo((function(){return{savePreferredVersion:function(e,r){c.default.save(e,t,r),l((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[l])]}var f=o.createContext(null);function d(e){var t=e.children,r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return i.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},43481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(50012),o=function(e){return"docs-preferred-version-"+e},u={save:function(e,t,r){n.createStorageSlot(o(e),{persistence:t}).set(r)},read:function(e,t){return n.createStorageSlot(o(e),{persistence:t}).get()},clear:function(e,t){n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=u},7674:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(67294),o=r(78427),u=r(80907),i=r(29935);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),r=o.useDocsPreferredVersionContext(),a=r[0],c=r[1],s=a[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:n.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},53438:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(80907);t.isDocsPluginEnabled=!!n.useAllDocsData},82128:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var n=r(19767).__importDefault(r(52263));t.useTitleFormatter=function(e){var t=n.default().siteConfig,r=void 0===t?{}:t,o=r.title,u=r.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+o:o}},99016:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},43320:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},50012:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;var r="localStorage";function n(e){if(void 0===e&&(e=r),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(n){return t=n,o||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),o=!0),null}var t}var o=!1;var u={get:function(){return null},set:function(){},del:function(){}};t.createStorageSlot=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=n(null==t?void 0:t.persistence);return null===r?u:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}},t.listStorageKeys=function(e){void 0===e&&(e=r);var t=n(e);if(!t)return[];for(var o=[],u=0;u<t.length;u+=1){var i=t.key(u);null!==i&&o.push(i)}return o}},94711:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var n=r(19767).__importDefault(r(52263)),o=r(28143);t.useAlternatePageUtils=function(){var e=n.default(),t=e.siteConfig,r=t.baseUrl,u=t.url,i=e.i18n,a=i.defaultLocale,c=i.currentLocale,s=o.useLocation().pathname,l=c===a?r:r.replace("/"+c+"/","/"),f=s.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?u:"")+function(e){return e===a?""+l:""+l+e+"/"}(t)+f}}}},88824:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var n=r(19767),o=r(67294),u=n.__importDefault(r(52263)),i=["zero","one","two","few","many","other"];function a(e){return i.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:a(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=u.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),c;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:a(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),c}var t,r}),[e])}t.usePluralForm=function(){var e=s();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),u=r.pluralForms.indexOf(o);return n[Math.min(u,n.length-1)]}(r,t,e)}}}},86668:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var n=r(19767).__importDefault(r(52263));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},86010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);