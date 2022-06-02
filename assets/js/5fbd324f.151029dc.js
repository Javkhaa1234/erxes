(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[373],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25303:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"digitalocean",title:"DigitalOcean Marketplace"},l={unversionedId:"installation/digitalocean",id:"installation/digitalocean",isDocsHomePage:!1,title:"DigitalOcean Marketplace",description:"Launch a Droplet using erxes in the DigitalOcean Marketplace.",source:"@site/docs/installation/digitalocean.md",sourceDirName:"installation",slug:"/installation/digitalocean",permalink:"/installation/digitalocean",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/digitalocean.md",version:"current",lastUpdatedBy:"Anu-Ujin Bat-Ulzii",lastUpdatedAt:1605781393,formattedLastUpdatedAt:"11/19/2020",frontMatter:{id:"digitalocean",title:"DigitalOcean Marketplace"}},s=[{value:"Configure your DNS Records",id:"configure-your-dns-records",children:[]},{value:"Connect to your droplet",id:"connect-to-your-droplet",children:[]},{value:"Configure NGINX",id:"configure-nginx",children:[]},{value:"Install Let&#39;s Encrypt using Certbot",id:"install-lets-encrypt-using-certbot",children:[]},{value:"Configure <code>erxes</code>",id:"configure-erxes",children:[{value:"Configure PM2 <code>ecosystem.config.js</code>",id:"configure-pm2-ecosystemconfigjs",children:[]},{value:"Configure frontend environment variables",id:"configure-frontend-environment-variables",children:[]},{value:"export MongoDB URL",id:"export-mongodb-url",children:[]},{value:"Initialize and Load permissions for erxes",id:"initialize-and-load-permissions-for-erxes",children:[]},{value:"Congratulations, time to log in",id:"congratulations-time-to-log-in",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Launch a Droplet using ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.digitalocean.com/apps/erxes"},"erxes")," in the DigitalOcean Marketplace."),(0,o.kt)("h2",{id:"configure-your-dns-records"},"Configure your DNS Records"),(0,o.kt)("p",null,"Your new Droplet server will have an ",(0,o.kt)("strong",{parentName:"p"},"ip address"),". You will need to point your domain name to your new server."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are using a ",(0,o.kt)("strong",{parentName:"li"},"subdomain"),", you will need to follow the instructions of updating the `A Records' of the hosting company for your website."),(0,o.kt)("li",{parentName:"ul"},"If you are NOT using a ",(0,o.kt)("strong",{parentName:"li"},"subdomain"),", then you will need to follow the instructions of your domain name registrar.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example with a domain called, example.com")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your domain name is ",(0,o.kt)("strong",{parentName:"p"},"example.com"),", and the ",(0,o.kt)("strong",{parentName:"p"},"ip address")," assigned to your server is ",(0,o.kt)("strong",{parentName:"p"},"44.123.32.12"),", then you will have two ",(0,o.kt)("inlineCode",{parentName:"p"},"A records")," that look like this:"),(0,o.kt)("table",{parentName:"div"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://www.example.com"},"www.example.com")),(0,o.kt)("td",{parentName:"tr",align:null},"points to 44.123.32.12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"example.com"),(0,o.kt)("td",{parentName:"tr",align:null},"points to 44.123.32.12")))))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example with a subdomain called, erxes.example.com")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'You first need to create a subdomain. For example, "erxes.example.com". Then you need to edit the ',(0,o.kt)("strong",{parentName:"p"},"DNS"),"."),(0,o.kt)("p",{parentName:"div"},"If your domain name is ",(0,o.kt)("strong",{parentName:"p"},"erxes.example.com"),", and the ",(0,o.kt)("strong",{parentName:"p"},"ip address")," assigned to your server is ",(0,o.kt)("strong",{parentName:"p"},"44.123.32.12"),", then you will have a two ",(0,o.kt)("inlineCode",{parentName:"p"},"A records")," that look like this:"),(0,o.kt)("table",{parentName:"div"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},"erxes.example.com"),(0,o.kt)("td",{parentName:"tr",align:null},"points to 44.123.32.12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://www.erxes.example.com"},"www.erxes.example.com")),(0,o.kt)("td",{parentName:"tr",align:null},"points to 44.123.32.12")))),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:"),' You do not need to create a subdomain called "erxes.example.com", you can use another name of your choice such as "admin.example.com".'))),(0,o.kt)("h2",{id:"connect-to-your-droplet"},"Connect to your droplet"),(0,o.kt)("p",null,"Connect to your droplet via ssh."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh root@YOUR_DROPLET_PUBLIC_IP\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"YOUR_DROPLET_PUBLIC_IP")," is your droplet public IP address")),(0,o.kt)("h2",{id:"configure-nginx"},"Configure NGINX"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual ",(0,o.kt)("inlineCode",{parentName:"li"},"domain name")," in the nginx config file ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/nginx/sites-available/default"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nginx/sites-available/default\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After replacing YOUR_DOMAIN_COM with your actual domain name. Save with ctrl + x and then y to accept the changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Test the ",(0,o.kt)("strong",{parentName:"p"},"NGINX")," configuration to make sure you don't have any errors"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -t\n")),(0,o.kt)("p",null,"You should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reload nginx service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl reload nginx\n")),(0,o.kt)("h2",{id:"install-lets-encrypt-using-certbot"},"Install Let's Encrypt using Certbot"),(0,o.kt)("p",null,"Execute Certbot. You will asked several questions, you can answer as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter your email address"),(0,o.kt)("li",{parentName:"ul"},"Agree with the ",(0,o.kt)("strong",{parentName:"li"},"Terms of Service")),(0,o.kt)("li",{parentName:"ul"},"Answer ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"No"),", if you want to share your email address with the Electronic Frontier Foundation"),(0,o.kt)("li",{parentName:"ul"},"Select the corresponding number associated with your domain name, usually ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," to redirect all your traffic to a secure ",(0,o.kt)("strong",{parentName:"li"},"HTTPS"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"certbot --nginx\n")),(0,o.kt)("h2",{id:"configure-erxes"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h2"},"erxes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the following to change the password for ",(0,o.kt)("inlineCode",{parentName:"li"},"erxes")," and switch to user ",(0,o.kt)("inlineCode",{parentName:"li"},"erxes"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"passwd erxes\nsu erxes\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The rest of the steps are run as ",(0,o.kt)("inlineCode",{parentName:"li"},"erxes")," user.")),(0,o.kt)("h3",{id:"configure-pm2-ecosystemconfigjs"},"Configure PM2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"ecosystem.config.js")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the following command to replace ",(0,o.kt)("inlineCode",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name. Please use ",(0,o.kt)("inlineCode",{parentName:"li"},"your domain")," for ",(0,o.kt)("inlineCode",{parentName:"li"},"your.domain.com"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/erxes.io\nsed -i 's/YOUR_DOMAIN_COM/your.domain.com/g' ecosystem.config.js\n")),(0,o.kt)("h3",{id:"configure-frontend-environment-variables"},"Configure frontend environment variables"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"~/erxes.io/erxes/js/env.js")," file in the nano editor.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/erxes.io/erxes/js/env.js\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the following ",(0,o.kt)("strong",{parentName:"li"},"environment variables")," in between the ",(0,o.kt)("strong",{parentName:"li"},"{ }"),", and replace ",(0,o.kt)("strong",{parentName:"li"},"YOUR_DOMAIN_COM")," with your actual domain name.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'NODE_ENV: "production",\nREACT_APP_API_URL: "https://YOUR_DOMAIN_COM/api",\nREACT_APP_API_SUBSCRIPTION_URL: "wss://YOUR_DOMAIN_COM/api/subscriptions",\nREACT_APP_CDN_HOST: "https://YOUR_DOMAIN_COM/widgets"\n')),(0,o.kt)("p",null,"It should look like this, but ",(0,o.kt)("strong",{parentName:"p"},"with your actual domain name"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'window.env = {\n    NODE_ENV: "production",\n    REACT_APP_API_URL: "https://erxes.example.com/api",\n    REACT_APP_API_SUBSCRIPTION_URL: "wss://erxes.example.com/api/subscriptions",\n    REACT_APP_CDN_HOST: "https://erxes.example.com/widgets"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"save the file with ",(0,o.kt)("inlineCode",{parentName:"li"},"ctrl + x")," and then ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," to accept all changes.")),(0,o.kt)("p",null,"You are now ready to ",(0,o.kt)("strong",{parentName:"p"},"initialize")," and ",(0,o.kt)("strong",{parentName:"p"},"load the permissions")," in ",(0,o.kt)("strong",{parentName:"p"},"erxes"),"."),(0,o.kt)("h3",{id:"export-mongodb-url"},"export MongoDB URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/erxes.io\nnano ecosystem.config.js\n")),(0,o.kt)("p",null,'Locate the "MONGO_URL": "mongodb://erxes:82e3e42ef31e51d51687b366118200e2@localhost/erxes?authSource=admin&replicaSet=rs0", under the erxes-api.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Copy the MONGO_URL and exit the nano editor with ctrl + x.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now you will need to export and set the variable MONGO_URL, with the copied URL. See below:"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# example\n# export MONGO_URL="mongodb://erxes:92c54fa1f0658xxxxc2d9ce618b008b4@localhost/erxes?authSource=admin&replicaSet=rs0"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use your copied MONGO_URL below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export MONGO_URL="YOUR_COPIED_MONGO_URL_HERE"\n')),(0,o.kt)("h3",{id:"initialize-and-load-permissions-for-erxes"},"Initialize and Load permissions for erxes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initialize Erxes and generate ",(0,o.kt)("strong",{parentName:"li"},"login password"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.nvm/nvm.sh\nnvm use default\ncd ~/erxes.io/erxes-api/dist\nnode commands/initProject\n")),(0,o.kt)("p",null,"You should have a generated ",(0,o.kt)("strong",{parentName:"p"},"password"),". The output will be similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Your new password: HcEjfBMxws\n\n# note this down\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run this final command to finish the installation of ",(0,o.kt)("strong",{parentName:"li"},"erxes"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/erxes.io/erxes-api/dist\nnode commands/loadPermissionData\n\ncd ~/erxes.io\npm2 restart ecosystem.config.js\n")),(0,o.kt)("h3",{id:"congratulations-time-to-log-in"},"Congratulations, time to log in"),(0,o.kt)("p",null,"You may now visit your domain, and log in."),(0,o.kt)("p",null,"The username is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:admin@erxes.io"},"admin@erxes.io")),", and the password is the password generated above."))}u.isMDXComponent=!0}}]);