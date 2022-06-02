(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5915],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45734:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),l={slug:"heroku",title:"Heroku"},i={unversionedId:"installation/heroku",id:"installation/heroku",isDocsHomePage:!1,title:"Heroku",description:"Learn how to deploy Erxes on Heroku.",source:"@site/docs/installation/heroku.md",sourceDirName:"installation",slug:"/installation/heroku",permalink:"/installation/heroku",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/heroku.md",version:"current",lastUpdatedBy:"Anu-Ujin Bat-Ulzii",lastUpdatedAt:1605781393,formattedLastUpdatedAt:"11/19/2020",frontMatter:{slug:"heroku",title:"Heroku"}},p=[{value:"Deploying Erxes on Heroku",id:"deploying-erxes-on-heroku",children:[]},{value:"One Click deployment",id:"one-click-deployment",children:[{value:"1. Install erxes",id:"1-install-erxes",children:[]},{value:"2. Install erxes API",id:"2-install-erxes-api",children:[]},{value:"3. Install erxes Widgets",id:"3-install-erxes-widgets",children:[]}]},{value:"Extra features",id:"extra-features",children:[{value:"4. Install Logger",id:"4-install-logger",children:[]},{value:"5. Install erxes integrations",id:"5-install-erxes-integrations",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Learn how to deploy Erxes on Heroku."),(0,o.kt)("h2",{id:"deploying-erxes-on-heroku"},"Deploying Erxes on Heroku"),(0,o.kt)("p",null,"Heroku is a container-based cloud Platform as a Service (PaaS)."),(0,o.kt)("p",null,"In order to deploy erxes and other related apps, you will need ",(0,o.kt)("inlineCode",{parentName:"p"},"mLab MongoDB")," (MongoDB), ",(0,o.kt)("inlineCode",{parentName:"p"},"Heroku Redis")," (Redis), and ",(0,o.kt)("inlineCode",{parentName:"p"},"CloudAMQP")," (RabbitMQ) addons."),(0,o.kt)("p",null,"To add any addon to an app, you will need to register your credit card. So please add your creadit card and verify your account prior to proceeding further."),(0,o.kt)("h2",{id:"one-click-deployment"},"One Click deployment"),(0,o.kt)("p",null,"In this installation guide, we pretend the following app names will be available on Heroku and they will be used to demonstrate - we expect you to choose any available names on Heroku."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"erxes")," - ",(0,o.kt)("strong",{parentName:"li"},"erxes")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(https://erxes.herokuapp.com)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"erxes API")," - ",(0,o.kt)("strong",{parentName:"li"},"erxes-api")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(https://erxes-api.herokuapp.com)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"erxes Widget")," - ",(0,o.kt)("strong",{parentName:"li"},"erxes-widget")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(https://erxes-widget.herokuapp.com)"))),(0,o.kt)("p",null,"Try the following 3 steps to install all required apps on Heroku."),(0,o.kt)("h3",{id:"1-install-erxes"},"1. Install erxes"),(0,o.kt)("p",null,"Please try clicking the deploy button below, then set all the config vars and hit the Deploy app button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config vars:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"REACT_APP_API_SUBSCRIPTION_URL = ws://erxes-api.herokuapp.com/subscriptions\nREACT_APP_API_URL = https://erxes-api.herokuapp.com\nREACT_APP_CDN_HOST = https://erxes-widget.herokuapp.com\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/erxes/erxes/tree/develop"},(0,o.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg#heroku",alt:"Deploy erxes",title:"Deploy erxes"}))),(0,o.kt)("h3",{id:"2-install-erxes-api"},"2. Install erxes API"),(0,o.kt)("p",null,"Now it's time to install erxes API - click the button below and set the config vars."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config vars:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PORT = 3300\nPORT_CRONS = 3600\nPORT_WORKERS = 3700\nDOMAIN = https://erxes-api.herokuapp.com\nMAIN_APP_DOMAIN = https://erxes.herokuapp.com\nMONGO_URL = mongodb:// # leave it as is, we will update it later on\nRABBITMQ_HOST = RABBITMQ_HOST # we will update it later on\nREDIS_HOST = REDIS_HOST # we will update it later on\nREDIS_PASSWORD = REDIS_PASS # we will update it later on\nREDIS_PORT = 28229 # update it later on\nJWT_TOKEN_SECRET: "replact it with your token"\nLOGS_API_DOMAIN = "update it when you install logger app"\nINTEGRATIONS_API_DOMAIN = "update it when you install integrations app"\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/erxes/erxes-api/tree/develop"},(0,o.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg#heroku",alt:"Deploy erxes API",title:"Deploy erxes API"}))),(0,o.kt)("p",null,"Now go to Heroku dashboard and select the ",(0,o.kt)("strong",{parentName:"p"},"erxes-api app")," from the Apps tab."),(0,o.kt)("p",null,"Go to Settings tab where you can manage your Config Vars as you need to update config vars of ",(0,o.kt)("strong",{parentName:"p"},"erxes-api")," app."),(0,o.kt)("p",null,"In the Config Vars section, click a button 'Reveal Config Vars' so that you will be able to see all the config vars."),(0,o.kt)("p",null,"Copy MONGO_URI's value and paste it into MONGO_URL."),(0,o.kt)("p",null,"Copy RABBITMQ_URL's value and paste into RABBITMQ_HOST."),(0,o.kt)("p",null,"Update REDIS_HOST, REDIS_PASSWORD, and REDIS_PORT values using REDIS_URL's value."),(0,o.kt)("p",null,"Please now go to Resources tab as you will need to start ",(0,o.kt)("inlineCode",{parentName:"p"},"cronjob")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," processes.\nStart ",(0,o.kt)("inlineCode",{parentName:"p"},"cronjob")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"worker"),"."),(0,o.kt)("h4",{id:"load-initial-data"},"Load initial data"),(0,o.kt)("p",null,"The last step is to insert initial data. To do that you will need to clone ",(0,o.kt)("inlineCode",{parentName:"p"},"erxes-api")," repo and ",(0,o.kt)("inlineCode",{parentName:"p"},"mongorestore")," tool."),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"erxes-api")," and run the following commands in the terminal."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd erxes-api/src")),(0,o.kt)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates and some sample data."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mongorestore --host=<host> --port=<port> -u <user> -d <db> initialData")),(0,o.kt)("p",null,"If do not want to load sample data then you can run following command just to load permissions."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mongorestore --host=<host> --port=<port> -u <user> -d <db> permissionData")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": extract ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"MONGO_URI")," config var."),(0,o.kt)("p",null,"Now you can log into ",(0,o.kt)("inlineCode",{parentName:"p"},"https://erxes.herokuapp.com")," using the following credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"username: admin@erxes.io\npassword: erxes\n")),(0,o.kt)("h3",{id:"3-install-erxes-widgets"},"3. Install erxes Widgets"),(0,o.kt)("p",null,"Now install erxes Widget app by clicking the deploy button below and set config vars."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config vars:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ROOT_URL = https://erxes-widget.herokuapp.com\nAPI_URL = https://erxes-api.herokuapp.com\nAPI_SUBSCRIPTIONS_URL = wss://erxes-api.herokuapp.com/subscriptions\nPORT = 3200\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/batnasan/erxes-widgets-heroku-button"},(0,o.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg#heroku",alt:"Deploy Widgets",title:"Deploy erxes Widgets"}))),(0,o.kt)("p",null,"Now it's time to grab yourself a cup of coffee and enjoy using ",(0,o.kt)("strong",{parentName:"p"},"erxes"),"."),(0,o.kt)("h2",{id:"extra-features"},"Extra features"),(0,o.kt)("p",null,"There is a several apps available for you to install and make erxes even more powerful.",(0,o.kt)("br",{parentName:"p"}),"\n","The steps of installing them are same as above."),(0,o.kt)("h3",{id:"4-install-logger"},"4. Install Logger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config vars:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"PORT = 3800\nMONGO_URL = MONGO_URL # we will update it later on\nRABBITMQ_HOST = copy and paste from erxes-api RABBITMQ_HOST config var\n")),(0,o.kt)("p",null,"Once the app is deployed, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Config Vars")," button.",(0,o.kt)("br",{parentName:"p"}),"\n","Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"MONGO_URI"),"'s value and paste it into ",(0,o.kt)("inlineCode",{parentName:"p"},"MONGO_URL"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/batnasan/erxes-logger-heroku-button"},(0,o.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg#heroku",alt:"Deploy Widgets",title:"Deploy erxes integrations"}))),(0,o.kt)("h3",{id:"5-install-erxes-integrations"},"5. Install erxes integrations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Config vars:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"PORT = 3400\nDOMAIN = https://erxes-integration.herokuapp.com\nMAIN_API_DOMAIN = API domain\nMAIN_APP_DOMAIN = Front app domain\nMONGO_URL = INTEGRATION_MONGO_URL # we will update it later on\nRABBITMQ_HOST = copy and paste from erxes-api RABBITMQ_HOST config var\nREDIS_HOST = copy and paste from erxes-api REDIS_HOST config var\nREDIS_PASSWORD = copy and paste from erxes-api REDIS_PASSWORD config var\nREDIS_PORT = copy and paste from erxes-api REDIS_PORT config var\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/erxes/erxes-integrations/tree/develop"},(0,o.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg#heroku",alt:"Deploy Widgets",title:"Deploy erxes integrations"}))),(0,o.kt)("p",null,"Once the app is deployed, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Config Vars")," button.",(0,o.kt)("br",{parentName:"p"}),"\n","Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"MONGODB_URI"),"'s value and paste it into ",(0,o.kt)("inlineCode",{parentName:"p"},"MONGO_URL"),"."))}u.isMDXComponent=!0}}]);