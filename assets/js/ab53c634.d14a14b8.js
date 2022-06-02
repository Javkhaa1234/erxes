(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5408,7420],{82924:function(e,t,n){"use strict";var a=n(67294).createContext(void 0);t.Z=a},85350:function(e,t,n){"use strict";var a=n(67294),r=n(82924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},6437:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var a=n(67294),r=n(44996),o=n(36742),i=n(60641),s=n(94184),c=n.n(s),l=function(){return a.createElement("div",{className:i.Z.buttons},a.createElement(o.Z,{className:c()("button button--primary button--lg",i.Z.getStarted),to:(0,r.Z)("overview/getting-started/")},"Get Started"),a.createElement(o.Z,{href:"https://github.com/erxes/erxes/discussions ",className:c()("button button--outline button--primary button--lg",i.Z.getStarted)},"Join Our Community"))}},5618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(67294),r=n(94184),o=n.n(r),i=n(48648),s=n(52263),c=n(6437),l=n(99578),u=n(99105);function d(){(0,a.useEffect)((function(){var e=document.createElement("script");return e.src="https://w.office.erxes.io/build/formWidget.bundle.js",e.async=!0,document.body.appendChild(e),window.erxesSettings={forms:[{brand_id:"ZJ7bSh",form_id:"r57v72"}]},function(){document.body.removeChild(e)}}),[]);var e=(0,s.default)().siteConfig,t=void 0===e?{}:e,n=t.tagline,r=t.url,d=t.favicon,m=r+"/img/default.jpg";return a.createElement(i.Z,{title:"Agency App and Web Developers",description:n,ogImage:m,url:r,favicon:d},a.createElement(u.Z,null,a.createElement("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"})),a.createElement("header",{id:"hero",className:o()("hero hero--primary",l.Z.heroBanner)},a.createElement("div",{className:"container"},a.createElement("div",{className:l.Z.header},a.createElement("h1",{className:l.Z.headingOne},"Agency App and Web Developers")))),a.createElement("main",null,a.createElement("div",{className:"container container-sm"},a.createElement("section",{className:l.Z.section},a.createElement("p",null,"When you sign-up to the newsletter below, you experience the exact same erxes experience that your customers and clients will. For one, we will automatically add you to a segmented list so that we only send you emails that you will be interested in, then you will subscribed to a short series of emails exploring erxes and how erxes can help you quite literally add extra money to each client transaction, improve your customer experience and help you to integrate erxes into your own app and website as simple integrations."),a.createElement("p",null,"After the short email series is over, you get occasional emails about erxes. And of course, you can opt-out of any emails from us whenever you want."),a.createElement("p",null,"We recommend signing up with the same email address that you are likely to use when you download and demo erxes."),a.createElement("div",{"data-erxes-embed":"r57v72",className:l.Z.subscribe})))),a.createElement("div",{className:l.Z.cta},a.createElement(c.E,null)))}},6979:function(e,t,n){"use strict";var a=n(67294),r=n(94184),o=n.n(r),i=n(52263),s=n(5977),c=n(2644);t.Z=function(e){var t=(0,a.useState)(!1),r=t[0],l=t[1],u=(0,a.useRef)(null),d=(0,i.default)().siteConfig,m=(void 0===d?{}:d).themeConfig.algolia,p=(0,s.k6)(),h=(0,c.Z)().navigateToSearchPage;var f=function(e){void 0===e&&(e=!0),r||Promise.all([Promise.all([n.e(4362),n.e(5525)]).then(n.t.bind(n,14362,23)),Promise.all([n.e(532),n.e(3343)]).then(n.bind(n,53343))]).then((function(t){var n=t[0].default;l(!0),window.docsearch=n,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,t,n){t.stopPropagation();var a=document.createElement("a");a.href=n.url;var r="#__docusaurus"===a.hash?""+a.pathname:""+a.pathname+a.hash;p.push(r)}}),e&&u.current.focus()}(e)}))},b=(0,a.useCallback)((function(){f(),r&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),_=(0,a.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=(0,a.useCallback)((function(e){var t="mouseover"!==e.type;f(t)})),y=(0,a.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||h(e.target.value)}));return a.createElement("div",{className:"navbar__search",key:"search-box"},a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:_,onKeyDown:y,ref:u}))}},60641:function(e,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax",sortHandlerContainer:"sortHandlerContainer_1ei3",blueP:"blueP__d2Y",TipsContainer:"TipsContainer_u6UJ",bigContainer:"bigContainer_26LP",required:"required_3y-p",iconButton:"iconButton_3UNH",searchBar:"searchBar_26hY",test:"test_1ZxE",smBox:"smBox_28BN",sizeBox:"sizeBox_3Wh4",datecontrol:"datecontrol_2iyS",formborder:"formborder_2Ad9",controllabel:"controllabel_CiyA"}},99578:function(e,t){"use strict";t.Z={heroBanner:"heroBanner_3P7f",header:"header_2zn2",headingOne:"headingOne_3QyX",headingTwo:"headingTwo_2KoI",flexCenter:"flexCenter_3vNA",description:"description_326Q",suggestion:"suggestion_2U70",cta:"cta_1SDS",section:"section_1DfF",list:"list_3APv",subscribe:"subscribe_3Njj",tableWrapper:"tableWrapper_y5VS",colorPrimary:"colorPrimary_3Jer",serviceBanner:"serviceBanner_1V1P",serviceItem:"serviceItem_bwkD",serviceIcon:"serviceIcon_2eRt",servicePrice:"servicePrice_j4NP",smallDesc:"smallDesc_1iJI",investList:"investList_3bW9"}}}]);