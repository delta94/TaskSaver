(this.webpackJsonptasksaver=this.webpackJsonptasksaver||[]).push([[0],{133:function(e,t,a){},154:function(e,t,a){e.exports=a.p+"static/media/appIcon.0f30bf67.png"},172:function(e,t,a){e.exports=a(313)},206:function(e,t){},214:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=a(10),l=a(347),i=a(105),u=a.n(i),m=u()(),d=Object(n.createContext)(void 0),f=function(e){var t=e.children,a=e.theme,c=e.setTheme,s=Object(n.useState)(""),i=Object(o.a)(s,2),f=i[0],p=i[1],g=Object(n.useState)(""),b=Object(o.a)(g,2),v=b[0],h=b[1],E=Object(n.useState)({}),O=Object(o.a)(E,2),j=O[0],k=O[1],x=Object(n.useState)(!1),y=Object(o.a)(x,2),C=y[0],w=y[1],N=Object(l.a)("(max-width:599px)"),S=Object(l.a)("(min-width:1200px)");return r.a.createElement(d.Provider,{value:{message:f,messageSeverity:v,setMessage:p,setMessageSeverity:h,clearMessage:function(){p(""),h("")},theme:a,setTheme:c,socket:m,loggedInUser:j,isAdmin:C,getUserFromLS:function(){var e=JSON.parse(localStorage.loggedInUser);k(e),w(0===e.role)},disconnect:function(){localStorage.clear(),m.disconnect(),m=u()(),k({}),w(!1)},isMobile:N,isDrawerOpened:S}},t)},p=a(373),g=a(374),b=a(160),v=a(376),h=Object(b.a)({palette:{type:"light",primary:{main:"#4f8a8b",contrastText:"#fff"},secondary:{main:"#fff",contrastText:"#fff"},success:{main:"#4f8a8b",contrastText:"#fff"}},typography:{button:{textTransform:"capitalize"}},overrides:{MuiAvatar:{colorDefault:{backgroundColor:"#4f8a8b"}}}}),E=Object(b.a)({palette:{type:"dark",primary:{main:"#c26565"},secondary:{main:"#fff"},success:{main:"#c26565",contrastText:"#fff"}},typography:{button:{textTransform:"capitalize"}},overrides:{MuiCard:{root:{border:"2px solid #000"}},MuiAvatar:{colorDefault:{backgroundColor:"#c26565"}}}}),O=function(){var e=Object(n.useContext)(d),t=e.theme,a=e.setTheme,c=function(e){a(e.target.value),localStorage.theme=JSON.stringify(e.target.value)};return r.a.createElement("div",{className:"mr-3"},r.a.createElement(v.a,{value:"dark",checked:"dark"===t,onChange:c}),r.a.createElement(v.a,{value:"light",checked:"light"===t,onChange:c}))},j=a(35),k=a(372),x=a(17),y=a(379),C=a(377),w="didn't changed",N="success",S="error",T="warning",I=function(){var e=Object(n.useContext)(d),t=e.message,a=e.messageSeverity,c=e.clearMessage,s=Object(n.useState)(!1),l=Object(o.a)(s,2),i=l[0],u=l[1],m=function(){c(),u(!1)};return Object(n.useEffect)((function(){t?u(!0):m()}),[t]),r.a.createElement(r.a.Fragment,null,t&&a&&r.a.createElement(y.a,{open:i,autoHideDuration:3e3,onClose:function(){return m()}},r.a.createElement(C.a,{elevation:6,variant:"filled",severity:a,onClose:function(){return m()}},t)))},z=a(357),_=a(358),A=a(44),M=a(356),U=a(315),D=a(351),W=a(352),F=a(353),R=a(354),L=a(355),J=a(153),q=a.n(J),P=function(){var e=Object(n.useContext)(d).disconnect,t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(x.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{onClick:function(){return s(!0)},color:"secondary"},r.a.createElement(q.a,null)),r.a.createElement(D.a,{className:"dialog",open:c,onClose:function(){return s(!1)}},r.a.createElement(W.a,{className:"text-center"},"Log out"),r.a.createElement(F.a,null,r.a.createElement(R.a,{className:"content-text"},"Are you sure you want to log out ?")),r.a.createElement(L.a,{className:"justify-content-center"},r.a.createElement(M.a,{onClick:function(){e(),l.push("/login")},autoFocus:!0},"Yes"),r.a.createElement(M.a,{onClick:function(){return s(!1)}},"Cancel"))))},V=a(154),B=a.n(V),$=(a(214),function(){var e=Object(n.useContext)(d).loggedInUser,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],l=Object(x.g)(),i=Object(x.h)();Object(n.useEffect)((function(){!function(){var t=i.pathname;e._id?u():s("/login"===t||"/"===t?"register":"login")}()}),[e,i]);var u=function(){s("")};return r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(z.a,{position:"fixed",className:"navbar"},r.a.createElement(_.a,null,r.a.createElement("img",{src:B.a,alt:"navbar-img",onClick:function(){window.location.reload()},height:"30"}),r.a.createElement(A.a,{variant:"h6",className:"title"},"TaskSaver"),r.a.createElement(O,null),e._id?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{variant:"subtitle1",className:"username"},e.username),r.a.createElement(P,null)):r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(M.a,{onClick:function(){l.push(c)},color:"secondary"},c)))))}),H=a(13),Z=a(7),Y=a.n(Z),G=a(15),K="GET",Q="POST",X="Add",ee="Edit",te=function(e,t){return{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}},ae=function(){var e=Object(G.a)(Y.a.mark((function e(t){var a,n,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.status,n=[400,401,404,500],e.next=4,t.json();case 4:if(r=e.sent,!n.includes(a)){e.next=7;break}return e.abrupt("return",{data:r,success:!1});case 7:return e.abrupt("return",{data:r,success:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(G.a)(Y.a.mark((function e(t){var a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=te(Q,t),e.next=3,fetch("".concat("api/auth","/login"),a);case 3:return n=e.sent,e.abrupt("return",ae(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(G.a)(Y.a.mark((function e(t){var a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=te(Q,t),e.next=3,fetch("".concat("api/auth","/register"),a);case 3:return n=e.sent,e.abrupt("return",ae(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(e){var t=e.res,a=e.clientInputs,n=e.history,r=e.setErrorMessage,c=t.data,s=c.user,o=c.message;if(s){var l=Object(H.a)(Object(H.a)({},a),s);localStorage.loggedInUser=JSON.stringify(l),n.push("/tasks")}else r(o)},se=new RegExp(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),oe=new RegExp(/[a-zA-Z][a-zA-Z ]+/),le=new RegExp(/^[a-z0-9_-]{3,16}$/),ie="Login",ue="Register",me=function(e,t){var a=e.firstName,n=e.lastName,r=e.username,c=e.email,s=e.password,o=e.role,l=e.organizationId,i={isValid:!0,errors:[]};return se.test(c)||i.errors.push("Please insert a valid email address"),s.length<3&&i.errors.push("Password must contain at least 3 characters"),t===ue&&a&&n&&r&&(oe.test(a)||i.errors.push("Please insert a valid first name"),oe.test(n)||i.errors.push("Please insert a valid last name"),le.test(r)||i.errors.push("Please insert a valid username"),0!==o&&1!==o&&i.errors.push("User role must be 0 or 1"),l||i.errors.push("User must belong to an organization")),i.errors.length>0&&(i.isValid=!1),i},de=a(380),fe=a(381),pe=a(84),ge=a.n(pe),be=(a(133),function(e){var t=e.history,a=Object(n.useContext)(d),c=a.setMessage,s=a.setMessageSeverity,l=a.clearMessage,i=Object(n.useState)({email:"",password:""}),u=Object(o.a)(i,2),m=u[0],f=u[1],p=function(){var e=Object(G.a)(Y.a.mark((function e(a){var n,r,c,s,o;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l(),n=m.email,r=m.password,!(s=me(c={email:n,password:r},ie)).isValid){e.next=12;break}return e.next=8,ne(c);case 8:o=e.sent,ce({res:o,history:t,setErrorMessage:g}),e.next=13;break;case 12:g(s.errors[0]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){c(e),s(S)};return r.a.createElement("div",{className:"login-container"},r.a.createElement(de.a,null,r.a.createElement(ge.a,null)),r.a.createElement(A.a,{className:"mt-1",component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"email",autoComplete:"email",value:m.email,onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{email:e.target.value}))}}),r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"password",autoComplete:"password",value:m.password,type:"password",onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{password:e.target.value}))}}),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Login")))}),ve=function(){var e=Object(G.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=te(K),e.next=3,fetch("api/organizations",t);case 3:return a=e.sent,e.abrupt("return",ae(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=a(361),Ee=a(383),Oe=a(375),je=a(363),ke=a(364),xe=a(378),ye=function(e){var t=e.history,a=Object(n.useContext)(d),c=a.setMessage,s=a.setMessageSeverity,l=a.clearMessage,i=Object(n.useState)({firstName:"",lastName:"",username:"",email:"",password:"",organizations:[],organizationId:"",isAdmin:!1}),u=Object(o.a)(i,2),m=u[0],f=u[1];Object(n.useEffect)((function(){(function(){var e=Object(G.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve();case 2:a=e.sent,(null===(t=a.data)||void 0===t?void 0:t.organizations)&&f(Object(H.a)(Object(H.a)({},m),{},{organizations:a.data.organizations}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(G.a)(Y.a.mark((function e(a){var n,r,c,s,o,i,u,d,f,p,b;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l(),n=m.firstName,r=m.lastName,c=m.username,s=m.email,o=m.password,i=m.organizationId,u=m.isAdmin,!(p=me(f={firstName:n,lastName:r,username:c,email:s,password:o,role:d=u?0:1,organizationId:i},ue)).isValid){e.next=14;break}return e.next=9,re(f);case 9:b=e.sent,ce({res:b,clientInputs:{username:c,role:d,organizationId:i},history:t,setErrorMessage:g}),e.next=15;break;case 14:g(p.errors[0]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){c(e),s(S)};return r.a.createElement("div",{className:"register-container"},r.a.createElement(de.a,null,r.a.createElement(ge.a,null)),r.a.createElement(A.a,{className:"mt-1",component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{onSubmit:p},r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"first name",autoComplete:"first name",value:m.firstName,onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{firstName:e.target.value}))}}),r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"last name",autoComplete:"last name",value:m.lastName,onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{lastName:e.target.value}))}}),r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"username",autoComplete:"username",value:m.username,onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{username:e.target.value}))}}),r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"email",autoComplete:"email",value:m.email,onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{email:e.target.value}))}}),r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"password",autoComplete:"password",value:m.password,type:"password",onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{password:e.target.value}))}}),r.a.createElement(he.a,{className:"org-select"},r.a.createElement(Ee.a,null,"Organization"),r.a.createElement(Oe.a,{value:m.organizationId,onChange:function(e){return f(Object(H.a)(Object(H.a)({},m),{},{organizationId:e.target.value}))}},m.organizations.map((function(e,t){return r.a.createElement(je.a,{key:t,value:e._id},e.name)})))),r.a.createElement(ke.a,{control:r.a.createElement(xe.a,{color:"primary",checked:m.isAdmin,onChange:function(){return f(Object(H.a)(Object(H.a)({},m),{},{isAdmin:!m.isAdmin}))}}),label:"admin"}),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Register")))},Ce=a(365),we=a(366),Ne=a(367),Se=a(368),Te=a(85),Ie=Object(n.createContext)(void 0),ze=function(e){var t=e.children,a=Object(n.useContext)(d),c=a.socket,s=a.setMessage,l=a.setMessageSeverity,i=a.getUserFromLS,u=Object(n.useState)([]),m=Object(o.a)(u,2),f=m[0],p=m[1],g=Object(n.useState)(null),b=Object(o.a)(g,2),v=b[0],h=b[1],E=Object(n.useState)(null),O=Object(o.a)(E,2),j=O[0],k=O[1],y=Object(n.useState)({}),C=Object(o.a)(y,2),w=C[0],S=C[1],T=Object(n.useState)(""),I=Object(o.a)(T,2),z=I[0],_=I[1],A=JSON.parse(localStorage.loggedInUser),M=Object(x.h)(),U=function(e){s(e),l(N)};return Object(n.useEffect)((function(){i()}),[M]),Object(n.useEffect)((function(){if(c){var e=A.organizationId;c.emit("joinRoom",e),c.on("initialTasks",(function(e){e&&p(e)})),c.on("newTask",(function(e){e&&(p((function(t){return[].concat(Object(Te.a)(t),[e])})),U("Task added successfully"))})),c.on("updatedTask",(function(e){e&&(h(e),U("Task updated successfully"))})),c.on("deletedTaskId",(function(e){e&&(k(e),U("Task deleted successfully"))}))}return function(){return c.removeAllListeners()}}),[c]),Object(n.useEffect)((function(){f&&(v?function(){var e=f.findIndex((function(e){return e._id===v._id}));e>-1&&(f[e]=Object(H.a)(Object(H.a)({},f[e]),v),p(f),h(null))}():j&&function(){var e=f.findIndex((function(e){return e._id===j}));e>-1&&(f.splice(e,1),k(null))}()),function(){if(f.length>0){var e=f.filter((function(e){return 0===e.status})),t=f.filter((function(e){return 1===e.status}));S({openTasks:e.length,closedTasks:t.length})}}()}),[f,v,j]),r.a.createElement(Ie.Provider,{value:{tasks:f,chartData:w,searchValue:z,setSearchValue:_}},t)},_e=a(108),Ae=a(155),Me=a.n(Ae),Ue=a(156),De=a.n(Ue),We=(a(216),function(e){var t=e.formType,a=e.taskToEdit,c=Object(n.useContext)(d),s=c.socket,l=c.setMessage,i=c.setMessageSeverity,u=c.clearMessage,m=c.loggedInUser,f=c.isMobile,p=Object(n.useState)(""),g=Object(o.a)(p,2),b=g[0],v=g[1],h=Object(n.useState)(""),E=Object(o.a)(h,2),O=E[0],j=E[1],k=Object(n.useState)(!1),x=Object(o.a)(k,2),y=x[0],C=x[1],N=Object(n.useState)(!1),S=Object(o.a)(N,2),I=S[0],z=S[1],_=t===ee&&a,W=m._id,R=m.role,L=m.email,J=function(){z(!0)},q=function(){z(!1),C(!1)};Object(n.useEffect)((function(){if(_&&a){var e=a.title,t=a.description;H(e,t)}}),[_,a,I]);var P=function(){var e=Object(G.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C(!0),u(),!_){e.next=8;break}return e.next=6,B();case 6:e.next=10;break;case 8:return e.next=10,V();case 10:q(),H("","");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(G.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={_id:W,email:L},a={title:b,description:O,createdAt:Date.now(),user:t},s.emit("createTask",a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(G.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&(t={_id:a._id,title:b,description:O,status:a.status,user:a.user},$(a,t)?(l(w),i(T)):s.emit("updateTask",{updatedTask:t,loggedInUserId:W,loggedInUserRole:R}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e,t){var a=!1,n=(e._id,e.user,e.createdAt,e.__v,Object(_e.a)(e,["_id","user","createdAt","__v"])),r=(t._id,t.user,Object(_e.a)(t,["_id","user"]));return Object.keys(n).sort(),Object.keys(r).sort(),JSON.stringify(n)===JSON.stringify(r)&&(a=!0),a},H=function(e,t){v(e),j(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"task-form-button-wrapper"},_?r.a.createElement(U.a,{onClick:J},r.a.createElement(Me.a,null)):r.a.createElement(M.a,{color:"primary",variant:"contained",onClick:J},"Add Task")),r.a.createElement(D.a,{className:"dialog",open:I,onClose:q,"aria-labelledby":"form-dialog-title"},r.a.createElement(F.a,{className:f?"pt-2":""},r.a.createElement("div",{className:"form-container "+(f?"mb-0":"")},r.a.createElement(de.a,null,r.a.createElement(De.a,null)),r.a.createElement(A.a,{className:"mt-1",component:"h1",variant:"h5"},_?"Edit":"Add"," Task"),r.a.createElement("form",{onSubmit:P},r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"title",autoComplete:"title",value:b,onChange:function(e){return v(e.target.value)}}),r.a.createElement(fe.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"description",autoComplete:"description",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:"buttons-wrapper "+(f?"mt-0":"")},r.a.createElement(M.a,{disabled:y,type:"submit"},"Save"),r.a.createElement(M.a,{onClick:q,type:"button"},"Cancel")))))))}),Fe=function(){var e=Object(n.useContext)(d),t=e.isAdmin,a=e.isDrawerOpened,c=Object(n.useContext)(Ie),s=c.searchValue,o=c.setSearchValue,l=Object(x.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{item:!0,xs:12,sm:a?12:8,md:a?12:10},r.a.createElement(We,{formType:X}),t&&r.a.createElement(M.a,{className:"ml-2",color:"primary",variant:"contained",onClick:function(){l.push("/dashboard")}},"Dashboard")),r.a.createElement(Ce.a,{item:!0,xs:12,sm:a?12:8,md:a?12:10},r.a.createElement(fe.a,{style:{width:a?"92%":""},className:a?"":"mt-0 mb-0",fullWidth:!a,variant:"outlined",margin:"normal",label:"search",autoComplete:"search",value:s,onChange:function(e){return o(e.target.value)}})))},Re=a(157),Le=a.n(Re),Je=function(e){var t=e.task,a=Object(n.useState)(!1),c=Object(o.a)(a,2),s=c[0],l=c[1],i=Object(n.useContext)(d),u=i.socket,m=i.loggedInUser,f=function(){l(!1)},p=function(){var e=Object(G.a)(Y.a.mark((function e(){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.emit("deleteTask",{taskId:t._id,taskUserId:null===(a=t.user)||void 0===a?void 0:a._id,loggedInUserId:m._id,loggedInUserRole:m.role}),l(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{onClick:function(){l(!0)}},r.a.createElement(Le.a,null)),r.a.createElement(D.a,{className:"dialog",open:s,onClose:f},r.a.createElement(W.a,{className:"text-center"},"Delete Task..."),r.a.createElement(F.a,null,r.a.createElement(R.a,{className:"content-text"},"Are you sure you want to delete ",t.title," ?")),r.a.createElement(L.a,{className:"justify-content-center"},r.a.createElement(M.a,{onClick:p},"Yes"),r.a.createElement(M.a,{onClick:f},"Cancel"))))},qe=(a(217),function(e){return 1===e}),Pe=function(){var e=Object(n.useContext)(Ie),t=e.tasks,a=e.searchValue,c=Object(n.useContext)(d),s=c.socket,o=c.loggedInUser,l=c.isAdmin,i=c.isDrawerOpened,u=o._id,m=o.role,f=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})),p=function(e){var t;return l||(null===(t=e.user)||void 0===t?void 0:t._id)===u};return r.a.createElement(Ce.a,{container:!0,spacing:2,justify:"center",className:"tasks-cards-container"},!i&&r.a.createElement(Fe,null),f.map((function(e){var t,a;return r.a.createElement(Ce.a,{item:!0,xs:12,sm:8,md:5,key:e._id,className:qe(e.status)?"half-opacity":"no-opacity"},r.a.createElement(we.a,{elevation:6,className:"card "+(p(e)?"":"pt-4")},r.a.createElement(Ne.a,{className:"card-content"},r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"title"},e.title),r.a.createElement(A.a,{variant:"subtitle1",className:"description"},e.description),r.a.createElement("div",{className:"user-details"},r.a.createElement(A.a,{variant:"subtitle1",color:"textSecondary"},null===(t=e.user)||void 0===t?void 0:t.email),r.a.createElement(A.a,{variant:"subtitle1",color:"textSecondary"},"Created at: ",(a=e.createdAt,new Intl.DateTimeFormat("he-IL").format(new Date(a)).split(".").join("/"))))),r.a.createElement(Se.a,{className:"actions-wrapper"},p(e)&&r.a.createElement("div",null,r.a.createElement(Je,{task:e}),r.a.createElement(We,{formType:ee,taskToEdit:e}),r.a.createElement(xe.a,{checked:qe(e.status),onChange:function(){return(t=e).status=qe(t.status)?t.status=0:t.status=1,void s.emit("updateTask",{updatedTask:t,loggedInUserId:u,loggedInUserRole:m});var t},color:"primary",inputProps:{"aria-label":"primary checkbox"},className:"pb-0"})))))})))},Ve=(a(218),function(){var e=Object(n.useContext)(d).isDrawerOpened;return r.a.createElement("div",{className:"tasks-container-wrapper"},r.a.createElement(A.a,{component:"h1",variant:"h5",className:"title "+(e?"text-center mb-4":"mb-2")},"Tasks"),r.a.createElement(Pe,null))}),Be=function(){var e=Object(G.a)(Y.a.mark((function e(t){var a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=te(K),e.next=3,fetch("".concat("api/rooms","/").concat(t,"/users"),a);case 3:return n=e.sent,e.abrupt("return",ae(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$e=a(317),He=a(369),Ze=a(370),Ye=a(384),Ge=a(362),Ke=a(371),Qe=(a(219),function(){var e=Math.floor(8*Math.random());return 0===e&&e++,e}),Xe=function(){var e=Object(n.useContext)(d),t=e.isDrawerOpened,a=e.loggedInUser,c=e.socket,s=Object(n.useState)([]),l=Object(o.a)(s,2),i=l[0],u=l[1],m=a._id,f=a.organizationId,p=a.organizationName,g=function(e){return e._id!==a._id},b=i.filter((function(e){return g(e)&&0===e.role})),v=i.filter((function(e){return g(e)&&1===e.role}));Object(n.useEffect)((function(){f&&function(){var e=Object(G.a)(Y.a.mark((function e(){var t,a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Be(f);case 2:t=e.sent,m&&(n=null===(a=t.data)||void 0===a?void 0:a.users.filter((function(e){return g(e)})),u(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(n.useEffect)((function(){return c&&c.on("registrationToRoom",(function(e){e&&u((function(t){return[].concat(Object(Te.a)(t),[e])}))})),function(){return c.removeAllListeners()}}),[c]);var h=function(e){var t=e.user,a=e.length,n=e.index;return r.a.createElement($e.a,{button:!0,className:"list-item "+(n===a-1?"last":"")},r.a.createElement(He.a,null,r.a.createElement(de.a,{alt:"avatar",src:"https://material-ui.com/static/images/avatar/".concat(Qe(),".jpg")})),r.a.createElement(Ze.a,{primary:"".concat(t.firstName," ").concat(t.lastName)}))};return t?r.a.createElement(Ye.a,{variant:"permanent",className:"left-sidebar"},r.a.createElement("div",{className:"drawer-content"},r.a.createElement(Ge.a,{className:"list"},r.a.createElement($e.a,{button:!0,className:"group-title organizationName"},r.a.createElement(Ze.a,{primary:p})),b.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke.a,{className:"divider"}),r.a.createElement($e.a,{button:!0,className:"group-title"},r.a.createElement(Ze.a,{primary:"Admins"})),b.map((function(e,t){return r.a.createElement(h,{user:e,length:b.length,index:t,key:e._id})}))),v.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ke.a,{className:"divider"}),r.a.createElement($e.a,{button:!0,className:"group-title"},r.a.createElement(Ze.a,{primary:"Users"})),v.map((function(e,t){return r.a.createElement(h,{user:e,length:v.length,index:t,key:e._id})})))))):r.a.createElement(r.a.Fragment,null)},et=(a(220),function(){var e=Object(n.useContext)(d),t=e.isDrawerOpened,a=e.isAdmin,c=Object(x.h)();return("/tasks"===c.pathname||"/"===c.pathname)&&t?r.a.createElement(Ye.a,{variant:"permanent",className:"right-sidebar",anchor:"right"},r.a.createElement("div",{className:"drawer-content "+(a?"admin":"not-admin")},r.a.createElement(Fe,null))):r.a.createElement(r.a.Fragment,null)}),tt=function(e){var t=e.path,a=e.isAdminRoute,n=e.Component,c=localStorage.loggedInUser&&JSON.parse(localStorage.loggedInUser),s=a?0===(null===c||void 0===c?void 0:c.role):null===c||void 0===c?void 0:c._id;return r.a.createElement(x.b,{path:t,render:function(){return s?r.a.createElement(ze,null,r.a.createElement(Ce.a,{container:!0,justify:"center"},r.a.createElement(Ce.a,{item:!0},r.a.createElement(Xe,null)),r.a.createElement(Ce.a,{item:!0,xs:12,md:9,xl:10,style:{marginTop:"100px"}},r.a.createElement(n,null)),r.a.createElement(Ce.a,{item:!0},r.a.createElement(et,null)))):r.a.createElement(x.a,{to:"/login"})}})},at=function(e){var t=e.path,a=e.Component;return r.a.createElement(x.b,{path:t,render:function(e){return localStorage.loggedInUser?r.a.createElement(x.a,{to:"/tasks"}):r.a.createElement(a,e)}})},nt=function(){return r.a.createElement(x.b,{render:function(){return localStorage.loggedInUser?r.a.createElement(x.a,{to:"/tasks"}):r.a.createElement(x.a,{to:"/login"})}})},rt=a(158),ct=function(){var e=Object(n.useContext)(d),t=e.theme,a=e.isMobile,c=e.isDrawerOpened,s=Object(n.useContext)(Ie).chartData,o=Object(x.g)(),l="dark"===t?"#c26565":"#4f8a8b",i="dark"===t?"white":"black",u={labels:["Open Tasks","Closed Tasks"],datasets:[{label:"Open Tasks",data:[s.openTasks,0],backgroundColor:l,barThickness:30,borderWidth:2},{label:"Closed Tasks",data:[0,s.closedTasks],backgroundColor:"#f3ecc2",barThickness:30,borderWidth:2}]};return r.a.createElement("div",{className:c?"ml-10":""},r.a.createElement(M.a,{className:"mb-5",variant:"contained",color:"primary",onClick:function(){o.push("/tasks")}},"Back"),r.a.createElement("div",{style:{minHeight:"500px",maxHeight:a?"35vh":""}},r.a.createElement(rt.a,{data:u,options:{maintainAspectRatio:!1,title:{display:!0,text:"Tasks status",fontSize:20,fontColor:i},legend:{labels:{fontColor:i}},scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:i}}],yAxes:[{gridLines:{color:"dark"===t?"rgba(10, 10, 10, 0.2)":"#E8E8E8"},ticks:{beginAtZero:!0,fontColor:i}}]}}})))},st=Object(x.i)((function(){var e=Object(x.h)();return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(k.a,{className:"container",maxWidth:"/login"===e.pathname||"/register"===e.pathname?"xs":"lg"},r.a.createElement(x.d,null,r.a.createElement(at,{exact:!0,path:"/login",Component:be}),r.a.createElement(at,{exact:!0,path:"/register",Component:ye}),r.a.createElement(tt,{exact:!0,path:"/tasks",Component:Ve}),r.a.createElement(tt,{exact:!0,path:"/dashboard",isAdminRoute:!0,Component:ct}),r.a.createElement(nt,{Component:Ve})),r.a.createElement(I,null)))})),ot=(a(312),function(){var e=localStorage.theme&&JSON.parse(localStorage.theme),t=Object(n.useState)(e||"dark"),a=Object(o.a)(t,2),c=a[0],s=a[1];return r.a.createElement(f,{theme:c,setTheme:s},r.a.createElement(p.a,{theme:"light"===c?h:E},r.a.createElement(g.a,null),r.a.createElement(j.a,null,r.a.createElement(st,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.a2bcfc88.chunk.js.map