(this.webpackJsonpathenaeum=this.webpackJsonpathenaeum||[]).push([[9],{227:function(a,t,e){"use strict";e.r(t);var n=e(6),s=e(0),r=e.n(s),o=e(42),i=e(15),u=e(36),m=e(35),c=e(41),l=e(45),d=e.n(l),g=e(14);t.default=function(a){var t=Object(s.useState)(1),e=Object(n.a)(t,2),l=e[0],f=e[1],T=Object(s.useState)([]),h=Object(n.a)(T,2),p=(h[0],h[1]),b=Object(s.useState)({name:""}),j=Object(n.a)(b,2),w=(j[0],j[1],Object(s.useState)([])),v=Object(n.a)(w,2),S=v[0],B=v[1],M=Object(s.useState)(null),G=Object(n.a)(M,2);G[0],G[1],Object(s.useContext)(i.a),Object(s.useEffect)((function(){o.a.getBooks().then((function(a){B(a.books)}))}),[]);var y=S.length;Object(s.useEffect)((function(){p(c.a.slice(15*(l-1),15*l))}),[l]);var z=function(a){o.a.deleteBook(a._id);var t=setTimeout((function(){d.a.close(),window.location.reload()}),1e3);d.a.fire({icon:"success",title:"Deleting book...",showConfirmButton:!1}).then(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,"My Page"),r.a.createElement(u.a,null),r.a.createElement("div",{id:"tableDiv"},r.a.createElement(m.a,null,"Your Book List"),r.a.createElement(g.TableContainer,null,r.a.createElement(g.Table,null,r.a.createElement(g.TableHeader,null,r.a.createElement("tr",null,r.a.createElement(g.TableCell,null,"Book Name"),r.a.createElement(g.TableCell,null,"Author(s)"),r.a.createElement(g.TableCell,null,"Actions"))),r.a.createElement(g.TableBody,null,S.map((function(a,t){return r.a.createElement(g.TableRow,{key:t},r.a.createElement(g.TableCell,null,r.a.createElement("div",{className:"flex items-center text-sm"},r.a.createElement(g.Avatar,{className:"hidden mr-3 md:block",src:a.thumbnail,alt:"User image"}),r.a.createElement("div",null,r.a.createElement("p",{className:"font-semibold"},a.title),r.a.createElement("p",{className:"text-xs text-gray-600 dark:text-gray-400"},a.job)))),r.a.createElement(g.TableCell,null,r.a.createElement("span",{className:"text-sm"},a.authors)),r.a.createElement(g.TableCell,null,r.a.createElement("button",{className:"bg-purple-400 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full",onClick:function(){!function(a){d.a.fire({title:"What would you like to do?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Sell book",denyButtonText:"Remove from List"}).then((function(t){t.isConfirmed?d.a.fire({icon:"success",title:"Redirecting..."}):t.isDenied&&d.a.fire({icon:"warning",title:"Are you sure?",text:"You cannot undo this action.",showConfirmButton:!1,showDenyButton:!0,showCancelButton:!0,denyButtonText:"Continue"}).then((function(t){t.isDenied?z(a):console.log("You didn't delete the book")}))}))}(a)}},"...")))})))),r.a.createElement(g.TableFooter,null,r.a.createElement(g.Pagination,{totalResults:y,resultsPerPage:15,label:"Table navigation",onChange:function(a){f(a)}})))))}},35:function(a,t,e){"use strict";var n=e(0),s=e.n(n);t.a=function(a){var t=a.children;return s.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},36:function(a,t,e){"use strict";var n=e(0),s=e.n(n);t.a=function(){return s.a.createElement("div",null)}},41:function(a,t,e){"use strict";t.a=[{avatar:"../pet_semetary.png",name:"Pet Semetary",job:"Stephen King",amount:"13.90",status:"neutral",date:"Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)"},{avatar:"../fellowship.jpg",name:"The Fellowship of the Ring",job:"J. R. R. Tolkien",amount:"14.99",status:"neutral",date:"Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)"},{avatar:"../two_towers.jpg",name:"The Two Towers",job:"J. R. R. Tolkien",amount:8.87,status:"success",date:"Fri Apr 03 2020 03:07:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"../return_of_the_king.jpg",name:"The Return of the King",job:"J. R. R. Tolkien",amount:17.99,status:"warning",date:"Fri Jun 21 2019 20:21:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"../hp.jpg",name:"The Complete Fiction of H. P. Lovecraft",job:"H. P. Lovecraft",amount:9.99,status:"neutral",date:"Wed Aug 28 2019 15:31:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"../game_of_thrones.jpg",name:"A Game of Thrones",job:"George R. R. Martin",amount:8.57,status:"success",date:"Thu Jan 16 2020 09:53:33 GMT-0300 (Brasilia Standard Time)"},{avatar:"../clash_of_kings.jpg",name:"A Clash of Kings",job:"George R. R. Martin",amount:9.99,status:"success",date:"Mon Oct 28 2019 14:44:31 GMT-0300 (Brasilia Standard Time)"},{avatar:"../storm_of_swords.jpg",name:"A Storm of Swords",job:"George R. R. Martin",amount:12.33,status:"neutral",date:"Tue Jul 23 2019 00:24:44 GMT-0300 (Brasilia Standard Time)"},{avatar:"../feast_for_crows.jpg",name:"A Feast for Crows",job:"George R. R. Martin",amount:9.97,status:"neutral",date:"Sat Feb 01 2020 12:57:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"../dance_with_dragons.jpg",name:"A Dance With Dragons",job:"George R. R. Martin",amount:10.07,status:"neutral",date:"Mon Sep 09 2019 12:03:25 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg",name:"Julian Glover",job:"Global Branding Assistant",amount:656.94,status:"danger",date:"Fri May 22 2020 17:46:12 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",name:"Duncan Toy",job:"Central Intranet Manager",amount:120.78,status:"danger",date:"Sun Nov 17 2019 11:59:50 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",name:"Blanche Friesen",job:"Forward Identity Executive",amount:676.95,status:"danger",date:"Sun Jun 21 2020 16:46:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg",name:"Orion Koepp",job:"Global Accountability Strategist",amount:447.56,status:"danger",date:"Thu Jun 04 2020 18:29:41 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg",name:"Dakota Vandervort",job:"Future Assurance Coordinator",amount:765.22,status:"danger",date:"Fri Jan 31 2020 13:02:55 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/zaki3d/128.jpg",name:"Lily Collier",job:"Forward Configuration Orchestrator",amount:449.11,status:"danger",date:"Sun Aug 18 2019 14:52:01 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/evanshajed/128.jpg",name:"Kayleigh Schumm",job:"Central Division Agent",amount:65.54,status:"danger",date:"Wed May 06 2020 17:49:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mdsisto/128.jpg",name:"General McGlynn",job:"Central Web Analyst",amount:30.51,status:"danger",date:"Mon Mar 30 2020 01:24:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg",name:"Shayna Schumm",job:"Future Directives Engineer",amount:313.73,status:"danger",date:"Wed Jul 03 2019 10:01:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg",name:"Giovanna Sanford",job:"Dynamic Interactions Executive",amount:398.3,status:"danger",date:"Tue Oct 08 2019 17:08:43 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg",name:"Emie Mante",job:"Direct Factors Supervisor",amount:142.51,status:"danger",date:"Wed Jul 24 2019 19:17:16 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg",name:"Chance Muller",job:"Lead Usability Planner",amount:963.26,status:"danger",date:"Sun Dec 01 2019 14:04:10 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",name:"Armani Torphy",job:"Forward Functionality Analyst",amount:445.23,status:"danger",date:"Tue Dec 24 2019 13:28:36 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg",name:"Braeden Ward",job:"Central Integration Director",amount:588.53,status:"danger",date:"Wed Apr 15 2020 21:40:11 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kimcool/128.jpg",name:"Malcolm Price",job:"District Program Planner",amount:181.93,status:"danger",date:"Thu Oct 24 2019 07:09:03 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",name:"Susan Jast",job:"Future Paradigm Associate",amount:928.41,status:"danger",date:"Sun Feb 09 2020 23:22:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/peachananr/128.jpg",name:"Torrey Reynolds",job:"Lead Security Agent",amount:447.37,status:"danger",date:"Mon Oct 28 2019 04:10:39 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg",name:"Travon Harber",job:"Legacy Marketing Facilitator",amount:422.48,status:"danger",date:"Sat Nov 09 2019 05:04:09 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg",name:"Hattie Gutkowski",job:"Chief Configuration Supervisor",amount:714.34,status:"danger",date:"Tue Oct 22 2019 22:36:23 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg",name:"Demarco Lang",job:"Investor Program Designer",amount:536.92,status:"danger",date:"Wed Apr 08 2020 03:05:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg",name:"Glennie Ziemann",job:"Dynamic Interactions Analyst",amount:597.25,status:"danger",date:"Mon Jun 22 2020 21:27:06 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/juaumlol/128.jpg",name:"Alta Howe",job:"District Intranet Executive",amount:42.28,status:"danger",date:"Sat Oct 12 2019 22:57:22 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/victordeanda/128.jpg",name:"Sydnee Gottlieb",job:"Global Response Specialist",amount:868.92,status:"danger",date:"Wed Feb 05 2020 05:17:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/baumannzone/128.jpg",name:"Arlene Schmitt",job:"Lead Metrics Consultant",amount:364.68,status:"danger",date:"Thu Oct 03 2019 08:47:32 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/chacky14/128.jpg",name:"Hilda Schoen",job:"National Solutions Facilitator",amount:260.91,status:"danger",date:"Wed Dec 04 2019 06:28:30 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",name:"Chase Bahringer",job:"Dynamic Communications Designer",amount:454.61,status:"danger",date:"Mon Nov 25 2019 16:59:38 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg",name:"Lucile Hansen",job:"Customer Usability Facilitator",amount:982.22,status:"danger",date:"Sun Aug 25 2019 17:15:59 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",name:"Mollie Heaney",job:"Forward Communications Director",amount:390.33,status:"danger",date:"Mon Jul 22 2019 01:45:19 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",name:"Bennie Kuvalis",job:"Future Factors Agent",amount:456.64,status:"danger",date:"Sat Feb 08 2020 07:55:08 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg",name:"Jodie Luettgen",job:"Customer Implementation Associate",amount:398.37,status:"danger",date:"Tue Jun 09 2020 11:19:53 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/weavermedia/128.jpg",name:"Bethel Quitzon",job:"Dynamic Web Strategist",amount:183.58,status:"danger",date:"Sun Dec 29 2019 18:56:54 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg",name:"Jon Dietrich",job:"Legacy Creative Planner",amount:439.01,status:"danger",date:"Sun Dec 29 2019 11:11:34 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg",name:"Nakia Kihn",job:"Central Interactions Coordinator",amount:824.12,status:"danger",date:"Sun Sep 15 2019 06:43:56 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg",name:"Assunta Grady",job:"Investor Operations Specialist",amount:172.97,status:"danger",date:"Tue Dec 17 2019 01:46:37 GMT-0300 (Brasilia Standard Time)"},{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/nehfy/128.jpg",name:"Lukas Klocko",job:"Human Usability Associate",amount:515.74,status:"danger",date:"Mon Jun 15 2020 04:04:32 GMT-0300 (Brasilia Standard Time)"}]},42:function(a,t,e){"use strict";t.a={getBooks:function(){return fetch("/user/books").then((function(a){return 401!=a.status?a.json().then((function(a){return a})):{message:{msgBody:"Unauthorized"},msgError:!0}}))},postBook:function(a){return fetch("/user/book",{method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(a){return 401!=a.status?a.json().then((function(a){return a})):{message:{msgBody:"Unauthorized"},msgError:!0}}))},deleteBook:function(a){return fetch("/user/test/"+a,{method:"delete"}).then((function(a){return 401!=a.status?a.json().then((function(a){return a})):{message:{msgBody:"Unauthorized"},msgError:!0}}))}}}}]);
//# sourceMappingURL=9.aa5140a7.chunk.js.map