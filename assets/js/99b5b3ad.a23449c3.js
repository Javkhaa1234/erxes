(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1876],{82964:function(e,t,n){"use strict";n.d(t,{u:function(){return o},P:function(){return c}});var r=n(67294),l=n(60641),a=n(69713).Z,i=n(50210);function o(e,t){return r.createElement(r.Fragment,null,e&&r.createElement(i.Z,{className:"language-javascript"},"import "+e+' from "erxes-ui/lib/components/'+e+'";'),t&&r.createElement(r.Fragment,null,r.createElement("p",null,"required prop - ",r.createElement("span",{className:l.Z.required},"*")),r.createElement(a,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(e,t){return r.createElement("tr",{key:t},e.map((function(e,t){return r.createElement("td",{key:t},"*"===e[e.length-1]?r.createElement(r.Fragment,null,e.slice(0,-1),r.createElement("span",{className:l.Z.required},"*")):r.createElement(r.Fragment,null,e))})))}))))))}function c(e){var t=JSON.stringify(e);return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/{}/g,"")).replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")).replace(/"</g,"{<")).replace(/>"/g,">}")).replace(/true/g,"{true}")).replace(/false/g,"{false}")).replace(/null/g,"")}},80490:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(74034),l=n(79973),a=n(67294),i=n(3905),o=n(29558),c=n(50210),p=n(60641),m=n(69713),u=n(82964);function s(e){var t=e.type,n=e.color,r=e.related,l=["First test","Second test","Third test"],i=["red","blue","green"],s=[];n?l.map((function(e,t){s.push({_id:t.toString(),name:e,colorCode:i[t]})})):l.map((function(e,t){s.push({_id:t.toString(),name:e})}));var d=[{_id:"0",name:"Parent 1"},{_id:"1",name:"Parent 2"},{_id:"2",parentId:"0",name:"Child of parent 1"},{_id:"3",parentId:"1",name:"Child of parent 2"},{_id:"4",parentId:"1",name:"Child of parent 2"}],f=[{_id:"0",name:"Parent 1",relatedIds:[2]},{_id:"1",name:"Parent 2",relatedIds:[3,4]},{_id:"2",parentId:"0",name:"Child of parent 1"},{_id:"3",parentId:"1",name:"Child of parent 2"},{_id:"4",parentId:"1",name:"Child of parent 2"}],y=function(e){var n;return(n={paramKey:"tag",icon:"icon"===t&&"tag-alt",counts:r?[1,2,3,4,5]:[]})[e]="counts"!==e||[1,2,3],n.fields="tree"===t?r?f:d:"empty"===t?[]:s,n},E=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:p.Z.styled},a.createElement(o.Z,y(e))),a.createElement(c.Z,{className:"language-jsx"},"<>\n\t<FilterByParams "+(t=y(e),(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=JSON.stringify(t)).replace(/{"/g,"{")).replace(/":/g,":")).replace(/,"/g,", ")).replace(/, icon:false/g,"")).replace(/, undefined:true/g,"")).replace(/, isIndented:true}/g,"} isIndented={true}")).replace(/, loading:true/g," loading")).replace(/, treeView:true/g," treeView")).replace(/, multiple:true/g," multiple")).replace(/, searchable:true/g," searchable")).replace(/, icon:/g," icon=")).replace(/com"}],/g,'com"}]}')).replace(/},/g,"},")).replace(/paramKey:/g,"paramKey=")).replace(/, counts:/g," counts={")).replace(/{_/g,"\n\t\t{_")).replace(/, fields:/g," fields={")).replace(/]}/g,"]}")).replace(/] /g,"]} ")).slice(1,n.length)+" />\n</>")));var t,n};return"load"===t?E("loading"):"search"===t?E("searchable"):"count"===t?E("counts"):"multiple"===t?E("multiple"):"tree"===t?E("treeView"):"color"===t?E("color"):"APIfilterbyparams"===t?a.createElement(a.Fragment,null,(0,u.u)("FilterByParams"),a.createElement("p",null,"required prop - ",a.createElement("span",{className:p.Z.required},"*")),a.createElement(m.Z,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:"2"},"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Defualt"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{rowSpan:"5"},"fields",a.createElement("span",{className:p.Z.required},"*")),a.createElement("td",null,"_id"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define id")),a.createElement("tr",null,a.createElement("td",null,"name"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define name")),a.createElement("tr",null,a.createElement("td",null,"colorCode"),a.createElement("td",null,"number"),a.createElement("td",null),a.createElement("td",null,"Add custom color")),a.createElement("tr",null,a.createElement("td",null,"parentId"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define parent id")),a.createElement("tr",null,a.createElement("td",null,"relatedIds"),a.createElement("td",null,"array"),a.createElement("td",null),a.createElement("td",null,"Define related items' ids")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"counts",a.createElement("span",{className:p.Z.required},"*")),a.createElement("td",null,"any"),a.createElement("td",null),a.createElement("td",null,"Define count numbers of list items")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"paramKey",a.createElement("span",{className:p.Z.required},"*")),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Key, used when onClick function runs.")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"icon"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Add icon to list items")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"loading",a.createElement("span",{className:p.Z.required},"*")),a.createElement("td",null,"boolean"),a.createElement("td",null),a.createElement("td",null,"Activates loading spinner")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"searchable"),a.createElement("td",null,"boolean"),a.createElement("td",null),a.createElement("td",null,"Add search bar and make the list searchable")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"multiple"),a.createElement("td",null,"boolean"),a.createElement("td",null,"false"),a.createElement("td",null,"Make it possible to select multiple items")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"treeView"),a.createElement("td",null,"boolean"),a.createElement("td",null),a.createElement("td",null,"Activates tree view of list")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"update"),a.createElement("td",null,"boolean"),a.createElement("td",null),a.createElement("td",null,"Define function to filter items"))))):E()}var d={id:"filterbyparams",title:"Filter by Params"},f={unversionedId:"components/FilterByParams/filterbyparams",id:"components/FilterByParams/filterbyparams",isDocsHomePage:!1,title:"Filter by Params",description:"Simple list that can become searchable by parameters.",source:"@site/docs/components/FilterByParams/filterbyparams.md",sourceDirName:"components/FilterByParams",slug:"/components/FilterByParams/filterbyparams",permalink:"/components/FilterByParams/filterbyparams",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/components/FilterByParams/filterbyparams.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1639114692,formattedLastUpdatedAt:"12/10/2021",frontMatter:{id:"filterbyparams",title:"Filter by Params"},sidebar:"components",previous:{title:"File Preview",permalink:"/components/FilePreview/filepreview"},next:{title:"Help Popover",permalink:"/components/HelpPopOver/helppopover"}},y=[{value:"Example",id:"example",children:[]},{value:"Empty",id:"empty",children:[]},{value:"Loading",id:"loading",children:[]},{value:"Count",id:"count",children:[]},{value:"Multiple",id:"multiple",children:[]},{value:"Searchable",id:"searchable",children:[]},{value:"Icon",id:"icon",children:[]},{value:"Color",id:"color",children:[]},{value:"Tree view",id:"tree-view",children:[]},{value:"Related",id:"related",children:[]},{value:"API",id:"api",children:[]}],E={toc:y};function h(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Simple list that can become searchable by parameters."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(s,{mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"empty"},"Empty"),(0,i.kt)("p",null,"When fields have no list it shows emptyState."),(0,i.kt)(s,{type:"empty",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"loading"},"Loading"),(0,i.kt)("p",null,"Show loading spinner by ",(0,i.kt)("code",null,"loading")," prop."),(0,i.kt)(s,{type:"load",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"count"},"Count"),(0,i.kt)("p",null,"Show count numbers by giving them to ",(0,i.kt)("code",null,"counts")," prop."),(0,i.kt)(s,{type:"count",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"multiple"},"Multiple"),(0,i.kt)("p",null,"Make it possible to select multiple items by ",(0,i.kt)("code",null,"multiple")," prop."),(0,i.kt)(s,{type:"multiple",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"searchable"},"Searchable"),(0,i.kt)("p",null,"Add search bar on top of the list and make it searchable with ",(0,i.kt)("code",null,"searchable")," prop."),(0,i.kt)(s,{type:"search",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"icon"},"Icon"),(0,i.kt)("p",null,"Add avatar by ",(0,i.kt)("code",null,"icon")," prop."),(0,i.kt)(s,{type:"icon",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"color"},"Color"),(0,i.kt)("p",null,"Add custom color to icon by ",(0,i.kt)("code",null,"colorCode")," prop."),(0,i.kt)(s,{type:"icon",color:!0,mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"tree-view"},"Tree view"),(0,i.kt)("p",null,"Show tree view list by ",(0,i.kt)("code",null,"treeView")," prop. Fields should have ",(0,i.kt)("code",null,"_id")," and ",(0,i.kt)("code",null,"parentId"),"."),(0,i.kt)(s,{type:"tree",mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("p",null,"Find sum of all the related items by id with ",(0,i.kt)("code",null,"relatedIds")," prop. It shows on the item, defined the ",(0,i.kt)("code",null,"relatedId")," prop."),(0,i.kt)(s,{type:"tree",related:!0,mdxType:"FilterByParamsComponent"}),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)(s,{type:"APIfilterbyparams",mdxType:"FilterByParamsComponent"}))}h.isMDXComponent=!0},68027:function(e,t,n){"use strict";var r,l=n(69061),a=n(16719),i=n(67294),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.showData=function(){var e=this.props,t=e.loading,n=e.count,r=e.data,o=e.emptyIcon,c=e.emptyImage,p=e.emptyText,m=e.size,u=e.objective,s=e.emptyContent,d=e.loadingContent;return t?d||i.createElement(a.Z,{objective:u}):0===n?s||i.createElement(l.Z,{text:p||"There is no data",size:m,icon:o,image:c}):r},t.prototype.render=function(){return this.showData()},t.defaultProps={emptyText:"There is no data",emptyIcon:"",emptyImage:"",size:"full",objective:!1},t}(i.Component);t.Z=c},29558:function(e,t,n){"use strict";var r,l=n(67294),a=n(5977),i=n(36007),o=n(80951),c=n(68027),p=n(69061),m=n(21973),u=n(54656),s=n(21730),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.filterItems=function(e){n.setState({key:e.target.value});var t=n.props.update;t&&t()},n.onClick=function(e){var t,r,l=n.props,a=l.history,o=l.paramKey;if(l.multiple){var c=(0,i.getParam)(a,[o]),p=c?c.split(","):[];if(p.includes(e)){var m=p.indexOf(e);p.splice(m,1)}else p.push(e);(0,i.setParams)(a,((r={})[o]=p.toString(),r))}else(0,i.setParams)(a,((t={})[o]=e,t));(0,i.removeParams)(a,"page")},n.groupByParent=function(e){var t="parentId";return e.reduce((function(e,n){return(e[n[t]]=e[n[t]]||[]).push(n),e}),{})},n.onToggle=function(e,t){var r=n.state.parentFieldIds;r[e]=!t,n.setState({parentFieldIds:r})},n.state={key:"",parentFieldIds:{}},n}return d(t,e),t.prototype.getCount=function(e,t){var n=this.props.counts,r=n[e._id];if(!this.props.treeView||t)return r;if(e.relatedIds)for(var l=0,a=e.relatedIds||[];l<a.length;l++){r+=n[a[l]]}return r},t.prototype.renderItems=function(){var e=this,t=this.props,n=t.history,r=t.fields,a=t.paramKey,c=t.icon,d=t.searchable,f=t.multiple,y=t.treeView,E=this.state.key;if(0===r.length)return l.createElement(p.Z,{icon:c,text:"No templates",size:"full"});var h=function(t,r){if(E&&t.name.toLowerCase().indexOf(E)<0)return!1;if(!t._id||!t.name)return null;var p="",m=t._id,s=(0,i.getParam)(n,[a]);return(s===m||f&&s&&s.includes(m))&&(p="active"),l.createElement("li",{key:m,title:t.name},l.createElement("a",{href:"#param",tabIndex:0,className:p,onClick:e.onClick.bind(e,m)},c?l.createElement(u.Z,{icon:c,style:{color:t.colorCode}}):null," ",l.createElement(o.G9,null,t.name),l.createElement(o.Ic,null,e.getCount(t,r))))};return l.createElement(s.yk,null,d&&l.createElement(m.Z,{onChange:this.filterItems}),l.createElement(o.wb,null,function(){if(!y)return r.map((function(e){return h(e)}));var t=r.filter((function(e){return e.parentId})),n=r.filter((function(e){return!e.parentId})),a=e.groupByParent(t),i=function(t){var n=a[t._id];if(n){var r=e.state.parentFieldIds[t._id];return l.createElement(o.wb,{key:"parent-"+t._id},h(t,r),l.createElement(s.AS,null,l.createElement(s.Xs,{onClick:e.onToggle.bind(e,t._id,r)},l.createElement(u.Z,{icon:r?"angle-down":"angle-right"})),r&&n.map((function(e){return i(e)}))))}return h(t)};return n.map((function(e){return i(e)}))}()))},t.prototype.render=function(){var e=this.props,t=e.fields,n=e.loading;return l.createElement(c.Z,{loading:n,count:t.length,data:this.renderItems(),emptyText:"Empty",emptyIcon:"folder-2",size:"small",objective:!0})},t}(l.Component);t.Z=(0,a.EN)(f)},60641:function(e,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);