(this["webpackJsonpfront-app"]=this["webpackJsonpfront-app"]||[]).push([[0],{119:function(e,n,t){},222:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(26),i=t.n(r),o=t(60),s=t(18),l=t(30),u=t(226),d=t(227),j=t(124),b=t(24),m=t.n(b),p=t(37),h=t(40),f=t(41),O=t.n(f),x=function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a,c,r,i,o,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,a=void 0===t?"":t,c=n.password,r=void 0===c?"":c,e.next=3,O.a.post("/api/user/account/login",{email:a,password:r}).catch();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:return i=e.t0,o=i.status,s=i.data,console.log(o,s),O.a.defaults.headers.post.Token=s.token,O.a.defaults.headers.get.Token=s.token,O.a.defaults.headers.put.Token=s.token,O.a.defaults.headers.delete.Token=s.token,e.abrupt("return",200===o?s:null);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a,c,r,i,o,s,l,u,d,j;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,a=void 0===t?"":t,c=n.last_name,r=void 0===c?"":c,i=n.name,o=void 0===i?"":i,s=n.nikename,l=void 0===s?"":s,e.next=3,O.a.post("/api/user/register",{email:a,last_name:r,name:o,nikename:l});case 3:return u=e.sent,d=u.status,j=u.data,e.abrupt("return",200===d?j:null);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=Object(h.b)("login/sinIn",function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a,c,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,a=void 0===t?"":t,c=n.password,r=void 0===c?"":c,e.next=3,x({email:a,password:r});case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),y=Object(h.b)("login/createAccount",g),k=Object(h.c)({name:"login",initialState:{email:"",password:"",sesion:null,loading:!1},reducers:{handleEmail:function(e,n){e.email=n.payload},handlePassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(v.pending,(function(e){e.loading=!0})).addCase(y.pending,(function(e){e.loading=!0})).addCase(v.fulfilled,(function(e,n){e.loading=!1,e.sesion=n.payload})).addCase(y.fulfilled,(function(e){e.loading=!1})).addCase(y.rejected,(function(e){e.loading=!1})).addCase(v.rejected,(function(e){e.loading=!1,e.sesion=null}))}}),w=k.actions,C=w.handleEmail,S=w.handlePassword,P=function(e){return e.login},I=function(e){return e.login.sesion},E=k.reducer,F=t(58),N=t(224),T=t(225),A=t(5),q=N.a.Header,_=N.a.Content,R=N.a.Footer,B=function(e){var n=e.title,t=void 0===n?"":n,a=e.children,c=void 0===a?null:a,r=e.handleSubmit,i=void 0===r?function(){}:r,o=u.a.useForm(),s=Object(F.a)(o,1)[0];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(q,{children:Object(A.jsx)("h1",{style:{color:"#FFF"},children:"Login Page Company SPY"})}),Object(A.jsx)("hr",{}),Object(A.jsx)(_,{style:{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center"},children:Object(A.jsxs)(u.a,{style:{display:"flex",marginTop:-80,minHeight:500,width:450,justifyContent:"space-between",flexDirection:"column",background:"#fff",padding:"20px 35px"},form:s,name:"basic",initialValues:{remember:!1},onSubmitCapture:i,wrapperCol:{span:25},layout:"vertical",children:[Object(A.jsx)("div",{children:Object(A.jsx)(T.a,{children:Object(A.jsx)("h2",{children:t})})}),c,Object(A.jsx)("hr",{}),Object(A.jsx)(R,{children:Object(A.jsx)("small",{children:"Company SPY"})})]})})]})},H=function(){var e=Object(s.g)(),n=Object(l.c)(P),t=n.email,c=n.password,r=n.loading,i=Object(l.b)();Object(a.useEffect)((function(){console.log("login",{email:t,password:c})}),[]);return Object(A.jsxs)(B,{handleSubmit:function(e){e.preventDefault(),console.log("send..."),t&&c&&i(v({email:t,password:c}))},title:"Sing In",children:[Object(A.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(A.jsx)(d.a,{type:"email",placeholder:"email...",value:t,onChange:function(e){return i(C(e.target.value))}})}),Object(A.jsx)(u.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(A.jsx)(d.a.Password,{type:"password",placeholder:"password...",value:c,onChange:function(e){return i(S(e.target.value))}})}),Object(A.jsx)(j.a,{loading:r,shape:"round",block:!0,type:"primary",htmlType:"submit",children:"ENTER"}),Object(A.jsx)("br",{}),Object(A.jsx)(j.a,{block:!0,type:"link",onClick:function(){return e.push("/account")},children:"create Acount"})]})},D=t(81),L=t(51),Y={name:"",last_name:"",nikename:""},J=function(){var e=Object(s.g)(),n=Object(l.c)(P),t=n.email,c=n.loading,r=Object(a.useState)(Y),i=Object(F.a)(r,2),o=i[0],b=i[1],m=Object(l.b)();Object(a.useEffect)((function(){console.log("login",{email:t})}),[]);var p=function(n){n.preventDefault(),console.log("create...",Object(L.a)(Object(L.a)({},o),{},{email:t})),m(y(Object(L.a)(Object(L.a)({},o),{},{email:t}))),b(Y),e.push("/login")},h=function(e){return function(n){var t=n.target.value;console.log(e,t),b(Object(L.a)(Object(L.a)({},o),{},Object(D.a)({},e,t)))}};return Object(A.jsxs)(B,{handleSubmit:p,title:"Create Account",children:[Object(A.jsx)(u.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your email!"}],children:Object(A.jsx)(d.a,{type:"text",placeholder:"name...",value:o.name,onChange:h("name")})}),Object(A.jsx)(u.a.Item,{label:"Last Name",name:"last-name",rules:[{required:!0,message:"Please input your email!"}],children:Object(A.jsx)(d.a,{type:"text",placeholder:"Last name...",value:o.last_name,onChange:h("last_name")})}),Object(A.jsx)(u.a.Item,{label:"Nikename",name:"nike-name",rules:[{required:!0,message:"Please input your email!"}],children:Object(A.jsx)(d.a,{type:"text",placeholder:"Nimename...",value:o.nikename,onChange:h("nikename")})}),Object(A.jsx)(u.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}],children:Object(A.jsx)(d.a,{type:"email",placeholder:"email...",value:t,onChange:function(e){return m(C(e.target.value))}})}),Object(A.jsx)(j.a,{loading:c,shape:"round",block:!0,type:"primary",htmlType:"submit",onClick:p,children:"CREARTE"}),Object(A.jsx)("br",{}),Object(A.jsx)(j.a,{block:!0,type:"link",onClick:function(){return e.push("/")},children:"Cancel"})]})},W=function(){return Object(A.jsxs)(s.d,{children:[Object(A.jsx)(s.b,{path:"/login",exact:!0,component:H}),Object(A.jsx)(s.b,{path:"/account",exact:!0,component:J}),Object(A.jsx)(s.b,{path:"/*",component:function(){return Object(A.jsx)(s.a,{to:"/login"})}})]})},K=function(){var e=Object(l.c)(I),n=function(){var n=Object(p.a)(m.a.mark((function n(){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.get("/api/user/"+e.id_account);case 2:t=n.sent,console.log("resp->",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return console.log("sesion->",e),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h3",{children:"Home page"}),Object(A.jsx)(j.a,{onClick:n,children:"Consultar"})]})},V=function(){return Object(A.jsxs)(s.d,{children:[Object(A.jsx)(s.b,{path:"/home",exact:!0,component:K}),Object(A.jsx)(s.b,{path:"/*",component:function(){return Object(A.jsx)(s.a,{to:"/home"})}})]})},$=(t(119),t(228)),z=t(229),G=t(230),M=t(231),Q=function(){return Object(A.jsxs)($.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(z.a,{}),children:"nav 1"},"1"),Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(G.a,{}),children:"nav 2"},"2"),Object(A.jsx)($.a.Item,{icon:Object(A.jsx)(M.a,{}),children:"nav 3"},"3")]})},U=t(232),X=t(233),Z=N.a.Header,ee=function(e){var n=e.collapsed,t=void 0!==n&&n,a=e.toggle,r=void 0===a?function(){}:a;return Object(A.jsx)(Z,{className:"site-layout-background",style:{padding:"3px 12px"},children:c.a.createElement(t?U.a:X.a,{className:"trigger",onClick:r})})},ne=N.a.Sider,te=N.a.Content,ae=N.a.Footer,ce=function(e){var n=e.children,t=void 0===n?null:n,c=Object(a.useState)(!1),r=Object(F.a)(c,2),i=r[0],o=r[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(ne,{trigger:null,collapsible:!0,collapsed:i,children:[Object(A.jsx)("div",{className:"logo",children:Object(A.jsx)("h2",{style:{color:"#FFF",margin:15},children:i?"CS":"Company Spy"})}),Object(A.jsx)(Q,{})]}),Object(A.jsxs)(N.a,{className:"site-layout",children:[Object(A.jsx)(ee,{collapsed:i,toggle:function(){o(!i)}}),Object(A.jsx)(te,{className:"site-layout-background",style:{margin:"24px 16px",padding:24},children:t}),Object(A.jsx)(ae,{style:{textAlign:"center"},children:" Company SPY \xa92021 "})]})]})},re=function(){return Object(A.jsx)(o.a,{children:Object(A.jsx)(s.d,{children:Object(A.jsx)(ce,{children:Object(A.jsx)(s.b,{path:"/",component:V})})})})},ie=function(){return Object(A.jsx)(o.a,{children:Object(A.jsx)(s.d,{children:Object(A.jsx)(s.b,{path:"/",component:W})})})},oe=function(){return null!==Object(l.c)(I)?Object(A.jsx)(re,{}):Object(A.jsx)(ie,{})};var se=function(){return Object(A.jsx)(N.a,{style:{position:"absolute",left:0,right:0,bottom:0,top:0},children:Object(A.jsx)(oe,{})})};function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var ue=Object(h.b)("counter/fetchCount",function(){var e=Object(p.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),de=Object(h.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(ue.pending,(function(e){e.status="loading"})).addCase(ue.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),je=de.actions,be=(je.increment,je.decrement,je.incrementByAmount,de.reducer),me=Object(h.a)({reducer:{counter:be,login:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(221);i.a.render(Object(A.jsx)(l.a,{store:me,children:Object(A.jsx)(se,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[222,1,2]]]);
//# sourceMappingURL=main.60102963.chunk.js.map