(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(67),i=n.n(r),l=(n(77),n(4)),o=(n.p,n(3)),d=n.n(o),j=n(6),u=n(26),b=n(15),m=n(2),h=function(e,t){if(!t)return!1;var n=t.pathname;return console.log(n),"/"===n},O=function(e){return new Array(e).fill(0).map((function(e,t){return String("0"+(t+1)).slice(-2)}))},x=a.a.createContext();function f(){return Object(s.useContext)(x)}function p(e){var t=e.children,n=!!Boolean(localStorage.getItem("isAuth"))&&localStorage.getItem("isAuth"),a=Object(s.useState)(n),r=Object(m.a)(a,2),i=r[0],l=r[1],o=Object(s.useState)(""),u=Object(m.a)(o,2),b=u[0];u[1];function h(){return(h=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("isAuth");case 2:l(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={logout:function(){return O.apply(this,arguments)},signin:function(e,t){return h.apply(this,arguments)},isAuth:i,serverError:b};return Object(c.jsx)(x.Provider,{value:f,children:t})}var v=function(){var e=f(),t=e.signin,n=(e.serverError,Object(s.useState)({username:"",password:""})),a=Object(m.a)(n,2),r=a[0],i=a[1],l=Object(s.useState)(""),o=Object(m.a)(l,2),h=o[0],O=o[1],x=function(e){var t=e.target.name,n=e.target.value;i((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},t,n))}))},p=function(){var e=Object(j.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s=r.password,a=r.username,c=Boolean(s)||Boolean(a)?Boolean(a)?Boolean(s)?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 password":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 username":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 username \u0438 password",Boolean(c)){e.next=10;break}return O(""),console.log("Send data"),e.next=7,t();case 7:localStorage.setItem("isAuth",!0),e.next=12;break;case 10:O(c),console.log("current error",c);case 12:case"end":return e.stop()}var s,a}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"auth__outer",children:Object(c.jsxs)("div",{className:"form__container",children:[Object(c.jsx)("h3",{className:"form__title",children:"LOGIN"}),Object(c.jsx)("div",{className:"form__error",children:h}),Object(c.jsxs)("form",{onSubmit:p,className:"form",children:[Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"username",children:"Username"}),Object(c.jsx)("input",{onChange:x,value:r.username,type:"text",className:"form__input",id:"username",name:"username",placeholder:"Enter username"})]}),Object(c.jsxs)("div",{className:"form__group",children:[Object(c.jsx)("label",{className:"form__label",htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{onChange:x,value:r.password,type:"password",name:"password",className:"form__input",id:"password",placeholder:"Enter password"})]}),Object(c.jsx)("div",{className:"form__btn--wrap",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})},_=n(14),y=(n(79),function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"nav__wrap",children:[Object(c.jsx)("div",{className:"nav__item",children:Object(c.jsx)(_.b,{isActive:h,activeClassName:"nav__link--active",className:"nav__link",to:"/",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})}),Object(c.jsx)("div",{className:"nav__item",children:Object(c.jsx)(_.b,{activeClassName:"nav__link--active",className:"nav__link",to:"/settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(c.jsx)("div",{className:"nav__item"})]})})});function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,c,s=function(e,t){if(null==e)return{};var n,c,s={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var w=s.createElement("path",{d:"m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"}),S=s.createElement("path",{d:"m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"});function C(e,t){var n=e.title,c=e.titleId,a=N(e,["title","titleId"]);return s.createElement("svg",g({fill:"#242748",width:"40px",height:"40px",viewBox:"-42 0 512 512.002",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),n?s.createElement("title",{id:c},n):null,w,S)}var k=s.forwardRef(C),A=(n.p,n(84),function(){var e=f().logout;return Object(c.jsxs)("div",{className:"user__wrap",children:[Object(c.jsx)("p",{className:"user__name",children:"Administrator"}),Object(c.jsx)("div",{className:"user__avatar",children:Object(c.jsx)(k,{})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){e()},className:"user__logout",children:Object(c.jsx)("p",{className:"user__logout--text",children:"\u0412\u042b\u0419\u0422\u0418"})})})]})}),E=(n(85),function(){return Object(c.jsx)("div",{className:"my-container",children:Object(c.jsx)("div",{className:"my-header__wrap",children:Object(c.jsxs)("div",{className:"my-header",children:[Object(c.jsx)(y,{}),Object(c.jsx)(A,{})]})})})}),q=n(40),B=n.n(q);B.a.defaults.baseURL="http://127.0.0.1:8000";var I=B.a,L=(n(103),function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){I.get("/api/message").then((function(e){a(e.data)})).catch((function(e){alert(e)}))}),[]);var r=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post("/api/message/",{value:n},{}).then((function(e){a(JSON.parse(e.data).value),alert("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")})).catch((function(e){console.log(e),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"messagesMailer",children:[Object(c.jsxs)("div",{className:"messagesMailer__top",children:[Object(c.jsx)("h3",{className:"messagesMailer__title",children:"\u0420\u0430\u0441\u0441\u044b\u043b\u043a\u0430 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438"}),Object(c.jsx)("button",{onClick:r,className:"btn btn-success",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(c.jsx)("div",{className:"messagesMailer__wrap",children:Object(c.jsx)("textarea",{onChange:function(e){a(e.target.value)},value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:"messagesMailer__textarea",name:"",id:"",cols:"30",rows:"10"})})]})}),F=(n(104),function(e){var t=e.object,n=e.type,a=Object(s.useState)(0),r=Object(m.a)(a,2),i=r[0],l=r[1];Object(s.useEffect)((function(){I.get("/api/freq/".concat(n,"/").concat(i,"/")).then((function(e){l(e.data)})).catch((function(e){console.log("freq get:  ",e),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435. ".concat(e))}))}),[]);var o,u=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post("/api/freq/".concat(n,"/").concat(i,"/"),{},{}).then((function(){l(i),alert("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b")})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435. ".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"freqSend__top",children:[Object(c.jsxs)("h4",{className:"freqSend__title",children:["\u0427\u0430\u0441\u0442\u043e\u0442\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043d\u0430 ",t]}),Object(c.jsx)("button",{onClick:u,className:"btn btn-success freqSend__btn",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(c.jsxs)("div",{className:"freqSend__middle",children:[Object(c.jsx)("p",{className:"freqSend__middle--left",children:"1 \u0440\u0430\u0437 \u0432 "}),Object(c.jsx)("div",{className:"freqSend__result",children:Object(c.jsx)("div",{children:i})}),Object(c.jsx)("p",{children:(o=i,o%10>=2&&o%10<=4&&1!==Math.round(o/10)?"\u0434\u043d\u044f":1==o?"\u0434\u0435\u043d\u044c":"\u0434\u043d\u0435\u0439")})]}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{max:50,onChange:function(e){l(e.target.value)},type:"range",className:"form-control-range freqSend__toddler",id:"formControlRange"})})]})}),M=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{}),Object(c.jsx)("section",{className:"settings__body",children:Object(c.jsxs)("div",{className:"settings__container",children:[Object(c.jsx)("h3",{className:"settings__title",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(c.jsx)(L,{}),Object(c.jsxs)("div",{className:"settings__senders",children:[Object(c.jsx)(F,{object:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d",type:"phone",defValue:"20"}),Object(c.jsx)(F,{object:"\u043f\u043e\u0447\u0442\u0443",type:"mail",defValue:"10"})]})]})})]})},P=n(69),U=(n(199),function(){var e=Object(s.useState)(null),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(null),i=Object(m.a)(r,2),l=i[0],o=i[1],u=Object(s.useState)(null),b=Object(m.a)(u,2),h=b[0],x=b[1],f=Object(s.useState)(!1),p=Object(m.a)(f,2),v=p[0],_=p[1],y=Object(s.useState)(null),g=Object(m.a)(y,2),N=g[0],w=g[1],S=Object(s.useState)(null),C=Object(m.a)(S,2),k=C[0],A=C[1],E=[{name:"2019"}],q=[{name:"\u042f\u043d\u0432\u0430\u0440\u044c",daysCount:31,pres:"01"},{name:"\u0424\u0435\u0432\u0440\u0430\u043b\u044c",daysCount:28,pres:"02"},{name:"\u041c\u0430\u0440\u0442",daysCount:31,pres:"03"},{name:"\u0410\u043f\u0440\u0435\u043b\u044c",daysCount:30,pres:"04"},{name:"\u041c\u0430\u0439",daysCount:31,pres:"05"},{name:"\u0418\u044e\u043d\u044c",daysCount:30,pres:"06"},{name:"\u0418\u044e\u043b\u044c",daysCount:31,pres:"07"},{name:"\u0410\u0432\u0433\u0443\u0441\u0442",daysCount:31,pres:"08"},{name:"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c",daysCount:30,pres:"09"},{name:"\u041e\u043a\u0442\u044f\u0431\u0440\u044c",daysCount:31,pres:"10"},{name:"\u041d\u043e\u044f\u0431\u0440\u044c",daysCount:30,pres:"11"},{name:"\u0414\u0435\u043a\u0430\u0431\u0440\u044c",daysCount:31,pres:"12"}],B={labels:Boolean(k)?O(q.find((function(e){return e.pres==k})).daysCount):O(30),datasets:[{label:"\u041f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440\u0430",data:h,borderColor:["lightcoral"]}]};return Object(s.useEffect)(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Boolean(l)&&Boolean(N)&&Boolean(k))){e.next=6;break}return t=q.find((function(e){return e.pres==k})).daysCount,_(!0),e.next=5,I.get("/api/visit/".concat(l,"/").concat(N,"/").concat(k,"/").concat(t)).then((function(e){x(e.data.visit),_(!1)})).catch((function(e){console.log("Server bad visit request",e),_(!1)}));case 5:console.log("current cinema change");case 6:case"end":return e.stop()}}),e)}))),[l,N,k]),Object(s.useEffect)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cinemas request start"),e.next=3,I.get("/api/cinemas/").then((function(e){a(e.data)})).catch((function(e){console.log("Server bad cinemas request",e)}));case 3:console.log("cinemas requiest end");case 4:case"end":return e.stop()}}),e)}))),[]),Object(c.jsxs)("div",{className:"visitSchedule",children:[Object(c.jsx)("h3",{className:"visitSchedule__title",children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f"}),Object(c.jsxs)("div",{className:"visitSchedule__top",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("select",{disabled:v,className:"visitSchedule__dropdown",onChange:function(e){return function(e){o(e.target.value)}(e)},children:[Object(c.jsx)("option",{value:"default",selected:!0,disabled:!0,hidden:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"}),n&&n.map((function(e){var t=e.fields.hallid;return Object(c.jsx)("option",{value:t,children:t})}))]}),v&&Object(c.jsx)("div",{className:"visitSchedule__top__spinner spinner-border text-dark",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("select",{disabled:v,className:"visitSchedule__dropdown__month",onChange:function(e){return function(e){console.log(e.target.value),A(e.target.value)}(e)},children:[Object(c.jsx)("option",{value:"default",selected:!0,disabled:!0,hidden:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u044f\u0446"}),q&&q.map((function(e){return Object(c.jsx)("option",{value:e.pres,children:e.name})}))]}),Object(c.jsxs)("select",{disabled:v,className:"visitSchedule__dropdown__year",onChange:function(e){return function(e){console.log(e.target.value),w(e.target.value)}(e)},children:[Object(c.jsx)("option",{value:"default",selected:!0,disabled:!0,hidden:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434"}),E&&E.map((function(e){return Object(c.jsx)("option",{value:e.name,children:e.name})}))]})]})]}),Object(c.jsx)("div",{className:"visitSchedule__block",children:Object(c.jsx)(P.Line,{data:B,width:100,height:50,options:{maintainAspectRatio:!1}})})]})}),R=(n(200),function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)([]),i=Object(m.a)(r,2),l=i[0],o=i[1],u=Object(s.useState)(!1),b=Object(m.a)(u,2),h=b[0],O=b[1];return Object(s.useEffect)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,I.get("/api/rec/").then((function(e){o(Object.entries(e.data.rec)),a(e.data.movies),O(!1)})).catch((function(e){console.log("Server bad table request. ".concat(e)),alert("Server bad table request."),O(!1)}));case 3:case"end":return e.stop()}}),e)}))),[]),Object(c.jsxs)("div",{className:"tableStatistics__wrap",children:[Object(c.jsx)("h3",{style:{fontSize:"18px",fontWeight:"500",marginBottom:"15px"},children:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u0430\u043c\u044b\u0445 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432"}),Object(c.jsxs)("table",{style:{background:"#576597"},className:"table table-hover",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"id"}),Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415"}),Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"\u0420\u0415\u0419\u0422\u0418\u041d\u0413"}),Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"\u041e\u0411\u041d\u041e\u0412\u041b\u0415\u041d\u041e"}),Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"ID \u0416\u0410\u041d\u0420\u0410"}),Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"\u041f\u0420\u041e\u0414\u041e\u041b\u0416\u0418\u0422\u0415\u041b\u042c\u041d\u041e\u0421\u0422\u042c"}),Object(c.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"\u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e"})]})}),Object(c.jsx)("tbody",{children:h?Object(c.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(c.jsx)("div",{style:{margin:"10px 0 10px 15px"},className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})}):n.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{style:{textAlign:"center"},children:e[0].id}),Object(c.jsx)("td",{children:e[0].name}),Object(c.jsx)("td",{style:{textAlign:"center"},children:e[0].rate}),Object(c.jsx)("td",{style:{textAlign:"center"},children:e[0].updatedat.slice(0,10)}),Object(c.jsx)("td",{style:{textAlign:"center"},children:e[0].genreid_id}),Object(c.jsx)("td",{style:{textAlign:"center"},children:e[0].duration}),Object(c.jsx)("td",{style:{textAlign:"center"},children:(n=l,s=e[0],n.find((function(e){return e[0]==s.id}))[1])})]},e.id);var n,s}))})]})]})}),z=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{}),Object(c.jsx)("section",{className:"statistics__body",children:Object(c.jsx)("div",{className:"statistics__wrap",children:Object(c.jsxs)("div",{className:"statistics__container",children:[Object(c.jsx)("h3",{className:"statistics__title",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),Object(c.jsx)(U,{}),Object(c.jsx)(R,{})]})})})]})})},D=n(70),J=n.n(D),H=[{id:"123213411",some:"any"},{id:"123213412",some:"any"},{id:"123213413",some:"any"},{id:"123213414",some:"any"},{id:"123213415",some:"any"},{id:"123213416",some:"any"},{id:"123213417",some:"any"},{id:"123213412",some:"any"},{id:"1232134217",some:"any"},{id:"13123123",some:"any"},{id:"123\u0446\u0443\u043a7",some:"any"},{id:"123324417",some:"any"},{id:"1232\u0446\u0443417",some:"any"},{id:"123213417",some:"any"},{id:"12321\u043a\u0446\u0443417",some:"any"},{id:"1232134\u043a\u0446\u04437",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"},{id:"123213417",some:"any"}],T=function(e){var t=e.curUser,n=e.user,s=e.clickHandler;return Object(c.jsx)("div",{onClick:function(){return s(n)},className:J()("analytics__userItem__wrap",{flow:t.id===n.id}),children:Object(c.jsx)("p",{className:"analytics__userItem__id",children:n.id})},n.id)},V=function(){var e=Object(s.useState)({id:"123213417",some:"any"}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(H),i=Object(m.a)(r,2),l=i[0],o=(i[1],function(e){console.log("Click : ".concat(e.id)),a(e)});return Object(s.useEffect)((function(){}),[]),Object(s.useEffect)((function(){}),[n.id]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E,{}),Object(c.jsx)("section",{className:"analytics__body",children:Object(c.jsxs)("div",{className:"analytics__container",children:[Object(c.jsx)("h3",{className:"analytics__title",children:"\u0410\u043d\u0430\u043b\u0438\u0442\u043a\u0430 ML"}),Object(c.jsxs)("div",{className:"analytics__wrap",children:[Object(c.jsxs)("div",{className:"analytics__userList",children:[Object(c.jsx)("h3",{className:"analytics__userList__title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0440\u0438\u0442\u0435\u043b\u0435\u0439"}),Object(c.jsx)("div",{className:"analytics__userList__wrap",children:l.map((function(e){return Object(c.jsx)(T,{user:e,curUser:n,clickHandler:o})}))})]}),Object(c.jsx)("div",{className:"analytics__currentUser",children:Object(c.jsxs)("h4",{children:["Current user, ",n.id]})})]})]})})]})},G=(n(201),n(71));function W(e){var t=e.component,n=Object(G.a)(e,["component"]),s=f().isAuth;return Object(c.jsx)(l.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return s?Object(c.jsx)(t,Object(b.a)({},e)):Object(c.jsx)(l.a,{to:"/signin"})}}))}var K=function(){var e=f().isAuth;return Object(c.jsx)("div",{children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/signin",render:function(){return console.log(e),e?Object(c.jsx)(l.a,{to:"/"}):Object(c.jsx)(v,{})}}),Object(c.jsx)(W,{exact:!0,path:"/settings",component:M}),Object(c.jsx)(W,{exact:!0,path:"/",component:z}),Object(c.jsx)(W,{exact:!0,path:"/analitics",component:V})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(202);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_.a,{children:Object(c.jsx)(p,{children:Object(c.jsx)(K,{})})})}),document.getElementById("root")),Q()},77:function(e,t,n){},79:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){}},[[203,1,2]]]);
//# sourceMappingURL=main.3a8f3640.chunk.js.map