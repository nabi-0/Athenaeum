(this.webpackJsonpathenaeum=this.webpackJsonpathenaeum||[]).push([[22],{153:function(e,t){},155:function(e,t){},288:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),l=a.n(r),o=a(1),c=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,275))})),s=Object(r.lazy)((function(){return a.e(20).then(a.bind(null,276))})),i=Object(r.lazy)((function(){return a.e(14).then(a.bind(null,277))})),u=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,278))})),m=Object(r.lazy)((function(){return a.e(19).then(a.bind(null,279))})),d=Object(r.lazy)((function(){return a.e(21).then(a.bind(null,280))})),p=Object(r.lazy)((function(){return a.e(17).then(a.bind(null,281))})),h=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,274))})),b=Object(r.lazy)((function(){return a.e(24).then(a.bind(null,282))})),f=[{path:"/dashboard",component:c},{path:"/mypage",component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,283))}))},{path:"/watchlist",component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,284))}))},{path:"/popular",component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,285))}))},{path:"/discover",component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,286))}))},{path:"/messages",component:Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,287))}))},{path:"/forms",component:s},{path:"/cards",component:i},{path:"/charts",component:u},{path:"/buttons",component:m},{path:"/modals",component:d},{path:"/tables",component:p},{path:"/404",component:h},{path:"/blank",component:b}],g=a(121),E=[{path:"/app/dashboard",icon:"HomeIcon",name:"Dashboard"},{path:"/app/mypage",icon:"FormsIcon",name:"My Page"},{path:"/app/watchlist",icon:"CardsIcon",name:"Watchlist"},{path:"/app/discover",icon:"ButtonsIcon",name:"Discover"},{icon:"PagesIcon",name:"Account Services",routes:[{path:"/friends",name:"Friends"},{path:"/listings",name:"My Listings"},{path:"/user-info",name:"User Info"},{path:"/settings",name:"Settings"}]}],y=a(10),x=a(38),v=a(17);function w(e){var t=e.icon,a=Object(g.a)(e,["icon"]),n=x[t];return l.a.createElement(n,a)}var N=function(e){var t=e.route,a=Object(r.useState)(!1),o=Object(n.a)(a,2),c=o[0],s=o[1];return l.a.createElement("li",{className:"relative px-6 py-3",key:t.name},l.a.createElement("button",{className:"inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",onClick:function(){s(!c)},"aria-haspopup":"true"},l.a.createElement("span",{className:"inline-flex items-center"},l.a.createElement(w,{className:"w-5 h-5","aria-hidden":"true",icon:t.icon}),l.a.createElement("span",{className:"ml-4"},t.name)),l.a.createElement(x.DropdownIcon,{className:"w-4 h-4","aria-hidden":"true"})),l.a.createElement(v.Transition,{show:c,enter:"transition-all ease-in-out duration-300",enterFrom:"opacity-25 max-h-0",enterTo:"opacity-100 max-h-xl",leave:"transition-all ease-in-out duration-300",leaveFrom:"opacity-100 max-h-xl",leaveTo:"opacity-0 max-h-0"},l.a.createElement("ul",{className:"p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900","aria-label":"submenu"},t.routes.map((function(e){return l.a.createElement("li",{className:"px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",key:e.name},l.a.createElement(y.b,{className:"w-full",to:e.path},e.name))})))))},O=a(11),j=a(9);function k(e){var t=e.icon,a=Object(g.a)(e,["icon"]),n=x[t];return l.a.createElement(n,a)}var I=function(){var e=Object(r.useContext)(j.a);return e.isAuthenticated,e.user,e.setIsAuthenticated,e.setUser,l.a.createElement("div",{className:"py-4 text-gray-500 dark:text-gray-400"},l.a.createElement(y.b,{className:"ml-6 text-lg font-bold text-gray-800 dark:text-gray-200",to:"/app/dashboard"},"Athenaeum"),l.a.createElement("ul",{className:"mt-6"},E.map((function(e){return e.routes?l.a.createElement(N,{route:e,key:e.name}):l.a.createElement("li",{className:"relative px-6 py-3",key:e.name},l.a.createElement(y.c,{exact:!0,to:e.path,className:"inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200",activeClassName:"text-gray-800 dark:text-gray-100"},l.a.createElement(o.b,{path:e.path,exact:e.exact},l.a.createElement("span",{className:"absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg","aria-hidden":"true"})),l.a.createElement(k,{className:"w-5 h-5","aria-hidden":"true",icon:e.icon}),l.a.createElement("span",{className:"ml-4"},e.name)))}))),l.a.createElement("div",{className:"px-6 my-6"},l.a.createElement(v.Button,null,"Create new listing",l.a.createElement("span",{className:"ml-2","aria-hidden":"true"},"+"))))};var C=function(e){return l.a.createElement("aside",{className:"z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block"},l.a.createElement(I,null))},S=a(18);var z=function(){var e=Object(r.useContext)(S.a),t=e.isSidebarOpen,a=e.closeSidebar;return l.a.createElement(v.Transition,{show:t},l.a.createElement(l.a.Fragment,null,l.a.createElement(v.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0"},l.a.createElement(v.Backdrop,{onClick:a})),l.a.createElement(v.Transition,{enter:"transition ease-in-out duration-150",enterFrom:"opacity-0 transform -translate-x-20",enterTo:"opacity-100",leave:"transition ease-in-out duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0 transform -translate-x-20"},l.a.createElement("aside",{className:"fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden"},l.a.createElement(I,null)))))};var D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null),l.a.createElement(z,null))},T=a(12),P=a(80),A=a.n(P),F=function(e){return A.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)};a(138),a(23);var M=function(e){var t=Object(r.useContext)(v.WindmillContext),a=t.mode,o=t.toggleMode,c=Object(r.useContext)(S.a).toggleSidebar,s=Object(r.useState)(!1),i=Object(n.a)(s,2),u=i[0],m=i[1],d=Object(r.useState)(!1),p=Object(n.a)(d,2),h=p[0],b=p[1],f=Object(r.useContext)(j.a),g=(f.isAuthenticated,f.user),E=f.setIsAuthenticated,w=f.setUser,N=Object(r.useState)(""),k=Object(n.a)(N,2),I=k[0],C=k[1],z=Object(r.useState)(""),D=Object(n.a)(z,2),P=(D[0],D[1],Object(r.useState)("")),A=Object(n.a)(P,2),M=(A[0],A[1],Object(r.useContext)(T.a)),B=Object(n.a)(M,2),L=(B[0],B[1]),U=function(e){L(e)};return l.a.createElement("header",{className:"z-40 py-4 bg-white shadow-bottom dark:bg-gray-800"},l.a.createElement("div",{className:"container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"},l.a.createElement(y.b,{className:"ml-6 text-lg text-gray-500 dark:text-gray-200",to:"/app/mypage"},g.username),l.a.createElement("button",{className:"p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple",onClick:c,"aria-label":"Menu"},l.a.createElement(x.MenuIcon,{className:"w-6 h-6","aria-hidden":"true"})),l.a.createElement("div",{className:"flex justify-center flex-1 lg:mr-32"},l.a.createElement("div",{className:"relative w-full max-w-xl mr-6 focus-within:text-purple-500"},l.a.createElement("div",{className:"absolute inset-y-0 flex items-center pl-2"},l.a.createElement(x.SearchIcon,{className:"w-4 h-4","aria-hidden":"true"})),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),F(I).then((function(e){setTimeout((function(){U(e.data.items)}),500)})).catch((function(e){return console.log(e)}))}},l.a.createElement(v.Input,{onChange:function(e){return C(e.target.value)},value:I,className:"pl-8 text-gray-700",placeholder:"Search for books, authors, users, etc.","aria-label":"Search"})))),l.a.createElement("ul",{className:"flex items-center flex-shrink-0 space-x-6"},l.a.createElement("li",{className:"flex"},l.a.createElement("button",{className:"rounded-md focus:outline-none focus:shadow-outline-purple",onClick:o,"aria-label":"Toggle color mode"},"dark"===a?l.a.createElement(x.SunIcon,{className:"w-5 h-5","aria-hidden":"true"}):l.a.createElement(x.MoonIcon,{className:"w-5 h-5","aria-hidden":"true"}))),l.a.createElement("li",{className:"relative"},l.a.createElement("button",{className:"relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple",onClick:function(){m(!u)},"aria-label":"Notifications","aria-haspopup":"true"},l.a.createElement(x.BellIcon,{className:"w-5 h-5","aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true",className:"absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"})),l.a.createElement(v.Dropdown,{align:"right",isOpen:u,onClose:function(){return m(!1)}},l.a.createElement(v.DropdownItem,{tag:"a",href:"/app/messages",className:"justify-between"},l.a.createElement("span",null,"Messages"),l.a.createElement(v.Badge,{type:"danger"},"13")),l.a.createElement(v.DropdownItem,{tag:"a",href:"#",className:"justify-between"},l.a.createElement("span",null,"Sales"),l.a.createElement(v.Badge,{type:"danger"},"2")),l.a.createElement(v.DropdownItem,{onClick:function(){return alert("Alerts!")}},l.a.createElement("span",null,"Alerts")))),l.a.createElement("li",{className:"relative"},l.a.createElement("button",{className:"rounded-full focus:shadow-outline-purple focus:outline-none",onClick:function(){b(!h)},"aria-label":"Account","aria-haspopup":"true"},l.a.createElement(v.Avatar,{className:"align-middle",src:"https://i.imgur.com/epoovI9.jpg",alt:"","aria-hidden":"true"})),l.a.createElement(v.Dropdown,{align:"right",isOpen:h,onClose:function(){return b(!1)}},l.a.createElement(v.DropdownItem,{tag:"a",href:"#"},l.a.createElement(x.OutlinePersonIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),l.a.createElement("span",null,"Profile")),l.a.createElement(v.DropdownItem,{tag:"a",href:"#"},l.a.createElement(x.OutlineCogIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),l.a.createElement("span",null,"Settings")),l.a.createElement(y.b,{to:"/login"},l.a.createElement(v.DropdownItem,{onClick:function(){O.a.logout().then((function(e){e.success?(w(e.user),E(!1),alert("Successfully logged out."),console.log("user logged out")):console.log("logout failed for some reason")}))}},l.a.createElement(x.OutlineLogoutIcon,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),l.a.createElement("span",null,"Log out"))))))))};var B=function(e){var t=e.children;return l.a.createElement("main",{className:"h-full overflow-y-auto"},l.a.createElement("div",{className:"container grid px-6 mx-auto"},t))},L=a(21),U=Object(r.lazy)((function(){return a.e(3).then(a.bind(null,274))}));t.default=function(){var e=Object(r.useContext)(S.a),t=e.isSidebarOpen,a=e.closeSidebar,c=Object(o.g)(),s=Object(r.useState)([]),i=Object(n.a)(s,2),u=i[0],m=i[1];return Object(r.useEffect)((function(){a()}),[c]),l.a.createElement("div",{className:"flex h-screen bg-gray-50 dark:bg-gray-900 ".concat(t&&"overflow-hidden")},l.a.createElement(D,null),l.a.createElement("div",{className:"flex flex-col flex-1 w-full"},l.a.createElement(M,{setResults:m}),l.a.createElement(B,null,l.a.createElement(r.Suspense,{fallback:l.a.createElement(L.a,null)},l.a.createElement(o.d,null,f.map((function(e,t){return e.component?l.a.createElement(o.b,{key:t,exact:!0,path:"/app".concat(e.path),render:function(t){return l.a.createElement(e.component,Object.assign({},t,{results:u}))}}):null})),l.a.createElement(o.a,{exact:!0,from:"/app",to:"/app/dashboard"}),l.a.createElement(o.b,{component:U}))))))}}}]);
//# sourceMappingURL=22.758b6ab2.chunk.js.map