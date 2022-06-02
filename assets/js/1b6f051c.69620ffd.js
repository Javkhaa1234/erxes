(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4878],{82964:function(e,n,r){"use strict";r.d(n,{u:function(){return i},P:function(){return s}});var t=r(67294),o=r(60641),a=r(69713).Z,l=r(50210);function i(e,n){return t.createElement(t.Fragment,null,e&&t.createElement(l.Z,{className:"language-javascript"},"import "+e+' from "erxes-ui/lib/components/'+e+'";'),n&&t.createElement(t.Fragment,null,t.createElement("p",null,"required prop - ",t.createElement("span",{className:o.Z.required},"*")),t.createElement(a,null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Name"),t.createElement("th",null,"Type"),t.createElement("th",null,"Default"),t.createElement("th",null,"Description"))),t.createElement("tbody",null,n.map((function(e,n){return t.createElement("tr",{key:n},e.map((function(e,n){return t.createElement("td",{key:n},"*"===e[e.length-1]?t.createElement(t.Fragment,null,e.slice(0,-1),t.createElement("span",{className:o.Z.required},"*")):t.createElement(t.Fragment,null,e))})))}))))))}function s(e){var n=JSON.stringify(e);return n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},37290:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return m}});var t=r(74034),o=r(79973),a=r(67294),l=r(3905),i=r(47117),s=r(60641),c=r(45612),p=r(50210),u=r(82964);function d(e){var n=e.percentage,r=void 0===n?35:n,t=e.color,o=e.close,l=e.height,d=e.type,g=e.table,b=void 0===g?[]:g,m=function(e,n){return{percentage:r,color:t,close:o&&e,height:l}},h=function(e,n){return a.createElement(a.Fragment,null,a.createElement("div",{className:s.Z.styled},a.createElement(i.Z,m(n),"35%"),o&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null))),a.createElement(p.Z,{className:"language-jsx"},"<>\n\t<ProgressBar "+(r=m(e),(t=(t=(t=(t=(t=(t=(t=JSON.stringify(r)).replace(/35/g,"{35}")).replace(/{"/g,"")).replace(/":/g,"=")).slice(0,t.length-1)).replace(/,"/g," ")).replace(/"</g,"{<")).replace(/>"/g,">}")+">35%</ProgressBar>\n</>")));var r,t};return o?h("<Button>Close button</Button>",a.createElement(c.Z,null,"Close button")):"APIprogressbar"===d?(0,u.u)("ProgressBar",b):h()}var g={id:"progressbar",title:"Progress Bar"},b={unversionedId:"components/ProgressBar/progressbar",id:"components/ProgressBar/progressbar",isDocsHomePage:!1,title:"Progress Bar",description:"Provide progress bar to check work progress.",source:"@site/docs/components/ProgressBar/progressbar.md",sourceDirName:"components/ProgressBar",slug:"/components/ProgressBar/progressbar",permalink:"/components/ProgressBar/progressbar",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/components/ProgressBar/progressbar.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1638773199,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"progressbar",title:"Progress Bar"},sidebar:"components",previous:{title:"Pagination",permalink:"/components/Pagination/pagination"},next:{title:"Sortable list",permalink:"/components/SortableList/sortablelist"}},m=[{value:"Percentage",id:"percentage",children:[]},{value:"Color",id:"color",children:[]},{value:"Height",id:"height",children:[]},{value:"Close",id:"close",children:[]},{value:"API",id:"api",children:[]}],h={toc:m};function f(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Provide progress bar to check work progress."),(0,l.kt)("h2",{id:"percentage"},"Percentage"),(0,l.kt)("p",null,"Add percentage by ",(0,l.kt)("code",null,"percentage")," prop. Add text by ",(0,l.kt)("code",null,"children")," prop. "),(0,l.kt)(d,{mdxType:"ProgressBarComponent"}),(0,l.kt)("h2",{id:"color"},"Color"),(0,l.kt)("p",null,"Set the custom color by ",(0,l.kt)("code",null,"color")," prop. "),(0,l.kt)(d,{color:"pink",mdxType:"ProgressBarComponent"}),(0,l.kt)("h2",{id:"height"},"Height"),(0,l.kt)("p",null,"Set the custom height by ",(0,l.kt)("code",null,"height")," prop. "),(0,l.kt)(d,{height:"20px",mdxType:"ProgressBarComponent"}),(0,l.kt)("h2",{id:"close"},"Close"),(0,l.kt)("p",null,"Add close content by ",(0,l.kt)("code",null,"close")," prop. "),(0,l.kt)(d,{height:"20px",close:!0,mdxType:"ProgressBarComponent"}),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)(d,{type:"APIprogressbar",table:[["children","React.ReactNode","","Shows content on progress bar"],["close","React.ReactNode","","Displays the close element on bottom of the progress bar"],["percentage*","number","","Sets percentage of the progress bar"],["color","string","#dddeff","Sets color of the progress"],["height","string","36px","Sets height of the progress bar"]],mdxType:"ProgressBarComponent"}))}f.isMDXComponent=!0},45612:function(e,n,r){"use strict";var t,o,a,l,i,s,c,p=r(92524),u=r(67294),d=r(29163),g=r(131),b=r.n(g),m=r(89816),h=r(45949),f=r(54656),y=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},k=(t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])})(e,n)},function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),x=function(){return(x=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},_=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r},P={default:{background:m.O9.colorPrimary},primary:{background:m.O9.colorSecondary,border:(0,h._j)(m.O9.colorSecondary,20)},success:{background:m.O9.colorCoreGreen},danger:{background:m.O9.colorCoreRed},warning:{background:m.O9.colorCoreYellow,border:(0,h._j)(m.O9.colorCoreYellow,25)},simple:{background:"rgba(0,0,0,0.05)",color:m.O9.colorCoreGray,border:m.O9.colorCoreGray},link:{background:"transparent",color:m.O9.colorCoreGray}},v={large:{padding:"10px 30px",fontSize:"13px"},medium:{padding:"7px 20px",fontSize:"12px"},small:{padding:"5px 15px",fontSize:"10px"}},O=b()(d.ZP.button)(a||(a=y(["\n  border-radius: 30px;\n  position: relative;\n  transition: all 0.3s ease;\n  outline: 0;\n\n  ",";\n\n  a {\n    color: ",";\n  }\n\n  & + button,\n  + a,\n  + span {\n    margin-left: 10px;\n  }\n\n  > i + span,\n  > span + i,\n  > span i {\n    margin-left: 5px;\n  }\n"],["\n  border-radius: 30px;\n  position: relative;\n  transition: all 0.3s ease;\n  outline: 0;\n\n  ",";\n\n  a {\n    color: ",";\n  }\n\n  & + button,\n  + a,\n  + span {\n    margin-left: 10px;\n  }\n\n  > i + span,\n  > span + i,\n  > span i {\n    margin-left: 5px;\n  }\n"])),(function(e){return(0,d.iv)(o||(o=y(["\n    padding: ",";\n    background: ",";\n    font-size: ",";\n    text-transform: ",";\n    color: "," !important;\n    border: none;\n    display: ",";\n    width: ",";\n    font-weight: ",";\n\n    &:hover {\n      cursor: pointer;\n      text-decoration: none;\n      color: ",";\n      background: ",";\n    }\n\n    &:active,\n    &:focus {\n      box-shadow: ",";\n      box-shadow: ",";\n    }\n\n    &:disabled {\n      cursor: not-allowed !important;\n      opacity: 0.75;\n    }\n  "],["\n    padding: ",";\n    background: ",";\n    font-size: ",";\n    text-transform: ",";\n    color: "," !important;\n    border: none;\n    display: ",";\n    width: ",";\n    font-weight: ",";\n\n    &:hover {\n      cursor: pointer;\n      text-decoration: none;\n      color: ",";\n      background: ",";\n    }\n\n    &:active,\n    &:focus {\n      box-shadow: ",";\n      box-shadow: ",";\n    }\n\n    &:disabled {\n      cursor: not-allowed !important;\n      opacity: 0.75;\n    }\n  "])),v[e.hugeness].padding,P[e.btnStyle].background,e.uppercase?v[e.hugeness].fontSize:"calc("+v[e.hugeness].fontSize+" + 1px)",e.uppercase?"uppercase":"none",P[e.btnStyle].color?P[e.btnStyle].color:m.O9.colorWhite,e.block&&"block",e.block&&"100%",!e.uppercase&&"500",P[e.btnStyle].color&&(0,h._j)(P[e.btnStyle].color,35),"link"!==e.btnStyle&&""+(0,h._j)(P[e.btnStyle].background,20),P[e.btnStyle].border?"0 0 0 0.2rem "+(0,h.$n)(P[e.btnStyle].border,65):"0 0 0 0.2rem "+(0,h.$n)(P[e.btnStyle].background,65),"link"===e.btnStyle&&"none")}),m.O9.colorWhite),S=b()((0,d.ZP)(O.withComponent("a")))(i||(i=y(["\n  text-decoration: inherit;\n  text-align: center;\n\n  ",";\n"],["\n  text-decoration: inherit;\n  text-align: center;\n\n  ",";\n"])),(function(e){return e.disabled&&(0,d.iv)(l||(l=y(["\n      cursor: not-allowed !important;\n      opacity: 0.75;\n\n      &:focus {\n        text-decoration: none;\n      }\n    "],["\n      cursor: not-allowed !important;\n      opacity: 0.75;\n\n      &:focus {\n        text-decoration: none;\n      }\n    "])))})),E=b()(d.ZP.div)(c||(c=y(["\n  position: relative;\n\n  button + a,\n  a + button {\n    margin-left: ",";\n  }\n\n  ",";\n"],["\n  position: relative;\n\n  button + a,\n  a + button {\n    margin-left: ",";\n  }\n\n  ",";\n"])),(function(e){return e.hasGap&&"10px"}),(function(e){return!e.hasGap&&(0,d.iv)(s||(s=y(["\n      button,\n      a {\n        margin: 0;\n      }\n\n      > button:not(:last-child),\n      > a:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-right: 1px solid rgba(0, 0, 0, 0.13);\n      }\n\n      > button:not(:first-child),\n      > a:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    "],["\n      button,\n      a {\n        margin: 0;\n      }\n\n      > button:not(:last-child),\n      > a:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        border-right: 1px solid rgba(0, 0, 0, 0.13);\n      }\n\n      > button:not(:first-child),\n      > a:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    "])))})),w=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(){var e=this.props,n=e.size,r=_(e,["size"]),t=r.href,o=r.children,a=r.ignoreTrans,l=r.icon,i=x(x({},r),{hugeness:n}),s=t?S:O,c=o;return!a&&"string"==typeof c&&p.__&&(c=(0,p.__)(c)),l?u.createElement(s,x({},i),u.createElement(f.Z,{icon:l}),c&&u.createElement("span",null,c)):u.createElement(s,x({},i),c)},n.Group=B,n.defaultProps={btnStyle:"default",size:"medium",block:!1,type:"button",uppercase:!1},n}(u.Component);function B(e){var n=e.children,r=e.hasGap,t=void 0===r||r;return u.createElement(E,{hasGap:t},n)}n.Z=w},60641:function(e,n){"use strict";n.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);