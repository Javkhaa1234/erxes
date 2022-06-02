(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2070],{75507:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return E}});var l=n(74034),r=n(79973),a=n(67294),i=n(3905),s=n(98375),m=n(50210),c=n(69713),d=n(60641);function u(e){var t=e.taskstatus,n=e.type,l=function(){return{taskId:"timerTask",status:t,timeSpent:"started"===t?0:180,startDate:"started"===t&&new Date((new Date).getTime()),update:function(){}}};var r;return"undefined"==typeof window?null:"APItimer"===n?a.createElement(a.Fragment,null,a.createElement(m.Z,{className:"language-jsx"},'import TaskTimer from "erxes-ui/lib/components/Timer";'),a.createElement("p",null,"required prop - ",a.createElement("span",{className:d.Z.required},"*")),a.createElement(c.Z,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:"2"},"Name"),a.createElement("th",null,"Type"),a.createElement("th",null,"Defualt"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"taskId",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define task id")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"status",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"started | paused | stopped | completed"),a.createElement("td",null),a.createElement("td",null,"Define task status")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"timeSpent",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"number"),a.createElement("td",null),a.createElement("td",null,"Define time spent in task")),a.createElement("tr",null,a.createElement("td",{colSpan:"2"},"startDate"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define start date of task")),a.createElement("tr",null,a.createElement("td",{rowSpan:"5"},"update",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"_id",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define updated id")),a.createElement("tr",null,a.createElement("td",null,"status",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"started | paused | stopped | completed"),a.createElement("td",null),a.createElement("td",null,"Define update status")),a.createElement("tr",null,a.createElement("td",null,"timeSpent",a.createElement("span",{className:d.Z.required},"*")),a.createElement("td",null,"number"),a.createElement("td",null),a.createElement("td",null,"Define updated time spent")),a.createElement("tr",null,a.createElement("td",null,"startDate"),a.createElement("td",null,"string"),a.createElement("td",null),a.createElement("td",null,"Define update start date")),a.createElement("tr",null,a.createElement("td",null,"callback"),a.createElement("td",null,"function"),a.createElement("td",null),a.createElement("td",null,"Change task status "))))):a.createElement(a.Fragment,null,a.createElement(s.Z,l()),a.createElement(m.Z,{className:"language-jsx"},"<>\n\t<TaskTimer "+(r=l(),JSON.stringify(r).replace(/{"/g,"").replace(/":/g,"=").replace(/,"/g," ").replace(/}/g,"").replace(/startDate=false/g,"").replace(/180/g,"{180}").replace(/timeSpent=0/g,"timeSpent={0}")+" />\n</>")))}var o={id:"timer",title:"Timer"},p={unversionedId:"utilities/Timer/timer",id:"utilities/Timer/timer",isDocsHomePage:!1,title:"Timer",description:"Click any button to check actions.",source:"@site/docs/utilities/Timer/timer.md",sourceDirName:"utilities/Timer",slug:"/utilities/Timer/timer",permalink:"/utilities/Timer/timer",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/utilities/Timer/timer.md",version:"current",lastUpdatedBy:"enkhzule",lastUpdatedAt:1640076082,formattedLastUpdatedAt:"12/21/2021",frontMatter:{id:"timer",title:"Timer"},sidebar:"components",previous:{title:"Steps",permalink:"/utilities/Step/Steps/steps"},next:{title:"Rule",permalink:"/utilities/Rule/rule"}},E=[{value:"Completed time tracking",id:"completed-time-tracking",children:[]},{value:"Started time tracking",id:"started-time-tracking",children:[]},{value:"Paused time tracking",id:"paused-time-tracking",children:[]},{value:"Stopped time tracking",id:"stopped-time-tracking",children:[]},{value:"API",id:"api",children:[]}],k={toc:E};function g(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Click any button to check actions."),(0,i.kt)("h2",{id:"completed-time-tracking"},"Completed time tracking"),(0,i.kt)("p",null,"Completed timer will shown as below."),(0,i.kt)(u,{taskstatus:"completed",mdxType:"TimerComponent"}),(0,i.kt)("h2",{id:"started-time-tracking"},"Started time tracking"),(0,i.kt)("p",null,"Started timer will shown as below. "),(0,i.kt)(u,{taskstatus:"started",mdxType:"TimerComponent"}),(0,i.kt)("h2",{id:"paused-time-tracking"},"Paused time tracking"),(0,i.kt)("p",null,"Paused timer will shown as below."),(0,i.kt)(u,{taskstatus:"paused",mdxType:"TimerComponent"}),(0,i.kt)("h2",{id:"stopped-time-tracking"},"Stopped time tracking"),(0,i.kt)("p",null,"Stopped timer will shown as below."),(0,i.kt)(u,{taskstatus:"stopped",mdxType:"TimerComponent"}),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)(u,{type:"APItimer",mdxType:"TimerComponent"}))}g.isMDXComponent=!0},60641:function(e,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}}}]);