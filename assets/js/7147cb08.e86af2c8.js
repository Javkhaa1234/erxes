(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5379],{82964:function(n,e,t){"use strict";t.d(e,{u:function(){return c},P:function(){return l}});var o=t(67294),r=t(60641),i=t(69713).Z,a=t(50210);function c(n,e){return o.createElement(o.Fragment,null,n&&o.createElement(a.Z,{className:"language-javascript"},"import "+n+' from "erxes-ui/lib/components/'+n+'";'),e&&o.createElement(o.Fragment,null,o.createElement("p",null,"required prop - ",o.createElement("span",{className:r.Z.required},"*")),o.createElement(i,null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,e.map((function(n,e){return o.createElement("tr",{key:e},n.map((function(n,e){return o.createElement("td",{key:e},"*"===n[n.length-1]?o.createElement(o.Fragment,null,n.slice(0,-1),o.createElement("span",{className:r.Z.required},"*")):o.createElement(o.Fragment,null,n))})))}))))))}function l(n){var e=JSON.stringify(n);return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},96803:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var o=t(74034),r=t(79973),i=t(67294),a=t(3905),c=t(54656),l=t(50210),p=t(82964);function s(n){var e=n.iconName,t=n.colors,o=n.sizes,r=n.type,a=n.table,s=void 0===a?[]:a;if("code"===r)return i.createElement(l.Z,{className:"language-javascript"},'import "erxes-icon/css/erxes.min.css";');if("install"===r)return i.createElement(l.Z,{className:"language-javascript"},"npm i erxes-icon");var d=function(n,r,i){var a;return(a={icon:e})[r]="color"===r?t:o,a[i]=i&&!0,a},u=function(n,e,t){return i.createElement(i.Fragment,null,i.createElement(c.Z,d(0,e,t)),i.createElement(l.Z,{className:"language-jsx"},"<>\n\t<Icon "+(o=d(0,e,t),(r=(r=(r=(r=(r=(r=JSON.stringify(o)).replace(/30/g,"{30}")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).slice(0,r.length-1)).replace(/=true/g,"")+" />\n</>")));var o,r};return"icon"===r?u():"color"===r?u(0,"color"):"size"===r?u(0,"size"):"active"===r?u(0,"color","isActive"):"APIicon"===r?(0,p.u)("Icon",s):null}var d={id:"usage",title:"Usage"},u={unversionedId:"icons/usage",id:"icons/usage",isDocsHomePage:!1,title:"Usage",description:"Istallation",source:"@site/docs/icons/usage.md",sourceDirName:"icons",slug:"/icons/usage",permalink:"/icons/usage",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/icons/usage.md",version:"current",lastUpdatedBy:"ariunzayarin",lastUpdatedAt:1640237728,formattedLastUpdatedAt:"12/23/2021",frontMatter:{id:"usage",title:"Usage"},sidebar:"components",previous:{title:"Rule",permalink:"/utilities/Rule/rule"},next:{title:"Erxes-icon",permalink:"/icons/icons"}},m=[{value:"Istallation",id:"istallation",children:[]},{value:"Import",id:"import",children:[]},{value:"Usage",id:"usage",children:[{value:"Icon component",id:"icon-component",children:[]}]}],h={toc:m};function g(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"istallation"},"Istallation"),(0,a.kt)("p",null,'If you wish to use our icons in your project, we have npm package named "erxes-icon" which you can install with:'),(0,a.kt)(s,{type:"install",mdxType:"IconComponent"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"Include popular icons in your projects easily with erxes-icon. Import icons by following code."),(0,a.kt)(s,{type:"code",mdxType:"IconComponent"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,'Add icon to your component to create web or apps that easy to interact with. Refer below code to see how to use and  customize icon with erxes-ui\'s "Icon" component.'),(0,a.kt)("h3",{id:"icon-component"},"Icon component"),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"To display desired icon write it's name to ",(0,a.kt)("code",null,"icon")," prop."),(0,a.kt)(s,{type:"icon",iconName:"envelope-alt",mdxType:"IconComponent"}),(0,a.kt)("h4",{id:"color"},"Color"),(0,a.kt)("p",null,"Give color to icon by ",(0,a.kt)("code",null,"color")," prop."),(0,a.kt)(s,{type:"color",iconName:"envelope-alt",colors:"red",mdxType:"IconComponent"}),(0,a.kt)("h4",{id:"active"},"Active"),(0,a.kt)("p",null,"When there's ",(0,a.kt)("code",null,"active")," prop, it displays black icon."),(0,a.kt)(s,{type:"active",iconName:"envelope-alt",colors:"red",active:!0,mdxType:"IconComponent"}),(0,a.kt)("h4",{id:"size"},"Size"),(0,a.kt)("p",null,"Change icon size by ",(0,a.kt)("code",null,"size")," prop."),(0,a.kt)(s,{type:"size",iconName:"envelope-alt",sizes:30,mdxType:"IconComponent"}),(0,a.kt)("h4",{id:"api"},"API"),(0,a.kt)(s,{type:"APIicon",table:[["icon*","string","","Define icon"],["size","number","","Changes icon size"],["style","any","","Gives custom style to icon"],["color","string","black","Changes icon color"],["isActive","boolean","false","Make the icon color black"],["onClick","function","","Define click handler function"]],mdxType:"IconComponent"}))}g.isMDXComponent=!0},54656:function(n,e,t){"use strict";var o,r=t(67294),i=t(29163),a=t(131),c=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=function(){return(l=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},p=t.n(a)()(i.ZP.i)(o||(o=c(["\n  font-size: ",";\n  color: ",";\n"],["\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.size?n.size+"px":"inherit"}),(function(n){return n.color&&n.color}));e.Z=function(n){var e=n.isActive,t=n.color||"";return e&&(t="black"),r.createElement(p,l({},n,{className:"icon-"+n.icon,color:t}))}},65634:function(n,e,t){"use strict";t.d(e,{II:function(){return I},bL:function(){return E},Ph:function(){return Z},Kx:function(){return S},Y8:function(){return M},XZ:function(){return N},lX:function(){return B},__:function(){return P},wX:function(){return C},A0:function(){return A},jj:function(){return T},Ex:function(){return U}});var o,r,i,a,c,l,p,s,d,u,m,h,g,f,b=t(45949),x=t(29163),y=t(131),k=t.n(y),w=t(89816),v=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},O="15px",z="12px",_="34px",P=k()(x.ZP.label)(o||(o=v(["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"],["\n  text-transform: ",";\n  display: inline-block;\n  font-weight: ",";\n  color: ",";\n  font-size: ","px;\n\n  > span {\n    color: ",";\n  }\n"])),(function(n){return n.uppercase?"uppercase":"none"}),w.cp.fontWeightMedium,w.O9.textPrimary,w.cp.fontSizeUppercase,w.O9.colorCoreRed),C=k()(x.ZP.div)(i||(i=v(["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"],["\n  margin-bottom: 20px;\n  position: relative;\n\n  ",";\n\n  > label {\n    margin-right: ","px;\n  }\n\n  p {\n    font-size: 12px;\n    color: ",";\n    margin-bottom: 5px;\n  }\n"])),(function(n){return n.horizontal&&(0,x.iv)(r||(r=v(["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "],["\n      display: flex;\n      align-items: center;\n\n      label {\n        margin-bottom: 0;\n        margin-left: 10px;\n      }\n    "])))}),w.MB.unitSpacing,w.O9.colorCoreGray),I=k()(x.ZP.input)(a||(a=v(["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"],["\n  display: block;\n  border: none;\n  width: 100%;\n  height: ",";\n  padding: ","px 0;\n  color: ",";\n  border-bottom: 1px solid;\n  border-color:",";\n  background: none;\n  transition: all 0.3s ease;\n\n  ",";\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n\n  ::placeholder {\n    color: #aaa;\n  }\n"])),_,w.MB.unitSpacing,w.O9.textPrimary,(function(n){return n.hasError?w.O9.colorCoreRed:w.O9.colorShadowGray}),(function(n){return n.round?"\n        font-size: 13px;\n        border: 1px solid "+w.O9.borderDarker+";\n        border-radius: 20px;\n        padding: 5px 20px;\n      ":""}),w.O9.colorLightGray,w.O9.colorSecondary),E=k()(x.ZP.div)(c||(c=v(["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"],["\n  overflow: hidden;\n  border-bottom: 1px solid ",";\n  width: 100%;\n  height: ",";\n  position: relative;\n\n  &:after {\n    position: absolute;\n    right: 5px;\n    top: 12px;\n    content: '\\\\e9a6';\n    font-size: 14px;\n    display: inline-block;\n    font-family: 'erxes';\n    speak: none;\n    color: ",";\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n  }\n"])),(function(n){return n.hasError?w.O9.colorCoreRed:w.O9.colorShadowGray}),_,w.O9.colorCoreGray),Z=(0,x.ZP)(I.withComponent("select"))(l||(l=v(["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"],["\n  border: none;\n  height: ",";\n  padding: 0;\n  width: calc(100% + ","px);\n  -webkit-appearance: none;\n"])),_,w.MB.coreSpacing),S=k()((0,x.ZP)(I.withComponent("textarea")))(p||(p=v(["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"],["\n  transition: none;\n  max-height: ",";\n  min-height: 80px;\n  resize: none;\n"])),(function(n){return n.maxHeight&&n.maxHeight+"px"})),B=x.ZP.label(s||(s=v(["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  font-weight: normal;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n  }\n"]))),j=k()(x.ZP.input)(d||(d=v(["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"],["\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  clip-path: inset(50%) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important;\n  white-space: nowrap !important;\n  cursor: ","\n\n  &:focus {\n    + span {\n      &::before {\n        box-shadow: 0 0 0 2px rgba(#333, 0.4) !important;\n      }\n    }\n  }\n\n  &:hover {\n    + span {\n      &::before {\n        border-color: ",";\n      }\n    }\n  }\n\n  &:active {\n    + span {\n      &::before {\n        transition-duration: 0;\n      }\n    }\n  }\n\n  + span {\n    position: relative;\n    padding: ",";\n    user-select: none;\n\n    &:before {\n      background-color: ",";\n      border: "," solid ",";\n      box-sizing: content-box;\n      content: '';\n      color: ",";\n      margin-right: calc("," * 0.25);\n      top: 53%;\n      left: 0;\n      width: ",";\n      height: ",";\n      display: inline-block;\n      vertical-align: text-top;\n      border-radius: 2px;\n      cursor: ","\n    }\n\n    &:after {\n      box-sizing: content-box;\n      content: '';\n      background-color: ",";\n      position: absolute;\n      top: 56%;\n      left: calc("," + "," + "," / 2);\n      width: calc("," - ",");\n      height: calc("," - ",");\n      margin-top: calc(("," - ",") / -2);\n      transform: scale(0);\n      transform-origin: 51%;\n      transition: transform 200ms ease-out;\n    }\n  }\n\n  + span:last-child:before {\n    margin-right: 0px;\n  }\n"])),(function(n){return n.disabled&&"not-allowed"}),(function(n){return n.color?n.color:w.O9.colorLightGray}),"0px",w.O9.colorWhite,"2px",(function(n){return n.color?(0,b.m4)(n.color,.7):w.O9.colorShadowGray}),w.O9.colorWhite,O,O,O,(function(n){return n.disabled&&"not-allowed"}),w.O9.colorWhite,"0px","2px",z,O,z,O,z,O,z),M=(0,x.ZP)(j)(u||(u=v(["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"],["\n  + span {\n    &::before,\n    &::after {\n      border-radius: 50%;\n    }\n  }\n\n  &:checked {\n    &:active,\n    &:focus {\n      + span {\n        &::before {\n          animation: none;\n          filter: none;\n          transition: none;\n        }\n      }\n    }\n\n    + span {\n      &:before {\n        animation: none;\n        background-color: ",";\n        border-color: transparent;\n      }\n\n      &:after {\n        transform: scale(1);\n      }\n    }\n  }\n"])),w.O9.colorSecondary),N=k()((0,x.ZP)(j))(m||(m=v(["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"],["\n  + span {\n    &:after {\n      background-color: transparent;\n      top: 53%;\n      left: calc(1px + "," / 5);\n      width: calc("," / 2);\n      height: calc("," / 5);\n      margin-top: calc("," / -2 / 2 * 0.8);\n      border-style: solid;\n      border-color: ",";\n      border-width: 0 0 2px 2px;\n      border-radius: 0;\n      border-image: none;\n      transform: rotate(-45deg) scale(0);\n      transition: none;\n    }\n  }\n\n  &:checked + span {\n    &:before {\n      animation: none;\n      background-color: ",";\n      border-color: transparent;\n    }\n\n    &:after {\n      content: '';\n      transform: rotate(-45deg) scale(1);\n      transition: transform 200ms ease-out;\n    }\n  }\n"])),O,O,O,O,w.O9.colorWhite,(function(n){return n.color?n.color:w.O9.colorSecondary})),T=x.ZP.label(h||(h=v(["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"],["\n  color: ",";\n  margin-top: ","px;\n  display: block;\n  font-size: 12px;\n"])),w.O9.colorCoreRed,w.MB.unitSpacing-3),A=x.ZP.span(g||(g=v(["\n  flex: 1;\n"],["\n  flex: 1;\n"]))),U=x.ZP.div(f||(f=v(["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"],["\n  width: 100%;\n  margin-bottom: ","px;\n\n  span {\n    margin-right: ","px;\n  }\n\n  b {\n    margin-right: ","px;\n  }\n\n  & > div {\n    margin-bottom: 5px;\n    border-radius: 5px;\n  }\n"])),w.MB.unitSpacing,w.MB.unitSpacing,w.MB.unitSpacing)},69713:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var o,r,i,a=t(67294),c=t(29163),l=t(131),p=t.n(l),s=t(89816),d=t(65634),u=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},m=p()(c.ZP.table)(r||(r=u(["\n  ",";\n"],["\n  ",";\n"])),(function(n){return(0,c.iv)(o||(o=u(["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "],["\n    width: 100%;\n    max-width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    white-space: ",";\n\n    th,\n    td {\n      border-top: 1px solid ",";\n      color: ",";\n      padding: ","px;\n      display: table-cell;\n      vertical-align: ",";\n\n      & ",", & "," {\n        margin: 0px;\n      }\n    }\n\n    thead {\n      th,\n      td {\n        text-transform: uppercase;\n        color: ",";\n        font-size: ","px;\n      }\n\n      th {\n        background-color: ",";\n        position: sticky;\n        z-index: 1;\n        top: 0;\n      }\n    }\n\n    "," "," "," th {\n      border-top: none;\n    }\n\n    th:first-child,\n    td:first-child {\n      border-left: none;\n    }\n\n    th:last-child,\n    td:last-child {\n      border-right: none;\n      text-align: right;\n    }\n\n    td.with-input {\n      text-align: center;\n    }\n\n    .with-input input {\n      width: 40px;\n      text-align: center;\n      outline: 0;\n      border: 1px solid ",";\n      border-radius: 2px;\n      font-size: 12px;\n      height: 24px;\n    }\n\n    @media (min-width: 1170px) {\n      th,\n      td {\n        padding: ","px ","px;\n\n        &:first-child {\n          padding-left: ","px;\n        }\n\n        &:last-child {\n          padding-right: ","px;\n        }\n      }\n    }\n  "])),n.whiteSpace||"",s.O9.borderPrimary,s.O9.textPrimary,s.MB.unitSpacing-2,n.alignTop&&"top",d.lX,d.II,s.O9.colorCoreGray,s.cp.fontSizeUppercase,s.O9.bgLight,n.hover?"tr:hover td { background-color: #f5f5f5; }":null,n.bordered?"th, td { border-bottom: 1px solid "+s.O9.borderPrimary+"; }":null,n.striped?"tr:nth-of-type(odd) td { background-color: "+s.O9.bgLightPurple+"; }":null,s.O9.borderDarker,s.MB.unitSpacing-2,s.MB.coreSpacing-2,s.MB.coreSpacing,s.MB.coreSpacing)})),h=(i=function(n,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),g=function(){return(g=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},f=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return h(e,n),e.prototype.render=function(){return a.createElement(m,g({},this.props))},e.defaultProps={required:!1,striped:!1,bordered:!1,condensed:!1,hover:!1,responsive:!1,alignTop:!1},e}(a.Component)},60641:function(n,e){"use strict";e.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);