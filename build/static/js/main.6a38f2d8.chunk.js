(this.webpackJsonptasksaver=this.webpackJsonptasksaver||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=a(9),i=Object(n.createContext)(void 0),l=function(e){var t=e.children,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],f=m[1];return r.a.createElement(i.Provider,{value:{message:o,messageSeverity:p,setMessage:l,setMessageSeverity:f,clearMessage:function(){l(""),f("")}}},t)},u=a(16),m=a(131),p=a(141),f=a(142),d=a(59),g=a(140),v=a(134),b=a(155),E=a(136),h=a(137),O=a(138),k=a(139),j={marginTop:"20px",marginBottom:"10px"},x={title:{textAlign:"center"},dialogActions:{justifyContent:"center"},contentText:{minWidth:"200px",overflow:"hidden",textOverflow:"ellipsis"},description:{fontSize:"1rem"},exitToAppIcon:{color:"white"}},y=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(2),marginBottom:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},dialogButtonsWrapper:{display:"flex",justifyContent:"center",marginTop:"15px"},addTaskButton:{marginBottom:"30px"}}})),w=a(70),C=a.n(w),S=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(u.g)(),i=function(){c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:function(){c(!0)}},r.a.createElement(C.a,{style:x.exitToAppIcon})),r.a.createElement(b.a,{open:a,onClose:i},r.a.createElement(E.a,{style:x.title},"Log out"),r.a.createElement(h.a,null,r.a.createElement(O.a,null,"Are you sure you want to log out ?")),r.a.createElement(k.a,{style:x.dialogActions},r.a.createElement(g.a,{onClick:function(){localStorage.clear(),o.push("/login")},color:"primary",autoFocus:!0},"Yes"),r.a.createElement(g.a,{onClick:i,color:"primary"},"Cancel"))))},T=a(71),N=a.n(T),I=Object(m.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},img:{height:"30px",marginRight:"7px",cursor:"pointer"}}})),A=function(){var e=localStorage.loggedInUser&&JSON.parse(localStorage.loggedInUser).username,t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(s.a)(i,2),m=l[0],v=l[1],b=Object(u.g)(),E=Object(u.h)(),h=I();Object(n.useEffect)((function(){o(localStorage.loggedInUser),function(){var e=E.pathname;c?O():v("/login"===e||"/"===e?"register":"login")}()}),[c,E]);var O=function(){v("")};return r.a.createElement(p.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement("img",{src:N.a,alt:"navbar-img",className:h.img,onClick:function(){window.location.reload()}}),r.a.createElement(d.a,{variant:"h6",className:h.title},"TaskSaver"),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"subtitle1"},e),r.a.createElement(S,null)):r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(g.a,{onClick:function(){b.push(m)},color:"inherit"},m))))},M=a(7),W=a.n(M),_=a(13),z=a(75),B="GET",D="POST",U="PUT",q="DELETE",F="Add",J="Edit",P=function(e,t){return{method:e,headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(t)}},R=function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.status,n=[400,401,404,500],e.next=4,t.json();case 4:if(r=e.sent,!n.includes(a)){e.next=7;break}return e.abrupt("return",{data:r,success:!1});case 7:return e.abrupt("return",{data:r,success:!0});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(D,t),e.next=3,fetch("".concat("api/auth","/login"),a);case 3:return n=e.sent,e.abrupt("return",R(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(D,t),e.next=3,fetch("".concat("api/auth","/register"),a);case 3:return n=e.sent,e.abrupt("return",R(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e,t,a,n){var r=e.data,c=r.user,o=r.token,s=r.message;if(o){var i=Object(z.a)({},c,{},t);localStorage.loggedInUser=JSON.stringify(i),localStorage.token=o,a.push("/tasks")}else n(s)},G=a(154),Y=a(151),Z="didn't changed",H="success",K="error",Q="warning",X=function(){var e=Object(n.useContext)(i),t=e.message,a=e.messageSeverity,c=e.clearMessage,o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],m=l[1],p=function(){c(),m(!1)};return Object(n.useEffect)((function(){t?m(!0):p()}),[t]),r.a.createElement(r.a.Fragment,null,t&&a&&r.a.createElement(G.a,{open:u,autoHideDuration:3e3,onClose:function(){return p()}},r.a.createElement(Y.a,{elevation:6,variant:"filled",severity:a,onClose:function(){return p()}},t)))},ee=new RegExp(/[a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),te=new RegExp(/[a-zA-Z][a-zA-Z ]+/),ae=new RegExp(/^[a-z0-9_-]{3,16}$/),ne="Login",re="Register",ce=function(e,t){var a=e.firstName,n=e.lastName,r=e.username,c=e.email,o=e.password,s={isValid:!0,errors:[]};return ee.test(c)||s.errors.push("Please insert a valid email address"),o.length<3&&s.errors.push("Password must contain at least 3 characters"),t===re&&a&&n&&r&&(te.test(a)||s.errors.push("Please insert a valid first name"),te.test(n)||s.errors.push("Please insert a valid last name"),ae.test(r)||s.errors.push("Username must contain at least 3 characters")),s.errors.length>0&&(s.isValid=!1),s},oe=a(144),se=a(156),ie=a(150),le=a(54),ue=a.n(le),me=function(e){var t=e.history,a=Object(n.useContext)(i),c=a.setMessage,o=a.setMessageSeverity,l=a.clearMessage,u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],f=m[1],v=Object(n.useState)(""),b=Object(s.a)(v,2),E=b[0],h=b[1],O=y(),k=function(){var e=Object(_.a)(W.a.mark((function e(a){var n,r,c,o,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l(),!(r=ce(n={email:p,password:E},ne)).isValid){e.next=12;break}return e.next=7,L(n);case 7:o=e.sent,s=null===(c=o.data)||void 0===c?void 0:c.user,$(o,s,t,j),e.next=13;break;case 12:j(r.errors[0]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){c(e),o(K)};return r.a.createElement(oe.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:O.paper},r.a.createElement(se.a,{className:O.avatar},r.a.createElement(ue.a,null)),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Login"),r.a.createElement("form",{className:O.form,onSubmit:k},r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"email",autoComplete:"email",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"password",autoComplete:"password",value:E,type:"password",onChange:function(e){return h(e.target.value)}}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:O.submit},"Login"))))},pe=a(145),fe=a(153),de=function(e){var t=e.history,a=Object(n.useContext)(i),c=a.setMessage,o=a.setMessageSeverity,l=a.clearMessage,u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],f=m[1],v=Object(n.useState)(""),b=Object(s.a)(v,2),E=b[0],h=b[1],O=Object(n.useState)(""),k=Object(s.a)(O,2),j=k[0],x=k[1],w=Object(n.useState)(""),C=Object(s.a)(w,2),S=C[0],T=C[1],N=Object(n.useState)(""),I=Object(s.a)(N,2),A=I[0],M=I[1],z=Object(n.useState)(!1),B=Object(s.a)(z,2),D=B[0],U=B[1],q=y(),F=function(){var e=Object(_.a)(W.a.mark((function e(a){var n,r,c,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l(),!(c=ce(r={firstName:p,lastName:E,username:j,email:S,password:A,role:n=D?0:1},re)).isValid){e.next=13;break}return e.next=8,V(r);case 8:o=e.sent,$(o,{username:j,role:n},t,J),e.next=14;break;case 13:J(c.errors[0]);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){c(e),o(K)};return r.a.createElement(oe.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:q.paper},r.a.createElement(se.a,{className:q.avatar},r.a.createElement(ue.a,null)),r.a.createElement(d.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:q.form,onSubmit:F},r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"first name",autoComplete:"first name",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"last name",autoComplete:"last name",value:E,onChange:function(e){return h(e.target.value)}}),r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"username",autoComplete:"username",value:j,onChange:function(e){return x(e.target.value)}}),r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"email",autoComplete:"email",value:S,onChange:function(e){return T(e.target.value)}}),r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"password",autoComplete:"password",value:A,type:"password",onChange:function(e){return M(e.target.value)}}),r.a.createElement(pe.a,{control:r.a.createElement(fe.a,{color:"primary",checked:D,onChange:function(){return U(!D)}}),label:"admin"}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:q.submit},"Register"))))},ge=H,ve=K,be=function(){var e=Object(_.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P(B),e.next=3,fetch("".concat("api/tasks"),t);case 3:return a=e.sent,e.abrupt("return",R(a));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(D,t),e.next=3,fetch("api/tasks",a);case 3:return n=e.sent,e.abrupt("return",R(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(U,t),e.next=3,fetch("".concat("api/tasks","/").concat(t._id),a);case 3:return n=e.sent,e.abrupt("return",R(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(_.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(q,t),e.next=3,fetch("".concat("api/tasks","/").concat(t._id),a);case 3:return n=e.sent,e.abrupt("return",R(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(e,t){var a=e.data.message,n=e.success;return t(a,n?ge:ve),n},je=a(58),xe=a(72),ye=a.n(xe),we=a(73),Ce=a.n(we),Se=function(e){var t=e.getTasks,a=e.formType,c=e.taskToEdit,o=e.setMessage,i=JSON.parse(localStorage.loggedInUser)._id,l=a===J&&c,u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],f=m[1],E=Object(n.useState)(""),O=Object(s.a)(E,2),k=O[0],j=O[1],x=Object(n.useState)(!1),w=Object(s.a)(x,2),C=w[0],S=w[1],T=Object(n.useState)(!1),N=Object(s.a)(T,2),I=N[0],A=N[1],M=y(),z=function(){A(!0)},B=function(){A(!1),S(!1)};Object(n.useEffect)((function(){if(l&&c){var e=c.title,t=c.description;P(e,t)}}),[l,c,I]);var D=function(){var e=Object(_.a)(W.a.mark((function e(a){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),S(!0),o("",""),!l){e.next=9;break}return e.next=6,q();case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,U();case 11:e.t0=e.sent;case 12:n=e.t0,B(),n&&(P("",""),t());case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(_.a)(W.a.mark((function e(){var t,a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,a={userId:i,title:p,description:k,createdAt:Date.now()},e.next=4,Ee(a);case 4:return n=e.sent,t=ke(n,o),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(_.a)(W.a.mark((function e(){var t,a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,!c){e.next=12;break}if(a={_id:c._id,userId:i,title:p,description:k},F(c,a)){e.next=11;break}return e.next=7,he(a);case 7:n=e.sent,t=ke(n,o),e.next=12;break;case 11:o("Task ".concat(Z),Q);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(e,t){var a=!1,n=(e.__v,e._id,e.createdAt,e.userId,Object(je.a)(e,["__v","_id","createdAt","userId"])),r=(t._id,t.userId,Object(je.a)(t,["_id","userId"]));return Object.keys(n).sort(),Object.keys(r).sort(),JSON.stringify(n)===JSON.stringify(r)&&(a=!0),a},P=function(e,t){f(e),j(t)};return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(v.a,{onClick:z},r.a.createElement(ye.a,null)):r.a.createElement(g.a,{type:"button",variant:"contained",color:"primary",className:M.addTaskButton,onClick:z},"Add Task"),r.a.createElement(b.a,{open:I,onClose:B,"aria-labelledby":"form-dialog-title"},r.a.createElement(h.a,null,r.a.createElement(oe.a,null,r.a.createElement("div",{className:M.paper},r.a.createElement(se.a,{className:M.avatar},r.a.createElement(Ce.a,null)),r.a.createElement(d.a,{component:"h1",variant:"h5"},l?"Edit":"Add"," Task"),r.a.createElement("form",{className:M.form,onSubmit:D},r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"title",autoComplete:"title",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement(ie.a,{required:!0,variant:"outlined",margin:"normal",fullWidth:!0,label:"description",autoComplete:"description",value:k,onChange:function(e){return j(e.target.value)}}),r.a.createElement("div",{className:M.dialogButtonsWrapper},r.a.createElement(g.a,{disabled:C,type:"submit",color:"primary"},"Save"),r.a.createElement(g.a,{onClick:B,type:"button",color:"primary"},"Cancel"))))))))},Te=a(146),Ne=a(147),Ie=a(148),Ae=a(149),Me=a(74),We=a.n(Me),_e=function(e){var t=e.task,a=e.getTasks,c=e.setMessage,o=Object(n.useState)(!1),i=Object(s.a)(o,2),l=i[0],u=i[1],m=function(){u(!1)},p=function(){var e=Object(_.a)(W.a.mark((function e(){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.next=3,Oe(t);case 3:n=e.sent,ke(n,c),n.success&&a();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onClick:function(){u(!0)}},r.a.createElement(We.a,null)),r.a.createElement(b.a,{open:l,onClose:m},r.a.createElement(E.a,{style:x.title},"Delete Task..."),r.a.createElement(h.a,null,r.a.createElement(O.a,{style:x.contentText},"Are you sure you want to delete ",t.title," ?")),r.a.createElement(k.a,{style:x.dialogActions},r.a.createElement(g.a,{onClick:p,color:"primary"},"Yes"),r.a.createElement(g.a,{onClick:m,color:"primary"},"Cancel"))))},ze=Object(m.a)((function(){return{card:{height:"100%"},cardContent:{textAlign:"center","& > *":{overflow:"hidden",textOverflow:"ellipsis"}},userDetails:{marginTop:"10px"},cardActions:{justifyContent:"center"}}})),Be=function(e){var t=e.tasks,a=e.getTasks,n=e.setMessage,c=ze();return r.a.createElement(Te.a,{container:!0,spacing:2},null===t||void 0===t?void 0:t.map((function(e){var t,o;return r.a.createElement(Te.a,{item:!0,xs:12,sm:5,key:e._id},r.a.createElement(Ne.a,{elevation:3,className:c.card},r.a.createElement(Ie.a,{className:c.cardContent},r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(d.a,{variant:"subtitle1"},e.description),r.a.createElement("div",{className:c.cardContent+" "+c.userDetails},r.a.createElement(d.a,{variant:"subtitle1",color:"textSecondary"},null===(t=e.userId)||void 0===t?void 0:t.email),r.a.createElement(d.a,{variant:"subtitle1",color:"textSecondary"},"Created at: ",(o=e.createdAt,new Intl.DateTimeFormat("he-IL").format(new Date(o)).split(".").join("/"))))),r.a.createElement(Ae.a,{className:c.cardActions},r.a.createElement(Se,{formType:J,taskToEdit:e,getTasks:a,setMessage:n}),r.a.createElement(_e,{task:e,getTasks:a,setMessage:n}))))})))},De=function(){var e=Object(n.useContext)(i),t=e.setMessage,a=e.setMessageSeverity,c=Object(n.useState)(null),o=Object(s.a)(c,2),l=o[0],u=o[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(_.a)(W.a.mark((function e(){var t,a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:t=e.sent,a=t.success,n=t.data,a&&u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e,n){t(e),a(n)};return r.a.createElement(oe.a,null,r.a.createElement(d.a,{component:"h1",variant:"h5",style:j},"Tasks"),r.a.createElement(Se,{getTasks:m,formType:F,setMessage:p}),r.a.createElement(Be,{tasks:l,getTasks:m,setMessage:p}))},Ue=a(36),qe=Object(m.a)((function(){return{link:{textDecoration:"none"}}})),Fe=function(){var e=qe();return r.a.createElement(oe.a,null,r.a.createElement(d.a,{component:"h1",variant:"h5",style:j},"404 Page not found"),r.a.createElement(Ue.b,{to:"/tasks",className:e.link},r.a.createElement(g.a,{variant:"contained",color:"primary"},"Back")))},Je=function(e){var t=e.path,a=e.Component;return r.a.createElement(u.b,{path:t,render:function(e){return localStorage.loggedInUser?r.a.createElement(a,e):r.a.createElement(u.a,{to:"/login"})}})},Pe=function(e){var t=e.path,a=e.Component;return r.a.createElement(u.b,{path:t,render:function(e){return localStorage.loggedInUser?r.a.createElement(u.a,{to:"/tasks"}):r.a.createElement(a,e)}})},Re=function(){return r.a.createElement(u.b,{render:function(){return localStorage.loggedInUser?r.a.createElement(u.a,{to:"/tasks"}):r.a.createElement(u.a,{to:"/login"})}})},Le=function(){return r.a.createElement(Ue.a,null,r.a.createElement(A,null),r.a.createElement(l,null,r.a.createElement(u.d,null,r.a.createElement(Pe,{exact:!0,path:"/login",Component:me}),r.a.createElement(Pe,{exact:!0,path:"/register",Component:de}),r.a.createElement(Je,{exact:!0,path:"/tasks",Component:De}),r.a.createElement(Re,{exact:!0,path:"/",Component:De}),r.a.createElement(u.b,{component:Fe})),r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a.p+"static/media/appIcon.0f30bf67.png"},89:function(e,t,a){e.exports=a(101)}},[[89,1,2]]]);
//# sourceMappingURL=main.6a38f2d8.chunk.js.map