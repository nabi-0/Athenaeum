/*! For license information please see 12.77dc7c7a.chunk.js.LICENSE.txt */
(this.webpackJsonpathenaeum=this.webpackJsonpathenaeum||[]).push([[12],{285:function(a,e,t){"use strict";t.r(e);var n=t(6),r=t(0),s=t.n(r),i=t(37),o=t(40),l=t(41),m=t(52),c=t(42),u=t(36),d=t(38),g=t(43),p=t(45),f=t(17),b=t(46);e.default=function(a){var e=Object(r.useState)(1),t=Object(n.a)(e,2),T=t[0],h=t[1],v=Object(r.useState)([]),w=Object(n.a)(v,2),j=w[0],S=w[1],y=p.a.length;return Object(r.useEffect)((function(){S(p.a.slice(10*(T-1),10*T))}),[T]),s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,"Popular Items"),s.a.createElement(i.a,null),s.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},s.a.createElement(o.a,{title:"Watched Authors",value:"11"},s.a.createElement(g.a,{icon:d.PeopleIcon,iconColorClass:"text-orange-500 dark:text-orange-100",bgColorClass:"bg-orange-100 dark:bg-orange-500",className:"mr-4"})),s.a.createElement(o.a,{title:"Book Wishlist",value:"21"},s.a.createElement(g.a,{icon:d.MoneyIcon,iconColorClass:"text-green-500 dark:text-green-100",bgColorClass:"bg-green-100 dark:bg-green-500",className:"mr-4"})),s.a.createElement(o.a,{title:"Cart",value:"3"},s.a.createElement(g.a,{icon:d.CartIcon,iconColorClass:"text-blue-500 dark:text-blue-100",bgColorClass:"bg-blue-100 dark:bg-blue-500",className:"mr-4"})),s.a.createElement(o.a,{title:"Messages",value:"7"},s.a.createElement(g.a,{icon:d.ChatIcon,iconColorClass:"text-teal-500 dark:text-teal-100",bgColorClass:"bg-teal-100 dark:bg-teal-500",className:"mr-4"}))),s.a.createElement(f.TableContainer,null,s.a.createElement(f.Table,null,s.a.createElement(f.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(f.TableCell,null,"Book Name"),s.a.createElement(f.TableCell,null,"Price"),s.a.createElement(f.TableCell,null,"Status"),s.a.createElement(f.TableCell,null,"Date Added"))),s.a.createElement(f.TableBody,null,j.map((function(a,e){return s.a.createElement(f.TableRow,{key:e},s.a.createElement(f.TableCell,null,s.a.createElement("div",{className:"flex items-center text-sm"},s.a.createElement(f.Avatar,{className:"hidden mr-3 md:block",src:a.avatar,alt:"User image"}),s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},a.name),s.a.createElement("p",{className:"text-xs text-gray-600 dark:text-gray-400"},a.job)))),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},"$ ",a.amount)),s.a.createElement(f.TableCell,null,s.a.createElement(f.Badge,{type:a.status},a.status)),s.a.createElement(f.TableCell,null,s.a.createElement("span",{className:"text-sm"},new Date(a.date).toLocaleDateString())))})))),s.a.createElement(f.TableFooter,null,s.a.createElement(f.Pagination,{totalResults:y,resultsPerPage:10,label:"Table navigation",onChange:function(a){h(a)}}))),s.a.createElement(u.a,null,"Account Data"),s.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2"},s.a.createElement(l.a,{title:"Traffic (marketplace views)"},s.a.createElement(m.c,b.f),s.a.createElement(c.a,{legends:b.e}))))}},36:function(a,e,t){"use strict";var n=t(0),r=t.n(n);e.a=function(a){var e=a.children;return r.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},e)}},37:function(a,e,t){"use strict";var n=t(0),r=t.n(n);e.a=function(){return r.a.createElement("div",null)}},40:function(a,e,t){"use strict";var n=t(0),r=t.n(n),s=t(17);e.a=function(a){var e=a.title,t=a.value,n=a.children;return r.a.createElement(s.Card,null,r.a.createElement(s.CardBody,{className:"flex items-center"},n,r.a.createElement("div",null,r.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},e),r.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},t))))}},41:function(a,e,t){"use strict";var n=t(0),r=t.n(n);e.a=function(a){var e=a.children,t=a.title;return r.a.createElement("div",{className:"min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"},r.a.createElement("p",{className:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},t),e)}},42:function(a,e,t){"use strict";var n=t(0),r=t.n(n);e.a=function(a){var e=a.legends;return r.a.createElement("div",{className:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},e.map((function(a){return r.a.createElement("div",{className:"flex items-center",key:a.title},r.a.createElement("span",{className:"inline-block w-3 h-3 mr-1 ".concat(a.color," rounded-full")}),r.a.createElement("span",null,a.title))})))}},43:function(a,e,t){"use strict";var n=t(0),r=t.n(n),s=t(44),i=t.n(s);e.a=function(a){var e=a.icon,t=a.iconColorClass,n=void 0===t?"text-purple-600 dark:text-purple-100":t,s=a.bgColorClass,o=void 0===s?"bg-purple-100 dark:bg-purple-600":s,l=a.className,m=i()("p-3 rounded-full",n,o,l);return r.a.createElement("div",{className:m},r.a.createElement(e,{className:"w-5 h-5"}))}},44:function(a,e,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var a=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)a.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&a.push(i)}else if("object"===s)for(var o in n)t.call(n,o)&&n[o]&&a.push(o)}}return a.join(" ")}a.exports?(r.default=r,a.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(a.exports=n)}()},45:function(a,e,t){"use strict";e.a=[{avatar:"../pet_semetary.png",name:"Pet Semetary",job:"Stephen King",amount:"13.90",status:"neutral",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"../fellowship.jpg",name:"The Fellowship of the Ring",job:"J. R. R. Tolkien",amount:"14.99",status:"neutral",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"../two_towers.jpg",name:"The Two Towers",job:"J. R. R. Tolkien",amount:8.87,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"../return_of_the_king.jpg",name:"The Return of the King",job:"J. R. R. Tolkien",amount:17.99,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"../hp.jpg",name:"The Complete Fiction of H. P. Lovecraft",job:"H. P. Lovecraft",amount:9.99,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"../game_of_thrones.jpg",name:"A Game of Thrones",job:"George R. R. Martin",amount:8.57,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"../clash_of_kings.jpg",name:"A Clash of Kings",job:"George R. R. Martin",amount:9.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"../storm_of_swords.jpg",name:"A Storm of Swords",job:"George R. R. Martin",amount:12.33,status:"neutral",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"../feast_for_crows.jpg",name:"A Feast for Crows",job:"George R. R. Martin",amount:9.97,status:"neutral",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"../dance_with_dragons.jpg",name:"A Dance With Dragons",job:"George R. R. Martin",amount:10.07,status:"neutral",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}]},46:function(a,e,t){"use strict";t.d(e,"c",(function(){return n})),t.d(e,"e",(function(){return r})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return i})),t.d(e,"f",(function(){return o})),t.d(e,"b",(function(){return l}));var n=[{title:"Shirts",color:"bg-blue-500"},{title:"Shoes",color:"bg-teal-600"},{title:"Bags",color:"bg-purple-600"}],r=[{title:"Views",color:"bg-purple-600"}],s=[{title:"Bags",color:"bg-purple-600"}],i={data:{datasets:[{data:[33,33,33],backgroundColor:["#0694a2","#1c64f2","#7e3af2"],label:"Dataset 1"}],labels:["Shoes","Shirts","Bags"]},options:{responsive:!0,cutoutPercentage:80},legend:{display:!1}},o={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Views",fill:!1,backgroundColor:"#7e3af2",borderColor:"#7e3af2",data:[24,50,64,74,52,51,65]}]},options:{responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}}}},legend:{display:!1}},l={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Shoes",backgroundColor:"#0694a2",borderWidth:1,data:[-3,14,52,74,33,90,70]},{label:"Bags",backgroundColor:"#7e3af2",borderWidth:1,data:[66,33,43,12,54,62,84]}]},options:{responsive:!0},legend:{display:!1}}}}]);
//# sourceMappingURL=12.77dc7c7a.chunk.js.map