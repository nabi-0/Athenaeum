(this.webpackJsonpathenaeum=this.webpackJsonpathenaeum||[]).push([[4],{11:function(e,t,n){"use strict";t.a={login:function(e){return fetch("/user/login",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))},register:function(e){return fetch("/user/register",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))},logout:function(){return fetch("/user/logout").then((function(e){return e.json()})).then((function(e){return e}))},isAuthenticated:function(){return fetch("/user/authenticated").then((function(e){return 401!==e.status?e.json().then((function(e){return e})):{isAuthenticated:!1,user:{username:"",role:""}}}))}}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var a=n(6),r=(n(23),n(0)),c=n.n(r),u=Object(r.createContext)(),o=function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),o=n[0],i=n[1];return c.a.createElement(u.Provider,{value:[o,i]},e.children)}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return o}));var a=n(6),r=n(0),c=n.n(r),u=c.a.createContext(),o=function(e){var t=e.children,n=Object(r.useState)(!1),o=Object(a.a)(n,2),i=o[0],l=o[1];function s(){l(!i)}function f(){l(!1)}var m=Object(r.useMemo)((function(){return{isSidebarOpen:i,toggleSidebar:s,closeSidebar:f}}),[i]);return c.a.createElement(u.Provider,{value:m},t)}},21:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},25:function(e,t,n){e.exports=n(35)},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c),o=(n(30),n(9)),i=n(12),l=(n(11),n(10)),s=n(1),f=n(6);var m=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],u=Object(s.g)();return Object(a.useEffect)((function(){u.pathname.slice(1)?setTimeout((function(){return c("Navigated to ".concat(u.pathname.slice(1)," page."))}),500):c("")}),[u]),r.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},n)},h=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(7),n.e(1),n.e(23)]).then(n.bind(null,1340))})),d=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(18)]).then(n.bind(null,1323))})),b=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(1),n.e(17)]).then(n.bind(null,1324))})),p=Object(a.lazy)((function(){return n.e(25).then(n.bind(null,1325))}));var j=function(){var e=Object(a.useContext)(o.a);return e.isAuthenticated,e.user,e.setIsAuthenticated,e.setUser,r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(m,null),r.a.createElement(s.d,null,r.a.createElement(s.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(s.b,{path:"/login",component:d}),r.a.createElement(s.b,{path:"/create-account",component:b}),r.a.createElement(s.b,{path:"/forgot-password",component:p}),r.a.createElement(s.b,{path:"/app",component:h}))))},E=n(18),O=n(21),g=n(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(i.b,null,r.a.createElement(o.b,null,r.a.createElement(E.b,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(O.a,null)},r.a.createElement(g.Windmill,{usePreferences:!0},r.a.createElement(j,null)))))),document.getElementById("root"))},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(6),r=n(0),c=n.n(r),u=n(11),o=Object(r.createContext)();t.b=function(e){var t=e.children,n=Object(r.useState)(null),i=Object(a.a)(n,2),l=i[0],s=i[1],f=Object(r.useState)(!1),m=Object(a.a)(f,2),h=m[0],d=m[1],b=Object(r.useState)(!1),p=Object(a.a)(b,2),j=p[0],E=p[1];return Object(r.useEffect)((function(){u.a.isAuthenticated().then((function(e){s(e.user),d(e.isAuthenticated),E(!0)}))}),[]),c.a.createElement("div",null,j?c.a.createElement(o.Provider,{value:{user:l,setUser:s,isAuthenticated:h,setIsAuthenticated:d}},t):c.a.createElement("h1",null,"Loading"))}}},[[25,5,8]]]);
//# sourceMappingURL=main.188f82d8.chunk.js.map