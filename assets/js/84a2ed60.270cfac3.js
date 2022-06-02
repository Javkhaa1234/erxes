(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6539],{82964:function(e,t,n){"use strict";n.d(t,{u:function(){return i},P:function(){return c}});var r=n(67294),l=n(60641),a=n(69713).Z,o=n(50210);function i(e,t){return r.createElement(r.Fragment,null,e&&r.createElement(o.Z,{className:"language-javascript"},"import "+e+' from "erxes-ui/lib/components/'+e+'";'),t&&r.createElement(r.Fragment,null,r.createElement("p",null,"required prop - ",r.createElement("span",{className:l.Z.required},"*")),r.createElement(a,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:t},e.map((function(e,t){return r.createElement("td",{key:t},"*"===e[e.length-1]?r.createElement(r.Fragment,null,e.slice(0,-1),r.createElement("span",{className:l.Z.required},"*")):r.createElement(r.Fragment,null,e))})))}))))))}function c(e){var t=JSON.stringify(e);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},28207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k},frontMatter:function(){return _},metadata:function(){return b},toc:function(){return v}});var r=n(74034),l=n(79973),a=n(67294),o=n(3905),i=n(29558),c=n(54656),u=n(92524),s=n(5977),p=n(45428),d=n(71939);var m=(0,s.EN)((function(e){var t=e.history,n=e.tags,r=e.counts,l=e.manageUrl,o=e.loading,s=a.createElement(a.Fragment,null,a.createElement(p.rU,{to:l},a.createElement(c.Z,{icon:"cog"})),u.Nd.getParam(t,"tag")&&a.createElement("a",{href:"#cancel",tabIndex:0,onClick:function(){u.Nd.setParams(t,{tag:null})}},a.createElement(c.Z,{icon:"times-circle"})));return a.createElement(d.Z,{extraButtons:s,title:(0,u.__)("Filter by tags"),collapsible:n.length>7,name:"showFilterByTags"},a.createElement(i.Z,{fields:n,paramKey:"tag",counts:r,icon:"tag-alt",loading:o,treeView:!0}))})),g=n(50210),f=n(60641),y=n(69713),h=n(82964);function E(e){var t=e.type,n=e.related,r=["First test","Second test","Third test"],l=["red","blue","green"],o=[];"color"===t?r.map((function(e,t){o.push({_id:t.toString(),name:e,colorCode:l[t]})})):r.map((function(e,t){o.push({_id:t.toString(),name:e})}));var i,c,u=[{_id:"0",name:"Parent 1"},{_id:"1",name:"Parent 2"},{_id:"2",parentId:"0",name:"Child of parent 1"},{_id:"3",parentId:"1",name:"Child of parent 2"},{_id:"4",parentId:"1",name:"Child of parent 2"}],s=[{_id:"0",name:"Parent 1",relatedIds:[2]},{_id:"1",name:"Parent 2",relatedIds:[3,4]},{_id:"2",parentId:"0",name:"Child of parent 1"},{_id:"3",parentId:"1",name:"Child of parent 2"},{_id:"4",parentId:"1",name:"Child of parent 2"}],p=function(){return{counts:"cnt"===t?[1,2,3]:n?[1,2,3,4,5]:[],manageUrl:"manage"===t&&"/",loading:"load"===t&&!0,tags:"tree"===t?n?s:u:"empty"===t?[]:o}};return"undefined"==typeof window?null:"APIcountsbytag"===t?a.createElement(a.Fragment,null,(0,h.u)("CountsByTag"),a.createElement("p",null,"required prop - ",a.createElement("span",{className:f.Z.required},"*")),a.createElement(y.Z,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:"2"},"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Defualt"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{rowSpan:"5"},"tags",a.createElement("span",{className:f.Z.required},"*")," (array)"),a.createElement("td",null,"_id"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define id")),a.createElement("tr",null,a.createElement("td",null,"name"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define name")),a.createElement("tr",null,a.createElement("td",null,"colorCode"),a.createElement("td",null,"number"),a.createElement("td",null),a.createElement("td",null,"Add custom color")),a.createElement("tr",null,a.createElement("td",null,"parentId"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define parent id")),a.createElement("tr",null,a.createElement("td",null,"relatedIds"),a.createElement("td",null,"array"),a.createElement("td",null),a.createElement("td",null,"Define related tags' ids")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"counts",a.createElement("span",{className:f.Z.required},"*")),a.createElement("td",null,"any"),a.createElement("td",null),a.createElement("td",null,"Define count numbers of tags")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"loading",a.createElement("span",{className:f.Z.required},"*")),a.createElement("td",null,"boolean"),a.createElement("td",null),a.createElement("td",null,"Activates loading spinner")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"manageUrl",a.createElement("span",{className:f.Z.required},"*")),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define url for manage icon"))))):a.createElement(a.Fragment,null,a.createElement("div",{className:f.Z.styled},a.createElement(m,p())),a.createElement(g.Z,{className:"language-jsx"},"<>\n\t<CountsByTag "+(i=p(),(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=(c=JSON.stringify(i)).replace(/{"/g,"{")).replace(/":/g,":")).replace(/,"/g,", ")).replace(/, manageUrl:false/g,"")).replace(/, loading:false/g,"")).replace(/, loading:true/g," loading")).replace(/, manageUrl:/g," manageUrl=")).replace(/},/g,"},")).replace(/counts:/g," counts={")).replace(/{_/g,"\n\t\t{_")).replace(/, tags:/g," tags={")).replace(/]}/g,"]}")).replace(/] /g,"]} ")).slice(1,c.length)+" />\n</>")))}var _={id:"countsbytag",title:"Counts by Tag"},b={unversionedId:"utilities/CountsByTag/countsbytag",id:"utilities/CountsByTag/countsbytag",isDocsHomePage:!1,title:"Counts by Tag",description:"The box, shows filter by tag.",source:"@site/docs/utilities/CountsByTag/countsbytag.md",sourceDirName:"utilities/CountsByTag",slug:"/utilities/CountsByTag/countsbytag",permalink:"/utilities/CountsByTag/countsbytag",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/utilities/CountsByTag/countsbytag.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1640076082,formattedLastUpdatedAt:"12/21/2021",frontMatter:{id:"countsbytag",title:"Counts by Tag"},sidebar:"components",previous:{title:"Collapse Content",permalink:"/utilities/CollapseContent/collapsecontent"},next:{title:"Filterable List",permalink:"/utilities/FilterableList/filterablelist"}},v=[{value:"Example",id:"example",children:[]},{value:"Empty",id:"empty",children:[]},{value:"Loading",id:"loading",children:[]},{value:"Color",id:"color",children:[]},{value:"Count",id:"count",children:[]},{value:"Tree View",id:"tree-view",children:[]},{value:"Related",id:"related",children:[]},{value:"Manage Url",id:"manage-url",children:[]},{value:"API",id:"api",children:[]}],C={toc:v};function k(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The box, shows filter by tag."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(E,{mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"empty"},"Empty"),(0,o.kt)("p",null,"When fields have no list it shows emptyState."),(0,o.kt)(E,{type:"empty",mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"loading"},"Loading"),(0,o.kt)("p",null,"Show loading spinner by ",(0,o.kt)("code",null,"loading")," prop."),(0,o.kt)(E,{type:"load",mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"color"},"Color"),(0,o.kt)("p",null,"Add custom color to icon by ",(0,o.kt)("code",null,"colorCode")," prop."),(0,o.kt)(E,{type:"color",mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"count"},"Count"),(0,o.kt)("p",null,"Show count numbers by giving them to ",(0,o.kt)("code",null,"counts")," prop."),(0,o.kt)(E,{type:"cnt",mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"tree-view"},"Tree View"),(0,o.kt)("p",null,"Show tree view list by ",(0,o.kt)("code",null,"treeView")," prop. Fields should have ",(0,o.kt)("code",null,"_id")," and ",(0,o.kt)("code",null,"parentId"),"."),(0,o.kt)(E,{type:"tree",mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("p",null,"Find sum of all the related items by id with ",(0,o.kt)("code",null,"relatedIds")," prop. It shows on the item, defined the ",(0,o.kt)("code",null,"relatedId")," prop."),(0,o.kt)(E,{type:"tree",related:!0,mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"manage-url"},"Manage Url"),(0,o.kt)("p",null,"Define url for managing icon with ",(0,o.kt)("code",null,"manageUrl")," prop."),(0,o.kt)(E,{type:"manage",mdxType:"CountsByTagComponent"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)(E,{type:"APIcountsbytag",mdxType:"CountsByTagComponent"}))}k.isMDXComponent=!0},71939:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,l=n(67294),a=n(54656),o=n(80951),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function c(e){var t=e.children,n=e.onClick;return l.createElement(o.R8,{onClick:n},t)}function u(e){var t=e.children,n=e.isSidebarOpen;return l.createElement(o.vW,{isSidebarOpen:n},t)}var s=function(e){function t(t){var n=e.call(this,t)||this;return n.toggleCollapse=function(){n.setState({collapse:!n.state.collapse})},n.renderCollapseButton=function(){var e=n.state.collapse?"angle-double-up":"angle-double-down";return l.createElement(o.m$,{tabIndex:0,onClick:n.toggleCollapse},l.createElement(a.Z,{icon:e}))},n.state={collapse:!1},n}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.collapsible,r=e.noShadow,a=e.noBackground,i=e.full,c=e.maxHeight,u=n?{maxHeight:this.state.collapse?void 0:c}:{};return l.createElement(o.j8,{collapsible:n,style:u,noShadow:r,noBackground:a,full:i},l.createElement(o.eS,null,t),n?this.renderCollapseButton():null)},t.defaultProps={maxHeight:255},t.Title=c,t.QuickButtons=u,t}(l.Component);function p(e){var t=e.children,n=e.spaceBottom,r=e.uppercase,a=e.bold;return l.createElement(o.$l,{spaceBottom:n,uppercase:r,bold:a},t)}function d(e){var t=e.children;return l.createElement(o.ZW,null,t)}var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.wide,r=e.header,a=e.footer,i=e.half,c=e.full;return l.createElement(o.cI,{half:i,wide:n,full:c},r,l.createElement(o.xz,null,t),a)},t.Header=p,t.Section=s,t.Footer=d,t}(l.Component),g=n(92524),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y="erxes_sidebar_section_config",h=function(e){function t(t){var n=e.call(this,t)||this;n.toggle=function(){var e=n.props,t=e.name,r=e.callback,l=n.state.isOpen;if(n.setState({isOpen:!l}),t){var a=(0,g.iE)(y)||{};return a[t]=!l,(0,g.v6)(y,a),r&&r()}};var r=t.name,l=t.isOpen,a=void 0!==l&&l,o=(0,g.iE)(y)||{};return n.state={isOpen:!!r&&(o[r]||a)},n}return f(t,e),t.prototype.renderDropBtn=function(){var e=this.state.isOpen,t=e?"angle-down":"angle-right",n=m.Section.QuickButtons,r=this.props.extraButtons;return l.createElement(l.Fragment,null,e&&r&&l.createElement(n,{isSidebarOpen:!0},r),l.createElement(o.WJ,{onClick:this.toggle},l.createElement(a.Z,{icon:t,size:16})))},t.prototype.render=function(){var e=m.Section,t=e.Title,n=this.state.isOpen,r=this.props,a=r.children,i=r.title,c=r.collapsible;return l.createElement(o.S$,null,l.createElement(t,{onClick:this.toggle},i),this.renderDropBtn(),n?l.createElement(e,{collapsible:c},a):null)},t}(l.Component)},68027:function(e,t,n){"use strict";var r,l=n(69061),a=n(16719),o=n(67294),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.showData=function(){var e=this.props,t=e.loading,n=e.count,r=e.data,i=e.emptyIcon,c=e.emptyImage,u=e.emptyText,s=e.size,p=e.objective,d=e.emptyContent,m=e.loadingContent;return t?m||o.createElement(a.Z,{objective:p}):0===n?d||o.createElement(l.Z,{text:u||"There is no data",size:s,icon:i,image:c}):r},t.prototype.render=function(){return this.showData()},t.defaultProps={emptyText:"There is no data",emptyIcon:"",emptyImage:"",size:"full",objective:!1},t}(o.Component);t.Z=c},29558:function(e,t,n){"use strict";var r,l=n(67294),a=n(5977),o=n(36007),i=n(80951),c=n(68027),u=n(69061),s=n(21973),p=n(54656),d=n(21730),m=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(t){var n=e.call(this,t)||this;return n.filterItems=function(e){n.setState({key:e.target.value});var t=n.props.update;t&&t()},n.onClick=function(e){var t,r,l=n.props,a=l.history,i=l.paramKey;if(l.multiple){var c=(0,o.getParam)(a,[i]),u=c?c.split(","):[];if(u.includes(e)){var s=u.indexOf(e);u.splice(s,1)}else u.push(e);(0,o.setParams)(a,((r={})[i]=u.toString(),r))}else(0,o.setParams)(a,((t={})[i]=e,t));(0,o.removeParams)(a,"page")},n.groupByParent=function(e){var t="parentId";return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})},n.onToggle=function(e,t){var r=n.state.parentFieldIds;r[e]=!t,n.setState({parentFieldIds:r})},n.state={key:"",parentFieldIds:{}},n}return m(t,e),t.prototype.getCount=function(e,t){var n=this.props.counts,r=n[e._id];if(!this.props.treeView||t)return r;if(e.relatedIds)for(var l=0,a=e.relatedIds||[];l<a.length;l++){r+=n[a[l]]}return r},t.prototype.renderItems=function(){var e=this,t=this.props,n=t.history,r=t.fields,a=t.paramKey,c=t.icon,m=t.searchable,g=t.multiple,f=t.treeView,y=this.state.key;if(0===r.length)return l.createElement(u.Z,{icon:c,text:"No templates",size:"full"});var h=function(t,r){if(y&&t.name.toLowerCase().indexOf(y)<0)return!1;if(!t._id||!t.name)return null;var u="",s=t._id,d=(0,o.getParam)(n,[a]);return(d===s||g&&d&&d.includes(s))&&(u="active"),l.createElement("li",{key:s,title:t.name},l.createElement("a",{href:"#param",tabIndex:0,className:u,onClick:e.onClick.bind(e,s)},c?l.createElement(p.Z,{icon:c,style:{color:t.colorCode}}):null," ",l.createElement(i.G9,null,t.name),l.createElement(i.Ic,null,e.getCount(t,r))))};return l.createElement(d.yk,null,m&&l.createElement(s.Z,{onChange:this.filterItems}),l.createElement(i.wb,null,function(){if(!f)return r.map((function(e){return h(e)}));var t=r.filter((function(e){return e.parentId})),n=r.filter((function(e){return!e.parentId})),a=e.groupByParent(t),o=function(t){var n=a[t._id];if(n){var r=e.state.parentFieldIds[t._id];return l.createElement(i.wb,{key:"parent-"+t._id},h(t,r),l.createElement(d.AS,null,l.createElement(d.Xs,{onClick:e.onToggle.bind(e,t._id,r)},l.createElement(p.Z,{icon:r?"angle-down":"angle-right"})),r&&n.map((function(e){return o(e)}))))}return h(t)};return n.map((function(e){return o(e)}))}()))},t.prototype.render=function(){var e=this.props,t=e.fields,n=e.loading;return l.createElement(c.Z,{loading:n,count:t.length,data:this.renderItems(),emptyText:"Empty",emptyIcon:"folder-2",size:"small",objective:!0})},t}(l.Component);t.Z=(0,a.EN)(g)},60641:function(e,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);