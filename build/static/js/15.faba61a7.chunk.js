(this.webpackJsonpathenaeum=this.webpackJsonpathenaeum||[]).push([[15],{174:function(e,t,a){e.exports=a.p+"static/media/create-account-office.41b2c6a1.jpeg"},175:function(e,t,a){e.exports=a.p+"static/media/create-account-office-dark.d34c7b50.jpeg"},272:function(e,t,a){"use strict";a.r(t);var r=a(58),n=a(69),c=a(6),l=a(0),s=a.n(l),o=a(10),u=(a(80),a(174)),m=a.n(u),i=a(175),f=a.n(i),d=(a(38),a(17)),p=a(11);a(70);t.default=function(e){var t=Object(l.useState)({username:"",password:"",role:"user"}),a=Object(c.a)(t,2),u=a[0],i=a[1],b=Object(l.useState)(null),g=Object(c.a)(b,2),h=(g[0],g[1]),O=Object(l.useRef)(null);Object(l.useEffect)((function(){return function(){clearTimeout(O)}}),[]);var v=function(e){i(Object(n.a)(Object(n.a)({},u),{},Object(r.a)({},e.target.name,e.target.value)))};return s.a.createElement("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900"},s.a.createElement("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"},s.a.createElement("div",{className:"flex flex-col overflow-y-auto md:flex-row"},s.a.createElement("div",{className:"h-32 md:h-auto md:w-1/2"},s.a.createElement("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:m.a,alt:"Office"}),s.a.createElement("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:f.a,alt:"Office"})),s.a.createElement("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},s.a.createElement("div",{className:"w-full"},s.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p.a.register(u).then((function(t){var a=t.message;h(a),i({username:"",password:"",role:""}),a.msgError||(O=setTimeout((function(){e.history.push("/login")}),1e3),alert("Account created. Redirecting to the login page"))}))}},s.a.createElement("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"},"Create Account"),s.a.createElement(d.Label,{htmlFor:"username"},s.a.createElement("span",null,"Username"),s.a.createElement(d.Input,{className:"mt-1",value:u.username,type:"text",placeholder:"Username",name:"username",onChange:v})),s.a.createElement(d.Label,{className:"mt-4",htmlFor:"password"},s.a.createElement("span",null,"Password"),s.a.createElement(d.Input,{className:"mt-1",value:u.password,type:"password",placeholder:"**********",name:"password",onChange:v})),s.a.createElement(d.Button,{className:"mt-4",block:!0,type:"submit"},"Create Account")),s.a.createElement("hr",{className:"my-8"}),s.a.createElement("p",{className:"mt-4"},s.a.createElement(o.b,{className:"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline",to:"/login"},"Already have an account? Login")))))))}},58:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},69:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(58);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},70:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=function(e){var t="alert";return e.message.msgError?t+="alert-danger":t+="alert-primary",t+"text-center"};t.a=function(e){return n.a.createElement("div",{className:c(e),role:"alert"},e.message.msgBody)}}}]);
//# sourceMappingURL=15.faba61a7.chunk.js.map